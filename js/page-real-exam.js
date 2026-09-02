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
import { describeBandLevel } from '../data/mock-exam-config.js';
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

// 單一年份模式:完整重現該年度第壹部分(單選+多選+選填)與第貳部分(混合題/非選擇題)。
// 第18-20題共用同一個情境(題組),彼此有「承上題」的關係,所以保持原始順序、不洗牌。
function buildYearQuestions(yearSet) {
  const singles = yearSet.questions.filter((q) => q.origNo <= 6);
  const multis = yearSet.questions.filter((q) => q.origNo >= 7 && q.origNo <= 12);
  const fillIns = yearSet.questions.filter((q) => q.origNo >= 13 && q.origNo <= 17);
  const mixedGroup = yearSet.questions
    .filter((q) => q.origNo >= 18)
    .sort((a, b) => a.origNo - b.origNo)
    .map((q) => ({ ...withMeta(q), sectionLabel: '混合題' }));
  return [
    ...drawSection(singles, singles.length, '單選'),
    ...drawSection(multis, multis.length, '多選'),
    ...drawSection(fillIns, fillIns.length, '選填'),
    ...mixedGroup,
  ];
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
      '收錄 111~115 學年度學測數學 A 考科的完整題目:單選(第1-6題)、多選(第7-12題)、選填(第13-17題),以及第貳部分混合題/非選擇題(第18-20題),逐字轉錄自大考中心官方公布的正式試題、參考答案與非選擇題評分原則(依著作權法第9條第5款,依法舉行之考試試題不受著作權保護)。第19、20題是真正的手寫非選擇題,系統無法自動判分,會顯示官方滿分參考答案讓你自行對答案。少數依賴精確圖形數據才能作答的題目個別略過,原因見各年度說明。每題選項後方都會標注原始學年度與題號。'
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
      const heading = q.sectionLabel.endsWith('題') ? q.sectionLabel : `${q.sectionLabel}題`;
      form.append(el('h3', { class: 'mockexam-section-heading' }, heading));
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
      const hasUnanswered = questions.some((q, index) => q.type !== 'written' && answers[index] == null);
      if (hasUnanswered && !confirm('還有題目尚未作答,確定要送出嗎?')) return;
    }
    clearInterval(intervalId);
    submitBtn.disabled = true;

    // 非選擇題(第19、20題)沒有標準答案可以自動判分,不計入分數,結算後另外
    // 顯示官方滿分參考答案讓使用者自行對答案、自行回報對錯(見 renderResult)。
    const results = [];
    const writtenResults = [];
    questions.forEach((q, index) => {
      const userAnswer = answers[index];
      if (q.type === 'written') {
        writtenResults.push({ ...q, userAnswer });
        return;
      }
      const { isCorrect, creditFraction } = gradeAnswer(q, userAnswer);
      results.push({ ...q, userAnswer, isCorrect, creditFraction });
    });
    const scoreFraction = results.reduce((sum, r) => sum + r.creditFraction, 0);
    const score = Math.round(scoreFraction * 10) / 10;
    const total = results.length;
    const percent = total ? Math.round((scoreFraction / total) * 100) : 0;
    const autoFraction = total ? scoreFraction / total : 0;

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
          correct: correctAnswerOf(r),
          isCorrect: r.isCorrect,
        })),
      });
    }

    const minutesUsed = Math.round((MINUTES * 60 - Math.max(0, secondsLeft)) / 60);
    const pendingRecord = {
      id: crypto.randomUUID(),
      subjectId: MOCK_HISTORY_ID,
      examLabel,
      takenAt,
      score,
      total,
      percent,
      minutesUsed,
    };

    // 混合年份模式沒有非選擇題,分數當場就完整,直接存進模擬考紀錄。單一年份模式
    // 含第19、20題(非選擇題),真正的分數要等使用者自行對完答案才算數(數學A官方
    // 配分是選擇+選填占85分、非選擇題占15分,這裡用同樣的權重換算預估級分),所以
    // 這種情況下先不存,等 renderResult 裡的自行對答案都回報完才真正存進歷史紀錄。
    if (writtenResults.length === 0) {
      addMockExamResult({ ...pendingRecord, estimatedBand: Math.min(15, Math.round(autoFraction * 15)) });
    }

    renderResult(results, writtenResults, {
      score,
      total,
      percent,
      autoFraction,
      timeUp,
      examLabel,
      pendingRecord: writtenResults.length ? pendingRecord : null,
    });
  }
}

