// 封裝所有本機資料存取(localStorage,依登入帳號分開存放)。
// 對外的函式名稱與回傳格式維持不變,雲端同步是額外掛上去的,
// 這個檔案本身完全不知道 Firebase 的存在(見 cloud-sync.js)。

let activeUid = null;
const listeners = [];

export function setActiveUser(uid) {
  activeUid = uid;
}

// 每次本機資料被寫入時觸發,cloud-sync.js 用這個決定何時要推上雲端。
export function onChange(fn) {
  listeners.push(fn);
}

function notifyChange() {
  for (const fn of listeners) fn();
}

function key(name) {
  return `studysite_${name}_${activeUid || 'anon'}`;
}

function readJSON(name, fallback) {
  try {
    const raw = localStorage.getItem(key(name));
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(name, value) {
  localStorage.setItem(key(name), JSON.stringify(value));
  localStorage.setItem(key('updatedAt'), new Date().toISOString());
  notifyChange();
}

// ---- 讀書進度 ----
// { [subjectId]: { [unitId]: { completed: boolean, completedAt: string|null } } }

export function getProgress() {
  return readJSON('progress', {});
}

export function setUnitCompleted(subjectId, unitId, completed) {
  const progress = getProgress();
  if (!progress[subjectId]) progress[subjectId] = {};
  progress[subjectId][unitId] = {
    completed,
    completedAt: completed ? new Date().toISOString() : null,
  };
  writeJSON('progress', progress);
}

export function isUnitCompleted(subjectId, unitId) {
  const progress = getProgress();
  return !!progress[subjectId]?.[unitId]?.completed;
}

export function getSubjectProgress(subjectId, totalUnits) {
  const progress = getProgress()[subjectId] || {};
  const completed = Object.values(progress).filter((u) => u.completed).length;
  return {
    completed,
    total: totalUnits,
    percent: totalUnits ? Math.round((completed / totalUnits) * 100) : 0,
  };
}

// ---- 測驗作答紀錄(每次測驗一筆,累加不覆蓋) ----
// {
//   id, subjectId, unitId, mode: 'practice'|'exam', takenAt,
//   score, total,
//   answers: [{ questionId, selected, correct, isCorrect }]
// }

export function getQuizResults(subjectId, unitId) {
  const all = readJSON('quizResults', []);
  return all.filter(
    (r) => (!subjectId || r.subjectId === subjectId) && (!unitId || r.unitId === unitId)
  );
}

export function addQuizResult(record) {
  const all = readJSON('quizResults', []);
  all.push(record);
  writeJSON('quizResults', all);
}

// ---- 錯題本 ----
// wrongBookState: { [questionId]: { mastered: boolean } }
// 錯題本內容不另外重複儲存題目,而是即時從 quizResults 彙整「每題最近一次作答結果」，
// 取出最近一次答錯、且尚未被標記「已熟練」的題目。

function getWrongBookState() {
  return readJSON('wrongBookState', {});
}

export function markQuestionMastered(questionId, mastered = true) {
  const state = getWrongBookState();
  state[questionId] = { ...(state[questionId] || {}), mastered };
  writeJSON('wrongBookState', state);
}

export function getWrongQuestions() {
  const results = readJSON('quizResults', [])
    .slice()
    .sort((a, b) => new Date(a.takenAt) - new Date(b.takenAt));
  const state = getWrongBookState();
  const latestByQuestion = new Map();

  for (const result of results) {
    for (const ans of result.answers) {
      latestByQuestion.set(ans.questionId, {
        subjectId: result.subjectId,
        unitId: result.unitId,
        questionId: ans.questionId,
        isCorrect: ans.isCorrect,
        lastAttemptAt: result.takenAt,
      });
    }
  }

  return Array.from(latestByQuestion.values()).filter(
    (q) => !q.isCorrect && !state[q.questionId]?.mastered
  );
}

// ---- 模擬考紀錄(每次模擬考一筆整體摘要,個別題目的對錯另外分散寫進 quizResults) ----
// { id, subjectId, takenAt, score, total, percent, estimatedBand, minutesUsed }

export function getMockExamHistory(subjectId) {
  const all = readJSON('mockExamHistory', []);
  return subjectId ? all.filter((r) => r.subjectId === subjectId) : all;
}

export function addMockExamResult(record) {
  const all = readJSON('mockExamHistory', []);
  all.push(record);
  writeJSON('mockExamHistory', all);
}

// ---- 雲端同步用:整包快照存取(見 cloud-sync.js) ----

export function getSnapshot() {
  return {
    progress: getProgress(),
    quizResults: readJSON('quizResults', []),
    wrongBookState: getWrongBookState(),
    mockExamHistory: readJSON('mockExamHistory', []),
    updatedAt: localStorage.getItem(key('updatedAt')) || null,
  };
}

export function applySnapshot(snapshot) {
  if (!snapshot) return;
  localStorage.setItem(key('progress'), JSON.stringify(snapshot.progress || {}));
  localStorage.setItem(key('quizResults'), JSON.stringify(snapshot.quizResults || []));
  localStorage.setItem(key('wrongBookState'), JSON.stringify(snapshot.wrongBookState || {}));
  localStorage.setItem(key('mockExamHistory'), JSON.stringify(snapshot.mockExamHistory || []));
  if (snapshot.updatedAt) localStorage.setItem(key('updatedAt'), snapshot.updatedAt);
}

export function getLocalUpdatedAt() {
  return localStorage.getItem(key('updatedAt'));
}
