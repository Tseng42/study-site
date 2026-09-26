// 國文/英文「課文單元」(見 chinese-lessons-*.js、english-lessons-*.js)共用的小工具,
// 讓每題資料短一點、少打錯。產生出來的題目物件格式跟 chinese.js/english.js 裡手寫的一樣
// (單選:{id, question, options, answer, explanation};多選多 type:'multi' 跟 answers;
// 題組題多 passageId/passageTitle/passage,passage 每題重複存一份,讓每題都能獨立抽取)。

export function single(id, question, options, answer, explanation) {
  return { id, question, options, answer, explanation };
}

// 選填:答案是簡短的數字或文字,去除空白後完全比對(見 js/quiz-utils.js)。
export function numeric(id, question, answerText, explanation) {
  return { id, type: 'numeric', question, answerText: String(answerText), explanation };
}

export function multi(id, question, options, answers, explanation) {
  return { id, type: 'multi', question, options, answers, explanation };
}

// 題組:先宣告文章,回傳的函式再逐題產生單選題(可以是 single 也可以是 multi)。
export function passageSet(passageId, passageTitle, passage) {
  const attach = (q) => ({ id: q.id, passageId, passageTitle, passage, ...omitId(q) });
  return {
    single: (id, question, options, answer, explanation) => attach(single(id, question, options, answer, explanation)),
    multi: (id, question, options, answers, explanation) => attach(multi(id, question, options, answers, explanation)),
  };
}

function omitId(q) {
  const { id, ...rest } = q;
  return rest;
}

// 一課的骨架。sections 用 note(heading, [bullets]) 或 table(heading, headers, rows) 組。
export function lesson({ id, title, category, tag = '課文', sections, quiz }) {
  return { id, title, category, tag, note: { sections }, quiz };
}

export function bullets(heading, content) {
  return { heading, content };
}

export function table(heading, headers, rows) {
  return { heading, table: { headers, rows } };
}

// 社會/自然的「章節單元」(見 social-chapters-*.js、science-chapters-*.js):
// 依 108 課綱課本的章節切細,跟 data/social.js、science.js 原本的大單元並存(原單元的 id 與題目
// 不變)。semester 跟原單元一樣顯示成單元列表旁的小標籤。
export function chapter({ id, title, category, semester, sections, quiz }) {
  return { id, title, category, semester, note: { sections }, quiz: numberQuiz(id, quiz) };
}

// 依出現順序幫題目編號成 `${unitId}-q1`、`-q2`…,題組的 passageId 由 passageSet 的第一個參數決定。
// 寫題目時正確答案習慣放在前面,這裡用固定的種子把選項洗成固定的另一個順序(每次載入結果相同,
// 所以錯題本、作答紀錄都對得上),作答時 prepareQuestions 還會再隨機洗一次。
export function numberQuiz(unitId, items) {
  return items.map((q, i) => scrambleOptions({ ...q, id: `${unitId}-q${i + 1}` }));
}

function scrambleOptions(q) {
  if (!q.options) return q; // 選填題沒有選項
  const n = q.options.length;
  let seed = 7;
  for (const ch of q.id) seed = (seed * 131 + ch.charCodeAt(0)) % 233280;
  const order = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    seed = (seed * 9301 + 49297) % 233280;
    const j = Math.floor((seed / 233280) * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  const options = order.map((from) => q.options[from]);
  if (q.type === 'multi') return { ...q, options, answers: q.answers.map((a) => order.indexOf(a)).sort((a, b) => a - b) };
  return { ...q, options, answer: order.indexOf(q.answer) };
}
