// 數學科單元資料,依高一上~高二下分組,高三主要為總複習(category 欄位)。
// note 為 null 或 quiz 為空陣列代表「內容製作中」。
export default {
  id: 'math',
  units: [
    // ---- 高一上 ----
    {
      id: 'math-u1',
      title: '二次函數與圖形',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '標準式:y = a(x-h)² + k,頂點座標為 (h, k)。',
              'a > 0 開口向上(有最小值);a < 0 開口向下(有最大值)。',
              '判別式 b² - 4ac:>0 有兩相異實根,=0 有重根,<0 無實根。',
              '一般式 y = ax² + bx + c 可透過配方法轉換成標準式求頂點。',
            ],
          },
          {
            heading: '常用公式',
            table: {
              headers: ['名稱', '公式'],
              rows: [
                ['頂點 x 座標', 'x = -b / (2a)'],
                ['判別式', 'D = b² - 4ac'],
                ['求根公式', 'x = (-b ± √D) / (2a)'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'math-u1-q1',
          question: '拋物線 y = 2(x-3)² + 5 的頂點座標為何?',
          options: ['(3, 5)', '(-3, 5)', '(3, -5)', '(5, 3)'],
          answer: 0,
          explanation: '標準式 y = a(x-h)² + k 的頂點為 (h, k),此處 h=3, k=5,故頂點為 (3, 5)。',
        },
        {
          id: 'math-u1-q2',
          question: '方程式 x² - 4x + 4 = 0 的判別式 D 為多少?',
          options: ['0', '16', '-16', '4'],
          answer: 0,
          explanation: 'D = b² - 4ac = (-4)² - 4×1×4 = 16 - 16 = 0,代表此方程式有重根。',
        },
      ],
    },
    { id: 'math-u3', title: '數與式的運算', category: '高一上', note: null, quiz: [] },
    { id: 'math-u4', title: '多項式函數', category: '高一上', note: null, quiz: [] },
    { id: 'math-u5', title: '指數與對數函數', category: '高一上', note: null, quiz: [] },

    // ---- 高一下 ----
    {
      id: 'math-u2',
      title: '數列與級數',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '等差數列:aₙ = a₁ + (n-1)d,前 n 項和 Sₙ = n(a₁+aₙ)/2。',
              '等比數列:aₙ = a₁ × r^(n-1),前 n 項和 Sₙ = a₁(1-rⁿ)/(1-r), r≠1。',
              '無窮等比級數收斂條件:|r| < 1,和為 a₁/(1-r)。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u2-q1',
          question: '等差數列首項 a₁=3,公差 d=4,則第 10 項為多少?',
          options: ['39', '43', '35', '40'],
          answer: 0,
          explanation: 'aₙ = a₁ + (n-1)d = 3 + 9×4 = 3 + 36 = 39。',
        },
      ],
    },
    { id: 'math-u6', title: '三角函數基礎', category: '高一下', note: null, quiz: [] },
    { id: 'math-u7', title: '排列組合基礎', category: '高一下', note: null, quiz: [] },
    { id: 'math-u8', title: '機率入門', category: '高一下', note: null, quiz: [] },

    // ---- 高二上 ----
    { id: 'math-u9', title: '平面向量', category: '高二上', note: null, quiz: [] },
    { id: 'math-u10', title: '空間向量基礎', category: '高二上', note: null, quiz: [] },
    { id: 'math-u11', title: '直線與圓', category: '高二上', note: null, quiz: [] },
    { id: 'math-u12', title: '矩陣基礎', category: '高二上', note: null, quiz: [] },

    // ---- 高二下 ----
    { id: 'math-u13', title: '數據分析與統計', category: '高二下', note: null, quiz: [] },
    { id: 'math-u14', title: '條件機率與貝氏定理', category: '高二下', note: null, quiz: [] },
    { id: 'math-u15', title: '圓錐曲線基礎', category: '高二下', note: null, quiz: [] },
    { id: 'math-u16', title: '三角函數應用與極座標', category: '高二下', note: null, quiz: [] },

    // ---- 高三總複習 ----
    { id: 'math-u17', title: '學測數學混合題型技巧', category: '高三總複習', note: null, quiz: [] },
    { id: 'math-u18', title: '歷屆試題主題整理', category: '高三總複習', note: null, quiz: [] },
  ],
};
