const chapters = {1:[], 2:[], 3:[], 4:[], 5:[]};
const week2Definitions = {
  range: [
    ["分布","Distribution","数据值出现在哪里、各出现多少次的整体模式。","The pattern of which values occur and how often they occur."],
    ["离散程度（变异性）","Dispersion (variability)","一组数值彼此有多分散。相同的均值可以对应不同的离散程度。","How spread out the observations are. Groups with the same mean can have different spreads."],
    ["极差","Range","最大值与最小值之间的距离，记作 Xₗ − Xₛ。Xₗ 是最大值，Xₛ 是最小值。","The distance from the minimum to the maximum, Xₗ − Xₛ, where Xₗ is the largest and Xₛ the smallest score."],
    ["顺序数据","Ordinal data","类别有先后顺序，但相邻类别的间隔未必相等，例如低、中、高。","Categories have a meaningful order, but adjacent categories need not be equally spaced, as with low, medium and high."]
  ],
  quartile: [
    ["四分位数","Quartiles","将排序后的数据按位置划成四组的三个切点。Q₁ 是第 25 百分位，Q₂ 是中位数（第 50 百分位），Q₃ 是第 75 百分位。","Three cut points divide ordered data into four groups by rank. Q₁ is the 25th percentile, Q₂ the median (50th percentile), and Q₃ the 75th percentile."],
    ["四分位距（IQR）","Interquartile range (IQR)","Q₃ 与 Q₁ 的差，表示中间约一半数据横跨多宽。","The difference Q₃ − Q₁, measuring the width of the middle approximately 50% of the data."],
    ["半四分位距","Semi-interquartile range","四分位距的一半，即 (Q₃ − Q₁) ÷ 2，单位与原数据相同。","Half the IQR, (Q₃ − Q₁) ÷ 2, expressed in the original data units."]
  ],
  variance: [
    ["均值与离均差","Mean and deviation","均值等于所有数值之和除以个数。离均差等于单个观测值 x 减去均值，高于均值为正，低于均值为负。","The mean is the sum of all values divided by their count. A deviation is an observation x minus the mean. It is positive above the mean and negative below it."],
    ["总体方差 σ²","Population variance σ²","总体中所有平方离均差的平均值。μ 是总体均值，N 是总体观测数，Σ 表示求和。","The average squared deviation in the population. μ denotes the population mean, N the population size, and Σ summation."],
    ["样本方差 s²","Sample variance s²","用样本均值 x̄ 算平方离差和，再除以 n − 1，n 是样本观测数。一个离差由其余离差决定，因为它们的总和为零。","Divide the sum of squared deviations from the sample mean x̄ by n − 1, where n is the sample size. One deviation is determined by the others because they sum to zero."]
  ],
  sd: [
    ["标准差","Standard deviation","方差的非负平方根。总体标准差写作 σ，样本标准差写作 s，两者都用原数据的单位。","The nonnegative square root of variance. Use σ for a population and s for a sample. Both are expressed in the original measurement units."],
    ["标准差为零","Zero standard deviation","所有观测值都等于均值，所以每个离均差都为零。样本标准差的公式要求至少两个观测值。","Every observation equals the mean, so every deviation is zero. The sample standard deviation formula requires at least two observations."]
  ],
  skew: [
    ["偏度","Skewness","衡量分布左右不对称程度的无量纲指标。讲义采用标准化的三阶中心矩 g₁。","A unitless measure of left–right asymmetry. The lecture uses g₁, the standardized third central moment."],
    ["正偏与负偏","Positive and negative skew","右侧长尾通常对应正偏，左侧长尾通常对应负偏。方向按尾部判断。","A longer right tail usually indicates positive skew, and a longer left tail usually indicates negative skew. Read the direction from the tail."],
    ["中心矩 mₖ","Central moment mₖ","先将每个观测值减去均值，再取 k 次方并求平均。m₂ 对应平方离差平均值，m₃ 对应立方离差平均值。","Subtract the mean from each value, raise each deviation to power k, and average. m₂ averages squared deviations and m₃ averages cubed deviations."]
  ],
  kurtosis: [
    ["普通峰度 κ","Ordinary kurtosis κ","第四中心矩除以第二中心矩的平方，即 m₄/m₂²。它衡量标准化后尾部极端值对分布的影响。","The fourth central moment divided by the square of the second, m₄/m₂². It describes the influence of extreme tail values after standardization."],
    ["中峰态、高峰态、低峰态","Mesokurtic, leptokurtic and platykurtic","普通峰度等于 3 是中峰态，大于 3 是高峰态，小于 3 是低峰态。正态分布的普通峰度为 3。","Ordinary kurtosis of 3 is mesokurtic, above 3 is leptokurtic, and below 3 is platykurtic. A normal distribution has ordinary kurtosis 3."],
    ["超额峰度","Excess kurtosis","普通峰度减去 3。采用这个定义时，正态分布的基准值为 0。","Ordinary kurtosis minus 3. Under this convention, the normal benchmark is 0."]
  ],
  inference: [
    ["总体与样本","Population and sample","总体是研究问题所针对的全部对象，样本是实际抽取并观察的对象。","The population is the full group the research question concerns. The sample is the group selected and observed."],
    ["参数与统计量","Parameter and statistic","参数概括总体，例如总体均值 μ。统计量由样本数据算出，例如样本均值 x̄。","A parameter describes a population, such as its mean μ. A statistic is computed from sample data, such as the sample mean x̄."],
    ["描述统计","Descriptive statistics","整理、汇总并呈现实际观察到的数据，例如报告受访者的平均年龄。","Methods that organize, summarize and present observed data, such as reporting the average age of survey respondents."],
    ["推断统计","Inferential statistics","用样本证据估计总体参数、检验总体假设或作预测。结论依赖抽样方式和模型假设。","Methods that use sample evidence to estimate population parameters, test population claims or make predictions. Conclusions depend on sampling and model assumptions."]
  ],
  charts: [
    ["频数","Frequency","某个数值或类别出现的次数。相对频数是这个次数占全部观测的比例。","The number of times a value or category occurs. Relative frequency is that count divided by the total number of observations."],
    ["柱状图","Bar chart","用分开的柱比较不同类别。频数柱状图用柱高表示各类别的次数。","A display with separate bars for categories. In a frequency bar chart, bar height gives the count for each category."],
    ["点图","Dot plot","每个点对应一个观测，放在它的数值位置。相同数值的点可以叠在一起。","Each dot represents one observation and is placed at its value on a number line. Repeated values can be stacked."],
    ["SPSS 个案与变量","SPSS cases and variables","SPSS 是统计分析软件。在数据视图中，一行是一个个案（如一名学生），一列是一个变量（如考试分数）。","SPSS is statistical analysis software. In Data View, a row is a case, such as a student, and a column is a variable, such as an exam score."]
  ],
  variables: [
    ["变量","Variable","可以在对象、条件或时间之间取不同值的特征，例如实验材料或测量结果。","A characteristic that can take different values across cases, conditions or times, such as an experimental material or a measured outcome."],
    ["自变量（IV）","Independent variable (IV)","实验中由研究者操纵的因素，例如分给各组的颜料类型。","The factor the researcher manipulates in an experiment, such as the type of paint assigned to each group."],
    ["因变量（DV）","Dependent variable (DV)","为比较不同条件而测量的结果，例如每组颜料的干燥时间。","The measured outcome compared across conditions, such as the drying time of each paint."],
    ["控制变量","Controlled variable","各实验条件中刻意保持一致的因素，例如室温，以减少它对结果比较的影响。","A factor deliberately held constant across experimental conditions, such as room temperature, to reduce its influence on the comparison."]
  ]
};

