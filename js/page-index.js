import { getAllSubjects, getSubject, getUnit, getQuestion } from './subjects-registry.js';
import { getSubjectProgress, getQuizResults, getWrongQuestions } from './storage.js';
import { el, progressBar, subjectIcon, icon, blobDecoration } from './render.js';
import { initHeader, formatRelativeDate } from './layout.js';

initHeader();

const subjects = getAllSubjects();

renderDashHeader();
renderSubjectCards();
renderReviewList();
renderStats();
renderEncourageCard();
renderRecentQuizzes();

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

function renderReviewList() {
  const container = document.getElementById('review-list');
  const wrongs = getWrongQuestions().slice(0, 5);

  if (!wrongs.length) {
    container.append(el('div', { class: 'timeline-row-empty' }, '目前沒有待複習的錯題,繼續保持!'));
    return;
  }

  for (const w of wrongs) {
    const subject = getSubject(w.subjectId);
    const unit = getUnit(w.subjectId, w.unitId);
    const question = getQuestion(w.subjectId, w.unitId, w.questionId);
    if (!question) continue;

    const row = el('a', {
      class: 'timeline-row',
      href: `unit.html?subject=${w.subjectId}&unit=${w.unitId}`,
    });
    row.style.setProperty('--row-color', subject?.color || '#201c2b');
    row.append(
      el('div', { class: 'timeline-row-body' }, [
        el('div', { class: 'timeline-row-title' }, question.question),
        el('div', { class: 'timeline-row-meta' }, `${subject?.name || ''} · ${unit?.title || ''}`),
      ]),
      icon('chevronRight', { size: 16 })
    );
    container.append(row);
  }
}

function renderStats() {
  const container = document.getElementById('stats-tiles');
  const totalUnits = subjects.reduce((sum, s) => sum + s.units.length, 0);
  const completedUnits = subjects.reduce(
    (sum, s) => sum + getSubjectProgress(s.id, s.units.length).completed,
    0
  );

  const allResults = getQuizResults();
  let totalAnswered = 0;
  let totalCorrect = 0;
  const studyDays = new Set();
  for (const r of allResults) {
    totalAnswered += r.answers.length;
    totalCorrect += r.answers.filter((a) => a.isCorrect).length;
    studyDays.add(new Date(r.takenAt).toDateString());
  }
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const tiles = [
    { iconName: 'layers', value: `${completedUnits}/${totalUnits}`, label: '已完成單元' },
    { iconName: 'target', value: `${accuracy}%`, label: '測驗正確率' },
    { iconName: 'trendUp', value: `${studyDays.size}`, label: '已作答天數' },
  ];
  for (const t of tiles) {
    container.append(
      el('div', { class: 'stat-tile' }, [
        el('div', { class: 'stat-tile-icon' }, icon(t.iconName, { size: 18 })),
        el('div', { class: 'stat-tile-value' }, t.value),
        el('div', { class: 'stat-tile-label' }, t.label),
      ])
    );
  }
}

function renderEncourageCard() {
  const container = document.getElementById('encourage-card');
  const totalUnits = subjects.reduce((sum, s) => sum + s.units.length, 0);
  const completedUnits = subjects.reduce(
    (sum, s) => sum + getSubjectProgress(s.id, s.units.length).completed,
    0
  );
  const remaining = totalUnits - completedUnits;
  const message =
    completedUnits === 0
      ? '從一個單元開始,今天就是起點。'
      : `已經完成 ${completedUnits} 個單元,還有 ${remaining} 個,穩穩前進。`;

  container.append(
    el('div', { class: 'encourage-card' }, [
      icon('trendUp', { size: 28 }),
      el('div', { class: 'encourage-card-text' }, [
        el('div', { class: 'encourage-card-title' }, message),
        el('div', { class: 'encourage-card-sub' }, '每完成一個單元,離學測就更近一步。'),
      ]),
    ])
  );
}

function renderRecentQuizzes() {
  const container = document.getElementById('recent-quizzes');
  const results = getQuizResults()
    .slice()
    .sort((a, b) => new Date(b.takenAt) - new Date(a.takenAt))
    .slice(0, 6);

  if (!results.length) {
    container.append(el('div', { class: 'timeline-row-empty' }, '還沒有測驗紀錄,去單元頁面試試看吧。'));
    return;
  }

  for (const r of results) {
    const subject = getSubject(r.subjectId);
    const unit = getUnit(r.subjectId, r.unitId);
    const row = el('a', {
      class: 'timeline-row',
      href: `unit.html?subject=${r.subjectId}&unit=${r.unitId}`,
    });
    row.style.setProperty('--row-color', subject?.color || '#201c2b');
    row.append(
      el('div', { class: 'timeline-row-body' }, [
        el('div', { class: 'timeline-row-title' }, unit?.title || r.unitId),
        el(
          'div',
          { class: 'timeline-row-meta' },
          `${subject?.name || ''} · ${formatRelativeDate(r.takenAt)} · ${r.score}/${r.total} 分`
        ),
      ])
    );
    container.append(row);
  }
}
