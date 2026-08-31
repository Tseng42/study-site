// 國文科單元資料,依高一上~高三下六個學期分組(category 欄位)。
// 每個單元: { id, title, category, note: { sections: [...] } | null, quiz: [...] }
// note 為 null 或 quiz 為空陣列代表「內容製作中」,頁面會自動顯示對應提示與「製作中」標記。
export default {
  id: 'chinese',
  units: [
    // ---- 高一上 ----
    {
      id: 'ch-u1',
      title: '文言文閱讀技巧',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '先掃過標題、註釋、出處,建立背景知識再讀正文。',
              '遇到不熟的字,先用「詞性推測」與「上下文」判斷意思,不要卡住。',
              '文言文常見句式:判斷句(...者...也)、被動句(為...所...)、倒裝句。',
              '讀懂「誰對誰做了什麼」是理解文言文的核心,先抓主詞受詞再看動詞。',
            ],
          },
          {
            heading: '常見文言虛詞',
            table: {
              headers: ['虛詞', '常見用法', '例句'],
              rows: [
                ['之', '代詞/助詞(的)', '「送杜少府之任蜀州」的「之」作動詞「往」'],
                ['而', '連接詞(而且/但是/於是)', '「學而時習之」表順接'],
                ['以', '介詞(用/因為/來)', '「以資治通」表用來'],
                ['其', '代詞(他的/那)/語氣詞(難道)', '「其真無馬邪」表反問'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'ch-u1-q1',
          question: '「學而時習之,不亦說乎」中的「說」字,意思最接近下列何者?',
          options: ['說話', '喜悅(通「悅」)', '解說', '傳說'],
          answer: 1,
          explanation: '「說」在此為通假字,通「悅」,意思是內心感到喜悅、愉快。',
        },
        {
          id: 'ch-u1-q2',
          question: '下列文言句式中,何者屬於「判斷句」?',
          options: ['「甚矣,汝之不惠」', '「南冥者,天池也」', '「何陋之有」', '「為天下笑」'],
          answer: 1,
          explanation: '「...者...也」是文言文典型的判斷句句式,用來說明「什麼是什麼」。',
        },
      ],
    },
    {
      id: 'ch-u2',
      title: '字音字形辨析',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '學測常考「一字多音多義」,同一個字在不同詞語中讀音不同。',
              '形似字要特別注意部件差異,例如「己/已/巳」、「戊/戌/戍」。',
              '準備方式:整理自己容易混淆的字音字形清單,考前反覆複習。',
            ],
          },
          {
            heading: '易混淆字音範例',
            table: {
              headers: ['字', '讀音一', '讀音二', '例詞'],
              rows: [
                ['參', 'ㄘㄢ(參加)', 'ㄕㄣ(人參)', '參與、人參'],
                ['差', 'ㄔㄚ(差別)', 'ㄔㄞ(出差)', '差異、出差'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'ch-u2-q1',
          question: '「參差不齊」的「參」讀音為何?',
          options: ['ㄘㄢ', 'ㄕㄣ', 'ㄘㄣ', 'ㄙㄢ'],
          answer: 2,
          explanation:
            '「參差」讀作「ㄘㄣ ㄘ」,表示長短不一、不整齊的樣子,與「參加」的「ㄘㄢ」讀音不同。',
        },
      ],
    },
    { id: 'ch-u3', title: '現代散文閱讀與賞析', category: '高一上', note: null, quiz: [] },
    { id: 'ch-u4', title: '應用文寫作(書信/便條/柬帖)', category: '高一上', note: null, quiz: [] },

    // ---- 高一下 ----
    { id: 'ch-u5', title: '詩詞格律與賞析', category: '高一下', note: null, quiz: [] },
    { id: 'ch-u6', title: '小說敘事技巧與賞析', category: '高一下', note: null, quiz: [] },
    { id: 'ch-u7', title: '文法與句子結構分析', category: '高一下', note: null, quiz: [] },
    { id: 'ch-u8', title: '修辭技巧總整理', category: '高一下', note: null, quiz: [] },

    // ---- 高二上 ----
    { id: 'ch-u9', title: '先秦諸子思想與文選', category: '高二上', note: null, quiz: [] },
    { id: 'ch-u10', title: '史傳文學閱讀', category: '高二上', note: null, quiz: [] },
    { id: 'ch-u11', title: '論說文寫作技巧', category: '高二上', note: null, quiz: [] },
    { id: 'ch-u12', title: '國學常識(經史子集概說)', category: '高二上', note: null, quiz: [] },

    // ---- 高二下 ----
    { id: 'ch-u13', title: '唐宋古文賞析', category: '高二下', note: null, quiz: [] },
    { id: 'ch-u14', title: '詞曲格律與賞析', category: '高二下', note: null, quiz: [] },
    { id: 'ch-u15', title: '議論文結構與論證', category: '高二下', note: null, quiz: [] },
    { id: 'ch-u16', title: '文學史發展脈絡(先秦至唐宋)', category: '高二下', note: null, quiz: [] },

    // ---- 高三上 ----
    { id: 'ch-u17', title: '明清小品文與筆記小說', category: '高三上', note: null, quiz: [] },
    { id: 'ch-u18', title: '現代小說與散文選讀', category: '高三上', note: null, quiz: [] },
    { id: 'ch-u19', title: '混合題型閱讀測驗技巧', category: '高三上', note: null, quiz: [] },
    { id: 'ch-u20', title: '文學史發展脈絡(元明清至現代)', category: '高三上', note: null, quiz: [] },

    // ---- 高三下 ----
    { id: 'ch-u21', title: '學測選擇題總複習', category: '高三下', note: null, quiz: [] },
    { id: 'ch-u22', title: '混合題型與寫作策略', category: '高三下', note: null, quiz: [] },
    { id: 'ch-u23', title: '跨領域閱讀理解', category: '高三下', note: null, quiz: [] },
    { id: 'ch-u24', title: '歷屆試題主題整理', category: '高三下', note: null, quiz: [] },
  ],
};
