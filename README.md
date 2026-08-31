# 學測複習站

給高中生複習學測全科的靜態網站。純 HTML/CSS/JavaScript(ES Modules)寫成,不需要 npm 或建置工具,資料先用本地 JS 檔案管理,使用者的作答紀錄/進度/錯題本存在瀏覽器 localStorage。

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
index.html        首頁:科目總覽 + 整體進度
subject.html       科目頁樣板(單元列表)?subject=chinese
unit.html          單元頁樣板(筆記 + 測驗)?subject=chinese&unit=ch-u1
wrongbook.html      錯題本頁面
css/style.css      全站樣式
js/
  storage.js         localStorage 存取封裝(進度/作答紀錄/錯題本)
  subjects-registry.js  統一的資料查詢入口
  render.js           共用 DOM render 小工具
  page-*.js           各頁面邏輯
data/
  subjects-meta.js    科目清單(id/名稱/顏色)
  chinese.js, english.js, math.js, science.js, social.js  各科單元資料
```

## 目前內容進度

各科單元清單已經照高一到高三的完整範圍建好骨架(國文/英文依六個學期分組、數學依高一上~高二下+高三總複習分組、自然/社會依領域分組),但大部分單元還沒有寫筆記與測驗題,清單上會顯示「製作中」標記。之後只要把對應單元的 `note` 和 `quiz` 填上內容,標記就會自動消失。

## 如何新增/擴充內容

每科的資料檔(如 `data/chinese.js`)長這樣,直接編輯即可,不用碰任何 HTML:

```js
export default {
  id: 'chinese',
  units: [
    {
      id: 'ch-u1',              // 全站唯一,建議用「科目縮寫-uN」
      title: '單元標題',
      category: null,            // 自然/社會用,如 '物理'、'歷史',其他科可留 null
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

## 資料保存說明

作答紀錄、進度、錯題本都存在瀏覽器的 localStorage,只存在「同一台電腦、同一個瀏覽器」裡。換電腦、換瀏覽器、或清除瀏覽器資料都會遺失紀錄,目前沒有雲端同步。三筆資料的 key 分別是 `studysite_progress`、`studysite_quizResults`、`studysite_wrongBookState`,格式細節見 `js/storage.js` 開頭的註解。

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
