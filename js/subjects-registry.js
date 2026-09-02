// 統一的資料查詢入口。頁面只透過這裡讀取科目/單元/題目內容,
// 不直接 import data/*.js,方便未來擴充或調整資料檔案結構。
import { subjectsMeta } from '../data/subjects-meta.js';
import chinese from '../data/chinese.js';
import english from '../data/english.js';
import math from '../data/math.js';
import science from '../data/science.js';
import social from '../data/social.js';
import { mathRealExams } from '../data/math-real-exams.js';

const dataBySubject = { chinese, english, math, science, social };

// 歷屆試題(見 data/math-real-exams.js)不是一般單元,不會出現在 subject.html
// 的單元列表或進度統計裡,但錯題本/個人資料頁需要能依 unitId 反查回題目本身,
// 所以在這裡另外準備一份「依年度分組」的虛擬單元,只給 getUnit/getQuestion 查詢用。
const realExamUnitsBySubject = {
  math: new Map(
    mathRealExams.map((yearSet) => [
      `math-real-${yearSet.sourceYear}`,
      {
        id: `math-real-${yearSet.sourceYear}`,
        title: `${yearSet.sourceYear} 學年度學測數學 A(歷屆試題)`,
        quiz: yearSet.questions,
      },
    ])
  ),
};

export function getAllSubjects() {
  return subjectsMeta.map((meta) => ({
    ...meta,
    units: dataBySubject[meta.id]?.units || [],
  }));
}

export function getSubject(subjectId) {
  const meta = subjectsMeta.find((s) => s.id === subjectId);
  if (!meta) return null;
  return { ...meta, units: dataBySubject[subjectId]?.units || [] };
}

export function getUnit(subjectId, unitId) {
  const subject = getSubject(subjectId);
  const found = subject?.units.find((u) => u.id === unitId);
  if (found) return found;
  return realExamUnitsBySubject[subjectId]?.get(unitId) || null;
}

export function getQuestion(subjectId, unitId, questionId) {
  const unit = getUnit(subjectId, unitId);
  return unit?.quiz?.find((q) => q.id === questionId) || null;
}
