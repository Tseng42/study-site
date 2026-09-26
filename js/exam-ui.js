// 模擬考(page-mockexam.js)跟歷屆試題(page-real-exam.js)共用的「考試進行中」外框:
// 黏在上方的標題列(已作答計數、答案卡、倒數計時)、作答暫存/續考、離開頁面的處理。
// 兩個頁面各自負責抽題、畫題目、交卷計分,這裡只管跟「一場考試在進行」有關的部分。
import { el } from './render.js';
import { isAnswered, serializeAnswer, deserializeAnswer } from './quiz-utils.js';
import { saveExamDraft, saveExamDraftAnswers, clearExamDraft } from './storage.js';

// 開始(或續考)一場考試。
//   kind         'mock'(題庫模擬考)或 'real'(歷屆試題),加上 subjectKey 決定暫存放哪
//   title        標題列文字
//   minutes      這場考試的時限
//   questions    這場要考的題目(續考時是暫存裡存的那一份,不重新抽)
//   resume       續考的暫存(getExamDraft 的結果),新考試給 null
//   href         從別的頁面點「繼續作答」要回來的網址
//   extra        要一起存進暫存的頁面自己的欄位(例如歷屆試題的 examLabel)
//   onTimeUp()   時間到(續考時發現時間早就過了也會呼叫)
export function createExamSession({ kind, subjectKey, title, minutes, questions, resume = null, href, extra = {}, onTimeUp }) {
  const startedAt = resume ? resume.startedAt : Date.now();
  const endsAt = resume ? resume.endsAt : startedAt + minutes * 60 * 1000;
  const answers = questions.map((q, i) => (resume ? deserializeAnswer(q, resume.answers?.[i]) : null));
  // 純寫答的非選擇題不強迫作答,不列進「已作答 x/N」的分母。
  const countable = questions.map((_, i) => i).filter((i) => questions[i].type !== 'written');
  const anchors = new Array(questions.length).fill(null);

  // ---- 標題列 ----
  const answeredEl = el('span', { class: 'mockexam-answered' });
  const timerEl = el('div', { class: 'mockexam-timer' });
  const sheetBtn = el('button', { type: 'button', class: 'btn-pill btn-pill-outline sheet-toggle', 'aria-expanded': 'false' }, '答案卡');
  const sheet = el('div', { class: 'answer-sheet', role: 'dialog', 'aria-label': '答案卡' });
  const header = el('div', { class: 'mockexam-run-header' }, [
    el('h2', {}, title),
    el('div', { class: 'mockexam-run-status' }, [answeredEl, sheetBtn, timerEl]),
    sheet,
  ]);

  // ---- 答案卡:每題一個號碼鈕,已作答填色,點了捲到那一題 ----
  const numButtons = questions.map((_, i) => {
    const btn = el('button', { type: 'button', class: 'sheet-num', 'aria-label': `第 ${i + 1} 題` }, String(i + 1));
    btn.addEventListener('click', () => {
      closeSheet();
      // 直接跳過去,不用平滑捲動:考卷動輒上萬像素長,平滑捲動要花好幾秒、途中還可能被打斷。
      (anchors[i] || document.getElementById(`eq-${i}`))?.scrollIntoView({ block: 'start' });
    });
    return btn;
  });
  const nextBtn = el('button', { type: 'button', class: 'btn-pill btn-pill-outline sheet-next' }, '跳到第一個沒作答的題目');
  nextBtn.addEventListener('click', () => {
    const first = countable.find((i) => !isAnswered(questions[i], answers[i]));
    if (first != null) numButtons[first].click();
  });
  sheet.append(
    el('div', { class: 'sheet-legend' }, [
      el('span', { class: 'sheet-legend-item' }, [el('i', { class: 'sheet-dot is-answered' }), '已作答']),
      el('span', { class: 'sheet-legend-item' }, [el('i', { class: 'sheet-dot' }), '還沒作答']),
    ]),
    el('div', { class: 'sheet-grid' }, numButtons),
    nextBtn
  );
  function closeSheet() {
    sheet.classList.remove('is-open');
    sheetBtn.setAttribute('aria-expanded', 'false');
  }
  sheetBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = !sheet.classList.contains('is-open');
    sheet.classList.toggle('is-open', open);
    sheetBtn.setAttribute('aria-expanded', String(open));
  });
  const onDocClick = (e) => {
    if (!header.contains(e.target)) closeSheet();
  };
  const onKey = (e) => {
    if (e.key === 'Escape') closeSheet();
  };
  document.addEventListener('click', onDocClick);
  document.addEventListener('keydown', onKey);

  function refresh() {
    let done = 0;
    questions.forEach((q, i) => {
      const counted = q.type !== 'written';
      const answered = counted && isAnswered(q, answers[i]);
      if (answered) done += 1;
      numButtons[i].classList.toggle('is-answered', answered);
      numButtons[i].classList.toggle('is-optional', !counted);
    });
    answeredEl.textContent = `已作答 ${done}/${countable.length}`;
    nextBtn.disabled = done >= countable.length;
  }
  refresh();

  // ---- 作答暫存 ----
  let saveTimer = null;
  const persist = () => {
    saveTimer = null;
    saveExamDraftAnswers(kind, subjectKey, answers.map(serializeAnswer));
  };
  const flush = () => {
    if (saveTimer === null) return;
    clearTimeout(saveTimer);
    persist();
  };
  const onHide = () => {
    if (document.visibilityState === 'hidden') flush();
  };
  document.addEventListener('visibilitychange', onHide);
  window.addEventListener('pagehide', flush);

  // 存不進去(localStorage 滿了)的話,等於沒有暫存保護,退回「離開頁面時警告」。
  let guardActive = false;
  const warnBeforeLeaving = (e) => {
    e.preventDefault();
    e.returnValue = '';
  };
  if (!resume) {
    const saved = saveExamDraft(kind, subjectKey, { version: 1, title, href, startedAt, endsAt, questions, ...extra });
    if (!saved) {
      guardActive = true;
      window.addEventListener('beforeunload', warnBeforeLeaving);
    }
  }

  // ---- 倒數計時:用結束時間算,不是每秒減 1(分頁在背景時 setInterval 會被瀏覽器放慢,
  // 累加的話倒數會比實際時間慢);離開頁面再回來(續考)也自然是對的。 ----
  const secondsLeft = () => Math.ceil((endsAt - Date.now()) / 1000);
  function renderTimer() {
    const left = secondsLeft();
    const m = Math.max(0, Math.floor(left / 60));
    const s = Math.max(0, left % 60);
    timerEl.textContent = `剩餘 ${m}:${String(s).padStart(2, '0')}`;
    timerEl.classList.toggle('mockexam-timer-low', left <= 60);
    return left;
  }
  let timerId = null;
  let timeUpFired = false;
  const fireTimeUp = () => {
    if (timeUpFired) return;
    timeUpFired = true;
    onTimeUp();
  };
  renderTimer();
  timerId = setInterval(() => {
    if (renderTimer() <= 0) {
      clearInterval(timerId);
      fireTimeUp();
    }
  }, 1000);
  // 續考時如果時間早就過了,等畫面畫好再直接交卷。
  if (secondsLeft() <= 0) setTimeout(fireTimeUp, 0);

  return {
    header,
    answers,
    secondsLeft,
    minutes,
    initialAnswer: (index) => answers[index],
    // 每題的作答欄位有變動時呼叫(給 renderAnswerField 的 onChange)。
    onAnswer(index, value) {
      answers[index] = value;
      refresh();
      clearTimeout(saveTimer);
      saveTimer = setTimeout(persist, 400);
    },
    // 答案卡點號碼要捲到哪個元素(題目卡片,或那一題所屬題組的文章)。
    setAnchor(index, node) {
      anchors[index] = node;
      if (node && !node.id) node.id = `eq-${index}`;
    },
    // 交卷後收尾:停計時、拿掉所有監聽、刪掉暫存。
    finish() {
      clearInterval(timerId);
      clearTimeout(saveTimer);
      saveTimer = null;
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', flush);
      if (guardActive) window.removeEventListener('beforeunload', warnBeforeLeaving);
      clearExamDraft(kind, subjectKey);
    },
  };
}