function lesson(week, id, zh, en, pages, chart, pairs, bank) {
  const questions = bank.trim().split("\n").map((line, index) => {
    const [prompt, answer, a, b, c] = line.trim().split("|");
    const options = c ? [answer, a, b, c] : null;
    return { id: id + "-" + (index+1), prompt, answer, options, explanation: options ? null : a };
  });
  chapters[week].push({id,zh,en,pages,chart,pairs,questions});
}

lesson(2,"range","离散程度与极差","Dispersion and range","2–4","range",[
["比较 4、5、6 与 1、5、9：两组均值都是 5，第二组的数值离 5 更远，极差也更大。","Compare 4, 5, 6 with 1, 5, 9. Both groups have mean 5, but the second group extends farther from 5 and has a larger range."],
["极差 = 最大值 − 最小值。讲义示例 4、8、1、6、6、2、9、3、6、9 中，极差是 9 − 1 = 8。","Range = maximum − minimum. For the lecture scores 4, 8, 1, 6, 6, 2, 9, 3, 6, 9, the range is 9 − 1 = 8."],
["极差只依赖两个端点，适合快速沟通。1、1、1、1、9 和 1、3、5、7、9 的极差相同，内部结构却不同。对纯顺序类别可报告最低和最高类别，只有数值差有意义时才相减。","The range depends only on the two endpoints and gives a quick summary. The sets 1, 1, 1, 1, 9 and 1, 3, 5, 7, 9 have the same range despite different interiors. For purely ordinal categories, report the lowest and highest levels unless subtraction is meaningful."]
],`
What is the range of 4, 8, 1, 6, 6, 2, 9, 3, 6, 9?|8|9|10|5
Which two values determine the range?|The minimum and maximum|The mean and median|The first and third quartiles|The two most frequent values
Which set has the larger range?|1, 5, 9|3, 5, 7|4, 5, 6|5, 5, 5
Which change leaves the range of 1, 3, 5, 7, 9 unchanged?|Replace 5 by 6|Replace 9 by 10|Replace 1 by 0|Remove 9
What do 1, 1, 1, 1, 9 and 1, 3, 5, 7, 9 illustrate?|Equal ranges can hide different distributions|Equal ranges imply equal means|Range measures central location|Repeated scores increase range
Which group has no dispersion?|7, 7, 7|1, 7, 13|6, 7, 8|7, 7, 8
What happens to the range if every score increases by 5?|It stays the same|It increases by 5|It decreases by 5|It becomes zero
Calculate the range of −6, −1, 4, and 7. Enter one number.|13|Subtract the minimum −6 from the maximum 7.
The scores 3, 5, and 9 gain a new score of 20. Calculate the new range.|17|The new endpoints are 3 and 20, so 20 − 3 = 17.
Group A runs from 5 to 11 and Group B from 8 to 10. By how many units is A's range larger?|4|A has range 6 and B has range 2. The difference is 4.
`);

lesson(2,"quartile","四分位距与半四分位距","Interquartile and semi-interquartile range","5–7","quartile",[
["四组的观测数量大致相同，各组在数轴上的跨度可以不同。由原始数据计算四分位数时，要说明所用算法，因为软件约定可能不同。","The four groups contain roughly equal numbers of observations and can occupy different widths on the number line. State the convention when computing quartiles from raw data, because software methods can differ."],
["讲义图中 Q₁ = 4.5、Q₃ = 8，所以 IQR = 8 − 4.5 = 3.5，半四分位距 = 3.5 ÷ 2 = 1.75。","The lecture figure gives Q₁ = 4.5 and Q₃ = 8, so IQR = 8 − 4.5 = 3.5 and the semi-IQR = 3.5 ÷ 2 = 1.75."],
["极差关注全体端点，IQR 关注中间一半。只改变极端值且不改变 Q₁ 和 Q₃ 时，IQR 保持不变。","The range uses the outer endpoints, while the IQR uses the middle half. Changing an extreme value leaves the IQR unchanged if Q₁ and Q₃ stay fixed."]
],`
Which quartile is the median?|Q2|Q1|Q3|The maximum
Which expression gives the IQR?|Q3 − Q1|Q2 − Q1|Q3 − Q2|Maximum − minimum
Which portion of the distribution does the IQR span?|The middle approximately 50%|The highest 25%|The lowest 25%|All scores
What is the semi-IQR when the IQR equals 10?|5|10|20|2.5
Which percentile corresponds to Q3?|75th|25th|50th|100th
A maximum changes but Q1 and Q3 do not. What happens to the IQR?|It stays the same|It doubles|It increases with the maximum|It becomes zero
What should you state when quartiles are calculated from raw scores?|The quartile convention|Only the sample maximum|Only the sample mean|The significance level
Calculate the IQR for Q1 = 4.5 and Q3 = 8.|3.5|Subtract 4.5 from 8.
Calculate the semi-IQR for Q1 = 4.5 and Q3 = 8.|1.75|The IQR is 3.5. Divide by 2.
The semi-IQR is 3 and Q1 is 4. Calculate Q3.|10|IQR = 2 × 3 = 6, so Q3 = 4 + 6.
`);

lesson(2,"variance","总体方差与样本方差","Population and sample variance","7–16","variance",[
["先求均值，再用每个观测值减去均值，得到带符号的离均差。将离均差平方后求和，避免正负抵消。方差越大，表示平方离差的平均量越大。","Find the mean and subtract it from each score to get signed deviations. Square the deviations before adding them so positive and negative deviations do not cancel. A larger variance means larger squared deviations on average."],
["总体方差 σ² = Σ(x − μ)² / N，也等于 [Σx² − (Σx)²/N] / N。估计总体方差时，样本方差 s² = Σ(x − x̄)² / (n − 1)。","Population variance σ² = Σ(x − μ)² / N. The equivalent computational formula is [Σx² − (Σx)²/N] / N. To estimate population variance from a sample, use s² = Σ(x − x̄)² / (n − 1)."],
["讲义的 9、8、6、5、8、6 均值为 7，Σx = 42，Σx² = 306，平方离差和为 12。视作总体时 σ² = 12/6 = 2，视作样本时 s² = 12/5 = 2.4。","The lecture scores 9, 8, 6, 5, 8, 6 have mean 7, Σx = 42, Σx² = 306 and a squared-deviation sum of 12. Treated as a population, σ² = 12/6 = 2. Treated as a sample, s² = 12/5 = 2.4."]
],`
What is a deviation from the mean?|A score minus the mean|A score divided by the mean|A score minus the median|The maximum minus a score
Why are deviations squared before summing them?|To avoid cancellation of positive and negative deviations|To restore the original measurement unit|To find the median|To make the total zero
What is the denominator for population variance?|N|N − 1|The mean|The range
What is the denominator for the usual sample variance?|n − 1|n|n + 1|The sample mean
What units are used for variance if measurements are in metres?|Square metres|Metres|Cubic metres|No units
For scores 9, 8, 6, 5, 8, 6, what is the signed deviation of 5 from the mean?|−2|2|4|−4
What is the sum of the signed deviations from the arithmetic mean?|Zero|The variance|The range|The sample size
Calculate the population variance of 9, 8, 6, 5, 8, 6.|2|The squared deviations sum to 12. Divide by 6.
Calculate the sample variance of 9, 8, 6, 5, 8, 6.|2.4|Divide the squared-deviation sum of 12 by 6 − 1.
Calculate the population variance of 2, 4, 6.|2.667|The mean is 4. The squared deviations sum to 8, so variance is 8/3. Round to three decimals.
`.replace("Calculate the population variance of 2, 4, 6.","Calculate the population variance of 2, 4, 6. Round to three decimals."));

