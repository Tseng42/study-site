// 測驗題目的共用邏輯:洗牌、渲染作答欄位、計分。單元練習跟模擬考共用,
// 確保「單選/多選/選填」三種題型不管在哪個頁面出現,行為都一致。
//
// 題目資料格式(type 省略時視為 'single',跟舊資料相容):
//   單選 type:'single'        { options:[...4], answer: index }
//   多選 type:'multi'         { options:[...n], answers: [index, ...] }
//   選填 type:'numeric'       { answerText: '3' }  // 數字/簡短文字,去除空白後完全比對;
//                              // 若雙方都能解析成數值(含分數 a/b),改用數值相等比對
//                              // (例如答案是 1/2,使用者填 0.5 或 2/4 都算對)
//   選填(多格) type:'numeric-multi' { blanks: [{ label:'a', answerText:'2' }, ...] }
//              // 一題有好幾個獨立空格(如歷屆試題選填題的 a、b 兩個未知數),須全部答對才給分
//   非選擇題 type:'written'   { explanation: '官方滿分參考答案與評分原則' }
//              // 沒有標準化答案格式,系統不自動判分,使用者自行對照詳解後回報對錯
//   混合(勾選+寫答) type:'hybrid' { options:[...], answer: index, writtenPrompt: '效果(25字內)' }
//              // 社會考科常見的非選擇題格式:同一題裡有一個可自動判分的勾選部分(用法
//              // 跟單選一樣的 options/answer),外加一個沒有標準答案格式、系統不自動判分
//              // 的簡答部分(writtenPrompt 是簡答欄位的提示文字,answer/explanation 仍然
//              // 用來判斷勾選對錯跟顯示簡答部分的官方參考答案)
import { el } from './render.js';

// Fisher-Yates 洗牌,不修改原陣列。
export function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// 全形數字/斜線/負號/小數點(U+FF01~U+FF5E)轉成對應的半形字元,避免手機中文輸入法
// 切到全形時打出「/」「－」「1」這種看起來一樣、但跟題庫資料(都是半形)比不起來的字元。
function toHalfwidth(str) {
  return str.replace(/[！-～]/g, (ch) => String.fromCharCode(ch.charCodeAt(0) - 0xfee0));
}

// 把「選填」的作答字串解析成精確分數 { num, den },看不懂(非數字/非分數)就回傳 null。
// 用分數(整數對)而不是 parseFloat,是為了避免 1/3 這類除不盡的分數在轉成浮點數時
// 失去精確度,導致該相等的值被誤判成不相等。
function parseNumericValue(s) {
  let str = String(s ?? '').trim().replace(/\s+/g, '');
  str = toHalfwidth(str).replace(/,/g, ''); // 全形轉半形,並去掉千分位逗號(如 10,000)
  const fracMatch = str.match(/^(-?\d+)\/(\d+)$/);
  if (fracMatch) {
    const den = Number(fracMatch[2]);
    if (den === 0) return null;
    return { num: Number(fracMatch[1]), den };
  }
  const decMatch = str.match(/^(-?)(\d+)(?:\.(\d+))?$/);
  if (decMatch) {
    const [, sign, intPart, decPart = ''] = decMatch;
    const den = 10 ** decPart.length;
    const num = Number(intPart + decPart) * (sign === '-' ? -1 : 1);
    return { num, den };
  }
  return null;
}

// 選填題判斷使用者的作答是否跟標準答案相符:先比對去空白後的字串,再比對數值是否
// 相等(分數/小數互換也算對,例如答案是 1/2,填 0.5 或 2/4 都算對)。
function numericAnswerMatches(userAnswer, answerText) {
  const normalize = (s) => String(s ?? '').trim().replace(/\s+/g, '');
  if (userAnswer == null) return false;
  if (normalize(userAnswer) === normalize(answerText)) return true;
  const a = parseNumericValue(userAnswer);
  const b = parseNumericValue(answerText);
  if (!a || !b) return false;
  return a.num * b.den === b.num * a.den;
}

// 洗掉一題的選項順序(單選/多選才有選項),並同步校正正確答案的 index。
export function shuffleQuestionOptions(q) {
  if (q.type === 'numeric' || q.type === 'numeric-multi' || q.type === 'written') return { ...q };

  const optionOrder = shuffle(q.options.map((_, i) => i));
  const options = optionOrder.map((i) => q.options[i]);

  if (q.type === 'multi') {
    const answerSet = new Set(q.answers);
    const answers = optionOrder
      .map((origIndex, newIndex) => (answerSet.has(origIndex) ? newIndex : -1))
      .filter((i) => i !== -1);
    return { ...q, options, answers };
  }

  return { ...q, options, answer: optionOrder.indexOf(q.answer) };
}

