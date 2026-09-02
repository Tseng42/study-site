import { icon, el } from './render.js';
import { signOutUser } from './auth.js';
import { getAchievementState, getHighestTier, TIER_LABEL } from './achievements.js';

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

  // 頭像外框顏色反映目前已解鎖的最高成就等級,點頭像可以直接到個人資料頁
  // 看完整的成就徽章牆跟學習成效。
  const tier = getHighestTier(getAchievementState());
  const avatarLink = el(
    'a',
    { href: 'profile.html', class: 'user-avatar-link', title: tier ? `個人資料(已解鎖${TIER_LABEL[tier]}牌成就)` : '個人資料' },
    avatar
  );
  if (tier) avatarLink.classList.add(`avatar-tier-${tier}`);

  const signOutBtn = el('button', { class: 'user-signout-btn', title: '登出' }, '登出');
  signOutBtn.addEventListener('click', async () => {
    // 登出後整頁導回首頁重新載入,讓所有模組的登入狀態(尤其 cloud-sync.js
    // 記住的 currentUid)徹底重置,避免登出後頁面繼續用舊帳號的狀態寫入資料。
    signOutBtn.disabled = true;
    await signOutUser();
    location.href = 'index.html';
  });

  container.append(avatarLink, signOutBtn);
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
