/* Original practice items. Page references identify the teaching source for each skill. */
const revisionMock = [
  {
    id:"m1", week:1,
    prompt:"A tutor records each student's preferred study location and the time spent there in minutes. Which pair of summaries is meaningful, in that order?",
    options:["Mean location and median time","Median location and mean time","Mean location and modal time","Modal location and mean time"],
    correct:[3], answer:"Modal location and mean time.",
    zh:"地点是无序类别，统计频数就能找出最常选的地点。分钟数有等距单位和有意义的零点，可以相加后除以人数求平均时间。",
    en:"Count the responses in each location category to find the mode. Minutes are a ratio-scale measurement, so their total divided by the number of students gives a meaningful mean.",
    ref:"Week 1 pp. 13–20, 29–30, 38–39 · Revision Q2"
  },
  {
    id:"m2", week:2,
    prompt:"Set A contains 2, 4, 6, 8, 10. Set B contains 4, 5, 6, 7, 8. Which comparison is correct?",
    options:["A has the same mean and a larger standard deviation.","A has a smaller mean and a larger standard deviation.","A has a larger mean and the same standard deviation.","A has the same mean and a smaller standard deviation."],
    correct:[0], answer:"A has the same mean and a larger standard deviation.",
    zh:"两组总和都是 30，均值都是 6。A 与均值的距离依次为 4、2、0、2、4，是 B 各对应距离的两倍，所以 A 的标准差也是 B 的两倍。",
    en:"Both sets balance at 6. Each deviation from 6 in A is twice the corresponding deviation in B, so A has twice B's standard deviation under the same convention.",
    ref:"Week 2 pp. 2, 8–11, 16–18 · Revision Q3"
  },
  {
    id:"m3", week:4,
    prompt:"Each dot represents a student. What can you conclude from the overall pattern in this scatterplot?",
    visual:'<figure><svg viewBox="0 0 320 165" width="320" style="max-width:100%;height:auto" role="img" aria-label="Paired values of X and Y are (1,7), (2,6), (3,4), (4,5), (5,3), and (6,2)."><path d="M36 15V137H301" fill="none" stroke="currentColor" stroke-width="1.5"/><g fill="currentColor" font-size="13"><text x="12" y="22">Y</text><text x="288" y="157">X</text><text x="19" y="151">0</text></g><g fill="#564296"><circle cx="73" cy="25" r="5"/><circle cx="110" cy="41" r="5"/><circle cx="147" cy="73" r="5"/><circle cx="184" cy="57" r="5"/><circle cx="221" cy="89" r="5"/><circle cx="258" cy="105" r="5"/></g></svg></figure>',
    options:["The points form a perfect negative straight line.","There is no apparent direction to the relationship.","Higher X values tend to accompany higher Y values.","Higher X values tend to accompany lower Y values."],
    correct:[3], answer:"Higher X values tend to accompany lower Y values.",
    zh:"从左向右看，点大多下降，表示负相关。中间有一点回升，因此这些点没有全部落在同一条直线上。",
    en:"As X increases, Y generally falls. There is some scatter around the descending pattern, including a rise between the third and fourth points.",
    ref:"Week 4 pp. 6–7, 13–14 · Revision Q6"
  },
  {
    id:"m4", week:3,
    prompt:"The label on a packet gives a target mean mass of 50 g. A random sample of packets is weighed once. Which test compares the population mean mass with the stated target?",
    options:["Paired-samples t-test","Independent-samples t-test","One-sample t-test","One-way ANOVA comparing separate production lines"],
    correct:[2], answer:"One-sample t-test.",
    zh:"这里只有一组随机抽取的重量，50 克是固定参照值。要判断的是这组数据所代表的总体均值是否等于 50 克。",
    en:"There is one sample of continuous measurements and one specified comparison value. The null hypothesis sets the population mean mass equal to 50 g.",
    ref:"Week 3 pp. 19–25"
  },
  {
    id:"m5", week:5,
    prompt:"For students who completed 0–8 practice sessions, the fitted equation is predicted score = 42 + 3 × sessions. What does 3 mean?",
    options:["Each additional session corresponds to a three-point increase in the predicted score.","A one-point increase in score predicts three more sessions.","The predicted score at zero sessions is 3.","A student completing three sessions is predicted to score 42."],
    correct:[0], answer:"Each additional session corresponds to a three-point increase in the predicted score.",
    zh:"把次数从 2 改为 3，预测分从 48 变成 51。相差的 3 分就是斜率的含义。42 是零次练习时的预测分。",
    en:"The slope gives the change in predicted Y for a one-unit increase in X. Comparing 42 + 3 × 2 with 42 + 3 × 3 gives a difference of three points.",
    ref:"Week 5 pp. 3–7 · Revision Q7"
  },
  {
    id:"m6", week:6,
    prompt:"Different students are assigned to one of four teaching methods. The outcome is reading time in seconds. Which test compares the four population means in one analysis?",
    options:["Pearson correlation","One-way ANOVA","Two-way ANOVA with method and reading time as factors","Paired-samples t-test"],
    correct:[1], answer:"One-way ANOVA.",
    zh:"教学方法是一个分类因子，有四组相互独立的学生。阅读用时是连续因变量。这里比较四组均值，需要一个单因素方差分析。",
    en:"There is one factor with four independent groups and one continuous outcome. One-way ANOVA tests whether the four population means are all equal.",
    ref:"Week 6 pp. 2–6"
  },
  {
    id:"m7", week:1,
    prompt:"A lecturer counts how many students commute by bus, train, bicycle or car. Which display places a separate bar above each named category, with gaps between the bars?",
    options:["Stem-and-leaf plot","Bar graph","Box plot","Histogram"],
    correct:[1], answer:"Bar graph.",
    zh:"每根柱代表一种交通方式，柱高表示人数。这里的横轴是类别名称，类别间可以留空。直方图的横轴是连续数值区间。",
    en:"A bar graph displays category counts using separate bars. A histogram would group numerical observations into intervals along a measurement scale.",
    ref:"Week 1 pp. 13–14, 21, 25–26 · Week 2 p. 29 · Revision Q1"
  },
  {
    id:"m8", week:2,
    prompt:"A researcher randomly samples 80 first-year students. Which statement uses inferential statistics?",
    options:["The 80 respondents studied for a total of 320 hours last week.","The survey is used to estimate the mean study time of all first-year students at the university.","A frequency table lists the study times reported by the 80 respondents.","The most common reported study time among the 80 respondents was 3 hours."],
    correct:[1], answer:"The survey is used to estimate the mean study time of all first-year students at the university.",
    zh:"观察对象是 80 名受访者，要估计的是全校一年级学生的总体均值。其余三项都只整理实际收集到的 80 份记录。",
    en:"The estimate extends a finding from the sample to its target population. The total, the mode and the frequency table describe only the observed responses.",
    ref:"Week 2 pp. 26–29 · Revision Q8"
  },
  {
    id:"m9", week:3,
    prompt:"For a two-sided test, α was set at .05 before data collection. The exact p-value is .050. Under the decision rule given in the lecture, what should the researcher do?",
    options:["Reject H₀ because p is equal to the prespecified α.","Reject H₀ because there is a 95% probability that H₁ is true.","Change α to .01 after seeing the result and then report significance.","Fail to reject H₀ because only p values strictly below α qualify."],
    correct:[0], answer:"Reject H₀ because p is equal to the prespecified α.",
    zh:"按讲义的 p ≤ α 规则，等号包含在拒绝域内。题目给的是精确 p 值，不涉及软件把数值四舍五入到 .050 的情况。",
    en:"With the stated rule p ≤ α, an exact value of .050 meets the .05 threshold. This decision rule does not assign a probability to the alternative hypothesis.",
    ref:"Week 3 pp. 9–13"
  },
  {
    id:"m10", week:1,
    prompt:"Use this stem-and-leaf display. How many observations are at least 24?\nStem | Leaves\n1 | 6 9\n2 | 1 4 4 8\n3 | 0\nKey: 2 | 4 represents 24.",
    options:["3","2","4","5"],
    correct:[2], answer:"4 observations.",
    zh:"第一行表示 16、19；第二行表示 21、24、24、28；最后一行表示 30。满足至少 24 的是 24、24、28 和 30，两个 24 都要计数。",
    en:"Read each leaf as a separate observation. The two leaves for 24, the leaf for 28 and the leaf for 30 give four qualifying values.",
    ref:"Week 1 pp. 21, 27"
  },
  {
    id:"m11", week:4,
    prompt:"Two examiners independently rank the same ten presentations from first to tenth. Which coefficient would you choose to measure agreement in the ordering of their ranks?",
    options:["Spearman's rho","Point-biserial correlation","Pearson correlation applied to the presentation ID numbers","Cramér's V"],
    correct:[0], answer:"Spearman's rho.",
    zh:"两列数据分别是两位考官给同一组演讲排出的名次。一位给出较高名次时，另一位是否也给出较高名次，可以用 Spearman 秩相关来回答。",
    en:"Pair the two ranks for each presentation. Spearman's rho measures how consistently high rank in one ordering goes with high rank in the other.",
    ref:"Week 4 pp. 9–10, 23 · Revision Q5"
  },
  {
    id:"m12", week:6,
    prompt:"Before comparing the mean scores of three independent groups, a lecturer wants to check whether the population variances are similar. Which check directly addresses that assumption?",
    options:["Inspecting whether every student appears only once","Levene's test","Shapiro–Wilk test within each group","Comparing the three means on a bar graph"],
    correct:[1], answer:"Levene's test.",
    zh:"Levene 检验的零假设是各组总体方差相等。Shapiro–Wilk 检查正态性；同一个学生是否被重复记录属于观测独立性的问题。",
    en:"Levene's test addresses homogeneity of variances. The normality of scores and the independence of observations are different assumptions, checked in different ways.",
    ref:"Week 6 pp. 6–8"
  },
  {
    id:"m13", week:5,
    prompt:"In a multiple regression predicting exam score, revision hours have a standardized β of +.28 and absences have a standardized β of −.46. Which statement interprets the fitted coefficients?",
    options:["Absences have the larger standardized coefficient in magnitude, with a negative direction when revision hours are held fixed.","Absences explain 46% of score variation.","Revision hours have the larger standardized coefficient in magnitude because .28 exceeds −.46.","One extra absence predicts a decrease of exactly .46 raw score points."],
    correct:[0], answer:"Absences have the larger standardized coefficient in magnitude, with a negative direction when revision hours are held fixed.",
    zh:"比较同一模型中标准化系数的大小要看绝对值，.46 大于 .28。负号说明在复习时数固定时，缺席增多对应较低的预测分数。β 的单位是标准差。",
    en:"The absolute standardized coefficients are .46 and .28. Holding revision hours fixed, a one-standard-deviation increase in absences predicts a .46-standard-deviation decrease in the outcome.",
    ref:"Week 5 pp. 12–15"
  },
  {
    id:"m14", week:2,
    prompt:"A box plot shows Q1 = 14, the median = 17 and Q3 = 24. The observed minimum and maximum are 8 and 40. What are the range, IQR and semi-IQR, in that order?",
    options:["40, 10, 5","10, 32, 16","32, 5, 10","32, 10, 5"],
    correct:[3], answer:"32, 10 and 5.",
    zh:"全距取两个端点，40 − 8 = 32。四分位距看箱体两端，24 − 14 = 10。半四分位距为 10 ÷ 2 = 5。",
    en:"Use the minimum and maximum for the range, the first and third quartiles for the IQR, and half the IQR for the semi-interquartile range.",
    ref:"Week 2 pp. 3–6 · Week 1 p. 23"
  },
  {
    id:"m15", week:3,
    prompt:"Twelve students each complete a reading test before and after a workshop. Their score differences are approximately normal. Which analysis uses the design correctly?",
    options:["A one-sample t-test on the 12 post-test scores against a target of zero","An independent-samples t-test on 24 unrelated scores","A paired-samples t-test on 12 differences, with 11 degrees of freedom","A paired-samples t-test on 24 differences, with 23 degrees of freedom"],
    correct:[2], answer:"A paired-samples t-test on 12 differences, with 11 degrees of freedom.",
    zh:"每位学生有前后两个分数，相减后只提供一个差值。共 12 个差值，检验其总体均值是否为 0，自由度为 12 − 1 = 11。",
    en:"Match each post-test score to the same student's pre-test score. The paired test analyses one difference per student, and df equals the number of complete pairs minus one.",
    ref:"Week 3 pp. 33–38"
  },
  {
    id:"m16", week:4,
    prompt:"Study I records club membership (yes/no) and measured height in cm. Study II records students' faculty (three categories) and preferred travel mode (four categories). Which pair of association measures fits these variables?",
    options:["Cramér's V for I and Spearman's rho for II","Spearman's rho for I and Pearson's r for II","Point-biserial correlation for I and Cramér's V for II","Pearson's r for I and point-biserial correlation for II"],
    correct:[2], answer:"Point-biserial correlation for I and Cramér's V for II.",
    zh:"研究 I 是真正的二分类变量配一个等比变量，可用点二列相关。研究 II 的两列都是无序类别，可对列联表使用 Cramér’s V。",
    en:"Membership has two categories and height is quantitative, which fits the point-biserial coefficient. Faculty and travel mode form a table of two nominal variables, which fits Cramér's V.",
    ref:"Week 4 pp. 9–10, 24–25"
  },
  {
    id:"m17", week:1,
    prompt:"Five recorded waiting times are 3, 4, 4, 5 and 9 minutes. The final value is corrected from 9 to 29. Which statement is true?",
    options:["The median rises by 4 minutes and the mean stays at 5 minutes.","The mean rises by 20 minutes and the median stays at 4 minutes.","The mode changes from 4 minutes to 29 minutes.","The mean rises by 4 minutes and the median stays at 4 minutes."],
    correct:[3], answer:"The mean rises by 4 minutes and the median stays at 4 minutes.",
    zh:"总等候时间增加了 20 分钟，除以 5 人，均值增加 4 分钟，由 5 变为 9。排序后第三个数仍是 4，出现次数最多的也仍是 4。",
    en:"The added 20 minutes enter the total once and are shared across five observations. Changing the largest value leaves the middle observation in the same position.",
    ref:"Week 1 pp. 29–30, 33–40"
  },
  {
    id:"m18", week:2,
    prompt:"A distribution has a long tail on the left. Its kurtosis is 4.2 using the lecture's convention in which the normal distribution has kurtosis 3. Which description fits?",
    options:["Negative skew and mesokurtic","Positive skew and platykurtic","Negative skew and leptokurtic","Positive skew and leptokurtic"],
    correct:[2], answer:"Negative skew and leptokurtic.",
    zh:"尾巴向较小的数值延伸，方向为负偏。题目采用讲义以 3 为正态参照的峰度定义，4.2 大于 3，所以属于 leptokurtic。",
    en:"A tail toward smaller values indicates negative skew. On the stated kurtosis scale, a value above 3 is classified as leptokurtic. Skewness and kurtosis describe different features.",
    ref:"Week 2 pp. 19–24"
  },
  {
    id:"m19", week:3,
    prompt:"Two independent groups contain 12 and 15 students. Levene's Sig. is .41. At α = .05, which row and degrees of freedom would you use under the lecture's independent-samples t-test procedure?",
    options:["Paired differences, df = 11","Equal variances assumed, df = 25","Equal variances assumed, df = 26","Equal variances not assumed, df = 25"],
    correct:[1], answer:"Equal variances assumed, df = 25.",
    zh:"Levene 的 .41 大于 .05，没有足够证据拒绝方差相等。按讲义读等方差行，合并方差检验的自由度是 12 + 15 − 2 = 25。两组均值的显著性还要另读 t 检验的 p 值。",
    en:"Levene's result gives insufficient evidence to reject equal variances at .05. The pooled row uses n₁ + n₂ − 2 degrees of freedom. The mean comparison has its own significance value.",
    ref:"Week 3 pp. 27–32 · Revision Q10"
  },
  {
    id:"m20", week:5,
    prompt:"A researcher first fits a model containing every proposed predictor. The procedure then removes predictors that contribute too little under its selection rule. Which procedure is being described?",
    options:["Enter","Forward selection","Backward selection","Stepwise selection starting from an empty model"],
    correct:[2], answer:"Backward selection.",
    zh:"观察起点和下一步。Backward 从全模型开始，再逐步移除变量；Enter 同样把全部变量放入模型，但没有按这一规则逐个移除的步骤。",
    en:"Backward selection starts with the full set and considers removals. Forward selection adds predictors, stepwise selection can recheck earlier entries, and Enter retains the specified predictors together.",
    ref:"Week 5 pp. 16–19"
  },
  {
    id:"m21", week:6,
    prompt:"The table shows mean test scores for two methods at two course levels. Which comparison illustrates the idea of an interaction?\nCourse level | Method A | Method B\nIntroductory | 60 | 70\nAdvanced | 80 | 80",
    options:["Averaging equally over course levels, the mean for B is 5 points higher than the mean for A.","Testing whether the four cell means are all equal answers specifically whether the two factors interact.","Averaging over methods, advanced students score higher than introductory students.","Method B exceeds A by 10 points at the introductory level but by 0 points at the advanced level."],
    correct:[3], answer:"Method B exceeds A by 10 points at the introductory level but by 0 points at the advanced level.",
    zh:"分别在每个课程层级计算 B 减 A，得到 10 分和 0 分。方法差距随层级改变，正是交互作用关注的模式。要判断统计显著性，还需要看交互项检验。",
    en:"The method difference changes with course level. These sample means show the pattern that an interaction term examines. Their sizes alone do not give an interaction p-value.",
    ref:"Week 6 pp. 9–15"
  },
  {
    id:"m22", week:2,
    prompt:"Imagine repeatedly drawing random samples of 20 students from the same population. You want the sampling distribution of the mean study time. What single value should you record for each sample?",
    options:["The population mean, copied once per sample","The mean study time of the 20 students in that sample","The largest individual's study time in that sample","The sample standard deviation of study time"],
    correct:[1], answer:"The mean study time of the 20 students in that sample.",
    zh:"每抽一组 20 人就算一个样本均值。许多次抽样产生的这些均值形成均值的抽样分布。若改为记录每组的标准差，就换成了另一种统计量的抽样分布。",
    en:"The statistic named in the question is the mean. One mean from each repeated sample contributes one value to its sampling distribution.",
    ref:"Revision Q9 · Week 2 pp. 26–29 (sample and population)"
  },
  {
    id:"m23", week:3,
    prompt:"For a specified real difference between two means, the probability of failing to reject H₀ is .20. What error is this, and what is the power against that difference?",
    options:["Type II error and power .80","Type I error and power .20","Type I error and power .80","Type II error and power .20"],
    correct:[0], answer:"Type II error and power .80.",
    zh:"题目已说明总体均值确实有差异，因此“均值相等”的 H₀ 为假。未拒绝这个错误的 H₀ 属于第二类错误，其概率 β = .20。功效是 1 − β = .80。",
    en:"The null hypothesis is false for the difference specified. Missing the difference is a Type II error, and the probability of detecting it is 1 − .20 = .80.",
    ref:"Week 3 pp. 14–18"
  },
  {
    id:"m24", week:4,
    prompt:"A Pearson analysis of two continuous test scores gives r = −.60, N = 20 and Sig. (2-tailed) = .005. Using α = .05, which report is supported?",
    options:["The scores show a statistically significant negative linear association.","There is no evidence of a relationship because r is below zero.","The predictor causes exactly a .60-point drop in the other score.","The scores show a positive association because .005 is positive."],
    correct:[0], answer:"The scores show a statistically significant negative linear association.",
    zh:"负号给出相关方向，|r| = .60 给出相关系数的大小。双尾 p = .005 小于 .05，因此有统计证据支持负线性关联。相关系数既没有分数单位，也不能确定因果。",
    en:"The sign of r gives the direction, its absolute value gives the magnitude, and the two-tailed p-value supplies the significance decision. A correlation does not give a raw regression slope.",
    ref:"Week 4 pp. 3, 6–8, 14, 19–21 · Revision Q4"
  },
  {
    id:"m25", week:5,
    prompt:"A fitted regression line predicts a score of 74 for a particular student. Their observed score is 69. What is the residual, and where is the student's point relative to the line?",
    options:["+5 points, below the line","+5 points, above the line","−5 points, above the line","−5 points, below the line"],
    correct:[3], answer:"−5 points, below the line.",
    zh:"残差等于实际值减预测值，69 − 74 = −5 分。在该学生的 X 值处，实际分数低于直线高度，模型高估了 5 分。",
    en:"Subtract predicted from observed. The negative residual means the fitted line lies five points above this student's observed score.",
    ref:"Week 5 pp. 7–9"
  },
  {
    id:"s1", week:1,
    prompt:"A help desk records six waiting times in minutes: 3, 5, 4, 20, 5, 5. Find the mean, median and mode. Which measure would you report for a typical visitor, and why?",
    options:[], correct:[],
    answer:"Mean = 42/6 = 7 minutes. In order the times are 3, 4, 5, 5, 5, 20, so the median is (5 + 5)/2 = 5 minutes and the mode is 5 minutes. I would report the median because the long wait of 20 minutes raises the mean. The mode is also defensible if “typical” is defined as the most frequent observed wait.",
    zh:"先相加求均值，再排序找第 3、4 项，最后数频次。答题要把选择的指标和本题数据联系起来。选中位数可以解释 20 分钟的影响；选众数则要说明 5 分钟出现了三次。",
    en:"Award credit for each correctly calculated measure and for a choice justified in context. The median describes the middle wait, while the mode answers which exact wait occurred most often.",
    ref:"Week 1 pp. 29–41 · Revision Q2"
  },
  {
    id:"s2", week:2,
    prompt:"Three students selected at random report 2, 4 and 6 hours of revision. Calculate the sample variance and sample standard deviation. If these same three values constituted the entire population of interest, what would its variance be? Explain the change in denominator.",
    options:[], correct:[],
    answer:"The mean is 4 hours. The squared deviations are 4, 0 and 4, giving a total of 8 hours². The sample variance is 8/(3 − 1) = 4 hours² and the sample standard deviation is 2 hours. For the whole population the variance is 8/3 ≈ 2.67 hours². Estimating the mean from the sample leaves n − 1 independent deviations. Dividing by n − 1 corrects the tendency to underestimate population variance.",
    zh:"三个偏差为 −2、0、2，加起来必须等于 0，知道前两个后第三个就确定了。用样本估计总体方差时除以 n − 1。若三人就是研究的整个总体，则直接取三个平方偏差的平均数。方差写小时²，标准差写小时。",
    en:"A complete solution distinguishes the squared-deviation total from each variance, takes the square root for the sample SD, and explains why estimating the mean costs one degree of freedom.",
    ref:"Week 2 pp. 8–16"
  },
  {
    id:"s3", week:3,
    prompt:"Two independent random samples of students record minutes spent on a task. Group A: 9, 10, 11, 12, 13. Group B: 12, 13, 14, 15, 16. Assume normal populations with equal variances. Choose a test, state both hypotheses, calculate t and df using A minus B, and conclude at α = .05. The two-sided critical values are ±2.306.",
    options:[], correct:[],
    answer:"Use the pooled independent-samples t-test. H₀: μA = μB. H₁: μA ≠ μB. The sample means are 11 and 14 minutes. Each sample variance is 2.5, so the pooled variance is 2.5. SE = √[2.5(1/5 + 1/5)] = 1 minute. Thus t = (11 − 14)/1 = −3.00 and df = 5 + 5 − 2 = 8. Since |t| = 3.00 exceeds 2.306, reject H₀. There is evidence of different population means, with A averaging three minutes less than B in the sample.",
    zh:"两组是不同学生，数据恰好一一排成五行并不表示配对。每组的平方偏差和都是 10，样本方差为 10/4 = 2.5。答题要写清检验、总体假设、统计量、自由度和在分钟情境下的结论。",
    en:"The two means are three standard errors apart. The difference was defined as A minus B, giving the negative sign. For the two-sided decision, compare the magnitude of t with the critical magnitude.",
    ref:"Week 3 pp. 5–6, 27–32 · Revision Q10"
  },
  {
    id:"s4", week:4,
    prompt:"A researcher observes study time in hours and reading score in points. The scatterplot is roughly linear, and Pearson's r is +.72. Another researcher records only the rank order of these students on each variable. Explain the first result, name an appropriate coefficient for the second researcher, and say whether the first study establishes causation.",
    options:[], correct:[],
    answer:"The sample shows a positive linear association: students who study longer tend to have higher reading scores. The magnitude is .72, which falls in the lecture's high-correlation band. Spearman's rho is appropriate for the two sets of ranks. The observational association alone cannot establish that longer study causes a higher score.",
    zh:"第一问看正负号和绝对值，再放回学习时长和阅读成绩来表述。第二问的数据只保留名次，使用秩相关。观察研究没有操纵学习时长，因此不能由这一关联断定因果。",
    en:"Credit the direction, magnitude, rank-based choice and study-design limitation separately. The word “tend” matters because individual students need not follow the trend exactly.",
    ref:"Week 4 pp. 3, 6–10, 14, 17–19, 23 · Revision Q4–Q6"
  },
  {
    id:"s5", week:5,
    prompt:"The fitted model is predicted test score = 20 + 4H + 2P, where H is hours of study and P is practice tests completed. Identify the predictors and criterion. Predict the score for H = 3 and P = 5. Interpret the coefficient of H and calculate the residual if the observed score is 45.",
    options:[], correct:[],
    answer:"The predictors are hours of study and practice tests completed. The criterion is test score. The predicted score is 20 + 4(3) + 2(5) = 42 points. Holding P fixed, each extra hour corresponds to a four-point increase in the predicted score. The residual is 45 − 42 = +3 points, so the model underpredicted this score.",
    zh:"先标出模型要预测的结果，再把两个已知输入代入。解释多元回归系数时要写“其他预测变量固定”。残差从实际分数 45 出发，减去预测分数 42。",
    en:"A full answer identifies the variable roles, evaluates both terms, holds practice tests fixed when explaining the slope, and interprets the residual in score points.",
    ref:"Week 5 pp. 4–5, 9–15 · Revision Q7"
  },
  {
    id:"s6", week:6,
    prompt:"A study crosses teaching method (A or B) with course level (introductory or advanced). Different students occupy each of the four cells, and the outcome is reading time in seconds. Name the analysis, explain the interaction in words, and state four conditions to check for this design.",
    options:[], correct:[],
    answer:"Use a two-way ANOVA. The interaction asks whether the difference in mean reading time between methods A and B changes with course level. Beyond the two categorical factors, check that the response is continuous, observations are independent, reading times are approximately normal within each cell, and variances are similar across cells. Also inspect each cell for substantial outliers. Any four of these five conditions earn credit.",
    zh:"两个因子分别是教学方法和课程层级，问交互作用时要说出“方法之间的差异是否随层级改变”。近似正态要在每个组合内检查，方差齐性要在四个组合之间检查，观测独立要结合分组设计判断。",
    en:"Give the design, an interaction statement tied to these variables, and four valid conditions. The normality and variance checks concern the four method-by-level combinations.",
    ref:"Week 6 pp. 4–13"
  },
  {
    id:"s7", week:1,
    prompt:"A survey table reports that 50% of 20 day students and 25% of 60 evening students use the library daily. Find the counts for each group and the percentage for the combined sample. Explain why averaging the two percentages would give a different answer.",
    options:[], correct:[],
    answer:"The counts are 0.50 × 20 = 10 day students and 0.25 × 60 = 15 evening students. Together, 25 of the 80 students use the library daily, or 31.25%. The simple average of the two percentages, 37.5%, gives the two groups equal weight even though the evening group is three times as large.",
    zh:"每个百分比都先乘它本组的人数。再将人数合并，分子是 10 + 15，分母是 20 + 60。直接平均百分比会让 20 人组和 60 人组各占一半。",
    en:"Use each group size as its own denominator when recovering the counts. For the combined result the denominator changes to all 80 respondents.",
    ref:"Week 1 pp. 22, 43"
  },
  {
    id:"s8", week:3,
    prompt:"Sixteen students take the same timed task before and after training. Their differences (after minus before) have mean −2 seconds and standard deviation 4 seconds. Assume independent students and approximately normal differences. Specify H₀ and H₁ for a two-sided paired test, calculate t and df, and interpret the result at α = .05 using the critical values ±2.131.",
    options:[], correct:[],
    answer:"Let μd be the population mean of after-minus-before differences. H₀: μd = 0. H₁: μd ≠ 0. The standard error is 4/√16 = 1 second. Thus t = −2/1 = −2.00 and df = 16 − 1 = 15. Since |t| = 2.00 is below 2.131, fail to reject H₀. The sample was two seconds faster on average after training, but the data give insufficient evidence of a population mean change at .05.",
    zh:"每人一个前后差值，样本量为 16。平均差是 −2，说明样本中训练后用时较短。双尾检验没有达到显著水平，因此不能把样本里的变化直接推广到总体，也不能据此证明总体差为零。",
    en:"Base the calculation on the 16 paired differences. Their sign describes the sample change. The comparison with the critical values determines what the data support about the population mean change.",
    ref:"Week 3 pp. 13, 33–38"
  }
];
