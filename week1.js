const week1Definitions = {};
function week1Lesson(id, zh, en, pages, definitions, pairs, bank) {
  week1Definitions[id] = definitions;
  lesson(1, id, zh, en, pages, id, pairs, bank);
}

week1Lesson("quantitative","定量分析与描述统计","Quantitative analysis and descriptive statistics","2–10",[
["定量分析","Quantitative analysis","用数值资料描述现象、比较组别或分析关系。讲义依次提出准备、分析、报告和讨论四个问题。","Use numerical data to describe patterns, compare groups or study relationships. The lecture follows four stages: prepare, analyse, report and discuss."],
["描述统计与推断统计","Descriptive and inferential statistics","描述统计概括已观察的数据。推断统计用样本证据回答总体问题。","Descriptive statistics summarize observed data. Inferential statistics use sample evidence to answer questions about a population."],
["相对位置","Relative standing","一个值相对于其他值的位置。百分位秩表示该值在分布中的百分比位置。z 分数以标准差为单位表示该值距均值多远。","A value's location relative to other values. Percentile rank expresses its percentage position in the distribution. A z-score expresses its distance from the mean in standard deviation units."]
],[
["课程大纲第 3 页列第 1–7 周为定量分析，第 8 周周五（2026 年 11 月 27 日）为期中考试，第 9–14 周为定性分析。期中假期为 11 月 30 日至 12 月 6 日。","The outline on page 3 lists quantitative analysis in Weeks 1–7, the midterm on Friday, 27 November 2026 (Week 8), and qualitative analysis in Weeks 9–14. The mid-semester break is from 30 November to 6 December."],
["第 4 页列出课程评分：小测 10%、作业 1 占 20%、作业 2 占 30%、期末考试 40%。学习台习题是自测。","Page 4 gives the course assessment weights: quiz 10%, Assignment 1 20%, Assignment 2 30% and final exam 40%. Dashboard exercises are for self-study."],
["实际操作时，先核对数据编码和缺失值，再按研究问题选择统计量或图表。报告时说明样本和结果，讨论时解释发现及其限制。讲义第 9 页把描述统计分成集中趋势、变异性、相对位置，第 10 页预览 t 检验、相关、回归、方差分析和卡方等方法。选法要结合量尺、设计和假设。","Check coding and missing values, then choose summaries or graphics for the research question. Report the sample and results, then discuss their meaning and limitations. Page 9 groups descriptions into centre, variability and relative standing. Page 10 previews t-tests, correlations, regression, ANOVA and chi-square methods. Method choice depends on scales, design and assumptions."]
],`
Which sequence reflects the quantitative workflow?|Prepare, analyse, report, discuss|Report, discuss, prepare, analyse|Analyse, report, prepare, discuss|Discuss, report, analyse, prepare
Which task summarizes observed data?|Report the median of the surveyed class|Estimate a mean for all students in the country|Test a hypothesis about a population|Predict next year's national results
Which task uses inference?|Use a sample to estimate the school population mean|List the recorded values|Count observations already entered|Display the sample median
Which statistic reports distance from a mean in standard deviation units?|A z-score|A frequency count|A sample size|A category label
Which statistic describes centre?|Median|Variance|Range|Standard deviation
Which statistic describes variability?|Standard deviation|Mode|Median|Percentile rank
What should guide the selection of an analysis?|The research question, data scales and study design|The desired result alone|The column order|The chart colour
What is the course weight of Assignment 2 on slide 4? Enter the percentage number only.|30|Assignment 2 is weighted at 30%.
A sample of 25 students is drawn from a school of 400. How many students are in the target school population?|400|The school has 400 students and the sample has 25.
What is the z-score for a value of 14 when the mean is 10 and the standard deviation is 2?|2|Subtract 10 from 14 and divide by 2.
`);

