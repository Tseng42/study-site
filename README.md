# 學測複習站

給高中生複習學測全科的靜態網站。純 HTML/CSS/JavaScript(ES Modules)寫成,不需要 npm 或建置工具,資料用本地 JS 檔案管理。使用者以 Google 帳號登入,作答紀錄/進度/錯題本存在瀏覽器 localStorage 作為離線可用的本機快取,並背景同步到 Firebase Firestore,換裝置登入同一帳號可看到同一份資料。

## 本機開發

因為用了 ES Modules,瀏覽器不允許直接雙擊開啟 `index.html`(`file://` 會擋 CORS),需要透過一個簡單的本地伺服器:

- VS Code:安裝 "Live Server" 套件,右鍵 `index.html` → `Open with Live Server`
- 或用 Node.js:
  ```bash
  npx serve .
  ```
- 或用 Python(多數電腦已內建):
  ```bash
  python -m http.server 8000
  ```
  然後開啟 http://localhost:8000

## 專案結構

```
index.html        首頁:科目總覽 + 整體進度 + 今日複習建議
subject.html       科目頁樣板(單元列表)?subject=chinese
unit.html          單元頁樣板(筆記 + 測驗)?subject=chinese&unit=ch-u1
mockexam.html      模擬考(科目選擇 / 限時作答 / 結果)?subject=chinese
profile.html       個人資料(學習統計 + 圖表 + 最近測驗紀錄)
wrongbook.html      錯題本頁面
css/style.css      全站樣式
js/
  firebase-init.js    Firebase 專案初始化(config、auth、firestore 實例)
  auth.js             Google 登入 / 登出、登入前的全螢幕登入畫面
  cloud-sync.js        localStorage 快照與 Firestore 之間的同步邏輯
  storage.js          localStorage 存取封裝(進度/作答紀錄/錯題本/模擬考紀錄),依登入帳號分開存放
  study-plan.js        學測倒數天數與讀書階段/重點科目建議
  quiz-utils.js         測驗題目洗牌工具(單元練習、模擬考共用)
  subjects-registry.js  統一的資料查詢入口
  render.js           共用 DOM render 小工具(含圖示、圓形勾選等元件)
  layout.js           共用頁首(品牌圖示、使用者選單)
  page-*.js           各頁面邏輯(page-mockexam.js 是模擬考邏輯)
data/
  subjects-meta.js    科目清單(id/名稱/顏色)
  mock-exam-config.js  模擬考每科題數/限時設定、近年五標對照資料
  chinese.js, english.js, math.js, science.js, social.js  各科單元資料
```

## 目前內容進度

五科、共 111 個單元(國文 24、英文 24、數學 18、自然 24、社會 21)已全數寫上筆記與測驗題(共約 330 題單選題),涵蓋高一到高三完整範圍。日後若要調整內容,直接編輯對應 `data/*.js` 檔案裡的 `note`/`quiz` 即可,格式規則見下一節。

## 如何新增/擴充內容

每科的資料檔(如 `data/chinese.js`)長這樣,直接編輯即可,不用碰任何 HTML:

```js
export default {
  id: 'chinese',
  units: [
    {
      id: 'ch-u1',              // 全站唯一,建議用「科目縮寫-uN」
      title: '單元標題',
      category: '高一上',        // 分組標籤:國文/英文/數學用學期(高一上~高三下),自然/社會用領域(如 '物理'、'歷史')
      note: {
        sections: [
          { heading: '重點整理', content: ['條列重點1', '條列重點2'] },
          { heading: '表格範例', table: { headers: [...], rows: [[...]] } },
        ],
      },
      quiz: [
        {
          id: 'ch-u1-q1',        // 全站唯一
          question: '題目文字',
          options: ['選項A', '選項B', '選項C', '選項D'],
          answer: 0,              // 正確選項 index(0 開始)
          explanation: '詳解(可留空字串)',
        },
      ],
    },
  ],
};
```

新增科目:在 `data/subjects-meta.js` 加一筆、建立對應資料檔,再到 `js/subjects-registry.js` import 並加進 `dataBySubject`。

## 帳號與資料保存說明

- 進入任何頁面前都需要用 Google 帳號登入(見 `js/auth.js`),未登入會擋在全螢幕登入畫面。
- 進度、作答紀錄、錯題本會先寫進瀏覽器 localStorage(依登入帳號的 uid 分開存放,同一台裝置可以給多個帳號使用而不互相汙染),讓畫面能立即反應、離線也能繼續用;背景會 debounce 同步一份完整快照到 Firestore(`users/{uid}` 文件),見 `js/cloud-sync.js`。
- 登入時會比對本機與雲端的 `updatedAt` 時間戳,取較新的一份覆蓋另一份(last-write-wins),換裝置登入同一帳號就能接續進度。
- Firestore 安全規則限制每個帳號只能讀寫自己 uid 底下的文件,規則內容見 Firebase 主控台的 Firestore → 規則分頁。
- Firebase 專案用的是免費 Spark 方案(Authentication + Firestore 皆免費,不需信用卡),`js/firebase-init.js` 裡的 `firebaseConfig` 是公開識別碼而非密碼,可以放心留在版本控制裡。

