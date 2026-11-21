const teaching = {};
function addTeaching(id,zh,en,howZh,howEn,rows) {
  const chapter=Object.values(chapters).flat().find(c=>c.id===id);
  if(!chapter) throw new Error("Missing lesson "+id);
  teaching[id]={zh,en,howZh,howEn,examples:rows.map(([qzh,qen,szh,sen,answer,wrong],index)=>({
    qzh,qen,szh,sen,answer,
    id:id+"-guided-"+(index+1)
  }))};
  rows.forEach(([qzh,prompt,szh,explanation,answer,wrong],index)=>{
    chapter.questions.push({id:id+"-guided-"+(index+1),prompt,answer,options:wrong?[answer,...wrong]:null,explanation});
  });
}
addTeaching("quantitative",
"把统计当作整理班级资料。先知道手上有什么，再回答问题，最后把结果解释给别人。",
"Think of statistics as making sense of a class record. Find out what you have, answer the question, then explain the result.",
"先问对象是谁 → 再问想知道什么 → 决定只描述样本还是推广到总体。",
"Identify the cases → state the question → decide whether to describe the sample or infer about a population.",[
["测了 20 名学生，计算这 20 人的平均身高。这是哪类统计？","You measure 20 students and summarize their mean height. Which branch is this?","只谈实际观察的 20 人 → 属于描述统计。","The claim concerns the 20 observed students → it is descriptive.", "Descriptive statistics",["Inferential statistics","Random assignment","Causal proof"]],
["用 20 名学生估计全校平均身高。这是哪类统计？","You use 20 students to estimate the whole school's mean height. Which branch is this?","实际只观察部分学生 → 结论指向全校 → 属于推断。","Only a subset is observed → the claim targets the school → this is inference.","Inferential statistics",["Descriptive statistics only","A census by definition","A frequency count only"]],
["一个学生对应表格里的一行。这一行叫什么？","A row represents one student. What is that row called?","先看行代表什么 → 一个被观察的单位叫个案。","Identify what a row represents → one observed unit is a case.","A case",["A population parameter","A significance level","A regression slope"]],
["均值 50、标准差 10，一个人得 70。z 分数是多少？","The mean is 50 and SD is 10. Find the z-score for 70.","比均值多 20 → 每个标准差是 10 → 20 ÷ 10 = 2。","70 − 50 = 20 → divide by SD 10 → z = 2.","2"],
["完成计算后直接写“所有学生都一样”，合适吗？","After summarizing a sample, what should a discussion address?","先说明结果代表谁 → 再说明抽样和研究限制。","State who the result concerns → explain sampling and study limitations.","What the result means and its limitations",["A guaranteed claim about every student","Only the font used","Only the file name"]]
]);
addTeaching("data-types",
"数字有时表示数量，有时只是名字。球衣 8 号不是比 4 号多一倍的运动员。",
"A number can be a quantity or a label. Jersey 8 does not represent twice as much player as jersey 4.",
"先问能不能数数量 → 能则判断数出来还是量出来 → 类别再判断有无顺序。",
"Ask whether it is a quantity → distinguish counted from measured values → for categories, ask whether order matters.",[
["球衣 8、12、20 号是数量还是标签？","Jersey numbers 8, 12 and 20 are used to identify players. What do they represent?","数字用来认人 → 不计算号码平均大小 → 是标签。","The numbers identify players → they function as labels.","Category labels",["Continuous quantities","Lengths","Meaningful counts of players"]],
["记录每人养了几只猫，属于离散还是连续？","The number of cats owned is discrete or continuous? Enter one word.","只能是 0、1、2 等整数 → 属于离散数量。","Counts take whole-number values → discrete.","discrete"],
["记录跑步用了多少秒，属于离散还是连续？","Elapsed running time is discrete or continuous in principle? Enter one word.","时间可细分为 1.2、1.23 秒 → 连续。","Time can vary throughout an interval → continuous.","continuous"],
["只有“有”与“无”两个类别，叫什么数据？","A variable has categories present and absent only. What is it?","数可能类别 → 恰好两类 → 二分类。","Count the possible categories → two categories → dichotomous.","Dichotomous",["A four-category variable","A continuous measure","An arithmetic mean"]],
["身高记录为 160、161 厘米，就变成离散特征了吗？","Heights are rounded to whole centimetres. What is the underlying characteristic?","记录时四舍五入 → 身高本身仍可在区间内变化。","Recording rounds the measurement → the underlying height is continuous.","Continuous",["Nominal","A count by definition","A dichotomous characteristic"]]
]);
addTeaching("scales",
"用四个问题判断量尺。只是名字？能排序？每一格一样大？零真的表示没有？",
"Use four questions. Is it a label? Can it be ordered? Are gaps equal? Does zero mean absence?",
"名字 → 名义。只有顺序 → 顺序。等距但零任意 → 等距。有真实零 → 等比。",
"Labels → nominal. Order only → ordinal. Equal gaps with a conventional zero → interval. A meaningful zero → ratio.",[
["出生年份 2000、2005 是什么尺度？","Calendar year of birth is measured on which scale?","相差 5 年有意义 → 0 年是约定起点 → 等距。","A five-year gap is meaningful → the zero point is conventional → interval.","Interval",["Nominal","Ordinal","Ratio"]],
["学号 202601、202602 是什么尺度？","Student registration numbers used only as IDs have which scale?","用来区分身份 → 数字大小无数量含义 → 名义。","They identify students → numeric size has no quantitative meaning → nominal.","Nominal",["Ordinal","Interval","Ratio"]],
["母亲学历按小学、中学、大学排序，是什么尺度？","Education categories primary, secondary and university have which scale?","可按层次排序 → 层次间距未定义相等 → 顺序。","Categories are ordered → equal gaps are not established → ordinal.","Ordinal",["Nominal","Interval","Ratio"]],
["“她排第一”只提供什么信息？","The statement 'She ranks first' directly provides what information?","知道她的位置较高 → 没有知道具体差几分 → 顺序信息。","It gives position → no numerical gap is supplied → ordinal information.","Order",["A meaningful score ratio","An exact score difference","A true zero point"]],
["一根绳长 8 米，另一根 4 米，能说长两倍吗？","Can an 8-metre length be described as twice a 4-metre length?","长度零代表没有长度 → 8 ÷ 4 = 2 → 比值有意义。","Length has a meaningful zero → 8/4 = 2 → the ratio is meaningful.","Yes",["No, because lengths are nominal","No, because metre zero is arbitrary","Only if the lengths are ranks"]]
]);
addTeaching("frequencies",
"频数就是点人数。百分比要先问“除以谁”，不同组的人数不能随意混用。",
"Frequency means counting cases. For a percentage, first ask which total belongs in the denominator.",
"找类别 → 数次数 → 找对应总数 → 次数 ÷ 总数。",
"Identify the category → count cases → identify the relevant total → divide count by total.",[
["40 人中 10 人选红色，相对频数是多少？","Ten of 40 people choose red. Find the relative frequency as a decimal.","分子是 10 → 分母是 40 → 10 ÷ 40 = .25。","Use count 10 and total 40 → 10/40 = .25.","0.25"],
["三个类别的频数为 8、5、7，总人数是多少？","Three exhaustive categories have counts 8, 5 and 7. Find the total.","三个互斥类别全部相加 → 8 + 5 + 7 = 20。","Add the mutually exclusive, exhaustive counts → 8 + 5 + 7 = 20.","20"],
["60 人中的 30% 是多少人？","How many people are 30% of a group of 60?","先把百分比变小数 .30 → .30 × 60 = 18。","Convert 30% to .30 → multiply by 60 → 18.","18"],
["男生 50 人中 20% 戴眼镜，女生 100 人中 40% 戴眼镜。总共几人？","20% of 50 males and 40% of 100 females wear glasses. How many wear glasses in total?","男生 10 人 → 女生 40 人 → 合计 50。","Male count = 10 → female count = 40 → total = 50.","50"],
["延续上一例，150 人中 50 人戴眼镜，为什么不能直接平均 20% 与 40%？","Why is averaging 20% and 40% inappropriate when the groups have sizes 50 and 100?","两组分母不同 → 应先还原人数再合并。","The denominators differ → combine counts using their proper weights.","The groups have different denominators",["Percentages can never be combined","All percentages must sum to 50","Only the larger group is relevant"]]
]);
addTeaching("boxplot",
"把数据看成一排人。箱子的两端夹住中间一半，箱内那条线就是排在中间的位置。",
"Imagine the data in order. The box spans the middle half, and the inside line marks the middle location.",
"先认中位数线 → 再认 Q1、Q3 → 比箱体长度 → 最后看须和单独的点。",
"Locate the median → identify Q1 and Q3 → compare box lengths → inspect whiskers and separate points.",[
["Q1 = 10，Q3 = 18，箱体跨度是多少？","Q1 = 10 and Q3 = 18. Find the IQR.","右边界减左边界 → 18 − 10 = 8。","Subtract the lower quartile from the upper → 18 − 10 = 8.","8"],
["A 组中位数 60，B 组 75，哪个组中心较高？","Box plots have medians 60 for A and 75 for B. Which centre is higher?","比较箱内线数值 → 75 比 60 大。","Compare median values → 75 exceeds 60.","Group B",["Group A","They are equal","The sample sizes must be known first"]],
["两个箱体一样长，能推出所有数据一样吗？","Two box plots have equal IQRs. What follows?","箱体只概括中间一半 → 其余结构仍可不同。","The box summarizes middle spread → the remaining patterns can differ.","Their middle spreads are equal",["All their values are identical","Their means must be equal","Their tails must be identical"]],
["Q3 = 30，IQR = 10，Tukey 上界是多少？","Q3 = 30 and IQR = 10. Find the upper Tukey fence.","1.5 × 10 = 15 → 30 + 15 = 45。","1.5 × 10 = 15 → 30 + 15 = 45.","45"],
["上界 45，最大值 60，界内最远观察值 42。上须到哪？","With upper fence 45, maximum 60 and furthest in-fence observation 42, where does the upper Tukey whisker end?","须到界内实际观察值 → 到 42；60 另画为点。","Whiskers end at an observed in-fence value → 42. Plot 60 separately.","42"]
]);
addTeaching("histogram",
"直方图把一条数轴切成几个篮子，看每个篮子里落了多少数据。",
"A histogram divides a number line into bins and counts how many observations fall into each bin.",
"先看区间 → 看纵轴是频数还是密度 → 看哪里多、哪边尾巴长。",
"Read the bins → check counts or density on the vertical axis → locate clusters and long tails.",[
["区间 [0,10) 包含 10 吗？","Does [0,10) contain the value 10?","右侧圆括号表示不包含 → 10 进入下一个区间。","The right bound is excluded → 10 belongs in the next bin.","No",["Yes","Only if it is the maximum","Only when the count is even"]],
["等宽组频数是 4、9、2，哪组人数最多？","Equal-width bins have frequencies 4, 9 and 2. Which bin contains most observations?","比较频数 → 第二组 9 最大。","Compare counts → the second bin has the largest count, 9.","The second bin",["The first bin","The third bin","All are equal"]],
["多数工资低，少数极高，通常哪边尾巴长？","Most salaries are low and a few are very high. Which tail is usually longer?","极高数值向右延伸 → 右长尾。","The high observations extend rightward → a longer right tail.","Right",["Left","Both tails must match","No tail is possible"]],
["宽度 4、频数 12，频数密度是多少？","A bin has width 4 and frequency 12. Find its frequency density.","频数 ÷ 宽度 → 12 ÷ 4 = 3。","Frequency divided by width → 12/4 = 3.","3"],
["两个组宽不同，比较密度直方图的什么量才能比较人数？","For unequal-width bins in a frequency-density histogram, what encodes counts?","高度乘宽度才是面积 → 面积表示频数。","Height times width gives area → area encodes frequency.","Bar area",["Height alone","Width alone","The number of axis labels"]]
]);
addTeaching("stem-leaf",
"茎叶图像把门牌号拆成前几位和最后一位。读之前一定先看图例。",
"Think of splitting a house number into its leading digits and its last digit. Read the key first.",
"读图例 → 拼回数值 → 数叶片 → 保留重复叶。",
"Read the key → reconstruct the values → count leaves → keep repeated leaves.",[
["图例 3|2 = 32，5|6 是多少？","With key 3|2 = 32, what value does 5|6 represent?","茎是十位 5 → 叶是个位 6 → 56。","Stem 5 supplies tens → leaf 6 supplies units → 56.","56"],
["图例 3|2 = 32，47 的叶是多少？","With key 3|2 = 32, what is the leaf for 47?","十位 4 是茎 → 个位 7 是叶。","Use stem 4 → leaf 7.","7"],
["茎 2 的叶为 1、1、8，有几个观察值？","Stem 2 has leaves 1, 1, 8. How many observations are there?","每片叶一个观察值 → 一共三片。","Each leaf is one observation → there are three.","3"],
["茎 2 的叶为 1、1、8，重复的是哪个数？","With key 2|0 = 20, which value repeats in row 2|1,1,8?","还原成 21、21、28 → 21 重复。","Reconstruct 21, 21, 28 → 21 repeats.","21"],
["没有图例的 2|5 可能是 25，也可能是 2.5，缺了什么？","Why is a key essential for interpreting 2|5?","拆分单位可能不同 → 图例明确数位和尺度。","The split can use different place values → a key establishes the scale.","It identifies the place-value scale",["It proves normality","It supplies a p-value","It makes every row equally frequent"]]
]);
addTeaching("dotplot",
"点图中的一个点通常就是一次观察。先数点，再讨论比例。",
"One dot usually represents one observation. Count dots before discussing proportions.",
"认每点代表几人 → 数每个位置的点 → 求和或比较。",
"Identify the unit per dot → count the stacks → add or compare them.",[
["一个位置上叠了 6 个点，每点一人，有几人？","Six dots are stacked at one position, with one person per dot. How many people?","每点一人 → 数六点 → 六人。","One person per dot → six dots → six people.","6"],
["A 有 8 点，B 有 3 点，差几人？","A has eight dots and B three, with one case per dot. Find the difference.","大数减小数 → 8 − 3 = 5。","Subtract counts → 8 − 3 = 5.","5"],
["三组有 2、4、5 点，总数是多少？","Three groups have 2, 4 and 5 dots. Find the total count.","把各组点数加起来 → 2 + 4 + 5 = 11。","Add the counts → 2 + 4 + 5 = 11.","11"],
["某地有 10 名接种婴儿，就一定接种率最高吗？","A colony has the largest vaccinated count. Does it necessarily have the highest vaccination rate?","人数是分子 → 接种率还要知道总婴儿数。","The count is a numerator → the rate also needs the total number of babies.","No",["Yes always","Only if there are ten dots","Only if its label comes first"]],
["数轴 5 上方没有点，表示什么？","A numerical dot plot has no dot above 5. What does that mean?","每个观察值都对应一个点 → 没有点就是没有观察到 5。","Each observation supplies a dot → none at 5 means no displayed value equals 5.","No displayed observation equals 5",["The mean is 5","The median is 5","All observations are missing"]]
]);
addTeaching("mode",
"众数只回答一件事：哪个值出现得最勤？先画正字计数也能找到它。",
"The mode answers which value appears most often. A simple tally can find it.",
"列不同值 → 数次数 → 找最高频数 → 检查是否并列。",
"List distinct values → count occurrences → find the highest frequency → check for ties.",[
["2、2、3、7 的众数是多少？","Find the mode of 2, 2, 3, 7.","2 出现两次 → 其他各一次 → 众数 2。","2 appears twice → all others once → mode 2.","2"],
["1、1、4、4、9 有几个众数？","How many modes does 1, 1, 4, 4, 9 have?","1 与 4 都出现两次 → 并列最高 → 两个众数。","1 and 4 each occur twice → tied at the top → two modes.","2"],
["红 3 人、蓝 8 人、绿 2 人，众数类别是什么？","Red has 3 cases, blue 8 and green 2. Which category is modal?","蓝的频数最大 → 蓝是众数。","Blue has the highest frequency → blue is modal.","Blue",["Red","Green","All are tied"]],
["把最大值 9 改为 100，1、2、2、9 的众数变了吗？","Replace 9 by 100 in 1, 2, 2, 9. Does the mode change?","2 仍出现两次 → 众数仍是 2。","2 still appears twice → the mode stays 2.","No",["Yes, it becomes 100","Yes, it becomes 1","Yes, it becomes the mean"]],
["研究最常见的家庭人数，该选哪个中心指标？","Which measure directly answers 'What household size is most common?'","题目问出现最多 → 对应众数。","The question asks for the highest frequency → use the mode.","Mode",["Mean","Range","Variance"]]
]);
addTeaching("median",
"把大家按分数排队，中位数就是队伍中间的位置。先排序最重要。",
"Line up the scores in order. The median is in the middle. Always sort first.",
"排序 → 数几个值 → 奇数拿中间 → 偶数平均中间两个。",
"Sort → count values → for odd N take the middle → for even N average the middle pair.",[
["9、1、5 的中位数是多少？","Find the median of 9, 1, 5.","排序 1、5、9 → 中间是 5。","Sort to 1, 5, 9 → the middle is 5.","5"],
["2、4、8、10 的中位数是多少？","Find the median of 2, 4, 8, 10.","中间是 4 和 8 → (4 + 8) ÷ 2 = 6。","The middle values are 4 and 8 → average to 6.","6"],
["15 个数排序后，中位数在第几个？","For 15 ordered values, what position contains the median?","(15 + 1) ÷ 2 = 8 → 第八个。","(15 + 1)/2 = 8 → the eighth value.","8"],
["1、3、5、7、100 中，100 改为 1000，中位数是什么？","Replace 100 by 1000 in 1, 3, 5, 7, 100. Find the new median.","排序位置没变 → 中间仍是 5。","The middle position is unchanged → median 5.","5"],
["一组工资有少数特别高的值，用哪个指标讲“中间的人”更直观？","Which measure directly describes the middle ordered salary?","题目关心中间位置 → 取中位数。","The question concerns middle position → use the median.","Median",["Maximum","Range","Variance"]]
]);
addTeaching("mean",
"均值像把所有糖果倒进一碗再平均分。总量和人数都要算对。",
"The mean is like pooling sweets and sharing them equally. You need both the total and the number of people.",
"求和 → 数观察值 → 总和 ÷ 个数 → 带上单位。",
"Add the values → count observations → divide total by count → keep the units.",[
["2、4、6 的均值是多少？","Find the mean of 2, 4, 6.","和为 12 → 有 3 个 → 12 ÷ 3 = 4。","Sum = 12 → count = 3 → mean = 4.","4"],
["四个人均值 8，总和是多少？","Four observations have mean 8. Find their sum.","均值 × 个数 → 8 × 4 = 32。","Mean times count → 8 × 4 = 32.","32"],
["五个值中一个增加 15，均值增加多少？","One of five values increases by 15. How much does the mean increase?","总和增加 15 → 分给 5 个 → 增加 3。","Total increases by 15 → divide by 5 → mean increases by 3.","3"],
["1、2、3、4、40 的均值是多少？","Find the mean of 1, 2, 3, 4, 40.","和为 50 → 除以 5 → 均值 10；40 把均值拉高。","Sum = 50 → divide by 5 → mean 10. The value 40 pulls it up.","10"],
["两个组各 10 人，均值 60 与 80，合并均值是多少？","Two groups each contain 10 observations and have means 60 and 80. Find the combined mean.","人数相等 → 总和 600 + 800 = 1400 → 除以 20 = 70。","Equal group sizes → total 600 + 800 = 1400 → divide by 20 → 70.","70"]
]);
addTeaching("centre-comparison",
"均值讲平均分配，中位数讲中间位置，众数讲最常见。先看问题在问哪一件事。",
"Mean means equal share, median means middle, and mode means most common. Choose the summary that matches the question.",
"问最多出现 → 众数。问队伍中间 → 中位数。问人均数量 → 均值。",
"Most frequent → mode. Middle in order → median. Per-case average → mean.",[
["2、2、8 的均值是多少？","Find the mean of 2, 2, 8.","总和 12 → 三个值 → 均值 4。","Sum 12 → three values → mean 4.","4"],
["同一组 2、2、8 的中位数是多少？","Find the median of 2, 2, 8.","已排序 → 中间为 2。","Values are ordered → the middle is 2.","2"],
["同一组 2、2、8 的众数是多少？","Find the mode of 2, 2, 8.","2 出现两次 → 众数 2。","2 occurs twice → mode 2.","2"],
["三者不相同就说明算错了吗？","Must a calculation be wrong if mean, median and mode differ?","三个统计量回答不同问题 → 可以合理地不相同。","They answer different questions → different values can be valid.","No",["Yes always","Only if all values are positive","Only if the sample size is even"]],
["正态分布中均值、中位数和众数是什么关系？","How do mean, median and mode compare in a theoretical normal distribution?","对称且单峰 → 三个中心重合。","The distribution is symmetric and unimodal → all three centres coincide.","They are equal",["Mean is always largest","Median is always largest","Mode is always smallest"]]
]);


