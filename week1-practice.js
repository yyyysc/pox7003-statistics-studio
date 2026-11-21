/* References for the original ten questions and the five added questions in each topic. */
const weekOneReferences = {
  quantitative:[7,8,8,9,9,9,10,4,8,9,8,8,7,9,7],
  "data-types":[11,12,12,11,11,11,12,11,12,12,11,12,12,11,12],
  scales:[14,15,19,17,18,19,14,16,19,14,17,14,15,15,19],
  frequencies:[22,22,22,22,43,43,43,43,43,43,22,22,43,43,43],
  boxplot:[23,23,23,24,24,24,23,23,23,23,23,24,23,23,23],
  histogram:[25,25,25,26,26,25,26,26,25,26,26,25,25,26,26],
  "stem-leaf":Array(15).fill(27), dotplot:Array(15).fill(28),
  mode:[30,32,30,31,42,42,32,30,42,30,30,30,32,31,42],
  median:[33,34,35,36,37,37,36,35,36,36,35,36,34,37,33],
  mean:[38,38,39,39,39,37,38,38,38,39,38,38,39,38,38],
  "centre-comparison":[40,40,42,38,41,41,37,41,42,41,38,33,30,40,40]
};
const weekOneReasons = {
  quantitative:[
    "Prepare the observations first. Analyse them to produce results, report those results, then discuss their meaning.",
    "The median describes the surveyed class. The statement makes no claim about other students.",
    "The sample supplies the evidence, while the estimate concerns the larger school population.",
    "A z-score expresses (value − mean) in units of the standard deviation.",
    "The median locates the middle ordered observation. Range, variance and standard deviation measure spread.",
    "Standard deviation measures the spread of observations around their mean.",
    "First identify the question, the variables and how the observations were collected. These determine which comparisons have meaning."
  ],
  "data-types":[
    "Eye colours name categories. The other variables record measured lengths, times or counts.",
    "Children can be counted in whole numbers. A measured height or duration can take intermediate values.",
    "A desk can measure any length within a range, even if a ruler rounds the recorded result.",
    "Dichotomous describes the number of possible categories. A study with many participants can still record a yes/no variable.",
    "A breed code identifies a name. Subtracting or averaging two breed codes has no meaningful interpretation.",
    "Check what each entry represents. A numeral can label a category or measure an amount.",
    "Rounding changes the recording precision. A person's underlying height still varies continuously."
  ],
  scales:[
    "Eye colours distinguish groups without ranking them.",
    "Grades rank performance, but a change from C to B need not represent the same amount as a change from B to A.",
    "Height has equal units and a meaningful zero length, allowing comparisons by ratio.",
    "A Celsius degree measures an equal temperature change throughout the scale. Its zero is a reference point.",
    "Fahrenheit readings have equal steps. Moving the zero when converting to Celsius changes ratios of readings.",
    "Doubling a height doubles its distance from a meaningful zero. Changing from metres to centimetres preserves this ratio.",
    "Two players can swap jersey numbers without changing any measured characteristic."
  ],
  frequencies:[
    "A frequency is the number of observations in one row or category. Adding the frequencies gives the total number observed.",
    "Read across the row labelled 19. Its frequency column contains 6 people.",
    "Compare the three counts, 15, 6 and 4. The largest count belongs to age 18.",
    "Divide the count for age 19 by the total number observed: 6 ÷ 25 = 0.24, or 24%.",
    "The male column describes the 120 men. Its percentages use that group as the denominator.",
    "Multiply each percentage by its own group size. Counts can then be added across the groups.",
    "Convert 20% to 0.20 and multiply by 80 to obtain 16 people."
  ],
  boxplot:[
    "The line inside the box divides the ordered observations at the 50th percentile.",
    "The box begins at the first quartile and ends at the third quartile, enclosing the middle half.",
    "Subtract Q1 from Q3. The result is the spread of the middle half of the data.",
    "Compare the heights of the lines inside the four boxes on the same vertical scale. Method 4 has the highest median line.",
    "Compare each box from its lower to its upper edge. Method 3 spans the largest distance between quartiles.",
    "In a Tukey box plot, a point beyond the whisker lies outside the ordinary fence. Investigate it before deciding how to treat it.",
    "The lecturer labels the two whisker tips as the lowest and highest observations on this schematic."
  ],
  histogram:[
    "Move left to right along the horizontal axis. Each bin covers the next interval of numerical values.",
    "On a frequency axis, the bar height is the number of observations in its interval.",
    "Salaries are quantitative. Grouping them into numerical intervals reveals where salaries concentrate and which way the tail extends.",
    "Department names are categories. A separate bar for each name makes their counts comparable.",
    "The upper boundary of one interval is the lower boundary of its neighbour, so the adjacent rectangles meet.",
    "The bars extend farther towards high salaries. Name the skew by the direction of this tail.",
    "A density height is count divided by width. Multiplying height by width recovers the count as area."
  ],
  "stem-leaf":[
    "Each leaf records one observation. Repeated leaves account for separate observations with the same value.",
    "The key tells you which place value belongs to each part. The same digits could represent 25 or 2.5 under different keys.",
    "Repeated scores each contribute a leaf. Removing repeats would lose the frequencies.",
    "The stem is the tens digit. Attach 3, 6, 6 and 7 in turn to stem 1 to obtain 13, 16, 16 and 17.",
    "Ordering the leaves within each stem makes the smallest, largest and repeated values easy to read.",
    "Read each stem together with one leaf, using the key to recover that observation.",
    "With a tens-and-units key, 38 has stem 3 and leaf 8."
  ],
  dotplot:[
    "The legend gives one vaccinated baby per dot. Count the dots above the colony label.",
    "Colony A has seven dots. The other counts are three, five and one.",
    "Colony D has a single dot, the smallest vaccinated count.",
    "In a numerical dot plot the horizontal position gives the value. Observations with that same value stack vertically.",
    "If the axis includes a value and there is no dot above it, none of the observations shown has that value.",
    "A rate divides the vaccinated count by the number of eligible babies in that colony.",
    "At one case per dot, five dots count five cases."
  ],
  mode:[
    "Tally each observed value. A mode is any value whose tally reaches the highest frequency.",
    "Eye colours can be tallied even though their labels have no numerical order. The most frequent colour is the mode.",
    "Both 2 and 3 appear twice, while 5 appears once. Keep both values tied for the highest frequency.",
    "Two lists can repeat the same value most often while differing greatly elsewhere.",
    "In the household list, three households report four children. Every other count occurs fewer times.",
    "The mode answers which household count is most frequent. The mean answers how many children there are per household on average.",
    "Blue has the largest count, seven. The question asks for the category carrying that count."
  ],
  median:[
    "The median sits at the midpoint of the ordered observations, the 50th percentile.",
    "A position in the original recording order depends on how the data were entered. Sort first to give that position meaning.",
    "(11 + 1) ÷ 2 = 6. Five observations lie on either side of the sixth position.",
    "With six observations the middle lies halfway between positions three and four. Average those two values.",
    "A few unusually high or low values can pull the mean along the tail. The median tracks the middle position.",
    "The middle pair remains 18 and 19 in both ordered lists, so their average remains 18.5.",
    "The average of the two middle numbers can lie between them. For example, the median of 4 and 6 is 5."
  ],
  mean:[
    "An equal share is the total divided by the number of observations. Include repeated values and zeros.",
    "The summation sign instructs you to add every observed x value.",
    "Interval and ratio scales have meaningful numerical distances, so equal shares of the values are interpretable in those units.",
    "Increasing one value while keeping the sample size fixed increases the total and hence the mean.",
    "Every observation contributes to the sum and counts in the denominator.",
    "The median gives a positional centre alongside a mean that high salaries may pull upwards.",
    "Add the five values: 1 + 5 + 4 + 3 + 2 = 15. This question asks for the total."
  ],
  "centre-comparison":[
    "The theoretical normal curve has its single peak, balance point and halfway point at the same location.",
    "A long upper tail can raise the total and move the mean to the right of the middle observation.",
    "Most common asks for the value that occurs most frequently, the mode.",
    "The mean distributes the total equally across all observations.",
    "The range subtracts the lowest observed value from the highest. Here it is 8 − 2.",
    "There are ten observations. Positions five and six contain 5 and 6 respectively.",
    "When the middle ordered values stay fixed, changing an extreme salary leaves the median unchanged."
  ]
};

