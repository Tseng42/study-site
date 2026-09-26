// 把 storage.js 的本機快照跟 Firestore 的 users/{uid} 文件對起來。
// 策略:本機 localStorage 永遠是「馬上能讀寫」的來源(離線也能用,像在車上);
// 登入時把雲端資料「合併」進本機(見 storage.js 的 mergeSnapshot,紀錄取聯集,不是
// 誰新就整份蓋掉誰);之後每次本機資料變動,背景 debounce 推一次上雲端。
// Firestore 離線持久化會自動處理斷線佇列。
import { db } from './firebase-init.js';
import {
  doc,
  getDoc,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';
import { getSnapshot, mergeSnapshot, getLocalUpdatedAt, onChange, setActiveUser } from './storage.js';

let currentUid = null;
let pushTimer = null;
let listenersRegistered = false;
let syncReady = false;
let pendingPush = false;

export async function initCloudSync(uid) {
  currentUid = uid;
  syncReady = false;
  pendingPush = false;
  setActiveUser(uid);

  // 跟雲端合併這一步,最多只等 3 秒不擋畫面,但背景的 pull 不會被取消 ——
  // 一定要等它真的成功或失敗過一次,才放行推送(見 syncReady)。不然像是慢速網路
  // 導致這 3 秒逾時,使用者在這台裝置上第一個動作就會被 pushNow() 用「這台裝置
  // 幾乎是空的」本機快照整份蓋掉雲端既有紀錄,造成資料遺失。
  // 合併(而不是誰新就整份採用誰)也涵蓋了「pull 還在等的時候使用者已經在這台
  // 裝置上作答」的情況:那筆新紀錄跟雲端既有紀錄會一起保留。
  const pull = getDoc(doc(db, 'users', uid))
    .then((snap) => {
      const localUpdatedAt = getLocalUpdatedAt();
      if (!snap.exists()) {
        // 雲端還沒有這個帳號的資料,但本機有(例如之前推送在完成前就被關掉頁面)。
        if (localUpdatedAt) pendingPush = true;
        return;
      }
      const remote = snap.data();
      if (remote.updatedAt && remote.updatedAt === localUpdatedAt) return;
      if (mergeSnapshot(remote)) pendingPush = true;
    })
    .catch(() => {
      // 讀不到雲端(離線、規則還沒設好等)就先用本機資料,不擋畫面。
    })
    .finally(() => {
      syncReady = true;
      if (pendingPush) {
        pendingPush = false;
        scheduleCloudPush();
      }
    });

  await Promise.race([pull, new Promise((resolve) => setTimeout(resolve, 3000))]);

  if (!listenersRegistered) {
    listenersRegistered = true;
    onChange(scheduleCloudPush);
    // 1.5 秒的 debounce 等待期間如果使用者剛好切走分頁/關掉頁面,計時器會跟著
    // 頁面一起消失,那次變動就沒推上去。頁面要被藏起來/關掉時立刻補推一次;
    // Firestore 的離線持久化會把這次寫入存進 IndexedDB,即使網路請求來不及送完,
    // 下次開啟也會接著送。
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') flushPendingPush();
    });
    window.addEventListener('pagehide', flushPendingPush);
  }
}

function scheduleCloudPush() {
  if (!currentUid) return;
  if (!syncReady) {
    // 還沒確定跟雲端同步過,先記住「有變動待推送」,等 initCloudSync 的
    // 背景 pull 完成後再自動補推,不能在這之前就送出。
    pendingPush = true;
    return;
  }
  clearTimeout(pushTimer);
  pushTimer = setTimeout(pushNow, 1500);
}

function flushPendingPush() {
  if (!currentUid || !syncReady || pushTimer === null) return;
  clearTimeout(pushTimer);
  pushNow();
}

async function pushNow() {
  pushTimer = null;
  if (!currentUid) return;
  const snapshot = getSnapshot();
  try {
    await setDoc(doc(db, 'users', currentUid), snapshot);
  } catch {
    // Firestore 的離線佇列會在恢復連線後自動重試,這裡不用額外處理。
  }
}
