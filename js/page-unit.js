import { getUnit } from './subjects-registry.js';
import { isUnitCompleted, setUnitCompleted, addQuizResult } from './storage.js';
import { el, renderNoteSections, icon, circularCheck } from './render.js';
import { initHeader, renderUserMenu } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';
import { prepareQuestions, renderAnswerField, gradeAnswer, markAnswerFeedback, typeLabel } from './quiz-utils.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

const params = new URLSearchParams(location.search);
const subjectId = params.get('subject');
const unitId = params.get('unit');
const unit = getUnit(subjectId, unitId);

if (!unit) {
  document.getElementById('unit-content').append(el('p', {}, '找不到這個單元。'));
} else {
  document.title = `${unit.title} - 學測複習站`;
  renderHeader();
  renderNote();
  renderCompletion();
  renderQuizIntro();
}

function renderHeader() {
  const header = document.getElementById('unit-header');
  header.append(
    el('a', { href: `subject.html?subject=${subjectId}`, class: 'back-link' }, [
      icon('chevronLeft', { size: 14 }),
      '回科目列表',
    ]),
    el('h2', {}, unit.title)
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
  const { label } = circularCheck(isUnitCompleted(subjectId, unitId), (checked) => {
    setUnitCompleted(subjectId, unitId, checked);
  });
  container.append(label, el('span', {}, '我已完成這個單元'));
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

  const form = el('div', { class: 'quiz-form' });

  questions.forEach((q, index) => {
    const feedback = el('div', { class: 'quiz-feedback' });
    const field = renderAnswerField(
      q,
      index,
      (value) => {
        userAnswers[index] = value;
        // 單選點一下就是確定答案,可以立刻判分;選填/多選要等使用者明確表示「這題答完了」
        // (選填按 Enter/離開欄位,多選按確認答案)才判分,見 onCommit。
        if (mode === 'practice' && q.type !== 'numeric' && q.type !== 'multi') revealAnswer(index);
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

  container.append(form, resultBar);

  if (mode === 'exam') {
    const submitBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '送出測驗');
    submitBtn.addEventListener('click', () => {
      if (userAnswers.includes(null)) {
        alert('還有題目尚未作答喔。');
        return;
      }
      questions.forEach((_, index) => revealAnswer(index));
      finish();
      submitBtn.disabled = true;
    });
    container.append(submitBtn);
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

    if (mode === 'practice' && !finished && revealed.every(Boolean)) {
      finish();
    }
  }

  function finish() {
    if (finished) return;
    finished = true;

    const graded = questions.map((q, index) => {
      const userAnswer = userAnswers[index];
      return { q, userAnswer, ...gradeAnswer(q, userAnswer) };
    });
    const answerRecords = graded.map(({ q, userAnswer, isCorrect }) => ({
      questionId: q.id,
      selected: userAnswer instanceof Set ? Array.from(userAnswer) : userAnswer,
      correct: q.type === 'multi' ? q.answers : q.type === 'numeric' ? q.answerText : q.answer,
      isCorrect,
    }));
    const score = Math.round(graded.reduce((sum, g) => sum + g.creditFraction, 0) * 10) / 10;
    const total = questions.length;

    addQuizResult({
      id: crypto.randomUUID(),
      subjectId,
      unitId,
      mode,
      takenAt: new Date().toISOString(),
      score,
      total,
      answers: answerRecords,
    });

    resultBar.innerHTML = '';
    resultBar.append(el('p', { class: 'quiz-score' }, `本次成績:${score} / ${total}`));
  }
}
