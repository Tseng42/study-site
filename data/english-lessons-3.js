// 英文課文單元:第三冊(高二上)。編排原則與第一冊相同,見 english-lessons-1.js。
import { single, multi, passageSet, lesson, bullets, table } from './lesson-helpers.js';

const CATEGORY = '第三冊(高二上)';

export const englishLessons3 = [
  (() => {
    const p = passageSet(
      'en-l3-1-p1',
      'Lost in Lisbon',
      "When Kevin arrived at the airport in Lisbon, he discovered that his luggage had not arrived. He was standing at the counter, worried, when a kind staff member told him that the bag would be delivered to his hotel the next morning. By the time he reached the hotel, it was already dark and raining. Although the day had started badly, the next day was wonderful. While he was walking through the old streets, he tried delicious egg tarts, listened to street musicians, and bought a small souvenir for his mother. Kevin later said that the trip taught him to stay calm when plans change."
    );
    return lesson({
      id: 'en-l3-1',
      title: '第1課 Travel and Adventure(旅行與冒險)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:旅途中的意外、探索與收穫。',
          '學習目標:敘述過去事件時,正確區分過去簡單式、過去進行式與過去完成式。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['destination', 'n. 目的地', 'Our final destination is Kyoto.'],
          ['souvenir', 'n. 紀念品', 'I bought a souvenir for my mom.'],
          ['explore', 'v. 探索', 'We explored the old town.'],
          ['luggage', 'n. 行李(不可數)', 'My luggage was lost.'],
          ['journey', 'n. 旅程', 'It was a long journey.'],
          ['adventure', 'n. 冒險', 'The trip was a great adventure.'],
          ['deliver', 'v. 遞送', 'The bag was delivered to my hotel.'],
        ]),
        bullets('文法重點', [
          '過去進行式 was/were + V-ing:過去某一時間正在進行的動作,常與 when / while 搭配。While I was watching TV, the phone rang.(進行中的長動作 + 被打斷的短動作)',
          '過去完成式 had + p.p.:在過去某一時間點「之前」已完成的動作(過去的過去)。When I arrived at the station, the train had already left.',
          'by the time + 過去式子句,主要子句用過去完成式:By the time we got to the cinema, the movie had started.',
          '與明確過去時間(yesterday)連用時不可用現在完成式。',
        ]),
      ],
      quiz: [
        single('en-l3-1-q1', "The final ______ of our trip is Kyoto, where we will stay for three days.", ['destination', 'decision', 'distance', 'direction'], 0, 'destination 是「目的地」。'),
        single('en-l3-1-q2', "I bought a small doll as a ______ of my visit to Japan.", ['souvenir', 'sample', 'symbol', 'stranger'], 0, 'souvenir 是「紀念品」。'),
        single('en-l3-1-q3', "We plan to ______ the old town on foot.", ['explore', 'explode', 'export', 'explain'], 0, 'explore 是「探索」。'),
        single('en-l3-1-q4', "The airline lost my ______, and I had to buy new clothes.", ['luggage', 'language', 'leather', 'landscape'], 0, 'luggage 是「行李」,行李遺失才要買新衣服。'),
        single('en-l3-1-q5', "It was a long ______ from Taipei to London, and we were exhausted.", ['journey', 'jewelry', 'journal', 'judgment'], 0, 'journey 是「旅程」。'),
        single('en-l3-1-q6', "When I arrived at the station, the train ______.", ['had already left', 'already left', 'has already left', 'was already leaving'], 0, '「我到達時火車已經開走」,火車離開發生在到達之前,用過去完成式。'),
        single('en-l3-1-q7', "While I ______ TV, the phone rang.", ['watched', 'was watching', 'have watched', 'am watching'], 1, '進行中的動作被電話鈴聲打斷,用過去進行式 was watching。'),
        single('en-l3-1-q8', "By the time we got to the cinema, the movie ______.", ['started', 'has started', 'had started', 'was starting'], 2, 'by the time + 過去式,主要子句用過去完成式 had started。'),
        p.single('en-l3-1-q9', "What problem did Kevin have when he arrived in Lisbon?", ['His passport was stolen.', 'His luggage had not arrived.', 'His hotel was closed.', 'He missed his flight.'], 1, '文中說 he discovered that his luggage had not arrived。'),
        p.single('en-l3-1-q10', "What was Kevin doing when the staff member spoke to him?", ['Sleeping in his hotel', 'Standing at the counter and feeling worried', 'Buying a souvenir', 'Eating egg tarts'], 1, '文中說 He was standing at the counter, worried, when a kind staff member told him...'),
        p.single('en-l3-1-q11', "What did the trip teach Kevin?", ['To carry less luggage', 'To stay calm when plans change', 'To avoid traveling alone', 'To buy more souvenirs'], 1, '最後一句說 the trip taught him to stay calm when plans change。'),
        multi('en-l3-1-q12', "Which of the following sentences are correct? (多選)", ['He was reading when I called him.', 'When I got home, my mom cooked dinner already.', 'She had finished her homework before her friends came.', 'While she was cooking, the smoke alarm went off.', 'I have lost my key yesterday.'], [0, 2, 3], '媽媽在我到家之前已煮好,應用 had already cooked,B 錯誤;yesterday 不可搭配現在完成式,E 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l3-2-p1',
      'Why Does Music Move Us?',
      "Not only can music make us feel happy or sad, but it can also change the way we think and act. Researchers have found that slow, gentle melodies help people relax, while fast rhythms make people want to move. Both athletes and students often listen to music to improve their performance. Either the beat or the words of a song can bring back memories from years ago. Some scientists believe that this is because music is processed in the same part of the brain that stores emotions. That is why a familiar song can suddenly make us cry or smile, even when we have not heard it for a long time."
    );
    return lesson({
      id: 'en-l3-2',
      title: '第2課 Music and Emotions(音樂與情緒)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:音樂如何影響情緒、記憶與行為。',
          '學習目標:使用 both...and、either...or、neither...nor、not only...but also 等關聯連接詞,並注意主詞與動詞的一致性。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['melody', 'n. 旋律', 'The melody is easy to remember.'],
          ['rhythm', 'n. 節奏', 'The drum keeps the rhythm.'],
          ['lyrics', 'n. 歌詞(複數)', 'I love the lyrics of this song.'],
          ['composer', 'n. 作曲家', 'Mozart was a great composer.'],
          ['emotion', 'n. 情緒', 'Music can express emotion.'],
          ['perform', 'v. 表演', 'The band will perform tonight.'],
          ['concert', 'n. 音樂會', 'We went to a concert.'],
        ]),
        bullets('文法重點', [
          'both A and B(兩者都),接複數動詞:Both Tom and Mary are musicians.',
          'either A or B / neither A nor B:動詞與離動詞較近的主詞一致。Either you or your brother has to clean the room.',
          'not only A but also B:連接對等的詞類;動詞與 B 一致。She is not only a singer but also a songwriter.',
          'not only 置於句首時,後面主詞與助動詞倒裝:Not only did he write the lyrics, but he also wrote the melody.',
        ]),
      ],
      quiz: [
        single('en-l3-2-q1', "The ______ of the song is easy to remember, and everyone hums it.", ['melody', 'mystery', 'memory', 'method'], 0, 'melody 是「旋律」。'),
        single('en-l3-2-q2', "I can't understand the ______ because the singer speaks too fast.", ['lyrics', 'logic', 'loyalty', 'luck'], 0, 'lyrics 是「歌詞」。'),
        single('en-l3-2-q3', "Mozart was a great ______ who wrote hundreds of pieces of music.", ['composer', 'commander', 'competitor', 'collector'], 0, 'composer 是「作曲家」。'),
        single('en-l3-2-q4', "She couldn't hide her ______ when she heard the good news.", ['emotion', 'emergency', 'emphasis', 'empire'], 0, 'emotion 是「情緒」。'),
        single('en-l3-2-q5', "The band will ______ at the school festival next Friday.", ['perform', 'perceive', 'persuade', 'perish'], 0, 'perform 是「表演」。'),
        single('en-l3-2-q6', "Both my sister ______ I love jazz.", ['and', 'or', 'nor', 'but'], 0, 'both...and 是「兩者都」。'),
        single('en-l3-2-q7', "Either you or your brother ______ to clean the room.", ['has', 'have', 'are', 'were'], 0, 'either...or 連接兩個主詞時,動詞與較近的主詞 your brother 一致,用 has。'),
        single('en-l3-2-q8', "She is ______ a singer but also a songwriter.", ['not only', 'both', 'either', 'neither'], 0, 'not only...but also 是「不僅……而且……」。'),
        p.single('en-l3-2-q9', "What do slow, gentle melodies help people do?", ['Relax', 'Exercise', 'Study math', 'Sing loudly'], 0, '文中說 slow, gentle melodies help people relax。'),
        p.single('en-l3-2-q10', "According to some scientists, why can a familiar song make us cry or smile?", ['Because music is processed in the part of the brain that stores emotions', 'Because songs are always sad', 'Because the lyrics are easy', 'Because we sing too loudly'], 0, '文中說音樂與情緒在大腦同一區域被處理,所以熟悉的歌曲會讓人哭或笑。'),
        p.single('en-l3-2-q11', "What is the main idea of the passage?", ['Music has strong effects on our emotions, thoughts, and memories.', 'Athletes should not listen to music.', 'Loud music is harmful.', 'Only students need music.'], 0, '全文說明音樂影響情緒、思考、行為與記憶。'),
        multi('en-l3-2-q12', "Which of the following sentences are correct? (多選)", ['Both Tom and Mary are musicians.', 'Neither the teacher nor the students was late.', 'Either my parents or my sister is coming.', 'She not only sings but also dances.', 'Not only he but also I are ready.'], [0, 2, 3], 'B 句動詞與較近的 the students 一致,應為 were;E 句動詞與 I 一致,應為 am,B、E 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l3-3-p1',
      'Who Decides What We Wear?',
      "Fashion is not only about clothing; it is also a way of showing who we are. Some teenagers follow every trend because they wish they could fit in with their friends. Others prefer to create their own style, mixing old and new pieces to express their individuality. Many schools require uniforms, which supporters say reduce competition over expensive clothes. Critics, however, argue that uniforms limit students' freedom of expression. Fashion experts suggest that the best style is the one that makes you feel confident, not the one that other people tell you to wear."
    );
    return lesson({
      id: 'en-l3-3',
      title: '第3課 Fashion and Identity(時尚與自我)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:穿著、流行與個人風格,以及制服的優缺點。',
          '學習目標:使用 wish、If only、as if 表達與現在或過去事實相反的願望與假設。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['trend', 'n. 趨勢、流行', 'It is a popular trend.'],
          ['identity', 'n. 身分、認同', 'Culture shapes our identity.'],
          ['individual', 'n./adj. 個人;個別的', 'Each individual is unique.'],
          ['individuality', 'n. 個性', 'Clothes show our individuality.'],
          ['express', 'v. 表達', 'Art helps us express feelings.'],
          ['casual', 'adj. 休閒的', 'He wears casual clothes.'],
          ['fit in', 'phr. 融入群體', 'She tried to fit in with her classmates.'],
        ]),
        bullets('文法重點', [
          'wish + 過去式(與現在事實相反):I wish I were taller.(be 動詞用 were)',
          'wish + 過去完成式(與過去事實相反):I wish I had gone to the party last night.',
          'wish + would/could(對未來或能力的期望):I wish I could speak French.',
          'If only + 過去式/過去完成式:If only I had enough money to buy that jacket.',
          'as if / as though + 過去式(與現在事實相反):He acts as if he were the boss.',
        ]),
      ],
      quiz: [
        single('en-l3-3-q1', "Short skirts were a popular ______ in the 1960s.", ['trend', 'trade', 'trial', 'trunk'], 0, 'trend 是「流行、趨勢」。'),
        single('en-l3-3-q2', "Language is an important part of a person's cultural ______.", ['identity', 'industry', 'ideal', 'insurance'], 0, 'identity 是「身分、認同」。'),
        single('en-l3-3-q3', "Each ______ has different talents and interests.", ['individual', 'industry', 'instrument', 'ingredient'], 0, 'individual 是「個人」。'),
        single('en-l3-3-q4', "Art is a good way to ______ your feelings.", ['express', 'export', 'expose', 'expect'], 0, 'express 是「表達」。'),
        single('en-l3-3-q5', "He prefers ______ clothes such as T-shirts and jeans to formal suits.", ['casual', 'crucial', 'crowded', 'classic'], 0, 'casual 是「休閒的」,與 formal suits 相對。'),
        single('en-l3-3-q6', "I wish I ______ taller.", ['am', 'was', 'were', 'will be'], 2, 'wish 後接與現在事實相反的假設,用過去式,be 動詞用 were。'),
        single('en-l3-3-q7', "If only I ______ enough money to buy that jacket.", ['have', 'had', 'will have', 'would have'], 1, 'If only + 過去式,表示與現在事實相反的願望。'),
        single('en-l3-3-q8', "I wish I ______ to the party last night.", ['went', 'had gone', 'have gone', 'would go'], 1, '與過去事實相反的願望,wish 後接過去完成式 had gone。'),
        p.single('en-l3-3-q9', "Why do some teenagers follow every trend?", ['They want to fit in with their friends.', 'They cannot afford new clothes.', 'They dislike uniforms.', 'They work in fashion shops.'], 0, '文中說 they wish they could fit in with their friends。'),
        p.single('en-l3-3-q10', "What do critics say about school uniforms?", ['They limit students\' freedom of expression.', 'They are too expensive.', 'They increase competition.', 'They are old-fashioned.'], 0, '文中說 Critics argue that uniforms limit students\' freedom of expression。'),
        p.single('en-l3-3-q11', "According to fashion experts, the best style is ______.", ['the one that makes you feel confident', 'the one that is most expensive', 'the one that follows trends', 'the one your friends choose'], 0, '最後一句說最好的風格是讓你覺得有自信的那一種。'),
        multi('en-l3-3-q12', "Which of the following sentences are correct? (多選)", ['I wish I could speak French.', 'I wish I can fly.', 'She wishes she had studied harder.', 'He acts as if he were the boss.', 'If only I will win the prize.'], [0, 2, 3], 'wish 後面不用現在式 can,應為 could,B 錯誤;If only 之後不用 will,E 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l3-4-p1',
      'Small Savings, Big Dreams',
      "Ava wanted to buy a camera that cost 12,000 dollars, but her monthly allowance was only 1,000. Instead of giving up, she made a budget and decided to save half of her allowance each month. She stopped buying bubble tea every day and sold her old books online. It took a year, but she finally bought the camera with her own money. \"If I hadn't saved every month, I would still be dreaming,\" she says. Money experts agree that small habits matter: unless you plan your spending, you may find that your money disappears before the end of the month."
    );
    return lesson({
      id: 'en-l3-4',
      title: '第4課 Money and Smart Choices(金錢與聰明選擇)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:預算、儲蓄、消費習慣與理財。',
          '學習目標:使用 unless、as long as、in case、if 混合條件句談論金錢決定與後果。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['afford', 'v. 負擔得起', 'I cannot afford a new car.'],
          ['budget', 'n./v. 預算;編列預算', 'She made a budget.'],
          ['expense', 'n. 支出、費用', 'Rent is our biggest expense.'],
          ['invest', 'v. 投資', 'He invested in stocks.'],
          ['income', 'n. 收入', 'Her income is low.'],
          ['allowance', 'n. 零用錢', 'My allowance is 1,000 dollars.'],
          ['save', 'v. 儲蓄、節省', 'She saves half of her allowance.'],
        ]),
        bullets('文法重點', [
          'unless = if ... not:Unless you study harder, you will not pass the exam.(unless 之後不再加否定,不寫 unless it doesn\'t rain)',
          'as long as / provided (that) 表「只要」:You can borrow my bike as long as you return it before dark.',
          'in case + 現在式:以防萬一:Take an umbrella in case it rains.',
          '與現在事實相反:If + 過去式, would/could + 原形。與過去事實相反:If + 過去完成式, would have + p.p.。混合條件句:If I had saved more money, I could afford the trip now.',
          'if 子句中不用 will 或 would:If it rains tomorrow, ...(不寫 If it will rain)',
        ]),
      ],
      quiz: [
        single('en-l3-4-q1', "I can't ______ a new car; it's too expensive.", ['afford', 'affect', 'attend', 'adopt'], 0, 'afford 是「負擔得起」。'),
        single('en-l3-4-q2', "Our monthly ______ for food is about 8,000 dollars.", ['expense', 'exercise', 'expert', 'experience'], 0, 'expense 是「支出、費用」。'),
        single('en-l3-4-q3', "You should make a ______ so that you don't spend more than you earn.", ['budget', 'bargain', 'battle', 'border'], 0, 'make a budget 是「編列預算」。'),
        single('en-l3-4-q4', "He decided to ______ his savings in the stock market.", ['invest', 'invent', 'invite', 'involve'], 0, 'invest 是「投資」。'),
        single('en-l3-4-q5', "Her monthly ______ is not high, but she lives comfortably.", ['income', 'increase', 'instance', 'interest'], 0, 'income 是「收入」。'),
        single('en-l3-4-q6', "You will not pass the exam ______ you study harder.", ['if', 'unless', 'because', 'although'], 1, 'unless 意思是「除非」,即 if...not。'),
        single('en-l3-4-q7', "You can borrow my bike ______ you return it before dark.", ['as long as', 'even though', 'so that', 'in case'], 0, 'as long as 是「只要」。'),
        single('en-l3-4-q8', "If I had saved more money, I ______ the trip now.", ['can afford', 'could afford', 'would afford', 'could have afforded'], 1, '過去沒存錢(與過去事實相反)造成現在的結果,是混合條件句:If + 過去完成式, could + 原形。'),
        p.single('en-l3-4-q9', "How did Ava reach her goal of buying the camera?", ['She won a lottery.', 'She made a budget, saved half of her allowance, and sold old books.', 'Her parents bought it.', 'She borrowed money from friends.'], 1, '文中說她編了預算、每月存一半零用錢,並賣舊書。'),
        p.single('en-l3-4-q10', "What does Ava mean by \"I would still be dreaming\"?", ['She would still not have the camera.', 'She would sleep more.', 'She would be rich.', 'She would have no dreams.'], 0, '如果沒有每個月存錢,她現在仍只是在夢想而沒有相機。'),
        p.single('en-l3-4-q11', "What do money experts say?", ['Small habits matter, and spending should be planned.', 'Nobody should buy cameras.', 'Only rich people can save.', 'Bubble tea is always harmful.'], 0, '文中說 small habits matter,並提醒不規劃花費錢就會不見。'),
        multi('en-l3-4-q12', "Which of the following sentences are correct? (多選)", ['Unless it rains, we will go camping.', "Unless it doesn't rain, we will go camping.", 'Take an umbrella in case it rains.', 'If I were rich, I would travel around the world.', 'If I would have time, I would help you.'], [0, 2, 3], 'unless 已含否定意思,不再加 not,B 錯誤;if 子句中不用 would,E 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l3-5-p1',
      'Saving the Formosan Black Bear',
      "The Formosan black bear, recognizable by the white V-shaped mark on its chest, is one of Taiwan's most famous wild animals. Because forests have been cleared for farms and roads, the bears have lost much of their habitat, and they are now considered endangered. To protect them, the government has set up national parks and asked hunters to stop laying traps. Volunteers also visit schools to teach children why wildlife matters. If bears disappeared, the forest would lose an important seed spreader, which could harm many other species. Protecting one animal, in other words, means protecting the whole ecosystem."
    );
    return lesson({
      id: 'en-l3-5',
      title: '第5課 Animals and Us(動物與人類)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:瀕危動物、棲地與人類的保育行動。',
          '學習目標:使用使役動詞(make / let / have / get)與感官動詞(see / hear / feel)的句型。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['species', 'n. 物種(單複數同形)', 'A new species was found.'],
          ['endangered', 'adj. 瀕臨絕種的', 'The panda is an endangered animal.'],
          ['habitat', 'n. 棲地', 'Forests are their habitat.'],
          ['extinct', 'adj. 絕種的', 'Dinosaurs are extinct.'],
          ['adopt', 'v. 領養、採用', 'They adopted a dog.'],
          ['wildlife', 'n. 野生動物', 'We must protect wildlife.'],
          ['ecosystem', 'n. 生態系', 'Every species matters in an ecosystem.'],
        ]),
        bullets('文法重點', [
          'make / let / have + 受詞 + 原形動詞:The teacher made the students read the story again. / The boss let the workers go home early.',
          'get + 受詞 + to V:She got her brother to take the dog for a walk.',
          'have / get + 受詞 + p.p.(叫別人做,受詞是被做的對象):I had my bike repaired.(不寫 had my hair to cut)',
          '感官動詞 see / hear / feel + 受詞 + 原形(看到全程)或 V-ing(正在進行):I heard someone call my name. / I saw him crossing the street.',
        ]),
      ],
      quiz: [
        single('en-l3-5-q1', "The giant panda is an ______ species; only about 1,800 live in the wild.", ['endangered', 'ancient', 'ordinary', 'ambitious'], 0, 'endangered 是「瀕臨絕種的」。'),
        single('en-l3-5-q2', "Cutting down forests destroys the ______ of many animals.", ['habitat', 'habit', 'harvest', 'honor'], 0, 'habitat 是「棲地」。'),
        single('en-l3-5-q3', "Dinosaurs became ______ millions of years ago.", ['extinct', 'extreme', 'exact', 'excellent'], 0, 'extinct 是「絕種的」。'),
        single('en-l3-5-q4', "Scientists have discovered a new ______ of frog in the rainforest.", ['species', 'surface', 'sample', 'scene'], 0, 'species 是「物種」。'),
        single('en-l3-5-q5', "Many families choose to ______ a dog from an animal shelter.", ['adopt', 'adapt', 'adjust', 'admit'], 0, 'adopt 是「領養」。'),
        single('en-l3-5-q6', "I had my bike ______ yesterday.", ['repair', 'repaired', 'repairing', 'to repair'], 1, 'have + 受詞 + p.p.,腳踏車是「被修」,用 repaired。'),
        single('en-l3-5-q7', "The teacher made the students ______ the story again.", ['read', 'to read', 'reading', 'reads'], 0, 'make + 受詞 + 原形動詞。'),
        single('en-l3-5-q8', "She got her brother ______ the dog for a walk.", ['to take', 'take', 'taking', 'took'], 0, 'get + 受詞 + to V。'),
        p.single('en-l3-5-q9', "Why is the Formosan black bear considered endangered?", ['Too many tourists feed it.', 'Forests have been cleared, so it has lost much of its habitat.', 'It cannot find water.', 'It is too small.'], 1, '文中說森林被開墾成農地與道路,黑熊失去許多棲地。'),
        p.single('en-l3-5-q10', "What has been done to protect the bears?", ['National parks were set up and hunters were asked to stop laying traps.', 'All the bears were moved abroad.', 'Farms were built near forests.', 'Schools were closed.'], 0, '文中說政府設立國家公園,並要求獵人停止設陷阱。'),
        p.single('en-l3-5-q11', "What does the last sentence mean?", ['Protecting one animal also helps protect the whole ecosystem.', 'Only bears need protection.', 'Forests are not important.', 'Zoos are better than nature.'], 0, '保護一種動物就等於保護整個生態系。'),
        multi('en-l3-5-q12', "Which of the following sentences are correct? (多選)", ['I heard someone call my name.', 'I saw him to cross the street.', 'The boss let the workers go home early.', 'She had her hair to cut.', 'I felt the ground shake.'], [0, 2, 4], '感官動詞 see 後接原形或 V-ing,不接 to V,B 錯誤;have 後受詞為被動關係要用 p.p.,應為 had her hair cut,D 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l3-6-p1',
      'A Trip to Mars?',
      "Scientists hope that humans will land on Mars within the next thirty years. The journey will take about seven months, and the crew will have to live in a small spacecraft with limited food and water. On Mars, temperatures can drop to minus sixty degrees Celsius, and there is no air that people can breathe. Some experts think that by the time the first astronauts return home, they will have collected enough data to help build a permanent base. Critics, however, ask whether the money would be better spent on solving problems on Earth. This debate is likely to continue as technology advances."
    );
    return lesson({
      id: 'en-l3-6',
      title: '第6課 Reaching for the Stars(探索太空)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:太空探索、火星計畫的挑戰與爭議。',
          '學習目標:區分未來式的各種形式:will、be going to、現在簡單式表時刻表、未來進行式、未來完成式。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['astronaut', 'n. 太空人', 'The astronaut trained for two years.'],
          ['launch', 'v./n. 發射', 'They will launch a rocket.'],
          ['orbit', 'n./v. 軌道;繞軌道運行', 'The Moon orbits the Earth.'],
          ['gravity', 'n. 重力', 'Gravity keeps us on the ground.'],
          ['mission', 'n. 任務', 'The mission was a success.'],
          ['spacecraft', 'n. 太空船', 'The spacecraft landed safely.'],
          ['permanent', 'adj. 永久的', 'They plan a permanent base.'],
        ]),
        bullets('文法重點', [
          'be going to:有跡象顯示即將發生,或已決定的計畫:Look at those dark clouds! It is going to rain.',
          '現在簡單式表時刻表:The train leaves at 8 a.m. tomorrow.',
          '未來進行式 will be + V-ing:未來某時刻正在進行:This time tomorrow, we will be lying on the beach.',
          '未來完成式 will have + p.p.:在未來某時間之前已經完成:By this time next year, I will have finished my degree.',
          '在時間/條件副詞子句中,用現在式代替未來式:If it rains tomorrow...(不寫 If it will rain);When I arrive, I will call you.',
        ]),
      ],
      quiz: [
        single('en-l3-6-q1', "The rocket will ______ from the island at dawn.", ['launch', 'lounge', 'lecture', 'labor'], 0, 'launch 是「發射」。'),
        single('en-l3-6-q2', "The Moon travels in an ______ around the Earth.", ['orbit', 'organ', 'origin', 'orchard'], 0, 'orbit 是「軌道」。'),
        single('en-l3-6-q3', "Without ______, everything on Earth would float into the air.", ['gravity', 'gravel', 'grace', 'grade'], 0, 'gravity 是「重力」。'),
        single('en-l3-6-q4', "The ______ trained for two years before flying into space.", ['astronaut', 'athlete', 'architect', 'assistant'], 0, 'astronaut 是「太空人」。'),
        single('en-l3-6-q5', "The ______ of the spacecraft is to collect samples from the planet.", ['mission', 'mixture', 'moisture', 'mansion'], 0, 'mission 是「任務」。'),
        single('en-l3-6-q6', "Look at those dark clouds! It ______ rain.", ['will', 'is going to', 'shall', 'would'], 1, '根據眼前烏雲的跡象判斷即將下雨,用 be going to。'),
        single('en-l3-6-q7', "By this time next year, I ______ my degree.", ['will finish', 'will have finished', 'am finishing', 'finished'], 1, 'by this time next year 表示未來某時間點之前已完成,用未來完成式。'),
        single('en-l3-6-q8', "This time tomorrow, we ______ on the beach.", ['will lie', 'will be lying', 'will have lain', 'lie'], 1, 'this time tomorrow 表示未來某個時刻正在進行,用未來進行式。'),
        p.single('en-l3-6-q9', "How long will the journey to Mars take?", ['About seven days', 'About seven months', 'About seven years', 'About thirty years'], 1, '文中說 The journey will take about seven months。'),
        p.single('en-l3-6-q10', "Which is a challenge on Mars mentioned in the passage?", ['The temperature can be extremely cold and there is no breathable air.', 'It has too much water.', 'It is too crowded.', 'It has no gravity.'], 0, '文中說溫度可降到零下六十度,而且沒有可呼吸的空氣。'),
        p.single('en-l3-6-q11', "What do critics argue?", ['The money might be better spent on solving problems on Earth.', 'Mars is too close.', 'Astronauts are not brave.', 'Spacecraft are too small.'], 0, '批評者質疑這些錢是否更適合用在解決地球上的問題。'),
        multi('en-l3-6-q12', "Which of the following sentences are correct? (多選)", ['The train leaves at 8 a.m. tomorrow.', 'By midnight, I will have gone to bed.', 'Tomorrow I will be meeting my teacher at noon.', 'If it will rain tomorrow, we will stay home.', 'When I will arrive, I will call you.'], [0, 1, 2], '時間與條件副詞子句要用現在式代替未來式,D、E 錯誤。'),
      ],
    });
  })(),
];
