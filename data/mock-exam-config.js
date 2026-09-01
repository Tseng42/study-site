// 模擬考設定:每科題數上限、限時,依真實學測考試時間換算出的每題配速抓的。
// 真實學測時間(114 學年度,資料來源見 README):
//   國文綜合測驗 90 分鐘、英文/數學A/數學B 各 100 分鐘、社會/自然各 110 分鐘。
// 因為我們的題庫題數跟真實考試不同,時間是照「每題平均配速」換算,不是照抄真實題數與時間。
//
// typeBreakdown:依題型分別從題庫抽題,抽出來的題目會依「單選→多選→選填」分節呈現,
// 跟真實考卷的分節方式一致。數學科的 6 單選+6 多選+5 選填+3(併入單選)= 20 題,
// 是依 113、114 學年度學測數學A 官方確認的真實結構(資料來源見 README);
// 其餘四科目前查不到官方逐題型的精確配題數,只確定「單選為主、有部分多選」這個大方向,
// 所以是用目前題庫量抓的比例,不是官方精確數字,這點有跟使用者說明過。
export const mockExamConfig = {
  chinese: { questionCount: 30, minutes: 75, label: '國文', typeBreakdown: { single: 26, multi: 4 } },
  english: { questionCount: 30, minutes: 60, label: '英文', typeBreakdown: { single: 26, multi: 4 } },
  math: { questionCount: 20, minutes: 80, label: '數學(A)', typeBreakdown: { single: 9, multi: 6, numeric: 5 } },
  science: { questionCount: 30, minutes: 65, label: '自然', typeBreakdown: { single: 26, multi: 4 } },
  social: { questionCount: 30, minutes: 70, label: '社會', typeBreakdown: { single: 26, multi: 4 } },
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
