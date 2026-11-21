/* Week 1, teacher slides 21–28. The age, teaching-method, salary, stem and colony displays follow the lecture. */
function graphLessonTable(title, headers, rows, note) {
  const header = headers.map(value => `<th scope="col">${value}</th>`).join("");
  const body = rows.map(([label, ...values]) =>
    `<tr><th scope="row">${label}</th>${values.map(value => `<td>${value}</td>`).join("")}</tr>`
  ).join("");
  return `<figure class="guide-figure"><table><caption>${title}</caption><thead><tr>${header}</tr></thead><tbody>${body}</tbody></table>
    <figcaption>${note[0]}${centreZh(note[1])}</figcaption></figure>`;
}

function graphAgeTable() {
  return graphLessonTable("Age in one class · PDF p. 22", ["Age (years)", "Frequency (students)"],
    [["18", "15"], ["19", "6"], ["20", "4"]],
    ["Read across a row to link an age with a count.", "沿同一行横向读，将年龄和对应的人数联系起来。"]);
}

function graphLectureImage(page, alt, caption, zh) {
  return `<figure class="guide-figure figure"><img style="display:block;width:100%;height:auto;margin:auto" src="${week1ClearImages[page]}" alt="${alt}">
    <figcaption>${caption}${centreZh(zh)}</figcaption><button class="soft" type="button" data-zoom>Enlarge graph</button></figure>`;
}

function graphTeachingBoxes() {
  return graphLectureImage(24, "Four vertical box plots on one score scale. From Method 1 through Method 4, median lines lie near 25, 25, 28 and 32. Method 3 has the greatest distance between box edges. An isolated point sits above Method 2.",
    "Scores by teaching method · PDF p. 24. Compare the horizontal lines inside the four boxes on the same vertical score scale.",
    "讲义第 24 页：四种教学法的成绩共用同一纵轴，比较各箱体内部横线的位置。");
}

function graphSalaryHistogram() {
  return graphLectureImage(25, "Frequency histogram of gross monthly salary. Tall bars cluster toward the lower salaries, followed by several smaller bars extending toward higher salaries.",
    "Gross monthly salary · PDF p. 25. Read salary along the bottom axis and the number of people up the side.",
    "讲义第 25 页：横轴是月薪总额，纵轴是相应薪资区间内的人数。");
}

function graphStemTable() {
  return graphLessonTable("Stem-and-leaf plot · PDF p. 27", ["Stem", "Leaves in increasing order"],
    [["0", "1　4"], ["1", "3　6　6　7"], ["2", "0　2　5"], ["3", "6　7　7　7　8"], ["4", "0　1　3"]],
    ["Key: 2 | 0 = 20. These five rows preserve 17 observations. Read one stem with one leaf at a time.", "图例：2｜0 表示 20。五行共保留了 17 个观察值，每次把同一行的一片叶与茎合起来读。"]);
}

function graphColonyDots() {
  const colonies = ["A", "B", "C", "D"];
  const stacks = [7, 3, 5, 1].map((count, i) => {
    const x = 62 + i * 84;
    const dots = Array.from({length:count}, (_, j) =>
      `<circle cx="${x}" cy="${108-j*14}" r="5.25" fill="#5940a0"/>`).join("");
    return dots + `<text x="${x}" y="139" text-anchor="middle" font-size="14" fill="#312b43">${colonies[i]}</text>`;
  }).join("");
  return `<figure class="guide-figure"><p><strong>Vaccinated babies by colony · PDF p. 28</strong></p>
    <svg style="display:block;width:100%;max-width:28rem;height:auto" viewBox="0 0 380 152" role="img" aria-label="One dot is one vaccinated baby. Colony A has 7 dots, B has 3, C has 5 and D has 1.">
    <line x1="22" y1="120" x2="357" y2="120" stroke="#827991"/>${stacks}</svg>
    <figcaption>Each dot represents one vaccinated baby.${centreZh("每个点代表一名已经接种疫苗的婴儿。")}</figcaption></figure>`;
}