lesson(2,"sd","标准差","Standard deviation","10–19","sd",[
["若原数据单位是磅，方差的单位是磅²，标准差仍是磅。例如总体方差为 9 磅²，则总体标准差为 3 磅。","With measurements in pounds, variance is in pounds squared and standard deviation is in pounds. For example, a population variance of 9 pounds squared gives a population standard deviation of 3 pounds."],
["标准差可以帮助理解数据距均值的典型距离，但它的计算基于平方离差。讲义三组示例 s = 1.02、1.67、4.01，由紧密到分散。","Standard deviation gives a sense of a typical distance from the mean and is computed using squared deviations. The lecture examples s = 1.02, 1.67 and 4.01 illustrate increasingly dispersed scores."],
["讲义中的 s² = 507.2，开平方后 s ≈ 22.5。识别总体或样本后，再决定公式分母。","The lecture example gives s² = 507.2 and s ≈ 22.5 after taking the square root. Identify the population or sample before choosing the denominator."]
],`
How is standard deviation obtained from variance?|Take its nonnegative square root|Square it|Divide it by the mean|Subtract it from the range
What units does standard deviation use?|The original measurement units|Squared measurement units|Cubic measurement units|Percent in all cases
Which lecture group is the most dispersed according to s?|s = 4.01|s = 1.67|s = 1.02|All have the same spread
Which group is the tightest according to s?|s = 1.02|s = 1.67|s = 4.01|All have the same spread
When is standard deviation zero?|When all scores are identical|When the mean is zero|When the sample size is even|When the median is zero
What happens to s if 100 is added to every score?|It is unchanged|It increases by 100|It doubles|It becomes zero
What happens to s if every score is multiplied by 3?|It triples|It is unchanged|It is multiplied by 9|It decreases by 3
Calculate s if the sample variance is 36.|6|Take the nonnegative square root of 36.
Calculate the variance if the standard deviation is 1.5.|2.25|Square the standard deviation.
Calculate s for a sample of two scores, 2 and 4. Round to two decimals.|1.41|The mean is 3 and the squared-deviation sum is 2. Divide by 1 and take the square root.
`);

lesson(2,"skew","偏度","Skewness","19–22","skew",[
["例如 2、3、3、4、12 中，多数数值集中在低端，12 把尾部拉向高端，这是右偏。","In 2, 3, 3, 4, 12, most values cluster at the low end and 12 extends the tail to the high end. This is right skew."],
["讲义采用矩偏度 g₁ = m₃ / m₂^(3/2)，其中 mₖ = Σ(x − x̄)ᵏ/n。三次方保留正负号，偏度没有单位。|g₁| 越大，表示该指标衡量的不对称越明显。","The lecture uses moment skewness g₁ = m₃ / m₂^(3/2), where mₖ = Σ(x − x̄)ᵏ/n. Cubing preserves signs, and skewness is unitless. A larger absolute g₁ indicates greater asymmetry as measured by this coefficient."],
["校读讲义第 22 页：对称分布若三阶矩存在，偏度为零；反过来，零偏度单独不足以证明对称。结合分布图判断。","Reading note for page 22: a symmetric distribution has zero skewness when its third moment exists. A zero coefficient alone is insufficient to establish symmetry. Inspect the distribution plot as well."]
],`
A distribution has a long right tail. What is the usual sign of its skewness?|Positive|Negative|Zero by definition|Always undefined
Which tail is longer in a negatively skewed distribution?|The left tail|The right tail|Both are equal|Neither tail exists
What does skewness primarily describe?|Asymmetry|Sample size|The measurement unit|The mean
Which power of deviations appears in the numerator of moment skewness?|Third|First|Second|Fourth
What does an exactly symmetric distribution with a finite third moment and positive variance have?|Zero moment skewness|Positive skewness|Negative skewness|Infinite skewness
Can a zero skewness coefficient alone establish symmetry?|No|Yes, always|Only if the mean is positive|Only if the sample size is odd
Which group is more skewed according to the coefficient magnitude?|g1 = −1.2|g1 = 0.2|g1 = 0|g1 = 0.4
If m3 = 16 and m2 = 4, calculate g1.|2|4 raised to 3/2 equals 8. Then 16/8 = 2.
If m3 = −27 and m2 = 9, calculate g1.|-1|9 raised to 3/2 equals 27. Then −27/27 = −1.
A plot has most observations at high scores with a long tail toward low scores. State the skew direction in one word.|negative/left|The tail extends left, so the distribution is negatively skewed.
`);

lesson(2,"kurtosis","峰度","Kurtosis","22–25","kurtosis",[
["四次方会放大极端偏差。例如标准化离差从 1 增到 2，其四次方从 1 增到 16。","The fourth power magnifies extreme deviations. For example, when a standardized deviation rises from 1 to 2, its fourth power rises from 1 to 16."],
["普通峰度为 4.2 时，超额峰度为 1.2。两种数值都表示相对于正态基准的高峰态。读软件结果时先确认使用哪种定义。","An ordinary kurtosis of 4.2 corresponds to an excess kurtosis of 1.2. Both indicate a leptokurtic distribution relative to the normal benchmark. Check which convention the software uses."],
["普通峰度等于 3 只表示该指标和正态分布相同。方差、偏度与峰度分别反映分布的离散程度、不对称和尾部极端程度。","Ordinary kurtosis of 3 matches the normal distribution on this measure alone. Variance, skewness and kurtosis describe spread, asymmetry and tail extremity, respectively."]
],`
What is ordinary kurtosis for a normal distribution?|3|0|1|−3
Which term describes ordinary kurtosis above 3?|Leptokurtic|Platykurtic|Mesokurtic|Left-skewed
Which term describes ordinary kurtosis below 3?|Platykurtic|Mesokurtic|Leptokurtic|Right-skewed
Which central moment forms the numerator of ordinary kurtosis?|The fourth|The third|The second|The first
What is excess kurtosis for a normal distribution?|0|3|1|−3
Which feature is especially influential in kurtosis?|Extreme deviations|The sign of the mean|The number of quartiles|The scale unit
Does ordinary kurtosis equal to 3 establish normality by itself?|No|Yes|Only when measured in kilograms|Only for odd sample sizes
Ordinary kurtosis is 5.4. Calculate excess kurtosis.|2.4|Excess kurtosis is 5.4 − 3.
Excess kurtosis is −1.2. Calculate ordinary kurtosis.|1.8|Add 3 to excess kurtosis.
If m4 = 80 and m2 = 4, calculate ordinary kurtosis.|5|Divide 80 by 4 squared.
`);