addTeaching("range",
"极差像量一条队伍从最左边到最右边有多长，只看两个端点。",
"The range measures the distance from the leftmost to the rightmost score, using only the endpoints.",
"找最大 → 找最小 → 最大减最小 → 想想中间数据是否被忽略。",
"Find maximum → find minimum → subtract → remember that interior values do not enter the calculation.",[
["3、4、7、11 的极差是多少？","Find the range of 3, 4, 7, 11.","最大 11 → 最小 3 → 11 − 3 = 8。","Maximum 11 → minimum 3 → range 8.","8"],
["−8、−2、3 的极差是多少？","Find the range of −8, −2, 3.","最大 3 → 最小 −8 → 3 − (−8) = 11。","Maximum 3 → minimum −8 → 3 − (−8) = 11.","11"],
["5、5、5 的极差是多少？","Find the range of 5, 5, 5.","最大最小都是 5 → 差为 0。","Both endpoints are 5 → difference 0.","0"],
["1、2、3、9 与 1、7、8、9，极差是否相同？","Do 1, 2, 3, 9 and 1, 7, 8, 9 have the same range?","两个端点都为 1 和 9 → 极差都是 8。","Both sets have endpoints 1 and 9 → both ranges are 8.","Yes",["No, the first must be larger","No, the second must be larger","A mean is required to decide"]],
["所有值都加 20，极差会怎样？","What happens to the range when 20 is added to every value?","最大最小都平移 20 → 两者距离不变。","Both endpoints shift by 20 → their distance is unchanged.","It stays the same",["It increases by 20","It doubles","It becomes 20"]]
]);
addTeaching("quartile",
"IQR 只看中间一半有多宽，好比不让两头站得特别远的人主导结论。",
"The IQR measures the width of the middle half, reducing the influence of faraway endpoints.",
"先知道 Q1、Q3 → Q3 减 Q1 → 需要半四分位距再除以 2。",
"Identify Q1 and Q3 → subtract Q1 from Q3 → divide by 2 for the semi-IQR.",[
["Q1 = 6、Q3 = 14，IQR 是多少？","Q1 = 6 and Q3 = 14. Find the IQR.","14 − 6 = 8 → 中间一半跨 8 单位。","14 − 6 = 8 → the middle half spans 8 units.","8"],
["Q1 = 10、Q3 = 22，半四分位距是多少？","Q1 = 10 and Q3 = 22. Find the semi-IQR.","IQR = 12 → 12 ÷ 2 = 6。","IQR = 12 → semi-IQR = 6.","6"],
["最大值被改大，Q1 和 Q3 保持原值，IQR 变了吗？","Only the maximum increases while Q1 and Q3 stay fixed. What happens to the IQR?","公式只用两个四分位数 → IQR 不变。","The formula uses the two quartiles → IQR stays unchanged.","It stays the same",["It must increase","It must decrease","It becomes the range"]],
["A 的 IQR 为 4，B 为 9，哪个中间部分更分散？","A has IQR 4 and B has IQR 9. Which has greater middle spread?","比较 IQR → 9 更大 → B 的中间一半更宽。","Compare IQRs → 9 is larger → B has greater middle spread.","B",["A","They are equal","The means are needed"]],
["半四分位距为 5，IQR 是多少？","The semi-IQR is 5. Find the IQR.","半个为 5 → 整个为 10。","Half is 5 → the full IQR is 10.","10"]
]);
addTeaching("variance",
"方差先看每个数离均值多远，再把距离平方。负分数可以存在，负方差算不出来。",
"Variance uses squared distances from the mean. Scores can be negative, but a valid variance cannot be negative.",
"求均值 → 各值减均值 → 平方相加 → 总体除 N，样本除 n−1。",
"Find the mean → subtract it → square and add → divide by N for a population or n−1 for a sample.",[
["2、4、6 当作完整总体，方差是多少？保留两位小数。","Treat 2, 4, 6 as a population. Find the variance, rounded to two decimals.","均值 4 → 离差 −2、0、2 → 平方和 8 → 8 ÷ 3 ≈ 2.67。","Mean 4 → deviations −2, 0, 2 → squared sum 8 → 8/3 ≈ 2.67.","2.67"],
["同一组 2、4、6 当作样本，方差是多少？","Treat 2, 4, 6 as a sample. Find the sample variance.","平方和仍是 8 → 除以 3−1 → 得 4。","Squared-deviation sum remains 8 → divide by 2 → variance 4.","4"],
["有人报告方差 −3，最直接的结论是什么？","A report gives a variance of −3. What is the direct conclusion?","平方不会负 → 合法分母是正数 → 计算或报告有错。","Squares are nonnegative → the valid divisor is positive → this variance is invalid.","A calculation or reporting error occurred",["The class necessarily performed poorly","Some scores must be negative","The test must be too difficult"]],
["每个值都加 100，方差会怎样？","What happens to variance when 100 is added to every value?","均值也加 100 → 各离均差不变 → 方差不变。","The mean also rises by 100 → deviations are unchanged → variance stays the same.","It stays the same",["It rises by 100","It is multiplied by 100","It becomes zero"]],
["每个值都乘以 2，方差乘以几？","Every value is multiplied by 2. By what factor does variance change?","离差乘 2 → 平方乘 4 → 方差乘 4。","Deviations double → squared deviations multiply by 4 → variance multiplies by 4.","4"]
]);
addTeaching("sd",
"标准差把方差的平方单位还原。可以把它当作数据通常离中心多远的尺度。",
"Standard deviation returns variance to the original units and gives a scale for distance from the centre.",
"确认方差用哪个分母 → 算方差 → 开非负平方根 → 比较大小。",
"Choose the variance divisor → calculate variance → take the nonnegative square root → compare magnitudes.",[
["方差 25，标准差是多少？","Variance is 25. Find the standard deviation.","非负平方根 √25 = 5。","Take the nonnegative square root → SD = 5.","5"],
["标准差为 0，可以推出样本里的数怎样？","A valid sample SD is zero. What follows about its observed values?","平方离差和为零 → 每个离差都是零 → 所有值相同。","Squared deviations sum to zero → every deviation is zero → all observed values are equal.","All observed values are equal",["The whole population must be constant","All future samples must be constant","The sample contains several outliers"]],
["I 为 1、2、3、4、5；II 为 1、1、3、5、5；III 为 1、3、3、3、5。哪个 SD 最小？","I: 1,2,3,4,5; II: 1,1,3,5,5; III: 1,3,3,3,5. Which has the smallest SD?","三组均值都是 3 → 平方离差和分别 10、16、8 → III 最小。","All means are 3 → squared-deviation sums are 10, 16, 8 → III is smallest.","III",["I","II","They are equal"]],
["延续三组，哪个 SD 最大？","I: 1,2,3,4,5; II: 1,1,3,5,5; III: 1,3,3,3,5. Which has the largest SD?","人数相同 → 平方和最大的 II 方差和 SD 都最大。","Counts match → II has the largest squared-deviation sum → its SD is largest.","II",["I","III","They are equal"]],
["所有分数乘 3，SD 乘几？","Every score is multiplied by 3. By what factor does SD change?","方差乘 9 → 开方后 SD 乘 3。","Variance multiplies by 9 → SD multiplies by 3.","3"]
]);
addTeaching("skew",
"判断偏态时看尾巴。人数最多的位置和尾巴方向是两件事。",
"For skew, look at the tail. The most crowded part and the tail direction are different features.",
"先看大多数在哪 → 再看稀少极端值向哪延伸 → 给偏态命名。",
"Locate the cluster → locate the direction of extreme values → name the skew.",[
["多数工资在低端，少数高管工资很高，偏哪边？","Most salaries are low with a few very high salaries. What is the usual skew?","少数大值往右拉长尾 → 正偏。","Large values extend the right tail → positive skew.","Positive",["Negative","Always zero","Necessarily undefined"]],
["考试多数人接近满分，少数人很低分，通常是什么偏态？","Most scores are near the maximum with a few very low scores. What skew is typical?","低分往左伸长尾 → 负偏。","Low scores extend the left tail → negative skew.","Negative",["Positive","Necessarily zero","Always normal"]],
["偏度 −1.5 与 +.2，哪个按绝对值更偏？","Which coefficient indicates greater skew magnitude: −1.5 or +.2?","忽略方向比较绝对值 → 1.5 大于 .2。","Compare absolute values → 1.5 exceeds .2.","−1.5",["+.2","They are equal","The signs make comparison impossible"]],
["m3 = 8、m2 = 4，g1 是多少？","For m3 = 8 and m2 = 4, compute g1 = m3/m2^(3/2).","4^(3/2) = 8 → 8 ÷ 8 = 1。","4^(3/2) = 8 → g1 = 1.","1"],
["只知道偏度为零，能保证分布正态吗？","Does zero skewness alone establish a normal distribution?","偏度只描述不对称 → 还要看形状、尾部等信息。","Skewness describes asymmetry → other shape and tail features still matter.","No",["Yes always","Only if the mean is positive","Only if scores have units"]]
]);
addTeaching("kurtosis",
"峰度会特别在意离中心很远的值。先确认软件把正态基准设为 3 还是 0。",
"Kurtosis is especially sensitive to extreme deviations. First check whether the normal benchmark is 3 or 0.",
"认普通或超额峰度 → 对照基准 → 解释尾部而不只盯峰顶。",
"Identify ordinary or excess kurtosis → compare with the benchmark → interpret tail extremity.",[
["普通峰度 6，超额峰度多少？","Ordinary kurtosis is 6. Find excess kurtosis.","普通减 3 → 6 − 3 = 3。","Subtract 3 from ordinary kurtosis → 3.","3"],
["超额峰度 −.5，普通峰度多少？","Excess kurtosis is −.5. Find ordinary kurtosis.","加回 3 → 2.5。","Add 3 → ordinary kurtosis 2.5.","2.5"],
["普通峰度 5 属于哪类？","Ordinary kurtosis is 5. Which category applies?","5 高于正态基准 3 → 高峰态。","5 exceeds the normal benchmark 3 → leptokurtic.","Leptokurtic",["Mesokurtic","Platykurtic","Necessarily symmetric"]],
["普通峰度 2 属于哪类？","Ordinary kurtosis is 2. Which category applies?","2 低于 3 → 低峰态。","2 is below 3 → platykurtic.","Platykurtic",["Leptokurtic","Mesokurtic","Necessarily right-skewed"]],
["m4 = 48、m2 = 4，普通峰度是多少？","With m4 = 48 and m2 = 4, compute ordinary kurtosis.","分母 4² = 16 → 48 ÷ 16 = 3。","Denominator 4² = 16 → 48/16 = 3.","3"]
]);
addTeaching("inference",
"描述统计像给已经见到的人拍合照。推断统计想用这张合照了解更大的人群。",
"Descriptive statistics summarize the people observed. Inference uses them to learn about a larger target group.",
"圈出样本 → 圈出总体 → 看结论有没有越过观察范围 → 检查抽样。",
"Identify sample and population → ask whether the claim goes beyond observed cases → examine sampling.",[
["访问 50 户，想了解全市 5000 户，样本数是多少？","A survey observes 50 of a city's 5000 households. What is the sample size?","实际观察 50 户 → n = 50。","The observed group contains 50 households → n = 50.","50"],
["同一研究的总体有多少户？","The target city has 5000 households and 50 are sampled. What is the population size?","目标全市 5000 户 → 总体数 5000。","The target group is the city's 5000 households.","5000"],
["“这 50 户的均值是 3”属于什么？","The statement 'The 50 sampled households have mean 3' is what?","只概括已观察对象 → 描述统计。","It summarizes observed cases → descriptive.","Descriptive",["Inferential","A causal experiment","Random assignment"]],
["“据此估计全市均值”属于什么？","Using those 50 households to estimate the city mean is what?","从样本推广到总体 → 推断统计。","It generalizes from sample to population → inference.","Inferential",["Descriptive only","A complete census","A category label"]],
["只访问自己朋友就推广到全市，主要问题在哪？","What threatens a city-wide inference based only on the researcher's friends?","朋友圈可能与全市不同 → 抽样代表性不足。","Friends may differ from the city population → representativeness is doubtful.","Sampling bias",["The scores have units","The rows are sorted","The sample has a mean"]]
]);
addTeaching("charts",
"先看图的每一根柱、每一个点代表什么，再看轴。图形名字本身不能代替读图。",
"Read what a bar or dot represents, then read the axes. The chart's name alone does not tell the story.",
"认对象 → 认数量轴 → 比较高度或数点 → 说清结论的单位。",
"Identify cases → read the quantity axis → compare bars or count dots → state the units.",[
["红、蓝、绿人数 5、9、4，哪个类别人数最多？","Category counts are red 5, blue 9, green 4. Which is most frequent?","柱高或人数最大的是蓝 9。","The largest count is blue, with 9.","Blue",["Red","Green","All equal"]],
["三根频数柱高为 5、9、4，总人数多少？","Three frequency bars have heights 5, 9, 4. Find the total count.","把类别频数相加 → 18。","Add the category counts → 18.","18"],
["2 上两点，3 上四点，数据总共有几个？","A dot plot has two dots at 2 and four at 3. How many observations?","点数为 2 + 4 → 六个观察。","Count dots → 2 + 4 = 6.","6"],
["画班级所属专业人数，用什么图直观？","Which display directly compares student counts by programme?","专业是类别 → 分开的柱比较人数。","Programme is categorical → separate bars compare counts.","Bar chart",["A paired t-test table","A residual formula","A mean without categories"]],
["SPSS 里 30 名学生、每人 3 个指标，应有几行学生数据？","An SPSS dataset has 30 students with three variables each. How many case rows are needed?","每行一个学生 → 三个指标放列 → 30 行。","Use one row per student and three variable columns → 30 rows.","30"]
]);
addTeaching("variables",
"把实验想成做菜对比。你改的材料、你尝到的结果、你刻意固定的火候，分别是三种角色。",
"Think of comparing recipes. The ingredient changed, the outcome measured and the conditions kept fixed play different roles.",
"改什么 → IV。量什么 → DV。刻意固定什么 → 控制变量。",
"What changes → IV. What is measured → DV. What is held fixed → controlled variable.",[
["比较两种教学方法对成绩的影响，IV 是什么？","An experiment compares two teaching methods using exam marks. What is the IV?","方法由研究者安排 → 它是改变的因素。","Teaching method is assigned → it is the manipulated factor.","Teaching method",["Exam marks","The sample mean","The final p-value"]],
["同一实验的 DV 是什么？","In that teaching-method experiment, what is the DV?","实际测量的是成绩 → 成绩是结果。","Exam marks are measured → they are the outcome.","Exam marks",["Teaching method","A fixed classroom","The group label alone"]],
["让所有组在相同室温下做颜料实验，室温是什么角色？","Paint is tested at the same room temperature in all conditions. What is temperature's role?","刻意固定 → 控制变量。","It is deliberately held constant → a controlled variable.","Controlled variable",["Dependent variable","Manipulated factor","Outcome score"]],
["改变灯光强度、量植物高度，量的是哪一项？","Light intensity is changed and plant height is measured. Which is the outcome?","题目说测量植物高度 → DV 是高度。","The measured result is plant height → the DV.","Plant height",["Light intensity","Fixed watering amount","The plant ID"]],
["纸张在一次实验固定，在另一实验被改变，角色能变吗？","Can paper type be controlled in one experiment and manipulated in another?","角色由研究问题和操作决定 → 可以改变。","Roles depend on the design and question → yes.","Yes",["No, every characteristic has one permanent role","Only if paper is numerical","Only if the study has no outcome"]]
]);


