// 登入狀態管理:等待 Firebase 確認登入狀態,沒登入就顯示全螢幕登入畫面並卡住,
// 直到使用者用 Google 帳號登入成功才放行。
//
// 優先用彈出視窗(signInWithPopup)登入:大多數瀏覽器下都可靠,也不受
// Safari 隱私保護機制影響(整頁跳轉的 signInWithRedirect 在部分手機 Safari
// 上,離開頁面再導回來的過程中偶爾會把登入狀態弄丟)。只有在視窗真的被
// 瀏覽器擋掉(auth/popup-blocked 等)時,才自動退回整頁跳轉。
// 註:LINE、Messenger 等 App 內建的小瀏覽器,Google 基於安全政策會直接擋掉
// 登入,這不是這裡能修的,使用者需要改用「在瀏覽器中開啟」或複製連結貼到
// Safari/Chrome。
import { auth } from './firebase-init.js';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js';
import { el, icon } from './render.js';

const provider = new GoogleAuthProvider();
const POPUP_FALLBACK_CODES = new Set([
  'auth/popup-blocked',
  'auth/operation-not-supported-in-this-environment',
  'auth/popup-closed-by-user',
]);

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

    btn.addEventListener('click', async () => {
      btn.disabled = true;
      btn.textContent = '登入中...';
      errorEl.textContent = '';
      try {
        const result = await signInWithPopup(auth, provider);
        overlay.remove();
        resolve(result.user);
      } catch (err) {
        if (POPUP_FALLBACK_CODES.has(err.code)) {
          // 視窗被擋掉,改用整頁跳轉當備案;跳轉後這個頁面會離開,
          // 登入完成回來時 ensureSignedIn() 會在新的頁面載入中自然拿到結果。
          btn.textContent = '正在改用其他方式登入...';
          signInWithRedirect(auth, provider);
          return;
        }
        btn.disabled = false;
        btn.innerHTML = '';
        btn.append(icon('chevronRight', { size: 16 }), '使用 Google 登入');
        errorEl.textContent = `登入失敗:${err.code || err.message || '請再試一次'}`;
      }
    });
  });
}
