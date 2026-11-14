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

// units 是這個科目目前「現存」的單元陣列。只算現存單元的完成標記,單元重新編排後
// 留在舊紀錄裡、已經不存在的單元 id 才不會把完成數灌到超過總數。
export function getSubjectProgress(subjectId, units) {
  const progress = getProgress()[subjectId] || {};
  const total = units.length;
  const completed = units.filter((u) => progress[u.id]?.completed).length;
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0,
  };
}

// ---- 測驗作答紀錄(每次測驗一筆,累加不覆蓋) ----
// {
//   id, subjectId, unitId, mode: 'practice'|'exam'|'retest'|'mock', takenAt,
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
  reopenMasteredIfWrong(record);
  const all = readJSON('quizResults', []);
  all.push(record);
  writeJSON('quizResults', all);
}

// 練習模式邊答邊存:同一次測驗共用一個 id,每答完一題就用最新的作答內容覆蓋同 id 的
// 那一筆(沒有就新增)。中途離開頁面,已經答過的題目(尤其是答錯要進錯題本的)不會
// 跟著消失。錯題本「已熟練」重置的判斷只看這次新增的作答,免得每次覆蓋都重複處理。
export function upsertQuizResult(record) {
  const all = readJSON('quizResults', []);
  const index = all.findIndex((r) => r.id === record.id);
  const knownIds = new Set(index === -1 ? [] : all[index].answers.map((a) => a.questionId));
  reopenMasteredIfWrong({ ...record, answers: record.answers.filter((a) => !knownIds.has(a.questionId)) });
  if (index === -1) all.push(record);
  else all[index] = record;
  writeJSON('quizResults', all);
}

// ---- 錯題本 ----
// wrongBookState: { [questionId]: { mastered: boolean, everMastered?: boolean } }
// 錯題本內容不另外重複儲存題目,而是即時從 quizResults 彙整「每題最近一次作答結果」，
// 取出最近一次答錯、且尚未被標記「已熟練」的題目。
// 已標記熟練的題目之後如果又答錯,mastered 會被清掉、題目回到錯題本(見
// reopenMasteredIfWrong);everMastered 記住「曾經熟練過」,讓成就用的熟練題數不會
// 因為重新答錯就倒退。

function getWrongBookState() {
  return readJSON('wrongBookState', {});
}

export function markQuestionMastered(questionId, mastered = true) {
  const state = getWrongBookState();
  state[questionId] = { ...(state[questionId] || {}), mastered };
  writeJSON('wrongBookState', state);
}

