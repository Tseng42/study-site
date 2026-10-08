// 英文課文單元:第一冊(高一上)。依 108 課綱高中英文各版本常見的「一課一個主題」
// 編排(校園生活、友誼、環境、健康等),不對應任何單一出版社的課次或課文。
// 短文與題目皆為原創,每課包含:單字題、文法題、一篇短文閱讀題組、一題多選。
import { single, multi, passageSet, lesson, bullets, table } from './lesson-helpers.js';

const CATEGORY = '第一冊(高一上)';

export const englishLessons1 = [
  (() => {
    const p = passageSet(
      'en-l1-1-p1',
      "Mia's First Day",
      "Mia moved to a new city last month, and today was her first day at a new school. She woke up early because she was too nervous to sleep. In the classroom, everything felt unfamiliar—the faces, the rules, even the smell of the hallway. During lunch, a girl named Lily sat next to her and offered to share her sandwich. \"Don't worry,\" Lily said with a smile. \"I felt the same way when I first arrived here.\" Mia laughed for the first time that day. By the end of the afternoon, she realized that a new place could become familiar more quickly than she had expected."
    );
    return lesson({
      id: 'en-l1-1',
      title: '第1課 First Days and New Beginnings(新的開始)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:第一次做某件事、適應新環境(新學校、新城市)時的心情與經驗。',
          '學習目標:能描述初體驗與適應過程,並正確使用現在完成式、過去簡單式與 used to。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['nervous', 'adj. 緊張的', 'She felt nervous before the speech.'],
          ['adapt (to)', 'v. 適應', 'It takes time to adapt to a new school.'],
          ['familiar', 'adj. 熟悉的', 'The song sounds familiar to me.'],
          ['unfamiliar', 'adj. 陌生的', 'The streets were unfamiliar to her.'],
          ['greet', 'v. 問候、迎接', 'They greeted us with a warm smile.'],
          ['gradually', 'adv. 逐漸地', 'He gradually got used to city life.'],
          ['encourage', 'v. 鼓勵', 'Her teacher encouraged her to try again.'],
          ['memorable', 'adj. 難忘的', 'It was a memorable trip.'],
        ]),
        bullets('文法重點', [
          '現在完成式 have/has + p.p.:表示從過去持續到現在的狀態,或與現在有關的經驗。常搭配 since(自從)、for(長達)、ever、never、already、yet。例:I have lived here for ten years.',
          '句型 It is the first time (that) + 現在完成式:例 It is the first time that I have eaten sushi.',
          '過去簡單式搭配明確的過去時間(yesterday, in 2019, last year),不能改成現在完成式:I saw him yesterday.',
          'used to + 原形動詞:過去的習慣或狀態(現在已不是);be used to + V-ing:習慣於。',
        ]),
      ],
      quiz: [
        single('en-l1-1-q1', "It took him a few weeks to ______ to the cold weather in Canada.", ['adapt', 'argue', 'ignore', 'borrow'], 0, 'adapt to 意思是「適應」,adapt to the cold weather 即適應寒冷的天氣。'),
        single('en-l1-1-q2', "Whenever a new student joins our class, we ______ him or her with a warm smile.", ['greet', 'blame', 'punish', 'repair'], 0, 'greet 是「問候、迎接」,用微笑迎接新同學最合理。'),
        single('en-l1-1-q3', "The teacher's kind words ______ the shy boy to speak in class.", ['encouraged', 'avoided', 'offered', 'lacked'], 0, 'encourage sb to V 意思是「鼓勵某人做某事」。'),
        single('en-l1-1-q4', "Learning to ride a bike without help was a ______ experience; I will never forget it.", ['memorable', 'ordinary', 'harmful', 'careless'], 0, 'memorable 是「難忘的」,與後面「我永遠不會忘記」呼應。'),
        single('en-l1-1-q5', "As the days went by, Tom ______ became used to his new school.", ['gradually', 'anxiously', 'loudly', 'fully'], 0, 'gradually 是「逐漸地」,搭配 as the days went by(隨著日子過去)。'),
        single('en-l1-1-q6', "It is the first time that I ______ sushi.", ['eat', 'ate', 'have eaten', 'am eating'], 2, 'It is the first time (that) 之後接現在完成式,故用 have eaten。'),
        single('en-l1-1-q7', "I ______ in Taipei since I was born.", ['live', 'lived', 'have lived', 'am living'], 2, 'since 引導的時間點,主要子句用現在完成式,故用 have lived。'),
        single('en-l1-1-q8', "When I was a child, I ______ be afraid of the dark, but now I am not.", ['used to', 'am used to', 'get used to', 'was used to'], 0, 'used to + 原形動詞,表示過去的習慣或狀態,現在已經不是了。'),
        p.single('en-l1-1-q9', "Why did Mia wake up early?", ['She had to catch a bus.', 'She was too nervous to sleep.', 'She wanted to meet Lily.', 'Her mother woke her up.'], 1, '第二句提到 She woke up early because she was too nervous to sleep.'),
        p.single('en-l1-1-q10', "What can be inferred about Lily?", ['She was also once a new student at the school.', 'She had never eaten a sandwich.', 'She disliked Mia.', 'She was a teacher.'], 0, 'Lily 說 I felt the same way when I first arrived here,可推知她也曾是新來的人。'),
        p.single('en-l1-1-q11', "The word \"unfamiliar\" in the passage is closest in meaning to ______.", ['strange', 'boring', 'noisy', 'dangerous'], 0, 'unfamiliar 是「陌生的」,與 strange(陌生、不熟悉的)最接近。'),
        multi('en-l1-1-q12', "Which of the following sentences are grammatically correct? (Choose all that apply.)", ['She has visited Japan three times.', 'I have seen him yesterday.', 'They moved here in 2019.', 'He has been to Paris last year.', 'We have known each other for ten years.'], [0, 2, 4], 'yesterday、in 2019、last year 是明確的過去時間,不可搭配現在完成式,「I have seen him yesterday.」、「He has been to Paris last year.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l1-2-p1',
      'A Day at Sunrise High',
      "At Sunrise High School, the day starts at 7:50 with a flag-raising ceremony. After four morning classes, students eat lunch in the cafeteria, where they usually chat about homework, sports, or the latest movies. In the afternoon, many students take part in club activities such as basketball, drama, or robotics. Ms. Chen, the school counselor, says that these activities help students develop teamwork and time-management skills. \"Grades are important,\" she explains, \"but learning how to cooperate with others will be useful for the rest of their lives.\""
    );
    return lesson({
      id: 'en-l1-2',
      title: '第2課 Life at School(校園生活)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:校園的一天、課外活動與同儕合作。',
          '學習目標:能描述日常作息,並區分現在簡單式與現在進行式,使用 so/neither 與 too/either 表示附和。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['assignment', 'n. 作業', 'The assignment is due on Friday.'],
          ['deadline', 'n. 截止日期', 'We must meet the deadline.'],
          ['participate (in)', 'v. 參與', 'Everyone should participate in the discussion.'],
          ['attend', 'v. 出席、參加', 'She attended the meeting.'],
          ['cooperate', 'v. 合作', 'The two groups cooperated well.'],
          ['extracurricular', 'adj. 課外的', 'She joins many extracurricular activities.'],
          ['cafeteria', 'n. 自助餐廳', 'We had lunch in the school cafeteria.'],
        ]),
        bullets('文法重點', [
          '現在簡單式表習慣與事實(He usually goes to school by bike);現在進行式表此刻或暫時的動作(Today he is taking the bus)。',
          '頻率副詞(always, usually, often, sometimes, never)通常放在 be 動詞之後、一般動詞之前:She is always late. / He never eats breakfast.',
          '附和肯定句:So + 助動詞 + 主詞(So do I);附和否定句:Neither + 助動詞 + 主詞(Neither do I)。',
          '句尾附和:肯定用 too,否定用 either:I like it, too. / I don\'t like it, either.',
        ]),
      ],
      quiz: [
        single('en-l1-2-q1', "You must hand in the ______ by Friday, or your teacher will lower your grade.", ['assignment', 'festival', 'invitation', 'vacation'], 0, 'assignment 是「作業」,交作業與被扣分的情境最合理。'),
        single('en-l1-2-q2', "The ______ for the science report is next Monday, so we have to work hard this weekend.", ['deadline', 'habit', 'fashion', 'wealth'], 0, 'deadline 是「截止日期」。'),
        single('en-l1-2-q3', "Students are encouraged to ______ in class discussions.", ['participate', 'conclude', 'pretend', 'estimate'], 0, 'participate in 是「參與」,participate in class discussions 即參與課堂討論。'),
        single('en-l1-2-q4', "I have to ______ a meeting at 3 p.m., so I can't join you.", ['attend', 'arrest', 'appoint', 'attract'], 0, 'attend a meeting 是「出席會議」。'),
        single('en-l1-2-q5', "Our school offers many ______ activities, such as chess club, band, and volunteer work.", ['extracurricular', 'electrical', 'environmental', 'economic'], 0, 'extracurricular activities 是「課外活動」。'),
        single('en-l1-2-q6', "Tom usually ______ to school by bike, but today he is taking the bus.", ['goes', 'is going', 'went', 'has gone'], 0, 'usually 表習慣,用現在簡單式 goes;後半句 today he is taking 則是進行式。'),
        single('en-l1-2-q7', "A: I don't like math. B: ______", ['Neither do I.', 'So do I.', 'Neither don\'t I.', 'Either do I.'], 0, '附和否定句用 Neither + 助動詞 + 主詞,即 Neither do I.'),
        single('en-l1-2-q8', "Ann is good at singing, and her brother is, ______.", ['too', 'either', 'neither', 'so'], 0, '肯定句句尾附和用 too。'),
        p.single('en-l1-2-q9', "According to Ms. Chen, why are club activities valuable?", ['They help students earn higher grades.', 'They help students develop teamwork and time-management skills.', 'They keep students away from homework.', 'They are required by the government.'], 1, '文中說這些活動 help students develop teamwork and time-management skills。'),
        p.single('en-l1-2-q10', "When do students usually eat lunch at Sunrise High?", ['Before the flag-raising ceremony', 'After four morning classes', 'After club activities', 'At 7:50 a.m.'], 1, '第二句提到 After four morning classes, students eat lunch in the cafeteria。'),
        p.single('en-l1-2-q11', "The word \"cooperate\" in the passage is closest in meaning to ______.", ['work together', 'compete', 'disagree', 'escape'], 0, 'cooperate 是「合作」,即 work together。'),
        multi('en-l1-2-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['She always is late.', 'He never eats breakfast.', 'They often go swimming.', 'I sometimes am tired.', 'We are usually busy on Mondays.'], [1, 2, 4], '頻率副詞放在 be 動詞後、一般動詞前:She is always late. / I am sometimes tired.,「She always is late.」、「I sometimes am tired.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l1-3-p1',
      'The Broken Promise',
      "Ben and Jack had been best friends since elementary school. One day, Ben promised to help Jack prepare for an important speech contest, but he forgot and went to a basketball game instead. Jack felt hurt and stopped talking to him for a week. Finally, Ben came to Jack's house with a card that said, \"I'm sorry for letting you down. Can you forgive me?\" Jack read it and smiled. \"Nobody is perfect,\" he said. \"Let's practice together right now.\" From that day on, the two boys understood that a real friendship is not about never making mistakes, but about being willing to say sorry and forgive."
    );
    return lesson({
      id: 'en-l1-3',
      title: '第3課 Friendship and Forgiveness(友誼與原諒)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:朋友之間的信任、誤會、道歉與原諒。',
          '學習目標:能用英文描述友情,並掌握介系詞後接動名詞、if 條件句(現在事實相反與未來可能)。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['forgive', 'v. 原諒', 'Please forgive me for being late.'],
          ['apologize (for)', 'v. 道歉', 'He apologized for his mistake.'],
          ['loyal', 'adj. 忠誠的', 'A loyal friend never betrays you.'],
          ['jealous', 'adj. 嫉妒的', 'She was jealous of her sister.'],
          ['trust', 'v./n. 信任', 'I trust him completely.'],
          ['misunderstanding', 'n. 誤會', 'It was just a misunderstanding.'],
          ['let sb down', 'phr. 使某人失望', 'I promise I won\'t let you down.'],
        ]),
        bullets('文法重點', [
          '介系詞後面接名詞或動名詞(V-ing):thank sb for helping、apologize for being late、look forward to seeing you、insist on going。注意 to 是介系詞時後面接 V-ing。',
          '直說法條件句(未來可能發生):If + 現在簡單式, 主詞 + will + 原形動詞。If it rains tomorrow, we will cancel the picnic.',
          '與現在事實相反的假設:If + 過去式(be 動詞一律用 were), 主詞 + would/could + 原形動詞。If I were you, I would talk to him.',
        ]),
      ],
      quiz: [
        single('en-l1-3-q1', "It takes courage to ______ when you have made a mistake.", ['apologize', 'pretend', 'invent', 'complain'], 0, 'apologize 是「道歉」,做錯事後道歉需要勇氣。'),
        single('en-l1-3-q2', "She is a ______ friend who would never tell your secrets to others.", ['loyal', 'careless', 'curious', 'selfish'], 0, 'loyal 是「忠誠的」,與「不會洩漏祕密」相符。'),
        single('en-l1-3-q3', "I felt ______ when my sister received a better gift than mine.", ['jealous', 'generous', 'grateful', 'ashamed'], 0, 'jealous 是「嫉妒的」,別人得到更好的禮物時容易感到嫉妒。'),
        single('en-l1-3-q4', "It was all a ______; I didn't mean to hurt you.", ['misunderstanding', 'celebration', 'decision', 'competition'], 0, 'misunderstanding 是「誤會」,「我不是故意傷害你」說明是誤會。'),
        single('en-l1-3-q5', "It is hard to ______ someone who has lied to you many times.", ['trust', 'satisfy', 'defend', 'measure'], 0, 'trust 是「信任」,被騙很多次就很難再信任。'),
        single('en-l1-3-q6', "Thank you for ______ me with my homework.", ['help', 'helping', 'to help', 'helped'], 1, 'thank sb for 之後接名詞或動名詞,故用 helping。'),
        single('en-l1-3-q7', "If I ______ you, I would talk to him right away.", ['am', 'was', 'were', 'will be'], 2, '與現在事實相反的假設,if 子句的 be 動詞一律用 were。'),
        single('en-l1-3-q8', "If it rains tomorrow, we ______ the picnic.", ['cancel', 'will cancel', 'would cancel', 'cancelled'], 1, '表示未來可能的情況,if 子句用現在式,主要子句用 will + 原形動詞。'),
        p.single('en-l1-3-q9', "Why did Jack stop talking to Ben?", ['Ben broke a promise to help him.', 'Ben won the contest.', 'Ben moved to another school.', 'Ben borrowed his money.'], 0, '文中說 Ben 答應幫忙卻忘記並去看球賽,Jack 因此感到受傷。'),
        p.single('en-l1-3-q10', "What can we learn from the story?", ['Friends should never make mistakes.', 'Real friends are willing to apologize and forgive.', 'Basketball is more important than friendship.', 'Speech contests are not important.'], 1, '最後一句指出真正的友誼是願意說對不起並原諒對方。'),
        p.single('en-l1-3-q11', "In the passage, \"letting you down\" is closest in meaning to ______.", ['disappointing you', 'helping you', 'following you', 'inviting you'], 0, 'let sb down 是「使某人失望」,即 disappoint。'),
        multi('en-l1-3-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['He apologized for being late.', 'She insisted on to go.', 'I look forward to seeing you.', 'They forgave him for lie.', 'Thank you for inviting me.'], [0, 2, 4], 'insist on 後接 V-ing;forgive sb for 後接名詞或 V-ing(for lying),故「She insisted on to go.」、「They forgave him for lie.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l1-4-p1',
      'Red Around the World',
      "In many Asian countries, red is a symbol of good luck and happiness. At Chinese New Year, people wear red clothes, hang red lanterns, and give children red envelopes filled with money. In Western countries, however, red is often associated with love and danger. On Valentine's Day, red roses show love, while red traffic lights and warning signs tell people to stop. White is another color with different meanings. In Taiwan and other parts of East Asia, it is traditionally connected with funerals, but in many Western weddings, brides wear white to represent purity. These differences remind us that the same color can carry very different messages in different cultures."
    );
    return lesson({
      id: 'en-l1-4',
      title: '第4課 Colors and Culture(顏色與文化)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:不同文化中顏色的象徵意義(紅色、白色等)。',
          '學習目標:能討論文化差異,並正確使用形容詞、副詞的比較級與最高級。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['symbol', 'n. 象徵', 'The dove is a symbol of peace.'],
          ['symbolize', 'v. 象徵', 'White symbolizes purity in many cultures.'],
          ['represent', 'v. 代表', 'Each star represents a state.'],
          ['ceremony', 'n. 典禮', 'The wedding ceremony was beautiful.'],
          ['associate A with B', 'phr. 把A與B聯想在一起', 'People associate green with nature.'],
          ['pure', 'adj. 純粹的', 'The ring is made of pure gold.'],
          ['tradition', 'n. 傳統', 'It is a family tradition.'],
        ]),
        bullets('文法重點', [
          '比較級:形容詞 + er / more + 形容詞 + than。This shirt is cheaper than that one.',
          '最高級:the + 形容詞 + est / the most + 形容詞,常搭配 in/of 表示範圍。Tom is the tallest boy in our class.',
          '同級比較:as + 原級 + as。Nothing is as important as health.(不可寫成 as taller as)',
          '「越……,就越……」:the + 比較級, the + 比較級。The more you practice, the better you will play.',
        ]),
      ],
      quiz: [
        single('en-l1-4-q1', "The dove is a ______ of peace.", ['symbol', 'shadow', 'soldier', 'surface'], 0, 'symbol of peace 是「和平的象徵」。'),
        single('en-l1-4-q2', "The wedding ______ will begin at two o'clock.", ['ceremony', 'ceiling', 'celebrity', 'century'], 0, 'wedding ceremony 是「婚禮儀式」。'),
        single('en-l1-4-q3', "In this story, the wolf ______ danger.", ['represents', 'requests', 'remembers', 'refuses'], 0, 'represent 是「代表」,狼在故事中代表危險。'),
        single('en-l1-4-q4', "Many people ______ the color green with nature and health.", ['associate', 'separate', 'operate', 'decorate'], 0, 'associate A with B 是「把A與B聯想在一起」。'),
        single('en-l1-4-q5', "Her dress was made of ______ silk, without any pattern or color.", ['pure', 'poor', 'rare', 'rude'], 0, 'pure silk 是「純絲」,沒有摻雜其他成分。'),
        single('en-l1-4-q6', "This shirt is ______ than that one.", ['cheap', 'cheaper', 'the cheapest', 'more cheap'], 1, '有 than 表示比較級,cheap 的比較級是 cheaper。'),
        single('en-l1-4-q7', "Of all the seasons, I like autumn ______.", ['the best', 'better', 'good', 'well'], 0, '在所有季節中最喜歡,用最高級 the best。'),
        single('en-l1-4-q8', "The ______ you practice, the ______ you will play.", ['more; better', 'most; best', 'many; good', 'much; well'], 0, '「越……越……」句型為 the + 比較級, the + 比較級,故用 more; better。'),
        p.single('en-l1-4-q9', "What is the main idea of the passage?", ['Red is the best color in the world.', 'The same color can have different meanings in different cultures.', 'Everyone should wear white at weddings.', 'Traffic lights are always red.'], 1, '全文以紅色、白色為例,說明顏色在不同文化中有不同意義。'),
        p.single('en-l1-4-q10', "According to the passage, which statement about white is true?", ['It is always connected with happiness.', 'In East Asia it is traditionally connected with funerals, but in many Western weddings it represents purity.', 'It is used on traffic lights.', 'It is the color of Chinese New Year.'], 1, '文中提到東亞傳統上白色與葬禮有關,但西方婚禮新娘穿白色代表純潔。'),
        p.single('en-l1-4-q11', "The phrase \"associated with\" in the passage is closest in meaning to ______.", ['connected with', 'separated from', 'different from', 'blamed for'], 0, 'be associated with 是「與……有關聯」,即 connected with。'),
        multi('en-l1-4-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['She is as taller as her mother.', 'He runs faster than I do.', 'This is the more interesting book I have ever read.', 'Nothing is as important as health.', 'Tom is the tallest boy in our class.'], [1, 3, 4], 'as 與 as 之間用原級(as tall as),「She is as taller as her mother.」錯誤;「我讀過最……的書」要用最高級 the most interesting,「This is the more interesting book I have ever read.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l1-5-p1',
      'Why We Need Sleep',
      "Many teenagers stay up late to study or play video games, but doctors say that teenagers need eight to ten hours of sleep every night. During sleep, the brain organizes what we have learned during the day, and the body repairs itself. Students who do not get enough sleep often find it hard to concentrate in class and are more likely to feel angry or sad. To sleep better, doctors suggest going to bed at the same time every night, avoiding caffeine in the evening, and keeping phones away from the bed. A good night's sleep is not a waste of time; it is an investment in your health."
    );
    return lesson({
      id: 'en-l1-5',
      title: '第5課 Sleep and Health(睡眠與健康)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:睡眠對學習與身體健康的重要,以及良好的生活習慣。',
          '學習目標:能用情態助動詞(should, had better, must, have to, might)給建議、表示必要與推測。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['exhausted', 'adj. 精疲力盡的', 'She was exhausted after the long trip.'],
          ['habit', 'n. 習慣', 'Reading before bed is a good habit.'],
          ['benefit', 'n./v. 益處;有益於', 'Exercise has many health benefits.'],
          ['avoid', 'v. 避免', 'You should avoid sugary drinks.'],
          ['essential', 'adj. 必要的', 'Water is essential to life.'],
          ['concentrate (on)', 'v. 專心', 'I can\'t concentrate on my work.'],
          ['caffeine', 'n. 咖啡因', 'Tea and coffee contain caffeine.'],
        ]),
        bullets('文法重點', [
          'should / ought to 表建議;had better + 原形(最好……,否則有不好的後果),沒有 had better to 的用法。',
          'must not 表禁止;don\'t have to / need not 表「不必」(沒有義務)。',
          'must be 表示肯定的推測(一定是),might / may 表示可能。He must be tired after such a long trip.',
          '情態助動詞後面一律接原形動詞,不加 to(should go,不是 should to go)。',
        ]),
      ],
      quiz: [
        single('en-l1-5-q1', "After running the marathon, she was completely ______ and went straight to bed.", ['exhausted', 'satisfied', 'curious', 'generous'], 0, 'exhausted 是「精疲力盡的」,跑完馬拉松後直接去睡最合理。'),
        single('en-l1-5-q2', "Eating breakfast every day is a good ______.", ['habit', 'harvest', 'honor', 'humor'], 0, 'habit 是「習慣」。'),
        single('en-l1-5-q3', "Regular exercise has many ______ for our health.", ['benefits', 'disasters', 'damages', 'threats'], 0, 'benefit 是「益處」,benefits for our health 指對健康的好處。'),
        single('en-l1-5-q4', "You had better ______ sugary drinks if you want to stay healthy.", ['avoid', 'absorb', 'admire', 'announce'], 0, 'avoid 是「避免」,想保持健康應避免含糖飲料。'),
        single('en-l1-5-q5', "It is ______ to drink enough water when the weather is hot.", ['essential', 'absent', 'ancient', 'anxious'], 0, 'essential 是「必要的」。'),
        single('en-l1-5-q6', "You look terrible. You ______ take a rest.", ['had better', 'would better', 'have better', 'are better'], 0, '表示「最好……」用 had better + 原形動詞。'),
        single('en-l1-5-q7', "Students ______ use their phones during the exam. It is against the rule.", ['must not', "don't have to", 'need to', 'ought to'], 0, '違反規定表示「禁止」,用 must not。don\'t have to 是「不必」。'),
        single('en-l1-5-q8', "You ______ come to the meeting if you are busy. It is not required.", ["don't have to", 'must not', "can't", 'ought not'], 0, '「不是必須的」用 don\'t have to(不必)。'),
        p.single('en-l1-5-q9', "According to the passage, what does the brain do during sleep?", ['It stops working completely.', 'It organizes what we have learned during the day.', 'It makes us feel angry.', 'It repairs the body.'], 1, '文中說 During sleep, the brain organizes what we have learned during the day。'),
        p.single('en-l1-5-q10', "Which of the following is NOT a suggestion for sleeping better?", ['Going to bed at the same time every night', 'Avoiding caffeine in the evening', 'Keeping phones away from the bed', 'Drinking coffee before bedtime'], 3, '文中建議晚上避免咖啡因,所以睡前喝咖啡不是建議。'),
        p.single('en-l1-5-q11', "The sentence \"it is an investment in your health\" means that sleep ______.", ['brings long-term benefits to our health', 'costs a lot of money', 'is a waste of time', 'is only for adults'], 0, '把睡眠比喻成對健康的投資,表示睡眠會帶來長期的好處。'),
        multi('en-l1-5-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['You should to go to bed early.', 'He must be tired after such a long trip.', "She doesn't have to wear a uniform on Fridays.", 'You had better to see a doctor.', 'They might be at home now.'], [1, 2, 4], '情態助動詞後面接原形動詞,不可加 to,「You should to go to bed early.」、「You had better to see a doctor.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l1-6-p1',
      "A Bag's Long Journey",
      "A plastic bag is usually used for only about twelve minutes, but it can stay in nature for hundreds of years. Every year, millions of tons of plastic are thrown into the ocean, where it is often mistaken for food by sea animals. Some turtles, for example, eat plastic bags because they look like jellyfish. As a result, many animals have been harmed or even killed. To solve the problem, some countries have banned free plastic bags, and many stores now encourage customers to bring their own bags. Small actions, such as refusing straws and carrying a water bottle, can make a big difference."
    );
    return lesson({
      id: 'en-l1-6',
      title: '第6課 Plastic and Our Planet(塑膠與地球)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:塑膠污染對海洋生物與環境的影響,以及減少使用塑膠的行動。',
          '學習目標:能用被動語態描述事件(現在、過去、現在完成),並談論環保行動。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['reduce', 'v. 減少', 'We should reduce plastic waste.'],
          ['recycle', 'v. 回收', 'Cans can be recycled.'],
          ['waste', 'n./v. 浪費;廢棄物', 'It is a waste of water.'],
          ['harm', 'v./n. 傷害', 'Plastic harms sea animals.'],
          ['dispose of', 'phr. 處理、丟棄', 'Dispose of batteries properly.'],
          ['ban', 'v./n. 禁止', 'The city banned plastic straws.'],
          ['make a difference', 'phr. 有影響、有差別', 'Small actions can make a difference.'],
        ]),
        bullets('文法重點', [
          '被動語態:be + 過去分詞(p.p.),強調動作的承受者。English is spoken in many countries.',
          '過去被動:was/were + p.p.:The window was broken by the boy yesterday.',
          '現在完成被動:has/have been + p.p.:The road has been closed since last week.',
          '進行被動:is/are being + p.p.:A new bridge is being built.',
          '不及物動詞(如 arrive、happen、die)沒有被動語態,不能寫 was arrived。',
        ]),
      ],
      quiz: [
        single('en-l1-6-q1', "We should try to ______ the amount of garbage we produce.", ['reduce', 'request', 'remove', 'reveal'], 0, 'reduce 是「減少」,減少垃圾量最合理。'),
        single('en-l1-6-q2', "Paper, glass, and cans can be ______ and made into new products.", ['recycled', 'recorded', 'rewarded', 'reported'], 0, 'recycle 是「回收」,回收後再製成新產品。'),
        single('en-l1-6-q3', "It is a ______ of water to leave the tap running while you brush your teeth.", ['waste', 'wave', 'wing', 'weed'], 0, 'a waste of water 是「浪費水」。'),
        single('en-l1-6-q4', "Smoking can ______ your health seriously.", ['harm', 'hire', 'hunt', 'heal'], 0, 'harm 是「傷害」,吸菸會嚴重傷害健康。'),
        single('en-l1-6-q5', "Please ______ of the used batteries properly.", ['dispose', 'depend', 'decide', 'divide'], 0, 'dispose of 是「處理、丟棄」。'),
        single('en-l1-6-q6', "English ______ in many countries around the world.", ['speaks', 'is spoken', 'spoke', 'is speaking'], 1, 'English 是被說的對象,用被動語態 is spoken。'),
        single('en-l1-6-q7', "The window ______ by the boy yesterday.", ['broke', 'was broken', 'has broken', 'is broken'], 1, 'yesterday 表示過去,且窗戶是被打破的,用過去被動 was broken。'),
        single('en-l1-6-q8', "The road ______ since last week because of the repairs.", ['is closed', 'was closed', 'has been closed', 'closed'], 2, 'since last week 表示從過去持續到現在,且道路是被封閉的,用現在完成被動 has been closed。'),
        p.single('en-l1-6-q9', "Why do some turtles eat plastic bags?", ['They are very hungry.', 'The bags look like jellyfish.', 'The bags smell good.', 'They want to clean the ocean.'], 1, '文中說 turtles eat plastic bags because they look like jellyfish。'),
        p.single('en-l1-6-q10', "What have some countries done to solve the plastic problem?", ['They have banned free plastic bags.', 'They have thrown plastic into the ocean.', 'They have stopped fishing.', 'They have built more factories.'], 0, '文中說 some countries have banned free plastic bags。'),
        p.single('en-l1-6-q11', "The phrase \"make a big difference\" in the passage means ______.", ['have a great effect', 'cause an argument', 'look very different', 'take a long time'], 0, 'make a big difference 是「產生很大的影響」。'),
        multi('en-l1-6-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['The cake was eaten by my brother.', 'A new bridge is building now.', 'The movie was directed by a famous director.', 'The homework has been finished.', 'The letter was arrived yesterday.'], [0, 2, 3], '「正在興建」要用 is being built,「A new bridge is building now.」錯誤;arrive 是不及物動詞,沒有被動語態,「The letter was arrived yesterday.」錯誤。'),
      ],
    });
  })(),
];