week1Lesson("data-types","数据类型","Data types","11–12",[
["类别数据","Categorical data","以类别记录观察值。即使采用数字编码，数字也可能只是标签。","Observations recorded as categories. A numeric code can serve simply as a label."],
["二分类数据","Dichotomous data","只有两个可能类别的数据，例如是与否。","Data with two possible categories, such as yes and no."],
["数值数据","Numerical data","记录有数量含义的值，例如人数、长度或时间。","Data with meaningful numerical quantities, such as counts, lengths or times."],
["离散与连续数据","Discrete and continuous data","离散数值只取可枚举的值，例如儿童人数。连续数值理论上可以取某个区间内的任何值，例如身高。","Discrete numerical data take countable values, such as the number of children. Continuous data can in principle take any value in an interval, such as height."]
],[
["按讲义流程，先问记录的是类别还是数量，再看类别有没有顺序、数值能否取区间中的任意值。只有两类的变量也可能有顺序，例如不合格与合格。","The lecture flow starts by asking whether entries describe categories or quantities. Then ask whether categories have order or whether a numerical value can vary throughout an interval. A two-category variable can also be ordered, as with fail and pass."],
["身高量到整厘米，记录值被四舍五入，原本测量的特征仍是连续的。以 1、2、3 编码犬种时，数字只标识类别。","Height rounded to whole centimetres is still a continuous characteristic. Codes 1, 2 and 3 for dog breeds are category labels."],
["离散或连续描述数值可取哪些值。等距或等比描述能怎样比较数值，两者要分别判断。例如人数是离散的，也是等比量。","Discrete or continuous describes what numerical values are possible. Interval or ratio describes how values can be compared. A count of people is both discrete and ratio-scaled."]
],`
Which variable is categorical?|Eye colour|Height in centimetres|Elapsed time|Number of children
Which variable is a discrete numerical quantity?|Number of children|Exact height|Elapsed time|Temperature measured continuously
Which variable is continuous in principle?|Length of a desk|Number of desks|Breed code|Pass or fail
What does dichotomous mean?|There are two possible categories|The numbers have equal gaps|Each value is a percentage|There are exactly two observations
What do numeric codes for unordered dog breeds represent?|Category labels|Lengths|A rank from lowest to highest|Equal steps of a measured quantity
What is a useful first question when classifying data?|Do the values represent categories or quantities?|Are the labels printed in colour?|Is the sample size even?|Does the dataset already have a graph?
Which characteristic remains continuous when recorded to the nearest centimetre?|Height|Student ID|Number of siblings|Eye colour
What is the number of possible categories for a dichotomous variable?|2|Dichotomous means two categories.
A column records exact elapsed time. Enter “discrete” or “continuous.”|continuous|Time can in principle take any value within an interval.
A column records how many books a pupil borrowed. Enter “discrete” or “continuous.”|discrete|A count takes whole-number values.
`);

week1Lesson("scales","四种测量尺度","Four scales of measurement","13–20",[
["名义尺度","Nominal scale","只区分类别。类别之间没有天然顺序，数字编码只作标签。","Distinguishes categories without an inherent order. Numerical codes are labels."],
["顺序尺度","Ordinal scale","类别有顺序，类别间距未必相等。","Orders categories without requiring equal gaps between them."],
["等距尺度","Interval scale","有顺序且同样的数值差代表同样的变化。零点按约定设置，原始数值的倍数比较没有固定意义。","Has ordered values with meaningful equal differences. Its zero point is conventional, so ratios of raw readings have no fixed meaning."],
["等比尺度","Ratio scale","具有相等间距和有意义的零点，原始数值之间可以作倍数比较。","Has equal intervals and a meaningful zero, so ratios of values are meaningful."]
],[
["第 20 页练习：身高是等比，眼睛颜色是名义，字母成绩是顺序。若记录的是同一份试卷的答对题数比例，0% 表示零题答对，可按等比理解；这不等于能力可以作倍数比较。","Tutorial on page 20: height is ratio, eye colour is nominal, and letter grades are ordinal. For the fraction of items answered correctly on the same test, 0% means no correct answers, so the observed percentage can be treated as ratio. That does not establish ratios of ability."],
["摄氏和华氏温度是等距。70 到 80 与 40 到 50 的差相等。讲义第 17 页的运算说明应区分差值与倍数：20°C 并不表示 10°C 的两倍热。第 18 页还列 IQ 和 SAT 分数作等距示例。","Celsius and Fahrenheit readings are interval-scaled. The gap from 70 to 80 is the same as the gap from 40 to 50. When reading page 17, distinguish differences from ratios: 20°C is not twice as hot as 10°C. Page 18 also gives IQ and SAT scores as interval examples."],
["电影名次和按昂贵程度排列的汽车名次是顺序，记录汽车实际价格则是等比。球衣号码和犬种是名义。讲义第 19 页还列收入、销售额、犯罪率作等比例子。","Movie ranks and car ranks by price are ordinal, while the actual prices are ratio. Jersey numbers and dog breeds are nominal. Page 19 also lists income, sales and crime rates as ratio examples."]
],`
What is the measurement scale for eye colour?|Nominal|Ordinal|Interval|Ratio
What is the measurement scale for letter grades A, B and C?|Ordinal|Nominal|Interval|Ratio
What is the measurement scale for height in centimetres?|Ratio|Nominal|Ordinal|Interval
What is the measurement scale for degrees Celsius?|Interval|Ratio|Nominal|Ordinal
What is the measurement scale for degrees Fahrenheit?|Interval|Ordinal|Nominal|Ratio
Why are ratios meaningful for height?|Height has equal intervals and a meaningful zero|Height has unordered categories|Height uses labels only|Height has an arbitrary zero
What is the scale for jersey numbers used as identifiers?|Nominal|Ordinal|Interval|Ratio
A critic records movie ranks from first to fiftieth. Name the scale in one word.|ordinal|Ranks have order, with no guaranteed equal gaps.
A car magazine records actual prices in the same currency. Name the scale in one word.|ratio|Equal price differences and ratios are meaningful.
A shelter records dog breeds. Name the scale in one word.|nominal|Breeds are unordered labels.
`);