function reopenMasteredIfWrong(record) {
  const state = getWrongBookState();
  let changed = false;
  for (const ans of record.answers || []) {
    const entry = state[ans.questionId];
    if (entry?.mastered && ans.isCorrect === false) {
      state[ans.questionId] = { ...entry, mastered: false, everMastered: true };
      changed = true;
    }
  }
  if (changed) writeJSON('wrongBookState', state);
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

// 歷屆試題含非選擇題時,先存一筆暫時的紀錄(writtenPending: true),使用者自行對完
// 答案後再用這個函式補上最終級分,避免中途離開頁面整筆考試紀錄就不見。
export function updateMockExamResult(id, patch) {
  const all = readJSON('mockExamHistory', []);
  const index = all.findIndex((r) => r.id === id);
  if (index === -1) return;
  all[index] = { ...all[index], ...patch };
  writeJSON('mockExamHistory', all);
}

// ---- 進行中的模擬考暫存(只存這台裝置,不同步) ----
// 模擬考/歷屆試題作答到一半,題目跟作答內容每次變動都存一份,不小心重新整理、關掉分頁或
// 離開頁面之後可以接著考(計時是用「結束時間」算的,離開的這段時間不會暫停)。
// 不走 writeJSON:不觸發雲端同步、也不更新 updatedAt——考到一半的暫存沒必要跟著帳號
// 跑到別的裝置,而且題目全文很大。題目(考試開始時存一次)跟作答(每次變動存一次)分成
// 兩個 key,作答內容小,才能頻繁存。kind 是 'mock'(題庫模擬考)或 'real'(歷屆試題)。
const DRAFT_MAX_AGE_MS = 7 * 24 * 3600 * 1000;

function draftKeys(kind, subjectKey) {
  return { main: key(`examDraft_${kind}_${subjectKey}`), answers: key(`examDraftA_${kind}_${subjectKey}`) };
}

// 回傳有沒有存成功(localStorage 滿了會失敗,呼叫端要改用離開頁面警告當備案)。
export function saveExamDraft(kind, subjectKey, draft) {
  const keys = draftKeys(kind, subjectKey);
  try {
    localStorage.setItem(keys.main, JSON.stringify({ ...draft, kind, subjectKey }));
    localStorage.removeItem(keys.answers);
    return true;
  } catch {
    return false;
  }
}

export function saveExamDraftAnswers(kind, subjectKey, answers) {
  try {
    localStorage.setItem(draftKeys(kind, subjectKey).answers, JSON.stringify(answers));
  } catch {
    // 存不進去就算了,下次變動再試。
  }
}

export function clearExamDraft(kind, subjectKey) {
  const keys = draftKeys(kind, subjectKey);
  localStorage.removeItem(keys.main);
  localStorage.removeItem(keys.answers);
}

export function getExamDraft(kind, subjectKey) {
  const keys = draftKeys(kind, subjectKey);
  let main = null;
  try {
    main = JSON.parse(localStorage.getItem(keys.main));
  } catch {
    main = null;
  }
  if (!main || !Array.isArray(main.questions)) return null;
  if (Date.now() - (main.startedAt || 0) > DRAFT_MAX_AGE_MS) {
    clearExamDraft(kind, subjectKey);
    return null;
  }
  let answers = [];
  try {
    answers = JSON.parse(localStorage.getItem(keys.answers)) || [];
  } catch {
    answers = [];
  }
  return { ...main, answers };
}

// 目前這個帳號所有還沒交卷的考試暫存(首頁、模擬考頁用來提醒「你有一份考試還沒交卷」)。
export function listExamDrafts() {
  const prefix = 'studysite_examDraft_';
  const suffix = `_${activeUid || 'anon'}`;
  const drafts = [];
  // 先收集 key 再處理:getExamDraft 遇到過期的暫存會直接刪掉,邊走邊刪會讓 index 亂掉。
  const allKeys = Array.from({ length: localStorage.length }, (_, i) => localStorage.key(i));
  for (const k of allKeys) {
    if (!k || !k.startsWith(prefix) || !k.endsWith(suffix)) continue;
    const [kind, subjectKey] = k.slice(prefix.length, k.length - suffix.length).split('_');
    const draft = kind && subjectKey ? getExamDraft(kind, subjectKey) : null;
    if (draft) drafts.push(draft);
  }
  return drafts.sort((a, b) => b.startedAt - a.startedAt);
}

// ---- 讀書設定 ----
// 目前只有目標考試日期('YYYY-MM-DD'),沒設定過就回傳 null,
// 由 study-plan.js 決定要用什麼預設值。

export function getExamDate() {
  return readJSON('examDate', null);
}

export function setExamDate(dateString) {
  writeJSON('examDate', dateString);
}

// 錯題本裡標記過「已熟練」的題目數,成就徽章用。曾經熟練、之後又答錯而回到
// 錯題本的題目仍然算(見 reopenMasteredIfWrong),所以已解鎖的成就不會倒退。
export function getMasteredCount() {
  return Object.values(getWrongBookState()).filter((s) => s.mastered || s.everMastered).length;
}

// ---- 成就徽章「已看過」狀態 ----
// 用來判斷這次要不要顯示解鎖慶祝效果(NEW 標籤/頭像紅點)。跟著帳號一起同步
// (見 getSnapshot/mergeSnapshot),不然換一台裝置登入,所有已解鎖的成就都會被當成
// 「新解鎖」再慶祝一次。只有真的多看過新的成就時才會觸發同步,不會每次進成就頁都推。
export function getSeenAchievements() {
  return readJSON('seenAchievements', []);
}

export function markAchievementsSeen(ids) {
  const seen = new Set(getSeenAchievements());
  const sizeBefore = seen.size;
  for (const id of ids) seen.add(id);
  if (seen.size === sizeBefore) return;
  writeJSON('seenAchievements', [...seen]);
}

// ---- 登入日 ----
// 有打開網站的日期(本機時區的 YYYY-MM-DD),給「登入天數」成就用。一天只寫一次,
// 所以一天最多多觸發一次雲端同步。2026-11 才開始記,之前的日子由 achievements.js
// 拿「有作答的日子」補(有作答一定有登入)。
function localDateString(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function getVisitDays() {
  return readJSON('visitDays', []);
}

// 回傳 true 代表今天是第一次記,呼叫端要推一次雲端。
export function recordVisitDay() {
  const today = localDateString();
  const days = getVisitDays();
  if (days.includes(today)) return false;
  writeJSON('visitDays', [...days, today].sort());
  return true;
}

// ---- 雲端同步用:整包快照存取(見 cloud-sync.js) ----

export function getSnapshot() {
  return {
    progress: getProgress(),
    quizResults: readJSON('quizResults', []),
    wrongBookState: getWrongBookState(),
    mockExamHistory: readJSON('mockExamHistory', []),
    examDate: getExamDate(),
    seenAchievements: getSeenAchievements(),
    visitDays: getVisitDays(),
    updatedAt: localStorage.getItem(key('updatedAt')) || null,
  };
}

// 測驗/模擬考紀錄是「只增不減」的清單,每筆有唯一 id,合併時取聯集;同一個 id
// 兩邊內容不同(例如暫存的模擬考紀錄後來補上非選擇題成績),以 preferred 那份為準。
function unionRecords(preferred = [], other = []) {
  const ids = new Set(preferred.map((r) => r.id));
  return [...preferred, ...other.filter((r) => !ids.has(r.id))].sort(
    (a, b) => new Date(a.takenAt) - new Date(b.takenAt)
  );
}

function mergeProgress(preferred = {}, other = {}) {
  const merged = {};
  for (const subjectId of new Set([...Object.keys(other), ...Object.keys(preferred)])) {
    merged[subjectId] = { ...(other[subjectId] || {}), ...(preferred[subjectId] || {}) };
  }
  return merged;
}

// 只看「內容」的比對用字串(不含 updatedAt),用來判斷兩份快照的資料是否相同。
function contentKey(s) {
  return JSON.stringify([
    s.progress || {},
    s.quizResults || [],
    s.wrongBookState || {},
    s.mockExamHistory || [],
    s.examDate || null,
    [...(s.seenAchievements || [])].sort(),
    [...(s.visitDays || [])].sort(),
  ]);
}

// 目前本機資料的內容指紋,cloud-sync.js 用來偵測「雲端資料晚一步併進來、畫面上
// 顯示的還是舊的」這種情況。
export function getContentFingerprint() {
  return contentKey(getSnapshot());
}

// 把雲端快照併進本機(取代原本「誰的 updatedAt 新就整份蓋掉另一份」的做法 ——
// 那樣兩邊各自有不同紀錄時,輸的那邊整份消失,例如新裝置在跟雲端比對完成前就先
// 作答,或兩台裝置都離線用過)。updatedAt 較新的那份在有衝突時優先;回傳 true 代表
// 合併結果含有雲端沒有的內容,呼叫端要再推一次上雲端。
export function mergeSnapshot(remote) {
  if (!remote) return false;
  const local = getSnapshot();
  const remoteNewer = (remote.updatedAt || '') > (local.updatedAt || '');
  const preferred = remoteNewer ? remote : local;
  const other = remoteNewer ? local : remote;

  const merged = {
    progress: mergeProgress(preferred.progress, other.progress),
    quizResults: unionRecords(preferred.quizResults, other.quizResults),
    wrongBookState: { ...(other.wrongBookState || {}), ...(preferred.wrongBookState || {}) },
    mockExamHistory: unionRecords(preferred.mockExamHistory, other.mockExamHistory),
    examDate: preferred.examDate || other.examDate || null,
    seenAchievements: [...new Set([...(local.seenAchievements || []), ...(remote.seenAchievements || [])])],
    visitDays: [...new Set([...(local.visitDays || []), ...(remote.visitDays || [])])].sort(),
  };

  const hasNewForRemote = contentKey(merged) !== contentKey(remote);
  // 合併後有雲端沒有的內容時,updatedAt 要更新成現在,其他裝置才會發現雲端有新資料。
  merged.updatedAt = hasNewForRemote
    ? new Date().toISOString()
    : remote.updatedAt || local.updatedAt || null;

  localStorage.setItem(key('progress'), JSON.stringify(merged.progress));
  localStorage.setItem(key('quizResults'), JSON.stringify(merged.quizResults));
  localStorage.setItem(key('wrongBookState'), JSON.stringify(merged.wrongBookState));
  localStorage.setItem(key('mockExamHistory'), JSON.stringify(merged.mockExamHistory));
  if (merged.examDate) localStorage.setItem(key('examDate'), JSON.stringify(merged.examDate));
  localStorage.setItem(key('seenAchievements'), JSON.stringify(merged.seenAchievements));
  localStorage.setItem(key('visitDays'), JSON.stringify(merged.visitDays));
  if (merged.updatedAt) localStorage.setItem(key('updatedAt'), merged.updatedAt);
  return hasNewForRemote;
}

export function getLocalUpdatedAt() {
  return localStorage.getItem(key('updatedAt'));
}
