// 英文科單元資料,依高一上~高三下六個學期分組(category 欄位)。
// note 為 null 或 quiz 為空陣列代表「內容製作中」。
//
// 筆記內容為統整多家出版社講義常見重點後,以原創文字重寫的條列筆記,不逐字照抄任何單一出版社的講義文字。
export default {
  id: 'english',
  units: [
    // ---- 高一上 ----
    {
      id: 'en-u1',
      title: '動詞時態總複習',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '現在完成式 (have/has + p.p.):強調過去動作對現在的影響或結果。',
              '過去完成式 (had + p.p.):表示「過去的過去」,常搭配 before/after/when 使用。',
              '現在進行式表未來:計畫好的近期未來動作,如 "I am leaving tomorrow."',
              '被動語態 (be + p.p.):強調動作承受者而非執行者。',
            ],
          },
          {
            heading: '時態比較',
            table: {
              headers: ['時態', '結構', '常見時間副詞'],
              rows: [
                ['現在完成式', 'have/has + p.p.', 'already, yet, since, for'],
                ['過去完成式', 'had + p.p.', 'before, after, by the time'],
                ['未來完成式', 'will have + p.p.', 'by + 未來時間'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'en-u1-q1',
          question: 'By the time she arrived, the meeting ___ already ___.',
          options: ['has / started', 'had / started', 'have / start', 'will / start'],
          answer: 1,
          explanation:
            '"By the time" 搭配過去式子句時,主要子句常用過去完成式,表示「在她到達之前,會議已經開始了」。',
        },
        {
          id: 'en-u1-q2',
          question: 'The window ___ by someone last night.',
          options: ['broke', 'was broken', 'has broken', 'breaks'],
          answer: 1,
          explanation: '窗戶是「被打破」,主詞是動作承受者,應使用被動語態 was broken。',
        },
      ],
    },
    {
      id: 'en-u2',
      title: '閱讀測驗答題技巧',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '先看題目再讀文章,帶著問題找答案,節省時間。',
              '注意文章的「主題句」,通常在段落開頭或結尾。',
              '推論題(inference)要根據文章線索合理推測,不能只憑常識亂猜。',
              '字彙題可用「上下文」猜測生字意思,不用每個字都認得。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u2-q1',
          question: '閱讀測驗中,若題目問 "What can be inferred from the passage?",代表這是哪一種題型?',
          options: ['主旨題', '細節題', '推論題', '字彙題'],
          answer: 2,
          explanation:
            '"infer" 是「推論」的意思,這類題目需要根據文章線索合理推斷,答案通常不會直接寫在文章裡。',
        },
        {
          id: 'en-u2-q2',
          question: '一篇文章的「主題句」(topic sentence)通常出現在段落的?',
          options: ['段落中間', '段落開頭或結尾', '一定在最後一句', '不會出現在文章中'],
          answer: 1,
          explanation: '主題句通常出現在段落開頭或結尾,能幫助讀者快速掌握該段落的核心重點。',
        },
        {
          id: 'en-u2-q3',
          question: '遇到閱讀測驗中不認識的單字時,較好的策略是?',
          options: ['立刻查字典中斷閱讀節奏', '利用上下文線索推測字義', '直接放棄整篇文章', '跳過整個題組不作答'],
          answer: 1,
          explanation: '善用上下文線索推測生字意思,能維持閱讀節奏,不必每個字都查字典。',
        },
      ],
    },
    {
      id: 'en-u3',
      title: '詞性與句子結構',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '八大詞性與五大句型',
            content: [
              '英文八大詞性:名詞、代名詞、動詞、形容詞、副詞、介系詞、連接詞、感嘆詞。',
              '句子基本結構:S(主詞)+ V(動詞)+ O(受詞)/ C(補語),五大句型是理解句子的基礎。',
              '形容詞修飾名詞,副詞修飾動詞、形容詞或另一個副詞,兩者容易混淆需特別注意。',
            ],
            table: {
              headers: ['句型', '結構', '範例'],
              rows: [
                ['第一句型', 'S + V', 'Birds fly.'],
                ['第二句型', 'S + V + C', 'She is a teacher.'],
                ['第三句型', 'S + V + O', 'I like music.'],
                ['第四句型', 'S + V + IO + DO', 'He gave me a gift.'],
                ['第五句型', 'S + V + O + OC', 'They made him happy.'],
              ],
            },
          },
          {
            heading: '常見文法誤區',
            content: [
              '「主詞動詞一致」:第三人稱單數現在式動詞要加 s/es,是最容易疏忽的錯誤之一。',
              '形容詞與副詞誤用:如 "She sings good" 應改為 "She sings well"(修飾動詞要用副詞)。',
              '及物動詞需要受詞,不及物動詞則不需要,查字典時要留意動詞是及物 (vt.) 或不及物 (vi.)。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u3-q1',
          question: '下列哪個句子的句型結構為「S + V + O」?',
          options: ['Birds fly.', 'I like music.', 'She is a teacher.', 'He gave me a gift.'],
          answer: 1,
          explanation: '"I like music." 主詞 I + 動詞 like + 受詞 music,屬於 S + V + O 的第三句型。',
        },
        {
          id: 'en-u3-q2',
          question: 'She sings ___ in the choir. 空格應填入?',
          options: ['good', 'well', 'nice', 'kind'],
          answer: 1,
          explanation: '修飾動詞 sings 應使用副詞 well,而非形容詞 good。',
        },
        {
          id: 'en-u3-q3',
          question: '第三人稱單數主詞在現在式句子中,動詞應如何變化?',
          options: ['動詞維持原形不變', '動詞字尾需加 s 或 es', '動詞一律改為過去式', '動詞前面要加 do'],
          answer: 1,
          explanation: '第三人稱單數主詞(he/she/it)搭配現在式動詞時,動詞字尾需加 s 或 es。',
        },
      ],
    },
    {
      id: 'en-u4',
      title: '常用連接詞與轉折語',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '對等連接詞與從屬連接詞',
            content: [
              '對等連接詞 for, and, nor, but, or, yet, so(縮寫 FANBOYS),連接兩個對等的字詞或子句。',
              '從屬連接詞(because, although, if, when, since)引導從屬子句,表示原因、讓步、條件、時間等關係。',
              '轉折連接副詞(however, therefore, moreover)用於連接兩個獨立句子,前面常用分號或句號,後面加逗號。',
            ],
            table: {
              headers: ['語意關係', '連接詞範例'],
              rows: [
                ['原因', 'because, since, as'],
                ['讓步(雖然)', 'although, though, even though'],
                ['條件', 'if, unless, as long as'],
                ['轉折', 'but, however, yet'],
              ],
            },
          },
          {
            heading: '常見用法辨析',
            content: [
              '"Although" 與 "however" 語意相近但用法不同:although 引導子句,不能與 but 同時使用;however 是副詞,連接兩個獨立句子。',
              '"Because" 引導原因子句,"because of" 後面接名詞或動名詞,兩者詞性不同不能混用。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u4-q1',
          question: '下列何者屬於對等連接詞(FANBOYS)?',
          options: ['although', 'but', 'because', 'if'],
          answer: 1,
          explanation: 'but 是 FANBOYS 對等連接詞之一,用來連接兩個對等的字詞或子句。',
        },
        {
          id: 'en-u4-q2',
          question: '___ it was raining, we still went hiking. 空格最適合填入?',
          options: ['However', 'Although', 'Because of', 'Therefore'],
          answer: 1,
          explanation: 'Although 引導從屬子句表示讓步(雖然下雨,我們仍然去健行),句構正確。',
        },
        {
          id: 'en-u4-q3',
          question: '下列句子文法正確的是?',
          options: [
            'Because of it was raining, we stayed home.',
            'Because it was raining, we stayed home.',
            'Because it rain, we stayed home.',
            'Because of raining, we stayed home.',
          ],
          answer: 1,
          explanation: 'because 引導完整子句(主詞+動詞),because of 後面則須接名詞或動名詞,不能直接接子句。',
        },
      ],
    },

    // ---- 高一下 ----
    {
      id: 'en-u5',
      title: '被動語態與假設語氣',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '被動語態',
            content: [
              '被動語態結構:be + p.p.,強調動作的承受者而非執行者。',
              '不同時態的被動語態:現在式 (is/are + p.p.)、過去式 (was/were + p.p.)、未來式 (will be + p.p.)。',
              '只有及物動詞(需要受詞的動詞)才能改寫成被動語態,不及物動詞沒有被動形式。',
            ],
          },
          {
            heading: '假設語氣',
            table: {
              headers: ['類型', '結構', '語意'],
              rows: [
                ['與現在事實相反', 'If + 過去式, 主詞 + would + 原形動詞', '假設現在不是事實的情況'],
                ['與過去事實相反', 'If + 過去完成式, 主詞 + would have + p.p.', '假設過去已經發生但相反的情況'],
                ['有可能發生', 'If + 現在式, 主詞 + will + 原形動詞', '未來有可能發生的條件'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'en-u5-q1',
          question: '下列句子何者為正確的被動語態?',
          options: ['The cake was eat by him.', 'The cake was eaten by him.', 'The cake is eating by him.', 'The cake eaten by him.'],
          answer: 1,
          explanation: '被動語態結構為 be + p.p.,正確形式為 "was eaten"。',
        },
        {
          id: 'en-u5-q2',
          question: 'If I ___ you, I would apologize first. 空格應填入?',
          options: ['am', 'were', 'was', 'will be'],
          answer: 1,
          explanation: '與現在事實相反的假設語氣,be 動詞一律用 were,不論主詞為何。',
        },
        {
          id: 'en-u5-q3',
          question: 'If it ___ tomorrow, we will cancel the trip. 空格應填入?',
          options: ['rains', 'rained', 'had rained', 'would rain'],
          answer: 0,
          explanation: '表示未來有可能發生的條件,if 子句使用現在式動詞。',
        },
      ],
    },
    {
      id: 'en-u6',
      title: '關係子句與分詞構句',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '關係子句',
            content: [
              '關係代名詞 who/whom/whose 指人,which 指物,that 可指人或物,用來連接並修飾先行詞。',
              '限定用法(無逗號)提供辨識先行詞必要的資訊;非限定用法(有逗號)則是補充說明,省略不影響句意。',
              '關係副詞 where(地方)、when(時間)、why(原因)可用來取代「介系詞+which」的結構。',
            ],
          },
          {
            heading: '分詞構句',
            content: [
              '分詞構句由子句簡化而來,若主詞相同且動詞為主動意義,改為現在分詞(V-ing)。',
              '若動詞為被動意義,則改為過去分詞(p.p.),常見於書面英文中使句子更簡潔。',
              '分詞構句常放句首表示「原因」或「時間」,例如:"Feeling tired, she went to bed early."',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u6-q1',
          question: 'The book ___ I borrowed from the library is very interesting. 空格應填入?',
          options: ['who', 'which', 'whom', 'where'],
          answer: 1,
          explanation: '先行詞 the book 為事物,關係代名詞應用 which(或 that)。',
        },
        {
          id: 'en-u6-q2',
          question: '___ tired, she decided to take a break. 空格應填入?',
          options: ['Feel', 'Felt', 'Feeling', 'To feel'],
          answer: 2,
          explanation: '分詞構句主詞相同且動詞為主動意義,改為現在分詞 Feeling,放句首表示原因。',
        },
        {
          id: 'en-u6-q3',
          question: '非限定用法的關係子句(有逗號)主要作用是?',
          options: ['提供辨識先行詞的必要資訊', '補充說明,省略也不影響句子基本意思', '一定要用 that 引導', '只能修飾人不能修飾事物'],
          answer: 1,
          explanation: '非限定用法的關係子句是額外補充說明,即使省略也不影響句子的基本意思。',
        },
      ],
    },
    {
      id: 'en-u7',
      title: '字彙記憶策略(字根字首字尾)',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '字首字根字尾概念',
            table: {
              headers: ['類型', '常見範例', '意義'],
              rows: [
                ['字首 (prefix)', 'un-, re-, dis-', '分別表示「否定」「再次」「不/相反」'],
                ['字根 (root)', 'spect (看), dict (說), port (搬運)', '決定單字的核心意義'],
                ['字尾 (suffix)', '-tion, -able, -ful', '決定詞性(名詞/形容詞等)'],
              ],
            },
          },
          {
            heading: '應用技巧',
            content: [
              '認識常見字首(un-, re-, pre-, dis-, mis-)可以快速判斷生字的大略意思與詞性方向。',
              '同一個字根可以組成一整個單字家族,例如 spect(看):inspect, respect, spectator。',
              '學測字彙量大,建議依「字首+字根」分類記憶,比單獨死背單字更有效率且能舉一反三。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u7-q1',
          question: '字首 "re-" 最常見的意思是?',
          options: ['否定', '再次/重複', '之前', '之後'],
          answer: 1,
          explanation: '"re-" 常表示「再次、重複」,如 rewrite(重寫)、return(返回)。',
        },
        {
          id: 'en-u7-q2',
          question: '下列哪個字根與「看」的意思有關?',
          options: ['port', 'dict', 'spect', 'ject'],
          answer: 2,
          explanation: '字根 "spect" 與「看」有關,如 inspect(檢視)、respect(尊重,原意含「回看」)。',
        },
        {
          id: 'en-u7-q3',
          question: '依字首字根記憶單字的最大好處是?',
          options: [
            '可以完全不用背單字',
            '能舉一反三,推測同字源單字的大略意思',
            '保證每個單字都能拼寫正確',
            '只對閱讀測驗有幫助,對其他題型無用',
          ],
          answer: 1,
          explanation: '掌握字首字根規律,能舉一反三推測同字源單字的大略意思,提升字彙學習效率。',
        },
      ],
    },
    {
      id: 'en-u8',
      title: '翻譯基礎與中英句構差異',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '中英句構主要差異',
            content: [
              '中文常省略主詞,英文句子則必須有明確主詞(祈使句除外)。',
              '英文重視「時態」變化,中文則多靠時間副詞(昨天、已經)表達時間概念。',
              '中文修飾語(形容詞子句)常放在名詞前面,英文的關係子句則放在被修飾的名詞後面。',
            ],
          },
          {
            heading: '翻譯技巧',
            content: [
              '中譯英時,先找出句子的主詞與主要動詞,再依英文語序調整其餘成分。',
              '避免逐字直翻,要依英文慣用語法與詞語搭配(collocation)調整,例如「做決定」是 make a decision 而非 do a decision。',
              '長句可先拆解成幾個意義單位,分別翻譯後再依英文邏輯連接,避免句子冗長混亂。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u8-q1',
          question: '中英句構最主要的差異之一是?',
          options: ['英文句子可以完全省略主詞', '英文句子除祈使句外必須有明確主詞', '中文一定要有主詞', '兩者語序完全相同'],
          answer: 1,
          explanation: '英文句子(祈使句除外)必須有明確主詞,中文則常依語境省略主詞。',
        },
        {
          id: 'en-u8-q2',
          question: '「做決定」正確的英文翻譯為?',
          options: ['do a decision', 'make a decision', 'take a decision', 'have a decision'],
          answer: 1,
          explanation: '「做決定」的標準英文搭配是 make a decision,屬於固定詞語搭配 (collocation)。',
        },
        {
          id: 'en-u8-q3',
          question: '翻譯長句時,較好的策略是?',
          options: ['逐字直翻不做任何調整', '先拆解成幾個意義單位,再依英文邏輯連接', '完全省略難翻譯的部分', '只翻譯句子的前半段'],
          answer: 1,
          explanation: '將長句拆解成幾個意義單位分別處理,再依英文邏輯連接,能避免句子冗長混亂。',
        },
      ],
    },

    // ---- 高二上 ----
    {
      id: 'en-u9',
      title: '比較級與最高級深化',
      category: '高二上',
      note: {
        sections: [
          {
            heading: '比較級最高級規則',
            table: {
              headers: ['類型', '規則', '範例'],
              rows: [
                ['單音節形容詞', '字尾加 -er / -est', 'tall → taller → tallest'],
                ['結尾為子音+y', '去 y 加 -ier / -iest', 'easy → easier → easiest'],
                ['多音節形容詞', '前面加 more / most', 'beautiful → more beautiful → most beautiful'],
                ['不規則變化', '需個別背誦', 'good → better → best; bad → worse → worst'],
              ],
            },
          },
          {
            heading: '進階比較句型',
            content: [
              '"the + 比較級, the + 比較級" 表示「越...越...」,例如 "The more you practice, the better you get."',
              '"as + 原級 + as" 表示「和...一樣」,否定則用 "not as/so + 原級 + as"。',
              '倍數表達:"twice as + 原級 + as" 表示「是...的兩倍」。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u9-q1',
          question: '"good" 的最高級為?',
          options: ['goodest', 'better', 'best', 'more good'],
          answer: 2,
          explanation: 'good 屬於不規則變化形容詞:good → better(比較級)→ best(最高級)。',
        },
        {
          id: 'en-u9-q2',
          question: 'The more you practice, ___ you get. 空格應填入?',
          options: ['the good', 'the better', 'the best', 'better'],
          answer: 1,
          explanation: '"the + 比較級, the + 比較級" 句型表示「越...越...」,此處應填 the better。',
        },
        {
          id: 'en-u9-q3',
          question: 'This bag is twice ___ expensive as that one. 空格應填入?',
          options: ['as', 'than', 'more', 'so'],
          answer: 0,
          explanation: '倍數表達句型為 "twice as + 原級 + as",表示「是...的兩倍」。',
        },
      ],
    },
    {
      id: 'en-u10',
      title: '不定詞與動名詞用法',
      category: '高二上',
      note: {
        sections: [
          {
            heading: '不定詞 vs 動名詞',
            content: [
              '不定詞 (to V) 常表示「未發生、將要做的動作」,如 decide to go, plan to study。',
              '動名詞 (V-ing) 常表示「已發生或習慣性的動作」,如 enjoy swimming, finish reading。',
              '部分動詞(如 remember, stop, forget)接不定詞與動名詞語意完全不同,需特別記憶。',
            ],
            table: {
              headers: ['動詞', '+ to V 語意', '+ V-ing 語意'],
              rows: [
                ['remember', '記得要做某事(未做)', '記得曾做過某事(已做)'],
                ['stop', '停下來去做另一件事', '停止正在做的事'],
                ['forget', '忘記要做某事', '忘記曾做過某事'],
              ],
            },
          },
          {
            heading: '常見固定搭配',
            content: [
              '介系詞後面一律接動名詞,例如 "interested in learning"、"good at swimming"。',
              '"It is + 形容詞 + to V" 是常見句型,例如 "It is important to review every day."',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u10-q1',
          question: 'I remember ___ the door before I left.(表示「我記得曾經關了門」)空格應填入?',
          options: ['to close', 'closing', 'close', 'closed'],
          answer: 1,
          explanation: '"remember + V-ing" 表示記得曾做過某事(已發生),此處指已經關過門。',
        },
        {
          id: 'en-u10-q2',
          question: '介系詞後面應接下列何種動詞形式?',
          options: ['原形動詞', '不定詞 to V', '動名詞 V-ing', '過去式'],
          answer: 2,
          explanation: '介系詞後面一律接動名詞(V-ing),例如 interested in learning。',
        },
        {
          id: 'en-u10-q3',
          question: 'Don’t forget ___ the lights before you leave.(提醒對方離開前記得關燈,動作尚未發生)空格應填入?',
          options: ['turning off', 'to turn off', 'turn off', 'turned off'],
          answer: 1,
          explanation: '"forget + to V" 表示忘記要做某事(尚未發生),此處是提醒對方別忘了去關燈。',
        },
      ],
    },
    {
      id: 'en-u11',
      title: '克漏字答題技巧',
      category: '高二上',
      note: {
        sections: [
          {
            heading: '解題步驟',
            content: [
              '先通讀全文掌握文章大意與語氣,不要一看到空格就急著選答案。',
              '克漏字測驗的重點是「文法」與「語意連貫」,包含詞性、時態、連接詞、代名詞指涉等。',
              '空格前後的線索(標點符號、時間副詞、代名詞)常是解題關鍵。',
            ],
          },
          {
            heading: '常見出題類型',
            content: [
              '詞性判斷題:依空格在句中的功能(名詞/動詞/形容詞/副詞)選出正確詞性的選項。',
              '連接詞/轉折語題:需理解前後句意的邏輯關係(因果、對比、遞進)才能選對。',
              '代名詞指涉題:確認代名詞指的是前文哪個名詞,注意單複數與性別的一致性。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u11-q1',
          question: '解克漏字測驗時,較有效率的第一步是?',
          options: ['直接從第一個空格開始逐一作答', '先通讀全文掌握大意與語氣', '只看空格前後各一個字', '先猜測文章主題再讀'],
          answer: 1,
          explanation: '先通讀全文掌握大意與語氣,再依上下文脈絡逐一判斷空格答案,較有效率也較準確。',
        },
        {
          id: 'en-u11-q2',
          question: '克漏字測驗主要測驗考生的什麼能力?',
          options: ['純粹的單字記憶量', '文法與語意連貫的判斷能力', '手寫速度', '朗讀發音的準確度'],
          answer: 1,
          explanation: '克漏字測驗的核心是測驗考生對文法結構與上下文語意連貫的判斷能力。',
        },
        {
          id: 'en-u11-q3',
          question: '遇到連接詞/轉折語的空格題,最需要判斷的是?',
          options: ['空格前後句子的字數是否相等', '前後句意的邏輯關係(因果/對比/遞進)', '句子是否押韻', '空格前面是否有逗號'],
          answer: 1,
          explanation: '連接詞題須判斷前後句意的邏輯關係,才能選出語意連貫的正確答案。',
        },
      ],
    },
    {
      id: 'en-u12',
      title: '主題式閱讀:自然科學類',
      category: '高二上',
      note: {
        sections: [
          {
            heading: '自然科學類文章特色',
            content: [
              '常見主題:氣候變遷、物種演化、醫學新知、太空探索等,用詞偏向客觀說明。',
              '文章結構常見「現象描述 → 原因分析 → 影響/解決方案」的邏輯順序。',
              '常出現數據、圖表輔助說明,閱讀時要能連結文字敘述與數據的對應關係。',
            ],
          },
          {
            heading: '常見字彙與答題技巧',
            content: [
              '常見科學類字彙:species(物種)、evidence(證據)、significant(顯著的)、impact(影響)。',
              '遇到專有名詞或術語,通常文章會在首次出現時附上定義或同位語說明,不需要死背專業字彙。',
              '因果關係題常考,注意 due to, result in, lead to, contribute to 等表示因果的片語。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u12-q1',
          question: '自然科學類文章的常見結構順序為?',
          options: ['結論→原因→現象', '現象描述→原因分析→影響或解決方案', '完全沒有固定結構', '一定先講解決方案再講原因'],
          answer: 1,
          explanation: '自然科學類文章常依「現象描述→原因分析→影響或解決方案」的邏輯順序展開。',
        },
        {
          id: 'en-u12-q2',
          question: '下列哪個片語表示「導致、造成」的因果關係?',
          options: ['in spite of', 'result in', 'on the other hand', 'as opposed to'],
          answer: 1,
          explanation: '"result in" 表示「導致、造成」的因果關係,是科學類文章常見的因果片語。',
        },
        {
          id: 'en-u12-q3',
          question: '閱讀科學類文章遇到專有名詞時,較有效的策略是?',
          options: [
            '一定要事先背過該領域所有專有名詞',
            '留意文中是否有定義或同位語說明該詞意思',
            '直接跳過整篇文章',
            '只看文章標題就能作答',
          ],
          answer: 1,
          explanation: '科學類文章通常會在專有名詞首次出現時附上定義或同位語說明,不需要事先背過所有術語。',
        },
      ],
    },

    // ---- 高二下 ----
    {
      id: 'en-u13',
      title: '名詞子句與間接問句',
      category: '高二下',
      note: {
        sections: [
          {
            heading: '名詞子句',
            content: [
              '名詞子句可作主詞、受詞或補語,常由 that, whether/if, 疑問詞(what, who, how...)引導。',
              '"That he passed the exam surprised everyone."(that 子句作主詞)',
              '"I don’t know whether/if she will come."(whether/if 引導的子句,表示「是否」)',
            ],
          },
          {
            heading: '間接問句',
            content: [
              '間接問句是把問句包在另一個句子裡,語序需改為「疑問詞 + 主詞 + 動詞」的直述句語序,不可用問句倒裝。',
              '錯誤範例:"I want to know what is your name."(誤用問句倒裝)',
              '正確範例:"I want to know what your name is."',
              '若原問句沒有疑問詞,間接問句需用 whether 或 if 引導。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u13-q1',
          question: '下列何者是正確的間接問句?',
          options: [
            'Can you tell me where is the station?',
            'Can you tell me where the station is?',
            'Can you tell me where the station?',
            'Can you tell me is where the station?',
          ],
          answer: 1,
          explanation: '間接問句需改為「疑問詞+主詞+動詞」的直述句語序,不可用問句倒裝。',
        },
        {
          id: 'en-u13-q2',
          question: 'I don’t know ___ she will attend the party.(表示「是否」)空格應填入?',
          options: ['that', 'whether', 'which', 'what'],
          answer: 1,
          explanation: '表示「是否」應使用 whether(或 if)引導名詞子句。',
        },
        {
          id: 'en-u13-q3',
          question: '名詞子句在句子中不能擔任下列哪種角色?',
          options: ['主詞', '受詞', '補語', '副詞修飾語'],
          answer: 3,
          explanation: '名詞子句可作主詞、受詞或補語,但不能作副詞修飾語,那是副詞子句的功能。',
        },
      ],
    },
    {
      id: 'en-u14',
      title: '倒裝句與強調句',
      category: '高二下',
      note: {
        sections: [
          {
            heading: '倒裝句',
            content: [
              '否定副詞(never, seldom, hardly, not only)放句首時,主詞動詞需倒裝。',
              '範例:"Never have I seen such a beautiful view."(否定詞 never 放句首,助動詞 have 提前)',
              '"Not only...but also..." 句型中,not only 放句首時前半句也需要倒裝。',
            ],
          },
          {
            heading: '強調句',
            content: [
              '強調句型:"It is/was + 被強調部分 + that/who + 其餘部分",用來強調句子中的特定成分。',
              '範例:"It was Tom who broke the window."(強調 Tom 是打破窗戶的人)',
              '判斷是否為強調句,可將 "It is/was...that" 拿掉,若句子仍完整通順,就是強調句。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u14-q1',
          question: '___ have I seen such a beautiful view.(空格後主詞動詞需倒裝)空格應填入?',
          options: ['Always', 'Never', 'Sometimes', 'Often'],
          answer: 1,
          explanation: '否定副詞 Never 放句首時,主詞動詞需倒裝,句意為「我從未見過如此美麗的景色」。',
        },
        {
          id: 'en-u14-q2',
          question: '下列哪一句是正確的倒裝句?',
          options: [
            'Never I have seen such a movie.',
            'Never have I seen such a movie.',
            'I never have seen such a movie.',
            'Have never I seen such a movie.',
          ],
          answer: 1,
          explanation: '否定詞 Never 放句首,助動詞 have 需提前到主詞之前,形成倒裝結構。',
        },
        {
          id: 'en-u14-q3',
          question: '"It was Tom who broke the window." 這句話主要在強調?',
          options: ['打破窗戶這個動作本身', 'Tom 是打破窗戶的人', '窗戶被打破的時間', '這句話沒有強調任何部分'],
          answer: 1,
          explanation: '強調句型 "It was...who..." 用來強調 Tom 是打破窗戶的人。',
        },
      ],
    },
    {
      id: 'en-u15',
      title: '主題式閱讀:社會人文類',
      category: '高二下',
      note: {
        sections: [
          {
            heading: '社會人文類文章特色',
            content: [
              '常見主題:文化差異、教育議題、心理學現象、歷史事件影響等,常帶有作者觀點或立場。',
              '文章可能呈現「正反兩方論點」,閱讀時要能分辨哪些是事實(fact)、哪些是意見(opinion)。',
              '常考「作者態度題」,需從用詞的褒貶、語氣強弱推斷作者的立場。',
            ],
          },
          {
            heading: '答題技巧',
            content: [
              '立場對比題:整理文章中提到的不同觀點,分別歸納各自的理由與依據。',
              '主旨題:社會人文類文章的主旨通常在首段或末段明確點出,注意段落間的邏輯關係。',
              '若文章夾雜引言或他人觀點,要分辨這是作者本人的看法,還是作者引用他人的說法。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u15-q1',
          question: '閱讀社會人文類文章時,特別需要分辨的是?',
          options: ['文章的字數多寡', '事實(fact)與意見(opinion)的差異', '文章是否有押韻', '文章的出版年份'],
          answer: 1,
          explanation: '社會人文類文章常夾帶作者立場,分辨事實與意見有助於準確理解文章內容。',
        },
        {
          id: 'en-u15-q2',
          question: '判斷作者態度最主要應觀察?',
          options: ['文章的段落數量', '用詞的褒貶與語氣強弱', '文章使用的標點符號數量', '文章篇幅長短'],
          answer: 1,
          explanation: '作者態度主要透過用詞的褒貶色彩與語氣強弱來呈現,需仔細留意。',
        },
        {
          id: 'en-u15-q3',
          question: '文章中引用他人觀點時,讀者需要特別留意的是?',
          options: [
            '這一定就是作者本人的立場',
            '分辨這是作者引用他人的說法,不一定代表作者本人立場',
            '引用的內容都可以直接忽略',
            '引用內容一定與主旨無關',
          ],
          answer: 1,
          explanation: '文章引用他人觀點不代表就是作者本人立場,需分辨清楚再判斷作者真正的態度。',
        },
      ],
    },
    {
      id: 'en-u16',
      title: '摘要寫作技巧',
      category: '高二下',
      note: {
        sections: [
          {
            heading: '摘要寫作原則',
            content: [
              '摘要需濃縮文章核心重點,省略細節例子與重複敘述,只保留關鍵資訊。',
              '建議先找出每段的主題句,再用自己的話統整串連成一段通順的摘要。',
              '摘要應保持客觀,不加入自己的意見或評論,忠實反映原文重點。',
            ],
          },
          {
            heading: '常見扣分原因',
            content: [
              '摘要字數過長,包含過多細節或例子而非核心重點。',
              '直接照抄原文句子而非用自己的話重新組織,容易失去摘要的意義。',
              '遺漏文章的關鍵轉折或結論,導致摘要偏離原文主旨。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u16-q1',
          question: '摘要寫作的核心原則是?',
          options: ['盡量抄寫原文句子以確保正確', '濃縮核心重點,省略細節例子', '加入自己的意見與評論', '字數越長越好'],
          answer: 1,
          explanation: '摘要應濃縮文章核心重點,省略細節例子與重複敘述,保持精簡客觀。',
        },
        {
          id: 'en-u16-q2',
          question: '下列何者是摘要寫作常見的扣分原因?',
          options: ['句子通順連貫', '直接照抄原文而非用自己的話重新組織', '保持客觀不加入個人意見', '涵蓋文章的核心轉折'],
          answer: 1,
          explanation: '直接照抄原文而非用自己的話重新組織,是摘要寫作常見的扣分原因。',
        },
        {
          id: 'en-u16-q3',
          question: '寫摘要前,較有效的第一步是?',
          options: ['直接開始寫,邊寫邊讀原文', '先找出每段的主題句,掌握文章結構', '先數清楚原文的總字數', '先寫結論再讀文章'],
          answer: 1,
          explanation: '先找出每段主題句掌握文章結構,再統整成摘要,能讓摘要更完整且有邏輯。',
        },
      ],
    },

    // ---- 高三上 ----
    {
      id: 'en-u17',
      title: '學測文意選填技巧',
      category: '高三上',
      note: {
        sections: [
          {
            heading: '文意選填特色',
            content: [
              '文意選填(克漏字進階版)提供選項字彙庫,需依詞性、語意、文法從中選出最適合的答案。',
              '選項字彙通常涵蓋不同詞性(名詞、動詞、形容詞、副詞),須先判斷空格在句中需要哪種詞性。',
              '答題順序建議:先完成有把握的空格,已用過的選項刪除,縮小其餘選項的可能範圍。',
            ],
          },
          {
            heading: '解題步驟',
            content: [
              '通讀全文掌握文章主題與語氣,再回頭檢視每個空格前後的文法線索。',
              '動詞空格需注意主詞單複數與時態是否與全文一致。',
              '名詞空格需判斷是否需要加冠詞(a/an/the)或改為複數形式,並留意選項字彙原本的詞性是否需要變化。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u17-q1',
          question: '文意選填與一般克漏字最大的不同在於?',
          options: ['文意選填不提供任何選項', '文意選填提供一個字彙庫,需從中選出最適合的答案', '文意選填只考單字拼寫', '文意選填沒有文法要求'],
          answer: 1,
          explanation: '文意選填提供一個共用的字彙庫,考生須依詞性、語意、文法從中選出最適合每個空格的答案。',
        },
        {
          id: 'en-u17-q2',
          question: '解文意選填時,建議的作答順序是?',
          options: [
            '一律從第一個空格依序作答到最後',
            '先完成有把握的空格,逐步刪除已用選項縮小範圍',
            '全部空格用猜的最快',
            '先看選項字彙庫的第一個字填入第一個空格',
          ],
          answer: 1,
          explanation: '先完成有把握的空格並刪除已用選項,能逐步縮小剩餘空格的選項範圍,提高整體正確率。',
        },
        {
          id: 'en-u17-q3',
          question: '動詞類的空格,作答時特別需要注意什麼?',
          options: ['字彙庫排列的順序', '主詞單複數與時態是否與全文一致', '選項的字母數量', '選項是否以母音開頭'],
          answer: 1,
          explanation: '動詞空格須確認主詞單複數與時態是否與全文語境一致,才能選出正確答案。',
        },
      ],
    },
    {
      id: 'en-u18',
      title: '學測閱讀測驗題型總整理',
      category: '高三上',
      note: {
        sections: [
          {
            heading: '學測閱讀題型分類',
            table: {
              headers: ['題型', '特徵', '解題重點'],
              rows: [
                ['主旨題', '問文章主要在講什麼', '統整全文反覆出現的重點,而非單一細節'],
                ['細節題', '問文中明確提到的資訊', '回原文找關鍵字定位,答案通常可直接對應'],
                ['推論題', '問文章沒有明說但可推測的內容', '依文章線索合理推斷,避免過度延伸'],
                ['字義題', '問特定字詞在文中的意思', '依上下文語境判斷,不能只靠字面常見意思'],
              ],
            },
          },
          {
            heading: '應試策略',
            content: [
              '學測閱讀測驗字數多、時間有限,建議先略讀掌握文章結構,再依題目回頭細讀。',
              '「最不可能」「NOT mentioned」這類否定問法容易看錯,作答時要放慢速度確認題意。',
              '多篇文章比較題,建議先個別掌握各篇重點,再依題目要求進行比較整合。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u18-q1',
          question: '「問文章沒有明說但可以合理推測的內容」屬於下列哪一種題型?',
          options: ['主旨題', '細節題', '推論題', '字義題'],
          answer: 2,
          explanation: '推論題需依文章線索合理推斷文章沒有明說的內容,是學測閱讀常見題型之一。',
        },
        {
          id: 'en-u18-q2',
          question: '遇到 "which of the following is NOT mentioned" 這類否定問法時,應該?',
          options: ['直接跳過不作答', '放慢速度,仔細確認題意再逐一核對選項', '選第一個看到的選項', '這類題目不會出現在學測中'],
          answer: 1,
          explanation: '否定問法容易誤讀,應放慢速度仔細確認題意,再逐一核對每個選項是否在文中提及。',
        },
        {
          id: 'en-u18-q3',
          question: '字義題作答時,較正確的判斷依據是?',
          options: ['只憑該字最常見的字面意思', '依文章上下文語境判斷該字在此處的意思', '查字典的第一個解釋', '忽略上下文直接猜測'],
          answer: 1,
          explanation: '同一個字在不同語境可能有不同意思,應依文章上下文語境判斷該字在此處的正確意思。',
        },
      ],
    },
    {
      id: 'en-u19',
      title: '翻譯句型總複習',
      category: '高三上',
      note: {
        sections: [
          {
            heading: '常考句型結構',
            table: {
              headers: ['句型', '結構', '範例'],
              rows: [
                ['原因', 'because/since/as + 子句', 'Since it was raining, we stayed home.'],
                ['結果', 'so...that / such...that', 'It was so hot that we couldn’t sleep.'],
                ['讓步', 'although/even though + 子句', 'Although he was tired, he kept working.'],
                ['比較', 'the 比較級, the 比較級', 'The harder you work, the luckier you get.'],
              ],
            },
          },
          {
            heading: '中譯英常見錯誤',
            content: [
              '遺漏主詞或動詞:中文常省略主詞,翻成英文時務必補上明確主詞。',
              '時態誤用:翻譯時要依句意判斷正確時態,而非直接套用中文的時間副詞位置。',
              '詞語搭配錯誤:避免逐字直翻,要注意英文固定搭配(collocation),例如「拍照」建議用 take a photo。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u19-q1',
          question: '「他這麼累以至於馬上就睡著了」最適合用下列哪種句型翻譯?',
          options: ['although...though', 'so...that', 'as...as', 'because...so'],
          answer: 1,
          explanation: '"so...that" 句型表示「如此...以至於...」,適合翻譯這類因果程度句。',
        },
        {
          id: 'en-u19-q2',
          question: '中譯英時最容易疏忽的錯誤是?',
          options: ['句子太短', '遺漏主詞或動詞,不符合英文語法要求', '標點符號用太多', '單字全部使用大寫'],
          answer: 1,
          explanation: '中文常省略主詞,翻譯成英文時容易疏忽補上明確主詞或動詞,導致句子不合語法。',
        },
        {
          id: 'en-u19-q3',
          question: '「拍照」較標準的英文翻譯為?',
          options: ['shoot a photo', 'take a photo', 'do a photo', 'make a photo'],
          answer: 1,
          explanation: '「拍照」標準英文搭配是 take a photo,屬於固定詞語搭配。',
        },
      ],
    },
    {
      id: 'en-u20',
      title: '英文作文架構(起承轉合)',
      category: '高三上',
      note: {
        sections: [
          {
            heading: '學測英文作文結構',
            content: [
              '基本三段式結構:第一段點出主題(引言)、第二段具體說明或舉例(本論)、第三段總結呼應(結論)。',
              '開頭段落應直接破題,避免用過於籠統空泛的句子開場,例如避免只寫 "Nowadays, technology is important."',
              '每段建議有一個主題句(topic sentence),其餘句子圍繞主題句展開,保持段落焦點集中。',
            ],
          },
          {
            heading: '評分重點',
            content: [
              '內容(Content):是否切題、論點是否具體、有無適當例子佐證。',
              '組織(Organization):段落安排是否合理、句子間的連貫性(使用轉折詞銜接)。',
              '文法句構與字彙(Language use):文法錯誤多寡、字彙是否豐富恰當,避免重複使用簡單字詞。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u20-q1',
          question: '學測英文作文的基本段落結構為?',
          options: ['只需要一段即可', '引言→本論→結論的三段式結構', '五段式學術論文結構', '沒有固定結構要求'],
          answer: 1,
          explanation: '學測英文作文常見為引言、本論、結論的三段式結構,層次清楚易於閱卷。',
        },
        {
          id: 'en-u20-q2',
          question: '每個段落中,用來點出該段核心重點的句子稱為?',
          options: ['結論句', '主題句(topic sentence)', '轉折句', '引言句'],
          answer: 1,
          explanation: '主題句(topic sentence)點出該段的核心重點,其餘句子應圍繞主題句展開。',
        },
        {
          id: 'en-u20-q3',
          question: '學測英文作文評分,下列何者不屬於主要評分面向?',
          options: ['內容是否切題具體', '段落組織與連貫性', '文法句構與字彙豐富度', '使用幾種不同顏色的筆'],
          answer: 3,
          explanation: '評分主要看內容、組織與語言使用三大面向,與使用筆的顏色無關。',
        },
      ],
    },

    // ---- 高三下 ----
    {
      id: 'en-u21',
      title: '混合題型模擬練習',
      category: '高三下',
      note: {
        sections: [
          {
            heading: '混合題型應試策略',
            content: [
              '學測英文混合題常結合單選、多選、簡答等題型,需仔細閱讀題目要求作答方式。',
              '多選題「全對才給分」或「部分給分」規則需先確認清楚,避免因誤解規則而失分。',
              '簡答題作答須使用完整句子(除非題目特別說明),並直接回應題目所問的重點。',
            ],
          },
          {
            heading: '時間分配建議',
            content: [
              '建議先完成單選題部分(相對省時),再處理需要較長時間閱讀分析的混合題組。',
              '多篇文本綜合題,建議先分別略讀掌握各篇大意,再依題目要求交叉比對作答。',
              '若遇到生字太多的題組,先靠上下文與詞性推測大意,不要因為單一生字而卡住整體作答節奏。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u21-q1',
          question: '面對混合題型測驗,較有效率的時間分配策略是?',
          options: [
            '所有題目依序作答,不特別安排順序',
            '先完成相對省時的單選題,再處理較長的混合題組',
            '只做簡答題,跳過選擇題',
            '每一題都花同樣多的時間',
          ],
          answer: 1,
          explanation: '先完成相對省時的單選題,再把較多時間留給需要細讀分析的混合題組,效率較高。',
        },
        {
          id: 'en-u21-q2',
          question: '簡答題作答時,除非題目特別說明,通常建議?',
          options: ['只寫關鍵字不用完整句子', '使用完整句子直接回應題目所問的重點', '盡量寫得越長越好', '用中文輔助說明'],
          answer: 1,
          explanation: '簡答題除非題目特別說明,通常應使用完整句子直接回應題目所問的重點。',
        },
        {
          id: 'en-u21-q3',
          question: '遇到題組中出現大量不熟悉的生字時,較好的因應方式是?',
          options: [
            '整組直接放棄不作答',
            '靠上下文與詞性推測大意,不因單一生字卡住節奏',
            '花大量時間逐字查證每個生字',
            '隨意亂猜所有題目',
          ],
          answer: 1,
          explanation: '善用上下文與詞性推測大意,能維持整體作答節奏,不必被單一生字卡住。',
        },
      ],
    },
    {
      id: 'en-u22',
      title: '歷屆試題主題字彙整理',
      category: '高三下',
      note: {
        sections: [
          {
            heading: '常考主題字彙分類',
            table: {
              headers: ['主題', '常見字彙範例'],
              rows: [
                ['環境與氣候', 'climate, sustainable, pollution, renewable'],
                ['科技與生活', 'artificial intelligence, innovation, digital, convenient'],
                ['健康與醫療', 'symptom, treatment, mental health, nutrition'],
                ['教育與職涯', 'curriculum, skill, career, motivation'],
              ],
            },
          },
          {
            heading: '複習建議',
            content: [
              '依主題分類整理字彙,比單純按字母順序背誦更容易連結記憶與實際閱讀情境。',
              '歷屆試題中同一主題常反覆出現相近字彙,整理歷屆考古題字彙表是高效的複習方式。',
              '除了背誦字義,也要留意字彙的詞性變化(如 educate → education → educational),學測常考詞性變化題。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u22-q1',
          question: '依主題分類整理字彙的好處是?',
          options: [
            '比較好看,沒有實際幫助',
            '更容易連結記憶與實際閱讀情境,提升複習效率',
            '可以完全不用理解字義',
            '只對聽力測驗有幫助',
          ],
          answer: 1,
          explanation: '依主題分類整理字彙,能更容易連結記憶與實際閱讀情境,提升複習效率。',
        },
        {
          id: 'en-u22-q2',
          question: '"educate" 的名詞形式為?',
          options: ['educated', 'education', 'educating', 'educative'],
          answer: 1,
          explanation: '"educate"(動詞)的名詞形式是 "education"(教育)。',
        },
        {
          id: 'en-u22-q3',
          question: '下列何者屬於「科技與生活」主題常見字彙?',
          options: ['symptom', 'curriculum', 'innovation', 'sustainable'],
          answer: 2,
          explanation: '"innovation"(創新)屬於科技與生活主題的常見字彙。',
        },
      ],
    },
    {
      id: 'en-u23',
      title: '作文範文分析',
      category: '高三下',
      note: {
        sections: [
          {
            heading: '高分作文共同特徵',
            content: [
              '破題清楚明確,第一段就能讓閱卷者明白文章要討論的主題與立場。',
              '舉例具體生動,用個人經驗或明確例子取代空泛的通則敘述,更容易說服讀者。',
              '用字精準且富有變化,避免同一個字詞在文章中反覆出現,適當使用同義詞替換。',
            ],
          },
          {
            heading: '常見扣分原因分析',
            content: [
              '文法錯誤過多,尤其是主詞動詞一致、時態誤用等基本錯誤,會直接影響語言使用面向的分數。',
              '段落安排鬆散,缺乏轉折詞銜接,讀起來邏輯跳躍、不連貫。',
              '內容空泛籠統,通篇只有抽象敘述而缺乏具體例子支撐論點。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u23-q1',
          question: '高分作文的共同特徵不包括下列何者?',
          options: ['破題清楚明確', '舉例具體生動', '通篇使用艱澀少見的單字以展現字彙量', '用字精準且富有變化'],
          answer: 2,
          explanation: '高分作文重視用字精準、字彙有變化,而非刻意堆砌艱澀少見的單字。',
        },
        {
          id: 'en-u23-q2',
          question: '作文中同一個字詞反覆出現,較好的改善方式是?',
          options: ['保持不變,重複使用最安全', '適當使用同義詞替換,增加用字變化', '改用中文替代', '刪除該句子'],
          answer: 1,
          explanation: '適當使用同義詞替換能增加用字變化,展現字彙運用能力,是高分作文常見特徵。',
        },
        {
          id: 'en-u23-q3',
          question: '下列何者是作文常見的扣分原因?',
          options: ['段落安排合理有轉折詞銜接', '內容空泛籠統,缺乏具體例子支撐', '文法正確且時態一致', '破題清楚明確'],
          answer: 1,
          explanation: '內容空泛籠統、缺乏具體例子支撐論點,是作文常見的扣分原因。',
        },
      ],
    },
    {
      id: 'en-u24',
      title: '考前總複習與答題節奏',
      category: '高三下',
      note: {
        sections: [
          {
            heading: '考前複習重點',
            content: [
              '統整歷屆試題中常考的文法句型與主題字彙,建立自己的複習清單而非重新讀完整本課本。',
              '限時模擬完整試題,訓練實際考試的時間分配與答題節奏,避免考場上因時間不足而慌亂。',
              '檢視自己的錯題類型(文法/字彙/閱讀理解),針對弱項做最後加強。',
            ],
          },
          {
            heading: '答題節奏建議',
            content: [
              '建議先完成單選題(文法、字彙、克漏字),再處理閱讀測驗與寫作,依個人強弱項調整順序。',
              '每一大題設定時間上限,避免在單一題目或題組耗費過多時間影響後面作答。',
              '寫作測驗建議預留至少 5-10 分鐘構思大綱,避免下筆後中途改變架構導致文章混亂。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'en-u24-q1',
          question: '考前複習建議採取的方式是?',
          options: ['重新讀完整本課本', '統整歷屆試題常考重點,建立針對性複習清單', '只複習自己已經很熟的部分', '完全不複習直接上考場'],
          answer: 1,
          explanation: '考前建議統整歷屆試題常考重點,建立針對性複習清單,而非重新讀完整本課本。',
        },
        {
          id: 'en-u24-q2',
          question: '限時模擬完整試題的主要目的是?',
          options: ['增加做題數量而已', '訓練實際考試的時間分配與答題節奏', '純粹用來評分,沒有其他作用', '只是老師的要求,沒有實質幫助'],
          answer: 1,
          explanation: '限時模擬完整試題能訓練實際考試的時間分配與答題節奏,避免考場上因時間不足而慌亂。',
        },
        {
          id: 'en-u24-q3',
          question: '寫作測驗前建議預留時間做什麼?',
          options: ['直接下筆不用構思', '預留至少 5-10 分鐘構思大綱', '先寫結論再想開頭', '用中文先寫過一遍再翻譯'],
          answer: 1,
          explanation: '寫作前預留 5-10 分鐘構思大綱,能避免下筆後中途改變架構導致文章混亂。',
        },
      ],
    },
  ],
};
