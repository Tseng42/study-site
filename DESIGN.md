---
name: 學測複習站
description: 一位高中生的學測全科複習儀表板——把整個三年課綱顯示成一塊看得懂、信得過的精密儀表。
colors:
  bg-parchment: "#f1e9da"
  surface-white: "#ffffff"
  surface-alt-parchment: "#f6efe2"
  border-soft-tan: "#e7dfcc"
  ink-deep-plum: "#201c2b"
  ink-muted-mauve: "#635e70"
  subject-chinese-brick: "#c2432b"
  subject-english-indigo: "#6c5ce7"
  subject-math-forest-teal: "#157a64"
  subject-science-amber-clay: "#a05c0d"
  subject-social-berry-rose: "#c93e7d"
  success-forest-green: "#1f7a3d"
  danger-brick-red: "#c23636"
typography:
  display:
    fontFamily: "M PLUS Rounded 1c, Noto Sans TC, -apple-system, Segoe UI, Microsoft JhengHei, sans-serif"
    fontSize: "1.85rem"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Noto Sans TC, -apple-system, Segoe UI, Microsoft JhengHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "12px"
  md: "18px"
  lg: "28px"
  full: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.ink-deep-plum}"
    textColor: "#ffffff"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-deep-plum}"
    rounded: "{rounded.full}"
    padding: "12px 24px"
  subject-card:
    backgroundColor: "{colors.subject-chinese-brick}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "20px"
---

# Design System: 學測複習站

## Overview

**Creative North Star: "The Trusted Instrument Panel"**

這不是一個討好使用者的行銷型 App,而是一位準備學測的高中生每天打開、依賴數月的私人儀表板。設計語言直接取材自使用者指定的參考畫面——一款彩色專案管理儀表板——但拿掉了原畫面裡不屬於這個產品的東西(協作者頭像堆疊、$9.99 升級方案、行銷插畫),換成真實可信的資料:五科進度卡片、錯題複習清單、測驗正確率、讀書天數。

暖色羊皮紙底色 + 白色卡片是穩定的中性場;色彩只出現在「有意義的地方」——五個科目各自擁有一個飽和色,一致地出現在該科目所有相關的卡片、清單列、進度條上,讓使用者靠顏色就能辨認科目,而不是靠色彩堆疊製造熱鬧。所有飽和色都刻意調深過,確保卡片上的白字在任何裝置、任何光線下都清楚可讀——這是與原始參考圖最大的刻意偏離:更沉、更「儀器感」,少一點糖果色,多一點可靠感。

**Key Characteristics:**
- 暖色羊皮紙背景 + 白色卡片的中性場,飽和色只出現在科目識別與狀態上
- 每個科目一個專屬飽和色,跨頁面(首頁卡片、科目頁橫幅、單元列表、錯題本)保持一致
- 圓角、粗體、手繪風格的一致線條圖示(非 emoji),呼應原始參考圖的親和感
- 大膽但不失禮貌的字級對比:巨大的問候標題,克制的內文

## Colors

暖色中性場搭配五個科目專屬飽和色;所有飽和色相對白色文字都達到 4.5:1 以上對比,刻意比參考圖更深、更沉穩。

