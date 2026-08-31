// 自然科單元資料,依物理/化學/生物/地科四個領域分組(category 欄位)。
// note 為 null 或 quiz 為空陣列代表「內容製作中」。
export default {
  id: 'science',
  units: [
    // ---- 物理 ----
    {
      id: 'sci-phy-u1',
      title: '牛頓運動定律',
      category: '物理',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '第一定律(慣性定律):物體不受外力或合力為零時,維持靜止或等速直線運動。',
              '第二定律:F = ma,合力等於質量乘以加速度。',
              '第三定律(作用反作用):兩物體交互作用力大小相等、方向相反、作用在不同物體上。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'sci-phy-u1-q1',
          question: '一物體質量 2 kg,受合力 10 N,則加速度為多少?',
          options: ['2 m/s²', '5 m/s²', '10 m/s²', '20 m/s²'],
          answer: 1,
          explanation: '由 F = ma,a = F/m = 10/2 = 5 m/s²。',
        },
      ],
    },
    { id: 'sci-phy-u2', title: '功與能量', category: '物理', note: null, quiz: [] },
    { id: 'sci-phy-u3', title: '波動與光', category: '物理', note: null, quiz: [] },
    { id: 'sci-phy-u4', title: '靜電與電路', category: '物理', note: null, quiz: [] },
    { id: 'sci-phy-u5', title: '磁場與電磁感應', category: '物理', note: null, quiz: [] },
    { id: 'sci-phy-u6', title: '近代物理概論(光電效應/原子模型)', category: '物理', note: null, quiz: [] },

    // ---- 化學 ----
    {
      id: 'sci-chem-u1',
      title: '原子結構與元素週期表',
      category: '化學',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '原子由質子、中子、電子組成,質子數決定元素種類(原子序)。',
              '同一週期由左到右,原子半徑通常變小,電負度變大。',
              '同一族(直行)元素通常有相似的化學性質。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'sci-chem-u1-q1',
          question: '決定元素種類的是原子核中的什麼?',
          options: ['中子數', '質子數', '電子數', '質量數'],
          answer: 1,
          explanation: '質子數(原子序)決定了元素的種類,例如質子數為 6 的元素就是碳。',
        },
      ],
    },
    { id: 'sci-chem-u2', title: '化學鍵結與分子形狀', category: '化學', note: null, quiz: [] },
    { id: 'sci-chem-u3', title: '化學反應速率與平衡', category: '化學', note: null, quiz: [] },
    { id: 'sci-chem-u4', title: '酸鹼反應與滴定', category: '化學', note: null, quiz: [] },
    { id: 'sci-chem-u5', title: '氧化還原反應', category: '化學', note: null, quiz: [] },
    { id: 'sci-chem-u6', title: '有機化合物概論', category: '化學', note: null, quiz: [] },

    // ---- 生物 ----
    { id: 'sci-bio-u1', title: '細胞的構造與功能', category: '生物', note: null, quiz: [] },
    { id: 'sci-bio-u2', title: '細胞分裂與遺傳', category: '生物', note: null, quiz: [] },
    { id: 'sci-bio-u3', title: '光合作用與呼吸作用', category: '生物', note: null, quiz: [] },
    { id: 'sci-bio-u4', title: '人體恆定與神經系統', category: '生物', note: null, quiz: [] },
    { id: 'sci-bio-u5', title: '生態系與族群', category: '生物', note: null, quiz: [] },
    { id: 'sci-bio-u6', title: '演化與生物多樣性', category: '生物', note: null, quiz: [] },

    // ---- 地科 ----
    { id: 'sci-earth-u1', title: '地球的構造與板塊運動', category: '地科', note: null, quiz: [] },
    { id: 'sci-earth-u2', title: '岩石循環與地層', category: '地科', note: null, quiz: [] },
    { id: 'sci-earth-u3', title: '大氣與天氣系統', category: '地科', note: null, quiz: [] },
    { id: 'sci-earth-u4', title: '海洋與洋流', category: '地科', note: null, quiz: [] },
    { id: 'sci-earth-u5', title: '天文與太陽系', category: '地科', note: null, quiz: [] },
    { id: 'sci-earth-u6', title: '全球氣候變遷', category: '地科', note: null, quiz: [] },
  ],
};
