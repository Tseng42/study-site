// 模擬考設定:題數、限時、題型/分科配題,都直接對齊 114 學年度學測(114 年 1 月考,
// 大考中心官方公布的正式答案卷,非搜尋引擎摘要)「選擇題部分」的真實結構,題庫量
// 足夠支撐真實題數,不再用配速換算縮減。每科都只涵蓋「選擇題」部分 —— 需要人工
// 評閱的國寫、英文寫作、數學/自然/社會非選擇題無法在這種題庫網站上模擬,所以時間、
// 題數都是選擇題部分單獨的真實數字,見各科 excludesNote。
//
// 這份設定直接讀「題號→答案」對照(每科答案卷都是這樣公布的):答案是單一字母/數字
// 代表單選,answer 是兩個以上字母/數字代表多選,答案是「／」代表這題是非選擇題
// (不計入這裡的題數)。数學A 因為題目本身就是選擇/選填混合編號,採用的是先前已經
// 對照過官方確認結構的版本,這次沒有變動。
//
// typeBreakdown:依題型(單選/多選/選填)分別從題庫抽題,抽出來的題目依「單選→多選→選填」
// 分節呈現,跟真實考卷分節方式一致。
// categoryBreakdown:社會/自然考科由歷史/地理/公民、物理/化學/生物/地科各科均分題數
// (這是大考中心公開說明的配題原則,均分題數是真的,但答案卷本身不會標示每題屬於
// 哪一分科,所以分科內部的單選/多選比例是用該科「單選:多選」總比例平均分攤估的,
// 不是逐分科官方數字),抽題時逐分類抽取、依分類分節呈現,分類內部再依 typeBreakdown
// 分單選/多選。
//
// 各科數字(資料來源見 README,含原始 PDF 連結):
// 國文(國語文綜合測驗)Q1-33 為選擇題(26 單選+7 多選),Q34-36 為非選擇題,90 分鐘。
// 英文 Q1-46、49 為選擇題(46 單選+1 篇章結構多選題),Q47/48/50 為非選擇題,100 分鐘。
// 數學A 6 單選+6 多選+5 選填+3 混合題組(併入單選計分)= 20 題,100 分鐘(既有結構不變)。
// 自然 57 個題號中有 9 題是非選擇題,實際選擇題只有 48 題(21 單選+27 多選 —— 這科
// 多選題其實比單選還多,原本設定嚴重低估了多選比例),110 分鐘,分科用 48/4=12 均分。
// 社會 64 個題號中有 10 題是非選擇題,實際選擇題只有 54 題,而且這年完全沒有多選題、
// 全部是單選(不同年度不一定都這樣,這是 114 這一年的真實結構),110 分鐘,
// 分科用 54/3=18 均分。
export const mockExamConfig = {
  chinese: {
    questionCount: 33,
    minutes: 90,
    label: '國文(國語文綜合測驗)',
    typeBreakdown: { single: 26, multi: 7 },
    excludesNote: '只模擬選擇題(國綜)部分,不包含需要人工評閱的「國語文寫作測驗」(國寫,另計 90 分鐘)',
  },
  english: {
    questionCount: 47,
    minutes: 100,
    label: '英文',
    typeBreakdown: { single: 46, multi: 1 },
    excludesNote: '只模擬選擇題部分,不包含「英文寫作」(中譯英+英文作文);多選題數很少是真實比例,不是漏設定',
  },
  math: {
    questionCount: 20,
    minutes: 100,
    label: '數學(A)',
    typeBreakdown: { single: 9, multi: 6, numeric: 5 },
    excludesNote: '混合題組(占 3 小題)簡化併入單選計分',
  },
  science: {
    questionCount: 48,
    minutes: 110,
    label: '自然',
    categoryBreakdown: [
      { category: '物理', count: 12, typeBreakdown: { single: 5, multi: 7 } },
      { category: '化學', count: 12, typeBreakdown: { single: 5, multi: 7 } },
      { category: '生物', count: 12, typeBreakdown: { single: 5, multi: 7 } },
      { category: '地科', count: 12, typeBreakdown: { single: 6, multi: 6 } },
    ],
    excludesNote: '只模擬選擇題部分,不包含非選擇題(計算/簡答題組);這科多選題比單選還多是真實比例',
  },
  social: {
    questionCount: 54,
    minutes: 110,
    label: '社會',
    categoryBreakdown: [
      { category: '歷史', count: 18, typeBreakdown: { single: 18 } },
      { category: '地理', count: 18, typeBreakdown: { single: 18 } },
      { category: '公民', count: 18, typeBreakdown: { single: 18 } },
    ],
    excludesNote: '只模擬選擇題部分,不包含非選擇題;114 這年社會選擇題全部是單選,沒有多選題',
  },
};

// 113、114 學年度學測正式五標(級分),用來讓模擬考的估計級分有真實對照,
// 不是模擬考本身的精確換算(模擬考題目難度、題數都跟真實考試不同,無法算出正式級分)。
// 數學科使用數學 A 的五標。資料來源見 README。
export const fiveStandardsReference = {
  chinese: {
    114: { top: 13, front: 12, mean: 10, back: 9, bottom: 7 },
    113: { top: 13, front: 12, mean: 11, back: 10, bottom: 9 },
  },
  english: {
    114: { top: 13, front: 11, mean: 8, back: 5, bottom: 4 },
    113: { top: 13, front: 11, mean: 8, back: 5, bottom: 3 },
  },
  math: {
    114: { top: 11, front: 9, mean: 7, back: 5, bottom: 4 },
    113: { top: 12, front: 10, mean: 7, back: 5, bottom: 3 },
  },
  social: {
    114: { top: 12, front: 11, mean: 9, back: 8, bottom: 6 },
    113: { top: 13, front: 12, mean: 10, back: 8, bottom: 6 },
  },
  science: {
    114: { top: 13, front: 11, mean: 9, back: 6, bottom: 5 },
    113: { top: 13, front: 12, mean: 9, back: 6, bottom: 5 },
  },
};

// 用估計級分(0-15)去比對最近兩年的五標,回傳「大約落在哪個區間」的描述文字。
export function describeBandLevel(subjectId, estimatedBand) {
  const years = fiveStandardsReference[subjectId];
  if (!years) return '';
  const recentYears = Object.keys(years).sort((a, b) => b - a);
  const latest = years[recentYears[0]];
  if (estimatedBand >= latest.top) return `達近年頂標(${latest.top}級分)以上程度`;
  if (estimatedBand >= latest.front) return `落在近年前標(${latest.front}級分)附近`;
  if (estimatedBand >= latest.mean) return `落在近年均標(${latest.mean}級分)附近`;
  if (estimatedBand >= latest.back) return `落在近年後標(${latest.back}級分)附近`;
  if (estimatedBand >= latest.bottom) return `落在近年底標(${latest.bottom}級分)附近`;
  return `低於近年底標(${latest.bottom}級分)`;
}