for(const chapter of chapters[1]) {
  chapter.questions.forEach((q,i)=>{
    q.page=weekOneReferences[chapter.id][i];
    q.explanation ??= weekOneReasons[chapter.id][i];
  });
}

const weekOneChartQuestions = new Set(["frequencies-2","frequencies-3","frequencies-5","boxplot-4","boxplot-5","histogram-6","dotplot-1","dotplot-2","dotplot-3","stem-leaf-7","stem-leaf-8","stem-leaf-9"]);
function weeklyQuestionFigure(q) {
  if(week!==1 || !weekOneChartQuestions.has(q.id)) return q.visual?figure({chart:q.visual}):"";
  const slide=studySlides(1).find(s=>s.page===q.page);
  return `<figure class="figure original-slide"><img src="${slide.image}" alt="Teacher's data display from Week 1, page ${q.page}"><figcaption>Week 1 · PDF p. ${q.page}<button type="button" class="soft" data-zoom>Enlarge</button></figcaption></figure>`;
}

function sampleWeekOneQuestions(list) {
  const pools = new Map(list.map(chapter=>[chapter.id,chapter.questions]));
  const take = (id,count,test=()=>true)=>shuffle(pools.get(id).filter(test)).slice(0,count);
  const graphIds=["frequencies","boxplot","histogram","stem-leaf","dotplot"];
  const graphs=shuffle(graphIds).flatMap((id,i)=>take(id,i<3?2:1,q=>q.page<=28));
  const activities=[41,42,43].map(page=>shuffle(list.flatMap(ch=>ch.questions).filter(q=>q.page===page))[0]);
  const centres=["mode","median","mean"].flatMap(id=>take(id,1,q=>q.page<41));
  const extra=shuffle(list.flatMap(ch=>ch.questions).filter(q=>q.page>=29&&q.page<=40 && !centres.some(c=>c.prompt===q.prompt)));
  for(const q of extra) if(centres.length<5 && !centres.some(c=>c.prompt===q.prompt)) centres.push(q);
  return shuffle([...take("quantitative",3,q=>q.page>=6),...take("data-types",3),...take("scales",8),...graphs,...centres,...activities]);
}

