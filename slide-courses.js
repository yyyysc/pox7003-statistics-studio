const week1ExamplePages={"10":"quantitative","12":"data-types","20":"scales","22":"frequencies","24":"boxplot","26":"histogram","27":"stem-leaf","28":"dotplot","32":"mode","37":"median","39":"mean","40":"centre-comparison"};
const slideCourses={1:{week:1,sourcePages:45,slides:week1Slides.filter(s=>s.page>=6&&s.page<=43).map(s=>({...s,week:1,topic:week1ExamplePages[s.page]??null,clear:week1ClearImages[s.page]}))},...{
  "2": {
    "week": 2,
    "sourcePages": 45,
    "excluded": [
      {
        "page": 36,
        "reason": "Only an unavailable embedded image; no recoverable text"
      },
      {
        "page": 37,
        "reason": "Only an unavailable embedded image; no recoverable text"
      },
      {
        "page": 39,
        "reason": "Only an unavailable embedded image; no recoverable text"
      },
      {
        "page": 40,
        "reason": "Only an unavailable embedded image; no recoverable text"
      },
      {
        "page": 42,
        "reason": "Only an unavailable embedded image; no recoverable text"
      },
      {
        "page": 43,
        "reason": "Only an unavailable embedded image; no recoverable text"
      },
      {
        "page": 44,
        "reason": "Summary divider without teaching content"
      },
      {
        "page": 45,
        "reason": "Thanks page"
      }
    ],
    "slides": [
      {
        "page": 1,
        "en": "Learning objectives",
        "zh": "学习目标",
        "pairs": [
          [
            "What are Measures of Dispersion / Variability?",
            "什么是离散程度/变异性指标？"
          ],
          [
            "Understand the terms: Range, Interquartile Range (IQR), Semi-IQR, Variance, Standard Deviation, Skewness and Kurtosis.",
            "理解极差、四分位距、半四分位距、方差、标准差、偏度与峰度。"
          ],
          [
            "Inferential Statistics",
            "推断统计"
          ],
          [
            "SPSS",
            "SPSS统计软件"
          ]
        ],
        "walk": [
          "The cover shares this page with real objectives, so the objectives are retained. Week 1 described the centre; Week 2 asks how widely values vary. Then it introduces inference and the roles of variables.",
          "本页封面与学习目标共用一页，因此保留学习目标。第一周描述中心，第二周研究数值分散程度，再介绍推断和变量角色。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-01",
        "image": "assets/week2/page-01.jpg",
        "clear": "assets/week2/clear-01.svg"
      },
      {
        "page": 2,
        "en": "Measures of dispersion",
        "zh": "离散程度",
        "pairs": [
          [
            "Measures of dispersion are descriptive statistics that describe how similar a set of scores are to each other.",
            "离散程度指标是描述一组分数彼此相似程度的描述统计量。"
          ],
          [
            "The more similar the scores are to each other, the lower the measure of dispersion will be.",
            "分数越相似，离散指标越小。"
          ],
          [
            "The less similar the scores are to each other, the higher the measure of dispersion will be.",
            "分数越不相似，离散指标越大。"
          ],
          [
            "In general, the more spread out a distribution is, the larger the measure of dispersion will be.",
            "通常，分布越分散，离散指标越大。"
          ],
          [
            "Which of the distributions of scores has the larger dispersion?",
            "哪一个分数分布的离散程度更大？"
          ]
        ],
        "walk": [
          "Compare 4,5,6 with 1,5,9: both means are 5, but the second set is more spread out. Centre and spread answer different questions. The source comparison figure continues onto the next page and is damaged, so no exact frequencies can be recovered.",
          "比较4、5、6与1、5、9：均值都为5，但第二组更分散。中心与离散回答不同问题。原对比图延续至下一页且已损坏，不能从中恢复精确频数。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-02",
        "image": "assets/week2/page-02.jpg",
        "clear": "assets/week2/clear-02.svg"
      },
      {
        "page": 3,
        "en": "Range: definition and question",
        "zh": "极差的定义与题目",
        "pairs": [
          [
            "The range is defined as the difference between the largest score in the set of data and the smallest score in the set of data, Xₗ − Xₛ.",
            "极差定义为最大分数与最小分数之差：Xₗ−Xₛ。"
          ],
          [
            "What is the range of the following data: 4, 8, 1, 6, 6, 2, 9, 3, 6, 9?",
            "求4、8、1、6、6、2、9、3、6、9的极差。"
          ]
        ],
        "walk": [
          "Circle the largest value, 9, and the smallest, 1. Subtract: 9−1=8. Do not subtract the first and last entries unless they happen to be the extremes.",
          "圈出最大9和最小1，再算9−1=8。不要直接用数据列的最后一个减第一个，除非它们恰好是两个极值。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-03",
        "image": "assets/week2/page-03.jpg",
        "clear": "assets/week2/clear-03.svg"
      },
      {
        "page": 4,
        "en": "Range: answer, use and limitations",
        "zh": "极差的答案、用途和局限",
        "pairs": [
          [
            "The largest score (Xₗ) is 9; the smallest score (Xₛ) is 1; the range is Xₗ − Xₛ = 9 − 1 = 8.",
            "最大9、最小1，极差9−1=8。"
          ],
          [
            "The range is used when you have ordinal data or you are presenting your results to people with little or no knowledge of statistics.",
            "课件建议在顺序数据，或向统计知识较少的人展示结果时使用极差。"
          ],
          [
            "The range is rarely used in scientific work as it is fairly insensitive.",
            "课件称极差在科学研究中较少使用，因为它对数据内部变化不敏感。"
          ],
          [
            "It depends on only two scores in the set of data, Xₗ and Xₛ.",
            "它只依赖两个值：最大值和最小值。"
          ],
          [
            "Two very different sets of data can have the same range: 1,1,1,1,9 vs 1,3,5,7,9.",
            "差别很大的两组数据也可能有相同极差：1、1、1、1、9与1、3、5、7、9。"
          ]
        ],
        "walk": [
          "Both examples have range 8 even though their interiors differ. Range is insensitive to interior changes but highly sensitive to extreme values. For purely ordinal labels, report lowest/highest categories; subtraction requires meaningful numerical distances. The lecturer’s use statements are guidance, not a prohibition on scientific reporting of range.",
          "两组极差都为8，但内部结构不同。极差对内部变化不敏感，却对极端值很敏感。纯顺序类别可报告最低和最高类别；相减需要数值距离有意义。课件用途说法是建议，不是禁止在科研中报告极差。"
        ],
        "topic": "range",
        "week": 2,
        "id": "slide-04",
        "image": "assets/week2/page-04.jpg",
        "clear": "assets/week2/clear-04.svg"
      },
      {
        "page": 5,
        "en": "Interquartile range",
        "zh": "四分位距",
        "pairs": [
          [
            "Divide the distribution into four equal parts.",
            "按位置将分布分成四个部分。"
          ],
          [
            "Q1, Q2, Q3",
            "第一、第二、第三四分位数。"
          ],
          [
            "The interquartile range is defined as the distance between the first quartile and the third quartile.",
            "四分位距是第一与第三四分位数之间的距离。"
          ]
        ],
        "walk": [
          "Q1 marks roughly 25%, Q2 is the median and Q3 marks roughly 75%. IQR=Q3−Q1 measures the width of the middle half. Quartile algorithms can differ for small samples; state the method or use the values supplied.",
          "Q1约为25%位置，Q2是中位数，Q3约为75%位置。IQR=Q3−Q1，描述中间一半的数据跨度。小样本的四分位算法可能不同，要说明方法，或使用题目给出的四分位数。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-05",
        "image": "assets/week2/page-05.jpg",
        "clear": "assets/week2/clear-05.svg"
      },
      {
        "page": 6,
        "en": "Semi-interquartile range",
        "zh": "半四分位距",
        "pairs": [
          [
            "Semi-interquartile Range",
            "半四分位距。"
          ],
          [
            "25% ",
            " 25% | 25% | 25%; Q1, Q2, Q3|四段各约25%；切点Q1、Q2、Q3。"
          ],
          [
            "Interquartile Range (IQR), continued",
            "四分位距（续）。"
          ]
        ],
        "walk": [
          "Semi-IQR=(Q3−Q1)/2. It is half the middle-half width and retains the original units. If Q1=4 and Q3=10, IQR=6 and semi-IQR=3. This numerical example is added explanation; it is not a recovered value from the damaged slide.",
          "半四分位距=(Q3−Q1)/2，仍使用原单位。例如Q1=4、Q3=10，则IQR=6，半IQR=3。这里的数字是补充示例，不是从损坏原图恢复的数据。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-06",
        "image": "assets/week2/page-06.jpg",
        "clear": "assets/week2/clear-06.svg"
      },
      {
        "page": 7,
        "en": "IQR example and transition to variance",
        "zh": "IQR图例与方差过渡",
        "pairs": [
          [
            "Interquartile range: 3.5 points",
            "四分位距：3.5分。"
          ],
          [
            "Bottom 25%; Top 25%",
            "最低25%；最高25%。"
          ],
          [
            "Q1 = 4.5; Q3 = 8",
            "第一四分位数4.5，第三四分位数8。"
          ],
          [
            "Variance",
            "方差（下一知识点标题）。"
          ]
        ],
        "walk": [
          "The readable graph gives Q1=4.5 and Q3=8. Subtract to get IQR=3.5; half gives semi-IQR=1.75. The two outer quarters are excluded from this width. We finish the IQR examples here before starting variance.",
          "可读图例给出Q1=4.5、Q3=8，故IQR=3.5，半IQR=1.75。这个宽度不包括两端各四分之一的数据。先完成IQR例题，再进入方差。"
        ],
        "topic": "quartile",
        "visual": {
          "headers": [
            "Q1",
            "Q3",
            "IQR",
            "Semi-IQR"
          ],
          "rows": [
            [
              "4.5",
              "8",
              "3.5",
              "1.75"
            ]
          ]
        },
        "week": 2,
        "id": "slide-07",
        "image": "assets/week2/page-07.jpg",
        "clear": "assets/week2/clear-07.svg"
      },
      {
        "page": 8,
        "en": "Variance: squared deviations",
        "zh": "方差：平方离差",
        "pairs": [
          [
            "Variance is defined as the average of the square deviations.",
            "方差定义为平方离差的平均。"
          ],
          [
            "Population: σ² = Σ(X − μ)² / N [formula reconstructed from the damaged layout]",
            "总体方差：σ²=Σ(X−μ)²/N（由损坏排版整理公式）。"
          ],
          [
            "Sample: s² = Σ(X − X̄)² / (N − 1)",
            "样本方差：s²=Σ(X−X̄)²/(N−1)。"
          ],
          [
            "What does the variance formula mean?",
            "方差公式是什么意思？"
          ]
        ],
        "walk": [
          "Take each value’s distance from the mean with its sign, square it and add the squares. Divide by N for a full population; use n−1 for the usual sample estimator. Squaring prevents positive and negative deviations cancelling.",
          "每个数减均值得到带符号离差，平方后相加。完整总体除以N；常用样本估计除以n−1。平方可以防止正负离差抵消。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-08",
        "image": "assets/week2/page-08.jpg",
        "clear": "assets/week2/clear-08.svg"
      },
      {
        "page": 9,
        "en": "Understanding a deviation",
        "zh": "理解离均差",
        "pairs": [
          [
            "First, subtract the mean from each of the scores.",
            "先将每个分数减去均值。"
          ],
          [
            "This difference is called a deviate or a deviation score.",
            "这个差称为离差或离差分数。"
          ],
          [
            "The deviate tells us how far a given score is from the typical, or average, score.",
            "离差告诉我们某个分数偏离典型值或平均值多少。"
          ],
          [
            "Thus, the deviate is a measure of dispersion for a given score.",
            "因此，离差描述单个分数相对中心的偏离。"
          ]
        ],
        "walk": [
          "If the mean is 7, a score of 9 has deviation +2 and a score of 5 has deviation −2. They lie equally far from 7 in opposite directions. The negative sign describes direction, not negative spread.",
          "均值7时，9的离差为+2，5的离差为−2。二者距7同样远，方向相反。负号表示方向，不是分散程度为负。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-09",
        "image": "assets/week2/page-09.jpg",
        "clear": "assets/week2/clear-09.svg"
      },
      {
        "page": 10,
        "en": "Interpreting variance",
        "zh": "方差的解释",
        "pairs": [
          [
            "Variance is the mean of the squared deviation scores.",
            "方差是平方离差的平均。"
          ],
          [
            "The larger the variance is, the more the scores deviate, on average, away from the mean.",
            "方差越大，分数通常越远离均值。"
          ],
          [
            "The smaller the variance is, the less the scores deviate, on average, from the mean.",
            "方差越小，分数通常越接近均值。"
          ],
          [
            "Standard Deviation",
            "标准差（过渡标题）。"
          ]
        ],
        "walk": [
          "Variance is nonnegative because squares cannot be negative. Variance zero means every observed value equals the mean. Compare variances using compatible scales and units; changing cm to m changes the numerical variance.",
          "平方不为负，因此方差不为负。方差为零表示所有观察值都等于均值。比较方差需要尺度和单位相容；厘米换成米会改变方差的数值。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-10",
        "image": "assets/week2/page-10.jpg",
        "clear": "assets/week2/clear-10.svg"
      },
      {
        "page": 11,
        "en": "Squared units and standard deviation",
        "zh": "平方单位与标准差",
        "pairs": [
          [
            "When the deviate scores are squared in variance, their unit of measure is squared as well.",
            "计算方差时离差被平方，单位也会平方。"
          ],
          [
            "If people’s weights are measured in pounds, the variance is expressed in pounds² (squared pounds).",
            "体重若以磅计，方差的单位为平方磅。"
          ],
          [
            "Since squared units are often awkward, the square root of variance is often used instead.",
            "平方单位常不便解释，因此常使用方差的平方根。"
          ],
          [
            "The standard deviation is the square root of variance.",
            "标准差是方差的平方根。"
          ],
          [
            "When calculating variance, it is often easier to use an algebraically equivalent computational formula.",
            "计算方差时，可使用与定义式等价的计算公式。"
          ]
        ],
        "walk": [
          "Variance describes squared distances. Taking its square root returns to the original units: 9 kg² corresponds to SD 3 kg. The next slide gives the shortcut formula, which must yield the same result as the deviation method.",
          "方差描述平方距离。开平方回到原单位：方差9平方千克对应标准差3千克。下一页快捷公式应与离差方法得到同一结果。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-11",
        "image": "assets/week2/page-11.jpg",
        "clear": "assets/week2/clear-11.svg"
      },
      {
        "page": 12,
        "en": "Population variance: equivalent formulas",
        "zh": "总体方差的等价公式",
        "pairs": [
          [
            "σ² = Σ(X − μ)² / N = [ΣX² − (ΣX)² / N] / N [reconstructed mathematical layout]",
            "σ²=Σ(X−μ)²/N=[ΣX²−(ΣX)²/N]/N（整理数学排版）。"
          ],
          [
            "σ² is the population variance; X is a score; μ is the population mean; N is the number of scores.",
            "σ²为总体方差，X为一个分数，μ为总体均值，N为分数个数。"
          ]
        ],
        "walk": [
          "Be careful: ΣX² means square each value and then add; (ΣX)² means add first and then square. These are different. The outer division by N is still required in the shortcut.",
          "注意ΣX²是各数先平方再相加，(ΣX)²是先相加再平方，二者不同。快捷式的最外层仍需除以N。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-12",
        "image": "assets/week2/page-12.jpg",
        "clear": "assets/week2/clear-12.svg"
      },
      {
        "page": 13,
        "en": "Variance calculation table",
        "zh": "方差计算表",
        "pairs": [
          [
            "X ",
            " X² | X − μ | (X − μ)²|分数｜分数平方｜离均差｜离均差平方。"
          ],
          [
            "9 ",
            " 81 | 2 | 4|9｜81｜2｜4。"
          ],
          [
            "8 ",
            " 64 | 1 | 1|8｜64｜1｜1。"
          ],
          [
            "6 ",
            " 36 | −1 | 1|6｜36｜−1｜1。"
          ],
          [
            "5 ",
            " 25 | −2 | 4|5｜25｜−2｜4。"
          ],
          [
            "8 ",
            " 64 | 1 | 1|8｜64｜1｜1。"
          ],
          [
            "6 ",
            " 36 | −1 | 1|6｜36｜−1｜1。"
          ],
          [
            "ΣX=42; ΣX²=306; Σ(X−μ)=0; Σ(X−μ)²=12",
            "各列总计：42、306、0、12。"
          ]
        ],
        "walk": [
          "There are six observations and μ=42/6=7. Each row subtracts 7, then squares the result. Signed deviations sum to zero, while squared deviations sum to 12. The table’s two different 8s and two different 6s are separate observations.",
          "共有6个观察，μ=42/6=7。每行减7，再平方。带符号离差和为0，平方离差和为12。两个8与两个6都要分别计算，不可去重。"
        ],
        "topic": null,
        "visual": {
          "headers": [
            "X",
            "X²",
            "X − μ",
            "(X − μ)²"
          ],
          "rows": [
            [
              "9",
              "81",
              "2",
              "4"
            ],
            [
              "8",
              "64",
              "1",
              "1"
            ],
            [
              "6",
              "36",
              "−1",
              "1"
            ],
            [
              "5",
              "25",
              "−2",
              "4"
            ],
            [
              "8",
              "64",
              "1",
              "1"
            ],
            [
              "6",
              "36",
              "−1",
              "1"
            ],
            [
              "Σ 42",
              "Σ 306",
              "Σ 0",
              "Σ 12"
            ]
          ]
        },
        "week": 2,
        "id": "slide-13",
        "image": "assets/week2/page-13.jpg",
        "clear": "assets/week2/clear-13.svg"
      },
      {
        "page": 14,
        "en": "Variance result and sample adjustment",
        "zh": "方差结果与样本调整",
        "pairs": [
          [
            "σ² = [306 − 42²/6] / 6 = (306 − 294)/6 = 12/6 = 2",
            "总体方差=[306−42²/6]/6=2。"
          ],
          [
            "σ² = Σ(X − μ)²/N = 12/6 = 2",
            "用定义式同样得到12/6=2。"
          ],
          [
            "Variance of a Sample: Because the sample mean is not a perfect estimate of the population… [sentence continues next page]",
            "样本方差：因为样本均值并非总体均值的完美估计……（下页续）。"
          ]
        ],
        "walk": [
          "Both formulas agree: population variance is 2 squared units. If the same six scores are used to estimate a larger population’s variance, the usual sample variance is 12/(6−1)=2.4. Keep the inferential purpose and denominator clear.",
          "两种公式一致：总体方差为2个平方单位。若用这6个数估计更大总体的方差，常用样本方差为12/(6−1)=2.4。要分清计算目的和分母。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-14",
        "image": "assets/week2/page-14.jpg",
        "clear": "assets/week2/clear-14.svg"
      },
      {
        "page": 15,
        "en": "Variance of a sample",
        "zh": "样本方差",
        "pairs": [
          [
            "…mean, the formula for the variance of a sample is slightly different from the formula for the variance of a population.",
            "……因此样本方差的公式与总体方差稍有不同。"
          ],
          [
            "s² = Σ(X − X̄)² / (N − 1) [reconstructed mathematical layout]",
            "s²=Σ(X−X̄)²/(N−1)（整理数学排版）。"
          ]
        ],
        "walk": [
          "Estimating the mean from the same sample uses one degree of freedom. Dividing the squared-deviation sum by n−1 produces the usual unbiased estimator of population variance under independent identically distributed sampling. This corrects variance, not a claim that sample means are biased.",
          "用同一样本估计均值会使用一个自由度。独立同分布抽样条件下，平方离差和除以n−1得到常用的总体方差无偏估计。这是方差的校正，不是说样本均值有偏。"
        ],
        "topic": "variance",
        "week": 2,
        "id": "slide-15",
        "image": "assets/week2/page-15.jpg",
        "clear": "assets/week2/clear-15.svg"
      },
      {
        "page": 16,
        "en": "Calculating standard deviation",
        "zh": "计算标准差",
        "pairs": [
          [
            "s² is the sample variance; X is a score; X̄ is the sample mean; N is the number of scores.",
            "s²为样本方差，X为一个分数，X̄为样本均值，N为分数个数。"
          ],
          [
            "The standard deviation is the most common way to measure deviation from the mean and is simply the square root of the variance.",
            "标准差是常见的均值周围离散指标，即方差的平方根。"
          ],
          [
            "We normally call the variance s² and the standard deviation s. For our example, s² = 507.2 and s = 22.5.",
            "通常以s²表示方差，s表示标准差。本页另一个示例给出s²=507.2、s=22.5。"
          ]
        ],
        "walk": [
          "√507.2≈22.521, which rounds to 22.5. These are a different example from the previous six scores; do not connect 507.2 to their variance 2 or 2.4. The displayed standard-deviation formula continues on the next page.",
          "√507.2≈22.521，四舍五入到一位小数为22.5。这是另一个示例，不能与前面6个数的方差2或2.4混用。标准差公式延续到下一页。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-16",
        "image": "assets/week2/page-16.jpg",
        "clear": "assets/week2/clear-16.svg"
      },
      {
        "page": 17,
        "en": "Standard deviation formula and clustered example",
        "zh": "标准差公式与集中分布",
        "pairs": [
          [
            "s = √[Σ(Xᵢ − X̄)² / n] [displayed formula; the slide notes the denominator correction]",
            "显示公式为s=√[Σ(Xᵢ−X̄)²/n]；课件另注分母校正。"
          ],
          [
            "We usually use n−1 in the denominator.",
            "通常在分母使用n−1。"
          ],
          [
            "Examples of standard deviation: s = 1.67; Clustered distribution.",
            "标准差例子：s=1.67，较集中的分布。"
          ],
          [
            "Most children perform to a similar level, with some variation. [continues next page]",
            "大多数孩子表现接近，同时存在一定变化（下页续）。"
          ]
        ],
        "walk": [
          "Use s=√[Σ(Xᵢ−X̄)²/(n−1)] for the usual sample SD. The corrected denominator is stated in the lecturer’s note. A value of 1.67 describes more spread than 1.02 on the same scale; original graph frequencies are not recoverable from this damaged page.",
          "常用样本标准差为s=√[Σ(Xᵢ−X̄)²/(n−1)]，分母校正来自老师的注释。在同一尺度上，1.67表示比1.02更分散；损坏图中精确频数无法恢复。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-17",
        "image": "assets/week2/page-17.jpg",
        "clear": "assets/week2/clear-17.svg"
      },
      {
        "page": 18,
        "en": "Comparing standard deviations",
        "zh": "比较标准差",
        "pairs": [
          [
            "s = 4.01: Dispersed distribution.",
            "s=4.01：分散的分布。"
          ],
          [
            "“One group of geniuses, one group of idiots” [original illustration wording]",
            "“一组天才、一组笨蛋”（原图措辞）。"
          ],
          [
            "s = 1.02: Tight distribution; all children perform similarly.",
            "s=1.02：紧密的分布；所有孩子表现相近。"
          ],
          [
            "High levels of s indicate greater variation; s gives a broad idea of a typical distance from the mean.",
            "s越大通常表示变化越大，并粗略反映距均值的典型距离。"
          ],
          [
            "The concept of standard deviation is an important one.",
            "标准差是重要概念。"
          ]
        ],
        "walk": [
          "Read the comparison as tight 1.02 < clustered 1.67 < dispersed 4.01. SD summarizes score variation; it cannot justify labelling children’s intelligence, and the original labels are inappropriate. It is not the arithmetic mean of absolute distances.",
          "比较关系为紧密1.02＜较集中1.67＜分散4.01。标准差概括分数差异，不能据此给孩子贴智力标签，原图措辞不恰当。标准差也不是绝对离差的算术平均。"
        ],
        "topic": null,
        "visual": {
          "headers": [
            "Distribution",
            "SD"
          ],
          "rows": [
            [
              "Tight",
              "1.02"
            ],
            [
              "Clustered",
              "1.67"
            ],
            [
              "Dispersed",
              "4.01"
            ]
          ]
        },
        "week": 2,
        "id": "slide-18",
        "image": "assets/week2/page-18.jpg",
        "clear": "assets/week2/clear-18.svg"
      },
      {
        "page": 19,
        "en": "Population and sample SD",
        "zh": "总体与样本标准差",
        "pairs": [
          [
            "Population: σ = √[Σ(X − μ)²/N]",
            "总体标准差：σ=√[Σ(X−μ)²/N]。"
          ],
          [
            "Sample: s = √[Σ(X − X̄)²/(n−1)]",
            "样本标准差：s=√[Σ(X−X̄)²/(n−1)]。"
          ],
          [
            "X: value in the data distribution; μ: population mean; X̄: sample mean; N/n: number of observations.",
            "X为数据值；μ为总体均值；X̄为样本均值；N/n为观察数。"
          ],
          [
            "Measure of Skew",
            "偏度（下一知识点标题）。"
          ]
        ],
        "walk": [
          "The two formulas use the appropriate mean and denominator. For the six-score example, population SD=√2≈1.414; sample SD=√2.4≈1.549. Do not call the sample denominator N just because the slide uses a capital letter; identify its role.",
          "两式分别使用对应均值和分母。前面6个数的总体标准差√2≈1.414，样本标准差√2.4≈1.549。不要只凭课件使用大写N判断总体或样本，要看其含义。"
        ],
        "topic": "sd",
        "visual": {
          "headers": [
            "Population",
            "Sample"
          ],
          "rows": [
            [
              "σ = √[Σ(X−μ)²/N]",
              "s = √[Σ(X−X̄)²/(n−1)]"
            ]
          ]
        },
        "week": 2,
        "id": "slide-19",
        "image": "assets/week2/page-19.jpg",
        "clear": "assets/week2/clear-19.svg"
      },
      {
        "page": 20,
        "en": "Skewness: symmetry and tails",
        "zh": "偏度：对称与尾部",
        "pairs": [
          [
            "Skew is a measure of symmetry in the distribution of scores.",
            "偏度衡量分数分布的对称情况。"
          ],
          [
            "Normal (skew = 0); Positive Skew; Negative Skew",
            "正态（偏度0）；正偏；负偏。"
          ],
          [
            "The following formula can be used to determine skew. [continues next page]",
            "以下公式用于计算偏度（下页续）。"
          ]
        ],
        "walk": [
          "Skewness measures asymmetry. A long right tail indicates positive skew; a long left tail indicates negative skew. The side containing most observations may be the opposite side from the tail.",
          "偏度衡量不对称性。右侧长尾表示正偏，左侧长尾表示负偏。多数数据所在的一侧可能与尾巴方向相反。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-20",
        "image": "assets/week2/page-20.jpg",
        "clear": "assets/week2/clear-20.svg"
      },
      {
        "page": 21,
        "en": "Skewness formula",
        "zh": "偏度公式",
        "pairs": [
          [
            "Skew = [Σ(X − X̄)³/N] / [Σ(X − X̄)²/N]^(3/2) [reconstructed from damaged formula]",
            "偏度=[Σ(X−X̄)³/N]/[Σ(X−X̄)²/N]^(3/2)（由损坏公式整理）。"
          ],
          [
            "Measure of Skew",
            "偏度测量。"
          ]
        ],
        "walk": [
          "Write m₂=average squared deviation and m₃=average cubed deviation. Then g₁=m₃/m₂^(3/2). Cubes preserve signs, so tail direction affects the sign; standardization removes units. If variance is zero, this coefficient is undefined. SPSS may report a bias-adjusted estimator rather than exactly this moment formula.",
          "令m₂为平方离差平均、m₃为立方离差平均，则g₁=m₃/m₂^(3/2)。立方保留正负号，因此尾部方向影响符号；标准化消除单位。方差为零时该系数无定义。SPSS可能报告偏差校正估计，与这里的矩公式不完全相同。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-21",
        "image": "assets/week2/page-21.jpg",
        "clear": "assets/week2/clear-21.svg"
      },
      {
        "page": 22,
        "en": "Interpreting skewness and introducing kurtosis",
        "zh": "偏度解释与峰度引入",
        "pairs": [
          [
            "If s³ < 0, the distribution has a negative skew.",
            "课件记号s³＜0表示负偏。"
          ],
          [
            "If s³ > 0, the distribution has a positive skew.",
            "课件记号s³＞0表示正偏。"
          ],
          [
            "If s³ = 0, the distribution is symmetrical. [original claim]",
            "课件称s³=0表示分布对称（原文说法）。"
          ],
          [
            "The more different s³ is from 0, the greater the skew in the distribution.",
            "偏度离0越远，不对称程度通常越大。"
          ],
          [
            "Kurtosis measures whether the scores are spread out more or less than in a normal (Gaussian) distribution. [original wording]",
            "课件称峰度衡量相较正态分布是否更分散（原文说法）。"
          ]
        ],
        "walk": [
          "The slide uses s³ as a label for skewness, not an ordinary sample SD cubed. Zero skewness does not by itself prove symmetry; symmetric distributions with finite moments have zero skewness, but the converse need not hold. Kurtosis will require a more precise tail-based interpretation on the next pages.",
          "课件的s³是偏度记号，不是把普通标准差简单立方。偏度为0不能单独证明对称；具有有限相关矩的对称分布偏度为0，但反过来不一定成立。下一页会更准确地解释峰度与尾部。"
        ],
        "topic": "skew",
        "week": 2,
        "id": "slide-22",
        "image": "assets/week2/page-22.jpg",
        "clear": "assets/week2/clear-22.svg"
      },
      {
        "page": 23,
        "en": "Kurtosis categories",
        "zh": "峰度类别",
        "pairs": [
          [
            "Mesokurtic (s⁴ = 3); Leptokurtic (s⁴ > 3); Platykurtic (s⁴ < 3)",
            "中峰态=3；高峰态＞3；低峰态＜3（课件峰度记号s⁴）。"
          ],
          [
            "When the distribution is normally distributed, its kurtosis equals 3 and it is said to be mesokurtic.",
            "正态分布的普通峰度等于3，称为中峰态。"
          ],
          [
            "When the distribution is less spread out than normal, its kurtosis is greater than 3 and it is said to be leptokurtic. [original wording]",
            "课件称“比正态更集中时峰度大于3，称高峰态”（原文说法）。"
          ]
        ],
        "walk": [
          "Use the numerical categories, but clarify their meaning: kurtosis is standardized fourth-moment tail extremity, not simply narrowness or peak height. A high-kurtosis distribution can have the same variance as a normal distribution. Ordinary kurtosis has normal benchmark 3; excess kurtosis has benchmark 0.",
          "保留数值分类，但澄清含义：峰度与标准化四阶矩所反映的尾部极端值有关，不只是宽窄或峰高。高峰度分布可与正态分布方差相同。普通峰度以3为正态基准，超额峰度以0为基准。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-23",
        "image": "assets/week2/page-23.jpg",
        "clear": "assets/week2/clear-23.svg"
      },
      {
        "page": 24,
        "en": "Kurtosis: wording and formula transition",
        "zh": "峰度措辞与公式过渡",
        "pairs": [
          [
            "When the distribution is more spread out than normal, its kurtosis is less than 3 and it is said to be platykurtic. [original wording]",
            "课件称“比正态更分散时峰度小于3，称低峰态”（原文说法）。"
          ],
          [
            "Measure of Kurtosis: The measure of kurtosis is given by… [formula continues next page]",
            "峰度测量：公式如下……（公式延续到下一页）。"
          ]
        ],
        "walk": [
          "Platykurtic means ordinary kurtosis below 3. It is not a rule that its SD must exceed a normal distribution’s SD: rescaling changes SD while leaving standardized kurtosis unchanged. Read the full formula next, rather than the broken symbols on this page.",
          "低峰态指普通峰度小于3，并不要求其标准差一定大于正态分布：改单位会改变标准差，却不改变标准化峰度。下一页提供整理后的完整公式。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-24",
        "image": "assets/week2/page-24.jpg",
        "clear": "assets/week2/clear-24.svg"
      },
      {
        "page": 25,
        "en": "Kurtosis formula and distribution shape",
        "zh": "峰度公式与分布形状",
        "pairs": [
          [
            "Kurtosis = [Σ(X − X̄)⁴/N] / [Σ(X − X̄)²/N]² [reconstructed mathematical layout]",
            "峰度=[Σ(X−X̄)⁴/N]/[Σ(X−X̄)²/N]²（整理数学排版）。"
          ],
          [
            "Collectively, the variance (s²), skew (s³), and kurtosis (s⁴) describe the shape of the distribution.",
            "方差、偏度和峰度共同描述分布形状。"
          ]
        ],
        "walk": [
          "In moment notation κ=m₄/m₂². The fourth power gives extreme deviations strong weight. Variance measures spread; skewness measures asymmetry; kurtosis describes standardized tail extremity. Use the same definition when comparing with the normal benchmark or SPSS output.",
          "用中心矩记号写为κ=m₄/m₂²。四次方使极端离差具有较大权重。方差描述分散，偏度描述不对称，峰度描述标准化尾部极端程度。与正态基准或SPSS结果比较时必须采用同一定义。"
        ],
        "topic": "kurtosis",
        "week": 2,
        "id": "slide-25",
        "image": "assets/week2/page-25.jpg",
        "clear": "assets/week2/clear-25.svg"
      },
      {
        "page": 26,
        "en": "Descriptive statistics",
        "zh": "描述统计",
        "pairs": [
          [
            "Descriptive & Inferential Statistics",
            "描述统计与推断统计。"
          ],
          [
            "Descriptive Statistics: Organize; Summarize; Simplify.",
            "描述统计：整理、汇总、简化。"
          ]
        ],
        "walk": [
          "A table of the observed students’ marks organizes the sample; a mean summarizes it; a graph simplifies its pattern. These operations alone do not generalize to unobserved students. Some original pictures are unavailable in this PDF, but these words are readable.",
          "把实际学生分数制成表格是整理，计算均值是汇总，画图是简化。仅做这些并不自动推及未观察学生。原PDF部分图片缺失，但这些文字可读。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-26",
        "image": "assets/week2/page-26.jpg",
        "clear": "assets/week2/clear-26.svg"
      },
      {
        "page": 27,
        "en": "Inferential statistics",
        "zh": "推断统计",
        "pairs": [
          [
            "Presentation of data",
            "呈现数据（描述统计续）。"
          ],
          [
            "Inferential Statistics: Generalize from samples to pops; Hypothesis testing; Relationships among variables.",
            "推断统计：从样本推广到总体，假设检验，研究变量关系。"
          ],
          [
            "Describing data; Make predictions",
            "描述数据；作出预测。"
          ]
        ],
        "walk": [
          "“Pops” abbreviates populations. Inference uses a sample to support statements about a larger target group or model. Merely finding a relationship in one sample is descriptive; testing a population association is inferential. Sampling and assumptions determine how far the inference can go.",
          "Pops是总体的缩写。推断用样本支持对更大目标群体或模型的说法。仅报告一个样本中的关系属于描述；检验总体关联属于推断。推广范围取决于抽样和假设。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-27",
        "image": "assets/week2/page-27.jpg",
        "clear": "assets/week2/clear-27.svg"
      },
      {
        "page": 28,
        "en": "Sample and population diagram",
        "zh": "样本与总体图",
        "pairs": [
          [
            "Inferential Statistics; Sample; Population",
            "推断统计；样本；总体。"
          ],
          [
            "Sample [repeated labels around the diagram]",
            "样本（原图多处标签）。"
          ]
        ],
        "walk": [
          "The readable labels show samples and a population, but parts of the diagram are missing. The underlying idea is sample → evidence → population statement. Repeated possible samples can give different estimates, so one sample is not a perfect copy of the population.",
          "可读标签为样本和总体，原图部分内容缺失。核心思路是样本→证据→总体结论。不同可能样本给出的估计可能不同，因此一个样本不是总体的完美复制。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-28",
        "image": "assets/week2/page-28.jpg",
        "clear": "assets/week2/clear-28.svg"
      },
      {
        "page": 29,
        "en": "Inference to a larger group",
        "zh": "推及较大群体",
        "pairs": [
          [
            "Draw inferences about the larger group.",
            "对更大的群体作推断。"
          ],
          [
            "BAR CHART",
            "柱状图（下一部分标题）。"
          ]
        ],
        "walk": [
          "If you randomly sample 100 students and estimate the university mean, the larger group is all target students. A convenience sample may be biased even if it contains 100 cases. We finish inference here; the bar-chart title introduces the next display topic.",
          "随机抽取100名学生估计全校均值时，更大的群体是目标学生总体。便利样本即使有100人也可能有偏。推断部分到此结束，柱状图标题引入下个展示主题。"
        ],
        "topic": "inference",
        "week": 2,
        "id": "slide-29",
        "image": "assets/week2/page-29.jpg",
        "clear": "assets/week2/clear-29.svg"
      },
      {
        "page": 30,
        "en": "Bar chart and dot plot",
        "zh": "柱状图与点图",
        "pairs": [
          [
            "DOT PLOT",
            "点图。"
          ],
          [
            "The embedded display is unavailable in the supplied PDF.",
            "所提供PDF的内嵌图无法读取（来源状态说明）。"
          ]
        ],
        "walk": [
          "The original page supplies no recoverable plotted values. Added explanation: a bar chart compares category counts with bars; a numerical dot plot places one dot per observation at its value. Use the supplementary worked examples below to practise these ideas; their data are new examples, not recovered original values.",
          "本页没有可恢复的作图数值。补充讲解：柱状图用柱比较类别频数；数值点图把每次观察画在对应数值处。下方额外例题使用新编数据练习这些概念，并非恢复原图数值。"
        ],
        "topic": "charts",
        "sourceGap": true,
        "week": 2,
        "id": "slide-30",
        "image": "assets/week2/page-30.jpg",
        "clear": "assets/week2/clear-30.svg"
      },
      {
        "page": 31,
        "en": "What is a variable?",
        "zh": "什么是变量",
        "pairs": [
          [
            "What is Variable?",
            "什么是变量？"
          ],
          [
            "The embedded illustration is unavailable in the supplied PDF.",
            "所提供PDF内嵌插图无法读取（来源状态说明）。"
          ]
        ],
        "walk": [
          "A variable can differ across cases or conditions. Height varies across students; paint type varies across treatment groups. The definition is readable on the next page. The missing illustration is not reconstructed as if it were original.",
          "变量可以在对象或条件间取不同值。身高可在学生之间不同，颜料类型可在处理组间不同。下一页的定义可读。这里不把缺失插图虚构成原内容。"
        ],
        "topic": null,
        "sourceGap": true,
        "week": 2,
        "id": "slide-31",
        "image": "assets/week2/page-31.jpg",
        "clear": "assets/week2/clear-31.svg"
      },
      {
        "page": 32,
        "en": "Variables and independent variable",
        "zh": "变量与自变量",
        "pairs": [
          [
            "A variable is any factor that can change in a scientific environment or experiment.",
            "变量是在科学研究或实验中能够变化的因素。"
          ],
          [
            "Types of variable: Independent variable (IV); Dependent variable (DV); Controlled variable.",
            "变量类型：自变量、因变量、控制变量。"
          ],
          [
            "Independent Variable",
            "自变量。"
          ]
        ],
        "walk": [
          "In an experiment, IV is the factor changed by the researcher. In a paint-drying example, the IV is paint type. This concrete example is added teaching, because the source’s embedded independent-variable illustration is unavailable.",
          "实验中，自变量是研究者改变的因素。例如研究颜料干燥，自变量是颜料类型。这个具体情境是补充教学，因为原自变量插图缺失。"
        ],
        "topic": null,
        "week": 2,
        "id": "slide-32",
        "image": "assets/week2/page-32.jpg",
        "clear": "assets/week2/clear-32.svg"
      },
      {
        "page": 33,
        "en": "Dependent variable",
        "zh": "因变量",
        "pairs": [
          [
            "Dependent Variable",
            "因变量。"
          ],
          [
            "The embedded illustration is unavailable in the supplied PDF.",
            "所提供PDF内嵌插图无法读取（来源状态说明）。"
          ]
        ],
        "walk": [
          "DV is the measured outcome. In the added paint example, measure drying time in minutes. “Paint type” answers what changes; “drying time” answers what is measured. The names describe research roles, not the inherent scale of every variable.",
          "因变量是测量的结果。在补充颜料例子中，测量以分钟计的干燥时间。颜料类型回答改什么，干燥时间回答量什么。名称描述研究角色，不决定变量的测量尺度。"
        ],
        "topic": null,
        "sourceGap": true,
        "week": 2,
        "id": "slide-33",
        "image": "assets/week2/page-33.jpg",
        "clear": "assets/week2/clear-33.svg"
      },
      {
        "page": 34,
        "en": "Controlled variable",
        "zh": "控制变量",
        "pairs": [
          [
            "Controlled Variable",
            "控制变量。"
          ],
          [
            "The embedded illustration is unavailable in the supplied PDF.",
            "所提供PDF内嵌插图无法读取（来源状态说明）。"
          ]
        ],
        "walk": [
          "Controlled variables are deliberately held constant to make treatment comparisons fair. In the added paint example, hold room temperature, surface and coating thickness constant. A controlled variable is not the same thing as a control group.",
          "控制变量是为了公平比较而刻意保持一致的因素。颜料补充例子中可固定室温、涂布表面和厚度。控制变量不等于对照组。"
        ],
        "topic": "variables",
        "sourceGap": true,
        "week": 2,
        "id": "slide-34",
        "image": "assets/week2/page-34.jpg",
        "clear": "assets/week2/clear-34.svg"
      },
      {
        "page": 35,
        "en": "Original classroom question 1: source unavailable",
        "zh": "原课堂题1：来源内容缺失",
        "pairs": [
          [
            "Question 1",
            "第1题。"
          ],
          [
            "The question image is unavailable in the supplied PDF.",
            "所提供PDF中的题目图片缺失（来源状态说明）。"
          ]
        ],
        "walk": [
          "Only the question heading and broken-image placeholder are present. The original wording, choices and answer cannot be verified. The supplied PDF is retained for comparison. Practise with the separately labelled additional variable-role examples; no answer is invented for this missing original question.",
          "源文件仅含题号和缺图占位符，无法核实原题题干、选项与答案。保留原页供核对。请使用单独标注的变量角色额外例题练习，这里不虚构原题答案。"
        ],
        "topic": null,
        "sourceGap": true,
        "week": 2,
        "id": "slide-35",
        "image": "assets/week2/page-35.jpg",
        "clear": "assets/week2/clear-35.svg"
      },
      {
        "page": 38,
        "en": "Original classroom question 2: source unavailable",
        "zh": "原课堂题2：来源内容缺失",
        "pairs": [
          [
            "Question 2",
            "第2题。"
          ],
          [
            "The question image is unavailable in the supplied PDF.",
            "所提供PDF中的题目图片缺失（来源状态说明）。"
          ]
        ],
        "walk": [
          "Only the question heading and broken-image placeholder are present. The original wording, choices and answer cannot be verified. The supplied PDF is retained for comparison. Practise with the separately labelled additional variable-role examples; no answer is invented for this missing original question.",
          "源文件仅含题号和缺图占位符，无法核实原题题干、选项与答案。保留原页供核对。请使用单独标注的变量角色额外例题练习，这里不虚构原题答案。"
        ],
        "topic": null,
        "sourceGap": true,
        "week": 2,
        "id": "slide-38",
        "image": "assets/week2/page-38.jpg",
        "clear": "assets/week2/clear-38.svg"
      },
      {
        "page": 41,
        "en": "Original classroom question 3: source unavailable",
        "zh": "原课堂题3：来源内容缺失",
        "pairs": [
          [
            "Question 3",
            "第3题。"
          ],
          [
            "The question image is unavailable in the supplied PDF.",
            "所提供PDF中的题目图片缺失（来源状态说明）。"
          ]
        ],
        "walk": [
          "Only the question heading and broken-image placeholder are present. The original wording, choices and answer cannot be verified. The supplied PDF is retained for comparison. Practise with the separately labelled additional variable-role examples; no answer is invented for this missing original question.",
          "源文件仅含题号和缺图占位符，无法核实原题题干、选项与答案。保留原页供核对。请使用单独标注的变量角色额外例题练习，这里不虚构原题答案。"
        ],
        "topic": null,
        "sourceGap": true,
        "week": 2,
        "id": "slide-41",
        "image": "assets/week2/page-41.jpg",
        "clear": "assets/week2/clear-41.svg"
      }
    ]
  },
  "3": {
    "week": 3,
    "sourcePages": 40,
    "excluded": [
      {
        "page": 1,
        "reason": "Cover"
      },
      {
        "page": 39,
        "reason": "Summary divider without new content"
      },
      {
        "page": 40,
        "reason": "Thank-you page"
      }
    ],
    "slides": [
      {
        "page": 2,
        "en": "Today you will learn",
        "zh": "本周学习目标",
        "pairs": [
          [
            "Hypothesis Testing",
            "假设检验"
          ],
          [
            "One sample T-test",
            "单样本t检验"
          ],
          [
            "Independent sample T-test",
            "独立样本t检验"
          ],
          [
            "Paired T-test",
            "配对t检验"
          ]
        ],
        "walk": [
          "The lecture begins with how a test makes a decision, then teaches three designs: one group versus a fixed number, two independent groups, and paired measurements. Learn to identify the design before selecting the test.",
          "先理解检验如何作判断，再学习三种设计：一组与固定数比较、两组独立对象比较、成对测量比较。先判断研究设计，再选择检验。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-02",
        "image": "assets/week3/page-02.jpg",
        "clear": "assets/week3/clear-02.svg"
      },
      {
        "page": 3,
        "en": "Hypothesis testing",
        "zh": "假设检验",
        "pairs": [
          [
            "Hypothesis testing is the key to our scientific inquiry.",
            "假设检验是科学探究的重要环节。"
          ],
          [
            "In addition to research hypotheses, need statistical hypotheses.",
            "除了研究假设，还需要统计假设。"
          ],
          [
            "Involves the statement of a null hypothesis, an alternative hypothesis, and the selection of a level of significance.",
            "需要提出原假设、备择假设，并选择显著性水平。"
          ]
        ],
        "walk": [
          "A research question such as “does the drug change the outcome?” becomes a precise statistical claim about a population. Before testing, state H₀, state H₁ and choose α. A test evaluates evidence under a model; it does not prove every aspect of a research explanation.",
          "例如“药物是否改变结果”要转化为关于总体的明确统计命题。检验前先写H₀、H₁，并设定α。检验是在模型下评估证据，不会证明研究解释的每个方面。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-03",
        "image": "assets/week3/page-03.jpg",
        "clear": "assets/week3/clear-03.svg"
      },
      {
        "page": 4,
        "en": "Statistical hypotheses",
        "zh": "统计假设",
        "pairs": [
          [
            "Statements of circumstances in the population that the statistical process will examine and decide the likely truth or validity.",
            "描述总体情况的命题，统计过程对其合理性进行考察（原文表述）。"
          ],
          [
            "Statistical hypotheses are discussed in terms of the population, not the sample, yet tested on samples.",
            "统计假设针对总体而不是样本，但使用样本进行检验。"
          ],
          [
            "Based on the mathematical concept of probability.",
            "以概率这一数学概念为基础。"
          ],
          [
            "Null Hypothesis; Alternative Hypothesis",
            "原假设；备择假设"
          ]
        ],
        "walk": [
          "The target is a population parameter, such as μ, not the already observed sample mean x̄. We use x̄ as evidence about μ. Clarification: a conventional p-value does not directly provide the probability that a hypothesis is true; it measures how unusual the evidence is under the null model.",
          "目标是总体参数（如μ），不是已经观察到的样本均值x̄；x̄用作关于μ的证据。澄清：常规p值不会直接给出假设为真的概率，而是在原假设模型下衡量证据有多异常。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-04",
        "image": "assets/week3/page-04.jpg",
        "clear": "assets/week3/clear-04.svg"
      },
      {
        "page": 5,
        "en": "Null hypothesis",
        "zh": "原假设",
        "pairs": [
          [
            "The case when the two groups are equal; population means are the same.",
            "两组相等、总体均值相同的情形。"
          ],
          [
            "Null Hypothesis = H₀",
            "原假设记作H₀。"
          ],
          [
            "This is the hypothesis being tested.",
            "这是接受检验的假设。"
          ],
          [
            "H₀ is assumed to be true.",
            "计算检验分布时暂按H₀为真。"
          ]
        ],
        "walk": [
          "For two population means, write H₀: μ₁=μ₂, or μ₁−μ₂=0. “Assumed true” is the reference condition used to calculate the test, not a declaration that equality has been established. In a one-sample test, H₀ instead compares μ with a fixed μ₀.",
          "比较两个总体均值时，写H₀：μ₁=μ₂，或μ₁−μ₂=0。“按其为真”是计算检验的参考条件，不是已证实相等。单样本检验中，H₀比较的是μ与固定μ₀。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-05",
        "image": "assets/week3/page-05.jpg",
        "clear": "assets/week3/clear-05.svg"
      },
      {
        "page": 6,
        "en": "Alternative hypothesis",
        "zh": "备择假设",
        "pairs": [
          [
            "The case when the two groups are not equal; when there is some treatment difference; when other possibilities exist.",
            "两组不相等、存在某种处理差异或其他可能性的情形。"
          ],
          [
            "Alternative Hypothesis = H₁ or Hₐ",
            "备择假设记作H₁或Hₐ。"
          ],
          [
            "H₁ is assumed to be true when the H₀ is false.",
            "原文：当H₀为假时，认为H₁为真。"
          ]
        ],
        "walk": [
          "For a two-sided comparison, H₁: μ₁≠μ₂ covers differences in either direction. A directional alternative uses > or < and must be chosen for the research question before inspecting the result. A rejection supplies evidence against the stated null within the specified model; it is not absolute proof of a substantive theory.",
          "双侧比较写H₁：μ₁≠μ₂，涵盖两个方向。单侧备择使用>或<，应根据研究问题预先决定。拒绝原假设是在指定模型内获得反对它的证据，不是绝对证明某种研究理论。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-06",
        "image": "assets/week3/page-06.jpg",
        "clear": "assets/week3/clear-06.svg"
      },
      {
        "page": 7,
        "en": "Example: a treatment effect",
        "zh": "例子：处理效应",
        "pairs": [
          [
            "H₀: There is no treatment effect. The drug has no effect.",
            "H₀：没有处理效应，药物没有效应。"
          ],
          [
            "H₁: There is a treatment effect. The drug had an (some, any) effect.",
            "H₁：存在处理效应，药物有某种效应。"
          ]
        ],
        "walk": [
          "Translate “no effect” into the parameter relevant to the design: for example, a mean difference of zero. Then use observed data to see whether that benchmark is plausible under the test model. “An effect” here does not specify improvement; a difference can be beneficial or harmful.",
          "把“没有效应”转成设计对应的参数命题，例如均值差为零，再用数据评估该基准。这里“有效应”没有指定改善方向，差异可能有利也可能不利。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-07",
        "image": "assets/week3/page-07.jpg",
        "clear": "assets/week3/clear-07.svg"
      },
      {
        "page": 8,
        "en": "Evaluation of the null",
        "zh": "评估原假设",
        "pairs": [
          [
            "H₀: There is no treatment effect. The drug has no effect.",
            "H₀：没有处理效应，药物没有效应。"
          ],
          [
            "H₁: There is a treatment effect. The drug had an (some, any) effect.",
            "H₁：存在处理效应，药物有某种效应。"
          ]
        ],
        "walk": [
          "The lecturer repeats the treatment example to introduce decision-making. Start from the null benchmark, obtain a test statistic from the sample and compare the resulting evidence with a prespecified decision rule. Do not choose a conclusion because it is the one you hoped to find.",
          "老师重复药物例子，以引入判断过程。从原假设基准出发，用样本计算检验统计量，再按预设规则评估证据。不能因为希望出现某种结论就选择它。"
        ],
        "topic": "hypothesis",
        "week": 3,
        "id": "slide-08",
        "image": "assets/week3/page-08.jpg",
        "clear": "assets/week3/clear-08.svg"
      },
      {
        "page": 9,
        "en": "Significance level",
        "zh": "显著性水平",
        "pairs": [
          [
            "Need to decide on a Significance Level.",
            "需要预先确定显著性水平。"
          ],
          [
            "The probability that the test statistic will reject the null hypothesis when the null hypothesis is true.",
            "在原假设为真时，检验错误拒绝原假设的概率。"
          ],
          [
            "Significance is a property of the distribution of a test statistic, not of any particular draw of the statistic.",
            "显著性水平是检验规则及其抽样分布的性质，不是某一次抽样结果的真伪概率。"
          ],
          [
            "Determines the Region of Rejection.",
            "决定拒绝域。"
          ],
          [
            "Generally 5% or 1%.",
            "常用5%或1%。"
          ]
        ],
        "walk": [
          "Alpha is a rule chosen before testing. At α=.05, a valid test rejects a true null in 5% of repeated applications under that null (or at most that rate for some tests). It is not the probability that this particular significant conclusion is wrong.",
          "α是检验前选择的规则。α=.05表示在原假设成立时反复应用有效检验，约5%会错误拒绝它（某些检验为不超过该比例）。这不是某个具体显著结论为错的概率。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-09",
        "image": "assets/week3/page-09.jpg",
        "clear": "assets/week3/clear-09.svg"
      },
      {
        "page": 10,
        "en": "Alpha level",
        "zh": "α水平",
        "pairs": [
          [
            "The value of alpha (α) is associated with the confidence level of our test; and significance level.",
            "α与置信水平及显著性水平相关。"
          ],
          [
            "For results with a 90% level of confidence, α = 1 − 0.90 = 0.10.",
            "90%置信水平对应α=1−0.90=0.10。"
          ],
          [
            "For results with a 95% level of confidence, α = 1 − 0.95 = 0.05.",
            "95%置信水平对应α=1−0.95=0.05。"
          ],
          [
            "Typically set at 5% (.05) or 1% (.01).",
            "通常设为5%（.05）或1%（.01）。"
          ]
        ],
        "walk": [
          "The arithmetic is confidence level=1−α. A two-sided 95% confidence interval and the matching two-sided α=.05 test give consistent decisions when constructed using the same model and method. The confidence level describes the long-run coverage of the procedure.",
          "计算关系是置信水平=1−α。在相同模型和方法下，双侧95%置信区间与对应α=.05双侧检验的判断相一致。置信水平描述程序的长期覆盖率。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-10",
        "image": "assets/week3/page-10.jpg",
        "clear": "assets/week3/clear-10.svg"
      },
      {
        "page": 11,
        "en": "p-value: original wording and clarification",
        "zh": "p值：原文与澄清",
        "pairs": [
          [
            "The p-value, or calculated probability, is the estimated probability of rejecting the null hypothesis (H₀) of a study question when that hypothesis is true. [Original wording]",
            "p值或计算概率，是研究问题的原假设为真时拒绝它的估计概率。（原文表述）"
          ],
          [
            "Probability that the observed statistic occurred by chance alone. [Original wording]",
            "观察到的统计量完全由偶然造成的概率。（原文表述）"
          ]
        ],
        "walk": [
          "Accuracy clarification: the first sentence confuses p with α. A p-value is the probability, assuming H₀ and the test model, of a test statistic at least as extreme as the observed one. It is not P(H₀ is true), not the probability that chance caused the result, and not the prespecified Type I error rate. Read the original wording critically and use this precise interpretation.",
          "准确性澄清：第一句混淆了p与α。p值是在H₀及检验模型成立的条件下，得到至少和观察结果一样极端的检验统计量的概率。它不是H₀为真的概率，不是结果由偶然造成的概率，也不是预设的第一类错误率。保留原文作对照，但解释应采用这个精确定义。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-11",
        "image": "assets/week3/page-11.jpg",
        "clear": "assets/week3/clear-11.svg"
      },
      {
        "page": 12,
        "en": "Two-sided p-value: shaded tails",
        "zh": "双侧p值：两端阴影",
        "pairs": [
          [
            "This area is the p-value.",
            "图中阴影面积为p值。"
          ],
          [
            "Diagram labels: −t, 0, t.",
            "图中横轴标签：−t、0、t。"
          ],
          [
            "The arrows point to both tails beyond −t and t.",
            "箭头指向−t左侧和t右侧的两端尾部。"
          ]
        ],
        "walk": [
          "For a symmetric two-sided t-test, add the null-distribution probabilities to the left of −|tobs| and right of +|tobs|. Both directions count because the alternative asks whether the mean differs, rather than only whether it is larger. The middle area is not the p-value.",
          "对于对称的双侧t检验，将原假设分布下−|t观察值|左侧和+|t观察值|右侧的尾部概率相加。备择问的是是否不同，所以两个方向都计入。中间面积不是p值。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-12",
        "image": "assets/week3/page-12.jpg",
        "clear": "assets/week3/clear-12.svg"
      },
      {
        "page": 13,
        "en": "Obtaining significance",
        "zh": "判断统计显著性",
        "pairs": [
          [
            "Compare the values of alpha and the p-value. Two possibilities emerge.",
            "比较α与p值，有两种情形。"
          ],
          [
            "The p-value is less than or equal to alpha (e.g., p < .05). In this case we reject the null hypothesis.",
            "若p≤α（课件举例p<.05），拒绝原假设。"
          ],
          [
            "When this happens we say that the result is statistically significant. In other words, we are reasonably sure that there is something besides chance alone that gave us an observed sample. [Original explanation]",
            "称结果具有统计显著性。原文直观解释为：有理由认为观察样本不只是偶然造成。"
          ],
          [
            "The p-value is greater than alpha (e.g., p > .05). In this case we fail to reject the H₀. Therefore, not statistically significant.",
            "若p>α（例如p>.05），未能拒绝H₀，结果不显著。"
          ],
          [
            "Observed data are likely due to chance alone. [Original wording]",
            "观察数据很可能仅由偶然造成。（原文表述）"
          ]
        ],
        "walk": [
          "Use the course rule p≤α → reject; p>α → fail to reject. At α=.05, p=.03 rejects and p=.12 does not. Clarification: a nonsignificant result means insufficient evidence against H₀; it does not prove no effect or show that chance alone is the cause. Significance also says nothing by itself about whether the effect is large or useful.",
          "按课程规则：p≤α则拒绝，p>α则未能拒绝。α=.05时，p=.03拒绝，p=.12不拒绝。澄清：不显著表示反对H₀的证据不足，不能证明无效应，也不能证明仅由偶然造成。显著本身也不表示效应大或有实际价值。"
        ],
        "topic": "alpha",
        "week": 3,
        "id": "slide-13",
        "image": "assets/week3/page-13.jpg",
        "clear": "assets/week3/clear-13.svg"
      },
      {
        "page": 14,
        "en": "Errors in hypothesis testing",
        "zh": "假设检验中的错误",
        "pairs": [
          [
            "In an ideal world, we would always reject the null hypothesis when it is false, and we would not reject the null hypothesis when it is indeed true.",
            "理想情况下，H₀为假就拒绝，为真就不拒绝。"
          ],
          [
            "But two other scenarios are possible, each of which will result in an error.",
            "但还有另外两种可能情形，都会导致错误。"
          ],
          [
            "Type I and Type II Errors",
            "第一类与第二类错误"
          ]
        ],
        "walk": [
          "Separate two things: the real state of the population and the decision made from a sample. The population state is usually unknown, so a sensible rule can still produce a wrong decision in a particular sample. The next pages name the two wrong combinations.",
          "分清总体的真实状态和依据样本作出的决策。总体状态通常未知，因此合理的检验规则在某次样本中仍可能判断错误。下面给两种错误组合命名。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-14",
        "image": "assets/week3/page-14.jpg",
        "clear": "assets/week3/clear-14.svg"
      },
      {
        "page": 15,
        "en": "Type I error",
        "zh": "第一类错误",
        "pairs": [
          [
            "Rejection of the null hypothesis that is actually true.",
            "拒绝了实际上为真的原假设。"
          ],
          [
            "Same as a “false positive”.",
            "也称“假阳性”。"
          ],
          [
            "The alpha value gives us the probability of a Type I error.",
            "α给出第一类错误率。"
          ],
          [
            "For example, α = .05 = 5% chance of rejecting a true null hypothesis.",
            "例如α=.05，表示在H₀为真时有5%的长期错误拒绝率。"
          ]
        ],
        "walk": [
          "Type I starts with H₀ true, then the test rejects it. Think “false alarm”. The α rate is conditional on a true H₀ and the testing assumptions, not a posterior probability attached to this one rejection.",
          "第一类错误的起点是H₀实际上为真，但检验拒绝了它，可理解为“误报”。α以H₀为真且检验条件成立为前提，不是某次拒绝结论的后验错误概率。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-15",
        "image": "assets/week3/page-15.jpg",
        "clear": "assets/week3/clear-15.svg"
      },
      {
        "page": 16,
        "en": "Type I error: drug example",
        "zh": "第一类错误：药物例子",
        "pairs": [
          [
            "H₀ = drug has no effect.",
            "H₀：药物无效应。"
          ],
          [
            "H₁ = drug has an effect.",
            "H₁：药物有效应。"
          ],
          [
            "Reject H₀ and instead claim H₁ is correct, so claim that the drug has an effect when indeed it does not.",
            "拒绝H₀并声称药物有效应，但实际上药物没有效应。"
          ],
          [
            "Therefore the drug is falsely claimed to have an effect.",
            "因此错误地宣称药物有效应。"
          ]
        ],
        "walk": [
          "Ask reality first: there is no effect, so H₀ is true. Ask the decision second: the researcher reports an effect and rejects H₀. True null plus rejection is Type I error. The example illustrates classification, not a claim about any real drug.",
          "先问真实情况：没有效应，因此H₀为真。再问决策：研究者报告有效应并拒绝H₀。原假设为真却拒绝，就是第一类错误。本例用于区分错误类型，不涉及某种真实药物。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-16",
        "image": "assets/week3/page-16.jpg",
        "clear": "assets/week3/clear-16.svg"
      },
      {
        "page": 17,
        "en": "Type II error and power",
        "zh": "第二类错误与功效",
        "pairs": [
          [
            "We do not reject a null hypothesis that is false.",
            "未能拒绝实际上为假的原假设。"
          ],
          [
            "Like a false negative.",
            "类似“假阴性”。"
          ],
          [
            "E.g., thought the drug had no effect, when it actually did.",
            "例如以为药物无效应，但实际上有效应。"
          ],
          [
            "The probability of a Type II error is given by the Greek letter beta (β).",
            "第二类错误概率记作β。"
          ],
          [
            "This number is related to the power or sensitivity of the hypothesis test, denoted by 1 − β.",
            "相应检验功效或敏感性记作1−β。"
          ]
        ],
        "walk": [
          "Type II starts with a real effect, but the test fails to detect it. Power=1−β is the probability of rejecting H₀ at a specified alternative effect under the model. β depends on the actual effect, sample size, variability, α and design; it is not one fixed property shared by all alternatives.",
          "第二类错误是实际存在效应，但检验未能检出。功效1−β是在某个指定真实效应下拒绝H₀的概率。β会随真实效应、样本量、变异程度、α和设计变化，并非对所有备择情况都相同。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-17",
        "image": "assets/week3/page-17.jpg",
        "clear": "assets/week3/clear-17.svg"
      },
      {
        "page": 18,
        "en": "Type I and Type II: decision table",
        "zh": "第一类与第二类错误：决策表",
        "pairs": [
          [
            "Columns: H₀ True; H₀ False.",
            "列：H₀为真；H₀为假。"
          ],
          [
            "Accept H₀ / Reject H₁: True (if H₀ true); False: Type II error (if H₀ false). [Original row labels]",
            "接受H₀/拒绝H₁：H₀为真时判断正确；H₀为假时为第二类错误。（原图行标签）"
          ],
          [
            "Reject H₀ / Accept H₁: False: Type I error (if H₀ true); True (if H₀ false). [Original row labels]",
            "拒绝H₀/接受H₁：H₀为真时为第一类错误；H₀为假时判断正确。（原图行标签）"
          ]
        ],
        "walk": [
          "Read the truth column before the decision row. Clarification: replace the table’s “accept H₀” with “fail to reject H₀” in statistical reporting. A nonsignificant test does not establish H₀. The lower-right correct decision corresponds to power, 1−β.",
          "先看真实状态的列，再看决策的行。报告时应把原图的“接受H₀”改成“未能拒绝H₀”，因为不显著不能证实H₀。右下方的正确拒绝概率对应功效1−β。"
        ],
        "topic": "errors",
        "visual": {
          "headers": [
            "Decision",
            "H₀ true",
            "H₀ false"
          ],
          "rows": [
            [
              "Fail to reject H₀",
              "Correct",
              "Type II error (β)"
            ],
            [
              "Reject H₀",
              "Type I error (α)",
              "Correct (power = 1−β)"
            ]
          ]
        },
        "week": 3,
        "id": "slide-18",
        "image": "assets/week3/page-18.jpg",
        "clear": "assets/week3/clear-18.svg"
      },
      {
        "page": 19,
        "en": "T-test: one-sample question",
        "zh": "t检验：单样本问题",
        "pairs": [
          [
            "The one-sample t-test is a statistical hypothesis test used to determine whether an unknown population mean is different from a specific value.",
            "单样本t检验用于检验一个未知总体均值是否不同于某个指定值。"
          ]
        ],
        "walk": [
          "Identify two ingredients: one population mean μ and a fixed benchmark μ₀. The data come from one sample. A sample mean different from μ₀ is not enough by itself; the test compares the difference with its sampling uncertainty.",
          "识别两个要素：总体均值μ和固定基准μ₀，数据来自一个样本。样本均值与μ₀不同本身不够，还要与抽样不确定性比较。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-19",
        "image": "assets/week3/page-19.jpg",
        "clear": "assets/week3/clear-19.svg"
      },
      {
        "page": 20,
        "en": "Types of t-test",
        "zh": "t检验的类型",
        "pairs": [
          [
            "One sample T-test",
            "单样本t检验"
          ],
          [
            "Independent samples T-test",
            "独立样本t检验"
          ],
          [
            "Paired T-test",
            "配对t检验"
          ]
        ],
        "walk": [
          "Choose by the comparison: one sample against a benchmark → one-sample; two different groups of independent cases → independent-samples; two linked values for each case or matched pair → paired. The fact that there are two columns of numbers does not alone establish independent groups.",
          "按比较对象选择：一组对固定值，用单样本；两组不同且独立的对象，用独立样本；每个对象或匹配对有两次相关测量，用配对。只有两列数字不足以证明两组独立。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-20",
        "image": "assets/week3/page-20.jpg",
        "clear": "assets/week3/clear-20.svg"
      },
      {
        "page": 21,
        "en": "One-sample t-test: conditions",
        "zh": "单样本t检验的条件",
        "pairs": [
          [
            "The one-sample t-test is a statistical hypothesis test used to determine whether an unknown population mean is different from a specific value.",
            "检验一个未知总体均值是否不同于指定值。"
          ],
          [
            "You can use the test for continuous data. Your data should be a random sample from a normal population.",
            "用于连续数据，数据应是来自正态总体的随机样本。"
          ],
          [
            "If your sample sizes are very small, you might not be able to test for normality. You might need to rely on your understanding of the data.",
            "样本很小时可能无法有效检验正态性，需要结合对数据的理解。"
          ],
          [
            "When you cannot safely assume normality, you can perform a nonparametric test that doesn’t assume normality.",
            "若不能合理假定正态性，可考虑不要求正态的非参数方法。"
          ]
        ],
        "walk": [
          "Check independence, the sampling design, quantitative measurement, severe outliers and the distribution. For small samples, normality matters especially. A normality test that is nonsignificant in a tiny sample does not prove normality. Choose an alternative method that actually matches the target parameter; nonparametric procedures do not all test a mean.",
          "检查独立性、抽样设计、定量测量、严重异常值和分布。小样本尤其要关注正态性。极小样本中正态性检验不显著，不能证明正态。替代方法要与目标参数匹配，非参数检验并不都检验均值。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-21",
        "image": "assets/week3/page-21.jpg",
        "clear": "assets/week3/clear-21.svg"
      },
      {
        "page": 22,
        "en": "One-sample examples",
        "zh": "单样本检验的例子",
        "pairs": [
          [
            "A hospital has a random sample of cholesterol measurements for men. These patients were seen for issues other than cholesterol. They were not taking any medications for high cholesterol. The hospital wants to know if the unknown mean cholesterol for patients is different from a goal level of 200 mg.",
            "医院随机抽取男性患者的胆固醇测量；这些患者因其他问题就诊，未服用降胆固醇药。医院想知道患者总体平均胆固醇是否不同于目标200 mg。"
          ],
          [
            "We measure the grams of protein for a sample of energy bars. The label claims that the bars have 20 grams of protein. We want to know if the labels are correct or not.",
            "测量能量棒样本的蛋白质克数；标签声称每根含20克，想检验该标签均值是否准确。"
          ]
        ],
        "walk": [
          "The fixed values are 200 and 20, not a second group of observations. Write H₀: μ=200 for the first problem, and H₀: μ=20 g for the second; two-sided alternatives use ≠. The “200 mg” unit is reproduced from the slide, not a clinical reference or medical recommendation.",
          "200与20是固定基准，不是第二组观察数据。第一题写H₀：μ=200，第二题写H₀：μ=20克，双侧备择用≠。200 mg单位按课件保留，不作为临床标准或医学建议。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-22",
        "image": "assets/week3/page-22.jpg",
        "clear": "assets/week3/clear-22.svg"
      },
      {
        "page": 23,
        "en": "Activity 1: energy-bar protein",
        "zh": "活动1：能量棒蛋白质",
        "pairs": [
          [
            "Imagine we have collected a random sample of 31 energy bars from a number of different stores to represent the population of energy bars available to the general consumer.",
            "假设从不同商店随机抽取31根能量棒，以代表普通消费者可以买到的能量棒总体。"
          ],
          [
            "The labels on the bars claim that each bar contains 20 grams of protein.",
            "标签声称每根含20克蛋白质。"
          ]
        ],
        "walk": [
          "Set H₀: μ=20 g and H₁: μ≠20 g. The number of bars is n=31. Do not subtract 20 from n: 20 is the benchmark amount of protein, while n counts observations. The numerical sample summaries appear in the SPSS output on page 26.",
          "设H₀：μ=20克，H₁：μ≠20克，样本量n=31。20是蛋白质量基准，n是观察个数，不应混用。具体样本统计量在第26页SPSS表中。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-23",
        "image": "assets/week3/page-23.jpg",
        "clear": "assets/week3/clear-23.svg"
      },
      {
        "page": 24,
        "en": "One-sample t-test: calculate t",
        "zh": "单样本t检验：计算t",
        "pairs": [
          [
            "1. Calculate the t value.",
            "1. 计算t值。"
          ],
          [
            "t = (x̄ − μ)/(σ/√n). [Formula as printed]",
            "t=(x̄−μ)/(σ/√n)。（课件原公式）"
          ],
          [
            "x̄ is the mean of the sample.",
            "x̄是样本均值。"
          ],
          [
            "μ is the assumed mean.",
            "μ是原假设指定均值。"
          ],
          [
            "σ is the standard deviation.",
            "σ是标准差（原图符号）。"
          ],
          [
            "n is the number of observations.",
            "n是观察个数。"
          ]
        ],
        "walk": [
          "Notation correction: for an ordinary one-sample t-test with unknown population SD, use the sample SD s: t=(x̄−μ₀)/(s/√n). If population σ is truly known and the normal model is used, the corresponding standardized statistic is a z statistic. In the energy-bar example, (21.4−20)/(2.54167/√31)≈3.067.",
          "符号纠正：普通单样本t检验中总体标准差未知，应使用样本标准差s：t=(x̄−μ₀)/(s/√n)。若总体σ确实已知，并采用正态模型，对应标准化统计量通常称z。能量棒例中，(21.4−20)/(2.54167/√31)≈3.067。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-24",
        "image": "assets/week3/page-24.jpg",
        "clear": "assets/week3/clear-24.svg"
      },
      {
        "page": 25,
        "en": "One-sample t-test: degrees of freedom",
        "zh": "单样本t检验：自由度",
        "pairs": [
          [
            "2. Determine degrees of freedom, df = n − 1.",
            "2. 确定自由度df=n−1。"
          ],
          [
            "3. Refer to the table of Critical Values for the T distribution to obtain the critical t value.",
            "3. 查t分布临界值表，获得临界t值。"
          ]
        ],
        "walk": [
          "For 31 bars, df=31−1=30. The critical value also depends on α and whether the test is one- or two-sided. For a two-sided α=.05 test with df=30, compare |t| with approximately 2.042, or use the corresponding two-sided p-value. Do not compare a negative t with only a positive cutoff without taking the test direction into account.",
          "31根能量棒的df=30。临界值还取决于α和单/双侧。df=30、双侧α=.05时，比较|t|与约2.042，或使用对应双侧p值。不能忽略检验方向，只把负t与正临界值直接比较。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-25",
        "image": "assets/week3/page-25.jpg",
        "clear": "assets/week3/clear-25.svg"
      },
      {
        "page": 26,
        "en": "SPSS: one-sample results",
        "zh": "SPSS：单样本结果",
        "pairs": [
          [
            "One-Sample Statistics — Protein: N=31; Mean=21.4000; Std. Deviation=2.54167; Std. Error Mean=.45650.",
            "单样本统计：蛋白质N=31，均值21.4000，标准差2.54167，均值标准误.45650。"
          ],
          [
            "One-Sample Test — Test Value=20.",
            "单样本检验：检验值=20。"
          ],
          [
            "Protein: t=3.067; df=30; Sig. (2-tailed)=.005; Mean Difference=1.40000.",
            "蛋白质：t=3.067，自由度30，双侧p=.005，均值差1.40000。"
          ],
          [
            "95% Confidence Interval of the Difference: Lower=.4677; Upper=2.3323.",
            "均值差的95%置信区间：下限.4677，上限2.3323。"
          ]
        ],
        "walk": [
          "Read the benchmark first, then the signed difference, t, df and p. At α=.05, .005<.05, so reject μ=20 g; the estimated population mean is higher by 1.4 g. The interval for the difference excludes zero. Adding 20 to both endpoints gives a mean interval [20.4677,22.3323] g. A conclusion about the mean does not mean every individual bar exceeds 20 g.",
          "先读基准20，再看差值符号、t、df、p。α=.05时，.005<.05，拒绝μ=20克；估计总体均值高1.4克。差值区间不含0。给两端加20，得到总体均值区间[20.4677,22.3323]克。对均值的结论不表示每根能量棒都超过20克。"
        ],
        "topic": "one",
        "visual": {
          "headers": [
            "N",
            "Mean",
            "SD",
            "SE",
            "t",
            "df",
            "Two-sided p"
          ],
          "rows": [
            [
              "31",
              "21.4000",
              "2.54167",
              ".45650",
              "3.067",
              "30",
              ".005"
            ]
          ]
        },
        "week": 3,
        "id": "slide-26",
        "image": "assets/week3/page-26.jpg",
        "clear": "assets/week3/clear-26.svg"
      },
      {
        "page": 27,
        "en": "Independent-samples t-test",
        "zh": "独立样本t检验",
        "pairs": [
          [
            "The two-sample t-test (also known as the independent samples t-test) is a method used to test whether the unknown population means of two groups are equal or not.",
            "双样本t检验，也称独立样本t检验，用于检验两个组的未知总体均值是否相等。"
          ],
          [
            "You can use the test when your data values are independent, are randomly sampled from two normal populations and the two independent groups have equal variances.",
            "经典版本要求观察独立、从两个正态总体随机抽样，且两总体方差相等。"
          ]
        ],
        "walk": [
          "There are two groups of different independent cases and one quantitative outcome. Write H₀: μ₁−μ₂=0. The equal-variance condition applies to the pooled version; Welch’s version allows unequal variances. Paired measurements from the same people need a paired design instead.",
          "有两组不同且独立的对象，以及一个定量结果变量。写H₀：μ₁−μ₂=0。等方差条件针对合并方差版本，Welch版本允许方差不等。同一人的成对测量应采用配对设计。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-27",
        "image": "assets/week3/page-27.jpg",
        "clear": "assets/week3/clear-27.svg"
      },
      {
        "page": 28,
        "en": "Independent-samples examples",
        "zh": "独立样本例子",
        "pairs": [
          [
            "We have students who speak English as their first language and students who do not. All students take a reading test. Our two groups are the native English speakers and the non-native speakers. Our measurements are the test scores.",
            "学生分为英语母语组和非母语组，全体参加阅读测试；测量是测试分数。"
          ],
          [
            "Our idea is that the mean test scores for the underlying populations of native and non-native English speakers are not the same. We want to know if the mean score for the population of native English speakers is different from the people who learned English as a second language.",
            "想知道英语母语者与英语第二语言学习者两个总体的平均阅读成绩是否不同。"
          ],
          [
            "We measure the grams of protein in two different brands of energy bars. Our two groups are the two brands. Our measurement is the grams of protein for each energy bar.",
            "测量两个品牌能量棒的蛋白质克数；组别是品牌，结果是每根能量棒蛋白质量。"
          ],
          [
            "Our idea is that the mean grams of protein for the two brands’ underlying populations may differ. We want to know if we have evidence that the mean grams of protein for the two brands of energy bars is different or not.",
            "想检验两个品牌对应总体的平均蛋白质量是否存在差异。"
          ]
        ],
        "walk": [
          "Identify the grouping variable and outcome separately: language group → reading score; brand → protein grams. Each student or bar contributes one outcome in one group. A group difference in observational language data alone does not establish language background as the cause.",
          "分开识别分组变量与结果：语言组→阅读分数；品牌→蛋白质克数。每个学生或能量棒在一个组贡献一次结果。观察性语言组差异本身不能证明语言背景导致分数变化。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-28",
        "image": "assets/week3/page-28.jpg",
        "clear": "assets/week3/clear-28.svg"
      },
      {
        "page": 29,
        "en": "Independent-samples assumptions",
        "zh": "独立样本检验的假设",
        "pairs": [
          [
            "Data values must be independent. Measurements for one observation do not affect measurements for any other observation.",
            "数据必须独立，一个观察对象的测量不影响另一个。"
          ],
          [
            "Data in each group must be obtained via a random sample from the population.",
            "各组数据应来自相应总体的随机样本。"
          ],
          [
            "Data in each group are normally distributed.",
            "各组数据来自正态分布总体。"
          ],
          [
            "Data values are continuous.",
            "测量值是连续的。"
          ],
          [
            "The variances for the two independent groups are equal.",
            "经典合并方差版本要求两个总体方差相等。"
          ]
        ],
        "walk": [
          "Check within-group distributions rather than combining both groups into one normality check. Independence is primarily a design issue, not something established by a normality test. Welch addresses unequal variances but does not fix dependence, biased sampling or severe measurement problems.",
          "正态性应查看各组内分布，不能仅把两组合并检查。独立性主要由设计决定，不能靠正态性检验证明。Welch处理方差不等，但不能修复对象不独立、抽样偏差或严重测量问题。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-29",
        "image": "assets/week3/page-29.jpg",
        "clear": "assets/week3/clear-29.svg"
      },
      {
        "page": 30,
        "en": "Activity 2: body-fat percentages",
        "zh": "活动2：体脂百分比",
        "pairs": [
          [
            "One way to measure a person’s fitness is to measure their body fat percentage.",
            "评估体能的一种方式是测量体脂百分比。"
          ],
          [
            "Average body fat percentages vary by age, but according to some guidelines, the normal range for men is 15–20% body fat, and the normal range for women is 20–25% body fat.",
            "平均体脂随年龄变化；课件引用某些指南，男性范围15–20%，女性20–25%。"
          ],
          [
            "Our sample data is from a group of men and women who did workouts at a gym three times a week for a year. Then, their trainer measured the body fat.",
            "样本中的男女在健身房每周锻炼三次、持续一年，之后教练测量体脂。"
          ]
        ],
        "walk": [
          "The test compares body-fat means of two independent gender groups. It does not compare each mean with the quoted guideline range, and it does not test an exercise effect because no before/after or control-group contrast is supplied. The percentages in the introduction are classroom context, not individualized health advice.",
          "检验比较两个独立性别组的体脂均值，不是将各组均值与所引指南范围比较。由于未提供前后测或对照组，也不能用它检验锻炼效应。背景百分比是课堂情境，不是个人健康建议。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-30",
        "image": "assets/week3/page-30.jpg",
        "clear": "assets/week3/clear-30.svg"
      },
      {
        "page": 31,
        "en": "Two-sample t formulas: pooled and Welch",
        "zh": "双样本t公式：合并方差与Welch",
        "pairs": [
          [
            "Is variance for two samples equal? Yes → pooled-variance t-test; No → unequal-variance t-test.",
            "两组方差是否相等？是→合并方差t检验；否→不等方差t检验。"
          ],
          [
            "Equal variances: t=(x̄₁−x̄₂)/[sₚ√(1/n₁+1/n₂)].",
            "等方差：t=(x̄₁−x̄₂)/[sₚ√(1/n₁+1/n₂)]。"
          ],
          [
            "sₚ²=[(n₁−1)s₁²+(n₂−1)s₂²]/(n₁+n₂−2).",
            "合并方差sₚ²=[(n₁−1)s₁²+(n₂−1)s₂²]/(n₁+n₂−2)。"
          ],
          [
            "Pooled-test df=n₁+n₂−2.",
            "合并方差检验自由度df=n₁+n₂−2。"
          ],
          [
            "Unequal variances: t=(x̄₁−x̄₂)/√(s₁²/n₁+s₂²/n₂).",
            "不等方差：t=(x̄₁−x̄₂)/√(s₁²/n₁+s₂²/n₂)。"
          ],
          [
            "Welch df=[s₁²/n₁+s₂²/n₂]² / {[(s₁²/n₁)²/(n₁−1)]+[(s₂²/n₂)²/(n₂−1)]}.",
            "Welch自由度=[s₁²/n₁+s₂²/n₂]² / {[(s₁²/n₁)²/(n₁−1)]+[(s₂²/n₂)²/(n₂−1)]}。"
          ]
        ],
        "walk": [
          "Both formulas divide a mean difference by its standard error. The pooled version estimates one common variance; Welch estimates uncertainty separately for each group and uses approximate degrees of freedom, often non-integer. Compare the reported p-value for the row appropriate to the method.",
          "两式都是均值差除以其标准误。合并版本估计一个共同方差；Welch分别利用各组的不确定性，并使用通常不是整数的近似自由度。读表时要使用相应方法所在行的p值。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-31",
        "image": "assets/week3/page-31.jpg",
        "clear": "assets/week3/clear-31.svg"
      },
      {
        "page": 32,
        "en": "SPSS: independent-samples results",
        "zh": "SPSS：独立样本结果",
        "pairs": [
          [
            "Group Statistics — Fat, Male: N=13; Mean=14.9462; Std. Deviation=6.84259; Std. Error Mean=1.89779.",
            "组统计：男性N=13，均值14.9462，标准差6.84259，均值标准误1.89779。"
          ],
          [
            "Fat, Female: N=10; Mean=22.2900; Std. Deviation=5.31966; Std. Error Mean=1.68222.",
            "女性N=10，均值22.2900，标准差5.31966，均值标准误1.68222。"
          ],
          [
            "Levene’s Test for Equality of Variances: F=.517; Sig.=.480.",
            "Levene方差齐性检验：F=.517，p=.480。"
          ],
          [
            "Equal variances assumed: t=−2.800; df=21; Sig. (2-tailed)=.011; Mean Difference=−7.34385; Std. Error Difference=2.62284.",
            "等方差行：t=−2.800，df=21，双侧p=.011，均值差−7.34385，差值标准误2.62284。"
          ],
          [
            "Equal variances assumed: 95% Confidence Interval of the Difference, Lower=−12.79834; Upper=−1.88935.",
            "等方差行：均值差95%置信区间[−12.79834,−1.88935]。"
          ],
          [
            "Equal variances not assumed: t=−2.896; df=20.989; Sig. (2-tailed)=.009; Mean Difference=−7.34385; Std. Error Difference=2.53604.",
            "不等方差行：t=−2.896，df=20.989，双侧p=.009，均值差−7.34385，差值标准误2.53604。"
          ],
          [
            "Equal variances not assumed: 95% Confidence Interval of the Difference, Lower=−12.61800; Upper=−2.06969.",
            "不等方差行：均值差95%置信区间[−12.61800,−2.06969]。"
          ]
        ],
        "walk": [
          "Under the lecture’s row-reading convention, Levene p=.480 gives insufficient evidence against equal variances, so read the pooled row: t(21)=−2.800, p=.011. Reject equal population means at .05; male minus female is approximately −7.344 percentage points. A large Levene p does not prove equal variances. Welch also rejects here (p=.009). Gender differences in this sample do not establish a causal gender or exercise effect.",
          "按课堂读表规则，Levene p=.480表示反对等方差的证据不足，读等方差行：t(21)=−2.800，p=.011。在.05水平拒绝总体均值相等；男性减女性约为−7.344个百分点。Levene的大p不能证明方差相等。本例Welch也显著（p=.009）。样本性别差异不能证明性别或锻炼的因果效应。"
        ],
        "topic": "independent",
        "visual": {
          "headers": [
            "Method",
            "t",
            "df",
            "Two-sided p",
            "Mean difference"
          ],
          "rows": [
            [
              "Pooled",
              "−2.800",
              "21",
              ".011",
              "−7.34385"
            ],
            [
              "Welch",
              "−2.896",
              "20.989",
              ".009",
              "−7.34385"
            ]
          ]
        },
        "week": 3,
        "id": "slide-32",
        "image": "assets/week3/page-32.jpg",
        "clear": "assets/week3/clear-32.svg"
      },
      {
        "page": 33,
        "en": "Paired t-test",
        "zh": "配对t检验",
        "pairs": [
          [
            "The paired t-test is a method used to test whether the mean difference between pairs of measurements is zero or not.",
            "配对t检验用于检验成对测量差值的总体均值是否为零。"
          ],
          [
            "The paired t-test is also known as the dependent samples t-test, the paired-difference t-test, the matched pairs t-test and the repeated-samples t-test.",
            "也称依存样本t检验、配对差值t检验、匹配对t检验或重复样本t检验。"
          ]
        ],
        "walk": [
          "Create one difference d for each complete pair and perform a one-sample test on those differences against zero. For 16 students taking both exams, there are 16 differences, not 32 independent cases. Define the subtraction order before interpreting the sign.",
          "对每个完整配对计算一个差值d，再把差值作为一个样本与0比较。16名学生都参加两次考试，得到16个差值，不是32个独立个案。解释符号前先写明相减顺序。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-33",
        "image": "assets/week3/page-33.jpg",
        "clear": "assets/week3/clear-33.svg"
      },
      {
        "page": 34,
        "en": "Paired examples",
        "zh": "配对设计的例子",
        "pairs": [
          [
            "A group of people with dry skin use a medicated lotion on one arm and a non-medicated lotion on their other arm. After a week, a doctor measures the redness on each arm.",
            "干性皮肤受试者一只手臂用药用乳液，另一只用非药用乳液，一周后医生测两臂红斑。"
          ],
          [
            "We want to know if the medicated lotion is better than the non-medicated lotion: whether the arm with medicated lotion has less redness. Since we have pairs of measurements for each person, we find the differences, then test if the mean difference is zero or not.",
            "想知道药用乳液是否更好、是否红斑更少。每人有成对测量，先求差，再检验总体平均差是否为零。"
          ],
          [
            "We measure weights of people in a program to quit smoking. For each person, we have the weight at the start and end of the program. We want to know if the mean weight change is zero or not.",
            "戒烟项目为每人测开始与结束体重，检验平均体重变化是否为零。"
          ],
          [
            "An instructor gives students an exam and the next day gives a different exam on the same material. The instructor wants to know if the two exams are equally difficult. We calculate the difference in exam scores for each student and test if the mean difference is zero or not.",
            "同一批学生两天完成覆盖相同内容的两份试卷，教师想比较难度；对每人求分数差，检验总体平均差是否为零。"
          ]
        ],
        "walk": [
          "Pairs arise from the same person’s two arms, the same person before/after, or the same student’s two scores. The pairing handles within-person dependence. A two-sided difference test does not by itself establish which lotion is better, equivalence of exam difficulty, or causation from an uncontrolled before/after comparison.",
          "配对来自同一人的双臂、同一人前后测、同一学生两次分数，配对分析处理个体内依存。双侧差异检验本身不直接证明哪种乳液更好、两卷等效，或未设对照的前后变化具有因果性。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-34",
        "image": "assets/week3/page-34.jpg",
        "clear": "assets/week3/clear-34.svg"
      },
      {
        "page": 35,
        "en": "Paired-test assumptions",
        "zh": "配对检验的假设",
        "pairs": [
          [
            "Subjects must be independent. Measurements for one subject do not affect measurements for any other subject.",
            "受试者之间必须独立，一人的测量不影响另一人。"
          ],
          [
            "Each of the paired measurements must be obtained from the same subject. For example, the before-and-after weight for a smoker must be from the same person.",
            "每一对测量来自同一个对象，例如吸烟者前后体重必须属于同一人。"
          ],
          [
            "The measured differences are normally distributed.",
            "测量差值应来自正态分布总体。"
          ]
        ],
        "walk": [
          "Do not confuse independence between people with dependence within each pair. For small samples, inspect the distribution of the differences, not just the separate before and after columns. Explicitly matched different individuals can also form pairs when the design justifies the match; the same-person examples are the lecture’s cases.",
          "区分不同人之间的独立与每对内部的依存。小样本时查看差值分布，而不是只看前后两列各自的分布。若设计合理，明确匹配的不同个体也能构成配对；课件举的是同一人的例子。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-35",
        "image": "assets/week3/page-35.jpg",
        "clear": "assets/week3/clear-35.svg"
      },
      {
        "page": 36,
        "en": "Activity 3: two exams",
        "zh": "活动3：两份试卷",
        "pairs": [
          [
            "An instructor wants to use two exams in her classes next year. This year, she gives both exams to the students.",
            "教师计划明年使用两份试卷，今年让同一批学生都完成两卷。"
          ],
          [
            "She wants to know if the exams are equally difficult and wants to check this by looking at the differences between scores.",
            "她想通过分数差来检查两卷是否同等难度。"
          ],
          [
            "If the mean difference between scores for students is “close enough” to zero, she will make a practical conclusion that the exams are equally difficult.",
            "若平均分数差“足够接近”0，她希望作出两卷难度相当的实际结论。"
          ]
        ],
        "walk": [
          "Set d=Exam1−Exam2 and H₀: μd=0 for the difference test. Important distinction: failing to reject zero is not proof of equivalence. A formal claim of “close enough” needs a prespecified practically acceptable margin and an equivalence analysis; the ordinary paired test on page 38 tests for a difference.",
          "设d=试卷1−试卷2，差异检验的H₀：μd=0。重要区分：未能拒绝差值为零，不是证明等效。严格的“足够接近”需要预设可接受差异界限并进行等效性分析；第38页普通配对t检验检验的是差异。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-36",
        "image": "assets/week3/page-36.jpg",
        "clear": "assets/week3/clear-36.svg"
      },
      {
        "page": 37,
        "en": "Paired-test calculation steps",
        "zh": "配对检验计算步骤",
        "pairs": [
          [
            "1. Calculate the mean score difference.",
            "1. 计算分数差的均值d̄。"
          ],
          [
            "2. Calculate the standard error for the score difference: s_d/√n.",
            "2. 计算差值均值标准误：s_d/√n。"
          ],
          [
            "3. Calculate the test statistic: t = Average difference / Standard Error.",
            "3. 计算统计量：t=平均差/标准误。"
          ],
          [
            "4. Calculate degrees of freedom.",
            "4. 计算自由度。"
          ]
        ],
        "walk": [
          "Use n complete pairs, their mean difference d̄ and SD of differences sd. SE=sd/√n; t=d̄/SE; df=n−1. In the lecture output, n=16, sd=7.002, so SE≈1.751 and t≈−1.313/1.751=−.750, with df=15. Use the SD of differences, not either exam’s separate SD.",
          "使用n个完整配对、平均差d̄与差值标准差sd。SE=sd/√n，t=d̄/SE，df=n−1。课件n=16、sd=7.002，所以SE≈1.751，t≈−1.313/1.751=−.750，df=15。注意使用差值的标准差，不是某一次考试单独的标准差。"
        ],
        "topic": null,
        "week": 3,
        "id": "slide-37",
        "image": "assets/week3/page-37.jpg",
        "clear": "assets/week3/clear-37.svg"
      },
      {
        "page": 38,
        "en": "SPSS: paired-samples results",
        "zh": "SPSS：配对样本结果",
        "pairs": [
          [
            "Paired Samples Statistics — Exam1: Mean=78.13; N=16; Std. Deviation=12.664; Std. Error Mean=3.166.",
            "配对统计：试卷1均值78.13，N=16，标准差12.664，均值标准误3.166。"
          ],
          [
            "Exam2: Mean=79.44; N=16; Std. Deviation=9.150; Std. Error Mean=2.288.",
            "试卷2均值79.44，N=16，标准差9.150，均值标准误2.288。"
          ],
          [
            "Paired Samples Correlations — Exam1 & Exam2: N=16; Correlation=.842; Sig.=.000.",
            "配对相关：N=16，相关系数.842，显著性显示.000。"
          ],
          [
            "Paired Samples Test — Exam1−Exam2: Mean=−1.313; Std. Deviation=7.002; Std. Error Mean=1.751.",
            "配对差值（卷1−卷2）：均值−1.313，标准差7.002，均值标准误1.751。"
          ],
          [
            "95% Confidence Interval of the Difference: Lower=−5.044; Upper=2.419.",
            "平均差95%置信区间[−5.044,2.419]。"
          ],
          [
            "t=−.750; df=15; Sig. (2-tailed)=.465.",
            "t=−.750，自由度15，双侧p=.465。"
          ]
        ],
        "walk": [
          "Read the paired-difference test, not the correlation p-value, to answer the mean-difference question. At α=.05, .465>.05, so fail to reject μd=0; the interval contains zero. This is insufficient evidence of a mean difference, not proof of equal exam difficulty. The correlation .842 describes association of scores, while its displayed .000 should be reported as p<.001, not p=0. Means and differences in the output are rounded separately.",
          "回答均值差问题应读配对差值检验，不是相关系数的p。α=.05时，.465>.05，未能拒绝μd=0；区间含0。这表示均值差证据不足，不是证明两卷同等难度。相关.842描述分数关联，其.000应写p<.001，不能写p=0。均值与差值在输出中分别舍入。"
        ],
        "topic": "paired",
        "visual": {
          "headers": [
            "Pairs",
            "Mean difference",
            "SD(d)",
            "SE(d)",
            "t",
            "df",
            "Two-sided p"
          ],
          "rows": [
            [
              "16",
              "−1.313",
              "7.002",
              "1.751",
              "−.750",
              "15",
              ".465"
            ]
          ]
        },
        "week": 3,
        "id": "slide-38",
        "image": "assets/week3/page-38.jpg",
        "clear": "assets/week3/clear-38.svg"
      }
    ]
  },
  "4": {
    "week": 4,
    "sourcePages": 27,
    "excluded": [
      {
        "page": 1,
        "reason": "Cover page; no teaching content"
      },
      {
        "page": 26,
        "reason": "Summary divider only; no teaching points"
      },
      {
        "page": 27,
        "reason": "Thank-you page; no teaching content"
      }
    ],
    "slides": [
      {
        "page": 2,
        "en": "Today you will learn",
        "zh": "本周学习目标",
        "pairs": [
          [
            "Correlation tests for relationships between variables",
            "检验变量之间关系的相关检验。"
          ],
          [
            "Pearson Correlation test",
            "皮尔逊相关检验。"
          ],
          [
            "Spearman rho correlation test",
            "斯皮尔曼秩相关检验。"
          ],
          [
            "Cramer V correlation test",
            "克拉默V关联检验。"
          ]
        ],
        "walk": [
          "This week asks whether variables are related. First recognise direction and strength, then choose a method that suits the variables. Pearson addresses linear association of quantitative measurements, Spearman uses ranks for monotonic association, and Cramér’s V summarises nominal association.",
          "本周关注变量是否有关联。先识别方向与强度，再根据变量选择方法：Pearson衡量数值变量的线性关联，Spearman通过秩衡量单调关联，Cramér’s V概括名义变量的关联。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-02",
        "image": "assets/week4/page-02.jpg",
        "clear": "assets/week4/clear-02.svg"
      },
      {
        "page": 3,
        "en": "Correlational study",
        "zh": "相关研究",
        "pairs": [
          [
            "The researchers investigate the possible relationship among variables without influencing those variables.",
            "研究者不干预变量，调查变量之间可能存在的关系。"
          ],
          [
            "Can describe the existing relationship between variables.",
            "能够描述变量之间已经存在的关系。"
          ],
          [
            "Describes the degree to which two or more quantitative variables are related.",
            "描述两个或多个定量变量关联的程度。"
          ],
          [
            "When a correlation exists between two variables, denoted by r, scores on one variable are associated with scores on the other variable.",
            "当两个变量之间存在相关（以r表示）时，一个变量的分数与另一个变量的分数有关联。"
          ]
        ],
        "walk": [
          "Observe rather than assign a treatment. For example, measure each student’s study time and score and check whether they move together. A correlation describes association; it does not by itself establish that one variable causes the other. The symbol r conventionally refers to Pearson’s sample correlation; other measures use different symbols.",
          "相关研究是观察而非分配处理。例如记录每名学生的学习时间和成绩，再检查两者是否一起变化。相关只描述关联，单凭相关不能确立因果。r通常特指样本Pearson相关系数，其他方法使用不同符号。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-03",
        "image": "assets/week4/page-03.jpg",
        "clear": "assets/week4/clear-03.svg"
      },
      {
        "page": 4,
        "en": "Examples of correlational studies",
        "zh": "相关研究举例",
        "pairs": [
          [
            "The Relationship Between Student anxiety and School Achievement.",
            "学生焦虑与学校学业成就之间的关系。"
          ],
          [
            "A Study of the Relationship Between Romantic Love and Marital Adjustment in Middle-Class Couples.",
            "关于中产阶级夫妻浪漫爱情与婚姻适应关系的研究。"
          ]
        ],
        "walk": [
          "Identify the two measurements in each title: anxiety and achievement; romantic love and marital adjustment. A title states a research question, not a result. It does not tell you the direction, size or significance of the eventual association.",
          "每个题目先找两个测量：焦虑与学业成就，浪漫爱情与婚姻适应。研究标题提出问题，不等于研究结果，不能仅凭题目断定关联的方向、大小或显著性。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-04",
        "image": "assets/week4/page-04.jpg",
        "clear": "assets/week4/clear-04.svg"
      },
      {
        "page": 5,
        "en": "Relationships that can be studied",
        "zh": "可以研究的关系",
        "pairs": [
          [
            "Smoking and the incidence of lung cancer.",
            "吸烟与肺癌发生率。"
          ],
          [
            "Reading skills and auditory memory.",
            "阅读技能与听觉记忆。"
          ],
          [
            "Motivation and learning.",
            "动机与学习。"
          ],
          [
            "Teacher expectation of failure and amount of disruptive behaviour.",
            "教师对失败的预期与干扰行为的多少。"
          ],
          [
            "Early literacy skills and motor integration levels.",
            "早期读写能力与动作整合水平。"
          ],
          [
            "Demographic factors and Attitude towards Guidance and Counselling.",
            "人口统计因素与对指导及辅导的态度。"
          ]
        ],
        "walk": [
          "For each pair, define exactly what will be recorded, its unit or scale, and the cases being studied. These examples include quantitative scores and categorical factors, so they do not all automatically require Pearson. Choose the method after identifying the variables.",
          "针对每一对变量，先定义实际记录什么、单位或尺度是什么、研究对象是谁。这些例子既有数值评分，也可能有分类因素，因此并非全部自动使用Pearson。认清变量后再选方法。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-05",
        "image": "assets/week4/page-05.jpg",
        "clear": "assets/week4/clear-05.svg"
      },
      {
        "page": 6,
        "en": "Positive correlation",
        "zh": "正相关",
        "pairs": [
          [
            "A positive correlation means high scores on one variable tend to be associated with high scores on the other, & low scores on one are associated with low scores on the other.",
            "正相关指一个变量的高分倾向于与另一个变量的高分相联系，低分也倾向于与低分相联系。"
          ]
        ],
        "walk": [
          "Think “high with high, low with low”. In a scatterplot the overall pattern rises from left to right. “Tend to” allows exceptions: a positive correlation does not mean every pair of cases follows the same order, nor that the variables have equal numerical values.",
          "记住“高配高、低配低”。散点图总体从左下向右上。这里说“倾向于”，允许个别例外；正相关不表示每两个对象的排序都相同，也不表示两个变量数值相等。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-06",
        "image": "assets/week4/page-06.jpg",
        "clear": "assets/week4/clear-06.svg"
      },
      {
        "page": 7,
        "en": "Scatterplots and correlation coefficients",
        "zh": "散点图与相关系数",
        "pairs": [
          [
            "Scatter Plots and Correlation Coefficients",
            "散点图与相关系数。"
          ],
          [
            "(a) r = 1: perfect positive correlation.",
            "(a)r=1：完全正相关。"
          ],
          [
            "(b) r ≈ 0.8: strong positive correlation.",
            "(b)r约为0.8：强正相关。"
          ],
          [
            "(c) r ≈ 0.3: moderate to weak positive correlation.",
            "(c)r约为0.3：中等至弱的正相关（原图标签）。"
          ],
          [
            "(d) r = 0: no correlation.",
            "(d)r=0：无相关（原图标签）。"
          ],
          [
            "(e) r ≈ −0.3: moderate to weak negative correlation.",
            "(e)r约为−0.3：中等至弱的负相关（原图标签）。"
          ],
          [
            "(f) r ≈ −0.8: strong negative correlation.",
            "(f)r约为−0.8：强负相关。"
          ],
          [
            "(g) r = −1: perfect negative correlation.",
            "(g)r=−1：完全负相关。"
          ]
        ],
        "walk": [
          "Read sign from the direction and magnitude from how tightly points follow a straight line. The sign tells direction, not strength: −.8 is stronger in linear association than +.3. Clarification: r=0 means no linear correlation, not necessarily no relationship; a curved pattern may remain. The illustration’s wording for .3 differs from the numerical guide on the next slide; use the next slide when the course asks for its strength bands.",
          "方向看正负，线性强度看点贴近直线的程度。符号表示方向而非强弱：−.8的线性关联比+.3强。澄清：r=0表示无线性相关，不保证完全没有关系，仍可能有曲线关系。原图对.3的措辞与下一页分档不同，课程要求按分档作答时使用下一页。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-07",
        "image": "assets/week4/page-07.jpg",
        "clear": "assets/week4/clear-07.svg",
        "showOriginal": true
      },
      {
        "page": 8,
        "en": "The lecture correlation-strength guide",
        "zh": "课堂相关强度分档",
        "pairs": [
          [
            "Size of Correlation ",
            " Interpretation|相关系数大小｜解释。"
          ],
          [
            ".90 to 1.00 (−.90 to −1.00) ",
            " Very high positive (negative) correlation|.90至1.00（−.90至−1.00）｜极高正（负）相关。"
          ],
          [
            ".70 to .90 (−.70 to −.90) ",
            " High positive (negative) correlation|.70至.90（−.70至−.90）｜高正（负）相关。"
          ],
          [
            ".50 to .70 (−.50 to −.70) ",
            " Moderate positive (negative) correlation|.50至.70（−.50至−.70）｜中等正（负）相关。"
          ],
          [
            ".30 to .50 (−.30 to −.50) ",
            " Low positive (negative) correlation|.30至.50（−.30至−.50）｜低正（负）相关。"
          ],
          [
            ".00 to .30 (.00 to −.30) ",
            " Negligible correlation|.00至.30（.00至−.30）｜可忽略的相关。"
          ]
        ],
        "walk": [
          "Use |r| for the band, then add its sign. For example, r=.719 is high positive under this lecture guide, while r=−.55 is moderate negative. These are the teacher’s descriptive conventions, not universal laws or significance tests. The printed intervals share endpoints, so the slide alone does not uniquely resolve boundary values such as exactly .70; report the coefficient when that matters.",
          "先用绝对值|r|判断强度档位，再说明正负。例如按本课分档，.719是高正相关，−.55是中等负相关。这是老师的描述约定，不是通用定律，也不是显著性检验。原表区间端点重复，恰好.70等边界值的归档不能仅凭此表唯一确定，有需要时直接报告系数。"
        ],
        "topic": null,
        "visual": {
          "headers": [
            "Size of correlation",
            "Interpretation"
          ],
          "rows": [
            [
              ".90 to 1.00 (−.90 to −1.00)",
              "Very high positive (negative)"
            ],
            [
              ".70 to .90 (−.70 to −.90)",
              "High positive (negative)"
            ],
            [
              ".50 to .70 (−.50 to −.70)",
              "Moderate positive (negative)"
            ],
            [
              ".30 to .50 (−.30 to −.50)",
              "Low positive (negative)"
            ],
            [
              ".00 to .30 (.00 to −.30)",
              "Negligible"
            ]
          ]
        },
        "week": 4,
        "id": "slide-08",
        "image": "assets/week4/page-08.jpg",
        "clear": "assets/week4/clear-08.svg"
      },
      {
        "page": 9,
        "en": "Correlation measures and measurement scales",
        "zh": "相关方法与测量尺度表",
        "pairs": [
          [
            "Variable X: Nominal; Ordinal; Interval or ratio. Variable Y: Nominal; Ordinal; Interval or ratio.",
            "变量X与变量Y各分为：名义、顺序、等距或比率尺度。"
          ],
          [
            "Y Nominal × X Nominal: 1. Cramer’s V; 2. Phi; 3. Lambda.",
            "Y名义×X名义：Cramér’s V、Phi、Lambda。"
          ],
          [
            "Y Nominal × X Ordinal: Rank-biserial.",
            "Y名义×X顺序：秩二列相关。"
          ],
          [
            "Y Nominal × X Interval or ratio: Point-biserial.",
            "Y名义×X等距或比率：点二列相关。"
          ],
          [
            "Y Ordinal × X Nominal: Rank-biserial.",
            "Y顺序×X名义：秩二列相关。"
          ],
          [
            "Y Ordinal × X Ordinal: 1. Spearman’s rho; 2. Tetrachoric.",
            "Y顺序×X顺序：Spearman’s rho、四分相关（原表分类）。"
          ],
          [
            "Y Ordinal × X Interval or ratio: Biserial.",
            "Y顺序×X等距或比率：二列相关（原表分类）。"
          ],
          [
            "Y Interval or ratio × X Nominal: Point-biserial.",
            "Y等距或比率×X名义：点二列相关。"
          ],
          [
            "Y Interval or ratio × X Ordinal: Biserial.",
            "Y等距或比率×X顺序：二列相关（原表分类）。"
          ],
          [
            "Y Interval or ratio × X Interval or ratio: Pearson product-moment (Pearson correlation test).",
            "Y等距或比率×X等距或比率：Pearson积矩相关。"
          ]
        ],
        "walk": [
          "Read the row for Y and column for X. For this week, focus on the supported core choices: quantitative linear relationship → Pearson, paired ranks/ordinal monotonic relationship → Spearman, nominal association → Cramér’s V. Accuracy clarification: the full printed matrix is oversimplified. Point-biserial needs a binary variable, not just any nominal variable; biserial and tetrachoric methods require particular dichotomisation/latent-variable assumptions and are not generic choices for every ordinal variable.",
          "按Y的行与X的列交叉查表。本周重点掌握：数值变量的线性关系用Pearson，配对秩或有序变量的单调关系用Spearman，名义变量的关联用Cramér’s V。准确性澄清：原表整体较简化。点二列要求一个变量为二分类，并非任意名义变量；二列与四分相关有特定二分化或潜变量假设，不能将其视为所有顺序变量的通用选项。"
        ],
        "topic": null,
        "visual": {
          "headers": [
            "Y / X",
            "Nominal",
            "Ordinal",
            "Interval / ratio"
          ],
          "rows": [
            [
              "Nominal",
              "Cramér’s V; Phi; Lambda",
              "Rank-biserial",
              "Point-biserial"
            ],
            [
              "Ordinal",
              "Rank-biserial",
              "Spearman; Tetrachoric [original]",
              "Biserial [original]"
            ],
            [
              "Interval / ratio",
              "Point-biserial",
              "Biserial [original]",
              "Pearson product-moment"
            ]
          ]
        },
        "week": 4,
        "id": "slide-09",
        "image": "assets/week4/page-09.jpg",
        "clear": "assets/week4/clear-09.svg"
      },
      {
        "page": 10,
        "en": "Descriptions of correlation measures",
        "zh": "不同相关方法的说明",
        "pairs": [
          [
            "Pearson product-moment coefficient: It states the relationship between variables using the interval and ratio scales.",
            "Pearson积矩系数：描述使用等距和比率尺度的变量之间的关系。"
          ],
          [
            "Point-biserial coefficient: It states the relationship between an interval or ratio scale variable and a nominal scale variable.",
            "点二列系数：描述一个等距或比率变量与一个名义变量的关系（原表说法）。"
          ],
          [
            "Spearman’s rho coefficient: It states the relationship between variables when the distribution of data is not normal and where both variables are in ordinal scales which are arranged according to rank.",
            "Spearman秩相关：原表描述为数据非正态，且两个变量为按秩排序的顺序尺度时的关系。"
          ],
          [
            "Biserial coefficient: It is similar to the point-biserial coefficient where one of the variables is measured in the interval or ratio scale whereas the other variable is in the ordinal scale.",
            "二列系数：原表称与点二列类似，其中一个变量为等距或比率尺度，另一个为顺序尺度。"
          ],
          [
            "Tetrachoric coefficient: It is similar to the Phi coefficient which states the relationship of variables in the nominal scale. The difference is that this coefficient is used when the researcher estimates that both variable scales have ranking and the data distribution is normal.",
            "四分系数：原表称与描述名义变量关系的Phi类似，但用于研究者估计两个变量有等级且数据呈正态的情况。"
          ],
          [
            "Cramer’s V, Phi and Lambda coefficients: They are used when variables are in the nominal scale and each variable has two or more categories.",
            "Cramér’s V、Phi与Lambda系数：原表称适用于名义变量，每个变量有两个或更多类别。"
          ],
          [
            "Rank-biserial coefficient: It is similar to the point-biserial coefficient where one variable in the relationship is in the nominal scale and the other variable is in the ordinal scale.",
            "秩二列系数：原表称与点二列相似，其中一个变量为名义尺度，另一个为顺序尺度。"
          ]
        ],
        "walk": [
          "These are the original descriptions, with necessary qualifications: Pearson measures linear association; Spearman does not require normality and also works by ranking quantitative data. Point-biserial and rank-biserial involve a binary grouping variable. Biserial usually treats a binary variable as a dichotomised latent continuous measurement; tetrachoric concerns two binary observations under an assumed latent bivariate-normal model. Phi is commonly used for a 2×2 table; Cramér’s V extends to larger nominal tables. Do not learn the original broad wording as sufficient assumptions for every method.",
          "以上保留原表描述，但须补充条件：Pearson衡量线性关联；Spearman不要求正态，也能将数值数据排序后使用。点二列与秩二列涉及二分类组别变量。二列相关通常把二分类视为潜在连续测量被二分后的结果；四分相关处理两个二分类观察，并假定潜在二元正态模型。Phi常用于2×2表，Cramér’s V可扩展到更大的名义列联表。不能把原表概括当作每种方法的充分适用条件。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-10",
        "image": "assets/week4/page-10.jpg",
        "clear": "assets/week4/clear-10.svg"
      },
      {
        "page": 11,
        "en": "Pearson’s correlation coefficient: formula",
        "zh": "Pearson相关系数公式",
        "pairs": [
          [
            "Pearson’s Correlation Coefficient (r)",
            "Pearson相关系数r。"
          ],
          [
            "r = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / √[Σ(xᵢ − x̄)² × Σ(yᵢ − ȳ)²]",
            "r=两变量离均差乘积之和，除以两变量平方离差和乘积的平方根。"
          ],
          [
            "r: Sample correlation coefficient.",
            "r：样本相关系数。"
          ],
          [
            "Σ: Summation, “Take the Sum Of”.",
            "Σ：求和，将各项相加。"
          ],
          [
            "xᵢ: Value of X; x̄: Mean of X variable.",
            "xᵢ：X的某个观察值；x̄：X变量均值。"
          ],
          [
            "yᵢ: Value of Y; ȳ: Mean of Y variable.",
            "yᵢ：Y的某个观察值；ȳ：Y变量均值。"
          ],
          [
            "Σ(xᵢ − x̄)²: Sum of the squared deviations for X.",
            "Σ(xᵢ−x̄)²：X的平方离差和。"
          ],
          [
            "Σ(yᵢ − ȳ)²: Sum of the squared deviations for Y.",
            "Σ(yᵢ−ȳ)²：Y的平方离差和。"
          ],
          [
            "√: Square root.",
            "√：平方根。"
          ]
        ],
        "walk": [
          "For each case, subtract each variable’s mean; multiply the two deviations; add those products. The denominator standardises this joint variation by the variation in both variables, so r has no measurement unit and lies between −1 and +1. If either variable is constant, the denominator is zero and Pearson r is undefined.",
          "对每个对象，分别将X和Y减去各自均值，两个离差相乘，再将乘积相加。分母利用两变量自身的变异进行标准化，因此r没有单位，范围为−1到+1。若任一变量为常数，分母为零，Pearson r无定义。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-11",
        "image": "assets/week4/page-11.jpg",
        "clear": "assets/week4/clear-11.svg"
      },
      {
        "page": 12,
        "en": "Pearson variables and a prediction equation",
        "zh": "Pearson变量与预测方程",
        "pairs": [
          [
            "Variable 1: Interval or ratio scale ↔ Pearson correlation test ↔ Variable 2: Interval or ratio scale.",
            "变量1：等距或比率尺度↔Pearson相关检验↔变量2：等距或比率尺度。"
          ],
          [
            "The basis for determining the relationship equation between variables is by stating its general equation.",
            "确定变量间关系方程的基础，是写出其一般方程。"
          ],
          [
            "The general equation for the relationship between variables is represented by the following formula.",
            "变量之间关系的一般方程用下面的公式表示。"
          ],
          [
            "In calculating the relationship, one variable is treated as the dependent variable and the other as the independent variable.",
            "在计算这种关系时，将一个变量视为因变量，另一个视为自变量。"
          ],
          [
            "Y = a + bX",
            "Y=a+bX。"
          ],
          [
            "Y = Dependent variable; X = Independent variable.",
            "Y为因变量，X为自变量。"
          ],
          [
            "a = The constant value of the crossing point of the linear regression line at the Y axis.",
            "a为线性回归线与Y轴交点的常数值，即截距。"
          ],
          [
            "b = The regression line gradient which states the relationship between the variables.",
            "b为回归线的梯度，即斜率。"
          ]
        ],
        "walk": [
          "The slide moves from correlation to simple regression. Keep them distinct: r summarises signed linear association symmetrically, whereas a regression selects an outcome Y to predict from X. Write the fitted prediction as Ŷ=a+bX; b is change in predicted Y per one-unit increase in X, and a is predicted Y when X=0. Naming X independent does not itself prove causation.",
          "本页由相关过渡到简单回归，必须区分：r对称地概括线性关联，而回归指定由X预测的结果Y。拟合预测通常写作Ŷ=a+bX；b表示X增加1单位时预测Y改变多少，a表示X为0时预测Y。把X称为自变量本身不证明因果。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-12",
        "image": "assets/week4/page-12.jpg",
        "clear": "assets/week4/clear-12.svg"
      },
      {
        "page": 13,
        "en": "Scatterplot: expectation and behaviour",
        "zh": "散点图：教师预期与行为",
        "pairs": [
          [
            "Scatter Plot",
            "散点图。"
          ],
          [
            "Horizontal axis: Teacher expectation of failure (0, 2, 4, 6, 8, 10, 12).",
            "横轴：教师对失败的预期，标度为0、2、4、6、8、10、12。"
          ],
          [
            "Vertical axis: Amount of disruptive behavior (0, 2, 4, 6, 8, 10, 12).",
            "纵轴：干扰行为多少，标度为0、2、4、6、8、10、12。"
          ],
          [
            "Class 1",
            "图中组别标签：Class 1。"
          ],
          [
            "Amount of disruptive behavior in class as related to teacher expectation of failure.",
            "课堂干扰行为多少与教师对失败预期的关系。"
          ]
        ],
        "walk": [
          "Each point is one paired observation. The fitted line rises, so higher failure expectations are associated with more disruptive behaviour in this illustration. Points do not lie exactly on the line. The image supplies no exact r, p-value or raw dataset, so none can be inferred precisely from its appearance.",
          "每个点是一组配对观察。线条向上，表示在这张示意图中，失败预期越高往往伴随更多干扰行为。点并未全部落在线上。原图没有提供精确r、p值或原始数据，不能仅凭外观编出这些数值。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-13",
        "image": "assets/week4/page-13.jpg",
        "clear": "assets/week4/clear-13.svg",
        "showOriginal": true
      },
      {
        "page": 14,
        "en": "Negative correlation",
        "zh": "负相关",
        "pairs": [
          [
            "A negative correlation means high scores on one variable tend to be associated with low scores on the other, & low scores on one are associated with high scores on the other.",
            "负相关指一个变量的高分倾向于与另一个变量的低分相联系，反之亦然。"
          ]
        ],
        "walk": [
          "Think “high with low”. A downward scatterplot pattern gives a negative coefficient. Negative does not mean weak, bad or statistically nonsignificant; it describes direction. Strength is judged separately from the magnitude of the coefficient.",
          "记住“高配低”。散点图总体下降，对应负系数。负号不表示弱、不好或不显著，它只表示方向。强度需要另看系数绝对值。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-14",
        "image": "assets/week4/page-14.jpg",
        "clear": "assets/week4/clear-14.svg"
      },
      {
        "page": 15,
        "en": "A perfect negative correlation",
        "zh": "完全负相关示意",
        "pairs": [
          [
            "Horizontal axis X: 0 to 5. Vertical axis Y: 0 to 5.",
            "横轴X与纵轴Y均显示0至5的标度。"
          ],
          [
            "FIG. 16.1. Scatterplot illustrating a correlation of −1.00.",
            "图16.1：展示相关系数为−1.00的散点图。"
          ]
        ],
        "walk": [
          "The five points in the illustration lie along a descending straight line: as X increases, Y falls consistently. The source caption specifies r=−1.00. This is perfect linear association, not proof that changing X would cause Y to change. The points are illustrated; do not manufacture a raw-data table from the photographed coordinates.",
          "图中五个点位于下降直线上：X增大时Y一致减小。原图说明指定r=−1.00。这表示完全线性关联，不证明改变X会导致Y变化。原图是示意，不能根据拍摄后的点位自行制造原始数据表。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-15",
        "image": "assets/week4/page-15.jpg",
        "clear": "assets/week4/clear-15.svg",
        "showOriginal": true
      },
      {
        "page": 16,
        "en": "Design of a correlational relationship",
        "zh": "相关关系的研究设计",
        "pairs": [
          [
            "Only one group is used.",
            "只使用一个组。"
          ],
          [
            "Two measures are made.",
            "进行两项测量。"
          ],
          [
            "These two measures are correlated.",
            "分析这两项测量的相关。"
          ],
          [
            "The intent is to determine the degree of relationship that exists between the two measured variables.",
            "目的是确定这两个测量变量之间的关系程度。"
          ],
          [
            "The researcher can generalize his/her findings on the relationship if a sample is randomly assigned and the loss of subjects is minimal.",
            "原文称：若样本是随机分配的，且研究对象流失很少，研究者可以推广关系结论。"
          ]
        ],
        "walk": [
          "The basic structure is one set of cases with two measurements on each case; keep the X and Y rows paired. Clarification: random sampling/representative selection supports generalisation, while random assignment allocates treatments and is a different concept. Minimal attrition helps but does not guarantee a representative sample. “One group” describes this introductory design rather than every possible correlational study.",
          "基本结构是同一批对象，每人有两项测量；X与Y的行必须保持配对。澄清：支持总体推广的是随机抽样或有代表性的选取，随机分配则指分派处理，两者不同。流失少有帮助，但不能保证样本有代表性。“一个组”描述这里的入门设计，并非所有相关研究都只能有一组。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-16",
        "image": "assets/week4/page-16.jpg",
        "clear": "assets/week4/clear-16.svg"
      },
      {
        "page": 17,
        "en": "Why use correlational research? Understanding",
        "zh": "为什么进行相关研究：理解现象",
        "pairs": [
          [
            "Major purpose: to explain clearly our understanding through identifying relationships among variables.",
            "主要目的：通过识别变量之间的关系，加深对现象的理解。"
          ],
          [
            "Where experimental researches are difficult, correlational research can still explain some important phenomena.",
            "当实验研究难以开展时，相关研究仍能帮助理解一些重要现象。"
          ]
        ],
        "walk": [
          "You may be unable to assign experiences or characteristics experimentally, yet can observe how measured variables are associated. Such evidence is useful for describing patterns and developing hypotheses. In this setting “explain” should not be read as establishing a causal mechanism from correlation alone.",
          "有些经历或特征无法通过实验分配，但仍可以观察测量变量如何关联。这有助于描述模式和提出假设。这里的“解释”不能理解成仅凭相关就确立因果机制。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-17",
        "image": "assets/week4/page-17.jpg",
        "clear": "assets/week4/clear-17.svg"
      },
      {
        "page": 18,
        "en": "Why use correlational research? Prediction",
        "zh": "为什么进行相关研究：预测",
        "pairs": [
          [
            "Second purpose: is that of prediction.",
            "第二个目的是预测。"
          ],
          [
            "If a relationship of sufficient magnitude exists between two variables, it becomes possible to predict a score on either variable if a score on the other variable is known.",
            "如果两个变量之间存在足够程度的关系，已知其中一个变量的分数，便可能预测另一个变量的分数。"
          ]
        ],
        "walk": [
          "A stable association can help predict an unknown outcome from a known measurement. Prediction still has error unless the relationship is perfect, and performance on new cases requires checking. Prediction and causation are separate claims; a useful predictor need not be a cause.",
          "稳定的关联可以帮助用已知测量预测未知结果。除非关系完全确定，预测仍存在误差，在新对象上的效果也需要检验。预测与因果是不同主张，有预测价值的变量不一定是原因。"
        ],
        "topic": "correlation",
        "week": 4,
        "id": "slide-18",
        "image": "assets/week4/page-18.jpg",
        "clear": "assets/week4/clear-18.svg"
      },
      {
        "page": 19,
        "en": "Pearson example: IQ and mathematics",
        "zh": "Pearson例题：IQ与数学成绩",
        "pairs": [
          [
            "A lecturer wants to identify the relationship between IQ and performance in a mathematics test among his architecture students.",
            "一名教师想了解建筑专业学生的IQ与数学测验表现之间的关系。"
          ],
          [
            "The IQ scores and the mathematics performance test scores were collected from 10 architecture students.",
            "收集了10名建筑专业学生的IQ分数和数学测验分数。"
          ]
        ],
        "walk": [
          "There are ten cases, each contributing one IQ score and one mathematics score. The question asks about association, so it is not a comparison of two group means. For a Pearson analysis, inspect the scatterplot for linearity and influential outliers, and consider independent cases and the assumptions used for inference. The individual raw scores are not printed on this page.",
          "共10个对象，每人贡献一对IQ和数学分数。问题问关联，不是比较两组均值。进行Pearson分析前，应看散点图的线性形状与有影响的异常值，并考虑观察独立性和推断所需假设。本页没有列出个人原始分数。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-19",
        "image": "assets/week4/page-19.jpg",
        "clear": "assets/week4/clear-19.svg"
      },
      {
        "page": 20,
        "en": "SPSS: Bivariate Correlations settings",
        "zh": "SPSS：双变量相关设置",
        "pairs": [
          [
            "Bivariate Correlations",
            "双变量相关对话框。"
          ],
          [
            "Available variables: IQ; Maths. Variables: [selection box].",
            "可选变量为IQ与Maths；右侧Variables框用于放入分析变量。"
          ],
          [
            "Correlation Coefficients: Pearson [checked]; Kendall’s tau-b; Spearman.",
            "相关系数选项：Pearson已勾选；另有Kendall’s tau-b与Spearman。"
          ],
          [
            "Test of Significance: Two-tailed [selected]; One-tailed.",
            "显著性检验：已选择双侧，另有单侧选项。"
          ],
          [
            "Flag significant correlations [checked].",
            "已勾选标记显著相关。"
          ],
          [
            "Options; Style; Bootstrap; OK; Paste; Reset; Cancel; Help.",
            "界面按钮：选项、样式、自助法、确定、粘贴、重置、取消、帮助。"
          ]
        ],
        "walk": [
          "Move IQ and Maths into Variables, keep Pearson selected and use the two-tailed option for a nondirectional question, then run the analysis. The shown screenshot is the setup stage: its Variables box is still empty, so the grey OK button is not itself a result. Menu route added for guidance: Analyze → Correlate → Bivariate.",
          "将IQ和Maths放入Variables框，保留Pearson；研究问题没有预设方向时使用双侧选项，然后运行。截图属于设置阶段，Variables框仍为空，因此灰色OK按钮不是分析结果。补充菜单路径：Analyze→Correlate→Bivariate。"
        ],
        "topic": null,
        "week": 4,
        "id": "slide-20",
        "image": "assets/week4/page-20.jpg",
        "clear": "assets/week4/clear-20.svg"
      },
      {
        "page": 21,
        "en": "SPSS: Pearson correlation output",
        "zh": "SPSS：Pearson相关输出",
        "pairs": [
          [
            "Correlations: IQ × IQ = 1; Maths × Maths = 1.",
            "相关矩阵：IQ与自身、Maths与自身的相关均为1。"
          ],
          [
            "IQ × Maths: Pearson Correlation = .719*.",
            "IQ与Maths的Pearson相关系数为.719，带*标记。"
          ],
          [
            "IQ × Maths: Sig. (2-tailed) = .019.",
            "IQ与Maths的双侧显著性p=.019。"
          ],
          [
            "N = 10 for both variables.",
            "两个变量的样本量均为10。"
          ],
          [
            "The IQ–Maths and Maths–IQ entries are identical.",
            "IQ–Maths与Maths–IQ两个对称单元格相同。"
          ],
          [
            "* Correlation is significant at the 0.05 level (2-tailed).",
            "*表示相关在.05水平上显著（双侧检验）。"
          ]
        ],
        "walk": [
          "Read the off-diagonal entry: r=.719, then p=.019, then N=10. Under the page 8 guide this is a high positive correlation, statistically significant at α=.05 because .019<.05. An appropriate report is r(8)=.719, p=.019, n=10. This supports positive linear association in the stated analysis; it does not prove that IQ causes the mathematics result. The diagonal 1s are self-correlations, not the answer to the research question.",
          "读非对角线：先r=.719，再p=.019，最后N=10。按第8页分档为高正相关；因.019<.05，在α=.05时显著。可报告r(8)=.719，p=.019，n=10。这支持本分析中的正线性关联，不证明IQ导致数学成绩。对角线的1是自相关，不是研究问题的答案。"
        ],
        "topic": null,
        "visual": {
          "headers": [
            "Pair / statistic",
            "IQ",
            "Maths"
          ],
          "rows": [
            [
              "IQ: Pearson correlation",
              "1",
              ".719*"
            ],
            [
              "IQ: Sig. (2-tailed)",
              "—",
              ".019"
            ],
            [
              "IQ: N",
              "10",
              "10"
            ],
            [
              "Maths: Pearson correlation",
              ".719*",
              "1"
            ],
            [
              "Maths: Sig. (2-tailed)",
              ".019",
              "—"
            ],
            [
              "Maths: N",
              "10",
              "10"
            ]
          ]
        },
        "week": 4,
        "id": "slide-21",
        "image": "assets/week4/page-21.jpg",
        "clear": "assets/week4/clear-21.svg"
      },
      {
        "page": 22,
        "en": "Manual calculation of Pearson r",
        "zh": "手算Pearson相关系数",
        "pairs": [
          [
            "r = Σ[(xᵢ − x̄)(yᵢ − ȳ)] / √[Σ(xᵢ − x̄)² × Σ(yᵢ − ȳ)²]",
            "r=离差乘积和÷两变量平方离差和乘积的平方根。"
          ],
          [
            "r = correlation coefficient.",
            "r为相关系数。"
          ],
          [
            "xᵢ = values of the x-variable in a sample.",
            "xᵢ为样本中X变量的值。"
          ],
          [
            "x̄ = mean of the values of the x-variable.",
            "x̄为X变量各值的均值。"
          ],
          [
            "yᵢ = values of the y-variable in a sample.",
            "yᵢ为样本中Y变量的值。"
          ],
          [
            "ȳ = mean of the values of the y-variable.",
            "ȳ为Y变量各值的均值。"
          ]
        ],
        "walk": [
          "Calculate x̄ and ȳ, form the paired deviations, multiply each pair, sum the products, and divide by the square root of the two squared-deviation sums. This formula gives the same r as Pearson in SPSS for the same complete paired cases. The lecture does not supply the ten individual IQ/Maths pairs, so the .719 output cannot be reproduced step by step from raw values here without inventing missing data. The extra examples below use explicitly supplied practice data.",
          "先求x̄与ȳ，再算每对离差、相乘、求和，最后除以两列平方离差和乘积的平方根。对同一批完整配对数据，公式与SPSS Pearson给出相同r。讲义未提供10人的个人IQ/Maths配对值，因此不能在不编造数据的情况下，从原始数值逐步复现.719。下面额外例题使用明确给出的练习数据。"
        ],
        "topic": "pearson",
        "week": 4,
        "id": "slide-22",
        "image": "assets/week4/page-22.jpg",
        "clear": "assets/week4/clear-22.svg"
      },
      {
        "page": 23,
        "en": "Spearman’s rho test",
        "zh": "Spearman秩相关检验",
        "pairs": [
          [
            "ρ = 1 − 6Σdᵢ² / [n(n² − 1)]",
            "ρ=1−6Σdᵢ²/[n(n²−1)]。"
          ],
          [
            "ρ = Spearman’s rank correlation coefficient.",
            "ρ为Spearman秩相关系数。"
          ],
          [
            "dᵢ = difference between the two ranks of each observation.",
            "dᵢ为同一个观察对象在两列排序中的秩之差。"
          ],
          [
            "n = number of observations.",
            "n为配对观察数。"
          ]
        ],
        "walk": [
          "Rank X and Y separately, keep the same cases paired, subtract each pair of ranks, square and sum those differences, and insert n. This shortcut assumes no tied ranks. With ties, assign average ranks and calculate Pearson correlation of the rank columns (or use a tie-aware software procedure). Spearman describes monotonic association; it need not capture a strong U-shaped relationship.",
          "分别给X和Y排序，保持同一对象配对，将两秩相减、平方并求和，再代入n。这个简式要求没有并列秩。有并列时分配平均秩，再求两列秩的Pearson相关，或使用能处理并列的软件程序。Spearman衡量单调关联，强烈的U形关系不一定得到很大的系数。"
        ],
        "topic": "spearman",
        "week": 4,
        "id": "slide-23",
        "image": "assets/week4/page-23.jpg",
        "clear": "assets/week4/clear-23.svg"
      },
      {
        "page": 24,
        "en": "Cramér’s V: leadership style and gender",
        "zh": "Cramér’s V：领导风格与性别",
        "pairs": [
          [
            "Crosstabs: Case Processing Summary, Leadership_style * Gender.",
            "交叉表：个案处理摘要，领导风格×性别。"
          ],
          [
            "Valid N = 100 (100.0%); Missing N = 0 (0.0%); Total N = 100 (100.0%).",
            "有效100例（100.0%），缺失0例（0.0%），总计100例（100.0%）。"
          ],
          [
            "Leadership_style * Gender Crosstabulation: columns Male, Female, Total.",
            "领导风格×性别交叉表，列为男性、女性、总计。"
          ],
          [
            "Autocratic: Count 14, 24, 38; Expected Count 27.4, 10.6, 38.0; Standardized Residual −2.6, 4.1.",
            "专制型：观察频数14、24、38；期望频数27.4、10.6、38.0；标准化残差−2.6、4.1。"
          ],
          [
            "Democratic: Count 27, 2, 29; Expected Count 20.9, 8.1, 29.0; Standardized Residual 1.3, −2.1.",
            "民主型：观察频数27、2、29；期望频数20.9、8.1、29.0；标准化残差1.3、−2.1。"
          ],
          [
            "Laissez-faire: Count 31, 2, 33; Expected Count 23.8, 9.2, 33.0; Standardized Residual 1.5, −2.4.",
            "放任型：观察频数31、2、33；期望频数23.8、9.2、33.0；标准化残差1.5、−2.4。"
          ],
          [
            "Total: Count 72, 28, 100; Expected Count 72.0, 28.0, 100.0.",
            "总计：观察频数72、28、100；期望频数72.0、28.0、100.0。"
          ]
        ],
        "walk": [
          "Both variables are categories, so start from counts, not averages of numeric labels. Expected counts under independence equal row total × column total / N; for Autocratic–Male, 38×72/100=27.36, displayed as 27.4. The observed count is 14. Compare the pattern through the whole table; the next page supplies chi-square evidence and Cramér’s V magnitude. Rounded expected counts should not be used to recompute the final statistic if unrounded values are available.",
          "两个变量都是类别，因此从频数出发，不对类别编码取平均。独立时的期望频数=行合计×列合计/N。例如专制型男性为38×72/100=27.36，显示27.4，观察频数则为14。应看整张表的模式；下一页给出卡方证据与Cramér’s V强度。有未四舍五入值时，不应用已舍入期望频数重新计算最终统计量。"
        ],
        "topic": null,
        "visual": {
          "headers": [
            "Leadership style",
            "Male count",
            "Female count",
            "Total"
          ],
          "rows": [
            [
              "Autocratic",
              "14",
              "24",
              "38"
            ],
            [
              "Democratic",
              "27",
              "2",
              "29"
            ],
            [
              "Laissez-faire",
              "31",
              "2",
              "33"
            ],
            [
              "Total",
              "72",
              "28",
              "100"
            ]
          ]
        },
        "week": 4,
        "id": "slide-24",
        "image": "assets/week4/page-24.jpg",
        "clear": "assets/week4/clear-24.svg"
      },
      {
        "page": 25,
        "en": "Cramér’s V: chi-square and symmetric measures",
        "zh": "Cramér’s V：卡方与对称测量",
        "pairs": [
          [
            "Chi-Square Tests: Pearson Chi-Square = 37.585ᵃ; df = 2; Asymptotic Significance (2-sided) = .000.",
            "卡方检验：Pearson卡方37.585，df=2，渐近双侧显著性显示.000。"
          ],
          [
            "Likelihood Ratio = 38.929; df = 2; significance = .000.",
            "似然比38.929，df=2，显著性显示.000。"
          ],
          [
            "Linear-by-Linear Association = 29.455; df = 1; significance = .000.",
            "线性×线性关联29.455，df=1，显著性显示.000。"
          ],
          [
            "N of Valid Cases = 100.",
            "有效个案数100。"
          ],
          [
            "a. 0 cells (0.0%) have expected count less than 5. The minimum expected count is 8.12.",
            "注a：0个单元格（0.0%）的期望频数小于5，最小期望频数为8.12。"
          ],
          [
            "Symmetric Measures: Nominal by Nominal, Phi = .613; Approximate Significance = .000.",
            "对称测量：名义×名义，Phi=.613，近似显著性显示.000。"
          ],
          [
            "Symmetric Measures: Cramer’s V = .613; Approximate Significance = .000.",
            "对称测量：Cramér’s V=.613，近似显著性显示.000。"
          ],
          [
            "N of Valid Cases = 100.",
            "有效个案数100。"
          ]
        ],
        "walk": [
          "Report χ²(2,N=100)=37.585, p<.001, Cramér’s V=.613. SPSS .000 is rounded, not an exactly zero probability. For this 3×2 table, V=√[χ²/(N×min(3−1,2−1))]=√(37.585/100)≈.613. Chi-square tests independence; V summarises unsigned association strength and has no positive/negative direction. The observed categories do not establish causation. The Linear-by-Linear row is not the main nominal-association result to report here.",
          "可报告χ²(2,N=100)=37.585，p<.001，Cramér’s V=.613。SPSS的.000是舍入显示，不表示概率精确等于0。该3×2表中V=√[χ²/(N×min(3−1,2−1))]=√(37.585/100)≈.613。卡方检验独立性，V概括无正负方向的关联强度。类别关联不确立因果。这里主要报告名义关联结果，不以线性×线性一行为核心。"
        ],
        "topic": "cramer",
        "visual": {
          "headers": [
            "Measure",
            "Value",
            "df",
            "p (display)"
          ],
          "rows": [
            [
              "Pearson chi-square",
              "37.585",
              "2",
              ".000"
            ],
            [
              "Likelihood ratio",
              "38.929",
              "2",
              ".000"
            ],
            [
              "Linear-by-linear",
              "29.455",
              "1",
              ".000"
            ],
            [
              "Phi",
              ".613",
              "—",
              ".000"
            ],
            [
              "Cramér’s V",
              ".613",
              "—",
              ".000"
            ],
            [
              "Valid cases",
              "100",
              "—",
              "—"
            ]
          ]
        },
        "week": 4,
        "id": "slide-25",
        "image": "assets/week4/page-25.jpg",
        "clear": "assets/week4/clear-25.svg"
      }
    ]
  },
  "5": {
    "week": 5,
    "sourcePages": 22,
    "excluded": [
      {
        "page": 1,
        "reason": "Course cover only; no teaching content."
      },
      {
        "page": 21,
        "reason": "Summary divider only; no substantive summary bullets."
      },
      {
        "page": 22,
        "reason": "Thank-you / questions closing page."
      }
    ],
    "slides": [
      {
        "page": 2,
        "en": "Learning objectives: regression",
        "zh": "学习目标：回归分析",
        "pairs": [
          [
            "Today you will learn",
            "本课学习目标"
          ],
          [
            "Causal relationship between variables",
            "变量之间的因果关系"
          ],
          [
            "Regression",
            "回归分析"
          ],
          [
            "Simple linear regression",
            "一元线性回归"
          ],
          [
            "Multiple linear regression - controlling covariates in multiple regression analysis",
            "多元线性回归——在多元回归分析中控制协变量"
          ]
        ],
        "walk": [
          "Start by separating three questions: what do we want to predict, which variables will help us predict it, and whether the study can support a causal interpretation. A regression equation can predict an outcome and describe an adjusted association. The word causal in the learning objectives does not mean that fitting an observational regression automatically establishes cause and effect.",
          "先分清三个问题：想预测什么，哪些变量可以帮助预测，以及研究设计是否足以支持因果解释。回归方程可以预测结果、描述调整后的关联；学习目标中出现“因果关系”，不代表对观察数据拟合回归就自动证明因果。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-02",
        "image": "assets/week5/page-02.jpg",
        "clear": "assets/week5/clear-02.svg"
      },
      {
        "page": 3,
        "en": "Regression: predicting an unknown outcome",
        "zh": "回归：预测未知结果",
        "pairs": [
          [
            "Regression analysis is about predicting the future (the unknown) based on data collected from the past (the known).",
            "回归分析是依据过去收集的数据（已知）来预测未来（未知）。"
          ],
          [
            "Regression allows you to further quantify relationships by developing an equation predicting, for example, current salary based on beginning salary.",
            "回归通过建立预测方程进一步量化关系，例如用入职工资预测当前工资。"
          ],
          [
            "Linear regression is a statistical technique that is used to predict a continuous dependent variable from one or more continuous independent variables.",
            "线性回归是一种统计技术，用一个或多个连续自变量预测一个连续因变量（课件对本课模型的介绍）。"
          ]
        ],
        "walk": [
          "Read the salary example in two roles: beginning salary is the predictor X; current salary is the outcome Y. Learn a pattern from observed cases and use it for an unknown outcome. Unknown does not have to mean a later date: an unobserved current salary is also an unknown. This lesson introduces continuous predictors, but linear regression can also include appropriately coded categorical predictors. Prediction by itself does not prove that changing X would cause the predicted change in Y.",
          "把工资例子分成两个角色：入职工资是预测变量X，当前工资是结果Y。用已观察个案学习规律，再估计未知结果。“未知”不一定是未来，也可以是尚未观察的当前工资。本课先介绍连续预测变量；线性回归也能纳入正确编码的分类预测变量。预测本身不能证明改变X会因果性地改变Y。"
        ],
        "topic": "prediction",
        "week": 5,
        "id": "slide-03",
        "image": "assets/week5/page-03.jpg",
        "clear": "assets/week5/clear-03.svg"
      },
      {
        "page": 4,
        "en": "Simple linear regression: the equation",
        "zh": "一元线性回归：方程",
        "pairs": [
          [
            "A statistical procedure used to find relationships among a set of variables",
            "用于寻找一组变量之间关系的统计程序。"
          ],
          [
            "In regression analysis, there is a dependent variable, the one you are trying to explain, and one or more independent variables related to it.",
            "在回归分析中，有一个你想解释的因变量，以及一个或多个与它有关的自变量。"
          ],
          [
            "You can express the relationship as a linear equation, such as: y = a + bx",
            "可以用线性方程表示这种关系，例如：y=a+bx。"
          ]
        ],
        "walk": [
          "For the simple regression developed on this page, use one predictor X and one outcome Y. Read a+bX as a starting value plus a per-unit change multiplied by X. The general description mentions one or more predictors; two or more predictors will be called multiple regression later. When referring to a fitted prediction, write Ŷ=a+bX so the predicted value is distinguished from an observed Y.",
          "本页的一元回归使用一个预测变量X和一个结果Y。把a+bX读成“起步值＋每单位变化量×X”。前面的概括提到一个或多个预测变量；两个及以上预测变量将在后面称为多元回归。表示拟合预测时写成Ŷ=a+bX，可以将预测值与实际观察值Y区分。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-04",
        "image": "assets/week5/page-04.jpg",
        "clear": "assets/week5/clear-04.svg"
      },
      {
        "page": 5,
        "en": "Intercept, slope and the phone-bill example",
        "zh": "截距、斜率与电话费例子",
        "pairs": [
          [
            "y is the dependent variable",
            "y是因变量。"
          ],
          [
            "x is the independent variable",
            "x是自变量。"
          ],
          [
            "a is a constant",
            "a是常数（截距）。"
          ],
          [
            "b is the slope of the line",
            "b是直线的斜率。"
          ],
          [
            "For every increase of 1 in x, y changes by an amount equal to b",
            "x每增加1，y改变b。"
          ],
          [
            "Some relationships are perfectly linear and fit this equation exactly. Your cell phone bill, for instance, may be:",
            "有些关系完全线性，并精确符合这个方程，例如手机账单可能是："
          ],
          [
            "Total Charges = Base Fee + 30¢ (overage minutes)",
            "总费用=基本费用＋30分×超出套餐的分钟数。"
          ],
          [
            "If you know the base fee and the number of overage minutes, you can predict the total charges exactly.",
            "如果知道基本费用与超额分钟数，就能精确预测总费用。"
          ]
        ],
        "walk": [
          "Match each part to the bill: a is the base fee, X is extra minutes, and b is .30 currency units per extra minute. Added worked calculation: with a base fee of 20 and 10 extra minutes, total=20+.30×10=23. At zero extra minutes the prediction is the base fee. Exact prediction here follows the specified billing rule; empirical relationships usually include unexplained variation. Keep the units consistent: 30 cents equals .30 of a currency unit, not 30 whole units.",
          "把方程与账单一一对应：a是基本费用，X是超额分钟，b是每超额一分钟增加0.30货币单位。补充演算：基本费20、超额10分钟时，总费用=20+0.30×10=23。超额分钟为0时，预测值就是基本费。这里的精确预测源于已规定的计费规则，真实研究中的关系通常还有未解释的变化。注意单位：30分是0.30货币单位，不是30个完整货币单位。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-05",
        "image": "assets/week5/page-05.jpg",
        "clear": "assets/week5/clear-05.svg"
      },
      {
        "page": 6,
        "en": "Height and weight: an imperfect relationship",
        "zh": "身高与体重：不完全精确的关系",
        "pairs": [
          [
            "Other relationships may not be so exact.",
            "其他关系可能并没有那么精确。"
          ],
          [
            "Weight, for instance, is to some degree a function of height, but there are variations that height does not explain.",
            "例如，体重在某种程度上随身高变化，但有些体重差异无法由身高解释。"
          ],
          [
            "On average, you might have an equation like: Weight = -222 + 5.7*Height",
            "平均关系可能表示为：Weight=-222+5.7×Height。"
          ],
          [
            "If you take a sample of actual heights and weights, you might see something like the graph to the right.",
            "抽取实际身高与体重样本，可能得到右侧所示的图。"
          ],
          [
            "Scatterplot: horizontal axis Height, ticks 60, 65, 70, 75; vertical axis Weight, ticks 100, 120, 140, 160, 180, 200, 220.",
            "散点图：横轴Height，刻度60、65、70、75；纵轴Weight，刻度100、120、140、160、180、200、220。"
          ]
        ],
        "walk": [
          "Use the equation on the graph's original scales. Added calculation: at Height=70, predicted Weight=-222+5.7×70=-222+399=177. A one-unit increase in height increases predicted mean weight by 5.7 units. The individual dots need not equal the prediction because other factors contribute to weight. The axes do not explicitly print unit names, so do not silently reinterpret these values as centimetres and kilograms; the next slide's feet-and-inches range indicates the height values are in inches.",
          "沿用原图的数值尺度。补充演算：Height=70时，预测Weight=-222+5.7×70=-222+399=177。身高每增加一个单位，预测平均体重增加5.7个单位。其他因素也影响体重，所以每个点不必恰好等于预测值。坐标轴没有明确打印单位名称，不能擅自把数值解释成厘米和千克；下一页的英尺英寸范围表明此处身高数值采用英寸。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-06",
        "image": "assets/week5/page-06.jpg",
        "clear": "assets/week5/clear-06.svg",
        "showOriginal": true
      },
      {
        "page": 7,
        "en": "Regression error and the observed range",
        "zh": "回归误差与观察范围",
        "pairs": [
          [
            "The line in the graph shows the average relationship described by the equation. Often, none of the actual observations lie on the line. The difference between the line and any individual observation is the error.",
            "图中的直线表示方程描述的平均关系。实际观察点可能没有一个恰好落在线上。直线与单个观察值之间的差就是误差。"
          ],
          [
            "The new equation is: Weight = -222 + 5.7*Height + e",
            "加入误差后的方程：Weight=-222+5.7×Height+e。"
          ],
          [
            "This equation does not mean that people who are short enough will have a negative weight.",
            "这个方程不表示足够矮的人会具有负体重。"
          ],
          [
            "The observations that contributed to this analysis were all for heights between 5’ and 6’4”. The model will likely provide a reasonable estimate for anyone in this height range.",
            "本分析中的观察身高均在5英尺至6英尺4英寸之间。模型可能对这一身高范围内的人给出合理估计。"
          ],
          [
            "You cannot, however, extrapolate the results to heights outside of those observed. The regression results are only valid for the range of actual observations.",
            "但不能把结果直接外推至观察范围之外的身高；回归结果的适用范围受实际观察值范围限制。"
          ],
          [
            "Graph axes: Height (60–75 shown); Weight (100–220 shown).",
            "图轴：身高（显示60至75）；体重（显示100至220）。"
          ]
        ],
        "walk": [
          "Five feet is 60 inches and 6 feet 4 inches is 76 inches. The fitted range in the text is therefore 60–76 inches, even though the plotted ticks stop at 75. Predicting for a child far below 60 inches would be extrapolation. A mathematically negative prediction outside the range is a warning about misuse of the model, not a claim that negative weight is possible. Staying within the range is necessary for this application, but still does not guarantee a good prediction for every population or individual.",
          "5英尺=60英寸，6英尺4英寸=76英寸，因此文字描述的观察范围为60至76英寸，虽然图中最后一个刻度是75。预测远低于60英寸的儿童就是外推。范围外出现数学上的负预测值，是模型被不当使用的警讯，不表示现实中可能存在负体重。处于范围内是本应用的必要考虑，但也不保证对所有人群或个体预测准确。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-07",
        "image": "assets/week5/page-07.jpg",
        "clear": "assets/week5/clear-07.svg",
        "showOriginal": true
      },
      {
        "page": 8,
        "en": "A scatterplot of beginning and current salary",
        "zh": "入职工资与当前工资散点图",
        "pairs": [
          [
            "When there is a single independent variable, the relationship between the independent variable and dependent variable can be visualized in a scatter plot.",
            "只有一个自变量时，可以用散点图展示自变量与因变量的关系。"
          ],
          [
            "Horizontal axis: Beginning Salary; visible ticks $0, $20,000, $40,000, $60,000, $80,000.",
            "横轴：入职工资；可见刻度为0、20,000、40,000、60,000、80,000美元。"
          ],
          [
            "Vertical axis: Current Salary; visible ticks $0, $50,000, $100,000, $150,000.",
            "纵轴：当前工资；可见刻度为0、50,000、100,000、150,000美元。"
          ],
          [
            "The displayed points show an upward pattern around a fitted straight line.",
            "图中观察点围绕拟合直线呈向上趋势（图形内容描述）。"
          ]
        ],
        "walk": [
          "Read one dot as one case with two salary measurements. The upward trend means higher beginning salaries tend to accompany higher current salaries. The line predicts the outcome for a chosen X; vertical scatter shows individual predictions are imperfect. The slide does not supply the numerical fitted equation or the raw observations, so exact slope, intercept and residuals cannot be recovered reliably by guessing from this small graph.",
          "一个点代表一个对象的两项工资测量。上升趋势表示入职工资较高的人，其当前工资也往往较高。直线给出选定X时的预测结果；上下散布表示个体预测并不精确。课件未提供这幅图的数值方程或原始观察值，因此不能靠小图猜出精确斜率、截距和残差。"
        ],
        "topic": "simple-regression",
        "week": 5,
        "id": "slide-08",
        "image": "assets/week5/page-08.jpg",
        "clear": "assets/week5/clear-08.svg",
        "showOriginal": true
      },
      {
        "page": 9,
        "en": "Residuals: observed minus predicted",
        "zh": "残差：观察值减预测值",
        "pairs": [
          [
            "In the scatterplot, notice that many points fall near the line, but some are quite a distance from it.",
            "注意散点图中许多点靠近直线，但也有些离直线较远。"
          ],
          [
            "For each point, the difference between the value of the dependent variable and the value predicted by the equation (the value on the line) is called the residual (also known as the error).",
            "对每个点，因变量实际值与方程预测值（直线上的值）之间的差称为残差，也称误差。"
          ],
          [
            "Points above the line have positive residuals (they were underpredicted), and points below the line have negative residuals (they were overpredicted); a point falling on the line has a residual of zero (a perfect prediction).",
            "直线上方的点有正残差，表示被低估；直线下方的点有负残差，表示被高估；在线上的点残差为0，表示该点预测完全符合。"
          ],
          [
            "The regression equation is built so that if you were to add up all the residuals (some will be positive and some will be negative), they would sum to zero.",
            "回归方程使所有残差相加（有正有负）等于0（需按后面的补充条件理解）。"
          ]
        ],
        "walk": [
          "Use e=Y−Ŷ. Added examples: observed 75 minus predicted 70 gives +5, so the model underpredicted; observed 65 minus predicted 70 gives −5, so it overpredicted. Measure this gap vertically at the same X. Accuracy note: residuals sum to zero in ordinary least squares fitted to the training data with an intercept, up to rounding. This does not apply automatically to every model or new data, and does not mean each residual or the sum of squared residuals is zero. A fitted residual is an estimate related to, but distinct from, an unobserved population error.",
          "使用e=Y−Ŷ。补充例子：实际75减预测70得+5，模型低估；实际65减预测70得−5，模型高估。在相同X处沿竖直方向量差距。准确性说明：含截距、在训练数据上拟合的普通最小二乘模型，其残差和为0，允许舍入误差；并非任何模型或新数据都自动满足，也不代表每个残差或残差平方和为0。拟合残差与无法直接观察的总体误差有关，但两者不是完全相同的量。"
        ],
        "topic": "residuals",
        "week": 5,
        "id": "slide-09",
        "image": "assets/week5/page-09.jpg",
        "clear": "assets/week5/clear-09.svg"
      },
      {
        "page": 10,
        "en": "Multiple regression: five teaching-method scores",
        "zh": "多元回归：五种教学方法评分",
        "pairs": [
          [
            "The multiple regression test is used to identify change in two or more factors (IV) which contribute to change in a dependent variable.",
            "多元回归用于识别两个或更多因素（自变量）的变化与一个因变量变化的关系。"
          ],
          [
            "For example, a lecturer in the psychology department discovers that the psychology course tutors used five teaching methods in their tutorial sessions.",
            "例如，心理学系教师发现课程导师在辅导课中使用了五种教学方法。"
          ],
          [
            "He wants to identify which method contributes most to teaching effectiveness.",
            "他想识别哪种教学方法对教学效果的贡献最大。"
          ]
        ],
        "walk": [
          "The target remains one outcome: teaching effectiveness. There are now five predictor scores, one for each teaching method. This differs from a simple regression with only one predictor. The model compares associations while accounting for the other included scores; observational coefficients alone cannot establish which method causes the greatest improvement. Also distinguish five method scores from one categorical variable with five mutually exclusive teaching groups.",
          "目标仍是一个结果：教学效果。现在有五项预测评分，每种教学方法一项，因此区别于只有一个预测变量的一元回归。模型比较的是纳入其他评分后的关联；仅凭观察性系数不能证明哪种方法因果上改善最多。还要区分“五项方法评分”与“一个包含五个互斥教学组的分类变量”。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-10",
        "image": "assets/week5/page-10.jpg",
        "clear": "assets/week5/clear-10.svg"
      },
      {
        "page": 11,
        "en": "Multiple-regression predictor diagram",
        "zh": "多元回归预测变量关系图",
        "pairs": [
          [
            "Score of teaching effectiveness (criterion variable)",
            "教学效果评分（效标变量）。"
          ],
          [
            "Score of teaching method 1 (first predictor variable X₁)",
            "教学方法1评分（第一个预测变量X₁）。"
          ],
          [
            "Score of teaching method 2 (second predictor variable X₂)",
            "教学方法2评分（第二个预测变量X₂）。"
          ],
          [
            "Score of teaching method 3 (third predictor variable X₃)",
            "教学方法3评分（第三个预测变量X₃）。"
          ],
          [
            "Score of teaching method 4 (fourth predictor variable X₄)",
            "教学方法4评分（第四个预测变量X₄）。"
          ],
          [
            "Score of teaching method 5 (fifth predictor variable X₅)",
            "教学方法5评分（第五个预测变量X₅）。"
          ],
          [
            "All five predictor-score arrows point to the teaching-effectiveness criterion score.",
            "五个预测评分的箭头都指向教学效果这一效标评分（原图关系）。"
          ]
        ],
        "walk": [
          "Read the diagram from its five inputs to its single target. Each tutor/case needs a row containing all five predictor scores and a teaching-effectiveness score. The arrows show the intended prediction structure. They do not supply numerical coefficients, a causal proof, or information about sample size; none of those is given in this figure.",
          "从五个输入读向一个目标。每个导师或个案应有一行数据，包含五项预测评分与一项教学效果评分。箭头表示预定的预测结构；图中并没有提供数值系数、因果证明或样本量，不能由箭头自行补出。"
        ],
        "topic": null,
        "visual": {
          "headers": [
            "Predictor",
            "Target"
          ],
          "rows": [
            [
              "Teaching method 1 score (X₁)",
              "Teaching effectiveness"
            ],
            [
              "Teaching method 2 score (X₂)",
              "Teaching effectiveness"
            ],
            [
              "Teaching method 3 score (X₃)",
              "Teaching effectiveness"
            ],
            [
              "Teaching method 4 score (X₄)",
              "Teaching effectiveness"
            ],
            [
              "Teaching method 5 score (X₅)",
              "Teaching effectiveness"
            ]
          ]
        },
        "week": 5,
        "id": "slide-11",
        "image": "assets/week5/page-11.jpg",
        "clear": "assets/week5/clear-11.svg"
      },
      {
        "page": 12,
        "en": "The unstandardized multiple-regression equation",
        "zh": "非标准化多元回归方程",
        "pairs": [
          [
            "In multiple regression analysis, the independent variable (X) is known as the predictor variable whereas the dependent variable, which is teaching effectiveness, is known as the criterion variable (Ŷ).",
            "在多元回归中，自变量X称为预测变量；因变量（此处为教学效果）称为效标变量。课件此处使用Ŷ符号。"
          ],
          [
            "The criterion variable score (Ŷ) is predicted using k predictor variables (X₁, X₂, .... and Xₖ), where k ≥ 2. The unstandardized multiple regression equation is shown below:",
            "用k个预测变量（X₁、X₂、……、Xₖ）预测效标评分Ŷ，其中k≥2。非标准化多元回归方程如下："
          ],
          [
            "Ŷ = b₁X₁ + b₂X₂ + … + bₖXₖ + a",
            "Ŷ=b₁X₁+b₂X₂+……+bₖXₖ+a。"
          ],
          [
            "b = Regression coefficient for each predictor variable",
            "b是各预测变量的回归系数。"
          ],
          [
            "a = Regression constant",
            "a是回归常数（截距）。"
          ]
        ],
        "walk": [
          "Read the equation as an intercept plus a contribution from every included predictor. The hat in Ŷ indicates the predicted criterion score; the observed outcome is normally written Y. Added calculation: Ŷ=40+3X₁+2X₂ with X₁=4 and X₂=5 gives 40+12+10=62. This illustrative equation is not a fitted result supplied for the teaching-method study. The unstandardized coefficients retain the original units.",
          "把方程读成“截距＋每个预测变量的对应部分”。Ŷ上的帽子表示预测效标评分，实际结果通常记为Y。补充演算：Ŷ=40+3X₁+2X₂，X₁=4、X₂=5时，结果40+12+10=62。这个演示方程不是课件教学方法研究实际拟合出的结果。非标准化系数保留原始测量单位。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-12",
        "image": "assets/week5/page-12.jpg",
        "clear": "assets/week5/clear-12.svg",
        "showOriginal": true
      },
      {
        "page": 13,
        "en": "The five-predictor regression equation",
        "zh": "五个预测变量的回归方程",
        "pairs": [
          [
            "By using the multiple regression analysis, the lecturer can identify which teaching method (predictor variable) contributes the most to teaching effectiveness (the criterion variable) among the tutors.",
            "通过多元回归，教师希望识别导师中哪种教学方法（预测变量）对教学效果（效标变量）的贡献最大。"
          ],
          [
            "In this case, there re five predictor variables for one criterion variable; thus, the calculation for regression can be done using the regression equation below:",
            "此例中一个效标变量对应五个预测变量，因此可以使用下列方程进行回归计算（原文有拼写笔误）。"
          ],
          [
            "Ŷ = b₁X₁ + b₂X₂ + b₃X₃ + b₄X₄ + b₅X₅ + a",
            "Ŷ=b₁X₁+b₂X₂+b₃X₃+b₄X₄+b₅X₅+a。"
          ]
        ],
        "walk": [
          "Count the components: five predictor values, five slopes, and one intercept predict one criterion score. Multiply each X by its own b, add the five products, then add a. No numerical values for these six coefficients are provided on this page, so it does not permit a numerical teaching-effectiveness prediction. The largest raw b is not automatically the most important predictor because predictors can use different units.",
          "数清组成：五个预测数值、五个斜率、一个截距，共同预测一个效标评分。先分别计算每个b×X，再将五项相加，最后加a。本页没有提供六个系数的具体值，因此不能算出某位导师的教学效果预测。预测变量单位可能不同，最大的原始b不自动等于最重要的预测因素。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-13",
        "image": "assets/week5/page-13.jpg",
        "clear": "assets/week5/clear-13.svg",
        "showOriginal": true
      },
      {
        "page": 14,
        "en": "Interpreting a coefficient while holding others fixed",
        "zh": "在其他变量不变时解释回归系数",
        "pairs": [
          [
            "In the equation above, Ŷ is the predicted criterion variable value for the X₁, X₂, X₃, X₄ and X₅ predictor variable values.",
            "在上述方程中，Ŷ是给定X₁、X₂、X₃、X₄、X₅这些预测变量数值时的预测效标值。"
          ],
          [
            "The symbols b₁, b₂, b₃, b₄ and b₅ are the regression coefficients for each predictor, whereas a is the regression constant.",
            "b₁、b₂、b₃、b₄、b₅是各预测变量的回归系数，a是回归常数。"
          ],
          [
            "In multiple regression analysis, for each unit of change in the predictor variable value, the Ŷ value of the criterion variable will change by b unit when the other fixed predictor variables do not change.",
            "在多元回归中，当其他预测变量保持不变时，某预测变量每改变一个单位，预测效标值Ŷ就改变该变量系数b所对应的单位数。"
          ],
          [
            "By using teaching effectiveness as the criterion variable and the five teaching techniques as the predictor variables, the multiple regression test can determine and describe the extent the five teaching techniques contribute to the teaching effectiveness of this group of tutors.",
            "以教学效果为效标、五种教学技术为预测变量，多元回归可描述这些预测评分与本组导师教学效果之间的模型关系及贡献。"
          ]
        ],
        "walk": [
          "Holding other predictors fixed means comparing cases with the same values on those included predictors. In the added equation Ŷ=40+3X₁+2X₂, raising X₁ by 2 while X₂ stays fixed raises Ŷ by 3×2=6 units. Do not also change X₂ and call the whole change the effect of X₁. “Holding fixed” is a model-based comparison, not proof that all unmeasured factors are controlled or that the relationship is causal.",
          "“其他预测变量不变”指比较这些已纳入变量取值相同的个案。用补充方程Ŷ=40+3X₁+2X₂，若X₁增加2而X₂保持不变，则Ŷ增加3×2=6单位。不能同时改变X₂后，把总变化都称为X₁的作用。模型中的“保持不变”并不证明所有未测因素都已被控制，也不自动建立因果。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-14",
        "image": "assets/week5/page-14.jpg",
        "clear": "assets/week5/clear-14.svg",
        "showOriginal": true
      },
      {
        "page": 15,
        "en": "Standardized regression coefficients",
        "zh": "标准化回归系数",
        "pairs": [
          [
            "To make it easier to compare and explain the multiple regression equation (or multiple regression model), the raw scores above are converted into standardised scores, shown below.",
            "为便于比较和解释多元回归方程或模型，把上述原始分数转换成标准分数，如下所示。"
          ],
          [
            "ZŶ = β₁z₁ + β₂z₂ + β₃z₃ + β₄z₄ + β₅z₅",
            "预测效标的标准分数ZŶ=β₁z₁+β₂z₂+β₃z₃+β₄z₄+β₅z₅。"
          ],
          [
            "In the standardised score multiple regression equation, ZŶ represents the standardised score for the criterion variable, which is the teaching effectiveness variable.",
            "在标准分数多元回归方程中，ZŶ表示效标变量（教学效果）的标准化预测分数。"
          ],
          [
            "The five beta coefficients β₁, β₂, β₃, β₄ and β₅ represent the standardised regression coefficients for the z₁, z₂, z₃, z₄ and z₅ predictor variables.",
            "β₁、β₂、β₃、β₄、β₅分别是标准化预测变量z₁至z₅的标准化回归系数。"
          ],
          [
            "By standardising the equation, comparison of the contributions of the predictor variables to the criterion variable becomes valid and meaningful.",
            "课件指出：标准化方程后，预测变量对效标变量的贡献就能进行有意义的比较（仍需结合下述限制）。"
          ]
        ],
        "walk": [
          "A standardized coefficient uses standard-deviation units. Added example: β₁=.40 means a one-SD increase in X₁ is associated with a .40-SD increase in predicted Y, with the other predictors fixed. Two SD predicts .80 SD. Standardizing removes measurement-unit differences and, for a centered fitted model, the standardized intercept is zero. Accuracy note: standardized β values still depend on predictor correlations, reliability, sample variation and model specification; the largest absolute β is not automatically the most important cause. They need uncertainty and collinearity checks.",
          "标准化系数使用标准差单位。补充例子：β₁=0.40表示其他预测变量不变时，X₁增加1个标准差，预测Y增加0.40个标准差；增加2个标准差则对应0.80个标准差。标准化去除测量单位差异；对中心化的拟合模型，标准化截距为0。准确性说明：β仍受预测变量相关、测量可靠性、样本变异与模型设定影响；绝对β最大不自动意味着最重要的原因，还要检查不确定性与共线性。"
        ],
        "topic": "multiple-regression",
        "week": 5,
        "id": "slide-15",
        "image": "assets/week5/page-15.jpg",
        "clear": "assets/week5/clear-15.svg"
      },
      {
        "page": 16,
        "en": "Backward selection",
        "zh": "向后剔除法",
        "pairs": [
          [
            "Multiple Regression Procedures",
            "多元回归的变量进入程序。"
          ],
          [
            "1. The Backward Solution Procedure",
            "1. 向后剔除程序。"
          ],
          [
            "This procedure is also known as the full multiple regression model because every predictor variable is initially entered into the regression model. The variables which do not contribute significantly to the regression model will only be removed later.",
            "这一程序从完整多元回归模型开始：最初把所有候选预测变量都放入模型，之后再移除未达到设定显著贡献准则的变量。"
          ]
        ],
        "walk": [
          "Remember the direction: start full, then remove. With five candidates, the starting fit contains all five. After an eligible predictor is removed, refit the remaining model and reassess the removal criterion. The exact stopping and significance thresholds must be specified by the analysis; this slide supplies no fixed threshold. A variable removed by an automated rule is not proved unimportant in every substantive sense.",
          "记住方向：先全放，再往外删。五个候选变量时，初始模型包含全部五个。移除符合删除条件的变量后，重新拟合剩余模型，再检查准则。具体停止规则和显著性门槛应由分析设定，本页没有指定固定门槛。按自动规则被删除，不等于该变量在所有实际意义上都不重要。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-16",
        "image": "assets/week5/page-16.jpg",
        "clear": "assets/week5/clear-16.svg"
      },
      {
        "page": 17,
        "en": "Forward selection",
        "zh": "向前选择法",
        "pairs": [
          [
            "2. The Forward Solution Procedure",
            "2. 向前选择程序。"
          ],
          [
            "In this procedure, the predictor variable is entered into the regression model according to its contribution to the regression.",
            "在此程序中，预测变量按其对回归模型的贡献依次进入。"
          ],
          [
            "The first variable selected to be entered into the model has the highest correlation with the criterion variable.",
            "首先选择与效标变量相关最高的预测变量进入模型（课件的入门描述）。"
          ],
          [
            "The second variable selected contributes most to the change in the criterion variable after the first variable has been removed. [Original wording]",
            "第二个变量在第一个变量被移除后，对效标变化贡献最多。（原文措辞，见准确性说明。）"
          ],
          [
            "The selection of predictor variables which contribute to the regression is conducted next using this procedure until there are no more predictor variables which contribute to significant change in the criterion variable.",
            "继续按此程序选择有贡献的预测变量，直到没有新的变量达到所设定的显著贡献准则。"
          ]
        ],
        "walk": [
          "Remember: start small, add predictors. Important correction to the original “first variable has been removed” wording: in ordinary forward selection the first selected predictor stays in the model; the next candidate is judged for additional contribution conditional on the predictors already included. With comparable cases in simple one-predictor fits, initial selection often corresponds to the strongest absolute outcome correlation, not merely the largest positive correlation. The analysis must specify entry/stopping rules.",
          "记忆：从小模型开始，往里加变量。原文“第一个变量被移除”需要纠正：通常的向前选择会保留已纳入的第一个变量，再评估新变量在已有变量基础上的额外贡献。在使用相同个案的一元候选比较中，初选往往对应与结果绝对相关最强的变量，而不只是数值最大的正相关。分析需要明确进入与停止准则。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-17",
        "image": "assets/week5/page-17.jpg",
        "clear": "assets/week5/clear-17.svg"
      },
      {
        "page": 18,
        "en": "Stepwise selection",
        "zh": "逐步选择法",
        "pairs": [
          [
            "3. The stepwise Solution Procedure",
            "3. 逐步选择程序。"
          ],
          [
            "This procedure is a variation of the forward solution procedure.",
            "此程序是向前选择法的一种变式。"
          ],
          [
            "The procedure for selecting predictor variables is similar to the forward solution procedure except that after each predictor variable is selected, a second significance test is conducted to determine the contribution of each predictor variable before it (the predictor variable which has been placed in the regression model) with the assumption that it is the final variable selected.",
            "预测变量选择过程与向前选择相似，但每纳入一个变量后，还会再次检验此前已纳入变量的贡献，按它仿佛最后一个进入模型的变量来重新评估是否保留。"
          ]
        ],
        "walk": [
          "Stepwise means add and recheck. After adding a new predictor, an older predictor may no longer meet the retention criterion because their information overlaps. It may then be removed according to the specified rule. This rechecking is the key distinction from pure forward selection. Automated selection can be unstable and can make ordinary post-selection p-values appear too optimistic; model choice should also use substantive reasoning and validation.",
          "逐步法就是“加入后回头检查”。新变量加入后，旧变量可能因信息重叠而不再符合保留准则，随后按规则移除。这种回查是与纯向前选择的重要区别。自动筛选可能不稳定，筛选后直接按普通方式解释p值也可能过于乐观；选模还要结合学科理由与验证。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-18",
        "image": "assets/week5/page-18.jpg",
        "clear": "assets/week5/clear-18.svg"
      },
      {
        "page": 19,
        "en": "Enter: simultaneous inclusion",
        "zh": "Enter法：同时纳入变量",
        "pairs": [
          [
            "4. The enter procedure",
            "4. Enter程序。"
          ],
          [
            "This procedure enters all predictors together in the regression model and analyses the contribution of the predictors as a whole on the criterion variable.",
            "此程序把所有事先选定的预测变量同时放入模型，分析这些变量整体与效标变量的关系。"
          ],
          [
            "It presents the individual effect of each predictor on the criterion variable although it does not demonstrate the variance of each predictor on the criterion variable.",
            "它也给出每个预测变量与效标的单独调整后关系，但不会自动把结果变异分配为每个预测变量各占一份（对原文的含义说明）。"
          ]
        ],
        "walk": [
          "Enter keeps the prespecified set together rather than adding or deleting variables by an automatic screening sequence. Each fitted coefficient still describes its predictor conditional on the others in that model. Overlapping predictor information means their contributions cannot usually be split into simple percentages by reading B or β. For a fair comparison, keep the analysis sample and model specification clear.",
          "Enter法把事先选定的一组变量一起纳入，不按自动筛选顺序逐项加减。每个拟合系数仍表示在模型中其他变量已纳入后的条件关系。预测信息有重叠，所以不能直接把B或β读成各变量解释变异的百分比。比较时应写清分析样本和模型设定。"
        ],
        "topic": null,
        "week": 5,
        "id": "slide-19",
        "image": "assets/week5/page-19.jpg",
        "clear": "assets/week5/clear-19.svg"
      },
      {
        "page": 20,
        "en": "Claims about stepwise selection: reading critically",
        "zh": "理解课件对逐步法的评价",
        "pairs": [
          [
            "According to Diekhoff (1992), the stepwise procedure has an advantage over the other procedures because it is more economical, and only the significant predictor variable is entered into the regression.",
            "课件引述Diekhoff（1992）：逐步法比其他程序更精简，只将满足显著性准则的预测变量纳入回归。"
          ],
          [
            "Another advantage is that multi-collinearity problems, which exist as a result of strong correlations between variables, can be prevented in this procedure. [Original claim]",
            "另一个优点是可防止变量强相关造成的多重共线性问题。（原文主张。）"
          ],
          [
            "Such correlations are meaningless and result in inaccurate analysis (Diekhoff, 1992, p. 275). [Original claim]",
            "这种相关没有意义并导致不准确分析（Diekhoff，1992，第275页）。（原文主张。）"
          ],
          [
            "Such problems can be avoided through stepwise multiple regression as problematic variables will not be included in the regression. [Original claim]",
            "逐步多元回归不纳入问题变量，因此可以避免这些问题。（原文主张。）"
          ]
        ],
        "walk": [
          "Read this as the slide's reported argument for automated parsimony, not as an unconditional guarantee. Accuracy clarification: stepwise selection does not guarantee removal of multicollinearity, a stable predictor set, valid causal conclusions, or superior out-of-sample prediction. Correlations between predictors may have meaningful substantive explanations; they are not inherently meaningless. Inspect collinearity and model assumptions, report the selection procedure, and evaluate prediction on suitable new data or by validation. The source quotation is retained separately from this added caution.",
          "把本页理解为课件对自动精简模型的论述，而不是无条件保证。准确性澄清：逐步法不能保证消除共线性、稳定选出相同变量、建立有效因果结论或取得更好的样本外预测。预测变量之间的相关可能有重要学科含义，并非天生没有意义。应检查共线性与模型假设，报告选择方法，并用合适的新数据或验证评估预测。原课件主张与这段补充提醒分别保留。"
        ],
        "topic": "selection",
        "week": 5,
        "id": "slide-20",
        "image": "assets/week5/page-20.jpg",
        "clear": "assets/week5/clear-20.svg"
      }
    ]
  },
  "6": {
    "week": 6,
    "sourcePages": 17,
    "excluded": [
      {
        "page": 1,
        "reason": "Cover only"
      },
      {
        "page": 16,
        "reason": "Summary divider only"
      },
      {
        "page": 17,
        "reason": "Thanks page"
      }
    ],
    "slides": [
      {
        "page": 2,
        "en": "Learning objectives: ANOVA",
        "zh": "ANOVA学习目标",
        "pairs": [
          [
            "Functions of ANOVA test",
            "ANOVA检验的功能。"
          ],
          [
            "Requirements of ANOVA test",
            "ANOVA检验的条件。"
          ],
          [
            "One Way ANOVA",
            "单因素ANOVA。"
          ],
          [
            "Two-way ANOVA test",
            "双因素ANOVA检验。"
          ]
        ],
        "walk": [
          "Week 6 moves from comparing two means to comparing several group means and considering two factors together. Follow the lecturer’s sequence: function, one-way assumptions, two-way design and its example.",
          "第六周从比较两个均值扩展到多个组，并考虑两个因素。按老师顺序学习功能、单因素前提、双因素设计及示例。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-02",
        "image": "assets/week6/page-02.jpg",
        "clear": "assets/week6/clear-02.svg"
      },
      {
        "page": 3,
        "en": "ANOVA: purpose",
        "zh": "ANOVA的用途",
        "pairs": [
          [
            "The ANOVA test (analysis of variances test) is widely used in behavioral sciences studies.",
            "ANOVA（方差分析检验）广泛用于行为科学研究。"
          ],
          [
            "It is used to differentiate the mean scores of the research samples.",
            "它用于比较研究样本的均值差异。"
          ],
          [
            "Unlike the t-test which allows the comparison between only two mean scores, the ANOVA test can be used to compare two, three, five or n mean scores.",
            "t检验比较两个均值，而ANOVA可以比较两个、三个、五个或n个均值。"
          ]
        ],
        "walk": [
          "One-way ANOVA asks whether population group means are all equal. A significant overall result means at least one mean differs; it does not identify the pair or prove every pair differs. With two independent groups, the ordinary equal-variance ANOVA and two-sided pooled t-test are equivalent (F=t²). This last relation is added context, not a new requirement from the slide.",
          "单因素ANOVA检验各组总体均值是否全相等。整体显著意味着至少一个均值不同，但不告诉具体哪对，也不表示每对都不同。对于两个独立组，普通等方差ANOVA与双侧合并方差t检验等价（F=t²）。最后这点是补充背景，不是课件新增要求。"
        ],
        "topic": "anova",
        "week": 6,
        "id": "slide-03",
        "image": "assets/week6/page-03.jpg",
        "clear": "assets/week6/clear-03.svg"
      },
      {
        "page": 4,
        "en": "One-way assumption: quantitative outcome",
        "zh": "单因素前提：定量结果",
        "pairs": [
          [
            "Dependent variable should be measured at the interval or ratio level (i.e., they are continuous).",
            "因变量应按等距或比率尺度测量，通常作为连续结果。"
          ],
          [
            "Examples: revision time (hours), intelligence (IQ score), exam performance (0 to 100), weight (kg).",
            "例如复习时长（小时）、智力分数（IQ）、考试表现（0–100）、体重（千克）。"
          ]
        ],
        "walk": [
          "The outcome is the number whose mean you want to compare. For three teaching methods, exam score is the DV. The slide uses “continuous” loosely: a mark recorded as a whole number can still be treated as a quantitative outcome when justified; interval/ratio and continuous/discrete are distinct classifications.",
          "因变量是你想比较均值的那个数。例如比较三种教学法，考试分数是因变量。原文对“连续”用法较宽：整数成绩在合理条件下仍可作为定量结果处理；等距/比率与连续/离散是不同分类维度。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-04",
        "image": "assets/week6/page-04.jpg",
        "clear": "assets/week6/clear-04.svg"
      },
      {
        "page": 5,
        "en": "One-way assumption: independent groups",
        "zh": "单因素前提：独立类别组",
        "pairs": [
          [
            "The independent variable should consist of two or more categorical, independent groups.",
            "自变量应包含两个或更多相互独立的类别组。"
          ],
          [
            "Typically, a one-way ANOVA is used with three or more categorical independent groups, but it can be used for just two groups; an independent-samples t-test is more commonly used for two.",
            "通常单因素ANOVA用于三个以上独立组，也能用于两个组；两个组更常用独立样本t检验。"
          ],
          [
            "Examples: ethnicity (Caucasian, African American, Hispanic); physical activity (sedentary, low, moderate, high); profession (surgeon, doctor, nurse, dentist, therapist).",
            "例子：族裔三组；活动水平四组（久坐、低、中、高）；职业五组（外科医生、医生、护士、牙医、治疗师）。"
          ]
        ],
        "walk": [
          "One factor means one grouping variable, not one group. Teaching method with A/B/C is one factor with three levels. The factor is categorical even if groups are coded 1,2,3. Participants must belong to appropriate independent groups for this between-subjects model.",
          "单因素表示一个分组变量，不是只有一组。教学法A/B/C是一个因素、三个水平。即使编码为1/2/3，该因素仍为分类变量。这里的组间模型要求对象属于恰当的独立组。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-05",
        "image": "assets/week6/page-05.jpg",
        "clear": "assets/week6/clear-05.svg"
      },
      {
        "page": 6,
        "en": "One-way assumption: observations are independent",
        "zh": "单因素前提：观察独立",
        "pairs": [
          [
            "There should be independence of observations: no relationship between observations within each group or between groups.",
            "组内与组间观察应具有独立性。"
          ],
          [
            "There must be different participants in each group, with no participant being in more than one group.",
            "各组使用不同参与者，同一人不能出现在多个组中。"
          ],
          [
            "This is more of a study-design issue than something you can test for, but it is an important one-way ANOVA assumption.",
            "这是研究设计问题，不是仅靠一个检验就能确认的条件，却是重要前提。"
          ]
        ],
        "walk": [
          "Different people in each group is necessary here but may not be sufficient: pupils from one class can still be clustered. Repeated scores from the same person are related and need a model appropriate to repeated measurements. Establish independence from the sampling and design.",
          "这里各组使用不同对象是必要条件，但未必充分：同一班级的学生仍可能聚类相关。同一人多次测量彼此相关，需要适合重复测量的模型。要从抽样和设计判断独立性。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-06",
        "image": "assets/week6/page-06.jpg",
        "clear": "assets/week6/clear-06.svg"
      },
      {
        "page": 7,
        "en": "One-way assumptions: outliers and normality",
        "zh": "单因素前提：异常值与正态性",
        "pairs": [
          [
            "There should be no significant outliers.",
            "不应存在严重异常值。"
          ],
          [
            "The dependent variable should be approximately normally distributed for each category of the independent variable.",
            "因变量在自变量的每个类别内应近似正态。"
          ],
          [
            "One-way ANOVA is quite robust to small violations of normality and can still provide valid results.",
            "ANOVA对轻度非正态具有一定稳健性。"
          ],
          [
            "Normality can be tested with the Shapiro–Wilk test in SPSS Statistics.",
            "可在SPSS中使用Shapiro–Wilk检验检查正态性。"
          ]
        ],
        "walk": [
          "Check distributions within groups, not just all scores pooled together. Two normal groups with different means may form a non-normal pooled distribution. Use plots, sample sizes and outlier checks with Shapiro–Wilk; a nonsignificant test does not prove exact normality. Investigate outliers rather than automatically deleting them.",
          "看各组内部，而不是只看混合后的分数。两个均值不同的正态组混合后未必正态。结合图形、样本量、异常值检查和Shapiro–Wilk结果；不显著不等于证明完全正态。异常值应调查原因，不应自动删除。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-07",
        "image": "assets/week6/page-07.jpg",
        "clear": "assets/week6/clear-07.svg"
      },
      {
        "page": 8,
        "en": "One-way assumption: equal variances",
        "zh": "单因素前提：方差齐性",
        "pairs": [
          [
            "There needs to be homogeneity of variances.",
            "需要方差齐性。"
          ],
          [
            "In SPSS Statistics, test this using Levene’s test for homogeneity of variances.",
            "SPSS中可使用Levene方差齐性检验。"
          ]
        ],
        "walk": [
          "Equal variances means comparable within-group spread, not equal means. Levene’s test addresses variances, while ANOVA addresses means. A large Levene p-value is insufficient evidence against equal variances, not proof they are identical. Interpret diagnostics in context before choosing the analysis.",
          "方差齐性是各组内部离散程度相近，不是均值相等。Levene检验方差，ANOVA检验均值。Levene的p值较大表示反对等方差的证据不足，不是证明方差完全一致。结合诊断与背景选择分析。"
        ],
        "topic": "anova-assumptions",
        "week": 6,
        "id": "slide-08",
        "image": "assets/week6/page-08.jpg",
        "clear": "assets/week6/clear-08.svg"
      },
      {
        "page": 9,
        "en": "Two-way ANOVA and interaction",
        "zh": "双因素ANOVA与交互作用",
        "pairs": [
          [
            "The primary purpose of a two-way ANOVA is to understand whether there is an interaction between two independent variables on the dependent variable.",
            "双因素ANOVA的重要目的是判断两个自变量对因变量是否存在交互作用。"
          ],
          [
            "Example: interaction between gender and educational level on test anxiety amongst university students.",
            "例：研究大学生性别与教育层次对考试焦虑的交互作用。"
          ],
          [
            "Gender (males/females) and education level (undergraduate/postgraduate) are the independent variables; test anxiety is the dependent variable.",
            "性别（男/女）与教育层次（本科/研究生）是自变量，考试焦虑是因变量。"
          ]
        ],
        "walk": [
          "Two factors create combinations: male-undergraduate, male-postgraduate, female-undergraduate, female-postgraduate. Interaction asks whether one factor’s association with the outcome differs across levels of the other. Two significant main effects do not automatically imply interaction. In observational data, these associations alone do not establish causation.",
          "两个因素形成四种组合：男本科、男研究生、女本科、女研究生。交互作用问一个因素与结果的关系是否随另一因素水平而变化。两个主效应都显著不自动意味着交互显著。观察性数据中的关联也不自动证明因果。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-09",
        "image": "assets/week6/page-09.jpg",
        "clear": "assets/week6/clear-09.svg"
      },
      {
        "page": 10,
        "en": "Two-way assumption: outcome scale",
        "zh": "双因素前提：结果尺度",
        "pairs": [
          [
            "The dependent variable should be measured at the continuous level (interval or ratio).",
            "因变量应作为连续定量结果，采用等距或比率尺度。"
          ],
          [
            "Examples: revision time in hours, IQ score, exam performance from 0 to 100, weight in kg.",
            "例如以小时计的复习时长、IQ分数、0–100分考试成绩和千克体重。"
          ]
        ],
        "walk": [
          "There are two factors but still one quantitative outcome in the standard two-way model described here. Do not mistake two-way ANOVA for an analysis requiring two dependent variables. Read the anxiety score as the outcome and both categories as predictors.",
          "这里的标准双因素模型有两个因素，但仍只有一个定量因变量。双因素并不表示需要两个因变量。焦虑分数是结果，两种分类因素是解释变量。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-10",
        "image": "assets/week6/page-10.jpg",
        "clear": "assets/week6/clear-10.svg"
      },
      {
        "page": 11,
        "en": "Two-way assumption: two categorical factors",
        "zh": "双因素前提：两个分类因素",
        "pairs": [
          [
            "Two independent variables should each consist of two or more categorical, independent groups.",
            "两个自变量各应包含两个以上的类别水平和独立组。"
          ],
          [
            "Examples: gender (male/female), ethnicity (Caucasian/African American/Hispanic), profession (surgeon/doctor/nurse/dentist/therapist).",
            "例如性别两类、族裔三类、职业五类（外科医生、医生、护士、牙医、治疗师）。"
          ]
        ],
        "walk": [
          "A 2×3 design has two factors with 2 and 3 levels, making 6 combinations or cells. It does not have six factors. Each factor’s levels must be defined clearly; a person in a between-subjects design belongs to one combination.",
          "2×3设计表示两个因素分别有2和3个水平，共6个组合单元，不是6个因素。要清楚定义水平；组间设计中一个对象属于一个组合。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-11",
        "image": "assets/week6/page-11.jpg",
        "clear": "assets/week6/clear-11.svg"
      },
      {
        "page": 12,
        "en": "Two-way assumption: independent observations",
        "zh": "双因素前提：观察独立",
        "pairs": [
          [
            "There should be independence of observations within and between groups.",
            "各组内及组间观察应独立。"
          ],
          [
            "There must be different participants in each group and no participant in more than one group.",
            "各组使用不同参与者，每人不应同时属于多个组。"
          ]
        ],
        "walk": [
          "Here a group means a factor-level combination, such as male-undergraduate. Repeatedly observing the same student across combinations would violate the independence structure of this ordinary between-subjects model. Independently sampled cases support valid standard errors.",
          "这里的组指因素水平组合，如男本科。同一学生在多个组合中重复出现，会违背普通组间模型的独立结构。独立抽取的对象有助于获得有效标准误。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-12",
        "image": "assets/week6/page-12.jpg",
        "clear": "assets/week6/clear-12.svg"
      },
      {
        "page": 13,
        "en": "Two-way assumptions within each cell",
        "zh": "双因素前提：各组合单元",
        "pairs": [
          [
            "There should be no significant outliers.",
            "不应有严重异常值。"
          ],
          [
            "The dependent variable should be approximately normally distributed for each combination of groups of the two independent variables.",
            "因变量在两个因素的每个水平组合内应近似正态。"
          ],
          [
            "There needs to be homogeneity of variances for each combination of groups of the two independent variables.",
            "各水平组合之间需满足方差齐性。"
          ]
        ],
        "walk": [
          "For a gender×education 2×2 design, inspect four cells. Normality concerns the outcome within cells, and equal variances concerns comparability across cells. Checking only the two gender groups can miss structure caused by education level.",
          "性别×教育层次2×2设计要检查四个组合。正态性针对各组合内部结果，方差齐性针对组合之间的离散程度。只检查两个性别组，可能遗漏教育层次造成的结构。"
        ],
        "topic": null,
        "week": 6,
        "id": "slide-13",
        "image": "assets/week6/page-13.jpg",
        "clear": "assets/week6/clear-13.svg"
      },
      {
        "page": 14,
        "en": "Example: three null hypotheses",
        "zh": "例：三个零假设",
        "pairs": [
          [
            "H₀: Gender will have no significant effect on students’ score.",
            "H₀：性别对学生成绩没有显著影响（原文措辞）。"
          ],
          [
            "H₀: Age will have no significant effect on students’ score.",
            "H₀：年龄对学生成绩没有显著影响（原文措辞）。"
          ],
          [
            "H₀: Gender and Age interaction will have no significant effect on students’ score.",
            "H₀：性别与年龄交互对成绩没有显著影响（原文措辞）。"
          ]
        ],
        "walk": [
          "The example switches from education level to age. The first two are main-effect nulls, and the third is an interaction null. More precisely, hypotheses concern population effects being zero, rather than “significance” before testing. Two-way ANOVA treats age as categories here; continuous age would require a suitable different specification. The slide provides no cell means, F values or p-values.",
          "例子由教育层次改为年龄。前两个是主效应零假设，第三个是交互零假设。更准确地说，假设针对总体效应为零，而不是事先针对“显著性”。这里年龄应按类别处理；连续年龄需要合适的其他模型设定。原页没有给出组均值、F或p值。"
        ],
        "topic": null,
        "visual": {
          "headers": [
            "Term",
            "Null hypothesis"
          ],
          "rows": [
            [
              "Gender",
              "No gender main effect"
            ],
            [
              "Age",
              "No age-group main effect"
            ],
            [
              "Gender × Age",
              "No interaction"
            ]
          ]
        },
        "week": 6,
        "id": "slide-14",
        "image": "assets/week6/page-14.jpg",
        "clear": "assets/week6/clear-14.svg"
      },
      {
        "page": 15,
        "en": "Example: decisions on main effects and interaction",
        "zh": "例：主效应与交互的决策",
        "pairs": [
          [
            "REJECT H₀: Gender will have no significant effect on students’ score. H₁: Gender does have a significant effect.",
            "拒绝性别主效应零假设；支持性别存在效应的备择说法。"
          ],
          [
            "REJECT H₀: Age will have no significant effect on students’ score. H₁: Age has a significant effect.",
            "拒绝年龄主效应零假设；支持年龄存在效应的备择说法。"
          ],
          [
            "FAIL TO REJECT H₀: Gender and Age interaction will have no significant effect on students’ score.",
            "不拒绝性别与年龄无交互作用的零假设。"
          ]
        ],
        "walk": [
          "The supplied example reports evidence of both main effects but insufficient evidence of interaction. Do not say the interaction is proved absent. Without group means, you cannot say which gender or age group scores higher; without reported statistics, do not invent F, degrees of freedom or p-values. This finishes the two-way topic; practise the additional cases below.",
          "原例报告两个主效应有证据，交互证据不足。不能说已证明不存在交互。没有组均值就不能判断哪个性别或年龄组更高；没有统计量就不能虚构F、自由度或p值。双因素部分到此结束，下方用额外情境练习。"
        ],
        "topic": "two-way-anova",
        "visual": {
          "headers": [
            "Term",
            "Decision"
          ],
          "rows": [
            [
              "Gender main effect",
              "Reject H₀"
            ],
            [
              "Age main effect",
              "Reject H₀"
            ],
            [
              "Gender × Age",
              "Fail to reject H₀"
            ]
          ]
        },
        "week": 6,
        "id": "slide-15",
        "image": "assets/week6/page-15.jpg",
        "clear": "assets/week6/clear-15.svg"
      }
    ]
  }
}};
