// 英文「專題」單元的實作題組:原本 english.js 裡的克漏字、文意選填、閱讀技巧、閱讀題型、
// 混合題、摘要這幾個單元只有「技巧是什麼」的觀念題,這裡補上真的要讀文章作答的題組,
// 由 js/subjects-registry.js 接在各單元原有題目的後面(原題目 id 不變)。
// 短文與題目皆為原創,不是轉錄歷屆試題。
// 寫詳解時不要用選項代號或「第幾個選項」指稱:選項在畫面上不標代號,而且每次作答都會洗牌。
import { passageSet } from './lesson-helpers.js';

const FIRST_NEW_NO = 39; // 六個單元原有題目的編號都到 q38 為止

const s = (q, options, exp) => ({ q, options, answer: 0, exp });
const m = (q, options, answers, exp) => ({ q, options, answers, exp });
const blank = (no, options, exp) => s(`Which option best fits blank (${no})?`, options, exp);

function build(unitId, sets) {
  let no = FIRST_NEW_NO;
  return sets.flatMap((set, index) => {
    const p = passageSet(`${unitId}-p${index + 1}`, set.title, set.text);
    return set.items.map((it) => {
      const id = `${unitId}-q${no++}`;
      return it.answers ? p.multi(id, it.q, it.options, it.answers, it.exp) : p.single(id, it.q, it.options, it.answer, it.exp);
    });
  });
}

// ---------------------------------------------------------------- 克漏字(en-u11)
const clozeSets = [
  {
    title: `克漏字練習 1:The Night Market`,
    text: `Night markets are an important part of life in Taiwan. As soon as the sun goes down, vendors begin to ____(1)____ their stalls along the street. Visitors can try all kinds of snacks, ____(2)____ stinky tofu to bubble tea. Because most dishes are inexpensive, people can taste many different foods ____(3)____ spending much money. For many tourists, a trip to Taiwan would not be complete ____(4)____ they had visited a night market.`,
    items: [
      blank(1, [`set up`, `put off`, `give up`, `turn down`], `set up 是「架設、擺設」,set up their stalls 即擺攤。put off 是延後、give up 是放棄、turn down 是拒絕,語意都不合。`),
      blank(2, [`from`, `between`, `among`, `with`], `後面有 to,是 from A to B(從……到……)的固定搭配。`),
      blank(3, [`without`, `instead`, `unless`, `except`], `without + V-ing 表示「不必……就」,即不必花很多錢就能吃到許多食物。instead 與 unless 後面不能直接接 V-ing。`),
      blank(4, [`unless`, `because`, `although`, `so`], `「除非去過夜市,否則行程不算完整」,表示條件的反面要用 unless。`),
    ],
  },
  {
    title: `克漏字練習 2:A Message in a Bottle`,
    text: `While walking along the beach last summer, Emma noticed a glass bottle half buried in the sand. Inside it ____(1)____ a rolled-up piece of paper. The message, which ____(2)____ by a boy in Japan three years earlier, asked the finder to write back. Emma was so ____(3)____ that she sent a reply the very next day. To her surprise, the boy answered within a month, and the two have kept in ____(4)____ ever since.`,
    items: [
      blank(1, [`was`, `were`, `has`, `have`], `地方副詞片語 Inside it 放句首引發倒裝,真正的主詞是單數的 a rolled-up piece of paper,整段又是過去的事,所以用 was。`),
      blank(2, [`had been written`, `has written`, `was writing`, `wrote`], `訊息是「被寫」的,而且寫的時間(三年前)比 Emma 發現瓶子更早,要用過去完成被動 had been written。`),
      blank(3, [`excited`, `exciting`, `excite`, `excitement`], `描述人「感到興奮」用過去分詞形容詞 excited;exciting 是形容事物令人興奮。`),
      blank(4, [`touch`, `hand`, `mind`, `line`], `keep in touch 是「保持聯絡」的固定用法。`),
    ],
  },
  {
    title: `克漏字練習 3:A Walk a Day`,
    text: `Walking is one of the simplest forms of exercise, ____(1)____ many people overlook its benefits. Studies show that a thirty-minute walk every day can lower the risk of heart disease and help people ____(2)____ a healthy weight. Walking is also good for the mind: spending time outdoors tends to reduce stress and ____(3)____ our mood. Best of all, it costs nothing and requires no special equipment ____(4)____ a comfortable pair of shoes.`,
    items: [
      blank(1, [`yet`, `so`, `because`, `unless`], `前半句說走路很簡單,後半句說許多人忽略它的好處,前後是轉折關係,用 yet(然而)。`),
      blank(2, [`maintain`, `prevent`, `replace`, `suffer`], `maintain a healthy weight 是「維持健康的體重」。prevent 是預防、replace 是取代、suffer 是受苦,語意不合。`),
      blank(3, [`improve`, `improves`, `improved`, `improving`], `tends to 後面接原形動詞,and 連接兩個對等的原形動詞 reduce 與 improve。`),
      blank(4, [`except`, `without`, `instead`, `among`], `「除了一雙舒適的鞋子以外,不需要特別的裝備」,表示除外用 except。`),
    ],
  },
  {
    title: `克漏字練習 4:Phones in the Box`,
    text: `Our school recently introduced a new rule: students must hand in their phones before the first class. At first, almost everyone complained. ____(1)____, after a few weeks, many of us began to notice some changes. We paid more attention in class, and we talked to each other more during breaks ____(2)____ staring at our screens. My friend Kevin, ____(3)____ used to check his phone every five minutes, said he felt much more relaxed. Although I still miss my phone sometimes, I have to admit that the rule has done more good than ____(4)____.`,
    items: [
      blank(1, [`However`, `Therefore`, `Moreover`, `Otherwise`], `前面說大家都在抱怨,後面說開始注意到好的改變,語意轉折,用 However。`),
      blank(2, [`instead of`, `because of`, `in spite of`, `in case of`], `「下課時彼此聊天,而不是盯著螢幕」,instead of + V-ing 表示「而不是」。`),
      blank(3, [`who`, `which`, `that`, `whose`], `先行詞 Kevin 是人,且在子句中作主詞;前面有逗號是非限定用法,不能用 that,所以用 who。`),
      blank(4, [`harm`, `pain`, `fault`, `risk`], `do more good than harm 是「利大於弊」的固定說法。`),
    ],
  },
  {
    title: `克漏字練習 5:Why Bees Matter`,
    text: `Bees are far more important than most people realize. About one third of the food we eat ____(1)____ on insects such as bees to carry pollen from flower to flower. In recent years, however, the number of bees has dropped sharply ____(2)____ pesticides and the loss of wild flowers. If this trend continues, fruits and vegetables may become much more expensive, and some may even ____(3)____ from supermarket shelves. To help, some cities now encourage residents ____(4)____ flowers on rooftops and balconies.`,
    items: [
      blank(1, [`depends`, `depend`, `depending`, `is depended`], `主詞是 one third of the food,food 不可數,動詞用單數 depends;depend on 是不及物用法,沒有被動。`),
      blank(2, [`because of`, `because`, `although`, `instead of`], `後面接的是名詞(pesticides and the loss of wild flowers)而不是子句,表示原因要用 because of。`),
      blank(3, [`disappear`, `discover`, `disagree`, `dislike`], `「有些蔬果甚至可能從超市貨架上消失」,用 disappear。`),
      blank(4, [`to plant`, `planting`, `plant`, `planted`], `encourage + 受詞 + to V,鼓勵某人做某事。`),
    ],
  },
];

