// 社會科單元資料,依歷史/地理/公民三個領域分組(category 欄位)。
// note 為 null 或 quiz 為空陣列代表「內容製作中」。
export default {
  id: 'social',
  units: [
    // ---- 歷史 ----
    {
      id: 'soc-his-u1',
      title: '台灣史:荷治與明鄭時期',
      category: '歷史',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '荷蘭於 1624 年在台灣南部建立統治,以熱蘭遮城為中心,發展貿易與農業。',
              '鄭成功於 1662 年擊敗荷蘭人,建立明鄭政權,以台灣為反清復明基地。',
              '明鄭時期引進漢人移民與農業技術,奠定漢人在台灣發展的基礎。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'soc-his-u1-q1',
          question: '鄭成功擊敗荷蘭人、取得台灣是在哪一年?',
          options: ['1624年', '1662年', '1683年', '1895年'],
          answer: 1,
          explanation: '鄭成功於 1662 年擊敗荷蘭東印度公司,建立明鄭政權。',
        },
      ],
    },
    { id: 'soc-his-u2', title: '台灣史:清領時期', category: '歷史', note: null, quiz: [] },
    { id: 'soc-his-u3', title: '台灣史:日治時期', category: '歷史', note: null, quiz: [] },
    { id: 'soc-his-u4', title: '台灣史:戰後發展', category: '歷史', note: null, quiz: [] },
    { id: 'soc-his-u5', title: '中國史:先秦至隋唐', category: '歷史', note: null, quiz: [] },
    { id: 'soc-his-u6', title: '中國史:宋元明清', category: '歷史', note: null, quiz: [] },
    { id: 'soc-his-u7', title: '世界史:近代化與國際關係', category: '歷史', note: null, quiz: [] },

    // ---- 地理 ----
    {
      id: 'soc-geo-u1',
      title: '台灣的氣候與地形',
      category: '地理',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '台灣屬於副熱帶及熱帶季風氣候,夏季高溫多雨,冬季北部東北季風影響明顯。',
              '中央山脈縱貫南北,將台灣分為東西兩側,影響降雨分布(地形雨)。',
              '西部平原為主要農業與人口聚集區,東部多山地與縱谷地形。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'soc-geo-u1-q1',
          question: '台灣冬季東北部多雨,主要與下列何者有關?',
          options: ['梅雨鋒面', '東北季風遇地形抬升', '颱風', '對流雨'],
          answer: 1,
          explanation: '冬季東北季風挾帶水氣,遇到台灣東北部山地地形抬升,形成豐沛降雨。',
        },
      ],
    },
    { id: 'soc-geo-u2', title: '台灣的產業發展', category: '地理', note: null, quiz: [] },
    { id: 'soc-geo-u3', title: '世界氣候類型與分布', category: '地理', note: null, quiz: [] },
    { id: 'soc-geo-u4', title: '人口與都市化', category: '地理', note: null, quiz: [] },
    { id: 'soc-geo-u5', title: '地圖判讀與地理資訊系統', category: '地理', note: null, quiz: [] },
    { id: 'soc-geo-u6', title: '區域地理:東亞與東南亞', category: '地理', note: null, quiz: [] },
    { id: 'soc-geo-u7', title: '全球化與環境議題', category: '地理', note: null, quiz: [] },

    // ---- 公民 ----
    { id: 'soc-civ-u1', title: '民主政治與憲政體制', category: '公民', note: null, quiz: [] },
    { id: 'soc-civ-u2', title: '法律與生活(民法/刑法基礎)', category: '公民', note: null, quiz: [] },
    { id: 'soc-civ-u3', title: '人權保障與轉型正義', category: '公民', note: null, quiz: [] },
    { id: 'soc-civ-u4', title: '市場經濟與政府角色', category: '公民', note: null, quiz: [] },
    { id: 'soc-civ-u5', title: '全球化與國際關係', category: '公民', note: null, quiz: [] },
    { id: 'soc-civ-u6', title: '社會階層與多元文化', category: '公民', note: null, quiz: [] },
    { id: 'soc-civ-u7', title: '公共政策與公民參與', category: '公民', note: null, quiz: [] },
  ],
};
