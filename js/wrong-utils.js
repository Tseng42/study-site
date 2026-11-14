// 錯題本裡「真的看得到」的待複習題目。storage.js 的 getWrongQuestions() 只看作答紀錄,
// 題庫改版(單元重新編排、題目被刪掉)之後,舊紀錄可能指向已經不存在的題目,那種
// 紀錄畫面上沒辦法顯示,不能算進「待複習 N 題」的數字裡,不然數字跟看到的張數對不上。
// 每題另外帶著間隔複習的排程(stage、dueDay、isDue,見 storage.js),排到考試日之後的
// 複習會提前到考試前一天。
import { getWrongQuestions, localDayIndex } from './storage.js';
import { getQuestion } from './subjects-registry.js';
import { resolveExamDate } from './study-plan.js';

export function getReviewableWrongQuestions() {
  const lastReviewDay = localDayIndex(resolveExamDate()) - 1;
  return getWrongQuestions({ lastReviewDay }).filter((w) => getQuestion(w.subjectId, w.unitId, w.questionId));
}

// 「最近答錯的排前面」用的排序鍵。
export function byLastWrongDesc(a, b) {
  return new Date(b.lastWrongAt || b.lastAttemptAt) - new Date(a.lastWrongAt || a.lastAttemptAt);
}
