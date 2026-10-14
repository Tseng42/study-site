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
import { chineseLessonsLongteng } from '../data/chinese-lessons-lt.js';
import { chineseLessonsLongtengModern } from '../data/chinese-lessons-lt-modern.js';
import { englishLessons1 } from '../data/english-lessons-1.js';
import { englishLessons2 } from '../data/english-lessons-2.js';
import { englishLessons3 } from '../data/english-lessons-3.js';
import { englishLessons4 } from '../data/english-lessons-4.js';
import { englishLessons5 } from '../data/english-lessons-5.js';
import { englishLessons6 } from '../data/english-lessons-6.js';
import { sciencePhysicsChapters } from '../data/science-chapters-physics.js';
import { scienceChemistryChapters } from '../data/science-chapters-chemistry.js';
import { scienceBiologyChapters } from '../data/science-chapters-biology.js';
import { scienceEarthChapters } from '../data/science-chapters-earth.js';
import { mathRealExams } from '../data/math-real-exams.js';
import { socialRealExams } from '../data/social-real-exams.js';
import { chineseRealExams } from '../data/chinese-real-exams.js';
import { englishPracticeSets } from '../data/english-practice-sets.js';
import { englishStemZh } from '../data/english-zh.js';
import { englishRealExams } from '../data/english-real-exams.js';
import { scienceRealExams } from '../data/science-real-exams.js';

// 英文依課本「冊次」編排:每一冊先列課文單元(english-lessons-*.js,一課一個單元),
// 再列該冊的專題單元(english.js 原本按技巧分類的單元,id 與題目維持不變,舊的作答
// 紀錄與完成標記仍然有效)。國文原本也這樣排,2026-10 改成按內容分類,見 CHINESE_LAYOUT。
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

// 國文照龍騰版五冊編排(2026-10-14,使用者的弟弟用龍騰版課本)。依據是龍騰官方的國文
// 課程地圖(ltedu.com.tw 的 curriculum-map/ghs/chinese/map.pdf)列出的五冊選文;第一冊與
// 第二冊前五課的順序有書商目錄可對,其餘各冊冊內順序是推測。ch-lt-* 是補上的龍騰課文
// (data/chinese-lessons-lt.js),還沒寫好的 id 會自動略過。不在龍騰課本裡的課文放在
// 「其他常見選文」。資料檔裡各單元的 category 是舊資料,實際顯示以這張表為準;沒列在
// 表裡的單元會排到最後的「其他」。單元 id 都沒變,舊的作答紀錄與完成標記仍然有效。
const CHINESE_LAYOUT = [
  {
    category: '龍騰 第一冊',
    ids: ['ch-l1-1', 'ch-l1-5', 'ch-lt-1', 'ch-lt-2', 'ch-l1-2', 'ch-lt-3', 'ch-l4-6', 'ch-l1-6', 'ch-lt-4', 'ch-l2-1', 'ch-lt-5', 'ch-l2-4'],
  },
  {
    category: '龍騰 第二冊',
    ids: ['ch-lt-6', 'ch-lt-7', 'ch-l1-3', 'ch-lt-8', 'ch-lt-9', 'ch-lt-10', 'ch-lt-11', 'ch-lt-12', 'ch-l3-6', 'ch-lt-13', 'ch-l5-3', 'ch-lt-14', 'ch-l3-4'],
  },
  {
    category: '龍騰 第三冊',
    ids: ['ch-lt-16', 'ch-lt-17', 'ch-l3-1', 'ch-lt-19', 'ch-lt-18', 'ch-l1-4', 'ch-lt-20', 'ch-lt-15', 'ch-lt-21', 'ch-l2-2', 'ch-l3-2'],
  },
  {
    category: '龍騰 第四冊',
    ids: ['ch-l4-2', 'ch-lt-22', 'ch-l5-2', 'ch-lt-23', 'ch-lt-24', 'ch-lt-25', 'ch-lt-26', 'ch-lt-27', 'ch-lt-28', 'ch-l2-3', 'ch-l3-3', 'ch-l4-3'],
  },
  {
    category: '龍騰 第五冊',
    ids: ['ch-l4-1', 'ch-lt-29', 'ch-lt-30', 'ch-lt-31', 'ch-l5-1', 'ch-lt-32', 'ch-lt-33', 'ch-lt-34', 'ch-lt-35', 'ch-lt-36'],
  },
  { category: '其他常見選文(不在龍騰課本)', ids: ['ch-l5-4', 'ch-l5-5', 'ch-l5-6', 'ch-l3-5', 'ch-l4-4', 'ch-l4-5'] },
  { category: '專題', ids: Array.from({ length: 20 }, (_, i) => `ch-u${i + 1}`) },
  { category: '總複習', ids: ['ch-l6-1', 'ch-l6-2', 'ch-u21', 'ch-u22', 'ch-u23', 'ch-u24'] },
];

