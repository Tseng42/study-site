import { getAllSubjects } from './subjects-registry.js';
import { getSubjectProgress } from './storage.js';
import { el, progressBar, subjectIcon, icon, blobDecoration } from './render.js';
import { initHeader, renderUserMenu } from './layout.js';
import { getDaysRemaining, getStudyPhase, suggestFocusSubjects } from './study-plan.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

const subjects = getAllSubjects();

renderDashHeader();
renderStudyPlanCard();
renderSubjectCards();

function renderDashHeader() {
  const container = document.getElementById('dash-header');
  const today = new Date();
  const weekday = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'][today.getDay()];

  const blob = blobDecoration('#f2a93b');
  blob.classList.add('dash-blob');

  container.append(
    el('div', {}, [
      el('h1', {}, '嗨,開始今天的複習吧'),
      el('p', { class: 'dash-subtitle' }, `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}(${weekday})`),
    ]),
    el('a', { href: 'wrongbook.html', class: 'btn-pill btn-pill-dark' }, [icon('flag', { size: 16 }), '前往錯題本']),
    blob
  );
}

function renderStudyPlanCard() {
  const container = document.getElementById('study-plan-card');
  const days = getDaysRemaining();
  const phase = getStudyPhase(days);
  const focus = suggestFocusSubjects(subjects);

  container.append(
    el('div', { class: 'plan-card' }, [
      el('div', { class: 'plan-card-top' }, [
        el('div', { class: 'plan-card-icon' }, icon('clock', { size: 20 })),
        el('div', {}, [
          el('div', { class: 'plan-card-days' }, [
            `距離學測還有 `,
            el('strong', {}, `${days}`),
            ` 天`,
          ]),
          el('div', { class: 'plan-card-phase' }, phase.label),
        ]),
      ]),
      el('p', { class: 'plan-card-tip' }, phase.tip),
      focus.length
        ? el(
            'div',
            { class: 'plan-card-focus' },
            [el('span', { class: 'plan-card-focus-label' }, '這週建議多花時間:')].concat(
              focus.map((f) =>
                el('a', { class: 'plan-focus-chip', href: `subject.html?subject=${f.subject.id}` }, [
                  `${f.subject.name}`,
                  el('span', { class: 'plan-focus-reason' }, `· ${f.reason}`),
                ])
              )
            )
          )
        : null,
    ])
  );
}

function renderSubjectCards() {
  const container = document.getElementById('subject-list');
  for (const subject of subjects) {
    const progress = getSubjectProgress(subject.id, subject.units.length);
    const card = el('a', { class: 'subject-card', href: `subject.html?subject=${subject.id}` });
    card.style.setProperty('--card-color', subject.color);
    card.append(
      el('div', { class: 'subject-card-top' }, [
        el('div', { class: 'subject-card-icon' }, subjectIcon(subject)),
        el('span', { class: 'subject-card-percent' }, `${progress.percent}%`),
      ]),
      el('div', {}, [
        el('h3', {}, subject.name),
        el('p', { class: 'subject-card-meta' }, `${progress.completed} / ${progress.total} 單元`),
      ]),
      progressBar(progress.percent)
    );
    container.append(card);
  }
}
