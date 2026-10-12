// 成就徽章系統:全部從既有的進度/測驗/模擬考資料「算出來」,不另外存一份
// 「解鎖了哪些成就」的狀態 —— 這樣就不用再多同步一種雲端資料,換裝置登入
// 直接用當下的作答資料重新算一次就跟原本裝置一致。
//
// 每個成就有一個 tier(bronze/silver/gold/diamond),頭像外框顏色用「目前
// 已解鎖成就裡最高的 tier」決定,見 layout.js 的 renderUserMenu()。
//
// 每個成就也有一個 category(見 CATEGORIES),成就徽章頁依此分組成一區一區的
// 「關卡」呈現,而不是一整排卡片。`secret: true` 的成就在還沒解鎖前,頁面上
// 不會顯示真正的標題/說明(見 page-achievements.js),增加一點驚喜感。
//
// 「已看過」哪些成就(用來判斷這次登入後有沒有新解鎖、要不要顯示慶祝效果)
// 是唯一需要另外存一筆小狀態的地方,見 storage.js 的 getSeenAchievements/
// markAchievementsSeen —— 這筆資料跟著帳號一起同步(換裝置登入才不會把所有已解鎖
// 成就當成新解鎖再慶祝一次)。
//
// 門檻原則:正確率類成就一定要搭配最低作答題數,不然答對 1 題就是 100%。2026-09
// 曾把入門成就砍到只剩兩個,2026-10 使用者決定補回一批前期小成就(作答 30 題、
// 連續 3 天等)跟各科的中間階梯,讓剛開始用的前幾週也有東西可以拿。成就 id 內含門檻數字(如 units-30),之後再調門檻請換新 id,
// 才不會讓已經「看過」舊成就的人在重新達成時沒有解鎖提示。
import { getAllSubjects } from './subjects-registry.js';
import { getReviewableWrongQuestions } from './wrong-utils.js';
import {
  getSubjectProgress,
  getQuizResults,
  getMockExamHistory,
  getMasteredCount,
  getSeenAchievements,
} from './storage.js';
import { subjectsMeta } from '../data/subjects-meta.js';
import { fiveStandardsReference } from '../data/mock-exam-config.js';

export const TIER_ORDER = ['bronze', 'silver', 'gold', 'diamond'];
export const TIER_LABEL = { bronze: '銅', silver: '銀', gold: '金', diamond: '鑽石' };

export const CATEGORIES = [
  { id: 'units', label: '單元進度', icon: 'layers' },
  { id: 'volume', label: '作答題數', icon: 'pen' },
  { id: 'accuracy', label: '正確率', icon: 'target' },
  { id: 'habit', label: '讀書習慣', icon: 'clock' },
  { id: 'wrongbook', label: '錯題本', icon: 'flag' },
  { id: 'practice', label: '練習方式', icon: 'spark' },
  ...subjectsMeta.map((meta) => ({ id: `subj-${meta.id}`, label: meta.name, icon: meta.icon })),
  { id: 'balance', label: '均衡發展', icon: 'globe' },
  { id: 'mock', label: '模擬考', icon: 'trendUp' },
  { id: 'realexam', label: '歷屆試題挑戰', icon: 'scroll' },
  { id: 'secret', label: '隱藏成就', icon: 'star' },
];

const bareSubjectId = (subjectId) => subjectId.replace(/-real$/, '');

// level: 'mean'(均標)/'front'(前標)/'top'(頂標),用近年(資料裡最新一年)的五標當基準。
function bandAtOrAbove(subjectId, estimatedBand, level) {
  const years = fiveStandardsReference[subjectId];
  if (!years || estimatedBand == null) return false;
  const latestYear = Object.keys(years).sort((a, b) => b - a)[0];
  return estimatedBand >= years[latestYear][level];
}

// 「某個統計數字累積到 target」這種最常見的成就,一行寫完。
function counter({ id, title, tier, category, icon, desc, stat, target, unit, secret }) {
  return {
    id,
    title,
    tier,
    category,
    icon,
    desc,
    ...(secret ? { secret: true } : {}),
    check: (s) => s[stat] >= target,
    progressText: (s) => `${Math.min(s[stat], target)}/${target} ${unit}`,
    progressRatio: (s) => Math.min(1, s[stat] / target),
  };
}

// 「某個條件達成與否」的成就(統計裡是布林值)。
function flag({ id, title, tier, category, icon, desc, stat, todo, secret }) {
  return {
    id,
    title,
    tier,
    category,
    icon,
    desc,
    ...(secret ? { secret: true } : {}),
    check: (s) => !!s[stat],
    progressText: (s) => (s[stat] ? '已達成' : todo),
  };
}

function accuracyAchievement({ id, title, tier, minAnswered, percent }) {
  return {
    id,
    title,
    tier,
    category: 'accuracy',
    icon: 'target',
    desc: `累積作答至少 ${minAnswered} 題,整體正確率達 ${percent}%`,
    check: (s) => s.totalAnswered >= minAnswered && s.accuracy >= percent,
    progressText: (s) =>
      s.totalAnswered < minAnswered
        ? `已作答 ${s.totalAnswered}/${minAnswered} 題(先累積題數)`
        : `目前正確率 ${s.accuracy}%(目標 ${percent}%)`,
    // 題數跟正確率兩個條件都要達標,進度條取比較落後的那一個。
    progressRatio: (s) => Math.min(1, s.totalAnswered / minAnswered, s.accuracy / percent),
  };
}

