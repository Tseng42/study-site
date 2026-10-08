// 英文課文單元:第四冊(高二下)。編排原則與第一冊相同,見 english-lessons-1.js。
import { single, multi, passageSet, lesson, bullets, table } from './lesson-helpers.js';

const CATEGORY = '第四冊(高二下)';

export const englishLessons4 = [
  (() => {
    const p = passageSet(
      'en-l4-1-p1',
      'Will Robots Take My Job?',
      "Artificial intelligence is already able to translate languages, diagnose diseases, and even write simple news reports. It is natural for workers to worry that machines will replace them. Some studies suggest that up to 30 percent of current jobs could be automated by 2035. However, history shows that technology often creates new jobs while it destroys old ones. When cars were invented, horse-carriage drivers lost their work, but millions of people became drivers, mechanics, and engineers. In order to succeed in the future, students will need to develop skills that machines cannot easily copy, such as creativity, communication, and the ability to work with others."
    );
    return lesson({
      id: 'en-l4-1',
      title: '第1課 AI and the Future of Work(人工智慧與工作的未來)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:人工智慧對職場的影響,以及未來需要的能力。',
          '學習目標:使用不定詞(表目的、當主詞、與 It is + 形容詞句型)與 in order to。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['replace', 'v. 取代', 'Machines may replace some workers.'],
          ['efficient', 'adj. 有效率的', 'This car is very efficient.'],
          ['unemployment', 'n. 失業', 'Unemployment is rising.'],
          ['creativity', 'n. 創造力', 'The job requires creativity.'],
          ['potential', 'n./adj. 潛力;潛在的', 'The boy has great potential.'],
          ['automate', 'v. 使自動化', 'Many tasks can be automated.'],
          ['skill', 'n. 技能', 'Communication is an important skill.'],
        ]),
        bullets('文法重點', [
          'It is + 形容詞 + (for + 人) + to V:It is important to get enough sleep. / It is difficult for me to learn Japanese.',
          '形容詞若描述人的性格(kind, nice, polite, rude, foolish),介系詞用 of:It is very kind of you to help me.',
          '不定詞表目的:in order to / so as to + 原形:She saved money in order to buy a new laptop.',
          '不定詞可作主詞:To learn a new language takes time.(也可寫成 It takes time to learn ...)',
          'too + 形容詞 + to V:He was too proud to admit his mistake.',
          'decide / plan / refuse / hope 等動詞後接不定詞 (to V),不接 V-ing。',
        ]),
      ],
      quiz: [
        single('en-l4-1-q1', "Robots are ______ workers in some factories because they can work 24 hours a day.", ['replacing', 'recording', 'reflecting', 'refusing'], 0, 'replace 是「取代」。'),
        single('en-l4-1-q2', "The new machine is much more ______ than the old one; it uses half the energy.", ['efficient', 'elderly', 'eager', 'elegant'], 0, 'efficient 是「有效率的」。'),
        single('en-l4-1-q3', "Rising ______ has made it hard for young people to find work.", ['unemployment', 'entertainment', 'environment', 'equipment'], 0, 'unemployment 是「失業」。'),
        single('en-l4-1-q4', "Artists need a lot of ______ to come up with new ideas.", ['creativity', 'curiosity', 'complexity', 'capacity'], 0, 'creativity 是「創造力」,想出新點子需要創造力。'),
        single('en-l4-1-q5', "The young player has great ______; he may become a star one day.", ['potential', 'pattern', 'patience', 'passion'], 0, 'potential 是「潛力」。'),
        single('en-l4-1-q6', "It is important ______ enough sleep.", ['get', 'to get', 'getting', 'got'], 1, 'It is + 形容詞 + to V,故用 to get。'),
        single('en-l4-1-q7', "She saved money ______ a new laptop.", ['in order to buy', 'to buying', 'for buy', 'in order buying'], 0, 'in order to + 原形動詞,表示目的。'),
        single('en-l4-1-q8', "It is very kind ______ you to help me.", ['of', 'for', 'to', 'with'], 0, 'kind 描述人的性格,用 It is + 形容詞 + of + 人 + to V。'),
        p.single('en-l4-1-q9', "Which of the following can AI already do, according to the passage?", ['Translate languages, diagnose diseases, and write simple news reports', 'Cook all meals', 'Replace every teacher', 'Predict the weather perfectly'], 0, '第一句提到 AI 能翻譯、診斷疾病、撰寫簡單新聞。'),
        p.single('en-l4-1-q10', "Why does the author mention the invention of cars?", ['To show that technology can also create new jobs', 'To prove that machines are dangerous', 'To explain how horses were trained', 'To describe the history of engineers'], 0, '汽車的發明使馬車夫失業,卻創造了司機、技師與工程師等新工作。'),
        p.single('en-l4-1-q11', "According to the passage, which skills will be important in the future?", ['Creativity, communication, and teamwork', 'Only computer programming', 'Memorizing facts', 'Working alone'], 0, '最後一句提到創造力、溝通與團隊合作等機器不易複製的能力。'),
        multi('en-l4-1-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['It is difficult for me to learn Japanese.', 'It is nice for you to say so.', 'To learn a new language takes time.', 'He was too proud to admit his mistake.', 'I decided to studying abroad.'], [0, 2, 3], '形容詞 nice 描述人的性格,應用 of you;decide 後接不定詞(decided to study),「It is nice for you to say so.」、「I decided to studying abroad.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l4-2-p1',
      'The Sun Instead of Coal',
      "Because of the burning of coal, oil, and gas, the amount of carbon dioxide in the air has risen sharply over the last century. This has led to global warming, which is the main cause of melting ice and stronger storms. Due to rising sea levels, some island countries may disappear within the next hundred years. To slow down climate change, many countries are shifting to renewable energy such as solar and wind power. In Taiwan, thanks to government support, the number of solar panels on rooftops has increased quickly. Although switching to clean energy costs a lot at the beginning, experts say that it will save money and protect our health in the long run."
    );
    return lesson({
      id: 'en-l4-2',
      title: '第2課 Climate Change and Clean Energy(氣候變遷與潔淨能源)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:全球暖化的原因與影響,以及再生能源的發展。',
          '學習目標:區分表示原因的 because(接子句)與 because of / due to / thanks to(接名詞),並搭配 although 表示讓步。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['emission', 'n. 排放(物)', 'Cars produce carbon emissions.'],
          ['renewable', 'adj. 可再生的', 'Solar power is renewable energy.'],
          ['consume', 'v. 消耗', 'A family consumes a lot of electricity.'],
          ['flood', 'n./v. 洪水;淹沒', 'The flood destroyed many houses.'],
          ['generate', 'v. 產生(電力等)', 'Wind turbines generate electricity.'],
          ['global warming', 'n. 全球暖化', 'Global warming melts glaciers.'],
          ['fossil fuel', 'n. 化石燃料', 'Coal is a fossil fuel.'],
        ]),
        bullets('文法重點', [
          'because + 子句(主詞 + 動詞);because of / due to / thanks to + 名詞或名詞片語:The match was canceled because of the heavy rain. / The match was canceled because it rained heavily.',
          'thanks to 表示「多虧」(好的原因):Thanks to your help, I passed the test;due to 多用於不好或中性的原因。',
          'although / though + 子句,表示讓步,不與 but 並用:Although he was tired, he stayed up to finish the report.',
          '常見錯誤:because of + 子句(He was late because of the traffic was heavy.)。',
        ]),
      ],
      quiz: [
        single('en-l4-2-q1', "Factories must reduce their carbon ______ to protect the environment.", ['emissions', 'exhibitions', 'expeditions', 'explosions'], 0, 'carbon emissions 是「碳排放」。'),
        single('en-l4-2-q2', "Solar and wind power are ______ sources of energy because they never run out.", ['renewable', 'removable', 'reasonable', 'remarkable'], 0, 'renewable 是「可再生的」。'),
        single('en-l4-2-q3', "The average family ______ a lot of electricity in summer.", ['consumes', 'constructs', 'contains', 'continues'], 0, 'consume 是「消耗」。'),
        single('en-l4-2-q4', "Heavy rain caused a serious ______ in the small town.", ['flood', 'flame', 'flock', 'flavor'], 0, 'flood 是「洪水」。'),
        single('en-l4-2-q5', "Wind turbines ______ electricity from the wind.", ['generate', 'graduate', 'guarantee', 'govern'], 0, 'generate electricity 是「發電」。'),
        single('en-l4-2-q6', "The match was canceled ______ the heavy rain.", ['because', 'because of', 'although', 'so'], 1, '後面接名詞片語 the heavy rain,用 because of。'),
        single('en-l4-2-q7', "______ he was tired, he stayed up to finish the report.", ['Because', 'Due to', 'Although', 'Thanks to'], 2, '「累了但仍熬夜」是讓步關係,用 Although。'),
        single('en-l4-2-q8', "Prices went up ______ the shortage of oil.", ['due to', 'because', 'since', 'so that'], 0, '後面接名詞片語 the shortage of oil,用 due to。'),
        p.single('en-l4-2-q9', "What has led to global warming, according to the passage?", ['The burning of coal, oil, and gas that raises the amount of carbon dioxide', 'The growth of forests', 'The use of solar power', 'Stronger storms'], 0, '文中說燃燒煤、石油與天然氣使二氧化碳大量增加,導致全球暖化。'),
        p.single('en-l4-2-q10', "What threat do rising sea levels pose?", ['Some island countries may disappear.', 'Solar panels will break.', 'Storms will stop.', 'Ice will grow.'], 0, '文中說 some island countries may disappear within the next hundred years。'),
        p.single('en-l4-2-q11', "What do experts say about switching to clean energy?", ['It costs a lot at first but saves money and protects health in the long run.', 'It is always cheaper at first.', 'It has no effect on health.', 'It is impossible in Taiwan.'], 0, '文中說剛開始花費很高,但長期能省錢並保護健康。'),
        multi('en-l4-2-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['He was late because of the traffic.', 'He was late because of the traffic was heavy.', 'The picnic was canceled due to bad weather.', 'Thanks to your help, I passed the test.', 'She succeeded because her hard work.'], [0, 2, 3], 'because of / because 後面接的形式不同:「He was late because of the traffic was heavy.」應改為 because the traffic was heavy;「She succeeded because her hard work.」應改為 because of her hard work。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l4-3-p1',
      'One Third of Our Food',
      "About one third of the food produced in the world each year is never eaten. In rich countries, much of it is thrown away by consumers who buy too much, while in poor countries, food is often lost before it reaches the market because farmers lack storage. At the same time, nearly 800 million people, many of whom live in rural areas, do not have enough to eat. Reducing food waste, which costs the world about a trillion dollars every year, is one of the easiest ways to help. Simple actions, such as planning meals, storing food properly, and buying \"ugly\" vegetables that taste just as good, can make a difference."
    );
    return lesson({
      id: 'en-l4-3',
      title: '第3課 Feeding the World(糧食問題)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:全球糧食浪費、飢餓與農業。',
          '學習目標:掌握關係子句的進階用法:介系詞 + 關係代名詞、非限定用法(前面有逗號)、以 which 指整個句子。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['shortage', 'n. 缺乏', 'There is a shortage of water.'],
          ['agriculture', 'n. 農業', 'Agriculture is important to this region.'],
          ['nutritious', 'adj. 有營養的', 'Vegetables are nutritious.'],
          ['crop', 'n. 農作物', 'Rice is an important crop.'],
          ['distribute', 'v. 分發、分配', 'They distribute free meals.'],
          ['rural', 'adj. 鄉村的', 'Many people live in rural areas.'],
          ['storage', 'n. 儲存', 'Farmers lack storage.'],
        ]),
        bullets('文法重點', [
          '非限定關係子句(補充說明,前後有逗號):my grandfather, who is 90 years old, ...。非限定用法不能用 that。',
          '介系詞 + 關係代名詞:The girl with whom I talked is my classmate.(介系詞後只能用 whom / which,不能用 who / that)',
          'which 可以指前面整句話的內容:He said he would help me, which surprised me.',
          '地點用 where,時間用 when:The city where I grew up has changed a lot.',
          '含數量的用法:many of whom / some of which:nearly 800 million people, many of whom live in rural areas ...',
        ]),
      ],
      quiz: [
        single('en-l4-3-q1', "A ______ of water forced farmers to leave their fields empty.", ['shortage', 'shelter', 'shadow', 'shame'], 0, 'shortage 是「缺乏」。'),
        single('en-l4-3-q2', "______ is the science and practice of growing crops and raising animals.", ['Agriculture', 'Architecture', 'Ambition', 'Atmosphere'], 0, 'agriculture 是「農業」。'),
        single('en-l4-3-q3', "Vegetables and fruit are ______ foods that keep us strong.", ['nutritious', 'notorious', 'numerous', 'nervous'], 0, 'nutritious 是「有營養的」。'),
        single('en-l4-3-q4', "Rice is the most important ______ in many Asian countries.", ['crop', 'crowd', 'crown', 'crime'], 0, 'crop 是「農作物」。'),
        single('en-l4-3-q5', "Volunteers ______ free meals to the homeless every evening.", ['distribute', 'distinguish', 'disturb', 'discuss'], 0, 'distribute 是「分發」。'),
        single('en-l4-3-q6', "My grandfather, ______ is 90 years old, still works on the farm.", ['who', 'that', 'whom', 'which'], 0, '先行詞是人且有逗號(非限定),在子句中作主詞,用 who,不可用 that。'),
        single('en-l4-3-q7', "The girl with ______ I talked is my classmate.", ['whom', 'who', 'that', 'whose'], 0, '介系詞 with 之後只能接 whom。'),
        single('en-l4-3-q8', "He said he would help me, ______ surprised me.", ['which', 'what', 'who', 'that'], 0, 'which 可指前面整句話的內容,並且非限定用法不能用 that。'),
        p.single('en-l4-3-q9', "What happens to about one third of the food produced in the world?", ['It is never eaten.', 'It is exported.', 'It is turned into fuel.', 'It is given to farmers.'], 0, '第一句說約三分之一的食物從未被吃掉。'),
        p.single('en-l4-3-q10', "Why is food often lost in poor countries before reaching the market?", ['Farmers lack storage.', 'Consumers buy too much.', 'Farmers grow too little.', 'Roads are too new.'], 0, '文中說 farmers lack storage。'),
        p.single('en-l4-3-q11', "Which of the following is suggested as a way to help reduce food waste?", ['Planning meals and buying \"ugly\" vegetables', 'Eating out every day', 'Throwing away old food quickly', 'Buying more than needed'], 0, '最後一句建議規劃餐點、妥善儲存,以及購買「醜」蔬菜。'),
        multi('en-l4-3-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['The city where I grew up has changed a lot.', 'This is the woman that I told you about.', 'My sister, that lives in Tokyo, is a nurse.', 'The book, which I borrowed from him, was very old.', 'The man to who I spoke was kind.'], [0, 1, 3], '非限定關係子句(有逗號)不能用 that,「My sister, that lives in Tokyo, is a nurse.」錯誤;介系詞後要用 whom,應為 to whom,「The man to who I spoke was kind.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l4-4-p1',
      'Think Before You Share',
      "A recent study found that false news stories spread six times faster on social media than true ones. It is said that people are more likely to share a story if it makes them feel angry or surprised. Experts claim that many readers only read the headline, which is often designed to attract attention rather than to tell the whole truth. To avoid being misled, media-literate readers ask questions such as: Who wrote this? Is the source reliable? Do other websites report the same thing? If the answers are unclear, they wait before sharing. As one teacher put it, \"A single click can help a rumor travel around the world, so it pays to think twice.\""
    );
    return lesson({
      id: 'en-l4-4',
      title: '第4課 Media Literacy and Fake News(媒體識讀與假新聞)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:假新聞的傳播、標題陷阱與如何判斷資訊可信度。',
          '學習目標:使用被動式的傳聞句型(It is said that / be said to V)與間接引述(時態與代名詞轉換)。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['reliable', 'adj. 可靠的', 'Use reliable sources.'],
          ['misleading', 'adj. 誤導的', 'The headline is misleading.'],
          ['verify', 'v. 查證', 'Verify the facts before you post.'],
          ['exaggerate', 'v. 誇大', 'He tends to exaggerate.'],
          ['rumor', 'n. 謠言', 'A rumor spread quickly.'],
          ['headline', 'n. 標題', 'The headline caught my eye.'],
          ['source', 'n. 來源', 'Check the source of the news.'],
        ]),
        bullets('文法重點', [
          '傳聞句型:It is said / believed / reported that + 子句 = 主詞 + be said / believed to + V。The old man is said to be over 100 years old.',
          '間接引述:tell + 人 + that ...(不可寫 said me);say that ...;ask + if / whether / 疑問詞 + 主詞 + 動詞(直述語序)。',
          '直接引述改間接引述:時態通常往後退一格(現在→過去,過去→過去完成),代名詞與時間副詞隨之調整。',
          'claim / suggest / say + that 子句:Experts claim that the news is false.',
        ]),
      ],
      quiz: [
        single('en-l4-4-q1', "You should only trust ______ news sources that check their facts.", ['reliable', 'relative', 'religious', 'rapid'], 0, 'reliable 是「可靠的」。'),
        single('en-l4-4-q2', "The advertisement is ______; the product is not as good as it claims.", ['misleading', 'mysterious', 'moving', 'modest'], 0, 'misleading 是「誤導的」。'),
        single('en-l4-4-q3', "Please ______ the information before you post it online.", ['verify', 'vary', 'vanish', 'value'], 0, 'verify 是「查證」。'),
        single('en-l4-4-q4', "He tends to ______ his stories to make them more exciting.", ['exaggerate', 'evaluate', 'evaporate', 'exhaust'], 0, 'exaggerate 是「誇大」。'),
        single('en-l4-4-q5', "A ______ spread through the school that the exam would be canceled.", ['rumor', 'ritual', 'rhythm', 'routine'], 0, 'rumor 是「謠言」。'),
        single('en-l4-4-q6', "The old man is said ______ over 100 years old.", ['to be', 'being', 'be', 'is'], 0, 'be said to V 是傳聞句型,故用 to be。'),
        single('en-l4-4-q7', "He asked me where I ______.", ['lived', 'did live', 'do live', 'living'], 0, '間接問句用直述語序,並配合過去式主要子句,用 lived。'),
        single('en-l4-4-q8', "Experts claim ______ the news is false.", ['that', 'what', 'which', 'whether that'], 0, 'claim 後面接 that 子句。'),
        p.single('en-l4-4-q9', "How much faster do false news stories spread than true ones?", ['Twice as fast', 'Six times faster', 'Ten times faster', 'They spread at the same speed'], 1, '文中說 false news stories spread six times faster。'),
        p.single('en-l4-4-q10', "Why do experts say headlines can be a problem?", ['They are designed to attract attention rather than tell the whole truth.', 'They are always too long.', 'They are written by students.', 'They are not read by anyone.'], 0, '文中說標題常是為了吸引注意而不是傳達完整真相。'),
        p.single('en-l4-4-q11', "What do media-literate readers do if the answers are unclear?", ['They wait before sharing.', 'They share it immediately.', 'They delete their accounts.', 'They write a headline.'], 0, '文中說 If the answers are unclear, they wait before sharing。'),
        multi('en-l4-4-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['He said that he was tired.', 'He said me that he was tired.', 'She told us that she would come.', 'She asked if I liked coffee.', 'She asked me did I like coffee.'], [0, 2, 3], 'say 後不直接接人,「He said me that he was tired.」應為 told me;間接問句不倒裝,「She asked me did I like coffee.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l4-5-p1',
      'The Girl Who Wanted to Fly',
      "When Maya told her classmates that she wanted to become a pilot, some of them laughed. \"Pilots are men,\" one boy said. Maya was hurt, but she did not give up. It was her aunt, a retired airline captain, who encouraged her to follow her dream. Only when Maya joined a flight camp did she realize how many women were already working in aviation. Today, women make up only about five percent of airline pilots worldwide, but that number is growing. Maya believes that no one should be judged by their gender. What matters, she says, is not who you are but what you are willing to learn."
    );
    return lesson({
      id: 'en-l4-5',
      title: '第5課 Equal Chances for Everyone(人人平等的機會)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:性別平等、刻板印象與反歧視。',
          '學習目標:使用強調句型 It is ... that ...,以及否定副詞或 only 置於句首的倒裝句。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['equality', 'n. 平等', 'We fight for gender equality.'],
          ['discriminate (against)', 'v. 歧視', 'It is illegal to discriminate against people.'],
          ['opportunity', 'n. 機會', 'Everyone deserves an equal opportunity.'],
          ['stereotype', 'n. 刻板印象', 'That is an unfair stereotype.'],
          ['disability', 'n. 身心障礙', 'He has a physical disability.'],
          ['gender', 'n. 性別', 'Gender should not limit our dreams.'],
          ['judge', 'v. 評斷', 'Do not judge people by appearance.'],
        ]),
        bullets('文法重點', [
          '強調句型 It is / was + 被強調部分 + that/who ...:It was my aunt who encouraged me. / It was in 2019 that we first met.',
          '否定副詞置句首,助動詞與主詞倒裝:Never have I seen such a beautiful sunset. / Rarely does he go to the movies. / Not only was he late, but he also forgot the book.',
          'Only + 副詞片語/子句置句首,倒裝:Only when he left home did he realize how much he loved his family.',
          'Not until + 時間 置句首:Not until she was thirty did she start her own business.',
        ]),
      ],
      quiz: [
        single('en-l4-5-q1', "Everyone should have ______ access to education, regardless of gender.", ['equal', 'effective', 'entire', 'eternal'], 0, 'equal access 是「平等的機會或權利」。'),
        single('en-l4-5-q2', "It is against the law to ______ against people because of their age.", ['discriminate', 'dominate', 'demonstrate', 'decorate'], 0, 'discriminate against 是「歧視」。'),
        single('en-l4-5-q3', "The company gave young graduates an ______ to work abroad.", ['opportunity', 'opposition', 'operation', 'organization'], 0, 'opportunity 是「機會」。'),
        single('en-l4-5-q4', "It is a ______ that boys do not cry and girls cannot do math.", ['stereotype', 'strategy', 'structure', 'statistic'], 0, 'stereotype 是「刻板印象」。'),
        single('en-l4-5-q5', "A person with a ______ may need extra help to use public transport.", ['disability', 'discovery', 'distance', 'disaster'], 0, 'disability 是「身心障礙」。'),
        single('en-l4-5-q6', "It was my aunt ______ encouraged me to follow my dream.", ['who', 'whom', 'which', 'what'], 0, '強調句型 It was + 人 + who/that + 動詞,被強調的是主詞 my aunt,用 who。'),
        single('en-l4-5-q7', "Only when he left home ______ how much he loved his family.", ['he realized', 'did he realize', 'he did realize', 'realized he'], 1, 'Only when 置於句首,主要子句倒裝,用 did he realize。'),
        single('en-l4-5-q8', "Not until she was thirty ______ start her own business.", ['did she', 'she did', 'was she', 'she was'], 0, 'Not until 置於句首,主要子句倒裝:did she start。'),
        p.single('en-l4-5-q9', "Why was Maya hurt?", ['Her classmates laughed and said pilots are men.', 'She failed a flight test.', 'Her aunt was angry with her.', 'She lost her job.'], 0, '文中說有同學笑她,並說 Pilots are men。'),
        p.single('en-l4-5-q10', "Who encouraged Maya to follow her dream?", ['A classmate', 'Her aunt, a retired airline captain', 'Her teacher', 'Her father'], 1, '文中說 It was her aunt, a retired airline captain, who encouraged her。'),
        p.single('en-l4-5-q11', "According to the passage, about what percentage of airline pilots worldwide are women?", ['5 percent', '15 percent', '30 percent', '50 percent'], 0, '文中說 women make up only about five percent of airline pilots worldwide。'),
        multi('en-l4-5-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['It was in 2019 that we first met.', 'Only after the meeting did I know the truth.', 'Never I have seen such a beautiful sunset.', 'Not only was he late, but he also forgot the book.', 'Rarely he goes to the movies.'], [0, 1, 3], '否定副詞置句首要倒裝:Never have I seen...、Rarely does he go...,「Never I have seen such a beautiful sunset.」、「Rarely he goes to the movies.」錯誤。'),
      ],
    });
  })(),

  (() => {
    const p = passageSet(
      'en-l4-6-p1',
      'Two Ways to Live',
      "Ethan grew up in a small village surrounded by rice fields, but he moved to Taipei for university. At first, he loved the convenience of the city: convenience stores were open all night, and the MRT could take him almost anywhere. However, after two years, he began to miss the quiet of the countryside. Living in a tiny apartment and spending an hour commuting every day left him exhausted. \"City life gives you speed, but the country gives you space,\" he says. \"I would rather have space.\" Now Ethan plans to work in a smaller city near the mountains, where he can enjoy both modern services and fresh air."
    );
    return lesson({
      id: 'en-l4-6',
      title: '第6課 City Life vs. Country Life(城市與鄉村)',
      category: CATEGORY,
      sections: [
        bullets('主題與學習重點', [
          '主題:城市與鄉村生活的優缺點與個人選擇。',
          '學習目標:使用表示偏好的句型 prefer、would rather,並整理比較級與同級比較的用法。',
        ]),
        table('重點單字', ['單字', '詞性與中文', '例句'], [
          ['convenient', 'adj. 方便的', 'The store is convenient.'],
          ['crowded', 'adj. 擁擠的', 'The MRT was crowded.'],
          ['peaceful', 'adj. 寧靜的', 'The lake is peaceful.'],
          ['commute', 'v./n. 通勤', 'He commutes an hour each day.'],
          ['rural', 'adj. 鄉村的', 'Rural areas are quiet.'],
          ['urban', 'adj. 都市的', 'Urban life is fast.'],
          ['convenience', 'n. 便利', 'I enjoy the convenience of the city.'],
        ]),
        bullets('文法重點', [
          'prefer A to B(喜歡 A 勝過 B,to 後面接名詞或 V-ing):I prefer walking to driving.(不寫 prefer ... than)',
          'would rather + 原形動詞 (than + 原形):She would rather study than watch TV.(不加 to)',
          'less + 原級 than(比較不……):Living in the country is less expensive than living in the city.',
          'not as / so + 原級 + as:The country is not as noisy as the city.',
        ]),
      ],
      quiz: [
        single('en-l4-6-q1', "The supermarket is ______ because it is open 24 hours a day.", ['convenient', 'confident', 'constant', 'concerned'], 0, 'convenient 是「方便的」。'),
        single('en-l4-6-q2', "The night market was so ______ that we could hardly move.", ['crowded', 'crooked', 'cruel', 'crazy'], 0, 'crowded 是「擁擠的」。'),
        single('en-l4-6-q3', "After a stressful week, I enjoyed the ______ atmosphere of the lake.", ['peaceful', 'powerful', 'painful', 'plentiful'], 0, 'peaceful 是「寧靜的」。'),
        single('en-l4-6-q4', "My father has a long ______ to work; it takes him two hours each way.", ['commute', 'commerce', 'comment', 'commit'], 0, 'commute 是「通勤」。'),
        single('en-l4-6-q5', "Life in ______ areas is usually quieter than in big cities.", ['rural', 'royal', 'rapid', 'racial'], 0, 'rural 是「鄉村的」。'),
        single('en-l4-6-q6', "I prefer tea ______ coffee.", ['to', 'than', 'over than', 'from'], 0, 'prefer A to B 是「喜歡 A 勝過 B」。'),
        single('en-l4-6-q7', "I would rather ______ at home tonight than go out.", ['stay', 'to stay', 'staying', 'stayed'], 0, 'would rather 後面接原形動詞。'),
        single('en-l4-6-q8', "Living in the country is ______ expensive than living in the city.", ['less', 'fewer', 'little', 'least'], 0, 'less + 形容詞原級 + than 是「比較不……」。'),
        p.single('en-l4-6-q9', "What did Ethan like about the city at first?", ['The convenience', 'The quiet', 'The rice fields', 'The low prices'], 0, '文中說 At first, he loved the convenience of the city。'),
        p.single('en-l4-6-q10', "Why did Ethan begin to miss the countryside?", ['A tiny apartment and a long commute left him exhausted, and he missed the quiet.', 'He lost his job.', 'His friends left Taipei.', 'The MRT stopped running.'], 0, '文中說住在小公寓、每天通勤一小時使他疲憊,他開始想念鄉下的寧靜。'),
        p.single('en-l4-6-q11', "Where does Ethan plan to work in the future?", ['In a smaller city near the mountains', 'In a village', 'In Taipei forever', 'In another country'], 0, '最後一句說他打算到山邊較小的城市工作。'),
        multi('en-l4-6-q12', "Which of the following sentences are correct? (Choose all that apply.)", ['I prefer walking to driving.', 'I prefer walking than driving.', 'She would rather study than watch TV.', 'She would rather to study than watch TV.', 'The country is not as noisy as the city.'], [0, 2, 4], 'prefer A to B 不用 than;would rather 後面不加 to,「I prefer walking than driving.」、「She would rather to study than watch TV.」錯誤。'),
      ],
    });
  })(),
];
