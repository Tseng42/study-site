// 英文科單元資料,依高一上~高三下六個學期分組(category 欄位)。
// note 為 null 或 quiz 為空陣列代表「內容製作中」。
export default {
  id: 'english',
  units: [
    // ---- 高一上 ----
    {
      id: 'en-u1',
      title: '動詞時態總複習',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '現在完成式 (have/has + p.p.):強調過去動作對現在的影響或結果。',
              '過去完成式 (had + p.p.):表示「過去的過去」,常搭配 before/after/when 使用。',
              '現在進行式表未來:計畫好的近期未來動作,如 "I am leaving tomorrow."',
              '被動語態 (be + p.p.):強調動作承受者而非執行者。',
            ],
          },
          {
            heading: '時態比較',
            table: {
              headers: ['時態', '結構', '常見時間副詞'],
              rows: [
                ['現在完成式', 'have/has + p.p.', 'already, yet, since, for'],
                ['過去完成式', 'had + p.p.', 'before, after, by the time'],
                ['未來完成式', 'will have + p.p.', 'by + 未來時間'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'en-u1-q1',
          question: 'By the time she arrived, the meeting ___ already ___.',
          options: ['has / started', 'had / started', 'have / start', 'will / start'],
          answer: 1,
          explanation:
            '"By the time" 搭配過去式子句時,主要子句常用過去完成式,表示「在她到達之前,會議已經開始了」。',
        },
        {
          id: 'en-u1-q2',
          question: 'The window ___ by someone last night.',
          options: ['broke', 'was broken', 'has broken', 'breaks'],
          answer: 1,
          explanation: '窗戶是「被打破」,主詞是動作承受者,應使用被動語態 was broken。',
        },
      ],
    },
    {
      id: 'en-u2',
      title: '閱讀測驗答題技巧',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '先看題目再讀文章,帶著問題找答案,節省時間。',
              '注意文章的「主題句」,通常在段落開頭或結尾。',
              '推論題(inference)要根據文章線索合理推測,不能只憑常識亂猜。',
              '字彙題可用「上下文」猜測生字意思,不用每個字都認得。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u2-q1',
          question: '閱讀測驗中,若題目問 "What can be inferred from the passage?",代表這是哪一種題型?',
          options: ['主旨題', '細節題', '推論題', '字彙題'],
          answer: 2,
          explanation:
            '"infer" 是「推論」的意思,這類題目需要根據文章線索合理推斷,答案通常不會直接寫在文章裡。',
        },
      ],
    },
    { id: 'en-u3', title: '詞性與句子結構', category: '高一上', note: null, quiz: [] },
    { id: 'en-u4', title: '常用連接詞與轉折語', category: '高一上', note: null, quiz: [] },

    // ---- 高一下 ----
    { id: 'en-u5', title: '被動語態與假設語氣', category: '高一下', note: null, quiz: [] },
    { id: 'en-u6', title: '關係子句與分詞構句', category: '高一下', note: null, quiz: [] },
    { id: 'en-u7', title: '字彙記憶策略(字根字首字尾)', category: '高一下', note: null, quiz: [] },
    { id: 'en-u8', title: '翻譯基礎與中英句構差異', category: '高一下', note: null, quiz: [] },

    // ---- 高二上 ----
    { id: 'en-u9', title: '比較級與最高級深化', category: '高二上', note: null, quiz: [] },
    { id: 'en-u10', title: '不定詞與動名詞用法', category: '高二上', note: null, quiz: [] },
    { id: 'en-u11', title: '克漏字答題技巧', category: '高二上', note: null, quiz: [] },
    { id: 'en-u12', title: '主題式閱讀:自然科學類', category: '高二上', note: null, quiz: [] },

    // ---- 高二下 ----
    { id: 'en-u13', title: '名詞子句與間接問句', category: '高二下', note: null, quiz: [] },
    { id: 'en-u14', title: '倒裝句與強調句', category: '高二下', note: null, quiz: [] },
    { id: 'en-u15', title: '主題式閱讀:社會人文類', category: '高二下', note: null, quiz: [] },
    { id: 'en-u16', title: '摘要寫作技巧', category: '高二下', note: null, quiz: [] },

    // ---- 高三上 ----
    { id: 'en-u17', title: '學測文意選填技巧', category: '高三上', note: null, quiz: [] },
    { id: 'en-u18', title: '學測閱讀測驗題型總整理', category: '高三上', note: null, quiz: [] },
    { id: 'en-u19', title: '翻譯句型總複習', category: '高三上', note: null, quiz: [] },
    { id: 'en-u20', title: '英文作文架構(起承轉合)', category: '高三上', note: null, quiz: [] },

    // ---- 高三下 ----
    { id: 'en-u21', title: '混合題型模擬練習', category: '高三下', note: null, quiz: [] },
    { id: 'en-u22', title: '歷屆試題主題字彙整理', category: '高三下', note: null, quiz: [] },
    { id: 'en-u23', title: '作文範文分析', category: '高三下', note: null, quiz: [] },
    { id: 'en-u24', title: '考前總複習與答題節奏', category: '高三下', note: null, quiz: [] },
  ],
};