const graphFrequencyTopic = {
  id:"frequencies", title:"Frequency tables", titleZh:"频数表", pages:[21,22],
  question:["How many students does one row stand for?", "频数表的一行代表几名学生？"],
  idea:["Start with the age list on the teacher’s slide. Students who share an age are collected in one row. The frequency beside the age counts those students. You can recover the class size without seeing every student’s individual record.", "老师把相同年龄的学生合并在一行，旁边的频数就是该年龄的人数。即使没有每位学生的原始记录，也能还原班级总人数。"],
  method:["Read the row label and its count together. Add the counts for the whole sample. To describe a share, divide the count of interest by the relevant total, then multiply by 100 if a percentage is requested.", "把行标签与该行频数一起读。各行频数之和是样本总数。求比例时，用关心的频数除以相应总数；若要求百分比，再乘 100%。"],
  visual:graphAgeTable,
  examples:[
    {prompt:["On p. 22, what does the 6 beside age 19 mean?","第 22 页，年龄 19 旁边的 6 表示什么？"], hint:["Read the two column headings aloud.","读出这两列的列名。"], steps:[
      ["The first column gives the age in years. Find the row marked 19.","第一列以岁为单位，找到标着 19 的行。"],["The second column gives the number of students with that age.","第二列给出拥有这个年龄的学生人数。"]], answer:["Six students are 19 years old.","有 6 名学生是 19 岁。"]},
    {prompt:["How many students are represented by the three age rows on p. 22?","第 22 页三个年龄行总共代表几名学生？"], hint:["Every person appears in one age row.","每个人恰好属于一个年龄行。"], steps:[
      ["Read the three frequencies: 15, 6 and 4.","读出三个频数：15、6 和 4。"],["Add them to count the class: 15 + 6 + 4 = 25.","将频数相加得到 15 + 6 + 4 = 25。"]], answer:["25 students.","25 名学生。"]},
    {prompt:["On p. 22, what percentage of the class is 18?","第 22 页全班中 18 岁学生占百分之几？"], hint:["Use the class size as your denominator.","分母用全班总人数。"], steps:[
      ["Fifteen of the 25 students are 18 years old.","25 名学生中，15 名是 18 岁。"],["15 ÷ 25 = 0.60. Express the share as a percentage.","15 ÷ 25 = 0.60，将此比例换算成百分数。"]], answer:["60%.","60%。"]},
    {prompt:["On p. 22, how many students are at least 19 years old?","第 22 页至少 19 岁的学生有几名？"], hint:["“At least 19” includes the 19-year-olds.","“至少 19 岁”包括恰好 19 岁的人。"], steps:[
      ["Select both the 19-year and 20-year rows.","选中 19 岁和 20 岁两行。"],["Add 6 students and 4 students.","将这两行的 6 人与 4 人相加。"]], answer:["10 students.","10 名学生。"]},
    {prompt:["In a different class of 30, the only age groups are 18, 19 and 20. The first two counts are 12 and 10. Find the missing count.","另一个班共 30 人，年龄只有 18、19、20 岁，前两组分别有 12 人和 10 人。求缺失的频数。"], hint:["How many students have already been counted?","已经数过多少名学生？"], steps:[
      ["The two recorded rows account for 12 + 10 = 22 students.","已有两行共计入 12 + 10 = 22 名学生。"],["The remaining row contains 30 − 22 students.","剩下一行的人数是 30 − 22。"]], answer:["8 students aged 20.","8 名 20 岁学生。"]}
  ],
  check:{prompt:["A different table has three rows with counts of 4, 9 and 7. What fraction of all cases is in the second row?","另一张表有三行，频数依次为 4、9、7。第二行占全部观察的几分之几？"], choices:[["9/3","9/3"],["9/20","9/20"],["9/7","9/7"]],key:1,feedback:[
    ["Three counts the rows. Add all their frequencies before dividing.","3 是行数。先把各行频数相加，再用这个总数作分母。"],["There are 20 cases altogether and 9 are in the second row.","共 20 个观察，其中 9 个位于第二行。"],["Seven counts the third row only. The question asks about all cases.","7 只是第三行的频数。本题的分母是全部观察数。"]]}
};