// 從題庫中抽一份「這次要考的題目」:洗題目順序、洗每題選項順序,上限 maxCount 題。
export function prepareQuestions(pool, maxCount = 8) {
  return shuffle(pool)
    .slice(0, maxCount)
    .map(shuffleQuestionOptions);
}

// 單元練習/錯題重練用:題組(passageId 相同的題目)整篇一起出,不會只抽到其中一兩題。
// 把題庫分成「一題獨立題」或「一整組題組」,洗牌後一份一份放進來,放到題數達到 maxCount 為止;
// 最後一份如果是題組,整組都會放進來,所以實際題數可能比 maxCount 多幾題。
// 組內依題庫原本的順序排(克漏字的空格 1、2、3 才會照順序),文章只在每組第一題前面顯示一次。
export function prepareGroupedQuestions(pool, maxCount = 8) {
  const bundles = [];
  const byPassage = new Map();
  for (const q of pool) {
    if (!q.passageId) {
      bundles.push([q]);
    } else if (byPassage.has(q.passageId)) {
      byPassage.get(q.passageId).push(q);
    } else {
      const bundle = [q];
      byPassage.set(q.passageId, bundle);
      bundles.push(bundle);
    }
  }
  const picked = [];
  for (const bundle of shuffle(bundles)) {
    if (picked.length >= maxCount) break;
    picked.push(...bundle);
  }
  return picked.map(shuffleQuestionOptions);
}

// 計分:回傳 0~1 的得分比例。單選/選填只有全對(1)或全錯(0);
// 多選採學測「選項獨立判定」規則:n 個選項各自判斷對錯,錯 k 個選項得 (n-2k)/n,最低 0 分。
export function gradeAnswer(q, userAnswer) {
  if (q.type === 'multi') {
    const n = q.options.length;
    const correct = new Set(q.answers);
    const selected = new Set(userAnswer || []);
    let wrongCount = 0;
    for (let i = 0; i < n; i++) {
      if (correct.has(i) !== selected.has(i)) wrongCount++;
    }
    const fraction = Math.max(0, (n - 2 * wrongCount) / n);
    return { creditFraction: fraction, isCorrect: fraction === 1 };
  }
  if (q.type === 'numeric') {
    const isCorrect = numericAnswerMatches(userAnswer, q.answerText);
    return { creditFraction: isCorrect ? 1 : 0, isCorrect };
  }
  if (q.type === 'numeric-multi') {
    // 官方選填題規則:一題有好幾個空格,須全部答對才給分,答錯不倒扣(沒有部分分數)。
    const answers = userAnswer || [];
    const isCorrect = q.blanks.every((blank, i) => numericAnswerMatches(answers[i], blank.answerText));
    return { creditFraction: isCorrect ? 1 : 0, isCorrect };
  }
  if (q.type === 'hybrid') {
    // 只有勾選部分自動判分;簡答部分沒有標準答案格式,由呼叫端另外走自行回報流程
    // (見 page-real-exam.js 對 hybrid 題目的特殊處理),這裡不計入簡答對錯。
    const isCorrect = userAnswer?.choice === q.answer;
    return { creditFraction: isCorrect ? 1 : 0, isCorrect };
  }
  const isCorrect = userAnswer === q.answer;
  return { creditFraction: isCorrect ? 1 : 0, isCorrect };
}

// 作答後的「對答案」區塊(錯題本、模擬考與歷屆試題的成績頁共用):選擇題把選項全部列出來,
// 正解標成 is-correct、使用者選錯的標成 is-wrong;選填題直接寫出正確答案。
// 不傳 userAnswer(錯題本)就只標正解。
export function renderAnswerReview(q, userAnswer) {
  if (q.type === 'numeric') return el('p', { class: 'feedback-correct' }, `正確答案:${q.answerText}`);
  if (q.type === 'numeric-multi') {
    return el('p', { class: 'feedback-correct' }, `正確答案:${q.blanks.map((b) => `${b.label}=${b.answerText}`).join('、')}`);
  }
  const correct = new Set(q.type === 'multi' ? q.answers : [q.answer]);
  const selected = new Set(q.type === 'multi' ? userAnswer || [] : userAnswer != null ? [userAnswer] : []);
  return el(
    'div',
    { class: 'quiz-options' },
    q.options.map((opt, i) =>
      el('div', { class: `quiz-option-row static${correct.has(i) ? ' is-correct' : selected.has(i) ? ' is-wrong' : ''}` }, el('span', {}, opt))
    )
  );
}