function layoutChineseUnits(topicalUnits, lessonUnits) {
  const byId = new Map([...lessonUnits, ...topicalUnits.map((u) => ({ ...u, tag: '專題' }))].map((u) => [u.id, u]));
  const placed = CHINESE_LAYOUT.flatMap(({ category, ids }) =>
    ids.filter((id) => byId.has(id)).map((id) => {
      const unit = { ...byId.get(id), category };
      byId.delete(id);
      return unit;
    })
  );
  return [...placed, ...[...byId.values()].map((u) => ({ ...u, category: '其他' }))];
}

const chineseWithLessons = {
  ...chinese,
  units: layoutChineseUnits(chinese.units, [
    ...chineseLessons1,
    ...chineseLessons2,
    ...chineseLessons3,
    ...chineseLessons4,
    ...chineseLessons5,
    ...chineseLessons6,
    ...chineseLessonsLongteng,
    ...chineseLessonsLongtengModern,
  ]),
};

// 英文專題單元的實作題組(data/english-practice-sets.js)接在各單元原有題目後面,原題目 id 不變。
const englishTopicalUnits = english.units.map((unit) => (englishPracticeSets[unit.id] ? { ...unit, quiz: [...unit.quiz, ...englishPracticeSets[unit.id]] } : unit));

// 英文題幹的中文翻譯(data/english-zh.js,依題目 id 對應)掛成 questionZh,畫面上按「翻譯」才顯示。
const withStemZh = (unit) => ({ ...unit, quiz: unit.quiz.map((q) => (englishStemZh[q.id] ? { ...q, questionZh: englishStemZh[q.id] } : q)) });

const englishWithLessons = {
  ...english,
  units: mergeTextbookUnits(englishTopicalUnits, [
    ...englishLessons1,
    ...englishLessons2,
    ...englishLessons3,
    ...englishLessons4,
    ...englishLessons5,
    ...englishLessons6,
  ]).map(withStemZh),
};

// 社會、自然:依 108 課綱課本章節切細的「章節單元」(data/social-chapters-*.js、
// science-chapters-*.js)跟原本的大單元並存(原單元的 id 與題目不變,舊紀錄仍有效)。
// 排序:先依分類(歷史/地理/公民、物理/化學/生物/地科)分組,分類內依學期,同一學期章節單元排在
// 原單元前面(例如台灣史先列「原住民族與史前」,再列荷治、清領…)。
const SEMESTER_ORDER = ['高一', '高一上', '高一下', '高二上', '高二下', '高三上', '高三總複習'];

function mergeChapterUnits(baseUnits, chapterUnits) {
  const categoryOrder = [...new Set([...baseUnits, ...chapterUnits].map((u) => u.category))];
  const rank = (u) => {
    const s = SEMESTER_ORDER.indexOf(u.semester);
    return s === -1 ? SEMESTER_ORDER.length : s;
  };
  return [...chapterUnits, ...baseUnits]
    .map((unit, index) => ({ unit, index }))
    .sort((a, b) => categoryOrder.indexOf(a.unit.category) - categoryOrder.indexOf(b.unit.category) || rank(a.unit) - rank(b.unit) || a.index - b.index)
    .map(({ unit }) => unit);
}

const socialWithChapters = { ...social, units: mergeChapterUnits(social.units, []) };
const scienceWithChapters = { ...science, units: mergeChapterUnits(science.units, [...sciencePhysicsChapters, ...scienceChemistryChapters, ...scienceBiologyChapters, ...scienceEarthChapters]) };

const dataBySubject = { chinese: chineseWithLessons, english: englishWithLessons, math, science: scienceWithChapters, social: socialWithChapters };

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
