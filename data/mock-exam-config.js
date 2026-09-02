// 模擬考設定:題數、限時、題型/分科配題,都改成直接對齊 114 學年度學測「選擇題部分」的
// 真實結構(資料來源見 README),題庫量足夠支撐真實題數,不再用配速換算縮減。
// 每科都只涵蓋「選擇題」部分 —— 需要人工評閱的國寫、英文寫作、數學/自然/社會非選擇題
// 無法在這種題庫網站上模擬,所以時間、題數都是選擇題部分單獨的真實數字,見各科 excludesNote。
//
// typeBreakdown:依題型(單選/多選/選填)分別從題庫抽題,抽出來的題目依「單選→多選→選填」
// 分節呈現,跟真實考卷分節方式一致。
// categoryBreakdown:社會/自然考科由歷史/地理/公民、物理/化學/生物/地科各科均分題數
// (這是大考中心公開說明的配題原則),抽題時逐分類抽取、依分類分節呈現,
// 分類內部再依 typeBreakdown 分單選/多選。
//
// 數學A 6 單選+6 多選+5 選填+3 混合題組(併入單選計分)= 20 題,100 分鐘:
//   114 學測數學A 官方確認的真實結構。
// 國文(國語文綜合測驗)25 題、90 分鐘;英文選擇題 45 題、100 分鐘:
//   114 學測官方答案卷題號範圍。單選/多選細分沒有官方逐題型統計,依題庫可用量抓比例。
// 社會選擇題 60 題(歷史/地理/公民各 20 題)、110 分鐘;
// 自然選擇題 57 題(物理 14+化學 15+生物 14+地科 14)、110 分鐘:
//   114 學測官方答案卷題號範圍,分科均分則依大考中心考試說明的配題原則。
export const mockExamConfig = {
  chinese: {
    questionCount: 25,
    minutes: 90,
    label: '國文(國語文綜合測驗)',
    typeBreakdown: { single: 21, multi: 4 },
    excludesNote: '只模擬選擇題(國綜)部分,不包含需要人工評閱的「國語文寫作測驗」(國寫,另計 90 分鐘)',
  },
  english: {
    questionCount: 45,
    minutes: 100,
    label: '英文',
    typeBreakdown: { single: 39, multi: 6 },
    excludesNote: '只模擬選擇題部分,不包含「英文寫作」(中譯英+英文作文)',
  },
  math: {
    questionCount: 20,
    minutes: 100,
    label: '數學(A)',
    typeBreakdown: { single: 9, multi: 6, numeric: 5 },
    excludesNote: '混合題組(占 3 小題)簡化併入單選計分',
  },
  science: {
    questionCount: 57,
    minutes: 110,
    label: '自然',
    categoryBreakdown: [
      { category: '物理', count: 14, typeBreakdown: { single: 12, multi: 2 } },
      { category: '化學', count: 15, typeBreakdown: { single: 13, multi: 2 } },
      { category: '生物', count: 14, typeBreakdown: { single: 12, multi: 2 } },
      { category: '地科', count: 14, typeBreakdown: { single: 12, multi: 2 } },
    ],
    excludesNote: '只模擬選擇題部分,不包含非選擇題(計算/簡答題組)',
  },
  social: {
    questionCount: 60,
    minutes: 110,
    label: '社會',
    categoryBreakdown: [
      { category: '歷史', count: 20, typeBreakdown: { single: 17, multi: 3 } },
      { category: '地理', count: 20, typeBreakdown: { single: 17, multi: 3 } },
      { category: '公民', count: 20, typeBreakdown: { single: 17, multi: 3 } },
    ],
    excludesNote: '只模擬選擇題部分,不包含非選擇題',
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