// 產生一題的作答欄位(radio/checkbox/文字輸入,依 type 而定)。
// onChange(value) 會在使用者改變作答時呼叫(用來即時記錄目前輸入的值);
// value 的形狀依題型而定(單選: index number;多選: Set<number>;選填: string)。
// onCommit() 是「這題確定作答完畢,可以判分」的時機:
// 單選點一下就是確定,所以直接在 onChange 當下處理;
// 選填要等使用者按 Enter 或離開欄位(blur)才算確定;
// 多選需要勾選好幾個選項才算作答完畢,不能勾第一個就判分,
// 所以在 showConfirmButton 為真時(練習模式)額外顯示「確認答案」按鈕,由使用者自己決定何時送出這題。
// initial 是還原用的初始作答(模擬考中斷後從暫存續考,見 storage.js 的 saveExamDraft),
// 形狀跟 onChange 的 value 一樣;不給就是空白作答欄。
// 回傳 { optionsWrap, getValue }。
export function renderAnswerField(q, index, onChange, onCommit, showConfirmButton, initial = null) {
  if (q.type === 'numeric') {
    const input = el('input', {
      type: 'text',
      inputmode: 'decimal',
      class: 'quiz-numeric-input',
      placeholder: '輸入答案',
      'aria-label': `第 ${index + 1} 題作答欄`,
    });
    if (initial != null) input.value = String(initial);
    input.addEventListener('input', () => onChange(input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        input.blur();
      }
    });
    input.addEventListener('blur', () => {
      if (input.value.trim() !== '') onCommit?.();
    });
    const wrap = el('div', { class: 'quiz-numeric-wrap' }, input);
    return { optionsWrap: wrap, getValue: () => input.value, inputs: [input] };
  }

  if (q.type === 'numeric-multi') {
    const values = q.blanks.map((_, i) => String(initial?.[i] ?? ''));
    const inputs = [];
    const wrap = el('div', { class: 'quiz-numeric-multi-wrap' });
    q.blanks.forEach((blank, i) => {
      const input = el('input', {
        type: 'text',
        inputmode: 'text',
        class: 'quiz-numeric-input quiz-numeric-input-small',
        placeholder: blank.label,
        'aria-label': `第 ${index + 1} 題 ${blank.label}`,
      });
      input.value = values[i];
      input.addEventListener('input', () => {
        values[i] = input.value;
        onChange([...values]);
      });
      input.addEventListener('blur', () => {
        if (values.every((v) => v.trim() !== '')) onCommit?.();
      });
      inputs.push(input);
      wrap.append(el('div', { class: 'quiz-numeric-multi-item' }, [el('span', { class: 'quiz-numeric-multi-label' }, blank.label), input]));
    });
    return { optionsWrap: wrap, getValue: () => [...values], inputs };
  }

  if (q.type === 'written') {
    const textarea = el('textarea', {
      class: 'quiz-written-textarea',
      placeholder: '(選填)在這裡寫下你的解題過程或答案,方便等一下對照詳解',
    });
    if (initial != null) textarea.value = String(initial);
    textarea.addEventListener('input', () => onChange(textarea.value));
    const wrap = el('div', { class: 'quiz-written-wrap' }, textarea);
    return { optionsWrap: wrap, getValue: () => textarea.value, inputs: [textarea] };
  }

  if (q.type === 'hybrid') {
    const state = { choice: initial?.choice ?? null, written: initial?.written ?? '' };
    const inputs = [];
    const choiceWrap = el('div', { class: 'quiz-options' });
    q.options.forEach((opt, optIndex) => {
      const optId = `q${index}-opt${optIndex}`;
      const radio = el('input', { type: 'radio', name: `q${index}`, id: optId, value: optIndex });
      radio.checked = state.choice === optIndex;
      radio.addEventListener('change', () => {
        state.choice = optIndex;
        onChange({ ...state });
      });
      inputs.push(radio);
      choiceWrap.append(el('div', { class: 'quiz-option-row' }, [radio, el('label', { for: optId }, opt)]));
    });
    const textarea = el('textarea', {
      class: 'quiz-written-textarea',
      placeholder: `(選填)${q.writtenPrompt || '寫下你的簡答'}`,
    });
    textarea.value = state.written;
    textarea.addEventListener('input', () => {
      state.written = textarea.value;
      onChange({ ...state });
    });
    inputs.push(textarea);
    const wrap = el('div', { class: 'quiz-hybrid-wrap' }, [choiceWrap, textarea]);
    return { optionsWrap: wrap, getValue: () => ({ ...state }), inputs };
  }

  if (q.type === 'multi') {
    const selected = new Set(initial || []);
    const inputs = [];
    const wrap = el('div', { class: 'quiz-options' });
    q.options.forEach((opt, optIndex) => {
      const optId = `q${index}-opt${optIndex}`;
      const checkbox = el('input', { type: 'checkbox', id: optId, value: optIndex });
      checkbox.checked = selected.has(optIndex);
      checkbox.addEventListener('change', () => {
        if (checkbox.checked) selected.add(optIndex);
        else selected.delete(optIndex);
        onChange(new Set(selected));
      });
      inputs.push(checkbox);
      wrap.append(el('div', { class: 'quiz-option-row' }, [checkbox, el('label', { for: optId }, opt)]));
    });
    if (showConfirmButton) {
      const confirmBtn = el(
        'button',
        { type: 'button', class: 'btn-pill btn-pill-outline quiz-confirm-btn' },
        '確認答案'
      );
      confirmBtn.addEventListener('click', () => {
        confirmBtn.disabled = true;
        onCommit?.();
      });
      inputs.push(confirmBtn);
      wrap.append(confirmBtn);
    }
    return { optionsWrap: wrap, getValue: () => new Set(selected), inputs };
  }

  // 單選(預設)
  const inputs = [];
  const wrap = el('div', { class: 'quiz-options' });
  let value = initial ?? null;
  q.options.forEach((opt, optIndex) => {
    const optId = `q${index}-opt${optIndex}`;
    const radio = el('input', { type: 'radio', name: `q${index}`, id: optId, value: optIndex });
    radio.checked = value === optIndex;
    radio.addEventListener('change', () => {
      value = optIndex;
      onChange(value);
    });
    inputs.push(radio);
    wrap.append(el('div', { class: 'quiz-option-row' }, [radio, el('label', { for: optId }, opt)]));
  });
  return { optionsWrap: wrap, getValue: () => value, inputs };
}