const graphBoxTopic = {
  id:"boxplot",title:"Box plots",titleZh:"箱线图",pages:[23,24],
  question:["Which teaching method has the highest middle score?","哪种教学法的中间成绩最高？"],
  idea:["Imagine lining up the scores within each group. The median sits in the middle. The lower and upper quartiles (Q1 and Q3) mark the edges of the box, which spans the middle half of the distribution. In the lecture’s vertical plots, a higher median line means a higher middle score.", "想象每组成绩各自排成一队。队伍中间是中位数，下四分位数 Q1 与上四分位数 Q3 构成箱体的两端，圈出中间一半的数据范围。老师的图是竖向箱线图，箱内的中线越高，中位数越大。"],
  method:["Read the median line for the centre, then subtract Q1 from Q3 for the interquartile range (IQR). Follow the whiskers and check for separate points. The p. 23 diagram labels the whisker ends as minimum and maximum. The p. 24 graph also marks a high score separately.", "先读箱内中位数线，再用 Q3 减 Q1 得到四分位距 IQR。沿着须看两端，也要查看单独绘出的点。第 23 页示意图把须端标为最小值和最大值，第 24 页的图还单独标出一个高分。"],
  visual:graphTeachingBoxes,
  examples:[
    {prompt:["Look at the four median lines on p. 24. Which method has the highest median?","比较第 24 页四条中位数线。哪种方法的中位数最高？"],hint:["Find the line inside each blue box.","找每个蓝色箱体内部的横线。"],steps:[["Read the vertical score axis. Higher up the page means a larger score.","先读纵向分数轴，位置越高分数越大。"],["Among the four internal lines, the one for Method 4 sits highest.","四条箱内横线中，方法 4 的位置最高。"]],answer:["Method 4.","方法 4。"]},
    {prompt:["On p. 24, which teaching method has the largest IQR?","第 24 页，哪种教学法的四分位距最大？"],hint:["Compare the vertical distance between the top and bottom of each box.","比较各箱体上边缘到下边缘的垂直距离。"],steps:[["Each box stretches from Q1 to Q3 on a common vertical scale.","每个箱体在同一纵向刻度上从 Q1 延伸至 Q3。"],["The box for Method 3 spans the greatest distance.","方法 3 的箱体跨越的距离最大。"]],answer:["Method 3.","方法 3。"]},
    {prompt:["A box extends from a score of 42 to a score of 55. What is the IQR?","某箱体从 42 分延伸到 55 分，四分位距是多少？"],hint:["The IQR is a distance measured in points.","四分位距是以分为单位的距离。"],steps:[["Identify the two box edges as Q1 = 42 and Q3 = 55.","读出两个箱边：Q1 = 42，Q3 = 55。"],["Subtract: 55 − 42 = 13.","相减得到 55 − 42 = 13。"]],answer:["13 points.","13 分。"]},
    {prompt:["On p. 24, which method has a separately marked score above its top whisker?","第 24 页哪个方法的上须之外有一个单独标记的高分？"],hint:["Look for the small star above a box-and-whisker group.","找一找哪一组的箱须上方有一个小星号。"],steps:[["Trace straight down from the star to the label on the horizontal axis.","从星号竖直向下找到横轴类别。"],["The star belongs to Method 2. It marks one unusually high observed score for that group.","这个星号属于方法 2，标出组内一个异常高的观察分数。"]],answer:["Method 2.","方法 2。"]},
    {prompt:["Two boxes have identical medians and IQRs. Can you reconstruct every original score?","两个箱体的中位数与四分位距都相同，可以还原所有原始分数吗？"],hint:["Think about the information kept in a summary.","想想一张汇总图保留了哪些信息。"],steps:[["The plot records selected positions and the spread between quartiles.","图中记录了若干位置，以及两四分位数之间的跨度。"],["Different values between those positions can give the same summary.","这些位置之间可以有不同的数值，却仍得到相同的汇总。"]],answer:["No. Different sets of scores can share these summaries.","不能，不同的原始数据可得到相同的汇总。"]}
  ],
  check:{prompt:["A vertical box has its bottom at 8, an internal line at 11 and its top at 14. What does 11 represent?","竖向箱体的下边缘为 8，内部横线为 11，上边缘为 14。11 代表什么？"],choices:[["The number of cases","样本量"],["The IQR","四分位距"],["The median","中位数"]],key:2,feedback:[
    ["The numerical axis gives measurements. This box does not specify a sample size.","数轴上标的是数据值，箱体没有标出样本量。"],["The IQR is the distance from 8 to 14, which is 6.","四分位距是 8 到 14 的距离，等于 6。"],["The internal line shows the median. Here the middle value is 11.","箱内横线标出中位数，这里居中的数值是 11。"]]}
};

const graphHistogramTopic = {
  id:"histogram",title:"Histograms",titleZh:"直方图",pages:[25,26],
  question:["Where do most salaries lie, and which way does the tail stretch?","大部分薪资集中在哪一带，尾巴向哪边延伸？"],
  idea:["A histogram groups numerical observations into intervals called bins. In the salary graph, the horizontal axis gives salary and the vertical axis counts people. Tall bars cluster near the lower salaries. A few salaries stretch much farther to the right: this distribution is right-skewed.", "直方图把数值按区间分组。薪资图横轴给出薪资，纵轴统计人数。高柱集中在较低工资处，少数工资向右延伸很远，这个分布呈右偏。"],
  method:["Read both axis labels and the bin boundaries. With equal-width frequency bars, compare heights to compare counts. Look from the main cluster toward the thin tail to name the skew. A bar chart instead places a category such as a month under each bar.", "先读两个坐标轴和区间边界。等宽且纵轴为频数时，柱越高表示人越多。由主要数据集中处向稀疏的尾部看，就能判断偏斜方向。条形图则把月份等类别写在各柱下方。"],
  visual:graphSalaryHistogram,
  examples:[
    {prompt:["On p. 25, what does one bar of the salary histogram count?","第 25 页，月薪直方图的一根柱子统计什么？"],hint:["Read the label below the bar and the label on the vertical axis.","同时读柱子下方的横轴与纵轴标签。"],steps:[["The horizontal width covers an interval of gross monthly salaries.","柱的横向宽度对应一段月薪区间。"],["Frequency is the number of people whose salary falls in that interval.","频数就是工资落在该区间内的人数。"]],answer:["People earning a salary in that interval.","月薪落在该区间的人数。"]},
    {prompt:["An added example uses bins from 0 up to 10 and from 10 up to 20, each including its lower endpoint only. Where does exactly 10 go?","补充例：两组分别从 0 到 10、从 10 到 20，每组都只含左端点。恰好等于 10 时归入哪组？"],hint:["Each value must be counted once.","每个数据只能计入一次。"],steps:[["The first bin ends just below 10.","第一组在 10 之前结束。"],["The second bin begins at 10, including that value.","第二组从 10 开始并包含 10。"]],answer:["The bin from 10 up to 20.","从 10 到 20 的区间。"]},
    {prompt:["On p. 25, why is the salary distribution called right-skewed?","第 25 页，为什么称月薪分布为右偏？"],hint:["Follow the tail away from the tallest bars.","从高柱所在区域向逐渐稀疏的尾部看。"],steps:[["Many observations form a cluster at the lower end of the salary axis.","数轴较低的一端聚集了许多观察值。"],["Small bars continue toward much larger salaries on the right.","一些矮柱继续向右，延伸至大得多的工资。"]],answer:["The long tail extends toward higher salaries.","长尾朝高薪方向延伸。"]},
    {prompt:["A shop has counts of customers by payment type: card, cash or voucher. Which display on p. 26 fits these counts?","一家店按刷卡、现金、代金券统计顾客人数。第 26 页的哪种图适合表示这些计数？"],hint:["What would the horizontal labels look like?","横轴标签应该长什么样？"],steps:[["Payment types are category names. They have no numerical interval widths.","支付方式是类别名称，没有可测量的区间宽度。"],["Draw one separate bar for each type with its count as the height.","每种支付方式画一根独立柱，柱高表示次数。"]],answer:["A bar chart.","条形图。"]},
    {prompt:["A histogram of time has adjacent one-minute bins. One bin has count zero. What will you see at that position?","用相邻的一分钟区间画时间直方图，其中一组的频数为零。图上这个位置会怎样？"],hint:["What is the height of a zero-frequency bar?","频数为零的柱有多高？"],steps:[["The one-minute interval still occupies its usual place on the number line.","该一分钟区间在数轴上仍占原来的位置。"],["A bar with zero height leaves that position looking empty.","柱高为零，所以该位置看起来是空的。"]],answer:["An empty interval between its neighbours.","相邻区间之间有一个空区间。"]}
  ],
  check:{prompt:["An equal-width frequency histogram has most observations near 80 and a thin tail running down to 20. Which description fits?","等宽的频数直方图中，大多数观察值在 80 附近，稀疏的尾部一直延伸到 20。它属于哪类分布？"],choices:[["Left-skewed","左偏"],["Right-skewed","右偏"],["Symmetric","对称"]],key:0,feedback:[
    ["The thin tail goes toward lower values on the left.","稀疏尾部指向左侧的较小值。"],["The high cluster is on the right. Trace the tail away from the cluster toward 20.","数据密集处在右侧，从那里向 20 的方向看才是尾部。"],["A single long tail on the low side breaks the left-right symmetry.","较小值的一侧独有一条长尾，两侧形状不对称。"]]}
};

