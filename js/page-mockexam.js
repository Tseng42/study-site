import { getAllSubjects, getSubject } from './subjects-registry.js';
import { addQuizResult, addMockExamResult, getMockExamHistory } from './storage.js';
import { prepareQuestions, renderAnswerField, gradeAnswer, markAnswerFeedback, typeLabel } from './quiz-utils.js';

// 依 typeBreakdown 分別從各題型抽題,維持「單選→多選→選填」的分節順序,
// 跟真實考卷的結構一致。每題都標上 sectionLabel,給 runExam 畫分節標題用。
function drawByType(pool, typeBreakdown, sectionLabel) {
  const byType = { single: [], multi: [], numeric: [] };
  for (const q of pool) {
    const t = q.type === 'multi' || q.type === 'numeric' ? q.type : 'single';
    byType[t].push(q);
  }
  const order = ['single', 'multi', 'numeric'];
  const picked = [];
  for (const type of order) {
    const count = typeBreakdown[type];
    if (count) {
      picked.push(
        ...prepareQuestions(byType[type], count).map((q) => ({
          ...q,
          sectionLabel: sectionLabel ?? typeLabel(q.type),
        }))
      );
    }
  }
  return picked;
}

// 依 config 抽題:
// - categoryBreakdown(社會/自然):依歷史/地理/公民、物理/化學/生物/地科逐分類抽題,
//   分類內部再依 typeBreakdown 分單選/多選,分節標題用分類名稱,跟真實考卷分科分節一致。
// - typeBreakdown(國文/英文/數學):整科題庫依單選/多選/選填抽題,分節標題用題型名稱。
// - 都沒有的話:整包題庫隨機抽,不分節。
function drawExamQuestions(pool, config) {
  if (config.categoryBreakdown) {
    const picked = [];
    for (const cat of config.categoryBreakdown) {
      const catPool = pool.filter((q) => q.category === cat.category);
      picked.push(...drawByType(catPool, cat.typeBreakdown, cat.category));
    }
    return picked;
  }
  if (config.typeBreakdown) return drawByType(pool, config.typeBreakdown);
  return prepareQuestions(pool, config.questionCount).map((q) => ({ ...q, sectionLabel: typeLabel(q.type) }));
}
import { mockExamConfig, fiveStandardsReference, describeBandLevel } from '../data/mock-exam-config.js';
import { el, icon, subjectIcon } from './render.js';
import { initHeader, renderUserMenu, formatRelativeDate } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

const container = document.getElementById('mockexam-content');
const subjects = getAllSubjects();
const params = new URLSearchParams(location.search);
const requestedSubject = params.get('subject');

if (requestedSubject && getSubject(requestedSubject)) {
  renderStartScreen(requestedSubject);
} else {
  renderPicker();
}

function buildExamPool(subject) {
  const pool = [];
  for (const unit of subject.units) {
    for (const q of unit.quiz) {
      pool.push({ ...q, unitId: unit.id, unitTitle: unit.title, category: unit.category });
    }
  }
  return pool;
}

function renderPicker() {
  container.innerHTML = '';
  container.append(
    el('h1', { class: 'profile-title' }, '模擬考'),
    el('p', { class: 'mockexam-intro' },
      '各科單獨計時作答,題目從該科所有單元的題庫中隨機抽取,每次組合都不一樣。題數、限時、單選/多選(社會、自然還會依歷史/地理/公民、物理/化學/生物/地科均分)都對齊真實學測選擇題部分的配置;需要人工評閱的寫作、非選擇題無法在這裡模擬,詳見各科說明。'
    )
  );

  const grid = el('div', { class: 'mockexam-grid' });
  for (const subject of subjects) {
    const config = mockExamConfig[subject.id];
    const pool = buildExamPool(subject);
    const attempts = getMockExamHistory(subject.id);
    const lastAttempt = attempts.slice().sort((a, b) => new Date(b.takenAt) - new Date(a.takenAt))[0];
    const enoughQuestions = pool.length >= 5;

    const card = el('div', { class: 'mockexam-card' });
    card.style.setProperty('--card-color', subject.color);
    card.append(
      el('div', { class: 'mockexam-card-top' }, [
        el('div', { class: 'subject-card-icon' }, subjectIcon(subject)),
        el('div', {}, [
          el('h2', {}, config?.label || subject.name),
          el('p', { class: 'mockexam-card-meta' }, config ? `${config.questionCount} 題(含多選${config.typeBreakdown?.numeric ? '/選填' : ''})· ${config.minutes} 分鐘` : ''),
        ]),
      ]),
      lastAttempt
        ? el('p', { class: 'mockexam-card-last' }, `上次:${lastAttempt.score}/${lastAttempt.total}(估計 ${lastAttempt.estimatedBand} 級分)· ${formatRelativeDate(lastAttempt.takenAt)}`)
        : el('p', { class: 'mockexam-card-last mockexam-card-last-empty' }, '還沒有作答紀錄'),
      enoughQuestions
        ? el('a', { class: 'btn-pill btn-pill-dark', href: `mockexam.html?subject=${subject.id}` }, '開始模擬考')
        : el('p', { class: 'mockexam-card-disabled' }, `題庫還太少(目前 ${pool.length} 題),晚點再來試試`)
    );
    grid.append(card);
  }
  container.append(grid);
}

