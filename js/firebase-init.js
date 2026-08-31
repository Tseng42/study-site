// Firebase 專案初始化。apiKey 等值是公開識別碼(不是密碼),
// 真正的存取控管是靠 Firestore 安全規則,所以可以放心提交進版本控制。
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js';
import {
  getFirestore,
  enableIndexedDbPersistence,
} from 'https://www.gstatic.com/firebasejs/12.18.0/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCNHYFxAmgVSJevNgtwG6ykGObLqWKyD_s',
  authDomain: 'study-site-1ba0d.firebaseapp.com',
  projectId: 'study-site-1ba0d',
  storageBucket: 'study-site-1ba0d.firebasestorage.app',
  messagingSenderId: '605831941984',
  appId: '1:605831941984:web:8071f6e3fa4289fb27d805',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// 讓 Firestore 在離線(例如車上沒網路)時還能讀寫本地快取,
// 恢復連線後自動同步。多分頁同時開啟時會 fail,直接忽略即可。
enableIndexedDbPersistence(db).catch(() => {});
