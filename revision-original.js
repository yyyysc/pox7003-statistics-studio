// Transcribed from the ten exercise pages in the teacher's Revision handout.
// The handout contains questions only. The keys and explanations below are worked solutions.
const revisionOriginal = [
  {
    id: "r1", week: 1, ref: "Revision Q1 · p. 2",
    prompt: "A ______ is a graphical representation of a frequency distribution in which vertical bars are centered above each category along the x-axis and are separated from each other by a space indicating that the levels of the variable represent distinct, unrelated categories.",
    options: ["histogram", "frequency polygon", "bar graph", "class interval histogram"], correct: [2],
    answer: "C. Bar graph.",
    zh: "先看横轴。每一栏是一个独立类别，柱高给出该类别的频数，类别之间留空，因此选 C。A、D 中的直方图用相邻数值区间分组，B 用线段连接表示频数的点。",
    en: "Read the horizontal axis first. Each separated bar counts observations in one distinct category. Both histogram options group numerical values into intervals. A frequency polygon joins points with line segments."
  },
  {
    id: "r2", week: 1, ref: "Revision Q2 · p. 3",
    prompt: "Mean is to ______ as mode is to ______.",
    options: ["ordinal, interval, and ratio data only; nominal data only", "nominal data only; ordinal data only", "interval and ratio data only; all types of data", "none of the above"], correct: [2],
    answer: "C. The mean is appropriate for interval and ratio data. The mode can be used with all four measurement scales.",
    zh: "均值需要数值之间的间距有意义，例如等距或等比数据。名次只给出先后，每差一名代表的实际差距可能不同。众数只看出现次数，名义、顺序、等距、等比数据都可以查找众数。",
    en: "An arithmetic mean uses the distances between numerical values. Interval and ratio scales provide meaningful distances. To find a mode, count the occurrences of each value or category. This works at every measurement level."
  },
  {
    id: "r3", week: 2, ref: "Revision Q3 · p. 4",
    prompt: "Imagine that distribution A contains the following scores: 11, 13, 15, 18, 20. Imagine that distribution B contains the following scores: 13, 14, 15, 16, 17. Distribution A has a ______ standard deviation and a ______ average deviation in comparison to distribution B.",
    options: ["larger; larger", "smaller; smaller", "larger; smaller", "smaller; larger"], correct: [0],
    answer: "A. Distribution A has the larger standard deviation and the larger average absolute deviation from the mean.",
    zh: "A、B 的均值分别是 15.4、15。取各分数到本组均值的距离，A 的五个距离是 4.4、2.4、0.4、2.6、4.6，平均 2.88；B 的是 2、1、0、1、2，平均 1.20。样本标准差也以 A 较大，约为 3.65 对 1.58。原题的 average deviation 按绝对离差的平均理解；若保留正负号，每组离差的和都为零。",
    en: "The means are 15.4 and 15. The five absolute distances from the mean total 14.4 in A and 6 in B. Dividing by five gives 2.88 and 1.20. The sample standard deviations are approximately 3.65 and 1.58, respectively. Using population standard deviations gives the same ordering. Here, average deviation means the average absolute distance from the mean."
  },
  {
    id: "r4", week: 4, ref: "Revision Q4 · p. 5",
    prompt: "The magnitude of a correlation coefficient is to ______ as the type of correlation is to ______.",
    options: ["slope; absolute value", "sign; absolute value", "absolute value; sign", "none of the above"], correct: [2],
    answer: "C. Absolute value gives magnitude. The sign gives direction.",
    zh: "看强度时比较 |r|，看方向时读正负号。例如 r = −0.80 和 +0.80 的绝对值相同，前者表示负相关，后者表示正相关。斜率描述 X 每增加一个单位时预测的 Y 改变多少。",
    en: "For example, −0.80 and +0.80 both have magnitude 0.80. The negative sign indicates a downward tendency and the positive sign an upward tendency. A regression slope expresses a predicted change per unit of the predictor."
  },
  {
    id: "r5", week: 4, ref: "Revision Q5 · p. 6",
    prompt: "The ______ is the correlation coefficient that should be used when both variables are measured on an ordinal scale.",
    options: ["Spearman rank-order correlation coefficient", "coefficient of determination", "point-biserial correlation coefficient", "Pearson product-moment correlation coefficient"], correct: [0],
    answer: "A. Spearman rank-order correlation coefficient.",
    zh: "两列数据都只保证有先后顺序，因此比较成对的排名，用 Spearman。决定系数描述线性模型解释的变异比例；点二列相关用于一个二分变量和一个定量变量；Pearson 通常用于两个等距或等比定量变量的线性关系。",
    en: "Spearman uses paired ranks. The coefficient of determination summarises explained variation. Point-biserial correlation pairs a two-category variable with a quantitative variable. Pearson measures the linear relationship between two quantitative variables measured on interval or ratio scales."
  },
  {
    id: "r6", week: 4, ref: "Revision Q6 · p. 7",
    prompt: "If the points on a scatterplot are clustered in a pattern that extends from the upper left to the lower right, this would suggest that the two variables depicted are:",
    options: ["normally distributed.", "positively correlated.", "regressing toward the average.", "negatively correlated."], correct: [3],
    answer: "D. The two variables are negatively correlated.",
    zh: "从左往右读图，X 增大，点的位置整体降低，说明较大的 X 往往对应较小的 Y，所以是负相关。题干描述的是两变量共同变化的方向，无法仅凭这句话判断各变量是否正态或是否回归均值。",
    en: "Follow the points from left to right. Larger X values tend to occur with smaller Y values, giving a negative direction. An upward trend would indicate positive correlation. The described pattern gives no evidence about normality or regression toward the average."
  },
  {
    id: "r7", week: 5, ref: "Revision Q7 · p. 8",
    prompt: "Regression analysis allows us to:",
    options: [
      "predict an individual’s score on one variable based on knowing the individual’s score on another variable.",
      "determine the degree of relationship between two interval/ratio variables.",
      "determine the degree of relationship between two nominal variables.",
      "predict an individual’s score on one variable based on knowing that the variable is interval/ratio in scale."
    ], correct: [0],
    answer: "A. Use an individual’s observed predictor value to estimate the individual’s score on the outcome variable.",
    zh: "先确定要预测的结果 Y，再把已知的预测变量 X 代入拟合的回归方程得到 Ŷ。A 给出了预测所需的观测值。B、C 说的是衡量关联程度，D 只给出测量尺度，缺少个体的预测变量值。",
    en: "A fitted regression equation takes the individual’s observed X value and returns a predicted Y value. B and C focus on measuring association. D supplies a measurement level but no predictor value for the individual."
  },
  {
    id: "r8", week: 2, ref: "Revision Q8 · p. 9",
    prompt: "Inferential statistics allow us to infer something about the ______ based on the ______.",
    options: ["sample; population", "population; sample", "sample; sample", "population; population"], correct: [1],
    answer: "B. Infer something about the population based on the sample.",
    zh: "先找证据来自哪里，再找结论想说明谁。例如随机调查 60 名本校学生，这 60 人是样本；若利用他们的数据估计全校学生的平均学习时长，全校学生就是要推断的总体。",
    en: "In a survey of 60 students selected from a school, the 60 students provide the sample measurements. Using those measurements to estimate the mean for all students in the school is an inference about the population."
  },
  {
    id: "r9", week: 2, ref: "Revision Q9 · p. 10",
    prompt: "The sampling distribution is a distribution of:",
    options: ["sample means.", "population mean.", "sample standard deviations.", "population standard deviations."], correct: [0, 2],
    answer: "A if the intended statistic is the sample mean. C is also valid for a sampling distribution of the sample standard deviation. The printed stem does not name the statistic.",
    zh: "想象从同一总体反复抽取相同大小的样本。若每次记录一个样本均值，这些均值的分布对应 A；若每次记录一个样本标准差，这些标准差的分布对应 C。总体均值和总体标准差各是同一总体的固定特征。原题省略了统计量，按题面无法从 A、C 中唯一确定一个答案。",
    en: "Imagine repeatedly drawing samples of the same size from one population. Record the mean each time to obtain a sampling distribution of means (A), or record the standard deviation each time to obtain a sampling distribution of standard deviations (C). The population mean and population standard deviation stay fixed across these draws."
  },
  {
    id: "r10", week: 3, ref: "Revision Q10 · p. 11",
    prompt: "A college student is interested in whether there is a difference between male and female students in the amount of time spent doing volunteer work each week. The student gathers information from a random sample of male and female students on her campus. Amount of time volunteering (in minutes) is normally distributed. The data appear next. They are measured on an interval-ratio scale and are normally distributed.\n\nMales (minutes): 20, 25, 35, 40, 36, 24.\nFemales (minutes): 35, 39, 38, 43, 50, 49.\n\na. What statistical test should be used to analyze these data?\nb. Identify H₀ and Hₐ for this study.\nc. Conduct the appropriate analysis.\nd. Should H₀ be rejected? What should the researcher conclude?",
    options: [], correct: [],
    answer: "(a) Use a two-sided independent-samples t-test. (b) H₀: μmale = μfemale. Hₐ: μmale ≠ μfemale. (c) Assuming equal population variances, the group means are 30.00 and 42.33 minutes per week. Taking males minus females gives t(10) = −2.993, p ≈ .0135. (d) At α = .05, reject H₀. There is evidence of a difference in mean weekly volunteering time on this campus. The female sample averaged 12.33 more minutes per week.",
    zh: "两组是不同学生，题目问两个总体的平均时长是否有差异，因此采用双侧独立样本 t 检验。两列并排仅用于排版。按讲义的等方差做法，每组 n = 6，样本方差约为 64.40 和 37.47，合并方差约为 50.93，均值差的标准误约为 4.120。用男性均值减女性均值，得到 −12.33 ÷ 4.120 ≈ −2.993，自由度 6 + 6 − 2 = 10。原题没有指定 α，若预设 .05，则拒绝 H₀；若预设 .01，则证据不足以拒绝 H₀。",
    en: "The rows contain separate students in two independent groups. Both groups have six observations. Pooling the two sample variances (64.40 and 37.47) gives 50.93. The estimated standard error of the difference is 4.120 minutes, so dividing the difference of −12.33 minutes by 4.120 gives t ≈ −2.993 with 10 degrees of freedom. The two-sided p-value is about .0135. The handout leaves α unspecified. This result meets a .05 threshold and falls short of a .01 threshold."
  }
];