function renderStartScreen(subjectId) {
  const subject = getSubject(subjectId);
  const config = mockExamConfig[subjectId];
  const pool = buildExamPool(subject);

  // renderPicker() 只給題庫足夠的科目連結按鈕,但這裡也可能被人直接輸入網址帶
  // ?subject= 進來,所以要重複檢查,避免題庫太少時開出幾乎抽不到題目的模擬考。
  if (pool.length < 5) {
    container.innerHTML = '';
    container.append(
      el('a', { href: 'mockexam.html', class: 'back-link' }, [icon('chevronLeft', { size: 14 }), '回模擬考首頁']),
      el('p', {}, `這個科目的題庫還太少(目前 ${pool.length} 題),晚點再來試試。`)
    );
    return;
  }

  const iconBox = el('div', { class: 'subject-card-icon' }, subjectIcon(subject));
  iconBox.style.background = subject.color;
  iconBox.style.color = '#fff';

  const breakdownText = config.categoryBreakdown
    ? config.categoryBreakdown.map((cat) => `${cat.category} ${cat.count}`).join(' + ')
    : config.typeBreakdown
    ? Object.entries(config.typeBreakdown)
        .filter(([, count]) => count)
        .map(([type, count]) => `${count} ${typeLabel(type)}`)
        .join(' + ')
    : `${config.questionCount} 單選`;

  container.innerHTML = '';
  container.append(
    el('a', { href: 'mockexam.html', class: 'back-link' }, [icon('chevronLeft', { size: 14 }), '回模擬考首頁']),
    el('div', { class: 'mockexam-start-card' }, [
      iconBox,
      el('h1', {}, `${config.label} 模擬考`),
      el('ul', { class: 'mockexam-start-list' }, [
        el('li', {}, `題數:${config.questionCount} 題(${breakdownText})`),
        el('li', {}, `時間:${config.minutes} 分鐘,時間到會自動送出 —— 跟真實學測這科的考試時間相同`),
        el('li', {}, '題目從全部單元題庫隨機抽取,每次考的題目跟順序都不一樣'),
        config.excludesNote ? el('li', {}, config.excludesNote) : null,
        el('li', {}, '作答結果會計入錯題本跟個人資料的統計'),
      ]),
      el(
        'button',
        { class: 'btn-pill btn-pill-dark', id: 'mockexam-begin-btn' },
        '開始作答'
      ),
    ])
  );

  document.getElementById('mockexam-begin-btn').addEventListener('click', () => {
    const questions = drawExamQuestions(pool, config);
    runExam(subject, config, questions);
  });
}

function runExam(subject, config, questions) {
  container.innerHTML = '';

  const timerEl = el('div', { class: 'mockexam-timer' });
  const header = el('div', { class: 'mockexam-run-header' }, [
    el('h2', {}, `${config.label} 模擬考`),
    timerEl,
  ]);

  const answers = new Array(questions.length).fill(null);
  const fields = [];
  const form = el('div', { class: 'quiz-form' });

  let lastSection = null;
  questions.forEach((q, index) => {
    if (q.sectionLabel !== lastSection) {
      const heading = config.categoryBreakdown ? q.sectionLabel : `${q.sectionLabel}題`;
      form.append(el('h3', { class: 'mockexam-section-heading' }, heading));
      lastSection = q.sectionLabel;
    }

    const field = renderAnswerField(q, index, (value) => {
      answers[index] = value;
    });
    fields.push(field);
    form.append(
      el('div', { class: 'quiz-question' }, [
        el('p', { class: 'quiz-question-text' }, `${index + 1}. ${q.question}`),
        field.optionsWrap,
      ])
    );
  });

  const submitBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '送出模擬考');
  submitBtn.addEventListener('click', () => finish(false));

  container.append(header, form, submitBtn);

  let secondsLeft = config.minutes * 60;
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
    const estimatedBand = total ? Math.min(15, Math.round((scoreFraction / total) * 15)) : 0;

    // 依原本所屬單元分組,各自寫進 quizResults,讓錯題本跟個人資料統計自動吃到這次模擬考的結果。
    const byUnit = new Map();
    for (const r of results) {
      if (!byUnit.has(r.unitId)) byUnit.set(r.unitId, []);
      byUnit.get(r.unitId).push(r);
    }
    const takenAt = new Date().toISOString();
    for (const [unitId, group] of byUnit) {
      addQuizResult({
        id: crypto.randomUUID(),
        subjectId: subject.id,
        unitId,
        mode: 'mock',
        takenAt,
        score: Math.round(group.reduce((sum, r) => sum + r.creditFraction, 0) * 10) / 10,
        total: group.length,
        answers: group.map((r) => ({
          questionId: r.id,
          selected: r.userAnswer instanceof Set ? Array.from(r.userAnswer) : r.userAnswer,
          correct: r.type === 'multi' ? r.answers : r.type === 'numeric' ? r.answerText : r.answer,
          isCorrect: r.isCorrect,
        })),
      });
    }

    addMockExamResult({
      id: crypto.randomUUID(),
      subjectId: subject.id,
      takenAt,
      score,
      total,
      percent,
      estimatedBand,
      minutesUsed: Math.round((config.minutes * 60 - Math.max(0, secondsLeft)) / 60),
    });

    renderResult(subject, config, results, { score, total, percent, estimatedBand, timeUp });
  }
}

