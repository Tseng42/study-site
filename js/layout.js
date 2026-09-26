import { icon, el } from './render.js';
import { signOutUser } from './auth.js';
import { getAchievementState, getHighestTier, getNewlyUnlockedIds, TIER_LABEL } from './achievements.js';

// 每個頁面都會 import 這個檔案來呼叫 initHeader(),所以在這裡註冊 service worker
// 剛好能確保每個頁面載入時都會註冊到,不用每個 page-*.js 各自重複一次。
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((registration) => {
        watchForUpdate(registration);
        // 從主畫面加入的 PWA 常常是「從背景切回前景」而不是重新整理頁面,
        // 瀏覽器自己排程的更新檢查不一定會剛好觸發到,切回前景時主動補問一次。
        document.addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'visible') registration.update();
        });
      })
      .catch(() => {});
  });
}

// 偵測到新版本的 service worker 裝好(且不是第一次安裝,是「舊版本已經在跑」時
// 發現的新版),就顯示一個小提示條讓使用者自己決定何時重新整理——不強制蓋掉
// 畫面(例如測驗寫到一半),但也不再是完全無聲更新。
function watchForUpdate(registration) {
  registration.addEventListener('updatefound', () => {
    const newWorker = registration.installing;
    if (!newWorker) return;
    newWorker.addEventListener('statechange', () => {
      if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
        showUpdateBanner();
      }
    });
  });
}

// 畫面底部的小提示條(有新版本、雲端資料晚到、錯題本復原等共用):一段文字加一個按鈕。
// 回傳提示條本身,呼叫端可以自己決定要不要自動消失。
export function showBanner({ id, text, buttonLabel, onClick }) {
  document.getElementById(id)?.remove();
  const btn = el('button', { type: 'button', class: 'update-banner-btn' }, buttonLabel);
  btn.addEventListener('click', onClick);
  const banner = el('div', { id, class: 'update-banner', role: 'status' }, [
    el('span', { class: 'update-banner-text' }, text),
    btn,
  ]);
  document.body.append(banner);
  return banner;
}

function showUpdateBanner() {
  if (document.getElementById('update-banner')) return;
  showBanner({ id: 'update-banner', text: '有新版本可以使用', buttonLabel: '重新整理', onClick: () => location.reload() });
}

// 換裝置或久沒開時,雲端資料如果超過 3 秒才回來(見 cloud-sync.js),頁面早就用舊的
// 本機資料畫好了;資料真的有變動時提示一聲,讓使用者自己決定要不要重新整理。
window.addEventListener('studysite:cloud-updated', () => {
  if (document.getElementById('update-banner')) return;
  showBanner({ id: 'sync-banner', text: '已同步雲端上較新的資料', buttonLabel: '重新整理', onClick: () => location.reload() });
});

export function initHeader() {
  const mark = document.getElementById('brand-mark');
  if (mark) mark.append(icon('book', { size: 18 }));
  trackHeaderHeight();
  markCurrentNav();
  showLoadingPlaceholder();
}

// 手機版導覽列比桌機版矮,而且模擬考的計時列、測驗的進度列都要 sticky 貼在導覽列
// 正下方,所以把導覽列實際高度量出來寫進 --header-h,不用在 CSS 裡猜。
function trackHeaderHeight() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const apply = () => document.documentElement.style.setProperty('--header-h', `${Math.round(header.getBoundingClientRect().height)}px`);
  apply();
  if ('ResizeObserver' in window) new ResizeObserver(apply).observe(header);
  else window.addEventListener('resize', apply);
}

function markCurrentNav() {
  document.querySelector('.nav-pill.is-active')?.setAttribute('aria-current', 'page');
}

// 每一頁都要先等登入狀態、雲端資料才畫得出內容(慢網路可能等好幾秒),這段時間
// main 是空的,看起來像壞掉。先放一行載入中,renderUserMenu() 在資料準備好之後拿掉。
function showLoadingPlaceholder() {
  const main = document.querySelector('main');
  if (!main || document.getElementById('page-loading')) return;
  main.prepend(el('p', { id: 'page-loading', class: 'page-loading', role: 'status' }, '載入中…'));
}

// 點頭像彈出的小選單:個人資料/成就徽章/登出都收在裡面,不再各自散在 header 上。
export function renderUserMenu(user) {
  document.getElementById('page-loading')?.remove();
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
    dropdown.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
  }
  function openDropdown() {
    dropdown.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
  }
  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.classList.contains('is-open')) closeDropdown();
    else openDropdown();
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
