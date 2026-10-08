// 英文課文單元:第五冊(高三上)。編排原則與第一冊相同,見 english-lessons-1.js。
import { single, multi, passageSet, lesson, bullets, table } from './lesson-helpers.js';

const CATEGORY = '第五冊(高三上)';

export const englishLessons5 = [
  (() => {
    const p = passageSet(
      'en-l5-1-p1',
      'Exam Season',
      "Every January, thousands of Taiwanese seniors experience intense stress as the GSAT approaches. Some students lose sleep, others lose their appetite, and a few feel so anxious that they cannot even open their textbooks. Psychologists explain that a small amount of pressure can improve performance, but too much pressure may lead to burnout. To cope with stress, experts recommend regular exercise, enough sleep, and talking to someone you trust. Students who feel overwhelmed should not hesitate to seek professional help. As one counselor put it, \"Asking for help is not a sign of weakness; it is a sign that you care about yourself.\""
    );
    return lesson({
      id: 'en-l5-1',
      title: '第1課 Stress and Mental Health(壓力與心理健康)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:考試壓力、焦慮與調適方法,以及尋求協助的重要。',
          '學習目標:使用「情態助動詞 + have + p.p.」對過去的事情表示推測、後悔與不必要。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['anxiety', 'n. 焦慮', 'She felt anxiety before the exam.'],
          ['cope (with)', 'v. 應付、處理', 'How do you cope with stress?'],
          ['pressure', 'n. 壓力', 'Pressure can affect sleep.'],
          ['relieve', 'v. 減輕、緩解', 'Music can relieve stress.'],
          ['overwhelmed', 'adj. 不堪負荷的', 'He felt overwhelmed by homework.'],
          ['burnout', 'n. 倦怠', 'Too much pressure can lead to burnout.'],
          ['hesitate', 'v. 猶豫', 'Do not hesitate to ask for help.'],
        ]),
        bullets('文法重點', [
          'should have + p.p.:早該做卻沒做(後悔/責備)。I failed the test. I should have studied harder.',
          'shouldn\'t have + p.p.:不該做卻做了。',
          'must have + p.p.:對過去的肯定推測。The ground is wet. It must have rained last night.',
          'may / might / could have + p.p.:對過去的可能推測。',
          'needn\'t have + p.p.:本來不必做卻做了。You needn\'t have brought an umbrella. It didn\'t rain at all.',
          'can\'t have + p.p.:對過去的否定推測(不可能已經……)。',
        ]),
      ],
      quiz: [
        single('en-l5-1-q1', "She felt a lot of ______ before the job interview.", ['anxiety', 'ambition', 'audience', 'appetite'], 0, 'anxiety 是「焦慮」。'),
        single('en-l5-1-q2', "Some people ______ with stress by listening to music.", ['cope', 'cook', 'coach', 'concern'], 0, 'cope with 是「應付、處理」。'),
        single('en-l5-1-q3', "The high ______ from his boss made him lose sleep.", ['pressure', 'pleasure', 'pattern', 'purpose'], 0, 'pressure 是「壓力」。'),
        single('en-l5-1-q4', "A warm bath can ______ muscle pain after exercise.", ['relieve', 'remind', 'reveal', 'rescue'], 0, 'relieve 是「緩解」。'),
        single('en-l5-1-q5', "He felt ______ by the amount of homework and wanted to give up.", ['overwhelmed', 'overlooked', 'overseas', 'overnight'], 0, 'overwhelmed 是「不堪負荷的」。'),
        single('en-l5-1-q6', "I failed the test. I ______ harder.", ['should have studied', 'should study', 'must have studied', 'would study'], 0, '表示對過去未做的事感到後悔,用 should have + p.p.。'),
        single('en-l5-1-q7', "The ground is wet. It ______ last night.", ['must have rained', 'should have rained', 'can have rained', "needn't have rained"], 0, '根據現在地面濕的證據,對過去做肯定推測,用 must have + p.p.。'),
        single('en-l5-1-q8', "You ______ bring an umbrella. It didn't rain at all.", ["needn't have brought", "mustn't have brought", "shouldn't bring", "can't bring"], 0, '本來不必帶傘卻帶了,用 needn\'t have + p.p.。'),
        p.single('en-l5-1-q9', "According to psychologists, what can a small amount of pressure do?", ['Improve performance', 'Cause burnout immediately', 'Lower appetite', 'Prevent sleep'], 0, '文中說 a small amount of pressure can improve performance。'),
        p.single('en-l5-1-q10', "Which of the following is recommended to cope with stress?", ['Regular exercise, enough sleep, and talking to someone you trust', 'Staying up all night', 'Avoiding all social contact', 'Skipping meals'], 0, '文中建議規律運動、足夠睡眠,並與信任的人談談。'),
        p.single('en-l5-1-q11', "What does the counselor mean by \"Asking for help is not a sign of weakness\"?", ['Seeking help shows that you care about yourself.', 'Weak people ask for help.', 'Only teachers can help.', 'Nobody needs help.'], 0, '求助並不是軟弱,而是關心自己的表現。'),
        multi('en-l5-1-q12', "Which of the following sentences are correct? (多選)", ['She must have been tired after the long trip.', "He should have called me yesterday, but he didn't.", 'They might have missed the bus.', 'He must has finished the work.', 'You must have go there yesterday.'], [0, 1, 2], '情態助動詞後面接 have + 過去分詞:「He must has finished the work.」應為 must have finished,「You must have go there yesterday.」應為 must have gone。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l5-2-p1',
      'Learning from a Pandemic',
      "A number of countries have learned valuable lessons from the recent pandemic. The number of people who wash their hands regularly has risen sharply, and many schools now teach children how diseases spread. Each of the vaccines developed within a year was tested on thousands of volunteers before being approved. However, the majority of people in low-income countries had to wait much longer for their shots, which showed how unequal global health care can be. Neither rich nor poor nations can fight a virus alone, since diseases do not stop at borders. Experts therefore call for more cooperation and fairer sharing of medicine."
    );
    return lesson({
      id: 'en-l5-2',
      title: '第2課 Health Around the World(全球健康)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:傳染病、疫苗與全球公共衛生的不平等。',
          '學習目標:掌握主詞與動詞一致性:a number of / the number of、each / every、either / neither、the majority of、none of。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['vaccine', 'n. 疫苗', 'The vaccine protects people.'],
          ['symptom', 'n. 症狀', 'A cough is a common symptom.'],
          ['contagious', 'adj. 具傳染性的', 'The flu is contagious.'],
          ['prevent', 'v. 預防', 'Masks help prevent disease.'],
          ['immune', 'adj. 免疫的', 'She is immune to the virus.'],
          ['pandemic', 'n. 全球大流行', 'The pandemic changed our lives.'],
          ['approve', 'v. 核准', 'The vaccine was approved.'],
        ]),
        bullets('文法重點', [
          'a number of + 複數名詞 + 複數動詞(許多):A number of students are absent.;the number of + 複數名詞 + 單數動詞(……的數量):The number of people has increased.',
          'each / every / everyone / everybody + 單數動詞:Each student has a locker.',
          'either A or B / neither A nor B:動詞與離動詞近的主詞一致。Neither of + 複數名詞 + 單數動詞(正式用法):Neither of the answers is correct.',
          'the majority of / most of / a lot of + 名詞:動詞由名詞決定。The majority of the students were satisfied. / None of the water is clean.',
        ]),
      ],
      quiz: [
        single('en-l5-2-q1', "The ______ protects people from a serious disease.", ['vaccine', 'vacancy', 'vapor', 'vessel'], 0, 'vaccine 是「疫苗」。'),
        single('en-l5-2-q2', "A fever and a cough are common ______ of the flu.", ['symptoms', 'symbols', 'sympathies', 'systems'], 0, 'symptom 是「症狀」。'),
        single('en-l5-2-q3', "The flu is highly ______; it can spread through a single cough.", ['contagious', 'courageous', 'curious', 'cautious'], 0, 'contagious 是「有傳染性的」。'),
        single('en-l5-2-q4', "Wearing masks helps to ______ the spread of disease.", ['prevent', 'present', 'pretend', 'promote'], 0, 'prevent 是「預防」。'),
        single('en-l5-2-q5', "After being sick once, she became ______ to that virus.", ['immune', 'immense', 'immediate', 'immoral'], 0, 'immune 是「免疫的」。'),
        single('en-l5-2-q6', "A number of students ______ absent today.", ['is', 'are', 'was', 'has been'], 1, 'a number of + 複數名詞表「許多」,動詞用複數。'),
        single('en-l5-2-q7', "The number of people who use bikes ______ increased.", ['have', 'has', 'are', 'were'], 1, 'the number of 表「……的數量」,動詞用單數。'),
        single('en-l5-2-q8', "Neither of the answers ______ correct.", ['is', 'are', 'were', 'have been'], 0, 'neither of + 複數名詞,正式用法動詞用單數 is。'),
        p.single('en-l5-2-q9', "What has risen sharply according to the passage?", ['The number of people who wash their hands regularly', 'The price of vaccines', 'The number of schools', 'The number of volunteers'], 0, '文中說 The number of people who wash their hands regularly has risen sharply。'),
        p.single('en-l5-2-q10', "What did the long wait for shots in low-income countries show?", ['How unequal global health care can be', 'That vaccines are unsafe', 'That volunteers are rare', 'That schools were closed'], 0, '文中說 which showed how unequal global health care can be。'),
        p.single('en-l5-2-q11', "Why do experts call for more cooperation?", ['Diseases do not stop at borders.', 'Vaccines are cheap.', 'Rich countries do not need help.', 'Poor countries have no doctors.'], 0, '文中說 Neither rich nor poor nations can fight a virus alone, since diseases do not stop at borders。'),
        multi('en-l5-2-q12', "Which of the following sentences are correct? (多選)", ['Each student has a locker.', 'Every one of the boys are tall.', 'The majority of the students were satisfied.', 'None of the water is clean.', 'Either he or I am wrong.'], [0, 2, 3, 4], 'every one of 之後動詞用單數,「Every one of the boys are tall.」應為 is tall。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l5-3-p1',
      'From Dorm Room to Global Brand',
      "Having failed three times, Lena still believed in her idea: a mobile app that helps farmers sell fruit directly to customers. With only a small loan from her family, she started her company in a dorm room, working late every night while her classmates slept. Being a first-time entrepreneur, she made many mistakes, but each mistake taught her something new. Within two years, her app had reached more than 50,000 users, making her the youngest startup founder in her city. Asked about the secret of her success, Lena smiled. \"It isn't talent,\" she said. \"It's the courage to try again after failing.\""
    );
    return lesson({
      id: 'en-l5-3',
      title: '第3課 Start-ups and Innovation(創業與創新)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:年輕創業者、創新與面對失敗。',
          '學習目標:使用分詞構句(V-ing / p.p. / Having p.p.)簡化副詞子句,並避免主詞不一致的懸垂分詞。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['entrepreneur', 'n. 企業家、創業者', 'She is a young entrepreneur.'],
          ['innovation', 'n. 創新', 'Innovation drives growth.'],
          ['profit', 'n. 利潤', 'The firm made a large profit.'],
          ['competitor', 'n. 競爭者', 'Our competitor cut prices.'],
          ['strategy', 'n. 策略', 'We need a new strategy.'],
          ['startup', 'n. 新創公司', 'He founded a startup.'],
          ['loan', 'n. 貸款', 'She took out a small loan.'],
        ]),
        bullets('文法重點', [
          '分詞構句:把副詞子句簡化,主詞必須與主要子句的主詞相同。When she opened the door, she found a stranger. → Opening the door, she found a stranger.',
          '被動關係用過去分詞:Shocked by the news, he could not say a word. / Seen from space, the Earth looks blue.',
          '先發生的動作用完成式:Having finished his homework, he went out to play. / Having failed three times, Lena still believed in her idea.',
          '分詞構句的主詞若與主要子句主詞不同,就是錯誤(懸垂分詞):Walking along the beach, a shell was found by me. ✗ → Walking along the beach, I found a shell. ✓',
        ]),
      ],
      quiz: [
        single('en-l5-3-q1', "Steve Jobs was a famous ______ who created Apple.", ['entrepreneur', 'enthusiast', 'envelope', 'entrance'], 0, 'entrepreneur 是「企業家、創業者」。'),
        single('en-l5-3-q2', "Smartphones are a great ______ that changed the way we communicate.", ['innovation', 'information', 'invitation', 'imagination'], 0, 'innovation 是「創新」。'),
        single('en-l5-3-q3', "The company made a ______ of ten million dollars last year.", ['profit', 'proof', 'prayer', 'promise'], 0, 'profit 是「利潤」。'),
        single('en-l5-3-q4', "Our biggest ______ has just lowered its prices.", ['competitor', 'contributor', 'collector', 'conductor'], 0, 'competitor 是「競爭者」。'),
        single('en-l5-3-q5', "The manager developed a new ______ to attract more customers.", ['strategy', 'strength', 'stream', 'structure'], 0, 'strategy 是「策略」。'),
        single('en-l5-3-q6', "______ the door, she found a stranger standing there.", ['Opening', 'Opened', 'To open', 'Open'], 0, '主詞 she 與 open 是主動關係,分詞構句用 Opening。'),
        single('en-l5-3-q7', "______ by the news, he couldn't say a word.", ['Shocking', 'Shocked', 'Shock', 'Having shock'], 1, '他是「感到震驚」的人,被動關係,用過去分詞 Shocked。'),
        single('en-l5-3-q8', "______ his homework, he went out to play.", ['Finished', 'Having finished', 'Finishing', 'To finish'], 1, '寫完功課(先發生)後才出去玩,用完成式分詞構句 Having finished。'),
        p.single('en-l5-3-q9', "What does Lena's app do?", ['It helps farmers sell fruit directly to customers.', 'It teaches students to code.', 'It delivers meals.', 'It translates languages.'], 0, '文中說 a mobile app that helps farmers sell fruit directly to customers。'),
        p.single('en-l5-3-q10', "How did Lena start her company?", ['With a small loan from her family, in a dorm room', 'With money from a big company', 'With a prize', 'With her own savings from a job'], 0, '文中說 With only a small loan from her family, she started her company in a dorm room。'),
        p.single('en-l5-3-q11', "What does Lena say is the secret of her success?", ['Talent', 'Luck', 'The courage to try again after failing', 'A rich family'], 2, '她說 It isn\'t talent. It\'s the courage to try again after failing。'),
        multi('en-l5-3-q12', "Which of the following sentences are correct? (多選)", ['Walking along the beach, I found a shell.', 'Walking along the beach, a shell was found by me.', 'Seen from space, the Earth looks blue.', "Having lost his key, he couldn't enter the house.", 'Being a student, the library is open to me.'], [0, 2, 3], '分詞構句的主詞必須與主要子句主詞一致,「Walking along the beach, a shell was found by me.」、「Being a student, the library is open to me.」的主詞不一致,屬懸垂分詞,錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l5-4-p1',
      "Whose English Is It?",
      "Today, more people speak English as a second language than as a native one. In India, Singapore, and Nigeria, English is used in schools, courts, and business, but each country has developed its own accent and vocabulary. Some people worry that these differences will make English harder to understand, while others believe that they add color to the language. Linguists point out that English has always been changing: it has taken in words from Latin, French, and many other languages. As a result, learners should not be too afraid of making mistakes. What matters most is the ability to get along with people from different backgrounds and to make yourself understood."
    );
    return lesson({
      id: 'en-l5-4',
      title: '第4課 English as a Global Language(全球通行的英語)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:英語的全球化、各地口音與語言的演變。',
          '學習目標:熟悉常見的片語動詞(phrasal verbs)與固定搭配,尤其是動詞 + 介系詞/副詞的用法。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['fluent', 'adj. 流利的', 'She speaks fluent English.'],
          ['accent', 'n. 口音', 'He has a British accent.'],
          ['bilingual', 'adj. 雙語的', 'Their children are bilingual.'],
          ['translate', 'v. 翻譯', 'Please translate this letter.'],
          ['native', 'adj. 母語的;本地的', 'English is his native language.'],
          ['vocabulary', 'n. 字彙', 'Reading builds vocabulary.'],
          ['linguist', 'n. 語言學家', 'Linguists study language.'],
        ]),
        table('常考片語', ['片語', '意思', '例句'], [
          ['run out of', '用完', 'We have run out of milk.'],
          ['put up with', '忍受', 'She has to put up with the noise.'],
          ['get along with', '與……相處', 'How do you get along with your roommate?'],
          ['come up with', '想出', 'She came up with a brilliant idea.'],
          ['take part in', '參加', 'They took part in the contest.'],
          ['give up + V-ing', '放棄', 'He gave up smoking.'],
          ['look forward to + V-ing', '期待', 'I am looking forward to seeing you.'],
        ]),
        bullets('文法重點', [
          'look forward to、be used to、object to 的 to 是介系詞,後面接名詞或 V-ing。',
          'give up、enjoy、avoid、finish 後面接 V-ing。',
          'run out of 是「用完」,run out 是「(東西)用完了」不接受詞:We ran out of money. / Our money ran out.',
        ]),
      ],
      quiz: [
        single('en-l5-4-q1', "After living in Canada for ten years, she speaks ______ English.", ['fluent', 'flexible', 'fragile', 'frequent'], 0, 'fluent 是「流利的」。'),
        single('en-l5-4-q2', "He has a strong Southern ______ when he speaks.", ['accent', 'access', 'accident', 'account'], 0, 'accent 是「口音」。'),
        single('en-l5-4-q3', "Their children are ______ and can speak both Chinese and English.", ['bilingual', 'bilateral', 'biological', 'beneficial'], 0, 'bilingual 是「雙語的」。'),
        single('en-l5-4-q4', "Can you ______ this letter from Japanese into English?", ['translate', 'transfer', 'transform', 'transport'], 0, 'translate 是「翻譯」。'),
        single('en-l5-4-q5', "Mandarin is her ______ language, but she also speaks English well.", ['native', 'naive', 'nervous', 'narrow'], 0, 'native language 是「母語」。'),
        single('en-l5-4-q6', "We have ______ milk; please buy some.", ['run out of', 'run into', 'run after', 'run away from'], 0, 'run out of 是「用完」。'),
        single('en-l5-4-q7', "She has to ______ the noise from her neighbors.", ['put up with', 'give up', 'look after', 'take off'], 0, 'put up with 是「忍受」。'),
        single('en-l5-4-q8', "How do you ______ with your new roommate?", ['get along', 'get over', 'get off', 'get away'], 0, 'get along with 是「與……相處」。'),
        p.single('en-l5-4-q9', "Which statement is true according to the passage?", ['More people speak English as a second language than as a native language.', 'English is only spoken in Britain.', 'India does not use English.', 'English never changes.'], 0, '第一句說 more people speak English as a second language than as a native one。'),
        p.single('en-l5-4-q10', "What do linguists point out about English?", ['It has always been changing and has taken in words from other languages.', 'It should never borrow words.', 'It is difficult to learn.', 'It will disappear soon.'], 0, '文中說 English has always been changing: it has taken in words from Latin, French, and many other languages。'),
        p.single('en-l5-4-q11', "According to the passage, what matters most for learners?", ['Speaking with a perfect accent', 'Being able to get along with different people and make yourself understood', 'Never making mistakes', 'Memorizing every word'], 1, '最後一句說最重要的是與不同背景的人相處並讓人聽懂。'),
        multi('en-l5-4-q12', "Which of the following sentences are correct? (多選)", ['She came up with a brilliant idea.', "I'm looking forward to see you.", 'They took part in the contest.', 'He gave up smoking last year.', 'I ran out my money.'], [0, 2, 3], 'look forward to 的 to 是介系詞,應接 seeing;run out of 不能省略 of,「I\'m looking forward to see you.」、「I ran out my money.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l5-5-p1',
      'The Right to Speak',
      "In 1948, the United Nations adopted the Universal Declaration of Human Rights, which states that everyone has the right to freedom of speech, education, and a fair trial. Yet even today, many people are punished for expressing their opinions. Human rights groups demand that governments protect journalists and release those who have been imprisoned for peaceful protest. They insist that every citizen be treated equally under the law. Some critics argue that it is unrealistic to expect all countries to follow the same standards, but supporters reply that basic human dignity should not depend on where you are born."
    );
    return lesson({
      id: 'en-l5-5',
      title: '第5課 Human Rights and Justice(人權與正義)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:世界人權宣言、言論自由與公平審判。',
          '學習目標:使用假設語氣的 that 子句:表示要求、建議、命令、必要等動詞或形容詞後,that 子句用「(should) + 原形動詞」。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['justice', 'n. 正義', 'They demand justice.'],
          ['protest', 'v./n. 抗議', 'People protested against the law.'],
          ['democracy', 'n. 民主', 'Democracy protects freedom.'],
          ['violate', 'v. 違反、侵犯', 'The law violates human rights.'],
          ['citizen', 'n. 公民', 'Every citizen has the right to vote.'],
          ['dignity', 'n. 尊嚴', 'Everyone deserves dignity.'],
          ['imprison', 'v. 監禁', 'He was imprisoned unfairly.'],
        ]),
        bullets('文法重點', [
          '動詞 demand / require / insist / suggest / recommend / propose / order / request + that + S + (should) + 原形動詞:The teacher demanded that the students keep quiet. / The doctor suggested that she get more rest.',
          '形容詞 important / necessary / essential / vital / crucial + that + S + (should) + 原形動詞:It is necessary that he attend the meeting.',
          '這類 that 子句的動詞不受主詞人稱與時態影響(即使主詞是第三人稱單數,也不加 s)。',
          '注意:insist 表「堅持認為某事是事實」時,that 子句用一般時態(She insisted that he was innocent)。',
        ]),
      ],
      quiz: [
        single('en-l5-5-q1', "The judge promised to bring ______ to the victims.", ['justice', 'journey', 'judgment', 'jealousy'], 0, 'bring justice to 是「還給……公道」。'),
        single('en-l5-5-q2', "Thousands of people took to the streets to ______ against the new law.", ['protest', 'protect', 'promote', 'provide'], 0, 'protest against 是「抗議」。'),
        single('en-l5-5-q3', "In a ______, citizens choose their leaders by voting.", ['democracy', 'dictionary', 'definition', 'decoration'], 0, 'democracy 是「民主」。'),
        single('en-l5-5-q4', "Spying on private messages ______ people's right to privacy.", ['violates', 'vanishes', 'values', 'varies'], 0, 'violate 是「侵犯」。'),
        single('en-l5-5-q5', "Every ______ has the right to vote at the age of eighteen.", ['citizen', 'cousin', 'critic', 'customer'], 0, 'citizen 是「公民」。'),
        single('en-l5-5-q6', "The teacher demanded that the students ______ quiet.", ['keep', 'kept', 'keeps', 'are keeping'], 0, 'demand 後的 that 子句用原形動詞。'),
        single('en-l5-5-q7', "It is necessary that he ______ the meeting.", ['attends', 'attend', 'attended', 'attending'], 1, 'necessary 之後的 that 子句用原形動詞(或 should + 原形)。'),
        single('en-l5-5-q8', "The doctor suggested that she ______ more rest.", ['gets', 'get', 'got', 'getting'], 1, 'suggest 表示「建議」時,that 子句用原形動詞。'),
        p.single('en-l5-5-q9', "What did the United Nations adopt in 1948?", ['The Universal Declaration of Human Rights', 'A trade agreement', 'A new currency', 'An education law'], 0, '第一句說 In 1948, the United Nations adopted the Universal Declaration of Human Rights。'),
        p.single('en-l5-5-q10', "What do human rights groups demand?", ['That governments protect journalists and release those imprisoned for peaceful protest', 'That all countries have the same language', 'That journalists stop writing', 'That citizens leave the country'], 0, '文中說他們要求政府保護記者並釋放因和平抗議被關的人。'),
        p.single('en-l5-5-q11', "How do supporters reply to critics?", ['Basic human dignity should not depend on where you are born.', 'Every country has different needs.', 'Human rights are unrealistic.', 'Only rich countries can follow standards.'], 0, '最後一句說支持者回答:基本人性尊嚴不該因出生地而不同。'),
        multi('en-l5-5-q12', "Which of the following sentences are correct? (多選)", ['The rule requires that everyone wear a helmet.', 'The rule requires that everyone wears a helmet.', 'It is important that she be on time.', 'He demanded that she apologize.', 'I recommend that he takes a break.'], [0, 2, 3], 'require、recommend 等之後的 that 子句用原形動詞,「The rule requires that everyone wears a helmet.」、「I recommend that he takes a break.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l5-6-p1',
      'Reefs in Danger',
      "No sooner had the sun set than hundreds of tiny fish appeared around the coral reef. Coral reefs cover less than one percent of the ocean floor, yet they are home to about a quarter of all marine species. Hardly had scientists begun to study them when they noticed a worrying change: as ocean temperatures rise, corals turn white and eventually die. This process, known as bleaching, has already destroyed nearly half of the world's reefs. Fortunately, some countries have created protected areas where fishing is not allowed. The more we learn about reefs, the better we can protect them."
    );
    return lesson({
      id: 'en-l5-6',
      title: '第6課 The Deep Blue Sea(深藍的海洋)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:海洋生態、珊瑚礁白化與海洋保育。',
          '學習目標:使用表示「一……就……」的句型:No sooner...than、Hardly/Scarcely...when、as soon as、the moment。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['coral', 'n. 珊瑚', 'Coral reefs are colorful.'],
          ['marine', 'adj. 海洋的', 'Sharks are marine animals.'],
          ['fragile', 'adj. 脆弱的', 'Coral is very fragile.'],
          ['current', 'n. 水流、氣流', 'The current carried the boat away.'],
          ['tide', 'n. 潮汐', 'The tide is low now.'],
          ['bleaching', 'n. 白化、漂白', 'Coral bleaching is spreading.'],
          ['biodiversity', 'n. 生物多樣性', 'Reefs support biodiversity.'],
        ]),
        bullets('文法重點', [
          'No sooner + had + 主詞 + p.p. + than + 過去式:No sooner had he arrived than it started to snow.(句首否定副詞,助動詞與主詞倒裝)',
          'Hardly / Scarcely + had + 主詞 + p.p. + when / before + 過去式:Hardly had I sat down when the bell rang.(hardly 之後接 when,不接 than)',
          'as soon as / the moment / the instant + 子句:The moment she saw me, she smiled. As soon as he entered the room, everyone stood up.',
          '「越……越……」:The more we learn about reefs, the better we can protect them.',
        ]),
      ],
      quiz: [
        single('en-l5-6-q1', "Colorful ______ reefs grow in warm, shallow water.", ['coral', 'corner', 'coast', 'council'], 0, 'coral reef 是「珊瑚礁」。'),
        single('en-l5-6-q2', "Whales, dolphins, and sharks are ______ animals.", ['marine', 'military', 'mental', 'mutual'], 0, 'marine animals 是「海洋動物」。'),
        single('en-l5-6-q3', "Glass is very ______ and should be handled with care.", ['fragile', 'fertile', 'fluent', 'flexible'], 0, 'fragile 是「易碎的、脆弱的」。'),
        single('en-l5-6-q4', "The strong ocean ______ carried the boat far from the shore.", ['current', 'crisis', 'cluster', 'circuit'], 0, 'current 是「水流」。'),
        single('en-l5-6-q5', "At low ______, you can walk across the sand to the little island.", ['tide', 'tone', 'tribe', 'tour'], 0, 'low tide 是「退潮」。'),
        single('en-l5-6-q6', "No sooner ______ home than it began to rain.", ['had I got', 'I got', 'did I get', 'have I got'], 0, 'No sooner 置於句首,後面用 had + 主詞 + p.p.,再接 than + 過去式。'),
        single('en-l5-6-q7', "Hardly had she closed her eyes ______ the phone rang.", ['when', 'than', 'while', 'until'], 0, 'Hardly...when 是「一……就……」,不接 than。'),
        single('en-l5-6-q8', "As soon as he ______ the room, everyone stood up.", ['entered', 'enters', 'will enter', 'has entered'], 0, '主要子句是過去式 stood up,as soon as 子句也用過去式 entered。'),
        p.single('en-l5-6-q9', "What percentage of the ocean floor do coral reefs cover?", ['Less than one percent', 'About ten percent', 'About a quarter', 'Nearly half'], 0, '文中說 Coral reefs cover less than one percent of the ocean floor。'),
        p.single('en-l5-6-q10', "What is \"bleaching\" according to the passage?", ['Corals turn white and eventually die as ocean temperatures rise.', 'Fish turn white.', 'The ocean turns blue.', 'Reefs grow larger.'], 0, '文中說隨著海水溫度上升,珊瑚會變白並最終死亡,這個過程稱為 bleaching。'),
        p.single('en-l5-6-q11', "What have some countries done to protect reefs?", ['Created protected areas where fishing is not allowed', 'Built more ships', 'Stopped studying reefs', 'Moved the reefs'], 0, '最後幾句說有些國家設立禁止捕魚的保護區。'),
        multi('en-l5-6-q12', "Which of the following sentences are correct? (多選)", ['No sooner had he arrived than it started to snow.', 'No sooner he had arrived than it started to snow.', 'Hardly had I sat down when the bell rang.', 'The moment she saw me, she smiled.', 'Hardly had they left than the storm came.'], [0, 2, 3], 'No sooner 之後必須倒裝(had he arrived);hardly 之後接 when 不接 than,「No sooner he had arrived than it started to snow.」、「Hardly had they left than the storm came.」錯誤。'),
      ],
    });
  })(),
];
