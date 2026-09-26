import { getUnit, getSubject } from './subjects-registry.js';
import { isUnitCompleted, setUnitCompleted } from './storage.js';
import { el, renderNoteSections, icon, circularCheck } from './render.js';
import { initHeader, renderUserMenu } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';
import { prepareQuestions } from './quiz-utils.js';
import { runQuiz } from './quiz-runner.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

const params = new URLSearchParams(location.search);
const subjectId = params.get('subject');
const unitId = params.get('unit');
const unit = getUnit(subjectId, unitId);

// 「我已完成這個單元」的勾選框。測驗結束後的「標記單元完成」按鈕要同步它,所以留著參照。
let completionInput = null;

if (!unit) {
  document.getElementById('unit-content').append(el('p', {}, '找不到這個單元。'));
} else {
  document.title = `${unit.title} - 學測複習站`;
  renderHeader();
  renderNote();
  renderCompletion();
  renderQuizIntro();
  renderUnitNav();
}

function renderHeader() {
  const header = document.getElementById('unit-header');
  const hasNote = !!unit.note?.sections?.length;
  header.append(
    el('a', { href: `subject.html?subject=${subjectId}`, class: 'back-link' }, [
      icon('chevronLeft', { size: 14 }),
      '回科目列表',
    ]),
    el('h2', {}, unit.title),
    // 筆記可能很長(尤其手機上),想直接練題的人不用一路捲到底。
    ...(hasNote && unit.quiz?.length ? [el('a', { href: '#unit-quiz', class: 'jump-link' }, '直接做測驗 ↓')] : [])
  );
}

function renderNote() {
  const container = document.getElementById('unit-note');
  if (!unit.note?.sections?.length) return;
  container.append(el('h3', {}, '筆記重點'), renderNoteSections(unit.note.sections));
}

function renderCompletion() {
  const container = document.getElementById('unit-completion');
  container.className = 'completion-row';
  const { label, input } = circularCheck(isUnitCompleted(subjectId, unitId), (checked) => {
    setUnitCompleted(subjectId, unitId, checked);
  });
  completionInput = input;
  container.append(label, el('span', {}, '我已完成這個單元'));
}

// 依科目裡的單元順序,在頁面最下面放「上一單元/下一單元」,連續讀完一冊的課文
// 不用每一課都退回列表再點下一個。
function renderUnitNav() {
  const subject = getSubject(subjectId);
  const index = subject ? subject.units.findIndex((u) => u.id === unitId) : -1;
  if (index === -1) return;
  const prev = subject.units[index - 1];
  const next = subject.units[index + 1];
  if (!prev && !next) return;

  const link = (target, label, className) => {
    const a = el('a', { href: `unit.html?subject=${subjectId}&unit=${target.id}`, class: `unit-nav-link ${className}` }, [
      el('span', { class: 'unit-nav-label' }, label),
      el('span', { class: 'unit-nav-title' }, target.title),
    ]);
    a.style.setProperty('--row-color', subject.color);
    return a;
  };
  document.getElementById('unit-content').append(
    el('nav', { class: 'unit-nav', 'aria-label': '上一單元與下一單元' }, [
      prev ? link(prev, '← 上一單元', 'is-prev') : null,
      next ? link(next, '下一單元 →', 'is-next') : null,
    ])
  );
}

function renderQuizIntro() {
  const container = document.getElementById('unit-quiz');
  if (!unit.quiz?.length) {
    container.append(el('p', {}, '這個單元目前還沒有測驗題目。'));
    return;
  }

  const total = unit.quiz.length;
  container.append(el('h3', {}, `單元測驗(題庫共 ${total} 題)`));

  const presetCounts = [8, 15, 25].filter((n) => n < total);
  const countSelect = el('select', { class: 'quiz-count-select', id: 'quiz-count' }, [
    ...presetCounts.map((n) => el('option', { value: String(n) }, `每次 ${n} 題`)),
    el('option', { value: 'all' }, `全部 ${total} 題`),
  ]);
  countSelect.value = presetCounts.length ? String(presetCounts[Math.min(1, presetCounts.length - 1)]) : 'all';
  const getCount = () => (countSelect.value === 'all' ? total : Number(countSelect.value));

  const practiceBtn = el('button', { class: 'btn-pill btn-pill-outline' }, '練習模式(即時看答案)');
  const examBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '測驗模式(答完再看結果)');
  practiceBtn.addEventListener('click', () => startQuiz('practice', getCount()));
  examBtn.addEventListener('click', () => startQuiz('exam', getCount()));

  container.append(
    el('div', { class: 'quiz-count-row' }, [el('label', { for: 'quiz-count' }, '每次題數:'), countSelect]),
    el('div', { class: 'quiz-mode-select' }, [practiceBtn, examBtn])
  );
}

const DEFAULT_QUIZ_QUESTIONS = 8;

function startQuiz(mode, count = DEFAULT_QUIZ_QUESTIONS) {
  runQuiz(document.getElementById('unit-quiz'), {
    title: mode === 'practice' ? '練習模式' : '測驗模式',
    questions: prepareQuestions(unit.quiz, count),
    mode,
    locate: () => ({ subjectId, unitId }),
    restart: () => startQuiz(mode, count),
    extraActions: ({ wrongCount }) => {
      const actions = [];
      if (!isUnitCompleted(subjectId, unitId)) {
        const doneBtn = el('button', { class: 'btn-pill btn-pill-outline' }, [icon('check', { size: 14 }), '標記這個單元完成']);
        doneBtn.addEventListener('click', () => {
          if (completionInput) {
            completionInput.checked = true;
            completionInput.dispatchEvent(new Event('change'));
          }
          doneBtn.disabled = true;
          doneBtn.textContent = '已標記完成';
        });
        actions.push(doneBtn);
      }
      if (wrongCount) actions.push(el('a', { href: 'wrongbook.html', class: 'btn-pill btn-pill-outline' }, '前往錯題本'));
      return actions;
    },
  });
}