// ---------------------------------------------------------------- 文意選填(en-u17)
const bankSet = (title, text, bank, answers) => ({
  title,
  text,
  items: answers.map(([word, exp], i) => {
    const options = [word, ...bank.filter((w) => w !== word)];
    return blank(i + 1, options, exp);
  }),
});

const wordBankSets = [
  bankSet(
    `文意選填練習 1:A Library in a Box`,
    `In my neighborhood, there is a tiny wooden box that looks like a birdhouse. It is actually a free library. Anyone can take a book home, and people are ____(1)____ to leave one in return. The idea is simple, but its ____(2)____ on the community has been surprising. Neighbors who had never spoken before now stop to ____(3)____ their favorite stories. Children check the box ____(4)____ on their way home from school, hoping to find something new. A small box of books has made our street a much ____(5)____ place.`,
    [`encouraged`, `effect`, `recommend`, `eagerly`, `friendlier`, `absence`],
    [
      [`encouraged`, `are 後面、to leave 前面需要過去分詞,be encouraged to V 是「被鼓勵去做」。`],
      [`effect`, `所有格 its 後面需要名詞,effect on 是「對……的影響」。`],
      [`recommend`, `stop to 後面接原形動詞,recommend their favorite stories 是「推薦最愛的故事」。`],
      [`eagerly`, `句子已經完整,空格要用副詞修飾動詞 check,eagerly 是「熱切地」。`],
      [`friendlier`, `a much ___ place 需要形容詞比較級,much 用來加強比較級。`],
    ]
  ),
  bankSet(
    `文意選填練習 2:Learning to Cook`,
    `When I moved out for college, I could barely boil an egg. Eating out every day soon became too ____(1)____, so I decided to learn to cook. My first attempts were a ____(2)____: the rice was burned and the soup tasted like salt water. Still, I refused to give up. I watched videos, asked my mother for advice, and ____(3)____ improved. Now I can prepare a full meal in thirty minutes. Cooking has not only saved me money but also given me a sense of ____(4)____. Nothing feels better than watching friends ____(5)____ a dish I made myself.`,
    [`expensive`, `disaster`, `gradually`, `achievement`, `enjoy`, `borrowed`],
    [
      [`expensive`, `became too 後面需要形容詞;天天外食「太貴」,所以才決定學做菜。`],
      [`disaster`, `冠詞 a 後面需要單數名詞;飯燒焦、湯太鹹,是一場「災難」。`],
      [`gradually`, `空格修飾動詞 improved,需要副詞,gradually 是「逐漸地」。`],
      [`achievement`, `a sense of achievement 是「成就感」。`],
      [`enjoy`, `感官動詞 watch + 受詞 + 原形動詞,看著朋友「享用」自己做的菜。`],
    ]
  ),
  bankSet(
    `文意選填練習 3:A Handwritten Note`,
    `Few people write letters by hand these days, which is exactly why a handwritten thank-you note feels so ____(1)____. Unlike a quick text message, a note shows that the writer has taken time to think about the ____(2)____. Psychologists have found that expressing thanks benefits both sides: the reader feels valued, while the writer becomes more ____(3)____ of the good things in life. A note does not have to be long; two or three sentences written from the heart are ____(4)____ to make someone's day. So the next time someone does you a favor, ____(5)____ picking up a pen.`,
    [`special`, `receiver`, `aware`, `enough`, `consider`, `rarely`],
    [
      [`special`, `feels so 後面需要形容詞;正因為很少人手寫,手寫的感謝卡才顯得「特別」。`],
      [`receiver`, `冠詞 the 後面需要名詞;寫的人花時間想到的是「收到的人」。`],
      [`aware`, `be/become aware of 是「察覺到、意識到」的固定搭配。`],
      [`enough`, `be enough to V 是「足以……」;前半句說不必寫很長,兩三句真心話就「足以」讓人開心一整天。`],
      [`consider`, `祈使句需要原形動詞,consider + V-ing 是「考慮做某事」。`],
    ]
  ),
  bankSet(
    `文意選填練習 4:Sundays at the Shelter`,
    `Every Sunday, Mei volunteers at an animal shelter near her home. Her main job is to feed the dogs and take them for walks, but she also helps ____(1)____ the cages. Many of the animals were ____(2)____ by their owners, so they are often frightened when they first arrive. Mei has learned to approach them ____(3)____ and speak in a soft voice. Over time, even the most nervous dogs begin to trust her. The work is tiring and sometimes sad, yet Mei finds it deeply ____(4)____. Her dream is to become a vet so that she can ____(5)____ animals for the rest of her life.`,
    [`clean`, `abandoned`, `slowly`, `rewarding`, `protect`, `crowded`],
    [
      [`clean`, `help 後面可以接原形動詞,clean the cages 是「清理籠子」。`],
      [`abandoned`, `were ___ by their owners 是被動語態,需要過去分詞;被主人「遺棄」所以才害怕。`],
      [`slowly`, `修飾動詞 approach 需要副詞;動物很害怕,所以要「慢慢地」靠近。`],
      [`rewarding`, `find + 受詞 + 形容詞;yet 表示轉折,工作雖然累,卻很「有意義、值得」。`],
      [`protect`, `助動詞 can 後面接原形動詞;當獸醫是為了一輩子「保護」動物。`],
    ]
  ),
  bankSet(
    `文意選填練習 5:Study Smart`,
    `Many students believe that studying longer always leads to better grades, but research suggests ____(1)____. The brain can only stay focused for a limited time before it needs a rest. One popular ____(2)____ is to study for twenty-five minutes and then take a five-minute break. During the break, it is better to stretch or look out the window than to pick up your phone, which can easily ____(3)____ you. After four rounds, a longer break is ____(4)____. Students who follow this plan often find that they finish their homework faster and remember more. In other words, studying smart matters more than studying ____(5)____.`,
    [`otherwise`, `method`, `distract`, `recommended`, `hard`, `noisy`],
    [
      [`otherwise`, `suggest otherwise 是「顯示情況並非如此」;but 表示研究結果與學生的想法相反。`],
      [`method`, `One popular ___ is 需要單數名詞;後面說明的是一種讀書「方法」。`],
      [`distract`, `can easily 後面接原形動詞;手機容易讓人「分心」。`],
      [`recommended`, `is 後面接過去分詞形成被動;四輪之後「建議」休息久一點。`],
      [`hard`, `study hard 是「用功讀書」;整句意思是讀得聰明比埋頭苦讀更重要。`],
    ]
  ),
];

