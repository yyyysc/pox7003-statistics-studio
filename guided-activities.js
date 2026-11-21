/* Week 1 classroom activities. The first example in each topic uses the teacher's data. */
const activitiesModule = (() => {
  function activityTable(title, description, headers, rows) {
    return `<figure class="guide-figure">
      <figcaption><strong>${title}</strong></figcaption>
      <div style="max-width:100%;overflow-x:auto"><table aria-label="${title}"><thead><tr>${headers.map(h=>`<th scope="col">${h}</th>`).join("")}</tr></thead>
      <tbody>${rows.map(([label,...values])=>`<tr><th scope="row">${label}</th>${values.map(value=>`<td>${value}</td>`).join("")}</tr>`).join("")}</tbody></table></div>
      ${centreZh(description)}
    </figure>`;
  }

  function householdPlot() {
    const frequencies=[0,2,1,2,3,1,0,1];
    const columns=frequencies.map((count,children)=>{
      const x=24+children*38;
      const households=Array.from({length:count},(_,i)=>`<circle cx="${x}" cy="${96-i*22}" r="8" fill="${children===4?"#5940c1":"#247569"}"/>`).join("");
      return `${households}<text x="${x}" y="131" text-anchor="middle">${children}</text>`;
    }).join("");
    return `<figure class="guide-figure"><figcaption><strong>Each dot is one household · PDF p. 42</strong></figcaption>
      <svg viewBox="0 0 320 166" style="width:100%;max-width:460px;height:auto;display:block;margin:auto" role="img" aria-label="Children per household. Two households reported one child, one reported two, two reported three, three reported four, one reported five and one reported seven.">
      <g fill="#383344" font-family="system-ui, sans-serif" font-size="15"><path d="M14 110 H302" stroke="#847d90"/>${columns}<text x="158" y="160" text-anchor="middle">Children per household</text></g></svg>
      ${centreZh("每个点代表一户。横轴是每户孩子数；4 上方有三个点，表示三户各有四个孩子。")}</figure>
      <details class="centre-hint"><summary>See household counts and child totals</summary>${activityTable("Recount the survey","每行列出孩子数、相应户数，以及这组家庭合计的孩子数。",["Children each","Households","Children in group"],[
        [1,2,2],[2,1,2],[3,2,6],[4,3,12],[5,1,5],[7,1,7],["Total",10,34]
      ])}</details>`;
  }

  const topics = [
    {
      id:"activity-scores", title:"Four summaries of ten scores", titleZh:"十个数据的四种描述", pages:[41],
      question:["Can two answers both be 6 and tell you different things?", "两个答案都是 6，它们能表达不同的意思吗？"],
      idea:["Page 41 gives ten values in recording order: 5, 6, 2, 4, 7, 8, 3, 5, 6, 6. Put all ten in order. You can now see the endpoints, repeated values and middle pair in the same list.", "第 41 页按记录顺序给出十个数：5、6、2、4、7、8、3、5、6、6。把十个数全部排序，就能同时看到两端的值、重复值和中间的一对值。"],
      method:["For the mean, share the total across all ten observations. For the median, average positions 5 and 6 in order. For the mode, find the value with the highest count. For the range, subtract the smallest value from the largest.", "均值用总和除以十。中位数取排序后第 5 与第 6 个数的平均。众数看哪个值的频数最高。极差用最大值减最小值。"],
      visual:()=>activityTable("Pair the ordered scores from the outside in · PDF p. 41",
        "每行配对最外侧的两个剩余值。第一行给出端点 2 和 8，第五行留下中间一对 5 和 6。",["Pair","Lower score","Upper score"],[
          ["1st and 10th",2,8],["2nd and 9th",3,7],["3rd and 8th",4,6],["4th and 7th",5,6],["5th and 6th · middle",5,6]
        ]),
      examples:[
        {
          prompt:["PDF p. 41. For 5, 6, 2, 4, 7, 8, 3, 5, 6, 6, find the mean, median, mode and range.","讲义第 41 页。求 5、6、2、4、7、8、3、5、6、6 的均值、中位数、众数与极差。"],
          hint:["Copy all ten observations before sorting. Keep the repeated scores.","先抄齐十个数据再排序，保留所有重复值。"],
          steps:[
            ["The ten scores add to 52. Dividing 52 by 10 gives a mean of 5.2.","十个数据总和为 52。52 除以 10 得到均值 5.2。"],
            ["In order: 2, 3, 4, 5, 5, 6, 6, 6, 7, 8. Positions 5 and 6 give (5 + 6) / 2 = 5.5.","排序为 2、3、4、5、5、6、6、6、7、8。第 5 和第 6 个数取平均得到 5.5。"],
            ["The score 6 occurs three times, more than any other. The gap between the endpoints is 8 − 2 = 6.","6 出现三次，次数最多。两端之差是 8 − 2 = 6。"]
          ],
          answer:["Mean 5.2, median 5.5, mode 6, range 6.","均值 5.2，中位数 5.5，众数 6，极差 6。"]
        },
        {
          prompt:["Using the same ten scores, a student reports 3 as the mode. What did the student count?","沿用这十个数，一名学生把众数写成 3。他数出的是什么？"],
          hint:["Write down what repeats and how many times it repeats.","分别写出重复的数值和它出现的次数。"],
          steps:[["The score 6 appears three times. Three is its frequency.","6 出现了三次。3 是它的频数。"],["The question asks which score occurs most often, so report 6.","题目问哪个分数出现最多，因此报 6。"]],
          answer:["3 is the frequency of the mode. The modal score is 6.","3 是众数的频数，众数是 6。"]
        },
        {
          prompt:["If the 8 was recorded incorrectly and should be 18, what are the new mean and range?","若原数据中的 8 为录入错误，应为 18，新的均值与极差各是多少？"],
          hint:["Only one score changes. How much does that add to the original total of 52?","仅有一个数改变。原总和 52 增加了多少？"],
          steps:[["The total increases by 10 to 62, and the count stays at ten. The mean becomes 62 / 10 = 6.2.","总和增加 10，变为 62，数据个数仍为十。均值变为 62 / 10 = 6.2。"],["The minimum is still 2. The new maximum is 18, so the range is 18 − 2 = 16.","最小值仍为 2，新最大值为 18，因此极差是 18 − 2 = 16。"]],
          answer:["Mean 6.2, range 16.","均值 6.2，极差 16。"]
        },
        {
          prompt:["Add one extra score of 6 to the original ten. What is the median now?","在原来的十个数中另外增加一个 6。此时的中位数是多少？"],
          hint:["Count the observations again. How many positions are on either side of the middle?","重新数个数。居中位置的两边各有几个数？"],
          steps:[["With eleven scores, position 6 has five values on either side.","共有十一个数，第 6 个位置的两边各有五个数。"],["The values in order are 2, 3, 4, 5, 5, 6, 6, 6, 6, 7, 8. The sixth value is 6.","排序为 2、3、4、5、5、6、6、6、6、7、8。第 6 个数为 6。"]],
          answer:["Median 6.","中位数为 6。"]
        },
        {
          prompt:["Every original score receives two extra points. Which of the four summaries keeps its original value?","原来的每个分数都加 2 分。四个指标中，哪个仍为原值？"],
          hint:["Compare the new endpoints with the old ones.","比较新旧两个端点。"],
          steps:[["The new endpoints are 4 and 10. Their gap is still 10 − 4 = 6.","新的端点是 4 和 10，相距仍为 10 − 4 = 6。"],["Every score shifts by two. The mean becomes 7.2, the median 7.5 and the mode 8.","所有分数都增加 2。均值变为 7.2，中位数 7.5，众数 8。"]],
          answer:["Only the range stays at 6.","只有极差仍为 6。"]
        }
      ],
      check:{
        prompt:["A learner says that for the page 41 data the mode and range both equal 6. Which explanation supports both answers?","第 41 页中众数和极差都是 6。哪项理由可以同时支持这两个答案？"],
        choices:[["Six scores are equal, and there are six different scores.","有六个数相等，而且有六种不同的数。"],["The score 6 appears most often, and 8 − 2 = 6.","6 出现次数最多，而且 8 − 2 = 6。"],["The middle score is 6, and the scores add up to 6.","中间值是 6，且分数总和为 6。"]],
        key:1,
        feedback:[["Count the sixes again. Three entries are 6. For range, measure the gap from 2 to 8.","重新数一遍，6 出现三次。求极差要计算 2 到 8 的距离。"],["Yes. The mode identifies a frequently observed score. The range measures the distance between two endpoints.","正确。众数表示出现次数最多的分数，极差表示两个端点之间的距离。"],["The middle pair gives a median of 5.5, and the scores total 52. Frequency and endpoints supply the two answers here.","中间一对的均值为 5.5，总和为 52。本题分别从频数和端点求答案。"]]
      }
    },
    {
      id:"activity-households", title:"Describe a household survey", titleZh:"解释家庭调查", pages:[42],
      question:["How would you describe a typical household in this survey?", "怎样说明这次调查中一户家庭通常有几个孩子？"],
      idea:["Ten households reported 4, 1, 5, 4, 3, 7, 2, 3, 4 and 1 children. Look at the dots above 1 in the plot. Two dots tell us that two households reported one child each.", "十户家庭分别报告有 4、1、5、4、3、7、2、3、4 和 1 个孩子。图上数字 1 上方有两个点，表示有两户各有一个孩子。"],
      method:["Find the largest household frequency, then read the child count in that row. To find the total children, multiply each child count by its frequency and add the products. The two middle households in an ordered list give the median for ten households.","先看最高频数及其对应的孩子数。算孩子总数时，把每个孩子数乘以对应户数再加总。十个家庭按孩子数排序，中间两户的孩子数决定中位数。"],
      visual:householdPlot,
      examples:[
        {
          prompt:["PDF p. 42. Give the mode, mean and median, then give one reason to report the mode for these ten households.","讲义第 42 页。求十户家庭孩子数的众数、均值和中位数，并给出一个采用众数的理由。"],
          hint:["For each result, state what the number refers to. Look for the reason in the frequency table.","每个答案都说清楚数的是什么。在频数表中寻找选用众数的理由。"],
          steps:[
            ["Three households have four children, the highest frequency. The mode is four children.","有三户各有四个孩子，这个户数最高。众数为四个孩子。"],
            ["The total is 34 children across 10 households. Mean = 34 / 10 = 3.4 children per household.","十户共有 34 个孩子，均值为 34 / 10 = 3.4 个/户。"],
            ["The ordered counts are 1, 1, 2, 3, 3, 4, 4, 4, 5, 7. The middle pair gives (3 + 4) / 2 = 3.5.","排序为 1、1、2、3、3、4、4、4、5、7。中间一对取平均，得到 (3 + 4) / 2 = 3.5。"]
          ],
          answer:["Mode 4, mean 3.4, median 3.5. Four children is the most common actual count reported by the surveyed households.","众数 4，均值 3.4，中位数 3.5。选择众数的理由是，四个孩子是这十户中实际出现最频繁的孩子数。"]
        },
        {
          prompt:["Using page 42, what percentage of the surveyed households reported four children?","根据第 42 页，有四个孩子的家庭占受访家庭的百分之几？"],
          hint:["Decide whether to count children or households in the fraction.","先判断分子、分母应该数孩子还是数家庭。"],
          steps:[["Three out of ten households reported four children.","十户中有三户报告有四个孩子。"],["Divide 3 by 10 and multiply by 100 to express the result as a percentage.","3 除以 10 再乘以 100，写成百分比。"]],
          answer:["30% of the households.","受访家庭的 30%。"]
        },
        {
          prompt:["A student doubts the mean of 3.4 because no household reported a fraction of a child. Explain the number in one sentence.","一名学生看到均值 3.4 感到困惑，因为没有任何一户有零点几个孩子。用一句话解释这个数。"],
          hint:["Include the total number of children and the number of households.","在你的说明里写出孩子总数和家庭户数。"],
          steps:[["The mean is an equal share of the total. This survey counted 34 children across ten households.","均值表示把总量均分后的一份。本调查在十户中数到 34 个孩子。"],["An equal-share summary can be fractional for integer observations.","即使每项观察都是整数，均分得到的值也可以是小数。"]],
          answer:["There were 34 children across 10 households, giving an average of 3.4 children per household.","十户共有 34 个孩子，平均每户有 3.4 个孩子。"]
        },
        {
          prompt:["Add one surveyed household with zero children. What are the new mean and mode? Give the mean to two decimal places.","新增一户没有孩子的受访家庭。新的均值与众数是什么？均值保留两位小数。"],
          hint:["A household with zero children still contributes one household.","没有孩子的家庭仍然计为一户。"],
          steps:[["The total stays at 34 children and there are now 11 households. Dividing gives 34 / 11 ≈ 3.09.","孩子总数仍为 34，但总户数变为 11。相除得到 34 / 11 ≈ 3.09。"],["Only one household reports zero. Four remains the most frequent count, occurring three times.","只有一户报告 0。4 仍然出现三次，次数最多。"]],
          answer:["Mean 3.09 children per household, mode 4 children.","均值约为 3.09 个/户，众数为 4 个孩子。"]
        },
        {
          prompt:["The survey team needs one ticket per child. Should it multiply the mode or the mean by the original ten households?","调查团队要为每个孩子准备一张票。将众数还是均值乘以原来的十户才能得到所需票数？"],
          hint:["Which measure was obtained by dividing the total by ten?","哪个指标是把总数除以十得到的？"],
          steps:[["The mean times the count recovers the total: 3.4 × 10 = 34.","用均值乘个数可还原总量：3.4 × 10 = 34。"],["Using the mode would give 4 × 10 = 40, six more tickets than required.","用众数计算会得到 4 × 10 = 40，比所需票数多六张。"]],
          answer:["Use the mean. The team needs 34 tickets.","用均值，团队需要 34 张票。"]
        }
      ],
      check:{
        prompt:["Which sentence gives a sound reason for reporting the mode in the page 42 survey?","哪句话能合理支持在第 42 页调查中报告众数？"],
        choices:[["More than half the households have four children.","超过一半的家庭有四个孩子。"],["Every family in the population has four children.","总体中的每户家庭都有四个孩子。"],["Four children was the count reported by the largest number of surveyed households.","在这次调查中，报告有四个孩子的家庭户数最多。"]],
        key:2,
        feedback:[["Three of ten households have four children. A majority would require more than five households.","十户中有三户有四个孩子。“超过一半”要求多于五户。"],["The sample already contains other counts, including one and seven. A population statement also goes beyond these ten reports.","样本中已有一孩户和七孩户等其他取值。从这十户也无法推出有关全部家庭的结论。"],["Yes. It identifies the most common observed count and keeps the claim tied to the ten households in the survey.","正确。理由指出了出现最多的实际孩子数，并将结论限定在这十户受访家庭内。"]]
      }
    },
    {
      id:"activity-percentages", title:"Read a percentage table", titleZh:"从百分比表还原人数", pages:[43],
      question:["If two groups show the same percentage, do they contain the same number of people?", "两组中的百分比相同，对应的人数也一样多吗？"],
      idea:["Page 43 surveys 120 males and 80 females. In the age 30–49 row, both entries are 30%. For males, 30% means 36 out of 120. For females, it means 24 out of 80. Each column has its own total.", "第 43 页样本有 120 名男性和 80 名女性。30–49 岁一行的两个百分比都是 30%。男性这列的 30% 是 120 人中的 36 人，女性这列的 30% 是 80 人中的 24 人。每一列都有自己的总人数。"],
      method:["Read the age limits, then underline the group named in the question. Within each relevant column, multiply the group size by the age percentage to get a count. Add counts across columns when asked about all people. For a percentage, divide by the size of the group the question asks about.", "先看年龄范围，再圈出题目所指的人群。每一列用该组人数乘以该年龄层的百分比，即得人数。题目问全体时，将各列相应人数相加。若要求百分比，再除以题目所问人群的总人数。"],
      visual:()=>activityTable("Age distribution by gender · PDF p. 43","原题表格：男性一列以 120 人为分母，女性一列以 80 人为分母。两列都各自合计 100%。",
          ["Age in years","Males (120)","Females (80)"],[["0–19","10%","20%"],["20–29","10%","20%"],["30–49","30%","30%"],["50–89","50%","30%"],["Total","100%","100%"]])+
        `<details class="centre-hint"><summary>Check the counts behind the percentages</summary>${activityTable("Counts calculated from the source percentages","用各列自己的总人数乘百分比，得到逐格人数。最右列为每个年龄层的总人数。",
          ["Age","Males","Females","All"],[["0–19",12,16,28],["20–29",12,16,28],["30–49",36,24,60],["50–89",60,24,84],["Total",120,80,200]])}</details>`,
      examples:[
        {
          prompt:["PDF p. 43(a). How many people in the whole sample are under 20?","讲义第 43 页 (a)。全体样本中未满 20 岁的人有多少？"],
          hint:["Use the first age row and convert each column separately.","读第一个年龄段，并在每一列单独换算。"],
          steps:[["The 0–19 row includes everyone under 20. The male column gives 120 × 0.10 = 12 people.","0–19 岁一行包含全部未满 20 岁的人。男性有 120 × 0.10 = 12 人。"],["The female column gives 80 × 0.20 = 16 people. Together that is 12 + 16 = 28.","女性有 80 × 0.20 = 16 人。合计 12 + 16 = 28 人。"]],
          answer:["28 people.","28 人。"]
        },
        {
          prompt:["PDF p. 43(b). What percentage of the entire sample is aged at least 50?","讲义第 43 页 (b)。年龄至少 50 岁的人占全部样本的百分之几？"],
          hint:["Find the number aged 50–89 in each column before dividing.","先分别算出两列 50–89 岁的人数，再作除法。"],
          steps:[["The percentages give 120 × 0.50 = 60 males and 80 × 0.30 = 24 females. Together 84 people are at least 50.","男性有 120 × 0.50 = 60 人，女性有 80 × 0.30 = 24 人。至少 50 岁者共 84 人。"],["There are 200 people in all. Express 84 / 200 as a percentage: 42%.","全体共 200 人。把 84 / 200 换算为百分比，得到 42%。"]],
          answer:["42% of the full sample.","全部样本的 42%。"]
        },
        {
          prompt:["PDF p. 43(c). How many males are at least 30 years old?","讲义第 43 页 (c)。至少 30 岁的男性有多少？"],
          hint:["The age threshold includes two complete rows in the male column.","男性列有两个完整的年龄段符合这个条件。"],
          steps:[["The two male percentages are 30% for ages 30–49 and 50% for ages 50–89. Together they cover 80% of the male participants.","男性中，30–49 岁占 30%，50–89 岁占 50%。合计占男性组的 80%。"],["Multiply by the male group size: 120 × 0.80 = 96.","乘以男性组总人数：120 × 0.80 = 96。"]],
          answer:["96 males.","96 名男性。"]
        },
        {
          prompt:["Using the same table, what percentage of the under-20 group is female? Round to one decimal place.","沿用原表，在未满 20 岁的人群中，女性占百分之几？保留一位小数。"],
          hint:["The phrase “of the under-20 group” gives the denominator.","“在未满 20 岁的人群中”给出了分母。"],
          steps:[["There are 16 females under 20 and 28 people under 20 altogether.","未满 20 岁者中有 16 名女性，该年龄组共 28 人。"],["The required percentage is 16 / 28 × 100 ≈ 57.1%. The original 20% uses all 80 females as its denominator.","所求百分比为 16 / 28 × 100 ≈ 57.1%。原来的 20% 以全部 80 名女性为分母。"]],
          answer:["57.1% of the under-20 group.","未满 20 岁人群的 57.1%。"]
        },
        {
          prompt:["Can the page 43 table tell you exactly how many people are younger than 25? Explain.","只用第 43 页的表能否确定未满 25 岁的人数？请说明。"],
          hint:["Which age band contains both 24-year-olds and 25-year-olds?","哪个年龄段同时包含 24 岁和 25 岁的人？"],
          steps:[["All 28 people aged 0–19 count. The table groups another 28 people together from 20 to 29.","0–19 岁的 28 人都符合要求。另有 28 人合并在 20–29 岁一组。"],["Their individual ages are unavailable. Zero through all 28 of that second group could be younger than 25.","没有这一组中每个人的具体年龄。20–29 岁这 28 人里，未满 25 岁者可能是 0 到 28 人。"]],
          answer:["An exact count requires finer age groups or individual ages. It could be anywhere from 28 to 56.","确定人数需要更细的年龄分组或个体年龄。现有表格只能确定在 28 到 56 人之间。"]
        }
      ],
      check:{
        prompt:["A student averages 50% and 30% to report that 40% of the sample is at least 50. Which calculation uses the sample sizes?","一名学生将 50% 和 30% 取平均，认为全样本中至少 50 岁者占 40%。哪个算法考虑了两组的人数？"],
        choices:[["(60 + 24) / 200 × 100 = 42%","(60 + 24) / 200 × 100 = 42%"],["(50 + 30) / 2 = 40%","(50 + 30) / 2 = 40%"],["(60 + 24) / 120 × 100 = 70%","(60 + 24) / 120 × 100 = 70%"]],
        key:0,
        feedback:[["Yes. Sixty males and 24 females meet the age condition. The denominator covers all 200 participants.","正确。符合年龄条件的有 60 名男性、24 名女性，分母是全部 200 人。"],["An ordinary average gives the two groups equal weight. Here the 120-person group must contribute more weight than the 80-person group.","算术平均给两组相同权重。这里 120 人那组的权重应该大于 80 人那组。"],["The 84 people in the numerator come from both groups. The matching whole-sample denominator is 200.","分子中的 84 人来自两组，所以全体分母应为 200。"]]
      }
    }
  ];
  const bank = {
    "act-score-mean":{
      topic:"activity-scores",page:41,
      prompt:"Ten observations total 52. One recorded value of 8 is corrected to 12. What is the new mean?",
      zh:"十个观察值的总和为 52。一个录成 8 的数更正为 12。新的均值是多少？",answer:"5.6",
      explanation:["The correction adds 12 − 8 = 4 to the total. The ten observations now sum to 56, giving 56 / 10 = 5.6.","本次更正使总和增加 12 − 8 = 4。十个数的总和变为 56，因此均值为 56 / 10 = 5.6。"],
      traps:{"6.4":"Adding the whole new score counts the original 8 twice. Add the change of 4.","56":"This is the corrected total. Divide it by all ten observations."},
      retry:{prompt:"Eight scores total 40. A recorded 9 should be 5. What is the corrected mean?",zh:"八个分数总和 40。一个录成 9 的分数应为 5。更正后的均值是多少？",answer:"4.5",explanation:["Subtract 4 from the total, then divide 36 by 8. The new mean is 4.5.","总和减少 4，变为 36，再除以 8。新的均值是 4.5。"]}
    },
    "act-score-middle":{
      topic:"activity-scores",page:41,
      prompt:"The scores in order are 2, 3, 4, 5, 5, 6, 6, 6, 7, 8. What is their median?",zh:"分数排序后为 2、3、4、5、5、6、6、6、7、8。这组数据的中位数是多少？",answer:"5.5",
      explanation:["Ten scores have two middle positions, 5 and 6. The values at those positions are 5 and 6, so the median is (5 + 6) / 2 = 5.5.","十个数有两个中间位置，即第 5 和第 6 位。读取这两个位置上的数值 5 和 6，平均得到 5.5。"],
      traps:{"6":"Six is the most frequent score and also the upper middle score. The even-sized list needs both middle values.","5.2":"5.2 is the sum divided by ten. The median uses the two central positions."},
      retry:{prompt:"Eight distances in metres are 1, 2, 2, 4, 8, 9, 9, 13. What is the median distance in metres?",zh:"八段距离依次为 1、2、2、4、8、9、9、13 米。中位数是多少米？",answer:"6",explanation:["The central values at positions 4 and 5 are 4 and 8. Their midpoint is 6 metres.","第 4、第 5 位的值是 4 和 8。两者中点为 6 米。"]}
    },
    "act-score-range":{
      topic:"activity-scores",page:41,
      prompt:"A score list contains 4, 4, 5, 5, 5, 9. Which pair gives the mode and range, in that order?",zh:"数列为 4、4、5、5、5、9。下列哪一对依次给出众数和极差？",
      choices:["5 and 5","3 and 5","5 and 9","4 and 9"],answer:"5 and 5",
      explanation:["Five is the score that occurs three times. The largest score minus the smallest is 9 − 4 = 5.","出现三次的分数是 5，因此众数为 5。最大值减最小值为 9 − 4 = 5，即极差。"],
      traps:{"3 and 5":"Three is the frequency of the mode. The modal score is 5.","5 and 9":"Nine is the maximum. Subtract the minimum to find the range.","4 and 9":"These are the two endpoints. Count repeated scores for the mode, then subtract the endpoints for the range."},
      retry:{prompt:"The scores are 6, 6, 8, 8, 8, 15. What is the range?",zh:"数列为 6、6、8、8、8、15。极差是多少？",answer:"9",explanation:["Read the endpoints. Their difference is 15 − 6 = 9.","取两个端点，相减得到 15 − 6 = 9。"]}
    },
    "act-households-evidence":{
      topic:"activity-households",page:42,
      prompt:"In a sample of ten households, three have four children. Every other child count appears fewer than three times. Which statement is supported?",
      zh:"十户家庭中有三户各有四个孩子，其他每种孩子数都少于三户。哪句话能从这些资料中得出？",
      choices:["Four is the most common child count in this sample.","A majority of households in the sample have four children.","The mean must be four children."],answer:"Four is the most common child count in this sample.",
      explanation:["A frequency of three exceeds the frequency of every other count. That makes four the sample mode. Three out of ten is 30%.","四孩户出现三次，超过其他各个孩子数的户数，因此样本众数是 4。三户占十户的 30%。"],
      traps:{"A majority of households in the sample have four children.":"A majority of ten households would require at least six.","The mean must be four children.":"To find the mean, you also need to know how many children the other households reported."},
      retry:{prompt:"In six households the counts are 1, 1, 2, 2, 2, 5. Which child count is the mode?",zh:"六户的孩子数为 1、1、2、2、2、5。众数是多少？",answer:"2",explanation:["Two occurs three times. One occurs twice and five occurs once.","2 出现三次，1 出现两次，5 出现一次，所以众数为 2。"]}
    },
    "act-households-weight":{
      topic:"activity-households",page:42,
      prompt:"Two households have one child each, three have two children each, and one has four children. What is the mean number of children per household?",zh:"两户各有一个孩子，三户各有两个孩子，一户有四个孩子。平均每户有几个孩子？",answer:"2",
      explanation:["Count households: 2 + 3 + 1 = 6. Count children: 2 × 1 + 3 × 2 + 1 × 4 = 12. The mean is 12 / 6 = 2.","户数为 2 + 3 + 1 = 6；孩子总数为 2 × 1 + 3 × 2 + 1 × 4 = 12。均值为 12 / 6 = 2。"],
      traps:{"12":"Twelve is the total number of children. Share them across six households.","2.33":"Averaging just the three distinct child counts gives each category the same weight. Use the household frequencies."},
      retry:{prompt:"One household has no children, three have two each and one has three. What is the mean number of children per household?",zh:"一户没有孩子，三户各有两个孩子，一户有三个孩子。平均每户有几个孩子？",answer:"1.8",explanation:["Five households report 0 + 3 × 2 + 3 = 9 children. The mean is 9 / 5 = 1.8.","五户共有 0 + 3 × 2 + 3 = 9 个孩子，均值为 9 / 5 = 1.8。"]}
    },
    "act-ages-count":{
      topic:"activity-percentages",page:43,
      prompt:"Among 120 males, 30% are aged 30–49. Among 80 females, 30% are in that age band. How many people in total are aged 30–49?",zh:"120 名男性中 30% 为 30–49 岁，80 名女性中 30% 也处于此年龄段。这个年龄段共有多少人？",answer:"60",
      explanation:["The group counts are 120 × 0.30 = 36 and 80 × 0.30 = 24. Adding gives 60 people. Here the two percentages happen to be equal.","两组相应人数为 120 × 0.30 = 36 人和 80 × 0.30 = 24 人，合计 60 人。本题两列的百分比恰好相同。"],
      traps:{"30":"Thirty is a percentage in each column. First convert percentages into people.","36":"This counts only the male participants in the age band.","24":"This counts only the female participants in the age band."},
      retry:{prompt:"For ages under 20, the percentages are 10% of 120 males and 20% of 80 females. How many people under 20 are there altogether?",zh:"未满 20 岁者占 120 名男性的 10%、80 名女性的 20%。合计有多少人未满 20 岁？",answer:"28",explanation:["The male count is 12 and the female count is 16. Adding counts gives 28 people.","男性有 12 人，女性有 16 人，合计 28 人。"]}
    },
    "act-ages-base":{
      topic:"activity-percentages",page:43,
      prompt:"In a sample of 200, there are 120 males. Sixty males are at least 50 years old. What percentage of the entire sample are males aged at least 50?",zh:"一份 200 人的样本中有 120 名男性，其中 60 名男性至少 50 岁。至少 50 岁的男性占全部样本的百分之几？",
      choices:["30%","50%","60%","42%"],answer:"30%",
      explanation:["The numerator is 60 males aged at least 50. The entire sample supplies the denominator of 200. The percentage is 60 / 200 × 100 = 30%.","分子是至少 50 岁的 60 名男性，分母为样本全体 200 人。60 / 200 × 100 = 30%。"],
      traps:{"50%":"Dividing by 120 answers a within-male-group question.","60%":"That is the percentage of the sample who are male across all ages.","42%":"In the source table 42% counts everyone aged at least 50, including females."},
      retry:{prompt:"Sixteen of the 80 females in a sample of 200 are under 20. What percentage of the females are under 20?",zh:"样本共 200 人，其中 80 名女性中有 16 人未满 20 岁。未满 20 岁者占女性的百分之几？",choices:["8%","20%","40%"],answer:"20%",explanation:["The group named in the question is the 80 females. Dividing 16 by 80 gives 20%.","所问人群是 80 名女性。16 除以 80 再转为百分比，得到 20%。"]}
    },
    "act-ages-pool":{
      topic:"activity-percentages",page:43,
      prompt:"In one club, 20% of 60 members are new. In another, 50% of 40 members are new. The clubs have no members in common. What percentage of all members are new?",zh:"一个社团的 60 名成员中有 20% 是新成员，另一社团的 40 名成员中有 50% 是新成员。两社团成员无重叠。新成员占全部成员的百分之几？",
      choices:["32%","35%","70%","20%"],answer:"32%",
      explanation:["The clubs have 12 and 20 new members. The combined fraction is (12 + 20) / (60 + 40), which is 32%.","两社团分别有 12 和 20 名新成员。合并比例为 (12 + 20) / (60 + 40)，即 32%。"],
      traps:{"35%":"This averages the two percentages with equal weights. The clubs have different sizes.","70%":"Adding two percentages ignores their different denominators.","20%":"Twenty percent describes the first club only."},
      retry:{prompt:"Twenty of 80 morning students and ten of 20 afternoon students attend a workshop. The two groups are distinct. What percentage of all these students attend?",zh:"上午班 80 人中有 20 人参加工作坊，下午班 20 人中有 10 人参加。两个班没有重复学生。参加工作坊的占这两个班总人数的百分之几？",choices:["25%","30%","37.5%","50%"],answer:"30%",explanation:["Across the two classes, 20 + 10 = 30 of 80 + 20 = 100 students attend. That is 30%.","两个班共有 80 + 20 = 100 人，其中 20 + 10 = 30 人参加，占 30%。"]}
    }
  };

  return {
    id:"activities", title:"Classroom activities",
    subtitle:["Work through the three problems that close the Week 1 lecture.","跟着老师课件结尾的三道课堂活动，把统计量和百分比用到实际问题中。"],
    topics,bank,
    writing:{
      prompt:["Two groups of different sizes report 50% and 30% aged at least 50. In one or two sentences, explain why the page 43 sample gives 42% overall. Use the counts to support your answer.","两个人数不同的组中，至少 50 岁者分别占 50% 和 30%。请用一到两句英文说明第 43 页的全样本为何得到 42%，并用人数支持你的答案。"],
      model:["Of 120 males, 60 are at least 50. Of 80 females, 24 are at least 50. Together they account for 84 of 200 people, or 42%.","120 名男性中有 60 人至少 50 岁，80 名女性中有 24 人至少 50 岁。合计 200 人中有 84 人符合条件，占 42%。"],
      rubric:["Did you use 120 and 80 as the separate group denominators?","Did you combine 60 and 24 people, then divide their total by 200?"]
    }
  };
})();