lesson(2,"inference","描述统计与推断统计","Descriptive and inferential statistics","26–29","inference",[
["描述同一组成绩时，均值概括中心，标准差概括离散，柱状图和点图帮助读者看出数据的分布。","For a set of scores, the mean summarizes centre and the standard deviation summarizes spread. Bar charts and dot plots can help readers see the distribution."],
["推断问题还可以关注变量之间的关系。例如测量样本学生的复习时长和成绩，用样本证据研究两者在总体中的关联。","An inference can also address a relationship between variables. For example, measure study time and grades in a sample to investigate their association in the population."],
["例如记录 60 名学生并计算其均分是描述统计。利用这 60 人估计全校均分是推断统计，推广是否可信取决于抽样设计和假设。","Computing the mean for 60 observed students is descriptive. Using those students to estimate the school-wide mean is inferential. The sampling design and assumptions matter for generalization."]
],`
Which task is descriptive?|Summarize the observed class scores|Estimate a population mean from a sample|Test a population hypothesis|Generalize a survey to all students
Which task is inferential?|Estimate the university mean from sampled students|List the sampled scores|Plot the observed scores|Report the sampled maximum
What is the population?|The full group of interest|Only the measured cases|The sample mean|The smallest subgroup
What is a sample?|The observed subset of the population|Every member of the population by definition|A test statistic|A data chart
Which factor is important for generalizing a sample?|How the sample was selected|The colour of a chart|The order of data entry|The label on the y-axis
Which task typically involves statistical inference?|Testing whether population means differ|Sorting observed scores|Finding the minimum observed value|Labelling a chart axis
Which summary alone describes the observed data?|The observed sample median is 68|All future students will score 68|The population mean is estimated at 68|The treatment changes the population mean
Report the branch of statistics used to summarize a dataset in a table. Enter one word.|descriptive|The table summarizes observed data.
Name the branch used to generalize a sample estimate to a population. Enter one word.|inferential|Population generalization is an inferential task.
A survey measures 80 pupils to estimate the school average. What is the measured group called? Enter one word.|sample|The 80 measured pupils form the sample.
`);

lesson(2,"charts","柱状图与点图","Bar charts and dot plots","29–31","charts",[
["读左图时先找类别标签，再比较柱高。B 的柱最高，因此按图中所表示的量，B 最大。","Read the category labels on the left, then compare the heights. B has the tallest bar, so it has the largest value on the displayed measure."],
["读右图时，4 上方叠有三个点，表示三个观测值等于 4。3 上方没有点，表示没有观测值等于 3。","On the right, three stacked dots above 4 mean that three observations equal 4. There is no dot above 3, so no observation equals 3."],
["SPSS 学习目标练习：在数据视图中每行放一个观测单位，每列放一个变量。类别频数可通过 Frequencies 汇总，也可在 Chart Builder 按变量测量尺度选择图表。下图按讲义图形主题重绘。","SPSS practice for the lecture objective: enter one observational unit per row and one variable per column. Use Frequencies for category counts or select a chart appropriate to the measurement scale in Chart Builder. The figure redraws the chart types introduced in the lecture."]
],`
Which display suits counts of students by programme?|A bar chart|A paired t-test|A variance formula|A Pearson coefficient
In a frequency bar chart, what does a bar's height show?|The count in the category|The category name|The sample mean|The median score
In a standard stacked dot plot, what does each dot represent?|One observation|One quartile|An entire group|A significance level
How are repeated numerical values shown in a stacked dot plot?|Dots stack at the same value|Dots are removed|A new scale is added|The values are averaged
Which display directly shows individual positions along a number line?|A dot plot|A categorical frequency bar chart|A contingency table only|A pie chart
What should a frequency axis identify?|The count or proportion displayed|Only the software version|Only the sample mean|The independent variable in every study
How is a typical rectangular SPSS dataset organized?|Cases in rows and variables in columns|Cases in columns and variables in rows|Only one value in each file|A separate file for every case
A dot plot shows two dots at 3 and three at 5. How many observations are shown?|5|Add the dot counts, 2 + 3.
Three bars show counts of 7, 4 and 9. Calculate the total count.|20|Add 7 + 4 + 9.
How many dots should be stacked at 4 for the data 1, 4, 4, 4, 6?|3|The value 4 occurs three times.
`);

lesson(2,"variables","自变量、因变量与控制变量","Independent, dependent and controlled variables","31–44","variables",[
["同一个特征在不同实验中可以扮演不同角色。纸张类型在比较颜料时可以保持一致；如果研究问题改成纸张如何影响干燥时间，纸张类型就可以成为自变量。","The same characteristic can play different roles in different experiments. Paper type can be held constant when comparing paints. In a study of how paper affects drying time, paper type can become the independent variable."],
["练习示例：比较两种颜料的干燥速度。颜料类型是 IV，干燥时间是 DV，室温、纸张、颜料涂层厚度保持一致。判断角色时先问改什么、量什么、固定什么。","Practice example: compare drying times for two paints. Paint type is the IV, drying time is the DV, and room temperature, paper and paint-layer thickness are held constant. Ask what changes, what is measured and what is fixed."],
["讲义第 35–44 页的练习和总结主要以无法恢复的嵌入图片呈现。这里用同类型新例子练习变量识别。","The exercise and summary images on pages 35–44 are unavailable in the supplied file. This section uses a new example to practise the same variable classifications."]
],`
In a paint experiment, paint type is changed. What is its role?|Independent variable|Dependent variable|Controlled variable|Population parameter
In the paint experiment, drying time is measured. What is its role?|Dependent variable|Independent variable|Controlled variable|Sampling frame
Room temperature is held constant. What is its role?|Controlled variable|Dependent variable|Independent variable|Outcome distribution
What makes a characteristic a variable?|It can take different values|It must be measured in metres|It is always fixed in every study|It is always a sample mean
A researcher changes light intensity and measures plant height. Which variable is manipulated?|Light intensity|Plant height|The mean of plant height|The sample size
In the same study, every plant gets the same amount of water. Why?|To hold water amount constant across conditions|To make water amount the outcome|To change light intensity|To guarantee equal plant height
A study compares two teaching methods and measures exam marks. Which variable is the outcome?|Exam marks|Teaching method|Classroom temperature if fixed|Group label alone
Different brush sizes are tested and line width is measured. Name the dependent variable in two words.|line width|Line width is the measured result.
Study time is varied to measure recall. State the role of study time in two words.|independent variable|The researcher varies study time.
In a paper test, the same pen is used in all conditions. State the role of pen type in two words.|controlled variable/control variable|Pen type is held constant across conditions.
`);