week1Lesson("frequencies","频数表","Frequency tables","21–22, 43",[
["频数与总频数","Frequency and total frequency","频数是某个类别或数值出现的次数。类别互斥且覆盖全体时，各行频数之和就是总观测数。","A frequency is the count in a category or at a value. For mutually exclusive, exhaustive categories, the row counts sum to the number of observations."],
["相对频数","Relative frequency","某行频数除以适用的总观测数。乘以 100 就得到百分比。","A row count divided by its relevant total. Multiply by 100 to express it as a percentage."]
],[
["第 22 页频数表记录 18 岁 15 人、19 岁 6 人、20 岁 4 人，总计 25 人。19 岁的相对频数是 6 ÷ 25 = .24，即 24%。","The page 22 frequency table records 15 people aged 18, six aged 19 and four aged 20, for a total of 25. The relative frequency for age 19 is 6 ÷ 25 = .24, or 24%."],
["第 43 页活动中，男性有 120 人，女性有 80 人。四个年龄组 0–19、20–29、30–49、50–89 岁的男性列分别为 10%、10%、30%、50%，女性列为 20%、20%、30%、30%。每列都用本组人数作分母。","In the page 43 activity, there are 120 males and 80 females. Across ages 0–19, 20–29, 30–49 and 50–89, the male percentages are 10%, 10%, 30% and 50%, and the female percentages are 20%, 20%, 30% and 30%. Each column uses its own group total."],
["低于 20 岁的人数 = .10 × 120 + .20 × 80 = 28。至少 50 岁的比例 = (.50 × 120 + .30 × 80) ÷ 200 = 42%。至少 30 岁的男性 = (.30 + .50) × 120 = 96。","Under age 20: .10 × 120 + .20 × 80 = 28. At least age 50: (.50 × 120 + .30 × 80) ÷ 200 = 42%. Males aged at least 30: (.30 + .50) × 120 = 96."]
],`
What does a frequency count?|Observations in a category or at a value|Only the maximum|Only the mean|The average of the labels
What is the frequency for age 19 on page 22?|6|15|4|25
Which age is most frequent in the page 22 table?|18|19|20|All are tied
What is the relative frequency for age 19 when 6 of 25 people are 19?|0.24|0.06|0.25|0.60
In the age-by-gender table, what is the denominator for the male percentages?|120 males|80 females|200 people|One age group
What should you do before combining counts from percentages with different denominators?|Convert each percentage to a count using its own denominator|Average the percentages without weights|Add the percentages directly|Use only the larger percentage
Which calculation gives 20% of a group of 80?|0.20 × 80|80 ÷ 0.20|0.20 ÷ 80|20 × 80
Of 120 males and 80 females, 10% and 20% respectively are under 20. How many people are under 20?|28|There are 12 males and 16 females under age 20.
Of 120 males and 80 females, 50% and 30% respectively are at least 50. What percent of all 200 are at least 50? Enter the percentage number only.|42|60 + 24 = 84 and 84/200 = 0.42.
Of 120 males, 30% are aged 30–49 and 50% are aged 50–89. How many are at least 30?|96|0.80 × 120 = 96.
`);

