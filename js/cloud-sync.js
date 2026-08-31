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

export async function initCloudSync(uid) {
  currentUid = uid;
  setActiveUser(uid);

  try {
    const snap = await Promise.race([
      getDoc(doc(db, 'users', uid)),
      new Promise((resolve) => setTimeout(() => resolve(null), 3000)),
    ]);
    if (snap && snap.exists && snap.exists()) {
      const remote = snap.data();
      const localUpdatedAt = getLocalUpdatedAt();
      if (!localUpdatedAt || (remote.updatedAt && remote.updatedAt > localUpdatedAt)) {
        applySnapshot(remote);
      }
    }
  } catch {
    // 讀不到雲端(離線、規則還沒設好等)就先用本機資料,不擋畫面。
  }

  if (!onChangeRegistered) {
    onChangeRegistered = true;
    onChange(scheduleCloudPush);
  }
}

function scheduleCloudPush() {
  if (!currentUid) return;
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
