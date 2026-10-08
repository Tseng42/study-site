// 英文課文單元:第六冊(高三下,總複習)。三個學測高頻字彙單元:動詞、名詞與形容詞、
// 副詞與片語搭配。每單元包含 9 題單字題、1 個短文題組(2 題)、1 題多選。
import { single, multi, passageSet, lesson, bullets, table } from './lesson-helpers.js';

const CATEGORY = '第六冊(高三下)';

export const englishLessons6 = [
  (() => {
    const p = passageSet(
      'en-l6-1-p1',
      "Grandmother's Diary",
      "When Nora found her grandmother's old diary in the attic, she assumed it would be full of boring daily notes. To her surprise, the pages revealed a young woman who had left home alone, acquired three languages, and accomplished her dream of becoming a translator despite many obstacles. The diary emphasized one lesson again and again: courage is not the absence of fear but the decision to keep moving forward. Nora decided to maintain the tradition by starting a diary of her own."
    );
    return lesson({
      id: 'en-l6-1',
      title: '總整理1 High-Frequency Words I: Verbs(高頻動詞)',
      category: CATEGORY,
      tag: '總複習',
      sections: [
        bullets('學習說明', [
          '學測英文詞彙題大量出現大考中心字彙表 4、5 級的動詞。記單字時要連同「常見搭配」與「詞性變化」一起記,而不是只背中文。',
        ]),
        table('10 個高頻動詞', ['單字', '中文', '常見搭配與例句'], [
          ['accomplish', '完成、達成', 'accomplish a goal / accomplish a task'],
          ['acquire', '獲得、習得', 'acquire a language / acquire knowledge'],
          ['assume', '假定、認為', 'assume that ...;Don\'t assume everyone knows.'],
          ['emphasize', '強調', 'emphasize the importance of ...'],
          ['maintain', '維持、保持', 'maintain a healthy weight / maintain a friendship'],
          ['obtain', '取得', 'obtain a visa / obtain a scholarship'],
          ['predict', '預測', 'predict the weather / predict that ...'],
          ['require', '需要、要求', 'This job requires experience.'],
          ['restrict', '限制', 'restrict the use of plastic bags'],
          ['reveal', '揭露、顯示', 'reveal a secret / The report revealed a problem.'],
        ]),
        bullets('記憶策略', [
          '名詞形:accomplish → accomplishment;acquire → acquisition;assume → assumption;emphasize → emphasis;predict → prediction;require → requirement;restrict → restriction。',
          '同義字群:obtain ≈ get;acquire ≈ gain;reveal ≈ show;maintain ≈ keep。',
        ]),
      ],
      quiz: [
        single('en-l6-1-q1', "After years of hard work, she finally ______ her goal of becoming a doctor.", ['accomplished', 'acquired', 'assumed', 'restricted'], 0, 'accomplish a goal 是「達成目標」。'),
        single('en-l6-1-q2', "Children ______ a second language more easily than adults do.", ['acquire', 'predict', 'reveal', 'restrict'], 0, 'acquire a language 是「習得語言」。'),
        single('en-l6-1-q3', "Don't ______ that everyone knows the answer; explain it clearly.", ['assume', 'maintain', 'obtain', 'require'], 0, 'assume that... 是「假定……」。'),
        single('en-l6-1-q4', "The teacher ______ the importance of reviewing lessons every day.", ['emphasized', 'predicted', 'revealed', 'obtained'], 0, 'emphasize the importance of 是「強調……的重要」。'),
        single('en-l6-1-q5', "Regular exercise helps you ______ a healthy weight.", ['maintain', 'accomplish', 'assume', 'reveal'], 0, 'maintain a healthy weight 是「維持健康體重」。'),
        single('en-l6-1-q6', "You need to ______ a visa before you travel to that country.", ['obtain', 'emphasize', 'predict', 'restrict'], 0, 'obtain a visa 是「取得簽證」。'),
        single('en-l6-1-q7', "Experts ______ that the population will double in fifty years.", ['predict', 'acquire', 'restrict', 'maintain'], 0, 'predict that... 是「預測……」。'),
        single('en-l6-1-q8', "This job ______ at least two years of experience.", ['requires', 'reveals', 'assumes', 'accomplishes'], 0, 'require 是「需要」。'),
        single('en-l6-1-q9', "The government decided to ______ the use of plastic bags.", ['restrict', 'acquire', 'maintain', 'emphasize'], 0, 'restrict 是「限制」。'),
        p.single('en-l6-1-q10', "What did Nora assume about the diary at first?", ['It would be full of boring daily notes.', 'It would be very valuable.', 'It would be written in a foreign language.', 'It would be about her own life.'], 0, '文中說 she assumed it would be full of boring daily notes。'),
        p.single('en-l6-1-q11', "The word \"revealed\" in the passage is closest in meaning to ______.", ['showed', 'hid', 'lost', 'built'], 0, 'reveal 是「揭露、顯示」,與 showed 最接近。'),
        multi('en-l6-1-q12', "Which of the following sentences use the underlined words correctly? (Choose all that apply.)", ['The report revealed a serious problem.', 'She predicted the door and left.', 'This course requires basic math skills.', 'He obtained a scholarship to study abroad.', 'They maintained their friendship for many years.'], [0, 2, 3, 4], 'predict 是「預測」,不能接 the door,「She predicted the door and left.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l6-2-p1',
      'Late Nights',
      "It is obvious that sleep affects learning, yet many students show a strong tendency to stay up late. Researchers found that sufficient sleep improves memory, but the explanation they gave was often vague, so some students remain reluctant to change their habits. One factor may be the pressure of exams; another is the constant attraction of the screen."
    );
    return lesson({
      id: 'en-l6-2',
      title: '總整理2 High-Frequency Words II: Nouns & Adjectives(高頻名詞與形容詞)',
      category: CATEGORY,
      tag: '總複習',
      sections: [
        bullets('學習說明', [
          '學測閱讀與克漏字常出現抽象名詞與形容詞。除了中文意思,也要記「常搭配的介系詞」,例如 a factor in、a tendency to、an obstacle to。',
        ]),
        table('高頻名詞', ['單字', '中文', '常見搭配'], [
          ['ambition', '抱負、野心', 'have a great ambition'],
          ['aspect', '面向、方面', 'an important aspect of life'],
          ['capacity', '容量、能力', 'a seating capacity of 50,000'],
          ['consequence', '後果', 'have serious consequences for ...'],
          ['evidence', '證據(不可數)', 'scientific evidence / no evidence that ...'],
          ['factor', '因素', 'an important factor'],
          ['obstacle', '障礙', 'an obstacle to success'],
          ['perspective', '觀點、角度', 'from my perspective'],
          ['phenomenon', '現象(複數 phenomena)', 'a natural phenomenon'],
          ['tendency', '傾向', 'a tendency to + V'],
        ]),
        table('高頻形容詞', ['單字', '中文', '例句'], [
          ['obvious', '明顯的', 'It is obvious that he is lying.'],
          ['reluctant', '不情願的', 'She was reluctant to speak in public.'],
          ['sufficient', '足夠的', 'We have sufficient food.'],
          ['vague', '模糊的', 'His answer was too vague.'],
        ]),
      ],
      quiz: [
        single('en-l6-2-q1', "Her greatest ______ is to become the first woman president.", ['ambition', 'obstacle', 'evidence', 'tendency'], 0, 'ambition 是「抱負」。'),
        single('en-l6-2-q2', "Language is an important ______ of culture.", ['aspect', 'capacity', 'phenomenon', 'consequence'], 0, 'aspect 是「方面」,an important aspect of culture 指文化的重要面向。'),
        single('en-l6-2-q3', "The stadium has a seating ______ of 50,000.", ['capacity', 'factor', 'tendency', 'perspective'], 0, 'seating capacity 是「座位容量」。'),
        single('en-l6-2-q4', "Skipping breakfast can have serious ______ for your health.", ['consequences', 'evidences', 'ambitions', 'perspectives'], 0, 'consequence 是「後果」,have serious consequences for 是「對……有嚴重後果」。'),
        single('en-l6-2-q5', "There is no scientific ______ that the medicine works.", ['evidence', 'ambition', 'aspect', 'obstacle'], 0, 'evidence 是「證據」。'),
        single('en-l6-2-q6', "Money is not the only ______ that affects happiness.", ['factor', 'phenomenon', 'capacity', 'tendency'], 0, 'factor 是「因素」。'),
        single('en-l6-2-q7', "Lack of confidence is a major ______ to success.", ['obstacle', 'evidence', 'aspect', 'ambition'], 0, 'obstacle 是「障礙」,an obstacle to success 是成功的障礙。'),
        single('en-l6-2-q8', "From my ______, the plan has both advantages and disadvantages.", ['perspective', 'phenomenon', 'tendency', 'capacity'], 0, 'from my perspective 是「就我的觀點而言」。'),
        single('en-l6-2-q9', "Rainbows are a natural ______ caused by sunlight and water drops.", ['phenomenon', 'consequence', 'ambition', 'tendency'], 0, 'natural phenomenon 是「自然現象」。'),
        p.single('en-l6-2-q10', "What is obvious according to the passage?", ['Sleep affects learning.', 'Exams are easy.', 'Screens improve memory.', 'Students sleep too much.'], 0, '第一句說 It is obvious that sleep affects learning。'),
        p.single('en-l6-2-q11', "The word \"reluctant\" in the passage is closest in meaning to ______.", ['unwilling', 'eager', 'able', 'anxious'], 0, 'reluctant 是「不情願的」,與 unwilling 最接近。'),
        multi('en-l6-2-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['It is obvious that he is lying.', 'She was reluctant to speak in public.', 'We have sufficient food for everyone.', 'His answer was so vague that nobody understood.', 'The tendency of the exam is tomorrow.'], [0, 1, 2, 3], 'tendency 是「傾向」,不能用來表示考試日期,「The tendency of the exam is tomorrow.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l6-3-p1',
      'The New Library',
      "The new library opened in March. Approximately 2,000 people visited on the first day. Nevertheless, the mayor said that the number was lower than expected. In terms of size, the library is the largest in the region; in terms of cost, however, it was also the most expensive. Furthermore, some residents complained that the opening hours were too short. Eventually, the city agreed to keep the library open until ten every night."
    );
    return lesson({
      id: 'en-l6-3',
      title: '總整理3 High-Frequency Words III: Adverbs, Phrases & Collocations(副詞、片語與搭配)',
      category: CATEGORY,
      tag: '總複習',
      sections: [
        bullets('學習說明', [
          '篇章結構與克漏字最愛考「連接副詞」與固定片語。記住它們的邏輯關係(補充、轉折、結果、條件)比記中文更有用。',
        ]),
        table('連接副詞與邏輯', ['單字', '中文', '邏輯關係與例句'], [
          ['approximately', '大約', 'about;The trip takes approximately three hours.'],
          ['eventually', '最終', '經過一段時間後;He eventually succeeded.'],
          ['furthermore', '此外', '補充(同方向);It is cheap; furthermore, it is close to the station.'],
          ['nevertheless', '然而、儘管如此', '轉折;The test was hard; nevertheless, most passed.'],
          ['otherwise', '否則', '條件;Take an umbrella; otherwise, you will get wet.'],
          ['meanwhile', '同時、在此期間', '時間;Meanwhile, I was cooking dinner.'],
        ]),
        table('片語與搭配', ['片語', '中文', '例句'], [
          ['in spite of + 名詞', '儘管', 'In spite of the rain, we had a great picnic.'],
          ['in terms of', '就……而言', 'In terms of size, it is the largest.'],
          ['on behalf of', '代表', 'I thank you on behalf of my family.'],
          ['take advantage of', '利用', 'Take advantage of the chance.'],
          ['catch up with', '趕上', 'I must catch up with my classmates.'],
          ['pay attention to', '注意', 'Pay attention to the teacher.'],
        ]),
        bullets('注意', [
          'in spite of 後面接名詞或 V-ing,不接子句(不可寫 in spite of it rained,應寫 in spite of the rain 或 although it rained)。',
          'take advantage of 與 pay attention to 的介系詞不能省略或換掉。',
        ]),
      ],
      quiz: [
        single('en-l6-3-q1', "The trip will take ______ three hours by train.", ['approximately', 'eventually', 'otherwise', 'meanwhile'], 0, 'approximately 是「大約」。'),
        single('en-l6-3-q2', "After many failures, he ______ succeeded in building the machine.", ['eventually', 'approximately', 'furthermore', 'otherwise'], 0, 'eventually 是「終於、最終」。'),
        single('en-l6-3-q3', "The apartment is cheap; ______, it is close to the MRT station.", ['furthermore', 'nevertheless', 'otherwise', 'meanwhile'], 0, '兩個優點並列,用 furthermore(此外)。'),
        single('en-l6-3-q4', "The test was difficult; ______, most students passed.", ['nevertheless', 'furthermore', 'eventually', 'approximately'], 0, '前後語意轉折,用 nevertheless(儘管如此)。'),
        single('en-l6-3-q5', "Take an umbrella; ______, you will get wet.", ['otherwise', 'meanwhile', 'furthermore', 'eventually'], 0, 'otherwise 是「否則」。'),
        single('en-l6-3-q6', "______ the heavy rain, the match went on as planned.", ['In spite of', 'In terms of', 'On behalf of', 'In case of'], 0, 'In spite of 是「儘管」,後面接名詞片語。'),
        single('en-l6-3-q7', "I would like to thank you all ______ my family.", ['on behalf of', 'in spite of', 'in terms of', 'in place of'], 0, 'on behalf of 是「代表」。'),
        single('en-l6-3-q8', "You should ______ of the chance to practice English with native speakers.", ['take advantage', 'make progress', 'pay attention', 'keep pace'], 0, 'take advantage of 是「利用」。'),
        single('en-l6-3-q9', "I missed a week of class, so I must work hard to ______ my classmates.", ['catch up with', 'get rid of', 'look up to', 'run out of'], 0, 'catch up with 是「趕上」。'),
        p.single('en-l6-3-q10', "How many people visited the library on the first day?", ['Approximately 2,000', 'Exactly 20,000', 'Fewer than 200', 'About 10,000'], 0, '文中說 Approximately 2,000 people visited on the first day。'),
        p.single('en-l6-3-q11', "What did the city eventually agree to do?", ['Keep the library open until ten every night', 'Close the library', 'Build a smaller library', 'Charge for entry'], 0, '最後一句說 Eventually, the city agreed to keep the library open until ten every night。'),
        multi('en-l6-3-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['In spite of the rain, we had a great picnic.', 'In spite of it rained, we had a great picnic.', 'He worked hard; otherwise, he would have failed.', 'She paid attention to the teacher.', 'You should take advantage the offer.'], [0, 2, 3], 'in spite of 後面接名詞而非子句,「In spite of it rained, we had a great picnic.」錯誤;take advantage of 的 of 不能省略,「You should take advantage the offer.」錯誤。'),
      ],
    });
  })(),
];