addTeaching("hypothesis",
"原假设像比较前的基准说法。先把“没有差别”写清楚，再用样本检查它是否站得住。",
"The null hypothesis is the comparison's starting claim. State the no-difference benchmark before examining the sample.",
"先确定总体参数 → 写 H0 的等号 → 再写题目要找的差异方向。",
"Identify the population parameter → write equality in H0 → state the alternative direction.",[
["想检验平均蛋白是否为 15 g，H0 怎么写？","Testing whether population mean protein equals 15 g, which null is appropriate?","对象是总体均值 μ → 基准 15 → μ = 15。","The parameter is μ → the reference is 15 → μ = 15.","μ = 15",["μ ≠ 15","The sample size is 15","Every individual bar is 15"]],
["题目问“不同”而没指定方向，应选哪种备择？","A question asks whether a population mean differs from 15, with no direction specified. Which alternative?","可能更高或更低 → 双侧 μ ≠ 15。","Higher or lower values count → two-sided μ ≠ 15.","μ ≠ 15",["μ = 15","μ > 15 only","μ < 15 only"]],
["两总体均值相等时，差值是多少？","Under a null of equal population means, what is μ1 − μ2?","相等的量相减 → 0。","Subtract equal quantities → zero.","0"],
["能不能看完 p 值才挑自己喜欢的 H1？","When should the intended alternative be specified?","先确定问题和方向 → 再看结果。","Specify the question and direction → then examine results.","Before examining the test result",["After choosing the smallest p-value","Only after rejecting H0","After deleting inconvenient data"]],
["假设是关于样本均值本身，还是总体均值？","A standard mean hypothesis test makes its statistical claim about what?","用样本作证据 → 要回答的是总体参数。","The sample supplies evidence → the target claim concerns a population parameter.","Population means",["Only the recorded row order","The file name","Only the observed sample size"]]
]);
addTeaching("alpha",
"先定一条证据门槛 α，再看数据给出的 p。p 小说明这批数据在原假设下更不常见。",
"Choose an evidence threshold α, then compare the data's p-value. A smaller p indicates greater incompatibility with the null model.",
"先写 α → 读 p → p≤α 拒绝 → p>α 证据不足。",
"State α → read p → reject when p≤α → otherwise fail to reject.",[
["α = .05，p = .02，做什么决定？","At α = .05 and p = .02, what is the decision?","比较 .02 与 .05 → 更小 → 拒绝 H0。","Compare .02 with .05 → it is smaller → reject H0.","Reject H0",["Fail to reject H0","Prove H0","Set α to .01 after the test"]],
["α = .01，p = .03，做什么决定？","At α = .01 and p = .03, what is the decision?","p 大于门槛 → 证据还不够 → 未能拒绝。","p exceeds the threshold → evidence is insufficient at this level → fail to reject.","Fail to reject H0",["Reject H0","Prove exact equality","Report p = .01"]],
["置信水平 98%，对应 α 是多少？","What α corresponds to a matching 98% confidence level? Enter a decimal.","1 − .98 = .02。","1 − .98 = .02.","0.02"],
["α=.05 是在什么条件下控制错误拒绝的概率？","Alpha controls rejection probability under which condition?","先假定 H0 真 → 错拒真 H0 才是第一类错误。","Assume H0 is true → rejecting it is a Type I error.","When H0 is true",["When H0 is false only","After all conclusions are known","Whenever the alternative is certainly true"]],
["p=.40 能证明两组实际完全一样吗？","Does p = .40 establish that two population means are exactly equal?","只是这次证据不够 → 不能证明相等。","It indicates insufficient evidence against H0 at common levels → it does not prove equality.","No",["Yes always","Only if the sample sizes match","Only if the sample mean is positive"]]
]);
addTeaching("errors",
"把检验想成报警器。没事却响是假阳性，有事却没响是假阴性。",
"Think of a test as an alarm. Sounding when nothing is wrong is a false positive. Staying silent when something is wrong is a false negative.",
"先看真实情况 → 再看决定 → 真 H0 被拒是 I 类；假 H0 未拒是 II 类。",
"Read the true state → read the decision → reject true H0 is Type I; fail to reject false H0 is Type II.",[
["药物无效，却被宣布有效，是什么错误？","An ineffective drug is declared effective. Which error occurred?","H0 无效是真的 → 被拒绝 → 第一类错误。","The no-effect null is true → it was rejected → Type I error.","Type I",["Type II","Correct detection","Perfect power"]],
["药物有效，却没发现效果，是什么错误？","A truly effective drug's effect is missed. Which error occurred?","H0 无效是假的 → 未拒绝 → 第二类错误。","The no-effect null is false → it was not rejected → Type II error.","Type II",["Type I","Correct rejection","No error by definition"]],
["β=.30，功效是多少？","If β = .30, find power as a decimal.","功效 1−β → 1−.30=.70。","Power = 1 − β → .70.","0.7"],
["功效 .85，β 是多少？","If power is .85, find β.","β=1−功效 → .15。","β = 1 − power → .15.","0.15"],
["拒绝了实际为假的 H0，是错误吗？","Rejecting a false H0 is which outcome?","真实有差异 → 检验发现了 → 正确拒绝。","A departure exists → the test detects it → correct rejection.","Correct rejection",["Type I error","Type II error","Proof that α is zero"]]
]);
addTeaching("one",
"单样本 t 检验像检查一批能量棒是否符合包装上的平均承诺。只有一组数据和一个固定目标。",
"A one-sample t-test compares one group with a fixed reference, such as the average protein claimed on a label.",
"认一组和固定值 → 算平均差 → 除以 SE → 用 df 和 p 作判断。",
"Identify one sample and a fixed value → compute the mean difference → divide by SE → use df and p for the decision.",[
["一组学生均分是否偏离 60，选什么检验？","Which test compares one sample mean with a fixed target of 60?","一组连续分数 → 固定目标 60 → 单样本 t。","One set of continuous scores → fixed reference 60 → one-sample t.","One-sample t-test",["Paired t-test","Independent-samples t-test","Cramér's V"]],
["均值 64、目标 60、s=8、n=16，t 是多少？","Mean = 64, target = 60, s = 8, n = 16. Compute t.","SE=8÷4=2 → 平均差4 → 4÷2=2。","SE = 8/√16 = 2 → difference 4 → t = 2.","2"],
["n=12，df 是多少？","For a one-sample t-test with n = 12, find df.","df=n−1 → 11。","df = n − 1 → 11.","11"],
["t 为负数，就说明算错了吗？","Does a negative one-sample t necessarily indicate an error?","分母为正 → 均值低于目标时分子为负 → 合理。","The denominator is positive → a mean below target gives a negative numerator → valid.","No",["Yes always","Only if n is odd","Only if p is negative"]],
["p=.008、α=.05，结论怎么写？","At p = .008 and α = .05, what is the conclusion?","p 小于 α → 拒绝该固定总体均值。","p is below α → reject the specified population mean.","Reject H0",["Prove every value differs from the target","Fail to reject H0","Prove the effect is large"]]
]);
addTeaching("independent",
"独立样本 t 比较两群不同的人。先确认不是同一个人测两次。",
"An independent-samples t-test compares two separate groups. First check that cases are not repeated or matched across groups.",
"看两组是否独立 → 认连续结果 → 看等方差或 Welch 行 → 读双侧 p。",
"Check independence → identify the continuous outcome → choose pooled or Welch reading → inspect the two-sided p.",[
["甲班和乙班是不同学生，比较分数，适合哪种 t 检验？","Two classes contain different unrelated students. Which t-test compares their mean scores?","不同人组成两组 → 独立样本。","Different unrelated people form two groups → independent samples.","Independent-samples t-test",["Paired t-test","One-sample t-test","A rank correlation"]],
["两组各 8 人，合并方差版本的 df 是多少？","For the pooled t-test with n1 = 8 and n2 = 8, find df.","8+8−2=14。","df = 8 + 8 − 2 = 14.","14"],
["第一组均值 70、第二组 64、差的 SE=3，t 是多少？","Group means are 70 and 64, with difference SE = 3. Compute first minus second t.","差为6 → 除SE3 → t=2。","Difference 6 → divide by SE 3 → t = 2.","2"],
["总体方差难以支持相等时，哪个版本更适合？","Which version does not require equal population variances?","看方差条件 → Welch 允许方差不等。","Check the variance condition → Welch allows unequal variances.","Welch t-test",["Pooled equal-variance t-test","Paired t-test by default","One-sample t-test for two groups"]],
["Levene 的 p=.60 能证明方差一样吗？","Does Levene p = .60 prove equal variances?","只能说没有足够证据反对该方差假设 → 不能证明。","It provides insufficient evidence against equal variances at common levels → not proof.","No",["Yes always","Only if group means differ","Only if the p-value is rounded"]]
]);
addTeaching("paired",
"配对 t 是先比较每个人自己的两次表现，再看这些差平均是不是零。",
"A paired t-test compares each person with themselves first, then asks whether the average difference is zero.",
"确认一对是谁 → 固定减法方向 → 每对算差 → 对差做单样本 t。",
"Identify each pair → fix subtraction order → compute differences → apply a one-sample t-test to the differences.",[
["同一批学生前测后测，适合哪种检验？","The same students take a pre-test and post-test. Which t-test suits mean change?","每人两次形成一对 → 配对 t。","Each student supplies a matched pair → paired t.","Paired t-test",["Independent-samples t-test","One-sample t-test on only the pre-test","Cramér's V"]],
["10 对完整数据，df 是多少？","A paired t-test has 10 complete pairs. Find df.","把差值看成10个观测 → df=9。","There are 10 differences → df = 9.","9"],
["平均差 4、差的 s=6、n=9，t 是多少？","Mean difference = 4, SD of differences = 6, n = 9 pairs. Compute t.","SE=6÷3=2 → 4÷2=2。","SE = 6/√9 = 2 → t = 4/2 = 2.","2"],
["小样本配对 t 重点看什么正态性？","For a small-sample paired t-test, which distribution's normality matters directly?","计算对象是每对的差 → 检查差值分布。","The analysed observations are differences → inspect their distribution.","The paired differences",["Only the ID numbers","Only the pre-test values","Only the group labels"]],
["把前减后改成后减前，双侧 p 会变吗？","Reverse every paired difference's sign. What happens to the two-sided p-value?","t 变号 → 绝对值不变 → 双侧 p 不变。","t changes sign → absolute t stays fixed → two-sided p is unchanged.","It stays the same",["It becomes negative","It doubles","It always becomes zero"]]
]);
addTeaching("correlation",
"相关描述一起变化的趋势。正相关不表示每个人都符合，也不表示一项造成另一项。",
"Correlation describes a tendency to vary together. A positive association allows exceptions and does not by itself establish cause.",
"看散点方向 → 看点离趋势多远 → 读强度 → 避免把趋势写成保证。",
"Read direction → inspect scatter → describe strength → avoid deterministic claims.",[
["模拟考高分者通常期末也高分，说明什么？","Trial and final scores correlate positively. Which statement is justified?","通常同方向变化 → 不是每个人都必然如此。","Scores tend to move in the same direction → individual exceptions are possible.","Higher trial scores tend to accompany higher final scores",["Every student improves in the final","Every high trial scorer must score high","Trial scores prove the cause of final scores"]],
["固定路程下，速度越大，用时通常怎样？","For a fixed distance, how do speed and travel time relate?","时间=路程÷速度 → 速度增大时用时减少。","Time = distance/speed → greater speed gives shorter time.","Negative association",["Positive association","Exact positive linear association","No relationship is possible"]],
["海拔越高气温越低，相关方向是什么？","Temperature tends to decrease as altitude increases. What is the association direction?","一增一减 → 负相关。","One rises while the other falls → negative association.","Negative",["Positive","Necessarily zero","Necessarily causal proof"]],
["点图近一条向上直线，方向和强度怎样？","Points lie close to an upward straight line. Which description fits?","向上说明正 → 贴线说明强。","Upward means positive → close to the line means strong.","Strong positive linear association",["Strong negative association","Weak negative association","No linear association"]],
["r=.2 与 r=−.8，哪一个线性关系更强？","Which has stronger linear association, r = .2 or r = −.8?","比较绝对值 .2 与 .8 → −.8 更强。","Compare magnitudes .2 and .8 → −.8 is stronger.","r = −.8",["r = .2","They are equal","Positive r is always stronger"]]
]);
addTeaching("pearson",
"Pearson r 像给散点图的直线趋势打分。符号讲方向，绝对值讲贴近直线的程度。",
"Pearson r scores a linear pattern. Its sign gives direction and its magnitude gives strength.",
"先确认两个数量变量 → 看散点是否近直线 → 读 r → 再把 p 与 α 比。",
"Identify two quantities → inspect linearity → read r → compare p with α.",[
["r=−.75，应怎么描述？","How should r = −.75 be described using the lecture guide?","负号是下降 → .75 在较高强度区间。","Negative sign means decreasing → magnitude .75 is high under the lecture guide.","High negative linear correlation",["High positive correlation","Zero correlation","A negative variance"]],
["r=.6、p=.02、α=.05，怎么解读？","For r = .6, p = .02 and α = .05, which interpretation fits?","r 正且中等 → p小于α → 线性关联显著。","r is positive and moderate → p is below α → significant linear association.","Significant positive linear association",["Proof of causation","Significant negative association","No evidence of a linear association"]],
["X 全是 5，能算出合法 Pearson r 吗？","All X values equal 5. Is Pearson r defined?","X 的变异为零 → 公式分母为零 → 未定义。","X has zero variability → the denominator is zero → r is undefined.","No",["Yes, r must be 1","Yes, r must be −1","Yes, r must be 0"]],
["Y=3X+7，X 有变异，r 是多少？","If Y = 3X + 7 exactly and X varies, find Pearson r.","所有点落在正斜率直线上 → 完全正相关。","All points fall on an upward line → r = 1.","1"],
["相关为零，就能排除 U 型关系吗？","Does r = 0 rule out a U-shaped association?","r 衡量直线 → 弯曲关系可能仍很强。","r measures a linear pattern → a strong curved relationship can remain.","No",["Yes always","Only if the values are continuous","Only if the mean is zero"]]
]);
addTeaching("spearman",
"Spearman 先把数据改成名次，再比较名次是否一起升降。",
"Spearman compares whether ranks rise and fall together.",
"各列排秩 → 相同值用平均秩 → 对照同一对象 → 无并列时可用简式。",
"Rank each column → use average ranks for ties → pair by case → use the shortcut only without ties.",[
["两列名次都为 1、2、3、4，ρ 是多少？","Both rank columns are 1,2,3,4. Find Spearman ρ.","每对差为0 → Σd²=0 → ρ=1。","All rank differences are zero → ρ = 1.","1"],
["一列 1、2、3，另一列 3、2、1，ρ 是多少？","Rank columns are 1,2,3 and 3,2,1. Find Spearman ρ.","名次完全反向 → ρ=−1。","Ranks reverse perfectly → ρ = −1.","-1"],
["并列占第 4 与第 5 位，平均秩是多少？","Tied values occupy positions 4 and 5. Find their average rank.","(4+5)÷2=4.5。","Average the occupied positions → 4.5.","4.5"],
["n=4、Σd²=2、无并列，ρ 是多少？","With n = 4, Σd² = 2 and no ties, compute Spearman ρ.","分母4×15=60 → 1−12÷60=.8。","Denominator 4 × 15 = 60 → 1 − 12/60 = .8.","0.8"],
["两项都是满意度等级，研究一起升降，首选课堂哪个相关？","Two variables are ordered satisfaction ratings. Which lecture method measures rank association?","数据有序 → 以秩比较 → Spearman。","Ordered ratings → compare ranks → Spearman.","Spearman",["One-sample t-test","Cramér's V for unordered categories only","A paired mean test"]]
]);
addTeaching("cramer",
"Cramér's V 看两种类别怎么搭配，比如学习方式和是否通过。它没有正负方向。",
"Cramér's V describes association between two categories, such as study format and pass/fail. It has no signed direction.",
"做列联表 → 看 χ² 与期望频数 → 用 V 描述强度 → 用 p 判断证据。",
"Build a crosstab → check chi-square and expected counts → use V for strength → use p for evidence.",[
["学习方式三类、通过与否两类，该用哪种关联指标？","Study format has three unordered categories and pass/fail has two. Which association measure fits?","两个都是类别 → 列联表 → Cramér's V。","Both are categorical → crosstab → Cramér's V.","Cramér's V",["Pearson r on arbitrary labels","A paired t-test","A one-sample t-test"]],
["V=−.4 是合法结果吗？","Is Cramér's V = −.4 a valid value?","V 范围0到1 → 负数非法。","V ranges from 0 to 1 → a negative value is invalid.","No",["Yes, it means negative association","Only for a 2 by 2 table","Only when p is significant"]],
["χ²=9、n=100、2×2 表，V 是多少？","χ² = 9, n = 100, and the table is 2 by 2. Find V.","较小维度减1=1 → √(9÷100)=.3。","Dimension factor = 1 → √(9/100) = .3.","0.3"],
["4×3 表的维度项 min(R−1,C−1) 是多少？","For a 4 by 3 table, find min(R−1,C−1).","4−1=3、3−1=2 → 取较小2。","Compare 3 and 2 → choose 2.","2"],
["V=.7 能说 A 增加导致 B 增加吗？","Does V = .7 establish an increasing causal effect of A on B?","V没有正负方向 → 关联不能单独证明因果。","V has no signed direction → association alone does not establish causation.","No",["Yes, because .7 is positive","Yes, for every table","Only if the categories have numeric codes"]]
]);