const graphStemTopic = {
  id:"stem-leaf",title:"Stem-and-leaf plots",titleZh:"茎叶图",pages:[27],
  question:["Can you read every original score from this display?","可以从这张图还原每个原始分数吗？"],
  idea:["A stem-and-leaf plot keeps a digit for each observation. On p. 27 the stem gives tens and the leaf gives ones. The row with stem 2 and leaves 0, 2 and 5 records 20, 22 and 25. Each leaf belongs to one recorded value.", "茎叶图为每次观察保留一个叶位。第 27 页用十位作茎、个位作叶。茎 2 配叶 0、2、5 时，可还原 20、22、25。每片叶对应一个观察值。"],
  method:["To build one, sort the observations, choose the place values and write a key. Split each value into stem and leaf. Write stems in order and place each leaf on its matching row, keeping repeated leaves. To read the plot, reverse that process.", "作图时先排序，确定位值并写出图例。把每个数拆成茎和叶，依次列出各茎，再把每片叶填入对应行，重复的叶也保留。读图时反过来把茎叶拼回原值。"],
  visual:graphStemTable,
  examples:[
    {prompt:["On p. 27, what number does the last leaf in the stem-2 row represent?","第 27 页，茎为 2 的一行中，最后一片叶代表哪个数？"],hint:["The key is 2 | 0 = 20.","图例为 2｜0 = 20。"],steps:[["The final leaf in that row is 5.","该行最后一片叶是 5。"],["Combine two tens with five ones.","将两个十与五个一合起来。"]],answer:["25.","25。"]},
    {prompt:["How many observations equal 37 in the lecture plot?","讲义图中有多少个观察值等于 37？"],hint:["Focus on the row with stem 3.","只看茎为 3 的行。"],steps:[["Its leaves are 6, 7, 7, 7, 8.","这一行的叶是 6、7、7、7、8。"],["Count each leaf equal to 7. Every such leaf represents one recorded 37.","数出每一片等于 7 的叶；每片都对应一个 37。"]],answer:["Three observations.","3 个观察值。"]},
    {prompt:["What are the minimum and maximum values shown on p. 27?","第 27 页图中的最小值和最大值是多少？"],hint:["Read the earliest and latest leaves in the ordered display.","找有序图中的第一片和最后一片叶。"],steps:[["The first entry is stem 0 and leaf 1, giving 1.","第一条是茎 0、叶 1，得到 1。"],["The last is stem 4 and leaf 3, giving 43.","最后一条是茎 4、叶 3，得到 43。"]],answer:["Minimum 1 and maximum 43.","最小值 1，最大值 43。"]},
    {prompt:["Add the new score 24 to the lecture plot. How should its row read?","把新的分数 24 加入讲义图后，对应行应怎样写？"],hint:["Use the tens digit to find the row.","用十位数字定位所在行。"],steps:[["The stem is 2 and the new leaf is 4.","茎为 2，新叶为 4。"],["Insert 4 among the existing ordered leaves 0, 2, 5.","把 4 按顺序插入原来的叶 0、2、5 之间。"]],answer:["2 | 0 2 4 5.","2｜0 2 4 5。"]},
    {prompt:["Another plot gives the key 2 | 5 = 2.5. Read 4 | 8.","另一张图的图例为 2｜5 = 2.5。4｜8 应读作多少？"],hint:["Use the key printed with this plot.","按这张图自己的图例读。"],steps:[["Here the stem gives units and the leaf gives tenths.","这里的茎表示个位，叶表示十分位。"],["Combine four whole units and eight tenths.","将四个整数单位和八个十分之一相加。"]],answer:["4.8.","4.8。"]}
  ],
  check:{prompt:["With key 1 | 0 = 10, which row correctly records 26, 21 and 26?","图例为 1｜0 = 10，哪一行按顺序准确记录了 26、21、26？"],choices:[["2 | 1 6","2｜1 6"],["2 | 1 6 6","2｜1 6 6"],["2 | 2 2 2","2｜2 2 2"]],key:1,feedback:[
    ["This row contains only two observations. Keep a second 6 for the repeated 26.","这一行只记录了两个值，重复出现的 26 也应再写一片叶 6。"],["Sorted values 21, 26, 26 share stem 2 and leave digits 1, 6, 6.","排好序的 21、26、26 共用茎 2，叶依次为 1、6、6。"],["The tens digit 2 supplies the stem. The three leaves must come from the ones digits.","十位数字 2 是茎，三片叶要取自各数的个位。"]]}
};

