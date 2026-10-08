import { markQuestionMastered } from './storage.js';
import { getReviewableWrongQuestions } from './wrong-utils.js';
import { getQuestion, getUnit, getSubject } from './subjects-registry.js';
import { prepareGroupedQuestions } from './quiz-utils.js';
import { runQuiz } from './quiz-runner.js';
import { el, icon, renderPassage, renderRichText } from './render.js';
import { initHeader, renderUserMenu, showBanner, formatRelativeDate } from './layout.js';
import { ensureSignedIn } from './auth.js';
import { initCloudSync } from './cloud-sync.js';

initHeader();
const user = await ensureSignedIn();
await initCloudSync(user.uid);
renderUserMenu(user);

// 錯題可能上百題,一次全畫出來又長又慢:先顯示 PAGE_SIZE 題,其餘按「再顯示」才載入;
// 也可以用科目篩選只看某一科。最近答錯的排前面。
const PAGE_SIZE = 20;
const summary = document.getElementById('wrongbook-summary');
const list = document.getElementById('wrongbook-list');
summary.className = 'wrongbook-summary';
const moreWrap = el('div', { class: 'wrongbook-more' });
list.after(moreWrap);
// 錯題重練的畫面(見 startRetest),跟下面的錯題清單二選一顯示。
const retestBox = el('div', { class: 'wrongbook-retest' });
summary.before(retestBox);

let entries = loadEntries();
let activeSubject = 'all';
let rendered = 0; // 目前畫面上有幾張卡片(篩選後清單的前 rendered 筆)
let retestCount = '10'; // 重練題數下拉選單記住上次的選擇('all' 或數字)

function loadEntries() {
  return getReviewableWrongQuestions().sort((a, b) => new Date(b.lastAttemptAt) - new Date(a.lastAttemptAt));
}

function filtered() {
  return activeSubject === 'all' ? entries : entries.filter((w) => w.subjectId === activeSubject);
}

renderAll();

// 整份重畫:換篩選、復原時用。keep 是要保留的卡片張數(復原時盡量維持原本看到的長度)。
function renderAll(keep = PAGE_SIZE) {
  if (activeSubject !== 'all' && !entries.some((w) => w.subjectId === activeSubject)) activeSubject = 'all';
  list.innerHTML = '';
  rendered = 0;
  renderSummary();
  renderMore(Math.max(PAGE_SIZE, keep));
}

function renderSummary() {
  summary.innerHTML = '';
  if (!entries.length) {
    summary.append(
      el('div', { class: 'wrongbook-empty' }, [
        el('p', {}, '目前沒有待複習的錯題,繼續保持!答錯的題目會自動收進這裡。'),
        el('a', { href: 'index.html', class: 'btn-pill btn-pill-dark' }, '去選一個科目練習'),
      ])
    );
    moreWrap.innerHTML = '';
    return;
  }

  summary.append(el('p', {}, `目前共有 ${entries.length} 題待複習(最近答錯的排前面)。`));

  const counts = new Map();
  for (const w of entries) counts.set(w.subjectId, (counts.get(w.subjectId) || 0) + 1);
  // 只有一個科目有錯題的話,篩選沒有意義,不顯示。
  if (counts.size > 1) {
    const chips = el('div', { class: 'filter-chips', role: 'group', 'aria-label': '依科目篩選' });
    const addChip = (id, label, count) => {
      const chip = el(
        'button',
        { type: 'button', class: `filter-chip${activeSubject === id ? ' is-active' : ''}`, 'aria-pressed': String(activeSubject === id) },
        [label, el('span', { class: 'filter-chip-count' }, String(count))]
      );
      chip.addEventListener('click', () => {
        if (activeSubject === id) return;
        activeSubject = id;
        renderAll();
      });
      chips.append(chip);
    };
    addChip('all', '全部', entries.length);
    for (const [subjectId, count] of counts) addChip(subjectId, getSubject(subjectId)?.name || subjectId, count);
    summary.append(chips);
  }

  const pool = retestPool();
  if (pool.length) {
    const counts5 = [5, 10, 20].filter((n) => n < pool.length);
    const select = el('select', { class: 'quiz-count-select', 'aria-label': '重練題數' }, [
      ...counts5.map((n) => el('option', { value: String(n) }, `${n} 題`)),
      el('option', { value: 'all' }, `全部 ${pool.length} 題`),
    ]);
    select.value = [...select.options].some((o) => o.value === retestCount) ? retestCount : counts5.includes(10) ? '10' : 'all';
    retestCount = select.value;
    select.addEventListener('change', () => {
      retestCount = select.value;
    });
    const startBtn = el('button', { class: 'btn-pill btn-pill-dark' }, '開始重練');
    startBtn.addEventListener('click', () => startRetest(retestCount === 'all' ? pool.length : Number(retestCount)));
    summary.append(
      el('div', { class: 'retest-row' }, [el('span', { class: 'retest-label' }, '重練這些錯題:'), select, startBtn]),
      el('p', { class: 'retest-hint' }, '隨機抽題重新作答,即時看答案。答對的題目會離開錯題本,答錯的會留著。')
    );
  }
}

// 目前篩選條件下可以重練的錯題。純寫答的非選擇題(跟 hybrid 的簡答部分)要自己對答案,
// 沒辦法在這裡自動判分,不放進重練。
function retestPool() {
  return filtered()
    .filter((w) => !w.questionId.endsWith('-written'))
    .map((w) => ({ ...getQuestion(w.subjectId, w.unitId, w.questionId), _loc: { subjectId: w.subjectId, unitId: w.unitId } }))
    .filter((q) => ['single', 'multi', 'numeric', 'numeric-multi', undefined].includes(q.type));
}