lesson(3,"hypothesis","统计假设","Statistical hypotheses","3–8","hypothesis",[
["研究假设提出想了解的现象，统计假设把它转化为关于总体参数、可以用样本检验的命题。先写原假设 H₀ 和备择假设 H₁（也写作 Hₐ），再设定显著性水平。","A research hypothesis poses a substantive claim. Statistical hypotheses express it in terms of population parameters and are evaluated with sample data. State H₀ and H₁ (also Hₐ) and set the significance level."],
["讲义的药物案例：H₀ 认为无处理效应，H₁ 认为有处理效应。比较两组均值时，写作 H₀: μ₁ − μ₂ = 0，双侧 H₁: μ₁ − μ₂ ≠ 0。","The lecture drug example compares no treatment effect under H₀ with a treatment effect under H₁. For two means, write H₀: μ₁ − μ₂ = 0 and the two-sided H₁: μ₁ − μ₂ ≠ 0."],
["在 H₀ 和模型假设下求检验统计量的参考分布，再用样本判断证据是否足以拒绝 H₀。","Use H₀ and the model assumptions to obtain the reference distribution of the test statistic. Then assess whether the sample provides enough evidence to reject H₀."]
],`
What does a statistical hypothesis concern?|A population parameter|Only the observed sample mean|The order of the data rows|The name of the researcher
What evidence is used to test a population hypothesis?|Sample data|The population parameter by definition|A chart title|The desired conclusion
For a two-sided comparison of means, which is the usual null?|The population means are equal|The sample means must be identical|The population means differ|The first sample mean is larger
What is the alternative to H0: μ1 − μ2 = 0 when the question asks whether means differ?|μ1 − μ2 ≠ 0|μ1 − μ2 = 0|x̄1 − x̄2 = 0|The sample sizes differ
In the lecture drug example, what does H0 state?|The drug has no treatment effect|The drug always improves health|The drug has some effect|The experiment has no subjects
Which symbol also denotes the alternative hypothesis?|Ha|H0|α|β
When should a significance level be specified?|Before inspecting the test result|Only after finding a small p-value|After choosing the desired result|Only after rejecting H0
Under a null of equal population means, what is the hypothesized difference? Enter one number.|0|Equal population means have a difference of zero.
A study tests whether the mean equals 20. What number appears on the right-hand side of H0: μ = ?|20|The specified population mean under H0 is 20.
How many directions are considered when the alternative says the mean differs from 20? Enter one number.|2|Both values below 20 and above 20 are alternatives.
`);

lesson(3,"alpha","显著性水平与 p 值","Significance level and p-value","9–13","alpha",[
["α 是预先选定的显著性水平，例如 0.05 或 0.01。匹配的双侧检验与置信区间通常使用置信水平 1 − α，例如 95% 对应 α = 0.05。","Alpha is the prespecified significance level, often .05 or .01. A matching two-sided test and confidence interval use confidence level 1 − α, so 95% corresponds to α = .05."],
["校读第 11 页：p 值是在 H₀ 及检验模型成立的条件下，得到至少与观察值一样极端的检验统计量的概率。双侧 t 检验计算两侧尾部面积。α 控制长期第一类错误率。","Reading note for page 11: under H₀ and the test model, the p-value is the probability of a statistic at least as extreme as the one observed. A two-sided t-test uses both tails. Alpha controls the long-run Type I error rate."],
["决策规则：p ≤ α 则拒绝 H₀；p > α 则未能拒绝 H₀。未能拒绝表示证据不足，不能证明 H₀ 成立。显著性也不能单独反映效应大小。SPSS 的 .000 是舍入显示，写作 p < .001。","Decision rule: reject H₀ when p ≤ α and fail to reject it when p > α. Failure to reject indicates insufficient evidence against H₀. Significance alone does not quantify effect size. Report SPSS's rounded display of .000 as p < .001."]
],`
What does alpha control under the null model?|The long-run Type I error rate|The observed effect size|The chance the null is true|The probability of a Type II error
What is the p-value computed under?|The null hypothesis and test model|The assumption that the alternative is certain|The observed effect being practically important|The hypothesis being selected after the test
In a two-sided t-test, which areas give the p-value?|Both tails beyond the observed absolute t|Only the right tail|The area between −t and t|The full area under the curve
At α = .05, what is the decision for p = .04?|Reject H0|Fail to reject H0|Prove H0|Change alpha to .01
At α = .01, what is the decision for p = .04?|Fail to reject H0|Reject H0|Prove equal means|Report p = .01
What does failure to reject H0 mean?|Evidence against H0 is insufficient at the chosen level|H0 has been proved|The groups are practically equivalent|A Type II error is known to have occurred
How should an SPSS p-value display of .000 be reported?|p < .001|p = 0 exactly|p > .05|p = .05
What alpha corresponds to a 90% confidence level? Enter a decimal.|0.10|1 − .90 = .10.
At α = .05, p = .05 exactly. Enter “reject” or “fail to reject” using the course decision rule.|reject|The course rule rejects when p is less than or equal to alpha.
Convert α = .01 to the matching confidence level. Enter the number as a percentage without the percent sign.|99|100 × (1 − .01) = 99.
`);

lesson(3,"errors","第一类错误、第二类错误与功效","Type I error, Type II error and power","14–18","errors",[
["第一类错误是假阳性：H₀ 实际为真，却被拒绝。比如药物实际无效，检验却显示有作用。显著性水平 α 控制这一类错误的长期概率。","A Type I error is a false positive: reject a true H₀. For example, conclude that an ineffective drug has an effect. The significance level α controls the long-run probability of this error."],
["第二类错误是假阴性：H₀ 实际为假，却未能拒绝。比如药物确有作用，但检验没有发现。给定某个真实效应时，此错误概率为 β。","A Type II error is a false negative: fail to reject a false H₀. For example, fail to detect an effect of an effective drug. Its probability β is defined for a specified true effect."],
["功效 = 1 − β，是在指定备择情形下正确拒绝 H₀ 的概率。对照图表时先看 H₀ 的真实状态，再看研究者的决策。","Power = 1 − β, the probability of correctly rejecting H₀ under a specified alternative. Read the true state first and the decision second in the table."]
],`
Which outcome is a Type I error?|Reject a true H0|Fail to reject a false H0|Reject a false H0|Fail to reject a true H0
Which outcome is a Type II error?|Fail to reject a false H0|Reject a true H0|Reject a false H0|Fail to reject a true H0
An ineffective drug is declared effective. What happened?|A false positive|A false negative|Correct rejection|A correctly detected effect
An effective drug's effect is missed. What happened?|A false negative|A false positive|A correctly detected effect|A Type I error
What is statistical power?|The probability of rejecting H0 under a specified true alternative|The probability of rejecting a true H0|The chance the observed sample is representative|The probability that the null is true
Which symbol denotes Type II error probability?|β|α|p|r
Which outcome is correct when H0 is false?|Reject H0|Fail to reject H0|Declare a false positive|Increase alpha after the test
If β = .20, calculate power as a decimal.|0.8|1 − .20 = .80.
If power is .90, calculate β as a decimal.|0.1|1 − .90 = .10.
A false H0 is retained in the sense of failing to reject it. Enter the error type as 1 or 2.|2|Failure to reject a false null is a Type II error.
`);

