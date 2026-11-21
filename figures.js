const label = (x,y,value,size=17,fill="#42316f") => `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="middle" font-size="${size}" fill="${fill}">${value}</text>`;
const line = (x,y,u,v,color="#b1a6cf",dash="") => `<path d="M${x} ${y}L${u} ${v}" stroke="${color}" stroke-width="2" stroke-dasharray="${dash}"/>`;
const dot = (x,y,r=5) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#674abf"/>`;
const box = (x,y,w,h,fill="#e9e1fa") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${fill}"/>`;
const path = (d, color="#674abf", fill="none") => `<path d="${d}" stroke="${color}" stroke-width="3" fill="${fill}"/>`;
function table(headers, rows) {
  const width = 636 / headers.length;
  return [headers,...rows].map((row,j)=>row.map((v,i)=>{
    const x=12+i*width,y=12+j*34;
    return box(x,y,width-5,30,j===0?"#ded3f8":j%2?"#eeebf8":"#e4eed1")+label(x+(width-5)/2,y+15,v,headers.length>4?14:16);
  }).join("")).join("");
}
function flow(parts) {
  const step=625/parts.length;
  return parts.map(([title,detail],i)=>{
    const x=16+i*step,w=step-15;
    return box(x,28,w,72,i%2?"#e5efcc":"#e9e1fa")+label(x+w/2,51,title,18)+label(x+w/2,77,detail,15)+(i+1<parts.length?label(x+w+8,64,"›",20):"");
  }).join("");
}
function scatter(x,ys,heading) {
  return line(x,96,x+162,96)+line(x,96,x,16)+ys.map((y,i)=>dot(x+15+i*17,y,4)).join("")+label(x+80,118,heading,15);
}
const bell = "M65 105 C170 105 192 105 222 75 C256 40 285 20 330 20 C375 20 404 40 438 75 C468 105 490 105 595 105";
const drawings = {
  "exam-upward":[line(80,109,580,109)+line(80,109,80,16)+[[120,94],[190,85],[255,67],[335,55],[410,39],[485,27],[550,18]].map(([x,y])=>dot(x,y,5)).join("")+label(594,110,"X",15)+label(65,16,"Y",15),"新编散点图，观察方向和点的集中程度 · Original scatterplot. Inspect direction and scatter."],
  prediction:[flow([["Known X","Study hours"],["Model","Pattern in data"],["Unknown Y","Predicted marks"]]),"先认已知线索，再认要预测的结果 · Identify the predictor and the target outcome."],
  "simple-regression":[flow([["Base fee","20"],["Extra charge",".30 × 10 = 3"],["Total","20 + 3 = 23"]]),"电话费例子把截距、斜率和预测串起来 · A phone bill illustrates intercept, slope and prediction."],
  residuals:[table(["Observed Y","Predicted Ŷ","Residual Y − Ŷ"],[["75","70","+5 · Underpredicted"],["65","70","−5 · Overpredicted"]]),"残差 = 实际减预测 · Residual = observed minus fitted."],
  "multiple-regression":[flow([["Start","40"],["Study hours","3 × 4 = 12"],["Baseline","2 × 5 = 10"],["Prediction","40 + 12 + 10 = 62"]]),"各线索的部分相加 · Add each modelled contribution."],
  selection:[table(["Procedure","Start","Then"],[["Enter","Chosen predictors","Fit together"],["Forward / Backward","Small / Full model","Add / Remove"]]),"Stepwise 每次加入后再检查旧变量 · Stepwise adds and reassesses existing predictors."],
  quantitative:[flow([["Prepare","Check the data"],["Analyse","Choose a method"],["Report","Show the results"],["Discuss","Interpret findings"]]),"讲义第 7 页的分析流程 · Analysis workflow from page 7."],
  "data-types":[table(["Type","Possible values","Example"],[["Categorical","Labels","Eye colour"],["Discrete","Countable quantities","Number of children"],["Continuous","Any value in a range","Height"]]),"先判断类别还是数量，再区分离散与连续 · Identify labels and quantities, then discrete and continuous values."],
  scales:[flow([["Nominal","Labels"],["Ordinal","+ Order"],["Interval","+ Equal gaps"],["Ratio","+ Meaningful zero"]]),"依次判断是否有顺序、等距和有意义的零点 · Check order, equal intervals and a meaningful zero."],
  frequencies:[table(["Age (years)","Frequency","Relative frequency"],[["18","15","60%"],["19","6","24%"],["20","4","16%"]]),"讲义第 22 页，频数总和为 25 · Lecture counts on page 22 sum to 25."],
  boxplot:[
    line(75,62,585,62)+box(218,40,234,44)+line(75,48,75,76)+line(585,48,585,76)+line(326,41,326,83,"#674abf")+
    [[75,"Minimum"],[218,"Q₁"],[326,"Median"],[452,"Q₃"],[585,"Maximum"]].map(([x,v])=>label(x,104,v,16)).join(""),
    "讲义第 23 页的最小值到最大值画法，箱体对应 IQR · Page 23 uses minimum and maximum whiskers. The box spans the IQR."
  ],
  histogram:[
    line(36,106,312,106)+line(36,106,36,20)+line(354,106,630,106)+line(354,106,354,20)+
    [20,54,78,43,22,11].map((h,i)=>`<rect x="${48+i*39}" y="${106-h}" width="39" height="${h}" fill="#a990dd" stroke="#f7f6fc"/>`).join("")+
    [30,62,49,72].map((h,i)=>box(378+i*61,106-h,33,h,"#a990dd")).join("")+label(175,123,"Histogram · Numeric bins",16)+label(495,123,"Bar chart · Categories",16),
    "左边是连续数轴上的区间，右边是分开的类别 · Histograms group numerical intervals. Bar charts compare categories."
  ],
  "stem-leaf":[table(["Stem","Leaves","Reconstructed values"],[["1","3, 6, 6, 7","13, 16, 16, 17"],["2","0, 2, 5","20, 22, 25"],["3","6, 7, 7, 7, 8","36, 37, 37, 37, 38"]]),"讲义第 27 页节选。图例：茎 2 配叶 0 代表 20 · Key: stem 2 and leaf 0 give 20."],
  dotplot:[
    line(85,111,575,111)+[7,3,5,1].map((n,i)=>label(138+i*126,128,["A","B","C","D"][i],16)+
    Array.from({length:n},(_,j)=>dot(138+i*126,102-j*13)).join("")).join(""),
    "讲义第 28 页，每点代表一名已接种的婴儿 · One dot per vaccinated baby, page 28."
  ],
  mode:[
    line(115,102,545,102)+[2,1,2,3,1,0,1].map((n,i)=>label(153+i*59,120,i+1,16)+
    Array.from({length:n},(_,j)=>dot(153+i*59,91-j*20)).join("")).join(""),
    "讲义第 42 页数据中，4 出现三次 · In the page 42 data, 4 appears three times."
  ],
  median:[
    ["12","16","18","19","24","42"].map((v,i)=>box(42+i*98,24,86,48,(i===2||i===3)?"#d9c9f6":"#e9e1fa")+label(85+i*98,49,v,22)).join("")+
    label(330,100,"(18 + 19) ÷ 2 = 18.5",22),
    "偶数个数值取中间两个值的平均 · For even N, average the middle two values."
  ],
  mean:[flow([["Add the values","1 + 5 + 4 + 3 + 2 = 15"],["Count the values","N = 5"],["Divide","15 ÷ 5 = 3"]]),"讲义第 38 页的均值计算 · Mean calculation from page 38."],
  "centre-comparison":[table(["Activity","Mean","Median","Mode","Range"],[["Page 41","5.2","5.5","6","6"],["Page 42","3.4","3.5","4","6"]]),"结合研究问题选择集中趋势指标 · Choose the measure of centre that answers the question."],
  range:[line(68,70,592,70)+[1,2,3,4,5,6,7,8,9].map((v,i)=>dot(68+i*65.5,70,i===0||i===8?7:3)+label(68+i*65.5,95,v,15)).join("")+line(68,40,592,40,"#674abf")+label(330,22,"9 − 1 = 8",21),"极差取决于两个端点 · Range uses the two endpoints."],
  quartile:[["25%","25%","25%","25%"].map((v,i)=>box(18+i*157,35,155,42,i===1||i===2?"#d9c9f6":"#e9e1fa")+label(95+i*157,57,v)).join("")+[["Q₁",175],["Q₂",332],["Q₃",489]].map(([v,x])=>label(x,93,v)).join("")+label(332,114,"IQR = Q₃ − Q₁",16),"浅紫带标出四个区段，中间深色带对应 IQR · The shaded middle spans the IQR."],
  variance:[table(["Score x","9","8","6","5","8","6"],[["x − 7","2","1","−1","−2","1","−1"],["(x − 7)²","4","1","1","4","1","1"]]),"平方离差和为 12 · Sum of squared deviations = 12."],
  sd:[[["s = 1.02", [0,-13,9,-20,20]],["s = 1.67",[0,-25,22,-41,41]],["s = 4.01",[0,-49,48,-83,83]]].map(([v,pts],i)=>line(175,22+i*39,600,22+i*39)+label(91,22+i*39,v)+pts.map(x=>dot(390+x,22+i*39)).join("")).join(""),"示意图。标准差越大，数据通常越分散 · Schematic of increasing spread."],
  skew:[line(21,90,309,90)+line(350,90,638,90)+path("M24 90 C47 90 83 29 113 26 C150 23 162 70 222 83 Q260 89 305 90")+path("M355 90 Q399 89 437 83 C497 70 509 23 546 26 C576 29 612 90 635 90")+label(160,113,"Positive →",16)+label(493,113,"← Negative",16),"先看尾巴往哪一边延伸 · Read the direction from the long tail."],
  kurtosis:[flow([["κ &lt; 3","Platykurtic"],["κ = 3","Normal benchmark"],["κ &gt; 3","Leptokurtic"]]),"比较普通峰度与正态基准 · Compare ordinary kurtosis with the normal benchmark."],
  inference:[flow([["Population","Target group"],["Sample","Observed cases"],["Inference","Back to population"]]),"抽样与推广 · Sample from the population, then infer back to it."],
  charts:[line(30,94,305,94)+[38,66,50].map((h,i)=>box(68+i*78,94-h,37,h,"#a990dd")+label(86+i*78,106,["A","B","C"][i],14)).join("")+line(360,94,632,94)+[1,2,0,3,1].map((n,i)=>label(385+i*54,106,i+1,14)+Array.from({length:n},(_,j)=>dot(385+i*54,83-j*14)).join("")).join(""),"左边每根柱表示一类，右边每个点表示一次观测 · Bars compare categories, dots count observations."],
  variables:[flow([["Independent","Paint type"],["Dependent","Drying time"],["Controlled","Room temperature"]]),"改什么、量什么、固定什么 · Change, measure, hold constant."],
  hypothesis:[flow([["H₀","No treatment effect"],["Sample","Collect evidence"],["H₁","Treatment effect"]]),"用样本证据评估关于总体的命题 · Use sample evidence to evaluate population hypotheses."],
  alpha:[path("M65 105 C150 105 181 105 213 83 L213 105Z","none","#ad94ea")+path("M447 83 C479 105 510 105 595 105 L447 105Z","none","#ad94ea")+path(bell)+line(65,105,595,105)+line(213,83,213,105,"#674abf")+line(447,83,447,105,"#674abf")+label(213,121,"−|t|",14)+label(447,121,"+|t|",14)+label(330,121,"0",14),"双侧 p 值是两端阴影面积之和 · Two-sided p is the sum of the shaded tails."],
  errors:[table(["Decision","H₀ is true","H₀ is false"],[["Reject H₀","Type I · α","Correct · Power"],["Fail to reject H₀","Correct","Type II · β"]]),"先看原假设的真实状态，再看检验决策 · Match the true state to the test decision."],
  one:[table(["Protein","Mean","Test value","t","df","Two-sided p"],[["31 bars","21.4","20","3.067","30",".005"]])+label(330,105,"t = (21.4 − 20) / .45650",18),"根据讲义第 26 页重绘 · Lecture output redrawn from page 26."],
  independent:[table(["SPSS · Fat","Levene p","t","df","Two-sided p"],[["Pooled",".480","−2.800","21",".011"],["Welch","—","−2.896","20.989",".009"]]),"根据讲义第 32 页重绘 · Lecture output redrawn from page 32."],
  paired:[table(["Exam 1 − 2","Pairs","Mean Δ","t","df","Two-sided p"],[["Paired test","16","−1.313","−.750","15",".465"]])+label(330,105,"95% CI [−5.044, 2.419]",17),"根据讲义第 38 页重绘 · Lecture output redrawn from page 38."],
  correlation:[scatter(22,[82,75,78,56,51,46,36,37,24],"Positive")+scatter(250,[61,29,82,55,23,65,42,78,48],"Weak / no trend")+scatter(477,[24,36,33,45,59,56,73,71,86],"Negative"),"示意散点图，每个点是一对测量 · Illustrative plots. Each dot is a measurement pair."],
  pearson:[table(["SPSS · Pair","N","Pearson r","Two-sided p"],[["IQ × Maths","10",".719",".019"]])+label(330,105,".019 &lt; .05",19),"根据讲义第 21 页重绘 · Lecture output redrawn from page 21."],
  spearman:[table(["Case","A","B","C"],[["Rank X","1","2","3"],["Rank Y","1","3","2"],["d²","0","1","1"]]),"Σd² = 2，因此 ρ = .50 · A worked rank example."],
  cramer:[table(["SPSS · Crosstabs","N","Pearson χ²","Cramér’s V"],[["Style × Gender","100","37.585",".613"]])+label(330,105,"V = √(37.585 / 100)",17),"根据讲义第 24–25 页重绘 · Lecture output redrawn from pages 24–25."]
};
function figure(chapter) {
  const [body, caption] = drawings[chapter.chart];
  const height=["spearman","data-types","frequencies","stem-leaf"].includes(chapter.chart)?148:135;
  const parts=caption.split(" · "), english=parts.pop(), chinese=parts.join(" · ");
  return `<figure class="figure"><svg viewBox="0 0 660 ${height}" role="img" aria-label="${escapeHtml(english)}" xmlns="http://www.w3.org/2000/svg">${body}</svg><figcaption><span lang="en">${escapeHtml(english)}</span>${chinese?chineseTranslation(escapeHtml(chinese),"span"):""}</figcaption><button type="button" class="zoom-figure" data-zoom>Enlarge diagram</button></figure>`;
}