// ---------------------------------------------------------------- 閱讀測驗答題技巧(en-u2)
const readingSkillSets = [
  {
    title: `閱讀練習 1:The Bag on the Back Seat`,
    text: `Mr. Lin has driven a taxi in Kaohsiung for more than twenty years. One rainy evening, after dropping off a businessman at the train station, he noticed a black bag on the back seat. Inside were a laptop, a passport, and an envelope full of cash. Without hesitating, Mr. Lin drove back to the station, but the passenger had already boarded his train. He then took the bag to the nearest police station. Two days later, the grateful owner called to thank him and offered a reward, which Mr. Lin politely refused. "I only did what anyone should do," he said. The story spread quickly online, and many people praised him for his integrity.`,
    items: [
      s(`What is the passage mainly about?`, [`A taxi driver who returned a passenger's lost bag and refused a reward`, `The difficulties of driving a taxi on rainy evenings`, `How the police help people find lost property`, `A businessman who often forgets his belongings`], `主旨題:全文敘述林先生發現乘客遺失的包包、送到警察局並婉拒酬謝,其他選項只是細節或文中沒有提到。`),
      s(`What did Mr. Lin do when he could not find the passenger at the station?`, [`He took the bag to the nearest police station.`, `He kept the bag in his taxi for two days.`, `He posted a photo of the bag online.`, `He waited at the station until the next morning.`], `細節題:文中說乘客已經上車,He then took the bag to the nearest police station。`),
      s(`What can be inferred about Mr. Lin?`, [`He cares more about doing the right thing than about money.`, `He hoped to become famous on the Internet.`, `He had met the businessman many times before.`, `He was disappointed that the reward was too small.`], `推論題:他毫不猶豫地歸還,又婉拒酬謝,還說「我只是做任何人都該做的事」,可推知他重視做對的事勝過金錢。`),
      s(`The word "integrity" in the last sentence is closest in meaning to ______.`, [`honesty`, `speed`, `humor`, `wealth`], `字義題:大家因為他拾金不昧而稱讚他,integrity 指「正直、誠實」。`),
    ],
  },
  {
    title: `閱讀練習 2:Too Early for School?`,
    text: `In many countries, high school classes begin before eight o'clock in the morning. However, a growing number of doctors argue that this schedule works against teenagers' bodies. During the teenage years, the brain releases the sleep hormone melatonin later at night, so most teens do not feel sleepy until around eleven. If they have to get up at six, they simply cannot get the eight to ten hours of sleep they need. Some schools that moved their first class to 8:30 or later have reported fewer students arriving late and better test scores. Critics point out that later start times make it harder to arrange buses and after-school activities. Even so, supporters believe that students' health should come first.`,
    items: [
      s(`What is the main idea of the passage?`, [`Starting school later may suit teenagers' sleep needs better, though it causes some practical problems.`, `Teenagers stay up late because they use their phones too much.`, `Schools should cancel after-school activities to save time.`, `Doctors disagree about how many hours of sleep teenagers need.`], `主旨題:文章先說明太早上課不符合青少年的生理,再提到延後上課的成效與批評,最後回到「健康優先」。`),
      s(`According to the passage, why do most teenagers not feel sleepy until around eleven?`, [`Their brains release melatonin later at night.`, `They have too much homework to finish.`, `They drink too many sugary drinks in the evening.`, `Their classes end late in the afternoon.`], `細節題:文中說 the brain releases the sleep hormone melatonin later at night。`),
      s(`What do critics of later start times worry about?`, [`It becomes harder to arrange buses and after-school activities.`, `Students will get lower test scores.`, `Teachers will have to work on weekends.`, `Teenagers will sleep more than ten hours a night.`], `細節題:Critics point out that later start times make it harder to arrange buses and after-school activities。`),
      s(`The phrase "works against" in the second sentence most likely means ______.`, [`is unsuitable or harmful for`, `is designed especially for`, `has nothing to do with`, `is strongly supported by`], `字義題:後文說明太早上課讓青少年睡眠不足,可知 works against 是「對……不利」。`),
    ],
  },
  {
    title: `閱讀練習 3:Grandpa's Garden`,
    text: `When I was a child, I thought my grandfather's vegetable garden was the most boring place in the world. Every weekend he asked me to help him pull weeds and water the plants, and every weekend I tried to find an excuse. That changed the summer I turned twelve. A typhoon destroyed most of the garden overnight. I expected Grandpa to be heartbroken, but the next morning he was already outside, picking up broken branches and planting new seeds. "Plants don't complain," he said with a smile. "They just start again." I spent the rest of that summer working beside him. I still don't love pulling weeds, but I have never forgotten what he taught me about starting over.`,
    items: [
      s(`How did the writer feel about the garden as a young child?`, [`Bored and unwilling to help`, `Proud and eager to work`, `Afraid of the insects there`, `Curious about every plant`], `細節題:第一句說覺得菜園是世界上最無聊的地方,而且每個週末都想找藉口不去幫忙。`),
      s(`What surprised the writer after the typhoon?`, [`Grandpa calmly began to repair the garden instead of being upset.`, `The garden was not damaged at all.`, `Grandpa decided to give up gardening.`, `The neighbors came to help without being asked.`], `細節題:作者以為爺爺會很傷心,結果隔天早上他已經在撿斷枝、種新種子。`),
      s(`What lesson did the writer learn from Grandpa?`, [`When things go wrong, start again without complaining.`, `Typhoons are the greatest danger to farmers.`, `Children should help with housework every weekend.`, `Vegetables grow best in summer.`], `主旨題:爺爺說「植物不抱怨,只是重新開始」,作者最後說永遠記得關於重新開始的這一課。`),
      s(`What does "I tried to find an excuse" suggest about the writer?`, [`The writer wanted to avoid working in the garden.`, `The writer often arrived late at the garden.`, `The writer wanted to plant different vegetables.`, `The writer was too sick to go outside.`], `推論題:找藉口(find an excuse)表示不想去做爺爺要求的工作。`),
    ],
  },
  {
    title: `閱讀練習 4:When a Language Disappears`,
    text: `There are about 7,000 languages in the world today, but linguists warn that nearly half of them may disappear by the end of this century. A language dies when its last speakers pass away without having taught it to their children. This often happens when young people move to cities and switch to a more widely used language in order to find jobs. When a language is lost, the songs, stories, and knowledge of nature stored in it are lost as well. Fortunately, some communities are fighting back. In New Zealand, for example, Maori is now taught in special preschools where children hear nothing but the language all day. Efforts like these show that a language in danger can still be saved if people act in time.`,
    items: [
      s(`What is the passage mainly about?`, [`Many languages are in danger of disappearing, but some can be saved through timely efforts.`, `Maori is the most difficult language in the world to learn.`, `Young people should not move to cities to look for jobs.`, `Linguists have counted exactly how many languages exist.`], `主旨題:前半說明語言消失的現象與原因,後半以毛利語為例說明及時行動可以挽救。`),
      s(`According to the passage, why do young people often switch to a more widely used language?`, [`To find jobs`, `To travel abroad`, `To pass school exams`, `To talk with their grandparents`], `細節題:文中說 switch to a more widely used language in order to find jobs。`),
      s(`According to the passage, what else is lost when a language disappears?`, [`The songs, stories, and knowledge of nature stored in it`, `The cities where its speakers used to live`, `The jobs of the people who spoke it`, `The preschools that taught it`], `細節題:When a language is lost, the songs, stories, and knowledge of nature stored in it are lost as well。`),
      s(`What is the author's attitude toward saving endangered languages?`, [`Concerned but hopeful`, `Completely indifferent`, `Angry and hopeless`, `Amused and doubtful`], `態度題:作者先提出警訊(warn、lost),再用 Fortunately 帶出成功的例子,並說只要及時行動仍可挽救,是擔憂但抱持希望。`),
    ],
  },
  {
    title: `閱讀練習 5:Finishing Together`,
    text: `At our school sports day last year, the most memorable moment did not come from the fastest runner. In the 400-meter race, a first-year student named Hao fell hard near the final turn. The other runners crossed the finish line while he was still trying to stand up. Then something unexpected happened. Jun, who had already finished in second place, walked back onto the track, put Hao's arm around his shoulder, and helped him limp to the end. The whole stadium stood up and cheered, louder than they had for the winner. Later, when a teacher asked Jun why he had gone back, he simply shrugged. "Nobody should have to finish alone," he said.`,
    items: [
      s(`What happened to Hao during the race?`, [`He fell near the final turn.`, `He won second place.`, `He ran in the wrong direction.`, `He stopped to help another runner.`], `細節題:文中說 Hao fell hard near the final turn。`),
      s(`Why did the audience cheer louder than they had for the winner?`, [`They were moved by Jun's kindness to Hao.`, `Hao broke the school record.`, `Jun asked them to cheer for Hao.`, `The race had been very close.`], `推論題:全場起立歡呼是在 Jun 走回跑道扶 Hao 走完之後,可知是被這個舉動感動。`),
      s(`What can be inferred about Jun from his answer to the teacher?`, [`He thinks helping others matters more than getting attention.`, `He regretted not winning first place.`, `He wanted the teacher to give him a prize.`, `He had been told by his coach to go back.`], `推論題:他只是聳聳肩說「沒有人應該獨自跑完」,沒有邀功,可知他在意的是幫助別人。`),
      s(`The word "limp" in the passage most likely means to ______.`, [`walk with difficulty because of an injured leg`, `run as fast as possible`, `jump over something`, `sit down and rest`], `字義題:Hao 重重跌倒後由 Jun 扶著走到終點,limp 是「一跛一跛地走」。`),
    ],
  },
];

