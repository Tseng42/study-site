// 國文/英文「課文單元」(見 chinese-lessons-*.js、english-lessons-*.js)共用的小工具,
// 讓每題資料短一點、少打錯。產生出來的題目物件格式跟 chinese.js/english.js 裡手寫的一樣
// (單選:{id, question, options, answer, explanation};多選多 type:'multi' 跟 answers;
// 題組題多 passageId/passageTitle/passage,passage 每題重複存一份,讓每題都能獨立抽取)。

export function single(id, question, options, answer, explanation) {
  return { id, question, options, answer, explanation };
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