const graphDotTopic = {
  id:"dotplot",title:"Dot plots",titleZh:"点图",pages:[28],
  question:["How many babies does a stack of dots represent?","一叠点代表几名婴儿？"],
  idea:["On p. 28 each dot represents one vaccinated baby. Dots stack above the label of the baby’s colony. In a numerical dot plot, those horizontal positions can instead be measurements, with repeated values stacking above the same number.", "第 28 页以一个点表示一名接种过疫苗的婴儿。点堆在婴儿所属社区的标签上。数值点图的横向位置也可以是测量值，重复的数值堆在同一个数的上方。"],
  method:["Read the horizontal labels and the unit represented by one dot. Count a single stack for a group frequency. Add stacks for a total or subtract one count from another for a difference. A rate for one colony also needs the number of eligible babies there.", "先读横向标签，并确认一个点代表的单位。数一叠点得到该组频数。求总数就相加，比较差异就相减。求某个社区的接种率，还要用该社区符合条件的婴儿总数作分母。"],
  visual:graphColonyDots,
  examples:[
    {prompt:["On p. 28, how many vaccinated babies belong to colony C?","第 28 页有几名已接种的婴儿来自 C 社区？"],hint:["Read the stack directly above C.","找到 C 标签正上方的一叠点。"],steps:[["The stack above C contains five dots.","C 上方有五个点。"],["The key gives one vaccinated baby per dot.","图例说明每个点代表一名已接种的婴儿。"]],answer:["5 babies.","5 名婴儿。"]},
    {prompt:["How many vaccinated babies are shown across all four colonies?","图中四个社区共有几名已接种的婴儿？"],hint:["Count every stack once.","每个社区的点数各计入一次。"],steps:[["From A through D, read 7, 3, 5 and 1.","从 A 到 D 的点数依次为 7、3、5、1。"],["Add the four counts: 7 + 3 + 5 + 1 = 16.","将四个频数相加：7 + 3 + 5 + 1 = 16。"]],answer:["16 vaccinated babies.","16 名已接种的婴儿。"]},
    {prompt:["How many more vaccinated babies are shown in A than in B?","A 社区显示的已接种婴儿比 B 社区多多少名？"],hint:["Read both stacks before comparing.","先读出两叠点数再比较。"],steps:[["A has 7 vaccinated babies and B has 3.","A 有 7 名已接种的婴儿，B 有 3 名。"],["Subtract the two counts: 7 − 3.","用 A 的人数减去 B 的人数：7 − 3。"]],answer:["4 more babies.","多 4 名。"]},
    {prompt:["What fraction of the vaccinated babies shown live in colony B?","图中已接种的婴儿中，住在 B 社区的占几分之几？"],hint:["The denominator is everyone shown in the graph.","分母是图中展示的全部婴儿人数。"],steps:[["Colony B contributes 3 of the 16 dots.","B 社区贡献了 16 个点中的 3 个。"],["Divide the B count by the total vaccinated count across the four colonies.","用 B 的已接种人数除以四区的已接种总人数。"]],answer:["3/16.","3/16。"]},
    {prompt:["Does A’s tallest stack establish that A has the highest vaccination rate?","A 的点叠得最高，是否足以说明 A 的接种率最高？"],hint:["Write the denominator of a colony’s vaccination rate.","写出单个社区接种率的分母。"],steps:[["A has the largest number of vaccinated babies displayed.","A 的已接种婴儿数在图中最多。"],["To compare rates, divide each count by that colony’s total eligible babies. Those totals are missing.","比较接种率时，每个已接种数都要除以该社区符合条件的婴儿总数。图中没有这些分母。"]],answer:["The rate ranking cannot be determined from these counts alone.","仅凭图中已接种人数无法判断接种率排名。"]}
  ],
  check:{prompt:["A numerical dot plot shows two dots above 3 minutes and one dot above 5 minutes. How many times were measured?","一张数值点图在 3 分钟上方有两个点，在 5 分钟上方有一个点。共记录了几次时长？"],choices:[["2 measurements","2 次"],["8 measurements","8 次"],["3 measurements","3 次"]],key:2,feedback:[
    ["Two counts the distinct time labels. Count all the individual dots.","2 是不同的时长取值个数。要把每个点都数进去。"],["Eight adds the two labels 3 and 5. Labels give minutes, while dots count measurements.","8 是将两个刻度 3 与 5 相加的结果。刻度表示分钟数，点数才表示测量次数。"],["The dots represent measurements of 3, 3 and 5 minutes: three observations.","这三个点分别代表 3、3、5 分钟，共三次观察。"]]}
};

