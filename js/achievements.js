// 成就徽章系統:全部從既有的進度/測驗/模擬考資料「算出來」,不另外存一份
// 「解鎖了哪些成就」的狀態 —— 這樣就不用再多同步一種雲端資料,換裝置登入
// 直接用當下的作答資料重新算一次就跟原本裝置一致。
//
// 每個成就有一個 tier(bronze/silver/gold/diamond),頭像外框顏色用「目前
// 已解鎖成就裡最高的 tier」決定,見 layout.js 的 renderUserMenu()。
//
// 每個成就也有一個 category(見 CATEGORIES),個人資料頁依此分組成一區一區的
// 「關卡」呈現,而不是一整排卡片。`secret: true` 的成就在還沒解鎖前,頁面上
// 不會顯示真正的標題/說明(見 page-profile.js),增加一點驚喜感。
//
// 「已看過」哪些成就(用來判斷這次登入後有沒有新解鎖、要不要顯示慶祝效果)
// 是唯一需要另外存一筆小狀態的地方,見 storage.js 的 getSeenAchievements/
// markAchievementsSeen —— 這筆資料純粹是本機 UI 用的,不放進雲端同步快照。
import { getAllSubjects } from './subjects-registry.js';
import {
  getSubjectProgress,
  getQuizResults,
  getMockExamHistory,
  getMasteredCount,
  getWrongQuestions,
  getSeenAchievements,
} from './storage.js';
import { subjectsMeta } from '../data/subjects-meta.js';
import { fiveStandardsReference } from '../data/mock-exam-config.js';

export const TIER_ORDER = ['bronze', 'silver', 'gold', 'diamond'];
export const TIER_LABEL = { bronze: '銅', silver: '銀', gold: '金', diamond: '鑽石' };

export const CATEGORIES = [
  { id: 'units', label: '單元進度', icon: 'layers' },
  { id: 'accuracy', label: '正確率', icon: 'target' },
  { id: 'habit', label: '讀書習慣', icon: 'clock' },
  { id: 'wrongbook', label: '錯題本', icon: 'flag' },
  { id: 'subject', label: '各科精熟', icon: 'compass' },
  { id: 'balance', label: '均衡發展', icon: 'globe' },
  { id: 'mock', label: '模擬考', icon: 'trendUp' },
  { id: 'realexam', label: '歷屆試題挑戰', icon: 'scroll' },
  { id: 'secret', label: '隱藏成就', icon: 'star' },
];

function bandAtOrAboveMean(subjectId, estimatedBand) {
  const years = fiveStandardsReference[subjectId];
  if (!years || estimatedBand == null) return false;
  const latestYear = Object.keys(years).sort((a, b) => b - a)[0];
  return estimatedBand >= years[latestYear].mean;
}

