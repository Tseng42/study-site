// 登入狀態管理:等待 Firebase 確認登入狀態,沒登入就顯示全螢幕登入畫面並卡住,
// 直到使用者用 Google 帳號登入成功才放行。
//
// 用整頁跳轉(signInWithRedirect)而不是彈出視窗(signInWithPopup),
// 在手機瀏覽器上更穩定,較不容易卡在登入畫面。
// 註:LINE、Messenger 等 App 內建的小瀏覽器,Google 基於安全政策會直接擋掉登入,
// 這不是這裡能修的,使用者需要改用「在瀏覽器中開啟」或複製連結貼到 Safari/Chrome。
import { auth } from './firebase-init.js';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js';
import { el, icon } from './render.js';

const provider = new GoogleAuthProvider();

let redirectError = null;
const redirectResultReady = getRedirectResult(auth).catch((err) => {
  redirectError = err;
  return null;
});

let resolveInitialUser;
const initialUserReady = new Promise((resolve) => {
  resolveInitialUser = resolve;
});
let initialResolved = false;
onAuthStateChanged(auth, (user) => {
  if (!initialResolved) {
    initialResolved = true;
    resolveInitialUser(user);
  }
});

export function getCurrentUser() {
  return auth.currentUser;
}

export function signOutUser() {
  return signOut(auth);
}

export async function ensureSignedIn() {
  await redirectResultReady;
  const initialUser = await initialUserReady;
  if (initialUser) return initialUser;
  return waitForLogin();
}

function waitForLogin() {
  return new Promise((resolve) => {
    const btn = el('button', { class: 'btn-pill btn-pill-dark', id: 'auth-gate-btn' }, [
      icon('chevronRight', { size: 16 }),
      '使用 Google 登入',
    ]);
    const errorText = redirectError
      ? `登入失敗:${redirectError.code || redirectError.message || '請再試一次'}`
      : '';
    const errorEl = el('p', { class: 'auth-gate-error' }, errorText);
    const overlay = el('div', { class: 'auth-gate' }, [
      el('div', { class: 'auth-gate-card' }, [
        el('div', { class: 'auth-gate-icon' }, icon('book', { size: 26 })),
        el('h1', {}, '學測複習站'),
        el('p', { class: 'auth-gate-desc' }, '登入後,進度、測驗紀錄跟錯題本會存在你的帳號底下,換裝置也看得到同一份。'),
        btn,
        errorEl,
        el('p', { class: 'auth-gate-hint' }, '如果是從 LINE 或訊息 App 裡點連結進來,請改用「在瀏覽器中開啟」,不然 Google 登入會被擋掉。'),
      ]),
    ]);
    document.body.append(overlay);

    // signInWithRedirect 會直接離開這個頁面前往 Google 登入,
    // 完成後導回來時,ensureSignedIn() 會在新的頁面載入中自然拿到登入結果,不需要在這裡 resolve。
    btn.addEventListener('click', () => {
      btn.disabled = true;
      btn.textContent = '登入中...';
      signInWithRedirect(auth, provider);
    });
  });
}