function renderResult(subject, config, results, summary) {
  container.innerHTML = '';

  const wrongs = results.filter((r) => !r.isCorrect);
  const years = fiveStandardsReference[subject.id] || {};
  const recentYears = Object.keys(years).sort((a, b) => b - a);

  container.append(
    el('div', { class: 'mockexam-result-card' }, [
      summary.timeUp ? el('p', { class: 'mockexam-timeup-note' }, '時間到,已自動送出。') : null,
      el('div', { class: 'mockexam-score-row' }, [
        el('div', { class: 'mockexam-score-value' }, `${summary.score} / ${summary.total}`),
        el('div', { class: 'mockexam-score-percent' }, `${summary.percent}%`),
      ]),
      el('div', { class: 'mockexam-band' }, [
        el('span', { class: 'mockexam-band-value' }, `估計 ${summary.estimatedBand} 級分`),
        el('span', { class: 'mockexam-band-desc' }, describeBandLevel(subject.id, summary.estimatedBand)),
      ]),
      el('p', { class: 'mockexam-band-disclaimer' }, '這是依答對率換算的估計值,不是正式級分(正式級分需要全國考生一起考才能計算)。'),
    ])
  );

  if (recentYears.length) {
    const table = el('table', { class: 'note-table' });
    const thead = el('thead', {}, el('tr', {}, ['學年度', '頂標', '前標', '均標', '後標', '底標'].map((h) => el('th', {}, h))));
    const tbody = el(
      'tbody',
      {},
      recentYears.map((y) =>
        el('tr', {}, [
          el('td', {}, `${y} 學年`),
          el('td', {}, `${years[y].top}`),
          el('td', {}, `${years[y].front}`),
          el('td', {}, `${years[y].mean}`),
          el('td', {}, `${years[y].back}`),
          el('td', {}, `${years[y].bottom}`),
        ])
      )
    );
    container.append(el('h3', {}, `${config.label} 近年五標對照(真實學測資料)`), table);
  }

  container.append(el('h3', {}, wrongs.length ? `答錯的題目(${wrongs.length} 題)` : '全部答對了!'));

  for (const w of wrongs) {
    const card = el('div', { class: 'wrong-card' });
    card.style.setProperty('--row-color', subject.color);
    const metaPrefix = w.category ? `${w.category} · ` : '';
    card.append(
      el('p', { class: 'wrong-meta' }, `${metaPrefix}${w.unitTitle} · ${typeLabel(w.type)}`),
      el('p', { class: 'wrong-question' }, w.question)
    );

    if (w.type === 'numeric') {
      card.append(
        el('p', { class: 'feedback-wrong' }, `你的答案:${w.userAnswer || '(未作答)'}`),
        el('p', { class: 'feedback-correct' }, `正確答案:${w.answerText}`)
      );
    } else {
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
    }

    if (w.explanation) card.append(el('p', { class: 'feedback-explanation' }, w.explanation));
    container.append(card);
  }

  container.append(
    el('div', { class: 'mockexam-result-actions' }, [
      el('a', { href: `mockexam.html?subject=${subject.id}`, class: 'btn-pill btn-pill-outline' }, '再考一次'),
      el('a', { href: 'mockexam.html', class: 'btn-pill btn-pill-outline' }, '回模擬考首頁'),
      el('a', { href: 'wrongbook.html', class: 'btn-pill btn-pill-dark' }, '前往錯題本'),
    ])
  );
}
