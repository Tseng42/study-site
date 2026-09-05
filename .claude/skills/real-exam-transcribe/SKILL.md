---
name: real-exam-transcribe
description: Use when extending this site's 歷屆試題模擬考(real past-exam mock exam)feature to a new subject, or resuming an in-progress subject rollout — i.e. transcribing official 學測 exam PDFs (question booklet, answer key, 非選擇題評分原則) from ceec.edu.tw into a subject's data/<subject>-real-exams.js, one 學年度 at a time. Covers PDF research technique, question-type schema, background-agent dispatch strategy, known agent infra failure modes + mitigations, verification requirements, and final site-integration/deploy steps. Not needed for ordinary content edits to existing subject data — only for adding/continuing a whole subject's real-exam transcription.
user-invocable: true
argument-hint: "[subject e.g. 國文/英文/自然] [狀態: 開始/繼續/整合]"
---

# 歷屆試題轉錄 SOP

這份 skill 記錄「數學」「社會」兩科歷屆試題轉錄過程中踩過的坑,目的是讓下一科(國文/英文/自然)不用重新在對話裡摸索一次。**不要**把這份文件當成固定模板照抄結構——每一科的實際考試結構差異可能很大(數學是乾淨分區塊:單選/多選/選填/混合題;社會是連續 60-66 題、非選穿插其中),第一步永遠是先花時間確認**這一科**實際長怎樣,再決定 schema。

## 法律基礎(不用重新確認)

依法轉錄是合法的:著作權法第 9 條第 1 項第 5 款排除「依法令舉行之各類考試試題」的著作權保護。

## 整體流程

1. **探索該科考試結構**:抓一份該科近年的官方試題本 PDF,搞清楚:總題數、單選/多選/選填/非選的比例與排列方式(獨立區塊 vs 穿插)、有沒有「一題裡同時有勾選+簡答」的混合題、題組(共用題幹/圖表)怎麼分布。這一步決定了 schema,不要跳過直接套用其他科的假設。
2. **設計/確認 schema**(如果跟既有科目結構類似可以沿用,不同就要重新設計)——見下方「資料 schema 慣例」。
3. **逐年轉錄**:每個學年度(111-115)用一個獨立的背景 Agent 處理,**依序啟動、不要平行**(見下方「Agent 派工策略」)。
4. **每年資料驗證**:agent 自己在完稿前必須跑過程式化驗證(見下方「驗證要求」),不是選配。
5. **全部年度到齊後整合進站內**:見下方「整合進站內流程」。
6. **commit + 部署**,只有在使用者要求"做完全科"的情況下才在全科完成後一次回報,除非使用者中途主動問進度。

## Agent 派工策略

- 用 `Agent`(subagent_type: general-purpose, `run_in_background: true`)處理每個學年度的轉錄,避免大量 PDF 頁面塞爆主線 context。
- Agent 把成果寫到 scratchpad 的獨立 `.mjs` 檔(例如 `social-real-113.mjs`),不要直接改 repo 裡的 `data/*.js`——最後由主線統一合併,避免多個 agent 互相衝突。
- **一次只派一個 agent,等它完全結束(收到 completion 通知)才派下一個。** 平行派 5 個 agent 曾經穩定觸發 `rate_limit` 429("session limit, resets HH:MMpm Asia/Taipei");改成嚴格依序派工後才順利做完。即使依序單獨跑,仍有一次撞到限制,顯示這可能也跟 session 累積用量有關,不是純粹並行數的問題——遇到 429 不要盲目重試,先跑 `date -u "+%Y-%m-%d %H:%M:%S UTC"` 把 UTC 轉換成台北時間(+8 小時),跟錯誤訊息裡的 reset 時間比對過確定已過了才重派。
- 給每個 agent 的 prompt 必須是**自包含**的(agent 不會看到這份 skill 或之前的對話),至少要包含:
  - 目標科目/學年度、官方 PDF 要去哪找(ceec.edu.tw)
  - 指向前一個成功年度的 scratch 檔案路徑,要求「先讀那個檔案當作 schema/格式範本,照抄欄位命名與慣例」
  - 輸出路徑(scratchpad 裡的 `.mjs`)
  - 下方「PDF 研究技巧」與「已知失敗模式」的內容(逐字帶過去,不要假設 agent 知道)
  - 下方「驗證要求」的內容,並明確引用「數學曾經 23/53 答案錯誤未驗證」這個事故當理由
  - 完成後要回報的內容格式(題數、各 type 數量、跳過的題號與原因、驗證腳本結果)

## PDF 研究技巧

