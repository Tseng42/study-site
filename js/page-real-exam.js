// 歷屆試題模擬考:直接使用 data/math-real-exams.js 裡逐字轉錄的真實學測考題
// (依著作權法第9條第5款,考試試題不受著作權保護),不是原創改編題。
//
// 兩種模式(使用者透過 AskUserQuestion 確認「可以都要」):
// - 單一年份:固定考同一學年度所有可收錄的題目,每次題目/選項順序重新洗牌。
// - 混合年份:跨 111~115 學年度隨機抽 6 單選 + 6 多選,每次組合都不一樣。
// 每題都會標注原始學年度與題號(origNo),讓使用者知道這題出自哪一年。
//
// 目前只有數學(pilot,使用者要求先做一科驗證再考慮擴充其他科)。
import { mathRealExams } from '../data/math-real-exams.js';
import { getSubject } from './subjects-registry.js';
import { addQuizResult, addMockExamResult } from './storage.js';
import { prepareQuestions, renderAnswerField, gradeAnswer, typeLabel } from './quiz-utils.js';
import { el, icon, renderPassage } from './render.js';
import { initHeader, renderUserMenu } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

const container = document.getElementById('real-exam-content');
const SUBJECT_ID = 'math';
const MOCK_HISTORY_ID = 'math-real'; // 跟一般數學模擬考的紀錄分開存放,避免混在一起
const MINUTES = 50;
const subject = getSubject(SUBJECT_ID);

renderPicker();

function withMeta(q) {
  return { ...q, subjectId: SUBJECT_ID, unitId: `math-real-${q.sourceYear}` };
}

function drawSection(pool, count, sectionLabel) {
  return prepareQuestions(pool, count).map((q) => ({ ...withMeta(q), sectionLabel }));
}

function buildYearQuestions(yearSet) {
  const singles = yearSet.questions.filter((q) => q.type !== 'multi');
  const multis = yearSet.questions.filter((q) => q.type === 'multi');
  return [...drawSection(singles, singles.length, '單選'), ...drawSection(multis, multis.length, '多選')];
}

function buildMixedQuestions() {
  const allSingles = mathRealExams.flatMap((y) => y.questions.filter((q) => q.type !== 'multi'));
  const allMultis = mathRealExams.flatMap((y) => y.questions.filter((q) => q.type === 'multi'));
  return [...drawSection(allSingles, 6, '單選'), ...drawSection(allMultis, 6, '多選')];
}

function renderPicker() {
  container.innerHTML = '';
  container.append(
    el('a', { href: 'mockexam.html', class: 'back-link' }, [icon('chevronLeft', { size: 14 }), '回模擬考首頁']),
    el('h1', { class: 'profile-title' }, '歷屆試題模擬考'),
    el('p', { class: 'mockexam-intro' },
      '收錄 111~115 學年度學測數學 A 考科「選擇(填)題」中的單選(第1-6題)與多選(第7-12題)部分,逐字轉錄自大考中心官方公布的正式試題與參考答案(依著作權法第9條第5款,依法舉行之考試試題不受著作權保護)。不含需要圖表原始資料才能忠實呈現或需人工閱卷的選填題、非選擇題部分,個別題目的省略原因見各年度說明。每題選項後方都會標注原始學年度與題號。'
    )
  );

  const mixGrid = el('div', { class: 'mockexam-grid' });
  mixGrid.append(buildModeCard('混合年份模式', '每次隨機跨 111~115 學年度抽 6 題單選 + 6 題多選,組合每次都不一樣', () =>
    startExam(buildMixedQuestions(), '混合年份')
  ));
  container.append(mixGrid);

  container.append(
    el('h2', { class: 'real-exam-subheading' }, '單一年份模式'),
    el('p', { class: 'mockexam-intro' }, '固定考同一學年度所有可收錄的題目,但每次題目順序與選項順序都會重新洗牌。')
  );
  const yearGrid = el('div', { class: 'mockexam-grid' });
  for (const yearSet of mathRealExams) {
    const count = yearSet.questions.length;
    yearGrid.append(
      buildModeCard(`${yearSet.sourceYear} 學年度`, `共 ${count} 題`, () =>
        startExam(buildYearQuestions(yearSet), `${yearSet.sourceYear} 學年度`)
      )
    );
  }
  container.append(yearGrid);
}

