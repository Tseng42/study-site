import { getAllSubjects } from './subjects-registry.js';
import { getSubjectProgress, getQuizResults, isUnitCompleted } from './storage.js';
import { getReviewableWrongQuestions } from './wrong-utils.js';
import { el, progressBar, subjectIcon, icon, blobDecoration } from './render.js';
import { initHeader, renderUserMenu, renderExamDraftNotice } from './layout.js';
import { getDaysRemaining, getStudyPhase, suggestFocusSubjects } from './study-plan.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

const subjects = getAllSubjects();

renderDashHeader();
// 有作答到一半的模擬考,放在最上面提醒,不然離開頁面後很容易忘記還有一份在計時。
const draftHost = el('div');
document.getElementById('study-plan-card').before(draftHost);
renderExamDraftNotice(draftHost);
renderStudyPlanCard();
renderSubjectCards();

// 首頁最上面的主要按鈕:直接接著上次讀到的地方。沒有作答紀錄(新使用者)就從建議多花
// 時間的那一科第一個還沒完成的單元開始。單元都完成了就回傳 null,不顯示這個按鈕。
function findResumeTarget() {
  const hasContent = (u) => !!(u.note?.sections?.length || u.quiz?.length);
  const nextUnfinished = (subject, fromIndex = 0) =>
    subject.units.slice(fromIndex).find((u) => hasContent(u) && !isUnitCompleted(subject.id, u.id));

  const recent = getQuizResults().slice().sort((a, b) => new Date(b.takenAt) - new Date(a.takenAt));
  for (const r of recent) {
    const subject = subjects.find((s) => s.id === r.subjectId);
    const index = subject ? subject.units.findIndex((u) => u.id === r.unitId) : -1;
    if (index === -1) continue; // 歷屆試題之類沒有單元頁的紀錄
    // 上次的單元還沒標完成就接著讀它,標完了就往後找下一個沒完成的,後面都完成了就回頭找第一個。
    const unit = nextUnfinished(subject, index) || nextUnfinished(subject);
    if (unit) return { subject, unit, resumed: unit.id === r.unitId };
  }
  for (const { subject } of suggestFocusSubjects(subjects, subjects.length)) {
    const unit = nextUnfinished(subject);
    if (unit) return { subject, unit, resumed: false };
  }
  return null;
}

function renderDashHeader() {
  const container = document.getElementById('dash-header');
  const today = new Date();
  const weekday = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'][today.getDay()];

  const blob = blobDecoration('#f2a93b');
  blob.classList.add('dash-blob');

  const wrongCount = getReviewableWrongQuestions().length;
  const resume = findResumeTarget();
  const actions = el('div', { class: 'dash-actions' });
  if (resume) {
    actions.append(
      el('a', { href: `unit.html?subject=${resume.subject.id}&unit=${resume.unit.id}`, class: 'btn-pill btn-pill-dark dash-cta' }, [
        el('span', { class: 'dash-cta-label' }, `${resume.resumed ? '繼續' : '下一個'}:${resume.subject.name} ${resume.unit.title}`),
        icon('chevronRight', { size: 16 }),
      ])
    );
  }
  // 有待複習的錯題才強調錯題本;還沒有錯題的新使用者,主要按鈕應該是開始讀,不是去看一個空清單。
  actions.append(
    el('a', { href: 'wrongbook.html', class: `btn-pill ${resume ? 'btn-pill-outline' : 'btn-pill-dark'}` }, [
      icon('flag', { size: 16 }),
      wrongCount ? `錯題本(${wrongCount})` : '錯題本',
    ])
  );

  container.append(
    el('div', {}, [
      el('h1', {}, '嗨,開始今天的複習吧'),
      el('p', { class: 'dash-subtitle' }, `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}(${weekday})`),
    ]),
    actions,
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
    const progress = getSubjectProgress(subject.id, subject.units);
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
