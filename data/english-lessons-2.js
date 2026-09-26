// 英文課文單元:第二冊(高一下)。編排原則與第一冊相同,見 english-lessons-1.js。
import { single, multi, passageSet, lesson, bullets, table } from './lesson-helpers.js';

const CATEGORY = '第二冊(高一下)';

export const englishLessons2 = [
  (() => {
    const p = passageSet(
      'en-l2-1-p1',
      'Why Does Bread Rise?',
      "Baking bread may look simple, but it is really a science experiment. The dough contains yeast, a tiny living thing that eats sugar and produces gas. The gas forms small bubbles that make the dough grow larger, which is why bread rises. When the dough is put into a hot oven, the bubbles expand for a short time, and then the heat makes the bread hard and gives it a golden color. A baker who understands this process can control the temperature and time to make a softer or crunchier loaf."
    );
    return lesson({
      id: 'en-l2-1',
      title: '第1課 Everyday Science(生活中的科學)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:廚房與日常生活中的科學現象(麵包為什麼會膨脹、糖為什麼會溶解)。',
          '學習目標:能描述簡單的科學過程,並使用關係代名詞 who / which / that / whose 連接子句。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['ingredient', 'n. 材料、成分', 'Flour is the main ingredient of bread.'],
          ['dissolve', 'v. 溶解', 'Salt dissolves in water.'],
          ['temperature', 'n. 溫度', 'The temperature dropped at night.'],
          ['experiment', 'n./v. 實驗', 'They did an experiment in the lab.'],
          ['observe', 'v. 觀察', 'We observed the plant for a week.'],
          ['expand', 'v. 膨脹、擴大', 'Metal expands when heated.'],
          ['process', 'n. 過程', 'Learning is a slow process.'],
        ]),
        bullets('文法重點', [
          '關係代名詞用來連接兩個句子並修飾前面的名詞:先行詞是人用 who / that;是物用 which / that;所有格用 whose;先行詞是地方可用 where。',
          '關係代名詞在子句中已經扮演主詞或受詞,不能再重複代名詞:The pen that I lost was expensive.(不可寫 that I lost it)。',
          '例:The man who lives next door is a scientist. / She has a friend whose father is a chemist. / This is the house where I was born.',
        ]),
      ],
      quiz: [
        single('en-l2-1-q1', "Sugar will ______ quickly in hot water.", ['dissolve', 'decrease', 'deserve', 'defend'], 0, 'dissolve 是「溶解」,糖在熱水中很快溶解。'),
        single('en-l2-1-q2', "Flour, eggs, and sugar are the main ______ of this cake.", ['ingredients', 'instruments', 'industries', 'insects'], 0, 'ingredient 是「材料、成分」。'),
        single('en-l2-1-q3', "Water freezes when the ______ drops below zero degrees Celsius.", ['temperature', 'tradition', 'traffic', 'treasure'], 0, 'temperature 是「溫度」。'),
        single('en-l2-1-q4', "The students carried out an ______ to see how plants grow without sunlight.", ['experiment', 'expression', 'excuse', 'exhibit'], 0, 'carry out an experiment 是「進行實驗」。'),
        single('en-l2-1-q5', "Scientists ______ the behavior of animals carefully before drawing conclusions.", ['observe', 'oppose', 'organize', 'obtain'], 0, 'observe 是「觀察」,科學家先觀察再下結論。'),
        single('en-l2-1-q6', "The man ______ lives next door is a scientist.", ['who', 'which', 'whose', 'whom'], 0, '先行詞 the man 是人,且在子句中作主詞,用 who。'),
        single('en-l2-1-q7', "The book ______ I bought yesterday is about space.", ['who', 'that', 'whose', 'where'], 1, '先行詞 the book 是物,在子句中作受詞,可用 that(或 which)。'),
        single('en-l2-1-q8', "She has a friend ______ father is a chemist.", ['who', 'which', 'whose', 'that'], 2, '「她朋友的爸爸」表示所有關係,用所有格 whose。'),
        p.single('en-l2-1-q9', "What makes bread dough rise?", ['The heat of the oven only', 'Gas produced by yeast', 'Adding more flour', 'Cooling the dough'], 1, '文中說 yeast eats sugar and produces gas,氣體形成氣泡使麵團變大。'),
        p.single('en-l2-1-q10', "What happens when the dough is put into a hot oven?", ['The bubbles disappear immediately.', 'The bubbles expand briefly, and then the heat hardens the bread and gives it color.', 'The dough turns into sugar.', 'The yeast starts to grow again.'], 1, '文中說氣泡先短暫膨脹,然後熱使麵包變硬並呈金黃色。'),
        p.single('en-l2-1-q11', "The word \"expand\" in the passage is closest in meaning to ______.", ['become bigger', 'break', 'become colder', 'disappear'], 0, 'expand 是「膨脹、擴大」,即 become bigger。'),
        multi('en-l2-1-q12', "Which of the following sentences are correct? (多選)", ['The girl who won the prize is my cousin.', 'This is the house where I was born.', 'The pen which I lost it was expensive.', 'I know a man whose son is a famous scientist.', 'The movie that we watched last night was boring.'], [0, 1, 3, 4], 'C 句中 which 已是 lost 的受詞,不能再加 it。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l2-2-p1',
      'Bad Luck Numbers',
      "In many Western countries, the number 13 is thought to bring bad luck, and some buildings even skip the thirteenth floor. In Taiwan and other parts of East Asia, the number 4 is often avoided because it sounds like the word for \"death.\" Some people believe that breaking a mirror will bring seven years of bad luck, while others think that carrying a lucky charm will protect them from danger. Scientists say that such superstitions have no real power, but they can still affect how people behave. Whether we believe in them or not, they are an interesting part of every culture's history."
    );
    return lesson({
      id: 'en-l2-2',
      title: '第2課 Customs and Superstitions(習俗與迷信)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:世界各地的習俗與迷信(數字 13、數字 4、幸運物),以及它們如何影響人的行為。',
          '學習目標:能用 whether / if、what 引導的名詞子句與間接問句表達想法。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['superstition', 'n. 迷信', 'It is a superstition that black cats bring bad luck.'],
          ['custom', 'n. 習俗', 'Bowing is a common custom in Japan.'],
          ['fortune', 'n. 財富、運氣', 'She hoped to read her fortune.'],
          ['ancestor', 'n. 祖先', 'We honor our ancestors during the festival.'],
          ['harmless', 'adj. 無害的', 'The snake is harmless.'],
          ['belief', 'n. 信念', 'It is a popular belief in the village.'],
          ['skip', 'v. 略過、跳過', 'Some hotels skip the thirteenth floor.'],
        ]),
        bullets('文法重點', [
          '名詞子句可作主詞、受詞或補語:that 子句(I know that he is honest)、whether / if 子句(I wonder if/whether she will come)、what 子句(What he said was true)。',
          '間接問句:疑問詞 + 主詞 + 動詞,語序與直述句相同,不可倒裝:Could you tell me where the station is?(不是 where is the station)。',
          'whether 可放在句首或接 or not;if 表「是否」時通常只用於受詞子句。',
        ]),
      ],
      quiz: [
        single('en-l2-2-q1', "Some people have a ______ that walking under a ladder brings bad luck.", ['superstition', 'solution', 'situation', 'sensation'], 0, 'superstition 是「迷信」,have a superstition that... 表示有……的迷信。'),
        single('en-l2-2-q2', "It is a local ______ to take off your shoes before entering a house.", ['custom', 'cost', 'cave', 'cloud'], 0, 'custom 是「習俗」。'),
        single('en-l2-2-q3', "The fortune teller told him that he would have good ______ this year.", ['fortune', 'flavor', 'fever', 'frame'], 0, 'good fortune 是「好運」。'),
        single('en-l2-2-q4', "We visit the graves of our ______ every spring to show respect.", ['ancestors', 'athletes', 'assistants', 'architects'], 0, 'ancestor 是「祖先」,清明掃墓祭祖。'),
        single('en-l2-2-q5', "The rumor was ______ at first, but it soon caused a lot of trouble.", ['harmless', 'helpless', 'hopeless', 'homeless'], 0, 'harmless 是「無害的」,與後半句「很快造成許多麻煩」形成對比。'),
        single('en-l2-2-q6', "I don't know ______ he will come to the party.", ['whether', 'what', 'which', 'that'], 0, '表示「是否」用 whether,I don\'t know whether he will come 是「不知道他是否會來」。'),
        single('en-l2-2-q7', "______ he said made everyone laugh.", ['What', 'That', 'Which', 'Who'], 0, 'What he said 相當於 the thing that he said,作主詞的名詞子句。'),
        single('en-l2-2-q8', "Could you tell me where ______?", ['the station is', 'is the station', 'the station does', 'does the station'], 0, '間接問句用直述語序,即 where the station is。'),
        p.single('en-l2-2-q9', "Why is the number 4 often avoided in East Asia?", ['It sounds like the word for death.', 'It is too small.', 'It appears on many buildings.', 'It is considered lucky in the West.'], 0, '文中說 the number 4 ... sounds like the word for "death"。'),
        p.single('en-l2-2-q10', "What do scientists say about superstitions?", ['They are always true.', 'They have no real power but can still affect how people behave.', 'They only exist in Asia.', 'They should be banned.'], 1, '文中說 such superstitions have no real power, but they can still affect how people behave。'),
        p.single('en-l2-2-q11', "The word \"skip\" in the passage is closest in meaning to ______.", ['leave out', 'jump over a rope', 'destroy', 'repair'], 0, 'skip the thirteenth floor 指「略過第十三層」,即 leave out。'),
        multi('en-l2-2-q12', "Which of the following sentences are correct? (多選)", ['I wonder if she will attend the meeting.', 'Do you know where does he live?', 'What she wants is a quiet place.', 'It is not clear whether the story is true.', 'Tell me what is your name.'], [0, 2, 3], '間接問句要用直述語序:Do you know where he lives? / Tell me what your name is.,B、E 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l2-3-p1',
      'From Bitter Drink to Sweet Treat',
      "Chocolate comes from the seeds of the cacao tree, which grows in warm, wet places near the equator. About 3,000 years ago, people in Central America made a bitter drink from ground cacao seeds. When Spanish explorers brought cacao to Europe in the 1500s, they added sugar to the drink, and it soon became a popular luxury among the rich. It was not until the 1800s that machines made it possible to produce solid chocolate bars. Today, chocolate is enjoyed all over the world, but the farmers who grow the cacao are often paid very little, which has led some consumers to choose \"fair trade\" products."
    );
    return lesson({
      id: 'en-l2-3',
      title: '第3課 Food Stories: The Journey of Chocolate(食物的故事)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:巧克力從苦澀飲料變成全球美食的歷史,以及公平貿易的議題。',
          '學習目標:區分現在分詞(V-ing,主動、令人……的)與過去分詞(p.p.,被動、感到……的)當形容詞,並使用分詞構句。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['bitter', 'adj. 苦的', 'Black coffee tastes bitter.'],
          ['flavor', 'n. 口味', 'What flavor do you want?'],
          ['luxury', 'n. 奢侈品', 'Sugar was once a luxury.'],
          ['export', 'v./n. 出口', 'Taiwan exports computer parts.'],
          ['harvest', 'v./n. 收成、收穫', 'Farmers harvest rice in autumn.'],
          ['explorer', 'n. 探險家', 'Explorers brought new foods to Europe.'],
          ['fair trade', 'n. 公平貿易', 'This coffee is fair trade.'],
        ]),
        bullets('文法重點', [
          '情緒動詞的分詞形容詞:V-ing 形容「令人……的事物」(boring, exciting, surprising),p.p. 形容「感到……的人」(bored, excited, surprised)。The movie was boring, so I felt bored.',
          '常見:interested in / interesting、excited about / exciting、tired of / tiring、frightened / frightening。',
          '分詞構句:When it is seen from the top of the hill → Seen from the top of the hill,主詞若是被動關係用 p.p.,主動關係用 V-ing。Seen from the top of the hill, the town looked like a toy.',
        ]),
      ],
      quiz: [
        single('en-l2-3-q1', "Dark chocolate has a slightly ______ taste because it contains less sugar.", ['bitter', 'ripe', 'mild', 'wealthy'], 0, 'bitter 是「苦的」,含糖少的黑巧克力略苦。'),
        single('en-l2-3-q2', "This ice cream comes in three ______: vanilla, chocolate, and strawberry.", ['flavors', 'flights', 'fields', 'fashions'], 0, 'flavor 是「口味」。'),
        single('en-l2-3-q3', "In the past, sugar was a ______ that only rich people could afford.", ['luxury', 'habit', 'crowd', 'custom'], 0, 'luxury 是「奢侈品」,只有有錢人買得起。'),
        single('en-l2-3-q4', "Taiwan ______ many electronic products to other countries.", ['exports', 'expects', 'expresses', 'expands'], 0, 'export 是「出口」。'),
        single('en-l2-3-q5', "Farmers ______ their crops in autumn.", ['harvest', 'honor', 'harm', 'hire'], 0, 'harvest 是「收割、收成」。'),
        single('en-l2-3-q6', "The ______ boy was crying in the corner.", ['frightened', 'frightening', 'frighten', 'frights'], 0, '男孩是「感到害怕的」,用過去分詞 frightened。'),
        single('en-l2-3-q7', "The movie was so ______ that I fell asleep.", ['bored', 'boring', 'bore', 'bores'], 1, '電影是「令人無聊的」,用 boring。'),
        single('en-l2-3-q8', "______ from the top of the hill, the town looked like a toy.", ['Seeing', 'Seen', 'Saw', 'To see'], 1, '主詞 the town 與 see 是被動關係,分詞構句用過去分詞 Seen。'),
        p.single('en-l2-3-q9', "When did machines make it possible to produce solid chocolate bars?", ['About 3,000 years ago', 'In the 1500s', 'In the 1800s', 'Today'], 2, '文中說 It was not until the 1800s that machines made it possible to produce solid chocolate bars。'),
        p.single('en-l2-3-q10', "Why did chocolate become popular among the rich in Europe?", ['It was cheap and easy to grow.', 'Spanish explorers added sugar to the bitter drink.', 'It was invented in Europe.', 'Doctors ordered people to eat it.'], 1, '文中說西班牙探險家把糖加進去,巧克力很快成為富人間流行的奢侈品。'),
        p.single('en-l2-3-q11', "What is the author's concern in the last sentence?", ['Chocolate is too sweet.', 'Cacao farmers are often paid very little.', 'Chocolate bars are too expensive.', 'Consumers do not like fair trade.'], 1, '最後一句指出種植可可的農夫常常收入很低,因此有消費者選擇公平貿易產品。'),
        multi('en-l2-3-q12', "Which of the following sentences are correct? (多選)", ['I am interested in history.', 'The news was surprised.', 'He is excited about the trip.', 'The class was boring, so many students felt bored.', 'She is a very fascinated person.'], [0, 2, 3], '新聞是「令人驚訝的」,應為 surprising;她是「令人著迷的」人,應為 fascinating,B、E 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l2-4-p1',
      'Online but Alone?',
      "Today, teenagers spend an average of more than three hours a day on their smartphones. Social media helps them stay in touch with friends and share their daily lives, but experts warn that it also has a downside. Scrolling through perfect photos of others can make young people feel that their own lives are boring. In addition, constant notifications distract students from their homework. Some schools have started asking students to put their phones in a box during class. Although this rule was unpopular at first, many students later admitted that they could concentrate better and even enjoyed talking to their classmates more."
    );
    return lesson({
      id: 'en-l2-4',
      title: '第4課 Life Online(網路生活)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:智慧型手機、社群媒體的優點與缺點,以及數位時代的隱私與專注力。',
          '學習目標:區分動名詞(V-ing)與不定詞(to V)作受詞,並掌握 stop / forget / remember 的意義差異。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['addicted (to)', 'adj. 沉迷的', 'He is addicted to online games.'],
          ['privacy', 'n. 隱私', 'Please respect my privacy.'],
          ['virtual', 'adj. 虛擬的', 'Virtual reality feels real.'],
          ['distract', 'v. 使分心', 'Noise distracted me from reading.'],
          ['connect', 'v. 連結', 'The app connects people around the world.'],
          ['notification', 'n. 通知', 'I turned off all notifications.'],
          ['downside', 'n. 缺點', 'Every tool has a downside.'],
        ]),
        bullets('文法重點', [
          '只接動名詞的動詞:enjoy、finish、avoid、suggest、mind、consider、practice(enjoy chatting)。',
          '只接不定詞的動詞:decide、refuse、hope、plan、agree、promise、want(decide to go)。',
          'spend + 時間/金錢 + (in) V-ing:She spent two hours finishing her homework.',
          '意義不同:stop + V-ing(停止做)/ stop + to V(停下來去做);forget/remember + to V(忘記/記得要去做)/ + V-ing(忘記/記得做過)。',
          'be used to + V-ing(習慣於)不可寫成 used to get up。',
        ]),
      ],
      quiz: [
        single('en-l2-4-q1', "Many teenagers are ______ to video games and find it hard to stop playing.", ['addicted', 'allowed', 'amazed', 'annoyed'], 0, 'be addicted to 是「沉迷於」。'),
        single('en-l2-4-q2', "Please respect my ______; do not read my private messages.", ['privacy', 'policy', 'pressure', 'profit'], 0, 'privacy 是「隱私」。'),
        single('en-l2-4-q3', "In the ______ world of the game, players can build their own cities.", ['virtual', 'vertical', 'vacant', 'vivid'], 0, 'virtual world 是「虛擬世界」。'),
        single('en-l2-4-q4', "Loud music from the neighbor's house ______ me from my studies.", ['distracted', 'destroyed', 'described', 'deserved'], 0, 'distract sb from 是「使某人從……分心」。'),
        single('en-l2-4-q5', "This app helps you ______ with friends who live abroad.", ['connect', 'collect', 'correct', 'conduct'], 0, 'connect with 是「與……連結」。'),
        single('en-l2-4-q6', "I forgot ______ the door, so someone might have entered.", ['locking', 'to lock', 'lock', 'locked'], 1, 'forget to lock 是「忘了要鎖門」,所以門沒鎖。'),
        single('en-l2-4-q7', "She spent two hours ______ her homework last night.", ['to finish', 'finishing', 'finish', 'finished'], 1, 'spend + 時間 + V-ing。'),
        single('en-l2-4-q8', "He stopped ______ a text message when the teacher walked in.", ['to send', 'sending', 'send', 'to sending'], 1, 'stop + V-ing 是「停止做某事」,老師走進來所以他停止傳簡訊。'),
        p.single('en-l2-4-q9', "According to the passage, what is one downside of social media?", ['It is too expensive.', 'Perfect photos of others may make young people feel their own lives are boring.', 'It cannot connect friends.', 'It makes students sleep more.'], 1, '文中說 Scrolling through perfect photos of others can make young people feel that their own lives are boring。'),
        p.single('en-l2-4-q10', "What have some schools started asking students to do?", ['Bring two phones to class', 'Put their phones in a box during class', 'Use phones for homework', 'Take photos in class'], 1, '文中說 Some schools have started asking students to put their phones in a box during class。'),
        p.single('en-l2-4-q11', "The word \"distract\" in the passage is closest in meaning to ______.", ['draw attention away', 'help', 'teach', 'protect'], 0, 'distract 是「使分心」,即把注意力從功課上移開。'),
        multi('en-l2-4-q12', "Which of the following sentences are correct? (多選)", ['I enjoy chatting with my friends online.', 'She decided going to bed early.', 'He suggested taking a break.', 'They refused to answer the phone.', 'I am used to get up early.'], [0, 2, 3], 'decide 後接不定詞(decided to go);be used to 後接 V-ing(am used to getting up),B、E 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l2-5-p1',
      'Weekend at the Food Bank',
      "Every Saturday morning, sixteen-year-old Amy goes to the local food bank, where she helps sort donated food and hand it out to families in need. At first, she volunteered only because her school required community service hours. However, after she met an elderly man who thanked her with tears in his eyes, she realized how much a small act of kindness could mean to others. \"I am so busy with school that I almost quit,\" Amy says, \"but the smiles I see there are too precious to give up.\" Now she has even persuaded her friends to join her."
    );
    return lesson({
      id: 'en-l2-5',
      title: '第5課 Volunteering and Community(志工與社區)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:志願服務、捐贈與社區互助,以及小小善行帶來的改變。',
          '學習目標:使用 so...that、such...that、too...to、enough to 表示結果與程度。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['donate', 'v. 捐贈', 'He donated blood yesterday.'],
          ['elderly', 'adj. 年長的(the elderly 老年人)', 'We should care for the elderly.'],
          ['community', 'n. 社區', 'The community built a new park.'],
          ['charity', 'n. 慈善(機構)', 'She gives money to charity.'],
          ['contribute (to)', 'v. 貢獻', 'Everyone contributed to the project.'],
          ['volunteer', 'v./n. 志願服務;志工', 'She volunteers at a hospital.'],
          ['precious', 'adj. 珍貴的', 'Time is precious.'],
        ]),
        bullets('文法重點', [
          'so + 形容詞/副詞 + that 子句:The bag was so heavy that she couldn\'t lift it.',
          'such + (a/an) + 形容詞 + 名詞 + that 子句:It was such a difficult problem that nobody could solve it.',
          'too + 形容詞 + (for sb) + to V(太……而不能):He is too tired to walk any farther.',
          '形容詞 + enough + to V(夠……可以),enough 放在形容詞後面:He is old enough to travel alone.(不可寫 enough old)',
        ]),
      ],
      quiz: [
        single('en-l2-5-q1', "The company ______ 100,000 dollars to help the earthquake victims.", ['donated', 'deposited', 'delivered', 'demanded'], 0, 'donate 是「捐贈」。'),
        single('en-l2-5-q2', "The ______ need special care and attention from their families.", ['elderly', 'elegant', 'electric', 'eager'], 0, 'the elderly 指「老年人」。'),
        single('en-l2-5-q3', "Everyone in the ______ came out to help clean the beach.", ['community', 'commission', 'comment', 'comfort'], 0, 'community 是「社區」。'),
        single('en-l2-5-q4', "He gives part of his salary to ______ every year.", ['charity', 'character', 'chapter', 'channel'], 0, 'give money to charity 是「捐款給慈善機構」。'),
        single('en-l2-5-q5', "Everyone should ______ to the group project by sharing ideas.", ['contribute', 'constrain', 'convince', 'consume'], 0, 'contribute to 是「對……有貢獻」。'),
        single('en-l2-5-q6', "The bag was ______ heavy that she couldn't lift it.", ['so', 'such', 'too', 'very'], 0, 'so + 形容詞 + that 子句。'),
        single('en-l2-5-q7', "It was ______ a difficult problem that nobody could solve it.", ['so', 'such', 'too', 'very'], 1, 'such + a + 形容詞 + 名詞 + that 子句。'),
        single('en-l2-5-q8', "He is old ______ to travel alone.", ['enough', 'too', 'so', 'very'], 0, '形容詞 + enough + to V,表示「夠……可以」。'),
        p.single('en-l2-5-q9', "Why did Amy first start volunteering?", ['Her school required community service hours.', 'Her friends asked her to.', 'She wanted to earn money.', 'She wanted to meet an elderly man.'], 0, '文中說 she volunteered only because her school required community service hours。'),
        p.single('en-l2-5-q10', "What changed Amy's attitude?", ['She won a prize.', 'An elderly man thanked her with tears in his eyes.', 'Her school gave her a higher grade.', 'She became less busy.'], 1, '文中說 after she met an elderly man who thanked her with tears in his eyes,她才體會到小善行的意義。'),
        p.single('en-l2-5-q11', "The word \"precious\" in the passage is closest in meaning to ______.", ['valuable', 'expensive', 'dangerous', 'ordinary'], 0, 'precious 是「珍貴的」,與 valuable 最接近。'),
        multi('en-l2-5-q12', "Which of the following sentences are correct? (多選)", ['He was too tired to walk any farther.', 'She is enough smart to solve the puzzle.', 'It was such a nice day that we went out.', 'The soup was so hot that I couldn\'t eat it.', 'The box is too heavy for me to carry.'], [0, 2, 3, 4], 'enough 要放在形容詞後面,應為 smart enough to solve,B 錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l2-6-p1',
      'More Than a Game',
      "Last month, our school basketball team lost the championship game by only two points. Although we trained hard for months, our opponents were taller and faster. After the game, some of us cried in the locker room. However, our coach reminded us that winning is not the only goal of sport. \"You showed determination and teamwork,\" he said. \"Those things will help you long after this game is forgotten.\" Therefore, instead of feeling ashamed, we decided to shake hands with the other team and congratulate them. That moment made us realize that being a good sport matters more than a trophy."
    );
    return lesson({
      id: 'en-l2-6',
      title: '第6課 Sports and Teamwork(運動與團隊)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:運動比賽中的輸贏、努力、團隊合作與運動家精神。',
          '學習目標:使用連接詞與轉折語(although, however, therefore, on the other hand)串連句子,表達讓步、轉折與結果。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['compete (in/with)', 'v. 競爭、比賽', 'They will compete in the final.'],
          ['opponent', 'n. 對手', 'Our opponent was very strong.'],
          ['defeat', 'v./n. 擊敗;敗北', 'The home team defeated the visitors.'],
          ['determination', 'n. 決心', 'She showed great determination.'],
          ['teamwork', 'n. 團隊合作', 'Teamwork is the key to success.'],
          ['championship', 'n. 冠軍賽', 'They won the championship.'],
          ['congratulate', 'v. 恭喜', 'We congratulated him on his victory.'],
        ]),
        bullets('文法重點', [
          '讓步:Although / Though + 子句(儘管),主要子句前不可再加 but:Although he was tired, he kept running.(不能寫 Although..., but...)。',
          '轉折/對比:however(然而)、on the other hand(另一方面),前面用分號或句號,後面加逗號。',
          '結果:therefore / as a result(因此);對等連接詞 and, but, or, so 前面連接兩個獨立子句要加逗號。',
          '原因:because + 子句,不能與 so 同時使用:Because it was late, we went home.(不寫 so)。',
        ]),
      ],
      quiz: [
        single('en-l2-6-q1', "The two schools will ______ in the national speech contest next week.", ['compete', 'complain', 'compare', 'comfort'], 0, 'compete in 是「參加(比賽)、競爭」。'),
        single('en-l2-6-q2', "Our ______ was much stronger than us, but we did not give up.", ['opponent', 'ancestor', 'neighbor', 'audience'], 0, 'opponent 是「對手」。'),
        single('en-l2-6-q3', "The home team ______ the visitors by a score of 3 to 1.", ['defeated', 'deserved', 'delayed', 'denied'], 0, 'defeat 是「擊敗」。'),
        single('en-l2-6-q4', "With great ______, she kept training until she won a medal.", ['determination', 'decoration', 'destination', 'demonstration'], 0, 'determination 是「決心」。'),
        single('en-l2-6-q5', "Good ______ is the key to winning a team sport.", ['teamwork', 'homework', 'network', 'framework'], 0, 'teamwork 是「團隊合作」。'),
        single('en-l2-6-q6', "______ it was raining heavily, the game continued.", ['Although', 'Because', 'Unless', 'Since'], 0, '下雨但比賽仍繼續,是讓步關係,用 Although。'),
        single('en-l2-6-q7', "He studied hard. ______, he passed the exam easily.", ['Therefore', 'However', 'Otherwise', 'Instead'], 0, '努力讀書所以輕鬆通過考試,是因果關係,用 Therefore。'),
        single('en-l2-6-q8', "I like basketball. ______, my brother prefers swimming.", ['On the other hand', 'As a result', 'In addition', 'For example'], 0, '兩人喜好對比,用 On the other hand(另一方面)。'),
        p.single('en-l2-6-q9', "Why did the team lose the game?", ['They did not train.', 'Their opponents were taller and faster.', 'The coach was absent.', 'The game was canceled.'], 1, '文中說 Although we trained hard for months, our opponents were taller and faster。'),
        p.single('en-l2-6-q10', "What did the coach want the players to understand?", ['Winning is the only goal of sport.', 'Determination and teamwork matter even when you do not win.', 'They should never play again.', 'The referee was unfair.'], 1, '教練說 winning is not the only goal of sport,並稱讚他們展現決心與團隊合作。'),
        p.single('en-l2-6-q11', "The phrase \"being a good sport\" means ______.", ['behaving fairly and politely, whether winning or losing', 'playing every sport', 'winning every game', 'wearing a sports uniform'], 0, 'a good sport 指有運動家精神的人,不論輸贏都公平有禮。'),
        multi('en-l2-6-q12', "Which of the following sentences are correct? (多選)", ['Although he was tired, he kept running.', 'Although he was tired, but he kept running.', 'She was ill; however, she went to work.', 'Because it was late, so we went home.', 'He did not study; therefore, he failed the test.'], [0, 2, 4], 'although 與 but、because 與 so 不能同時使用,B、D 錯誤。'),
      ],
    });
  })(),
];
