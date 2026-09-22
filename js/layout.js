import { icon, el } from './render.js';
import { signOutUser } from './auth.js';
import { getAchievementState, getHighestTier, getNewlyUnlockedIds, TIER_LABEL } from './achievements.js';

// 每個頁面都會 import 這個檔案來呼叫 initHeader(),所以在這裡註冊 service worker
// 剛好能確保每個頁面載入時都會註冊到,不用每個 page-*.js 各自重複一次。
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  });
}

export function initHeader() {
  const mark = document.getElementById('brand-mark');
  if (mark) mark.append(icon('book', { size: 18 }));
}

// 點頭像彈出的小選單:個人資料/成就徽章/登出都收在裡面,不再各自散在 header 上。
export function renderUserMenu(user) {
  const container = document.getElementById('user-menu');
  if (!container || !user) return;

  const avatar = user.photoURL
    ? el('img', { src: user.photoURL, alt: '', class: 'user-avatar' })
    : el('span', { class: 'user-avatar user-avatar-fallback' }, (user.displayName || '?').slice(0, 1));

  // 頭像外框顏色反映目前已解鎖的最高成就等級。有新解鎖但還沒在成就徽章頁看過的
  // 成就時,頭像跟選單裡的「成就徽章」項目都會多一個小紅點提示——「看過」的判斷/
  // 清除在 page-achievements.js 那邊做,這裡只讀狀態、不清除。
  const achievementState = getAchievementState();
  const tier = getHighestTier(achievementState);
  const hasNew = getNewlyUnlockedIds(achievementState).length > 0;

  const wrap = el('div', { class: 'user-menu-wrap' });
  const trigger = el(
    'button',
    {
      type: 'button',
      class: 'user-avatar-trigger',
      title: tier ? `帳號選單(已解鎖${TIER_LABEL[tier]}牌成就${hasNew ? '・有新解鎖的成就' : ''})` : '帳號選單',
      'aria-haspopup': 'menu',
      'aria-expanded': 'false',
    },
    avatar
  );
  if (tier) trigger.classList.add(`avatar-tier-${tier}`);
  if (hasNew) trigger.classList.add('avatar-has-new-achievement');

  const dropdown = el('div', { class: 'user-dropdown', role: 'menu' });
  dropdown.hidden = true;
  const profileItem = el('a', { href: 'profile.html', class: 'user-dropdown-item', role: 'menuitem' }, '個人資料');
  const achievementsItem = el(
    'a',
    { href: 'achievements.html', class: 'user-dropdown-item', role: 'menuitem' },
    [el('span', {}, '成就徽章'), hasNew ? el('span', { class: 'user-dropdown-dot' }) : null]
  );
  const signOutBtn = el('button', { type: 'button', class: 'user-dropdown-item user-dropdown-signout', role: 'menuitem' }, '登出');
  signOutBtn.addEventListener('click', async () => {
    // 登出後整頁導回首頁重新載入,讓所有模組的登入狀態(尤其 cloud-sync.js
    // 記住的 currentUid)徹底重置,避免登出後頁面繼續用舊帳號的狀態寫入資料。
    signOutBtn.disabled = true;
    await signOutUser();
    location.href = 'index.html';
  });
  dropdown.append(profileItem, achievementsItem, signOutBtn);

  function closeDropdown() {
    dropdown.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
  }
  function openDropdown() {
    dropdown.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
  }
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.hidden) openDropdown();
    else closeDropdown();
  });
  document.addEventListener('click', (e) => {
    if (!wrap.contains(e.target)) closeDropdown();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDropdown();
  });

  wrap.append(trigger, dropdown);
  container.append(wrap);
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
