import { getUnit, getSubject } from './subjects-registry.js';
import { isUnitCompleted, setUnitCompleted, upsertQuizResult, addQuizResult } from './storage.js';
import { el, renderNoteSections, icon, circularCheck, renderPassage, progressBar } from './render.js';
import { initHeader, renderUserMenu } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';
import { prepareQuestions, renderAnswerField, gradeAnswer, markAnswerFeedback, typeLabel, isAnswered } from './quiz-utils.js';

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
  const container = document.getElementById('unit-quiz');
  container.innerHTML = '';
  container.append(el('h3', {}, mode === 'practice' ? '練習模式' : '測驗模式'));

  const questions = prepareQuestions(unit.quiz, count);
  const userAnswers = new Array(questions.length).fill(null);
  const revealed = new Array(questions.length).fill(false);
  const fields = [];
  const questionRefs = [];
  const resultBar = el('div', { class: 'quiz-result-bar' });
  let finished = false;

  // 練習模式整份測驗共用一個紀錄 id,每答完一題就存一次(見 storage.js 的 upsertQuizResult),
  // 中途離開也不會丟掉已經答過的題目。測驗模式要到送出才有成績,所以只在送出時存一次。
  const recordId = crypto.randomUUID();
  let takenAt = null;

  const statusText = el('span', { class: 'quiz-status-text' });
  const statusBar = progressBar(0);
  const statusFill = statusBar.querySelector('.progress-bar-fill');
  const status = el('div', { class: 'quiz-status-bar' }, [statusText, statusBar]);
  function updateStatus() {
    const done = mode === 'practice' ? revealed.filter(Boolean).length : userAnswers.filter((a, i) => isAnswered(questions[i], a)).length;
    let text = `已作答 ${done} / ${questions.length}`;
    if (mode === 'practice' && done) {
      const right = questions.filter((q, i) => revealed[i] && gradeAnswer(q, userAnswers[i]).isCorrect).length;
      text += ` · 答對 ${right}`;
    }
    statusText.textContent = text;
    statusFill.style.transform = `scaleX(${done / questions.length})`;
  }
  updateStatus();

  const form = el('div', { class: 'quiz-form' });
  const shownPassages = new Set();

  questions.forEach((q, index) => {
    if (q.passageId && !shownPassages.has(q.passageId)) {
      shownPassages.add(q.passageId);
      form.append(renderPassage(q));
    }

    const feedback = el('div', { class: 'quiz-feedback', 'aria-live': 'polite' });
    const field = renderAnswerField(
      q,
      index,
      (value) => {
        userAnswers[index] = value;
        qCard.classList.remove('is-unanswered');
        // 單選點一下就是確定答案,可以立刻判分;選填/多選要等使用者明確表示「這題答完了」
        // (選填按 Enter/離開欄位,多選按確認答案)才判分,見 onCommit。
        if (mode === 'practice' && q.type !== 'numeric' && q.type !== 'multi') revealAnswer(index);
        else updateStatus();
      },
      () => {
        if (mode === 'practice') revealAnswer(index);
      },
      mode === 'practice'
    );
    fields.push(field);

    const qCard = el('div', { class: 'quiz-question', id: `q-${index}` }, [
      el('p', { class: 'quiz-question-text' }, [
        `${index + 1}. ${q.question}`,
        el('span', { class: 'quiz-type-badge' }, typeLabel(q.type)),
      ]),
      field.optionsWrap,
      feedback,
    ]);

    form.append(qCard);
    questionRefs.push({ feedback });
  });

  container.append(status);
  // 測驗模式送出後成績卡放在最上面(一送出就捲上去看),練習模式放在最後一題下面。
  if (mode === 'exam') container.append(resultBar, form);
  else container.append(form, resultBar);

  if (mode === 'exam') {
    const warning = el('p', { class: 'quiz-warning', role: 'alert' });
    warning.hidden = true;
    const submitBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '送出測驗');
    submitBtn.addEventListener('click', () => {
      container.querySelectorAll('.is-unanswered').forEach((node) => node.classList.remove('is-unanswered'));
      const missing = questions.map((q, i) => (isAnswered(q, userAnswers[i]) ? -1 : i)).filter((i) => i !== -1);
      if (missing.length) {
        const shown = missing.slice(0, 8).map((i) => i + 1).join('、');
        warning.textContent = `還有 ${missing.length} 題沒作答(第 ${shown}${missing.length > 8 ? ' 題…' : ' 題'}),全部作答完才能送出。`;
        warning.hidden = false;
        missing.forEach((i) => document.getElementById(`q-${i}`).classList.add('is-unanswered'));
        document.getElementById(`q-${missing[0]}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      warning.hidden = true;
      window.removeEventListener('beforeunload', warnBeforeLeaving);
      questions.forEach((_, index) => revealAnswer(index));
      finish();
      submitBtn.disabled = true;
    });
    container.append(warning, submitBtn);

    // 測驗模式的作答只有送出才會記錄,答到一半不小心關掉/離開頁面會全部消失,先問一聲。
    window.addEventListener('beforeunload', warnBeforeLeaving);
  }

  function warnBeforeLeaving(e) {
    if (finished || !userAnswers.some((a, i) => isAnswered(questions[i], a))) return;
    e.preventDefault();
    e.returnValue = '';
  }

  function revealAnswer(index) {
    const q = questions[index];
    const field = fields[index];
    const userAnswer = userAnswers[index];
    const { feedback } = questionRefs[index];

    revealed[index] = true;
    markAnswerFeedback(field, q, userAnswer);
    const { isCorrect, creditFraction } = gradeAnswer(q, userAnswer);

    feedback.innerHTML = '';
    let feedbackText = isCorrect ? '答對了!' : '答錯了。';
    if (q.type === 'multi' && !isCorrect && creditFraction > 0) {
      feedbackText = `部分正確(這題得 ${Math.round(creditFraction * 100)}% 分數)`;
    }
    feedback.append(
      el('p', { class: isCorrect ? 'feedback-correct' : 'feedback-wrong' }, feedbackText)
    );
    if (q.type === 'numeric' && !isCorrect) {
      feedback.append(el('p', { class: 'feedback-explanation' }, `正確答案:${q.answerText}`));
    }
    if (q.explanation) feedback.append(el('p', { class: 'feedback-explanation' }, q.explanation));

    updateStatus();
    if (mode === 'practice') {
      saveResult();
      if (!finished && revealed.every(Boolean)) finish();
    }
  }

  // 把目前已經判分的題目組成一筆測驗紀錄存起來(練習模式每答一題呼叫一次,
  // 測驗模式只在送出時呼叫)。
  function buildRecord() {
    const graded = questions
      .map((q, index) => ({ q, index, userAnswer: userAnswers[index] }))
      .filter(({ index }) => revealed[index])
      .map((item) => ({ ...item, ...gradeAnswer(item.q, item.userAnswer) }));
    takenAt ??= new Date().toISOString();
    return {
      record: {
        id: recordId,
        subjectId,
        unitId,
        mode,
        takenAt,
        score: Math.round(graded.reduce((sum, g) => sum + g.creditFraction, 0) * 10) / 10,
        total: graded.length,
        answers: graded.map(({ q, userAnswer, isCorrect }) => ({
          questionId: q.id,
          selected: userAnswer instanceof Set ? Array.from(userAnswer) : userAnswer,
          correct: q.type === 'multi' ? q.answers : q.type === 'numeric' ? q.answerText : q.answer,
          isCorrect,
        })),
      },
      graded,
    };
  }

  function saveResult() {
    upsertQuizResult(buildRecord().record);
  }

  function finish() {
    if (finished) return;
    finished = true;

    const { record, graded } = buildRecord();
    // 練習模式每答一題就已經存過了,這裡只有測驗模式需要第一次(也是唯一一次)存檔。
    if (mode === 'exam') addQuizResult(record);
    const wrongCount = graded.filter((g) => !g.isCorrect).length;

    resultBar.innerHTML = '';
    const actions = el('div', { class: 'quiz-finish-actions' });
    const againBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '再測一次');
    againBtn.addEventListener('click', () => {
      startQuiz(mode, count);
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    actions.append(againBtn);
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
      actions.append(doneBtn);
    }
    if (wrongCount) {
      actions.append(el('a', { href: 'wrongbook.html', class: 'btn-pill btn-pill-outline' }, '前往錯題本'));
    }

    resultBar.append(
      el('div', { class: 'quiz-finish-card' }, [
        el('p', { class: 'quiz-score' }, `本次成績:${record.score} / ${record.total}`),
        el('p', { class: 'quiz-finish-note' }, wrongCount ? `有 ${wrongCount} 題答錯,已收進錯題本。` : '全部答對!'),
        actions,
      ])
    );
    resultBar.scrollIntoView({ behavior: 'smooth', block: mode === 'exam' ? 'start' : 'nearest' });
  }
}