week1Lesson("boxplot","箱线图","Box plots","23–24",[
["箱体与中位数","Box and median","箱体从第一四分位数 Q₁ 延伸到第三四分位数 Q₃，箱内线表示中位数。","The box spans the first to the third quartile. The line inside the box marks the median."],
["须与离群点","Whiskers and outliers","须的端点按绘图规则决定。第 23 页示意图用最小值和最大值。常见的 Tukey 箱线图把须伸到 1.5 × IQR 界限内最远的观测值，界限外的观测另画为点。","Whisker endpoints depend on the convention. Page 23 uses the minimum and maximum. In a common Tukey box plot, whiskers reach the most extreme observations within the 1.5 × IQR fences, with observations beyond those fences plotted separately."]
],[
["箱体的跨度是 IQR = Q₃ − Q₁，表示中间约 50% 数据的离散程度。比较不同组时，用箱内线比较中心，用箱体长度比较中间一半的离散程度。","The box width along the data axis is IQR = Q₃ − Q₁, the spread of the middle approximately 50%. Compare median lines for centre and box lengths for middle spread."],
["第 24 页比较四种教学方法。图中方法 4 的中位数最高，方法 3 的箱体最长，方法 2 在上须以外有单独标出的点。","Page 24 compares four teaching methods. Method 4 has the highest median, Method 3 has the longest box, and Method 2 has a separately marked point beyond its upper whisker."],
["例如 Q₁ = 12、Q₃ = 20，IQR = 8。按 1.5 × IQR 规则，上界是 20 + 1.5 × 8 = 32。须端落在界限内最远的实际观测值处。","If Q₁ = 12 and Q₃ = 20, the IQR is 8. Under the 1.5 × IQR rule, the upper fence is 20 + 1.5 × 8 = 32. The whisker ends at the furthest observed value inside the fence."]
],`
What does the line inside a standard box plot mark?|The median|The maximum|The sample size|The frequency
What are the boundaries of the box?|Q1 and Q3|Minimum and maximum|Mean and mode|Median and maximum
What does the box length measure along the value axis?|The interquartile range|The full range in all cases|The mean|The number of observations
Which group has the highest median in the page 24 illustration?|Method 4|Method 1|Method 2|Method 3
Which group has the longest box in that illustration?|Method 3|Method 4|Method 2|Method 1
What can a separate point beyond a Tukey whisker indicate?|A potential outlier|The median|The centre of a bin|A missing observation
What do the whiskers reach in the simple page 23 illustration?|The minimum and maximum|The first and third quartiles|The mean and median|Only the median
Calculate the IQR if Q1 = 12 and Q3 = 20.|8|Subtract 12 from 20.
Calculate the upper Tukey fence when Q3 = 20 and IQR = 8.|32|Add 1.5 × 8 to 20.
Calculate the lower Tukey fence when Q1 = 12 and IQR = 8.|0|Subtract 1.5 × 8 from 12.
`);

week1Lesson("histogram","直方图","Histograms","25–26",[
["直方图","Histogram","把数值按连续数轴上的区间分组，每个矩形对应一个区间。等宽分组的频数直方图用柱高表示区间内的频数。","Groups numerical values into intervals along a number line. For an equal-width frequency histogram, bar height is the count in the interval."],
["组距与频数密度","Bin width and frequency density","组距是区间的宽度。组距不同时，用频数除以组距作柱高，可以让柱面积表示频数。","Bin width is the size of an interval. When bins have unequal widths, use frequency divided by bin width as height so bar area represents frequency."]
],[
["第 25 页的月薪直方图显示多数观测集中在较低区间，较少观测延伸到高薪一侧，形成右长尾。","In the monthly salary histogram on page 25, most observations cluster toward lower intervals and fewer extend into high salary intervals, forming a long right tail."],
["第 26 页对照两种图。直方图的横轴是数值区间，相邻非空区间通常相接，频数为零的区间会留空。类别柱状图的横轴是类别，柱子通常分开。","Page 26 compares two displays. A histogram uses numerical intervals, with adjacent nonempty intervals touching and zero-count bins leaving gaps. A categorical bar chart uses category labels and usually separates its bars."],
["读图时先看区间边界和纵轴。若标为 [10,20)，区间包含 10 到小于 20 的值，20 计入下一个从 20 开始的区间。","Check the bin boundaries and vertical axis. A bin written [10,20) includes 10 and values below 20. The value 20 goes into the next interval starting at 20."]
],`
What is on the horizontal axis of a histogram?|Numerical intervals|Unordered categories only|P-values|Individual names
What does bar height represent in an equal-width frequency histogram?|Frequency in the bin|The median of all observations|The sample mean|The bin width
Which display suits a distribution of monthly salaries?|Histogram|An unordered bar chart of names|A t-test output only|A list of category codes
Which display is appropriate for comparing counts of unordered departments?|Categorical bar chart|Histogram of department labels|A rank correlation test|A box plot of department codes
Why do adjacent nonempty histogram bars usually touch?|The bins are adjacent numerical intervals|They represent the same value|All counts are equal|The values are always categories
Which side has the longer tail in the lecture salary histogram?|The right side|The left side|Both sides equally|Neither side has a tail
With unequal bin widths and height set to frequency density, what represents frequency?|Bar area|Bar width alone|The number of gaps|Bar height alone
For a bin [10,20), enter 1 if 20 belongs in that bin or 0 if it does not.|0|The upper bound is excluded.
Three bins have counts 6, 9 and 5. How many observations are shown?|20|Add 6 + 9 + 5.
A bin of width 5 contains 15 observations. Calculate its frequency density.|3|Divide frequency 15 by width 5.
`);