function correctAnswerOf(q) {
  if (q.type === 'multi') return q.answers;
  if (q.type === 'numeric') return q.answerText;
  if (q.type === 'numeric-multi') return q.blanks.map((b) => b.answerText);
  return q.answer;
}

function renderResult(results, writtenResults, summary) {
  container.innerHTML = '';

  const wrongs = results.filter((r) => !r.isCorrect);
  const hasWritten = writtenResults.length > 0;
  // 每一格非選擇題的自行回報結果(true/false/null=尚未回報),全部回報完才能換算
  // 包含非選擇題的最終級分並存進模擬考紀錄(見 finish() 裡 pendingRecord 的說明)。
  const writtenOutcomes = new Array(writtenResults.length).fill(null);

  const bandValueEl = el('span', { class: 'mockexam-band-value' });
  const bandDescEl = el('span', { class: 'mockexam-band-desc' });
  updateBandDisplay();

  container.append(
    el('div', { class: 'mockexam-result-card' }, [
      summary.timeUp ? el('p', { class: 'mockexam-timeup-note' }, '時間到,已自動送出。') : null,
      el('div', { class: 'mockexam-score-row' }, [
        el('div', { class: 'mockexam-score-value' }, `${summary.score} / ${summary.total}`),
        el('div', { class: 'mockexam-score-percent' }, `${summary.percent}%`),
      ]),
      el('div', { class: 'mockexam-band' }, [bandValueEl, bandDescEl]),
      el('p', { class: 'mockexam-band-disclaimer' },
        `${summary.examLabel} · 這是依答對率換算的估計級分,不是正式級分。${hasWritten ? '第18-20題混合題組的非選擇題列在下方,自行對答案後才會併入級分。' : ''}`
      ),
    ])
  );

  container.append(el('h3', {}, wrongs.length ? `答錯的題目(${wrongs.length} 題)` : '單選＋多選＋選填全部答對了!'));

  for (const w of wrongs) {
    const card = el('div', { class: 'wrong-card' });
    card.style.setProperty('--row-color', subject?.color || '#201c2b');
    card.append(el('p', { class: 'wrong-meta' }, `${typeLabel(w.type)} · ${w.sourceYear} 學年度第 ${w.origNo} 題`));
    if (w.passageId) card.append(renderPassage(w));
    card.append(el('p', { class: 'wrong-question' }, w.question));
    card.append(renderCorrectAnswerBlock(w));

    if (w.explanation) card.append(el('p', { class: 'feedback-explanation' }, w.explanation));
    container.append(card);
  }

  if (hasWritten) {
    container.append(
      el('h3', { class: 'real-exam-written-heading' }, '非選擇題(第18-20題混合題組,自行對答案)')
    );
    writtenResults.forEach((w, i) => {
      container.append(renderWrittenCard(w, (isCorrect, reportRow) => {
        writtenOutcomes[i] = isCorrect;
        reportRow.innerHTML = '';
        reportRow.append(
          el('p', { class: isCorrect ? 'feedback-correct' : 'feedback-wrong' },
            isCorrect ? '已記錄:答對了' : '已記錄:沒答對(已加入錯題本)'
          )
        );
        reportWritten(w, isCorrect);
        maybeFinalizeHistory();
      }));
    });
  }

  container.append(
    el('div', { class: 'mockexam-result-actions' }, [
      el('a', { href: 'real-exam.html', class: 'btn-pill btn-pill-outline' }, '回歷屆試題首頁'),
      el('a', { href: 'wrongbook.html', class: 'btn-pill btn-pill-dark' }, '前往錯題本'),
    ])
  );

  function currentBand(includeWritten) {
    if (!includeWritten) return Math.min(15, Math.round(summary.autoFraction * 15));
    const writtenFraction = writtenOutcomes.filter(Boolean).length / writtenOutcomes.length;
    return Math.min(15, Math.round((0.85 * summary.autoFraction + 0.15 * writtenFraction) * 15));
  }

  function updateBandDisplay() {
    const allReported = hasWritten && writtenOutcomes.every((v) => v !== null);
    const band = hasWritten && !allReported ? null : currentBand(hasWritten);
    if (band == null) {
      bandValueEl.textContent = '級分計算中';
      bandDescEl.textContent = '請先完成下方非選擇題的自行對答案';
    } else {
      bandValueEl.textContent = `估計 ${band} 級分`;
      bandDescEl.textContent = describeBandLevel('math', band) + (hasWritten ? '(已含非選擇題自行回報結果)' : '');
    }
  }

  function maybeFinalizeHistory() {
    if (!summary.pendingRecord || writtenOutcomes.some((v) => v === null)) {
      updateBandDisplay();
      return;
    }
    const writtenScore = writtenOutcomes.filter(Boolean).length;
    addMockExamResult({
      ...summary.pendingRecord,
      writtenScore,
      writtenTotal: writtenOutcomes.length,
      estimatedBand: currentBand(true),
    });
    updateBandDisplay();
  }
}