## 部署到 GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<你的帳號>/<repo名稱>.git
git push -u origin main
```

接著到 GitHub repository 的 Settings → Pages,Source 選擇 `main` branch、`/ (root)` 資料夾並儲存,幾分鐘後即可透過 `https://<你的帳號>.github.io/<repo名稱>/` 瀏覽。

## 部署到 Firebase Hosting(建議的主要網址)

GitHub Pages 的網域跟 Firebase Auth 登入交接用的網域(`*.firebaseapp.com`)不是同一個網域,部分手機瀏覽器的儲存空間隔離機制會擋掉這種跨網域登入交接,導致選完 Google 帳號、按下繼續後又被送回登入畫面(尤其容易發生在 Android)。改部署到 Firebase Hosting 就沒有這個問題,因為網站跟登入交接會在同一個網域下完成。

```bash
npx firebase-tools login    # 第一次使用需要登入 Firebase CLI
npx firebase-tools deploy --only hosting
```

`firebase.json`、`.firebaserc` 已經設定好(對應 `study-site-1ba0d` 專案),部署完成後網址是 `https://study-site-1ba0d.web.app`。GitHub Pages 可以繼續保留當備用,但實際使用建議都用這個 Firebase Hosting 網址。

## 模擬考資料來源

`data/mock-exam-config.js` 裡的題數、限時、單選/多選/選填配題、社會與自然的分科配題(歷史/地理/公民、物理/化學/生物/地科),都直接對齊 114 學年度學測(114 年 1 月考)「選擇題部分」的真實結構,不是縮減配速的估計值。

**各科題數是直接讀大考中心官方公布的正式答案卷算出來的**(不是看新聞懶人包的摘要數字 —— 這份資料早先版本曾經誤用搜尋引擎摘要,把國文誤植成 25 題,後來直接下載 PDF 逐題核對才抓到,見下方連結,答案卷格式是「題號→答案」,答案是單一字母/數字算單選、兩個以上字母/數字算多選、「／」代表非選擇題不計入):
- [114學測 國語文綜合能力測驗選擇題參考答案](https://www.ceec.edu.tw/files/file_pool/1/0P020599887773780175/114%E5%AD%B8%E6%B8%AC%E5%9C%8B%E8%AA%9E%E6%96%87%E7%B6%9C%E5%90%88%E8%83%BD%E5%8A%9B%E6%B8%AC%E9%A9%97%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf) — Q1-33 選擇題(26 單選+7 多選),Q34-36 非選擇題
- [114學測 英文考科選擇題參考答案](https://www.ceec.edu.tw/files/file_pool/1/0P020599726139811147/114%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf) — Q1-46、49 選擇題(46 單選+1 多選/篇章結構題),Q47/48/50 非選擇題
- [114學測 數學A考科選擇(填)題參考答案](https://www.ceec.edu.tw/files/file_pool/1/0P019609011568488076/114%E5%AD%B8%E6%B8%AC%E6%95%B8%E5%AD%B8A%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf) — 6 單選+6 多選+5 選填(題組小題)+3 混合題組(併入單選)= 20 題
- [114學測 自然考科選擇題參考答案](https://www.ceec.edu.tw/files/file_pool/1/0P019609131102357003/114%E5%AD%B8%E6%B8%AC%E8%87%AA%E7%84%B6%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf) — 57 個題號中有 9 題非選擇題,實際選擇題 48 題(21 單選+27 多選,多選比單選還多)
- [114學測 社會考科選擇題參考答案](https://www.ceec.edu.tw/files/file_pool/1/0P021527730825901679/114%E5%AD%B8%E6%B8%AC%E7%A4%BE%E6%9C%83%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf) — 64 個題號中有 10 題非選擇題,實際選擇題 54 題,而且全部是單選,沒有多選題(這是 114 這年的真實結構,不同年度不一定一樣)
- 各科考試時間(國文/國綜 90 分鐘、英文/數學 100 分鐘、社會/自然 110 分鐘):[111學測必知資訊 - 大學問](https://www.unews.com.tw/News/Info/4612)
- 社會/自然分科均分原則(歷史/地理/公民、物理/化學/生物/地科各科題數大致均等):大考中心考試說明公開的配題原則 —— 答案卷本身不會標示每題屬於哪一分科,所以分科用「總題數 ÷ 分科數」均分,分科內部的單選/多選比例則是用該科整體單選:多選比例平均分攤估的,不是逐分科的官方數字
- 113、114 學年度五標:[114學測五標公布 - 翻轉教育](https://flipedu.parenting.com.tw/article/009892)、[TVBS新聞網](https://news.tvbs.com.tw/life/2741903)

模擬考只涵蓋「選擇題」部分 —— 國寫、英文寫作、數學/自然/社會的非選擇題都需要人工評閱,無法在題庫網站上模擬,各科開始畫面都會註明排除了哪個部分。估計級分是用答對率簡單換算(分數/總分 × 15),不是正式的常模計算,正式級分需要當年全部考生一起考完才能算出來。之後若要更新五標資料或改用其他年度,直接下載該年度的正式答案卷 PDF 重新核對題數/題型即可,不要只看新聞摘要——上面就是曾經因此出錯的教訓。
