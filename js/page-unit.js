import { getUnit } from './subjects-registry.js';
import { isUnitCompleted, setUnitCompleted, addQuizResult } from './storage.js';
import { el, renderNoteSections, icon, circularCheck } from './render.js';
import { initHeader, renderUserMenu } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';
import { prepareQuestions } from './quiz-utils.js';

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

  container.append(el('h3', {}, `單元測驗(${unit.quiz.length} 題)`));

  const practiceBtn = el('button', { class: 'btn-pill btn-pill-outline' }, '練習模式(即時看答案)');
  const examBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '測驗模式(答完再看結果)');
  practiceBtn.addEventListener('click', () => startQuiz('practice'));
  examBtn.addEventListener('click', () => startQuiz('exam'));

  container.append(el('div', { class: 'quiz-mode-select' }, [practiceBtn, examBtn]));
}

const MAX_QUIZ_QUESTIONS = 8;

function startQuiz(mode) {
  const container = document.getElementById('unit-quiz');
  container.innerHTML = '';
  container.append(el('h3', {}, mode === 'practice' ? '練習模式' : '測驗模式'));

  const questions = prepareQuestions(unit.quiz, MAX_QUIZ_QUESTIONS);
  const answers = new Array(questions.length).fill(null);
  const questionRefs = [];
  const resultBar = el('div', { class: 'quiz-result-bar' });
  let finished = false;

  const form = el('div', { class: 'quiz-form' });

  questions.forEach((q, index) => {
    const optionsWrap = el('div', { class: 'quiz-options' });
    const feedback = el('div', { class: 'quiz-feedback' });

    q.options.forEach((opt, optIndex) => {
      const optId = `q${index}-opt${optIndex}`;
      const radio = el('input', {
        type: 'radio',
        name: `q${index}`,
        id: optId,
        value: optIndex,
      });
      radio.addEventListener('change', () => {
        answers[index] = optIndex;
        if (mode === 'practice') revealAnswer(index);
      });
      const row = el('div', { class: 'quiz-option-row' }, [
        radio,
        el('label', { for: optId }, opt),
      ]);
      optionsWrap.append(row);
    });

    const qCard = el('div', { class: 'quiz-question', id: `q-${index}` }, [
      el('p', { class: 'quiz-question-text' }, `${index + 1}. ${q.question}`),
      optionsWrap,
      feedback,
    ]);

    form.append(qCard);
    questionRefs.push({ optionsWrap, feedback });
  });

  container.append(form, resultBar);

  if (mode === 'exam') {
    const submitBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '送出測驗');
    submitBtn.addEventListener('click', () => {
      if (answers.includes(null)) {
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
    const selected = answers[index];
    const { optionsWrap, feedback } = questionRefs[index];

    optionsWrap.querySelectorAll('input').forEach((r) => (r.disabled = true));
    optionsWrap.querySelectorAll('.quiz-option-row').forEach((row, optIndex) => {
      if (optIndex === q.answer) row.classList.add('is-correct');
      else if (optIndex === selected) row.classList.add('is-wrong');
    });

    feedback.innerHTML = '';
    const isCorrect = selected === q.answer;
    feedback.append(
      el('p', { class: isCorrect ? 'feedback-correct' : 'feedback-wrong' }, isCorrect ? '答對了!' : '答錯了。')
    );
    if (q.explanation) feedback.append(el('p', { class: 'feedback-explanation' }, q.explanation));

    if (mode === 'practice' && !finished && answers.every((a) => a !== null)) {
      finish();
    }
  }

  function finish() {
    if (finished) return;
    finished = true;

    const answerRecords = questions.map((q, index) => ({
      questionId: q.id,
      selected: answers[index],
      correct: q.answer,
      isCorrect: answers[index] === q.answer,
    }));
    const score = answerRecords.filter((a) => a.isCorrect).length;
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