// Individual skills can share a PDF page. Keep the retry attached to the question ID.
function weeklyFollowUp(prompt, answer, reason, choices) {
  return {prompt, answer, explanation:[reason], choices};
}

const weeklyExtraRetries = {
  workflow: weeklyFollowUp("A team has cleaned its records and is ready to analyse them. Which sequence should follow?", "Analyse, report, discuss", "Analysis produces the findings. Reporting states them, then discussion interprets them.", ["Discuss, report, analyse", "Analyse, report, discuss", "Report, analyse, discuss"]),
  centreStatistic: weeklyFollowUp("Which quantity would tell you the middle of an ordered set of journey times?", "Median", "The median locates the halfway position in the ordered times.", ["Range", "Standard deviation", "Median"]),
  spreadStatistic: weeklyFollowUp("Two groups have the same mean. Which measure can show whether one group is more dispersed?", "Standard deviation", "Standard deviation measures dispersion around the mean.", ["Mean", "Standard deviation", "Sample size"]),
  chooseAnalysis: weeklyFollowUp("Two surveys both record scores. What else should you learn before choosing an analysis?", "The comparison of interest and how the observations were collected", "The question determines the target. The design tells you, for instance, whether scores come from independent people or repeated measurements.", ["The comparison of interest and how the observations were collected", "The order of the spreadsheet columns", "The alphabetical order of the participants"]),
  case: weeklyFollowUp("A file has one row per school and columns for enrolment and location. What is the case?", "One school", "A case is the entity represented by one record. Enrolment and location are variables measured on that entity.", ["A location", "One school", "An enrolment value"]),
  zCalculation: weeklyFollowUp("A mark is 42 in a group with mean 50 and standard deviation 4. Find its z-score.", "-2", "Subtract the mean and divide by the standard deviation: (42 − 50) ÷ 4 = −2. The mark is below the mean."),
  typeRule: weeklyFollowUp("When deciding whether a variable is categorical or numerical, which question should you ask first?", "Do its entries label groups or measure amounts?", "Labels identify categories. Counts and measurements express amounts, regardless of how the entries are printed.", ["Are the entries arranged alphabetically?", "Are there more than ten entries?", "Do its entries label groups or measure amounts?"]),
  dichotomous: weeklyFollowUp("A response can only be approved or declined. Which term describes this variable?", "Dichotomous", "There are exactly two possible categories.", ["Continuous", "Dichotomous", "Ratio"]),
  intervalScale: weeklyFollowUp("A thermometer reports −4°C, 0°C and 4°C. Equal changes represent equal temperature differences. What measurement scale is this?", "Interval", "The gaps have equal meaning, but zero Celsius is a chosen reference point.", ["Nominal", "Interval", "Ratio"]),
  absoluteZero: weeklyFollowUp("Why can 12 litres be described as three times 4 litres?", "Equal units and zero volume make the ratio meaningful", "Litres have equal-sized increments, and zero litres means no volume. Dividing 12 by 4 gives 3.", ["The values can merely be ranked", "Equal units and zero volume make the ratio meaningful", "Every numerical coding permits ratios"]),
  frequency: weeklyFollowUp("A library tallies six loans of a title. What is that title’s frequency?", "6", "A frequency counts how many observations belong to the named category. Each of the six loans contributes one."),
  tableRead: weeklyFollowUp("A table records age 17 with frequency 9, age 18 with frequency 4, and age 19 with frequency 7. How many people are 18?", "4", "Read across the row for age 18. The frequency in that row is 4."),
  tableMode: weeklyFollowUp("A table lists 8 readers aged 20, 11 aged 21, and 5 aged 22. Which age occurs most often?", "21", "The largest count is 11 and it is attached to age 21. Give the age requested."),
  percentageBase: weeklyFollowUp("A club has 90 members, 35 of whom are newcomers. For the percentage of newcomers who cycle, what is the denominator?", "35", "The question limits the rate to newcomers. Every one of the 35 newcomers belongs in its denominator."),
  groupCounts: weeklyFollowUp("At one campus, 25% of 40 students cycle. At another, 10% of 70 students cycle. The groups are distinct. How many cycle altogether?", "17", "The two counts are 0.25 × 40 = 10 and 0.10 × 70 = 7. Add them to get 17 cyclists."),
  percentCount: weeklyFollowUp("A workshop has 90 attendees. How many are returning participants if 40% are returning?", "36", "Multiply the percentage as a decimal by its base: 0.40 × 90 = 36."),
  sumBands: weeklyFollowUp("Of 150 commuters, 20% travel 30–59 minutes and 10% travel 60 minutes or more. How many travel at least 30 minutes?", "45", "The time bands do not overlap and share a denominator. Their combined percentage is 30%, so 0.30 × 150 = 45."),
  groupWeight: weeklyFollowUp("One group has 10 people and another 90. Why can the unweighted mean of their two distinct participation rates mislead?", "It gives the two groups equal weight", "Pool the participant counts and divide by all 100 people. The larger group contributes nine times as many people.", ["Percentages can never be combined", "It gives the two groups equal weight", "Each rate must first be divided by 100 people"]),
  totalCount: weeklyFollowUp("Three non-overlapping rows cover the whole sample and have frequencies 9, 5 and 12. How many observations are in the sample?", "26", "Every observation occurs in exactly one row. Add 9 + 5 + 12 = 26."),
  boxLine: weeklyFollowUp("A box runs from 14 to 26, with an interior line at 18. What does 18 represent?", "The median", "The line inside the box marks the median. The box edges show Q1 and Q3.", ["The minimum", "The median", "The mean"]),
  boxEdges: weeklyFollowUp("A box runs from 15 to 21 and its median line is at 17. What are Q1 and Q3?", "15 and 21", "Read the low and high edges of the box on the value axis.", ["15 and 21", "15 and 17", "17 and 21"]),
  boxSpread: weeklyFollowUp("On the same scale, two box plots each have an IQR of 9. Which feature must match?", "The widths of the middle 50% along the value axis", "The IQR measures the distance between the first and third quartiles.", ["The longest whisker", "The medians", "The widths of the middle 50% along the value axis"]),
  boxMedian: weeklyFollowUp("The median lines in three boxes sit at 50, 46 and 54 for Groups A, B and C. Which group has the highest median?", "Group C", "Compare the median-line values. The largest is 54 for Group C.", ["Group A", "Group B", "Group C"]),
  outlier: weeklyFollowUp("A Tukey box plot shows one point past the upper whisker. What is a sensible first interpretation?", "It is a potential outlier to investigate", "A point beyond a Tukey whisker crosses the relevant fence. Its position alone cannot tell you whether it was recorded correctly.", ["It is necessarily an error", "It is a potential outlier to investigate", "It must equal the upper quartile"]),
  whiskerSimple: weeklyFollowUp("In a min-to-max box plot, the lowest and highest values are 3 and 21. Where do the whisker tips lie?", "3 and 21", "This question specifies the min-to-max convention, so the whiskers end at the two extremes.", ["3 and 21", "At the lower and upper quartiles", "At the mean and median"]),
  upperFence: weeklyFollowUp("Q3 is 28 and the IQR is 6. Find the upper Tukey fence.", "37", "The upper fence is Q3 + 1.5 × IQR = 28 + 9 = 37."),
  lowerFence: weeklyFollowUp("Q1 is 19 and the IQR is 6. Find the lower Tukey fence.", "10", "The lower fence is Q1 − 1.5 × IQR = 19 − 9 = 10."),
  whiskerTukey: weeklyFollowUp("The upper Tukey fence is 36. The four highest observations are 30, 34, 39 and 41. At which value does the upper whisker end?", "34", "The largest observation at or below 36 is 34. The fence is a cutoff, and 39 and 41 lie beyond it."),
  histogramAxis: weeklyFollowUp("A histogram shows commute durations. What do positions along its horizontal axis represent?", "Intervals of travel time", "A histogram groups numerical measurements into neighbouring intervals on its horizontal axis.", ["Commuter names", "Intervals of travel time", "Counts in alphabetical order"]),
  histogramHeight: weeklyFollowUp("In a frequency histogram, the bar for 20–29 minutes has height 12. What does 12 tell you?", "Twelve commutes fall in that interval", "The vertical axis is frequency, so its height gives the count in the interval.", ["The mean duration is 12 minutes", "There are twelve intervals", "Twelve commutes fall in that interval"]),
  histogramChoice: weeklyFollowUp("You want to show the distribution of 300 measured parcel weights using weight intervals. Which display fits?", "Histogram", "Weight is quantitative. A histogram displays how the values are distributed across numerical intervals.", ["Pie chart of parcel IDs", "Histogram", "Bar chart of parcel names"]),
  barChoice: weeklyFollowUp("A school counts students by preferred language. Which graph compares these separate category counts?", "A bar chart", "A separate bar can represent each language, with its height showing the count.", ["A histogram of language codes", "A bar chart", "A box plot of language codes"]),
  touchingBins: weeklyFollowUp("Two neighbouring histogram bars cover 0–5 and 5–10 minutes. Why is there no gap between their bases?", "Their intervals meet at 5 minutes", "The intervals occupy adjacent stretches of a numerical axis. A boundary convention assigns exact boundary values once.", ["Both frequencies are equal", "Their intervals meet at 5 minutes", "Five minutes has zero frequency"]),
  densityArea: weeklyFollowUp("Two bins have unequal widths. A frequency-density histogram has a bar 3 units wide and 4 units high. What is that bin’s count?", "12", "Frequency is bar area under this vertical scale: width × frequency density = 3 × 4 = 12."),
  density: weeklyFollowUp("A histogram interval is 6 minutes wide and contains 24 journeys. What is its frequency density per minute?", "4", "Divide the count by interval width: 24 ÷ 6 = 4 journeys per minute."),
  highestBin: weeklyFollowUp("Three equal-width bins have frequencies 12, 7 and 10 from left to right. Which bin is tallest?", "The first bin", "On a frequency axis the highest count gives the tallest bar. Twelve exceeds both 7 and 10.", ["The third bin", "The second bin", "The first bin"]),
  histogramTotal: weeklyFollowUp("In a frequency histogram the four bins have heights 3, 4, 8 and 5. How many observations does the histogram contain?", "20", "Each observation belongs to one bin, so the sample size is 3 + 4 + 8 + 5 = 20."),
  leafUnit: weeklyFollowUp("A complete stem-and-leaf plot contains 14 leaves across three rows. How many observations does it display?", "14", "Each leaf represents one observation, including any repeated leaves."),
  leafKey: weeklyFollowUp("One display uses 3|6 = 36, and another uses 3|6 = 3.6. Which part tells you how to read each display?", "The key", "The key assigns the place values to the stem and leaf.", ["The number of rows", "The key", "The number of repeats"]),
  leafRepeats: weeklyFollowUp("Your data include 54 three times. With key 5|4 = 54, how many copies of leaf 4 should appear in stem 5?", "3", "Use one leaf for each individual observation, so all three copies remain visible."),
  leafCodes: weeklyFollowUp("With key 4|2 = 42, what values appear on row 3|0 3 3 5?", "30, 33, 33, 35", "Attach each units digit to the common tens digit 3, retaining both 33s.", ["30, 33, 35", "30, 33, 33, 35", "3, 0, 3, 3, 5"]),
  leafOrder: weeklyFollowUp("A stem has leaves 8, 1, 4, 1. In what order should the leaves be displayed?", "1, 1, 4, 8", "Sort the individual leaves in ascending order and keep repeated values.", ["1, 4, 8", "8, 4, 1, 1", "1, 1, 4, 8"]),
  findStem: weeklyFollowUp("With key 6|1 = 61, what is the stem of a score of 79?", "7", "The tens digit forms the stem, so 79 is recorded as 7|9."),
  joinStem: weeklyFollowUp("With key 1|8 = 18, what value is represented by 6|2?", "62", "The stem gives six tens and the leaf gives two units: 60 + 2 = 62."),
  findLeaf: weeklyFollowUp("With key 1|8 = 18, what is the leaf of 64?", "4", "In this key the units digit becomes the leaf. Write 64 as 6|4."),
  repeatedLeaf: weeklyFollowUp("With key 4|3 = 43, which observation repeats in the row 4|2 3 3 5?", "43", "Leaf 3 occurs twice on stem 4, recording two observations of 43."),
  dotLegend: weeklyFollowUp("A dot display uses a key of one dot per completed visit. What does a single dot represent?", "One completed visit", "Read the unit from the legend before counting the marks.", ["One whole clinic", "One completed visit", "One percent"]),
  mostDots: weeklyFollowUp("In a one-dot-per-person display, Groups K, L and M have 4, 9 and 6 dots. Which group has the most people?", "Group L", "Nine is the largest stack and belongs to Group L.", ["Group K", "Group L", "Group M"]),
  fewestDots: weeklyFollowUp("Stacks above Park, Lake and Hill have 5, 3 and 8 dots. Which stack has the fewest?", "Lake", "Lake has three dots, fewer than five or eight.", ["Park", "Lake", "Hill"]),
  dotStack: weeklyFollowUp("Scores are 1, 4, 4, 4, 4 and 6. How many dots belong at position 4?", "4", "Four observations equal 4. Place all four dots above the same horizontal position."),
  readStack: weeklyFollowUp("A dot plot stacks four dots above 12 minutes. Each dot represents one journey. How many journeys lasted 12 minutes?", "4", "Count the marks above that value. Four dots represent four journeys at 12 minutes."),
  rateBase: weeklyFollowUp("A clinic chart shows 18 vaccinated children as 18 dots. Which additional count would let you report the vaccination rate?", "All eligible children at that clinic", "Divide the 18 vaccinated children by the number eligible, including both vaccinated and unvaccinated children.", ["All doctors", "All eligible children at that clinic", "All dots at another clinic"]),
  dotGap: weeklyFollowUp("A numerical dot plot labels 7 on its axis but has no mark above it. What can you conclude about this sample?", "There are zero observations equal to 7", "An empty stack has frequency zero at that recorded value.", ["There are zero observations equal to 7", "Seven is impossible in the population", "Seven observations are missing"]),
  dotTotal: weeklyFollowUp("A display uses one dot per student. Three group stacks have 6, 5 and 4 dots. How many students are displayed?", "15", "Add the counts in the three groups: 6 + 5 + 4 = 15."),
  dotDifference: weeklyFollowUp("Route K has 12 dots and Route M has 7. If each dot is one trip, how many more trips did K have?", "5", "The question asks for the difference: 12 − 7 = 5 trips."),
  sharedMode: weeklyFollowUp("Lists A = 1, 3, 3, 4 and B = 0, 3, 3, 90 have different extremes. Which centre do they share?", "Mode of 3", "In each list 3 occurs twice, while every other value occurs once.", ["Mean of 3", "Mode of 3", "Range of 3"]),
  modePurpose: weeklyFollowUp("A designer wants the single most frequently ordered shoe size. Which summary should she request?", "Mode", "Count orders for each size and choose the size with the highest frequency.", ["Mean", "Range", "Mode"]),
  nominalMode: weeklyFollowUp("A survey asks each pupil for a favourite colour. Which measure of centre can summarize these unordered labels?", "Mode", "Tally each label. The most frequently selected colour is the mode.", ["Mode", "Arithmetic mean", "Numerical median"]),
  modeCount: weeklyFollowUp("For 1, 2, 2, 2, 2 and 4, how many times does the mode occur?", "4", "The modal value is 2. It occurs four times, so its frequency is 4."),
  medianPercentile: weeklyFollowUp("Which percentile marks the halfway position in an ordered distribution?", "50th percentile", "The median splits the ordered distribution at the 50th percentile.", ["25th percentile", "50th percentile", "75th percentile"]),
  orderMedian: weeklyFollowUp("Times were entered as 9, 30, 3, 5, 6. What should you do before selecting the middle entry?", "Sort the times", "An entry is in the middle by rank only after the observations are ordered.", ["Remove the largest time", "Sort the times", "Select the third value as entered"]),
  oddPosition: weeklyFollowUp("A list contains 17 ordered observations. What is the position of the median, counting from 1?", "9", "(17 + 1) ÷ 2 = 9. Eight observations lie on each side of that position."),
  evenPositions: weeklyFollowUp("There are 12 ordered observations. Which positions form the middle pair, counting from 1?", "Sixth and seventh", "For even n use positions n/2 and n/2 + 1. At n = 12 these are 6 and 7.", ["Fifth and sixth", "Sixth and seventh", "Sixth and twelfth"]),
  middleValues: weeklyFollowUp("The ordered scores are 1, 2, 4, 7, 9, 12, 13 and 16. Which two values determine the median?", "7 and 9", "There are eight scores. Positions four and five hold the middle pair, 7 and 9.", ["4 and 7", "1 and 16", "7 and 9"]),
  unobservedMedian: weeklyFollowUp("The only two observed lengths are 6 and 10 cm. Can their median be 8 cm?", "Yes", "The median of two numerical values is their average, (6 + 10) ÷ 2 = 8 cm.", ["Yes", "No"]),
  medianStable: weeklyFollowUp("Replace the largest value 24 with 40 in 2, 4, 8, 12, 24. What is the new median?", "8", "The third position still holds 8 after the replacement."),
  rightMean: weeklyFollowUp("A few exceptionally long delays extend the right tail of a delay distribution. Which measure is typically pulled upward more?", "The mean", "Every extra minute in the tail enters the total used by the mean. The median depends on the middle rank.", ["The median", "The mean", "Both must stay equal"]),
  meanFormula: weeklyFollowUp("A team shared the work equally. Which calculation gives the average number of jobs per worker?", "Total jobs divided by the number of workers", "The arithmetic mean divides the entire workload into one equal share for each worker.", ["Total jobs divided by the number of workers", "Highest count minus lowest count", "Number of workers divided by total jobs"]),
  sumValues: weeklyFollowUp("For observations 4, 6, 6 and 9, find Σx.", "25", "Σx means add every observation, including repeats: 4 + 6 + 6 + 9 = 25."),
  meanScales: weeklyFollowUp("Which variable can meaningfully be averaged using ordinary arithmetic?", "Measured travel time in minutes", "Travel time has a numerical scale with equal units. Route IDs label groups and ranks give order only.", ["Route ID code", "Measured travel time in minutes", "Finishing rank as an ordinal category"]),
  meanAll: weeklyFollowUp("Four people report reading 0, 2, 0 and 6 pages. What denominator belongs in their mean?", "4", "All four people count, including both who reported zero pages."),
  meanFromTotal: weeklyFollowUp("Six boxes have a mean mass of 9 kg. Find their total mass in kilograms.", "54", "Multiply the mean by the number of boxes: 9 × 6 = 54 kg."),
  meanChangeSize: weeklyFollowUp("One of eight scores increases by 24; all others stay fixed. By how many points does the mean rise?", "3", "The total rises by 24 and the number of observations stays at eight. The mean rises by 24 ÷ 8 = 3."),
  equalGroupMeans: weeklyFollowUp("Two classes each have 12 students. Their mean marks are 64 and 72. What is the combined mean?", "68", "Both classes contribute the same number of students, so their means have equal weight: (64 + 72) ÷ 2 = 68."),
  differentCentres: weeklyFollowUp("In 1, 1, 4 and 10, the mode is 1, median 2.5 and mean 4. What explains the different answers?", "Each measure uses a different property of the data", "Frequency gives the mode, the middle pair gives the median, and sharing the total equally gives the mean.", ["At least two calculations must be wrong", "Each measure uses a different property of the data", "A sample must have an odd size"])
};

