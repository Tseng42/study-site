// 登入狀態管理:等待 Firebase 確認登入狀態,沒登入就顯示全螢幕登入畫面並卡住,
// 直到使用者用 Google 帳號登入成功才放行。
import { auth } from './firebase-init.js';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js';
import { el, icon } from './render.js';

const provider = new GoogleAuthProvider();

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
    const errorEl = el('p', { class: 'auth-gate-error' }, '');
    const overlay = el('div', { class: 'auth-gate' }, [
      el('div', { class: 'auth-gate-card' }, [
        el('div', { class: 'auth-gate-icon' }, icon('book', { size: 26 })),
        el('h1', {}, '學測複習站'),
        el('p', { class: 'auth-gate-desc' }, '登入後,進度、測驗紀錄跟錯題本會存在你的帳號底下,換裝置也看得到同一份。'),
        btn,
        errorEl,
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
        btn.disabled = false;
        btn.innerHTML = '';
        btn.append(icon('chevronRight', { size: 16 }), '使用 Google 登入');
        errorEl.textContent = '登入失敗,請再試一次。';
      }
    });
  });
}