const CORE_ACHIEVEMENTS = [
  { id: 'first-quiz', title: '跨出第一步', tier: 'bronze', category: 'units', icon: 'spark', desc: '完成第一次測驗', check: (s) => s.totalAnswered > 0, progressText: (s) => (s.totalAnswered > 0 ? '已完成' : '還沒作答過任何題目') },
  { id: 'units-10', title: '單元收藏家 I', tier: 'bronze', category: 'units', icon: 'layers', desc: '完成 10 個單元', check: (s) => s.completedUnits >= 10, progressText: (s) => `${Math.min(s.completedUnits, 10)}/10 單元` },
  { id: 'units-30', title: '單元收藏家 II', tier: 'silver', category: 'units', icon: 'layers', desc: '完成 30 個單元', check: (s) => s.completedUnits >= 30, progressText: (s) => `${Math.min(s.completedUnits, 30)}/30 單元` },
  { id: 'units-60', title: '單元收藏家 III', tier: 'gold', category: 'units', icon: 'layers', desc: '完成 60 個單元', check: (s) => s.completedUnits >= 60, progressText: (s) => `${Math.min(s.completedUnits, 60)}/60 單元` },
  { id: 'units-all', title: '單元制霸', tier: 'diamond', category: 'units', icon: 'crown', desc: '完成全部單元', check: (s) => s.totalUnits > 0 && s.completedUnits >= s.totalUnits, progressText: (s) => `${s.completedUnits}/${s.totalUnits} 單元` },
  { id: 'accuracy-70', title: '穩紮穩打', tier: 'bronze', category: 'accuracy', icon: 'target', desc: '整體測驗正確率達 70%', check: (s) => s.accuracy >= 70, progressText: (s) => `目前 ${s.accuracy}%` },
  { id: 'accuracy-85', title: '精準射手', tier: 'silver', category: 'accuracy', icon: 'target', desc: '整體測驗正確率達 85%', check: (s) => s.accuracy >= 85, progressText: (s) => `目前 ${s.accuracy}%` },
  { id: 'accuracy-95', title: '滿分獵人', tier: 'gold', category: 'accuracy', icon: 'target', desc: '整體測驗正確率達 95%', check: (s) => s.accuracy >= 95, progressText: (s) => `目前 ${s.accuracy}%` },
  { id: 'streak-7', title: '七天不間斷', tier: 'bronze', category: 'habit', icon: 'flame', desc: '累積 7 天有作答紀錄', check: (s) => s.studyDays >= 7, progressText: (s) => `${Math.min(s.studyDays, 7)}/7 天` },
  { id: 'streak-30', title: '月度常客', tier: 'silver', category: 'habit', icon: 'flame', desc: '累積 30 天有作答紀錄', check: (s) => s.studyDays >= 30, progressText: (s) => `${Math.min(s.studyDays, 30)}/30 天` },
  { id: 'streak-100', title: '百日修行', tier: 'gold', category: 'habit', icon: 'flame', desc: '累積 100 天有作答紀錄', check: (s) => s.studyDays >= 100, progressText: (s) => `${Math.min(s.studyDays, 100)}/100 天` },
  { id: 'streak-200', title: '半年修行者', tier: 'gold', category: 'habit', icon: 'flame', desc: '累積 200 天有作答紀錄', check: (s) => s.studyDays >= 200, progressText: (s) => `${Math.min(s.studyDays, 200)}/200 天` },
  { id: 'streak-365', title: '全年無休', tier: 'diamond', category: 'habit', icon: 'flame', desc: '累積 365 天有作答紀錄', check: (s) => s.studyDays >= 365, progressText: (s) => `${Math.min(s.studyDays, 365)}/365 天` },
  { id: 'wrongbook-clear', title: '錯題清道夫', tier: 'silver', category: 'wrongbook', icon: 'flag', desc: '在錯題本標記 20 題已熟練', check: (s) => s.masteredCount >= 20, progressText: (s) => `${Math.min(s.masteredCount, 20)}/20 題` },
  { id: 'wrongbook-clear-50', title: '錯題本剋星', tier: 'gold', category: 'wrongbook', icon: 'flag', desc: '在錯題本標記 50 題已熟練', check: (s) => s.masteredCount >= 50, progressText: (s) => `${Math.min(s.masteredCount, 50)}/50 題` },
  { id: 'balanced-5', title: '五科均衡發展', tier: 'gold', category: 'balance', icon: 'scale', desc: '五個科目進度都超過 50%', check: (s) => s.allSubjectsOver50, progressText: (s) => (s.allSubjectsOver50 ? '已達成' : `目前最低的科目 ${s.minSubjectPercent}%`) },
  { id: 'mock-all-subjects', title: '模考初體驗', tier: 'silver', category: 'mock', icon: 'medal', desc: '五科模擬考都至少完成一次', check: (s) => s.mockSubjectsCovered >= 5, progressText: (s) => `${s.mockSubjectsCovered}/5 科` },
  { id: 'mock-strong', title: '考場常勝軍', tier: 'gold', category: 'mock', icon: 'trophy', desc: '任一科模擬考估計級分達到近年均標以上', check: (s) => s.anyMockAtOrAboveMean, progressText: (s) => (s.anyMockAtOrAboveMean ? '已達成' : '還沒有科目達到均標') },
  { id: 'realexam-first', title: '踏入考場', tier: 'bronze', category: 'realexam', icon: 'scroll', desc: '完成任一科歷屆試題模擬考(單一年份或混合年份皆可)', check: (s) => s.realExamAnyAttempt, progressText: (s) => (s.realExamAnyAttempt ? '已完成' : '還沒挑戰過歷屆試題') },
  { id: 'realexam-all-subjects', title: '五科制霸', tier: 'silver', category: 'realexam', icon: 'crown', desc: '五個科目的歷屆試題模擬考都至少完成一次', check: (s) => s.realExamSubjectsCovered >= 5, progressText: (s) => `${s.realExamSubjectsCovered}/5 科` },
  { id: 'realexam-above-mean', title: '歷屆常勝軍', tier: 'gold', category: 'realexam', icon: 'trophy', desc: '任一科歷屆試題模擬考,估計級分達到近年均標以上', check: (s) => s.realExamAnyAtOrAboveMean, progressText: (s) => (s.realExamAnyAtOrAboveMean ? '已達成' : '還沒有科目達到均標') },
  { id: 'realexam-all-years', title: '五年全征服', tier: 'gold', category: 'realexam', icon: 'crown', desc: '任一科的 111~115 學年度單一年份試題都至少考過一次', check: (s) => s.realExamAnySubjectAllYears, progressText: (s) => (s.realExamAnySubjectAllYears ? '已達成' : '還沒有科目五個學年度都考過') },

  { id: 'secret-night-owl', title: '夜貓子讀書魂', tier: 'bronze', category: 'secret', icon: 'moon', secret: true, desc: '凌晨 0 點到 5 點之間完成過一次測驗作答', check: (s) => s.nightOwl, progressText: (s) => (s.nightOwl ? '已達成' : '還沒有紀錄') },
  { id: 'secret-early-bird', title: '晨型讀書人', tier: 'bronze', category: 'secret', icon: 'sunrise', secret: true, desc: '清晨 5 點到 7 點之間完成過一次測驗作答', check: (s) => s.earlyBird, progressText: (s) => (s.earlyBird ? '已達成' : '還沒有紀錄') },
  { id: 'secret-sprint-day', title: '衝刺讀書日', tier: 'silver', category: 'secret', icon: 'bolt', secret: true, desc: '同一天內完成 50 題以上的作答', check: (s) => s.maxDayAnswered >= 50, progressText: (s) => `單日最多 ${s.maxDayAnswered} 題` },
  { id: 'secret-five-in-one-day', title: '五科馬拉松', tier: 'gold', category: 'secret', icon: 'medal', secret: true, desc: '同一天內對五個科目都有作答紀錄', check: (s) => s.maxDaySubjects >= 5, progressText: (s) => `單日最多涵蓋 ${s.maxDaySubjects}/5 科` },
  { id: 'secret-wrongbook-zero', title: '錯題本淨空', tier: 'silver', category: 'secret', icon: 'flag', secret: true, desc: '錯題本目前完全沒有待複習的錯題(至少要標記過一題已熟練)', check: (s) => s.wrongCount === 0 && s.masteredCount > 0, progressText: (s) => (s.wrongCount === 0 && s.masteredCount > 0 ? '已達成' : `目前還有 ${s.wrongCount} 題待複習`) },
  { id: 'secret-balanced-80', title: '全能選手', tier: 'gold', category: 'secret', icon: 'scale', secret: true, desc: '五個科目的完成度都超過 80%', check: (s) => s.allSubjectsOver80, progressText: (s) => (s.allSubjectsOver80 ? '已達成' : `目前最低的科目 ${s.minSubjectPercent}%`) },
  { id: 'secret-near-perfect', title: '一題不差傳說', tier: 'diamond', category: 'secret', icon: 'trophy', secret: true, desc: '歷屆試題模擬考單一年份模式,選擇題自動判分正確率達 95% 以上', check: (s) => s.realExamAnyNearPerfectSingleYear, progressText: (s) => (s.realExamAnyNearPerfectSingleYear ? '已達成' : '還沒有單一年份達到 95%') },
];

