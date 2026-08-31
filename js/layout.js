import { icon, el } from './render.js';
import { signOutUser } from './auth.js';

export function initHeader() {
  const mark = document.getElementById('brand-mark');
  if (mark) mark.append(icon('book', { size: 18 }));
}

export function renderUserMenu(user) {
  const container = document.getElementById('user-menu');
  if (!container || !user) return;

  const avatar = user.photoURL
    ? el('img', { src: user.photoURL, alt: '', class: 'user-avatar' })
    : el('span', { class: 'user-avatar user-avatar-fallback' }, (user.displayName || '?').slice(0, 1));

  const signOutBtn = el('button', { class: 'user-signout-btn', title: '登出' }, '登出');
  signOutBtn.addEventListener('click', () => signOutUser());

  container.append(avatar, signOutBtn);
}

export function formatRelativeDate(isoString) {
  const date = new Date(isoString);
  const now = new Date();
  const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const diffDays = Math.round((startOfDay(now) - startOfDay(date)) / 86400000);
  if (diffDays === 0) return '今天';
  if (diffDays === 1) return '昨天';
  if (diffDays < 7) return `${diffDays} 天前`;
  return `${date.getMonth() + 1}/${date.getDate()}`;
}
