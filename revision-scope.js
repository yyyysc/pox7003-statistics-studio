// Page numbers refer to PDF pages, including each file's cover.
const revisionScope = [
  {
    week: 1,
    title: "Describing data / 描述数据",
    items: [
      {
        en: "Identify the population you want to study and the sample you actually observed. Descriptive statistics summarise those observations. Inferential statistics use the sample to draw a conclusion about the population.",
        zh: "先说清研究对象是谁、实际观察了谁。描述统计概括观察到的数据；用样本推断总体时，就进入推论统计。",
        ref: "Week 1 pp. 6–10 · Revision Q8"
      },
      {
        en: "Ask what one entry records. A jersey number labels a player. A finishing position orders players. A count is discrete, while height is continuous even when recorded to the nearest centimetre.",
        zh: "先看一个数代表什么。球衣号码用于分类，比赛名次有顺序，人数是离散计数，身高即使按厘米取整，其本质仍是连续测量。",
        ref: "Week 1 pp. 11–20"
      },
      {
        en: "Nominal categories have labels. Ordinal categories also have an order. Interval values have equal units, as in degrees Celsius. Ratio values also have a meaningful zero, as in height. These properties determine which summaries make sense.",
        zh: "定类看名称，定序增加顺序，等距再具备等距单位，等比还具备有实际意义的零点。判断尺度后，再决定能否排序、求均值或比较倍数。",
        ref: "Week 1 pp. 13–20 · Revision Q2"
      },
      {
        en: "Read what the horizontal axis represents. A bar graph separates categories with gaps. A histogram places numerical intervals next to one another. A frequency table counts observations, a dot plot shows counts with dots, and a stem-and-leaf plot uses a key to recover values. In a box plot, locate Q1, the median and Q3.",
        zh: "先读横轴。分开的类别柱提示条形图；相邻数值区间对应直方图。频数表查次数，点图数点，茎叶图按图例还原数据，箱线图先找两个四分位数和中位线。",
        ref: "Week 1 pp. 21–28 · Revision Q1"
      },
      {
        en: "The mode is the most frequent value and can describe any scale. The median uses ordered positions. With an even number of numerical observations, average the two middle values. The mean uses every value and is appropriate for interval or ratio measurements. For skewed data, extreme scores can move the mean substantially while leaving the median unchanged.",
        zh: "众数看频数，四种尺度均可使用；中位数先排序，偶数个数值取中间两项的均值；算术平均数用总和除以个数，适用于等距或等比数据。遇到偏态数据，要能说明为什么中位数更能代表典型水平。",
        ref: "Week 1 pp. 29–40 · Revision Q2"
      },
      {
        en: "Practise the three classroom activities. Summarise ten scores, choose a typical household size, and combine percentages from groups of different sizes by converting each group's percentage into a count first.",
        zh: "课末三题分别练十个分数的均值、中位数、众数与全距，解释家庭人数的典型值，以及把各组百分比按各自人数换算后再合并。",
        ref: "Week 1 pp. 41–43"
      }
    ],
    note: "补上的 Week 1 重点是把变量尺度、图表和集中趋势连起来。先看题目给的是类别、名次还是数值，再选图和统计量。原题 Q1、Q2、Q8 都用到了这条思路。",
    memory: "Nominal → mode. Ordinal → median or mode. Interval/ratio → mean is also meaningful. 类别柱之间有空隙；直方图横轴是数值区间。遇到极端值，先排序，再判断中位数能否代表典型水平。"
  },
  {
    week: 2,
    title: "Dispersion and inference / 离散程度与推断",
    items: [
      {
        en: "Dispersion describes how spread out the scores are. Range = maximum − minimum. IQR = Q3 − Q1 covers the middle half of the ordered scores. Semi-IQR = IQR / 2.",
        zh: "离散程度说明分数有多分散。全距用最大值减最小值；四分位距用 Q3 减 Q1，描述中间一半数据的跨度；半四分位距等于 IQR 的一半。",
        ref: "Week 2 pp. 2–6"
      },
      {
        en: "Variance uses squared deviations from the mean. Divide by N for a whole population and by n − 1 when estimating population variance from a sample. Estimating the mean from those n scores uses one degree of freedom. Standard deviation is the square root of variance and has the original unit of measurement.",
        zh: "方差先用每个数减均值，再平方求和。对整个总体除以 N；用样本估计总体方差时除以 n−1，因为已用这些数据估计均值，偏差的和固定为零。标准差开平方后恢复原单位。",
        ref: "Week 2 pp. 8–19 · Revision Q3"
      },
      {
        en: "In Revision Q3, compare distances from each group's own mean. The intended 'average deviation' is the average absolute distance. Keeping the signs instead would make the deviations cancel in each group.",
        zh: "复习题还考 average deviation。Q3 的选项对应平均绝对离差：求各分数距本组均值的绝对距离，再取平均。若保留正负号，两组的平均偏差都会是零。",
        ref: "Revision Q3, p. 4 · Week 2 pp. 8–10, 13"
      },
      {
        en: "For the lecture's graphs, a long right tail indicates positive skew and a long left tail negative skew. A normal distribution has zero skew, but zero skew alone cannot establish normality. The lecture uses ordinary kurtosis, with 3 as the normal benchmark: mesokurtic = 3, leptokurtic > 3, platykurtic < 3.",
        zh: "正偏看右长尾，负偏看左长尾。课件以对称的正态图示范零偏度；只知道偏度为零，无法确认正态或完全对称。讲义使用普通峰度，以 3 为基准，等于、大于、小于 3 分别对应常峰、尖峰、低峰。",
        ref: "Week 2 pp. 19–25"
      },
      {
        en: "An inference uses sample evidence to make a population claim. For the sampling distribution of the mean, imagine repeatedly taking samples of the same size and recording one mean per sample.",
        zh: "推断是从样本回到总体。理解样本均值的抽样分布时，想象从同一总体反复抽取同样大小的样本，每次只记一个均值。Q9 原题省略了“哪一个统计量”，作答时应点明。",
        ref: "Week 2 pp. 26–29 · Revision Q8–9"
      },
      {
        en: "Identify the independent, dependent and controlled variables in a study. The dependent variable is the measured outcome. The controlled variable is kept constant.",
        zh: "补上讲义后半的三种变量：自变量是研究的解释或分组因素，因变量是测量结果，控制变量是研究中保持一致的因素。",
        ref: "Week 2 pp. 31–34"
      }
    ],
    note: "原提纲的离散指标齐全。另补 Q3 的平均绝对离差、Q9 的抽样分布，以及讲义中的变量角色。峰度的三个阈值是讲义采用的普通峰度，不能据其中一个数值单独判定数据服从正态分布。",
    memory: "Range = max − min. IQR = Q3 − Q1. Semi-IQR = IQR / 2. 方差分母先判总体 N 或样本 n−1，开方得到原单位的标准差。长尾指向偏度方向。均值的抽样分布是反复抽样得到的一系列均值。"
  },
  {
    week: 3,
    title: "Hypothesis tests and t-tests / 假设检验与 t 检验",
    items: [
      {
        en: "State H₀ and H₁ about the population. Set α before looking at the result. Under H₀, p is the probability of a test result at least as extreme as the one observed. Reject H₀ when p ≤ α. When p > α, report that the evidence is insufficient to reject H₀.",
        zh: "先写总体假设，再预设显著性水平 α。p 值是在 H₀ 成立的前提下，得到当前或更极端检验结果的概率。p≤α 时拒绝 H₀，p>α 时写“证据不足，未拒绝 H₀”。",
        ref: "Week 3 pp. 3–13 · Revision Q10(b, d)"
      },
      {
        en: "A Type I error rejects a true H₀ (false positive, α). A Type II error fails to reject a false H₀ (false negative, β). Power is 1 − β, the probability of detecting a specified real difference.",
        zh: "一类错误是把真实的 H₀ 拒绝，出现假阳性；二类错误是未拒绝实际为假的 H₀，出现假阴性。功效 1−β 是检出给定真实差异的概率。",
        ref: "Week 3 pp. 14–18"
      },
      {
        en: "Use a one-sample t-test for one mean versus a fixed value, such as protein content versus 20 g. Use continuous measurements from a random, independent sample. The normal-population assumption matters especially for small samples. Here df = n − 1.",
        zh: "一个样本与固定标准比较，用单样本 t 检验，例如平均蛋白质含量与 20 克比较。测量值连续，样本随机，观察相互独立；小样本时尤其关注总体近似正态。自由度为 n−1。",
        ref: "Week 3 pp. 19–26"
      },
      {
        en: "For two unrelated groups, use an independent-samples t-test. Check independence, random sampling, a continuous outcome and approximate normality within each group. The pooled version assumes equal population variances and uses df = n₁ + n₂ − 2. In SPSS, Levene's test concerns variances. Read the selected t-test row for the test of means.",
        zh: "两组不同受试者比较均值，用独立样本 t 检验。检查观察独立、随机抽样、连续因变量和各组近似正态。合并方差版本假设总体方差相等，此时 df=n₁+n₂−2。Levene 检验检查方差，均值差是否显著要看 t 检验对应行的 p 值。",
        ref: "Week 3 pp. 27–32 · Revision Q10(a–d)"
      },
      {
        en: "For matched measurements, calculate one difference per pair, then test whether the population mean difference is zero. Pairs should be independent of other pairs and their differences approximately normal. With n complete pairs, df = n − 1.",
        zh: "同一人前后两次测量或一一匹配时，先在每对内作差，检验总体平均差是否为零。不同配对相互独立，关注配对差值的近似正态性。n 表示有效配对数。",
        ref: "Week 3 pp. 33–38"
      }
    ],
    note: "原提纲对三种 t 检验的划分符合讲义。补上单样本自由度，并给独立样本自由度加上“合并方差”条件。复习题 Q10 要从同一个情境连续完成选检验、写假设、计算和解释。",
    memory: "One mean vs a target, two independent groups, or one difference per pair. 双侧题先写总体假设，再计算 t 和 df。p ≤ α 拒绝 H₀，p > α 证据不足。一类错误是假阳性，二类错误是假阴性。"
  },
  {
    week: 4,
    title: "Correlation / 相关",
    items: [
      {
        en: "In a correlational study, measure two variables on the same cases. A rising scatterplot suggests a positive relationship and a falling scatterplot a negative one. Pearson's r ranges from −1 to +1. Its sign gives direction and its absolute value gives the strength of the linear association.",
        zh: "同一批对象各测两个变量。散点从左向右上升提示正相关，下降提示负相关。Pearson r 从 −1 到 +1，符号表方向，绝对值表线性关系强度。",
        ref: "Week 4 pp. 3–8, 13–16 · Revision Q4, Q6"
      },
      {
        en: "Choose the coefficient from both measurement scales. Use Pearson for a linear relationship between two interval/ratio variables, Spearman for paired ranks, point-biserial for one binary category and one interval/ratio variable, and Cramér's V for two nominal variables.",
        zh: "先判两个变量的尺度。两个等距或等比变量的线性关系用 Pearson；两列等级用 Spearman，无须假设正态；一个真正二分类变量与一个等距或等比变量用点二列；两个定类变量的关联强度可用 Cramér’s V。",
        ref: "Week 4 pp. 9–11, 19–25 · Revision Q5"
      },
      {
        en: "Use correlation to describe association or support prediction. An observed relationship alone leaves its cause unresolved. In the SPSS example, read the off-diagonal coefficient, its two-tailed p-value and the number of paired cases.",
        zh: "相关可描述关系，也可帮助预测。单凭相关无法确定因果。SPSS 表中读两个变量交叉处的系数、双侧 p 值和成对个案数。",
        ref: "Week 4 pp. 16–21"
      }
    ],
    note: "四种方法都可在讲义找到。决定系数 r² 出现在 Q5 的选项中；在带截距的一元线性回归里，它表示模型解释的结果变异比例。Q5 实际考查的是为两列等级选系数，原题没有要求计算 r²。Cramér’s V 表示强度，没有正负方向。",
    memory: "Read the sign for direction and |r| for strength. 两个等距或等比变量的线性关系看 Pearson，两列等级看 Spearman；二分加定量看点二列，两个定类看 Cramér’s V。"
  },
  {
    week: 5,
    title: "Regression / 回归",
    items: [
      {
        en: "Simple regression predicts a continuous outcome from one predictor. In Ŷ = a + bX, a is the predicted Y at X = 0, and b is the change in predicted Y per one-unit increase in X. Keep predictions within the range of the observed X values.",
        zh: "简单回归用一个预测变量估计连续结果。在 Ŷ=a+bX 中，a 是 X=0 时的预测值，b 是 X 每增加一个单位时预测值的变化量。解释截距和作预测时都要看实际观测范围。",
        ref: "Week 5 pp. 3–8 · Revision Q7"
      },
      {
        en: "Residual = observed Y − predicted Y. A point above the line has a positive residual because the model underpredicted it. A point on the line has a zero residual.",
        zh: "残差用实际值减预测值。点在线上方，预测偏低，残差为正；在线下方，预测偏高，残差为负；在线上，残差为零。",
        ref: "Week 5 pp. 7–9"
      },
      {
        en: "Multiple regression uses two or more predictors for one criterion. Interpret a coefficient while holding the other predictors fixed. A standardised β expresses the predicted change in outcome SDs for a one-SD increase in a predictor.",
        zh: "多元回归用两个或更多预测变量解释同一个效标变量。解释某一系数时固定其他预测变量。标准化 β 表示该预测变量增加一个标准差，预测结果相应变化多少个标准差。",
        ref: "Week 5 pp. 10–15"
      },
      {
        en: "Enter includes all predictors together. Forward adds them one at a time. Backward starts with all predictors and removes them selectively. Stepwise rechecks predictors already in the model after adding a new one.",
        zh: "Enter 一起纳入；Forward 从空模型逐个加入；Backward 从全模型逐步剔除；Stepwise 每次加入后重新检验已入模变量，必要时移除。",
        ref: "Week 5 pp. 16–19"
      }
    ],
    note: "原提纲中的标准化 β 和四种变量进入方法均可在讲义中定位。另补残差的正负号和预测的适用范围。Q7 直接考回归能用已知分数预测另一变量的分数。",
    memory: "Ŷ = a + bX. Residual = observed − predicted. 截距是 X=0 的预测值；X 每增加一单位，预测值改变 b。多元回归解读一个系数时，固定其他预测变量。"
  },
  {
    week: 6,
    title: "Analysis of variance / 方差分析",
    items: [
      {
        en: "One-way ANOVA compares means across levels of one categorical factor. The lecture permits two or more independent groups. Three or more is the usual application, and an independent-samples t-test is common for exactly two groups.",
        zh: "单因素 ANOVA 比较一个分类因素下各组的总体均值。老师明确说两组也可做，通常用于三组及以上。只有两个独立组时常用独立样本 t 检验。",
        ref: "Week 6 pp. 2–5"
      },
      {
        en: "Check the design and outcome. Use a continuous interval/ratio outcome and independent observations. Look for extreme outliers, approximate normality within groups, and equal variances. The lecture names Shapiro–Wilk for normality and Levene's test for equal variances.",
        zh: "先确认因变量为连续的等距或等比测量、观察相互独立；再检查各组的极端异常值、组内近似正态和方差齐性。讲义列举 Shapiro–Wilk 检验正态性、Levene 检验方差齐性。",
        ref: "Week 6 pp. 4–8"
      },
      {
        en: "Two-way ANOVA has two categorical factors. Examine each main effect and their interaction. An interaction means the difference associated with one factor changes across levels of the other. Assess normality and variance within the combinations of factor levels.",
        zh: "双因素 ANOVA 有两个分类因素。分别看两个主效应和交互作用。交互作用表示一个因素对应的差异会随另一个因素的水平而变。检查正态性和方差时，要按两因素的水平组合分组。",
        ref: "Week 6 pp. 9–15"
      }
    ],
    note: "主要修正是组数门槛，并补上分类自变量与主效应。这里列的是讲义考点；这份 Revision 的十道题中没有直接的 ANOVA 题。",
    memory: "One-way ANOVA uses one factor. Two-way ANOVA tests two main effects and their interaction. 检查连续因变量、观测独立、组内近似正态、方差齐性及异常值。交互表示一个因素的差异随另一因素的水平而变。"
  }
];