week1Lesson("stem-leaf","茎叶图","Stem-and-leaf plots","27",[
["茎与叶","Stem and leaf","把数值按位值拆成前部的茎与末尾的叶。每片叶代表一个观测值，重复值保留重复叶。","Split each value by place value into a leading stem and a final leaf. Each leaf represents one observation, including repeats."],
["图例","Key","说明茎与叶如何合并和还原单位。讲义图例的意思是茎 2 配叶 0 代表 20。","Explains how to combine stem and leaf and recover the units. In the lecture, stem 2 with leaf 0 means 20."]
],[
["先将数据从小到大排列，再确定拆分方式并写图例。把相同茎列在一行，叶按升序写在右侧。","Sort the data in ascending order, then choose the split and write a key. Use one row per stem and list its leaves in ascending order on the right."],
["讲义中茎 1 的叶为 3、6、6、7，对应 13、16、16、17。叶 6 出现两次表示有两个 16。","In the lecture, stem 1 has leaves 3, 6, 6 and 7, giving 13, 16, 16 and 17. Two leaves of 6 mean two observations equal 16."],
["图上每片叶对应一个原始数值，所以能读回个别观测。课堂图的茎 3 有五片叶，其中三片是 7。","Every leaf preserves an individual value, so the raw observations can be recovered. Stem 3 in the lecture has five leaves, three of which are 7."]
],`
What does one leaf represent?|One observation|One entire interval|The mean|The number of stems
Why does the plot need a key?|To explain how to reconstruct values from stems and leaves|To identify the sample mean|To state the alpha level|To report an outlier rule
What should you do with a repeated observation?|Write its leaf once per occurrence|Remove all repeats|Average the repeats with other leaves|Place it on a different stem
With stem 2 and leaf 0 meaning 20, what are the values for stem 1 and leaves 3, 6, 6, 7?|13, 16, 16, 17|3, 6, 6, 7|31, 61, 61, 71|1.3, 1.6, 1.6, 1.7
How are the leaves usually ordered within each row?|From smallest to largest|Alphabetically|Randomly|By the mean
What can you usually recover from a stem-and-leaf plot with a clear key?|Individual displayed values|The population size beyond the sample|The cause of the pattern|The units from the stem alone
Using the lecture key, which stem contains 38?|3|8|38|0
Using the lecture key, what number does stem 4 with leaf 1 represent?|41|Combine the tens digit 4 with the ones digit 1.
Using the lecture key, what is the leaf for 25?|5|The tens digit 2 is the stem and the ones digit 5 is the leaf.
Stem 3 has leaves 6, 7, 7, 7, 8. How many times does 37 occur under the lecture key?|3|There are three leaves of 7 on stem 3.
`);