addTeaching("prediction",
"回归像用线索估一个未知数。线索能帮你猜得更好，却不等于找到了原因。",
"Regression uses clues to estimate an unknown quantity. A useful clue need not be a cause.",
"先说想猜哪个结果 → 再说有哪些已知线索 → 区分预测与因果。",
"Name the outcome → identify available predictors → distinguish prediction from causation.",[
["根据入职工资预测当前工资，结果变量是什么？","Starting salary predicts current salary. Which is the outcome?","目标是猜当前工资 → 当前工资是Y。","The target is current salary → it is Y.","Current salary",["Starting salary","The sample size","The row order"]],
["用身高预测体重，身高是什么？","Height is used to predict weight. What is height?","已知线索是身高 → 它是预测变量。","Height supplies the clue → it is a predictor.","Predictor",["Outcome","Residual","Significance threshold"]],
["用过去数据估计今天的工资，算回归预测吗？","Can regression predict an unknown current salary from past records?","预测针对未知值 → 不限于未来时间。","Prediction concerns unknown values → they need not be future values.","Yes",["No, only future dates qualify","Only if all records are identical","Only if the coefficient is zero"]],
["冰淇淋销量能预测游泳人数，是否说明冰淇淋使人游泳？","Ice-cream sales predict swimming attendance. What alternative explanation should be considered?","炎热天气可能同时提高二者 → 需要考虑共同因素。","Hot weather can affect both → consider a common factor.","Temperature may influence both",["Prediction alone proves causation","The outcome must be an ID code","There cannot be a third variable"]],
["预测成绩时应先做什么？","Before fitting a straight line to study hours and marks, what should be inspected?","先画两变量散点 → 检查线性与异常点。","Plot the pair → inspect linearity and unusual points.","A scatterplot",["Only the requested conclusion","Only the file name","Only the alphabetic variable order"]]
]);
addTeaching("simple-regression",
"把回归式当作计费规则。固定起步价加上每单位收费，再乘数量。",
"Read a regression equation like a bill: a starting amount plus a per-unit amount times quantity.",
"找 a、b、X → 先算 b×X → 再加 a → 用原单位解释。",
"Identify a, b and X → multiply b by X → add a → interpret in the original units.",[
["Ŷ=10+2X，X=5，预测多少？","For Ŷ = 10 + 2X and X = 5, find Ŷ.","先2×5=10 → 再加10 → 20。","2 × 5 = 10 → add 10 → 20.","20"],
["Ŷ=100−4X，X 每多1，预测变化多少？","For Ŷ = 100 − 4X, find the signed change in prediction per one-unit rise in X.","读 X 前系数 → −4 → 每单位下降4。","Read the slope −4 → predicted Y falls by 4 per unit.","-4"],
["Ŷ=12+.5X 的截距是多少？","Find the intercept in Ŷ = 12 + .5X.","令X=0 → 预测12 → 截距12。","Set X to 0 → prediction 12 → intercept 12.","12"],
["样本X只在10到20，预测X=100叫什么？","The observed X range is 10 to 20. Predicting at X = 100 is what?","100超出观察范围 → 外推。","100 lies outside the observed range → extrapolation.","Extrapolation",["Interpolation","A sample median","A paired test"]],
["每分钟加 .30，多用 20 分钟，额外费用多少？","Extra minutes cost .30 each. Find the extra charge for 20 minutes.","只算额外部分 → .30×20=6。","Use only the extra component → .30 × 20 = 6.","6"]
]);
addTeaching("residuals",
"残差就是“实际减预测”。先写减法方向，正负号就不会反。",
"A residual is observed minus predicted. Write the subtraction order before deciding its sign.",
"实际Y → 减预测Ŷ → 正为低估、负为高估 → 平方后再比较总误差。",
"Observed Y → subtract predicted Ŷ → positive means underprediction, negative means overprediction → square to compare errors.",[
["预测50、实际54，残差是多少？","Predicted Y is 50 and observed Y is 54. Find the residual.","54−50=4 → 模型低估4。","54 − 50 = 4 → underprediction by 4.","4"],
["预测50、实际46，残差是多少？","Predicted Y is 50 and observed Y is 46. Find the residual.","46−50=−4 → 模型高估4。","46 − 50 = −4 → overprediction by 4.","-4"],
["残差−3与+3的平方和是多少？","Residuals are −3 and +3. Find their squared sum.","各平方为9 → 总和18。","Each square is 9 → total 18.","18"],
["残差为零，说明这个点在哪里？","Where is an observed point with residual zero?","实际=预测 → 点在拟合线上。","Observed equals fitted → the point lies on the fitted line.","On the fitted line",["Always at X = 0","Always at Y = 0","Outside the observed range"]],
["残差和为零能说明每个预测都准确吗？","Does a zero sum of residuals mean every prediction is exact?","正负可互相抵消 → 个别误差仍可很大。","Positive and negative values can cancel → individual errors can remain large.","No",["Yes always","Only if n is even","Only if the slope is positive"]]
]);
addTeaching("multiple-regression",
"多元回归像同时看几个线索。解释一个线索时，把其余线索固定在相同值。",
"Multiple regression combines several clues. Interpret one while holding the other modelled clues fixed.",
"代入每个X → 分别乘系数 → 加截距 → 解读时说清其他变量保持相同。",
"Substitute each X → multiply by its coefficient → add the intercept → state what is held fixed.",[
["Ŷ=20+2X1+3X2，X1=4、X2=2，预测多少？","For Ŷ = 20 + 2X1 + 3X2, X1 = 4 and X2 = 2. Find Ŷ.","20+2×4+3×2 → 20+8+6=34。","20 + 8 + 6 = 34.","34"],
["同式X1多3、X2不变，预测多多少？","For Ŷ = 20 + 2X1 + 3X2, X1 rises by 3 while X2 stays fixed. Find the change in Ŷ.","只看X1这项 → 2×3=6。","Only the X1 component changes → 2 × 3 = 6.","6"],
["控制基础成绩，复习时长系数为2，表示什么？","With baseline score held fixed, study-hours coefficient B = 2 means what?","每多一小时 → 模型预测多2分 → 是调整后的关联。","An extra hour corresponds to 2 more predicted marks at the same baseline score.","Two more predicted marks per extra hour, at fixed baseline",["Every student certainly gains 2 marks","Baseline scores increase by 2","The p-value equals 2"]],
["比较不同单位预测变量的系数，哪个已经用标准差作单位？","Which coefficient is expressed in standard deviation units?","原始B保留原单位 → 标准化β用SD单位。","B retains original units → standardized β uses SD units.","Standardized β",["Unstandardized B","The intercept label","The case count"]],
["β=−.3，X多2个SD，其余固定，预测Y变几个SD？","β = −.3. X rises by 2 SD with other predictors fixed. Find the predicted Y change in SD.","−.3×2=−.6 → 预测下降.6个SD。","−.3 × 2 = −.6 SD.","-0.6"]
]);
addTeaching("selection",
"把候选变量想成进队的人。四种方法的区别是一起进、一个个进、先全进再删，还是进了还回头检查。",
"Imagine candidate predictors joining a team. Methods differ in whether they enter together, enter one by one, leave a full team, or are rechecked.",
"先看起点 → 再看只加、只删或会回头检查 → 命名方法。",
"Identify the starting model → check whether variables are added, removed or rechecked → name the method.",[
["研究者指定4个变量一起进入，是什么方法？","Four prespecified predictors enter together. Which method is this?","一起放入 → Enter。","Enter them together → Enter method.","Enter",["Forward","Backward","Stepwise"]],
["先放全体变量，再删不符合准则的，是什么方法？","All predictors start in the model and some are removed. Which method?","起点是全模型 → 向外删 → Backward。","Start full → remove predictors → backward.","Backward",["Forward","Enter","One-sample t"]],
["从小模型开始逐个加，之前变量在本步保留，是什么方法？","Starting small, predictors are added while earlier ones remain at that stage. Which method?","起点小 → 往里加 → Forward。","Start small → add predictors → forward.","Forward",["Backward","Enter","A frequency table"]],
["新变量加入后，还检查旧变量能否留下，是什么方法？","A new variable enters and earlier variables are reassessed. Which method?","加入后回头检查 → Stepwise。","Add and recheck → stepwise.","Stepwise",["Enter only","Backward without additions","A paired comparison"]],
["Stepwise 自动选完了，就不需要检查共线性吗？","After stepwise selection, are collinearity checks still relevant?","自动筛选不能保证消除重叠线索 → 仍要检查。","Selection does not guarantee absence of overlapping predictors → checks remain relevant.","Yes",["No, selection guarantees no collinearity","Only if every coefficient is zero","Only if there is no outcome"]]
]);
// A new scatterplot supports the diagram-reading item.
chapters[4].find(c=>c.id==="correlation").questions.find(q=>q.id==="correlation-guided-4").visual="exam-upward";

addWeek6Teaching();