const graphsModule = {
  id:"graphs",title:"Reading statistical displays",
  subtitle:["Read the labels, find the observations and decide what the display lets you say.","先读图上的标签和单位，再判断它能告诉你什么。"],
  topics:[graphFrequencyTopic,graphBoxTopic,graphHistogramTopic,graphStemTopic,graphDotTopic],
  bank:{
    "graph-table-share":{
      topic:"frequencies",page:22,visual:graphAgeTable,
      prompt:"Use the lecture’s age table (18 years: 15, 19 years: 6, 20 years: 4). What proportion of the students are 20? Enter a decimal or fraction.",
      zh:"讲义中的年龄频数为 18 岁 15 人、19 岁 6 人、20 岁 4 人。20 岁学生占全班的比例是多少？请填写小数或分数。",answer:"0.16",
      explanation:["The table contains 15 + 6 + 4 = 25 students. The 20-year-olds account for 4/25 = 0.16.","全班共 15 + 6 + 4 = 25 人。20 岁有 4 人，比例为 4/25 = 0.16。"],
      traps:{"4":"Four is the group’s frequency. Divide by the number of students in the class.","16":"Sixteen is the percentage number. The requested decimal is 0.16."},
      retry:{prompt:"In a second class, 7 students walk to campus, 10 take the bus and 3 cycle. What proportion cycle? Enter a decimal or fraction.",zh:"另一班有 7 人步行、10 人乘公交、3 人骑车。骑车者所占比例是多少？请填写小数或分数。",answer:"0.15",explanation:["The total is 20. Cyclists account for 3/20 = 0.15.","全班 20 人，骑车者占 3/20 = 0.15。"]}
    },
    "graph-table-count":{
      topic:"frequencies",page:22,
      prompt:"A frequency table records 2 visits for 8 students, 3 visits for 5 students and 4 visits for 3 students. How many students made at least 3 visits?",
      zh:"一张频数表记录 8 名学生到访 2 次、5 名到访 3 次、3 名到访 4 次。至少到访 3 次的学生有几名？",answer:"8",
      explanation:["Include the 3-visit and 4-visit rows. Their frequencies total 5 + 3 = 8 students.","将 3 次和 4 次两行都计入，两行频数之和为 5 + 3 = 8 名学生。"],
      traps:{"3":"Three students made four visits. Include the students who made exactly three visits too.","7":"Adding the visit labels combines visits. Read and add the student counts instead.","16":"Sixteen counts the entire sample, including the two-visit row."},
      retry:{prompt:"A table counts 6 students with 1 sibling, 4 with 2 siblings and 3 with 3 siblings. How many have more than 1 sibling?",zh:"6 名学生有 1 个兄弟姐妹，4 名有 2 个，3 名有 3 个。兄弟姐妹超过 1 个的学生有几名？",answer:"7",explanation:["The 2-sibling and 3-sibling rows contribute 4 + 3 = 7 students.","计入有 2 个和 3 个兄弟姐妹的两行，得到 4 + 3 = 7 人。"]}
    },
    "graph-box-read":{
      topic:"boxplot",page:24,visual:graphTeachingBoxes,
      prompt:"Read the four teaching-method box plots from the lecture. Which method has the greatest spread for the middle half of its scores?",
      zh:"阅读讲义中四种教学法的箱线图。哪种教学法的中间一半成绩最分散？",choices:["Method 1","Method 2","Method 3","Method 4"],answer:"Method 3",
      explanation:["Use the vertical length of each box from Q1 to Q3. Method 3 has the largest box length on the shared score scale.","从 Q1 到 Q3 的箱体纵向长度反映中间一半成绩的跨度。所有组共用分数轴，方法 3 的箱体最长。"],
      traps:{"Method 1":"Compare the vertical span of Method 1’s box with the taller box for Method 3.","Method 2":"The isolated high point lies outside the box. It does not set the IQR.","Method 4":"The median line for Method 4 lies highest. The height of that line answers a question about centre."},
      retry:{prompt:"Read the two box plots. Which group has the greater spread between its lower and upper quartiles?",zh:"读这两组箱线图。哪一组的下四分位数和上四分位数相距更远？",choices:["Group A","Group B","Equal IQRs"],answer:"Group B",
        visual:()=>`<figure class="guide-figure"><svg viewBox="0 0 344 178" role="img" aria-label="Vertical box plots with a shared score scale. Group A: minimum 1, Q1 12, median 16, Q3 20, maximum 29. Group B: minimum 3, Q1 6, median 12, Q3 18, maximum 22.">
          <g fill="none" stroke="#51466b" stroke-width="2"><path d="M48 20V140H310 M110 24V136 M99 24h22 M99 136h22 M239 52V128 M228 52h22 M228 128h22"/>
          <rect x="88" y="60" width="44" height="32" fill="#e7def8"/><path d="M88 76h44"/><rect x="217" y="68" width="44" height="48" fill="#e7def8"/><path d="M217 92h44"/></g>
          <g fill="#40384e" font-family="system-ui, sans-serif" font-size="13" text-anchor="middle"><text x="43" y="14">Score</text>
          <text x="34" y="144">0</text><text x="34" y="104">10</text><text x="34" y="64">20</text><text x="34" y="25">30</text>
          <text x="110" y="161">Group A</text><text x="239" y="161">Group B</text><text x="148" y="65">20</text><text x="148" y="97">12</text><text x="278" y="73">18</text><text x="278" y="121">6</text></g></svg>
          <figcaption>Scores in two groups. Numbers beside the boxes label the quartiles.${centreZh("两组成绩共用一个分数轴。箱体旁的数字标明上下四分位数。")}</figcaption></figure>`,
        explanation:["Group A’s box spans 20 − 12 = 8 points. Group B’s spans 18 − 6 = 12 points. A’s higher median gives its middle score, and its longer whisker-to-whisker span gives its full range here.","A 组的箱体跨度为 20 − 12 = 8 分，B 组为 18 − 6 = 12 分。A 组较高的中位数描述其中间成绩，此图中 A 的两须端相距更远说明全距更大。"]}
    },
    "graph-box-iqr":{
      topic:"boxplot",page:23,
      prompt:"A box plot shows a minimum of 4, Q1 of 9, a median of 12, Q3 of 17 and a maximum of 26. Find the IQR.",
      zh:"箱线图的最小值为 4，下四分位数为 9，中位数为 12，上四分位数为 17，最大值为 26。求四分位距。",answer:"8",
      explanation:["The IQR uses the two box edges, Q3 − Q1 = 17 − 9 = 8.","四分位距取箱体两端的差，Q3 − Q1 = 17 − 9 = 8。"],
      traps:{"22":"Subtracting the minimum from the maximum gives the full range.","12":"Twelve is the median, a measure of location."},
      retry:{prompt:"A box has Q1 = 30, median = 35 and IQR = 12. Find Q3.",zh:"某箱体的 Q1 = 30，中位数为 35，IQR = 12。求 Q3。",answer:"42",explanation:["Q3 is one IQR above Q1, so Q3 = 30 + 12 = 42.","Q3 比 Q1 高一个四分位距，因此 Q3 = 30 + 12 = 42。"]}
    },
    "graph-histogram-shape":{
      topic:"histogram",page:25,visual:graphSalaryHistogram,
      prompt:"Read the monthly salary histogram from the lecture. Which statement describes the shape?",zh:"阅读讲义中的月薪直方图。哪一句准确描述该分布？",
      choices:["The lower-salary cluster has a long tail toward higher salaries.","Most people earn salaries at the far right.","The distribution is symmetric around the tallest bar."],
      answer:"The lower-salary cluster has a long tail toward higher salaries.",
      explanation:["Most counts are concentrated in the lower salary ranges. The small bars extend farther on the high side, producing a right tail.","多数人数集中在较低的薪资段，高薪一侧的矮柱延伸得更远，形成右尾。"],
      traps:{"Most people earn salaries at the far right.":"Read bar heights before deciding where most people are. The bars on the far right are small.","The distribution is symmetric around the tallest bar.":"Compare both sides of the peak. Only the high-salary side stretches far from it."},
      retry:{prompt:"Read this histogram of race times. In which direction is the distribution skewed?",zh:"观察这张赛跑用时直方图。分布朝哪个方向偏？",choices:["Right","Left","Neither side"],answer:"Right",
        visual:()=>`<figure class="guide-figure"><svg viewBox="0 0 344 185" role="img" aria-label="Race times in eight consecutive five-second bins between 40 and 80 seconds. In order of increasing time, the frequencies are 4, 9, 6, 4, 2, 1, 1 and 1.">
          <path d="M44 15V135H310" fill="none" stroke="#51466b" stroke-width="2"/><g fill="#9f86ca" stroke="#5b4678">
          ${[4,9,6,4,2,1,1,1].map((f,i)=>`<rect x="${44+i*32}" y="${135-12*f}" width="32" height="${12*f}"/>`).join("")}</g>
          <g fill="#40384e" font-family="system-ui, sans-serif" font-size="13"><text x="49" y="15">Frequency</text><text x="29" y="139">0</text><text x="29" y="79">5</text><text x="20" y="20">10</text>
          <g text-anchor="middle"><text x="44" y="154">40</text><text x="108" y="154">50</text><text x="172" y="154">60</text><text x="236" y="154">70</text><text x="300" y="154">80</text>
          <text x="172" y="177">Race time (seconds)</text></g></g></svg>
          <figcaption>Each bar counts runners in a five-second interval.${centreZh("每根柱子统计用时落在一个五秒区间内的跑者人数。")}</figcaption></figure>`,
        explanation:["The peak is in the 45-to-50-second interval. The low bars reach far into the longer times to its right, producing a right tail.","峰值在 45 至 50 秒的区间。从那里往右，矮柱延伸至较长用时，形成右尾。"]}
    },
    "graph-histogram-bins":{
      topic:"histogram",page:26,
      prompt:"Waiting times are 4, 8, 10, 10 and 19 minutes. A histogram includes the lower boundary of each bin and excludes the upper boundary. How many waits belong in the bin from 10 to 20 minutes?",
      zh:"等候时长为 4、8、10、10、19 分钟。每个区间含左端点、不含右端点。10 到 20 分钟的组有几个观察值？",answer:"3",
      explanation:["The 10-to-20 bin includes 10, 10 and 19. It contains three observations.","10 至 20 的区间包括 10、10、19，共三个观察值。"],
      traps:{"1":"Both observations equal to 10 belong in the bin because its lower boundary is included.","2":"Count the repeated observation at 10 as two separate waits."},
      retry:{prompt:"Distances are 0, 4, 5, 5, 9 and 10 metres. Using lower-inclusive, upper-exclusive bins, how many lie in the bin from 0 to 5 metres?",zh:"距离为 0、4、5、5、9、10 米。区间含左端点、不含右端点，0 到 5 米的组有几个观察值？",answer:"2",explanation:["Only 0 and 4 are in this bin. Both 5s enter the following bin.","只有 0 和 4 属于该组，两个 5 都进入下一组。"]}
    },
    "graph-stem-leaf":{
      topic:"stem-leaf",page:27,visual:graphStemTable,
      prompt:"The lecture stem-and-leaf plot uses the key 2 | 0 = 20. How many observations are in the thirties?",zh:"讲义茎叶图以 2｜0 = 20 为图例。有多少个观察值在 30 至 39 之间？",answer:"5",
      explanation:["The row with stem 3 has leaves 6, 7, 7, 7 and 8. Counting every leaf gives five observations.","茎 3 对应的叶是 6、7、7、7、8，逐片计数得到五个观察值。"],
      traps:{"3":"Three different values occur, but the three 37s belong to three observations.","37":"Thirty-seven is a score. The question asks for a count of observations."},
      retry:{prompt:"With key 4 | 1 = 41, the full row is 4 | 0 1 1 5 7 9. How many observations are 45 or greater in this row?",zh:"图例 4｜1 = 41，完整的一行为 4｜0 1 1 5 7 9。这一行中有几个观察值大于或等于 45？",answer:"3",explanation:["Leaves 5, 7 and 9 on this stem give 45, 47 and 49.","这一茎上的叶 5、7、9 分别为 45、47、49，共三个。"]}
    },
    "graph-dot-rate":{
      topic:"dotplot",page:28,visual:graphColonyDots,
      prompt:"Colony A has the most vaccinated babies in the dot plot. What extra information is needed to compare vaccination rates across the four colonies?",
      zh:"点图中 A 社区的已接种婴儿最多。比较四个社区的接种率时还需要哪项信息？",
      choices:["The total number of eligible babies in each colony","The total number of dots across the four colonies","The name of the colony with the shortest stack"],answer:"The total number of eligible babies in each colony",
      explanation:["Each stack supplies a vaccinated count. Divide it by the number of eligible babies in that same colony to obtain its vaccination rate.","每一叠点给出当地的已接种人数。用这个人数除以同一社区符合条件的婴儿总数，得到当地的接种率。"],
      traps:{"The total number of dots across the four colonies":"That denominator answers what share of all vaccinated babies come from a colony.","The name of the colony with the shortest stack":"The shortest stack identifies the smallest vaccinated count. Its rate still needs a denominator."},
      retry:{prompt:"Colony X has 6 vaccinated babies out of 8 eligible babies. Colony Y has 9 out of 18. Which has the higher rate?",zh:"X 社区 8 名符合条件的婴儿中 6 名已接种；Y 社区 18 名中 9 名已接种。哪个社区的接种率更高？",choices:["Colony X","Colony Y","Equal rates"],answer:"Colony X",explanation:["X has 6/8 = 75% and Y has 9/18 = 50%. X has the higher rate.","X 社区为 6/8 = 75%，Y 社区为 9/18 = 50%，X 的接种率更高。"]}
    }
  },
  writing:{
    prompt:["You have every student’s commute time and usual mode of transport. Choose a graph for the distribution of commute times and a graph for the counts of bus, bicycle and car users. Explain what each horizontal axis would show.","你有每位学生的通勤时长和日常交通方式。分别选择一种图展示时长分布、另一种图展示公交、自行车和汽车使用人数，解释两张图的横轴各表示什么。"],
    model:["I would group commute times into numerical intervals on a histogram; its horizontal axis shows minutes. A bar chart can show the number of users of each transport mode, with bus, bicycle and car as separate categories on the horizontal axis.","我会按数值区间分组，用直方图表示通勤时长，横轴表示分钟。再用条形图展示各交通方式的人数，横轴的公交、自行车、汽车是三个独立类别。"],
    rubric:["Does the first graph preserve the numerical order of commute times? A numerical dot plot with individual times on the axis is also suitable for a small data set.","Does the second graph label the transport categories and let the reader compare their counts? A stacked dot display with one dot per student is another valid choice.","Do you say what the horizontal axis represents in each graph?"]
  }
};
