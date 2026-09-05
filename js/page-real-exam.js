// 歷屆試題模擬考:直接使用 data/*-real-exams.js 裡逐字轉錄的真實學測考題
// (依著作權法第9條第5款,考試試題不受著作權保護),不是原創改編題。
//
// 目前支援數學A跟社會兩科,用 ?subject=math(預設)或 ?subject=social 切換,
// 兩科結構差異很大所以各自有自己的 buildYearQuestions/buildMixedQuestions:
// - 數學A:第壹部分可以乾淨分成單選/多選/選填,第貳部分是一組共用情境的混合題組
//   (18-20題,彼此有「承上題」關係,不可打亂順序)。
// - 社會:65題左右本身就是一份連續的考卷,非選擇題(純寫答,或勾選+簡答的
//   hybrid)穿插在選擇題之間,很多題還跟前後幾題共用同一段題幹(題組),所以整份
//   考卷完全依原始題號順序作答,不打亂題目順序,只洗每題自己的選項順序。
//
// 兩種模式(數學A模式已由使用者透過 AskUserQuestion 確認「可以都要」,社會沿用
// 相同設計):
// - 單一年份:固定考同一學年度所有可收錄的題目,每次題目/選項順序重新洗牌
//   (社會不打亂題目順序,只洗選項)。
// - 混合年份:跨 111~115 學年度隨機抽題,每次組合都不一樣,只包含能自動判分的
//   題型(不含純寫答的非選擇題)。
// 每題都會標注原始學年度與題號(origNo),讓使用者知道這題出自哪一年。
//
// 非選擇題(數學A的第19、20題;社會的 written/hybrid 簡答部分)沒有標準答案格式,
// 系統無法自動判分,結算後顯示官方滿分參考答案,由使用者自行對答案、回報對錯。
// 這部分的結果連同能自動判分的部分,依各科官方配分權重(config.autoWeight/
// writtenWeight)換算成一個預估級分,寫進「模擬考紀錄」(見個人資料頁)。
import { mathRealExams } from '../data/math-real-exams.js';
import { socialRealExams } from '../data/social-real-exams.js';
import { getSubject } from './subjects-registry.js';
import { addQuizResult, addMockExamResult } from './storage.js';
import { describeBandLevel } from '../data/mock-exam-config.js';
import { shuffle, prepareQuestions, shuffleQuestionOptions, renderAnswerField, gradeAnswer, typeLabel } from './quiz-utils.js';
import { el, icon, renderPassage } from './render.js';
import { initHeader, renderUserMenu } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

const container = document.getElementById('real-exam-content');

const params = new URLSearchParams(location.search);
const SUBJECT_KEY = params.get('subject') === 'social' ? 'social' : 'math';

const CONFIGS = {
  math: {
    subjectId: 'math',
    historyId: 'math-real',
    subjectLabel: '數學A',
    yearBadgeLabel: '學測數學A',
    minutes: 50,
    data: mathRealExams,
    intro:
      '收錄 111~115 學年度學測數學 A 考科的完整題目:單選(第1-6題)、多選(第7-12題)、選填(第13-17題),以及第貳部分混合題/非選擇題(第18-20題),逐字轉錄自大考中心官方公布的正式試題、參考答案與非選擇題評分原則(依著作權法第9條第5款,依法舉行之考試試題不受著作權保護)。第19、20題是真正的手寫非選擇題,系統無法自動判分,會顯示官方滿分參考答案讓你自行對答案。少數依賴精確圖形數據才能作答的題目個別略過,原因見各年度說明。每題選項後方都會標注原始學年度與題號。',
    mixedDesc: '每次隨機跨 111~115 學年度抽 6 題單選 + 6 題多選,組合每次都不一樣',
    writtenSectionTitle: '非選擇題(第18-20題混合題組,自行對答案)',
    autoWeight: 0.85,
    writtenWeight: 0.15,
    buildYearQuestions: buildMathYearQuestions,
    buildMixedQuestions: buildMathMixedQuestions,
  },
  social: {
    subjectId: 'social',
    historyId: 'social-real',
    subjectLabel: '社會',
    yearBadgeLabel: '學測社會',
    minutes: 110,
    data: socialRealExams,
    intro:
      '收錄 111~115 學年度學測社會考科(歷史/地理/公民與社會合一)的完整題目,逐字轉錄自大考中心官方公布的正式試題、選擇題參考答案與非選擇題滿分參考答案與評分原則(依著作權法第9條第5款,依法舉行之考試試題不受著作權保護)。非選擇題有兩種:純寫答的題目系統無法自動判分,交卷後自行對照官方答案回報對錯;有勾選部分的混合題,勾選部分會自動判分,簡答部分一樣自行對答案。少數依賴照片/地圖/圖表才能作答的題目個別略過,原因見各年度說明。每題選項後方都會標注原始學年度與題號,共用同一段題幹的題組會一起顯示。',
    mixedDesc: '每次隨機跨 111~115 學年度抽約 20 題選擇題(依題組完整抽取,不含純寫答的非選擇題),組合每次都不一樣',
    writtenSectionTitle: '非選擇題(自行對答案;有勾選部分的混合題,勾選部分已自動計分)',
    autoWeight: 74 / 110,
    writtenWeight: 36 / 110,
    buildYearQuestions: buildSocialYearQuestions,
    buildMixedQuestions: buildSocialMixedQuestions,
  },
};
const config = CONFIGS[SUBJECT_KEY];