const CORE_ACHIEVEMENTS = [
  // ---- 單元進度 ----
  { id: 'first-quiz', title: '跨出第一步', tier: 'bronze', category: 'units', icon: 'spark', desc: '完成第一次測驗', check: (s) => s.totalAnswered > 0, progressText: (s) => (s.totalAnswered > 0 ? '已完成' : '還沒作答過任何題目') },
  counter({ id: 'units-30', title: '單元收藏家 I', tier: 'bronze', category: 'units', icon: 'layers', desc: '完成 30 個單元', stat: 'completedUnits', target: 30, unit: '單元' }),
  counter({ id: 'units-60', title: '單元收藏家 II', tier: 'silver', category: 'units', icon: 'layers', desc: '完成 60 個單元', stat: 'completedUnits', target: 60, unit: '單元' }),
  counter({ id: 'units-100', title: '單元收藏家 III', tier: 'gold', category: 'units', icon: 'layers', desc: '完成 100 個單元', stat: 'completedUnits', target: 100, unit: '單元' }),
  counter({ id: 'units-150', title: '單元收藏家 IV', tier: 'gold', category: 'units', icon: 'layers', desc: '完成 150 個單元', stat: 'completedUnits', target: 150, unit: '單元' }),
  { id: 'units-all', title: '單元制霸', tier: 'diamond', category: 'units', icon: 'crown', desc: '完成全部單元', check: (s) => s.totalUnits > 0 && s.completedUnits >= s.totalUnits, progressText: (s) => `${s.completedUnits}/${s.totalUnits} 單元`, progressRatio: (s) => (s.totalUnits ? Math.min(1, s.completedUnits / s.totalUnits) : 0) },

  flag({ id: 'first-perfect-5', title: '首次全對', tier: 'bronze', category: 'units', icon: 'star', desc: '單次測驗作答至少 5 題,而且全部答對', stat: 'anyPerfectFive', todo: '還沒有全對的測驗' }),

  // ---- 作答題數 ----
  counter({ id: 'answered-30', title: '暖身開始', tier: 'bronze', category: 'volume', icon: 'pen', desc: '累積作答 30 題', stat: 'totalAnswered', target: 30, unit: '題' }),
  counter({ id: 'answered-100', title: '初試啼聲', tier: 'bronze', category: 'volume', icon: 'pen', desc: '累積作答 100 題', stat: 'totalAnswered', target: 100, unit: '題' }),
  counter({ id: 'answered-500', title: '熱身完畢', tier: 'bronze', category: 'volume', icon: 'pen', desc: '累積作答 500 題', stat: 'totalAnswered', target: 500, unit: '題' }),
  counter({ id: 'answered-1000', title: '千題起步', tier: 'silver', category: 'volume', icon: 'pen', desc: '累積作答 1,000 題', stat: 'totalAnswered', target: 1000, unit: '題' }),
  counter({ id: 'answered-2500', title: '題海航行者', tier: 'gold', category: 'volume', icon: 'pen', desc: '累積作答 2,500 題', stat: 'totalAnswered', target: 2500, unit: '題' }),
  counter({ id: 'answered-5000', title: '五千題傳說', tier: 'diamond', category: 'volume', icon: 'pen', desc: '累積作答 5,000 題', stat: 'totalAnswered', target: 5000, unit: '題' }),

  // ---- 正確率(一定要搭配最低作答題數)----
  accuracyAchievement({ id: 'accuracy-70', title: '穩紮穩打', tier: 'bronze', minAnswered: 300, percent: 70 }),
  accuracyAchievement({ id: 'accuracy-80', title: '步步為營', tier: 'silver', minAnswered: 600, percent: 80 }),
  accuracyAchievement({ id: 'accuracy-85', title: '精準射手', tier: 'silver', minAnswered: 800, percent: 85 }),
  accuracyAchievement({ id: 'accuracy-90', title: '百發百中', tier: 'gold', minAnswered: 1200, percent: 90 }),
  accuracyAchievement({ id: 'accuracy-95', title: '滿分獵人', tier: 'diamond', minAnswered: 1500, percent: 95 }),

  // ---- 讀書習慣:累積天數(不用連續)----
  counter({ id: 'days-7', title: '第一週', tier: 'bronze', category: 'habit', icon: 'calendar', desc: '累積 7 天有作答紀錄', stat: 'studyDays', target: 7, unit: '天' }),
  counter({ id: 'days-21', title: '三週不間斷', tier: 'bronze', category: 'habit', icon: 'calendar', desc: '累積 21 天有作答紀錄', stat: 'studyDays', target: 21, unit: '天' }),
  counter({ id: 'days-60', title: '雙月常客', tier: 'silver', category: 'habit', icon: 'calendar', desc: '累積 60 天有作答紀錄', stat: 'studyDays', target: 60, unit: '天' }),
  counter({ id: 'days-120', title: '四個月修行者', tier: 'gold', category: 'habit', icon: 'calendar', desc: '累積 120 天有作答紀錄', stat: 'studyDays', target: 120, unit: '天' }),
  counter({ id: 'streak-200', title: '半年修行者', tier: 'gold', category: 'habit', icon: 'calendar', desc: '累積 200 天有作答紀錄', stat: 'studyDays', target: 200, unit: '天' }),
  counter({ id: 'days-300', title: '三百日修行者', tier: 'gold', category: 'habit', icon: 'calendar', desc: '累積 300 天有作答紀錄', stat: 'studyDays', target: 300, unit: '天' }),
  counter({ id: 'streak-365', title: '全年無休', tier: 'diamond', category: 'habit', icon: 'calendar', desc: '累積 365 天有作答紀錄', stat: 'studyDays', target: 365, unit: '天' }),
  // ---- 讀書習慣:連續天數(中間斷一天就重新計算)----
  counter({ id: 'run-3', title: '三日連勝', tier: 'bronze', category: 'habit', icon: 'flame', desc: '連續 3 天每天都有作答紀錄', stat: 'longestRun', target: 3, unit: '天' }),
  counter({ id: 'run-7', title: '七日連勝', tier: 'bronze', category: 'habit', icon: 'flame', desc: '連續 7 天每天都有作答紀錄', stat: 'longestRun', target: 7, unit: '天' }),
  counter({ id: 'run-14', title: '雙週連勝', tier: 'silver', category: 'habit', icon: 'flame', desc: '連續 14 天每天都有作答紀錄', stat: 'longestRun', target: 14, unit: '天' }),
  counter({ id: 'run-30', title: '月度連勝', tier: 'gold', category: 'habit', icon: 'flame', desc: '連續 30 天每天都有作答紀錄', stat: 'longestRun', target: 30, unit: '天' }),
  counter({ id: 'run-60', title: '雙月連勝', tier: 'gold', category: 'habit', icon: 'flame', desc: '連續 60 天每天都有作答紀錄', stat: 'longestRun', target: 60, unit: '天' }),
  counter({ id: 'run-100', title: '百日連勝', tier: 'diamond', category: 'habit', icon: 'flame', desc: '連續 100 天每天都有作答紀錄', stat: 'longestRun', target: 100, unit: '天' }),

  // ---- 錯題本 ----
  counter({ id: 'mastered-1', title: '第一次訂正', tier: 'bronze', category: 'wrongbook', icon: 'flag', desc: '在錯題本標記第 1 題已熟練', stat: 'masteredCount', target: 1, unit: '題' }),
  counter({ id: 'mastered-10', title: '知錯能改', tier: 'bronze', category: 'wrongbook', icon: 'flag', desc: '在錯題本標記 10 題已熟練', stat: 'masteredCount', target: 10, unit: '題' }),
  counter({ id: 'mastered-40', title: '錯題清道夫', tier: 'silver', category: 'wrongbook', icon: 'flag', desc: '在錯題本標記 40 題已熟練', stat: 'masteredCount', target: 40, unit: '題' }),
  counter({ id: 'mastered-100', title: '錯題本剋星', tier: 'gold', category: 'wrongbook', icon: 'flag', desc: '在錯題本標記 100 題已熟練', stat: 'masteredCount', target: 100, unit: '題' }),
  counter({ id: 'mastered-200', title: '錯題終結者', tier: 'gold', category: 'wrongbook', icon: 'flag', desc: '在錯題本標記 200 題已熟練', stat: 'masteredCount', target: 200, unit: '題' }),
  counter({ id: 'mastered-400', title: '錯題本傳奇', tier: 'diamond', category: 'wrongbook', icon: 'flag', desc: '在錯題本標記 400 題已熟練', stat: 'masteredCount', target: 400, unit: '題' }),

  // ---- 練習方式(怎麼練,而不是練多少)----
  flag({ id: 'passage-perfect', title: '整篇拿下', tier: 'silver', category: 'practice', icon: 'scroll', desc: '同一篇文章的題組(至少 3 題)在一次測驗裡全部答對', stat: 'passagePerfect', todo: '還沒有整篇全對的題組' }),
  flag({ id: 'retest-improve-20', title: '捲土重來', tier: 'silver', category: 'practice', icon: 'trendUp', desc: '同一個單元再測一次,正確率比上一次高 20 個百分點以上(兩次都至少 5 題)', stat: 'retestImproved', todo: '還沒有紀錄' }),
  flag({ id: 'retest-perfect', title: '雪恥成功', tier: 'gold', category: 'practice', icon: 'star', desc: '同一個單元先前沒有全對,之後再測一次(至少 5 題)全部答對', stat: 'retestPerfect', todo: '還沒有紀錄' }),
  flag({ id: 'week-all-subjects', title: '一週五科', tier: 'silver', category: 'practice', icon: 'globe', desc: '連續 7 天之內,五個科目都有作答紀錄', stat: 'weekAllSubjects', todo: '還沒有一週內五科都碰過' }),
  flag({ id: 'practice-and-mock-day', title: '練考合一', tier: 'bronze', category: 'practice', icon: 'bolt', desc: '同一天有單元練習,也完成一次模擬考或歷屆試題', stat: 'practiceAndMockDay', todo: '還沒有紀錄' }),

  // ---- 均衡發展(五個科目「最低的那科」進度要達標)----
  { id: 'balanced-25', title: '五科起跑', tier: 'bronze', category: 'balance', icon: 'scale', desc: '五個科目進度都超過 25%', check: (s) => s.minSubjectPercent >= 25, progressText: (s) => `目前最低的科目 ${s.minSubjectPercent}%`, progressRatio: (s) => Math.min(1, s.minSubjectPercent / 25) },
  { id: 'balanced-40', title: '五科並進', tier: 'silver', category: 'balance', icon: 'scale', desc: '五個科目進度都超過 40%', check: (s) => s.minSubjectPercent >= 40, progressText: (s) => `目前最低的科目 ${s.minSubjectPercent}%`, progressRatio: (s) => Math.min(1, s.minSubjectPercent / 40) },
  { id: 'balanced-60', title: '五科均衡發展', tier: 'gold', category: 'balance', icon: 'scale', desc: '五個科目進度都超過 60%', check: (s) => s.minSubjectPercent >= 60, progressText: (s) => `目前最低的科目 ${s.minSubjectPercent}%`, progressRatio: (s) => Math.min(1, s.minSubjectPercent / 60) },

  // ---- 模擬考(一般模擬考,不含歷屆試題)----
  counter({ id: 'mock-count-1', title: '模考初登場', tier: 'bronze', category: 'mock', icon: 'medal', desc: '完成第 1 次模擬考', stat: 'mockCount', target: 1, unit: '次' }),
  counter({ id: 'mock-count-5', title: '模考新手', tier: 'bronze', category: 'mock', icon: 'medal', desc: '累積完成 5 次模擬考', stat: 'mockCount', target: 5, unit: '次' }),
  counter({ id: 'mock-count-15', title: '模考老手', tier: 'silver', category: 'mock', icon: 'medal', desc: '累積完成 15 次模擬考', stat: 'mockCount', target: 15, unit: '次' }),
  counter({ id: 'mock-count-30', title: '模考達人', tier: 'gold', category: 'mock', icon: 'medal', desc: '累積完成 30 次模擬考', stat: 'mockCount', target: 30, unit: '次' }),
  { id: 'mock-all-subjects', title: '模考初體驗', tier: 'silver', category: 'mock', icon: 'medal', desc: '五科模擬考都至少完成一次', check: (s) => s.mockSubjectsCovered >= 5, progressText: (s) => `${s.mockSubjectsCovered}/5 科`, progressRatio: (s) => Math.min(1, s.mockSubjectsCovered / 5) },
  flag({ id: 'mock-front', title: '考場常勝軍', tier: 'gold', category: 'mock', icon: 'trophy', desc: '任一科模擬考估計級分達到近年前標以上', stat: 'mockAnyAtFront', todo: '還沒有科目達到前標' }),
  flag({ id: 'mock-top', title: '頂標挑戰者', tier: 'diamond', category: 'mock', icon: 'trophy', desc: '任一科模擬考估計級分達到近年頂標以上', stat: 'mockAnyAtTop', todo: '還沒有科目達到頂標' }),
  counter({ id: 'mock-mean-5', title: '五科達標', tier: 'diamond', category: 'mock', icon: 'shield', desc: '五個科目的模擬考都至少有一次估計級分達到近年均標以上', stat: 'mockSubjectsAtMean', target: 5, unit: '科' }),

  // ---- 歷屆試題挑戰 ----
  { id: 'realexam-first', title: '踏入考場', tier: 'bronze', category: 'realexam', icon: 'scroll', desc: '完成任一科歷屆試題模擬考(單一年份或混合年份皆可)', check: (s) => s.realExamCount > 0, progressText: (s) => (s.realExamCount > 0 ? '已完成' : '還沒挑戰過歷屆試題') },
  counter({ id: 'realexam-count-5', title: '歷屆常客', tier: 'silver', category: 'realexam', icon: 'scroll', desc: '累積完成 5 次歷屆試題模擬考', stat: 'realExamCount', target: 5, unit: '次' }),
  counter({ id: 'realexam-count-20', title: '歷屆老手', tier: 'gold', category: 'realexam', icon: 'scroll', desc: '累積完成 20 次歷屆試題模擬考', stat: 'realExamCount', target: 20, unit: '次' }),
  { id: 'realexam-all-subjects', title: '五科制霸', tier: 'silver', category: 'realexam', icon: 'crown', desc: '五個科目的歷屆試題模擬考都至少完成一次', check: (s) => s.realExamSubjectsCovered >= 5, progressText: (s) => `${s.realExamSubjectsCovered}/5 科`, progressRatio: (s) => Math.min(1, s.realExamSubjectsCovered / 5) },
  flag({ id: 'realexam-front', title: '歷屆常勝軍', tier: 'gold', category: 'realexam', icon: 'trophy', desc: '任一科歷屆試題模擬考,估計級分達到近年前標以上', stat: 'realExamAnyAtFront', todo: '還沒有科目達到前標' }),
  flag({ id: 'realexam-top', title: '歷屆頂標', tier: 'diamond', category: 'realexam', icon: 'trophy', desc: '任一科歷屆試題模擬考,估計級分達到近年頂標以上', stat: 'realExamAnyAtTop', todo: '還沒有科目達到頂標' }),
  counter({ id: 'realexam-mean-5', title: '歷屆五科達標', tier: 'diamond', category: 'realexam', icon: 'shield', desc: '五個科目的歷屆試題模擬考都至少有一次估計級分達到近年均標以上', stat: 'realExamSubjectsAtMean', target: 5, unit: '科' }),
  { id: 'realexam-all-years', title: '五年全征服', tier: 'gold', category: 'realexam', icon: 'crown', desc: '任一科的 111~115 學年度單一年份試題都至少考過一次', check: (s) => s.realExamSubjectsAllYears >= 1, progressText: (s) => (s.realExamSubjectsAllYears >= 1 ? '已達成' : '還沒有科目五個學年度都考過') },
  counter({ id: 'realexam-all-years-2', title: '雙科五年制霸', tier: 'diamond', category: 'realexam', icon: 'crown', desc: '至少兩個科目的 111~115 學年度單一年份試題都考過', stat: 'realExamSubjectsAllYears', target: 2, unit: '科' }),

  // ---- 隱藏成就 ----
  flag({ id: 'secret-night-owl', title: '夜貓子讀書魂', tier: 'bronze', category: 'secret', icon: 'moon', secret: true, desc: '凌晨 0 點到 5 點之間完成過一次測驗作答', stat: 'nightOwl', todo: '還沒有紀錄' }),
  flag({ id: 'secret-early-bird', title: '晨型讀書人', tier: 'bronze', category: 'secret', icon: 'sunrise', secret: true, desc: '清晨 5 點到 7 點之間完成過一次測驗作答', stat: 'earlyBird', todo: '還沒有紀錄' }),
  flag({ id: 'secret-day-and-night', title: '日夜顛倒', tier: 'silver', category: 'secret', icon: 'moon', secret: true, desc: '同時拿過「夜貓子讀書魂」跟「晨型讀書人」', stat: 'nightAndMorning', todo: '還沒有紀錄' }),
  flag({ id: 'secret-weekend', title: '週末戰士', tier: 'bronze', category: 'secret', icon: 'calendar', secret: true, desc: '同一個週末(週六跟週日)兩天都有作答', stat: 'weekendWarrior', todo: '還沒有紀錄' }),
  counter({ id: 'secret-sprint-150', title: '衝刺讀書日', tier: 'silver', category: 'secret', icon: 'bolt', secret: true, desc: '同一天內完成 150 題以上的作答', stat: 'maxDayAnswered', target: 150, unit: '題(單日最多)' }),
  counter({ id: 'secret-marathon-300', title: '三百題馬拉松', tier: 'gold', category: 'secret', icon: 'bolt', secret: true, desc: '同一天內完成 300 題以上的作答', stat: 'maxDayAnswered', target: 300, unit: '題(單日最多)' }),
  counter({ id: 'secret-heavy-3days', title: '連三日衝刺', tier: 'gold', category: 'secret', icon: 'rocket', secret: true, desc: '連續 3 天,每天都作答 100 題以上', stat: 'longestHeavyRun', target: 3, unit: '天' }),
  { id: 'secret-five-in-one-day', title: '五科馬拉松', tier: 'gold', category: 'secret', icon: 'medal', secret: true, desc: '同一天內對五個科目都有作答紀錄', check: (s) => s.maxDaySubjects >= 5, progressText: (s) => `單日最多涵蓋 ${s.maxDaySubjects}/5 科` },
  counter({ id: 'secret-perfect-10', title: '完美十題', tier: 'silver', category: 'secret', icon: 'star', secret: true, desc: '單次測驗作答至少 10 題,而且全部答對', stat: 'maxPerfectQuiz', target: 10, unit: '題(單次全對最多)' }),
  counter({ id: 'secret-perfect-30', title: '完美三十題', tier: 'gold', category: 'secret', icon: 'star', secret: true, desc: '單次測驗作答至少 30 題,而且全部答對', stat: 'maxPerfectQuiz', target: 30, unit: '題(單次全對最多)' }),
  counter({ id: 'secret-perfect-all-subjects', title: '五科完美', tier: 'diamond', category: 'secret', icon: 'star', secret: true, desc: '五個科目都各自有過一次至少 10 題的全對測驗', stat: 'perfectSubjects', target: 5, unit: '科' }),
  flag({ id: 'secret-mock-perfect', title: '模考滿分', tier: 'diamond', category: 'secret', icon: 'trophy', secret: true, desc: '一般模擬考(至少 20 題)拿到 100% 正確率', stat: 'mockPerfect', todo: '還沒有紀錄' }),
  { id: 'secret-wrongbook-zero', title: '錯題本淨空', tier: 'silver', category: 'secret', icon: 'flag', secret: true, desc: '錯題本目前完全沒有待複習的錯題(至少要標記過一題已熟練)', check: (s) => s.wrongCount === 0 && s.masteredCount > 0, progressText: (s) => (s.wrongCount === 0 && s.masteredCount > 0 ? '已達成' : `目前還有 ${s.wrongCount} 題待複習`) },
  { id: 'secret-comeback', title: '東山再起', tier: 'gold', category: 'secret', icon: 'flag', secret: true, desc: '錯題本清到 0 題,而且累積標記過 30 題以上已熟練', check: (s) => s.wrongCount === 0 && s.masteredCount >= 30, progressText: (s) => (s.wrongCount === 0 && s.masteredCount >= 30 ? '已達成' : `已熟練 ${s.masteredCount} 題,待複習 ${s.wrongCount} 題`) },
  { id: 'secret-balanced-90', title: '全能選手', tier: 'gold', category: 'secret', icon: 'scale', secret: true, desc: '五個科目的完成度都超過 90%', check: (s) => s.minSubjectPercent >= 90, progressText: (s) => `目前最低的科目 ${s.minSubjectPercent}%`, progressRatio: (s) => Math.min(1, s.minSubjectPercent / 90) },
  flag({ id: 'secret-near-perfect', title: '一題不差傳說', tier: 'diamond', category: 'secret', icon: 'trophy', secret: true, desc: '歷屆試題模擬考單一年份模式,選擇題自動判分正確率達 95% 以上', stat: 'realExamAnyNearPerfectSingleYear', todo: '還沒有單一年份達到 95%' }),
];