// 把錯題清單換成一份即時判分的測驗。作答結果照一般作答紀錄存(依題目原本的單元),
// 所以答對的題目「最近一次作答是對的」,自然就從錯題本消失;答錯的留著。
function startRetest(n) {
  const pool = retestPool();
  if (!pool.length) {
    leaveRetest();
    return;
  }
  summary.innerHTML = '';
  list.innerHTML = '';
  moreWrap.innerHTML = '';
  window.scrollTo(0, 0);
  const backBtn = el('button', { class: 'btn-pill btn-pill-outline' }, '回錯題本');
  backBtn.addEventListener('click', leaveRetest);
  runQuiz(retestBox, {
    title: '錯題重練',
    questions: prepareGroupedQuestions(pool, n),
    mode: 'practice',
    recordMode: 'retest',
    locate: (q) => q._loc,
    restart: () => {
      entries = loadEntries();
      startRetest(n);
    },
    extraActions: () => [backBtn],
    finishNote: (wrongCount, total) =>
      wrongCount ? `答對 ${total - wrongCount} 題,已離開錯題本;${wrongCount} 題答錯,留在錯題本。` : `${total} 題全部答對,都已離開錯題本!`,
  });
}

function leaveRetest() {
  retestBox.innerHTML = '';
  entries = loadEntries();
  renderAll();
  window.scrollTo(0, 0);
}

// 從篩選後的清單再多畫 count 張卡片,順便更新底下「再顯示」按鈕。
function renderMore(count) {
  const items = filtered();
  const next = items.slice(rendered, rendered + count);
  for (const w of next) list.append(buildCard(w));
  rendered += next.length;

  moreWrap.innerHTML = '';
  const remaining = items.length - rendered;
  if (remaining > 0) {
    const btn = el('button', { class: 'btn-pill btn-pill-outline' }, `再顯示 ${Math.min(PAGE_SIZE, remaining)} 題(還有 ${remaining} 題)`);
    btn.addEventListener('click', () => renderMore(PAGE_SIZE));
    moreWrap.append(btn);
  }
}

function buildCard(w) {
  const subject = getSubject(w.subjectId);
  const unit = getUnit(w.subjectId, w.unitId);
  const question = getQuestion(w.subjectId, w.unitId, w.questionId);

  const card = el('div', { class: 'wrong-card' });
  card.style.setProperty('--row-color', subject?.color || '#201c2b');
  card.append(
    el('p', { class: 'wrong-meta' }, `${subject?.name || ''} · ${unit?.title || ''} · ${formatRelativeDate(w.lastAttemptAt)}答錯`)
  );
  if (question.passageId) card.append(renderPassage(question));
  card.append(renderRichText(question.question, { className: 'wrong-question' }));
  // hybrid 題的簡答部分是另外自行對答案的(id 結尾 -written),要讓人看得出這張卡片問的是哪一段。
  if (w.questionId.endsWith('-written') && question.writtenPrompt) {
    card.append(el('p', { class: 'wrong-question' }, `【簡答部分】${question.writtenPrompt}`));
  }

  if (question.type === 'numeric') {
    card.append(el('p', { class: 'feedback-correct' }, `正確答案:${question.answerText}`));
  } else if (question.type === 'numeric-multi') {
    const text = question.blanks.map((b) => `${b.label}=${b.answerText}`).join('、');
    card.append(el('p', { class: 'feedback-correct' }, `正確答案:${text}`));
  } else if (question.type === 'written') {
    card.append(el('p', { class: 'feedback-correct' }, '非選擇題(自行對答案),詳見下方官方參考答案'));
  } else {
    const correctSet = question.type === 'multi' ? new Set(question.answers) : new Set([question.answer]);
    const optionsWrap = el('div', { class: 'quiz-options' });
    question.options.forEach((opt, i) => {
      const row = el('div', { class: 'quiz-option-row static' });
      if (correctSet.has(i)) row.classList.add('is-correct');
      row.append(el('span', {}, opt));
      optionsWrap.append(row);
    });
    card.append(optionsWrap);
  }

  if (question.explanation) {
    card.append(el('p', { class: 'feedback-explanation' }, question.explanation));
  }

  const masterBtn = el('button', { class: 'btn-pill btn-pill-outline', style: 'margin-top: 14px;' }, [
    icon('check', { size: 14 }),
    '標記已熟練(從錯題本移除)',
  ]);
  masterBtn.addEventListener('click', () => {
    markQuestionMastered(w.questionId, true);
    entries = entries.filter((e) => e.questionId !== w.questionId);
    if (activeSubject !== 'all' && !entries.some((e) => e.subjectId === activeSubject)) {
      renderAll(); // 這個科目的錯題清光了,篩選會自動退回「全部」
    } else {
      card.remove();
      rendered -= 1;
      renderMore(1); // 補上一張,維持畫面上的長度
      renderSummary(); // 待複習題數、科目篩選的數字跟著更新
    }
    showUndo(w);
  });
  card.append(masterBtn);
  return card;
}

// 「標記已熟練」按下去卡片就消失了,按錯的話沒有辦法挽回,所以底下給幾秒鐘的復原機會。
let undoTimer = null;
function showUndo(w) {
  clearTimeout(undoTimer);
  const banner = showBanner({
    id: 'undo-banner',
    text: '已標記熟練,從錯題本移除',
    buttonLabel: '復原',
    onClick: () => {
      markQuestionMastered(w.questionId, false);
      banner.remove();
      entries = loadEntries();
      renderAll(rendered);
    },
  });
  undoTimer = setTimeout(() => banner.remove(), 6000);
}