// 作答完畢後,把正確/錯誤的選項標示出來(single/multi 才有選項可以標示)。
export function markAnswerFeedback(field, q, userAnswer) {
  const rows = field.optionsWrap.querySelectorAll('.quiz-option-row');
  field.inputs.forEach((input) => (input.disabled = true));

  if (q.type === 'numeric' || q.type === 'numeric-multi' || q.type === 'written') return;

  if (q.type === 'hybrid') {
    const correctSet = new Set([q.answer]);
    const selectedSet = new Set(userAnswer?.choice != null ? [userAnswer.choice] : []);
    rows.forEach((row, optIndex) => {
      if (correctSet.has(optIndex)) row.classList.add('is-correct');
      else if (selectedSet.has(optIndex)) row.classList.add('is-wrong');
    });
    return;
  }

  const correctSet = q.type === 'multi' ? new Set(q.answers) : new Set([q.answer]);
  const selectedSet = q.type === 'multi' ? new Set(userAnswer || []) : new Set(userAnswer != null ? [userAnswer] : []);
  rows.forEach((row, optIndex) => {
    if (correctSet.has(optIndex)) row.classList.add('is-correct');
    else if (selectedSet.has(optIndex)) row.classList.add('is-wrong');
  });
}

// 一題的正確答案(寫進作答紀錄的 correct 欄位用):多選是 index 陣列、選填是答案字串,
// 單選跟 hybrid 的勾選部分是 index。
export function correctAnswerOf(q) {
  if (q.type === 'multi') return q.answers;
  if (q.type === 'numeric') return q.answerText;
  if (q.type === 'numeric-multi') return q.blanks.map((b) => b.answerText);
  return q.answer;
}

// 作答內容存進 localStorage 前後的轉換:多選用 Set,JSON 存不了,存成陣列、讀回來再包回 Set。
export function serializeAnswer(answer) {
  return answer instanceof Set ? Array.from(answer) : answer;
}
export function deserializeAnswer(q, saved) {
  if (saved == null) return null;
  return q.type === 'multi' ? new Set(saved) : saved;
}

// 這題「作答完成了沒」,給送出前的未作答提醒、作答進度計數用:單選要有選、多選至少勾
// 一個、選填每一格都不能空、hybrid 的勾選部分要有選。純寫答的非選擇題本來就是選填的,
// 一律算完成(不強迫作答)。
export function isAnswered(q, answer) {
  if (q.type === 'written') return true;
  if (answer == null) return false;
  if (q.type === 'numeric-multi') return answer.every((v) => String(v ?? '').trim() !== '');
  if (q.type === 'numeric') return String(answer).trim() !== '';
  if (q.type === 'hybrid') return answer.choice != null;
  if (q.type === 'multi') return answer.size > 0;
  return true;
}

export function typeLabel(type) {
  if (type === 'multi') return '多選';
  if (type === 'numeric' || type === 'numeric-multi') return '選填';
  if (type === 'written') return '非選';
  if (type === 'hybrid') return '混合(勾選+簡答)';
  return '單選';
}
