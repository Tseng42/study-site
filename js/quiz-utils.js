// 測驗題目的洗牌邏輯,單元練習跟模擬考共用。

// Fisher-Yates 洗牌,不修改原陣列。
export function shuffle(array) {
  const copy = array.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// 洗掉一題的選項順序,並同步校正正確答案的 index,其餘欄位(question/explanation/id...)原樣保留。
export function shuffleQuestionOptions(q) {
  const optionOrder = shuffle(q.options.map((_, i) => i));
  return {
    ...q,
    options: optionOrder.map((i) => q.options[i]),
    answer: optionOrder.indexOf(q.answer),
  };
}

// 從題庫中抽一份「這次要考的題目」:洗題目順序、洗每題選項順序,上限 maxCount 題。
export function prepareQuestions(pool, maxCount = 8) {
  return shuffle(pool)
    .slice(0, maxCount)
    .map(shuffleQuestionOptions);
}
