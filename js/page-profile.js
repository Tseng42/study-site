import { getAllSubjects, getSubject, getUnit, getQuestion } from './subjects-registry.js';
import { getSubjectProgress, getQuizResults, getWrongQuestions, getExamDate, setExamDate, getMockExamHistory } from './storage.js';
import { resolveExamDate, getDaysRemaining } from './study-plan.js';
import { getAchievementState } from './achievements.js';
import { el, icon } from './render.js';
import { initHeader, renderUserMenu, formatRelativeDate } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

const subjects = getAllSubjects();

// 歷屆試題(unitId 形如 math-real-111)沒有對應的 unit.html 頁面可以連回去,
// 點進去要導回歷屆試題模擬考頁,而不是導向一個查無單元的 unit.html。
function unitHref(subjectId, unitId) {
  if (unitId?.startsWith('math-real-')) return `real-exam.html?subject=${subjectId}`;
  return `unit.html?subject=${subjectId}&unit=${unitId}`;
}

renderStats();
renderEncourageCard();
renderExamDateSettings();
renderAchievements();
// 圖表靠外部 CDN 載入的 Chart.js,萬一 CDN 掛掉或被擋,不能讓整段同步腳本
// 中斷,導致後面的複習清單、測驗紀錄也一起消失 —— 那些其實比圖表更有用。
try {
  renderCompletionChart();
  renderAccuracyChart();
} catch (err) {
  console.error('圖表渲染失敗', err);
}
renderReviewList();
renderRecentQuizzes();
renderMockExamHistory();

function subjectAccuracy(subjectId) {
  const results = getQuizResults(subjectId);
  let correct = 0;
  let answered = 0;
  for (const r of results) {
    answered += r.answers.length;
    correct += r.answers.filter((a) => a.isCorrect).length;
  }
  return answered ? Math.round((correct / answered) * 100) : 0;
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

function toDateInputValue(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function renderExamDateSettings() {
  const container = document.getElementById('exam-date-form');
  const input = el('input', {
    type: 'date',
    id: 'exam-date-input',
    class: 'exam-date-input',
    value: toDateInputValue(resolveExamDate()),
  });
  const saveBtn = el('button', { class: 'btn-pill btn-pill-outline' }, '儲存');
  const statusText = el('span', { class: 'exam-date-status' }, `距離考試還有 ${getDaysRemaining()} 天`);
  const hint = el('p', { class: 'exam-date-hint' }, '還沒設定過,目前用的是預設日期,設定後全站的倒數天數都會跟著改。');
  hint.hidden = !!getExamDate();

  saveBtn.addEventListener('click', () => {
    if (!input.value) return;
    setExamDate(input.value);
    statusText.textContent = `距離考試還有 ${getDaysRemaining()} 天`;
    hint.hidden = true;
  });

  container.append(
    el('div', { class: 'exam-date-row' }, [
      el('label', { for: 'exam-date-input' }, '目標考試日期'),
      input,
      saveBtn,
    ]),
    statusText,
    hint
  );
}

function renderAchievements() {
  const container = document.getElementById('achievements-grid');
  const achievements = getAchievementState();

  for (const a of achievements) {
    const card = el('div', { class: `achievement-card tier-${a.tier} ${a.earned ? 'is-earned' : 'is-locked'}` });
    card.append(
      el('div', { class: 'achievement-icon' }, icon(a.earned ? 'star' : 'lock', { size: 18 })),
      el('div', { class: 'achievement-body' }, [
        el('div', { class: 'achievement-title' }, a.title),
        el('div', { class: 'achievement-desc' }, a.desc),
        el('div', { class: 'achievement-progress' }, a.progress),
      ])
    );
    container.append(card);
  }
}

function baseChartOptions() {
  return {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: { callback: (v) => `${v}%`, font: { family: "'Noto Sans TC', sans-serif" } },
        grid: { color: 'rgba(32,28,43,0.08)' },
      },
      x: {
        ticks: { font: { family: "'Noto Sans TC', sans-serif", weight: '600' } },
        grid: { display: false },
      },
    },
  };
}

function renderCompletionChart() {
  const ctx = document.getElementById('chart-completion');
  const data = subjects.map((s) => getSubjectProgress(s.id, s.units.length).percent);
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: subjects.map((s) => s.name),
      datasets: [
        {
          data,
          backgroundColor: subjects.map((s) => s.color),
          borderRadius: 8,
          maxBarThickness: 48,
        },
      ],
    },
    options: baseChartOptions(),
  });
}

function renderAccuracyChart() {
  const ctx = document.getElementById('chart-accuracy');
  const data = subjects.map((s) => subjectAccuracy(s.id));
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: subjects.map((s) => s.name),
      datasets: [
        {
          data,
          backgroundColor: subjects.map((s) => s.color),
          borderRadius: 8,
          maxBarThickness: 48,
        },
      ],
    },
    options: baseChartOptions(),
  });
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
      href: unitHref(w.subjectId, w.unitId),
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
      href: unitHref(r.subjectId, r.unitId),
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

// 「模擬考紀錄」跟上面的「最近測驗紀錄」不一樣:後者是每個單元練習/測驗各自一筆,
// 模擬考(含歷屆試題)則是一次考試一筆整體摘要(含估計級分),見 storage.js 的
// addMockExamResult/getMockExamHistory。歷屆試題的 subjectId 是虛擬的 'math-real',
// 不是真正的科目,所以標籤要特別處理,連結也導回歷屆試題頁而不是一般模擬考頁。
function mockExamLabel(record) {
  if (record.subjectId === 'math-real') return `數學A(歷屆試題)${record.examLabel ? ' · ' + record.examLabel : ''}`;
  const subject = getSubject(record.subjectId);
  return `${subject?.name || record.subjectId} 模擬考`;
}

function mockExamHref(record) {
  return record.subjectId === 'math-real' ? 'real-exam.html' : 'mockexam.html';
}

function renderMockExamHistory() {
  const container = document.getElementById('mockexam-history');
  const records = getMockExamHistory()
    .slice()
    .sort((a, b) => new Date(b.takenAt) - new Date(a.takenAt))
    .slice(0, 8);

  if (!records.length) {
    container.append(el('div', { class: 'timeline-row-empty' }, '還沒有模擬考紀錄,去模擬考頁面試試看吧。'));
    return;
  }

  for (const r of records) {
    const subject = r.subjectId === 'math-real' ? getSubject('math') : getSubject(r.subjectId);
    const row = el('a', { class: 'timeline-row', href: mockExamHref(r) });
    row.style.setProperty('--row-color', subject?.color || '#201c2b');
    const writtenNote = r.writtenTotal ? ` · 非選 ${r.writtenScore}/${r.writtenTotal}` : '';
    row.append(
      el('div', { class: 'timeline-row-body' }, [
        el('div', { class: 'timeline-row-title' }, mockExamLabel(r)),
        el(
          'div',
          { class: 'timeline-row-meta' },
          `${formatRelativeDate(r.takenAt)} · ${r.score}/${r.total} 分${writtenNote} · 估計 ${r.estimatedBand} 級分`
        ),
      ])
    );
    container.append(row);
  }
}