// 各科精熟度成就:每科各自一組(單元全完成 + 正確率達標),依 subjectsMeta 產生,
// 不手動一筆一筆寫,新增科目時這裡會自動跟著多一組。
const SUBJECT_ACHIEVEMENTS = subjectsMeta.flatMap(({ id, name }) => [
  {
    id: `subj-complete-${id}`,
    title: `${name}制霸`,
    tier: 'silver',
    category: 'subject',
    icon: 'crown',
    desc: `完成${name}全部單元`,
    check: (s) => {
      const subj = s.subjects.find((x) => x.id === id);
      return !!subj && subj.total > 0 && subj.completed >= subj.total;
    },
    progressText: (s) => {
      const subj = s.subjects.find((x) => x.id === id);
      return subj ? `${subj.completed}/${subj.total} 單元` : '0 單元';
    },
  },
  {
    id: `subj-accuracy-${id}`,
    title: `${name}神射手`,
    tier: 'bronze',
    category: 'subject',
    icon: 'target',
    desc: `${name}測驗正確率達 85%(至少作答 20 題)`,
    check: (s) => {
      const subj = s.subjects.find((x) => x.id === id);
      return !!subj && subj.answered >= 20 && subj.accuracy >= 85;
    },
    progressText: (s) => {
      const subj = s.subjects.find((x) => x.id === id);
      if (!subj || subj.answered === 0) return '還沒作答過';
      return `已作答 ${subj.answered} 題,正確率 ${subj.accuracy}%`;
    },
  },
]);

export const ACHIEVEMENTS = [...CORE_ACHIEVEMENTS, ...SUBJECT_ACHIEVEMENTS];

