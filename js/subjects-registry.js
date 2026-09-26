// 統一的資料查詢入口。頁面只透過這裡讀取科目/單元/題目內容,
// 不直接 import data/*.js,方便未來擴充或調整資料檔案結構。
import { subjectsMeta } from '../data/subjects-meta.js';
import chinese from '../data/chinese.js';
import english from '../data/english.js';
import math from '../data/math.js';
import science from '../data/science.js';
import social from '../data/social.js';
import { chineseLessons1 } from '../data/chinese-lessons-1.js';
import { chineseLessons2 } from '../data/chinese-lessons-2.js';
import { chineseLessons3 } from '../data/chinese-lessons-3.js';
import { chineseLessons4 } from '../data/chinese-lessons-4.js';
import { chineseLessons5 } from '../data/chinese-lessons-5.js';
import { chineseLessons6 } from '../data/chinese-lessons-6.js';
import { englishLessons1 } from '../data/english-lessons-1.js';
import { englishLessons2 } from '../data/english-lessons-2.js';
import { englishLessons3 } from '../data/english-lessons-3.js';
import { englishLessons4 } from '../data/english-lessons-4.js';
import { englishLessons5 } from '../data/english-lessons-5.js';
import { englishLessons6 } from '../data/english-lessons-6.js';
import { mathRealExams } from '../data/math-real-exams.js';
import { socialRealExams } from '../data/social-real-exams.js';
import { chineseRealExams } from '../data/chinese-real-exams.js';
import { englishRealExams } from '../data/english-real-exams.js';
import { scienceRealExams } from '../data/science-real-exams.js';

// 國文、英文依課本「冊次」編排:每一冊先列課文單元(chinese-lessons-*.js、
// english-lessons-*.js,一課一個單元),再列該冊的專題單元(chinese.js、english.js
// 原本按技巧分類的單元,id 與題目維持不變,舊的作答紀錄與完成標記仍然有效)。
const VOLUME_ORDER = [
  '第一冊(高一上)',
  '第二冊(高一下)',
  '第三冊(高二上)',
  '第四冊(高二下)',
  '第五冊(高三上)',
  '第六冊(高三下)',
];

function mergeTextbookUnits(topicalUnits, lessonUnits) {
  const withTag = topicalUnits.map((u) => ({ ...u, tag: '專題' }));
  return [...lessonUnits, ...withTag]
    .map((unit, index) => ({ unit, index }))
    .sort((a, b) => VOLUME_ORDER.indexOf(a.unit.category) - VOLUME_ORDER.indexOf(b.unit.category) || a.index - b.index)
    .map(({ unit }) => unit);
}

const chineseWithLessons = {
  ...chinese,
  units: mergeTextbookUnits(chinese.units, [
    ...chineseLessons1,
    ...chineseLessons2,
    ...chineseLessons3,
    ...chineseLessons4,
    ...chineseLessons5,
    ...chineseLessons6,
  ]),
};

const englishWithLessons = {
  ...english,
  units: mergeTextbookUnits(english.units, [
    ...englishLessons1,
    ...englishLessons2,
    ...englishLessons3,
    ...englishLessons4,
    ...englishLessons5,
    ...englishLessons6,
  ]),
};

const dataBySubject = { chinese: chineseWithLessons, english: englishWithLessons, math, science, social };

// 歷屆試題(見 data/math-real-exams.js、data/social-real-exams.js)不是一般單元,
// 不會出現在 subject.html 的單元列表或進度統計裡,但錯題本/個人資料頁需要能依
// unitId 反查回題目本身,所以在這裡另外準備一份「依年度分組」的虛擬單元,只給
// getUnit/getQuestion 查詢用。
function buildRealExamUnits(realExams, historyId, subjectName) {
  return new Map(
    realExams.map((yearSet) => [
      `${historyId}-${yearSet.sourceYear}`,
      {
        id: `${historyId}-${yearSet.sourceYear}`,
        title: `${yearSet.sourceYear} 學年度學測${subjectName}(歷屆試題)`,
        quiz: yearSet.questions,
      },
    ])
  );
}

const realExamUnitsBySubject = {
  math: buildRealExamUnits(mathRealExams, 'math-real', '數學 A'),
  social: buildRealExamUnits(socialRealExams, 'social-real', '社會'),
  chinese: buildRealExamUnits(chineseRealExams, 'chinese-real', '國文'),
  english: buildRealExamUnits(englishRealExams, 'english-real', '英文'),
  science: buildRealExamUnits(scienceRealExams, 'science-real', '自然'),
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
  const direct = unit?.quiz?.find((q) => q.id === questionId);
  if (direct) return direct;
  // hybrid 題型(勾選+簡答)的簡答部分,自行對答案時用 `{id}-written` 當作獨立的
  // questionId(避免跟勾選部分的自動判分結果在錯題本裡互相覆蓋,見
  // js/page-real-exam.js 的 finish()),這裡把它解回原本的 hybrid 題目本身,
  // 讓錯題本能正確顯示題目內容與官方詳解。
  if (questionId?.endsWith('-written')) {
    const baseId = questionId.slice(0, -'-written'.length);
    return unit?.quiz?.find((q) => q.id === baseId) || null;
  }
  return null;
}
