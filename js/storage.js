// 封裝所有 localStorage 存取。之後如果要換成真的資料庫 API,
// 只需要改這個檔案內部的實作,對外的函式名稱與回傳格式維持不變即可。

const KEYS = {
  progress: 'studysite_progress',
  quizResults: 'studysite_quizResults',
  wrongBookState: 'studysite_wrongBookState',
};

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// ---- 讀書進度 ----
// { [subjectId]: { [unitId]: { completed: boolean, completedAt: string|null } } }

export function getProgress() {
  return readJSON(KEYS.progress, {});
}

export function setUnitCompleted(subjectId, unitId, completed) {
  const progress = getProgress();
  if (!progress[subjectId]) progress[subjectId] = {};
  progress[subjectId][unitId] = {
    completed,
    completedAt: completed ? new Date().toISOString() : null,
  };
  writeJSON(KEYS.progress, progress);
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
  const all = readJSON(KEYS.quizResults, []);
  return all.filter(
    (r) => (!subjectId || r.subjectId === subjectId) && (!unitId || r.unitId === unitId)
  );
}

export function addQuizResult(record) {
  const all = readJSON(KEYS.quizResults, []);
  all.push(record);
  writeJSON(KEYS.quizResults, all);
}

// ---- 錯題本 ----
// wrongBookState: { [questionId]: { mastered: boolean } }
// 錯題本內容不另外重複儲存題目,而是即時從 quizResults 彙整「每題最近一次作答結果」，
// 取出最近一次答錯、且尚未被標記「已熟練」的題目。

function getWrongBookState() {
  return readJSON(KEYS.wrongBookState, {});
}

export function markQuestionMastered(questionId, mastered = true) {
  const state = getWrongBookState();
  state[questionId] = { ...(state[questionId] || {}), mastered };
  writeJSON(KEYS.wrongBookState, state);
}

export function getWrongQuestions() {
  const results = readJSON(KEYS.quizResults, [])
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