// 各科成就:每科各自一區(category 是 subj-{科目 id}),依 subjectsMeta 產生,不手動
// 一筆一筆寫,新增科目時這裡會自動跟著多一組。一區裡依序是:完成度階梯、科目內
// 各領域(冊別/分科)、作答題數階梯、正確率、模擬考與歷屆試題的均標/前標/頂標。
// 領域成就的 id 用領域在該科裡的順序(area-{科目}-{第幾個}),單元分類重新編排時要留意。
const BAND_LEVELS = [
  { level: 'mean', label: '均標' },
  { level: 'front', label: '前標' },
  { level: 'top', label: '頂標' },
];

const SUBJECT_ACHIEVEMENTS = getAllSubjects().flatMap(({ id, name, units }) => {
  const category = `subj-${id}`;
  const find = (s) => s.subjects.find((x) => x.id === id);
  const areaNames = [...new Set(units.map((u) => u.category))];

  const progressStep = (percent, title, tier) => ({
    id: `subj-progress-${id}-${percent}`,
    title: `${name}${title}`,
    tier,
    category,
    icon: 'layers',
    desc: `${name}單元完成度達 ${percent}%`,
    check: (s) => (find(s)?.percent || 0) >= percent,
    progressText: (s) => {
      const subj = find(s);
      return subj ? `${subj.completed}/${subj.total} 單元(${subj.percent}%)` : '0 單元';
    },
    progressRatio: (s) => Math.min(1, (find(s)?.percent || 0) / percent),
  });

  const volumeStep = (target, title, tier, stepId = `subj-volume-${id}-${target}`) => ({
    id: stepId,
    title: `${name}${title}`,
    tier,
    category,
    icon: 'pen',
    desc: `${name}累積作答 ${target.toLocaleString('en-US')} 題`,
    check: (s) => (find(s)?.answered || 0) >= target,
    progressText: (s) => `${Math.min(find(s)?.answered || 0, target)}/${target} 題`,
    progressRatio: (s) => Math.min(1, (find(s)?.answered || 0) / target),
  });

  const bandStep = (kind, kindLabel, { level, label }, tier) => ({
    id: `subj-${kind}-${id}-${level}`,
    title: `${name}${kindLabel}${label}`,
    tier,
    category,
    icon: kind === 'mock' ? 'medal' : 'scroll',
    desc: `${name}${kind === 'mock' ? '模擬考' : '歷屆試題模擬考'}估計級分達到近年${label}以上`,
    check: (s) => !!find(s)?.[`${kind}Band`]?.[level],
    progressText: (s) => (find(s)?.[`${kind}Band`]?.[level] ? '已達成' : `還沒達到${label}`),
  });

  return [
    progressStep(25, '起步', 'bronze'),
    progressStep(50, '過半', 'silver'),
    progressStep(75, '衝刺', 'gold'),
    {
      id: `subj-complete-${id}`,
      title: `${name}制霸`,
      tier: 'gold',
      category,
      icon: 'crown',
      desc: `完成${name}全部單元`,
      check: (s) => {
        const subj = find(s);
        return !!subj && subj.total > 0 && subj.completed >= subj.total;
      },
      progressText: (s) => {
        const subj = find(s);
        return subj ? `${subj.completed}/${subj.total} 單元` : '0 單元';
      },
    },
    ...areaNames.map((area, index) => {
      const findArea = (s) => find(s)?.areas.find((a) => a.name === area);
      return {
        id: `area-${id}-${index + 1}`,
        title: `${name}・${area}`,
        tier: 'silver',
        category,
        icon: 'check',
        desc: `完成${name}「${area}」的全部單元`,
        check: (s) => {
          const a = findArea(s);
          return !!a && a.total > 0 && a.completed >= a.total;
        },
        progressText: (s) => {
          const a = findArea(s);
          return a ? `${a.completed}/${a.total} 單元` : '0 單元';
        },
        progressRatio: (s) => {
          const a = findArea(s);
          return a && a.total ? Math.min(1, a.completed / a.total) : 0;
        },
      };
    }),
    volumeStep(100, '暖身', 'bronze'),
    volumeStep(300, '題海', 'bronze', `subj-volume-${id}`),
    volumeStep(600, '苦練', 'silver'),
    volumeStep(1000, '千題', 'gold'),
    {
      id: `subj-accuracy-${id}`,
      title: `${name}神射手`,
      tier: 'silver',
      category,
      icon: 'target',
      desc: `${name}測驗正確率達 85%(至少作答 100 題)`,
      check: (s) => {
        const subj = find(s);
        return !!subj && subj.answered >= 100 && subj.accuracy >= 85;
      },
      progressText: (s) => {
        const subj = find(s);
        if (!subj || subj.answered === 0) return '還沒作答過';
        return `已作答 ${subj.answered} 題,正確率 ${subj.accuracy}%`;
      },
    },
    {
      id: `subj-master-${id}`,
      title: `${name}達人`,
      tier: 'gold',
      category,
      icon: 'gem',
      desc: `${name}測驗正確率達 90%(至少作答 300 題)`,
      check: (s) => {
        const subj = find(s);
        return !!subj && subj.answered >= 300 && subj.accuracy >= 90;
      },
      progressText: (s) => {
        const subj = find(s);
        if (!subj || subj.answered === 0) return '還沒作答過';
        return `已作答 ${subj.answered}/300 題,正確率 ${subj.accuracy}%`;
      },
    },
    ...BAND_LEVELS.map((band, i) => bandStep('mock', '模考', band, ['bronze', 'silver', 'gold'][i])),
    ...BAND_LEVELS.map((band, i) => bandStep('real', '歷屆', band, ['silver', 'gold', 'diamond'][i])),
  ];
});

