// 「一份測驗」的整套畫面與流程:題目、即時/送出後判分、進度列、完成卡片、邊答邊存。
// 單元測驗(page-unit.js)跟錯題重練(page-wrongbook.js)共用,兩邊只差在題目從哪來、
// 作答紀錄要記在哪個單元底下、做完後有哪些按鈕。
import { el, renderPassage, progressBar } from './render.js';
import { renderAnswerField, gradeAnswer, markAnswerFeedback, typeLabel, isAnswered, correctAnswerOf, serializeAnswer } from './quiz-utils.js';
import { upsertQuizResult } from './storage.js';

// container: 這份測驗要畫在哪個元素裡(會先清空)。
// options:
//   title        畫面最上面的標題
//   questions    已經抽好、選項也洗好的題目陣列
//   mode         'practice' = 答一題立刻看答案(邊答邊存);'exam' = 全部答完按送出才看結果
//   recordMode   寫進作答紀錄 mode 欄位的值,預設跟 mode 一樣
//   locate(q)    這題的作答要記在哪個單元底下:回傳 { subjectId, unitId }
//   restart()    「再測一次」按鈕要做的事
//   extraActions({ wrongCount })  完成卡片裡除了「再測一次」以外還要放哪些按鈕(節點陣列)
//   finishNote(wrongCount, total) 完成卡片的說明文字
export function runQuiz(container, { title, questions, mode, recordMode = mode, locate, restart, extraActions, finishNote }) {
  container.innerHTML = '';
  container.append(el('h3', {}, title));

  const userAnswers = new Array(questions.length).fill(null);
  const revealed = new Array(questions.length).fill(false);
  const fields = [];
  const questionRefs = [];
  const resultBar = el('div', { class: 'quiz-result-bar' });
  let finished = false;

  // 作答紀錄依「單元」分開存(錯題重練的題目來自很多個單元,每個單元一筆)。整份測驗
  // 每個單元共用一個紀錄 id,練習模式每答一題就用最新內容覆蓋一次(見 storage.js 的
  // upsertQuizResult),中途離開頁面也不會丟掉已答的題目。測驗模式要到送出才有成績。
  const takenAt = { value: null };
  const groupIds = new Map();
  const groupKeyOf = (index) => {
    const { subjectId, unitId } = locate(questions[index]);
    return `${subjectId}\u0000${unitId}`;
  };

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
    feedback.append(el('p', { class: isCorrect ? 'feedback-correct' : 'feedback-wrong' }, feedbackText));
    if (q.type === 'numeric' && !isCorrect) {
      feedback.append(el('p', { class: 'feedback-explanation' }, `正確答案:${q.answerText}`));
    }
    if (q.type === 'numeric-multi' && !isCorrect) {
      feedback.append(el('p', { class: 'feedback-explanation' }, `正確答案:${q.blanks.map((b) => `${b.label}=${b.answerText}`).join('、')}`));
    }
    if (q.explanation) feedback.append(el('p', { class: 'feedback-explanation' }, q.explanation));

    updateStatus();
    if (mode === 'practice') {
      saveGroup(groupKeyOf(index));
      if (!finished && revealed.every(Boolean)) finish();
    }
  }

  // 把某個單元目前已經判分的題目組成一筆測驗紀錄。
  function buildRecord(groupKey) {
    const graded = questions
      .map((q, index) => ({ q, index, userAnswer: userAnswers[index] }))
      .filter(({ index }) => revealed[index] && groupKeyOf(index) === groupKey)
      .map((item) => ({ ...item, ...gradeAnswer(item.q, item.userAnswer) }));
    takenAt.value ??= new Date().toISOString();
    if (!groupIds.has(groupKey)) groupIds.set(groupKey, crypto.randomUUID());
    const { subjectId, unitId } = locate(graded[0].q);
    return {
      id: groupIds.get(groupKey),
      subjectId,
      unitId,
      mode: recordMode,
      takenAt: takenAt.value,
      score: Math.round(graded.reduce((sum, g) => sum + g.creditFraction, 0) * 10) / 10,
      total: graded.length,
      answers: graded.map(({ q, userAnswer, isCorrect }) => ({
        questionId: q.id,
        selected: serializeAnswer(userAnswer),
        correct: correctAnswerOf(q),
        isCorrect,
      })),
    };
  }

  function saveGroup(groupKey) {
    upsertQuizResult(buildRecord(groupKey));
  }

  function finish() {
    if (finished) return;
    finished = true;

    // 練習模式每答一題就已經存過了;測驗模式在這裡才第一次(也是唯一一次)存檔。
    if (mode === 'exam') new Set(questions.map((_, i) => groupKeyOf(i))).forEach(saveGroup);

    const graded = questions.map((q, i) => ({ q, userAnswer: userAnswers[i], ...gradeAnswer(q, userAnswers[i]) }));
    const score = Math.round(graded.reduce((sum, g) => sum + g.creditFraction, 0) * 10) / 10;
    const wrongCount = graded.filter((g) => !g.isCorrect).length;

    resultBar.innerHTML = '';
    const actions = el('div', { class: 'quiz-finish-actions' });
    const againBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '再測一次');
    againBtn.addEventListener('click', () => {
      restart();
      container.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    actions.append(againBtn, ...(extraActions ? extraActions({ wrongCount }) : []));

    resultBar.append(
      el('div', { class: 'quiz-finish-card' }, [
        el('p', { class: 'quiz-score' }, `本次成績:${score} / ${questions.length}`),
        el('p', { class: 'quiz-finish-note' }, finishNote ? finishNote(wrongCount, questions.length) : wrongCount ? `有 ${wrongCount} 題答錯,已收進錯題本。` : '全部答對!'),
        actions,
      ])
    );
    resultBar.scrollIntoView({ behavior: 'smooth', block: mode === 'exam' ? 'start' : 'nearest' });
  }
}