export function computeStats() {
  const subjects = getAllSubjects();
  const subjectDetails = subjects.map((s) => {
    const progress = getSubjectProgress(s.id, s.units.length);
    const results = getQuizResults(s.id);
    let answered = 0;
    let correct = 0;
    for (const r of results) {
      answered += r.answers.length;
      correct += r.answers.filter((a) => a.isCorrect).length;
    }
    return {
      id: s.id,
      name: s.name,
      percent: progress.percent,
      completed: progress.completed,
      total: progress.total,
      answered,
      accuracy: answered ? Math.round((correct / answered) * 100) : 0,
    };
  });
  const subjectPercents = subjectDetails.map((s) => s.percent);
  const totalUnits = subjectDetails.reduce((sum, s) => sum + s.total, 0);
  const completedUnits = subjectDetails.reduce((sum, s) => sum + s.completed, 0);

  const allResults = getQuizResults();
  let totalAnswered = 0;
  let totalCorrect = 0;
  const studyDaySet = new Set();
  // 依「日期」彙整每天答了幾題、涵蓋幾個科目,給連續天數以外的習慣類成就用。
  const dayStats = new Map();
  let nightOwl = false;
  let earlyBird = false;
  for (const r of allResults) {
    totalAnswered += r.answers.length;
    totalCorrect += r.answers.filter((a) => a.isCorrect).length;
    const takenAt = new Date(r.takenAt);
    const dateKey = takenAt.toDateString();
    studyDaySet.add(dateKey);
    const hour = takenAt.getHours();
    if (hour < 5) nightOwl = true;
    else if (hour < 7) earlyBird = true;
    if (!dayStats.has(dateKey)) dayStats.set(dateKey, { count: 0, subjects: new Set() });
    const day = dayStats.get(dateKey);
    day.count += r.answers.length;
    day.subjects.add(r.subjectId);
  }
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const dayList = [...dayStats.values()];
  const maxDayAnswered = dayList.reduce((max, d) => Math.max(max, d.count), 0);
  const maxDaySubjects = dayList.reduce((max, d) => Math.max(max, d.subjects.size), 0);

  const mockHistory = getMockExamHistory();
  const mockSubjectsCovered = new Set(mockHistory.map((m) => m.subjectId)).size;
  const anyMockAtOrAboveMean = mockHistory.some((m) => bandAtOrAboveMean(m.subjectId.replace(/-real$/, ''), m.estimatedBand));

  // 歷屆試題模擬考的紀錄 subjectId 是虛擬的「{科目}-real」,跟一般模擬考分開判斷。
  const realExamHistory = mockHistory.filter((m) => m.subjectId.endsWith('-real'));
  const realExamSubjectsCovered = new Set(realExamHistory.map((m) => m.subjectId.replace(/-real$/, ''))).size;
  const realExamAnyAtOrAboveMean = realExamHistory.some((m) => bandAtOrAboveMean(m.subjectId.replace(/-real$/, ''), m.estimatedBand));
  const realExamAnyNearPerfectSingleYear = realExamHistory.some((m) => /^\d+ 學年度$/.test(m.examLabel || '') && m.percent >= 95);
  const yearsBySubject = new Map();
  for (const m of realExamHistory) {
    const match = /^(\d+) 學年度$/.exec(m.examLabel || '');
    if (!match) continue;
    const subj = m.subjectId.replace(/-real$/, '');
    if (!yearsBySubject.has(subj)) yearsBySubject.set(subj, new Set());
    yearsBySubject.get(subj).add(match[1]);
  }
  const realExamAnySubjectAllYears = [...yearsBySubject.values()].some((years) => years.size >= 5);

  return {
    subjects: subjectDetails,
    totalUnits,
    completedUnits,
    totalAnswered,
    accuracy,
    studyDays: studyDaySet.size,
    masteredCount: getMasteredCount(),
    wrongCount: getWrongQuestions().length,
    allSubjectsOver50: subjectPercents.every((p) => p >= 50),
    allSubjectsOver80: subjectPercents.length > 0 && subjectPercents.every((p) => p >= 80),
    minSubjectPercent: subjectPercents.length ? Math.min(...subjectPercents) : 0,
    mockSubjectsCovered,
    anyMockAtOrAboveMean,
    realExamAnyAttempt: realExamHistory.length > 0,
    realExamSubjectsCovered,
    realExamAnyAtOrAboveMean,
    realExamAnyNearPerfectSingleYear,
    realExamAnySubjectAllYears,
    nightOwl,
    earlyBird,
    maxDayAnswered,
    maxDaySubjects,
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

// 已解鎖但還沒在畫面上「看過」的成就 id(用來觸發解鎖慶祝效果跟頭像上的新提示點)。
export function getNewlyUnlockedIds(achievementState) {
  const seen = new Set(getSeenAchievements());
  return achievementState.filter((a) => a.earned && !seen.has(a.id)).map((a) => a.id);
}