week1Lesson("dotplot","点图","Dot plots","28",[
["堆叠点图","Stacked dot plot","用点展示观测值或类别频数。同一位置上的点堆叠，每个点代表一个观测单位。","Uses dots to display observations or category counts. Dots stack at a shared position, with each dot representing one observed unit."],
["点堆高度","Stack height","在每点代表一个单位的图里，某个位置上堆叠的点数就是该数值或类别的频数。","When each dot is one unit, the number of dots stacked at a position gives its count."]
],[
["第 28 页的横轴列出四个地区 A、B、C、D，分别有 7、3、5、1 个点。最高的是 A，最低的是 D。","Page 28 shows four colonies A, B, C and D with 7, 3, 5 and 1 dots respectively. A has the tallest stack and D the shortest."],
["四个地区的点加起来有 7 + 3 + 5 + 1 = 16 个，表示 16 名已接种的婴儿。图中没有列出各地区所有婴儿人数，因此只能比较人数，不能计算接种率。","The four stacks sum to 7 + 3 + 5 + 1 = 16 vaccinated babies. The chart does not show the total number of babies in each colony, so it supports a comparison of counts but cannot supply vaccination rates."],
["如果横轴换成数轴，点所在的横坐标就是观测值，可直接看出重复值、数据聚集的位置和空档。","On a numerical axis, each dot's horizontal position gives its observed value, revealing repeats, clusters and gaps."]
],`
What does one dot in the lecture chart represent?|One vaccinated baby|One colony|One percentage point|One group mean
Which colony has the most dots on page 28?|A|B|C|D
Which colony has the fewest dots on page 28?|D|A|B|C
How are repeated numerical observations represented in a stacked dot plot?|Stacked at the same horizontal position|Removed from the plot|Spread at random|Combined into a new mean
What does an empty position on a numerical stacked dot plot mean?|No displayed observation takes that value|The median equals that value|The frequency is unknown by definition|Every observation takes that value
What else is needed to calculate a vaccination rate for a colony?|The total number of babies in that colony|Only the tallest stack|The alphabetical position of the colony|The number of axes
What does a stack of five dots represent if each dot is one case?|Five cases at that position|The value five on the horizontal axis|A mean of five for the dataset|A 5% share in every dataset
Calculate the total count from colony stacks of 7, 3, 5 and 1 dots.|16|Add the four counts.
How many more dots does colony A with seven have than colony C with five?|2|Subtract five from seven.
For the numerical values 2, 2, 2, 4, 5, how many dots appear above 2?|3|The value 2 appears three times.
`);

week1Lesson("mode","众数","Mode","29–32, 42",[
["集中趋势","Central tendency","用一个统计量概括数据的中心或典型值。讲义介绍众数、中位数和均值三种。","A statistic that summarizes a central or typical value. The lecture covers mode, median and mean."],
["众数","Mode","出现次数最多的值或类别。并列最高的多个值都可以是众数。","The value or category with the highest frequency. Multiple values tied for highest frequency can be modes."]
],[
["名义类别可用众数概括。例如眼睛颜色中出现最多的一类就是众数。众数也能用于数字数据，但同一个众数可以出现在差异很大的数据集中。","The mode works for nominal data. For example, it identifies the most common eye colour. It also works for numerical data, but very different datasets can share a mode."],
["第 42 页家庭儿童数为 4、1、5、4、3、7、2、3、4、1。4 出现三次，比其他值都多，因此众数是 4。","The page 42 household counts are 4, 1, 5, 4, 3, 7, 2, 3, 4 and 1. Four appears three times, more often than any other value, so the mode is 4."],
["若问题是「最常见的家庭儿童数是多少」，众数直接给出确实观察到的整数 4。若问题是「每户平均几个孩子」，则用均值。","If the question is about the most common household count, the mode gives the observed integer 4. To answer the question about average children per household, use the mean."]
],`
What is the mode?|The most frequent value or category|The largest value|The average of the middle scores|The sum divided by the count
Which measure of centre works for unordered eye-colour categories?|Mode|Arithmetic mean|Numerical median|Midrange
Which values are modes in 2, 2, 3, 3, 5?|2 and 3|Only 2|Only 3|5
What can two very different datasets have in common?|The same mode|Every observation must match|Exactly the same mean by definition|Exactly the same range by definition
What makes 4 the mode of the lecture's household data?|It occurs more often than every other value|It is the largest value|It equals the sample size|It is the mean
When is a mode particularly useful for the household question?|When the goal is to identify the most common observed count|When the goal is to calculate total children|When all values must contribute to a mean|When the goal is to compare the two endpoints
Which category is modal if the counts for red, blue and green are 4, 7 and 3?|Blue|Red|Green|All are tied
Find the mode of 1, 3, 3, 3, 5, 8.|3|Three occurs most often.
How many times does the mode 4 occur in 4, 1, 5, 4, 3, 7, 2, 3, 4, 1?|3|Count the three entries equal to 4.
Find the mode of 2, 2, 6, 6, 6, 9.|6|Six appears three times and has the highest frequency.
`);