const SUBJECT_ID = config.subjectId;
const MOCK_HISTORY_ID = config.historyId; // 跟一般科目模擬考的紀錄分開存放,避免混在一起
const MINUTES = config.minutes;
const subject = getSubject(SUBJECT_ID);

renderPicker();

function withMeta(q) {
  return { ...q, subjectId: SUBJECT_ID, unitId: `${MOCK_HISTORY_ID}-${q.sourceYear}` };
}

function drawSection(pool, count, sectionLabel) {
  return prepareQuestions(pool, count).map((q) => ({ ...withMeta(q), sectionLabel }));
}

// 數學A單一年份模式:完整重現該年度第壹部分(單選+多選+選填)與第貳部分(混合題/
// 非選擇題)。第18-20題共用同一個情境(題組),彼此有「承上題」的關係,所以保持
// 原始順序、不洗牌。
function buildMathYearQuestions(yearSet) {
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

function buildMathMixedQuestions() {
  const allSingles = mathRealExams.flatMap((y) => y.questions.filter((q) => q.type !== 'multi'));
  const allMultis = mathRealExams.flatMap((y) => y.questions.filter((q) => q.type === 'multi'));
  return [...drawSection(allSingles, 6, '單選'), ...drawSection(allMultis, 6, '多選')];
}

// 社會單一年份模式:完整重現該年度的整份考卷,依原始題號順序排列(題組/非選擇題
// 穿插其中,順序不能打亂),只洗每題自己的選項順序(單選/hybrid的勾選部分)。
function buildSocialYearQuestions(yearSet) {
  return yearSet.questions
    .slice()
    .sort((a, b) => a.origNo - b.origNo)
    .map((q) => withMeta(shuffleQuestionOptions(q)));
}

// 社會混合年份模式:以「題組」為單位跨年抽題(共用同一段題幹的題目要嘛一起抽、
// 要嘛都不抽,避免抽到沒有上下文的孤立題目),只抽能自動判分的題型(單選/hybrid),
// 不含純寫答的非選擇題(承接題組脈絡意義不大,也沒有可自動判分的部分)。
function buildSocialMixedQuestions() {
  const units = [];
  for (const yearSet of socialRealExams) {
    const seenKeys = new Set();
    for (const q of yearSet.questions) {
      if (q.type === 'written') continue;
      const key = q.passageId || q.id;
      if (seenKeys.has(key)) continue;
      seenKeys.add(key);
      const group = q.passageId
        ? yearSet.questions.filter((qq) => qq.passageId === q.passageId && qq.type !== 'written')
        : [q];
      units.push(group);
    }
  }
  const picked = [];
  for (const unit of shuffle(units)) {
    if (picked.length >= 20) break;
    picked.push(...unit);
  }
  return picked.map((q) => withMeta(shuffleQuestionOptions(q)));
}

function renderPicker() {
  container.innerHTML = '';
  container.append(
    el('a', { href: 'mockexam.html', class: 'back-link' }, [icon('chevronLeft', { size: 14 }), '回模擬考首頁']),
    el('h1', { class: 'profile-title' }, `${config.subjectLabel}歷屆試題模擬考`),
    el('p', { class: 'mockexam-intro' }, config.intro)
  );

  const mixGrid = el('div', { class: 'mockexam-grid' });
  mixGrid.append(buildModeCard('混合年份模式', config.mixedDesc, () =>
    startExam(config.buildMixedQuestions(), '混合年份')
  ));
  container.append(mixGrid);

  container.append(
    el('h2', { class: 'real-exam-subheading' }, '單一年份模式'),
    el('p', { class: 'mockexam-intro' }, '固定考同一學年度所有可收錄的題目,但每次選項順序都會重新洗牌。')
  );
  const yearGrid = el('div', { class: 'mockexam-grid' });
  for (const yearSet of config.data) {
    const count = yearSet.questions.length;
    yearGrid.append(
      buildModeCard(`${yearSet.sourceYear} 學年度`, `共 ${count} 題`, () =>
        startExam(config.buildYearQuestions(yearSet), `${yearSet.sourceYear} 學年度`)
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
    el('h2', {}, `${config.subjectLabel}歷屆試題模擬考 · ${examLabel}`),
    timerEl,
  ]);

  const answers = new Array(questions.length).fill(null);
  const form = el('div', { class: 'quiz-form' });
  const shownPassages = new Set();

  let lastSection = null;
  questions.forEach((q, index) => {
    if (q.sectionLabel && q.sectionLabel !== lastSection) {
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
        el('p', { class: 'real-exam-year-badge' }, `${q.sourceYear} 學年度${config.yearBadgeLabel} 第 ${q.origNo} 題`),
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

    // 純寫答的非選擇題沒有標準答案可以自動判分,不計入分數,結算後另外顯示官方
    // 滿分參考答案讓使用者自行對答案、自行回報對錯(見 renderResult)。hybrid
    // 題型的勾選部分可以自動判分(進 results),簡答部分則另外拆成一筆自行對答案
    // 的項目(進 writtenResults),兩者共用同一個原始題號。
    const results = [];
    const writtenResults = [];
    questions.forEach((q, index) => {
      const userAnswer = answers[index];
      if (q.type === 'written') {
        writtenResults.push({ ...q, userAnswer });
        return;
      }
      if (q.type === 'hybrid') {
        const { isCorrect, creditFraction } = gradeAnswer(q, userAnswer);
        results.push({ ...q, userAnswer: userAnswer?.choice ?? null, isCorrect, creditFraction });
        writtenResults.push({
          ...q,
          id: `${q.id}-written`,
          userAnswer: userAnswer?.written ?? '',
          question: q.writtenPrompt ? `${q.question}\n\n【簡答部分】${q.writtenPrompt}` : q.question,
        });
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

    // 混合年份模式不含非選擇題,分數當場就完整,直接存進模擬考紀錄。單一年份模式
    // 含非選擇題,真正的分數要等使用者自行對完答案才算數(依各科官方配分權重換算
    // 預估級分,見 config.autoWeight/writtenWeight),所以這種情況下先不存,等
    // renderResult 裡的自行對答案都回報完才真正存進歷史紀錄。
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
  return q.answer; // single 與 hybrid 的勾選部分都是這個形狀
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
        `${summary.examLabel} · 這是依答對率換算的估計級分,不是正式級分。${hasWritten ? '非選擇題列在下方,自行對答案後才會併入級分。' : ''}`
      ),
    ])
  );

  container.append(el('h3', {}, wrongs.length ? `答錯的題目(${wrongs.length} 題)` : '能自動判分的題目全部答對了!'));

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
    container.append(el('h3', { class: 'real-exam-written-heading' }, config.writtenSectionTitle));
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
      el('a', { href: `real-exam.html?subject=${SUBJECT_KEY}`, class: 'btn-pill btn-pill-outline' }, '回歷屆試題首頁'),
      el('a', { href: 'wrongbook.html', class: 'btn-pill btn-pill-dark' }, '前往錯題本'),
    ])
  );

  function currentBand(includeWritten) {
    if (!includeWritten) return Math.min(15, Math.round(summary.autoFraction * 15));
    const writtenFraction = writtenOutcomes.filter(Boolean).length / writtenOutcomes.length;
    return Math.min(15, Math.round((config.autoWeight * summary.autoFraction + config.writtenWeight * writtenFraction) * 15));
  }

  function updateBandDisplay() {
    const allReported = hasWritten && writtenOutcomes.every((v) => v !== null);
    const band = hasWritten && !allReported ? null : currentBand(hasWritten);
    if (band == null) {
      bandValueEl.textContent = '級分計算中';
      bandDescEl.textContent = '請先完成下方非選擇題的自行對答案';
    } else {
      bandValueEl.textContent = `估計 ${band} 級分`;
      bandDescEl.textContent = describeBandLevel(SUBJECT_ID, band) + (hasWritten ? '(已含非選擇題自行回報結果)' : '');
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

// 依題型畫出「正確答案」區塊:單選/多選/hybrid(勾選部分)標示選項對錯,
// 選填(單一格/多格)直接列出答案。
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

// 非選擇題沒辦法自動判分:顯示題目跟官方滿分參考答案,讓使用者自己對照後回報
// 「答對了/沒答對」。onReport(isCorrect, reportRow) 由呼叫端(renderResult)決定
// 回報後要做什麼 —— 寫進 quizResults、更新這題底下的文字、檢查是否所有非選擇題
// 都回報完了(全部回報完才能換算包含非選擇題的最終級分並存進模擬考紀錄)。
function renderWrittenCard(w, onReport) {
  const card = el('div', { class: 'wrong-card written-card' });
  card.style.setProperty('--row-color', subject?.color || '#201c2b');
  card.append(el('p', { class: 'wrong-meta' }, `非選 · ${w.sourceYear} 學年度第 ${w.origNo} 題`));
  if (w.passageId) card.append(renderPassage(w));
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