lesson(3,"one","单样本 t 检验","One-sample t-test","19–26","one",[
["检验一个未知总体均值是否等于指定值 μ₀，例如胆固醇均值是否等于目标 200，或能量棒平均蛋白质含量是否等于 20 g。要求独立随机的连续观测；小样本时特别关注总体正态性。正态性难以支持时考虑适合研究目标的替代方法。","Test whether one unknown population mean equals a fixed value μ₀, such as a cholesterol target of 200 or a protein label of 20 g. Use independent random continuous observations and check normality especially for small samples. Consider a suitable alternative if normality is doubtful."],
["t = (x̄ − μ₀)/(s/√n)，df = n − 1。未知总体标准差时用样本 s。双侧检验可把 |t| 与 t 表临界值比较，或将双侧 p 与 α 比较。","Compute t = (x̄ − μ₀)/(s/√n) with df = n − 1. Use the sample standard deviation s when the population standard deviation is unknown. For a two-sided test, compare |t| with the t-table cutoff or compare the two-sided p-value with α."],
["活动 1：抽取 31 根能量棒。SPSS 中选 One-Sample T Test，指定 Protein 与 Test Value = 20。讲义输出 x̄ = 21.4、SE = .45650、t = 3.067、df = 30、p = .005，均值差 1.4 g，95% 区间 [.4677, 2.3323]。在 α = .05 下拒绝 H₀。","Activity 1 uses 31 energy bars. In SPSS, select One-Sample T Test, set Protein as the test variable and 20 as the test value. The output shows x̄ = 21.4, SE = .45650, t = 3.067, df = 30, p = .005, a mean difference of 1.4 g and a 95% difference interval [.4677, 2.3323]. Reject H₀ at α = .05."]
],`
Which question calls for a one-sample t-test?|Does mean protein differ from a fixed 20 g label?|Do two independent brands have equal means?|Did the same people change after a programme?|Are two ordinal measures associated?
What parameter is tested?|One population mean|The difference between two independent sample sizes|A population variance alone|A nominal association
Which quantity is the standard error in the denominator?|s divided by the square root of n|s times n|s squared|The population mean
What is the degrees-of-freedom formula?|n − 1|n + 1|2n − 2|n
Which assumption deserves particular attention for a very small sample?|Approximate normality of the underlying measurements|The sample mean is exactly the null value|All values are categories|The sample standard deviation is zero
The lecture protein test gives p = .005 at α = .05. What is the decision?|Reject the 20 g null mean|Fail to reject the 20 g null mean|Accept every bar has 20 g|The test proves the label is exact
Which SPSS field holds the fixed comparison mean?|Test Value|Grouping Variable|Pair 2|Correlation Coefficients
Calculate df for 31 observations.|30|df = 31 − 1.
For x̄ = 22, μ0 = 20, s = 4 and n = 16, calculate t.|2|SE = 4/√16 = 1, so t = 2/1.
The lecture sample mean is 21.4 g and test value is 20 g. Calculate the signed mean difference in grams.|1.4|21.4 − 20 = 1.4.
`);

lesson(3,"independent","独立样本 t 检验","Independent-samples t-test","27–32","independent",[
["比较两个独立总体的均值，例如两种母语组的阅读得分或两个品牌的蛋白质含量。两组内部应是独立随机观测，变量为连续型，小样本时关注组内正态性。合并方差的经典版本要求总体方差相等。","Compare population means of independent groups, such as reading scores of two language groups or protein in two brands. Use independent random continuous observations and check within-group normality especially for small samples. The pooled version assumes equal population variances."],
["等方差时 sₚ² = [(n₁−1)s₁² + (n₂−1)s₂²]/(n₁+n₂−2)，t = (x̄₁−x̄₂)/[sₚ√(1/n₁+1/n₂)]，df = n₁+n₂−2。方差不等可用 Welch 行，SE = √(s₁²/n₁+s₂²/n₂)，df 用 Welch–Satterthwaite 近似，可能是小数。","For equal variances, sₚ² = [(n₁−1)s₁² + (n₂−1)s₂²]/(n₁+n₂−2), t = (x̄₁−x̄₂)/[sₚ√(1/n₁+1/n₂)] and df = n₁+n₂−2. For unequal variances, use the Welch row with SE = √(s₁²/n₁+s₂²/n₂) and Welch–Satterthwaite df, which may be fractional."],
["活动 2：体脂百分比以 Fat 为检验变量、Gender 为分组变量。SPSS 讲义输出 Levene p = .480，按课堂读表采用等方差行，t = −2.800、df = 21、双侧 p = .011、男减女约 −7.344 个百分点。Welch 行 p = .009。Levene 结果只是读表依据，不能证明方差相等。","Activity 2 uses body-fat percentage as the test variable and Gender as the grouping variable. The lecture SPSS table gives Levene p = .480. Following the classroom reading rule, the pooled row gives t = −2.800, df = 21, two-sided p = .011 and male minus female ≈ −7.344 percentage points. The Welch row gives p = .009. The Levene result alone does not establish equal variances."]
],`
Which design uses independent samples?|Different people are measured in each of two groups|The same people are measured before and after|Both arms of each person are measured|The same students take both tests
What does the pooled t-test assume about population variances?|They are equal|They must be zero|The first is always larger|They equal the sample means
Which SPSS row uses a Welch unequal-variance calculation?|Equal variances not assumed|Equal variances assumed|Paired Samples Correlations|One-Sample Statistics
What does Levene's test assess?|Equality of variances|Equality of group means|Equality of sample sizes|The direction of the mean difference
What does a negative t indicate when group 1 minus group 2 is used?|The sample mean of group 1 is smaller|The sample mean of group 2 is smaller|The two groups have equal means|The p-value is negative
For pooled p = .011, what is the decision at α = .05?|Reject equality of population means|Fail to reject equality of population means|Prove equal variances|Reject the result because t is negative
What is the pooled df formula?|n1 + n2 − 2|n1 + n2|n1 − n2|n1 × n2
Calculate pooled df for sample sizes 13 and 10.|21|13 + 10 − 2 = 21.
For means 14 and 22 and SE = 4, calculate t using first minus second.|-2|The signed difference is −8. Divide by 4.
If n1 = n2 = 6 and both sample variances are 9, calculate the pooled variance.|9|The weighted average of two variances equal to 9 is 9.
`);