// ---------------------------------------------------------------- 學測閱讀測驗題型總整理(en-u18)
const questionTypeSets = [
  {
    title: `題型練習 1:Cafeteria Notice`,
    text: `Starting next Monday, the school cafeteria will no longer provide paper cups. Students who wish to buy drinks must bring their own reusable cups or bottles. Those who do will receive a five-dollar discount on every drink. The change is part of our school's plan to cut waste: last semester alone, the cafeteria threw away more than 30,000 paper cups. Students who forget their cups may borrow one at the counter by leaving their student ID, which will be returned when the cup is brought back. We understand that this new rule may be inconvenient at first, but we believe that small changes can make a big difference. Thank you for helping us keep our campus green.`,
    items: [
      s(`What is the main purpose of this notice?`, [`To inform students of a new cafeteria rule and explain the reason for it`, `To advertise a new drink sold in the cafeteria`, `To ask students to work in the cafeteria`, `To report how much money the cafeteria made last semester`], `寫作目的題:公告說明下週一起不提供紙杯、怎麼配合,以及這是為了減少垃圾。`),
      s(`Which of the following is NOT mentioned in the notice?`, [`A fine for students who bring paper cups`, `A discount for students who bring their own cups`, `The number of paper cups thrown away last semester`, `A way to borrow a cup at the counter`], `否定問法:折扣、上學期丟掉的紙杯數量、押學生證借杯子都有寫;公告沒有提到任何罰款。`),
      s(`In the fifth sentence, what does "which" refer to?`, [`The student ID`, `The borrowed cup`, `The counter`, `The discount`], `指代題:which will be returned 緊接在 their student ID 之後,歸還杯子時拿回的是學生證。`),
      s(`Which of the following best describes the tone of the notice?`, [`Polite and encouraging`, `Angry and threatening`, `Humorous and playful`, `Sad and disappointed`], `語氣題:公告用 We understand…、Thank you for helping… 等說法,語氣客氣並鼓勵學生配合。`),
    ],
  },
  {
    title: `題型練習 2:The Clever Octopus`,
    text: `The octopus is one of the strangest animals in the sea. It has three hearts and blue blood, and it can change the color of its skin in less than a second to hide from enemies. Because it has no bones, an octopus can squeeze its body through a hole not much bigger than its eye. Scientists have also discovered that it is remarkably intelligent. In laboratories, octopuses have learned to open jars and find their way through mazes, and some have even escaped from their tanks at night. Despite these abilities, most octopuses live for only one or two years. Researchers are still trying to understand how such a short-lived animal became so clever.`,
    items: [
      s(`Which of the following is the best title for the passage?`, [`The Surprising Abilities of the Octopus`, `How to Keep an Octopus as a Pet`, `Dangerous Animals in the Sea`, `Why the Sea Is Blue`], `主旨題:全文介紹章魚奇特的身體構造與聰明的表現,最適合的標題是章魚令人驚奇的能力。`),
      s(`Which of the following is NOT mentioned as something an octopus can do?`, [`Producing light in dark water`, `Changing the color of its skin`, `Squeezing through a very small hole`, `Opening jars`], `否定問法:變色、鑽過小洞、打開罐子文中都有提到;文章沒有說章魚會發光。`),
      s(`What does "these abilities" in the second-to-last sentence refer to?`, [`The skills described earlier, such as hiding, squeezing through holes, and solving problems`, `The ability to live for many years`, `The ability to swim faster than other sea animals`, `The skills that scientists teach to fish`], `指代題:these abilities 指前文提到的變色躲藏、鑽過小洞、開罐子走迷宮等能力。`),
      s(`What can be inferred from the last sentence?`, [`Scientists find it puzzling that an animal with such a short life is so intelligent.`, `Scientists have proved that octopuses are smarter than humans.`, `Octopuses become clever only after living for many years.`, `Researchers are no longer interested in studying octopuses.`], `推論題:研究人員「仍在試著了解」壽命這麼短的動物怎麼會這麼聰明,可知這件事令人不解。`),
    ],
  },
  {
    title: `題型練習 3:Weekend Homework`,
    text: `Some teachers believe that weekend homework keeps students from forgetting what they have learned. I see their point, but I think the cost is too high. After five days of classes, tests, and cram school, teenagers need time to rest, exercise, and be with their families. Without it, they return to school on Monday already exhausted. What is more, homework done in a hurry on Sunday night is rarely done well; it becomes a task to finish rather than a chance to learn. I am not saying that students should do nothing. A short reading assignment or a creative project can be meaningful. But piles of worksheets every weekend teach students only one lesson: that learning is a burden.`,
    items: [
      s(`What is the author's attitude toward heavy weekend homework?`, [`Critical`, `Enthusiastic`, `Indifferent`, `Uncertain`], `態度題:作者說 the cost is too high,又說成堆的學習單只讓學生覺得學習是負擔,態度是批評的。`),
      s(`What is the author's main purpose in writing this passage?`, [`To persuade readers that heavy weekend homework does more harm than good`, `To explain how to finish homework quickly on Sunday night`, `To describe a typical school week for teenagers`, `To praise teachers who give a lot of homework`], `寫作目的題:作者先承認對方的理由,再提出自己的論點與理由,目的是說服讀者。`),
      s(`In the sentence "Without it, they return to school on Monday already exhausted," what does "it" refer to?`, [`Time to rest, exercise, and be with their families`, `Weekend homework`, `Cram school`, `A short reading assignment`], `指代題:it 指前一句的 time to rest, exercise, and be with their families。`),
      s(`Which kind of weekend assignment would the author most likely accept?`, [`A short reading assignment`, `Ten pages of worksheets`, `Extra practice tests for every subject`, `Copying a textbook chapter by hand`], `推論題:作者說 A short reading assignment or a creative project can be meaningful,反對的是成堆的學習單。`),
    ],
  },
  {
    title: `題型練習 4:How Do Students Get to School?`,
    text: `A recent survey asked 1,000 high school students in one city how they get to school. Nearly half, 46 percent, said they take a bus or the MRT. Another 28 percent are driven by their parents, while 15 percent ride bicycles. Only 11 percent walk. When asked why they did not walk or cycle, most students mentioned distance, but one in five said the roads near their school did not feel safe. City officials responded that they plan to build wider sidewalks and separate bike lanes around ten schools next year. If the plan works, it will be extended to the whole city.`,
    items: [
      s(`According to the survey, what is the most common way for students to get to school?`, [`Taking a bus or the MRT`, `Being driven by their parents`, `Riding a bicycle`, `Walking`], `細節題:46% 搭公車或捷運,是四種方式中比例最高的。`),
      s(`According to the passage, which of the following statements is NOT true?`, [`More students walk to school than ride bicycles.`, `Fewer than one third of the students are driven by their parents.`, `Almost half of the students use public transportation.`, `Some students feel that the roads near their school are unsafe.`], `否定問法:走路的是 11%,騎腳踏車的是 15%,走路的人比較少,所以「走路的比騎車的多」不符合文章。`),
      s(`In the last sentence, what does "it" refer to?`, [`The plan to build wider sidewalks and separate bike lanes`, `The survey of 1,000 students`, `The whole city`, `The MRT system`], `指代題:it 指前一句官員提出的計畫,計畫成功的話會推廣到全市。`),
      s(`What can be inferred about the city officials' plan?`, [`It is meant to make walking and cycling to school safer.`, `It will stop parents from driving their children to school.`, `It will make bus tickets cheaper for students.`, `It has already been carried out in every school.`], `推論題:計畫是回應「學校附近道路不安全」而提出的,內容是拓寬人行道與設置自行車道,可知目的是讓走路與騎車更安全。`),
    ],
  },
  {
    title: `題型練習 5:My First Speech`,
    text: `I had practiced my speech in front of the mirror at least fifty times. I knew every word, every pause, every gesture. Yet the moment I stepped onto the stage and saw three hundred faces looking up at me, my mind went completely blank. For what felt like an hour, though it was probably ten seconds, I stood there with my mouth open like a goldfish. Then a little girl in the front row waved at me and whispered, "You can do it!" The audience laughed, and so did I. Somehow, that laugh brought everything back. I finished the speech, and although I did not win a prize, I walked off the stage feeling ten feet tall.`,
    items: [
      s(`Which of the following best describes the tone of the passage?`, [`Light-hearted and warm`, `Bitter and angry`, `Cold and formal`, `Gloomy and hopeless`], `語氣題:作者用「像金魚一樣張著嘴」自嘲,結尾又很溫馨,整體語氣輕鬆而溫暖。`),
      s(`What does "my mind went completely blank" mean?`, [`The writer suddenly could not remember anything.`, `The writer decided to change the topic of the speech.`, `The writer could not see the audience clearly.`, `The writer felt very sleepy on the stage.`], `字義題:明明練了五十次,一上台卻什麼都想不起來,go blank 是「腦中一片空白」。`),
      s(`What helped the writer continue the speech?`, [`A little girl's encouragement and the laughter that followed`, `A teacher who handed over the notes`, `A friend who came onto the stage`, `A loud noise from outside the hall`], `細節題:小女孩說「你可以的」,全場和作者都笑了,that laugh brought everything back。`),
      s(`What does "feeling ten feet tall" in the last sentence suggest?`, [`The writer felt very proud.`, `The writer felt embarrassed.`, `The writer had grown taller.`, `The writer was standing on a chair.`], `推論題:雖然沒得獎,但克服緊張把演講講完,「覺得自己有十呎高」是形容非常自豪。`),
    ],
  },
];

