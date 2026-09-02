// 把 storage.js 的本機快照跟 Firestore 的 users/{uid} 文件對起來。
// 策略:本機 localStorage 永遠是「馬上能讀寫」的來源(離線也能用,像在車上);
// 登入時跟雲端比對 updatedAt,誰新就用誰;之後每次本機資料變動,
// 背景 debounce 推一次上雲端。Firestore 離線持久化會自動處理斷線佇列。
import { db } from './firebase-init.js';
import {
  doc,
  getDoc,
  setDoc,
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';
import { getSnapshot, applySnapshot, getLocalUpdatedAt, onChange, setActiveUser } from './storage.js';

let currentUid = null;
let pushTimer = null;
let onChangeRegistered = false;
let syncReady = false;
let pendingPush = false;

export async function initCloudSync(uid) {
  currentUid = uid;
  syncReady = false;
  pendingPush = false;
  setActiveUser(uid);

  // 跟雲端比對誰新的這一步,最多只等 3 秒不擋畫面,但背景的 pull 不會被取消 ——
  // 一定要等它真的成功或失敗過一次,才放行推送(見 syncReady)。不然像是慢速網路
  // 導致這 3 秒逾時,使用者在這台裝置上第一個動作就會被 pushNow() 用「這台裝置
  // 幾乎是空的」本機快照整份蓋掉雲端既有紀錄,造成資料遺失。
  const pull = getDoc(doc(db, 'users', uid))
    .then((snap) => {
      if (snap.exists()) {
        const remote = snap.data();
        const localUpdatedAt = getLocalUpdatedAt();
        if (!localUpdatedAt || (remote.updatedAt && remote.updatedAt > localUpdatedAt)) {
          applySnapshot(remote);
        }
      }
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

  if (!onChangeRegistered) {
    onChangeRegistered = true;
    onChange(scheduleCloudPush);
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

async function pushNow() {
  if (!currentUid) return;
  const snapshot = getSnapshot();
  try {
    await setDoc(doc(db, 'users', currentUid), snapshot);
  } catch {
    // Firestore 的離線佇列會在恢復連線後自動重試,這裡不用額外處理。
  }
}