function buildModeCard(title, desc, onStart) {
  const card = el('div', { class: 'mockexam-card' });
  card.style.setProperty('--card-color', subject?.color || '#201c2b');
  const btn = el('button', { class: 'btn-pill btn-pill-dark' }, '開始作答');
  btn.addEventListener('click', onStart);
  card.append(el('h2', {}, title), el('p', { class: 'mockexam-card-meta' }, desc), btn);
  return card;
}

function startExam(questions, examLabel) {
  runExam(questions, examLabel);
}

function runExam(questions, examLabel) {
  container.innerHTML = '';

  const timerEl = el('div', { class: 'mockexam-timer' });
  const header = el('div', { class: 'mockexam-run-header' }, [
    el('h2', {}, `歷屆試題模擬考 · ${examLabel}`),
    timerEl,
  ]);

  const answers = new Array(questions.length).fill(null);
  const form = el('div', { class: 'quiz-form' });
  const shownPassages = new Set();

  let lastSection = null;
  questions.forEach((q, index) => {
    if (q.sectionLabel !== lastSection) {
      form.append(el('h3', { class: 'mockexam-section-heading' }, `${q.sectionLabel}題`));
      lastSection = q.sectionLabel;
    }
    if (q.passageId && !shownPassages.has(q.passageId)) {
      shownPassages.add(q.passageId);
      form.append(renderPassage(q));
    }

    const field = renderAnswerField(q, index, (value) => {
      answers[index] = value;
    });
    form.append(
      el('div', { class: 'quiz-question' }, [
        el('p', { class: 'quiz-question-text' }, `${index + 1}. ${q.question}`),
        field.optionsWrap,
        el('p', { class: 'real-exam-year-badge' }, `${q.sourceYear} 學年度學測數學A 第 ${q.origNo} 題`),
      ])
    );
  });

  const submitBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '送出');
  submitBtn.addEventListener('click', () => finish(false));

  container.append(header, form, submitBtn);

  let secondsLeft = MINUTES * 60;
  updateTimerDisplay();
  const intervalId = setInterval(() => {
    secondsLeft -= 1;
    updateTimerDisplay();
    if (secondsLeft <= 0) {
      clearInterval(intervalId);
      finish(true);
    }
  }, 1000);

  function updateTimerDisplay() {
    const m = Math.max(0, Math.floor(secondsLeft / 60));
    const s = Math.max(0, secondsLeft % 60);
    timerEl.textContent = `剩餘 ${m}:${String(s).padStart(2, '0')}`;
    timerEl.classList.toggle('mockexam-timer-low', secondsLeft <= 60);
  }

  function finish(timeUp) {
    if (!timeUp) {
      if (answers.includes(null) && !confirm('還有題目尚未作答,確定要送出嗎?')) return;
    }
    clearInterval(intervalId);
    submitBtn.disabled = true;

    const results = questions.map((q, index) => {
      const userAnswer = answers[index];
      const { isCorrect, creditFraction } = gradeAnswer(q, userAnswer);
      return { ...q, userAnswer, isCorrect, creditFraction };
    });
    const scoreFraction = results.reduce((sum, r) => sum + r.creditFraction, 0);
    const score = Math.round(scoreFraction * 10) / 10;
    const total = results.length;
    const percent = total ? Math.round((scoreFraction / total) * 100) : 0;

    // 依題目實際出處的學年度分組寫進 quizResults,讓錯題本跟個人資料統計吃得到,
    // 也讓每個年度各自的作答紀錄可以獨立回查(見 subjects-registry.js 的虛擬單元)。
    const byUnit = new Map();
    for (const r of results) {
      if (!byUnit.has(r.unitId)) byUnit.set(r.unitId, []);
      byUnit.get(r.unitId).push(r);
    }
    const takenAt = new Date().toISOString();
    for (const [unitId, group] of byUnit) {
      addQuizResult({
        id: crypto.randomUUID(),
        subjectId: SUBJECT_ID,
        unitId,
        mode: 'mock',
        takenAt,
        score: Math.round(group.reduce((sum, r) => sum + r.creditFraction, 0) * 10) / 10,
        total: group.length,
        answers: group.map((r) => ({
          questionId: r.id,
          selected: r.userAnswer instanceof Set ? Array.from(r.userAnswer) : r.userAnswer,
          correct: r.type === 'multi' ? r.answers : r.answer,
          isCorrect: r.isCorrect,
        })),
      });
    }

    addMockExamResult({
      id: crypto.randomUUID(),
      subjectId: MOCK_HISTORY_ID,
      takenAt,
      score,
      total,
      percent,
      estimatedBand: total ? Math.min(15, Math.round((scoreFraction / total) * 15)) : 0,
      minutesUsed: Math.round((MINUTES * 60 - Math.max(0, secondsLeft)) / 60),
    });

    renderResult(results, { score, total, percent, timeUp, examLabel });
  }
}