### Primary
- **磚陶紅 Subject Chinese Brick** (#c2432b):國文科的識別色,出現在該科的卡片、橫幅、清單左側色條。
- **靛藍 Subject English Indigo** (#6c5ce7):英文科識別色。
- **森林藍綠 Subject Math Forest Teal** (#157a64):數學科識別色。
- **琥珀陶土 Subject Science Amber Clay** (#a05c0d):自然科識別色。
- **莓紅 Subject Social Berry Rose** (#c93e7d):社會科識別色。

### Neutral
- **羊皮紙底 Bg Parchment** (#f1e9da):全站頁面背景,唯一大面積使用的中性色。
- **純白卡面 Surface White** (#ffffff):所有卡片、清單列、面板的表面色。
- **淺羊皮紙 Surface Alt Parchment** (#f6efe2):統計方塊、badge 等次要表面。
- **柔和棕邊 Border Soft Tan** (#e7dfcc):卡片邊框、分隔線。
- **深梅墨 Ink Deep Plum** (#201c2b):主要文字、標題、深色按鈕底色。
- **柔霧藕色 Ink Muted Mauve** (#635e70):次要文字、說明文字——刻意比視覺上「看起來夠深」的灰色再深一階,確保在羊皮紙底上仍有 4.5:1 以上對比。

### Named Rules
**The One Hue Per Subject Rule.** 每個科目永遠只用它自己的那個飽和色,不混用、不漸層(除了首頁鼓勵卡片刻意用兩科顏色做漸層,象徵「跨科前進」)。使用者靠顏色就能認出科目,顏色因此不能被隨意挪用做裝飾。

**The Deepened-For-Legibility Rule.** 所有科目色都比「畫面上看起來剛好」再深一階,只為了讓卡片上的白字在小字級也能穩穩超過 4.5:1 對比——寧可色彩飽和度犧牲一點,也不讓任何文字變成裝飾性噪音。

## Typography

**Display Font:** M PLUS Rounded 1c(圓潤字體,搭配 Noto Sans TC / 系統中文字體 fallback)
**Body Font:** Noto Sans TC(搭配系統中文字體 fallback)

**Character:** 標題與數字用圓潤的 M PLUS Rounded 1c,帶出參考畫面裡那種親和但不幼稚的個性;大段筆記與題目內文則換回穩重好讀的 Noto Sans TC,避免長時間閱讀時圓體字型造成疲勞。

### Hierarchy
- **Display**(800 weight,1.85rem,line-height 1.15):首頁問候語「嗨,開始今天的複習吧」、科目名稱大標題。
- **Headline**(800 weight,1.4rem):統計數字(已完成單元數、正確率、已作答天數)、測驗成績。
- **Title**(700 weight,1.1–1.6rem):科目名稱、單元標題、卡片小標。
- **Body**(400–600 weight,1rem,line-height 1.6):筆記內文、題目文字、清單說明。
- **Label**(600–700 weight,0.75–0.85rem):badge(製作中)、次要 meta 文字(科目 · 單元)、統計方塊標籤。

### Named Rules
**The Numerals Stay Tabular Rule.** 所有會變動的數字顯示(統計方塊數值、卡片百分比)都套用 `font-variant-numeric: tabular-nums`,讓數字更新時版面不會抖動——這是「儀器感」而非「網頁感」的關鍵細節。

## Layout

單頁應用等級的資訊密度,但用純靜態多頁面(index / subject / unit / wrongbook)實現,不用框架路由。首頁是全站唯一的「儀表板」版面:科目卡片格線(`auto-fill, minmax(210px, 1fr)`)在上,下方兩欄(近期需複習 + 學習統計、最近測驗紀錄)在桌機併排、手機收成單欄。其餘三個頁面(科目/單元/錯題本)用較窄的單欄閱讀版面(`max-width: 760px`),因為那裡的任務是專注閱讀筆記與作答,不需要儀表板密度。

全站共用一個 sticky 頂部導覽列(白底、羊皮紙下邊框),而不是複製參考圖裡的側邊欄——側邊欄的導覽功能完全被頂部導覽取代,避免在四種頁面樣板間重複一份沉重的側欄外殼。

響應式斷點在 860px(雙欄儀表板收成單欄)與 640px(容器內距縮小、統計方塊改兩欄)。

## Elevation & Depth

淺層陰影系統,只用來把「可互動的卡片/清單列」從羊皮紙底浮起一點點,不做強烈的分層堆疊。

### Shadow Vocabulary
- **輕陰影 shadow-sm**(`0 2px 8px rgba(32,28,43,0.06)`):清單列、統計面板的靜止狀態。
- **中陰影 shadow-md**(`0 10px 28px rgba(32,28,43,0.1)`):科目卡片、橫幅的靜止狀態;清單列與科目卡片 hover 時也會升級到這一階,搭配輕微位移,給出「可以點」的回饋。

### Named Rules
**The Rest-Then-Lift Rule.** 所有可點擊的卡片與清單列在靜止時只用最輕的陰影,hover 時陰影加深、位置微微位移(卡片上浮、清單列右移),讓「可互動」這件事靠動態回饚傳達,而不是靜態就做得很搶眼。

## Shapes

大圓角是這個系統最明顯的形狀語言,直接繼承自使用者指定的參考畫面:主要卡片與橫幅用 28px(`--radius-lg`),清單列與統計方塊用 18px(`--radius-md`),badge 與按鈕用全圓角膠囊(`--radius-full`)。科目識別色以 4px 左側色條的形式出現在清單列與卡片上(`border-left: 4px solid`)——這是刻意從參考畫面裡保留下來的裝置,即使它是常見的「AI 生成介面」視覺慣性之一,在這裡因為使用者明確指定並且重複到形成系統一致性,而不是隨手加的裝飾,所以予以保留。

## Components

### Buttons
- **Shape:** 全圓角膠囊(`border-radius: 999px`)
- **Primary(`btn-pill-dark`):** 深梅墨底色、白字、粗體,用於「前往錯題本」「送出測驗」等主要動作
- **Secondary(`btn-pill-outline`):** 白底、柔和棕邊框、深梅墨文字,用於「練習模式」等次要動作
- **Hover / Focus:** hover 時上浮 1px 並加深陰影;鍵盤 focus 時顯示 2.5px 深梅墨色 outline(全站共用,不用瀏覽器預設藍框)

### Cards / Containers
- **Corner Style:** 28px(科目卡片、橫幅)或 18px(清單列、統計方塊)
- **Background:** 科目卡片與橫幅用該科目的飽和識別色;其餘卡片一律白底
- **Shadow Strategy:** 見 Elevation & Depth
- **Border:** 清單列與 wrong-card 用 4px 科目色左側色條;一般卡片無邊框
- **Internal Padding:** 14–20px

### Circular Check(signature component)
取代原生 checkbox 的圓形勾選標記:22px 圓形,未勾選時白底柔邊框,勾選後填滿森林綠(`--success`)並顯示白色勾勾圖示。用於單元完成度勾選,以及科目頁單元清單裡的完成狀態指示。

### Navigation
頂部導覽列白底、羊皮紙下邊框、sticky 置頂。品牌標誌是深梅墨底色圓角方塊搭配書本線稿圖示。導覽項目是膠囊形狀,當前頁面用深梅墨底色實心高亮,其餘為透明底柔霧藕色文字,hover 時淡羊皮紙底色。

### Icons
全站圖示皆為手繪 SVG 線稿(24×24 viewBox,1.75px 描邊寬度,圓端圓角),不用 emoji 或圖示字型。每個科目有專屬圖示(國文=卷軸、英文=對話框、數學=羅盤、自然=原子、社會=地球),與該科識別色配對使用。

## Do's and Don'ts

### Do:
- **Do** 讓每個科目的識別色貫穿它出現的每個地方(卡片、橫幅、清單色條、錯題本),不要在同一科目使用兩種不同色相。
- **Do** 統計數字與百分比套用 `tabular-nums`,維持數字更新時的版面穩定。
- **Do** 用 `transform`(位移 / `scaleX`)做動畫,不要動畫 `width`/`height`/`padding` 等會觸發 layout 的屬性——進度條用 `transform: scaleX()` 而非 `width` 過渡。
- **Do** 在飽和色卡片上用「加深底色」而非「降低文字透明度」來製造次要文字的視覺層次,確保次要文字對比永遠不低於主要文字。

### Don't:
- **Don't** 為了「看起來更活潑」而加入任何遊戲化裝置(連續天數火焰圖示、徽章、排行榜)——首頁的「已作答天數」是中性統計,不是遊戲化 streak。
- **Don't** 在卡片或清單上發明假的協作者頭像堆疊、付費方案卡片、或任何這個單人本機工具沒有的功能——這個網站只有一位使用者、沒有帳號系統,任何看起來像多人協作或付費升級的視覺元素都是說謊。
- **Don't** 把 emoji 當圖示用;新增圖示一律手繪 SVG 線稿,維持與既有圖示一致的描邊寬度與風格。
- **Don't** 用系統預設字體(`system-ui`、`Arial`)作為 Display 字體——已經選定 M PLUS Rounded 1c 並自架 Google Fonts,不要退回系統字體當作「反正差不多」。