// The 10 original IDs and the 5 guided IDs are stable across saved attempts.
// A plus selects a complete, self-contained question already used in a lesson;
// other lesson keys select their alternative example. New skills are defined above.
const weekOneRetrySkills = {
  quantitative: ["workflow","population-claim","+population-claim","standing-z","centreStatistic","spreadStatistic","chooseAnalysis",null,"+population-count","zCalculation","population-claim","+population-claim","case","zCalculation","wf-report"],
  "data-types": ["nominal-count","+types-count","types-count","dichotomous","types-binary","typeRule","types-count","dichotomous","types-count","+types-count","types-binary","+types-count","types-count","dichotomous","types-count"],
  scales: ["nominal-count","ordinal-gap","tutorial-field","intervalScale","intervalScale","absoluteZero","nominal-count","ordinal-gap","tutorial-field","nominal-count","intervalScale","nominal-count","ordinal-gap","+ordinal-gap","ratio-multiple"],
  frequencies: ["frequency","tableRead","tableMode","graph-table-share","percentageBase","groupCounts","percentCount","groupCounts","act-ages-pool","sumBands","graph-table-share","totalCount","percentCount","groupCounts","groupWeight"],
  boxplot: ["boxLine","boxEdges","boxSpread","boxMedian","graph-box-read","outlier","whiskerSimple","+graph-box-iqr","upperFence","lowerFence","+graph-box-iqr","boxMedian","boxSpread","upperFence","whiskerTukey"],
  histogram: ["histogramAxis","histogramHeight","histogramChoice","barChoice","touchingBins","graph-histogram-shape","densityArea","graph-histogram-bins","histogramTotal","density","graph-histogram-bins","highestBin","graph-histogram-shape","density","densityArea"],
  "stem-leaf": ["leafUnit","leafKey","leafRepeats","leafCodes","leafOrder","leafCodes","findStem","joinStem","findLeaf","leafRepeats","joinStem","findLeaf","leafUnit","repeatedLeaf","leafKey"],
  dotplot: ["dotLegend","mostDots","fewestDots","dotStack","dotGap","rateBase","readStack","dotTotal","dotDifference","dotStack","readStack","dotDifference","dotTotal","graph-dot-rate","dotGap"],
  mode: ["mode-value","nominalMode","+mode-tie","sharedMode","act-households-evidence","modePurpose","mode-value","mode-tie","modeCount","act-households-evidence","mode-tie","+mode-tie","mode-value","sharedMode","modePurpose"],
  median: ["medianPercentile","orderMedian","oddPosition","evenPositions","+choose-skew","medianStable","unobservedMedian","median-odd","median-even","act-score-middle","median-odd","median-even","oddPosition","medianStable","+choose-skew"],
  mean: ["meanFormula","sumValues","meanScales","mean-change","meanAll","+choose-skew","sumValues","mean-total","meanFromTotal","meanChangeSize","mean-total","meanFromTotal","meanChangeSize","mean-total","equalGroupMeans"],
  "centre-comparison": ["choose-shape","rightMean","modePurpose","meanFormula","act-score-range","middleValues","choose-skew","mean-total","act-score-middle","act-score-range","mean-total","median-odd","mode-tie","differentCentres","choose-shape"]
};