export const ACHIEVEMENTS = [...CORE_ACHIEVEMENTS, ...SUBJECT_ACHIEVEMENTS];

// 日期用「自 1970-01-01 起算的第幾天」這種整數,連續天數就是找連續整數。
function dayIndexOf(date) {
  return Math.floor(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) / 86400000);
}

function longestRun(dayIndexes) {
  const sorted = [...dayIndexes].sort((a, b) => a - b);
  let best = 0;
  let run = 0;
  let prev = null;
  for (const d of sorted) {
    run = prev !== null && d === prev + 1 ? run + 1 : 1;
    best = Math.max(best, run);
    prev = d;
  }
  return best;
}

// 題目 id → 所屬文章 id、文章 id → 該篇題數,給「整篇題組全對」用。題庫不會變,算一次就好。
let passageIndexCache = null;
function passageIndex() {
  if (passageIndexCache) return passageIndexCache;
  const byQuestion = new Map();
  const size = new Map();
  for (const subject of getAllSubjects()) {
    for (const unit of subject.units) {
      for (const q of unit.quiz || []) {
        if (!q.passageId) continue;
        byQuestion.set(q.id, q.passageId);
        size.set(q.passageId, (size.get(q.passageId) || 0) + 1);
      }
    }
  }
  passageIndexCache = { byQuestion, size };
  return passageIndexCache;
}