lesson(3,"paired","配对样本 t 检验","Paired-samples t-test","33–38","paired",[
["配对 t 检验先对每对观测做差，再检验总体平均差是否为零。讲义案例包括同一人双臂使用不同药膏、戒烟前后体重、同一学生完成两份试卷。配对顺序决定差值符号。","A paired t-test first computes within-pair differences and then tests whether the population mean difference is zero. Lecture examples include two lotions on the same person, weight before and after a programme and two exams for each student. The subtraction order sets the sign."],
["不同个体之间应独立。正态性假设针对差值分布，尤其是小样本。设 d = 测量 1 − 测量 2，则 SE = s_d/√n，t = d̄/SE，df = n − 1，n 是完整配对数。","Subjects should be independent. The normality condition concerns the differences, especially for small samples. Set d = measurement 1 − measurement 2, then SE = s_d/√n, t = d̄/SE and df = n − 1, where n counts complete pairs."],
["活动 3：在 SPSS 的 Paired-Samples T Test 中配对 Exam1 和 Exam2。讲义输出 16 对、平均差 −1.313、SE = 1.751、t = −.750、df = 15、p = .465，95% 区间 [−5.044, 2.419]。在 α = .05 下未能拒绝零平均差。若要证明实际等效，需要预先设定等效界值并使用相应方法。","Activity 3 pairs Exam1 and Exam2 in SPSS Paired-Samples T Test. The lecture output gives 16 pairs, mean difference −1.313, SE = 1.751, t = −.750, df = 15, p = .465 and 95% interval [−5.044, 2.419]. Fail to reject a zero mean difference at α = .05. To establish practical equivalence, prespecify a margin and use an appropriate equivalence method."]
],`
Which design calls for a paired t-test?|The same students take two exams|Different students take different exams|One class mean is compared with a fixed target|Two unordered categories are cross-tabulated
What is tested in a paired t-test?|The population mean of the within-pair differences|The equality of two sample sizes|The variance of the first measurement alone|The correlation between the two sets of scores
Which values should be approximately normal for a small-sample paired test?|The within-pair differences|The subject identifiers|Both sets separately as the sole requirement|The counts in each column
What happens to t when every pair's subtraction order is reversed?|Its sign reverses|It doubles|It becomes zero|Its sign stays the same
What does n represent in the paired t statistic?|The number of complete pairs|Twice the number of pairs|Only the number of positive differences|The number of groups
For p = .465 at α = .05, which conclusion is valid?|Fail to reject a zero mean difference|Reject a zero mean difference|The exams are proved equivalent|Both population variances are equal
Which SPSS table provides the p-value for the mean difference?|Paired Samples Test|Paired Samples Correlations|Paired Samples Statistics only|Crosstabulation
With 16 complete pairs, calculate df.|15|16 − 1 = 15.
For mean difference −3 and difference SE = 1.5, calculate t.|-2|Divide −3 by 1.5.
For n = 25 and SD of the paired differences equal to 10, calculate the SE.|2|10/√25 = 2.
`);


lesson(4,"correlation","相关研究与散点图","Correlational studies and scatterplots","3–10, 13–18","correlation",[
["相关研究观察现有关系。讲义在同一批对象上测两项指标，例如学生焦虑与成绩、阅读技能与听觉记忆、教师对失败的预期与课堂干扰。其他例子包括伴侣关系、动机与学习、早期读写与动作整合、人口特征与辅导态度。","Correlational studies observe existing relationships. The lecture design takes two measurements on the same cases, such as student anxiety and achievement, reading skills and auditory memory, or teacher expectations of failure and classroom disruption. Other examples include romantic love and marital adjustment, motivation and learning, early literacy and motor integration, and demographics and attitudes to counselling."],
["散点图每个点是一对测量。正相关呈上升趋势，负相关呈下降趋势。讲义用 |r| 约 0–.30、.30–.50、.50–.70、.70–.90、.90–1 描述可忽略、低、中、高、很高的线性相关。分界是课堂指南。","Each point is a pair of measurements. Positive association trends upward and negative association trends downward. The lecture describes absolute r around 0–.30, .30–.50, .50–.70, .70–.90 and .90–1 as negligible, low, moderate, high and very high. Use these bands as classroom guides."],
["相关研究帮助理解现象，较强的关系也可辅助预测。相关本身无法确定因果，推广到总体还要考虑抽样代表性和样本流失。定量线性关系用 Pearson，有序或单调秩关系用 Spearman，两名义变量用 Cramér’s V。讲义表还列出 Phi、Lambda、点二列和秩二列等。","Correlational research aids understanding and, for sufficiently strong relationships, prediction. Correlation alone cannot establish causation. Generalization depends on representative sampling and attrition. Choose Pearson for quantitative linear relationships, Spearman for ordinal or monotonic rank relationships, and Cramér’s V for two nominal variables. The table also lists Phi, Lambda, point-biserial and rank-biserial."]
],`
What does a correlational study usually do?|Measures variables and examines association|Assigns treatments by definition|Forces variables to increase|Proves causation
What does one scatterplot point represent here?|Two measurements on the same case|Two unrelated cases|One population mean|One treatment effect
What direction does an upward trend indicate?|Positive association|Negative association|Zero sample size|Nominal association only
What direction does a downward trend indicate?|Negative association|Positive association|An increase on both variables|A causal effect
How is r = −.62 classified using the lecture bands?|Moderate negative|High negative|Low positive|Negligible positive
Which has the strongest linear association by absolute r?|−.83|.71|−.20|.05
What is a use of a sufficiently strong correlation?|Prediction from one variable to another|Proof of causation by itself|Random assignment after observation|Proof of equal means
A plot has one point per student for 10 students. How many measurement pairs are shown?|10|Each student contributes one pair.
State the direction in one word if higher reading scores accompany higher memory scores.|positive|Both measures tend to increase together.
Using the lecture bands, give the strength category for r = .62 in one word.|moderate|The magnitude .62 lies in the moderate band.
`);

