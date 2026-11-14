// 真實歷屆學測英文考科試題(111~115學年度),逐字轉錄自大考中心官方公布的正式
// 試題、選擇題參考答案與非選擇題參考答案與評分原則(ceec.edu.tw),不是原創改編
// 題——這些題目本身依著作權法第9條第5款「依法令舉行之各類考試試題及其備用
// 試題」不受著作權保護,可以自由重製使用。
//
// 英文考科結構(111~115學年度一致,確認過不是每年都不一樣):
// 第壹部分、選擇題(占62分,共46題,全部單選):一、詞彙題(10分,無題組)
// 二、綜合測驗(10分,克漏字題組) 三、文意選填(10分,一篇題組共用一組選項)
// 四、篇章結構(8分,句子插入題組) 五、閱讀測驗(24分,3個獨立題組)。
// 第貳部分、混合題(占10分):1個題組,裡面有純寫答的填空/簡答子題(type:'written')
// 跟可自動判分的多選子題(type:'multi'),共用同一段題幹。
// 第參部分、非選擇題(占28分):一、中譯英(2句,各4分) 二、英文作文(20分,依
// 圖片提示寫作)。中譯英跟英文作文在官方原始編號裡是重新從「1.」「2.」開始
// 編號的(不接續選擇題的題號),收錄時用接續的合成題號(如47-48後接續51、52、
// 53)並在註解說明;英文作文題目原本會附照片當寫作提示,照片本身無法比照
// 考試試題的著作權排除規定重製使用,收錄時用文字描述照片內容取代,並在
// 註解註明這是文字轉述而非原圖。
// 每題型的每年確切題數/配分可能略有微小差異,不是每年完全固定,依原始題號
// (origNo)保留完整順序,每題的 part 欄位標明屬於上述哪一個大題,前端依此
// 動態產生區塊標題,不依賴固定題號區間。
// 選擇題五年全數收錄,沒有略過任何題目。少數選項原本是照片或地圖的題目
// (如111第35題、112第44題、113第35題、114第36題、115第38題),改以文字描述
// 取代並在題目/詳解中標明是非官方描述,正確答案不受影響;各年度細節見下方註解。
export const englishRealExams = [
  // 111學年度學科能力測驗 英文考科 (transcribed from official CEEC PDFs, ceec.edu.tw)
  // Structure: 第壹部分 選擇題 Q1-46 (詞彙題 1-10, 綜合測驗 11-20, 文意選填 21-30, 篇章結構 31-34, 閱讀測驗 35-46);
  // 第貳部分 混合題 Q47-49 (47,48 written; 49 multi-select, official answer CD);
  // 第參部分 非選擇題 = 中譯英 x2 + 英文作文 (synthetic origNo 50, 51, 52 following the last 混合題 number 49).
  // Sources:
  //   (a) 試題本: https://www.ceec.edu.tw/files/file_pool/1/0m053357638065462325/02-111%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E8%A9%A6%E5%8D%B7.pdf
  //   (b) 選擇題參考答案: https://www.ceec.edu.tw/files/file_pool/1/0M023644450776620070/02-111%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf
  //   (c) 非選擇題評分原則: https://www.ceec.edu.tw/files/file_pool/1/0m052625764308732923/02-111%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E9%9D%9E%E9%81%B8%E6%93%87%E9%A1%8C%E8%A9%95%E5%88%86%E5%8E%9F%E5%89%87.pdf
  // Skipped questions: none (all 46 choice questions + 混合題 Q47-49 + 中譯英 x2 + 作文 included).
  // Image-dependent items converted to text: Q35 (options were 4 line-drawing pictures of people; replaced by non-official
  //   Chinese text descriptions of each picture); 作文 prompt (two photos, replaced by text description); 混合題 stem logo (text note).
  // LOW-CONFIDENCE: Q35 picture descriptions (A)-(D) and 作文 photo A/B descriptions are my own plain-text readings of low-detail
  //   grayscale images; the official answer B (cloth-wrapped man with spear and shield) matches the passage.
  // Other notes: Q25 passage text prints "which (25) some their lives" (verbatim from booklet, no "of"); official non-choice answer file
  //   prints "brough by pets" (typo) in 中譯英 #2 alternative answer; italics in the booklet (e.g. Obon, mukaebi, Out of Africa) are not preserved.
  {
    sourceYear: 111,
    minutes: 100,
    questions: [
      {
        "id": "english-real-111-q1",
        "origNo": 1,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "When Jeffery doesn't feel like cooking, he often orders pizza online and has it ______ to his house.",
        "options": [
          "advanced",
          "delivered",
          "offered",
          "stretched"
        ],
        "answer": 1,
        "explanation": "(111學測英文第1題,答案為「delivered」)"
      },
      {
        "id": "english-real-111-q2",
        "origNo": 2,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "Jane is the best ______ I have ever had. I cannot imagine running my office without her help.",
        "options": [
          "assistant",
          "influence",
          "contribution",
          "politician"
        ],
        "answer": 0,
        "explanation": "(111學測英文第2題,答案為「assistant」)"
      },
      {
        "id": "english-real-111-q3",
        "origNo": 3,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "The temple celebrated Mazu Festival by hosting ten days of lion dances, Taiwanese operas, and traditional hand ______ shows.",
        "options": [
          "chat",
          "quiz",
          "puppet",
          "variety"
        ],
        "answer": 2,
        "explanation": "(111學測英文第3題,答案為「puppet」)"
      },
      {
        "id": "english-real-111-q4",
        "origNo": 4,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "The new vaccine was banned by the Food and Drug Administration due to its ______ fatal side effects.",
        "options": [
          "potentially",
          "delicately",
          "ambiguously",
          "optionally"
        ],
        "answer": 0,
        "explanation": "(111學測英文第4題,答案為「potentially」)"
      },
      {
        "id": "english-real-111-q5",
        "origNo": 5,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "______ the photos with dates and keywords help you sort them easily in your file.",
        "options": [
          "Tagging",
          "Flocking",
          "Rolling",
          "Snapping"
        ],
        "answer": 0,
        "explanation": "(111學測英文第5題,答案為「Tagging」)"
      },
      {
        "id": "english-real-111-q6",
        "origNo": 6,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "An ______ person is usually pleasant and easy to get along with, but don't expect that he or she will always say “yes” to everything.",
        "options": [
          "enormous",
          "intimate",
          "agreeable",
          "ultimate"
        ],
        "answer": 2,
        "explanation": "(111學測英文第6題,答案為「agreeable」)"
      },
      {
        "id": "english-real-111-q7",
        "origNo": 7,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "Hidden deep in a small alley among various tiny shops, the entrance of the Michelin star restaurant is barely ______ to passersby.",
        "options": [
          "identical",
          "visible",
          "available",
          "remarkable"
        ],
        "answer": 1,
        "explanation": "(111學測英文第7題,答案為「visible」)"
      },
      {
        "id": "english-real-111-q8",
        "origNo": 8,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "The original budget for my round-island trip was NT$5,000, but the ______ cost is likely to be 50 percent higher.",
        "options": [
          "moderate",
          "absolute",
          "promising",
          "eventual"
        ],
        "answer": 3,
        "explanation": "(111學測英文第8題,答案為「eventual」)"
      },
      {
        "id": "english-real-111-q9",
        "origNo": 9,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "After watching a TV program on natural history, Adam decided to go on a ______ for dinosaur fossils in South Dakota.",
        "options": [
          "trial",
          "route",
          "strike",
          "quest"
        ],
        "answer": 3,
        "explanation": "(111學測英文第9題,答案為「quest」)"
      },
      {
        "id": "english-real-111-q10",
        "origNo": 10,
        "sourceYear": 111,
        "part": "詞彙題",
        "question": "With pink cherry blossoms blooming everywhere, the valley ______ like a young bride under the bright spring sunshine.",
        "options": [
          "bounces",
          "blushes",
          "polishes",
          "transfers"
        ],
        "answer": 1,
        "explanation": "(111學測英文第10題,答案為「blushes」)"
      },
      {
        "id": "english-real-111-q11",
        "origNo": 11,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "A book town is a rural town in which second-hand and antiquarian bookshops are concentrated. The concept was (11) by Richard Booth, who opened the first second-hand bookshop in Hay-on-Wye, UK in 1961. Following him, many local people opened their own bookshops, and the small town soon became a model of sustainable rural development and tourism. Since the 1970s, book towns like Hay-on-Wye (12) up all over the world.\nAlthough all book towns have a great number of bookshops, that's where the similarities (13). Each of these towns shows unique features of its own. Some have many small private shops, while others have organizations steered by volunteers. Some even run regular activities to attract visitors. For example, an annual book festival is held in Hay-on-Wye. Clunes, in Australia, holds a monthly book talk that hosts authors to discuss their latest (14).\nAs digital reading is changing our traditional way of reading, book towns like Hay-on-Wye are particularly important to (15). The feel of a book, the smell, the weight, and the knowledge that a particular book might be more than a hundred years old—all these highlight the importance of preserving the physical book as a complement to technology.",
        "question": "空格 (11) 應填入下列哪一個選項?",
        "options": [
          "initiated",
          "represented",
          "acknowledged",
          "manipulated"
        ],
        "answer": 0,
        "explanation": "(111學測英文第11題,答案為「initiated」)"
      },
      {
        "id": "english-real-111-q12",
        "origNo": 12,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "A book town is a rural town in which second-hand and antiquarian bookshops are concentrated. The concept was (11) by Richard Booth, who opened the first second-hand bookshop in Hay-on-Wye, UK in 1961. Following him, many local people opened their own bookshops, and the small town soon became a model of sustainable rural development and tourism. Since the 1970s, book towns like Hay-on-Wye (12) up all over the world.\nAlthough all book towns have a great number of bookshops, that's where the similarities (13). Each of these towns shows unique features of its own. Some have many small private shops, while others have organizations steered by volunteers. Some even run regular activities to attract visitors. For example, an annual book festival is held in Hay-on-Wye. Clunes, in Australia, holds a monthly book talk that hosts authors to discuss their latest (14).\nAs digital reading is changing our traditional way of reading, book towns like Hay-on-Wye are particularly important to (15). The feel of a book, the smell, the weight, and the knowledge that a particular book might be more than a hundred years old—all these highlight the importance of preserving the physical book as a complement to technology.",
        "question": "空格 (12) 應填入下列哪一個選項?",
        "options": [
          "spring",
          "sprang",
          "had sprung",
          "have been springing"
        ],
        "answer": 3,
        "explanation": "(111學測英文第12題,答案為「have been springing」)"
      },
      {
        "id": "english-real-111-q13",
        "origNo": 13,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "A book town is a rural town in which second-hand and antiquarian bookshops are concentrated. The concept was (11) by Richard Booth, who opened the first second-hand bookshop in Hay-on-Wye, UK in 1961. Following him, many local people opened their own bookshops, and the small town soon became a model of sustainable rural development and tourism. Since the 1970s, book towns like Hay-on-Wye (12) up all over the world.\nAlthough all book towns have a great number of bookshops, that's where the similarities (13). Each of these towns shows unique features of its own. Some have many small private shops, while others have organizations steered by volunteers. Some even run regular activities to attract visitors. For example, an annual book festival is held in Hay-on-Wye. Clunes, in Australia, holds a monthly book talk that hosts authors to discuss their latest (14).\nAs digital reading is changing our traditional way of reading, book towns like Hay-on-Wye are particularly important to (15). The feel of a book, the smell, the weight, and the knowledge that a particular book might be more than a hundred years old—all these highlight the importance of preserving the physical book as a complement to technology.",
        "question": "空格 (13) 應填入下列哪一個選項?",
        "options": [
          "form",
          "count",
          "end",
          "matter"
        ],
        "answer": 2,
        "explanation": "(111學測英文第13題,答案為「end」)"
      },
      {
        "id": "english-real-111-q14",
        "origNo": 14,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "A book town is a rural town in which second-hand and antiquarian bookshops are concentrated. The concept was (11) by Richard Booth, who opened the first second-hand bookshop in Hay-on-Wye, UK in 1961. Following him, many local people opened their own bookshops, and the small town soon became a model of sustainable rural development and tourism. Since the 1970s, book towns like Hay-on-Wye (12) up all over the world.\nAlthough all book towns have a great number of bookshops, that's where the similarities (13). Each of these towns shows unique features of its own. Some have many small private shops, while others have organizations steered by volunteers. Some even run regular activities to attract visitors. For example, an annual book festival is held in Hay-on-Wye. Clunes, in Australia, holds a monthly book talk that hosts authors to discuss their latest (14).\nAs digital reading is changing our traditional way of reading, book towns like Hay-on-Wye are particularly important to (15). The feel of a book, the smell, the weight, and the knowledge that a particular book might be more than a hundred years old—all these highlight the importance of preserving the physical book as a complement to technology.",
        "question": "空格 (14) 應填入下列哪一個選項?",
        "options": [
          "trends",
          "releases",
          "agendas",
          "announcements"
        ],
        "answer": 1,
        "explanation": "(111學測英文第14題,答案為「releases」)"
      },
      {
        "id": "english-real-111-q15",
        "origNo": 15,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "A book town is a rural town in which second-hand and antiquarian bookshops are concentrated. The concept was (11) by Richard Booth, who opened the first second-hand bookshop in Hay-on-Wye, UK in 1961. Following him, many local people opened their own bookshops, and the small town soon became a model of sustainable rural development and tourism. Since the 1970s, book towns like Hay-on-Wye (12) up all over the world.\nAlthough all book towns have a great number of bookshops, that's where the similarities (13). Each of these towns shows unique features of its own. Some have many small private shops, while others have organizations steered by volunteers. Some even run regular activities to attract visitors. For example, an annual book festival is held in Hay-on-Wye. Clunes, in Australia, holds a monthly book talk that hosts authors to discuss their latest (14).\nAs digital reading is changing our traditional way of reading, book towns like Hay-on-Wye are particularly important to (15). The feel of a book, the smell, the weight, and the knowledge that a particular book might be more than a hundred years old—all these highlight the importance of preserving the physical book as a complement to technology.",
        "question": "空格 (15) 應填入下列哪一個選項?",
        "options": [
          "get their worldwide fame",
          "conform to the new mode",
          "make their visitors satisfied",
          "keep the printed word alive"
        ],
        "answer": 3,
        "explanation": "(111學測英文第15題,答案為「keep the printed word alive」)"
      },
      {
        "id": "english-real-111-q16",
        "origNo": 16,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Airline passengers may have noticed that all plane windows have rounded edges, instead of the hard corners commonly found in our house. The round windows are indeed pleasant to the eye, but they actually were designed for reasons (16) aesthetics.\nIn the early days of aviation, plane windows (17) square in shape. Then as commercial air travel became popular in the 1950s and airplanes began flying higher and faster, three planes mysteriously broke apart in midair. The cause? Square windows. Scientists found that sharp corners are natural weak spots where stress concentrates. The problem is (18) when airplanes fly at higher altitudes, where the difference between the inside and outside pressure increases, causing added stress. When subjected to repeated pressurization high in the sky, the four corners on a square window may (19).\nCurved windows, on the other hand, distribute stress around more evenly, reducing the likelihood of cracks or breaks. Circular shapes are also stronger and resist deformation, and therefore can (20) extreme differences in pressure inside and outside of an aircraft.\nThus, round windows are a major safety innovation that keeps planes from disintegrating mid-flight. They are also used on ships and spacecraft for their greater structural integrity.",
        "question": "空格 (16) 應填入下列哪一個選項?",
        "options": [
          "contrary to",
          "except for",
          "more of",
          "other than"
        ],
        "answer": 3,
        "explanation": "(111學測英文第16題,答案為「other than」)"
      },
      {
        "id": "english-real-111-q17",
        "origNo": 17,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Airline passengers may have noticed that all plane windows have rounded edges, instead of the hard corners commonly found in our house. The round windows are indeed pleasant to the eye, but they actually were designed for reasons (16) aesthetics.\nIn the early days of aviation, plane windows (17) square in shape. Then as commercial air travel became popular in the 1950s and airplanes began flying higher and faster, three planes mysteriously broke apart in midair. The cause? Square windows. Scientists found that sharp corners are natural weak spots where stress concentrates. The problem is (18) when airplanes fly at higher altitudes, where the difference between the inside and outside pressure increases, causing added stress. When subjected to repeated pressurization high in the sky, the four corners on a square window may (19).\nCurved windows, on the other hand, distribute stress around more evenly, reducing the likelihood of cracks or breaks. Circular shapes are also stronger and resist deformation, and therefore can (20) extreme differences in pressure inside and outside of an aircraft.\nThus, round windows are a major safety innovation that keeps planes from disintegrating mid-flight. They are also used on ships and spacecraft for their greater structural integrity.",
        "question": "空格 (17) 應填入下列哪一個選項?",
        "options": [
          "used to be",
          "were to be",
          "would have been",
          "must have been"
        ],
        "answer": 0,
        "explanation": "(111學測英文第17題,答案為「used to be」)"
      },
      {
        "id": "english-real-111-q18",
        "origNo": 18,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Airline passengers may have noticed that all plane windows have rounded edges, instead of the hard corners commonly found in our house. The round windows are indeed pleasant to the eye, but they actually were designed for reasons (16) aesthetics.\nIn the early days of aviation, plane windows (17) square in shape. Then as commercial air travel became popular in the 1950s and airplanes began flying higher and faster, three planes mysteriously broke apart in midair. The cause? Square windows. Scientists found that sharp corners are natural weak spots where stress concentrates. The problem is (18) when airplanes fly at higher altitudes, where the difference between the inside and outside pressure increases, causing added stress. When subjected to repeated pressurization high in the sky, the four corners on a square window may (19).\nCurved windows, on the other hand, distribute stress around more evenly, reducing the likelihood of cracks or breaks. Circular shapes are also stronger and resist deformation, and therefore can (20) extreme differences in pressure inside and outside of an aircraft.\nThus, round windows are a major safety innovation that keeps planes from disintegrating mid-flight. They are also used on ships and spacecraft for their greater structural integrity.",
        "question": "空格 (18) 應填入下列哪一個選項?",
        "options": [
          "disguised",
          "understood",
          "confronted",
          "intensified"
        ],
        "answer": 3,
        "explanation": "(111學測英文第18題,答案為「intensified」)"
      },
      {
        "id": "english-real-111-q19",
        "origNo": 19,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Airline passengers may have noticed that all plane windows have rounded edges, instead of the hard corners commonly found in our house. The round windows are indeed pleasant to the eye, but they actually were designed for reasons (16) aesthetics.\nIn the early days of aviation, plane windows (17) square in shape. Then as commercial air travel became popular in the 1950s and airplanes began flying higher and faster, three planes mysteriously broke apart in midair. The cause? Square windows. Scientists found that sharp corners are natural weak spots where stress concentrates. The problem is (18) when airplanes fly at higher altitudes, where the difference between the inside and outside pressure increases, causing added stress. When subjected to repeated pressurization high in the sky, the four corners on a square window may (19).\nCurved windows, on the other hand, distribute stress around more evenly, reducing the likelihood of cracks or breaks. Circular shapes are also stronger and resist deformation, and therefore can (20) extreme differences in pressure inside and outside of an aircraft.\nThus, round windows are a major safety innovation that keeps planes from disintegrating mid-flight. They are also used on ships and spacecraft for their greater structural integrity.",
        "question": "空格 (19) 應填入下列哪一個選項?",
        "options": [
          "cause conflict",
          "rebuild strength",
          "spell disaster",
          "endure shock"
        ],
        "answer": 2,
        "explanation": "(111學測英文第19題,答案為「spell disaster」)"
      },
      {
        "id": "english-real-111-q20",
        "origNo": 20,
        "sourceYear": 111,
        "part": "綜合測驗",
        "passageId": "english-real-111-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Airline passengers may have noticed that all plane windows have rounded edges, instead of the hard corners commonly found in our house. The round windows are indeed pleasant to the eye, but they actually were designed for reasons (16) aesthetics.\nIn the early days of aviation, plane windows (17) square in shape. Then as commercial air travel became popular in the 1950s and airplanes began flying higher and faster, three planes mysteriously broke apart in midair. The cause? Square windows. Scientists found that sharp corners are natural weak spots where stress concentrates. The problem is (18) when airplanes fly at higher altitudes, where the difference between the inside and outside pressure increases, causing added stress. When subjected to repeated pressurization high in the sky, the four corners on a square window may (19).\nCurved windows, on the other hand, distribute stress around more evenly, reducing the likelihood of cracks or breaks. Circular shapes are also stronger and resist deformation, and therefore can (20) extreme differences in pressure inside and outside of an aircraft.\nThus, round windows are a major safety innovation that keeps planes from disintegrating mid-flight. They are also used on ships and spacecraft for their greater structural integrity.",
        "question": "空格 (20) 應填入下列哪一個選項?",
        "options": [
          "tolerate",
          "improve",
          "justify",
          "obtain"
        ],
        "answer": 0,
        "explanation": "(111學測英文第20題,答案為「tolerate」)"
      },
      {
        "id": "english-real-111-q21",
        "origNo": 21,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (21) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 2,
        "explanation": "(111學測英文第21題,答案為「risky」)"
      },
      {
        "id": "english-real-111-q22",
        "origNo": 22,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (22) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 8,
        "explanation": "(111學測英文第22題,答案為「necessity」)"
      },
      {
        "id": "english-real-111-q23",
        "origNo": 23,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (23) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 5,
        "explanation": "(111學測英文第23題,答案為「professional」)"
      },
      {
        "id": "english-real-111-q24",
        "origNo": 24,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (24) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 7,
        "explanation": "(111學測英文第24題,答案為「tried out」)"
      },
      {
        "id": "english-real-111-q25",
        "origNo": 25,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (25) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 3,
        "explanation": "(111學測英文第25題,答案為「cost」)"
      },
      {
        "id": "english-real-111-q26",
        "origNo": 26,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (26) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 6,
        "explanation": "(111學測英文第26題,答案為「called for」)"
      },
      {
        "id": "english-real-111-q27",
        "origNo": 27,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (27) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 9,
        "explanation": "(111學測英文第27題,答案為「career」)"
      },
      {
        "id": "english-real-111-q28",
        "origNo": 28,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (28) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 4,
        "explanation": "(111學測英文第28題,答案為「witnessed」)"
      },
      {
        "id": "english-real-111-q29",
        "origNo": 29,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (29) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 0,
        "explanation": "(111學測英文第29題,答案為「possible」)"
      },
      {
        "id": "english-real-111-q30",
        "origNo": 30,
        "sourceYear": 111,
        "part": "文意選填",
        "passageId": "english-real-111-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "A stunt person is a man or a woman who performs dangerous acts, usually in the television or movie industry. In this line of work, the person is paid to do daring actions that are deemed too (21) for the regular actor to perform, including jumping from heights, crashing cars, or fighting with weapons.\nStunt work emerged out of (22) over time. In the early days of the film industry, actors themselves shot acrobatic acts and dangerous scenes, until they began to get injured. There were, however, no (23) crew members to perform impressive stunts at that time. If something dangerous needed to be done for a scene, the producers would hire anyone crazy or desperate enough to do it. These people were not trained to perform stunts, so they often (24) things for the first time during the actual shooting. They had to learn from their own mistakes, which (25) some their lives, and almost all suffered light or severe injuries.\nBeginning around 1910, audiences developed a taste for serial action movies, which (26) the use of dedicated stunt people to perform in dangerous scenes. Such demand increased with the rise of western movies, and many cowboys with masterful skills on horseback found a new (27) as a stunt person. Tom Mix and Yakima Canutt were among the most famous. The 1960s and '70s (28) the development of most modern stunt technology, like air rams and bullet squibs. That technology has continued to evolve into the present.\nToday, CGI (computer generated imagery) is widely used in filmmaking, and it is now (29) to create very lifelike scenes without using real stunt people. However, CGI has difficulties of its own, and there will always be a demand for the realism and thrilling (30) of an actual stunt. So the stunt industry is probably in no immediate danger of dying off.\n(A) possible  (B) sensation  (C) risky  (D) cost  (E) witnessed  (F) professional  (G) called for  (H) tried out  (I) necessity  (J) career",
        "question": "空格 (30) 應填入下列哪一個選項?",
        "options": [
          "possible",
          "sensation",
          "risky",
          "cost",
          "witnessed",
          "professional",
          "called for",
          "tried out",
          "necessity",
          "career"
        ],
        "answer": 1,
        "explanation": "(111學測英文第30題,答案為「sensation」)"
      },
      {
        "id": "english-real-111-q31",
        "origNo": 31,
        "sourceYear": 111,
        "part": "篇章結構",
        "passageId": "english-real-111-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Obon, or the Bon Festival, is a Japanese holiday that honors the spirits of the dead. (31) The festival usually lasts for four to five days in August. During this period, many people travel back to their hometowns and spend time with loved ones, both past and present.\nThough not a national holiday, Obon is surely one of the most traditional events of the year. Celebration often begins with mukaebi (welcoming fire), during which people make a small bonfire in front of their house to guide spirits upon their return back home. (32) Food offerings are presented at house altars and temples. Some regions prepare horses made of cucumbers and cows made of eggplants, hoping that the spirits will come back to Earth quickly, on a horse, and leave slowly, riding the cow.\n(33) Paper lanterns and offerings are sent floating down rivers to accompany the ancestors back to their resting place. Many areas will also organize bon-odori dances. The style of the dances varies from region to region but is normally based on the rhythms of taiko drums. Performers usually play on a tall stage with lanterns and banners strung all around. Participants, often dressed in light cotton kimonos, are encouraged to dance to the music around the stage. (34) Originally dedicated to the deceased, the dances have now become a symbol of the summer festival themselves.",
        "question": "空格 (31) 應填入下列哪一個選項?",
        "options": [
          "Some people also visit the cemetery to clean up the family graves and pray for their ancestors.",
          "Such festive activities are usually held in parks, temples, and other public places around Japan.",
          "Obon concludes with another bonfire, okuribi, lighting up the sky to see the ancestors’ spirits off.",
          "Originating from the Chinese Ghost Festival, this annual event has evolved into a time of family reunion."
        ],
        "answer": 3,
        "explanation": "(111學測英文第31題,答案為「Originating from the Chinese Ghost Festival, this annual event has evolved into a time of family reunion.」)"
      },
      {
        "id": "english-real-111-q32",
        "origNo": 32,
        "sourceYear": 111,
        "part": "篇章結構",
        "passageId": "english-real-111-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Obon, or the Bon Festival, is a Japanese holiday that honors the spirits of the dead. (31) The festival usually lasts for four to five days in August. During this period, many people travel back to their hometowns and spend time with loved ones, both past and present.\nThough not a national holiday, Obon is surely one of the most traditional events of the year. Celebration often begins with mukaebi (welcoming fire), during which people make a small bonfire in front of their house to guide spirits upon their return back home. (32) Food offerings are presented at house altars and temples. Some regions prepare horses made of cucumbers and cows made of eggplants, hoping that the spirits will come back to Earth quickly, on a horse, and leave slowly, riding the cow.\n(33) Paper lanterns and offerings are sent floating down rivers to accompany the ancestors back to their resting place. Many areas will also organize bon-odori dances. The style of the dances varies from region to region but is normally based on the rhythms of taiko drums. Performers usually play on a tall stage with lanterns and banners strung all around. Participants, often dressed in light cotton kimonos, are encouraged to dance to the music around the stage. (34) Originally dedicated to the deceased, the dances have now become a symbol of the summer festival themselves.",
        "question": "空格 (32) 應填入下列哪一個選項?",
        "options": [
          "Some people also visit the cemetery to clean up the family graves and pray for their ancestors.",
          "Such festive activities are usually held in parks, temples, and other public places around Japan.",
          "Obon concludes with another bonfire, okuribi, lighting up the sky to see the ancestors’ spirits off.",
          "Originating from the Chinese Ghost Festival, this annual event has evolved into a time of family reunion."
        ],
        "answer": 0,
        "explanation": "(111學測英文第32題,答案為「Some people also visit the cemetery to clean up the family graves and pray for their ancestors.」)"
      },
      {
        "id": "english-real-111-q33",
        "origNo": 33,
        "sourceYear": 111,
        "part": "篇章結構",
        "passageId": "english-real-111-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Obon, or the Bon Festival, is a Japanese holiday that honors the spirits of the dead. (31) The festival usually lasts for four to five days in August. During this period, many people travel back to their hometowns and spend time with loved ones, both past and present.\nThough not a national holiday, Obon is surely one of the most traditional events of the year. Celebration often begins with mukaebi (welcoming fire), during which people make a small bonfire in front of their house to guide spirits upon their return back home. (32) Food offerings are presented at house altars and temples. Some regions prepare horses made of cucumbers and cows made of eggplants, hoping that the spirits will come back to Earth quickly, on a horse, and leave slowly, riding the cow.\n(33) Paper lanterns and offerings are sent floating down rivers to accompany the ancestors back to their resting place. Many areas will also organize bon-odori dances. The style of the dances varies from region to region but is normally based on the rhythms of taiko drums. Performers usually play on a tall stage with lanterns and banners strung all around. Participants, often dressed in light cotton kimonos, are encouraged to dance to the music around the stage. (34) Originally dedicated to the deceased, the dances have now become a symbol of the summer festival themselves.",
        "question": "空格 (33) 應填入下列哪一個選項?",
        "options": [
          "Some people also visit the cemetery to clean up the family graves and pray for their ancestors.",
          "Such festive activities are usually held in parks, temples, and other public places around Japan.",
          "Obon concludes with another bonfire, okuribi, lighting up the sky to see the ancestors’ spirits off.",
          "Originating from the Chinese Ghost Festival, this annual event has evolved into a time of family reunion."
        ],
        "answer": 2,
        "explanation": "(111學測英文第33題,答案為「Obon concludes with another bonfire, okuribi, lighting up the sky to see the ancestors’ spirits off.」)"
      },
      {
        "id": "english-real-111-q34",
        "origNo": 34,
        "sourceYear": 111,
        "part": "篇章結構",
        "passageId": "english-real-111-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Obon, or the Bon Festival, is a Japanese holiday that honors the spirits of the dead. (31) The festival usually lasts for four to five days in August. During this period, many people travel back to their hometowns and spend time with loved ones, both past and present.\nThough not a national holiday, Obon is surely one of the most traditional events of the year. Celebration often begins with mukaebi (welcoming fire), during which people make a small bonfire in front of their house to guide spirits upon their return back home. (32) Food offerings are presented at house altars and temples. Some regions prepare horses made of cucumbers and cows made of eggplants, hoping that the spirits will come back to Earth quickly, on a horse, and leave slowly, riding the cow.\n(33) Paper lanterns and offerings are sent floating down rivers to accompany the ancestors back to their resting place. Many areas will also organize bon-odori dances. The style of the dances varies from region to region but is normally based on the rhythms of taiko drums. Performers usually play on a tall stage with lanterns and banners strung all around. Participants, often dressed in light cotton kimonos, are encouraged to dance to the music around the stage. (34) Originally dedicated to the deceased, the dances have now become a symbol of the summer festival themselves.",
        "question": "空格 (34) 應填入下列哪一個選項?",
        "options": [
          "Some people also visit the cemetery to clean up the family graves and pray for their ancestors.",
          "Such festive activities are usually held in parks, temples, and other public places around Japan.",
          "Obon concludes with another bonfire, okuribi, lighting up the sky to see the ancestors’ spirits off.",
          "Originating from the Chinese Ghost Festival, this annual event has evolved into a time of family reunion."
        ],
        "answer": 1,
        "explanation": "(111學測英文第34題,答案為「Such festive activities are usually held in parks, temples, and other public places around Japan.」)"
      },
      {
        "id": "english-real-111-q35",
        "origNo": 35,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "Standing proud in the savannah with their red blankets and painted shields, the Maasai people are one of the widely known symbols of East Africa. Their unique style, as remarked by Karen Blixen, author of Out of Africa, “has grown from the inside, and is an expression of the race and its history.”\nThe Maasai are a semi-nomadic group in Kenya and northern Tanzania, wandering in bands and living almost entirely on the meat, blood, and milk of their herds. Over the years, the fearless tribesmen have stood strong against slavery, and resisted the urging of the Kenyan and Tanzanian governments to adopt a more modern lifestyle. In fact, they are one of the few tribes that have retained most of their traditions. Up until recently, the only way for a Maasai boy to achieve warrior status was to single-handedly kill a lion with his spear.\nMaasai clothing varies with age, gender, and place. The most recognizable piece of clothing is the shúkà, a sheet of fabric worn wrapped around the body. Red is a popular color, and women generally opt for checked, striped, or patterned pieces of cloth. Young men wear black for several months after their circumcision, a ritual signifying their coming of age. A Maasai warrior is rarely seen without his spear and shield. In Blixen's words, “their weapons and finery are as much a part of their being as are a stag's antlers” (a male deer's horns).\nBeadwork is an important part of Maasai culture. Beaded jewelry is made by women, and is famous for its complexity. Natural materials such as clay, shells, and ivory were used before trading with the Europeans in the 19th century. They were then replaced by colorful glass beads, allowing for more detailed beadwork and color patterns. Multicolored beadwork is popular among both men and women. Each color holds a special meaning: White stands for peace, green for land and production, while red—the most favored color among the Maasai—is the symbol of unity and bravery.",
        "question": "Which of the following pictures best represents the image of a typical Maasai warrior?\n[圖片示意:原題四個選項各為一張黑白線稿人物圖,此處改以文字描述各圖內容(非官方文字)]",
        "options": [
          "[圖(A)] 一名幾乎全裸、只圍腰布的男子,單膝跪地、一腳向前伸直,正在拉弓射箭",
          "[圖(B)] 一名披著寬布(布料包裹身體)、頭部與耳部有裝飾的男子,直立,一手握著一支長矛,另一側持一面大型彩繪盾牌",
          "[圖(C)] 一名赤裸上身、腰間圍著圖案(獸皮紋)裙、戴頸飾的男子,直立,持一面窄長的橢圓形大盾牌,另一手垂著流蘇狀物品",
          "[圖(D)] 一名赤裸上身、頭戴羽毛頭飾、頸戴項圈、腰圍流蘇短裙的男子,直立,一手握著一支長矛"
        ],
        "answer": 1,
        "explanation": "(111學測英文第35題)本題原為圖片選項,已改以文字描述;答題依據為文章提到的紅色披布(shúkà,包裹身體的布)、長矛與盾牌。"
      },
      {
        "id": "english-real-111-q36",
        "origNo": 36,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "Standing proud in the savannah with their red blankets and painted shields, the Maasai people are one of the widely known symbols of East Africa. Their unique style, as remarked by Karen Blixen, author of Out of Africa, “has grown from the inside, and is an expression of the race and its history.”\nThe Maasai are a semi-nomadic group in Kenya and northern Tanzania, wandering in bands and living almost entirely on the meat, blood, and milk of their herds. Over the years, the fearless tribesmen have stood strong against slavery, and resisted the urging of the Kenyan and Tanzanian governments to adopt a more modern lifestyle. In fact, they are one of the few tribes that have retained most of their traditions. Up until recently, the only way for a Maasai boy to achieve warrior status was to single-handedly kill a lion with his spear.\nMaasai clothing varies with age, gender, and place. The most recognizable piece of clothing is the shúkà, a sheet of fabric worn wrapped around the body. Red is a popular color, and women generally opt for checked, striped, or patterned pieces of cloth. Young men wear black for several months after their circumcision, a ritual signifying their coming of age. A Maasai warrior is rarely seen without his spear and shield. In Blixen's words, “their weapons and finery are as much a part of their being as are a stag's antlers” (a male deer's horns).\nBeadwork is an important part of Maasai culture. Beaded jewelry is made by women, and is famous for its complexity. Natural materials such as clay, shells, and ivory were used before trading with the Europeans in the 19th century. They were then replaced by colorful glass beads, allowing for more detailed beadwork and color patterns. Multicolored beadwork is popular among both men and women. Each color holds a special meaning: White stands for peace, green for land and production, while red—the most favored color among the Maasai—is the symbol of unity and bravery.",
        "question": "What can we learn from the passage about the Maasai people?",
        "options": [
          "They have been urged by governments to leave behind their traditions.",
          "They resist foreign influence because they were enslaved in the past.",
          "A boy has to kill a lion by himself before becoming an adult.",
          "A Maasai woman is usually good at beadwork and farming."
        ],
        "answer": 0,
        "explanation": "(111學測英文第36題,答案為「They have been urged by governments to leave behind their traditions.」)"
      },
      {
        "id": "english-real-111-q37",
        "origNo": 37,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "Standing proud in the savannah with their red blankets and painted shields, the Maasai people are one of the widely known symbols of East Africa. Their unique style, as remarked by Karen Blixen, author of Out of Africa, “has grown from the inside, and is an expression of the race and its history.”\nThe Maasai are a semi-nomadic group in Kenya and northern Tanzania, wandering in bands and living almost entirely on the meat, blood, and milk of their herds. Over the years, the fearless tribesmen have stood strong against slavery, and resisted the urging of the Kenyan and Tanzanian governments to adopt a more modern lifestyle. In fact, they are one of the few tribes that have retained most of their traditions. Up until recently, the only way for a Maasai boy to achieve warrior status was to single-handedly kill a lion with his spear.\nMaasai clothing varies with age, gender, and place. The most recognizable piece of clothing is the shúkà, a sheet of fabric worn wrapped around the body. Red is a popular color, and women generally opt for checked, striped, or patterned pieces of cloth. Young men wear black for several months after their circumcision, a ritual signifying their coming of age. A Maasai warrior is rarely seen without his spear and shield. In Blixen's words, “their weapons and finery are as much a part of their being as are a stag's antlers” (a male deer's horns).\nBeadwork is an important part of Maasai culture. Beaded jewelry is made by women, and is famous for its complexity. Natural materials such as clay, shells, and ivory were used before trading with the Europeans in the 19th century. They were then replaced by colorful glass beads, allowing for more detailed beadwork and color patterns. Multicolored beadwork is popular among both men and women. Each color holds a special meaning: White stands for peace, green for land and production, while red—the most favored color among the Maasai—is the symbol of unity and bravery.",
        "question": "Which of the following is true about Maasai clothing and beadwork?",
        "options": [
          "Striped and patterned cloth is preferred by young adults.",
          "Young men cannot wear black until they become warriors.",
          "Colorful glass jewelry became popular after the 19th century.",
          "The color of the shúkà represented one's importance in the tribe."
        ],
        "answer": 2,
        "explanation": "(111學測英文第37題,答案為「Colorful glass jewelry became popular after the 19th century.」)"
      },
      {
        "id": "english-real-111-q38",
        "origNo": 38,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "Standing proud in the savannah with their red blankets and painted shields, the Maasai people are one of the widely known symbols of East Africa. Their unique style, as remarked by Karen Blixen, author of Out of Africa, “has grown from the inside, and is an expression of the race and its history.”\nThe Maasai are a semi-nomadic group in Kenya and northern Tanzania, wandering in bands and living almost entirely on the meat, blood, and milk of their herds. Over the years, the fearless tribesmen have stood strong against slavery, and resisted the urging of the Kenyan and Tanzanian governments to adopt a more modern lifestyle. In fact, they are one of the few tribes that have retained most of their traditions. Up until recently, the only way for a Maasai boy to achieve warrior status was to single-handedly kill a lion with his spear.\nMaasai clothing varies with age, gender, and place. The most recognizable piece of clothing is the shúkà, a sheet of fabric worn wrapped around the body. Red is a popular color, and women generally opt for checked, striped, or patterned pieces of cloth. Young men wear black for several months after their circumcision, a ritual signifying their coming of age. A Maasai warrior is rarely seen without his spear and shield. In Blixen's words, “their weapons and finery are as much a part of their being as are a stag's antlers” (a male deer's horns).\nBeadwork is an important part of Maasai culture. Beaded jewelry is made by women, and is famous for its complexity. Natural materials such as clay, shells, and ivory were used before trading with the Europeans in the 19th century. They were then replaced by colorful glass beads, allowing for more detailed beadwork and color patterns. Multicolored beadwork is popular among both men and women. Each color holds a special meaning: White stands for peace, green for land and production, while red—the most favored color among the Maasai—is the symbol of unity and bravery.",
        "question": "Why does the author quote Blixen's comment at the end of the third paragraph?",
        "options": [
          "To explain how Maasai warriors hunt for deer in the wild.",
          "To exemplify the types of weapons used by Maasai warriors.",
          "To emphasize that weapons are an inseparable part of a Maasai warrior's outfit.",
          "To show the similarities between the behavior of a Maasai warrior and that of a male deer."
        ],
        "answer": 2,
        "explanation": "(111學測英文第38題,答案為「To emphasize that weapons are an inseparable part of a Maasai warrior's outfit.」)"
      },
      {
        "id": "english-real-111-q39",
        "origNo": 39,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "A hard hat is a helmet used mostly at worksites to protect the head from injuries due to falling objects. Since its introduction in the early 20th century, the headgear has saved countless lives and is considered the number one safety tool for construction workers.\nThe hard hat was invented in 1919 by Edward W. Bullard, who had just returned from World War I. Before the war, workers used to smear their hats with coal tar for protection of their head. Bullard, having witnessed the life-saving power of the metal helmet in the War, decided to produce a head protection device that was affordable for every worker and lightweight enough to be worn all day long. The Hard Boiled Hat was thus born, using steamed canvas and leather, covered with black paint, and featuring a suspension system to reduce impact. Soon, hard hats became widely used. The headgear was later made mandatory at construction sites in major construction projects, such as the Hoover Dam in 1931 and the Golden Gate Bridge in 1933.\nOver the past century, hard hats have advanced considerably, evolving from canvas and leather to aluminum, fiberglass, and, eventually, to thermoplastic. Recently, new models have been introduced and accessories added to meet the needs of laborers working on various job sites. For instance, a ventilated hard hat was developed to keep wearers cooler, and see-through face shields were attached to better see the hazards lurking above. Today, attachments include radios, sensors, cameras, and a lot more. A common color code has also been developed for recognizing people and their roles on site. Yellow is used for general laborers and contractors, white (or sometimes black) for supervisors and managers, and green for inspectors and new workers.\nNew products continue to expand the market. Global sales of hard hats totaled USD 2.1 billion in 2016, and are expected to reach USD 3.19 billion in 2025.",
        "question": "Which of the following aspects about hard hats is NOT discussed in the passage?",
        "options": [
          "Their functions.",
          "Their appearances.",
          "Their materials.",
          "Their limitations."
        ],
        "answer": 3,
        "explanation": "(111學測英文第39題,答案為「Their limitations.」)"
      },
      {
        "id": "english-real-111-q40",
        "origNo": 40,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "A hard hat is a helmet used mostly at worksites to protect the head from injuries due to falling objects. Since its introduction in the early 20th century, the headgear has saved countless lives and is considered the number one safety tool for construction workers.\nThe hard hat was invented in 1919 by Edward W. Bullard, who had just returned from World War I. Before the war, workers used to smear their hats with coal tar for protection of their head. Bullard, having witnessed the life-saving power of the metal helmet in the War, decided to produce a head protection device that was affordable for every worker and lightweight enough to be worn all day long. The Hard Boiled Hat was thus born, using steamed canvas and leather, covered with black paint, and featuring a suspension system to reduce impact. Soon, hard hats became widely used. The headgear was later made mandatory at construction sites in major construction projects, such as the Hoover Dam in 1931 and the Golden Gate Bridge in 1933.\nOver the past century, hard hats have advanced considerably, evolving from canvas and leather to aluminum, fiberglass, and, eventually, to thermoplastic. Recently, new models have been introduced and accessories added to meet the needs of laborers working on various job sites. For instance, a ventilated hard hat was developed to keep wearers cooler, and see-through face shields were attached to better see the hazards lurking above. Today, attachments include radios, sensors, cameras, and a lot more. A common color code has also been developed for recognizing people and their roles on site. Yellow is used for general laborers and contractors, white (or sometimes black) for supervisors and managers, and green for inspectors and new workers.\nNew products continue to expand the market. Global sales of hard hats totaled USD 2.1 billion in 2016, and are expected to reach USD 3.19 billion in 2025.",
        "question": "In what order did the following protective hats appear?\na. fiberglass hats\nb. hats with see-through shields\nc. hats with canvas and leather\nd. hats with tar over them",
        "options": [
          "d→c→a→b",
          "c→d→b→a",
          "c→b→a→d",
          "d→c→b→a"
        ],
        "answer": 0,
        "explanation": "(111學測英文第40題,答案為「d→c→a→b」)"
      },
      {
        "id": "english-real-111-q41",
        "origNo": 41,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "A hard hat is a helmet used mostly at worksites to protect the head from injuries due to falling objects. Since its introduction in the early 20th century, the headgear has saved countless lives and is considered the number one safety tool for construction workers.\nThe hard hat was invented in 1919 by Edward W. Bullard, who had just returned from World War I. Before the war, workers used to smear their hats with coal tar for protection of their head. Bullard, having witnessed the life-saving power of the metal helmet in the War, decided to produce a head protection device that was affordable for every worker and lightweight enough to be worn all day long. The Hard Boiled Hat was thus born, using steamed canvas and leather, covered with black paint, and featuring a suspension system to reduce impact. Soon, hard hats became widely used. The headgear was later made mandatory at construction sites in major construction projects, such as the Hoover Dam in 1931 and the Golden Gate Bridge in 1933.\nOver the past century, hard hats have advanced considerably, evolving from canvas and leather to aluminum, fiberglass, and, eventually, to thermoplastic. Recently, new models have been introduced and accessories added to meet the needs of laborers working on various job sites. For instance, a ventilated hard hat was developed to keep wearers cooler, and see-through face shields were attached to better see the hazards lurking above. Today, attachments include radios, sensors, cameras, and a lot more. A common color code has also been developed for recognizing people and their roles on site. Yellow is used for general laborers and contractors, white (or sometimes black) for supervisors and managers, and green for inspectors and new workers.\nNew products continue to expand the market. Global sales of hard hats totaled USD 2.1 billion in 2016, and are expected to reach USD 3.19 billion in 2025.",
        "question": "According to the passage, which of the following statements is true about the hard hat?",
        "options": [
          "Global sales have doubled every ten years.",
          "The inspiration came from the inventor's wartime experience.",
          "It was standard equipment for construction workers in the 1920s.",
          "Different colors are used in different industries to signal the roles of people on site."
        ],
        "answer": 1,
        "explanation": "(111學測英文第41題,答案為「The inspiration came from the inventor's wartime experience.」)"
      },
      {
        "id": "english-real-111-q42",
        "origNo": 42,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "A hard hat is a helmet used mostly at worksites to protect the head from injuries due to falling objects. Since its introduction in the early 20th century, the headgear has saved countless lives and is considered the number one safety tool for construction workers.\nThe hard hat was invented in 1919 by Edward W. Bullard, who had just returned from World War I. Before the war, workers used to smear their hats with coal tar for protection of their head. Bullard, having witnessed the life-saving power of the metal helmet in the War, decided to produce a head protection device that was affordable for every worker and lightweight enough to be worn all day long. The Hard Boiled Hat was thus born, using steamed canvas and leather, covered with black paint, and featuring a suspension system to reduce impact. Soon, hard hats became widely used. The headgear was later made mandatory at construction sites in major construction projects, such as the Hoover Dam in 1931 and the Golden Gate Bridge in 1933.\nOver the past century, hard hats have advanced considerably, evolving from canvas and leather to aluminum, fiberglass, and, eventually, to thermoplastic. Recently, new models have been introduced and accessories added to meet the needs of laborers working on various job sites. For instance, a ventilated hard hat was developed to keep wearers cooler, and see-through face shields were attached to better see the hazards lurking above. Today, attachments include radios, sensors, cameras, and a lot more. A common color code has also been developed for recognizing people and their roles on site. Yellow is used for general laborers and contractors, white (or sometimes black) for supervisors and managers, and green for inspectors and new workers.\nNew products continue to expand the market. Global sales of hard hats totaled USD 2.1 billion in 2016, and are expected to reach USD 3.19 billion in 2025.",
        "question": "Which of the following words are used in the passage to refer to the hard hat?\na. tool  b. code  c. device  d. helmet  e. accessory  f. headgear",
        "options": [
          "a, b, d, e",
          "a, c, d, f",
          "c, d, e, f",
          "a, d, e, f"
        ],
        "answer": 1,
        "explanation": "(111學測英文第42題,答案為「a, c, d, f」)"
      },
      {
        "id": "english-real-111-q43",
        "origNo": 43,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Zebrafish, named for their characteristic stripes, have been a popular test subject for researchers. Only a few centimeters in length, the fish breed easily in captivity, grow quickly, and their transparent body makes it easy to study their organs. Above all, they possess some amazing “self-healing” power. When part of their heart is removed, they can grow it back in a matter of weeks. When blinded, they can quickly regain the ability to see.\nRecent studies show that humans and zebrafish have the same major organs and share 70 percent of the genes. Moreover, 84 percent of human genes associated with disease find a counterpart in zebrafish. Scientists thus hope that understanding the self-healing mystery of the fish may one day allow humans to regenerate such organs as eyes, hearts, and spines.\nResearchers at Vanderbilt University are particularly interested in zebrafish retina regeneration. They have learned that damage of retina can cause blindness in zebrafish, yet it only takes about three to four weeks before vision is restored. The structure and cell types of zebrafish retinas are almost identical to those of humans. If the process can be replicated in humans, it may give rise to new treatments for blindness caused by retinal damage.\nIn order to know exactly how zebrafish retina is regenerated, the team looked at the neurotransmitter gamma-aminobutyric acid (GABA), a chemical messenger in the brain that reduces the activity of neurons. They found that lowering GABA levels in zebrafish can trigger retina regeneration, while a high level of GABA concentration will suppress the regeneration process. This suggested that GABA plays an important role in the fish's ability to regain their sight.\nThe team is beginning to test the GABA theory on mice. If that works, human trials will be next on the agenda. If the research proves successful in humans, some of the nearly 40 million blind people worldwide may one day have a tiny, striped fish to thank.",
        "question": "What can we learn about zebrafish from the passage?",
        "options": [
          "How they should be studied in labs.",
          "Where they derive their regenerative ability.",
          "Why they share humans' genetic code.",
          "What they may offer in medical advancements."
        ],
        "answer": 3,
        "explanation": "(111學測英文第43題,答案為「What they may offer in medical advancements.」)"
      },
      {
        "id": "english-real-111-q44",
        "origNo": 44,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Zebrafish, named for their characteristic stripes, have been a popular test subject for researchers. Only a few centimeters in length, the fish breed easily in captivity, grow quickly, and their transparent body makes it easy to study their organs. Above all, they possess some amazing “self-healing” power. When part of their heart is removed, they can grow it back in a matter of weeks. When blinded, they can quickly regain the ability to see.\nRecent studies show that humans and zebrafish have the same major organs and share 70 percent of the genes. Moreover, 84 percent of human genes associated with disease find a counterpart in zebrafish. Scientists thus hope that understanding the self-healing mystery of the fish may one day allow humans to regenerate such organs as eyes, hearts, and spines.\nResearchers at Vanderbilt University are particularly interested in zebrafish retina regeneration. They have learned that damage of retina can cause blindness in zebrafish, yet it only takes about three to four weeks before vision is restored. The structure and cell types of zebrafish retinas are almost identical to those of humans. If the process can be replicated in humans, it may give rise to new treatments for blindness caused by retinal damage.\nIn order to know exactly how zebrafish retina is regenerated, the team looked at the neurotransmitter gamma-aminobutyric acid (GABA), a chemical messenger in the brain that reduces the activity of neurons. They found that lowering GABA levels in zebrafish can trigger retina regeneration, while a high level of GABA concentration will suppress the regeneration process. This suggested that GABA plays an important role in the fish's ability to regain their sight.\nThe team is beginning to test the GABA theory on mice. If that works, human trials will be next on the agenda. If the research proves successful in humans, some of the nearly 40 million blind people worldwide may one day have a tiny, striped fish to thank.",
        "question": "Which of the following statements is true regarding GABA in zebrafish?",
        "options": [
          "Increasing GABA level facilitates neuron activities.",
          "There is a high level of GABA in the brain of zebrafish.",
          "Lowering GABA levels in the brain can stimulate retina regrowth.",
          "GABA contains chemical elements that trigger the growth of neurons."
        ],
        "answer": 2,
        "explanation": "(111學測英文第44題,答案為「Lowering GABA levels in the brain can stimulate retina regrowth.」)"
      },
      {
        "id": "english-real-111-q45",
        "origNo": 45,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Zebrafish, named for their characteristic stripes, have been a popular test subject for researchers. Only a few centimeters in length, the fish breed easily in captivity, grow quickly, and their transparent body makes it easy to study their organs. Above all, they possess some amazing “self-healing” power. When part of their heart is removed, they can grow it back in a matter of weeks. When blinded, they can quickly regain the ability to see.\nRecent studies show that humans and zebrafish have the same major organs and share 70 percent of the genes. Moreover, 84 percent of human genes associated with disease find a counterpart in zebrafish. Scientists thus hope that understanding the self-healing mystery of the fish may one day allow humans to regenerate such organs as eyes, hearts, and spines.\nResearchers at Vanderbilt University are particularly interested in zebrafish retina regeneration. They have learned that damage of retina can cause blindness in zebrafish, yet it only takes about three to four weeks before vision is restored. The structure and cell types of zebrafish retinas are almost identical to those of humans. If the process can be replicated in humans, it may give rise to new treatments for blindness caused by retinal damage.\nIn order to know exactly how zebrafish retina is regenerated, the team looked at the neurotransmitter gamma-aminobutyric acid (GABA), a chemical messenger in the brain that reduces the activity of neurons. They found that lowering GABA levels in zebrafish can trigger retina regeneration, while a high level of GABA concentration will suppress the regeneration process. This suggested that GABA plays an important role in the fish's ability to regain their sight.\nThe team is beginning to test the GABA theory on mice. If that works, human trials will be next on the agenda. If the research proves successful in humans, some of the nearly 40 million blind people worldwide may one day have a tiny, striped fish to thank.",
        "question": "Which of the following is closest in meaning to “replicated” in the third paragraph?",
        "options": [
          "Reproduced.",
          "Reassembled.",
          "Recycled.",
          "Restored."
        ],
        "answer": 0,
        "explanation": "(111學測英文第45題,答案為「Reproduced.」)"
      },
      {
        "id": "english-real-111-q46",
        "origNo": 46,
        "sourceYear": 111,
        "part": "閱讀測驗",
        "passageId": "english-real-111-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Zebrafish, named for their characteristic stripes, have been a popular test subject for researchers. Only a few centimeters in length, the fish breed easily in captivity, grow quickly, and their transparent body makes it easy to study their organs. Above all, they possess some amazing “self-healing” power. When part of their heart is removed, they can grow it back in a matter of weeks. When blinded, they can quickly regain the ability to see.\nRecent studies show that humans and zebrafish have the same major organs and share 70 percent of the genes. Moreover, 84 percent of human genes associated with disease find a counterpart in zebrafish. Scientists thus hope that understanding the self-healing mystery of the fish may one day allow humans to regenerate such organs as eyes, hearts, and spines.\nResearchers at Vanderbilt University are particularly interested in zebrafish retina regeneration. They have learned that damage of retina can cause blindness in zebrafish, yet it only takes about three to four weeks before vision is restored. The structure and cell types of zebrafish retinas are almost identical to those of humans. If the process can be replicated in humans, it may give rise to new treatments for blindness caused by retinal damage.\nIn order to know exactly how zebrafish retina is regenerated, the team looked at the neurotransmitter gamma-aminobutyric acid (GABA), a chemical messenger in the brain that reduces the activity of neurons. They found that lowering GABA levels in zebrafish can trigger retina regeneration, while a high level of GABA concentration will suppress the regeneration process. This suggested that GABA plays an important role in the fish's ability to regain their sight.\nThe team is beginning to test the GABA theory on mice. If that works, human trials will be next on the agenda. If the research proves successful in humans, some of the nearly 40 million blind people worldwide may one day have a tiny, striped fish to thank.",
        "question": "According to the passage, which of the following is an opinion, but NOT a fact?",
        "options": [
          "Humans and zebrafish have 70 percent of genes in common.",
          "Zebrafish can quickly recover vision after damage to the retina.",
          "Scientists are testing if the GABA theory works on mice as it does on zebrafish.",
          "Understanding regeneration in zebrafish may allow humans to regrow their organs."
        ],
        "answer": 3,
        "explanation": "(111學測英文第46題,答案為「Understanding regeneration in zebrafish may allow humans to regrow their organs.」)"
      },
      {
        "id": "english-real-111-q47",
        "origNo": 47,
        "sourceYear": 111,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-111-mixed",
        "passageTitle": "混合題 第47至49題",
        "passage": "To support refugees and people facing crises around the world, the International Olympic Committee created the Refugee Olympic Team. Refugee athletes have been invited to compete in the Olympic Games since 2016. Here are two refugee athletes and their stories.\n[圖片示意:原題右上角附 REFUGEE OLYMPIC TEAM 標誌(黑色粗體字 REFUGEE OLYMPIC TEAM,下方為奧運五環)]\n【試題本左欄】\nYusra Mardini is a swimmer who grew up in the war-torn country of Syria. Due to the unstable political situation there, Yusra sometimes had to train in pools under roofs that had been blown open by bombings.\nIn 2015 when she was just a 17-year-old, her house was destroyed in the civil war, so she decided to flee her home country. She managed to reach Turkey through Lebanon. From Turkey, she boarded a small boat that held 20 people and set sail into the deep waters of the Aegean Sea. But 30 minutes later, the engine stopped and the boat began to sink. Yusra dove into the cold water, and—with the help of her sister and two men—swam and pushed the boat for over three hours to reach the Greek island of Lesbos. They saved everyone aboard.\nYusra eventually settled in Germany and has since worked to inspire others to pursue their dreams. Her incredible story and superior swimming skills won her the opportunity to participate in the Olympic Games. She was a member of the Refugee Olympic Team for both the 2016 Rio Games and 2021 Tokyo Games.\n【試題本右欄】\nPopole Misenga was born in the Democratic Republic of the Congo. When he was nine, the country's civil war claimed the life of his mother and left him homeless. Escaping from the war zone, he wandered alone for a week in a rainforest before being rescued and taken to a center for displaced children in the capital, Kinshasa.\nThere, Popole discovered judo, from which he gained strength in body and mind. “Judo helped me by giving me serenity, discipline, commitment—everything,” he said. He trained hard and became a professional judoka. However, each time he lost a competition, his coaches would lock him in a cage for days, feeding him only coffee and bread. Finally, when he was cruelly abused for not winning medals at the 2013 World Championships in Brazil, he decided to seek protection.\nPopole was granted asylum in 2014 by Brazilian government and later continued judo training at a youth facility. He made his Olympic debut at Rio 2016. He also represented the Refugee Olympic Team in 2021 Tokyo Games.",
        "question": "請根據選文內容,從兩則故事中各選出一個單詞(word),分別填入下列兩句的空格,並視語法需要作適當的字形變化,使句子語意完整、語法正確,且符合全文文意。(填空,4分;(A)(B)各2分)\nWith her amazing courage and swimming skills, Yusra Mardini was not only able to save lives but also fulfill her dream of ______(A)______ in the Olympic Games.\nJudo helped Popole Misenga to be strong both physically and mentally, and gave him the courage to escape from the ______(B)______ of his coaches.",
        "explanation": "(111學測英文第47題,官方參考答案)47A:participating / swimming / participation;47B:abuse / abuses / abusing / cruelty / cruelties(斜線表示皆為可接受的滿分答案)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-111-q48",
        "origNo": 48,
        "sourceYear": 111,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-111-mixed",
        "passageTitle": "混合題 第47至49題",
        "passage": "To support refugees and people facing crises around the world, the International Olympic Committee created the Refugee Olympic Team. Refugee athletes have been invited to compete in the Olympic Games since 2016. Here are two refugee athletes and their stories.\n[圖片示意:原題右上角附 REFUGEE OLYMPIC TEAM 標誌(黑色粗體字 REFUGEE OLYMPIC TEAM,下方為奧運五環)]\n【試題本左欄】\nYusra Mardini is a swimmer who grew up in the war-torn country of Syria. Due to the unstable political situation there, Yusra sometimes had to train in pools under roofs that had been blown open by bombings.\nIn 2015 when she was just a 17-year-old, her house was destroyed in the civil war, so she decided to flee her home country. She managed to reach Turkey through Lebanon. From Turkey, she boarded a small boat that held 20 people and set sail into the deep waters of the Aegean Sea. But 30 minutes later, the engine stopped and the boat began to sink. Yusra dove into the cold water, and—with the help of her sister and two men—swam and pushed the boat for over three hours to reach the Greek island of Lesbos. They saved everyone aboard.\nYusra eventually settled in Germany and has since worked to inspire others to pursue their dreams. Her incredible story and superior swimming skills won her the opportunity to participate in the Olympic Games. She was a member of the Refugee Olympic Team for both the 2016 Rio Games and 2021 Tokyo Games.\n【試題本右欄】\nPopole Misenga was born in the Democratic Republic of the Congo. When he was nine, the country's civil war claimed the life of his mother and left him homeless. Escaping from the war zone, he wandered alone for a week in a rainforest before being rescued and taken to a center for displaced children in the capital, Kinshasa.\nThere, Popole discovered judo, from which he gained strength in body and mind. “Judo helped me by giving me serenity, discipline, commitment—everything,” he said. He trained hard and became a professional judoka. However, each time he lost a competition, his coaches would lock him in a cage for days, feeding him only coffee and bread. Finally, when he was cruelly abused for not winning medals at the 2013 World Championships in Brazil, he decided to seek protection.\nPopole was granted asylum in 2014 by Brazilian government and later continued judo training at a youth facility. He made his Olympic debut at Rio 2016. He also represented the Refugee Olympic Team in 2021 Tokyo Games.",
        "question": "Which word in Popole Misenga's story means “protection given by a country or embassy to refugees from another country”?(簡答,2分)",
        "explanation": "(111學測英文第48題,官方參考答案)asylum / Asylum。評分原則:完全正確得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-111-q49",
        "origNo": 49,
        "sourceYear": 111,
        "part": "混合題",
        "type": "multi",
        "passageId": "english-real-111-mixed",
        "passageTitle": "混合題 第47至49題",
        "passage": "To support refugees and people facing crises around the world, the International Olympic Committee created the Refugee Olympic Team. Refugee athletes have been invited to compete in the Olympic Games since 2016. Here are two refugee athletes and their stories.\n[圖片示意:原題右上角附 REFUGEE OLYMPIC TEAM 標誌(黑色粗體字 REFUGEE OLYMPIC TEAM,下方為奧運五環)]\n【試題本左欄】\nYusra Mardini is a swimmer who grew up in the war-torn country of Syria. Due to the unstable political situation there, Yusra sometimes had to train in pools under roofs that had been blown open by bombings.\nIn 2015 when she was just a 17-year-old, her house was destroyed in the civil war, so she decided to flee her home country. She managed to reach Turkey through Lebanon. From Turkey, she boarded a small boat that held 20 people and set sail into the deep waters of the Aegean Sea. But 30 minutes later, the engine stopped and the boat began to sink. Yusra dove into the cold water, and—with the help of her sister and two men—swam and pushed the boat for over three hours to reach the Greek island of Lesbos. They saved everyone aboard.\nYusra eventually settled in Germany and has since worked to inspire others to pursue their dreams. Her incredible story and superior swimming skills won her the opportunity to participate in the Olympic Games. She was a member of the Refugee Olympic Team for both the 2016 Rio Games and 2021 Tokyo Games.\n【試題本右欄】\nPopole Misenga was born in the Democratic Republic of the Congo. When he was nine, the country's civil war claimed the life of his mother and left him homeless. Escaping from the war zone, he wandered alone for a week in a rainforest before being rescued and taken to a center for displaced children in the capital, Kinshasa.\nThere, Popole discovered judo, from which he gained strength in body and mind. “Judo helped me by giving me serenity, discipline, commitment—everything,” he said. He trained hard and became a professional judoka. However, each time he lost a competition, his coaches would lock him in a cage for days, feeding him only coffee and bread. Finally, when he was cruelly abused for not winning medals at the 2013 World Championships in Brazil, he decided to seek protection.\nPopole was granted asylum in 2014 by Brazilian government and later continued judo training at a youth facility. He made his Olympic debut at Rio 2016. He also represented the Refugee Olympic Team in 2021 Tokyo Games.",
        "question": "請從下列(A)到(F)中,選出對Yusra Mardini和Popole Misenga都正確的選項。(多選題,4分)\n(非官方註記:本站選項不標 A、B、C 代號,且順序每次隨機排列,請直接勾選符合的選項。)",
        "options": [
          "Being an Olympic medalist.",
          "Growing up in an orphanage.",
          "Joining the Olympic Games more than once.",
          "Leaving his/her hometown because of war.",
          "Showing talent in sports after going to a foreign country.",
          "Traveling through several countries before securing protection."
        ],
        "answers": [
          2,
          3
        ],
        "explanation": "(111學測英文第49題,答案為「Joining the Olympic Games more than once.」、「Leaving his/her hometown because of war.」)"
      },
      {
        "id": "english-real-111-q50",
        "origNo": 50,
        "sourceYear": 111,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第1句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n飼養寵物並非一項短暫的人生體驗,而是一個對動物的終生承諾。",
        "explanation": "(官方編號:中譯英第1題)官方參考答案(滿分;斜線前後為皆可接受的等值譯法):Keeping / Raising a pet / pets is not a short-term / temporary life experience / experience in life, but a lifelong commitment / promise to an animal / animals。重點詞彙:飼養寵物 = keeping/raising pets/a pet;並非…而是… = not…but…;短暫的 = short-term/temporary;人生體驗 = life experience/experience in life;終生承諾 = lifelong commitment/promise。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。考生必須句法使用正確,且用字、拼字皆正確才能得到滿分。"
      },
      {
        "id": "english-real-111-q51",
        "origNo": 51,
        "sourceYear": 111,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第2句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n在享受寵物所帶來的歡樂時,我們不該忽略要善盡照顧他們的責任。",
        "explanation": "(官方編號:中譯英第2題)官方參考答案(滿分;斜線前後為皆可接受的等值譯法),兩種寫法:(1) When we enjoy / When enjoying / While enjoying the joy / fun / pleasure they / pets bring (to) us, we should not ignore / neglect / overlook the responsibility of / to taking / take good care of them.(2) When we enjoy / When enjoying / While enjoying the joy / fun / pleasure brought by pets / from pets, we should not ignore / neglect / overlook the responsibility of / to taking / take care of them well.(官方答案原文此處誤植為 “brough by pets”)。重點詞彙:在享受…時 = while enjoying/when we enjoy;歡樂 = joy/fun/pleasure;不該 = should not;忽略 = ignore/neglect/overlook;善盡照顧他們 = take good care of them/take care of them well;責任 = responsibility。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。考生必須句法使用正確,且用字、拼字皆正確才能得到滿分。"
      },
      {
        "id": "english-real-111-q52",
        "origNo": 52,
        "sourceYear": 111,
        "part": "非選擇題",
        "type": "written",
        "question": "英文作文(20分):依提示寫一篇英文作文,文長至少120個單詞(words)。\n提示:不同的公園,可能樣貌不同,特色也不同。請以此為主題,並依據下列兩張圖片的內容,寫一篇英文作文,文分兩段。第一段描述圖A和圖B中的公園各有何特色,第二段則說明你心目中理想公園的樣貌與特色,並解釋你的理由。\n[圖片示意(非官方文字,原題為兩張黑白照片):圖A:兒童遊樂場,鋪磚的地面上,左側有高架式的攀爬/懸吊遊具與貼近地面的圓形旋轉座椅,右側有一組帶圓頂造型、附溜滑梯的大型組合遊具,場地開闊、幾乎沒有遮蔭。圖B:綠意盎然的林蔭公園,高大的樹木林立,前方是一大片開闊的草地,遠處有花圃/灌木圍成的花壇,陽光穿過樹葉灑下斑駁的樹影。]",
        "explanation": "(官方編號:作文)原題附圖A、圖B兩張照片,此處以文字描述取代,並非官方文字。本題無單一參考範文,官方僅公布評分原則:依內容、組織、文法句構、字彙拼字四項表現評分,各項得分加總後給予一個整體分數(holistic score),總分1至20分,分五等級:特優(19-20分)、優(15-18分)、可(10-14分)、差(5-9分)、劣(0-4分)。字數明顯不足者扣總分1分;未分段者亦扣總分1分。評分指標(表一,每項優5-4分、可3分、差2-1分、劣0分):【內容】優:主題(句)清楚切題,並有具體、完整的相關細節支持;可:主題不夠清楚或突顯,部分相關敘述發展不全;差:主題不明,大部分相關敘述發展不全或與主題無關;劣:文不對題或沒寫(凡文不對題或沒寫者,其他各項均以零分計算)。【組織】優:重點分明,有開頭、發展、結尾,前後連貫,轉承語使用得當;可:重點安排不妥,前後發展比例與轉承語使用欠妥;差:重點不明、前後不連貫;劣:全文毫無組織或未按提示寫作。【文法、句構】優:全文幾無文法、格式、標點錯誤,文句結構富變化;可:文法、格式、標點錯誤少,且未影響文意之表達;差:文法、格式、標點錯誤多,且明顯影響文意之表達;劣:全文文法錯誤嚴重,導致文意不明。【字彙、拼字】優:用字精確、得宜,且幾無拼字、大小寫錯誤;可:字詞單調、重複,用字偶有不當,少許拼字、大小寫錯誤,但不影響文意之表達;差:用字、拼字、大小寫錯誤多,明顯影響文意之表達;劣:只寫出或抄襲與題意有關的零碎字詞。"
      }
    ],
  },
  // 112學年度學科能力測驗 英文考科 (transcribed from official CEEC PDFs, ceec.edu.tw)
  // Structure: 第壹部分 選擇題 Q1-46 (詞彙題 1-10, 綜合測驗 11-20, 文意選填 21-30, 篇章結構 31-34, 閱讀測驗 35-46);
  // 第貳部分 混合題 Q47-50 (47,48 written blanks; 49 multi-select, official answer DF; 50 written short answer);
  // 第參部分 非選擇題 = 中譯英 x2 + 英文作文 (synthetic origNo 51, 52, 53 following the last 混合題 number 50).
  // Sources:
  //   (a) 試題本: https://www.ceec.edu.tw/files/file_pool/1/0n045359274947649605/02-112%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E8%A9%A6%E5%8D%B7.pdf
  //   (b) 選擇題參考答案: https://www.ceec.edu.tw/files/file_pool/1/0N015546416633213720/02-112%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf
  //   (c) 非選擇題評分原則: https://www.ceec.edu.tw/files/file_pool/1/0n049421311322447606/03-112%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E9%9D%9E%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88%E8%88%87%E8%A9%95%E5%88%86%E5%8E%9F%E5%89%87.pdf
  // Skipped questions: none (all 46 choice questions + 混合題 Q47-50 + 中譯英 x2 + 作文 included).
  // Image-dependent items converted to text: Q44 (options were four circled points A-D on a black-and-white world map; replaced by
  //   a non-official Chinese text description of where each point lies); 作文 prompt (four numbered emoji images, replaced by text description).
  // LOW-CONFIDENCE: the Q44 map-point descriptions and the 作文 emoji descriptions are my own plain-text readings of the images;
  //   the official answer B (point on the East-African coast near Tanzania) matches the passage ("off the coast of Tanzania ... Indian Ocean").
  // Other notes: 混合題 is numbered 47-50 in this year's booklet (47-48 are two blanks of one sentence, 49 multi-select over speakers (A)-(H),
  //   50 short answer); Q49 options are the eight chatroom speakers in order (A) Olivia ... (H) Alexander. English booklet text was taken from the
  //   PDF text layer and checked against page images; italics/bold in the booklet are not preserved.
  {
    sourceYear: 112,
    minutes: 100,
    questions: [
      {
        "id": "english-real-112-q1",
        "origNo": 1,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "The bus driver often complains about chewing gum found under passenger seats because it is ______ and very hard to remove.",
        "options": [
          "sticky",
          "greasy",
          "clumsy",
          "mighty"
        ],
        "answer": 0,
        "explanation": "(112學測英文第1題,答案為「sticky」)"
      },
      {
        "id": "english-real-112-q2",
        "origNo": 2,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "Jesse is a talented model. He can easily adopt an elegant ______ for a camera shoot.",
        "options": [
          "clap",
          "toss",
          "pose",
          "snap"
        ],
        "answer": 2,
        "explanation": "(112學測英文第2題,答案為「pose」)"
      },
      {
        "id": "english-real-112-q3",
        "origNo": 3,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "In order to draw her family tree, Mary tried to trace her ______ back to their arrival in North America.",
        "options": [
          "siblings",
          "commuters",
          "ancestors",
          "instructors"
        ],
        "answer": 2,
        "explanation": "(112學測英文第3題,答案為「ancestors」)"
      },
      {
        "id": "english-real-112-q4",
        "origNo": 4,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "Upon the super typhoon warning, Nancy rushed to the supermarket—only to find the shelves almost ______ and the stock nearly gone.",
        "options": [
          "blank",
          "bare",
          "hollow",
          "queer"
        ],
        "answer": 1,
        "explanation": "(112學測英文第4題,答案為「bare」)"
      },
      {
        "id": "english-real-112-q5",
        "origNo": 5,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "Even though Jack said “Sorry!” to me in person, I did not feel any ______ in his apology.",
        "options": [
          "liability",
          "generosity",
          "integrity",
          "sincerity"
        ],
        "answer": 3,
        "explanation": "(112學測英文第5題,答案為「sincerity」)"
      },
      {
        "id": "english-real-112-q6",
        "origNo": 6,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "My grandfather has astonishing powers of ______. He can still vividly describe his first day at school as a child.",
        "options": [
          "resolve",
          "fraction",
          "privilege",
          "recall"
        ],
        "answer": 3,
        "explanation": "(112學測英文第6題,答案為「recall」)"
      },
      {
        "id": "english-real-112-q7",
        "origNo": 7,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "Recent research has found lots of evidence to ______ the drug company’s claims about its “miracle” tablets for curing cancer.",
        "options": [
          "provoke",
          "counter",
          "expose",
          "convert"
        ],
        "answer": 1,
        "explanation": "(112學測英文第7題,答案為「counter」)"
      },
      {
        "id": "english-real-112-q8",
        "origNo": 8,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "Corrupt officials and misguided policies have ______ the country’s economy and burdened its people with enormous foreign debts.",
        "options": [
          "crippled",
          "accelerated",
          "rendered",
          "ventured"
        ],
        "answer": 0,
        "explanation": "(112學測英文第8題,答案為「crippled」)"
      },
      {
        "id": "english-real-112-q9",
        "origNo": 9,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "As a record number of fans showed up for the baseball final, the highways around the stadium were ______ with traffic all day.",
        "options": [
          "choked",
          "disturbed",
          "enclosed",
          "injected"
        ],
        "answer": 0,
        "explanation": "(112學測英文第9題,答案為「choked」)"
      },
      {
        "id": "english-real-112-q10",
        "origNo": 10,
        "sourceYear": 112,
        "part": "詞彙題",
        "question": "Studies show that the ______ unbiased media are in fact often deeply influenced by political ideology.",
        "options": [
          "undoubtedly",
          "roughly",
          "understandably",
          "supposedly"
        ],
        "answer": 3,
        "explanation": "(112學測英文第10題,答案為「supposedly」)"
      },
      {
        "id": "english-real-112-q11",
        "origNo": 11,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In certain forests, when you look up you will see a network of cracks formed by gaps between the outermost edges of tree branches. It looks like a precisely engineered jigsaw puzzle, each branch growing just perfectly so it almost, (11), touches the neighboring tree. This beautiful phenomenon is called crown shyness.\nScientists have been discussing crown shyness since the 1920s, proposing (12) explanations for the phenomenon. Some researchers point out that as trees often grow close together, treetops can easily collide and break when swayed by the wind. In order to protect their branches from breakage, trees maintain “shyness gaps”—spaces large enough to prevent them from touching their neighbors.\nOther scientists suggest that plants, like animals, (13) resources—nutrients, water, space, and light. In forested areas with thick tree crowns, there is intense struggle for these resources. Gaps in the treetops resulting from crown shyness may allow trees to increase their (14) light and enhance photosynthesis. Additionally, by having branches that do not touch those of their neighbors, trees may be able to limit the spread of leaf-eating insects, and potentially also the transmission of diseases from tree to tree. (15) decades of investigation, there is no consensus on exactly what causes the beautiful and mysterious phenomenon of crown shyness.",
        "question": "空格 (11) 應填入下列哪一個選項?",
        "options": [
          "in no time",
          "by all means",
          "but not quite",
          "and pretty much"
        ],
        "answer": 2,
        "explanation": "(112學測英文第11題,答案為「but not quite」)"
      },
      {
        "id": "english-real-112-q12",
        "origNo": 12,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In certain forests, when you look up you will see a network of cracks formed by gaps between the outermost edges of tree branches. It looks like a precisely engineered jigsaw puzzle, each branch growing just perfectly so it almost, (11), touches the neighboring tree. This beautiful phenomenon is called crown shyness.\nScientists have been discussing crown shyness since the 1920s, proposing (12) explanations for the phenomenon. Some researchers point out that as trees often grow close together, treetops can easily collide and break when swayed by the wind. In order to protect their branches from breakage, trees maintain “shyness gaps”—spaces large enough to prevent them from touching their neighbors.\nOther scientists suggest that plants, like animals, (13) resources—nutrients, water, space, and light. In forested areas with thick tree crowns, there is intense struggle for these resources. Gaps in the treetops resulting from crown shyness may allow trees to increase their (14) light and enhance photosynthesis. Additionally, by having branches that do not touch those of their neighbors, trees may be able to limit the spread of leaf-eating insects, and potentially also the transmission of diseases from tree to tree. (15) decades of investigation, there is no consensus on exactly what causes the beautiful and mysterious phenomenon of crown shyness.",
        "question": "空格 (12) 應填入下列哪一個選項?",
        "options": [
          "universal",
          "productive",
          "conventional",
          "multiple"
        ],
        "answer": 3,
        "explanation": "(112學測英文第12題,答案為「multiple」)"
      },
      {
        "id": "english-real-112-q13",
        "origNo": 13,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In certain forests, when you look up you will see a network of cracks formed by gaps between the outermost edges of tree branches. It looks like a precisely engineered jigsaw puzzle, each branch growing just perfectly so it almost, (11), touches the neighboring tree. This beautiful phenomenon is called crown shyness.\nScientists have been discussing crown shyness since the 1920s, proposing (12) explanations for the phenomenon. Some researchers point out that as trees often grow close together, treetops can easily collide and break when swayed by the wind. In order to protect their branches from breakage, trees maintain “shyness gaps”—spaces large enough to prevent them from touching their neighbors.\nOther scientists suggest that plants, like animals, (13) resources—nutrients, water, space, and light. In forested areas with thick tree crowns, there is intense struggle for these resources. Gaps in the treetops resulting from crown shyness may allow trees to increase their (14) light and enhance photosynthesis. Additionally, by having branches that do not touch those of their neighbors, trees may be able to limit the spread of leaf-eating insects, and potentially also the transmission of diseases from tree to tree. (15) decades of investigation, there is no consensus on exactly what causes the beautiful and mysterious phenomenon of crown shyness.",
        "question": "空格 (13) 應填入下列哪一個選項?",
        "options": [
          "get over",
          "compete for",
          "give way to",
          "make up for"
        ],
        "answer": 1,
        "explanation": "(112學測英文第13題,答案為「compete for」)"
      },
      {
        "id": "english-real-112-q14",
        "origNo": 14,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In certain forests, when you look up you will see a network of cracks formed by gaps between the outermost edges of tree branches. It looks like a precisely engineered jigsaw puzzle, each branch growing just perfectly so it almost, (11), touches the neighboring tree. This beautiful phenomenon is called crown shyness.\nScientists have been discussing crown shyness since the 1920s, proposing (12) explanations for the phenomenon. Some researchers point out that as trees often grow close together, treetops can easily collide and break when swayed by the wind. In order to protect their branches from breakage, trees maintain “shyness gaps”—spaces large enough to prevent them from touching their neighbors.\nOther scientists suggest that plants, like animals, (13) resources—nutrients, water, space, and light. In forested areas with thick tree crowns, there is intense struggle for these resources. Gaps in the treetops resulting from crown shyness may allow trees to increase their (14) light and enhance photosynthesis. Additionally, by having branches that do not touch those of their neighbors, trees may be able to limit the spread of leaf-eating insects, and potentially also the transmission of diseases from tree to tree. (15) decades of investigation, there is no consensus on exactly what causes the beautiful and mysterious phenomenon of crown shyness.",
        "question": "空格 (14) 應填入下列哪一個選項?",
        "options": [
          "reliance on",
          "exposure to",
          "sensitivity to",
          "reflection on"
        ],
        "answer": 1,
        "explanation": "(112學測英文第14題,答案為「exposure to」)"
      },
      {
        "id": "english-real-112-q15",
        "origNo": 15,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In certain forests, when you look up you will see a network of cracks formed by gaps between the outermost edges of tree branches. It looks like a precisely engineered jigsaw puzzle, each branch growing just perfectly so it almost, (11), touches the neighboring tree. This beautiful phenomenon is called crown shyness.\nScientists have been discussing crown shyness since the 1920s, proposing (12) explanations for the phenomenon. Some researchers point out that as trees often grow close together, treetops can easily collide and break when swayed by the wind. In order to protect their branches from breakage, trees maintain “shyness gaps”—spaces large enough to prevent them from touching their neighbors.\nOther scientists suggest that plants, like animals, (13) resources—nutrients, water, space, and light. In forested areas with thick tree crowns, there is intense struggle for these resources. Gaps in the treetops resulting from crown shyness may allow trees to increase their (14) light and enhance photosynthesis. Additionally, by having branches that do not touch those of their neighbors, trees may be able to limit the spread of leaf-eating insects, and potentially also the transmission of diseases from tree to tree. (15) decades of investigation, there is no consensus on exactly what causes the beautiful and mysterious phenomenon of crown shyness.",
        "question": "空格 (15) 應填入下列哪一個選項?",
        "options": [
          "For",
          "Besides",
          "Despite",
          "Concerning"
        ],
        "answer": 2,
        "explanation": "(112學測英文第15題,答案為「Despite」)"
      },
      {
        "id": "english-real-112-q16",
        "origNo": 16,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Gravity has been at the top of the science agenda since the start of Mars missions. In the earlier days of space travel, scientists tried to overcome the force of gravity so that a rocket could shoot (16) Earth’s pull in order to land humans on the moon. Today, they are more interested in how reduced gravity affects the astronauts’ (17) condition.\nOur bodies have evolved to exist within Earth’s gravity (1 g), not in the weightlessness of space (0 g) or the microgravity of Mars (0.3 g). When on Earth, we have more fluids in our lower body because they are pulled down by Earth’s gravity. However, with the absence of gravity in the outer space, our body fluids (18), shifting toward the upper body and the head. As a result, the astronauts have swollen, puffy faces, very much resembling that of the round-headed Charlie Brown in the famous comic strip. This “Charlie Brown effect” will be more (19) when the astronauts go on their Mars missions, which will take about three years to complete, much longer than missions to the moon. Moreover, the effect is often (20) space motion sickness, headaches, and nausea. Such a syndrome is considered the top health risk for the astronauts, and scientists are still trying to figure out how it may be prevented.",
        "question": "空格 (16) 應填入下列哪一個選項?",
        "options": [
          "back to",
          "free of",
          "long before",
          "straight on"
        ],
        "answer": 1,
        "explanation": "(112學測英文第16題,答案為「free of」)"
      },
      {
        "id": "english-real-112-q17",
        "origNo": 17,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Gravity has been at the top of the science agenda since the start of Mars missions. In the earlier days of space travel, scientists tried to overcome the force of gravity so that a rocket could shoot (16) Earth’s pull in order to land humans on the moon. Today, they are more interested in how reduced gravity affects the astronauts’ (17) condition.\nOur bodies have evolved to exist within Earth’s gravity (1 g), not in the weightlessness of space (0 g) or the microgravity of Mars (0.3 g). When on Earth, we have more fluids in our lower body because they are pulled down by Earth’s gravity. However, with the absence of gravity in the outer space, our body fluids (18), shifting toward the upper body and the head. As a result, the astronauts have swollen, puffy faces, very much resembling that of the round-headed Charlie Brown in the famous comic strip. This “Charlie Brown effect” will be more (19) when the astronauts go on their Mars missions, which will take about three years to complete, much longer than missions to the moon. Moreover, the effect is often (20) space motion sickness, headaches, and nausea. Such a syndrome is considered the top health risk for the astronauts, and scientists are still trying to figure out how it may be prevented.",
        "question": "空格 (17) 應填入下列哪一個選項?",
        "options": [
          "physical",
          "perceptual",
          "mental",
          "external"
        ],
        "answer": 0,
        "explanation": "(112學測英文第17題,答案為「physical」)"
      },
      {
        "id": "english-real-112-q18",
        "origNo": 18,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Gravity has been at the top of the science agenda since the start of Mars missions. In the earlier days of space travel, scientists tried to overcome the force of gravity so that a rocket could shoot (16) Earth’s pull in order to land humans on the moon. Today, they are more interested in how reduced gravity affects the astronauts’ (17) condition.\nOur bodies have evolved to exist within Earth’s gravity (1 g), not in the weightlessness of space (0 g) or the microgravity of Mars (0.3 g). When on Earth, we have more fluids in our lower body because they are pulled down by Earth’s gravity. However, with the absence of gravity in the outer space, our body fluids (18), shifting toward the upper body and the head. As a result, the astronauts have swollen, puffy faces, very much resembling that of the round-headed Charlie Brown in the famous comic strip. This “Charlie Brown effect” will be more (19) when the astronauts go on their Mars missions, which will take about three years to complete, much longer than missions to the moon. Moreover, the effect is often (20) space motion sickness, headaches, and nausea. Such a syndrome is considered the top health risk for the astronauts, and scientists are still trying to figure out how it may be prevented.",
        "question": "空格 (18) 應填入下列哪一個選項?",
        "options": [
          "redistribute",
          "redistributed",
          "redistributing",
          "being redistributed"
        ],
        "answer": 0,
        "explanation": "(112學測英文第18題,答案為「redistribute」)"
      },
      {
        "id": "english-real-112-q19",
        "origNo": 19,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Gravity has been at the top of the science agenda since the start of Mars missions. In the earlier days of space travel, scientists tried to overcome the force of gravity so that a rocket could shoot (16) Earth’s pull in order to land humans on the moon. Today, they are more interested in how reduced gravity affects the astronauts’ (17) condition.\nOur bodies have evolved to exist within Earth’s gravity (1 g), not in the weightlessness of space (0 g) or the microgravity of Mars (0.3 g). When on Earth, we have more fluids in our lower body because they are pulled down by Earth’s gravity. However, with the absence of gravity in the outer space, our body fluids (18), shifting toward the upper body and the head. As a result, the astronauts have swollen, puffy faces, very much resembling that of the round-headed Charlie Brown in the famous comic strip. This “Charlie Brown effect” will be more (19) when the astronauts go on their Mars missions, which will take about three years to complete, much longer than missions to the moon. Moreover, the effect is often (20) space motion sickness, headaches, and nausea. Such a syndrome is considered the top health risk for the astronauts, and scientists are still trying to figure out how it may be prevented.",
        "question": "空格 (19) 應填入下列哪一個選項?",
        "options": [
          "contagious",
          "unusual",
          "severe",
          "aggressive"
        ],
        "answer": 2,
        "explanation": "(112學測英文第19題,答案為「severe」)"
      },
      {
        "id": "english-real-112-q20",
        "origNo": 20,
        "sourceYear": 112,
        "part": "綜合測驗",
        "passageId": "english-real-112-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "Gravity has been at the top of the science agenda since the start of Mars missions. In the earlier days of space travel, scientists tried to overcome the force of gravity so that a rocket could shoot (16) Earth’s pull in order to land humans on the moon. Today, they are more interested in how reduced gravity affects the astronauts’ (17) condition.\nOur bodies have evolved to exist within Earth’s gravity (1 g), not in the weightlessness of space (0 g) or the microgravity of Mars (0.3 g). When on Earth, we have more fluids in our lower body because they are pulled down by Earth’s gravity. However, with the absence of gravity in the outer space, our body fluids (18), shifting toward the upper body and the head. As a result, the astronauts have swollen, puffy faces, very much resembling that of the round-headed Charlie Brown in the famous comic strip. This “Charlie Brown effect” will be more (19) when the astronauts go on their Mars missions, which will take about three years to complete, much longer than missions to the moon. Moreover, the effect is often (20) space motion sickness, headaches, and nausea. Such a syndrome is considered the top health risk for the astronauts, and scientists are still trying to figure out how it may be prevented.",
        "question": "空格 (20) 應填入下列哪一個選項?",
        "options": [
          "varied with",
          "brought about",
          "transferred from",
          "accompanied by"
        ],
        "answer": 3,
        "explanation": "(112學測英文第20題,答案為「accompanied by」)"
      },
      {
        "id": "english-real-112-q21",
        "origNo": 21,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (21) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 9,
        "explanation": "(112學測英文第21題,答案為「reach for」)"
      },
      {
        "id": "english-real-112-q22",
        "origNo": 22,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (22) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 1,
        "explanation": "(112學測英文第22題,答案為「active」)"
      },
      {
        "id": "english-real-112-q23",
        "origNo": 23,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (23) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 6,
        "explanation": "(112學測英文第23題,答案為「even」)"
      },
      {
        "id": "english-real-112-q24",
        "origNo": 24,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (24) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 5,
        "explanation": "(112學測英文第24題,答案為「effective」)"
      },
      {
        "id": "english-real-112-q25",
        "origNo": 25,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (25) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 0,
        "explanation": "(112學測英文第25題,答案為「absorption」)"
      },
      {
        "id": "english-real-112-q26",
        "origNo": 26,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (26) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 7,
        "explanation": "(112學測英文第26題,答案為「status」)"
      },
      {
        "id": "english-real-112-q27",
        "origNo": 27,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (27) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 4,
        "explanation": "(112學測英文第27題,答案為「option」)"
      },
      {
        "id": "english-real-112-q28",
        "origNo": 28,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (28) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 2,
        "explanation": "(112學測英文第28題,答案為「alert」)"
      },
      {
        "id": "english-real-112-q29",
        "origNo": 29,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (29) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 8,
        "explanation": "(112學測英文第29題,答案為「pass through」)"
      },
      {
        "id": "english-real-112-q30",
        "origNo": 30,
        "sourceYear": 112,
        "part": "文意選填",
        "passageId": "english-real-112-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Water makes up more than half of our body weight. To sustain this amount of fluid in our bodies, plain water is considered our best choice, for it contains no sugar and no calories. Yet, is water always the healthiest drink we can (21)? Well, it depends on who and where we are, and what we’re doing.\nObviously, a physically (22) person with an outdoor job under the sun will need to drink more fluid than a desk-bound person who lives and works in an air-conditioned place. But there’s more to it than that. When a person sweats, he loses water and salt, so he needs to replace both. Replacing lost fluid with just plain water means the body has too much water and not enough salt. To (23) things out, the body will get rid of water by producing urine. For this reason, milk can actually be more (24) than drinking water. Milk naturally contains salt and lactose, a sugar which the human body needs in small amounts to help stimulate water (25). Coconut water, which contains salt and carbohydrates, is also more functional than water at restoring and maintaining a normal fluid (26) after exercise.\nFor the average person, however, water remains a very good (27) for keeping hydrated—if you know how to drink it. The secret is: Never wait until the body is telling you you’re thirsty, since there must already have been significant changes in your body for it to eventually (28) your consciousness. At that point, it might be well past the best moment to take in fluid. Also, drinking a lot of liquid in one go can cause more water to (29) the body quickly and come out as urine. To (30) this, you need to drink water throughout the day to maintain your hydration levels.\n(A) absorption  (B) active  (C) alert  (D) combat  (E) option  (F) effective  (G) even  (H) status  (I) pass through  (J) reach for",
        "question": "空格 (30) 應填入下列哪一個選項?",
        "options": [
          "absorption",
          "active",
          "alert",
          "combat",
          "option",
          "effective",
          "even",
          "status",
          "pass through",
          "reach for"
        ],
        "answer": 3,
        "explanation": "(112學測英文第30題,答案為「combat」)"
      },
      {
        "id": "english-real-112-q31",
        "origNo": 31,
        "sourceYear": 112,
        "part": "篇章結構",
        "passageId": "english-real-112-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Have you ever thought of “coloring” the names of the days of the week? When you listen to someone speaking, do you see a rainbow of colors? Or perhaps Mozart’s music tastes like an apple pie to you? If so, it is very likely that you have synesthesia.\nSynesthesia is a condition in which people’s senses intermix. In some cases, people with synesthesia may experience colors when they hear, read, or even think of letters and numbers. In others, words can trigger a real sensation of taste on their tongue.\n(31) In the early 1990s, however, scientists noticed that synesthetic colors do not change over time. When asked what color is evoked by a letter or number, synesthetic people would persistently give the same answer even if tested months or years apart. (32) The most compelling support, however, comes from brain scans, which show that color processing areas in the brain light up when these people listen to certain words.\nIs synesthesia genetically inherited or acquired after birth? Scientists agree that synesthesia has a genetic basis, because it frequently runs in families. But an actual synesthesia gene (or genes) has not been identified yet. (33) For example, the flavors people with taste-word synesthesia experience are usually childhood flavors, such as chocolate or strawberries. Also, people with color-music synesthesia more often than not have had early musical training.\nOnce thought to be extremely rare, synesthesia is now found to affect about one to four percent of the population. (34) As is often observed, most of us tend to associate lower notes with darker colors and higher notes with brighter colors. Researchers further point out that in most people synesthesia is active only during the first months of their infancy, while this ability remains forever in certain individuals.",
        "question": "空格 (31) 應填入下列哪一個選項?",
        "options": [
          "This consistency serves as a proof that synesthesia is real.",
          "Meanwhile, environmental influences seem to shape a person’s synesthesia.",
          "People with synesthesia used to be accused of making their experiences up.",
          "Some studies even show that people may all be synesthetic to some degree."
        ],
        "answer": 2,
        "explanation": "(112學測英文第31題,答案為「People with synesthesia used to be accused of making their experiences up.」)"
      },
      {
        "id": "english-real-112-q32",
        "origNo": 32,
        "sourceYear": 112,
        "part": "篇章結構",
        "passageId": "english-real-112-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Have you ever thought of “coloring” the names of the days of the week? When you listen to someone speaking, do you see a rainbow of colors? Or perhaps Mozart’s music tastes like an apple pie to you? If so, it is very likely that you have synesthesia.\nSynesthesia is a condition in which people’s senses intermix. In some cases, people with synesthesia may experience colors when they hear, read, or even think of letters and numbers. In others, words can trigger a real sensation of taste on their tongue.\n(31) In the early 1990s, however, scientists noticed that synesthetic colors do not change over time. When asked what color is evoked by a letter or number, synesthetic people would persistently give the same answer even if tested months or years apart. (32) The most compelling support, however, comes from brain scans, which show that color processing areas in the brain light up when these people listen to certain words.\nIs synesthesia genetically inherited or acquired after birth? Scientists agree that synesthesia has a genetic basis, because it frequently runs in families. But an actual synesthesia gene (or genes) has not been identified yet. (33) For example, the flavors people with taste-word synesthesia experience are usually childhood flavors, such as chocolate or strawberries. Also, people with color-music synesthesia more often than not have had early musical training.\nOnce thought to be extremely rare, synesthesia is now found to affect about one to four percent of the population. (34) As is often observed, most of us tend to associate lower notes with darker colors and higher notes with brighter colors. Researchers further point out that in most people synesthesia is active only during the first months of their infancy, while this ability remains forever in certain individuals.",
        "question": "空格 (32) 應填入下列哪一個選項?",
        "options": [
          "This consistency serves as a proof that synesthesia is real.",
          "Meanwhile, environmental influences seem to shape a person’s synesthesia.",
          "People with synesthesia used to be accused of making their experiences up.",
          "Some studies even show that people may all be synesthetic to some degree."
        ],
        "answer": 0,
        "explanation": "(112學測英文第32題,答案為「This consistency serves as a proof that synesthesia is real.」)"
      },
      {
        "id": "english-real-112-q33",
        "origNo": 33,
        "sourceYear": 112,
        "part": "篇章結構",
        "passageId": "english-real-112-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Have you ever thought of “coloring” the names of the days of the week? When you listen to someone speaking, do you see a rainbow of colors? Or perhaps Mozart’s music tastes like an apple pie to you? If so, it is very likely that you have synesthesia.\nSynesthesia is a condition in which people’s senses intermix. In some cases, people with synesthesia may experience colors when they hear, read, or even think of letters and numbers. In others, words can trigger a real sensation of taste on their tongue.\n(31) In the early 1990s, however, scientists noticed that synesthetic colors do not change over time. When asked what color is evoked by a letter or number, synesthetic people would persistently give the same answer even if tested months or years apart. (32) The most compelling support, however, comes from brain scans, which show that color processing areas in the brain light up when these people listen to certain words.\nIs synesthesia genetically inherited or acquired after birth? Scientists agree that synesthesia has a genetic basis, because it frequently runs in families. But an actual synesthesia gene (or genes) has not been identified yet. (33) For example, the flavors people with taste-word synesthesia experience are usually childhood flavors, such as chocolate or strawberries. Also, people with color-music synesthesia more often than not have had early musical training.\nOnce thought to be extremely rare, synesthesia is now found to affect about one to four percent of the population. (34) As is often observed, most of us tend to associate lower notes with darker colors and higher notes with brighter colors. Researchers further point out that in most people synesthesia is active only during the first months of their infancy, while this ability remains forever in certain individuals.",
        "question": "空格 (33) 應填入下列哪一個選項?",
        "options": [
          "This consistency serves as a proof that synesthesia is real.",
          "Meanwhile, environmental influences seem to shape a person’s synesthesia.",
          "People with synesthesia used to be accused of making their experiences up.",
          "Some studies even show that people may all be synesthetic to some degree."
        ],
        "answer": 1,
        "explanation": "(112學測英文第33題,答案為「Meanwhile, environmental influences seem to shape a person’s synesthesia.」)"
      },
      {
        "id": "english-real-112-q34",
        "origNo": 34,
        "sourceYear": 112,
        "part": "篇章結構",
        "passageId": "english-real-112-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Have you ever thought of “coloring” the names of the days of the week? When you listen to someone speaking, do you see a rainbow of colors? Or perhaps Mozart’s music tastes like an apple pie to you? If so, it is very likely that you have synesthesia.\nSynesthesia is a condition in which people’s senses intermix. In some cases, people with synesthesia may experience colors when they hear, read, or even think of letters and numbers. In others, words can trigger a real sensation of taste on their tongue.\n(31) In the early 1990s, however, scientists noticed that synesthetic colors do not change over time. When asked what color is evoked by a letter or number, synesthetic people would persistently give the same answer even if tested months or years apart. (32) The most compelling support, however, comes from brain scans, which show that color processing areas in the brain light up when these people listen to certain words.\nIs synesthesia genetically inherited or acquired after birth? Scientists agree that synesthesia has a genetic basis, because it frequently runs in families. But an actual synesthesia gene (or genes) has not been identified yet. (33) For example, the flavors people with taste-word synesthesia experience are usually childhood flavors, such as chocolate or strawberries. Also, people with color-music synesthesia more often than not have had early musical training.\nOnce thought to be extremely rare, synesthesia is now found to affect about one to four percent of the population. (34) As is often observed, most of us tend to associate lower notes with darker colors and higher notes with brighter colors. Researchers further point out that in most people synesthesia is active only during the first months of their infancy, while this ability remains forever in certain individuals.",
        "question": "空格 (34) 應填入下列哪一個選項?",
        "options": [
          "This consistency serves as a proof that synesthesia is real.",
          "Meanwhile, environmental influences seem to shape a person’s synesthesia.",
          "People with synesthesia used to be accused of making their experiences up.",
          "Some studies even show that people may all be synesthetic to some degree."
        ],
        "answer": 3,
        "explanation": "(112學測英文第34題,答案為「Some studies even show that people may all be synesthetic to some degree.」)"
      },
      {
        "id": "english-real-112-q35",
        "origNo": 35,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "When did people first experience the joy of the hula hoop? Although the term did not emerge until the 18th century, toy hoops twirled around the waist, limbs, or neck can be traced back to ancient times. As early as 1000 BC, Egyptian children played with hoop toys of dried grapevine. They threw, jumped, and slung them around their bodies as we do today. They also struck them with sticks to roll them down the road. Hoop rolling was also popular in ancient Greece. Their hoops, often made of metal, were not merely toys for Greek children but served as exercise devices as well.\nIn the 14th century, hoops were popular as a form of recreation in Great Britain. The craze for hoops even resulted in dislocated backs and heart attacks, according to medical records. The term “hula,” however, did not enter the English language until the 1700s, when British sailors first witnessed hula dancing in the Hawaiian Islands. Though no hoops were used, the movements of the ritual dances looked very similar to those in hooping. Thus “hula” and “hoop” came together, resulting in the term “hula hooping.”\nHoops spun their way through the cultures of pre-colonial America as well. Often considered as representing the circle of life, hoops featured prominently in the ritual dances of Native Americans. Dancers used small reed hoops as symbolic representations of animals such as eagles or snakes. With very rapid movements, they used the hoops to construct the symbolic forms around their bodies.\nThe hula hoop gained international popularity in the late 1950s, when a plastic version was successfully marketed by California’s Wham-O toy company. Twenty-five million plastic hoops were sold in less than four months. The hula hoop “fad” is still going strong today.",
        "question": "What question does the passage answer?",
        "options": [
          "How was the word “hula-hooping” derived?",
          "Why did Wham-O start making hula hoops?",
          "Where did Hawaiian hula dancing come from?",
          "What was the favorite toy of ancient Egyptian kids?"
        ],
        "answer": 0,
        "explanation": "(112學測英文第35題,答案為「How was the word “hula-hooping” derived?」)"
      },
      {
        "id": "english-real-112-q36",
        "origNo": 36,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "When did people first experience the joy of the hula hoop? Although the term did not emerge until the 18th century, toy hoops twirled around the waist, limbs, or neck can be traced back to ancient times. As early as 1000 BC, Egyptian children played with hoop toys of dried grapevine. They threw, jumped, and slung them around their bodies as we do today. They also struck them with sticks to roll them down the road. Hoop rolling was also popular in ancient Greece. Their hoops, often made of metal, were not merely toys for Greek children but served as exercise devices as well.\nIn the 14th century, hoops were popular as a form of recreation in Great Britain. The craze for hoops even resulted in dislocated backs and heart attacks, according to medical records. The term “hula,” however, did not enter the English language until the 1700s, when British sailors first witnessed hula dancing in the Hawaiian Islands. Though no hoops were used, the movements of the ritual dances looked very similar to those in hooping. Thus “hula” and “hoop” came together, resulting in the term “hula hooping.”\nHoops spun their way through the cultures of pre-colonial America as well. Often considered as representing the circle of life, hoops featured prominently in the ritual dances of Native Americans. Dancers used small reed hoops as symbolic representations of animals such as eagles or snakes. With very rapid movements, they used the hoops to construct the symbolic forms around their bodies.\nThe hula hoop gained international popularity in the late 1950s, when a plastic version was successfully marketed by California’s Wham-O toy company. Twenty-five million plastic hoops were sold in less than four months. The hula hoop “fad” is still going strong today.",
        "question": "Which of the following statements is true about use of the hoop in history?",
        "options": [
          "The British used it for medical purposes.",
          "Native Americans used it to train animals.",
          "Ancient Greeks used it as a tool for workout.",
          "Hawaiian dancers used it to represent the circle of life."
        ],
        "answer": 2,
        "explanation": "(112學測英文第36題,答案為「Ancient Greeks used it as a tool for workout.」)"
      },
      {
        "id": "english-real-112-q37",
        "origNo": 37,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "When did people first experience the joy of the hula hoop? Although the term did not emerge until the 18th century, toy hoops twirled around the waist, limbs, or neck can be traced back to ancient times. As early as 1000 BC, Egyptian children played with hoop toys of dried grapevine. They threw, jumped, and slung them around their bodies as we do today. They also struck them with sticks to roll them down the road. Hoop rolling was also popular in ancient Greece. Their hoops, often made of metal, were not merely toys for Greek children but served as exercise devices as well.\nIn the 14th century, hoops were popular as a form of recreation in Great Britain. The craze for hoops even resulted in dislocated backs and heart attacks, according to medical records. The term “hula,” however, did not enter the English language until the 1700s, when British sailors first witnessed hula dancing in the Hawaiian Islands. Though no hoops were used, the movements of the ritual dances looked very similar to those in hooping. Thus “hula” and “hoop” came together, resulting in the term “hula hooping.”\nHoops spun their way through the cultures of pre-colonial America as well. Often considered as representing the circle of life, hoops featured prominently in the ritual dances of Native Americans. Dancers used small reed hoops as symbolic representations of animals such as eagles or snakes. With very rapid movements, they used the hoops to construct the symbolic forms around their bodies.\nThe hula hoop gained international popularity in the late 1950s, when a plastic version was successfully marketed by California’s Wham-O toy company. Twenty-five million plastic hoops were sold in less than four months. The hula hoop “fad” is still going strong today.",
        "question": "Which of the following is NOT mentioned as a way of enjoying hula hoop fun?",
        "options": [
          "Striking.",
          "Twirling.",
          "Spinning.",
          "Kicking."
        ],
        "answer": 3,
        "explanation": "(112學測英文第37題,答案為「Kicking.」)"
      },
      {
        "id": "english-real-112-q38",
        "origNo": 38,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "When did people first experience the joy of the hula hoop? Although the term did not emerge until the 18th century, toy hoops twirled around the waist, limbs, or neck can be traced back to ancient times. As early as 1000 BC, Egyptian children played with hoop toys of dried grapevine. They threw, jumped, and slung them around their bodies as we do today. They also struck them with sticks to roll them down the road. Hoop rolling was also popular in ancient Greece. Their hoops, often made of metal, were not merely toys for Greek children but served as exercise devices as well.\nIn the 14th century, hoops were popular as a form of recreation in Great Britain. The craze for hoops even resulted in dislocated backs and heart attacks, according to medical records. The term “hula,” however, did not enter the English language until the 1700s, when British sailors first witnessed hula dancing in the Hawaiian Islands. Though no hoops were used, the movements of the ritual dances looked very similar to those in hooping. Thus “hula” and “hoop” came together, resulting in the term “hula hooping.”\nHoops spun their way through the cultures of pre-colonial America as well. Often considered as representing the circle of life, hoops featured prominently in the ritual dances of Native Americans. Dancers used small reed hoops as symbolic representations of animals such as eagles or snakes. With very rapid movements, they used the hoops to construct the symbolic forms around their bodies.\nThe hula hoop gained international popularity in the late 1950s, when a plastic version was successfully marketed by California’s Wham-O toy company. Twenty-five million plastic hoops were sold in less than four months. The hula hoop “fad” is still going strong today.",
        "question": "According to the passage, what materials have been used for making hoops?",
        "options": [
          "reed, grapevine, bamboo, plastic",
          "reed, grapevine, plastic, metal",
          "reed, bamboo, plastic, animal skin",
          "grapevine, plastic, metal, animal skin"
        ],
        "answer": 1,
        "explanation": "(112學測英文第38題,答案為「reed, grapevine, plastic, metal」)"
      },
      {
        "id": "english-real-112-q39",
        "origNo": 39,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "When you enjoy your morning cup of tea, you are probably not aware that those tea leaves can mean injury, or even death, for Asian elephants roaming Indian tea gardens.\nIn the Indian state of Assam, growing numbers of tea farms are destroying the Asian elephant’s habitats and endangering their population. Much of the forest land where tea is grown in Assam is flat and thus farmers must dig drainage trenches to prevent water from accumulating and hurting the shrubs. The trenches, however, can be death traps for the elephants. Since the elephants need to use tea plantations as landmarks when navigating forests, they almost inevitably have to move through the farms. Moreover, because there are fewer humans around, pregnant females often use tea-growing areas as safe shelters to give birth. But baby elephants, not used to negotiating rough ground, may easily fall into the trenches and get hurt; and once injured, they might not be able to climb out. When mothers try to dig their babies out, both may be trapped and smothered by thick mud. Furthermore, elephants are known to resist leaving their sick or dying behind, and a herd may linger at a trench with a trapped baby for hours, reluctant to move on until all hope is lost.\nIs it possible for elephants to coexist with the prosperous tea business? Elephant Friendly Tea is an organization that takes the initiative to make it possible. The organization encourages consumers to choose brands that take precautions to protect elephants and has set up a certification program to reward tea growers who are doing it right. Until now, only smaller tea brands have been certified, but awareness is growing. The organization believes that people may be motivated to buy elephant-friendly brands when they know more about the risk tea can pose to these endangered animals.",
        "question": "Why do farmers in Assam dig trenches in tea gardens?",
        "options": [
          "To protect tea trees.",
          "To trap elephants.",
          "To expand tea farms.",
          "To mark boundaries of tea gardens."
        ],
        "answer": 0,
        "explanation": "(112學測英文第39題,答案為「To protect tea trees.」)"
      },
      {
        "id": "english-real-112-q40",
        "origNo": 40,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "When you enjoy your morning cup of tea, you are probably not aware that those tea leaves can mean injury, or even death, for Asian elephants roaming Indian tea gardens.\nIn the Indian state of Assam, growing numbers of tea farms are destroying the Asian elephant’s habitats and endangering their population. Much of the forest land where tea is grown in Assam is flat and thus farmers must dig drainage trenches to prevent water from accumulating and hurting the shrubs. The trenches, however, can be death traps for the elephants. Since the elephants need to use tea plantations as landmarks when navigating forests, they almost inevitably have to move through the farms. Moreover, because there are fewer humans around, pregnant females often use tea-growing areas as safe shelters to give birth. But baby elephants, not used to negotiating rough ground, may easily fall into the trenches and get hurt; and once injured, they might not be able to climb out. When mothers try to dig their babies out, both may be trapped and smothered by thick mud. Furthermore, elephants are known to resist leaving their sick or dying behind, and a herd may linger at a trench with a trapped baby for hours, reluctant to move on until all hope is lost.\nIs it possible for elephants to coexist with the prosperous tea business? Elephant Friendly Tea is an organization that takes the initiative to make it possible. The organization encourages consumers to choose brands that take precautions to protect elephants and has set up a certification program to reward tea growers who are doing it right. Until now, only smaller tea brands have been certified, but awareness is growing. The organization believes that people may be motivated to buy elephant-friendly brands when they know more about the risk tea can pose to these endangered animals.",
        "question": "Why are baby elephants easily injured in the Assam tea gardens according to the passage?",
        "options": [
          "They cannot find a safe shelter when climbing out of the trenches.",
          "They cannot locate the landmarks while trying to navigate forests.",
          "They are trapped by the sharp branches of the tea trees.",
          "They have difficulties moving around the uneven fields."
        ],
        "answer": 3,
        "explanation": "(112學測英文第40題,答案為「They have difficulties moving around the uneven fields.」)"
      },
      {
        "id": "english-real-112-q41",
        "origNo": 41,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "When you enjoy your morning cup of tea, you are probably not aware that those tea leaves can mean injury, or even death, for Asian elephants roaming Indian tea gardens.\nIn the Indian state of Assam, growing numbers of tea farms are destroying the Asian elephant’s habitats and endangering their population. Much of the forest land where tea is grown in Assam is flat and thus farmers must dig drainage trenches to prevent water from accumulating and hurting the shrubs. The trenches, however, can be death traps for the elephants. Since the elephants need to use tea plantations as landmarks when navigating forests, they almost inevitably have to move through the farms. Moreover, because there are fewer humans around, pregnant females often use tea-growing areas as safe shelters to give birth. But baby elephants, not used to negotiating rough ground, may easily fall into the trenches and get hurt; and once injured, they might not be able to climb out. When mothers try to dig their babies out, both may be trapped and smothered by thick mud. Furthermore, elephants are known to resist leaving their sick or dying behind, and a herd may linger at a trench with a trapped baby for hours, reluctant to move on until all hope is lost.\nIs it possible for elephants to coexist with the prosperous tea business? Elephant Friendly Tea is an organization that takes the initiative to make it possible. The organization encourages consumers to choose brands that take precautions to protect elephants and has set up a certification program to reward tea growers who are doing it right. Until now, only smaller tea brands have been certified, but awareness is growing. The organization believes that people may be motivated to buy elephant-friendly brands when they know more about the risk tea can pose to these endangered animals.",
        "question": "Which of the following statements about elephants and the tea gardens is true according to the passage?",
        "options": [
          "The elephants use the trenches to roam around the tea gardens.",
          "The fast growth of the tea gardens destroys the elephants’ food source.",
          "Elephants are unwilling to leave their injured members behind in the tea gardens.",
          "Pregnant elephants avoid delivering babies in the tea gardens for fear of being disturbed."
        ],
        "answer": 2,
        "explanation": "(112學測英文第41題,答案為「Elephants are unwilling to leave their injured members behind in the tea gardens.」)"
      },
      {
        "id": "english-real-112-q42",
        "origNo": 42,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "When you enjoy your morning cup of tea, you are probably not aware that those tea leaves can mean injury, or even death, for Asian elephants roaming Indian tea gardens.\nIn the Indian state of Assam, growing numbers of tea farms are destroying the Asian elephant’s habitats and endangering their population. Much of the forest land where tea is grown in Assam is flat and thus farmers must dig drainage trenches to prevent water from accumulating and hurting the shrubs. The trenches, however, can be death traps for the elephants. Since the elephants need to use tea plantations as landmarks when navigating forests, they almost inevitably have to move through the farms. Moreover, because there are fewer humans around, pregnant females often use tea-growing areas as safe shelters to give birth. But baby elephants, not used to negotiating rough ground, may easily fall into the trenches and get hurt; and once injured, they might not be able to climb out. When mothers try to dig their babies out, both may be trapped and smothered by thick mud. Furthermore, elephants are known to resist leaving their sick or dying behind, and a herd may linger at a trench with a trapped baby for hours, reluctant to move on until all hope is lost.\nIs it possible for elephants to coexist with the prosperous tea business? Elephant Friendly Tea is an organization that takes the initiative to make it possible. The organization encourages consumers to choose brands that take precautions to protect elephants and has set up a certification program to reward tea growers who are doing it right. Until now, only smaller tea brands have been certified, but awareness is growing. The organization believes that people may be motivated to buy elephant-friendly brands when they know more about the risk tea can pose to these endangered animals.",
        "question": "What does “it” in the last paragraph refer to?",
        "options": [
          "To certify elephant-friendly trenches and organizations.",
          "To reward tea growers for protecting the environment.",
          "To encourage consumers to choose high-quality brands.",
          "To create a win-win situation for elephants and tea farms."
        ],
        "answer": 3,
        "explanation": "(112學測英文第42題,答案為「To create a win-win situation for elephants and tea farms.」)"
      },
      {
        "id": "english-real-112-q43",
        "origNo": 43,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Situated off the coast of Tanzania and washed by the warm, clean waters of the Indian Ocean, Zanzibar is a tropical archipelago comprised of several scattered islands. This popular beach destination is now famous for its white sand beaches, slender palms, and turquoise seas. But few people know that in the past, control of Zanzibar meant access to unimaginable wealth.\nFrom ancient times, Zanzibar has been a trading hotspot, thanks to its location on the trade route between Arabia and Africa. Traders from Asia had already visited the islands 900 years before the arrival of its first permanent settlers from the African mainland (around 1000 AD). In the 8th century, Persian merchants built settlements here, which grew over the next four centuries into their trading posts. Between the 12th and 15th centuries, trade increased between Arabia, Persia, and Zanzibar, bringing the archipelago both wealth and power.\nDuring the Age of Exploration, commerce in Zanzibar quickly boomed, largely due to the rise of the spice trade. At the close of the 15th century, Europeans’ craze for spices gave rise to the Spice Route, a network of sea lanes joining Europe with the Far East, where most spices came from. In 1498, Portuguese explorer Vasco da Gama made the first sea voyage to India, via the southernmost tip of Africa. In 1499, he arrived at Zanzibar, an archipelago sitting at the crossroads of the Spice Route. The islands soon attracted traders from different lands. Hundreds of ships sailing the Spice Route docked here, bringing spices and goods for transaction, and Zanzibar became one of the biggest trading centers in the world.\nSince the 16th century, Zanzibar has come under the rule of the Portuguese, the Arabians, and then the British, each leaving a mark on the place. The paths of various religions also crossed here: Muslims have lived peacefully with Christians and Buddhists on the islands for centuries. The unique cultural intersections, scented with the aroma of cloves, vanilla, and cinnamon floating in the air, give these jewels on the Indian Ocean an amazing charm that goes far beyond tropical beach fun.",
        "question": "Which of the following is true about the earliest traders in Zanzibar?",
        "options": [
          "The earliest traders arrived around 900 AD.",
          "Most of the earliest merchants came from Africa.",
          "Asian merchants arrived centuries before the African settlers.",
          "Traders from Persia settled down permanently around 1000 AD."
        ],
        "answer": 2,
        "explanation": "(112學測英文第43題,答案為「Asian merchants arrived centuries before the African settlers.」)"
      },
      {
        "id": "english-real-112-q44",
        "origNo": 44,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Situated off the coast of Tanzania and washed by the warm, clean waters of the Indian Ocean, Zanzibar is a tropical archipelago comprised of several scattered islands. This popular beach destination is now famous for its white sand beaches, slender palms, and turquoise seas. But few people know that in the past, control of Zanzibar meant access to unimaginable wealth.\nFrom ancient times, Zanzibar has been a trading hotspot, thanks to its location on the trade route between Arabia and Africa. Traders from Asia had already visited the islands 900 years before the arrival of its first permanent settlers from the African mainland (around 1000 AD). In the 8th century, Persian merchants built settlements here, which grew over the next four centuries into their trading posts. Between the 12th and 15th centuries, trade increased between Arabia, Persia, and Zanzibar, bringing the archipelago both wealth and power.\nDuring the Age of Exploration, commerce in Zanzibar quickly boomed, largely due to the rise of the spice trade. At the close of the 15th century, Europeans’ craze for spices gave rise to the Spice Route, a network of sea lanes joining Europe with the Far East, where most spices came from. In 1498, Portuguese explorer Vasco da Gama made the first sea voyage to India, via the southernmost tip of Africa. In 1499, he arrived at Zanzibar, an archipelago sitting at the crossroads of the Spice Route. The islands soon attracted traders from different lands. Hundreds of ships sailing the Spice Route docked here, bringing spices and goods for transaction, and Zanzibar became one of the biggest trading centers in the world.\nSince the 16th century, Zanzibar has come under the rule of the Portuguese, the Arabians, and then the British, each leaving a mark on the place. The paths of various religions also crossed here: Muslims have lived peacefully with Christians and Buddhists on the islands for centuries. The unique cultural intersections, scented with the aroma of cloves, vanilla, and cinnamon floating in the air, give these jewels on the Indian Ocean an amazing charm that goes far beyond tropical beach fun.",
        "question": "According to the passage, where is Zanzibar most likely located on the following map?\n[圖片示意(非官方文字):原題附一張黑白世界地圖(圖上標有 North America、South America、Europe、Africa、Asia、Atlantic Ocean、Indian Ocean、Pacific Ocean 等名稱),並以圓圈標出 A、B、C、D 四個位置作為選項,此處改以文字描述各點位置]",
        "options": [
          "[點(A)] 位於歐洲西南部與非洲西北角之間(伊比利半島/直布羅陀海峽附近,大西洋東側)",
          "[點(B)] 位於非洲東岸中段(馬達加斯加島西北方,印度洋西側海岸一帶)",
          "[點(C)] 位於亞洲南部(印度次大陸南部/孟加拉灣一帶)",
          "[點(D)] 位於非洲大陸最南端外海(南非好望角東南方的印度洋上)"
        ],
        "answer": 1,
        "explanation": "(112學測英文第44題)本題原為地圖圖示選項,已改以文字描述(非官方文字);答題依據為文章第一句:Zanzibar 位於坦尚尼亞外海、印度洋上,即非洲東岸外。"
      },
      {
        "id": "english-real-112-q45",
        "origNo": 45,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Situated off the coast of Tanzania and washed by the warm, clean waters of the Indian Ocean, Zanzibar is a tropical archipelago comprised of several scattered islands. This popular beach destination is now famous for its white sand beaches, slender palms, and turquoise seas. But few people know that in the past, control of Zanzibar meant access to unimaginable wealth.\nFrom ancient times, Zanzibar has been a trading hotspot, thanks to its location on the trade route between Arabia and Africa. Traders from Asia had already visited the islands 900 years before the arrival of its first permanent settlers from the African mainland (around 1000 AD). In the 8th century, Persian merchants built settlements here, which grew over the next four centuries into their trading posts. Between the 12th and 15th centuries, trade increased between Arabia, Persia, and Zanzibar, bringing the archipelago both wealth and power.\nDuring the Age of Exploration, commerce in Zanzibar quickly boomed, largely due to the rise of the spice trade. At the close of the 15th century, Europeans’ craze for spices gave rise to the Spice Route, a network of sea lanes joining Europe with the Far East, where most spices came from. In 1498, Portuguese explorer Vasco da Gama made the first sea voyage to India, via the southernmost tip of Africa. In 1499, he arrived at Zanzibar, an archipelago sitting at the crossroads of the Spice Route. The islands soon attracted traders from different lands. Hundreds of ships sailing the Spice Route docked here, bringing spices and goods for transaction, and Zanzibar became one of the biggest trading centers in the world.\nSince the 16th century, Zanzibar has come under the rule of the Portuguese, the Arabians, and then the British, each leaving a mark on the place. The paths of various religions also crossed here: Muslims have lived peacefully with Christians and Buddhists on the islands for centuries. The unique cultural intersections, scented with the aroma of cloves, vanilla, and cinnamon floating in the air, give these jewels on the Indian Ocean an amazing charm that goes far beyond tropical beach fun.",
        "question": "Which of the following can be inferred from the passage about Zanzibar?",
        "options": [
          "For centuries, Zanzibar has been a heaven for beach lovers.",
          "Cloves, vanilla, and cinnamon are common spices in Zanzibar.",
          "Besides spices, Zanzibar is well known for a great variety of jewelry.",
          "Vasco da Gama was Zanzibar’s first foreign ruler during the Age of Exploration."
        ],
        "answer": 1,
        "explanation": "(112學測英文第45題,答案為「Cloves, vanilla, and cinnamon are common spices in Zanzibar.」)"
      },
      {
        "id": "english-real-112-q46",
        "origNo": 46,
        "sourceYear": 112,
        "part": "閱讀測驗",
        "passageId": "english-real-112-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Situated off the coast of Tanzania and washed by the warm, clean waters of the Indian Ocean, Zanzibar is a tropical archipelago comprised of several scattered islands. This popular beach destination is now famous for its white sand beaches, slender palms, and turquoise seas. But few people know that in the past, control of Zanzibar meant access to unimaginable wealth.\nFrom ancient times, Zanzibar has been a trading hotspot, thanks to its location on the trade route between Arabia and Africa. Traders from Asia had already visited the islands 900 years before the arrival of its first permanent settlers from the African mainland (around 1000 AD). In the 8th century, Persian merchants built settlements here, which grew over the next four centuries into their trading posts. Between the 12th and 15th centuries, trade increased between Arabia, Persia, and Zanzibar, bringing the archipelago both wealth and power.\nDuring the Age of Exploration, commerce in Zanzibar quickly boomed, largely due to the rise of the spice trade. At the close of the 15th century, Europeans’ craze for spices gave rise to the Spice Route, a network of sea lanes joining Europe with the Far East, where most spices came from. In 1498, Portuguese explorer Vasco da Gama made the first sea voyage to India, via the southernmost tip of Africa. In 1499, he arrived at Zanzibar, an archipelago sitting at the crossroads of the Spice Route. The islands soon attracted traders from different lands. Hundreds of ships sailing the Spice Route docked here, bringing spices and goods for transaction, and Zanzibar became one of the biggest trading centers in the world.\nSince the 16th century, Zanzibar has come under the rule of the Portuguese, the Arabians, and then the British, each leaving a mark on the place. The paths of various religions also crossed here: Muslims have lived peacefully with Christians and Buddhists on the islands for centuries. The unique cultural intersections, scented with the aroma of cloves, vanilla, and cinnamon floating in the air, give these jewels on the Indian Ocean an amazing charm that goes far beyond tropical beach fun.",
        "question": "Which set of words is used in the passage to refer to Zanzibar?",
        "options": [
          "islands, settlements, posts, crossroads",
          "islands, posts, jewels, destination",
          "archipelago, islands, jewels, destination",
          "archipelago, settlements, paths, islands"
        ],
        "answer": 2,
        "explanation": "(112學測英文第46題,答案為「archipelago, islands, jewels, destination」)"
      },
      {
        "id": "english-real-112-q47",
        "origNo": 47,
        "sourceYear": 112,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-112-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Even if you’re not a vegetarian, there’s a good chance you’ve heard of plant-based meat. These meat substitutes are often advertised as beneficial for the environment. But do the customers really like them? Read the following chatroom discussions about GreenBurger, a product using alternative-meat patties.\n(A) Olivia\nThat’s a firm NO! I tried one when I was a prep cook for Next Level Burgers…tasted awful, just like mashed peas gone to rot.\n(B) Smith\nI haven’t tried them. I just don’t see the point. They are heavily processed with more calories and sodium than meat and are more expensive too! Unless you are a strict vegetarian and eschew meat for ethical reasons, meat is surely a better deal.\n(C) Mika\nNot really. It tastes too much like actual meat. If I wanted to eat a dead cow, I would go for real burgers. Being vegan means I try to stick to plant food. But this is just not something that will ever interest me.\n(D) Thomas\nGreenBurger just tastes “beany” to me, so I think that whatever form it comes in, it works better in recipes that would usually contain beans, such as in a rice bowl (as ground meat substitute). That being said, I’m definitely a carnivore and prefer meat, but I don’t see anything wrong with choosing one of the fakey-fakey meaty things once in a while—just for a change.\n(E) Rico\nI finally tried one last week. It didn’t taste that bad, but I was surprised to find it had 40 more calories than the meat version! Isn’t it supposed to be a healthy choice?\n(F) Linda\nI liked it fine. I did NOT like the price, though. Hopefully that will come down. I’m trying to eat less beef.\n(G) Ablo\nYes! My whole family does. We’ve been mostly vegan 90% of the time for the last 6 years and we cannot thank GreenBurger enough! Especially when a burger craving hits…a GreenBurger does the trick. I’ve tried all kinds of vegan “burgers,” and GreenBurgers are closer to what I’m looking for. In fact, I can have them every day—vegan or not!\n(H) Alexander\nWell, they taste good if you add plenty of spices and sauces. Good for you? No, not at all. They’re highly processed and contain no vegetables. They also contain a very large amount of processed coconut oil, which is even worse than lard. It’s a killer for sure if eaten regularly. So why risk your life?",
        "question": "47-48 請從文章中找出最適當的單詞(word)填入下列句子空格中,並視語法需要做適當的字形變化。每格限填一個單詞(word)。(填充,4分;第47、48格各2分)\nOn the whole, the chatroom discussions about GreenBurger mainly focus on the issues of ______(47)______, price, and ______(48)______ concerns.\n本題請作答第 47 格。",
        "explanation": "(112學測英文第47題,官方參考答案)47:taste 或 health;48 則填另一個(兩格分別為 taste 與 health,順序可互換;官方表格第47題列 taste / health,第48題列 health / taste)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-112-q48",
        "origNo": 48,
        "sourceYear": 112,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-112-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Even if you’re not a vegetarian, there’s a good chance you’ve heard of plant-based meat. These meat substitutes are often advertised as beneficial for the environment. But do the customers really like them? Read the following chatroom discussions about GreenBurger, a product using alternative-meat patties.\n(A) Olivia\nThat’s a firm NO! I tried one when I was a prep cook for Next Level Burgers…tasted awful, just like mashed peas gone to rot.\n(B) Smith\nI haven’t tried them. I just don’t see the point. They are heavily processed with more calories and sodium than meat and are more expensive too! Unless you are a strict vegetarian and eschew meat for ethical reasons, meat is surely a better deal.\n(C) Mika\nNot really. It tastes too much like actual meat. If I wanted to eat a dead cow, I would go for real burgers. Being vegan means I try to stick to plant food. But this is just not something that will ever interest me.\n(D) Thomas\nGreenBurger just tastes “beany” to me, so I think that whatever form it comes in, it works better in recipes that would usually contain beans, such as in a rice bowl (as ground meat substitute). That being said, I’m definitely a carnivore and prefer meat, but I don’t see anything wrong with choosing one of the fakey-fakey meaty things once in a while—just for a change.\n(E) Rico\nI finally tried one last week. It didn’t taste that bad, but I was surprised to find it had 40 more calories than the meat version! Isn’t it supposed to be a healthy choice?\n(F) Linda\nI liked it fine. I did NOT like the price, though. Hopefully that will come down. I’m trying to eat less beef.\n(G) Ablo\nYes! My whole family does. We’ve been mostly vegan 90% of the time for the last 6 years and we cannot thank GreenBurger enough! Especially when a burger craving hits…a GreenBurger does the trick. I’ve tried all kinds of vegan “burgers,” and GreenBurgers are closer to what I’m looking for. In fact, I can have them every day—vegan or not!\n(H) Alexander\nWell, they taste good if you add plenty of spices and sauces. Good for you? No, not at all. They’re highly processed and contain no vegetables. They also contain a very large amount of processed coconut oil, which is even worse than lard. It’s a killer for sure if eaten regularly. So why risk your life?",
        "question": "47-48 請從文章中找出最適當的單詞(word)填入下列句子空格中,並視語法需要做適當的字形變化。每格限填一個單詞(word)。(填充,4分;第47、48格各2分)\nOn the whole, the chatroom discussions about GreenBurger mainly focus on the issues of ______(47)______, price, and ______(48)______ concerns.\n本題請作答第 48 格。",
        "explanation": "(112學測英文第48題,官方參考答案)48:health 或 taste;47 則填另一個(兩格分別為 taste 與 health,順序可互換;官方表格第47題列 taste / health,第48題列 health / taste)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-112-q49",
        "origNo": 49,
        "sourceYear": 112,
        "part": "混合題",
        "type": "multi",
        "passageId": "english-real-112-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Even if you’re not a vegetarian, there’s a good chance you’ve heard of plant-based meat. These meat substitutes are often advertised as beneficial for the environment. But do the customers really like them? Read the following chatroom discussions about GreenBurger, a product using alternative-meat patties.\n(A) Olivia\nThat’s a firm NO! I tried one when I was a prep cook for Next Level Burgers…tasted awful, just like mashed peas gone to rot.\n(B) Smith\nI haven’t tried them. I just don’t see the point. They are heavily processed with more calories and sodium than meat and are more expensive too! Unless you are a strict vegetarian and eschew meat for ethical reasons, meat is surely a better deal.\n(C) Mika\nNot really. It tastes too much like actual meat. If I wanted to eat a dead cow, I would go for real burgers. Being vegan means I try to stick to plant food. But this is just not something that will ever interest me.\n(D) Thomas\nGreenBurger just tastes “beany” to me, so I think that whatever form it comes in, it works better in recipes that would usually contain beans, such as in a rice bowl (as ground meat substitute). That being said, I’m definitely a carnivore and prefer meat, but I don’t see anything wrong with choosing one of the fakey-fakey meaty things once in a while—just for a change.\n(E) Rico\nI finally tried one last week. It didn’t taste that bad, but I was surprised to find it had 40 more calories than the meat version! Isn’t it supposed to be a healthy choice?\n(F) Linda\nI liked it fine. I did NOT like the price, though. Hopefully that will come down. I’m trying to eat less beef.\n(G) Ablo\nYes! My whole family does. We’ve been mostly vegan 90% of the time for the last 6 years and we cannot thank GreenBurger enough! Especially when a burger craving hits…a GreenBurger does the trick. I’ve tried all kinds of vegan “burgers,” and GreenBurgers are closer to what I’m looking for. In fact, I can have them every day—vegan or not!\n(H) Alexander\nWell, they taste good if you add plenty of spices and sauces. Good for you? No, not at all. They’re highly processed and contain no vegetables. They also contain a very large amount of processed coconut oil, which is even worse than lard. It’s a killer for sure if eaten regularly. So why risk your life?",
        "question": "From (A) to (H) in the above chatroom discussions, which ones show that GreenBurger can be a choice for the chatroom participants themselves only under certain circumstances?(多選題,4分;選項為留言者 (A) 至 (H) 的姓名)\n(非官方註記:本站選項不標 A、B、C 代號,且順序每次隨機排列,請直接勾選符合的選項。)",
        "options": [
          "Olivia",
          "Smith",
          "Mika",
          "Thomas",
          "Rico",
          "Linda",
          "Ablo",
          "Alexander"
        ],
        "answers": [
          3,
          5
        ],
        "explanation": "(112學測英文第49題,答案為Thomas 與 Linda)"
      },
      {
        "id": "english-real-112-q50",
        "origNo": 50,
        "sourceYear": 112,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-112-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Even if you’re not a vegetarian, there’s a good chance you’ve heard of plant-based meat. These meat substitutes are often advertised as beneficial for the environment. But do the customers really like them? Read the following chatroom discussions about GreenBurger, a product using alternative-meat patties.\n(A) Olivia\nThat’s a firm NO! I tried one when I was a prep cook for Next Level Burgers…tasted awful, just like mashed peas gone to rot.\n(B) Smith\nI haven’t tried them. I just don’t see the point. They are heavily processed with more calories and sodium than meat and are more expensive too! Unless you are a strict vegetarian and eschew meat for ethical reasons, meat is surely a better deal.\n(C) Mika\nNot really. It tastes too much like actual meat. If I wanted to eat a dead cow, I would go for real burgers. Being vegan means I try to stick to plant food. But this is just not something that will ever interest me.\n(D) Thomas\nGreenBurger just tastes “beany” to me, so I think that whatever form it comes in, it works better in recipes that would usually contain beans, such as in a rice bowl (as ground meat substitute). That being said, I’m definitely a carnivore and prefer meat, but I don’t see anything wrong with choosing one of the fakey-fakey meaty things once in a while—just for a change.\n(E) Rico\nI finally tried one last week. It didn’t taste that bad, but I was surprised to find it had 40 more calories than the meat version! Isn’t it supposed to be a healthy choice?\n(F) Linda\nI liked it fine. I did NOT like the price, though. Hopefully that will come down. I’m trying to eat less beef.\n(G) Ablo\nYes! My whole family does. We’ve been mostly vegan 90% of the time for the last 6 years and we cannot thank GreenBurger enough! Especially when a burger craving hits…a GreenBurger does the trick. I’ve tried all kinds of vegan “burgers,” and GreenBurgers are closer to what I’m looking for. In fact, I can have them every day—vegan or not!\n(H) Alexander\nWell, they taste good if you add plenty of spices and sauces. Good for you? No, not at all. They’re highly processed and contain no vegetables. They also contain a very large amount of processed coconut oil, which is even worse than lard. It’s a killer for sure if eaten regularly. So why risk your life?",
        "question": "Which phrase in the chatroom discussions means “serves the purpose” or “works well”?(簡答,2分)",
        "explanation": "(112學測英文第50題,官方參考答案)does the trick(出自 (G) Ablo 的留言:“a GreenBurger does the trick”)。評分原則:完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-112-q51",
        "origNo": 51,
        "sourceYear": 112,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第1句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n歷史一再證明,戰爭會造成極為可怕的災難。",
        "explanation": "(官方編號:中譯英第1題)官方參考答案(滿分;斜線前後為皆可接受的等值譯法):History proves / has proven / has proved time and again / repeatedly that wars will cause / lead to extremely terrible / horrible disasters.。重點詞彙(官方說明):一再 = time and again / repeatedly;戰爭 = wars;造成 = cause / lead to;極(為) = extremely;可怕的 = terrible / horrible;災難 = disasters。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。所評量的字詞大致以大考中心詞彙表一至四級為主,考生只要句法使用正確,且注意用字、拼字的正確性,應能得到不錯的分數。"
      },
      {
        "id": "english-real-112-q52",
        "origNo": 52,
        "sourceYear": 112,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第2句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n避免衝突、確保世界和平應該是所有人類追求的目標。",
        "explanation": "(官方編號:中譯英第2題)官方參考答案(滿分;斜線前後為皆可接受的等值譯法):To avoid / Avoiding conflicts and ensure / ensuring world peace should be the goal pursued by all human beings.。重點詞彙(官方說明):避免 = avoid;衝突 = conflicts;確保 = ensure;世界和平 = world peace;追求 = pursue;目標 = goal。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。所評量的字詞大致以大考中心詞彙表一至四級為主,考生只要句法使用正確,且注意用字、拼字的正確性,應能得到不錯的分數。"
      },
      {
        "id": "english-real-112-q53",
        "origNo": 53,
        "sourceYear": 112,
        "part": "非選擇題",
        "type": "written",
        "question": "英文作文(20分):依提示寫一篇英文作文,文長至少120個單詞(words)。\n提示:隨著社群媒體的普及,表情符號(emoji)的使用也極為普遍。請參考下列表情符號,寫一篇英文作文,文分兩段。第一段說明人們何以喜歡使用表情符號,並從下列的表情符號中舉一至二例,說明表情符號在溝通上有何功能。第二段則以個人或親友的經驗為例,討論表情符號在訊息表達或解讀上可能造成的誤會或困擾,並提出可以化解的方法。\n[圖片示意(非官方文字,原題為四個編號的灰階表情符號圖):1:瞇著眼睛、張嘴露齒開懷大笑的笑臉;2:眉頭緊皺、嘴角下垂的生氣(不悅)臉;3:頭微傾、眼睛擠成線、張大嘴大笑並流下一滴淚的「笑到流淚」臉;4:眼睛為兩顆愛心、張嘴開心笑的愛心眼笑臉。]",
        "explanation": "(官方編號:作文)原題附1至4號共四張表情符號圖,此處以文字描述取代,並非官方文字。本題無單一參考範文,官方僅公布評分原則:官方命題說明——主題為表情符號(emoji)的使用,屬生活情境;考生須根據所提供的四張表情符號圖片,第一段說明人們何以喜歡使用表情符號,並從四個表情符號中舉一至二例說明其溝通之功能;第二段以個人或親友經驗為例,討論使用表情符號造成表達上的誤會或困擾以及化解的方法;評分重點在於內容須符合題目要求、提供充分具體之細節、句構語法及用字適切、拼字與標點符號使用得當。評分方式:依內容、組織、文法句構、字彙拼字四項表現評分,各項得分加總後給予一個整體分數(holistic score),總分1至20分,分五等級:特優(19-20分)、優(15-18分)、可(10-14分)、差(5-9分)、劣(0-4分)。字數明顯不足者扣總分1分;未分段者亦扣總分1分。評分指標(表一,每項優5-4分、可3分、差2-1分、劣0分):【內容】優:主題(句)清楚切題,並有具體、完整的相關細節支持;可:主題不夠清楚或突顯,部分相關敘述發展不全;差:主題不明,大部分相關敘述發展不全或與主題無關;劣:文不對題或沒寫(凡文不對題或沒寫者,其他各項均以零分計算)。【組織】優:重點分明,有開頭、發展、結尾,前後連貫,轉承語使用得當;可:重點安排不妥,前後發展比例與轉承語使用欠妥;差:重點不明、前後不連貫;劣:全文毫無組織或未按提示寫作。【文法、句構】優:全文幾無文法、格式、標點錯誤,文句結構富變化;可:文法、格式、標點錯誤少,且未影響文意之表達;差:文法、格式、標點錯誤多,且明顯影響文意之表達;劣:全文文法錯誤嚴重,導致文意不明。【字彙、拼字】優:用字精確、得宜,且幾無拼字、大小寫錯誤;可:字詞單調、重複,用字偶有不當,少許拼字、大小寫錯誤,但不影響文意之表達;差:用字、拼字、大小寫錯誤多,明顯影響文意之表達;劣:只寫出或抄襲與題意有關的零碎字詞。"
      }
    ],
  },
  // 113學年度學科能力測驗 英文考科 (transcribed from official CEEC PDFs, ceec.edu.tw)
  // Structure: 第壹部分 選擇題 Q1-46 (詞彙題 1-10, 綜合測驗 11-20, 文意選填 21-30, 篇章結構 31-34, 閱讀測驗 35-46);
  // 第貳部分 混合題 Q47-50 (47,48 written blanks; 49 multi-select, official answer CF; 50 written short answer);
  // 第參部分 非選擇題 = 中譯英 x2 + 英文作文 (synthetic origNo 51, 52, 53 following the last 混合題 number 50).
  // Sources:
  //   (a) 試題本: https://www.ceec.edu.tw/files/file_pool/1/0o051427482769341323/02-113%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E7%A7%91%E5%AE%9A%E7%A8%BF.pdf
  //   (b) 選擇題參考答案: https://www.ceec.edu.tw/files/file_pool/1/0O023491996471637771/02-113%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf
  //   (c) 非選擇題評分原則: https://www.ceec.edu.tw/files/file_pool/1/0O050640173462801602/03-113%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E8%80%83%E7%A7%91%E9%9D%9E%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88%E8%88%87%E8%A9%95%E5%88%86%E5%8E%9F%E5%89%87.pdf
  // Skipped questions: none (all 46 choice questions + 混合題 Q47-50 + 中譯英 x2 + 作文 included).
  // Image-dependent items converted to text: Q35 (options were four black-and-white photos of fasteners: snap buttons / hook-and-loop
  //   fastener / spiral-cord carabiner keychain / hook-and-eye tape; replaced by a non-official Chinese text description of each photo);
  //   作文 prompt (three numbered pictures captioned First Heartbreak / Caring What Others Think / Mood Swings, replaced by text description);
  //   混合題 passage (two decorative photos of jackdaws and turtle ants, noted in brackets only; not needed to answer).
  // LOW-CONFIDENCE: the Q35 photo descriptions and the 作文 picture descriptions are my own plain-text readings of the images;
  //   the official answer B for Q35 (the hook-and-loop fastener, i.e. Velcro) matches the passage (hooks clinging to loops in fabric).
  // Other notes: 混合題 is numbered 47-50 in this year's booklet (47-48 are two blanks of one sentence, 49 multi-select over six statements (A)-(F),
  //   50 short answer); 混合題 answer key: choice-answer PDF lists 47/48/50 as "／" and 49 as CF; the written-answer scoring PDF gives
  //   47 = group / collective, 48 = adapting, 50 = a predator / a fox. English booklet text was taken from the PDF text layer and checked against
  //   page images; italics/bold/superscripts in the booklet are not preserved (e.g. 19th written as "19th").
  {
    sourceYear: 113,
    minutes: 100,
    questions: [
      {
        "id": "english-real-113-q1",
        "origNo": 1,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "People who desire a ______ figure should exercise regularly and maintain healthy eating habits.",
        "options": [
          "spicy",
          "slender",
          "slight",
          "slippery"
        ],
        "answer": 1,
        "explanation": "(113學測英文第1題,答案為「slender」)"
      },
      {
        "id": "english-real-113-q2",
        "origNo": 2,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "Watching the sun ______ from a sea of clouds is a must-do activity for all visitors to Ali Mountain.",
        "options": [
          "emerging",
          "flashing",
          "rushing",
          "floating"
        ],
        "answer": 0,
        "explanation": "(113學測英文第2題,答案為「emerging」)"
      },
      {
        "id": "english-real-113-q3",
        "origNo": 3,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "Do you know what time the next bus is ______? I’ve been waiting here for more than 30 minutes.",
        "options": [
          "apt",
          "due",
          "bound",
          "docked"
        ],
        "answer": 1,
        "explanation": "(113學測英文第3題,答案為「due」)"
      },
      {
        "id": "english-real-113-q4",
        "origNo": 4,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "The roasting heat and high ______ made me feel hot and sticky, no matter what I did to cool off.",
        "options": [
          "density",
          "humidity",
          "circulation",
          "atmosphere"
        ],
        "answer": 1,
        "explanation": "(113學測英文第4題,答案為「humidity」)"
      },
      {
        "id": "english-real-113-q5",
        "origNo": 5,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "Artwork created by truly great artists such as Picasso and Monet will no doubt ______ the test of time.",
        "options": [
          "stay",
          "take",
          "serve",
          "stand"
        ],
        "answer": 3,
        "explanation": "(113學測英文第5題,答案為「stand」)"
      },
      {
        "id": "english-real-113-q6",
        "origNo": 6,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "In some countries, military service is ______ for men only; women do not have to serve in the military.",
        "options": [
          "forceful",
          "realistic",
          "compulsory",
          "distinctive"
        ],
        "answer": 2,
        "explanation": "(113學測英文第6題,答案為「compulsory」)"
      },
      {
        "id": "english-real-113-q7",
        "origNo": 7,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "The team complained that its leader always took the ______ for all the hard work done by the team members.",
        "options": [
          "advantage",
          "revenge",
          "remedy",
          "credit"
        ],
        "answer": 3,
        "explanation": "(113學測英文第7題,答案為「credit」)"
      },
      {
        "id": "english-real-113-q8",
        "origNo": 8,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "Located at the center of the city, the business hotel ______ not only good service but also convenient public transport.",
        "options": [
          "proposes",
          "contains",
          "promises",
          "confirms"
        ],
        "answer": 2,
        "explanation": "(113學測英文第8題,答案為「promises」)"
      },
      {
        "id": "english-real-113-q9",
        "origNo": 9,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "As blood supplies have fallen to a critically low level, many hospitals are making an ______ for the public to donate blood.",
        "options": [
          "appeal",
          "approach",
          "operation",
          "observation"
        ],
        "answer": 0,
        "explanation": "(113學測英文第9題,答案為「appeal」)"
      },
      {
        "id": "english-real-113-q10",
        "origNo": 10,
        "sourceYear": 113,
        "part": "詞彙題",
        "question": "David felt disappointed when he found out that he could not choose his study partners, but would be ______ placed in a study group.",
        "options": [
          "eligibly",
          "randomly",
          "apparently",
          "consequently"
        ],
        "answer": 1,
        "explanation": "(113學測英文第10題,答案為「randomly」)"
      },
      {
        "id": "english-real-113-q11",
        "origNo": 11,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "Mystery shoppers are paid consumers who are hired to shop in stores and collect data. They are sent to a wide variety of service-based businesses, including stores, restaurants, and banks—potentially anywhere customers are served. Sometimes referred to as secret shoppers, mystery shoppers (11) regular customers to purchase items, eat in restaurants, make inquiries, or return items. They grade and report on the quality of products, customer service, and environment of the stores (12) they are assigned.\nWhen evaluating a business, mystery shoppers have to follow certain standard procedures to avoid (13). They are often given a checklist that provides directions on what to observe or look out for to ensure consistency. Sometimes these shoppers collect data about their “normal” observations, such as cleanliness of the store or timeliness of the service. They may also pretend to be (14) customers, arguing with a salesperson without a good reason. With the data they collect, mystery shoppers can identify areas for (15) and thereby help enhance the quality of products and services. In this way, these secret shoppers may help a business gain a competitive edge.",
        "question": "空格 (11) 應填入下列哪一個選項?",
        "options": [
          "call for",
          "pose as",
          "attend to",
          "engage in"
        ],
        "answer": 1,
        "explanation": "(113學測英文第11題,答案為「pose as」)"
      },
      {
        "id": "english-real-113-q12",
        "origNo": 12,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "Mystery shoppers are paid consumers who are hired to shop in stores and collect data. They are sent to a wide variety of service-based businesses, including stores, restaurants, and banks—potentially anywhere customers are served. Sometimes referred to as secret shoppers, mystery shoppers (11) regular customers to purchase items, eat in restaurants, make inquiries, or return items. They grade and report on the quality of products, customer service, and environment of the stores (12) they are assigned.\nWhen evaluating a business, mystery shoppers have to follow certain standard procedures to avoid (13). They are often given a checklist that provides directions on what to observe or look out for to ensure consistency. Sometimes these shoppers collect data about their “normal” observations, such as cleanliness of the store or timeliness of the service. They may also pretend to be (14) customers, arguing with a salesperson without a good reason. With the data they collect, mystery shoppers can identify areas for (15) and thereby help enhance the quality of products and services. In this way, these secret shoppers may help a business gain a competitive edge.",
        "question": "空格 (12) 應填入下列哪一個選項?",
        "options": [
          "in that",
          "with which",
          "for that",
          "to which"
        ],
        "answer": 3,
        "explanation": "(113學測英文第12題,答案為「to which」)"
      },
      {
        "id": "english-real-113-q13",
        "origNo": 13,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "Mystery shoppers are paid consumers who are hired to shop in stores and collect data. They are sent to a wide variety of service-based businesses, including stores, restaurants, and banks—potentially anywhere customers are served. Sometimes referred to as secret shoppers, mystery shoppers (11) regular customers to purchase items, eat in restaurants, make inquiries, or return items. They grade and report on the quality of products, customer service, and environment of the stores (12) they are assigned.\nWhen evaluating a business, mystery shoppers have to follow certain standard procedures to avoid (13). They are often given a checklist that provides directions on what to observe or look out for to ensure consistency. Sometimes these shoppers collect data about their “normal” observations, such as cleanliness of the store or timeliness of the service. They may also pretend to be (14) customers, arguing with a salesperson without a good reason. With the data they collect, mystery shoppers can identify areas for (15) and thereby help enhance the quality of products and services. In this way, these secret shoppers may help a business gain a competitive edge.",
        "question": "空格 (13) 應填入下列哪一個選項?",
        "options": [
          "keen competitions",
          "financial hardship",
          "racial conflicts",
          "personal bias"
        ],
        "answer": 3,
        "explanation": "(113學測英文第13題,答案為「personal bias」)"
      },
      {
        "id": "english-real-113-q14",
        "origNo": 14,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "Mystery shoppers are paid consumers who are hired to shop in stores and collect data. They are sent to a wide variety of service-based businesses, including stores, restaurants, and banks—potentially anywhere customers are served. Sometimes referred to as secret shoppers, mystery shoppers (11) regular customers to purchase items, eat in restaurants, make inquiries, or return items. They grade and report on the quality of products, customer service, and environment of the stores (12) they are assigned.\nWhen evaluating a business, mystery shoppers have to follow certain standard procedures to avoid (13). They are often given a checklist that provides directions on what to observe or look out for to ensure consistency. Sometimes these shoppers collect data about their “normal” observations, such as cleanliness of the store or timeliness of the service. They may also pretend to be (14) customers, arguing with a salesperson without a good reason. With the data they collect, mystery shoppers can identify areas for (15) and thereby help enhance the quality of products and services. In this way, these secret shoppers may help a business gain a competitive edge.",
        "question": "空格 (14) 應填入下列哪一個選項?",
        "options": [
          "difficult",
          "potential",
          "constant",
          "anonymous"
        ],
        "answer": 0,
        "explanation": "(113學測英文第14題,答案為「difficult」)"
      },
      {
        "id": "english-real-113-q15",
        "origNo": 15,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "Mystery shoppers are paid consumers who are hired to shop in stores and collect data. They are sent to a wide variety of service-based businesses, including stores, restaurants, and banks—potentially anywhere customers are served. Sometimes referred to as secret shoppers, mystery shoppers (11) regular customers to purchase items, eat in restaurants, make inquiries, or return items. They grade and report on the quality of products, customer service, and environment of the stores (12) they are assigned.\nWhen evaluating a business, mystery shoppers have to follow certain standard procedures to avoid (13). They are often given a checklist that provides directions on what to observe or look out for to ensure consistency. Sometimes these shoppers collect data about their “normal” observations, such as cleanliness of the store or timeliness of the service. They may also pretend to be (14) customers, arguing with a salesperson without a good reason. With the data they collect, mystery shoppers can identify areas for (15) and thereby help enhance the quality of products and services. In this way, these secret shoppers may help a business gain a competitive edge.",
        "question": "空格 (15) 應填入下列哪一個選項?",
        "options": [
          "distribution",
          "expectation",
          "improvement",
          "management"
        ],
        "answer": 2,
        "explanation": "(113學測英文第15題,答案為「improvement」)"
      },
      {
        "id": "english-real-113-q16",
        "origNo": 16,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The modern worker rolls out of bed, groans, and turns off an alarm clock before reluctantly getting up for the day’s work. But how did people get to work on time before alarm clocks were widely used?\nDuring the second Industrial Age, people toiled at unusual hours in mines or factories and often had to get up for work early in the morning. They (16) alarm clocks because adjustable alarms had been invented by the mid-19th century. But the new device was still relatively expensive and unreliable. British workers thus relied on a human alarm clock known as a “knocker-up.” (17) sticks or pea shooters, the human alarms would tour the streets, tap on windows, or blast them with dried peas, trying to wake paying customers in time for work.\nWhether they wielded rods or pea shooters, knockers-up became (18) throughout the United Kingdom. Every morning, these people, often older in age, were seen in big streets and small alleys, waking up their customers professionally. They usually would not leave people’s houses until they were sure their customers were awake.\nWhile the practice continued in some parts of the country until the 1970s, it (19) as alarm clocks became more widespread and affordable. Today, beeping alarm clocks and smartphones that play morning music are surely simpler and more convenient. However, they cannot (20) the personal attention coming from the distinctive tap of a pea shooter.",
        "question": "空格 (16) 應填入下列哪一個選項?",
        "options": [
          "must be using",
          "could have used",
          "had hardly used",
          "were mostly using"
        ],
        "answer": 1,
        "explanation": "(113學測英文第16題,答案為「could have used」)"
      },
      {
        "id": "english-real-113-q17",
        "origNo": 17,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The modern worker rolls out of bed, groans, and turns off an alarm clock before reluctantly getting up for the day’s work. But how did people get to work on time before alarm clocks were widely used?\nDuring the second Industrial Age, people toiled at unusual hours in mines or factories and often had to get up for work early in the morning. They (16) alarm clocks because adjustable alarms had been invented by the mid-19th century. But the new device was still relatively expensive and unreliable. British workers thus relied on a human alarm clock known as a “knocker-up.” (17) sticks or pea shooters, the human alarms would tour the streets, tap on windows, or blast them with dried peas, trying to wake paying customers in time for work.\nWhether they wielded rods or pea shooters, knockers-up became (18) throughout the United Kingdom. Every morning, these people, often older in age, were seen in big streets and small alleys, waking up their customers professionally. They usually would not leave people’s houses until they were sure their customers were awake.\nWhile the practice continued in some parts of the country until the 1970s, it (19) as alarm clocks became more widespread and affordable. Today, beeping alarm clocks and smartphones that play morning music are surely simpler and more convenient. However, they cannot (20) the personal attention coming from the distinctive tap of a pea shooter.",
        "question": "空格 (17) 應填入下列哪一個選項?",
        "options": [
          "Aimed at",
          "Trained for",
          "Equipped with",
          "Exhausted by"
        ],
        "answer": 2,
        "explanation": "(113學測英文第17題,答案為「Equipped with」)"
      },
      {
        "id": "english-real-113-q18",
        "origNo": 18,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The modern worker rolls out of bed, groans, and turns off an alarm clock before reluctantly getting up for the day’s work. But how did people get to work on time before alarm clocks were widely used?\nDuring the second Industrial Age, people toiled at unusual hours in mines or factories and often had to get up for work early in the morning. They (16) alarm clocks because adjustable alarms had been invented by the mid-19th century. But the new device was still relatively expensive and unreliable. British workers thus relied on a human alarm clock known as a “knocker-up.” (17) sticks or pea shooters, the human alarms would tour the streets, tap on windows, or blast them with dried peas, trying to wake paying customers in time for work.\nWhether they wielded rods or pea shooters, knockers-up became (18) throughout the United Kingdom. Every morning, these people, often older in age, were seen in big streets and small alleys, waking up their customers professionally. They usually would not leave people’s houses until they were sure their customers were awake.\nWhile the practice continued in some parts of the country until the 1970s, it (19) as alarm clocks became more widespread and affordable. Today, beeping alarm clocks and smartphones that play morning music are surely simpler and more convenient. However, they cannot (20) the personal attention coming from the distinctive tap of a pea shooter.",
        "question": "空格 (18) 應填入下列哪一個選項?",
        "options": [
          "familiar presences",
          "distant memories",
          "vague images",
          "public eyesores"
        ],
        "answer": 0,
        "explanation": "(113學測英文第18題,答案為「familiar presences」)"
      },
      {
        "id": "english-real-113-q19",
        "origNo": 19,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The modern worker rolls out of bed, groans, and turns off an alarm clock before reluctantly getting up for the day’s work. But how did people get to work on time before alarm clocks were widely used?\nDuring the second Industrial Age, people toiled at unusual hours in mines or factories and often had to get up for work early in the morning. They (16) alarm clocks because adjustable alarms had been invented by the mid-19th century. But the new device was still relatively expensive and unreliable. British workers thus relied on a human alarm clock known as a “knocker-up.” (17) sticks or pea shooters, the human alarms would tour the streets, tap on windows, or blast them with dried peas, trying to wake paying customers in time for work.\nWhether they wielded rods or pea shooters, knockers-up became (18) throughout the United Kingdom. Every morning, these people, often older in age, were seen in big streets and small alleys, waking up their customers professionally. They usually would not leave people’s houses until they were sure their customers were awake.\nWhile the practice continued in some parts of the country until the 1970s, it (19) as alarm clocks became more widespread and affordable. Today, beeping alarm clocks and smartphones that play morning music are surely simpler and more convenient. However, they cannot (20) the personal attention coming from the distinctive tap of a pea shooter.",
        "question": "空格 (19) 應填入下列哪一個選項?",
        "options": [
          "remained",
          "dismissed",
          "revised",
          "declined"
        ],
        "answer": 3,
        "explanation": "(113學測英文第19題,答案為「declined」)"
      },
      {
        "id": "english-real-113-q20",
        "origNo": 20,
        "sourceYear": 113,
        "part": "綜合測驗",
        "passageId": "english-real-113-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The modern worker rolls out of bed, groans, and turns off an alarm clock before reluctantly getting up for the day’s work. But how did people get to work on time before alarm clocks were widely used?\nDuring the second Industrial Age, people toiled at unusual hours in mines or factories and often had to get up for work early in the morning. They (16) alarm clocks because adjustable alarms had been invented by the mid-19th century. But the new device was still relatively expensive and unreliable. British workers thus relied on a human alarm clock known as a “knocker-up.” (17) sticks or pea shooters, the human alarms would tour the streets, tap on windows, or blast them with dried peas, trying to wake paying customers in time for work.\nWhether they wielded rods or pea shooters, knockers-up became (18) throughout the United Kingdom. Every morning, these people, often older in age, were seen in big streets and small alleys, waking up their customers professionally. They usually would not leave people’s houses until they were sure their customers were awake.\nWhile the practice continued in some parts of the country until the 1970s, it (19) as alarm clocks became more widespread and affordable. Today, beeping alarm clocks and smartphones that play morning music are surely simpler and more convenient. However, they cannot (20) the personal attention coming from the distinctive tap of a pea shooter.",
        "question": "空格 (20) 應填入下列哪一個選項?",
        "options": [
          "forget",
          "change",
          "match",
          "regret"
        ],
        "answer": 2,
        "explanation": "(113學測英文第20題,答案為「match」)"
      },
      {
        "id": "english-real-113-q21",
        "origNo": 21,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (21) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 4,
        "explanation": "(113學測英文第21題,答案為「departed」)"
      },
      {
        "id": "english-real-113-q22",
        "origNo": 22,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (22) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 8,
        "explanation": "(113學測英文第22題,答案為「fateful」)"
      },
      {
        "id": "english-real-113-q23",
        "origNo": 23,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (23) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 9,
        "explanation": "(113學測英文第23題,答案為「brought forth」)"
      },
      {
        "id": "english-real-113-q24",
        "origNo": 24,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (24) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 2,
        "explanation": "(113學測英文第24題,答案為「sorrow」)"
      },
      {
        "id": "english-real-113-q25",
        "origNo": 25,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (25) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 6,
        "explanation": "(113學測英文第25題,答案為「housed」)"
      },
      {
        "id": "english-real-113-q26",
        "origNo": 26,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (26) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 0,
        "explanation": "(113學測英文第26題,答案為「passed on」)"
      },
      {
        "id": "english-real-113-q27",
        "origNo": 27,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (27) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 7,
        "explanation": "(113學測英文第27題,答案為「manageable」)"
      },
      {
        "id": "english-real-113-q28",
        "origNo": 28,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (28) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 1,
        "explanation": "(113學測英文第28題,答案為「bridge」)"
      },
      {
        "id": "english-real-113-q29",
        "origNo": 29,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (29) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 5,
        "explanation": "(113學測英文第29題,答案為「mechanism」)"
      },
      {
        "id": "english-real-113-q30",
        "origNo": 30,
        "sourceYear": 113,
        "part": "文意選填",
        "passageId": "english-real-113-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "On a hilltop overlooking the 2011-tsunami hit Otsuchi Town in northeastern Japan, there is a white phone booth standing all alone in the wind. The lonely “wind phone” serves to connect family members to their (21) loved ones who died in the tsunami that claimed 18,000 lives. People come to speak to those they have lost, to say the words they never got to say on that (22) day.\nThe idea for the wind phone was first (23) by a Japanese garden designer named Itaru Sasaki, who was grieving over the death of his cousin in 2010, before the tsunami. Feeling that he needed a private space to help him navigate through the (24), Sasaki positioned a booth where he could “speak” to the dead relative. The booth he built (25) only an old dial phone with a disconnected phone line. When he stepped into the booth, he could pick up the phone to call his cousin, telling him how he was, and how he missed him. Sasaki stated in an interview: “Because my thoughts couldn’t be (26) through a regular phone line, I wanted them to be carried on the wind.” Hence, the wind phone allows Sasaki to create a one-way conversation with deep, soulful personal meaning, and renders the grieving process more (27) for him.\nSasaki opened his wind phone to the public in 2011, after the devastating tsunami. News about the phone gradually spread, and the booth has become a (28) between the living and the dead. Phones resembling the wind phone have since been built around the world. Some were even set up to allow people to call their loved ones lost in the COVID-19 pandemic.\nGrieving is a natural (29) for coping with loss of a loved one, and people grieve in various ways. For those who speak into the wind phone, (30) is always there: They believe that their messages will—through some unknown way—reach the deceased.\n(A) passed on  (B) bridge  (C) sorrow  (D) hope  (E) departed  (F) mechanism  (G) housed  (H) manageable  (I) fateful  (J) brought forth",
        "question": "空格 (30) 應填入下列哪一個選項?",
        "options": [
          "passed on",
          "bridge",
          "sorrow",
          "hope",
          "departed",
          "mechanism",
          "housed",
          "manageable",
          "fateful",
          "brought forth"
        ],
        "answer": 3,
        "explanation": "(113學測英文第30題,答案為「hope」)"
      },
      {
        "id": "english-real-113-q31",
        "origNo": 31,
        "sourceYear": 113,
        "part": "篇章結構",
        "passageId": "english-real-113-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "While Dr. Weinstein, a surgeon at Dartmouth College, was trying to lift a heavy box, he twisted his back. The pain was agonizing. The surgeon could not sit, and when he lay down he could barely get up. So he decided to go out for a run. He took an aspirin, iced the injured area, and off he went. When he returned, he felt “pretty good.”\n(31) When people have sprained a muscle or tendon, they are usually advised not to go right back to exercising until the pain goes away. But Dr. Weinstein says that approach is outdated and counterproductive. In fact, when active people consult him, he usually tells them to just keep exercising.\nDr. Weinstein is not alone in his treatment of sports injury, but the specific advice can differ from specialist to specialist. (32) They nevertheless caution that a cutback may be necessary, such as running shorter distances or going more slowly. Others say the patients may need to engage in sports outside of their usual, main sport (that is, to cross-train), at least some of the time. Still others say the safest thing to do is cross-train all the time until the pain is gone. (33) Their consensus, however, is that unless the injury involves something as serious as a broken bone or a ripped muscle, moderate exercise can actually speed healing.\n(34) Thus, more and more patients are now advised to keep moving despite the pain. The rule of thumb, however, is to see a doctor first and get an accurate diagnosis. If a serious injury is ruled out and the pain is not getting worse after exercising, then the exercise “makes a lot of sense.”",
        "question": "空格 (31) 應填入下列哪一個選項?",
        "options": [
          "For example, an injured runner might end up cycling and swimming instead of running.",
          "Over time, researchers have come to realize the importance of exercising when injured.",
          "Many suggest that most patients can continue with the sport they love.",
          "This seems to run counter to the common practice."
        ],
        "answer": 3,
        "explanation": "(113學測英文第31題,答案為「This seems to run counter to the common practice.」)"
      },
      {
        "id": "english-real-113-q32",
        "origNo": 32,
        "sourceYear": 113,
        "part": "篇章結構",
        "passageId": "english-real-113-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "While Dr. Weinstein, a surgeon at Dartmouth College, was trying to lift a heavy box, he twisted his back. The pain was agonizing. The surgeon could not sit, and when he lay down he could barely get up. So he decided to go out for a run. He took an aspirin, iced the injured area, and off he went. When he returned, he felt “pretty good.”\n(31) When people have sprained a muscle or tendon, they are usually advised not to go right back to exercising until the pain goes away. But Dr. Weinstein says that approach is outdated and counterproductive. In fact, when active people consult him, he usually tells them to just keep exercising.\nDr. Weinstein is not alone in his treatment of sports injury, but the specific advice can differ from specialist to specialist. (32) They nevertheless caution that a cutback may be necessary, such as running shorter distances or going more slowly. Others say the patients may need to engage in sports outside of their usual, main sport (that is, to cross-train), at least some of the time. Still others say the safest thing to do is cross-train all the time until the pain is gone. (33) Their consensus, however, is that unless the injury involves something as serious as a broken bone or a ripped muscle, moderate exercise can actually speed healing.\n(34) Thus, more and more patients are now advised to keep moving despite the pain. The rule of thumb, however, is to see a doctor first and get an accurate diagnosis. If a serious injury is ruled out and the pain is not getting worse after exercising, then the exercise “makes a lot of sense.”",
        "question": "空格 (32) 應填入下列哪一個選項?",
        "options": [
          "For example, an injured runner might end up cycling and swimming instead of running.",
          "Over time, researchers have come to realize the importance of exercising when injured.",
          "Many suggest that most patients can continue with the sport they love.",
          "This seems to run counter to the common practice."
        ],
        "answer": 2,
        "explanation": "(113學測英文第32題,答案為「Many suggest that most patients can continue with the sport they love.」)"
      },
      {
        "id": "english-real-113-q33",
        "origNo": 33,
        "sourceYear": 113,
        "part": "篇章結構",
        "passageId": "english-real-113-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "While Dr. Weinstein, a surgeon at Dartmouth College, was trying to lift a heavy box, he twisted his back. The pain was agonizing. The surgeon could not sit, and when he lay down he could barely get up. So he decided to go out for a run. He took an aspirin, iced the injured area, and off he went. When he returned, he felt “pretty good.”\n(31) When people have sprained a muscle or tendon, they are usually advised not to go right back to exercising until the pain goes away. But Dr. Weinstein says that approach is outdated and counterproductive. In fact, when active people consult him, he usually tells them to just keep exercising.\nDr. Weinstein is not alone in his treatment of sports injury, but the specific advice can differ from specialist to specialist. (32) They nevertheless caution that a cutback may be necessary, such as running shorter distances or going more slowly. Others say the patients may need to engage in sports outside of their usual, main sport (that is, to cross-train), at least some of the time. Still others say the safest thing to do is cross-train all the time until the pain is gone. (33) Their consensus, however, is that unless the injury involves something as serious as a broken bone or a ripped muscle, moderate exercise can actually speed healing.\n(34) Thus, more and more patients are now advised to keep moving despite the pain. The rule of thumb, however, is to see a doctor first and get an accurate diagnosis. If a serious injury is ruled out and the pain is not getting worse after exercising, then the exercise “makes a lot of sense.”",
        "question": "空格 (33) 應填入下列哪一個選項?",
        "options": [
          "For example, an injured runner might end up cycling and swimming instead of running.",
          "Over time, researchers have come to realize the importance of exercising when injured.",
          "Many suggest that most patients can continue with the sport they love.",
          "This seems to run counter to the common practice."
        ],
        "answer": 0,
        "explanation": "(113學測英文第33題,答案為「For example, an injured runner might end up cycling and swimming instead of running.」)"
      },
      {
        "id": "english-real-113-q34",
        "origNo": 34,
        "sourceYear": 113,
        "part": "篇章結構",
        "passageId": "english-real-113-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "While Dr. Weinstein, a surgeon at Dartmouth College, was trying to lift a heavy box, he twisted his back. The pain was agonizing. The surgeon could not sit, and when he lay down he could barely get up. So he decided to go out for a run. He took an aspirin, iced the injured area, and off he went. When he returned, he felt “pretty good.”\n(31) When people have sprained a muscle or tendon, they are usually advised not to go right back to exercising until the pain goes away. But Dr. Weinstein says that approach is outdated and counterproductive. In fact, when active people consult him, he usually tells them to just keep exercising.\nDr. Weinstein is not alone in his treatment of sports injury, but the specific advice can differ from specialist to specialist. (32) They nevertheless caution that a cutback may be necessary, such as running shorter distances or going more slowly. Others say the patients may need to engage in sports outside of their usual, main sport (that is, to cross-train), at least some of the time. Still others say the safest thing to do is cross-train all the time until the pain is gone. (33) Their consensus, however, is that unless the injury involves something as serious as a broken bone or a ripped muscle, moderate exercise can actually speed healing.\n(34) Thus, more and more patients are now advised to keep moving despite the pain. The rule of thumb, however, is to see a doctor first and get an accurate diagnosis. If a serious injury is ruled out and the pain is not getting worse after exercising, then the exercise “makes a lot of sense.”",
        "question": "空格 (34) 應填入下列哪一個選項?",
        "options": [
          "For example, an injured runner might end up cycling and swimming instead of running.",
          "Over time, researchers have come to realize the importance of exercising when injured.",
          "Many suggest that most patients can continue with the sport they love.",
          "This seems to run counter to the common practice."
        ],
        "answer": 1,
        "explanation": "(113學測英文第34題,答案為「Over time, researchers have come to realize the importance of exercising when injured.」)"
      },
      {
        "id": "english-real-113-q35",
        "origNo": 35,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "One fine morning in 1941, Swiss engineer George de Mestral went for a walk in the woods with his dog. Upon their return home, he found a lot of burrs (from plants) stuck to the dog’s fur and his pants. He immediately rushed to his microscope and examined the burrs attached on his pants—feeling a lightbulb moment coming on.\nUpon closer examination, de Mestral observed that the burrs, which appeared straight to the naked eye, actually contained many small hooks that clung firmly to the loops in the fabric of his pants. He determined that if he could recreate the same thing, making hooks-and-loops that bind to each other firmly, he could produce a strong fastener with many uses.\nDe Mestral’s first challenge was finding a fabric for a strong bonding system. He first tried cotton, but it proved too soft and could not withstand repeated openings and closures. After years of research and testing, he learned that synthetics worked best and eventually settled on heat-treated nylon, a strong and durable substance. By 1955, he had completed an improved version of the product, with each square inch of material containing 300 hooks, which made it stay fastened and yet easy enough to pull apart when needed. Named “Velcro,” from the French words velours (velvet) and crochet (hook), the new product received a patent from the Swiss government in 1955. De Mestral thus began mass-producing Velcro, opening plants in Europe and eventually into Canada and the United States.\nInitially Velcro did not fare well. As most fashion critics considered it ugly and cheap-looking, the use of Velcro was limited to athletic equipment. In the early 1960s, the product received a huge boost in popularity when NASA began using it in a lot of equipment that went into space along with astronauts. Today, de Mestral’s design is found almost everywhere: clothing and footwear, toys, airline seat cushions, blood pressure cuffs and surgeons’ gowns. Most impressively, the magical fastener was used in the first human artificial heart transplantation to hold together parts of the device.",
        "question": "Which of the following pictures shows de Mestral’s invention?\n[圖片示意(非官方文字):原題四個選項皆為黑白照片(每張附一張局部放大的小插圖),此處改以文字描述各張照片]",
        "options": [
          "[圖(A)] 縫在布料上的金屬按扣(四合扣/壓扣),旁附一張已拆開的按扣零件小圖",
          "[圖(B)] 一隻手正把兩片粗糙的絨毛/勾狀布條(魔鬼氈,即 hook-and-loop fastener)撕開,旁附一張魔鬼氈表面的放大小圖",
          "[圖(C)] 雙手拿著掛有金屬扣環(登山扣/鑰匙圈扣)的螺旋彈簧線圈繩(彈簧鑰匙圈),旁附數條同款彈簧扣環繩的小圖",
          "[圖(D)] 雙手拿著一條白色布帶,上面縫有金屬掛鉤與扣環(鉤眼扣,如內衣背扣),旁附鉤眼扣布帶的小圖"
        ],
        "answer": 1,
        "explanation": "(113學測英文第35題)本題原為四張照片選項,已改以文字描述(非官方文字);答題依據為文章:de Mestral 的發明是以「小勾(hooks)牢牢鉤住布料上的環(loops)」的原理製成的魔鬼氈(Velcro),即 hook-and-loop 扣件。"
      },
      {
        "id": "english-real-113-q36",
        "origNo": 36,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "One fine morning in 1941, Swiss engineer George de Mestral went for a walk in the woods with his dog. Upon their return home, he found a lot of burrs (from plants) stuck to the dog’s fur and his pants. He immediately rushed to his microscope and examined the burrs attached on his pants—feeling a lightbulb moment coming on.\nUpon closer examination, de Mestral observed that the burrs, which appeared straight to the naked eye, actually contained many small hooks that clung firmly to the loops in the fabric of his pants. He determined that if he could recreate the same thing, making hooks-and-loops that bind to each other firmly, he could produce a strong fastener with many uses.\nDe Mestral’s first challenge was finding a fabric for a strong bonding system. He first tried cotton, but it proved too soft and could not withstand repeated openings and closures. After years of research and testing, he learned that synthetics worked best and eventually settled on heat-treated nylon, a strong and durable substance. By 1955, he had completed an improved version of the product, with each square inch of material containing 300 hooks, which made it stay fastened and yet easy enough to pull apart when needed. Named “Velcro,” from the French words velours (velvet) and crochet (hook), the new product received a patent from the Swiss government in 1955. De Mestral thus began mass-producing Velcro, opening plants in Europe and eventually into Canada and the United States.\nInitially Velcro did not fare well. As most fashion critics considered it ugly and cheap-looking, the use of Velcro was limited to athletic equipment. In the early 1960s, the product received a huge boost in popularity when NASA began using it in a lot of equipment that went into space along with astronauts. Today, de Mestral’s design is found almost everywhere: clothing and footwear, toys, airline seat cushions, blood pressure cuffs and surgeons’ gowns. Most impressively, the magical fastener was used in the first human artificial heart transplantation to hold together parts of the device.",
        "question": "What does the author mean by “a lightbulb moment” in the first paragraph?",
        "options": [
          "A blessing in disguise.",
          "A happy ending.",
          "An unpredictable future.",
          "A sudden inspiration."
        ],
        "answer": 3,
        "explanation": "(113學測英文第36題,答案為「A sudden inspiration.」)"
      },
      {
        "id": "english-real-113-q37",
        "origNo": 37,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "One fine morning in 1941, Swiss engineer George de Mestral went for a walk in the woods with his dog. Upon their return home, he found a lot of burrs (from plants) stuck to the dog’s fur and his pants. He immediately rushed to his microscope and examined the burrs attached on his pants—feeling a lightbulb moment coming on.\nUpon closer examination, de Mestral observed that the burrs, which appeared straight to the naked eye, actually contained many small hooks that clung firmly to the loops in the fabric of his pants. He determined that if he could recreate the same thing, making hooks-and-loops that bind to each other firmly, he could produce a strong fastener with many uses.\nDe Mestral’s first challenge was finding a fabric for a strong bonding system. He first tried cotton, but it proved too soft and could not withstand repeated openings and closures. After years of research and testing, he learned that synthetics worked best and eventually settled on heat-treated nylon, a strong and durable substance. By 1955, he had completed an improved version of the product, with each square inch of material containing 300 hooks, which made it stay fastened and yet easy enough to pull apart when needed. Named “Velcro,” from the French words velours (velvet) and crochet (hook), the new product received a patent from the Swiss government in 1955. De Mestral thus began mass-producing Velcro, opening plants in Europe and eventually into Canada and the United States.\nInitially Velcro did not fare well. As most fashion critics considered it ugly and cheap-looking, the use of Velcro was limited to athletic equipment. In the early 1960s, the product received a huge boost in popularity when NASA began using it in a lot of equipment that went into space along with astronauts. Today, de Mestral’s design is found almost everywhere: clothing and footwear, toys, airline seat cushions, blood pressure cuffs and surgeons’ gowns. Most impressively, the magical fastener was used in the first human artificial heart transplantation to hold together parts of the device.",
        "question": "Which of the following statements about Velcro is true?",
        "options": [
          "It has been a market favorite since its first appearance.",
          "Cotton was not durable enough to be used as its materials.",
          "It was given a French name because it was first produced in France.",
          "The design was intended to look as shiny and smooth as velvet."
        ],
        "answer": 1,
        "explanation": "(113學測英文第37題,答案為「Cotton was not durable enough to be used as its materials.」)"
      },
      {
        "id": "english-real-113-q38",
        "origNo": 38,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "One fine morning in 1941, Swiss engineer George de Mestral went for a walk in the woods with his dog. Upon their return home, he found a lot of burrs (from plants) stuck to the dog’s fur and his pants. He immediately rushed to his microscope and examined the burrs attached on his pants—feeling a lightbulb moment coming on.\nUpon closer examination, de Mestral observed that the burrs, which appeared straight to the naked eye, actually contained many small hooks that clung firmly to the loops in the fabric of his pants. He determined that if he could recreate the same thing, making hooks-and-loops that bind to each other firmly, he could produce a strong fastener with many uses.\nDe Mestral’s first challenge was finding a fabric for a strong bonding system. He first tried cotton, but it proved too soft and could not withstand repeated openings and closures. After years of research and testing, he learned that synthetics worked best and eventually settled on heat-treated nylon, a strong and durable substance. By 1955, he had completed an improved version of the product, with each square inch of material containing 300 hooks, which made it stay fastened and yet easy enough to pull apart when needed. Named “Velcro,” from the French words velours (velvet) and crochet (hook), the new product received a patent from the Swiss government in 1955. De Mestral thus began mass-producing Velcro, opening plants in Europe and eventually into Canada and the United States.\nInitially Velcro did not fare well. As most fashion critics considered it ugly and cheap-looking, the use of Velcro was limited to athletic equipment. In the early 1960s, the product received a huge boost in popularity when NASA began using it in a lot of equipment that went into space along with astronauts. Today, de Mestral’s design is found almost everywhere: clothing and footwear, toys, airline seat cushions, blood pressure cuffs and surgeons’ gowns. Most impressively, the magical fastener was used in the first human artificial heart transplantation to hold together parts of the device.",
        "question": "Which of the following fields is NOT mentioned for Velcro uses in the passage?",
        "options": [
          "Civil engineering.",
          "Aerospace industry.",
          "Medical technology.",
          "Sports and recreation."
        ],
        "answer": 0,
        "explanation": "(113學測英文第38題,答案為「Civil engineering.」)"
      },
      {
        "id": "english-real-113-q39",
        "origNo": 39,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "Thomas Moran, a famous painter in the 19th century, played an important role in the establishment of American national parks. His vivid paintings brought the splendor of the extraordinary landscapes before the eyes of American people, thus setting the stage for the regions to be widely recognized and officially established as national parks.\nMoran came to the United States at age 7 with his family and settled in Philadelphia. They came from northwest England, the blackened heart of the Industrial Revolution: Its main street was “a dark, unattractive hole” and the river running through it was a string of dirty water. That was all the nature that Moran knew. Moran began painting by age 15, inspired by the landscape paintings of the British master J.M.W. Turner. There was plenty of landscape for him to paint in America, much different from his hometown. Showing great talent in painting, Moran was soon hired as an illustrator at Scribner’s Monthly, and later appointed chief illustrator by age 34. In 1871, he was appointed to illustrate The Wonders of Yellowstone, a story by Nathaniel P. Langford, who had participated in an expedition to Yellowstone. Captivated by the utterly fantastic sights Langford described, Moran became eager to see this odd territory for himself.\nIn 1871 Moran joined the first US government survey of the Yellowstone region with photographer William Henry Jackson. For two weeks he filled his sketchbook with the landscape’s most stunning sights. Moran’s watercolors—the first color renderings of the area—as well as Jackson’s photos and the survey results were presented to the Congress. His powerful images of Yellowstone fired the imagination of Congress members. In March 1872, lawmakers officially made Yellowstone a national park, the world’s first.\nBefore Moran arrived, Yellowstone in the popular imagination was a harsh, wild place with hot water and steam coming out of hellish holes in the ground. Since the painter’s work appeared, Yellowstone National Park has come to be known as a picturesque wonderland. By the time Moran died, he had painted a dozen other areas that would become national parks or monuments.",
        "question": "What can we learn from the passage?",
        "options": [
          "How national parks around the world were established.",
          "How Yellowstone’s natural features were formed.",
          "Why Moran’s family moved to the United States.",
          "Why Moran started painting Yellowstone."
        ],
        "answer": 3,
        "explanation": "(113學測英文第39題,答案為「Why Moran started painting Yellowstone.」)"
      },
      {
        "id": "english-real-113-q40",
        "origNo": 40,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "Thomas Moran, a famous painter in the 19th century, played an important role in the establishment of American national parks. His vivid paintings brought the splendor of the extraordinary landscapes before the eyes of American people, thus setting the stage for the regions to be widely recognized and officially established as national parks.\nMoran came to the United States at age 7 with his family and settled in Philadelphia. They came from northwest England, the blackened heart of the Industrial Revolution: Its main street was “a dark, unattractive hole” and the river running through it was a string of dirty water. That was all the nature that Moran knew. Moran began painting by age 15, inspired by the landscape paintings of the British master J.M.W. Turner. There was plenty of landscape for him to paint in America, much different from his hometown. Showing great talent in painting, Moran was soon hired as an illustrator at Scribner’s Monthly, and later appointed chief illustrator by age 34. In 1871, he was appointed to illustrate The Wonders of Yellowstone, a story by Nathaniel P. Langford, who had participated in an expedition to Yellowstone. Captivated by the utterly fantastic sights Langford described, Moran became eager to see this odd territory for himself.\nIn 1871 Moran joined the first US government survey of the Yellowstone region with photographer William Henry Jackson. For two weeks he filled his sketchbook with the landscape’s most stunning sights. Moran’s watercolors—the first color renderings of the area—as well as Jackson’s photos and the survey results were presented to the Congress. His powerful images of Yellowstone fired the imagination of Congress members. In March 1872, lawmakers officially made Yellowstone a national park, the world’s first.\nBefore Moran arrived, Yellowstone in the popular imagination was a harsh, wild place with hot water and steam coming out of hellish holes in the ground. Since the painter’s work appeared, Yellowstone National Park has come to be known as a picturesque wonderland. By the time Moran died, he had painted a dozen other areas that would become national parks or monuments.",
        "question": "Why does the author use “the blackened heart” in paragraph 2 to describe Moran’s hometown?",
        "options": [
          "The place was severely polluted.",
          "The town was filled with darkened holes.",
          "There were many evil-hearted industry owners.",
          "The laborers mostly wore dark and dirty uniforms."
        ],
        "answer": 0,
        "explanation": "(113學測英文第40題,答案為「The place was severely polluted.」)"
      },
      {
        "id": "english-real-113-q41",
        "origNo": 41,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "Thomas Moran, a famous painter in the 19th century, played an important role in the establishment of American national parks. His vivid paintings brought the splendor of the extraordinary landscapes before the eyes of American people, thus setting the stage for the regions to be widely recognized and officially established as national parks.\nMoran came to the United States at age 7 with his family and settled in Philadelphia. They came from northwest England, the blackened heart of the Industrial Revolution: Its main street was “a dark, unattractive hole” and the river running through it was a string of dirty water. That was all the nature that Moran knew. Moran began painting by age 15, inspired by the landscape paintings of the British master J.M.W. Turner. There was plenty of landscape for him to paint in America, much different from his hometown. Showing great talent in painting, Moran was soon hired as an illustrator at Scribner’s Monthly, and later appointed chief illustrator by age 34. In 1871, he was appointed to illustrate The Wonders of Yellowstone, a story by Nathaniel P. Langford, who had participated in an expedition to Yellowstone. Captivated by the utterly fantastic sights Langford described, Moran became eager to see this odd territory for himself.\nIn 1871 Moran joined the first US government survey of the Yellowstone region with photographer William Henry Jackson. For two weeks he filled his sketchbook with the landscape’s most stunning sights. Moran’s watercolors—the first color renderings of the area—as well as Jackson’s photos and the survey results were presented to the Congress. His powerful images of Yellowstone fired the imagination of Congress members. In March 1872, lawmakers officially made Yellowstone a national park, the world’s first.\nBefore Moran arrived, Yellowstone in the popular imagination was a harsh, wild place with hot water and steam coming out of hellish holes in the ground. Since the painter’s work appeared, Yellowstone National Park has come to be known as a picturesque wonderland. By the time Moran died, he had painted a dozen other areas that would become national parks or monuments.",
        "question": "Which of the following statements is true about the Yellowstone National Park?",
        "options": [
          "Its establishment was proposed by Langford.",
          "Americans knew little about its beauty before the 1870s.",
          "The government project was started due to its rich natural resources.",
          "It was the only national park established because of Moran’s works."
        ],
        "answer": 1,
        "explanation": "(113學測英文第41題,答案為「Americans knew little about its beauty before the 1870s.」)"
      },
      {
        "id": "english-real-113-q42",
        "origNo": 42,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "Thomas Moran, a famous painter in the 19th century, played an important role in the establishment of American national parks. His vivid paintings brought the splendor of the extraordinary landscapes before the eyes of American people, thus setting the stage for the regions to be widely recognized and officially established as national parks.\nMoran came to the United States at age 7 with his family and settled in Philadelphia. They came from northwest England, the blackened heart of the Industrial Revolution: Its main street was “a dark, unattractive hole” and the river running through it was a string of dirty water. That was all the nature that Moran knew. Moran began painting by age 15, inspired by the landscape paintings of the British master J.M.W. Turner. There was plenty of landscape for him to paint in America, much different from his hometown. Showing great talent in painting, Moran was soon hired as an illustrator at Scribner’s Monthly, and later appointed chief illustrator by age 34. In 1871, he was appointed to illustrate The Wonders of Yellowstone, a story by Nathaniel P. Langford, who had participated in an expedition to Yellowstone. Captivated by the utterly fantastic sights Langford described, Moran became eager to see this odd territory for himself.\nIn 1871 Moran joined the first US government survey of the Yellowstone region with photographer William Henry Jackson. For two weeks he filled his sketchbook with the landscape’s most stunning sights. Moran’s watercolors—the first color renderings of the area—as well as Jackson’s photos and the survey results were presented to the Congress. His powerful images of Yellowstone fired the imagination of Congress members. In March 1872, lawmakers officially made Yellowstone a national park, the world’s first.\nBefore Moran arrived, Yellowstone in the popular imagination was a harsh, wild place with hot water and steam coming out of hellish holes in the ground. Since the painter’s work appeared, Yellowstone National Park has come to be known as a picturesque wonderland. By the time Moran died, he had painted a dozen other areas that would become national parks or monuments.",
        "question": "What can be inferred from the passage?",
        "options": [
          "Scribner’s Monthly was a magazine promoting national parks.",
          "Moran had visited Yellowstone before he started painting its landscapes.",
          "Color photos were not common when Moran started painting Yellowstone.",
          "Watercolor was the most popular form of landscape painting in the 19th century."
        ],
        "answer": 2,
        "explanation": "(113學測英文第42題,答案為「Color photos were not common when Moran started painting Yellowstone.」)"
      },
      {
        "id": "english-real-113-q43",
        "origNo": 43,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "In 2020, Petur Oddsson, a power station worker in Iceland, was struck by a 60,000-volt current. The electrical shock burned almost half of his body and melted layers of his skin off. Such deep and extensive burns can be fatal. But Oddsson’s life was saved by a creative invention: transplanting codfish skins onto human bodies.\nA triumph for medical technology, Oddsson’s fish skin transplantation was actually part of the astonishing achievement of “100% Fish,” an ambitious task in promoting environmental efficiency. The Icelandic project, from which this pioneering procedure emerged, strives for making a fundamental change in the marine industry. It aims to encourage full utilization of each fish caught, and to strengthen innovation in seafood products.\nReducing waste of fish catch has become a serious issue today, when many countries are faced with food crises. According to a 2003 study, about 60% of a codfish caught in Iceland was lost or wasted during the production process for human consumption. Under the guidance of 100% Fish, however, Icelanders are now using almost 95% of a cod. Cod skin, for example, is made into calcium supplement and energy drinks, and even as material for skin transplantation as in Oddsson’s case. Dried fish heads and spines are exported to West Africa, where they are used as the base of a protein-rich soup. Other groundbreaking products, including Omega-3 capsules, cold virus pretreatment sprays, and dog snacks are made from what was once cod catch detritus.\nThe Icelandic success is accomplished largely through cooperative efforts across various industries. 100% Fish takes the initiative to show seafood companies the importance of collaboration, and facilitate valuable connections between fishing companies and other participants of the project, including academia, start-ups, and research and development teams. By sharing knowledge and information, the different sectors are able to come up with improved processing and handling, through which creation of various innovative products was made possible. The project not only helps Icelanders to get 30% more value from each cod than most developed countries, but also provides an effective model to promote resource efficiency worldwide.",
        "question": "What is the primary goal of 100% Fish?",
        "options": [
          "To advance ocean technology.",
          "To reduce food crises worldwide.",
          "To enhance cross-industry cooperation.",
          "To make the most of marine resources."
        ],
        "answer": 3,
        "explanation": "(113學測英文第43題,答案為「To make the most of marine resources.」)"
      },
      {
        "id": "english-real-113-q44",
        "origNo": 44,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "In 2020, Petur Oddsson, a power station worker in Iceland, was struck by a 60,000-volt current. The electrical shock burned almost half of his body and melted layers of his skin off. Such deep and extensive burns can be fatal. But Oddsson’s life was saved by a creative invention: transplanting codfish skins onto human bodies.\nA triumph for medical technology, Oddsson’s fish skin transplantation was actually part of the astonishing achievement of “100% Fish,” an ambitious task in promoting environmental efficiency. The Icelandic project, from which this pioneering procedure emerged, strives for making a fundamental change in the marine industry. It aims to encourage full utilization of each fish caught, and to strengthen innovation in seafood products.\nReducing waste of fish catch has become a serious issue today, when many countries are faced with food crises. According to a 2003 study, about 60% of a codfish caught in Iceland was lost or wasted during the production process for human consumption. Under the guidance of 100% Fish, however, Icelanders are now using almost 95% of a cod. Cod skin, for example, is made into calcium supplement and energy drinks, and even as material for skin transplantation as in Oddsson’s case. Dried fish heads and spines are exported to West Africa, where they are used as the base of a protein-rich soup. Other groundbreaking products, including Omega-3 capsules, cold virus pretreatment sprays, and dog snacks are made from what was once cod catch detritus.\nThe Icelandic success is accomplished largely through cooperative efforts across various industries. 100% Fish takes the initiative to show seafood companies the importance of collaboration, and facilitate valuable connections between fishing companies and other participants of the project, including academia, start-ups, and research and development teams. By sharing knowledge and information, the different sectors are able to come up with improved processing and handling, through which creation of various innovative products was made possible. The project not only helps Icelanders to get 30% more value from each cod than most developed countries, but also provides an effective model to promote resource efficiency worldwide.",
        "question": "What does “this pioneering procedure” in the second paragraph refer to?",
        "options": [
          "100% Fish’s mission.",
          "Oddsson’s skin transplant.",
          "A fundamental change in seafood business.",
          "A new approach to protect the environment."
        ],
        "answer": 1,
        "explanation": "(113學測英文第44題,答案為「Oddsson’s skin transplant.」)"
      },
      {
        "id": "english-real-113-q45",
        "origNo": 45,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "In 2020, Petur Oddsson, a power station worker in Iceland, was struck by a 60,000-volt current. The electrical shock burned almost half of his body and melted layers of his skin off. Such deep and extensive burns can be fatal. But Oddsson’s life was saved by a creative invention: transplanting codfish skins onto human bodies.\nA triumph for medical technology, Oddsson’s fish skin transplantation was actually part of the astonishing achievement of “100% Fish,” an ambitious task in promoting environmental efficiency. The Icelandic project, from which this pioneering procedure emerged, strives for making a fundamental change in the marine industry. It aims to encourage full utilization of each fish caught, and to strengthen innovation in seafood products.\nReducing waste of fish catch has become a serious issue today, when many countries are faced with food crises. According to a 2003 study, about 60% of a codfish caught in Iceland was lost or wasted during the production process for human consumption. Under the guidance of 100% Fish, however, Icelanders are now using almost 95% of a cod. Cod skin, for example, is made into calcium supplement and energy drinks, and even as material for skin transplantation as in Oddsson’s case. Dried fish heads and spines are exported to West Africa, where they are used as the base of a protein-rich soup. Other groundbreaking products, including Omega-3 capsules, cold virus pretreatment sprays, and dog snacks are made from what was once cod catch detritus.\nThe Icelandic success is accomplished largely through cooperative efforts across various industries. 100% Fish takes the initiative to show seafood companies the importance of collaboration, and facilitate valuable connections between fishing companies and other participants of the project, including academia, start-ups, and research and development teams. By sharing knowledge and information, the different sectors are able to come up with improved processing and handling, through which creation of various innovative products was made possible. The project not only helps Icelanders to get 30% more value from each cod than most developed countries, but also provides an effective model to promote resource efficiency worldwide.",
        "question": "Which of the following is true according to the passage?",
        "options": [
          "Iceland has increased their fish catch by 30% in the last 20 years.",
          "Petur Oddsson was an important member of the Icelandic project.",
          "Cross-field collaboration has proved to be very fruitful for 100% Fish.",
          "100% Fish is a big international enterprise marketing seafood products."
        ],
        "answer": 2,
        "explanation": "(113學測英文第45題,答案為「Cross-field collaboration has proved to be very fruitful for 100% Fish.」)"
      },
      {
        "id": "english-real-113-q46",
        "origNo": 46,
        "sourceYear": 113,
        "part": "閱讀測驗",
        "passageId": "english-real-113-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "In 2020, Petur Oddsson, a power station worker in Iceland, was struck by a 60,000-volt current. The electrical shock burned almost half of his body and melted layers of his skin off. Such deep and extensive burns can be fatal. But Oddsson’s life was saved by a creative invention: transplanting codfish skins onto human bodies.\nA triumph for medical technology, Oddsson’s fish skin transplantation was actually part of the astonishing achievement of “100% Fish,” an ambitious task in promoting environmental efficiency. The Icelandic project, from which this pioneering procedure emerged, strives for making a fundamental change in the marine industry. It aims to encourage full utilization of each fish caught, and to strengthen innovation in seafood products.\nReducing waste of fish catch has become a serious issue today, when many countries are faced with food crises. According to a 2003 study, about 60% of a codfish caught in Iceland was lost or wasted during the production process for human consumption. Under the guidance of 100% Fish, however, Icelanders are now using almost 95% of a cod. Cod skin, for example, is made into calcium supplement and energy drinks, and even as material for skin transplantation as in Oddsson’s case. Dried fish heads and spines are exported to West Africa, where they are used as the base of a protein-rich soup. Other groundbreaking products, including Omega-3 capsules, cold virus pretreatment sprays, and dog snacks are made from what was once cod catch detritus.\nThe Icelandic success is accomplished largely through cooperative efforts across various industries. 100% Fish takes the initiative to show seafood companies the importance of collaboration, and facilitate valuable connections between fishing companies and other participants of the project, including academia, start-ups, and research and development teams. By sharing knowledge and information, the different sectors are able to come up with improved processing and handling, through which creation of various innovative products was made possible. The project not only helps Icelanders to get 30% more value from each cod than most developed countries, but also provides an effective model to promote resource efficiency worldwide.",
        "question": "Here is a sentence: “Almost nothing of a fish is left for the trash bin.”\nWhich paragraph is most suitable to have it as the final sentence?",
        "options": [
          "Paragraph 1.",
          "Paragraph 2.",
          "Paragraph 3.",
          "Paragraph 4."
        ],
        "answer": 2,
        "explanation": "(113學測英文第46題,答案為「Paragraph 3.」)"
      },
      {
        "id": "english-real-113-q47",
        "origNo": 47,
        "sourceYear": 113,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-113-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Many animals are known to live and move in groups to secure food and avoid predators. Over the years, people have been curious about the way they deal with disturbances arising from the environment, and the operations underlying their responses as a group. Studies on jackdaws and turtle ants may provide some insights into the issue.\n[圖片示意(非官方文字):原題下方為左右兩欄,各附一張黑白照片——左欄為兩隻棲息在樹幹上的寒鴉(jackdaw),右欄為數隻龜蟻(turtle ants);圖片僅為配圖,不影響作答]\n[左欄]\nJackdaws are birds in the crow family often found in the English countryside. They are highly social birds and often travel in large flocks. Normally, the birds enjoy a smooth flight together as a group when “commuting” between two locations, such as from their nesting site to their feeding ground. However, if a predator (such as a fox) is present, the pattern of their flight will change immediately. Instead of paying attention to all the other members and following the group pattern, they now focus only on the birds within a fixed distance from them, based on information coming from other members. By doing so, the flock members are able to keep a safe distance between themselves, and thus avoid crashing into each other while they flee from the predator.\n[右欄]\nTurtle ants often live in the cavities of dead branches in American forests. They have evolved search strategies to link their food source to their nests. They travel entirely along tree branches and vines, laying down trails of pheromone (a chemical substance) behind them so that other ants can follow. The trails connect the ants’ colonies and sources of food, forming a sort of communication network. However, since these trails can easily be broken by wind or rain, the ants have to find new paths to get around the broken points and reestablish the network. Often they have to work together to explore alternative routes many times before they finally settle on the most efficient one. By working collectively, the ants are able to improve the efficiency of their network and adapt to their ever-changing environment.",
        "question": "47-48 下列簡短敘述摘記上方文章重點。請從文章中找出最適當的單詞(word)填入下列句子空格中,並視句型結構需要做適當的字形變化,使句子語意完整、語法正確,並符合全文文意。每格限填一個單詞(word)。(填充,4分;第47、48格各2分)\nStudies show that animals like jackdaws and turtle ants are able to use ______(47)______ intelligence in both solving problems and ______(48)______ to new challenging environment.\n本題請作答第 47 格。",
        "explanation": "(113學測英文第47題,官方參考答案)group 或 collective(兩者皆為滿分答案;即 “…use group / collective intelligence…”)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-113-q48",
        "origNo": 48,
        "sourceYear": 113,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-113-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Many animals are known to live and move in groups to secure food and avoid predators. Over the years, people have been curious about the way they deal with disturbances arising from the environment, and the operations underlying their responses as a group. Studies on jackdaws and turtle ants may provide some insights into the issue.\n[圖片示意(非官方文字):原題下方為左右兩欄,各附一張黑白照片——左欄為兩隻棲息在樹幹上的寒鴉(jackdaw),右欄為數隻龜蟻(turtle ants);圖片僅為配圖,不影響作答]\n[左欄]\nJackdaws are birds in the crow family often found in the English countryside. They are highly social birds and often travel in large flocks. Normally, the birds enjoy a smooth flight together as a group when “commuting” between two locations, such as from their nesting site to their feeding ground. However, if a predator (such as a fox) is present, the pattern of their flight will change immediately. Instead of paying attention to all the other members and following the group pattern, they now focus only on the birds within a fixed distance from them, based on information coming from other members. By doing so, the flock members are able to keep a safe distance between themselves, and thus avoid crashing into each other while they flee from the predator.\n[右欄]\nTurtle ants often live in the cavities of dead branches in American forests. They have evolved search strategies to link their food source to their nests. They travel entirely along tree branches and vines, laying down trails of pheromone (a chemical substance) behind them so that other ants can follow. The trails connect the ants’ colonies and sources of food, forming a sort of communication network. However, since these trails can easily be broken by wind or rain, the ants have to find new paths to get around the broken points and reestablish the network. Often they have to work together to explore alternative routes many times before they finally settle on the most efficient one. By working collectively, the ants are able to improve the efficiency of their network and adapt to their ever-changing environment.",
        "question": "47-48 下列簡短敘述摘記上方文章重點。請從文章中找出最適當的單詞(word)填入下列句子空格中,並視句型結構需要做適當的字形變化,使句子語意完整、語法正確,並符合全文文意。每格限填一個單詞(word)。(填充,4分;第47、48格各2分)\nStudies show that animals like jackdaws and turtle ants are able to use ______(47)______ intelligence in both solving problems and ______(48)______ to new challenging environment.\n本題請作答第 48 格。",
        "explanation": "(113學測英文第48題,官方參考答案)adapting(即 “…and adapting to new challenging environment”,須做字形變化,原文為 adapt)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分(例如選對字但未改成 -ing 形式);空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-113-q49",
        "origNo": 49,
        "sourceYear": 113,
        "part": "混合題",
        "type": "multi",
        "passageId": "english-real-113-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Many animals are known to live and move in groups to secure food and avoid predators. Over the years, people have been curious about the way they deal with disturbances arising from the environment, and the operations underlying their responses as a group. Studies on jackdaws and turtle ants may provide some insights into the issue.\n[圖片示意(非官方文字):原題下方為左右兩欄,各附一張黑白照片——左欄為兩隻棲息在樹幹上的寒鴉(jackdaw),右欄為數隻龜蟻(turtle ants);圖片僅為配圖,不影響作答]\n[左欄]\nJackdaws are birds in the crow family often found in the English countryside. They are highly social birds and often travel in large flocks. Normally, the birds enjoy a smooth flight together as a group when “commuting” between two locations, such as from their nesting site to their feeding ground. However, if a predator (such as a fox) is present, the pattern of their flight will change immediately. Instead of paying attention to all the other members and following the group pattern, they now focus only on the birds within a fixed distance from them, based on information coming from other members. By doing so, the flock members are able to keep a safe distance between themselves, and thus avoid crashing into each other while they flee from the predator.\n[右欄]\nTurtle ants often live in the cavities of dead branches in American forests. They have evolved search strategies to link their food source to their nests. They travel entirely along tree branches and vines, laying down trails of pheromone (a chemical substance) behind them so that other ants can follow. The trails connect the ants’ colonies and sources of food, forming a sort of communication network. However, since these trails can easily be broken by wind or rain, the ants have to find new paths to get around the broken points and reestablish the network. Often they have to work together to explore alternative routes many times before they finally settle on the most efficient one. By working collectively, the ants are able to improve the efficiency of their network and adapt to their ever-changing environment.",
        "question": "From (A) to (F) below, choose the ONES that are true for both jackdaws and turtle ants.(多選題,4分)\n(非官方註記:本站選項不標 A、B、C 代號,且順序每次隨機排列,請直接勾選符合的選項。)",
        "options": [
          "They have special strategies to locate food sources.",
          "They have complex interactions led by a leader.",
          "They share information with their group members.",
          "They establish rules to stay away from enemies.",
          "They change their nesting sites from time to time.",
          "They show behavior governed by a unique system of communication."
        ],
        "answers": [
          2,
          5
        ],
        "explanation": "(113學測英文第49題,答案為「They share information with their group members.」、「They show behavior governed by a unique system of communication.」)"
      },
      {
        "id": "english-real-113-q50",
        "origNo": 50,
        "sourceYear": 113,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-113-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Many animals are known to live and move in groups to secure food and avoid predators. Over the years, people have been curious about the way they deal with disturbances arising from the environment, and the operations underlying their responses as a group. Studies on jackdaws and turtle ants may provide some insights into the issue.\n[圖片示意(非官方文字):原題下方為左右兩欄,各附一張黑白照片——左欄為兩隻棲息在樹幹上的寒鴉(jackdaw),右欄為數隻龜蟻(turtle ants);圖片僅為配圖,不影響作答]\n[左欄]\nJackdaws are birds in the crow family often found in the English countryside. They are highly social birds and often travel in large flocks. Normally, the birds enjoy a smooth flight together as a group when “commuting” between two locations, such as from their nesting site to their feeding ground. However, if a predator (such as a fox) is present, the pattern of their flight will change immediately. Instead of paying attention to all the other members and following the group pattern, they now focus only on the birds within a fixed distance from them, based on information coming from other members. By doing so, the flock members are able to keep a safe distance between themselves, and thus avoid crashing into each other while they flee from the predator.\n[右欄]\nTurtle ants often live in the cavities of dead branches in American forests. They have evolved search strategies to link their food source to their nests. They travel entirely along tree branches and vines, laying down trails of pheromone (a chemical substance) behind them so that other ants can follow. The trails connect the ants’ colonies and sources of food, forming a sort of communication network. However, since these trails can easily be broken by wind or rain, the ants have to find new paths to get around the broken points and reestablish the network. Often they have to work together to explore alternative routes many times before they finally settle on the most efficient one. By working collectively, the ants are able to improve the efficiency of their network and adapt to their ever-changing environment.",
        "question": "What is the “disturbance” for jackdaws mentioned in the passage?(簡答,2分)",
        "explanation": "(113學測英文第50題,官方參考答案)a predator 或 a fox(兩者皆為滿分答案;文中:if a predator (such as a fox) is present, the pattern of their flight will change immediately)。評分原則:完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-113-q51",
        "origNo": 51,
        "sourceYear": 113,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第1句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n每逢選舉季節,總會看到政治人物造訪各地著名廟宇。",
        "explanation": "(官方編號:中譯英第1題)官方參考答案(滿分;斜線前後為皆可接受的等值譯法):Every / During election season, politicians can / will be seen making visits to / making a visit to / visiting famous temples in different places / areas.。重點詞彙(官方說明):選舉 = election;季節 = season;政治人物 = politicians;造訪 = visit;著名 = famous;廟宇 = temples;各地 = in different places / areas。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。所評量的字詞大致以大考中心詞彙表一至四級為主,考生只要句法使用正確,且注意用字、拼字的正確性,應能得到不錯的分數。"
      },
      {
        "id": "english-real-113-q52",
        "origNo": 52,
        "sourceYear": 113,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第2句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n除了祈求好的選舉結果,他們也希望展現對在地文化與習俗的尊重。",
        "explanation": "(官方編號:中譯英第2題)官方參考答案(滿分;斜線前後為皆可接受的等值譯法):Besides / Aside from / Apart from / In addition to praying for good election / voting results, they also hope to show respect to local culture and customs.。重點詞彙(官方說明):除了 = besides / aside from / apart from / in addition to;選舉結果 = election results;展現…尊重 = show respect to;在地文化與習俗 = local culture and customs。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。所評量的字詞大致以大考中心詞彙表一至四級為主,考生只要句法使用正確,且注意用字、拼字的正確性,應能得到不錯的分數。"
      },
      {
        "id": "english-real-113-q53",
        "origNo": 53,
        "sourceYear": 113,
        "part": "非選擇題",
        "type": "written",
        "question": "英文作文(20分):依提示寫一篇英文作文,文長至少120個單詞(words)。\n提示:這個世代的青少年除了有課業壓力外,生活上也常面對一些困擾與挑戰。下列三張圖分別呈現青少年經常遭遇的三種問題,如果你有一個機器人小幫手可以幫你解決其中一個問題,你會選擇哪一個?請寫一篇英文作文,文分兩段,第一段說明你最想解決哪一個問題,並解釋原因。第二段說明你希望這個機器人小幫手具備什麼特質或能力、可以如何和你分工合作來解決此問題。\n[圖片示意(非官方文字,原題為三張編號的黑白線條插圖,各附英文圖說):1(圖說 First Heartbreak):一顆大而裂成兩半的愛心,旁邊一名年輕人蜷坐在地上哭泣、淚水滴落;2(圖說 Caring What Others Think):一名年輕人站在鏡子前,頭上冒出滿是問號的思考雲,顯得困惑、在意自己的形象,下方另有兩人湊在一起交頭接耳;3(圖說 Mood Swings):一名年輕人雙手抱頭,頭上方有四張情緒各異的臉(微笑、生氣、哭泣、大笑),周圍有表示晃動的弧線箭頭,象徵情緒起伏不定。]",
        "explanation": "(官方編號:作文)原題附1至3號共三張圖(圖說:First Heartbreak / Caring What Others Think / Mood Swings),此處以文字描述取代,並非官方文字。本題無單一參考範文,官方僅公布評分原則:官方命題說明——主題為青少年所遭遇的問題,屬生活情境;考生須根據作答提示以及三張圖片,寫一篇文長至少120個單詞、分兩段的作文。第一段須說明若有一位機器人小幫手,你最想讓他幫你解決三個問題中的哪一個,並解釋原因;第二段說明這個機器人小幫手應具備什麼特質或能力、可以如何和你分工合作來解決這個問題。評分重點在於內容須符合題目要求、提供充分具體之細節、句構語法及用字適切、拼字與標點符號使用得當;內容充實以及語言能力表現佳應是考生得分之重要元素。評分方式:依內容、組織、文法句構、字彙拼字四項表現評分,各項得分加總後給予一個整體分數(holistic score),總分1至20分,分五等級:特優(19-20分)、優(15-18分)、可(10-14分)、差(5-9分)、劣(0-4分)。字數明顯不足者扣總分1分;未分段者亦扣總分1分。評分指標(表一,每項優5-4分、可3分、差2-1分、劣0分):【內容】優:主題(句)清楚切題,並有具體、完整的相關細節支持;可:主題不夠清楚或突顯,部分相關敘述發展不全;差:主題不明,大部分相關敘述發展不全或與主題無關;劣:文不對題或沒寫(凡文不對題或沒寫者,其他各項均以零分計算)。【組織】優:重點分明,有開頭、發展、結尾,前後連貫,轉承語使用得當;可:重點安排不妥,前後發展比例與轉承語使用欠妥;差:重點不明、前後不連貫;劣:全文毫無組織或未按提示寫作。【文法、句構】優:全文幾無文法、格式、標點錯誤,文句結構富變化;可:文法、格式、標點錯誤少,且未影響文意之表達;差:文法、格式、標點錯誤多,且明顯影響文意之表達;劣:全文文法錯誤嚴重,導致文意不明。【字彙、拼字】優:用字精確、得宜,且幾無拼字、大小寫錯誤;可:字詞單調、重複,用字偶有不當,少許拼字、大小寫錯誤,但不影響文意之表達;差:用字、拼字、大小寫錯誤多,明顯影響文意之表達;劣:只寫出或抄襲與題意有關的零碎字詞。"
      }
    ],
  },
  // 114學年度學科能力測驗 英文考科 (transcribed from official CEEC PDFs, ceec.edu.tw)
  // Structure: 第壹部分 選擇題 Q1-46 (詞彙題 1-10, 綜合測驗 11-20, 文意選填 21-30, 篇章結構 31-34, 閱讀測驗 35-46);
  // 第貳部分 混合題 Q47-50 (47,48 written blanks; 49 multi-select, official answer CDGI; 50 written short answer);
  // 第參部分 非選擇題 = 中譯英 x2 + 英文作文 (synthetic origNo 51, 52, 53 following the last 混合題 number 50).
  // Sources:
  //   (a) 試題本: https://www.ceec.edu.tw/files/file_pool/1/0p056425554473267580/02-114%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E8%A9%A6%E9%A1%8C.pdf
  //   (b) 選擇題參考答案: https://www.ceec.edu.tw/files/file_pool/1/0P020599726139811147/114%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf
  //   (c) 非選擇題評分原則: https://www.ceec.edu.tw/files/file_pool/1/0p055378620142741052/03-114%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E8%80%83%E7%A7%91%E9%9D%9E%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88%E8%88%87%E8%A9%95%E5%88%86%E5%8E%9F%E5%89%87.pdf
  // Skipped questions: none (all 46 choice questions + 混合題 Q47-50 + 中譯英 x2 + 作文 included).
  // Image-dependent items converted to text: Q36 (options were four black-and-white photos of traffic signals: a lamp box with two round lights
  //   topped by a small figure / a post with two short angled arms / a Gothic-style lamp on a post with two arms lowered on both sides /
  //   a box reading STOP and GO on a post; replaced by a non-official Chinese text description of each photo);
  //   作文 prompt (two color photos contrasting what may actually happen on a typhoon day off: a crowded queue indoors vs. heavy rain on a street
  //   with scooter riders; replaced by text description).
  // LOW-CONFIDENCE: the Q36 photo descriptions and the 作文 picture descriptions are my own plain-text readings of the images
  //   (e.g. the exact angle/direction of the arms in Q36 (B), and whether the left 作文 photo shows a food court or a theater lobby);
  //   the official answer C for Q36 (ornate lamp with two arms lowered on both sides) matches the passage (arms lowered to a 45-degree angle,
  //   plus red and green gas lamps), so the answer itself is not in doubt.
  // Other notes: 混合題 is numbered 47-50 in this year's booklet (a forum discussion of ten comments A-J about zoos; 47-48 are two blanks of one
  //   sentence pair, 49 multi-select over the ten speakers (A)-(J), 50 short answer); 混合題 answer key: choice-answer PDF lists 47/48/50 as "／"
  //   and 49 as CDGI; the written-answer scoring PDF gives 47 = entertaining / educating, 48 = confined / caged, 50 = fostering empathy.
  //   For Q49 the ten options are the ten speakers' names (the comments themselves are in the shared passage). English booklet text was taken
  //   from the PDF text layer and checked against page images; italics/bold are not preserved.
  {
    sourceYear: 114,
    minutes: 100,
    questions: [
      {
        "id": "english-real-114-q1",
        "origNo": 1,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "If you put a ______ under a leaking faucet, you will be surprised at the amount of water collected in 24 hours.",
        "options": [
          "border",
          "timer",
          "container",
          "marker"
        ],
        "answer": 2,
        "explanation": "(114學測英文第1題,答案為「container」)"
      },
      {
        "id": "english-real-114-q2",
        "origNo": 2,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "The local farmers’ market is popular as it offers a variety of fresh seasonal ______ to people in the community.",
        "options": [
          "produce",
          "fashion",
          "brand",
          "trend"
        ],
        "answer": 0,
        "explanation": "(114學測英文第2題,答案為「produce」)"
      },
      {
        "id": "english-real-114-q3",
        "origNo": 3,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "As the years have passed by, many of my childhood memories are already ______; I can no longer recall clearly what happened back then.",
        "options": [
          "blurring",
          "trimming",
          "draining",
          "glaring"
        ],
        "answer": 0,
        "explanation": "(114學測英文第3題,答案為「blurring」)"
      },
      {
        "id": "english-real-114-q4",
        "origNo": 4,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "Racist remarks are by nature ______ and hurtful, and should be avoided on all occasions.",
        "options": [
          "excessive",
          "furious",
          "offensive",
          "stubborn"
        ],
        "answer": 2,
        "explanation": "(114學測英文第4題,答案為「offensive」)"
      },
      {
        "id": "english-real-114-q5",
        "origNo": 5,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "Not satisfied with the first ______ of her essay, Mary revised it several times before turning it in to the teacher.",
        "options": [
          "text",
          "brush",
          "draft",
          "plot"
        ],
        "answer": 2,
        "explanation": "(114學測英文第5題,答案為「draft」)"
      },
      {
        "id": "english-real-114-q6",
        "origNo": 6,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "Left ______ for years, the deserted house was filled with a thick coating of dust and a smell of old damp wood.",
        "options": [
          "casual",
          "fragile",
          "remote",
          "vacant"
        ],
        "answer": 3,
        "explanation": "(114學測英文第6題,答案為「vacant」)"
      },
      {
        "id": "english-real-114-q7",
        "origNo": 7,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "The high school student showed ______ courage when she helped the old man escape from the fire.",
        "options": [
          "gigantic",
          "exclusive",
          "multiple",
          "enormous"
        ],
        "answer": 3,
        "explanation": "(114學測英文第7題,答案為「enormous」)"
      },
      {
        "id": "english-real-114-q8",
        "origNo": 8,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "Publicly financed projects are often ______ or delayed during tough economic times due to a lack of resources.",
        "options": [
          "halted",
          "hatched",
          "possessed",
          "reinforced"
        ],
        "answer": 0,
        "explanation": "(114學測英文第8題,答案為「halted」)"
      },
      {
        "id": "english-real-114-q9",
        "origNo": 9,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "Despite his busy schedule, the President ______ the school’s graduation ceremony with his presence and a heartwarming speech.",
        "options": [
          "praised",
          "graced",
          "addressed",
          "credited"
        ],
        "answer": 1,
        "explanation": "(114學測英文第9題,答案為「graced」)"
      },
      {
        "id": "english-real-114-q10",
        "origNo": 10,
        "sourceYear": 114,
        "part": "詞彙題",
        "question": "The manager of the company was sued for ______ abusing his colleagues, calling them “hopeless losers.”",
        "options": [
          "verbally",
          "dominantly",
          "legitimately",
          "relevantly"
        ],
        "answer": 0,
        "explanation": "(114學測英文第10題,答案為「verbally」)"
      },
      {
        "id": "english-real-114-q11",
        "origNo": 11,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In 1995, a group of business and academic leaders met at the home of Juanita Brown and David Isaacs in Mill Valley, California. None of them had any idea they were about to create a social innovation that (11) rapidly around the world.\nThe group was supposed to have a large-circle discussion in their beautiful garden. Unfortunately, it started pouring. With their plan (12) by the rain, the two dozen participants squeezed into the living room. They broke into small, intimate table conversations, recording their insights on paper tablecloths. They periodically stopped their conversations to switch tables so the insights and ideas might (13) and deepen. As they moved from one table to another, they noticed new ideas emerging from the discussions. This in turn enriched subsequent rounds of conversation. Over the course of the morning, the innovative discussion process (14) a new form of collective effort that transformed the depth, scope, and quality of their discussion.\nThe World Café was (15) created. Since that rainy morning in Mill Valley, the World Café approach has been applied to multi-group discussions and cooperative actions by businesses, industries, and educational institutions around the world.",
        "question": "空格 (11) 應填入下列哪一個選項?",
        "options": [
          "had spread",
          "would spread",
          "had been spreading",
          "would have spread"
        ],
        "answer": 1,
        "explanation": "(114學測英文第11題,答案為「would spread」)"
      },
      {
        "id": "english-real-114-q12",
        "origNo": 12,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In 1995, a group of business and academic leaders met at the home of Juanita Brown and David Isaacs in Mill Valley, California. None of them had any idea they were about to create a social innovation that (11) rapidly around the world.\nThe group was supposed to have a large-circle discussion in their beautiful garden. Unfortunately, it started pouring. With their plan (12) by the rain, the two dozen participants squeezed into the living room. They broke into small, intimate table conversations, recording their insights on paper tablecloths. They periodically stopped their conversations to switch tables so the insights and ideas might (13) and deepen. As they moved from one table to another, they noticed new ideas emerging from the discussions. This in turn enriched subsequent rounds of conversation. Over the course of the morning, the innovative discussion process (14) a new form of collective effort that transformed the depth, scope, and quality of their discussion.\nThe World Café was (15) created. Since that rainy morning in Mill Valley, the World Café approach has been applied to multi-group discussions and cooperative actions by businesses, industries, and educational institutions around the world.",
        "question": "空格 (12) 應填入下列哪一個選項?",
        "options": [
          "facilitated",
          "disrupted",
          "disclosed",
          "fulfilled"
        ],
        "answer": 1,
        "explanation": "(114學測英文第12題,答案為「disrupted」)"
      },
      {
        "id": "english-real-114-q13",
        "origNo": 13,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In 1995, a group of business and academic leaders met at the home of Juanita Brown and David Isaacs in Mill Valley, California. None of them had any idea they were about to create a social innovation that (11) rapidly around the world.\nThe group was supposed to have a large-circle discussion in their beautiful garden. Unfortunately, it started pouring. With their plan (12) by the rain, the two dozen participants squeezed into the living room. They broke into small, intimate table conversations, recording their insights on paper tablecloths. They periodically stopped their conversations to switch tables so the insights and ideas might (13) and deepen. As they moved from one table to another, they noticed new ideas emerging from the discussions. This in turn enriched subsequent rounds of conversation. Over the course of the morning, the innovative discussion process (14) a new form of collective effort that transformed the depth, scope, and quality of their discussion.\nThe World Café was (15) created. Since that rainy morning in Mill Valley, the World Café approach has been applied to multi-group discussions and cooperative actions by businesses, industries, and educational institutions around the world.",
        "question": "空格 (13) 應填入下列哪一個選項?",
        "options": [
          "circulate",
          "emphasize",
          "recover",
          "preserve"
        ],
        "answer": 0,
        "explanation": "(114學測英文第13題,答案為「circulate」)"
      },
      {
        "id": "english-real-114-q14",
        "origNo": 14,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In 1995, a group of business and academic leaders met at the home of Juanita Brown and David Isaacs in Mill Valley, California. None of them had any idea they were about to create a social innovation that (11) rapidly around the world.\nThe group was supposed to have a large-circle discussion in their beautiful garden. Unfortunately, it started pouring. With their plan (12) by the rain, the two dozen participants squeezed into the living room. They broke into small, intimate table conversations, recording their insights on paper tablecloths. They periodically stopped their conversations to switch tables so the insights and ideas might (13) and deepen. As they moved from one table to another, they noticed new ideas emerging from the discussions. This in turn enriched subsequent rounds of conversation. Over the course of the morning, the innovative discussion process (14) a new form of collective effort that transformed the depth, scope, and quality of their discussion.\nThe World Café was (15) created. Since that rainy morning in Mill Valley, the World Café approach has been applied to multi-group discussions and cooperative actions by businesses, industries, and educational institutions around the world.",
        "question": "空格 (14) 應填入下列哪一個選項?",
        "options": [
          "made up for",
          "kept track of",
          "gave rise to",
          "looked out for"
        ],
        "answer": 2,
        "explanation": "(114學測英文第14題,答案為「gave rise to」)"
      },
      {
        "id": "english-real-114-q15",
        "origNo": 15,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "In 1995, a group of business and academic leaders met at the home of Juanita Brown and David Isaacs in Mill Valley, California. None of them had any idea they were about to create a social innovation that (11) rapidly around the world.\nThe group was supposed to have a large-circle discussion in their beautiful garden. Unfortunately, it started pouring. With their plan (12) by the rain, the two dozen participants squeezed into the living room. They broke into small, intimate table conversations, recording their insights on paper tablecloths. They periodically stopped their conversations to switch tables so the insights and ideas might (13) and deepen. As they moved from one table to another, they noticed new ideas emerging from the discussions. This in turn enriched subsequent rounds of conversation. Over the course of the morning, the innovative discussion process (14) a new form of collective effort that transformed the depth, scope, and quality of their discussion.\nThe World Café was (15) created. Since that rainy morning in Mill Valley, the World Café approach has been applied to multi-group discussions and cooperative actions by businesses, industries, and educational institutions around the world.",
        "question": "空格 (15) 應填入下列哪一個選項?",
        "options": [
          "still",
          "also",
          "further",
          "thus"
        ],
        "answer": 3,
        "explanation": "(114學測英文第15題,答案為「thus」)"
      },
      {
        "id": "english-real-114-q16",
        "origNo": 16,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "If you have ever been sick to your stomach on a rocking boat or a bumpy car ride, you know the discomfort of motion sickness. It can (16) suddenly, progressing from a feeling of uneasiness to a cold sweat. Soon, it can lead to dizziness, nausea, and vomiting.\nMotion sickness occurs when the signals your brain receives from your eyes, ears, and body (17). Your brain doesn’t know whether you are stationary or moving when these parts send conflicting information: One part of your balance-sensing system detects that your body is moving, but the other parts (18). Your brain’s confused reaction makes you feel sick. You may experience the discomfort from the motion of cars, boats, or amusement park rides. You may also get sick from playing video games, or looking through a microscope.\nYou can take some (19) to help avoid the discomfort. If you are traveling, reserve seats where motion is felt the least, such as the front row of a car or forward cars of a train. Looking out into the distance from the vehicle can help (20). You can also take medicine before your ride to avoid or reduce nausea and vomiting.",
        "question": "空格 (16) 應填入下列哪一個選項?",
        "options": [
          "crash",
          "flush",
          "burst",
          "strike"
        ],
        "answer": 3,
        "explanation": "(114學測英文第16題,答案為「strike」)"
      },
      {
        "id": "english-real-114-q17",
        "origNo": 17,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "If you have ever been sick to your stomach on a rocking boat or a bumpy car ride, you know the discomfort of motion sickness. It can (16) suddenly, progressing from a feeling of uneasiness to a cold sweat. Soon, it can lead to dizziness, nausea, and vomiting.\nMotion sickness occurs when the signals your brain receives from your eyes, ears, and body (17). Your brain doesn’t know whether you are stationary or moving when these parts send conflicting information: One part of your balance-sensing system detects that your body is moving, but the other parts (18). Your brain’s confused reaction makes you feel sick. You may experience the discomfort from the motion of cars, boats, or amusement park rides. You may also get sick from playing video games, or looking through a microscope.\nYou can take some (19) to help avoid the discomfort. If you are traveling, reserve seats where motion is felt the least, such as the front row of a car or forward cars of a train. Looking out into the distance from the vehicle can help (20). You can also take medicine before your ride to avoid or reduce nausea and vomiting.",
        "question": "空格 (17) 應填入下列哪一個選項?",
        "options": [
          "are not regular",
          "can hardly move",
          "do not match",
          "are rarely cued"
        ],
        "answer": 2,
        "explanation": "(114學測英文第17題,答案為「do not match」)"
      },
      {
        "id": "english-real-114-q18",
        "origNo": 18,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "If you have ever been sick to your stomach on a rocking boat or a bumpy car ride, you know the discomfort of motion sickness. It can (16) suddenly, progressing from a feeling of uneasiness to a cold sweat. Soon, it can lead to dizziness, nausea, and vomiting.\nMotion sickness occurs when the signals your brain receives from your eyes, ears, and body (17). Your brain doesn’t know whether you are stationary or moving when these parts send conflicting information: One part of your balance-sensing system detects that your body is moving, but the other parts (18). Your brain’s confused reaction makes you feel sick. You may experience the discomfort from the motion of cars, boats, or amusement park rides. You may also get sick from playing video games, or looking through a microscope.\nYou can take some (19) to help avoid the discomfort. If you are traveling, reserve seats where motion is felt the least, such as the front row of a car or forward cars of a train. Looking out into the distance from the vehicle can help (20). You can also take medicine before your ride to avoid or reduce nausea and vomiting.",
        "question": "空格 (18) 應填入下列哪一個選項?",
        "options": [
          "aren’t",
          "won’t",
          "don’t",
          "haven’t"
        ],
        "answer": 2,
        "explanation": "(114學測英文第18題,答案為「don’t」)"
      },
      {
        "id": "english-real-114-q19",
        "origNo": 19,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "If you have ever been sick to your stomach on a rocking boat or a bumpy car ride, you know the discomfort of motion sickness. It can (16) suddenly, progressing from a feeling of uneasiness to a cold sweat. Soon, it can lead to dizziness, nausea, and vomiting.\nMotion sickness occurs when the signals your brain receives from your eyes, ears, and body (17). Your brain doesn’t know whether you are stationary or moving when these parts send conflicting information: One part of your balance-sensing system detects that your body is moving, but the other parts (18). Your brain’s confused reaction makes you feel sick. You may experience the discomfort from the motion of cars, boats, or amusement park rides. You may also get sick from playing video games, or looking through a microscope.\nYou can take some (19) to help avoid the discomfort. If you are traveling, reserve seats where motion is felt the least, such as the front row of a car or forward cars of a train. Looking out into the distance from the vehicle can help (20). You can also take medicine before your ride to avoid or reduce nausea and vomiting.",
        "question": "空格 (19) 應填入下列哪一個選項?",
        "options": [
          "special opportunities",
          "preventive measures",
          "potential risks",
          "significant advantages"
        ],
        "answer": 1,
        "explanation": "(114學測英文第19題,答案為「preventive measures」)"
      },
      {
        "id": "english-real-114-q20",
        "origNo": 20,
        "sourceYear": 114,
        "part": "綜合測驗",
        "passageId": "english-real-114-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "If you have ever been sick to your stomach on a rocking boat or a bumpy car ride, you know the discomfort of motion sickness. It can (16) suddenly, progressing from a feeling of uneasiness to a cold sweat. Soon, it can lead to dizziness, nausea, and vomiting.\nMotion sickness occurs when the signals your brain receives from your eyes, ears, and body (17). Your brain doesn’t know whether you are stationary or moving when these parts send conflicting information: One part of your balance-sensing system detects that your body is moving, but the other parts (18). Your brain’s confused reaction makes you feel sick. You may experience the discomfort from the motion of cars, boats, or amusement park rides. You may also get sick from playing video games, or looking through a microscope.\nYou can take some (19) to help avoid the discomfort. If you are traveling, reserve seats where motion is felt the least, such as the front row of a car or forward cars of a train. Looking out into the distance from the vehicle can help (20). You can also take medicine before your ride to avoid or reduce nausea and vomiting.",
        "question": "空格 (20) 應填入下列哪一個選項?",
        "options": [
          "as well",
          "by far",
          "at least",
          "after all"
        ],
        "answer": 0,
        "explanation": "(114學測英文第20題,答案為「as well」)"
      },
      {
        "id": "english-real-114-q21",
        "origNo": 21,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (21) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 8,
        "explanation": "(114學測英文第21題,答案為「noted」)"
      },
      {
        "id": "english-real-114-q22",
        "origNo": 22,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (22) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 0,
        "explanation": "(114學測英文第22題,答案為「reference」)"
      },
      {
        "id": "english-real-114-q23",
        "origNo": 23,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (23) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 1,
        "explanation": "(114學測英文第23題,答案為「bearing」)"
      },
      {
        "id": "english-real-114-q24",
        "origNo": 24,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (24) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 5,
        "explanation": "(114學測英文第24題,答案為「survived」)"
      },
      {
        "id": "english-real-114-q25",
        "origNo": 25,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (25) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 3,
        "explanation": "(114學測英文第25題,答案為「retained」)"
      },
      {
        "id": "english-real-114-q26",
        "origNo": 26,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (26) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 2,
        "explanation": "(114學測英文第26題,答案為「familiar」)"
      },
      {
        "id": "english-real-114-q27",
        "origNo": 27,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (27) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 4,
        "explanation": "(114學測英文第27題,答案為「faithful」)"
      },
      {
        "id": "english-real-114-q28",
        "origNo": 28,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (28) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 6,
        "explanation": "(114學測英文第28題,答案為「celebration」)"
      },
      {
        "id": "english-real-114-q29",
        "origNo": 29,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (29) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 9,
        "explanation": "(114學測英文第29題,答案為「silent」)"
      },
      {
        "id": "english-real-114-q30",
        "origNo": 30,
        "sourceYear": 114,
        "part": "文意選填",
        "passageId": "english-real-114-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "The Notre-Dame de Paris is one of the most famous cathedrals in Europe. Located at the heart of Paris, this medieval cathedral is (21) for its intricate architecture, stunning stained glass windows, and, above all, its bells.\nMounted in the two tall towers of the cathedral, Notre-Dame’s bells have been ringing for over 800 years. In fact, there is documented (22) to the ringing of bells even before the cathedral’s construction was completed, dating as far back as the 12th century. The 10 bells vary in size, each (23) a name. The largest one, named “Emmanuel,” weighs over 13 tons. It is the only one of the whole group that (24) the French Revolution, while the rest were melted down for weapons. The melted bells were recast in the late 19th century. But due to their poor acoustic quality, all of the bells were replaced in 2013—except for Emmanuel, which (25) its renowned, excellent sound. This particular bell, ringing in F sharp, is considered one of the most harmonically beautiful in Europe.\nOver centuries, the bells have become a (26) part of life in Paris, where they are known as “the cathedral’s voice.” They have been used to mark the hours of the day, to call the (27) to prayer, and to signal emergency situations such as fires and invasions. They have also rung in times of (28) and of mourning, announcing such events as royal weddings and coronations of kings, as well as funerals of heads of state.\nHowever, after the devastating fire that damaged the cathedral in 2019, the bells fell (29). The building went through a complex and time-consuming process of (30), and the famous monument was finally reopened on December 8, 2024. The sounds of Notre-Dame bells once again filled the air in Paris, and will be heard for generations to come.\n(A) reference  (B) bearing  (C) familiar  (D) retained  (E) faithful  (F) survived  (G) celebration  (H) restoration  (I) noted  (J) silent",
        "question": "空格 (30) 應填入下列哪一個選項?",
        "options": [
          "reference",
          "bearing",
          "familiar",
          "retained",
          "faithful",
          "survived",
          "celebration",
          "restoration",
          "noted",
          "silent"
        ],
        "answer": 7,
        "explanation": "(114學測英文第30題,答案為「restoration」)"
      },
      {
        "id": "english-real-114-q31",
        "origNo": 31,
        "sourceYear": 114,
        "part": "篇章結構",
        "passageId": "english-real-114-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "A capsule hotel, also known as a pod hotel, is a unique type of basic, affordable accommodation. Originated in Japan, these hotels were initially meant for business professionals to stay close to populated business districts without spending a lot. (31)\nA typical room of a capsule hotel is roughly the length and width of a single bed, with sufficient height for a guest to crawl in and sit up on the bed. The walls of each capsule may be made of wood, metal or any rigid material, but are often fiberglass or plastic. (32) Each capsule is equipped with a comfortable mattress, a small light, and sometimes a television or other entertainment options. Such minimalist design is what makes these hotels both inexpensive and efficient, providing only the essential elements for a good night sleep.\nThe first capsule hotel, the Capsule Inn Osaka, opened in 1979. Since then, capsule hotels have quickly spread to other cities and countries. Chains have emerged in Taiwan, Singapore, and even on resort islands like Bali. Pod hotels are also seen in Europe and North America, especially in big cities like New York, London, and Paris. (33) Instead of the traditional bare pod-sized style, new chains now feature interior design that appeals to digitally connected travelers from around the world. Guests may enjoy facilities such as free Wi-Fi, mobile charging, and even a soundless alarm system that raises the sleeping guests into a seated position while gradually brightening the lights.\nWhile offering budget-conscious travelers a unique option, capsule hotels may not be suitable for everyone. Some hotels may not provide air conditioning in the capsules, leading to poor air flow. (34) Also, you may have to share common facilities (such as bathrooms) with other guests. And, if you’re worried about feeling claustrophobic in small spaces, you’d better think twice before making a reservation.",
        "question": "空格 (31) 應填入下列哪一個選項?",
        "options": [
          "In response to rising demands, these hotels are embracing a wave of innovation.",
          "The room’s thin plastic walls easily transmit the sound of snoring made by neighboring guests.",
          "The chambers are stacked side-by-side, two units high, with the upper rooms reached by a ladder.",
          "Today, they provide low-budget, overnight lodging in commerce centers in large cities worldwide."
        ],
        "answer": 3,
        "explanation": "(114學測英文第31題,答案為「Today, they provide low-budget, overnight lodging in commerce centers in large cities worldwide.」)"
      },
      {
        "id": "english-real-114-q32",
        "origNo": 32,
        "sourceYear": 114,
        "part": "篇章結構",
        "passageId": "english-real-114-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "A capsule hotel, also known as a pod hotel, is a unique type of basic, affordable accommodation. Originated in Japan, these hotels were initially meant for business professionals to stay close to populated business districts without spending a lot. (31)\nA typical room of a capsule hotel is roughly the length and width of a single bed, with sufficient height for a guest to crawl in and sit up on the bed. The walls of each capsule may be made of wood, metal or any rigid material, but are often fiberglass or plastic. (32) Each capsule is equipped with a comfortable mattress, a small light, and sometimes a television or other entertainment options. Such minimalist design is what makes these hotels both inexpensive and efficient, providing only the essential elements for a good night sleep.\nThe first capsule hotel, the Capsule Inn Osaka, opened in 1979. Since then, capsule hotels have quickly spread to other cities and countries. Chains have emerged in Taiwan, Singapore, and even on resort islands like Bali. Pod hotels are also seen in Europe and North America, especially in big cities like New York, London, and Paris. (33) Instead of the traditional bare pod-sized style, new chains now feature interior design that appeals to digitally connected travelers from around the world. Guests may enjoy facilities such as free Wi-Fi, mobile charging, and even a soundless alarm system that raises the sleeping guests into a seated position while gradually brightening the lights.\nWhile offering budget-conscious travelers a unique option, capsule hotels may not be suitable for everyone. Some hotels may not provide air conditioning in the capsules, leading to poor air flow. (34) Also, you may have to share common facilities (such as bathrooms) with other guests. And, if you’re worried about feeling claustrophobic in small spaces, you’d better think twice before making a reservation.",
        "question": "空格 (32) 應填入下列哪一個選項?",
        "options": [
          "In response to rising demands, these hotels are embracing a wave of innovation.",
          "The room’s thin plastic walls easily transmit the sound of snoring made by neighboring guests.",
          "The chambers are stacked side-by-side, two units high, with the upper rooms reached by a ladder.",
          "Today, they provide low-budget, overnight lodging in commerce centers in large cities worldwide."
        ],
        "answer": 2,
        "explanation": "(114學測英文第32題,答案為「The chambers are stacked side-by-side, two units high, with the upper rooms reached by a ladder.」)"
      },
      {
        "id": "english-real-114-q33",
        "origNo": 33,
        "sourceYear": 114,
        "part": "篇章結構",
        "passageId": "english-real-114-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "A capsule hotel, also known as a pod hotel, is a unique type of basic, affordable accommodation. Originated in Japan, these hotels were initially meant for business professionals to stay close to populated business districts without spending a lot. (31)\nA typical room of a capsule hotel is roughly the length and width of a single bed, with sufficient height for a guest to crawl in and sit up on the bed. The walls of each capsule may be made of wood, metal or any rigid material, but are often fiberglass or plastic. (32) Each capsule is equipped with a comfortable mattress, a small light, and sometimes a television or other entertainment options. Such minimalist design is what makes these hotels both inexpensive and efficient, providing only the essential elements for a good night sleep.\nThe first capsule hotel, the Capsule Inn Osaka, opened in 1979. Since then, capsule hotels have quickly spread to other cities and countries. Chains have emerged in Taiwan, Singapore, and even on resort islands like Bali. Pod hotels are also seen in Europe and North America, especially in big cities like New York, London, and Paris. (33) Instead of the traditional bare pod-sized style, new chains now feature interior design that appeals to digitally connected travelers from around the world. Guests may enjoy facilities such as free Wi-Fi, mobile charging, and even a soundless alarm system that raises the sleeping guests into a seated position while gradually brightening the lights.\nWhile offering budget-conscious travelers a unique option, capsule hotels may not be suitable for everyone. Some hotels may not provide air conditioning in the capsules, leading to poor air flow. (34) Also, you may have to share common facilities (such as bathrooms) with other guests. And, if you’re worried about feeling claustrophobic in small spaces, you’d better think twice before making a reservation.",
        "question": "空格 (33) 應填入下列哪一個選項?",
        "options": [
          "In response to rising demands, these hotels are embracing a wave of innovation.",
          "The room’s thin plastic walls easily transmit the sound of snoring made by neighboring guests.",
          "The chambers are stacked side-by-side, two units high, with the upper rooms reached by a ladder.",
          "Today, they provide low-budget, overnight lodging in commerce centers in large cities worldwide."
        ],
        "answer": 0,
        "explanation": "(114學測英文第33題,答案為「In response to rising demands, these hotels are embracing a wave of innovation.」)"
      },
      {
        "id": "english-real-114-q34",
        "origNo": 34,
        "sourceYear": 114,
        "part": "篇章結構",
        "passageId": "english-real-114-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "A capsule hotel, also known as a pod hotel, is a unique type of basic, affordable accommodation. Originated in Japan, these hotels were initially meant for business professionals to stay close to populated business districts without spending a lot. (31)\nA typical room of a capsule hotel is roughly the length and width of a single bed, with sufficient height for a guest to crawl in and sit up on the bed. The walls of each capsule may be made of wood, metal or any rigid material, but are often fiberglass or plastic. (32) Each capsule is equipped with a comfortable mattress, a small light, and sometimes a television or other entertainment options. Such minimalist design is what makes these hotels both inexpensive and efficient, providing only the essential elements for a good night sleep.\nThe first capsule hotel, the Capsule Inn Osaka, opened in 1979. Since then, capsule hotels have quickly spread to other cities and countries. Chains have emerged in Taiwan, Singapore, and even on resort islands like Bali. Pod hotels are also seen in Europe and North America, especially in big cities like New York, London, and Paris. (33) Instead of the traditional bare pod-sized style, new chains now feature interior design that appeals to digitally connected travelers from around the world. Guests may enjoy facilities such as free Wi-Fi, mobile charging, and even a soundless alarm system that raises the sleeping guests into a seated position while gradually brightening the lights.\nWhile offering budget-conscious travelers a unique option, capsule hotels may not be suitable for everyone. Some hotels may not provide air conditioning in the capsules, leading to poor air flow. (34) Also, you may have to share common facilities (such as bathrooms) with other guests. And, if you’re worried about feeling claustrophobic in small spaces, you’d better think twice before making a reservation.",
        "question": "空格 (34) 應填入下列哪一個選項?",
        "options": [
          "In response to rising demands, these hotels are embracing a wave of innovation.",
          "The room’s thin plastic walls easily transmit the sound of snoring made by neighboring guests.",
          "The chambers are stacked side-by-side, two units high, with the upper rooms reached by a ladder.",
          "Today, they provide low-budget, overnight lodging in commerce centers in large cities worldwide."
        ],
        "answer": 1,
        "explanation": "(114學測英文第34題,答案為「The room’s thin plastic walls easily transmit the sound of snoring made by neighboring guests.」)"
      },
      {
        "id": "english-real-114-q35",
        "origNo": 35,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "While waiting to cross the street at busy intersections, have you ever wondered who invented the traffic light? Most people credit the first traffic light to Nottingham engineer John Peake Knight. A railway manager, Knight specialized in designing the signaling system for Britain’s growing railway network in the 1860s. He saw no reason why this could not be adapted for use on the busy London intersections. Thus, he proposed a signaling system based on the railway movable-arm signal: Arms extending horizontally commanded drivers to stop, whereas arms lowered to a 45-degree angle told drivers to move on, resembling a traffic director’s gestures. Red and green gas lamps were added to the signal for use at night. A police officer was stationed by the side to operate the system.\nKnight’s traffic signal was installed near London’s Westminster Bridge in December 1868, but the system was short-lived. A gas leak one month later caused an explosion in the lights, injuring the policeman operating it. Deemed a public hazard, the project was immediately dropped, and traffic lights were banned until their return in 1929 back to the British streets.\nIn the early 1900s, versions of the British traffic lights appeared in big cities in America, where traffic was on a sharp rise. Systems using movable arms were popular in Chicago, while those using the red and green lights were adopted in San Francisco. Patents with innovations on Knight’s ideas were filed nationwide. A major breakthrough was the yellow light invented by a Detroit police officer William Potts. Installed in Detroit in 1920, Potts’ three-color system allowed for the added signal “proceed with caution” to be displayed.\nNow, with the emergence of self-driving cars, researchers have begun to suggest that traffic signals are no longer necessary. Intersections will operate in a way that cars automatically adjust their speed to cross through, while maintaining safe distances from other vehicles. In the near future, we may experience a brand new form of traffic management!",
        "question": "What is this passage mainly about?",
        "options": [
          "The evolution of traffic control systems.",
          "The inventors of traffic lights in history.",
          "The functions of different traffic signals.",
          "The development of modern transportation."
        ],
        "answer": 0,
        "explanation": "(114學測英文第35題,答案為「The evolution of traffic control systems.」)"
      },
      {
        "id": "english-real-114-q36",
        "origNo": 36,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "While waiting to cross the street at busy intersections, have you ever wondered who invented the traffic light? Most people credit the first traffic light to Nottingham engineer John Peake Knight. A railway manager, Knight specialized in designing the signaling system for Britain’s growing railway network in the 1860s. He saw no reason why this could not be adapted for use on the busy London intersections. Thus, he proposed a signaling system based on the railway movable-arm signal: Arms extending horizontally commanded drivers to stop, whereas arms lowered to a 45-degree angle told drivers to move on, resembling a traffic director’s gestures. Red and green gas lamps were added to the signal for use at night. A police officer was stationed by the side to operate the system.\nKnight’s traffic signal was installed near London’s Westminster Bridge in December 1868, but the system was short-lived. A gas leak one month later caused an explosion in the lights, injuring the policeman operating it. Deemed a public hazard, the project was immediately dropped, and traffic lights were banned until their return in 1929 back to the British streets.\nIn the early 1900s, versions of the British traffic lights appeared in big cities in America, where traffic was on a sharp rise. Systems using movable arms were popular in Chicago, while those using the red and green lights were adopted in San Francisco. Patents with innovations on Knight’s ideas were filed nationwide. A major breakthrough was the yellow light invented by a Detroit police officer William Potts. Installed in Detroit in 1920, Potts’ three-color system allowed for the added signal “proceed with caution” to be displayed.\nNow, with the emergence of self-driving cars, researchers have begun to suggest that traffic signals are no longer necessary. Intersections will operate in a way that cars automatically adjust their speed to cross through, while maintaining safe distances from other vehicles. In the near future, we may experience a brand new form of traffic management!",
        "question": "Which of the following pictures shows Knight’s proposed traffic signal?\n[圖片示意(非官方文字):原題四個選項皆為黑白照片,此處改以文字描述各張照片]",
        "options": [
          "[圖(A)] 灰黑色的多面燈箱立在柱子上,燈箱正面有上下兩個圓形燈(紅綠燈),燈箱頂端立著一尊揮手的小人形雕像",
          "[圖(B)] 一根細長的直立柱子,柱上裝有上下兩根短橫臂,兩臂皆略向右上方斜舉(臂板信號)",
          "[圖(C)] 立柱頂端為哥德式(尖塔狀)的華麗燈罩,柱子中段向左右兩側各伸出一片黑色臂板,兩臂向下斜垂(約45度)",
          "[圖(D)] 立柱頂端有一個黑色方形箱體,箱體一面寫著「STOP」、另一面寫著「GO」(白色字),箱體下方有支架"
        ],
        "answer": 2,
        "explanation": "(114學測英文第36題)本題原為四張照片選項,已改以文字描述(非官方文字);答題依據為文章:Knight 提出的信號機是以鐵路的活動臂板信號為基礎,臂板水平伸出表示停止、下斜成45度角表示前進,夜間另加紅、綠色煤氣燈,即臂板向下斜垂且附燈的款式。"
      },
      {
        "id": "english-real-114-q37",
        "origNo": 37,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "While waiting to cross the street at busy intersections, have you ever wondered who invented the traffic light? Most people credit the first traffic light to Nottingham engineer John Peake Knight. A railway manager, Knight specialized in designing the signaling system for Britain’s growing railway network in the 1860s. He saw no reason why this could not be adapted for use on the busy London intersections. Thus, he proposed a signaling system based on the railway movable-arm signal: Arms extending horizontally commanded drivers to stop, whereas arms lowered to a 45-degree angle told drivers to move on, resembling a traffic director’s gestures. Red and green gas lamps were added to the signal for use at night. A police officer was stationed by the side to operate the system.\nKnight’s traffic signal was installed near London’s Westminster Bridge in December 1868, but the system was short-lived. A gas leak one month later caused an explosion in the lights, injuring the policeman operating it. Deemed a public hazard, the project was immediately dropped, and traffic lights were banned until their return in 1929 back to the British streets.\nIn the early 1900s, versions of the British traffic lights appeared in big cities in America, where traffic was on a sharp rise. Systems using movable arms were popular in Chicago, while those using the red and green lights were adopted in San Francisco. Patents with innovations on Knight’s ideas were filed nationwide. A major breakthrough was the yellow light invented by a Detroit police officer William Potts. Installed in Detroit in 1920, Potts’ three-color system allowed for the added signal “proceed with caution” to be displayed.\nNow, with the emergence of self-driving cars, researchers have begun to suggest that traffic signals are no longer necessary. Intersections will operate in a way that cars automatically adjust their speed to cross through, while maintaining safe distances from other vehicles. In the near future, we may experience a brand new form of traffic management!",
        "question": "Which of the following statements is true, according to the passage?",
        "options": [
          "Knight was injured in the explosion of his traffic light.",
          "Potts’ traffic light was the first one to appear in the USA.",
          "The first traffic signal originated from the idea of a traffic director.",
          "Future vehicles may not need traffic lights to cross an intersection."
        ],
        "answer": 3,
        "explanation": "(114學測英文第37題,答案為「Future vehicles may not need traffic lights to cross an intersection.」)"
      },
      {
        "id": "english-real-114-q38",
        "origNo": 38,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "While waiting to cross the street at busy intersections, have you ever wondered who invented the traffic light? Most people credit the first traffic light to Nottingham engineer John Peake Knight. A railway manager, Knight specialized in designing the signaling system for Britain’s growing railway network in the 1860s. He saw no reason why this could not be adapted for use on the busy London intersections. Thus, he proposed a signaling system based on the railway movable-arm signal: Arms extending horizontally commanded drivers to stop, whereas arms lowered to a 45-degree angle told drivers to move on, resembling a traffic director’s gestures. Red and green gas lamps were added to the signal for use at night. A police officer was stationed by the side to operate the system.\nKnight’s traffic signal was installed near London’s Westminster Bridge in December 1868, but the system was short-lived. A gas leak one month later caused an explosion in the lights, injuring the policeman operating it. Deemed a public hazard, the project was immediately dropped, and traffic lights were banned until their return in 1929 back to the British streets.\nIn the early 1900s, versions of the British traffic lights appeared in big cities in America, where traffic was on a sharp rise. Systems using movable arms were popular in Chicago, while those using the red and green lights were adopted in San Francisco. Patents with innovations on Knight’s ideas were filed nationwide. A major breakthrough was the yellow light invented by a Detroit police officer William Potts. Installed in Detroit in 1920, Potts’ three-color system allowed for the added signal “proceed with caution” to be displayed.\nNow, with the emergence of self-driving cars, researchers have begun to suggest that traffic signals are no longer necessary. Intersections will operate in a way that cars automatically adjust their speed to cross through, while maintaining safe distances from other vehicles. In the near future, we may experience a brand new form of traffic management!",
        "question": "Here is a sentence: “This design was adopted in later traffic light designs across the world.”\nWhich paragraph is most suitable to have it as the final sentence?",
        "options": [
          "Paragraph 1.",
          "Paragraph 2.",
          "Paragraph 3.",
          "Paragraph 4."
        ],
        "answer": 2,
        "explanation": "(114學測英文第38題,答案為「Paragraph 3.」)"
      },
      {
        "id": "english-real-114-q39",
        "origNo": 39,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "Typically featuring zombies and serial killers, horror movies are too frightening to be fun for some people. But many others enjoy a good fear spectacle, and line up to see the latest scary movie. Given the variations in preferences, new studies have started to untangle the benefits and risks of horror movies.\nOne benefit of horror movies revolves around the concept of so-called “safe fear.” When watching a frightening film, people are in the comfort of their own home or theater seats rather than under the threat of any real danger. In a controlled environment, these films may actually reduce the negative impact on viewers and help them become tougher. Secondly, as people are drawn into the story, they tend to take the perspective of the characters and rehearse the plot unconsciously. Researchers believe that viewers are learning vicariously this way, picking up tips on how to handle threats in the real world. In addition, studies show that the thrill and excitement linked with scary films can be therapeutic: It allows viewers to release bottled-up emotions and experience a sense of relief after the movie is over. This probably explains why during the COVID-19 pandemic, horror and pandemic thrillers were the most-watched movies on digital movie apps.\nHowever, researchers also find that horror movies can have negative effects on some people. People who are more sensitive to anxiety can panic after viewing a thriller. For those with unpleasant experiences, trauma may be triggered by the themes and images in the movies, which could make their symptoms worse. Furthermore, watching horror movies can disturb sleep patterns, as the residual fear and anxiety they evoke may keep people awake all night, thus leading to fatigue and irritability the following day. Finally, specialists warn that frightening films can have a negative impact on children. Children under 14 who watch horror movies have a greater chance of developing anxiety later in adulthood. Worse yet, exposure to graphic violence and bloodshed can make them less sensitive to real-life violence and more accepting of aggression.",
        "question": "What field of study does the research mentioned in the passage most likely belong to?",
        "options": [
          "Psychology.",
          "Education.",
          "Philosophy.",
          "Communication."
        ],
        "answer": 0,
        "explanation": "(114學測英文第39題,答案為「Psychology.」)"
      },
      {
        "id": "english-real-114-q40",
        "origNo": 40,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "Typically featuring zombies and serial killers, horror movies are too frightening to be fun for some people. But many others enjoy a good fear spectacle, and line up to see the latest scary movie. Given the variations in preferences, new studies have started to untangle the benefits and risks of horror movies.\nOne benefit of horror movies revolves around the concept of so-called “safe fear.” When watching a frightening film, people are in the comfort of their own home or theater seats rather than under the threat of any real danger. In a controlled environment, these films may actually reduce the negative impact on viewers and help them become tougher. Secondly, as people are drawn into the story, they tend to take the perspective of the characters and rehearse the plot unconsciously. Researchers believe that viewers are learning vicariously this way, picking up tips on how to handle threats in the real world. In addition, studies show that the thrill and excitement linked with scary films can be therapeutic: It allows viewers to release bottled-up emotions and experience a sense of relief after the movie is over. This probably explains why during the COVID-19 pandemic, horror and pandemic thrillers were the most-watched movies on digital movie apps.\nHowever, researchers also find that horror movies can have negative effects on some people. People who are more sensitive to anxiety can panic after viewing a thriller. For those with unpleasant experiences, trauma may be triggered by the themes and images in the movies, which could make their symptoms worse. Furthermore, watching horror movies can disturb sleep patterns, as the residual fear and anxiety they evoke may keep people awake all night, thus leading to fatigue and irritability the following day. Finally, specialists warn that frightening films can have a negative impact on children. Children under 14 who watch horror movies have a greater chance of developing anxiety later in adulthood. Worse yet, exposure to graphic violence and bloodshed can make them less sensitive to real-life violence and more accepting of aggression.",
        "question": "What does the author mean by “learning vicariously” in the second paragraph?",
        "options": [
          "Making inquiries without reservation.",
          "Gaining knowledge through observation.",
          "Acquiring insights by face-to-face interaction.",
          "Obtaining information from personal experience."
        ],
        "answer": 1,
        "explanation": "(114學測英文第40題,答案為「Gaining knowledge through observation.」)"
      },
      {
        "id": "english-real-114-q41",
        "origNo": 41,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "Typically featuring zombies and serial killers, horror movies are too frightening to be fun for some people. But many others enjoy a good fear spectacle, and line up to see the latest scary movie. Given the variations in preferences, new studies have started to untangle the benefits and risks of horror movies.\nOne benefit of horror movies revolves around the concept of so-called “safe fear.” When watching a frightening film, people are in the comfort of their own home or theater seats rather than under the threat of any real danger. In a controlled environment, these films may actually reduce the negative impact on viewers and help them become tougher. Secondly, as people are drawn into the story, they tend to take the perspective of the characters and rehearse the plot unconsciously. Researchers believe that viewers are learning vicariously this way, picking up tips on how to handle threats in the real world. In addition, studies show that the thrill and excitement linked with scary films can be therapeutic: It allows viewers to release bottled-up emotions and experience a sense of relief after the movie is over. This probably explains why during the COVID-19 pandemic, horror and pandemic thrillers were the most-watched movies on digital movie apps.\nHowever, researchers also find that horror movies can have negative effects on some people. People who are more sensitive to anxiety can panic after viewing a thriller. For those with unpleasant experiences, trauma may be triggered by the themes and images in the movies, which could make their symptoms worse. Furthermore, watching horror movies can disturb sleep patterns, as the residual fear and anxiety they evoke may keep people awake all night, thus leading to fatigue and irritability the following day. Finally, specialists warn that frightening films can have a negative impact on children. Children under 14 who watch horror movies have a greater chance of developing anxiety later in adulthood. Worse yet, exposure to graphic violence and bloodshed can make them less sensitive to real-life violence and more accepting of aggression.",
        "question": "Which of the following statements about horror movies can be inferred from the passage?",
        "options": [
          "Most horror movie lovers are prone to aggressive behavior.",
          "There are far more benefits to horror movies than disadvantages.",
          "COVID-19 was an important source of inspiration for horror movies.",
          "Watching horror movies may have a long-term effect on personality."
        ],
        "answer": 3,
        "explanation": "(114學測英文第41題,答案為「Watching horror movies may have a long-term effect on personality.」)"
      },
      {
        "id": "english-real-114-q42",
        "origNo": 42,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "Typically featuring zombies and serial killers, horror movies are too frightening to be fun for some people. But many others enjoy a good fear spectacle, and line up to see the latest scary movie. Given the variations in preferences, new studies have started to untangle the benefits and risks of horror movies.\nOne benefit of horror movies revolves around the concept of so-called “safe fear.” When watching a frightening film, people are in the comfort of their own home or theater seats rather than under the threat of any real danger. In a controlled environment, these films may actually reduce the negative impact on viewers and help them become tougher. Secondly, as people are drawn into the story, they tend to take the perspective of the characters and rehearse the plot unconsciously. Researchers believe that viewers are learning vicariously this way, picking up tips on how to handle threats in the real world. In addition, studies show that the thrill and excitement linked with scary films can be therapeutic: It allows viewers to release bottled-up emotions and experience a sense of relief after the movie is over. This probably explains why during the COVID-19 pandemic, horror and pandemic thrillers were the most-watched movies on digital movie apps.\nHowever, researchers also find that horror movies can have negative effects on some people. People who are more sensitive to anxiety can panic after viewing a thriller. For those with unpleasant experiences, trauma may be triggered by the themes and images in the movies, which could make their symptoms worse. Furthermore, watching horror movies can disturb sleep patterns, as the residual fear and anxiety they evoke may keep people awake all night, thus leading to fatigue and irritability the following day. Finally, specialists warn that frightening films can have a negative impact on children. Children under 14 who watch horror movies have a greater chance of developing anxiety later in adulthood. Worse yet, exposure to graphic violence and bloodshed can make them less sensitive to real-life violence and more accepting of aggression.",
        "question": "How does the author develop the ideas in this passage?",
        "options": [
          "By defining and illustrating a concept.",
          "By showing opposing views of an issue.",
          "By presenting cause and effect of a problem.",
          "By providing steps for settling a disagreement."
        ],
        "answer": 1,
        "explanation": "(114學測英文第42題,答案為「By showing opposing views of an issue.」)"
      },
      {
        "id": "english-real-114-q43",
        "origNo": 43,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Russia is widely portrayed as the most alcohol-dependent country in the world. Critics of the country say that drinking is almost an inherent trait of the Russian people. However, there is more to the story.\nThe consumption of alcoholic beverages was unusual in ancient Russia. Before the adoption of Christianity in Russia (10th century), there were no vineyards and therefore no wine. People only drank beverages with low alcohol content. Vodka, Russia’s national drink, was not a Russian invention. The liquid was originally a grape alcohol introduced from France in the late 14th century. The first Russian-made vodka appeared in the 15th century, and the drink remained relatively low in alcohol content until the mid-18th century.\nThere is contradictory information about Russians’ inclination toward alcohol in the 15th and 16th centuries. Some documents noted that Russians “indulge in excessive drinking whenever the occasion arises,” while others claimed that Russians “rarely drink wine.” The heaviest drinkers in medieval Europe were actually Germans. There were many sayings about their desire for alcohol, such as “drunk as a German.”\nThe Russian state played a significant role in the spread of alcohol consumption in the country. In the 19th century, the emperors began to establish a state monopoly, largely due to the rise of illegal production of low-quality vodka. Thus, only the government was permitted to produce the alcohol. This soon filled the state treasury with huge revenues, but it also encouraged vodka consumption. The situation worsened when the industrial production of vodka began in the country, causing its prices to drop sharply and making it available to even low-income citizens.\nMeanwhile, a powerful anti-alcohol movement started in the 19th century. Government policies were made and public organizations established to prevent the spread of alcoholism in the country. The movement continued over the years; however, the problem remains. Although Russia does not occupy first place when it comes to alcohol consumption per capita, it is still close to the top.",
        "question": "What is the main purpose of the second paragraph in the passage?",
        "options": [
          "To discuss the content of alcoholic drinks in ancient Europe.",
          "To highlight the French impact on Russians’ drinking habits.",
          "To argue against the assumption that Russians are born drinkers.",
          "To link Russians’ vodka consumption to their adoption of Christianity."
        ],
        "answer": 2,
        "explanation": "(114學測英文第43題,答案為「To argue against the assumption that Russians are born drinkers.」)"
      },
      {
        "id": "english-real-114-q44",
        "origNo": 44,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Russia is widely portrayed as the most alcohol-dependent country in the world. Critics of the country say that drinking is almost an inherent trait of the Russian people. However, there is more to the story.\nThe consumption of alcoholic beverages was unusual in ancient Russia. Before the adoption of Christianity in Russia (10th century), there were no vineyards and therefore no wine. People only drank beverages with low alcohol content. Vodka, Russia’s national drink, was not a Russian invention. The liquid was originally a grape alcohol introduced from France in the late 14th century. The first Russian-made vodka appeared in the 15th century, and the drink remained relatively low in alcohol content until the mid-18th century.\nThere is contradictory information about Russians’ inclination toward alcohol in the 15th and 16th centuries. Some documents noted that Russians “indulge in excessive drinking whenever the occasion arises,” while others claimed that Russians “rarely drink wine.” The heaviest drinkers in medieval Europe were actually Germans. There were many sayings about their desire for alcohol, such as “drunk as a German.”\nThe Russian state played a significant role in the spread of alcohol consumption in the country. In the 19th century, the emperors began to establish a state monopoly, largely due to the rise of illegal production of low-quality vodka. Thus, only the government was permitted to produce the alcohol. This soon filled the state treasury with huge revenues, but it also encouraged vodka consumption. The situation worsened when the industrial production of vodka began in the country, causing its prices to drop sharply and making it available to even low-income citizens.\nMeanwhile, a powerful anti-alcohol movement started in the 19th century. Government policies were made and public organizations established to prevent the spread of alcoholism in the country. The movement continued over the years; however, the problem remains. Although Russia does not occupy first place when it comes to alcohol consumption per capita, it is still close to the top.",
        "question": "Which of the following is true about vodka production?",
        "options": [
          "Vodka production in Russia started in the 15th century.",
          "The first vodka made from wheat was imported from France.",
          "Germany was the biggest vodka producer in medieval Europe.",
          "Russian people were encouraged to make their own vodka in the 19th century."
        ],
        "answer": 0,
        "explanation": "(114學測英文第44題,答案為「Vodka production in Russia started in the 15th century.」)"
      },
      {
        "id": "english-real-114-q45",
        "origNo": 45,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Russia is widely portrayed as the most alcohol-dependent country in the world. Critics of the country say that drinking is almost an inherent trait of the Russian people. However, there is more to the story.\nThe consumption of alcoholic beverages was unusual in ancient Russia. Before the adoption of Christianity in Russia (10th century), there were no vineyards and therefore no wine. People only drank beverages with low alcohol content. Vodka, Russia’s national drink, was not a Russian invention. The liquid was originally a grape alcohol introduced from France in the late 14th century. The first Russian-made vodka appeared in the 15th century, and the drink remained relatively low in alcohol content until the mid-18th century.\nThere is contradictory information about Russians’ inclination toward alcohol in the 15th and 16th centuries. Some documents noted that Russians “indulge in excessive drinking whenever the occasion arises,” while others claimed that Russians “rarely drink wine.” The heaviest drinkers in medieval Europe were actually Germans. There were many sayings about their desire for alcohol, such as “drunk as a German.”\nThe Russian state played a significant role in the spread of alcohol consumption in the country. In the 19th century, the emperors began to establish a state monopoly, largely due to the rise of illegal production of low-quality vodka. Thus, only the government was permitted to produce the alcohol. This soon filled the state treasury with huge revenues, but it also encouraged vodka consumption. The situation worsened when the industrial production of vodka began in the country, causing its prices to drop sharply and making it available to even low-income citizens.\nMeanwhile, a powerful anti-alcohol movement started in the 19th century. Government policies were made and public organizations established to prevent the spread of alcoholism in the country. The movement continued over the years; however, the problem remains. Although Russia does not occupy first place when it comes to alcohol consumption per capita, it is still close to the top.",
        "question": "What does “This” in the fourth paragraph refer to?",
        "options": [
          "The alcohol.",
          "The government.",
          "The illegal production.",
          "The state monopoly."
        ],
        "answer": 3,
        "explanation": "(114學測英文第45題,答案為「The state monopoly.」)"
      },
      {
        "id": "english-real-114-q46",
        "origNo": 46,
        "sourceYear": 114,
        "part": "閱讀測驗",
        "passageId": "english-real-114-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Russia is widely portrayed as the most alcohol-dependent country in the world. Critics of the country say that drinking is almost an inherent trait of the Russian people. However, there is more to the story.\nThe consumption of alcoholic beverages was unusual in ancient Russia. Before the adoption of Christianity in Russia (10th century), there were no vineyards and therefore no wine. People only drank beverages with low alcohol content. Vodka, Russia’s national drink, was not a Russian invention. The liquid was originally a grape alcohol introduced from France in the late 14th century. The first Russian-made vodka appeared in the 15th century, and the drink remained relatively low in alcohol content until the mid-18th century.\nThere is contradictory information about Russians’ inclination toward alcohol in the 15th and 16th centuries. Some documents noted that Russians “indulge in excessive drinking whenever the occasion arises,” while others claimed that Russians “rarely drink wine.” The heaviest drinkers in medieval Europe were actually Germans. There were many sayings about their desire for alcohol, such as “drunk as a German.”\nThe Russian state played a significant role in the spread of alcohol consumption in the country. In the 19th century, the emperors began to establish a state monopoly, largely due to the rise of illegal production of low-quality vodka. Thus, only the government was permitted to produce the alcohol. This soon filled the state treasury with huge revenues, but it also encouraged vodka consumption. The situation worsened when the industrial production of vodka began in the country, causing its prices to drop sharply and making it available to even low-income citizens.\nMeanwhile, a powerful anti-alcohol movement started in the 19th century. Government policies were made and public organizations established to prevent the spread of alcoholism in the country. The movement continued over the years; however, the problem remains. Although Russia does not occupy first place when it comes to alcohol consumption per capita, it is still close to the top.",
        "question": "How does the author conclude the passage in the last paragraph?",
        "options": [
          "By providing further facts.",
          "By summarizing the main ideas.",
          "By raising a new problem.",
          "By making a future prediction."
        ],
        "answer": 0,
        "explanation": "(114學測英文第46題,答案為「By providing further facts.」)"
      },
      {
        "id": "english-real-114-q47",
        "origNo": 47,
        "sourceYear": 114,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-114-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "A zoo is a place where animals in captivity are put on display for humans to see. While early zoos put emphasis on displaying as many unusual creatures as possible, most modern zoos now focus on conservation and education. Still, many animal rights activists believe the cost of confining animals outweighs the benefits. What are your opinions? Feel free to share your ideas on this forum.\nA. Amy\nPersonally I’m against zoos, though I do understand some of the arguments why they should exist. I don’t agree with caging animals for our entertainment.\nB. Ben\nWhat gives humans the right to capture, confine, or breed other species? Even if an animal is endangered, does that justify restricting its freedom?\nC. Cathy\nZoos are a tradition, and a visit to a zoo is a wholesome family activity. Wildlife encounters are unforgettable experiences for children and adults alike.\nD. Daniel\nTo me, a zoo can be a good place for endangered species which have difficulty finding suitable mates in the wild.\nE. Eddie\nMy childhood memory of a polar bear pacing back and forth in a very small space in a zoo keeps haunting me. Is it a good idea to keep animals in sites not suited to them?\nF. Frank\nWell, if zoos are an inevitability, zoo keepers must provide the best possible conditions for the animals that live in captivity—to say the least!\nG. George\nZoos have an educational aspect to it. It’s easier to learn about an animal by seeing them in person.\nH. Henry\nMost animals in zoos are not endangered, nor are they being prepared for release into natural habitats. In fact, it is nearly impossible to release captive-bred animals.\nI. Irene\nFostering empathy…By seeing an animal up close, the public could be encouraged to be more sensitive and compassionate to a species that is facing extinction in the wild.\nJ. Jack\nIn making a case for or against zoos, both sides argue that they’re saving animals. Whether or not zoos benefit the animal community, they certainly do make money. Like it or not, zoos will continue to exist as long as there is a demand for them.",
        "question": "47-48 請根據選文內容,從文章中選出兩個單詞,分別填入下列句子空格,並視句型結構需要作適當的字形變化,使句子語意完整、語法正確,且符合全文文意。每格限填一個單詞(word)。(填充,4分;第47、48格各2分)\nModern zoos serve the purposes of conserving endangered species as well as ______(47)______ visitors. However, some people are against zoos because the animals ______(48)______ there will lose the freedom they enjoy in the wild.\n本題請作答第 47 格。",
        "explanation": "(114學測英文第47題,官方參考答案)entertaining 或 educating(兩者皆為滿分答案;即 “…as well as entertaining / educating visitors”,須做字形變化為 -ing 形式,對應文章中的 entertainment 與 education)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-114-q48",
        "origNo": 48,
        "sourceYear": 114,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-114-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "A zoo is a place where animals in captivity are put on display for humans to see. While early zoos put emphasis on displaying as many unusual creatures as possible, most modern zoos now focus on conservation and education. Still, many animal rights activists believe the cost of confining animals outweighs the benefits. What are your opinions? Feel free to share your ideas on this forum.\nA. Amy\nPersonally I’m against zoos, though I do understand some of the arguments why they should exist. I don’t agree with caging animals for our entertainment.\nB. Ben\nWhat gives humans the right to capture, confine, or breed other species? Even if an animal is endangered, does that justify restricting its freedom?\nC. Cathy\nZoos are a tradition, and a visit to a zoo is a wholesome family activity. Wildlife encounters are unforgettable experiences for children and adults alike.\nD. Daniel\nTo me, a zoo can be a good place for endangered species which have difficulty finding suitable mates in the wild.\nE. Eddie\nMy childhood memory of a polar bear pacing back and forth in a very small space in a zoo keeps haunting me. Is it a good idea to keep animals in sites not suited to them?\nF. Frank\nWell, if zoos are an inevitability, zoo keepers must provide the best possible conditions for the animals that live in captivity—to say the least!\nG. George\nZoos have an educational aspect to it. It’s easier to learn about an animal by seeing them in person.\nH. Henry\nMost animals in zoos are not endangered, nor are they being prepared for release into natural habitats. In fact, it is nearly impossible to release captive-bred animals.\nI. Irene\nFostering empathy…By seeing an animal up close, the public could be encouraged to be more sensitive and compassionate to a species that is facing extinction in the wild.\nJ. Jack\nIn making a case for or against zoos, both sides argue that they’re saving animals. Whether or not zoos benefit the animal community, they certainly do make money. Like it or not, zoos will continue to exist as long as there is a demand for them.",
        "question": "47-48 請根據選文內容,從文章中選出兩個單詞,分別填入下列句子空格,並視句型結構需要作適當的字形變化,使句子語意完整、語法正確,且符合全文文意。每格限填一個單詞(word)。(填充,4分;第47、48格各2分)\nModern zoos serve the purposes of conserving endangered species as well as ______(47)______ visitors. However, some people are against zoos because the animals ______(48)______ there will lose the freedom they enjoy in the wild.\n本題請作答第 48 格。",
        "explanation": "(114學測英文第48題,官方參考答案)confined 或 caged(兩者皆為滿分答案;即 “…the animals confined / caged there will lose the freedom…”,為過去分詞作後置修飾,須做字形變化,原文為 confining / caging)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-114-q49",
        "origNo": 49,
        "sourceYear": 114,
        "part": "混合題",
        "type": "multi",
        "passageId": "english-real-114-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "A zoo is a place where animals in captivity are put on display for humans to see. While early zoos put emphasis on displaying as many unusual creatures as possible, most modern zoos now focus on conservation and education. Still, many animal rights activists believe the cost of confining animals outweighs the benefits. What are your opinions? Feel free to share your ideas on this forum.\nA. Amy\nPersonally I’m against zoos, though I do understand some of the arguments why they should exist. I don’t agree with caging animals for our entertainment.\nB. Ben\nWhat gives humans the right to capture, confine, or breed other species? Even if an animal is endangered, does that justify restricting its freedom?\nC. Cathy\nZoos are a tradition, and a visit to a zoo is a wholesome family activity. Wildlife encounters are unforgettable experiences for children and adults alike.\nD. Daniel\nTo me, a zoo can be a good place for endangered species which have difficulty finding suitable mates in the wild.\nE. Eddie\nMy childhood memory of a polar bear pacing back and forth in a very small space in a zoo keeps haunting me. Is it a good idea to keep animals in sites not suited to them?\nF. Frank\nWell, if zoos are an inevitability, zoo keepers must provide the best possible conditions for the animals that live in captivity—to say the least!\nG. George\nZoos have an educational aspect to it. It’s easier to learn about an animal by seeing them in person.\nH. Henry\nMost animals in zoos are not endangered, nor are they being prepared for release into natural habitats. In fact, it is nearly impossible to release captive-bred animals.\nI. Irene\nFostering empathy…By seeing an animal up close, the public could be encouraged to be more sensitive and compassionate to a species that is facing extinction in the wild.\nJ. Jack\nIn making a case for or against zoos, both sides argue that they’re saving animals. Whether or not zoos benefit the animal community, they certainly do make money. Like it or not, zoos will continue to exist as long as there is a demand for them.",
        "question": "From (A) to (J) in the above forum discussion, which ONES show a positive attitude toward zoos?(多選題,4分)\n(非官方註記:選項 A 至 J 即上方討論串中 A. 至 J. 十位發言者的發言,此處以發言者姓名代表)\n(非官方註記:本站選項不標 A、B、C 代號,且順序每次隨機排列,請直接勾選符合的選項。)",
        "options": [
          "Amy",
          "Ben",
          "Cathy",
          "Daniel",
          "Eddie",
          "Frank",
          "George",
          "Henry",
          "Irene",
          "Jack"
        ],
        "answers": [
          2,
          3,
          6,
          8
        ],
        "explanation": "(114學測英文第49題,答案為「Cathy」、「Daniel」、「George」、「Irene」)"
      },
      {
        "id": "english-real-114-q50",
        "origNo": 50,
        "sourceYear": 114,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-114-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "A zoo is a place where animals in captivity are put on display for humans to see. While early zoos put emphasis on displaying as many unusual creatures as possible, most modern zoos now focus on conservation and education. Still, many animal rights activists believe the cost of confining animals outweighs the benefits. What are your opinions? Feel free to share your ideas on this forum.\nA. Amy\nPersonally I’m against zoos, though I do understand some of the arguments why they should exist. I don’t agree with caging animals for our entertainment.\nB. Ben\nWhat gives humans the right to capture, confine, or breed other species? Even if an animal is endangered, does that justify restricting its freedom?\nC. Cathy\nZoos are a tradition, and a visit to a zoo is a wholesome family activity. Wildlife encounters are unforgettable experiences for children and adults alike.\nD. Daniel\nTo me, a zoo can be a good place for endangered species which have difficulty finding suitable mates in the wild.\nE. Eddie\nMy childhood memory of a polar bear pacing back and forth in a very small space in a zoo keeps haunting me. Is it a good idea to keep animals in sites not suited to them?\nF. Frank\nWell, if zoos are an inevitability, zoo keepers must provide the best possible conditions for the animals that live in captivity—to say the least!\nG. George\nZoos have an educational aspect to it. It’s easier to learn about an animal by seeing them in person.\nH. Henry\nMost animals in zoos are not endangered, nor are they being prepared for release into natural habitats. In fact, it is nearly impossible to release captive-bred animals.\nI. Irene\nFostering empathy…By seeing an animal up close, the public could be encouraged to be more sensitive and compassionate to a species that is facing extinction in the wild.\nJ. Jack\nIn making a case for or against zoos, both sides argue that they’re saving animals. Whether or not zoos benefit the animal community, they certainly do make money. Like it or not, zoos will continue to exist as long as there is a demand for them.",
        "question": "Which phrase on the forum discussion carries the meaning of “building the ability to understand and share the feelings of others”?(簡答題,2分)",
        "explanation": "(114學測英文第50題,官方參考答案)fostering empathy(首字大寫 Fostering empathy. 亦為滿分答案;出自 Irene 的發言 “Fostering empathy…”)。評分原則:完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-114-q51",
        "origNo": 51,
        "sourceYear": 114,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第1句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n人類的想像和創意是科技進步最大的驅動力。",
        "explanation": "(官方編號:中譯英第1題)官方參考答案(滿分;斜線前後為皆可接受的等值譯法):Human’s / Human / Mankind’s imagination and creativity is the biggest / strongest driving force / power for technological advancement. / advances. / advance.。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。所評量的字詞大致以大考中心詞彙表一至四級為主;官方命題說明:第一句要使用比較級(官方說明原文用語)。"
      },
      {
        "id": "english-real-114-q52",
        "origNo": 52,
        "sourceYear": 114,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第2句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n過去在科幻電影中出現的神奇物件,現在正逐一成真。",
        "explanation": "(官方編號:中譯英第2題)官方參考答案(滿分;斜線前後為皆可接受的等值譯法):Amazing / Fantastic things / objects that appeared in science-fiction / sci-fi movies / films in the past are now becoming reality / real one by one.。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。所評量的字詞大致以大考中心詞彙表一至四級為主;官方命題說明:第二句要用關係子句,依題意關係子句須用過去式,主要子句則涉及現在進行式是否使用正確。"
      },
      {
        "id": "english-real-114-q53",
        "origNo": 53,
        "sourceYear": 114,
        "part": "非選擇題",
        "type": "written",
        "question": "英文作文(20分):依提示寫一篇英文作文,文長至少120個單詞(words)。\n提示:每逢颱風逼近臺灣,各縣市政府會依氣象預報的內容而決定隔日是否停止上班上課。請針對這個議題寫一篇英文作文,文分兩段。第一段根據下方對比圖片,描述颱風假時,實際上可能出現的兩種不同情景;第二段說明你對放颱風假的看法與經驗。\n[圖片示意(非官方文字,原題為兩張並排的彩色照片):左圖——室內公共場所(像是美食街或電影院大廳),大批民眾在圍欄隔出的隊伍中排隊等候,人潮擁擠;右圖——街頭大雨傾盆,數名穿著雨衣的機車騎士停在路口等候,旁邊有汽車與交通號誌,雨勢很大、視線模糊。]",
        "explanation": "(官方編號:作文)原題附兩張彩色照片(左:擁擠排隊的人潮;右:大雨中的街頭與機車騎士),此處以文字描述取代,並非官方文字。本題無單一參考範文,官方僅公布評分原則:官方命題說明——主題為颱風假,屬生活情境,貼近考生的生活;考生須依作答提示與兩張對比圖片,寫一篇文長至少120個單詞、分兩段的作文。第一段須根據對比圖片,描述颱風假時實際上可能出現的兩種不同情景;第二段說明對放颱風假的看法與經驗。評分重點在於內容須符合題目要求、提供充分具體之細節、句構語法及用字適切、拼字與標點符號使用得當;內容充實以及語言能力表現佳應是考生得分之重要元素。評分方式:依內容、組織、文法句構、字彙拼字四項表現評分,各項得分加總後給予一個整體分數(holistic score),總分1至20分,分五等級:特優(19-20分)、優(15-18分)、可(10-14分)、差(5-9分)、劣(0-4分)。字數明顯不足者扣總分1分;未分段者亦扣總分1分。評分指標(表一,每項優5-4分、可3分、差2-1分、劣0分):【內容】優:主題(句)清楚切題,並有具體、完整的相關細節支持;可:主題不夠清楚或突顯,部分相關敘述發展不全;差:主題不明,大部分相關敘述發展不全或與主題無關;劣:文不對題或沒寫(凡文不對題或沒寫者,其他各項均以零分計算)。【組織】優:重點分明,有開頭、發展、結尾,前後連貫,轉承語使用得當;可:重點安排不妥,前後發展比例與轉承語使用欠妥;差:重點不明、前後不連貫;劣:全文毫無組織或未按提示寫作。【文法、句構】優:全文幾無文法、格式、標點錯誤,文句結構富變化;可:文法、格式、標點錯誤少,且未影響文意之表達;差:文法、格式、標點錯誤多,且明顯影響文意之表達;劣:全文文法錯誤嚴重,導致文意不明。【字彙、拼字】優:用字精確、得宜,且幾無拼字、大小寫錯誤;可:字詞單調、重複,用字偶有不當,少許拼字、大小寫錯誤,但不影響文意之表達;差:用字、拼字、大小寫錯誤多,明顯影響文意之表達;劣:只寫出或抄襲與題意有關的零碎字詞。"
      }
    ],
  },
  // 115學年度學科能力測驗 英文考科 (transcribed from official CEEC PDFs, ceec.edu.tw; exam held January 2026)
  // Structure: 第壹部分 選擇題 Q1-46 (詞彙題 1-10, 綜合測驗 11-20, 文意選填 21-30, 篇章結構 31-34, 閱讀測驗 35-46);
  // 第貳部分 混合題 Q47-50 (47,48 written blanks; 49 multi-select over six shops, official answer ADE; 50 written short answer);
  // 第參部分 非選擇題 = 中譯英 x2 + 英文作文 (synthetic origNo 51, 52, 53 following the last 混合題 number 50).
  // Sources:
  //   (a) 試題本: https://www.ceec.edu.tw/files/file_pool/1/0q054532302653501476/02-115%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E8%A9%A6%E5%8D%B7.pdf
  //   (b) 選擇題參考答案: https://www.ceec.edu.tw/files/file_pool/1/0Q020545788179667774/02-115%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88.pdf
  //       (a second copy of the same key: https://www.ceec.edu.tw/files/file_pool/1/0q040594609847120321/02-115%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E7%AD%94%E6%A1%88.pdf)
  //   (c) 非選擇題滿分參考答案與評分原則: https://www.ceec.edu.tw/files/file_pool/1/0q054335046832331817/115%E5%AD%B8%E6%B8%AC%E8%8B%B1%E6%96%87%E8%80%83%E7%A7%91%E9%9D%9E%E9%81%B8%E6%93%87%E9%A1%8C%E5%8F%83%E8%80%83%E7%AD%94%E6%A1%88%E8%88%87%E8%A9%95%E5%88%86%E5%8E%9F%E5%89%87.pdf
  // Skipped questions: none (all 46 choice questions + 混合題 Q47-50 + 中譯英 x2 + 作文 included).
  // Image-dependent items converted to text:
  //   Q38 (options were four black-and-white outline maps of the Weddell Sea showing South Georgia, Elephant Island, Antarctica and a route line
  //     with arrows; replaced by a non-official Chinese text description of each map's route);
  //   混合題 shared passage (an illustrated street map of Wonder Village labelling the six shops; replaced by a one-line bracketed text note --
  //     the map is not needed to answer any of Q47-50, all needed information is in the six shop descriptions);
  //   作文 prompt (three black-and-white photos: a park scene with people walking dogs / a young family with a baby and a boy doing homework /
  //     a young couple feeding two pet dogs; replaced by text description).
  // LOW-CONFIDENCE: the Q38 map descriptions and the 作文 picture descriptions are my own plain-text readings of the images (fine details such as
  //   the exact number/pose of people and dogs, or the exact breed of dogs, may differ slightly); the official answer C for Q38 (open route:
  //   South Georgia -> down the east side -> round the south end of the Weddell Sea -> north along the west side, ending at a dot that is NOT
  //   Elephant Island) matches the passage (trapped in pack ice, drifted south then pushed northward, sank), so the answer itself is not in doubt.
  // Other notes: 混合題 is numbered 47-50 in this year's booklet (a passage about Wonder Village plus six shop descriptions A-F; 47-48 are two blanks
  //   of one summary sentence, 49 multi-select over the six shops (A)-(F), 50 short answer). The choice-answer PDF lists 47/48/50 as "／" and
  //   49 as ADE; the non-choice PDF gives full-mark answers 47 = innovation, 48 = blended, 50 = one of a kind (unlike 114, only one full-mark
  //   answer is listed for each). For Q49 the six options are the six shop names (the descriptions themselves are in the shared passage).
  //   English booklet text was taken from the PDF text layer (ASCII quotes/dashes converted to typographic ones after checking page images);
  //   italics/bold are not preserved. Q41 options use arrows (→) between materials (arrow glyphs did not survive text extraction).
  {
    sourceYear: 115,
    minutes: 100,
    questions: [
      {
        "id": "english-real-115-q1",
        "origNo": 1,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "The mayor has such a ______ schedule that it takes weeks to arrange an interview with her.",
        "options": [
          "hasty",
          "tight",
          "diligent",
          "routine"
        ],
        "answer": 1,
        "explanation": "(115學測英文第1題,答案為「tight」)"
      },
      {
        "id": "english-real-115-q2",
        "origNo": 2,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "Jane started as an ______ art designer, but now she has a professional studio of her own.",
        "options": [
          "official",
          "instant",
          "amateur",
          "elementary"
        ],
        "answer": 2,
        "explanation": "(115學測英文第2題,答案為「amateur」)"
      },
      {
        "id": "english-real-115-q3",
        "origNo": 3,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "The teaching ______ at the famous high school soon attracted more than a dozen well-qualified applicants.",
        "options": [
          "career",
          "vacancy",
          "expectation",
          "inspiration"
        ],
        "answer": 1,
        "explanation": "(115學測英文第3題,答案為「vacancy」)"
      },
      {
        "id": "english-real-115-q4",
        "origNo": 4,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "Designed by a young engineer, the new product has created far more profit than ______ expected.",
        "options": [
          "initially",
          "genuinely",
          "alternatively",
          "fundamentally"
        ],
        "answer": 0,
        "explanation": "(115學測英文第4題,答案為「initially」)"
      },
      {
        "id": "english-real-115-q5",
        "origNo": 5,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "It has been confirmed that a balanced ______ of fruit and vegetables is a key element to good health.",
        "options": [
          "dimension",
          "integration",
          "provision",
          "consumption"
        ],
        "answer": 3,
        "explanation": "(115學測英文第5題,答案為「consumption」)"
      },
      {
        "id": "english-real-115-q6",
        "origNo": 6,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "As a shy boy afraid of making public appearances, Timmy ______ the thought of speaking before large audiences.",
        "options": [
          "dreads",
          "stresses",
          "wanders",
          "escapes"
        ],
        "answer": 0,
        "explanation": "(115學測英文第6題,答案為「dreads」)"
      },
      {
        "id": "english-real-115-q7",
        "origNo": 7,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "To the newly-crowned winner of the piano competition, music is his life’s ______, which he has devoted himself to whole-heartedly.",
        "options": [
          "resource",
          "impact",
          "passion",
          "emphasis"
        ],
        "answer": 2,
        "explanation": "(115學測英文第7題,答案為「passion」)"
      },
      {
        "id": "english-real-115-q8",
        "origNo": 8,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "The drunk driver who shouted at passers-by and ______ them with glass bottles was quickly arrested by the police.",
        "options": [
          "shattered",
          "assaulted",
          "overturned",
          "condemned"
        ],
        "answer": 1,
        "explanation": "(115學測英文第8題,答案為「assaulted」)"
      },
      {
        "id": "english-real-115-q9",
        "origNo": 9,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "There were so many people at the bus station that I had to ______ my way through the crowd to board the bus in time.",
        "options": [
          "crash",
          "tumble",
          "elbow",
          "struggle"
        ],
        "answer": 2,
        "explanation": "(115學測英文第9題,答案為「elbow」)"
      },
      {
        "id": "english-real-115-q10",
        "origNo": 10,
        "sourceYear": 115,
        "part": "詞彙題",
        "question": "Deadly shootings on US campuses have raised ______ concerns about how to prevent such tragic incidents from happening again.",
        "options": [
          "swift",
          "brutal",
          "harsh",
          "grave"
        ],
        "answer": 3,
        "explanation": "(115學測英文第10題,答案為「grave」)"
      },
      {
        "id": "english-real-115-q11",
        "origNo": 11,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "From the campfire to the café, people have always gathered together to share the latest news. White rhinoceroses, (11), do the same thing—only their choice of meeting place is a giant pile of poop.\nA new study indicates that rhinos have a smelly way to (12). Scientists studying white rhinos in South Africa have found that these animals leave messages in their poop. In particular, they leave their poop in the same place for all the other members in the group to smell—just like humans leaving messages on social media. Furthermore, different rhinos leave different chemicals in their poop, which provide important (13) about the age, sex, general health, and reproductive conditions of each specific rhino. This is of great significance for the peace and harmony in the group. When all members in a group know what’s going on with each other, it is (14) that they will fight.\nThe researchers have even made “fake poop” to see how different rhinos would react. They find that dominant males are particularly (15) the “fake poop” that carries chemicals from females ready to mate. The males sniff it for longer duration and come back to the same spot more frequently, a clear sign that they are gathering information about mating opportunities from the poop.",
        "question": "空格 (11) 應填入下列哪一個選項?",
        "options": [
          "what is more",
          "it turns out",
          "in other words",
          "all in all"
        ],
        "answer": 1,
        "explanation": "(115學測英文第11題,答案為「it turns out」)"
      },
      {
        "id": "english-real-115-q12",
        "origNo": 12,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "From the campfire to the café, people have always gathered together to share the latest news. White rhinoceroses, (11), do the same thing—only their choice of meeting place is a giant pile of poop.\nA new study indicates that rhinos have a smelly way to (12). Scientists studying white rhinos in South Africa have found that these animals leave messages in their poop. In particular, they leave their poop in the same place for all the other members in the group to smell—just like humans leaving messages on social media. Furthermore, different rhinos leave different chemicals in their poop, which provide important (13) about the age, sex, general health, and reproductive conditions of each specific rhino. This is of great significance for the peace and harmony in the group. When all members in a group know what’s going on with each other, it is (14) that they will fight.\nThe researchers have even made “fake poop” to see how different rhinos would react. They find that dominant males are particularly (15) the “fake poop” that carries chemicals from females ready to mate. The males sniff it for longer duration and come back to the same spot more frequently, a clear sign that they are gathering information about mating opportunities from the poop.",
        "question": "空格 (12) 應填入下列哪一個選項?",
        "options": [
          "demonstrate",
          "immigrate",
          "communicate",
          "manipulate"
        ],
        "answer": 2,
        "explanation": "(115學測英文第12題,答案為「communicate」)"
      },
      {
        "id": "english-real-115-q13",
        "origNo": 13,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "From the campfire to the café, people have always gathered together to share the latest news. White rhinoceroses, (11), do the same thing—only their choice of meeting place is a giant pile of poop.\nA new study indicates that rhinos have a smelly way to (12). Scientists studying white rhinos in South Africa have found that these animals leave messages in their poop. In particular, they leave their poop in the same place for all the other members in the group to smell—just like humans leaving messages on social media. Furthermore, different rhinos leave different chemicals in their poop, which provide important (13) about the age, sex, general health, and reproductive conditions of each specific rhino. This is of great significance for the peace and harmony in the group. When all members in a group know what’s going on with each other, it is (14) that they will fight.\nThe researchers have even made “fake poop” to see how different rhinos would react. They find that dominant males are particularly (15) the “fake poop” that carries chemicals from females ready to mate. The males sniff it for longer duration and come back to the same spot more frequently, a clear sign that they are gathering information about mating opportunities from the poop.",
        "question": "空格 (13) 應填入下列哪一個選項?",
        "options": [
          "doubts",
          "icons",
          "matches",
          "clues"
        ],
        "answer": 3,
        "explanation": "(115學測英文第13題,答案為「clues」)"
      },
      {
        "id": "english-real-115-q14",
        "origNo": 14,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "From the campfire to the café, people have always gathered together to share the latest news. White rhinoceroses, (11), do the same thing—only their choice of meeting place is a giant pile of poop.\nA new study indicates that rhinos have a smelly way to (12). Scientists studying white rhinos in South Africa have found that these animals leave messages in their poop. In particular, they leave their poop in the same place for all the other members in the group to smell—just like humans leaving messages on social media. Furthermore, different rhinos leave different chemicals in their poop, which provide important (13) about the age, sex, general health, and reproductive conditions of each specific rhino. This is of great significance for the peace and harmony in the group. When all members in a group know what’s going on with each other, it is (14) that they will fight.\nThe researchers have even made “fake poop” to see how different rhinos would react. They find that dominant males are particularly (15) the “fake poop” that carries chemicals from females ready to mate. The males sniff it for longer duration and come back to the same spot more frequently, a clear sign that they are gathering information about mating opportunities from the poop.",
        "question": "空格 (14) 應填入下列哪一個選項?",
        "options": [
          "hardly surprising",
          "more acceptable",
          "truly important",
          "less likely"
        ],
        "answer": 3,
        "explanation": "(115學測英文第14題,答案為「less likely」)"
      },
      {
        "id": "english-real-115-q15",
        "origNo": 15,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze1",
        "passageTitle": "綜合測驗 第11至15題",
        "passage": "From the campfire to the café, people have always gathered together to share the latest news. White rhinoceroses, (11), do the same thing—only their choice of meeting place is a giant pile of poop.\nA new study indicates that rhinos have a smelly way to (12). Scientists studying white rhinos in South Africa have found that these animals leave messages in their poop. In particular, they leave their poop in the same place for all the other members in the group to smell—just like humans leaving messages on social media. Furthermore, different rhinos leave different chemicals in their poop, which provide important (13) about the age, sex, general health, and reproductive conditions of each specific rhino. This is of great significance for the peace and harmony in the group. When all members in a group know what’s going on with each other, it is (14) that they will fight.\nThe researchers have even made “fake poop” to see how different rhinos would react. They find that dominant males are particularly (15) the “fake poop” that carries chemicals from females ready to mate. The males sniff it for longer duration and come back to the same spot more frequently, a clear sign that they are gathering information about mating opportunities from the poop.",
        "question": "空格 (15) 應填入下列哪一個選項?",
        "options": [
          "responsive to",
          "annoyed at",
          "considerate of",
          "tolerant with"
        ],
        "answer": 0,
        "explanation": "(115學測英文第15題,答案為「responsive to」)"
      },
      {
        "id": "english-real-115-q16",
        "origNo": 16,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The history of dim sum stretches back to the early days of the Silk Road, an ancient network of trade routes connecting the East and the West. Those who traveled along the routes through China needed places to rest. Teahouses thus sprang up to (16) the weary travelers, offering them a cup of tea to help them regain energy. But the culinary art of dim sum (17), for it was considered inappropriate to pair tea with food. Centuries later, the ability of tea to aid in digestion finally became known. Teahouse owners therefore began providing bite-sized snacks as an accompaniment, and the tradition of these Cantonese delicacies was born.\nDim sum is more than just an example of Chinese cuisine. It is (18) an enjoyable dining experience that can span hours. The small portions were designed to merely “touch the heart,” as the name literally means, and (19) were first enjoyed as snacks. The small size allows the customer to order a great variety of dishes, creating a banquet of different tastes and flavors. It is customary for big groups to enjoy simple dishes together as (20). Ultimately, dim sum—the food—is only a small part of the dim sum experience.",
        "question": "空格 (16) 應填入下列哪一個選項?",
        "options": [
          "accommodate",
          "compensate",
          "anticipate",
          "reinforce"
        ],
        "answer": 0,
        "explanation": "(115學測英文第16題,答案為「accommodate」)"
      },
      {
        "id": "english-real-115-q17",
        "origNo": 17,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The history of dim sum stretches back to the early days of the Silk Road, an ancient network of trade routes connecting the East and the West. Those who traveled along the routes through China needed places to rest. Teahouses thus sprang up to (16) the weary travelers, offering them a cup of tea to help them regain energy. But the culinary art of dim sum (17), for it was considered inappropriate to pair tea with food. Centuries later, the ability of tea to aid in digestion finally became known. Teahouse owners therefore began providing bite-sized snacks as an accompaniment, and the tradition of these Cantonese delicacies was born.\nDim sum is more than just an example of Chinese cuisine. It is (18) an enjoyable dining experience that can span hours. The small portions were designed to merely “touch the heart,” as the name literally means, and (19) were first enjoyed as snacks. The small size allows the customer to order a great variety of dishes, creating a banquet of different tastes and flavors. It is customary for big groups to enjoy simple dishes together as (20). Ultimately, dim sum—the food—is only a small part of the dim sum experience.",
        "question": "空格 (17) 應填入下列哪一個選項?",
        "options": [
          "would hardly develop",
          "had yet to develop",
          "was fast developing",
          "had almost developed"
        ],
        "answer": 1,
        "explanation": "(115學測英文第17題,答案為「had yet to develop」)"
      },
      {
        "id": "english-real-115-q18",
        "origNo": 18,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The history of dim sum stretches back to the early days of the Silk Road, an ancient network of trade routes connecting the East and the West. Those who traveled along the routes through China needed places to rest. Teahouses thus sprang up to (16) the weary travelers, offering them a cup of tea to help them regain energy. But the culinary art of dim sum (17), for it was considered inappropriate to pair tea with food. Centuries later, the ability of tea to aid in digestion finally became known. Teahouse owners therefore began providing bite-sized snacks as an accompaniment, and the tradition of these Cantonese delicacies was born.\nDim sum is more than just an example of Chinese cuisine. It is (18) an enjoyable dining experience that can span hours. The small portions were designed to merely “touch the heart,” as the name literally means, and (19) were first enjoyed as snacks. The small size allows the customer to order a great variety of dishes, creating a banquet of different tastes and flavors. It is customary for big groups to enjoy simple dishes together as (20). Ultimately, dim sum—the food—is only a small part of the dim sum experience.",
        "question": "空格 (18) 應填入下列哪一個選項?",
        "options": [
          "passed on to",
          "brought up as",
          "thought to have",
          "meant to be"
        ],
        "answer": 3,
        "explanation": "(115學測英文第18題,答案為「meant to be」)"
      },
      {
        "id": "english-real-115-q19",
        "origNo": 19,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The history of dim sum stretches back to the early days of the Silk Road, an ancient network of trade routes connecting the East and the West. Those who traveled along the routes through China needed places to rest. Teahouses thus sprang up to (16) the weary travelers, offering them a cup of tea to help them regain energy. But the culinary art of dim sum (17), for it was considered inappropriate to pair tea with food. Centuries later, the ability of tea to aid in digestion finally became known. Teahouse owners therefore began providing bite-sized snacks as an accompaniment, and the tradition of these Cantonese delicacies was born.\nDim sum is more than just an example of Chinese cuisine. It is (18) an enjoyable dining experience that can span hours. The small portions were designed to merely “touch the heart,” as the name literally means, and (19) were first enjoyed as snacks. The small size allows the customer to order a great variety of dishes, creating a banquet of different tastes and flavors. It is customary for big groups to enjoy simple dishes together as (20). Ultimately, dim sum—the food—is only a small part of the dim sum experience.",
        "question": "空格 (19) 應填入下列哪一個選項?",
        "options": [
          "if so",
          "as such",
          "by then",
          "in that"
        ],
        "answer": 1,
        "explanation": "(115學測英文第19題,答案為「as such」)"
      },
      {
        "id": "english-real-115-q20",
        "origNo": 20,
        "sourceYear": 115,
        "part": "綜合測驗",
        "passageId": "english-real-115-cloze2",
        "passageTitle": "綜合測驗 第16至20題",
        "passage": "The history of dim sum stretches back to the early days of the Silk Road, an ancient network of trade routes connecting the East and the West. Those who traveled along the routes through China needed places to rest. Teahouses thus sprang up to (16) the weary travelers, offering them a cup of tea to help them regain energy. But the culinary art of dim sum (17), for it was considered inappropriate to pair tea with food. Centuries later, the ability of tea to aid in digestion finally became known. Teahouse owners therefore began providing bite-sized snacks as an accompaniment, and the tradition of these Cantonese delicacies was born.\nDim sum is more than just an example of Chinese cuisine. It is (18) an enjoyable dining experience that can span hours. The small portions were designed to merely “touch the heart,” as the name literally means, and (19) were first enjoyed as snacks. The small size allows the customer to order a great variety of dishes, creating a banquet of different tastes and flavors. It is customary for big groups to enjoy simple dishes together as (20). Ultimately, dim sum—the food—is only a small part of the dim sum experience.",
        "question": "空格 (20) 應填入下列哪一個選項?",
        "options": [
          "a widely known delicacy",
          "an intimate romantic dinner",
          "a joyful social activity",
          "an amazing local cuisine"
        ],
        "answer": 2,
        "explanation": "(115學測英文第20題,答案為「a joyful social activity」)"
      },
      {
        "id": "english-real-115-q21",
        "origNo": 21,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (21) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 4,
        "explanation": "(115學測英文第21題,答案為「unproductive」)"
      },
      {
        "id": "english-real-115-q22",
        "origNo": 22,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (22) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 6,
        "explanation": "(115學測英文第22題,答案為「function」)"
      },
      {
        "id": "english-real-115-q23",
        "origNo": 23,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (23) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 5,
        "explanation": "(115學測英文第23題,答案為「risk」)"
      },
      {
        "id": "english-real-115-q24",
        "origNo": 24,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (24) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 3,
        "explanation": "(115學測英文第24題,答案為「delay」)"
      },
      {
        "id": "english-real-115-q25",
        "origNo": 25,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (25) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 0,
        "explanation": "(115學測英文第25題,答案為「retain」)"
      },
      {
        "id": "english-real-115-q26",
        "origNo": 26,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (26) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 9,
        "explanation": "(115學測英文第26題,答案為「point to」)"
      },
      {
        "id": "english-real-115-q27",
        "origNo": 27,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (27) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 1,
        "explanation": "(115學測英文第27題,答案為「depend on」)"
      },
      {
        "id": "english-real-115-q28",
        "origNo": 28,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (28) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 8,
        "explanation": "(115學測英文第28題,答案為「dramatic」)"
      },
      {
        "id": "english-real-115-q29",
        "origNo": 29,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (29) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 7,
        "explanation": "(115學測英文第29題,答案為「minimal」)"
      },
      {
        "id": "english-real-115-q30",
        "origNo": 30,
        "sourceYear": 115,
        "part": "文意選填",
        "passageId": "english-real-115-wordbank",
        "passageTitle": "文意選填 第21至30題",
        "passage": "Are you feeling a little guilty about your daily mid-afternoon snooze? Well, you don’t need to. Taking a nap in the middle of the day is by no means (21). In fact, you are giving your brain and your body some time to recharge and turn up refreshed.\nResearch has shown that napping is linked with brain size and (22); specifically, it can boost our cognition and memory. In our early 20s, our brain starts shrinking, which gradually slows cognition and increases dementia (23) in later life. The brain size of habitual nappers, however, is found to be better preserved. This suggests that napping may significantly (24) age-related brain shrinkage, and thus lower the possibility of developing dementia. Neurologists also confirm that naps can enhance memory and learning. For students cramming for college exams, napping will help (25) acquired knowledge and learned skills.\nUnderstanding how to perfect your nap is vital for reaping its benefits. To begin with, you need to find out the ideal length of a nap. Some studies recommend napping for 20 to 40 minutes, while others (26) shorter naps, such as 15 to 20 minutes. The best nap length, however, may (27) a person’s physical condition and fatigue level. For some people, even a five-minute nap can bring about surprisingly (28) benefits.\nFurthermore, the environment where naps are taken also plays an important role. A dark space with little distraction is ideal for napping. So, find yourself a quiet place with (29) light or with blackout curtains. If you can’t find a dark room, consider wearing a sleep mask. You can also add some soothing nature sounds to create a relaxing (30), which can make your naps more effective.\n(A) retain  (B) depend on  (C) atmosphere  (D) delay  (E) unproductive  (F) risk  (G) function  (H) minimal  (I) dramatic  (J) point to",
        "question": "空格 (30) 應填入下列哪一個選項?",
        "options": [
          "retain",
          "depend on",
          "atmosphere",
          "delay",
          "unproductive",
          "risk",
          "function",
          "minimal",
          "dramatic",
          "point to"
        ],
        "answer": 2,
        "explanation": "(115學測英文第30題,答案為「atmosphere」)"
      },
      {
        "id": "english-real-115-q31",
        "origNo": 31,
        "sourceYear": 115,
        "part": "篇章結構",
        "passageId": "english-real-115-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Smiling is a gesture that many people engage in dozens of times a day without thought. Most people believe that smiling is an expression of good feelings, a simple way to show happiness and friendliness. But does this hold true across time and cultures?\n(31) In the West, for example, portraits of men and women before the 1700s typically depicted them with a serious, unsmiling expression. The absence of smiles stemmed partly from the attempt to hide their decayed teeth caused by poor dental hygiene. More importantly, smiling and laughter had long been perceived in the society as manifestations of a lack of self-control and good manners. Paintings with white-toothed smiles emerged after the 1700s, with the gradual rise of a culture that valued perception and responsiveness.\nRecent studies also show that interpretations of smiling may vary from culture to culture. While in most cultures smiling is associated with positive emotions, in certain cultures the same person can be judged as less intelligent when smiling. (32)\nThe amount people smile is culturally influenced as well. People smile more when they are from countries that are high in individualism and low in population. These are often places where the needs and rights of the individual take precedence over those of the group. (33) Newcomers from different parts of the world are found to smile more. Without a shared language, they often resort to smiling to get along with others. For them, smiling is a straightforward way to indicate that one is reliable and trustworthy.\n(34) As many psychologists now point out, this simple gesture is in fact far more complicated than it may appear.",
        "question": "空格 (31) 應填入下列哪一個選項?",
        "options": [
          "Another crucial factor is a society’s immigration diversity.",
          "Various factors have thus contributed to the phenomenon of smiling.",
          "For most of recorded human history, the open smile has been deeply unfashionable.",
          "A genuine smile indicates contentment, while a forced smile suggests underlying distress.",
          "In fact, there is a well-known Russian proverb that goes, “Smiling with no reason is a sign of stupidity.”"
        ],
        "answer": 2,
        "explanation": "(115學測英文第31題,答案為「For most of recorded human history, the open smile has been deeply unfashionable.」)"
      },
      {
        "id": "english-real-115-q32",
        "origNo": 32,
        "sourceYear": 115,
        "part": "篇章結構",
        "passageId": "english-real-115-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Smiling is a gesture that many people engage in dozens of times a day without thought. Most people believe that smiling is an expression of good feelings, a simple way to show happiness and friendliness. But does this hold true across time and cultures?\n(31) In the West, for example, portraits of men and women before the 1700s typically depicted them with a serious, unsmiling expression. The absence of smiles stemmed partly from the attempt to hide their decayed teeth caused by poor dental hygiene. More importantly, smiling and laughter had long been perceived in the society as manifestations of a lack of self-control and good manners. Paintings with white-toothed smiles emerged after the 1700s, with the gradual rise of a culture that valued perception and responsiveness.\nRecent studies also show that interpretations of smiling may vary from culture to culture. While in most cultures smiling is associated with positive emotions, in certain cultures the same person can be judged as less intelligent when smiling. (32)\nThe amount people smile is culturally influenced as well. People smile more when they are from countries that are high in individualism and low in population. These are often places where the needs and rights of the individual take precedence over those of the group. (33) Newcomers from different parts of the world are found to smile more. Without a shared language, they often resort to smiling to get along with others. For them, smiling is a straightforward way to indicate that one is reliable and trustworthy.\n(34) As many psychologists now point out, this simple gesture is in fact far more complicated than it may appear.",
        "question": "空格 (32) 應填入下列哪一個選項?",
        "options": [
          "Another crucial factor is a society’s immigration diversity.",
          "Various factors have thus contributed to the phenomenon of smiling.",
          "For most of recorded human history, the open smile has been deeply unfashionable.",
          "A genuine smile indicates contentment, while a forced smile suggests underlying distress.",
          "In fact, there is a well-known Russian proverb that goes, “Smiling with no reason is a sign of stupidity.”"
        ],
        "answer": 4,
        "explanation": "(115學測英文第32題,答案為「In fact, there is a well-known Russian proverb that goes, “Smiling with no reason is a sign of stupidity.”」)"
      },
      {
        "id": "english-real-115-q33",
        "origNo": 33,
        "sourceYear": 115,
        "part": "篇章結構",
        "passageId": "english-real-115-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Smiling is a gesture that many people engage in dozens of times a day without thought. Most people believe that smiling is an expression of good feelings, a simple way to show happiness and friendliness. But does this hold true across time and cultures?\n(31) In the West, for example, portraits of men and women before the 1700s typically depicted them with a serious, unsmiling expression. The absence of smiles stemmed partly from the attempt to hide their decayed teeth caused by poor dental hygiene. More importantly, smiling and laughter had long been perceived in the society as manifestations of a lack of self-control and good manners. Paintings with white-toothed smiles emerged after the 1700s, with the gradual rise of a culture that valued perception and responsiveness.\nRecent studies also show that interpretations of smiling may vary from culture to culture. While in most cultures smiling is associated with positive emotions, in certain cultures the same person can be judged as less intelligent when smiling. (32)\nThe amount people smile is culturally influenced as well. People smile more when they are from countries that are high in individualism and low in population. These are often places where the needs and rights of the individual take precedence over those of the group. (33) Newcomers from different parts of the world are found to smile more. Without a shared language, they often resort to smiling to get along with others. For them, smiling is a straightforward way to indicate that one is reliable and trustworthy.\n(34) As many psychologists now point out, this simple gesture is in fact far more complicated than it may appear.",
        "question": "空格 (33) 應填入下列哪一個選項?",
        "options": [
          "Another crucial factor is a society’s immigration diversity.",
          "Various factors have thus contributed to the phenomenon of smiling.",
          "For most of recorded human history, the open smile has been deeply unfashionable.",
          "A genuine smile indicates contentment, while a forced smile suggests underlying distress.",
          "In fact, there is a well-known Russian proverb that goes, “Smiling with no reason is a sign of stupidity.”"
        ],
        "answer": 0,
        "explanation": "(115學測英文第33題,答案為「Another crucial factor is a society’s immigration diversity.」)"
      },
      {
        "id": "english-real-115-q34",
        "origNo": 34,
        "sourceYear": 115,
        "part": "篇章結構",
        "passageId": "english-real-115-structure",
        "passageTitle": "篇章結構 第31至34題",
        "passage": "Smiling is a gesture that many people engage in dozens of times a day without thought. Most people believe that smiling is an expression of good feelings, a simple way to show happiness and friendliness. But does this hold true across time and cultures?\n(31) In the West, for example, portraits of men and women before the 1700s typically depicted them with a serious, unsmiling expression. The absence of smiles stemmed partly from the attempt to hide their decayed teeth caused by poor dental hygiene. More importantly, smiling and laughter had long been perceived in the society as manifestations of a lack of self-control and good manners. Paintings with white-toothed smiles emerged after the 1700s, with the gradual rise of a culture that valued perception and responsiveness.\nRecent studies also show that interpretations of smiling may vary from culture to culture. While in most cultures smiling is associated with positive emotions, in certain cultures the same person can be judged as less intelligent when smiling. (32)\nThe amount people smile is culturally influenced as well. People smile more when they are from countries that are high in individualism and low in population. These are often places where the needs and rights of the individual take precedence over those of the group. (33) Newcomers from different parts of the world are found to smile more. Without a shared language, they often resort to smiling to get along with others. For them, smiling is a straightforward way to indicate that one is reliable and trustworthy.\n(34) As many psychologists now point out, this simple gesture is in fact far more complicated than it may appear.",
        "question": "空格 (34) 應填入下列哪一個選項?",
        "options": [
          "Another crucial factor is a society’s immigration diversity.",
          "Various factors have thus contributed to the phenomenon of smiling.",
          "For most of recorded human history, the open smile has been deeply unfashionable.",
          "A genuine smile indicates contentment, while a forced smile suggests underlying distress.",
          "In fact, there is a well-known Russian proverb that goes, “Smiling with no reason is a sign of stupidity.”"
        ],
        "answer": 1,
        "explanation": "(115學測英文第34題,答案為「Various factors have thus contributed to the phenomenon of smiling.」)"
      },
      {
        "id": "english-real-115-q35",
        "origNo": 35,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "In March 2022, the Endurance—the lost vessel of the famed polar explorer Ernest Shackleton—was found in Antarctica, 107 years after it sank. The news made headlines around the world, not only for the incredible achievement of the search team, but because the discovery marked the final chapter in a legendary story of extraordinary courage and perseverance.\nOn August 4, 1914, Sir Ernest Shackleton, along with a skilled crew of 27, set sail on the Endurance toward the South Pole, hoping to make the first land crossing over Antarctica. From Plymouth, UK, the team arrived in Buenos Aires, Argentina, and on November 5 reached South Georgia Island, the last settlement of civilization en route to Antarctica. There, the real challenge began. Two days after leaving South Georgia in December, the Endurance encountered floating ice, and was soon completely trapped in pack ice.\nThe worthy vessel held up for nine months, drifting down south slowly and then pushed northward by the ice. Gradually, the pressure from the ice buckled the planks. Freezing water rushed in and exacerbated the situation. On October 27, 1915, Shackleton ordered his crew to abandon the ship, pitching tents on the ice a mile and a half away. Weeks later, they watched the Endurance sink beneath the Weddell Sea.\nThe next five months, the crew camped out on the pack ice as it drifted north, surviving on penguins, seals, and seaweed. Finally, the ice broke up enough for them to escape in lifeboats. For seven days, they sailed more than a hundred miles to the uninhabited Elephant Island. But the crew couldn’t survive long there. So, Shackleton made a dangerous attempt to get help: With five crew members, he sailed 800 miles over 16 days across freezing, stormy seas to South Georgia Island. Then the group hiked for 36 hours across the island to reach a whaling station.\nHelp was almost at hand, but ice and bad weather hindered their return. On August 30, 1916, Shackleton finally got back to Elephant Island with a ship big enough to rescue the rest of his men. All the members of the expedition team survived, but the Endurance remained lost under the sea until its discovery in 2022.",
        "question": "What is this passage mainly about?",
        "options": [
          "A renowned Antarctic explorer.",
          "The extreme weather in Antarctica.",
          "A challenging voyage to Antarctica.",
          "The amazing discovery of a sunken ship."
        ],
        "answer": 2,
        "explanation": "(115學測英文第35題,答案為「A challenging voyage to Antarctica.」)"
      },
      {
        "id": "english-real-115-q36",
        "origNo": 36,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "In March 2022, the Endurance—the lost vessel of the famed polar explorer Ernest Shackleton—was found in Antarctica, 107 years after it sank. The news made headlines around the world, not only for the incredible achievement of the search team, but because the discovery marked the final chapter in a legendary story of extraordinary courage and perseverance.\nOn August 4, 1914, Sir Ernest Shackleton, along with a skilled crew of 27, set sail on the Endurance toward the South Pole, hoping to make the first land crossing over Antarctica. From Plymouth, UK, the team arrived in Buenos Aires, Argentina, and on November 5 reached South Georgia Island, the last settlement of civilization en route to Antarctica. There, the real challenge began. Two days after leaving South Georgia in December, the Endurance encountered floating ice, and was soon completely trapped in pack ice.\nThe worthy vessel held up for nine months, drifting down south slowly and then pushed northward by the ice. Gradually, the pressure from the ice buckled the planks. Freezing water rushed in and exacerbated the situation. On October 27, 1915, Shackleton ordered his crew to abandon the ship, pitching tents on the ice a mile and a half away. Weeks later, they watched the Endurance sink beneath the Weddell Sea.\nThe next five months, the crew camped out on the pack ice as it drifted north, surviving on penguins, seals, and seaweed. Finally, the ice broke up enough for them to escape in lifeboats. For seven days, they sailed more than a hundred miles to the uninhabited Elephant Island. But the crew couldn’t survive long there. So, Shackleton made a dangerous attempt to get help: With five crew members, he sailed 800 miles over 16 days across freezing, stormy seas to South Georgia Island. Then the group hiked for 36 hours across the island to reach a whaling station.\nHelp was almost at hand, but ice and bad weather hindered their return. On August 30, 1916, Shackleton finally got back to Elephant Island with a ship big enough to rescue the rest of his men. All the members of the expedition team survived, but the Endurance remained lost under the sea until its discovery in 2022.",
        "question": "Which of the following idioms is closest in meaning to “exacerbated the situation” in the third paragraph?",
        "options": [
          "Broke the ice.",
          "Cost an arm and a leg.",
          "Missed the boat.",
          "Added fuel to the fire."
        ],
        "answer": 3,
        "explanation": "(115學測英文第36題,答案為「Added fuel to the fire.」)"
      },
      {
        "id": "english-real-115-q37",
        "origNo": 37,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "In March 2022, the Endurance—the lost vessel of the famed polar explorer Ernest Shackleton—was found in Antarctica, 107 years after it sank. The news made headlines around the world, not only for the incredible achievement of the search team, but because the discovery marked the final chapter in a legendary story of extraordinary courage and perseverance.\nOn August 4, 1914, Sir Ernest Shackleton, along with a skilled crew of 27, set sail on the Endurance toward the South Pole, hoping to make the first land crossing over Antarctica. From Plymouth, UK, the team arrived in Buenos Aires, Argentina, and on November 5 reached South Georgia Island, the last settlement of civilization en route to Antarctica. There, the real challenge began. Two days after leaving South Georgia in December, the Endurance encountered floating ice, and was soon completely trapped in pack ice.\nThe worthy vessel held up for nine months, drifting down south slowly and then pushed northward by the ice. Gradually, the pressure from the ice buckled the planks. Freezing water rushed in and exacerbated the situation. On October 27, 1915, Shackleton ordered his crew to abandon the ship, pitching tents on the ice a mile and a half away. Weeks later, they watched the Endurance sink beneath the Weddell Sea.\nThe next five months, the crew camped out on the pack ice as it drifted north, surviving on penguins, seals, and seaweed. Finally, the ice broke up enough for them to escape in lifeboats. For seven days, they sailed more than a hundred miles to the uninhabited Elephant Island. But the crew couldn’t survive long there. So, Shackleton made a dangerous attempt to get help: With five crew members, he sailed 800 miles over 16 days across freezing, stormy seas to South Georgia Island. Then the group hiked for 36 hours across the island to reach a whaling station.\nHelp was almost at hand, but ice and bad weather hindered their return. On August 30, 1916, Shackleton finally got back to Elephant Island with a ship big enough to rescue the rest of his men. All the members of the expedition team survived, but the Endurance remained lost under the sea until its discovery in 2022.",
        "question": "According to the passage, which of the following is true about Shackleton and his Antarctic expedition?",
        "options": [
          "His journey lasted more than two years.",
          "He was the first man to cross over the Antarctic.",
          "His team camped out on Elephant Island for five months.",
          "He sent five crew members on a lifeboat to get help from a whaling station."
        ],
        "answer": 0,
        "explanation": "(115學測英文第37題,答案為「His journey lasted more than two years.」)"
      },
      {
        "id": "english-real-115-q38",
        "origNo": 38,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read1",
        "passageTitle": "閱讀測驗 第35至38題",
        "passage": "In March 2022, the Endurance—the lost vessel of the famed polar explorer Ernest Shackleton—was found in Antarctica, 107 years after it sank. The news made headlines around the world, not only for the incredible achievement of the search team, but because the discovery marked the final chapter in a legendary story of extraordinary courage and perseverance.\nOn August 4, 1914, Sir Ernest Shackleton, along with a skilled crew of 27, set sail on the Endurance toward the South Pole, hoping to make the first land crossing over Antarctica. From Plymouth, UK, the team arrived in Buenos Aires, Argentina, and on November 5 reached South Georgia Island, the last settlement of civilization en route to Antarctica. There, the real challenge began. Two days after leaving South Georgia in December, the Endurance encountered floating ice, and was soon completely trapped in pack ice.\nThe worthy vessel held up for nine months, drifting down south slowly and then pushed northward by the ice. Gradually, the pressure from the ice buckled the planks. Freezing water rushed in and exacerbated the situation. On October 27, 1915, Shackleton ordered his crew to abandon the ship, pitching tents on the ice a mile and a half away. Weeks later, they watched the Endurance sink beneath the Weddell Sea.\nThe next five months, the crew camped out on the pack ice as it drifted north, surviving on penguins, seals, and seaweed. Finally, the ice broke up enough for them to escape in lifeboats. For seven days, they sailed more than a hundred miles to the uninhabited Elephant Island. But the crew couldn’t survive long there. So, Shackleton made a dangerous attempt to get help: With five crew members, he sailed 800 miles over 16 days across freezing, stormy seas to South Georgia Island. Then the group hiked for 36 hours across the island to reach a whaling station.\nHelp was almost at hand, but ice and bad weather hindered their return. On August 30, 1916, Shackleton finally got back to Elephant Island with a ship big enough to rescue the rest of his men. All the members of the expedition team survived, but the Endurance remained lost under the sea until its discovery in 2022.",
        "question": "Which of the following shows the correct route of the Endurance after leaving South Georgia?\n[圖片示意(非官方文字):原題四個選項皆為黑白輪廓地圖(標示 South Georgia、Elephant Island、Weddell Sea、Antarctica 等地名,並以帶箭頭的曲線表示航行路線;South Georgia 位於圖的右上方,其上方另有一小段直線表示自北方而來,Elephant Island 位於左側,Antarctica 在下方),此處改以文字描述各張地圖的路線]",
        "options": [
          "[圖(A)] 一條封閉的環狀路線(順時針):自 South Georgia 出發,沿東側向南(箭頭朝下),繞過 Weddell Sea 南端(貼近 Antarctica 海岸),再沿西側向北(箭頭朝上),途中經過 Elephant Island(路線上有黑點),最後回到 South Georgia(左上方箭頭朝右上)",
          "[圖(B)] 與(A)相同的封閉環狀路線,但方向相反(逆時針):自 South Georgia 先向西(箭頭朝左)到 Elephant Island(路線上有黑點),再沿西側向南(箭頭朝下)、繞過 Weddell Sea 南端,最後沿東側向北(箭頭朝上)回到 South Georgia",
          "[圖(C)] 一條開放的路線:自 South Georgia 出發,沿東側向南(箭頭朝下),繞過 Weddell Sea 南端,再沿西側向北(箭頭朝上),終點為 Weddell Sea 西側的一個黑點;Elephant Island 是另一個獨立的黑點,位於終點的左上方,不在路線上",
          "[圖(D)] 一條較短的路線:自 South Georgia 向西南(箭頭朝左)前進,經過 Elephant Island(路線上有黑點),再折向南(箭頭朝下),終點為 Weddell Sea 西側的一個黑點;路線不繞行 Weddell Sea 南端"
        ],
        "answer": 2,
        "explanation": "(115學測英文第38題)本題原為四張地圖選項,已改以文字描述(非官方文字);答題依據為文章:Endurance 離開 South Georgia 後被浮冰困住,先緩緩向南漂,再被冰推向北,最後沉沒於 Weddell Sea;船沉沒後才由船員改乘救生艇前往 Elephant Island,因此 Endurance 的路線是一條不經過 Elephant Island、終點為沉沒處的開放路線。"
      },
      {
        "id": "english-real-115-q39",
        "origNo": 39,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "In many old castles in Europe, visitors often find a fantastic spiral staircase, which provides a captivating focal point as it winds up the building. This prominent structure actually has a long and rich heritage.\nIn the Old Testament, reference is made to spiral staircases in the Temple of Solomon, suggesting that they were already in use by around 1,000 BC. The oldest spiral staircase still standing today is at Trajan’s Column in Rome. The staircase was built in 113 AD, with a total of 185 steps carved in stone and marble. Around this time, spiral staircases began to find much wider use in Roman architecture and across Europe.\nThroughout the Middle Ages, winding staircases became a well-established feature of European castles, mainly for their advantages in helping to defend against attackers. To begin with, these staircases were quite narrow, so attackers would have to ascend one at a time, making it impossible to launch a mass attack. Also, the stairs were designed to turn clockwise upwards. This means that ascenders would have their right hand tight against the narrowest part of the staircases, close to the central pole, and as a result were unable to use their sword effectively. The attackers’ challenge was further complicated by the uneven steps of the staircase, often strategically designed by the castle owners. The defenders, living in the castles, were familiar with the stair pattern and could retreat up them very swiftly; while the attackers were much more likely to stumble and fall, particularly in the dimly lit confines of the staircase.\nBeing associated with medieval castles and kings, spiral staircases gradually won popularity in European architecture, with new materials emerging to cope with customers’ needs. In Victorian times, cast iron spiral staircases were popular for public buildings and homes for the rich. In the latter half of the 20th century, steel frames became cost-effective, and thus affordable for a much wider staircase market. Then, steel spiral staircases as fire escape stairs appeared in many buildings. Today, spiral staircases come in a wide variety of materials: steel, wood, concrete, and recently even glass. The timeless appeal of their classical design makes spiral staircases a much-desired feature in luxury homes, offices, and public buildings nowadays.",
        "question": "Which question can the passage answer?",
        "options": [
          "Where was the first spiral staircase constructed?",
          "Who was the first designer of the spiral staircase?",
          "What is the world’s most famous spiral staircase?",
          "Why is the spiral staircase popular in modern times?"
        ],
        "answer": 3,
        "explanation": "(115學測英文第39題,答案為「Why is the spiral staircase popular in modern times?」)"
      },
      {
        "id": "english-real-115-q40",
        "origNo": 40,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "In many old castles in Europe, visitors often find a fantastic spiral staircase, which provides a captivating focal point as it winds up the building. This prominent structure actually has a long and rich heritage.\nIn the Old Testament, reference is made to spiral staircases in the Temple of Solomon, suggesting that they were already in use by around 1,000 BC. The oldest spiral staircase still standing today is at Trajan’s Column in Rome. The staircase was built in 113 AD, with a total of 185 steps carved in stone and marble. Around this time, spiral staircases began to find much wider use in Roman architecture and across Europe.\nThroughout the Middle Ages, winding staircases became a well-established feature of European castles, mainly for their advantages in helping to defend against attackers. To begin with, these staircases were quite narrow, so attackers would have to ascend one at a time, making it impossible to launch a mass attack. Also, the stairs were designed to turn clockwise upwards. This means that ascenders would have their right hand tight against the narrowest part of the staircases, close to the central pole, and as a result were unable to use their sword effectively. The attackers’ challenge was further complicated by the uneven steps of the staircase, often strategically designed by the castle owners. The defenders, living in the castles, were familiar with the stair pattern and could retreat up them very swiftly; while the attackers were much more likely to stumble and fall, particularly in the dimly lit confines of the staircase.\nBeing associated with medieval castles and kings, spiral staircases gradually won popularity in European architecture, with new materials emerging to cope with customers’ needs. In Victorian times, cast iron spiral staircases were popular for public buildings and homes for the rich. In the latter half of the 20th century, steel frames became cost-effective, and thus affordable for a much wider staircase market. Then, steel spiral staircases as fire escape stairs appeared in many buildings. Today, spiral staircases come in a wide variety of materials: steel, wood, concrete, and recently even glass. The timeless appeal of their classical design makes spiral staircases a much-desired feature in luxury homes, offices, and public buildings nowadays.",
        "question": "What does “them” in the third paragraph refer to?",
        "options": [
          "Stairs.",
          "Confines.",
          "Attackers.",
          "Defenders."
        ],
        "answer": 0,
        "explanation": "(115學測英文第40題,答案為「Stairs.」)"
      },
      {
        "id": "english-real-115-q41",
        "origNo": 41,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "In many old castles in Europe, visitors often find a fantastic spiral staircase, which provides a captivating focal point as it winds up the building. This prominent structure actually has a long and rich heritage.\nIn the Old Testament, reference is made to spiral staircases in the Temple of Solomon, suggesting that they were already in use by around 1,000 BC. The oldest spiral staircase still standing today is at Trajan’s Column in Rome. The staircase was built in 113 AD, with a total of 185 steps carved in stone and marble. Around this time, spiral staircases began to find much wider use in Roman architecture and across Europe.\nThroughout the Middle Ages, winding staircases became a well-established feature of European castles, mainly for their advantages in helping to defend against attackers. To begin with, these staircases were quite narrow, so attackers would have to ascend one at a time, making it impossible to launch a mass attack. Also, the stairs were designed to turn clockwise upwards. This means that ascenders would have their right hand tight against the narrowest part of the staircases, close to the central pole, and as a result were unable to use their sword effectively. The attackers’ challenge was further complicated by the uneven steps of the staircase, often strategically designed by the castle owners. The defenders, living in the castles, were familiar with the stair pattern and could retreat up them very swiftly; while the attackers were much more likely to stumble and fall, particularly in the dimly lit confines of the staircase.\nBeing associated with medieval castles and kings, spiral staircases gradually won popularity in European architecture, with new materials emerging to cope with customers’ needs. In Victorian times, cast iron spiral staircases were popular for public buildings and homes for the rich. In the latter half of the 20th century, steel frames became cost-effective, and thus affordable for a much wider staircase market. Then, steel spiral staircases as fire escape stairs appeared in many buildings. Today, spiral staircases come in a wide variety of materials: steel, wood, concrete, and recently even glass. The timeless appeal of their classical design makes spiral staircases a much-desired feature in luxury homes, offices, and public buildings nowadays.",
        "question": "According to the passage, which is a correct time sequence of the materials used in making spiral staircases?",
        "options": [
          "stone → iron → steel → glass",
          "stone → wood → iron → steel",
          "iron → marble → wood → glass",
          "marble → wood → stone → concrete"
        ],
        "answer": 0,
        "explanation": "(115學測英文第41題,答案為「stone → iron → steel → glass」)"
      },
      {
        "id": "english-real-115-q42",
        "origNo": 42,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read2",
        "passageTitle": "閱讀測驗 第39至42題",
        "passage": "In many old castles in Europe, visitors often find a fantastic spiral staircase, which provides a captivating focal point as it winds up the building. This prominent structure actually has a long and rich heritage.\nIn the Old Testament, reference is made to spiral staircases in the Temple of Solomon, suggesting that they were already in use by around 1,000 BC. The oldest spiral staircase still standing today is at Trajan’s Column in Rome. The staircase was built in 113 AD, with a total of 185 steps carved in stone and marble. Around this time, spiral staircases began to find much wider use in Roman architecture and across Europe.\nThroughout the Middle Ages, winding staircases became a well-established feature of European castles, mainly for their advantages in helping to defend against attackers. To begin with, these staircases were quite narrow, so attackers would have to ascend one at a time, making it impossible to launch a mass attack. Also, the stairs were designed to turn clockwise upwards. This means that ascenders would have their right hand tight against the narrowest part of the staircases, close to the central pole, and as a result were unable to use their sword effectively. The attackers’ challenge was further complicated by the uneven steps of the staircase, often strategically designed by the castle owners. The defenders, living in the castles, were familiar with the stair pattern and could retreat up them very swiftly; while the attackers were much more likely to stumble and fall, particularly in the dimly lit confines of the staircase.\nBeing associated with medieval castles and kings, spiral staircases gradually won popularity in European architecture, with new materials emerging to cope with customers’ needs. In Victorian times, cast iron spiral staircases were popular for public buildings and homes for the rich. In the latter half of the 20th century, steel frames became cost-effective, and thus affordable for a much wider staircase market. Then, steel spiral staircases as fire escape stairs appeared in many buildings. Today, spiral staircases come in a wide variety of materials: steel, wood, concrete, and recently even glass. The timeless appeal of their classical design makes spiral staircases a much-desired feature in luxury homes, offices, and public buildings nowadays.",
        "question": "Which of the following statements can be inferred about spiral staircases in the Medieval Ages?",
        "options": [
          "The staircase was too narrow to allow any quick retreat.",
          "The clockwise design favored right-handed castle defenders.",
          "The uneven steps made it easier to ascend than descend the stairs.",
          "The staircase was dark enough for defenders to hide from attackers."
        ],
        "answer": 1,
        "explanation": "(115學測英文第42題,答案為「The clockwise design favored right-handed castle defenders.」)"
      },
      {
        "id": "english-real-115-q43",
        "origNo": 43,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Have you ever wondered why north comes at the top of a map? Well, north may seem a natural choice for the top spot today, but that wasn’t always the case.\nDocuments from ancient times indicate that many maps in early ages were pointing to the east, where the sun rose. In ancient India, for example, maps were most likely oriented to the east. Though there is no physical evidence to support this, the word dakshina “south” in Indian languages also means “right,” suggesting that ancient Indians were oriented toward the east, and therefore south was on their right-hand side. Ample evidences from the Old Testament also suggest that east was at the top of maps in pre-Biblical and Biblical eras, a reason why east is still referred to as the “Orient” today.\nIn the oldest surviving maps, south is at the top, and north points down. Early Egyptian maps showed south on top, most likely because the Nile, vital to Egyptian livelihood, originated in the south. As rivers were believed to flow downward, “up” was therefore south. Map makers in Arabia also drew maps with south on top since the earliest Muslims lived north of Mecca, and a south-oriented map would show the followers looking up toward their holy city.\nThe preference for north arose during the European age of exploration. At the time, sailors relied on the North Star to find their way across the Mediterranean and later the Atlantic. By the 16th century, when Europe’s search for trading routes was at its peak, maps became Eurocentric, with north on top. The expansion of European imperialism in the following centuries further established the “north up” practice as the standard.\nToday, map orientation is taking on a new perspective. In perhaps our most common interaction with maps—the use of GPS systems on our phones and in our cars, directions have ceased to be as important. The layouts are dynamic, oriented toward our travel path.\nSo, perhaps the north-on-top practice is less a rule and more a blip. After centuries of technological advancements, it seems we’ve ended up right where we began in ancient times: with ourselves in the middle, and our destinations at the top.",
        "question": "What is the passage mainly about?",
        "options": [
          "Why east is referred to as the “Orient.”",
          "How maps differ from GPS in function.",
          "How map orientation evolved over time.",
          "Why maps were important during the age of exploration."
        ],
        "answer": 2,
        "explanation": "(115學測英文第43題,答案為「How map orientation evolved over time.」)"
      },
      {
        "id": "english-real-115-q44",
        "origNo": 44,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Have you ever wondered why north comes at the top of a map? Well, north may seem a natural choice for the top spot today, but that wasn’t always the case.\nDocuments from ancient times indicate that many maps in early ages were pointing to the east, where the sun rose. In ancient India, for example, maps were most likely oriented to the east. Though there is no physical evidence to support this, the word dakshina “south” in Indian languages also means “right,” suggesting that ancient Indians were oriented toward the east, and therefore south was on their right-hand side. Ample evidences from the Old Testament also suggest that east was at the top of maps in pre-Biblical and Biblical eras, a reason why east is still referred to as the “Orient” today.\nIn the oldest surviving maps, south is at the top, and north points down. Early Egyptian maps showed south on top, most likely because the Nile, vital to Egyptian livelihood, originated in the south. As rivers were believed to flow downward, “up” was therefore south. Map makers in Arabia also drew maps with south on top since the earliest Muslims lived north of Mecca, and a south-oriented map would show the followers looking up toward their holy city.\nThe preference for north arose during the European age of exploration. At the time, sailors relied on the North Star to find their way across the Mediterranean and later the Atlantic. By the 16th century, when Europe’s search for trading routes was at its peak, maps became Eurocentric, with north on top. The expansion of European imperialism in the following centuries further established the “north up” practice as the standard.\nToday, map orientation is taking on a new perspective. In perhaps our most common interaction with maps—the use of GPS systems on our phones and in our cars, directions have ceased to be as important. The layouts are dynamic, oriented toward our travel path.\nSo, perhaps the north-on-top practice is less a rule and more a blip. After centuries of technological advancements, it seems we’ve ended up right where we began in ancient times: with ourselves in the middle, and our destinations at the top.",
        "question": "What does “this” refer to in the second paragraph?",
        "options": [
          "The word dakshina.",
          "Physical evidence.",
          "Ancient India.",
          "East-orientation of maps."
        ],
        "answer": 3,
        "explanation": "(115學測英文第44題,答案為「East-orientation of maps.」)"
      },
      {
        "id": "english-real-115-q45",
        "origNo": 45,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Have you ever wondered why north comes at the top of a map? Well, north may seem a natural choice for the top spot today, but that wasn’t always the case.\nDocuments from ancient times indicate that many maps in early ages were pointing to the east, where the sun rose. In ancient India, for example, maps were most likely oriented to the east. Though there is no physical evidence to support this, the word dakshina “south” in Indian languages also means “right,” suggesting that ancient Indians were oriented toward the east, and therefore south was on their right-hand side. Ample evidences from the Old Testament also suggest that east was at the top of maps in pre-Biblical and Biblical eras, a reason why east is still referred to as the “Orient” today.\nIn the oldest surviving maps, south is at the top, and north points down. Early Egyptian maps showed south on top, most likely because the Nile, vital to Egyptian livelihood, originated in the south. As rivers were believed to flow downward, “up” was therefore south. Map makers in Arabia also drew maps with south on top since the earliest Muslims lived north of Mecca, and a south-oriented map would show the followers looking up toward their holy city.\nThe preference for north arose during the European age of exploration. At the time, sailors relied on the North Star to find their way across the Mediterranean and later the Atlantic. By the 16th century, when Europe’s search for trading routes was at its peak, maps became Eurocentric, with north on top. The expansion of European imperialism in the following centuries further established the “north up” practice as the standard.\nToday, map orientation is taking on a new perspective. In perhaps our most common interaction with maps—the use of GPS systems on our phones and in our cars, directions have ceased to be as important. The layouts are dynamic, oriented toward our travel path.\nSo, perhaps the north-on-top practice is less a rule and more a blip. After centuries of technological advancements, it seems we’ve ended up right where we began in ancient times: with ourselves in the middle, and our destinations at the top.",
        "question": "Which of the following is closest in meaning to “a blip” in the last paragraph?",
        "options": [
          "A temporary state.",
          "An urgent need.",
          "A critical decision.",
          "An advanced system."
        ],
        "answer": 0,
        "explanation": "(115學測英文第45題,答案為「A temporary state.」)"
      },
      {
        "id": "english-real-115-q46",
        "origNo": 46,
        "sourceYear": 115,
        "part": "閱讀測驗",
        "passageId": "english-real-115-read3",
        "passageTitle": "閱讀測驗 第43至46題",
        "passage": "Have you ever wondered why north comes at the top of a map? Well, north may seem a natural choice for the top spot today, but that wasn’t always the case.\nDocuments from ancient times indicate that many maps in early ages were pointing to the east, where the sun rose. In ancient India, for example, maps were most likely oriented to the east. Though there is no physical evidence to support this, the word dakshina “south” in Indian languages also means “right,” suggesting that ancient Indians were oriented toward the east, and therefore south was on their right-hand side. Ample evidences from the Old Testament also suggest that east was at the top of maps in pre-Biblical and Biblical eras, a reason why east is still referred to as the “Orient” today.\nIn the oldest surviving maps, south is at the top, and north points down. Early Egyptian maps showed south on top, most likely because the Nile, vital to Egyptian livelihood, originated in the south. As rivers were believed to flow downward, “up” was therefore south. Map makers in Arabia also drew maps with south on top since the earliest Muslims lived north of Mecca, and a south-oriented map would show the followers looking up toward their holy city.\nThe preference for north arose during the European age of exploration. At the time, sailors relied on the North Star to find their way across the Mediterranean and later the Atlantic. By the 16th century, when Europe’s search for trading routes was at its peak, maps became Eurocentric, with north on top. The expansion of European imperialism in the following centuries further established the “north up” practice as the standard.\nToday, map orientation is taking on a new perspective. In perhaps our most common interaction with maps—the use of GPS systems on our phones and in our cars, directions have ceased to be as important. The layouts are dynamic, oriented toward our travel path.\nSo, perhaps the north-on-top practice is less a rule and more a blip. After centuries of technological advancements, it seems we’ve ended up right where we began in ancient times: with ourselves in the middle, and our destinations at the top.",
        "question": "Which of the following statements is true?",
        "options": [
          "Sailors took the North Star as their final destination.",
          "The GPS system has a fixed direction for orientation.",
          "South was placed at the top of maps in the pre-Biblical era.",
          "Old Islamic maps put south at the top for religious purposes."
        ],
        "answer": 3,
        "explanation": "(115學測英文第46題,答案為「Old Islamic maps put south at the top for religious purposes.」)"
      },
      {
        "id": "english-real-115-q47",
        "origNo": 47,
        "sourceYear": 115,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-115-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Located along the sparkling coastline of the Pacific Ocean, Wonder Village is a famous indigenous district in eastern Taiwan. The historic village exhibits the traditional way of life of the tribe there. However, it does not live in the past. As numerous new restaurants and shops have sprung up in recent years, it has become not only a cultural center but also a unique commercial zone. The following six shops are examples of some of the specialty stores there.\n[圖片示意(非官方文字):原題附一張插畫式村落地圖,以道路與小樹分隔,標示六間商店的名稱與位置——左側為 The Pinery,上方由左至右依序為 Oh Eco、Beyond World、After Work,中下方為 Aroma Paradise 與 Something Different。地圖僅標示店名與相對位置,作答所需資訊皆在下列六段店家介紹文字中。]\nA. Oh Eco\nGreatly concerned about the presence of fake “green” products on the market, Alice Bao decided to open this shop. She sells environmentally friendly items such as reusable bottles, bamboo toothbrushes, and soy candles. “Here everyone looks out for each other and the neighborhood,” she says. “There’s a sense of community in the area.”\nB. After Work\nNeighborhood beer lovers rejoiced when After Work moved in last summer. “We knew we were coming into a really cool neighborhood,” says co-owner Joey Ma. Aside from handcrafted beer, the menu boasts hand-made gourmet pizzas such as the Yummy Duck n’ Cheese, loaded with roast duck and, yes, creamy delicious cheese. A truly unique blend!\nC. Aroma Paradise\nThe fragrances at this scent shop are largely customized to meet the individual shopper’s taste. Owner Joseph Tang says he knew the idea would work well in this unique district: “Each store is one of a kind in Wonder Village,” he states. “Aroma Paradise wants to create a paradise for those who are looking for fragrance made for their special preferences.”\nD. Something Different\nLooking for something unique? Yes, at this tiny antique store you can always find, as promised, something different. Open since 1996, the store features traditional-style home accessories, ranging from cabinets and chairs to picture frames and decorative mirrors.\nE. Beyond World\nOwner Foting Mayaw opened this boutique in what he calls “the most fascinating area in Taiwan.” The shop focuses on selling various “good goods” that showcase the skill and spirit of neighborhood artisans. From fashion items to rice snacks, it carries products only from local makers and small businesses owned by indigenous people.\nF. The Pinery\nThis restaurant got its name from the pineapple farms that once populated the area. Indeed, the fruit appears in some innovative menu items (e.g., pineapple jam on the burger). “Wonder Village is much more than just a tourist destination,” says owner Carol Hon. “It is a place where the old meets the new: diverse, unique, and always full of surprises.”",
        "question": "47-48 下列簡短敘述摘記上方文章重點。請從文章中找出兩個單詞,分別填入下列句子空格中,並視句型結構需要做適當的字形變化,使句子語意完整、語法正確,並符合全文文意。每格限填一個單詞(word)。(填充題,4分;第47、48格各2分)\nWonder Village, a famous tourist site, is characterized by its diversity and uniqueness. It is a place where the old meets the new—where tradition coexists harmoniously with ______(47)______, and local features are perfectly ______(48)______ with foreign elements.\n本題請作答第 47 格。",
        "explanation": "(115學測英文第47題,官方參考答案)innovation(即 “…where tradition coexists harmoniously with innovation”;出自 The Pinery 介紹中的 innovative,須依句型改為名詞形式)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-115-q48",
        "origNo": 48,
        "sourceYear": 115,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-115-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Located along the sparkling coastline of the Pacific Ocean, Wonder Village is a famous indigenous district in eastern Taiwan. The historic village exhibits the traditional way of life of the tribe there. However, it does not live in the past. As numerous new restaurants and shops have sprung up in recent years, it has become not only a cultural center but also a unique commercial zone. The following six shops are examples of some of the specialty stores there.\n[圖片示意(非官方文字):原題附一張插畫式村落地圖,以道路與小樹分隔,標示六間商店的名稱與位置——左側為 The Pinery,上方由左至右依序為 Oh Eco、Beyond World、After Work,中下方為 Aroma Paradise 與 Something Different。地圖僅標示店名與相對位置,作答所需資訊皆在下列六段店家介紹文字中。]\nA. Oh Eco\nGreatly concerned about the presence of fake “green” products on the market, Alice Bao decided to open this shop. She sells environmentally friendly items such as reusable bottles, bamboo toothbrushes, and soy candles. “Here everyone looks out for each other and the neighborhood,” she says. “There’s a sense of community in the area.”\nB. After Work\nNeighborhood beer lovers rejoiced when After Work moved in last summer. “We knew we were coming into a really cool neighborhood,” says co-owner Joey Ma. Aside from handcrafted beer, the menu boasts hand-made gourmet pizzas such as the Yummy Duck n’ Cheese, loaded with roast duck and, yes, creamy delicious cheese. A truly unique blend!\nC. Aroma Paradise\nThe fragrances at this scent shop are largely customized to meet the individual shopper’s taste. Owner Joseph Tang says he knew the idea would work well in this unique district: “Each store is one of a kind in Wonder Village,” he states. “Aroma Paradise wants to create a paradise for those who are looking for fragrance made for their special preferences.”\nD. Something Different\nLooking for something unique? Yes, at this tiny antique store you can always find, as promised, something different. Open since 1996, the store features traditional-style home accessories, ranging from cabinets and chairs to picture frames and decorative mirrors.\nE. Beyond World\nOwner Foting Mayaw opened this boutique in what he calls “the most fascinating area in Taiwan.” The shop focuses on selling various “good goods” that showcase the skill and spirit of neighborhood artisans. From fashion items to rice snacks, it carries products only from local makers and small businesses owned by indigenous people.\nF. The Pinery\nThis restaurant got its name from the pineapple farms that once populated the area. Indeed, the fruit appears in some innovative menu items (e.g., pineapple jam on the burger). “Wonder Village is much more than just a tourist destination,” says owner Carol Hon. “It is a place where the old meets the new: diverse, unique, and always full of surprises.”",
        "question": "47-48 下列簡短敘述摘記上方文章重點。請從文章中找出兩個單詞,分別填入下列句子空格中,並視句型結構需要做適當的字形變化,使句子語意完整、語法正確,並符合全文文意。每格限填一個單詞(word)。(填充題,4分;第47、48格各2分)\nWonder Village, a famous tourist site, is characterized by its diversity and uniqueness. It is a place where the old meets the new—where tradition coexists harmoniously with ______(47)______, and local features are perfectly ______(48)______ with foreign elements.\n本題請作答第 48 格。",
        "explanation": "(115學測英文第48題,官方參考答案)blended(即 “…local features are perfectly blended with foreign elements”;出自 After Work 介紹中的 blend,須改為過去分詞形式)。評分原則(混合題填空,每空2分):完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-115-q49",
        "origNo": 49,
        "sourceYear": 115,
        "part": "混合題",
        "type": "multi",
        "passageId": "english-real-115-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Located along the sparkling coastline of the Pacific Ocean, Wonder Village is a famous indigenous district in eastern Taiwan. The historic village exhibits the traditional way of life of the tribe there. However, it does not live in the past. As numerous new restaurants and shops have sprung up in recent years, it has become not only a cultural center but also a unique commercial zone. The following six shops are examples of some of the specialty stores there.\n[圖片示意(非官方文字):原題附一張插畫式村落地圖,以道路與小樹分隔,標示六間商店的名稱與位置——左側為 The Pinery,上方由左至右依序為 Oh Eco、Beyond World、After Work,中下方為 Aroma Paradise 與 Something Different。地圖僅標示店名與相對位置,作答所需資訊皆在下列六段店家介紹文字中。]\nA. Oh Eco\nGreatly concerned about the presence of fake “green” products on the market, Alice Bao decided to open this shop. She sells environmentally friendly items such as reusable bottles, bamboo toothbrushes, and soy candles. “Here everyone looks out for each other and the neighborhood,” she says. “There’s a sense of community in the area.”\nB. After Work\nNeighborhood beer lovers rejoiced when After Work moved in last summer. “We knew we were coming into a really cool neighborhood,” says co-owner Joey Ma. Aside from handcrafted beer, the menu boasts hand-made gourmet pizzas such as the Yummy Duck n’ Cheese, loaded with roast duck and, yes, creamy delicious cheese. A truly unique blend!\nC. Aroma Paradise\nThe fragrances at this scent shop are largely customized to meet the individual shopper’s taste. Owner Joseph Tang says he knew the idea would work well in this unique district: “Each store is one of a kind in Wonder Village,” he states. “Aroma Paradise wants to create a paradise for those who are looking for fragrance made for their special preferences.”\nD. Something Different\nLooking for something unique? Yes, at this tiny antique store you can always find, as promised, something different. Open since 1996, the store features traditional-style home accessories, ranging from cabinets and chairs to picture frames and decorative mirrors.\nE. Beyond World\nOwner Foting Mayaw opened this boutique in what he calls “the most fascinating area in Taiwan.” The shop focuses on selling various “good goods” that showcase the skill and spirit of neighborhood artisans. From fashion items to rice snacks, it carries products only from local makers and small businesses owned by indigenous people.\nF. The Pinery\nThis restaurant got its name from the pineapple farms that once populated the area. Indeed, the fruit appears in some innovative menu items (e.g., pineapple jam on the burger). “Wonder Village is much more than just a tourist destination,” says owner Carol Hon. “It is a place where the old meets the new: diverse, unique, and always full of surprises.”",
        "question": "While visiting Wonder Village, the Chen family decide to buy the following items as souvenirs:\n(1) a 19th century oil lamp\n(2) recycled plastic sunglasses\n(3) an aboriginal wooden beads necklace\nWhich stores should they go to for these items?\n請選出商店名稱前的英文大寫字母(如 A、B、C 等),並劃記在「答題卷」作答區內。(多選題,4分)\n(非官方註記:選項 A 至 F 即上方文章中 A. 至 F. 六間商店,此處以商店名稱代表)\n(非官方註記:本站選項不標 A、B、C 代號,且順序每次隨機排列,請直接勾選符合的選項。)",
        "options": [
          "Oh Eco",
          "After Work",
          "Aroma Paradise",
          "Something Different",
          "Beyond World",
          "The Pinery"
        ],
        "answers": [
          0,
          3,
          4
        ],
        "explanation": "(115學測英文第49題,答案為「Oh Eco」、「Something Different」、「Beyond World」)"
      },
      {
        "id": "english-real-115-q50",
        "origNo": 50,
        "sourceYear": 115,
        "part": "混合題",
        "type": "written",
        "passageId": "english-real-115-mixed",
        "passageTitle": "混合題 第47至50題",
        "passage": "Located along the sparkling coastline of the Pacific Ocean, Wonder Village is a famous indigenous district in eastern Taiwan. The historic village exhibits the traditional way of life of the tribe there. However, it does not live in the past. As numerous new restaurants and shops have sprung up in recent years, it has become not only a cultural center but also a unique commercial zone. The following six shops are examples of some of the specialty stores there.\n[圖片示意(非官方文字):原題附一張插畫式村落地圖,以道路與小樹分隔,標示六間商店的名稱與位置——左側為 The Pinery,上方由左至右依序為 Oh Eco、Beyond World、After Work,中下方為 Aroma Paradise 與 Something Different。地圖僅標示店名與相對位置,作答所需資訊皆在下列六段店家介紹文字中。]\nA. Oh Eco\nGreatly concerned about the presence of fake “green” products on the market, Alice Bao decided to open this shop. She sells environmentally friendly items such as reusable bottles, bamboo toothbrushes, and soy candles. “Here everyone looks out for each other and the neighborhood,” she says. “There’s a sense of community in the area.”\nB. After Work\nNeighborhood beer lovers rejoiced when After Work moved in last summer. “We knew we were coming into a really cool neighborhood,” says co-owner Joey Ma. Aside from handcrafted beer, the menu boasts hand-made gourmet pizzas such as the Yummy Duck n’ Cheese, loaded with roast duck and, yes, creamy delicious cheese. A truly unique blend!\nC. Aroma Paradise\nThe fragrances at this scent shop are largely customized to meet the individual shopper’s taste. Owner Joseph Tang says he knew the idea would work well in this unique district: “Each store is one of a kind in Wonder Village,” he states. “Aroma Paradise wants to create a paradise for those who are looking for fragrance made for their special preferences.”\nD. Something Different\nLooking for something unique? Yes, at this tiny antique store you can always find, as promised, something different. Open since 1996, the store features traditional-style home accessories, ranging from cabinets and chairs to picture frames and decorative mirrors.\nE. Beyond World\nOwner Foting Mayaw opened this boutique in what he calls “the most fascinating area in Taiwan.” The shop focuses on selling various “good goods” that showcase the skill and spirit of neighborhood artisans. From fashion items to rice snacks, it carries products only from local makers and small businesses owned by indigenous people.\nF. The Pinery\nThis restaurant got its name from the pineapple farms that once populated the area. Indeed, the fruit appears in some innovative menu items (e.g., pineapple jam on the burger). “Wonder Village is much more than just a tourist destination,” says owner Carol Hon. “It is a place where the old meets the new: diverse, unique, and always full of surprises.”",
        "question": "Which phrase is used by Joseph Tang to describe the “uniqueness” of the stores in Wonder Village?(簡答題,2分)",
        "explanation": "(115學測英文第50題,官方參考答案)one of a kind(出自 Aroma Paradise 老闆 Joseph Tang 的話 “Each store is one of a kind in Wonder Village”)。評分原則:完全正確(包括選字及字形變化)得2分;字形錯誤或者拼字錯誤得1分;空白、答案錯誤或與答案無關者得0分。"
      },
      {
        "id": "english-real-115-q51",
        "origNo": 51,
        "sourceYear": 115,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第1句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n現在越來越多高中英文老師已經增加在課堂上使用英文的百分比。",
        "explanation": "(官方編號:中譯英第1題)官方參考答案(滿分;大括號內為皆可接受的等值譯法):{Now, / Nowadays,} more and more senior high school English teachers have increased the percentage of {English use / using English} in class.。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。所評量的標的詞彙(target words)大致都以大考中心詞彙表一至四級詞彙為主;官方命題說明:第一句要使用現在完成式。"
      },
      {
        "id": "english-real-115-q52",
        "origNo": 52,
        "sourceYear": 115,
        "part": "非選擇題",
        "type": "written",
        "question": "中譯英(第2句,4分):請將以下中文句子譯成正確、通順、達意的英文。\n他們將學生依英語能力分成不同組別,進行多樣的聽、說活動。",
        "explanation": "(官方編號:中譯英第2題)官方參考答案(滿分;大括號內為皆可接受的等值譯法):They divide students into different groups based on their English {ability / proficiency} and conduct {various / diverse / a variety of} listening and speaking activities.。評分原則:本大題總分8分,每小題滿分4分;每個錯誤扣0.5分,各部分獨立,扣完為止;相同之拼字錯誤或文法錯誤只扣一次;句首未大寫或標點符號不妥,各扣0.5分,只扣一次。所評量的標的詞彙(target words)大致都以大考中心詞彙表一至四級詞彙為主;官方命題說明:第二句為基本句構(S+V),但後半句可使用分詞構句形式。"
      },
      {
        "id": "english-real-115-q53",
        "origNo": 53,
        "sourceYear": 115,
        "part": "非選擇題",
        "type": "written",
        "question": "英文作文(20分):依提示寫一篇英文作文,文長至少120個單詞(words)。\n提示:近年來養寵物的風氣在臺灣日漸普遍,而寵物在人們生活中的角色也與過去不同。請以此為主題,並參照下列圖片,寫一篇英文作文,文分兩段。第一段描述這些圖片中所呈現的現象;第二段則根據你自身的經驗或觀察,說明此現象的原因以及可能的影響。\n[圖片示意(非官方文字,原題為三張並排的黑白照片):左圖(最大)——樹木成蔭的公園步道,幾位大人帶著狗散步:左側一名男子(背對鏡頭)肩上扛著一隻小狗;一名女子推著寵物推車,車內坐著兩隻小狗;前景一名女子(背對鏡頭)雙手把一隻狗高舉;右側一名男子拉著一輛小拖車,車上坐著一男一女兩個小孩。中圖——家中客廳,一對年輕夫妻與兩個孩子:母親用奶瓶餵嬰兒,父親與一名小男孩一起看著小男孩在書本上寫字或畫畫,桌上有碗與玩具車,背景可見嬰兒床。右圖——家中一對年輕男女與兩隻狗:女子拿湯匙餵一隻白色捲毛小狗,男子微笑看著穿著連帽外套、坐在狗窩裡的柴犬,桌上放著幾碗食物與點心,背景有貓跳台。]",
        "explanation": "(官方編號:作文)原題附三張黑白照片(左:公園裡帶著狗散步、狗坐推車;中:有嬰兒與孩子的家庭;右:年輕夫妻餵食兩隻寵物狗),此處以文字描述取代,並非官方文字。本題無單一參考範文,官方僅公布評分原則:官方命題說明——主題為寵物在人們生活中的角色,屬於生活情境,貼近考生的生活範疇,考生可依自己的經驗或在生活中的觀察進行寫作任務;考生須依作答提示與所提供的圖片,寫一篇文長至少120個單詞、分兩段的作文:第一段描述圖片所呈現的現象,第二段根據自身的經驗或觀察,說明此現象的原因以及可能的影響。評分重點在於內容須符合題目要求、提供充分具體之細節、句構語法及用字適切、拼字與標點符號使用得當;內容充實以及語言表達得宜,應是考生得分之重要元素。評分方式:依內容、組織、文法句構、字彙拼字四項表現評分,各項得分加總後給予一個整體分數(holistic score),閱卷委員須完全熟悉各分項評分標準(表一);字數明顯不足者扣總分1分;未分段者亦扣總分1分;0分情形:空白、完全文不對題或離題、完全抄襲選文、文句完全錯誤或文字不足成句。(本題總分20分,見試題本;評分說明文件未列出各等級對應分數區間。)評分指標(表一,各項分為優/可/差/劣四等級):【內容】優:主題(句)清楚切題,並有具體、完整的相關細節支持;可:主題不夠清楚或突顯,部分相關敘述發展不全;差:主題不明,大部分相關敘述發展不全或與主題無關;劣:幾乎沒有內容或文意難辨。【組織】優:重點分明,有開頭、發展、結尾,前後連貫,轉承語使用得當;可:重點安排不妥,前後發展比例與轉承語使用欠妥;差:重點不明、前後連貫性差;劣:毫無重點、前後不連貫。【文法、句構】優:文法、格式、標點幾乎無誤,文句結構富變化;可:文法、格式、標點偶有錯誤,但不影響文意表達;差:文法、格式、標點錯誤多,明顯影響文意表達;劣:文法、格式、標點幾乎全錯,嚴重影響文意表達。【字彙、拼字】優:用字精確、得宜,拼字、大小寫幾乎無誤;可:字詞單調、重複,用字偶有不當,拼字、大小寫偶有錯誤,但不影響文意表達;差:用字、拼字、大小寫錯誤多,明顯影響文意表達;劣:用字、拼字幾乎全錯,嚴重影響文意表達。"
      }
    ],
  },
];
