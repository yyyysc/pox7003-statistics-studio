chapters[6]=[];
lesson(6,"anova","ANOVA的用途","Purpose of ANOVA","2–3","anova",[],`
What is the main outcome compared in the ANOVA introduced in Week 6?|Group means|Category names|Student identification numbers|Only the largest score
How many grouping factors are in a one-way ANOVA?|One|Two|Three|None
Can a one-way ANOVA compare three independent group means?|Yes|No, only two|Only if every score is identical|Only for nominal outcomes
Which analysis is commonly used for just two independent group means?|An independent-samples t-test|A paired test regardless of design|A frequency count only|A test of jersey numbers
Which outcome suits the ANOVA examples in the lecture?|Exam score|Dog-breed name|Student ID|Blood-group label
Which statement about a significant overall one-way ANOVA is justified?|At least one population mean differs|Every pair of means differs|All group variances are equal|The treatment is certainly causal
Which design has one categorical factor with three levels?|Teaching method A, B or C predicting exam score|Height and weight predicting salary|A student measured before and after training|Gender and education predicting anxiety
How many factors does the term one-way refer to?|1|It refers to one grouping variable.
How many levels are present in teaching methods A, B and C?|3|The grouping factor has three categories.
Does a significant overall test identify the differing pair by itself?|no|The overall result does not identify a specific pair.
`);
lesson(6,"anova-assumptions","单因素ANOVA的前提","One-way ANOVA assumptions","4–8","anova-assumptions",[],`
What should the dependent variable be in the ANOVA described in the lecture?|A quantitative interval or ratio outcome|An unordered category name|A student identifier|Only a two-category label
Which condition concerns the research design?|Independence of observations|The colour of the output table|The alphabetical order of categories|The number of decimal places
Which test does the lecture name for homogeneity of variances?|Levene's test|A paired t-test|A test of the intercept alone|A rank label
Which test does the lecture name for normality?|Shapiro-Wilk test|Levene's test|A test of means alone|A frequency total
For one-way ANOVA, where is approximate normality relevant?|Within each group|Only in the pooled scores|Only in the group labels|Only in the sample sizes
Which statement distinguishes means from variances?|Equal variances do not require equal means|Equal variances mean every group mean is identical|Levene's test directly compares means|ANOVA requires identical scores
Which observation conflicts with the independent-groups design?|The same participant supplies outcomes in multiple groups|Different participants belong to different groups|The outcome uses kilograms|There are three groups
Does a large Levene p-value prove that population variances are exactly equal?|no|It indicates insufficient evidence against equal variances.
How many grouping variables are used in a one-way design?|1|One categorical variable defines its groups.
Should outliers be investigated before interpreting the ANOVA?|yes|Serious outliers can distort results; they should not be automatically deleted without investigation.
`);
lesson(6,"two-way-anova","双因素ANOVA与交互作用","Two-way ANOVA and interaction","9–15","two-way-anova",[],`
What does interaction mean in the two-way ANOVA example?|The association of one factor differs across levels of the other|Both factors must have identical means|The outcome becomes categorical|Every participant is measured twice
Which variables are the two factors in the lecture anxiety example?|Gender and educational level|Anxiety and exam score|Height and weight|Mean and variance
What is the dependent variable in the gender by education example?|Test anxiety|Gender|Educational level|The participant ID
Where should approximate normality be considered in a two-way design?|Within each factor-level combination|Only across all pooled observations|Only in the factor names|Only in the largest group
What decisions are shown in the final gender by age example?|Reject both main-effect nulls but fail to reject the interaction null|Reject the interaction null only|Prove all three nulls true|Reject every null with certainty
Do two significant main effects necessarily establish a significant interaction?|No|Yes, always|Only when factor names are short|Only if age is recorded in years
What cannot be determined from the final slide without group means?|Which gender has the higher mean score|That the slide rejects the gender main-effect null|That the slide rejects the age main-effect null|That the slide fails to reject the interaction null
How many factors are in a two-way ANOVA?|2|Two categorical factors define the design.
How many cells are in a 2 by 3 design?|6|Multiply the number of levels: 2 × 3 = 6.
Does failing to reject the interaction null prove no interaction exists?|no|The example reports insufficient evidence of interaction, not proof of absence.
`);
function addWeek6Teaching(){
 addTeaching("anova","先看要比较的是否是不同组的平均结果。","Start by asking whether the question compares group means.","认出因变量 → 认出分组因素 → 数清水平。","Identify the outcome → identify the factor → count its levels.",[
 ["三种教学方法比较平均成绩，几个因素？","Three teaching methods are compared on mean exam score. How many factors?","教学方法是唯一分组变量 → 一个因素、三个水平。","Teaching method is the grouping variable → one factor with three levels.","One factor"],
 ["血型名称适合作为本课ANOVA的因变量吗？","Is blood-group name a suitable outcome for this ANOVA?","血型是名义类别 → 不适合比较其均值。","Blood group is nominal → its mean is not meaningful here.","No"],
 ["三组均值整体检验显著，能说每对都不同吗？","A three-group overall test is significant. Must every pair differ?","整体只否定所有均值相等 → 不能断言每对不同。","The overall result rejects equality of all means → it does not establish every pair differs.","No"],
 ["比较两独立组的平均体重，通常用什么？","Which common test compares two independent groups' mean weights?","两组不同对象 → 独立样本t检验。","There are two independent groups → an independent-samples t-test is common.","Independent-samples t-test"],
 ["活动量分久坐、低、中、高，共几个水平？","Activity is sedentary, low, moderate or high. How many levels?","数分组类别 → 四个水平。","Count the categories → four levels.","4"]
 ]);
 addTeaching("anova-assumptions","均值比较前，先核对设计与各组内部数据。","Before comparing means, inspect the design and within-group data.","检查独立 → 检查异常值 → 看组内分布 → 比较方差。","Check independence → investigate outliers → inspect within-group distributions → assess variances.",[
 ["同一学生在三个条件都测一次，能直接当独立组吗？","Each student is measured in all three conditions. Are these independent groups?","同一人多次测量相关 → 不能直接用普通独立组模型。","Repeated observations on the same person are related → an ordinary independent-groups model does not fit the design.","No"],
 ["Levene检验问的是均值还是方差？","Does Levene's test address means or variances?","它检验方差齐性 → 方差。","Levene addresses homogeneity → variances.","Variances"],
 ["三组混在一起不正态，是否直接否定组内正态？","Pooled scores look non-normal. Does that alone disprove within-group normality?","不同组均值混合可能改变形状 → 应分别看各组。","Mixing groups with different means can change shape → inspect each group.","No"],
 ["发现一个特别高的分数，是否自动删除？","Should one unusually high score be deleted automatically?","核对录入、测量与背景 → 不能未经调查就删除。","Check entry, measurement and context → do not delete without investigation.","No"],
 ["成绩按0–100记录，结果变量是什么？","Exam marks are recorded from 0 to 100. What is the outcome?","比较的是成绩均值 → 成绩是定量因变量。","The means concern exam marks → marks are the quantitative dependent variable.","Exam marks"]
 ]);
 addTeaching("two-way-anova","两个因素既能有各自主效应，也可能存在交互。","Two factors can have main effects and can also interact.","列因素 → 数组合 → 分开读两个主效应与交互。","Name the factors → count cells → read the main effects and interaction separately.",[
 ["性别2类、教育层次2类，共几个组合？","Gender has 2 levels and education has 2 levels. How many cells?","组合数2×2 → 四个。","Multiply 2 × 2 → four cells.","4"],
 ["一种教学方法对本科生提升大，对研究生提升小，涉及什么？","A method's association with scores differs between undergraduates and postgraduates. Which concept is this?","方法与结果的关系随教育层次改变 → 交互作用。","The method–outcome association changes with education level → interaction.","Interaction"],
 ["两个主效应显著，交互一定显著吗？","Both main effects are significant. Is the interaction necessarily significant?","三个项回答不同问题 → 不一定。","The three terms answer different questions → no.","No"],
 ["原例交互未被拒绝，能证明无交互吗？","The original example fails to reject the interaction null. Does this prove no interaction?","证据不足不等于证明不存在 → 不能。","Insufficient evidence is not proof of absence → no.","No"],
 ["2×3设计应检查几个组合内的分布？","In a 2 by 3 design, how many cell distributions should be considered?","每个水平组合各检查 → 2×3=6。","Inspect each factor-level combination → 2 × 3 = 6.","6"]
 ]);
}