lesson(4,"pearson","Pearson 积矩相关","Pearson product-moment correlation","9–13, 19–22","pearson",[
["Pearson r 衡量成对定量变量间线性关联的方向和强度，范围 −1 到 1。两变量都须有变异。先看散点图的线性、异常点及其他结构；r 接近零仍可能有非线性关系。","Pearson r measures the direction and strength of a linear association between paired quantitative variables. It ranges from −1 to 1 and requires variability in both variables. Check the plot for linearity, outliers and other patterns. An r near zero can coexist with a nonlinear relationship."],
["手算 r = Σ[(xᵢ−x̄)(yᵢ−ȳ)] / √[Σ(xᵢ−x̄)² · Σ(yᵢ−ȳ)²]。讲义也展示预测式 Ŷ = a + bX，其中 a 是截距，b 是斜率，r 和 b 的含义不同。","Compute r = Σ[(xᵢ−x̄)(yᵢ−ȳ)] / √[Σ(xᵢ−x̄)² · Σ(yᵢ−ȳ)²]. The lecture also shows the prediction equation Ŷ = a + bX, where a is the intercept and b the slope. The correlation r and slope b are distinct quantities."],
["课堂案例在 SPSS Bivariate Correlations 中选 10 名建筑学生的 IQ、Maths，再选 Pearson、Two-tailed。输出 r = .719，p = .019，n = 10。按课堂分档是较高的正相关，在 .05 水平显著。推断时关注观测独立性和检验假设。","The lecture example uses IQ and maths scores for 10 architecture students. In SPSS Bivariate Correlations select IQ, Maths, Pearson and Two-tailed. The output gives r = .719, p = .019 and n = 10. This is a high positive correlation under the lecture guide and significant at .05. Inference depends on independent cases and the test assumptions."]
],`
What relationship does Pearson r measure directly?|Linear association between quantitative variables|Any causal relationship|Association between nominal categories only|Difference between paired means
What is the possible range of a defined Pearson r?|−1 to +1|0 to 1 only|−∞ to +∞|0 to 100
What happens if one variable is constant?|Pearson r is undefined|Pearson r equals 1|Pearson r equals −1|Pearson r must equal zero
What can r near zero coexist with?|A strong nonlinear pattern|A perfect positive linear relation|A perfect negative linear relation|An r above 1
Which SPSS procedure produced the IQ and maths table?|Bivariate Correlations|Paired-Samples T Test|One-Sample T Test|Crosstabs
What does r = .719, p = .019 indicate at α = .05?|A statistically significant positive linear association|A nonsignificant negative association|Proof that IQ causes maths scores|Significance only at α = .01
For Ŷ = a + bX, which symbol is the slope?|b|a|X|r in every model
The sum of cross-products is 12 and squared-deviation sums are 9 and 16. Calculate r.|1|The denominator is √(9 × 16) = 12.
If Y = 10 − 2X exactly for nonconstant X, calculate Pearson r.|-1|The points lie on a line with negative slope.
For the IQ and maths example, report the Pearson coefficient to three decimal places.|0.719|Read the off-diagonal Pearson Correlation entry.
`);

lesson(4,"spearman","Spearman 秩相关","Spearman rank correlation","9–10, 23","spearman",[
["Spearman ρ 用秩衡量单调关联，适用于成对有序数据，也可描述单调曲线。每列分别排序，再按对象配对秩。","Spearman ρ measures monotonic association using ranks. It suits paired ordinal data and can describe a monotonic curved pattern. Rank each variable separately and keep the ranks paired by case."],
["无并列时用讲义公式 ρ = 1 − 6Σdᵢ²/[n(n²−1)]，dᵢ 为同一对象两列秩的差。有并列时用平均秩，再求两列秩的 Pearson 相关。","With no ties, use the lecture shortcut ρ = 1 − 6Σdᵢ²/[n(n²−1)], where dᵢ is the rank difference for one case. With ties, assign average ranks and compute Pearson correlation on the rank columns."],
["示例 X 秩为 [1,2,3]，Y 秩为 [1,3,2]，差平方和为 2，ρ = 1 − 12/24 = .50。SPSS 的 Bivariate Correlations 可选 Spearman。","For X ranks [1,2,3] and Y ranks [1,3,2], squared rank differences sum to 2 and ρ = 1 − 12/24 = .50. Choose Spearman in SPSS Bivariate Correlations."]
],`
What does Spearman correlation measure?|Monotonic association between paired ranks|A difference in means|Association of unordered labels by chi-square|Only a straight line slope
Which measurement type naturally provides ranks?|Ordinal|Unordered nominal labels|Subject IDs as names|Random group codes
What is d in the no-ties formula?|The X rank minus the Y rank for one case|The X score minus the X mean|The difference between sample sizes|The largest rank
How are tied values handled?|Assign average ranks and correlate the rank columns|Discard all tied cases|Assign ranks randomly|Apply the no-ties shortcut unchanged
What is ρ for identical untied ranks?|+1|0|−1|Undefined
Which pattern can Spearman capture well?|A steadily increasing curve|A U-shape as strongly positive|A difference between means|Two unordered categories directly
Which SPSS option computes rank correlation?|Spearman|Pearson only|Paired Samples Test|Levene's Test
For ranks [1,2,3] and [1,3,2], calculate ρ.|0.5|Σd² = 2 and n = 3, so 1 − 12/24 = .5.
For n = 5 and Σd² = 4 with no ties, calculate ρ.|0.8|1 − 6 × 4/(5 × 24) = .8.
Two tied values occupy positions 2 and 3. Give their shared rank.|2.5|Use the average of ranks 2 and 3.
`);

lesson(4,"cramer","Cramér’s V 名义变量关联","Cramér’s V for nominal association","9–10, 24–25","cramer",[
["两个名义变量用列联表，例如讲义的领导风格 × 性别。比较观察频数与独立假设下的期望频数。Pearson χ² 提供显著性检验，Cramér’s V 描述关联强度。","Use a contingency table for two nominal variables, such as leadership style by gender. Compare observed counts with expected counts under independence. Pearson χ² provides a significance test and Cramér’s V expresses association strength."],
["V = √[χ²/(n · min(R−1,C−1))]，R、C 是行、列数，n 是有效个案数。V 范围 0 到 1，没有正负方向。读渐近 p 值时检查期望频数。","V = √[χ²/(n · min(R−1,C−1))], where R and C count rows and columns and n counts valid cases. V ranges from 0 to 1 with no signed direction. Check expected counts when using an asymptotic p-value."],
["SPSS Crosstabs 中选择 Chi-square 和 Phi and Cramér’s V。课堂 3×2 表 n = 100，χ² = 37.585，df = 2，最小期望频数 8.12，V = .613，p < .001。","In SPSS Crosstabs request Chi-square and Phi and Cramér’s V. The lecture's 3×2 table gives n = 100, χ² = 37.585, df = 2, minimum expected count 8.12, V = .613 and p < .001."]
],`
Which variables suit Cramér's V?|Two nominal variables|One continuous variable and a fixed target|Two repeated continuous measurements for a mean test|Two quantitative variables for a linear slope
What does Cramér's V communicate?|Strength of nominal association|Positive or negative direction|Probability the null is true|Difference in sample means
What is its possible range?|0 to 1|−1 to +1|−∞ to +∞|1 to 100
What does the dimension term use?|The smaller of R − 1 and C − 1|The larger of R and C|R plus C|R times C
Which SPSS procedure creates the lecture output?|Crosstabs|One-Sample T Test|Bivariate Pearson Correlations only|Paired-Samples T Test
What should be checked for the asymptotic chi-square p-value?|Expected cell counts|Only the chart colour|Only the column names|Whether V is negative
Why does SPSS display .000 in the significance column here?|It rounds a very small p-value|The p-value is exactly zero|There is no association|The table has zero cases
Given χ² = 37.585, n = 100 and a 3 by 2 table, calculate V. Round to three decimals.|0.613|Compute √(37.585/100), since the smaller dimension minus one is 1.
Given χ² = 20 and n = 80 for a 3 by 3 table, calculate V. Round to three decimals.|0.354|Compute √[20/(80 × 2)] = √.125.
Calculate chi-square degrees of freedom for a 3 by 2 table.|2|(3 − 1) × (2 − 1) = 2.
`);