- 對 ceec.edu.tw 的 PDF 網址用 `WebFetch`:文字擷取一定會失敗(預期行為,不是錯誤),但檔案會被存到本機,結果裡會附本機路徑。
- 接著對那個本機路徑用 `Read`(原生支援 PDF,會渲染成頁面圖片)。
- 超過約 15-20 頁的 PDF 要用 `pages` 參數分批讀,建議一批 5-10 頁,一次讀太多頁容易觸發 stall。
- **沒有 zoom 工具。** 小字/圖表看不清楚時,重新對同一頁或更窄的頁碼範圍呼叫 `Read`,不要嘗試用不存在的 zoom 功能(這是曾經導致 agent "no progress for 600s" 卡住的原因)。真的因為圖片/地圖本身看不清楚而無法轉錄的題目,跳過並在檔案開頭註解記錄原因,不要用猜的、也不要卡住不動。

## 已知 agent 基礎設施失敗模式

| 現象 | 原因 | 對策 |
|---|---|---|
| `rate_limit` 429,"resets HH:MMpm Asia/Taipei" | 平行派多個 agent(可能也有 session 累積用量因素) | 改依序派工;重派前用 `date -u` 換算台北時間確認已過 reset 時間 |
| "Output blocked by content filtering policy" | 對政府考題 PDF 內容的 false positive | 直接重試,不用改內容 |
| "Agent stalled: no progress for 600s" | agent 嘗試用不存在的圖片 zoom 功能 | prompt 裡明確告知沒有 zoom 工具,改用重新 `Read` 窄頁碼範圍 |

## 資料 schema 慣例

題目 type 定義的 source of truth 是 [js/quiz-utils.js](../../../js/quiz-utils.js) 檔頭註解,不要在這裡重複抄一份會過時的副本,派工前先讀那份確認目前支援的 type 有哪些(目前含 `single`/`multi`/`numeric`/`numeric-multi`/`written`/`hybrid`)。

- `hybrid` 是社會科發明出來處理「一題裡同時有勾選(可自動判分)+簡答(自己對答案)」的情況:`{ options, answer, writtenPrompt }`,在 `finish()` 時會拆成兩筆結果(勾選用原本 id,簡答用 `${id}-written`)。如果新科目也有類似的複合題型,可以沿用這個 type,不用重新發明。
- 題組共用題幹/圖表:用 `passageId`/`passageTitle`/`passage` 欄位,同一題組每一題的 passage 文字要 byte-identical(用程式檢查,不要肉眼比對)。
- 單一年度模式要保留原始題號順序(題組間常有依賴關係,像社會/數學的混合題有「承上題」關係),不要為了排版重新分組排序。
- 級分估算權重(`autoWeight`/`writtenWeight`)要對照該科官方選擇/非選題型分數比例去算,不是隨便抓一個值——每科的實際配分不同(數學 0.85/0.15、社會約 0.673/0.327),新科目要先查該科官方採計說明。

## 驗證要求(不可省略)

過去數學科曾經在沒驗證的情況下,53 題裡有 23 題答案索引是錯的。之後每一年度都要求 agent 自己完稿前跑一次程式化驗證(Node script,可以是 scratchpad 裡的一次性檔案),至少檢查:

1. id 不重複、答案索引沒有超出 options 範圍
2. 同一 `passageId` 底下每題的 passage 文字完全一致
3. `written` 題目不該帶 `options`/`answer` 欄位
4. 每一題選擇/hybrid 的答案索引跟官方答案 key PDF 逐題比對(不是抽查)

跑完一次紮實的程式化驗證通常就夠了,不需要無限迭代重跑——過度反覆驗證本身也會消耗大量 token/時間。

## 整合進站內流程(全科所有年度到齊後)

1. 把各年度 scratch `.mjs` 合併進 `data/<subject>-real-exams.js`(取代 placeholder)。
2. 對合併後的完整檔案再跑一次跨年度驗證腳本(id 在全科範圍內不重複、每個 type 必要欄位齊全、hybrid 一定要有 `writtenPrompt`)。
3. 在 [js/subjects-registry.js](../../../js/subjects-registry.js) 裡 import 新的 data 檔,加進 `realExamUnitsBySubject`。
4. 在 [js/page-real-exam.js](../../../js/page-real-exam.js) 的 `CONFIGS` 物件裡新增該科設定(`subjectId`/`historyId`/`autoWeight`/`writtenWeight`/`buildYearQuestions`/`buildMixedQuestions` 等)。
5. 在 [js/page-mockexam.js](../../../js/page-mockexam.js) 的 `REAL_EXAM_SUBJECTS` 陣列加一筆。
6. 在 [js/page-profile.js](../../../js/page-profile.js) 的 `REAL_EXAM_HISTORY` 查詢表加一筆,確認個人資料頁的模擬考紀錄能正確顯示新科目。
7. 瀏覽器實際跑一次該科的年度選單、單一年度模式、混合模式、非選自行對答案流程、級分計算結果、錯題本串接——不能只靠 `node --check` 語法檢查就當作完成,hybrid 題型的實際渲染一定要真的點過一次。
8. commit(訊息風格照歷史 commit,附 `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`)+ `npx firebase-tools deploy --only hosting`。
