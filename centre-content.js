// Week 1 teaching pages 29–40. Page labels in prompts identify examples from the slides.
const centreTopics = [
  {
    id: "mode", title: "Mode", titleZh: "众数", pages: [29, 30, 31, 32],
    question: ["Which wait did students report most often?", "哪一个等候时长出现得最多？"],
    idea: ["Five students waited 2, 3, 3, 4 and 18 minutes. Imagine each calling out their time. The number you hear most often is the mode. It’s one way to describe a typical wait.", "五位同学等了 2、3、3、4 和 18 分钟。想象他们依次报出自己的时长。听到次数最多的数就是众数，这是描述典型等候时长的一种方法。"],
    method: ["Count how often each value appears. Find the largest count and report the value that earned it. On a frequency graph, follow the tallest bar down to its label.", "逐个统计每个值出现的次数。找到最大的次数，报出对应的数据值。看频数图时，从最高柱向下找到它对应的标签。"],
    examples: [
      {
        prompt: ["A café records tea, coffee, tea, juice and tea. What is the modal order?", "咖啡馆记录了茶、咖啡、茶、果汁和茶。哪种饮品是众数？"],
        hint: ["Make one tally for each order.", "每卖出一份，就在相应饮品下记一笔。"],
        steps: [
          ["Tea gets three tallies. Coffee and juice get one each.", "茶记了三笔，咖啡和果汁各一笔。"],
          ["The question asks for a drink. Read the name beside the largest tally.", "题目要的是饮品名称。读出笔画最多的那一栏。"]
        ],
        answer: ["Tea", "茶"]
      },
      {
        prompt: ["On an exam-score frequency graph, the bar at 70 has height 2, the bar at 80 has height 5 and the bar at 90 has height 1. What is the mode?", "考试成绩频数图上，70 分的柱高为 2，80 分的柱高为 5，90 分的柱高为 1。众数是多少分？"],
        hint: ["The vertical axis counts students. The horizontal axis gives their scores.", "纵轴是人数，横轴是分数。"],
        steps: [
          ["The greatest height is 5, so five students earned the same score.", "最高的柱高为 5，说明有五名同学取得了同一个分数。"],
          ["That bar stands above 80 on the score axis.", "这根柱子位于分数轴的 80 上方。"]
        ],
        answer: ["80 points", "80 分"]
      },
      {
        prompt: ["Daily orders for a sandwich are 1, 1, 4, 4 and 9. Give every mode.", "某款三明治每天的订单数为 1、1、4、4 和 9。写出全部众数。"],
        hint: ["Check whether more than one value reaches the highest frequency.", "看有几个数并列出现最多次。"],
        steps: [
          ["Both 1 and 4 occur twice. The value 9 occurs once.", "1 和 4 各出现两次，9 出现一次。"],
          ["Keep both values tied at the highest frequency.", "保留两个并列最高频的数。"]
        ],
        answer: ["1 and 4 orders", "1 单和 4 单"]
      },
      {
        prompt: ["In the list 2, 2, 3, the last value is corrected to 100. What is the mode after the correction?", "数据 2、2、3 中，最后一个数被更正为 100。更正后的众数是多少？"],
        hint: ["Recount the values after making the correction.", "把数改好后再数各个值的出现次数。"],
        steps: [
          ["The new list is 2, 2, 100. The value 2 still appears twice.", "新数据为 2、2、100。2 仍出现两次。"],
          ["A much larger maximum can leave the most frequent value unchanged.", "最大值大幅提高时，出现最多的值仍可能保持原样。"]
        ],
        answer: ["2", "2"]
      },
      {
        prompt: ["Four students waited 1, 2, 4 and 7 minutes. Does any one wait time occur more often than the others?", "四位同学分别等了 1、2、4 和 7 分钟。有没有哪一个时长出现得比其他时长更频繁？"],
        hint: ["What frequency does each of the four times have?", "这四个时长各出现了几次？"],
        steps: [
          ["Each time occurs once. All four frequencies are equal.", "每个时长都出现一次，四个频数相等。"],
          ["No time stands out as the most frequent.", "没有某一个时长单独出现得最多。"]
        ],
        answer: ["There is no unique mode.", "没有唯一的众数。"]
      }
    ],
    check: {
      prompt: ["A class orders 2 teas, 5 juices and 9 waters. What is the modal drink?", "一个班点了 2 份茶、5 份果汁和 9 份水。众数饮品是什么？"],
      choices: [["9", "9"], ["Water", "水"], ["Juice", "果汁"]],
      key: 1,
      feedback: [
        ["9 counts the water orders. The answer needs the name attached to that count, which is water.", "9 是点水的人数。题目要的是这个次数对应的饮品名称，即水。"],
        ["Water appears in nine orders, more than either of the other drinks.", "水出现了九次，比另外两种饮品都多。"],
        ["Juice is listed in the middle, but the order of the drink names is arbitrary. Water has the largest count.", "果汁恰好列在中间，饮品名称的排列顺序可以随意改变。水的频数最高。"]
      ]
    }
  },
  {
    id: "median", title: "Median", titleZh: "中位数", pages: [33, 34, 35, 36, 37],
    question: ["How long did the middle student wait?", "按等候时长排好队后，中间那位同学等了多久？"],
    idea: ["In the ordered list 2, 3, 3, 4, 18, the third student waited 3 minutes. This middle value is the median, also called the 50th percentile. If values repeat, students beside the middle student can have the same wait.", "将 2、3、3、4、18 按顺序排列，第三位同学等了 3 分钟。这个居中的值叫中位数，也叫第 50 百分位数。遇到重复值时，中间同学旁边的人也可能等了同样久。"],
    method: ["Sort the observations and keep every repeat. For an odd count, read the value at position (N + 1) ÷ 2. For an even count of numerical observations, take the mean of the two central values.", "排序时保留所有重复值。个数为奇数，就读出第 (N + 1) ÷ 2 位上的数值。数值型观察的个数为偶数，就取正中间两个数据值的平均。"],
    examples: [
      {
        prompt: ["Three reading times are 9, 1 and 5 minutes, in the order recorded. Find the median.", "按记录先后，三次阅读时间分别为 9、1、5 分钟。中位数是多少？"],
        hint: ["Rewrite the times from shortest to longest.", "先把时长从短到长重新排列。"],
        steps: [
          ["Sort the times into 1, 5, 9. Cross off one time at each end.", "排序得到 1、5、9。从两端各划掉一个。"],
          ["The remaining reading time is 5 minutes. One session was shorter and one was longer.", "中间留下的阅读时长为 5 分钟。其余两次，一次更短，一次更长。"]
        ],
        answer: ["5 minutes", "5 分钟"]
      },
      {
        prompt: ["PDF p. 36 gives six scores, 24, 18, 19, 42, 16, 12. What is their median?", "课件第 36 页给出六个分数 24、18、19、42、16、12。中位数是多少？"],
        hint: ["For six scores, mark the third and fourth positions after sorting.", "六个分数排序后，圈出第三和第四位。"],
        steps: [
          ["In descending order the scores are 42, 24, 19, 18, 16, 12.", "从高到低排列为 42、24、19、18、16、12。"],
          ["The middle two scores are 19 and 18. Halfway between them is (19 + 18) ÷ 2 = 18.5.", "居中两数为 19 和 18。中间点是 (19 + 18) ÷ 2 = 18.5。"]
        ],
        answer: ["18.5 points", "18.5 分"]
      },
      {
        prompt: ["PDF p. 35 gives 10, 8, 14, 15, 7, 3, 3, 8, 12, 10, 9. Which score is the median?", "课件第 35 页给出 10、8、14、15、7、3、3、8、12、10、9。哪个分数是中位数？"],
        hint: ["Eleven scores put the middle at position six. Keep both copies of every repeated score.", "共 11 个分数，居中的是第六位。重复的分数也要照原次数保留。"],
        steps: [
          ["In descending order they are 15, 14, 12, 10, 10, 9, 8, 8, 7, 3, 3.", "从高到低排列为 15、14、12、10、10、9、8、8、7、3、3。"],
          ["At position six the score is 9. Count five entries on each side to check.", "第六位是 9。它左右各有五个数据，可据此核对位置。"]
        ],
        answer: ["9 points", "9 分"]
      },
      {
        prompt: ["In the five waits 2, 3, 3, 4, 18, the longest wait is updated to 38 minutes. Find the new median.", "五个等候时长 2、3、3、4、18 中，最长的一项更新为 38 分钟。求新的中位数。"],
        hint: ["Does the update change who stands third?", "更新后，排在第三位的同学变了吗？"],
        steps: [
          ["The ordered list becomes 2, 3, 3, 4, 38.", "排序后变为 2、3、3、4、38。"],
          ["The change is at the right end. Position three still contains 3.", "改变发生在最右端，第三位仍是 3。"]
        ],
        answer: ["3 minutes", "3 分钟"]
      },
      {
        prompt: ["The waits are 2, 3, 3, 4, 18. A sixth student waits 38 minutes. What is the median of all six waits?", "原来有五个等候时长 2、3、3、4、18。第六位同学等了 38 分钟。六人的中位数是多少？"],
        hint: ["Adding a student changes the count. Mark the new middle positions.", "新增一人改变了观察个数，重新找出中间的位置。"],
        steps: [
          ["The six ordered waits are 2, 3, 3, 4, 18, 38. The middle pair is 3 and 4.", "六个时长依次为 2、3、3、4、18、38。中间的一对为 3 和 4。"],
          ["(3 + 4) ÷ 2 = 3.5. Adding an observation can move the median even when the added value is at the end.", "(3 + 4) ÷ 2 = 3.5。增加一个观察值时，即使新数排在末端，中位数也可能变化。"]
        ],
        answer: ["3.5 minutes", "3.5 分钟"]
      }
    ],
    check: {
      prompt: ["A student records waits of 8, 12, 4 and 20 minutes. What is the median wait?", "一名同学记录了 8、12、4、20 分钟四个时长。等候时间的中位数是多少？"],
      choices: [["2.5 minutes", "2.5 分钟"], ["8 minutes", "8 分钟"], ["10 minutes", "10 分钟"], ["11 minutes", "11 分钟"]],
      key: 2,
      feedback: [
        ["2.5 locates the middle between positions two and three. Read the scores there, 8 and 12, and average them to get 10 minutes.", "2.5 指出中间在第二和第三位之间。读出这两个位置上的数 8 和 12，再求平均得到 10 分钟。"],
        ["8 and 12 share the middle in the ordered list 4, 8, 12, 20. Use both values to get 10 minutes.", "排序后为 4、8、12、20，8 和 12 同处中间，需要同时使用两者，得到 10 分钟。"],
        ["In order, the waits are 4, 8, 12, 20. The middle pair gives (8 + 12) ÷ 2 = 10 minutes.", "排序得到 4、8、12、20，正中两数给出 (8 + 12) ÷ 2 = 10 分钟。"],
        ["11 comes from sharing the total of 44 equally among four students. That gives the mean. For the median, average only the central 8 and 12 to get 10.", "11 是把总时长 44 平分给四人的结果，算出的是均值。求中位数只平均居中的 8 和 12，得到 10。"]
      ]
    }
  },
  {
    id: "mean", title: "Mean", titleZh: "均值", pages: [38, 39],
    question: ["What if everyone waited an equal share?", "如果平分总等候时间，每人会等多久？"],
    idea: ["The arithmetic mean is the amount each observation would receive in an equal share. The waits 2, 3, 3, 4 and 18 add up to 30 minutes. Five equal shares give 6 minutes each, even though nobody actually waited 6 minutes.", "算术均值是把总量平均分给每个观察对象后，每人分得的数量。2、3、3、4、18 加起来共 30 分钟，平分为五份是每人 6 分钟，即使原本没有人等了 6 分钟。"],
    method: ["Add all the values, then divide by the number of observations. In the slide formula, ΣX means the sum and N means the count. Keep the original units. Use this with quantities whose differences are meaningful.", "把所有数据加起来，再除以观察个数。课件公式中的 ΣX 表示总和，N 表示个数。结果沿用原单位。适合计算均值的是数值差距有实际意义的量。"],
    examples: [
      {
        prompt: ["PDF p. 38 asks for the mean of 1, 5, 4, 3, 2.", "课件第 38 页要求计算 1、5、4、3、2 的均值。"],
        hint: ["Write down the total and count separately.", "把总和与个数分开写。"],
        steps: [
          ["The total is 1 + 5 + 4 + 3 + 2 = 15. There are five observations.", "总和为 1 + 5 + 4 + 3 + 2 = 15。共有五个观察值。"],
          ["Divide 15 by 5. You can check by multiplying the result by 5 to recover the total.", "用 15 除以 5。核对时，可以将结果乘以 5，看能否还原总和。"]
        ],
        answer: ["3", "3"]
      },
      {
        prompt: ["Four students read for a mean of 8 minutes each. How many minutes did they read in total?", "四位同学每人平均阅读 8 分钟。他们的总阅读时间是多少？"],
        hint: ["How many equal shares of 8 minutes were there?", "共有多少份 8 分钟？"],
        steps: [
          ["Mean × count restores the total.", "均值乘以个数可以还原总和。"],
          ["Four shares of 8 minutes give 4 × 8 = 32 minutes.", "四份各 8 分钟，得到 4 × 8 = 32 分钟。"]
        ],
        answer: ["32 minutes", "32 分钟"]
      },
      {
        prompt: ["Three study sessions averaged 12 minutes. Two lasted 10 and 14 minutes. How long was the third?", "三次学习平均每次 12 分钟，其中两次分别为 10 和 14 分钟。第三次多长？"],
        hint: ["Recover the total before subtracting the known sessions.", "先还原总时长，再扣除已知的两次。"],
        steps: [
          ["Three sessions need a total of 3 × 12 = 36 minutes.", "三次学习的总时长为 3 × 12 = 36 分钟。"],
          ["The known sessions account for 24 minutes. The remaining 36 − 24 = 12 minutes belong to the third.", "已知两次合计 24 分钟。剩余的 36 − 24 = 12 分钟就是第三次时长。"]
        ],
        answer: ["12 minutes", "12 分钟"]
      },
      {
        prompt: ["The waits 2, 3, 3, 4, 18 have a mean of 6 minutes. Replace 18 with 38. What is the new mean?", "等候时长 2、3、3、4、18 的均值为 6 分钟。将 18 改成 38 后，新均值是多少？"],
        hint: ["There are still five students. How much was added to the total?", "人数仍为五人。总时长增加了多少？"],
        steps: [
          ["The total rises by 38 − 18 = 20 minutes. Each equal share rises by 20 ÷ 5 = 4 minutes.", "总时长增加 38 − 18 = 20 分钟，平均每份增加 20 ÷ 5 = 4 分钟。"],
          ["The new mean is 6 + 4 = 10 minutes.", "新均值为 6 + 4 = 10 分钟。"]
        ],
        answer: ["10 minutes", "10 分钟"]
      },
      {
        prompt: ["Five students recorded 0, 2, 2, 4 and 7 missed classes. What is the mean number missed per student?", "五位同学的缺课次数分别为 0、2、2、4、7。每人平均缺课几次？"],
        hint: ["The student with zero missed classes still took part in the survey.", "缺课零次的同学也是参与调查的一人。"],
        steps: [
          ["The total is 15 missed classes. All five students count, including the student with zero.", "总共缺课 15 人次，零次的同学也算在内，共五人。"],
          ["Divide 15 by 5 to get the mean per student.", "用 15 除以 5，得到每位同学的平均次数。"]
        ],
        answer: ["3 classes per student", "每人 3 次"]
      }
    ],
    check: {
      prompt: ["Four journeys take a mean of 10 minutes. One recorded journey is corrected upward by 8 minutes. What is the new mean?", "四段行程平均用时 10 分钟，其中一段更正后增加了 8 分钟。新均值是多少？"],
      choices: [["12 minutes", "12 分钟"], ["18 minutes", "18 分钟"], ["2 minutes", "2 分钟"]],
      key: 0,
      feedback: [
        ["The total grows from 40 to 48 minutes. Sharing 48 minutes among four journeys gives 12.", "总时长由 40 增至 48 分钟，48 分给四段行程得到 12。"],
        ["Adding 8 to the mean would give the full extra 8 minutes to each journey. The four journeys share the increase, so the mean rises by 2 to 12.", "若在均值上直接加 8，就相当于每段行程都增加 8 分钟。实际由四段平分新增时间，均值只增加 2，达到 12。"],
        ["2 minutes is the increase in the mean, from 8 ÷ 4. Add it to the original mean of 10 to get 12 minutes.", "2 分钟是用 8 ÷ 4 算出的均值增量。还要加上原来的 10 分钟，得到 12 分钟。"]
      ]
    }
  },
  {
    id: "choose", title: "Choose a measure", titleZh: "选择合适的指标", pages: [40],
    question: ["Which number would you tell the next student?", "下一位同学来问一般要等多久，你会告诉他哪个数？"],
    idea: ["For waits of 2, 3, 3, 4 and 18 minutes, three different questions have clear answers. The most common wait is 3, the middle wait is 3 and the equal share is 6. Before calculating, decide which of those questions you need to answer.", "对于 2、3、3、4、18 分钟，三个问题各有答案。最常出现的时长是 3，排在中间的是 3，平摊给每人是 6。先判断要回答哪一个问题，再动手计算。"],
    method: ["For category names, count frequencies to get a mode. For ordered cases, the median locates the middle. For measured quantities on an interval or ratio scale, the mean uses every value. With a long tail, check whether the mean fits the person or quantity you are describing.", "对于类别名称，数频数可以找出众数。对于能排序的数据，中位数能定位中间的对象。对于等距或比率尺度的数值，均值使用每一个值。遇到长尾时，要判断均值是否适合描述题目关心的人或数量。"],
    examples: [
      {
        prompt: ["A notice should describe what the middle student experienced in the queue with waits of 2, 3, 3, 4, 18 minutes. Which measure and value belong on the notice?", "队伍的等候时长为 2、3、3、4、18 分钟，告示要描述排在等候时长中间的那位同学的经历。应写哪个指标和数值？"],
        hint: ["Underline the word “middle”.", "圈出题目中的“中间”。"],
        steps: [
          ["Middle calls for the median. Five students put the middle student third.", "“中间”对应中位数。共五人，第三位居中。"],
          ["The third wait is 3 minutes. Four students waited 4 minutes or less, so the long wait of 18 helps explain why a mean of 6 gives a different impression.", "第三位等了 3 分钟。四人都只等了 4 分钟或更短；18 分钟的长等待解释了为什么均值 6 分钟会给人不同印象。"]
        ],
        answer: ["Median, 3 minutes", "中位数，3 分钟"]
      },
      {
        prompt: ["A student club asks members for their preferred event: film, sport or music. Which measure identifies the most popular event?", "学生社团询问大家最喜欢电影、运动还是音乐。用哪个指标可以找出最受欢迎的活动？"],
        hint: ["Consider what calculation you can do with names.", "想想对这些类别名称可以做什么统计。"],
        steps: [
          ["Count the votes in each category. The event with the largest count is the one requested most.", "统计各类活动的票数。票数最多的活动就是大家最喜欢的。"],
          ["These categories have no numerical distance or natural order. The mode answers the club’s question directly.", "这些类别没有数值间距或自然顺序。众数直接回答社团的问题。"]
        ],
        answer: ["Mode", "众数"]
      },
      {
        prompt: ["Five students rate a tutorial as poor, fair, fair, good and excellent, in that order. Which measure describes the middle response without assuming equal gaps between ratings?", "五位同学依次给辅导课打出差、一般、一般、好和优秀的评价。要描述正中间的评价，应选哪个指标，且无需假设相邻等级差距相等？"],
        hint: ["The ratings can be ordered. You can read the middle one directly.", "评价等级有顺序，可以直接读取居中的那个等级。"],
        steps: [
          ["Use the order poor, fair, good, excellent. In these five observations the third response is fair.", "按差、一般、好、优秀排序，保留全部五份作答。第三份评价为一般。"],
          ["The median needs only the order here. Averaging codes such as 1 to 4 would assume that every one-level change had the same size.", "这里求中位数只需知道顺序。若把等级编码 1 到 4 后求均值，就额外假设了每升一级的差距相等。"]
        ],
        answer: ["Median, fair", "中位数，一般"]
      },
      {
        prompt: ["A quiz score follows a theoretical normal distribution with a mean of 70. Where are its median and mode?", "某测验成绩服从理论正态分布，均值为 70。它的中位数和众数在哪里？"],
        hint: ["Picture the bell curve on PDF p. 40. Where is its line of symmetry? Where is its peak?", "想象第 40 页的钟形曲线，对称轴和最高点分别位于哪里？"],
        steps: [
          ["The two halves of the bell curve mirror each other about 70. The median lies on that centre line.", "钟形曲线的两侧关于 70 对称，中位数位于这条中心线上。"],
          ["The single peak is also at 70. It gives the mode of the normal distribution.", "唯一的峰也在 70 处，对应这一正态分布的众数。"]
        ],
        answer: ["Median 70, mode 70", "中位数 70，众数 70"]
      },
      {
        prompt: ["At two kiosks the waits are A: 2, 3, 3, 4, 18 and B: 2, 16, 17, 17, 18 minutes. At which kiosk is the mean below the median?", "两个窗口的等候时长分别为 A 窗口 2、3、3、4、18，B 窗口 2、16、17、17、18 分钟。哪个窗口的均值低于中位数？"],
        hint: ["At each kiosk identify the third wait, then divide the total by five.", "每个窗口都先找第三个时长，再用总和除以五。"],
        steps: [
          ["At A the median is 3 and the mean is 30 ÷ 5 = 6. The long wait pulls the mean upward.", "A 的中位数为 3，均值为 30 ÷ 5 = 6。特别长的等待把均值向上拉。"],
          ["At B the median is 17 and the mean is 70 ÷ 5 = 14. The short wait pulls the mean downward. These are the typical tail patterns illustrated on p. 40.", "B 的中位数为 17，均值为 70 ÷ 5 = 14。特别短的等待把均值向下拉。这两组数据体现了第 40 页展示的典型长尾情形。"]
        ],
        answer: ["Kiosk B", "B 窗口"]
      }
    ],
    check: {
      prompt: ["A school pays for every minute of tutoring. For five sessions of 10, 10, 15, 20 and 45 minutes, it wants one number that, multiplied by five, recovers all the paid minutes. Which summary should it use?", "学校按分钟支付辅导费。五次辅导分别用时 10、10、15、20、45 分钟。学校要找一个数字，乘以五就能还原付费总时长。该选哪一项？"],
      choices: [["The mode, 10 minutes", "众数，10 分钟"], ["The median, 15 minutes", "中位数，15 分钟"], ["The mean, 20 minutes", "均值，20 分钟"]],
      key: 2,
      feedback: [
        ["10 minutes is the most common session length. Five times 10 covers only 50 minutes of the 100 paid. The equal-share mean is 20.", "10 分钟是最常见的时长，但 10 乘以 5 只得到 50 分钟。实际共付费 100 分钟，每次平摊为 20 分钟。"],
        ["15 minutes represents the middle session, a useful answer about typical experience. The billing question needs all 100 minutes, so use 100 ÷ 5 = 20.", "15 分钟对应中间那次辅导，适合描述典型体验。计费时要计入全部 100 分钟，故用 100 ÷ 5 = 20。"],
        ["The total is 100 minutes and the mean is 20. Multiplying the mean by the five sessions returns exactly 100 paid minutes.", "总时长为 100 分钟，均值为 20。用均值乘以 5 次辅导，恰好还原 100 分钟的计费时长。"]
      ]
    }
  }
];
