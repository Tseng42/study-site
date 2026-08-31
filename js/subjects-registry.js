// 統一的資料查詢入口。頁面只透過這裡讀取科目/單元/題目內容,
// 不直接 import data/*.js,方便未來擴充或調整資料檔案結構。
import { subjectsMeta } from '../data/subjects-meta.js';
import chinese from '../data/chinese.js';
import english from '../data/english.js';
import math from '../data/math.js';
import science from '../data/science.js';
import social from '../data/social.js';

const dataBySubject = { chinese, english, math, science, social };

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
  return subject?.units.find((u) => u.id === unitId) || null;
}

export function getQuestion(subjectId, unitId, questionId) {
  const unit = getUnit(subjectId, unitId);
  return unit?.quiz?.find((q) => q.id === questionId) || null;
}
