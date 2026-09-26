// 錯題本裡「真的看得到」的待複習題目。storage.js 的 getWrongQuestions() 只看作答紀錄,
// 題庫改版(單元重新編排、題目被刪掉)之後,舊紀錄可能指向已經不存在的題目,那種
// 紀錄畫面上沒辦法顯示,不能算進「待複習 N 題」的數字裡,不然數字跟看到的張數對不上。
import { getWrongQuestions } from './storage.js';
import { getQuestion } from './subjects-registry.js';

export function getReviewableWrongQuestions() {
  return getWrongQuestions().filter((w) => getQuestion(w.subjectId, w.unitId, w.questionId));
}