const weeklyLessonQuestions = Object.assign({}, ...guidedModules.map(guide=>guide.bank));

function weeklyRetryFor(q) {
  const parts = /^(.*?)(-guided)?-(\d+)$/.exec(q.id);
  if(!parts) return null;
  const index = Number(parts[3]) - 1 + (parts[2] ? 10 : 0);
  const skill = weekOneRetrySkills[parts[1]]?.[index];
  if(!skill) return null;
  if(skill.startsWith("+")) return weeklyLessonQuestions[skill.slice(1)];
  return weeklyExtraRetries[skill] || weeklyLessonQuestions[skill]?.retry;
}

function weeklyRemediation(q) {
  if(q.page<6 || q.page>43) return "";
  const retry=weeklyRetryFor(q);
  const guide=guidedModules.find(g=>guidePages(g).includes(q.page));
  const topic=guide?.topics.find(t=>t.pages.includes(q.page));
  const lesson=topic ? ` <button type="button" class="centre-link" data-guide-open="${guide.id}" data-centre-topic="${topic.id}">Review lesson · ${escapeHtml(topic.title)}</button>` : "";
  const link=`<button type="button" class="centre-link" data-weekly-page="${q.page}">Review PDF p. ${q.page}</button>${lesson}`;
  if(!retry) return link;
  const name="review-"+q.id;
  const inputs=retry.choices ? `<div class="options">${retry.choices.map(c=>`<label><input type="radio" name="${name}" value="${escapeHtml(c)}">${escapeHtml(c)}</label>`).join("")}</div>` : `<input class="short-answer" type="text" aria-label="Your numeric answer" name="${name}" autocomplete="off">`;
  return `${link}<details class="centre-retry"><summary>Try a similar question</summary><fieldset><legend>${escapeHtml(retry.prompt)}</legend>${retry.visual?.()||""}${inputs}</fieldset><button class="soft" data-weekly-retry="${q.id}">Check my answer</button><p role="status"></p></details>`;
}

