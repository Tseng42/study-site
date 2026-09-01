// 數學科單元資料,依高一上~高二下分組,高三主要為總複習(category 欄位)。
// note 為 null 或 quiz 為空陣列代表「內容製作中」。
//
// 筆記內容為統整多家出版社講義常見重點後,以原創文字重寫的條列筆記,不逐字照抄任何單一出版社的講義文字。
export default {
  id: 'math',
  units: [
    // ---- 高一上 ----
    {
      id: 'math-u1',
      title: '二次函數與圖形',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '標準式:y = a(x-h)² + k,頂點座標為 (h, k)。',
              'a > 0 開口向上(有最小值);a < 0 開口向下(有最大值)。',
              '判別式 b² - 4ac:>0 有兩相異實根,=0 有重根,<0 無實根。',
              '一般式 y = ax² + bx + c 可透過配方法轉換成標準式求頂點。',
            ],
          },
          {
            heading: '常用公式',
            table: {
              headers: ['名稱', '公式'],
              rows: [
                ['頂點 x 座標', 'x = -b / (2a)'],
                ['判別式', 'D = b² - 4ac'],
                ['求根公式', 'x = (-b ± √D) / (2a)'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'math-u1-q1',
          question: '拋物線 y = 2(x-3)² + 5 的頂點座標為何?',
          options: ['(3, 5)', '(-3, 5)', '(3, -5)', '(5, 3)'],
          answer: 0,
          explanation: '標準式 y = a(x-h)² + k 的頂點為 (h, k),此處 h=3, k=5,故頂點為 (3, 5)。',
        },
        {
          id: 'math-u1-q2',
          question: '方程式 x² - 4x + 4 = 0 的判別式 D 為多少?',
          options: ['0', '16', '-16', '4'],
          answer: 0,
          explanation: 'D = b² - 4ac = (-4)² - 4×1×4 = 16 - 16 = 0,代表此方程式有重根。',
        },
        {
          id: 'math-u1-q3',
          type: 'numeric',
          question: '拋物線 y = (x-3)² + 5 的頂點 y 座標為多少?',
          answerText: '5',
          explanation: '標準式 y=a(x-h)²+k 的頂點為 (h,k),此處 k=5,頂點 y 座標為 5。',
        },
        {
          id: 'math-u1-q4',
          type: 'multi',
          question: '關於拋物線 y = -2(x-1)² + 3,下列敘述哪些正確?(多選)',
          options: ['開口向上', '開口向下', '有最大值 3', '有最小值 3', '對稱軸為 x = 1'],
          answers: [1, 2, 4],
          explanation: 'a=-2<0 開口向下,頂點 (1,3) 為最高點故有最大值 3(沒有最小值),對稱軸為 x=1。',
        },
        {
          id: 'math-u1-q5',
          question: '拋物線 y = 3(x-2)² + 7 的頂點座標為?',
          options: ['(2, 7)', '(-2, 7)', '(2, -7)', '(7, 2)'],
          answer: 0,
          explanation: '標準式頂點為 (h,k),此處 h=2, k=7。',
        },
        {
          id: 'math-u1-q6',
          question: '拋物線 y = -4(x+1)² + 2 的頂點座標為?',
          options: ['(1, 2)', '(-1, 2)', '(-1, -2)', '(2, -1)'],
          answer: 1,
          explanation: 'x+1 可寫成 x-(-1),故 h=-1, k=2,頂點為 (-1, 2)。',
        },
        {
          id: 'math-u1-q7',
          question: '拋物線 y = (x-5)² - 3 的頂點座標為?',
          options: ['(5, -3)', '(-5, 3)', '(5, 3)', '(-5, -3)'],
          answer: 0,
          explanation: '標準式頂點為 (h,k),此處 h=5, k=-3。',
        },
        {
          id: 'math-u1-q8',
          question: '拋物線 y = -2x² + 9 的頂點座標為?',
          options: ['(0, 9)', '(9, 0)', '(0, -9)', '(-2, 9)'],
          answer: 0,
          explanation: '可視為 y=-2(x-0)²+9,頂點為 (0, 9)。',
        },
        {
          id: 'math-u1-q9',
          question: '拋物線 y = 5(x+3)² - 1 的頂點座標為?',
          options: ['(3, -1)', '(-3, -1)', '(-3, 1)', '(1, -3)'],
          answer: 1,
          explanation: 'x+3 可寫成 x-(-3),故頂點為 (-3, -1)。',
        },
        {
          id: 'math-u1-q10',
          question: '拋物線 y = -(x-4)² + 6 的頂點座標為?',
          options: ['(4, 6)', '(-4, 6)', '(4, -6)', '(6, 4)'],
          answer: 0,
          explanation: '標準式頂點為 (h,k),此處 h=4, k=6。',
        },
        {
          id: 'math-u1-q11',
          question: '拋物線 y = x² - 6x + 5 配方後為 (x-3)² - 4,頂點座標為?',
          options: ['(3, -4)', '(-3, 4)', '(3, 4)', '(6, 5)'],
          answer: 0,
          explanation: '配方後標準式為 (x-3)²-4,頂點為 (3, -4)。',
        },
        {
          id: 'math-u1-q12',
          question: '拋物線 y = x² + 4x + 7 的頂點座標為?',
          options: ['(2, 3)', '(-2, 3)', '(-2, -3)', '(4, 7)'],
          answer: 1,
          explanation: '配方:x²+4x+7=(x+2)²-4+7=(x+2)²+3,頂點為 (-2, 3)。',
        },
        {
          id: 'math-u1-q13',
          question: '拋物線 y = 2x² - 8x + 3 的頂點座標為?',
          options: ['(2, -5)', '(-2, 5)', '(2, 5)', '(4, 3)'],
          answer: 0,
          explanation: '配方:2x²-8x+3=2(x²-4x)+3=2(x-2)²-8+3=2(x-2)²-5,頂點為 (2, -5)。',
        },
        {
          id: 'math-u1-q14',
          question: '拋物線 y = -x² + 2x + 4 的頂點座標為?',
          options: ['(1, 5)', '(-1, 5)', '(1, -5)', '(2, 4)'],
          answer: 0,
          explanation: '配方:-x²+2x+4=-(x²-2x)+4=-(x-1)²+1+4=-(x-1)²+5,頂點為 (1, 5)。',
        },
        {
          id: 'math-u1-q15',
          question: '拋物線 y = x² - 2x - 3 的頂點座標為?',
          options: ['(1, -4)', '(-1, 4)', '(1, 4)', '(2, -3)'],
          answer: 0,
          explanation: '配方:x²-2x-3=(x-1)²-1-3=(x-1)²-4,頂點為 (1, -4)。',
        },
        {
          id: 'math-u1-q16',
          question: '拋物線 y = -5(x-1)² + 3 的開口方向與極值為?',
          options: ['開口向上,最小值 3', '開口向下,最大值 3', '開口向上,最大值 3', '開口向下,最小值 3'],
          answer: 1,
          explanation: 'a=-5<0 開口向下,頂點為最高點,故有最大值 3。',
        },
        {
          id: 'math-u1-q17',
          question: '拋物線 y = 7(x+2)² - 4 的開口方向與極值為?',
          options: ['開口向上,最小值 -4', '開口向下,最大值 -4', '開口向上,最大值 -4', '開口向下,最小值 -4'],
          answer: 0,
          explanation: 'a=7>0 開口向上,頂點為最低點,故有最小值 -4。',
        },
        {
          id: 'math-u1-q18',
          question: '拋物線 y = -x² + 6x - 5 的開口方向與極值為?',
          options: ['開口向下,最大值 4', '開口向上,最小值 4', '開口向下,最小值 4', '開口向上,最大值 4'],
          answer: 0,
          explanation: '配方:-x²+6x-5=-(x-3)²+9-5=-(x-3)²+4,a=-1<0 開口向下,有最大值 4。',
        },
        {
          id: 'math-u1-q19',
          question: '拋物線 y = 0.5(x-3)² + 2 的開口方向與極值為?',
          options: ['開口向下,最大值 2', '開口向上,最小值 2', '開口向下,最小值 2', '開口向上,最大值 2'],
          answer: 1,
          explanation: 'a=0.5>0 開口向上,頂點為最低點,故有最小值 2。',
        },
        {
          id: 'math-u1-q20',
          type: 'numeric',
          question: '方程式 x² - 4x + 3 = 0 的判別式 D 為多少?',
          answerText: '4',
          explanation: 'D = (-4)² - 4×1×3 = 16-12 = 4。',
        },
        {
          id: 'math-u1-q21',
          type: 'numeric',
          question: '方程式 x² + 2x + 5 = 0 的判別式 D 為多少?',
          answerText: '-16',
          explanation: 'D = 2² - 4×1×5 = 4-20 = -16。',
        },
        {
          id: 'math-u1-q22',
          type: 'numeric',
          question: '方程式 2x² - 4x + 2 = 0 的判別式 D 為多少?',
          answerText: '0',
          explanation: 'D = (-4)² - 4×2×2 = 16-16 = 0。',
        },
        {
          id: 'math-u1-q23',
          type: 'numeric',
          question: '方程式 x² - 6x + 9 = 0 的判別式 D 為多少?',
          answerText: '0',
          explanation: 'D = (-6)² - 4×1×9 = 36-36 = 0。',
        },
        {
          id: 'math-u1-q24',
          type: 'numeric',
          question: '方程式 3x² + 5x - 2 = 0 的判別式 D 為多少?',
          answerText: '49',
          explanation: 'D = 5² - 4×3×(-2) = 25+24 = 49。',
        },
        {
          id: 'math-u1-q25',
          question: '方程式 x² - 5x + 6 = 0 有幾個相異實根?',
          options: ['0 個', '1 個', '2 個', '無法判斷'],
          answer: 2,
          explanation: 'D=25-24=1>0,有兩個相異實根。',
        },
        {
          id: 'math-u1-q26',
          question: '方程式 x² + 4x + 4 = 0 有幾個相異實根?',
          options: ['0 個', '1 個(重根)', '2 個', '無法判斷'],
          answer: 1,
          explanation: 'D=16-16=0,有一個重根。',
        },
        {
          id: 'math-u1-q27',
          question: '方程式 x² + x + 1 = 0 有幾個相異實根?',
          options: ['0 個', '1 個', '2 個', '無法判斷'],
          answer: 0,
          explanation: 'D=1-4=-3<0,沒有實根。',
        },
        {
          id: 'math-u1-q28',
          question: '方程式 2x² - 3x - 5 = 0 有幾個相異實根?',
          options: ['0 個', '1 個', '2 個', '無法判斷'],
          answer: 2,
          explanation: 'D=9-4×2×(-5)=9+40=49>0,有兩個相異實根。',
        },
        {
          id: 'math-u1-q29',
          type: 'numeric',
          question: '拋物線 y = x² - 8x + 3 的對稱軸為 x = 多少?',
          answerText: '4',
          explanation: '對稱軸 x = -b/(2a) = 8/2 = 4。',
        },
        {
          id: 'math-u1-q30',
          type: 'numeric',
          question: '拋物線 y = -2x² + 12x - 1 的對稱軸為 x = 多少?',
          answerText: '3',
          explanation: '對稱軸 x = -b/(2a) = -12/(2×-2) = 3。',
        },
        {
          id: 'math-u1-q31',
          type: 'numeric',
          question: '拋物線 y = 3x² + 6x + 2 的對稱軸為 x = 多少?',
          answerText: '-1',
          explanation: '對稱軸 x = -b/(2a) = -6/6 = -1。',
        },
        {
          id: 'math-u1-q32',
          type: 'numeric',
          question: '拋物線 y = (x-7)² + 1 的對稱軸為 x = 多少?',
          answerText: '7',
          explanation: '標準式頂點的 x 座標即為對稱軸,對稱軸 x = 7。',
        },
        {
          id: 'math-u1-q33',
          type: 'numeric',
          question: '拋物線 y = 2x² - 5x + 7 的 y 截距為多少?',
          answerText: '7',
          explanation: '當 x=0 時 y=7,y 截距為 7。',
        },
        {
          id: 'math-u1-q34',
          type: 'numeric',
          question: '拋物線 y = -x² + 3x - 4 的 y 截距為多少?',
          answerText: '-4',
          explanation: '當 x=0 時 y=-4,y 截距為 -4。',
        },
        {
          id: 'math-u1-q35',
          type: 'numeric',
          question: '拋物線 y = (x-2)² + 5 的 y 截距為多少?',
          answerText: '9',
          explanation: '當 x=0 時 y=(0-2)²+5=4+5=9,y 截距為 9。',
        },
        {
          id: 'math-u1-q36',
          question: '方程式 x² - 5x + 6 = 0 的解為?',
          options: ['x=2, 3', 'x=-2, -3', 'x=1, 6', 'x=2, -3'],
          answer: 0,
          explanation: '因式分解 (x-2)(x-3)=0,故 x=2 或 3。',
        },
        {
          id: 'math-u1-q37',
          question: '方程式 x² - x - 6 = 0 的解為?',
          options: ['x=3, -2', 'x=-3, 2', 'x=6, -1', 'x=2, 3'],
          answer: 0,
          explanation: '因式分解 (x-3)(x+2)=0,故 x=3 或 -2。',
        },
        {
          id: 'math-u1-q38',
          question: '方程式 x² - 9 = 0 的解為?',
          options: ['x=3, -3', 'x=9, -9', 'x=3', '無解'],
          answer: 0,
          explanation: '因式分解 (x-3)(x+3)=0,故 x=3 或 -3。',
        },
        {
          id: 'math-u1-q39',
          question: '方程式 x² + 2x - 15 = 0 的解為?',
          options: ['x=-5, 3', 'x=5, -3', 'x=-5, -3', 'x=5, 3'],
          answer: 0,
          explanation: '因式分解 (x+5)(x-3)=0,故 x=-5 或 3。',
        },
        {
          id: 'math-u1-q40',
          question: '方程式 x² - 4x = 0 的解為?',
          options: ['x=0, 4', 'x=4', 'x=-4, 0', 'x=0, -4'],
          answer: 0,
          explanation: '提出公因式 x(x-4)=0,故 x=0 或 4。',
        },
        {
          id: 'math-u1-q41',
          type: 'multi',
          question: '關於拋物線 y = 2(x-3)² - 5,下列敘述哪些正確?(多選)',
          options: ['開口向上', '頂點為 (3, -5)', '有最小值 -5', '對稱軸為 x = -3', 'y 截距為 13'],
          answers: [0, 1, 2, 4],
          explanation: '對稱軸應為 x=3,不是 x=-3,此項錯誤;y 截距:x=0時 y=2(9)-5=13,正確。',
        },
        {
          id: 'math-u1-q42',
          type: 'multi',
          question: '關於拋物線 y = -x² + 4x - 1,下列敘述哪些正確?(多選)',
          options: ['開口向下', '頂點為 (2, 3)', '有最大值 3', '有最小值 3', '對稱軸為 x = 2'],
          answers: [0, 1, 2, 4],
          explanation: '配方後為 -(x-2)²+3,開口向下有最大值 3,不是最小值,故「有最小值3」錯誤。',
        },
        {
          id: 'math-u1-q43',
          type: 'multi',
          question: '關於方程式 x² - 2x - 8 = 0,下列敘述哪些正確?(多選)',
          options: ['判別式 D=36', '有兩個相異實根', '兩根分別為 4 與 -2', '兩根之和為 -2', '兩根之積為 -8'],
          answers: [0, 1, 2, 4],
          explanation: '兩根之和應為 4+(-2)=2,不是 -2,此項錯誤;兩根之積 4×(-2)=-8,正確。',
        },
        {
          id: 'math-u1-q44',
          type: 'multi',
          question: '關於拋物線 y = x² - 6x + 9,下列敘述哪些正確?(多選)',
          options: ['開口向上', '頂點為 (3, 0)', '與 x 軸只有一個交點', '判別式大於 0', '此拋物線恆在 x 軸上方或與 x 軸相切'],
          answers: [0, 1, 2, 4],
          explanation: '此式可寫成 (x-3)²,判別式 D=36-36=0,不是大於 0,此項錯誤。',
        },
        {
          id: 'math-u1-q45',
          type: 'numeric',
          question: '一個矩形花園,長寬和為 20 公尺,面積函數為 A(x)=x(20-x)(x 為其中一邊長),面積的最大值為多少平方公尺?',
          answerText: '100',
          explanation: 'A(x)=20x-x²=-(x-10)²+100,當 x=10 時有最大值 100。',
        },
        {
          id: 'math-u1-q46',
          question: '承上題,面積最大時,x 應為多少公尺?',
          options: ['5', '10', '15', '20'],
          answer: 1,
          explanation: 'A(x)=-(x-10)²+100 的頂點在 x=10,此時面積最大。',
        },
        {
          id: 'math-u1-q47',
          type: 'numeric',
          question: '一物體垂直上拋,高度函數為 h(t)=-5t²+20t(t 為時間,單位秒),物體能達到的最大高度為多少公尺?',
          answerText: '20',
          explanation: 'h(t)=-5(t²-4t)=-5(t-2)²+20,當 t=2 時有最大值 20。',
        },
        {
          id: 'math-u1-q48',
          question: '承上題,物體達到最大高度所需的時間為多少秒?',
          options: ['1', '2', '3', '4'],
          answer: 1,
          explanation: 'h(t)=-5(t-2)²+20 的頂點在 t=2,此時高度最大。',
        },
      ],
    },
    {
      id: 'math-u3',
      title: '數與式的運算',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '指數律:aᵐ × aⁿ = aᵐ⁺ⁿ,(aᵐ)ⁿ = aᵐⁿ,a⁰ = 1(a≠0),a⁻ⁿ = 1/aⁿ。',
              '根式化簡:√(a²) = |a|,√a × √b = √(ab)(a, b ≥ 0)。',
              '絕對值定義:|a| = a(a≥0)或 -a(a<0),常用於處理距離與範圍問題。',
              '因式分解常見公式:平方差 a²-b² = (a+b)(a-b);完全平方 a²±2ab+b² = (a±b)²。',
            ],
          },
          {
            heading: '常見乘法公式',
            table: {
              headers: ['公式名稱', '展開式'],
              rows: [
                ['平方差公式', '(a+b)(a-b) = a² - b²'],
                ['完全平方公式', '(a±b)² = a² ± 2ab + b²'],
                ['立方和/立方差', 'a³±b³ = (a±b)(a²∓ab+b²)'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'math-u3-q1',
          question: '化簡 (a³)² × a 的結果為?',
          options: ['a⁵', 'a⁶', 'a⁷', 'a⁹'],
          answer: 2,
          explanation: '(a³)² = a⁶,再乘以 a 得 a⁶⁺¹ = a⁷。',
        },
        {
          id: 'math-u3-q2',
          question: '化簡 √50 = ?',
          options: ['5√2', '2√5', '10√5', '25√2'],
          answer: 0,
          explanation: '√50 = √(25×2) = √25 × √2 = 5√2。',
        },
        {
          id: 'math-u3-q3',
          question: '利用平方差公式,(x+3)(x-3) 展開後為?',
          options: ['x²-9', 'x²+9', 'x²-6x-9', 'x²+6x-9'],
          answer: 0,
          explanation: '依平方差公式 (a+b)(a-b)=a²-b²,此處 a=x, b=3,結果為 x²-9。',
        },
        {
          id: 'math-u3-q4',
          type: 'numeric',
          question: '化簡 2³ × 2² 的值為多少?',
          answerText: '32',
          explanation: '2³×2² = 2⁵ = 32。',
        },
        {
          id: 'math-u3-q5',
          type: 'multi',
          question: '關於指數律,下列敘述哪些正確?(多選)',
          options: ['aᵐ×aⁿ=aᵐ⁺ⁿ', '(aᵐ)ⁿ=aᵐⁿ', 'a⁰=1(a≠0)', 'aᵐ×bᵐ=(a+b)ᵐ', 'a⁻ⁿ=1/aⁿ'],
          answers: [0, 1, 2, 4],
          explanation: 'aᵐ×bᵐ 應等於 (ab)ᵐ,不是 (a+b)ᵐ,此項錯誤。',
        },
      ],
    },
    {
      id: 'math-u4',
      title: '多項式函數',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '多項式函數 f(x) = aₙxⁿ + ... + a₁x + a₀,n 為非負整數,n 稱為多項式的次數。',
              '餘式定理:多項式 f(x) 除以 (x-a) 的餘式等於 f(a)。',
              '因式定理:若 f(a) = 0,則 (x-a) 是 f(x) 的因式,可用來找多項式的根。',
              '綜合除法是計算多項式除法(尤其除以一次式)的快速方法。',
            ],
          },
          {
            heading: '重要方法',
            content: [
              '求多項式的根,可先用因式定理測試常數項的因數,找出一個根後用綜合除法降次。',
              '圖形與 x 軸交點對應多項式方程式的實根,交點個數與方程式實根個數相關。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u4-q1',
          question: '多項式 f(x) = x³ - 2x² - x + 2 除以 (x-1) 的餘式為?',
          options: ['0', '2', '-2', '無法計算'],
          answer: 0,
          explanation: '依餘式定理,除以 (x-1) 的餘式等於 f(1) = 1-2-1+2 = 0。',
        },
        {
          id: 'math-u4-q2',
          question: '若 f(a) = 0,依因式定理可知?',
          options: ['(x-a) 是 f(x) 的因式', '(x+a) 是 f(x) 的因式', 'f(x) 沒有實根', 'a 是 f(x) 的最高次項係數'],
          answer: 0,
          explanation: '因式定理指出:若 f(a)=0,則 (x-a) 必為 f(x) 的因式。',
        },
        {
          id: 'math-u4-q3',
          question: '計算多項式除以一次式的快速方法稱為?',
          options: ['配方法', '綜合除法', '因式分解', '消去法'],
          answer: 1,
          explanation: '綜合除法是多項式除以一次式(x-a)的快速計算方法。',
        },
      ],
    },
    {
      id: 'math-u5',
      title: '指數與對數函數',
      category: '高一上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '指數函數 y = aˣ(a>0, a≠1):a>1 時遞增,0<a<1 時遞減,圖形恆過 (0,1)。',
              '對數定義:log_a x = y 相當於 aʸ = x(a>0, a≠1, x>0)。',
              '對數律:log_a(MN) = log_a M + log_a N;log_a(M/N) = log_a M - log_a N;log_a(Mᵏ) = k·log_a M。',
              '換底公式:log_a b = log_c b / log_c a。',
            ],
          },
          {
            heading: '常用對數性質',
            table: {
              headers: ['性質', '說明'],
              rows: [
                ['log_a 1 = 0', '任何底數的對數,真數為 1 結果都是 0'],
                ['log_a a = 1', '底數與真數相同,結果為 1'],
                ['常用對數', 'log 沒寫底數時,預設底數為 10'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'math-u5-q1',
          question: 'log₂8 的值為?',
          options: ['2', '3', '4', '8'],
          answer: 1,
          explanation: '因為 2³=8,依對數定義 log₂8=3。',
        },
        {
          id: 'math-u5-q2',
          question: '依對數律,log_a M + log_a N 等於?',
          options: ['log_a(M+N)', 'log_a(MN)', 'log_a(M-N)', 'log_a(M/N)'],
          answer: 1,
          explanation: '對數律規定 log_a M + log_a N = log_a(MN)。',
        },
        {
          id: 'math-u5-q3',
          question: '指數函數 y=aˣ 當 0<a<1 時,函數圖形的趨勢為?',
          options: ['遞增', '遞減', '保持不變', '無法判斷'],
          answer: 1,
          explanation: '當底數 0<a<1 時,指數函數 y=aˣ 為遞減函數。',
        },
        {
          id: 'math-u5-q4',
          type: 'numeric',
          question: 'log₃9 的值為多少?',
          answerText: '2',
          explanation: '因為 3²=9,依對數定義 log₃9=2。',
        },
        {
          id: 'math-u5-q5',
          type: 'multi',
          question: '關於對數函數 y=log₂x,下列敘述哪些正確?(多選)',
          options: ['當 x=1 時 y=0', '定義域為所有實數', '函數圖形恆過 (1,0)', '是遞增函數', '值域為所有實數'],
          answers: [0, 2, 3, 4],
          explanation: '對數函數的定義域須為 x>0,不是所有實數,此項錯誤。',
        },
      ],
    },

    // ---- 高一下 ----
    {
      id: 'math-u2',
      title: '數列與級數',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '等差數列:aₙ = a₁ + (n-1)d,前 n 項和 Sₙ = n(a₁+aₙ)/2。',
              '等比數列:aₙ = a₁ × r^(n-1),前 n 項和 Sₙ = a₁(1-rⁿ)/(1-r), r≠1。',
              '無窮等比級數收斂條件:|r| < 1,和為 a₁/(1-r)。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u2-q1',
          question: '等差數列首項 a₁=3,公差 d=4,則第 10 項為多少?',
          options: ['39', '43', '35', '40'],
          answer: 0,
          explanation: 'aₙ = a₁ + (n-1)d = 3 + 9×4 = 3 + 36 = 39。',
        },
        {
          id: 'math-u2-q2',
          question: '等比數列首項 a₁=2,公比 r=3,則第 4 項為多少?',
          options: ['54', '24', '18', '162'],
          answer: 0,
          explanation: 'aₙ = a₁ × r^(n-1) = 2 × 3³ = 2 × 27 = 54。',
        },
        {
          id: 'math-u2-q3',
          question: '無窮等比級數收斂的條件為?',
          options: ['|r| > 1', '|r| < 1', 'r = 1', 'r = 0'],
          answer: 1,
          explanation: '無窮等比級數收斂(有和)的條件是公比絕對值 |r| < 1。',
        },
        {
          id: 'math-u2-q4',
          type: 'numeric',
          question: '等比數列首項 a₁=3,公比 r=2,則第 5 項為多少?',
          answerText: '48',
          explanation: 'aₙ = a₁×r^(n-1) = 3×2⁴ = 3×16 = 48。',
        },
        {
          id: 'math-u2-q5',
          type: 'multi',
          question: '關於等差數列,下列敘述哪些正確?(多選)',
          options: ['前 n 項和公式為 Sₙ = n(a₁+aₙ)/2', '公差可以為負數', '相鄰兩項的差都等於公差', '一定是遞增數列', '任一項都等於前一項乘以公比'],
          answers: [0, 1, 2],
          explanation: '公差為負時數列遞減,故不一定遞增;「乘以公比」是等比數列的性質,不是等差數列。',
        },
      ],
    },
    {
      id: 'math-u6',
      title: '三角函數基礎',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '弧度制:角度轉弧度公式 θ(弧度) = θ(角度) × π/180。',
              '單位圓上,角 θ 的終邊與圓交點座標為 (cosθ, sinθ)。',
              '基本關係式:sin²θ + cos²θ = 1;tanθ = sinθ/cosθ(cosθ≠0)。',
            ],
            table: {
              headers: ['角度', 'sin', 'cos', 'tan'],
              rows: [
                ['30°', '1/2', '√3/2', '√3/3'],
                ['45°', '√2/2', '√2/2', '1'],
                ['60°', '√3/2', '1/2', '√3'],
              ],
            },
          },
          {
            heading: '重要定理',
            content: [
              '正弦定理:a/sinA = b/sinB = c/sinC = 2R(R為外接圓半徑),適用任意三角形。',
              '餘弦定理:c² = a² + b² - 2ab·cosC,可用於已知兩邊夾角求第三邊。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u6-q1',
          question: 'sin30° 的值為?',
          options: ['1/2', '√2/2', '√3/2', '1'],
          answer: 0,
          explanation: 'sin30° = 1/2,為常見特殊角三角函數值,建議熟記。',
        },
        {
          id: 'math-u6-q2',
          question: '依 sin²θ + cos²θ = 1,若 sinθ = 3/5(θ為銳角),則 cosθ = ?',
          options: ['4/5', '3/4', '5/4', '2/5'],
          answer: 0,
          explanation: 'cos²θ = 1 - (3/5)² = 1 - 9/25 = 16/25,θ為銳角故 cosθ = 4/5。',
        },
        {
          id: 'math-u6-q3',
          question: '已知三角形兩邊與夾角,求第三邊長,應使用?',
          options: ['正弦定理', '餘弦定理', '商高定理', '對數律'],
          answer: 1,
          explanation: '已知兩邊夾角求第三邊,應使用餘弦定理 c² = a²+b²-2ab·cosC。',
        },
        {
          id: 'math-u6-q4',
          type: 'numeric',
          question: 'sin90° 的值為多少?',
          answerText: '1',
          explanation: 'sin90° = 1,單位圓上角度 90° 對應的 y 座標為 1。',
        },
        {
          id: 'math-u6-q5',
          type: 'multi',
          question: '關於 sinθ 與 cosθ,下列敘述哪些正確?(多選)',
          options: ['sin²θ+cos²θ=1 恆成立', 'sinθ 的範圍是 [-1,1]', '當 θ=90° 時 cosθ=0', 'tanθ=sinθ/cosθ 恆成立(cosθ≠0)', 'sinθ 一定大於 0'],
          answers: [0, 1, 2, 3],
          explanation: 'sinθ 在不同角度可正可負(如 θ=270° 時 sinθ=-1),不會「一定大於0」,此項錯誤。',
        },
      ],
    },
    {
      id: 'math-u7',
      title: '排列組合基礎',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '排列(Permutation):由 n 個相異物取 r 個「有順序」排列,公式 P(n,r) = n!/(n-r)!。',
              '組合(Combination):由 n 個相異物取 r 個「不考慮順序」,公式 C(n,r) = n!/(r!(n-r)!)。',
              '分辨排列與組合的關鍵在於「順序是否重要」:排隊拍照要用排列,選代表隊不分職位用組合。',
            ],
            table: {
              headers: ['原理', '說明'],
              rows: [
                ['加法原理', '兩件事「不能同時發生」,方法數相加'],
                ['乘法原理', '兩件事「依序都要發生」,方法數相乘'],
              ],
            },
          },
          {
            heading: '延伸概念',
            content: [
              '重複排列:n 個位置每個位置有 k 種選擇且可重複,方法數為 kⁿ。',
              '環狀排列:n 個相異物排成一圈,因旋轉視為相同,方法數為 (n-1)!。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u7-q1',
          question: '從 5 個人中選 3 個人排成一列,共有幾種排法?',
          options: ['P(5,3)=60', 'C(5,3)=10', '5³=125', '5!=120'],
          answer: 0,
          explanation: '排隊有順序之分,應使用排列公式 P(5,3)=5×4×3=60。',
        },
        {
          id: 'math-u7-q2',
          question: '從 5 個人中選 3 個人組成一個委員會(不分職位),共有幾種選法?',
          options: ['60', '10', '15', '125'],
          answer: 1,
          explanation: '不分職位不考慮順序,應使用組合公式 C(5,3)=10。',
        },
        {
          id: 'math-u7-q3',
          question: '判斷排列與組合的關鍵在於?',
          options: ['物品數量的多寡', '順序是否重要', '是否有重複的物品', '位置是否相鄰'],
          answer: 1,
          explanation: '排列考慮順序,組合不考慮順序,這是兩者最核心的差異。',
        },
        {
          id: 'math-u7-q4',
          type: 'numeric',
          question: '從 4 個人中選 2 個人排成一列(有順序),共有幾種排法?',
          answerText: '12',
          explanation: 'P(4,2) = 4×3 = 12。',
        },
        {
          id: 'math-u7-q5',
          type: 'multi',
          question: '關於排列組合,下列敘述哪些正確?(多選)',
          options: ['C(n,r)=C(n,n-r)', 'P(n,r)=n!/(n-r)!', '排列考慮順序,組合不考慮順序', 'C(n,r) 一定大於 P(n,r)', 'n 個相異物排成一圈的環狀排列數為 (n-1)!'],
          answers: [0, 1, 2, 4],
          explanation: 'C(n,r)=P(n,r)/r!,當 r≥2 時 r!≥2,所以 C(n,r) 通常小於或等於 P(n,r),不會「一定大於」。',
        },
      ],
    },
    {
      id: 'math-u8',
      title: '機率入門',
      category: '高一下',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '機率定義:P(A) = 事件A發生的方法數 / 樣本空間總方法數,0 ≤ P(A) ≤ 1。',
              '互斥事件:A、B不能同時發生,P(A∪B) = P(A) + P(B)。',
              '獨立事件:A、B發生與否互不影響,P(A∩B) = P(A) × P(B)。',
              '餘事件:P(A的餘事件) = 1 - P(A),常用於「至少」類型的題目。',
            ],
            table: {
              headers: ['情境', '公式'],
              rows: [
                ['一般加法公式', 'P(A∪B) = P(A) + P(B) - P(A∩B)'],
                ['條件機率', 'P(A|B) = P(A∩B) / P(B)'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'math-u8-q1',
          question: '擲一顆公正骰子,出現偶數點的機率為?',
          options: ['1/6', '1/3', '1/2', '2/3'],
          answer: 2,
          explanation: '偶數點有 2, 4, 6 共 3 種,樣本空間共 6 種,機率為 3/6 = 1/2。',
        },
        {
          id: 'math-u8-q2',
          question: '已知 P(A)=0.3, P(B)=0.4,A、B互斥,則 P(A∪B) = ?',
          options: ['0.12', '0.7', '0.1', '1.2'],
          answer: 1,
          explanation: '互斥事件 P(A∪B) = P(A) + P(B) = 0.3 + 0.4 = 0.7。',
        },
        {
          id: 'math-u8-q3',
          question: '「投擲兩枚硬幣,至少一枚正面」的機率,較快的計算方式是?',
          options: ['直接列出所有情況相加', '用 1 減去「兩枚都反面」的機率', '用乘法定理直接相乘', '無法計算'],
          answer: 1,
          explanation: '「至少一枚正面」的餘事件是「兩枚都反面」,用 1 減去餘事件機率較快速。',
        },
        {
          id: 'math-u8-q4',
          type: 'numeric',
          question: '投擲兩枚公正硬幣,兩枚都出現正面的機率為多少?(請寫成最簡分數,例如 1/4)',
          answerText: '1/4',
          explanation: '兩枚都正面只有 1 種情況,樣本空間共 4 種(正正、正反、反正、反反),機率為 1/4。',
        },
        {
          id: 'math-u8-q5',
          type: 'multi',
          question: '關於機率,下列敘述哪些正確?(多選)',
          options: ['機率值介於 0 到 1 之間', '互斥事件的機率可以相加', '獨立事件的交集機率等於各自機率相乘', '所有列出的事件機率總和一定等於 1', '餘事件的機率等於 1 減去該事件機率'],
          answers: [0, 1, 2, 4],
          explanation: '只有「彼此互斥且涵蓋整個樣本空間」的一組事件機率總和才會是 1,不是任意列出的事件都符合,此項錯誤。',
        },
      ],
    },

    // ---- 高二上 ----
    {
      id: 'math-u9',
      title: '平面向量',
      category: '高二上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '向量以「大小」與「方向」表示,記作 (x,y) 或有向線段 AB。',
              '向量加法:平行四邊形法則或三角形法則;純量乘法:k·(x,y) = (kx,ky)。',
              '內積定義:a·b = |a||b|cosθ = x₁x₂ + y₁y₂,可用來判斷兩向量夾角。',
              '兩向量垂直的充要條件為內積等於 0。',
            ],
            table: {
              headers: ['名稱', '公式'],
              rows: [
                ['向量長度', '|a| = √(x²+y²)'],
                ['內積', 'a·b = x₁x₂ + y₁y₂'],
                ['夾角餘弦', 'cosθ = (a·b)/(|a||b|)'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'math-u9-q1',
          question: '向量 a=(3,4) 的長度為?',
          options: ['5', '7', '12', '25'],
          answer: 0,
          explanation: '|a| = √(3²+4²) = √(9+16) = √25 = 5。',
        },
        {
          id: 'math-u9-q2',
          question: '向量 a=(1,2), b=(2,-1),則 a·b = ?',
          options: ['0', '4', '-4', '5'],
          answer: 0,
          explanation: 'a·b = 1×2 + 2×(-1) = 2 - 2 = 0。',
        },
        {
          id: 'math-u9-q3',
          question: '兩向量垂直的充要條件為?',
          options: ['長度相等', '內積等於 0', '方向相同', '內積等於 1'],
          answer: 1,
          explanation: '兩向量垂直時 cosθ=0,故內積 a·b = |a||b|cosθ = 0。',
        },
        {
          id: 'math-u9-q4',
          type: 'numeric',
          question: '向量 a=(6,8) 的長度為多少?',
          answerText: '10',
          explanation: '|a| = √(6²+8²) = √(36+64) = √100 = 10。',
        },
        {
          id: 'math-u9-q5',
          type: 'multi',
          question: '關於向量內積,下列敘述哪些正確?(多選)',
          options: ['a·b=|a||b|cosθ', '兩向量垂直時內積等於 0', '內積的結果是一個向量', 'a·b=b·a', '|a·b| 一定等於 |a||b|'],
          answers: [0, 1, 3],
          explanation: '內積的結果是純量(數字)不是向量;|a·b| 只有在兩向量平行時才等於 |a||b|,不是一定成立。',
        },
      ],
    },
    {
      id: 'math-u10',
      title: '空間向量基礎',
      category: '高二上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '空間向量以三個座標分量 (x,y,z) 表示,運算規則與平面向量類似,只是多一維。',
              '外積(叉積)a×b 產生一個同時垂直於 a 與 b 的向量,大小為 |a||b|sinθ,常用來求平面法向量。',
              '三向量共平面的條件:三向量的純量三重積(行列式)等於 0。',
              '空間中兩點距離公式:d = √((x₂-x₁)²+(y₂-y₁)²+(z₂-z₁)²)。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u10-q1',
          question: '空間向量比平面向量多一個維度,是因為多了哪個座標分量?',
          options: ['w', 'z', 't', 'r'],
          answer: 1,
          explanation: '空間向量以 (x,y,z) 三個分量表示,比平面向量多了 z 座標分量。',
        },
        {
          id: 'math-u10-q2',
          question: '外積 a×b 所得的向量,其方向特性為?',
          options: ['與 a、b 都平行', '同時垂直於 a 與 b', '與 a、b 夾角為 45 度', '方向不固定'],
          answer: 1,
          explanation: '外積所得的向量同時垂直於原本的兩個向量 a 與 b,常用來求平面法向量。',
        },
        {
          id: 'math-u10-q3',
          question: '空間中兩點 A(1,2,3)、B(4,6,3) 的距離為?',
          options: ['5', '7', '25', '√50'],
          answer: 0,
          explanation: 'd = √((4-1)²+(6-2)²+(3-3)²) = √(9+16+0) = √25 = 5。',
        },
      ],
    },
    {
      id: 'math-u11',
      title: '直線與圓',
      category: '高二上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '直線方程式:斜截式 y=mx+b;點斜式 y-y₁=m(x-x₁);一般式 ax+by+c=0。',
              '兩直線關係:斜率相等則平行(m₁=m₂);斜率相乘為 -1 則垂直(m₁×m₂=-1)。',
              '點到直線距離公式:d = |ax₀+by₀+c| / √(a²+b²)。',
              '圓方程式:標準式 (x-h)²+(y-k)²=r²,圓心 (h,k),半徑 r。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u11-q1',
          question: '直線 y=2x+3 與直線 y=2x-5 的關係為?',
          options: ['垂直', '平行', '重合', '相交於一點'],
          answer: 1,
          explanation: '兩直線斜率相同(皆為2)、截距不同,故兩直線平行且不重合。',
        },
        {
          id: 'math-u11-q2',
          question: '圓方程式 (x-2)²+(y+1)²=9 的圓心與半徑為?',
          options: ['圓心(2,-1),半徑3', '圓心(-2,1),半徑9', '圓心(2,1),半徑3', '圓心(-2,-1),半徑9'],
          answer: 0,
          explanation: '標準式 (x-h)²+(y-k)²=r² 的圓心為 (h,k)=(2,-1),半徑 r=√9=3。',
        },
        {
          id: 'math-u11-q3',
          question: '若兩直線斜率乘積為 -1,兩直線關係為?',
          options: ['平行', '垂直', '重合', '不相交也不垂直'],
          answer: 1,
          explanation: '兩直線斜率乘積為 -1(m₁×m₂=-1)是兩直線垂直的充要條件。',
        },
        {
          id: 'math-u11-q4',
          type: 'numeric',
          question: '圓 (x-2)²+(y-3)²=25 的半徑為多少?',
          answerText: '5',
          explanation: '標準式 (x-h)²+(y-k)²=r² 中 r²=25,故半徑 r=5。',
        },
        {
          id: 'math-u11-q5',
          type: 'multi',
          question: '關於直線與圓,下列敘述哪些正確?(多選)',
          options: ['兩直線斜率相等則平行', '兩直線斜率乘積為 -1 則垂直', '圓心到直線距離大於半徑時,直線與圓不相交', '圓心到直線距離小於半徑時,直線與圓相切', '圓的標準式為 (x-h)²+(y-k)²=r²'],
          answers: [0, 1, 2, 4],
          explanation: '圓心到直線距離「等於」半徑才是相切,「小於」半徑是直線與圓相交於兩點,此項敘述錯誤。',
        },
      ],
    },
    {
      id: 'math-u12',
      title: '矩陣基礎',
      category: '高二上',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '矩陣是由數字排列成的長方陣列,m×n 矩陣有 m 列 n 行。',
              '矩陣加減法:對應元素相加減,矩陣大小需相同才能運算。',
              '矩陣乘法:A(m×n) 乘 B(n×p) 需 A 的行數等於 B 的列數,結果為 m×p 矩陣。',
              '2×2 矩陣行列式:|A| = ad - bc(A = [[a,b],[c,d]]),行列式不為 0 時矩陣才有反矩陣。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u12-q1',
          question: '矩陣乘法 A×B 要能進行,需滿足什麼條件?',
          options: ['A、B 大小完全相同', 'A 的行數等於 B 的列數', 'A、B 都要是方陣', '沒有任何條件限制'],
          answer: 1,
          explanation: '矩陣乘法 A(m×n)×B(n×p) 需要 A 的行數等於 B 的列數才能相乘。',
        },
        {
          id: 'math-u12-q2',
          question: '2×2 矩陣 [[2,3],[1,4]] 的行列式值為?',
          options: ['5', '8', '11', '-5'],
          answer: 0,
          explanation: '行列式 |A| = ad - bc = 2×4 - 3×1 = 8 - 3 = 5。',
        },
        {
          id: 'math-u12-q3',
          question: '矩陣要有反矩陣存在,行列式值需?',
          options: ['等於 0', '不等於 0', '一定要是正數', '一定要是整數'],
          answer: 1,
          explanation: '矩陣的行列式值不等於 0 時,該矩陣才存在反矩陣。',
        },
      ],
    },

    // ---- 高二下 ----
    {
      id: 'math-u13',
      title: '數據分析與統計',
      category: '高二下',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '集中趨勢量數:平均數(所有值總和除以個數)、中位數(排序後最中間的值)、眾數(出現次數最多的值)。',
              '離散趨勢量數:全距(最大值-最小值)、變異數、標準差,衡量資料的分散程度。',
              '標準差公式:s = √(Σ(xᵢ-x̄)²/n),標準差越大代表資料越分散。',
              '離群值(outlier)會顯著影響平均數,但對中位數影響較小。',
            ],
          },
          {
            heading: '補充概念',
            content: [
              '盒鬚圖(box plot)用四分位數呈現資料分布,可快速判斷資料是否有離群值。',
              '常態分布資料中,約 68% 資料落在平均數正負一個標準差範圍內。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u13-q1',
          question: '一組資料中出現次數最多的值稱為?',
          options: ['平均數', '中位數', '眾數', '全距'],
          answer: 2,
          explanation: '眾數是一組資料中出現次數最多的值。',
        },
        {
          id: 'math-u13-q2',
          question: '下列何者最容易受離群值影響而失真?',
          options: ['中位數', '眾數', '平均數', '全距'],
          answer: 2,
          explanation: '平均數會受極端離群值拉動而明顯偏移,中位數與眾數則相對穩定。',
        },
        {
          id: 'math-u13-q3',
          question: '標準差的主要作用是?',
          options: ['代表資料的集中趨勢', '衡量資料的分散程度', '一定等於平均數', '只能用於常態分布'],
          answer: 1,
          explanation: '標準差用來衡量資料相對於平均數的分散程度,數值越大代表資料越分散。',
        },
        {
          id: 'math-u13-q4',
          type: 'numeric',
          question: '一組資料 2, 4, 6, 8, 10 的平均數為多少?',
          answerText: '6',
          explanation: '平均數 = (2+4+6+8+10)/5 = 30/5 = 6。',
        },
        {
          id: 'math-u13-q5',
          type: 'multi',
          question: '關於統計量數,下列敘述哪些正確?(多選)',
          options: ['平均數容易受離群值影響', '中位數是資料排序後最中間的值', '標準差可以是負數', '眾數是出現次數最多的值', '全距等於最大值減最小值'],
          answers: [0, 1, 3, 4],
          explanation: '標準差是由平方後開根號得到,數學上不可能是負數,此項敘述錯誤。',
        },
      ],
    },
    {
      id: 'math-u14',
      title: '條件機率與貝氏定理',
      category: '高二下',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '條件機率:P(A|B) = P(A∩B)/P(B),表示在 B 已發生的條件下 A 發生的機率。',
              '貝氏定理:P(A|B) = P(B|A)×P(A) / P(B),用來根據已知結果反推原因發生的機率。',
              '獨立事件的判斷:若 P(A|B) = P(A),則 A、B 為獨立事件。',
            ],
            table: {
              headers: ['情境', '說明'],
              rows: [
                ['醫療檢驗', '已知檢驗結果為陽性,求真的患病的機率'],
                ['品管抽驗', '已知抽到瑕疵品,求來自哪條產線的機率'],
              ],
            },
          },
        ],
      },
      quiz: [
        {
          id: 'math-u14-q1',
          question: '條件機率 P(A|B) 的定義式為?',
          options: ['P(A∩B)/P(B)', 'P(A∪B)/P(B)', 'P(B∩A)/P(A)', 'P(A)×P(B)'],
          answer: 0,
          explanation: '條件機率的定義為 P(A|B) = P(A∩B)/P(B)。',
        },
        {
          id: 'math-u14-q2',
          question: '若 P(A|B) = P(A),代表 A、B 兩事件為?',
          options: ['互斥事件', '獨立事件', '對立事件', '條件事件'],
          answer: 1,
          explanation: '若 B 是否發生不影響 A 發生的機率(P(A|B)=P(A)),則 A、B 為獨立事件。',
        },
        {
          id: 'math-u14-q3',
          question: '貝氏定理主要用於解決什麼類型的問題?',
          options: ['已知原因求結果的機率', '已知結果反推原因發生的機率', '計算排列組合方法數', '求資料的標準差'],
          answer: 1,
          explanation: '貝氏定理常用於「已知某結果發生,反推是哪個原因造成」這類問題,如醫療檢驗、品管抽驗。',
        },
      ],
    },
    {
      id: 'math-u15',
      title: '圓錐曲線基礎',
      category: '高二下',
      note: {
        sections: [
          {
            heading: '圓錐曲線標準式(以原點為中心)',
            table: {
              headers: ['曲線', '標準式', '特徵'],
              rows: [
                ['橢圓', 'x²/a² + y²/b² = 1 (a>b>0)', '兩焦點距離和為定值 2a'],
                ['雙曲線', 'x²/a² - y²/b² = 1', '兩焦點距離差的絕對值為定值 2a'],
                ['拋物線', 'y² = 4px', '焦點到曲線上任一點距離,等於該點到準線距離'],
              ],
            },
          },
          {
            heading: '離心率概念',
            content: [
              '橢圓的離心率 e = c/a(0<e<1),e 越接近 0 橢圓越接近圓形。',
              '雙曲線的離心率 e = c/a(e>1);拋物線的離心率恰好等於 1。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u15-q1',
          question: '橢圓標準式 x²/a² + y²/b² = 1 中,若 a>b,則兩焦點所在的軸為?',
          options: ['x 軸', 'y 軸', '不一定', '沒有焦點'],
          answer: 0,
          explanation: '當 a>b 時,長軸在 x 軸上,兩焦點位於 x 軸上。',
        },
        {
          id: 'math-u15-q2',
          question: '拋物線上任一點到焦點的距離,等於該點到什麼的距離?',
          options: ['原點', '準線', 'x軸', 'y軸'],
          answer: 1,
          explanation: '拋物線的定義是:曲線上任一點到焦點的距離,等於該點到準線的距離。',
        },
        {
          id: 'math-u15-q3',
          question: '下列關於離心率 e 的敘述,何者正確?',
          options: ['橢圓的離心率 e>1', '雙曲線的離心率 0<e<1', '拋物線的離心率恰好等於 1', '離心率與曲線形狀無關'],
          answer: 2,
          explanation: '拋物線的離心率恰好等於 1;橢圓 0<e<1;雙曲線 e>1。',
        },
      ],
    },
    {
      id: 'math-u16',
      title: '三角函數應用與極座標',
      category: '高二下',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '三角函數應用:測量無法直接到達的距離或高度,常結合正弦定理、餘弦定理求解。',
              '極座標 (r,θ):r 為到原點的距離,θ 為與 x 軸正向的夾角,與直角座標轉換公式為 x=r cosθ, y=r sinθ。',
              '複數的極式:z = r(cosθ + i sinθ),可用棣美弗定理計算複數的乘冪。',
            ],
          },
          {
            heading: '棣美弗定理',
            content: ['[r(cosθ+isinθ)]ⁿ = rⁿ(cos(nθ)+isin(nθ)),用於快速計算複數的次方。'],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u16-q1',
          question: '極座標 (r,θ) 轉換為直角座標的公式為?',
          options: ['x=r cosθ, y=r sinθ', 'x=r sinθ, y=r cosθ', 'x=r+θ, y=r-θ', 'x=rθ, y=r/θ'],
          answer: 0,
          explanation: '極座標轉直角座標的公式為 x=r cosθ, y=r sinθ。',
        },
        {
          id: 'math-u16-q2',
          question: '複數的極式 z=r(cosθ+isinθ) 中,r 代表?',
          options: ['複數的實部', '複數的虛部', '複數到原點的距離(絕對值)', '複數的角度'],
          answer: 2,
          explanation: 'r 代表複數在複數平面上到原點的距離,也就是該複數的絕對值。',
        },
        {
          id: 'math-u16-q3',
          question: '棣美弗定理主要用來簡化計算什麼?',
          options: ['複數的加法', '複數的乘冪', '三角函數的微分', '向量的內積'],
          answer: 1,
          explanation: '棣美弗定理可將複數的 n 次方計算簡化為 rⁿ(cos(nθ)+isin(nθ))。',
        },
      ],
    },

    // ---- 高三總複習 ----
    {
      id: 'math-u17',
      title: '學測數學混合題型技巧',
      category: '高三總複習',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '學測數學混合題常結合選擇題與非選擇題(需寫出計算過程),閱卷會依步驟給部分分數。',
              '圖表判讀題常考:能從統計圖表中讀出數據並進行計算或比較,不需要額外背誦公式。',
              '應用題建議先「列式」再「求解」,把文字敘述轉換成數學式是拿分關鍵步驟。',
            ],
          },
          {
            heading: '應試策略',
            content: [
              '非選擇題即使沒有把握算出最終答案,寫出正確的解題過程或列式,通常也能拿到部分分數。',
              '檢查答案是否符合題目的「合理範圍」(如長度、機率不能是負數),可以快速抓出計算錯誤。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u17-q1',
          question: '拋物線 y=(x-2)²+3 的頂點座標為?',
          options: ['(2, 3)', '(-2, 3)', '(2, -3)', '(3, 2)'],
          answer: 0,
          explanation: '標準式 y=a(x-h)²+k 的頂點為 (h,k),此處 h=2, k=3,頂點為 (2,3)。',
        },
        {
          id: 'math-u17-q2',
          question: 'log₂16 的值為?',
          options: ['2', '3', '4', '5'],
          answer: 2,
          explanation: '因為 2⁴=16,依對數定義 log₂16=4。',
        },
        {
          id: 'math-u17-q3',
          question: '擲一顆公正骰子,出現偶數點的機率為?',
          options: ['1/6', '1/3', '1/2', '2/3'],
          answer: 2,
          explanation: '偶數點有 2, 4, 6 共 3 種,樣本空間共 6 種,機率為 3/6 = 1/2。',
        },
        {
          id: 'math-u17-q4',
          question: '向量 a=(3,4) 的長度為?',
          options: ['5', '7', '12', '25'],
          answer: 0,
          explanation: '|a| = √(3²+4²) = √25 = 5。',
        },
      ],
    },
    {
      id: 'math-u18',
      title: '歷屆試題主題整理',
      category: '高三總複習',
      note: {
        sections: [
          {
            heading: '重點整理',
            content: [
              '學測數學歷屆試題常見主題:函數與圖形、數列級數、機率統計、向量幾何、三角函數,建議依主題整理歷屆考古題。',
              '混合題型(需列式作答)近年比重增加,平時練習不能只做選擇題,也要練習完整寫出解題過程。',
              '高一、高二學過的基礎觀念(如因式分解、指數對數運算)是後續單元的基礎,複習時不能略過。',
            ],
          },
          {
            heading: '複習建議',
            content: [
              '建議整理自己在歷屆試題中「因粗心計算錯誤」與「因觀念不熟」兩類錯題,分別用不同方式加強。',
              '考前衝刺階段,以限時模擬完整份考古題為主,訓練實際考試的時間分配。',
            ],
          },
        ],
      },
      quiz: [
        {
          id: 'math-u18-q1',
          question: '等差數列首項 a₁=2,公差 d=3,則第 5 項為多少?',
          options: ['14', '17', '11', '20'],
          answer: 0,
          explanation: 'aₙ = a₁ + (n-1)d = 2 + 4×3 = 14。',
        },
        {
          id: 'math-u18-q2',
          question: '若兩直線斜率乘積為 -1,兩直線關係為?',
          options: ['平行', '垂直', '重合', '不相交也不垂直'],
          answer: 1,
          explanation: '兩直線斜率乘積為 -1(m₁×m₂=-1)是兩直線垂直的充要條件。',
        },
        {
          id: 'math-u18-q3',
          question: '圓方程式 (x-1)²+(y+2)²=16 的圓心與半徑為?',
          options: ['圓心(1,-2),半徑4', '圓心(-1,2),半徑16', '圓心(1,2),半徑4', '圓心(-1,-2),半徑16'],
          answer: 0,
          explanation: '標準式 (x-h)²+(y-k)²=r² 的圓心為 (h,k)=(1,-2),半徑 r=√16=4。',
        },
        {
          id: 'math-u18-q4',
          question: '條件機率 P(A|B) 的定義式為?',
          options: ['P(A∩B)/P(B)', 'P(A∪B)/P(B)', 'P(B∩A)/P(A)', 'P(A)×P(B)'],
          answer: 0,
          explanation: '條件機率的定義為 P(A|B) = P(A∩B)/P(B)。',
        },
      ],
    },
  ],
};
