// 學測倒數與讀書節奏建議。目標考試日期優先讀使用者在個人資料頁自訂的設定
// (storage.js 的 examDate,會跟著帳號雲端同步);沒設定過的話用 DEFAULT_EXAM_DATE
// 這個預設值(115 學年度學測第一天),每年放榜後可以直接更新這個常數。
import { getSubjectProgress, getQuizResults, getExamDate } from './storage.js';

const DEFAULT_EXAM_DATE = new Date('2027-01-17T00:00:00+08:00');

// 回傳目前實際生效的目標考試日期(使用者自訂或預設值),個人資料頁的
// 設定表單也用這個函式決定日期欄位要顯示什麼初始值。
export function resolveExamDate() {
  const custom = getExamDate();
  if (!custom) return DEFAULT_EXAM_DATE;
  const parsed = new Date(`${custom}T00:00:00+08:00`);
  return Number.isNaN(parsed.getTime()) ? DEFAULT_EXAM_DATE : parsed;
}

const PHASES = [
  {
    key: 'build',
    min: 100,
    label: '扎實期',
    tip: '把各單元讀完,弱科多分配一點時間,先求「讀過一輪」再求「熟」。',
  },
  {
    key: 'drill',
    min: 60,
    label: '刷題期',
    tip: '單元大致讀完後,靠題目抓出真正不熟的地方,答錯的題目馬上進錯題本複習。',
  },
  {
    key: 'mock',
    min: 30,
    label: '模考期',
    tip: '開始限時整回考古題,五科交錯練習,訓練考試節奏跟耐力。',
  },
  {
    key: 'review',
    min: 14,
    label: '總複習期',
    tip: '少學新東西,把錯題本從頭到尾看過一輪,弱點單元重新整理筆記。',
  },
  {
    key: 'sprint',
    min: 0,
    label: '考前衝刺期',
    tip: '只做拿手的複習,調整作息、固定起床時間,考古題保持手感就好,別硬塞新進度。',
  },
];

export function getDaysRemaining(today = new Date()) {
  const ms = resolveExamDate() - today;
  return Math.max(0, Math.ceil(ms / (1000 * 60 * 60 * 24)));
}

export function getStudyPhase(daysRemaining) {
  return PHASES.find((p) => daysRemaining > p.min) || PHASES[PHASES.length - 1];
}

// 依「完成度低優先、其次正確率低優先」排序,挑出最值得花時間的 1-2 科。
export function suggestFocusSubjects(subjects, limit = 2) {
  const stats = subjects.map((subject) => {
    const progress = getSubjectProgress(subject.id, subject.units.length);
    const results = getQuizResults(subject.id);
    let correct = 0;
    let answered = 0;
    for (const r of results) {
      answered += r.answers.length;
      correct += r.answers.filter((a) => a.isCorrect).length;
    }
    const accuracy = answered ? Math.round((correct / answered) * 100) : null;

    let reason;
    if (progress.percent === 0 && accuracy === null) reason = '還沒開始';
    else if (accuracy !== null && accuracy < 60) reason = `測驗正確率 ${accuracy}%`;
    else reason = `進度 ${progress.percent}%`;

    return { subject, percent: progress.percent, accuracy, reason };
  });

  stats.sort((a, b) => a.percent - b.percent || (a.accuracy ?? 100) - (b.accuracy ?? 100));
  return stats.slice(0, limit);
}
