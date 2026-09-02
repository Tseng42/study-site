// 成就徽章系統:全部從既有的進度/測驗/模擬考資料「算出來」,不另外存一份
// 「解鎖了哪些成就」的狀態 —— 這樣就不用再多同步一種雲端資料,換裝置登入
// 直接用當下的作答資料重新算一次就跟原本裝置一致。
//
// 每個成就有一個 tier(bronze/silver/gold/diamond),頭像外框顏色用「目前
// 已解鎖成就裡最高的 tier」決定,見 layout.js 的 renderUserMenu()。
import { getAllSubjects } from './subjects-registry.js';
import { getSubjectProgress, getQuizResults, getMockExamHistory, getMasteredCount } from './storage.js';
import { fiveStandardsReference } from '../data/mock-exam-config.js';

export const TIER_ORDER = ['bronze', 'silver', 'gold', 'diamond'];
export const TIER_LABEL = { bronze: '銅', silver: '銀', gold: '金', diamond: '鑽石' };

export const ACHIEVEMENTS = [
  { id: 'first-quiz', title: '跨出第一步', tier: 'bronze', desc: '完成第一次測驗', check: (s) => s.totalAnswered > 0, progressText: (s) => (s.totalAnswered > 0 ? '已完成' : '還沒作答過任何題目') },
  { id: 'units-10', title: '單元收藏家 I', tier: 'bronze', desc: '完成 10 個單元', check: (s) => s.completedUnits >= 10, progressText: (s) => `${Math.min(s.completedUnits, 10)}/10 單元` },
  { id: 'units-30', title: '單元收藏家 II', tier: 'silver', desc: '完成 30 個單元', check: (s) => s.completedUnits >= 30, progressText: (s) => `${Math.min(s.completedUnits, 30)}/30 單元` },
  { id: 'units-60', title: '單元收藏家 III', tier: 'gold', desc: '完成 60 個單元', check: (s) => s.completedUnits >= 60, progressText: (s) => `${Math.min(s.completedUnits, 60)}/60 單元` },
  { id: 'units-all', title: '單元制霸', tier: 'diamond', desc: '完成全部單元', check: (s) => s.totalUnits > 0 && s.completedUnits >= s.totalUnits, progressText: (s) => `${s.completedUnits}/${s.totalUnits} 單元` },
  { id: 'accuracy-70', title: '穩紮穩打', tier: 'bronze', desc: '整體測驗正確率達 70%', check: (s) => s.accuracy >= 70, progressText: (s) => `目前 ${s.accuracy}%` },
  { id: 'accuracy-85', title: '精準射手', tier: 'silver', desc: '整體測驗正確率達 85%', check: (s) => s.accuracy >= 85, progressText: (s) => `目前 ${s.accuracy}%` },
  { id: 'accuracy-95', title: '滿分獵人', tier: 'gold', desc: '整體測驗正確率達 95%', check: (s) => s.accuracy >= 95, progressText: (s) => `目前 ${s.accuracy}%` },
  { id: 'streak-7', title: '七天不間斷', tier: 'bronze', desc: '累積 7 天有作答紀錄', check: (s) => s.studyDays >= 7, progressText: (s) => `${Math.min(s.studyDays, 7)}/7 天` },
  { id: 'streak-30', title: '月度常客', tier: 'silver', desc: '累積 30 天有作答紀錄', check: (s) => s.studyDays >= 30, progressText: (s) => `${Math.min(s.studyDays, 30)}/30 天` },
  { id: 'streak-100', title: '百日修行', tier: 'gold', desc: '累積 100 天有作答紀錄', check: (s) => s.studyDays >= 100, progressText: (s) => `${Math.min(s.studyDays, 100)}/100 天` },
  { id: 'wrongbook-clear', title: '錯題清道夫', tier: 'silver', desc: '在錯題本標記 20 題已熟練', check: (s) => s.masteredCount >= 20, progressText: (s) => `${Math.min(s.masteredCount, 20)}/20 題` },
  { id: 'balanced-5', title: '五科均衡發展', tier: 'gold', desc: '五個科目進度都超過 50%', check: (s) => s.allSubjectsOver50, progressText: (s) => (s.allSubjectsOver50 ? '已達成' : `目前最低的科目 ${s.minSubjectPercent}%`) },
  { id: 'mock-all-subjects', title: '模考初體驗', tier: 'silver', desc: '五科模擬考都至少完成一次', check: (s) => s.mockSubjectsCovered >= 5, progressText: (s) => `${s.mockSubjectsCovered}/5 科` },
  { id: 'mock-strong', title: '考場常勝軍', tier: 'gold', desc: '任一科模擬考估計級分達到近年均標以上', check: (s) => s.anyMockAtOrAboveMean, progressText: (s) => (s.anyMockAtOrAboveMean ? '已達成' : '還沒有科目達到均標') },
];

export function computeStats() {
  const subjects = getAllSubjects();
  const subjectPercents = subjects.map((s) => getSubjectProgress(s.id, s.units.length).percent);
  const totalUnits = subjects.reduce((sum, s) => sum + s.units.length, 0);
  const completedUnits = subjects.reduce((sum, s) => sum + getSubjectProgress(s.id, s.units.length).completed, 0);

  const allResults = getQuizResults();
  let totalAnswered = 0;
  let totalCorrect = 0;
  const studyDaySet = new Set();
  for (const r of allResults) {
    totalAnswered += r.answers.length;
    totalCorrect += r.answers.filter((a) => a.isCorrect).length;
    studyDaySet.add(new Date(r.takenAt).toDateString());
  }
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const mockHistory = getMockExamHistory();
  const mockSubjectsCovered = new Set(mockHistory.map((m) => m.subjectId)).size;
  const anyMockAtOrAboveMean = mockHistory.some((m) => {
    const years = fiveStandardsReference[m.subjectId];
    if (!years) return false;
    const latestYear = Object.keys(years).sort((a, b) => b - a)[0];
    return m.estimatedBand >= years[latestYear].mean;
  });

  return {
    totalUnits,
    completedUnits,
    totalAnswered,
    accuracy,
    studyDays: studyDaySet.size,
    masteredCount: getMasteredCount(),
    allSubjectsOver50: subjectPercents.every((p) => p >= 50),
    minSubjectPercent: subjectPercents.length ? Math.min(...subjectPercents) : 0,
    mockSubjectsCovered,
    anyMockAtOrAboveMean,
  };
}

// 每個成就加上 earned(布林)、progress(給還沒解鎖的成就看目前進度到哪)。
export function getAchievementState() {
  const stats = computeStats();
  return ACHIEVEMENTS.map((a) => ({ ...a, earned: a.check(stats), progress: a.progressText(stats) }));
}

// 目前已解鎖成就裡最高的 tier,沒有解鎖任何成就就回傳 null。
export function getHighestTier(achievementState) {
  let highestIndex = -1;
  for (const a of achievementState) {
    if (a.earned) highestIndex = Math.max(highestIndex, TIER_ORDER.indexOf(a.tier));
  }
  return highestIndex >= 0 ? TIER_ORDER[highestIndex] : null;
}
