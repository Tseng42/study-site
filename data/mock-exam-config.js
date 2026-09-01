// 模擬考設定:每科題數上限、限時,依真實學測考試時間換算出的每題配速抓的。
// 真實學測時間(114 學年度,資料來源見 README):
//   國文綜合測驗 90 分鐘、英文/數學A/數學B 各 100 分鐘、社會/自然各 110 分鐘。
// 因為我們的題庫題數跟真實考試不同,時間是照「每題平均配速」換算,不是照抄真實題數與時間。
export const mockExamConfig = {
  chinese: { questionCount: 30, minutes: 75, label: '國文' },
  english: { questionCount: 30, minutes: 60, label: '英文' },
  math: { questionCount: 20, minutes: 80, label: '數學(A)' },
  science: { questionCount: 30, minutes: 65, label: '自然' },
  social: { questionCount: 30, minutes: 70, label: '社會' },
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
