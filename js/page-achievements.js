// 成就徽章的完整分類牆,從個人資料頁獨立出來成自己的一頁(2026-09,原本整面
// 徽章牆塞在個人資料頁裡一次全部攤開,使用者覺得太滿,改成從頭像下拉選單進來)。
// 「已看過」的標記(NEW 標籤/發光動畫/頭像紅點的清除)只在這一頁做——只有真正
// 點進來看過完整徽章牆,才算「看過」。
import { getAchievementState, getNewlyUnlockedIds, CATEGORIES } from './achievements.js';
import { markAchievementsSeen } from './storage.js';
import { el, icon } from './render.js';
import { initHeader, renderUserMenu } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

renderAchievements();

function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  const achievements = getAchievementState();
  // 先算好這次有哪些是「已解鎖但還沒看過」的,渲染完馬上標記已看過 ——
  // 下次再進這個頁面就不會重複顯示 NEW 標籤/慶祝效果了。
  const newlyUnlocked = new Set(getNewlyUnlockedIds(achievements));

  const earnedCount = achievements.filter((a) => a.earned).length;
  const summaryEl = document.getElementById('achievements-summary');
  if (summaryEl) summaryEl.textContent = `${earnedCount}/${achievements.length} 已解鎖`;

  for (const cat of CATEGORIES) {
    const items = achievements.filter((a) => a.category === cat.id);
    if (!items.length) continue;
    const catEarned = items.filter((a) => a.earned).length;

    const section = el('div', { class: 'achievement-category' });
    section.append(
      el('div', { class: 'achievement-category-header' }, [
        el('span', { class: 'achievement-category-icon' }, icon(cat.icon, { size: 16 })),
        el('span', { class: 'achievement-category-label' }, cat.label),
        el('span', { class: 'achievement-category-count' }, `${catEarned}/${items.length}`),
      ])
    );

    const grid = el('div', { class: 'achievements-grid' });
    for (const a of items) {
      const isMystery = a.secret && !a.earned;
      const isNew = newlyUnlocked.has(a.id);
      const card = el('div', {
        class: `achievement-card tier-${a.tier} ${a.earned ? 'is-earned' : 'is-locked'} ${isMystery ? 'is-secret-locked' : ''} ${isNew ? 'is-new' : ''}`,
      });
      const cardIcon = isMystery ? 'question' : a.earned ? 'star' : 'lock';
      card.append(
        el('div', { class: 'achievement-icon' }, icon(cardIcon, { size: 18 })),
        el('div', { class: 'achievement-body' }, [
          el('div', { class: 'achievement-title' }, isMystery ? '？？？' : a.title),
          el('div', { class: 'achievement-desc' }, isMystery ? '隱藏成就,達成後才會揭曉條件' : a.desc),
          isMystery ? null : el('div', { class: 'achievement-progress' }, a.progress),
        ])
      );
      if (isNew) card.append(el('span', { class: 'achievement-new-badge' }, 'NEW'));
      grid.append(card);
    }
    section.append(grid);
    container.append(section);
  }

  markAchievementsSeen(achievements.filter((a) => a.earned).map((a) => a.id));
}