week1Lesson("median","中位数","Median","33–37",[
["中位数","Median","排序后的中心位置，也叫第 50 百分位。至少一半观测不大于中位数，至少一半不小于中位数。","The centre of the ordered values, also called the 50th percentile. At least half the observations are at or below it and at least half are at or above it."],
["中间位置","Middle position","奇数个观测用第 (N + 1) ÷ 2 个值。偶数个数值观测取中间两个值的平均。","For odd N, use the value in position (N + 1) ÷ 2. For an even number of numerical observations, average the two middle values."]
],[
["第 35 页例子有 11 个值。升序为 3、3、7、8、8、9、10、10、12、14、15，第 6 个值 9 是中位数。","Page 35 has 11 scores. In ascending order they are 3, 3, 7, 8, 8, 9, 10, 10, 12, 14 and 15. The sixth value, 9, is the median."],
["第 36 页例子升序为 12、16、18、19、24、42。第 3 和第 4 个值分别是 18 和 19，所以中位数为 18.5。","The page 36 values in ascending order are 12, 16, 18, 19, 24 and 42. The third and fourth are 18 and 19, giving a median of 18.5."],
["讲义建议偏态分布可用中位数概括中心。例如把 42 改成 100，只要中间两个数的位置和值没变，中位数还是 18.5。","The lecture recommends considering the median for skewed data. Replacing 42 by 100 leaves the median at 18.5 because the two middle positions and values stay the same."]
],`
What percentile is the median?|50th|25th|75th|100th
What must you do before finding the median by position?|Order the values|Remove repeated values|Square each value|Find the most frequent value first
Which position contains the median of 11 ordered observations?|Sixth|Fifth|Eleventh|Third
Which positions are used for a numerical median with six observations?|Third and fourth|First and sixth|Second and fifth|Fourth and fifth
What is often a useful centre for strongly skewed data?|Median|Maximum|Range|Standard deviation
What happens to the median of 12, 16, 18, 19, 24, 42 if 42 becomes 100?|It stays the same|It doubles|It increases by 58|It becomes 100
Can the numerical median be a value that does not appear in the dataset?|Yes, if the two middle values differ in an even-sized dataset|No, it is always an observed value|Only when the count is odd|Only when all observations are equal
Find the median of 10, 8, 14, 15, 7, 3, 3, 8, 12, 10, 9.|9|After sorting, the sixth value is 9.
Find the median of 24, 18, 19, 42, 16, 12.|18.5|Average the middle values 18 and 19.
Find the median of 9, 2, 3, 7.|5|The middle values in sorted order are 3 and 7.
`);

week1Lesson("mean","算术均值","Arithmetic mean","38–39",[
["算术均值","Arithmetic mean","把所有观测值相加，再除以观测数，即 Σx ÷ N。Σ 表示求和。","Add all observed values and divide by their count, Σx ÷ N. The symbol Σ means summation."],
["对极端值的敏感性","Sensitivity to extreme values","均值用到每一个数值。一个观测增加 d、观测数 N 不变时，均值增加 d ÷ N。","The mean uses every value. If one observation increases by d and the count N stays fixed, the mean increases by d ÷ N."]
],[
["第 38 页将 1、5、4、3、2 相加得到 15，除以 5 得均值 3。均值可以理解为把总量平均分给所有观测单位。","On page 38, 1, 5, 4, 3 and 2 sum to 15. Dividing by 5 gives a mean of 3. The mean is the value each case would have if the total were shared equally."],
["讲义优先把均值用于等距或等比数据，尤其是分布大致对称时。单个顺序类别的编码不能仅凭数字形式就当作等距值。","The lecture prioritizes the mean for interval or ratio data, especially when the distribution is roughly symmetric. Numeric codes for single ordinal categories do not by themselves establish equal intervals."],
["如果工资分布有很长的右尾，少数高薪会把均值往上拉。此时可同时报告中位数，让读者看到典型位置与整体平均的差异。","A few high salaries pull the mean upward when salaries have a long right tail. Reporting the median alongside it can show how the typical location differs from the overall average."]
],`
How do you compute the arithmetic mean?|Add all values and divide by the number of observations|Subtract the minimum from the maximum|Find the most frequent value|Average the two endpoints
What does Σx represent?|The sum of the observed values|The number of categories|The sample median|The largest value
Which measurement scales generally support arithmetic means?|Interval and ratio|Nominal only|Nominal and ordinal codes in every case|None
What usually happens to the mean when one very high value replaces a moderate value?|It increases|It decreases|It remains unchanged|It becomes equal to the mode
What does the arithmetic mean use?|Every observed value|Only the two central values|Only the highest frequency category|Only the endpoints
Which summary can complement the mean for heavily skewed salaries?|The median|A category code|A significance level|A row number
What is the sum of 1, 5, 4, 3 and 2?|15|5|10|20
Calculate the mean of 1, 5, 4, 3 and 2.|3|Divide the sum of 15 by the count of 5.
The mean of four values is 7. What is their sum?|28|Multiply the mean 7 by the count 4.
A dataset has five values. One value increases by 10 and the rest stay fixed. By how much does the mean increase?|2|The total rises by 10 and the denominator stays at 5.
`);