function renderResult(results, summary) {
  container.innerHTML = '';

  const wrongs = results.filter((r) => !r.isCorrect);

  container.append(
    el('div', { class: 'mockexam-result-card' }, [
      summary.timeUp ? el('p', { class: 'mockexam-timeup-note' }, '時間到,已自動送出。') : null,
      el('div', { class: 'mockexam-score-row' }, [
        el('div', { class: 'mockexam-score-value' }, `${summary.score} / ${summary.total}`),
        el('div', { class: 'mockexam-score-percent' }, `${summary.percent}%`),
      ]),
      el('p', { class: 'mockexam-band-disclaimer' }, `${summary.examLabel} · 這只涵蓋單選＋多選部分,不能直接對照正式級分。`),
    ])
  );

  container.append(el('h3', {}, wrongs.length ? `答錯的題目(${wrongs.length} 題)` : '全部答對了!'));

  for (const w of wrongs) {
    const card = el('div', { class: 'wrong-card' });
    card.style.setProperty('--row-color', subject?.color || '#201c2b');
    card.append(el('p', { class: 'wrong-meta' }, `${typeLabel(w.type)} · ${w.sourceYear} 學年度第 ${w.origNo} 題`));
    if (w.passageId) card.append(renderPassage(w));
    card.append(el('p', { class: 'wrong-question' }, w.question));

    const correctSet = w.type === 'multi' ? new Set(w.answers) : new Set([w.answer]);
    const selectedSet =
      w.type === 'multi' ? new Set(w.userAnswer || []) : new Set(w.userAnswer != null ? [w.userAnswer] : []);
    const optionsWrap = el('div', { class: 'quiz-options' });
    w.options.forEach((opt, i) => {
      const row = el('div', { class: 'quiz-option-row static' });
      if (correctSet.has(i)) row.classList.add('is-correct');
      else if (selectedSet.has(i)) row.classList.add('is-wrong');
      row.append(el('span', {}, opt));
      optionsWrap.append(row);
    });
    card.append(optionsWrap);

    if (w.explanation) card.append(el('p', { class: 'feedback-explanation' }, w.explanation));
    container.append(card);
  }

  container.append(
    el('div', { class: 'mockexam-result-actions' }, [
      el('a', { href: 'real-exam.html', class: 'btn-pill btn-pill-outline' }, '回歷屆試題首頁'),
      el('a', { href: 'wrongbook.html', class: 'btn-pill btn-pill-dark' }, '前往錯題本'),
    ])
  );
}
