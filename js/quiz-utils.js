// 測驗題目的共用邏輯:洗牌、渲染作答欄位、計分。單元練習跟模擬考共用,
// 確保「單選/多選/選填」三種題型不管在哪個頁面出現,行為都一致。
//
// 題目資料格式(type 省略時視為 'single',跟舊資料相容):
//   單選 type:'single'  { options:[...4], answer: index }
//   多選 type:'multi'   { options:[...n], answers: [index, ...] }
//   選填 type:'numeric' { answerText: '3' }  // 純數字/簡短文字,去除空白後完全比對
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

// 洗掉一題的選項順序(單選/多選才有選項),並同步校正正確答案的 index。
export function shuffleQuestionOptions(q) {
  if (q.type === 'numeric') return { ...q };

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
    const normalize = (s) => String(s ?? '').trim().replace(/\s+/g, '');
    const isCorrect = userAnswer != null && normalize(userAnswer) === normalize(q.answerText);
    return { creditFraction: isCorrect ? 1 : 0, isCorrect };
  }
  const isCorrect = userAnswer === q.answer;
  return { creditFraction: isCorrect ? 1 : 0, isCorrect };
}

// 產生一題的作答欄位(radio/checkbox/文字輸入,依 type 而定)。
// onChange(value) 會在使用者改變作答時呼叫(用來即時記錄目前輸入的值);
// value 的形狀依題型而定(單選: index number;多選: Set<number>;選填: string)。
// onCommit() 是「這題確定作答完畢,可以判分」的時機:
// 單選點一下就是確定,所以直接在 onChange 當下處理;
// 選填要等使用者按 Enter 或離開欄位(blur)才算確定;
// 多選需要勾選好幾個選項才算作答完畢,不能勾第一個就判分,
// 所以在 showConfirmButton 為真時(練習模式)額外顯示「確認答案」按鈕,由使用者自己決定何時送出這題。
// 回傳 { optionsWrap, getValue }。
export function renderAnswerField(q, index, onChange, onCommit, showConfirmButton) {
  if (q.type === 'numeric') {
    const input = el('input', {
      type: 'text',
      inputmode: 'decimal',
      class: 'quiz-numeric-input',
      placeholder: '輸入答案後按 Enter 或點選其他地方',
      'aria-label': `第 ${index + 1} 題作答欄`,
    });
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

  if (q.type === 'multi') {
    const selected = new Set();
    const inputs = [];
    const wrap = el('div', { class: 'quiz-options' });
    q.options.forEach((opt, optIndex) => {
      const optId = `q${index}-opt${optIndex}`;
      const checkbox = el('input', { type: 'checkbox', id: optId, value: optIndex });
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
  let value = null;
  q.options.forEach((opt, optIndex) => {
    const optId = `q${index}-opt${optIndex}`;
    const radio = el('input', { type: 'radio', name: `q${index}`, id: optId, value: optIndex });
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

  if (q.type === 'numeric') return;

  const correctSet = q.type === 'multi' ? new Set(q.answers) : new Set([q.answer]);
  const selectedSet = q.type === 'multi' ? new Set(userAnswer || []) : new Set(userAnswer != null ? [userAnswer] : []);
  rows.forEach((row, optIndex) => {
    if (correctSet.has(optIndex)) row.classList.add('is-correct');
    else if (selectedSet.has(optIndex)) row.classList.add('is-wrong');
  });
}

export function typeLabel(type) {
  if (type === 'multi') return '多選';
  if (type === 'numeric') return '選填';
  return '單選';
}