function weeklyReviewClick(button) {
  if(button.hasAttribute("data-weekly-check") && state().draft) {
    state().draft.review=true;save();render("practice");return true;
  }
  if(button.hasAttribute("data-weekly-question") && state().draft) {
    const draft=state().draft;
    draft.index=Number(button.dataset.weeklyQuestion);
    draft.review=false;save();render("practice");return true;
  }
  if(button.hasAttribute("data-weekly-retry")) {
    const retry=weeklyRetryFor(allQuestions()[button.dataset.weeklyRetry]);
    const card=button.closest("details"), value=card.querySelector("input:checked, input[type=text]")?.value;
    const feedback=card.querySelector('[role="status"]');
    if(!value?.trim()) feedback.textContent="Enter an answer first.";
    else feedback.textContent=(centreAssessCorrect(retry,value)?"Correct. ":"Answer: "+retry.answer+". ")+retry.explanation[0];
    return true;
  }
  if(button.hasAttribute("data-weekly-page")) {
    history.pushState(null,"","#week=1&source="+button.dataset.weeklyPage+"&attempt="+resultIndex);
    setWeek(1);
    return true;
  }
  if(button.hasAttribute("data-weekly-score")) {
    const index=Number(button.dataset.weeklyScore);
    if(state(1).attempts[index]) {
      history.pushState(null,"","#week=1&score="+index);
      setWeek(1);
    }
    return true;
  }
  return false;
}

function renderWeeklyCheck(draft) {
  const missing=draft.order.flatMap((id,i)=>draft.answers[id]?.trim()?[]:[i]);
  const links=missing.map(i=>`<button class="soft" data-weekly-question="${i}">Question ${i+1}</button>`).join("");
  return `<section class="practice" id="practice" tabindex="-1" lang="en"><div class="lesson-top"><h3>Review before submitting</h3><span class="timer">Time <span id="attempt-time">${duration(draft.ms)}</span></span></div><p>${draft.order.length-missing.length} of ${draft.order.length} answered.</p>
    ${missing.length?`<h4>Unanswered questions</h4><p>Return to a question or submit now. Each blank scores zero.</p><div class="guide-question-links">${links}</div>`:"<p>All questions have an answer.</p>"}
    <div class="quiz-actions"><button class="soft" data-weekly-question="${draft.order.length-1}">Back to questions</button><button class="primary" data-action="submit">${missing.length?"Submit with "+missing.length+" unanswered":"Score my answers"}</button></div></section>`;
}