export function computeStats() {
  const allResults = getQuizResults();
  const resultsBySubject = new Map();
  for (const r of allResults) {
    if (!resultsBySubject.has(r.subjectId)) resultsBySubject.set(r.subjectId, []);
    resultsBySubject.get(r.subjectId).push(r);
  }

  const subjectDetails = getAllSubjects().map((s) => {
    const progress = getSubjectProgress(s.id, s.units);
    const areas = [...new Set(s.units.map((u) => u.category))].map((name) => {
      const { completed, total } = getSubjectProgress(s.id, s.units.filter((u) => u.category === name));
      return { name, completed, total };
    });
    let answered = 0;
    let correct = 0;
    for (const r of resultsBySubject.get(s.id) || []) {
      answered += r.answers.length;
      correct += r.answers.filter((a) => a.isCorrect).length;
    }
    return {
      id: s.id,
      name: s.name,
      percent: progress.percent,
      completed: progress.completed,
      total: progress.total,
      areas,
      answered,
      accuracy: answered ? Math.round((correct / answered) * 100) : 0,
    };
  });
  const subjectPercents = subjectDetails.map((s) => s.percent);
  const totalUnits = subjectDetails.reduce((sum, s) => sum + s.total, 0);
  const completedUnits = subjectDetails.reduce((sum, s) => sum + s.completed, 0);

  let totalAnswered = 0;
  let totalCorrect = 0;
  // 依「日期」彙整每天答了幾題、涵蓋幾個科目,給習慣類成就用。
  const dayStats = new Map();
  let nightOwl = false;
  let earlyBird = false;
  let maxPerfectQuiz = 0;
  const perfectSubjectSet = new Set();
  let anyPerfectFive = false;
  let passagePerfect = false;
  const practiceDays = new Set();
  const unitAttempts = new Map();
  const passages = passageIndex();
  for (const r of allResults) {
    totalAnswered += r.answers.length;
    totalCorrect += r.answers.filter((a) => a.isCorrect).length;
    const takenAt = new Date(r.takenAt);
    const dayIndex = dayIndexOf(takenAt);
    const hour = takenAt.getHours();
    if (hour < 5) nightOwl = true;
    else if (hour < 7) earlyBird = true;
    if (!dayStats.has(dayIndex)) dayStats.set(dayIndex, { count: 0, subjects: new Set() });
    const day = dayStats.get(dayIndex);
    day.count += r.answers.length;
    day.subjects.add(r.subjectId);
    const allCorrect = r.answers.every((a) => a.isCorrect);
    if (r.answers.length >= 5 && allCorrect) anyPerfectFive = true;
    // 單元練習/測驗(不含模擬考拆出來的紀錄跟錯題重練)才算「同一個單元再測一次」。
    if (r.mode === 'practice' || r.mode === 'exam') {
      practiceDays.add(dayIndex);
      if (r.answers.length >= 5) {
        const key = `${r.subjectId}/${r.unitId}`;
        if (!unitAttempts.has(key)) unitAttempts.set(key, []);
        unitAttempts.get(key).push({ time: takenAt.getTime(), allCorrect, percent: (r.answers.filter((a) => a.isCorrect).length / r.answers.length) * 100 });
      }
    }
    if (!passagePerfect) {
      const hits = new Map();
      for (const a of r.answers) {
        const pid = passages.byQuestion.get(a.questionId);
        if (!pid) continue;
        if (!hits.has(pid)) hits.set(pid, { count: 0, wrong: false });
        const hit = hits.get(pid);
        hit.count += 1;
        if (!a.isCorrect) hit.wrong = true;
      }
      passagePerfect = [...hits].some(([pid, hit]) => !hit.wrong && passages.size.get(pid) >= 3 && hit.count >= passages.size.get(pid));
    }
    if (r.answers.length >= 10 && allCorrect) {
      maxPerfectQuiz = Math.max(maxPerfectQuiz, r.answers.length);
      perfectSubjectSet.add(r.subjectId);
    }
  }
  const accuracy = totalAnswered ? Math.round((totalCorrect / totalAnswered) * 100) : 0;
  const dayList = [...dayStats.values()];
  const dayIndexes = [...dayStats.keys()];
  const maxDayAnswered = dayList.reduce((max, d) => Math.max(max, d.count), 0);
  const maxDaySubjects = dayList.reduce((max, d) => Math.max(max, d.subjects.size), 0);
  const longestHeavyRun = longestRun(dayIndexes.filter((d) => dayStats.get(d).count >= 100));
  // 週六(getUTCDay()===6)的隔天週日也有作答,算同一個週末。
  let retestImproved = false;
  let retestPerfect = false;
  for (const attempts of unitAttempts.values()) {
    attempts.sort((a, b) => a.time - b.time);
    let missedBefore = false;
    attempts.forEach((attempt, i) => {
      if (i > 0 && attempt.percent - attempts[i - 1].percent >= 20) retestImproved = true;
      if (missedBefore && attempt.allCorrect) retestPerfect = true;
      if (!attempt.allCorrect) missedBefore = true;
    });
  }
  const weekAllSubjects = dayIndexes.some((start) => {
    const seen = new Set();
    for (let d = start; d < start + 7; d++) for (const id of dayStats.get(d)?.subjects || []) seen.add(bareSubjectId(id));
    return subjectDetails.length > 0 && subjectDetails.every((s) => seen.has(s.id));
  });
  const weekendWarrior = dayIndexes.some((d) => new Date(d * 86400000).getUTCDay() === 6 && dayStats.has(d + 1));

  // 歷屆試題模擬考的紀錄 subjectId 是虛擬的「{科目}-real」,跟一般模擬考分開判斷。
  // 含非選擇題、還沒自行對完答案的暫存紀錄(writtenPending)級分只算了選擇題部分,
  // 不能拿來判定「達標」,不然之後補完非選擇題級分掉下來,成就就變成假解鎖。
  const mockHistory = getMockExamHistory();
  const ordinaryMock = mockHistory.filter((m) => !m.subjectId.endsWith('-real'));
  const realExamHistory = mockHistory.filter((m) => m.subjectId.endsWith('-real'));
  const finalOnly = (list) => list.filter((m) => !m.writtenPending);
  const anyAt = (list, level) => finalOnly(list).some((m) => bandAtOrAbove(bareSubjectId(m.subjectId), m.estimatedBand, level));
  const subjectsAtMean = (list) =>
    new Set(finalOnly(list).filter((m) => bandAtOrAbove(bareSubjectId(m.subjectId), m.estimatedBand, 'mean')).map((m) => bareSubjectId(m.subjectId))).size;

  const bandFlags = (list, subjectId) => {
    const own = list.filter((m) => bareSubjectId(m.subjectId) === subjectId);
    return { mean: anyAt(own, 'mean'), front: anyAt(own, 'front'), top: anyAt(own, 'top') };
  };
  for (const s of subjectDetails) {
    s.mockBand = bandFlags(ordinaryMock, s.id);
    s.realBand = bandFlags(realExamHistory, s.id);
  }
  const practiceAndMockDay = mockHistory.some((m) => practiceDays.has(dayIndexOf(new Date(m.takenAt))));

  const yearsBySubject = new Map();
  for (const m of realExamHistory) {
    const match = /^(\d+) 學年度$/.exec(m.examLabel || '');
    if (!match) continue;
    const subj = bareSubjectId(m.subjectId);
    if (!yearsBySubject.has(subj)) yearsBySubject.set(subj, new Set());
    yearsBySubject.get(subj).add(match[1]);
  }

  return {
    subjects: subjectDetails,
    totalUnits,
    completedUnits,
    totalAnswered,
    accuracy,
    studyDays: dayStats.size,
    longestRun: longestRun(dayIndexes),
    masteredCount: getMasteredCount(),
    wrongCount: getReviewableWrongQuestions().length,
    minSubjectPercent: subjectPercents.length ? Math.min(...subjectPercents) : 0,
    mockCount: ordinaryMock.length,
    mockSubjectsCovered: new Set(ordinaryMock.map((m) => m.subjectId)).size,
    mockAnyAtFront: anyAt(ordinaryMock, 'front'),
    mockAnyAtTop: anyAt(ordinaryMock, 'top'),
    mockSubjectsAtMean: subjectsAtMean(ordinaryMock),
    mockPerfect: ordinaryMock.some((m) => m.percent === 100 && m.total >= 20),
    realExamCount: realExamHistory.length,
    realExamSubjectsCovered: new Set(realExamHistory.map((m) => bareSubjectId(m.subjectId))).size,
    realExamAnyAtFront: anyAt(realExamHistory, 'front'),
    realExamAnyAtTop: anyAt(realExamHistory, 'top'),
    realExamSubjectsAtMean: subjectsAtMean(realExamHistory),
    realExamAnyNearPerfectSingleYear: realExamHistory.some((m) => /^\d+ 學年度$/.test(m.examLabel || '') && m.percent >= 95),
    realExamSubjectsAllYears: [...yearsBySubject.values()].filter((years) => years.size >= 5).length,
    nightOwl,
    earlyBird,
    nightAndMorning: nightOwl && earlyBird,
    weekendWarrior,
    maxDayAnswered,
    maxDaySubjects,
    longestHeavyRun,
    maxPerfectQuiz,
    perfectSubjects: perfectSubjectSet.size,
    anyPerfectFive,
    passagePerfect,
    retestImproved,
    retestPerfect,
    weekAllSubjects,
    practiceAndMockDay,
  };
}

// 每個成就加上 earned(布林)、progress(給還沒解鎖的成就看目前進度到哪的文字)、
// ratio(0~1 的進度比例,給進度條用;算不出比例的成就是 null)。
export function getAchievementState() {
  const stats = computeStats();
  return ACHIEVEMENTS.map((a) => ({
    ...a,
    earned: a.check(stats),
    progress: a.progressText(stats),
    ratio: a.progressRatio ? a.progressRatio(stats) : null,
  }));
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