// 依題型畫出「正確答案」區塊:單選/多選標示選項對錯,選填(單一格/多格)直接列出答案。
function renderCorrectAnswerBlock(w) {
  if (w.type === 'numeric') {
    return el('p', { class: 'feedback-correct' }, `正確答案:${w.answerText}`);
  }
  if (w.type === 'numeric-multi') {
    const text = w.blanks.map((b) => `${b.label}=${b.answerText}`).join('、');
    return el('p', { class: 'feedback-correct' }, `正確答案:${text}`);
  }
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
  return optionsWrap;
}

// 非選擇題(第19、20題)沒辦法自動判分:顯示題目跟官方滿分參考答案,讓使用者自己
// 對照後回報「答對了/沒答對」。onReport(isCorrect, reportRow) 由呼叫端(renderResult)
// 決定回報後要做什麼 —— 寫進 quizResults、更新這題底下的文字、檢查是否所有非選擇題
// 都回報完了(全部回報完才能換算包含非選擇題的最終級分並存進模擬考紀錄)。
function renderWrittenCard(w, onReport) {
  const card = el('div', { class: 'wrong-card written-card' });
  card.style.setProperty('--row-color', subject?.color || '#201c2b');
  card.append(el('p', { class: 'wrong-meta' }, `非選 · ${w.sourceYear} 學年度第 ${w.origNo} 題`));
  card.append(el('p', { class: 'wrong-question' }, w.question));
  if (w.userAnswer && w.userAnswer.trim()) {
    card.append(el('p', { class: 'written-your-note' }, `你寫的:${w.userAnswer}`));
  }

  const explanationWrap = el('div', { class: 'feedback-explanation-wrap' }, [
    el('p', { class: 'feedback-explanation' }, w.explanation),
  ]);
  explanationWrap.hidden = true;
  const revealBtn = el('button', { class: 'btn-pill btn-pill-outline' }, '顯示官方詳解');
  revealBtn.addEventListener('click', () => {
    explanationWrap.hidden = !explanationWrap.hidden;
    revealBtn.textContent = explanationWrap.hidden ? '顯示官方詳解' : '隱藏詳解';
  });

  const reportRow = el('div', { class: 'written-self-report' });
  const correctBtn = el('button', { class: 'btn-pill btn-pill-outline' }, '我答對了');
  const wrongBtn = el('button', { class: 'btn-pill btn-pill-outline' }, '我沒答對');
  correctBtn.addEventListener('click', () => onReport(true, reportRow));
  wrongBtn.addEventListener('click', () => onReport(false, reportRow));
  reportRow.append(correctBtn, wrongBtn);

  card.append(revealBtn, explanationWrap, reportRow);
  return card;
}

function reportWritten(w, isCorrect) {
  addQuizResult({
    id: crypto.randomUUID(),
    subjectId: SUBJECT_ID,
    unitId: w.unitId,
    mode: 'mock',
    takenAt: new Date().toISOString(),
    score: isCorrect ? 1 : 0,
    total: 1,
    answers: [{ questionId: w.id, selected: w.userAnswer || null, correct: null, isCorrect }],
  });
}