// ---------------------------------------------------------------- 混合題型模擬練習(en-u21)
const mixedSets = [
  {
    title: `混合題練習 1:Part-time Jobs`,
    text: `Should high school students have part-time jobs? Two students share their views.

Rita: I have worked at a bakery every Saturday for a year. The job has taught me to be punctual and to deal with all kinds of customers. More importantly, earning my own money has made me think twice before spending it. Of course, I sometimes feel tired on Sunday, but I have learned to plan my study time carefully.

Leo: I tried working at a convenience store last semester, and my grades dropped. I was too exhausted to concentrate in class, and I had no time for the basketball team. I quit after three months. I do not regret the experience, because it showed me how hard it is to earn money. Still, I believe students should focus on schoolwork first; there will be plenty of time to work after graduation.`,
    items: [
      s(`Choose the option that best completes the sentence in the correct form:\nWorking at the bakery has taught Rita to be on time and to spend her money more ______.`, [`carefully`, `careful`, `care`, `caring`], `空格修飾動詞 spend,需要副詞 carefully;Rita 說賺了錢之後花錢前會多想一下(think twice before spending it)。`),
      s(`Which word in Leo's comment means "extremely tired"?`, [`exhausted`, `plenty`, `regret`, `focus`], `Leo 說 I was too exhausted to concentrate in class,exhausted 是「精疲力盡的」。`),
      m(`Which of the following are true for BOTH Rita and Leo? (Choose all that apply.)`, [`They have had the experience of working part-time.`, `They learned something about money from working.`, `Their grades dropped because of their jobs.`, `They are still working at the same place.`, `They think students should not work until after graduation.`], [0, 1], `兩人都打過工,也都從中體會到金錢得來不易(Rita 花錢前會多想,Leo 知道賺錢很辛苦)。成績退步、已經辭職、主張畢業後再工作的只有 Leo。`),
      s(`Why did Leo quit his job?`, [`His grades dropped and he was too tired to concentrate in class.`, `His manager asked him to leave.`, `He found a better job at a bakery.`, `His parents did not allow him to work.`], `Leo 說成績退步、上課累到無法專心,也沒時間參加籃球隊,三個月後就辭職了。`),
    ],
  },
  {
    title: `混合題練習 2:Surviving the Cold`,
    text: `Animals living near the poles have developed remarkable ways to survive the cold.

Emperor penguins spend the winter in Antarctica, where temperatures can fall below minus forty degrees Celsius. To stay warm, thousands of them stand close together in a huge group, taking turns moving from the freezing outer edge to the warmer center. During this time, each male balances a single egg on his feet and goes without food for about two months until the chick hatches.

Arctic foxes live in the far north. Their thick fur, which turns white in winter and brown in summer, keeps them warm and helps them hide from enemies. Even the bottoms of their feet are covered with fur. When food is plentiful, the foxes bury some of it in the frozen ground so that they will have something to eat during the long winter. On the coldest days, a fox curls up and wraps its bushy tail around its body like a blanket.`,
    items: [
      s(`Choose the option that best completes the sentence in the correct form:\nEmperor penguins stay warm by standing close together, while arctic foxes are ______ from the cold by their thick fur.`, [`protected`, `protect`, `protecting`, `protection`], `are ___ by their thick fur 是被動語態,需要過去分詞 protected。`),
      s(`Which word in the passage means "available in large amounts"?`, [`plentiful`, `remarkable`, `frozen`, `bushy`], `When food is plentiful 指食物充足的時候,plentiful 是「大量的、充足的」。`),
      m(`Which of the following are true for BOTH emperor penguins and arctic foxes? (Choose all that apply.)`, [`They live in extremely cold places.`, `Their bodies or behavior help them keep warm.`, `Their color changes with the seasons.`, `They store food for the winter.`, `They gather in groups of thousands.`], [0, 1], `兩者都生活在極寒地區,也都有保暖的方法(企鵝擠在一起,狐狸有厚毛並用尾巴裹住身體)。毛色隨季節改變與儲存食物只有北極狐,成千上萬聚在一起只有皇帝企鵝。`),
      s(`According to the passage, what does a male emperor penguin do during the winter?`, [`He keeps an egg on his feet and eats nothing for about two months.`, `He buries food in the frozen ground.`, `He swims north to look for warmer water.`, `He changes the color of his feathers.`], `文中說 each male balances a single egg on his feet and goes without food for about two months。`),
    ],
  },
  {
    title: `混合題練習 3:Club Fair`,
    text: `Greenfield High School is holding its Club Fair this Friday. Here are three clubs looking for new members.

A. Photography Club
We meet every Wednesday after school. Beginners are welcome, and you do not need your own camera; the club has ten that members can borrow. Each semester ends with an exhibition in the school library.

B. Debate Club
If you enjoy discussing current events and want to become a confident speaker, join us on Tuesdays and Thursdays. Members take part in at least two competitions a year, so regular attendance is required.

C. Hiking Club
We explore a different trail on the second Saturday of every month. No experience is necessary, but members must be able to walk for at least three hours. Transportation costs are shared equally.`,
    items: [
      s(`Amy is busy after school on weekdays, but she is free on weekends and loves being outdoors. Which club suits her best?`, [`Hiking Club`, `Photography Club`, `Debate Club`, `None of the three clubs`], `Hiking Club 在每個月第二個星期六活動,而且是戶外健行;另外兩個社團都在平日放學後。`),
      m(`Which clubs clearly say that people without experience can join? (Choose all that apply.)`, [`Photography Club`, `Debate Club`, `Hiking Club`], [0, 2], `Photography Club 寫 Beginners are welcome,Hiking Club 寫 No experience is necessary;Debate Club 沒有這樣的說明。`),
      s(`Which word in the Debate Club's description means "being present at meetings or events"?`, [`attendance`, `competitions`, `confident`, `current`], `regular attendance is required 是「必須固定出席」,attendance 是「出席」。`),
      s(`Choose the option that best completes the sentence in the correct form:\nAt the end of each semester, the Photography Club ______ its members' photos in the school library.`, [`exhibits`, `exhibition`, `exhibiting`, `exhibitor`], `句子缺動詞,主詞 the Photography Club 是單數,要把文中的名詞 exhibition 改成動詞 exhibits。`),
    ],
  },
  {
    title: `混合題練習 4:Tablets or Textbooks?`,
    text: `Should schools replace paper textbooks with tablets? Here is what five students said on the school forum.

Nina: Absolutely. My backpack used to weigh six kilograms. Now everything I need is in one light device.

Owen: I am not convinced. Staring at a screen all day gives me headaches, and it is too easy to open a game when the teacher is not looking.

Paula: Tablets are great for videos and quizzes, but I remember things better when I write notes by hand in a real book. Why not use both?

Quinn: Not every family can afford a tablet. Unless the school provides them for free, this plan is unfair.

Ray: Digital textbooks can be updated instantly, so we would always have the latest information. I am all for it.`,
    items: [
      m(`Which students clearly support replacing paper textbooks with tablets? (Choose all that apply.)`, [`Nina`, `Owen`, `Paula`, `Quinn`, `Ray`], [0, 4], `Nina 說 Absolutely,Ray 說 I am all for it,兩人明確支持。Owen 不認同,Paula 主張兩種並用,Quinn 擔心不公平。`),
      s(`Whose opinion suggests using tablets and paper books together?`, [`Paula`, `Nina`, `Owen`, `Quinn`], `Paula 說平板適合看影片和做測驗,但手寫筆記記得比較牢,並問 Why not use both?`),
      s(`Which phrase on the forum means "completely in favor of something"?`, [`all for it`, `not convinced`, `by hand`, `for free`], `Ray 說 I am all for it,be all for something 是「完全贊成」。`),
      s(`Choose the option that best completes the sentence in the correct form:\nRay likes digital textbooks because they can receive ______ instantly.`, [`updates`, `updated`, `updating`, `update`], `receive 後面需要名詞作受詞;可數名詞單數不能單獨出現,所以用複數 updates(由文中的 updated 變化而來)。`),
    ],
  },
];