week1Lesson("centre-comparison","集中趋势比较与课堂活动","Comparing measures of centre","40–44",[
["对称与偏态","Symmetry and skew","对称分布的两侧以中心为镜像。正偏有右长尾，负偏有左长尾。","A symmetric distribution mirrors around its centre. A positively skewed distribution has a longer right tail and a negatively skewed one a longer left tail."],
["均值、中位数与众数的关系","Mean, median and mode","对称分布若均值存在，均值与中心处的中位数一致。理论正态分布的三者相等。常见右偏分布的均值会被右尾拉高，通常高于中位数。","In a symmetric distribution with a defined mean, the mean and the central median coincide. All three measures coincide in the theoretical normal distribution. A right tail commonly pulls the mean above the median."]
],[
["第 41 页活动数据为 5、6、2、4、7、8、3、5、6、6。和为 52，均值 5.2。排序后中间是 5 和 6，中位数 5.5。众数是 6，极差是 8 − 2 = 6。","Page 41 uses 5, 6, 2, 4, 7, 8, 3, 5, 6 and 6. The sum is 52, so the mean is 5.2. The two middle values are 5 and 6, giving a median of 5.5. The mode is 6 and the range is 8 − 2 = 6."],
["第 42 页家庭人数活动的总和是 34。均值为 3.4，中间的 3 与 4 给出中位数 3.5，众数是 4。三种中心量分别回答平均、居中、最常见三个问题。","The page 42 household counts sum to 34. The mean is 3.4, the middle values 3 and 4 give median 3.5, and the mode is 4. The summaries answer questions about the average, middle and most common count."],
["选法回顾：名义类别的典型值用众数，偏态数值的中心常用中位数，关注总量平均分配时用均值。描述数据时也可以搭配图表和离散指标。","Choose the mode for a typical nominal category, often the median for the centre of skewed numerical data, and the mean for an equal-share average. A plot and a measure of spread can accompany a summary of centre."]
],`
How do the mean, median and mode compare in a theoretical normal distribution?|All three are equal|Only mean and mode are equal|The mean is always above the median|The mode always exceeds both
What often happens in a right-skewed distribution?|The mean is pulled above the median|The mean is pulled below the median|The mode must equal the maximum|All three measures must coincide
Which summary directly identifies the most common household size?|Mode|Mean|Median|Range
Which summary is useful for equal-share allocation of a total?|Mean|Mode|Range|Maximum
What does the range in the page 41 activity measure?|The distance from the smallest to the largest value|The average score|The middle score|The most frequent score
What are the middle values in the ordered page 41 data 2, 3, 4, 5, 5, 6, 6, 6, 7, 8?|5 and 6|4 and 5|6 and 7|2 and 8
Which summary is usually least influenced by a single extreme salary that leaves the middle order unchanged?|Median|Mean|Range|Maximum
Calculate the mean of 5, 6, 2, 4, 7, 8, 3, 5, 6, 6.|5.2|The total is 52 and there are 10 observations.
Calculate the median of 4, 1, 5, 4, 3, 7, 2, 3, 4, 1.|3.5|The fifth and sixth values in ascending order are 3 and 4.
Find the range of 5, 6, 2, 4, 7, 8, 3, 5, 6, 6.|6|The largest is 8 and the smallest is 2.
`);