// ---------------------------------------------------------------- 摘要寫作技巧(en-u16)
const summarySets = [
  {
    title: `摘要練習 1:Multitasking`,
    text: `Many people think that multitasking saves time, but research shows the opposite. When we try to do two things at once, such as answering messages while doing homework, the brain does not actually handle both tasks together. Instead, it switches quickly between them, and each switch costs a little time and attention. As a result, people who multitask make more mistakes and take longer to finish. Experts therefore suggest turning off notifications and concentrating on one task at a time.`,
    items: [
      s(`Which of the following is the best summary of the passage?`, [`Multitasking actually lowers efficiency because the brain keeps switching between tasks, so it is better to focus on one thing at a time.`, `Answering messages while doing homework is a common habit among students.`, `Multitasking is a terrible habit, and people who do it are simply lazy.`, `Research shows that multitasking helps people finish their work faster.`], `好的摘要要涵蓋主旨(一心多用反而沒效率)、原因(大腦來回切換)與建議(一次做一件事)。其他選項不是只抓到一個例子、加入原文沒有的個人評價,就是與原文相反。`),
      s(`When writing a summary of this passage, which part can most reasonably be left out?`, [`The example of answering messages while doing homework`, `The point that multitasking does not save time`, `The fact that the brain switches between tasks`, `The advice to concentrate on one task at a time`], `摘要要保留主旨、原因與結論,省略舉例。「邊寫功課邊回訊息」只是用來說明的例子。`),
    ],
  },
  {
    title: `摘要練習 2:The Return of the Spoonbill`,
    text: `Every autumn, black-faced spoonbills fly from Korea and northern China to spend the winter in the wetlands of southwestern Taiwan. In the late 1980s, only about three hundred of these birds were left in the world. Since then, Taiwan has protected their wintering grounds, and volunteers count the birds every year. Thanks to these efforts and similar ones in other countries, the population has grown to several thousand. The spoonbill's recovery shows that endangered species can be saved when people work together.`,
    items: [
      s(`Which of the following is the best summary of the passage?`, [`Protecting wintering grounds in Taiwan and elsewhere has helped the black-faced spoonbill recover from near extinction.`, `Black-faced spoonbills fly from Korea and northern China every autumn.`, `Volunteers in Taiwan enjoy counting birds in the wetlands every year.`, `The black-faced spoonbill is the most beautiful bird that visits Taiwan.`], `摘要要抓住「曾經瀕危 → 保護棲地 → 數量回升」這條主線。其他選項只是單一細節,或是原文沒有的主觀評價。`),
      s(`Which sentence from the passage best states its main point?`, [`The spoonbill's recovery shows that endangered species can be saved when people work together.`, `Every autumn, black-faced spoonbills fly from Korea and northern China to spend the winter in the wetlands of southwestern Taiwan.`, `In the late 1980s, only about three hundred of these birds were left in the world.`, `Volunteers count the birds every year.`], `最後一句總結全文想傳達的重點,是主題句;其他句子是背景或細節。寫摘要前先找出主題句。`),
    ],
  },
  {
    title: `摘要練習 3:Dumplings Online`,
    text: `For forty years, Mrs. Chen sold handmade dumplings from a small shop beside a traditional market. When the pandemic kept customers at home, her sales fell by more than half. Her granddaughter, a university student, suggested selling frozen dumplings online and helped her set up a website and take photos. Orders soon arrived from all over the island, and within a year the shop was earning more than before. Mrs. Chen says she has learned that even an old business can find new life with fresh ideas.`,
    items: [
      s(`Which of the following is the best summary of the passage?`, [`With her granddaughter's help, Mrs. Chen saved her struggling dumpling shop by selling online.`, `Mrs. Chen has sold handmade dumplings beside a traditional market for forty years.`, `Mrs. Chen's granddaughter is a university student who is good at taking photos.`, `Traditional markets lost all of their customers during the pandemic.`], `摘要要包含困境(生意掉了一半)、轉機(孫女建議上網賣)與結果(生意比以前好)。其他選項只是背景細節,或是把原文說過頭了。`),
      s(`A summary should stay objective. Which sentence should NOT appear in a summary of this passage?`, [`Mrs. Chen's dumplings must be the most delicious in Taiwan.`, `Mrs. Chen's sales dropped sharply during the pandemic.`, `Her granddaughter suggested selling frozen dumplings online.`, `Within a year, the shop was earning more than before.`], `摘要要客觀、忠於原文,不能加入自己的評價。原文沒有說她的水餃是全台灣最好吃的。`),
    ],
  },
  {
    title: `摘要練習 4:Shared Bikes`,
    text: `Bike-sharing systems have become common in cities around the world. Riders can pick up a bicycle at one station and return it at another, paying a small fee for the time used. Supporters say the systems reduce traffic and air pollution, and they give people an easy way to exercise. However, problems remain: bikes are sometimes damaged or left in the wrong places, and in some cities there are too few bike lanes for riders to feel safe. City governments are now working to solve these problems so that more people will choose two wheels over four.`,
    items: [
      s(`Which of the following is the best summary of the passage?`, [`Bike sharing reduces traffic and pollution, but cities still need to deal with problems such as damaged bikes and unsafe roads.`, `Riders pay a small fee to use shared bicycles in many cities.`, `Bike sharing has completely solved the traffic problems of big cities.`, `Bike sharing has failed because most of the bikes have been damaged.`], `這篇文章同時談優點與尚待解決的問題,摘要兩邊都要涵蓋。只講收費方式太片面;說問題已完全解決或說已經失敗,都與原文不符。`),
      s(`A good summary of this passage must mention ______.`, [`both the benefits of bike sharing and the problems that remain`, `only the reasons why people like cycling`, `the exact fee that riders have to pay`, `the names of the cities that have bike-sharing systems`], `文章用 However 分成優點與問題兩部分,摘要要呈現這個轉折;費用與城市名稱不是重點,原文也沒有提供。`),
    ],
  },
  {
    title: `摘要練習 5:Just Five Minutes`,
    text: `Almost everyone puts off unpleasant tasks from time to time. Psychologists explain that procrastination is not really about laziness or poor time management; it is about avoiding bad feelings. A difficult report makes us anxious, so we escape by watching videos, which feels good for the moment. Unfortunately, the task does not go away, and the guilt makes us feel even worse. One useful trick is to promise yourself to work for just five minutes. Once you have started, continuing is usually much easier than you expected.`,
    items: [
      s(`Which of the following is the best summary of the passage?`, [`People procrastinate to avoid negative feelings, and starting with just five minutes of work can help them overcome it.`, `Watching videos is the most common way for people to relax.`, `Procrastination is caused by laziness and poor time management.`, `A difficult report should always be finished in five minutes.`], `摘要要包含原因(逃避不舒服的感覺)與對策(先做五分鐘)。把原因說成懶惰與原文相反,其他選項則是細節或曲解。`),
      s(`Which of the following is the best paraphrase of "puts off unpleasant tasks"?`, [`delays doing things that one does not want to do`, `finishes difficult work as early as possible`, `refuses to do any work at all`, `asks other people to do boring jobs`], `改寫是用自己的話表達原意:put off 是「拖延」,unpleasant tasks 是「不想做的事」。`),
    ],
  },
];

export const englishPracticeSets = {
  'en-u2': build('en-u2', readingSkillSets),
  'en-u11': build('en-u11', clozeSets),
  'en-u16': build('en-u16', summarySets),
  'en-u17': build('en-u17', wordBankSets),
  'en-u18': build('en-u18', questionTypeSets),
  'en-u21': build('en-u21', mixedSets),
};
