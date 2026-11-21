const referenceNotes = {
  hypothesis:[
    ["把基准说法写清楚","State the benchmark","H₀ 写关于总体参数的命题，例如两总体均值相等。先设定问题和方向，再看数据。拒绝 H₀ 是基于检验模型的证据判断。","H₀ is a statement about population parameters, such as equal population means. Specify the question and direction before examining data. Rejection is an evidence-based decision under the test model."]
  ],
  alpha:[
    ["显著性与强度分开读","Read significance and magnitude separately","p 值要与预先的 α 比较。p > .05 可能同时伴随较大的样本相关系数，尤其在小样本中。它说明证据不足，不能仅凭 p 判断关系强弱。","Compare p with the prespecified α. A p-value above .05 can coexist with a large sample correlation, especially in small samples. It indicates insufficient evidence at that level and does not alone determine association strength."],
    ["双侧差异不能自动写成更好","A difference does not automatically mean improvement","若备择只问“是否不同”，显著结果支持差异。还要看均值差的正负、区间与研究设计，才能描述哪组更高和结论的适用范围。","A significant two-sided test supports a difference. Read the sign of the mean difference, the interval and the design to describe which group is higher and what the evidence supports."]
  ],
  one:[
    ["t 检验的样本大小","Sample size and t-tests","总体标准差未知时，t 检验也可用于大样本。小样本时尤其要关注正态性、异常值与独立性。","A t-test can also be used with large samples when the population standard deviation is unknown. Normality, outliers and independence deserve particular attention in small samples."]
  ],
  independent:[
    ["读 Levene 与两行结果","Reading Levene and the two rows","Levene 检验针对方差。p 较大提供的是反对等方差的证据不足。Welch 比较均值时允许总体方差不等。","Levene concerns variances. A large p indicates insufficient evidence against equal variances. Welch allows unequal population variances when comparing means."]
  ],
  paired:[
    ["配对是研究设计","Pairing is part of the design","“T1 与 T2”两个时间标签本身不足以选配对 t。要确认相同个体或明确匹配的对象形成完整的对，检验的是这些对的平均差。","The labels T1 and T2 alone do not establish pairing. Confirm that the same people or explicitly matched units form complete pairs. The test addresses their mean difference."]
  ],
  pearson:[
    ["r 已经没有单位","r is already unitless","把身高从厘米改成米，是正比例换算，Pearson r 不变。跨研究比较相关强度还要考虑样本、测量可靠性和取值范围。","Changing height from centimetres to metres is a positive rescaling and leaves Pearson r unchanged. Comparing studies also requires attention to samples, measurement reliability and variable ranges."],
    ["r² 怎样解释","How to interpret r²","含截距的简单最小二乘回归中，R² = r²。若 r = .60，R² = .36，模型对应样本中 Y 变异的 36%。这不是答对 36% 个案，也不保证新数据上的预测误差。","For simple ordinary least-squares regression with an intercept, R² = r². If r = .60, R² = .36, accounting for 36% of the observed variation in Y in that fitted model. It is not the percentage of correctly predicted cases and does not guarantee prediction error in new data."],
    ["读表三件事","Three entries to read","看交叉格的 r，再看 Sig. (2-tailed)，最后看 N。例如 r = .862、p < .001、N = 50，表示正的线性关联及对应证据。常规 Pearson 检验 df = N − 2 = 48。","Read the off-diagonal r, then Sig. (2-tailed), then N. For r = .862, p < .001 and N = 50, report the positive linear association and its evidence. The usual Pearson test has df = N − 2 = 48."],
    ["强度分档以课程为准","Use the lecture's strength guide","参考笔记里的分档与课程不完全相同。涉及分档的习题明确采用 Week 4 的课堂分档，优先报告实际 r 数值和方向。","The reference uses strength labels that differ from the lecture's. Questions about bands explicitly use the Week 4 guide. Prefer reporting the actual r and its direction."]
  ],
  spearman:[
    ["秩相关与并列","Ranks and ties","Spearman 衡量单调关系；U 型的强关系未必得到大的 Spearman 值。存在并列时用平均秩。Kendall τ 也是秩关联方法，具体选法要看设计、并列处理与推断方法。","Spearman measures monotonic association, so a strong U-shaped pattern need not yield a large value. Use average ranks for ties. Kendall τ is another rank-association method, with choice depending on design, tie handling and inference."]
  ],
  cramer:[
    ["维度项与自由度","Dimension factor and degrees of freedom","3×2 表中，V 的分母维度项 min(3−1,2−1)=1；Pearson χ² 的自由度为 (3−1)(2−1)=2。两者是不同的量。","For a 3×2 table, V uses dimension factor min(3−1,2−1)=1. Pearson χ² has df = (3−1)(2−1)=2. These are different quantities."],
    ["关联强度和显著性","Association magnitude and significance","先读 Symmetric Measures 中的 V，再结合检验 p 值、表格维度和背景解释。V 没有正负方向。相同 V 在不同研究中未必有相同实际意义。","Read V in Symmetric Measures alongside the test p-value, table dimensions and context. V has no signed direction. The same V need not have the same practical meaning across studies."]
  ],
  "simple-regression":[
    ["相关系数与 Model Summary 的 R","Correlation and Model Summary R","一元回归中，Model Summary 的 R 通常是非负的 |r|，方向应看斜率 B 或有符号的 Pearson r。","In simple regression, Model Summary R is generally the nonnegative |r|. Read direction from slope B or the signed Pearson r."]
  ],
  residuals:[
    ["残差尺度与模型检查","Residual scale and diagnostics","含截距回归的估计标准误可写成 sₑ = √[SSE/(n−k−1)]，k 是预测变量数。残差图用于检查模式和误差波动，Q–Q 图用于检查分布形状。","For a regression with an intercept, the residual standard error is sₑ = √[SSE/(n−k−1)], where k counts predictors. Residual plots help assess patterns and error spread, while Q–Q plots assess distribution shape."]
  ],
  "multiple-regression":[
    ["R² 与调整后 R²","R² and adjusted R²","在相同样本上，含截距的嵌套最小二乘模型新增预测变量后，训练 R² 不会下降；调整后 R² 则可能升或降。高 R² 仍要结合新数据预测和模型检查。","For nested least-squares models with an intercept fitted on the same cases, training R² cannot decrease when predictors are added. Adjusted R² can rise or fall. Interpret a high R² alongside validation and model checks."],
    ["整体 F 与单个系数","Overall F and individual coefficients","回归 ANOVA 表的整体 F 检验通常检验全部斜率同时为零。Coefficients 表的 t 与 p 检查单个系数在其他变量已纳入后的证据。","The regression ANOVA F-test usually tests whether all slopes are zero together. The Coefficients t and p entries address individual coefficients conditional on the other included variables."]
  ]
};
function addReferenceQuestions(id,rows) {
  const chapter=Object.values(chapters).flat().find(c=>c.id===id);
  rows.forEach(([prompt,answer,a,b,c,explanation],i)=>chapter.questions.push({id:id+"-reference-"+(i+1),prompt,answer,options:[answer,a,b,c],explanation}));
}
addReferenceQuestions("alpha",[
["A sample has r = .70 and p = .10 at α = .05. Which conclusion is justified?","The sample r is large, but evidence against zero population correlation is insufficient at .05","The association must be weak","The population correlation is proved zero","The relationship is causal","Magnitude and evidence are different. A large sample r may be nonsignificant in a small sample."],
["A two-sided mean test is significant. What must also be checked before saying which group is higher?","The sign and definition of the group mean difference","Only whether p is printed as .000","Only the number of columns","Only the test name","Significance gives evidence of a difference. Its direction comes from the group summaries and signed comparison."],
["A result has p = .20. Which statement about H0 is valid?","It is not rejected at α = .05","It is proved true","It has probability .20 of being true","It is certainly false","A large p-value is not a posterior probability that H0 is true."],
["Which statement correctly interprets α = .05 under the test model?","It controls rejection of a true H0 at a 5% long-run rate","The specific alternative has a 95% probability of being true","Every significant effect is large","Every study result has a 5% chance of error","Alpha concerns the test's Type I error rate under a true null, not the truth probability of a particular conclusion."],
["SPSS displays Sig. (2-tailed) = .000. Which report is appropriate?","p < .001","p = 0 exactly","p > .05","p = .05","The displayed value is rounded."]
]);
addReferenceQuestions("pearson",[
["Height changes from centimetres to metres. What happens to Pearson r with weight?","It stays the same","It is divided by 100","It is multiplied by 100","It changes sign","Positive unit rescaling leaves Pearson correlation unchanged."],
["For simple OLS regression with an intercept, r = .60 corresponds to what R²?","0.36","0.60","0.06","0.40","Square .60 to obtain .36."],
["What does R² = .36 describe in a fitted simple regression with an intercept?","36% of the sample variation in Y is accounted for by the model","36% of people are predicted exactly","The model proves a 36% causal effect","New-data predictions are guaranteed to be 36% accurate","R² describes fitted variation in the analysed sample, not a percentage of exactly correct individual predictions."],
["For a usual Pearson test with N = 50, what is df?","48","49","50","25","The usual test uses N − 2 degrees of freedom."],
["An off-diagonal SPSS entry is r = .862, p < .001, N = 50. Which report preserves the evidence?","A positive linear association, r(48) = .862, p < .001","A negative linear association, r = −.862","Proof that X causes Y","No association because p rounds to .000","The positive coefficient gives direction and the p-value supplies test evidence."]
]);
addReferenceQuestions("cramer",[
["For a 3 by 2 table, what dimension factor belongs in Cramér's V?","1","2","3","6","min(3−1,2−1) = min(2,1) = 1."],
["For that 3 by 2 table, what is the Pearson chi-square df?","2","1","3","6","df = (3−1)(2−1) = 2."],
["A crosstab gives V = .354 and p = .013 at α = .05. Which conclusion is supported?","There is evidence of an association, with magnitude summarized by V","The categories have a positive causal effect","The categories are certainly independent","V is the probability the null is true","The p-value supplies evidence against independence, while V summarizes magnitude without a sign."],
["Two nominal variables receive arbitrary numeric codes. Which action is appropriate?","Analyse their contingency table with a suitable categorical association measure","Interpret code differences as equal quantities","Assume Pearson r on the codes must be valid","Infer direction from the larger code","Numeric labels do not turn unordered categories into quantities."],
["The dimension factor in Cramér's V is what?","The smaller of row count minus one and column count minus one","Always the chi-square degrees of freedom","The total sample size","The sum of the row and column counts","The dimension factor and chi-square df are different definitions."]
]);
addReferenceQuestions("multiple-regression",[
["On the same cases, adding a predictor to an OLS model with an intercept does what to training R²?","It cannot decrease","It always decreases","It always becomes 1","It becomes the p-value","Nested-model least squares can retain the old fitted solution, so training fit cannot worsen by this measure."],
["What may happen to adjusted R² after adding a predictor?","It may rise or fall","It must rise","It must equal raw R²","It must become negative","Adjusted R² includes a penalty for the number of predictors."],
["In the usual overall regression F-test, what is H0?","All slope coefficients are zero","Every observed Y is zero","The intercept alone is zero","All predictors have identical units","The standard overall F compares the predictor model with an intercept-only model."],
["What does an individual coefficient p-value address?","Evidence about that coefficient conditional on other included predictors","A guarantee that the predictor causes Y","The probability that the whole model is true","The percentage of exact predictions","The individual coefficient test conditions on the specified model."],
["Does a high training R² by itself guarantee accurate predictions on new cases?","No","Yes always","Only if the intercept is positive","Only if R² is printed to three decimals","New-data performance needs validation and appropriate modelling assumptions."]
]);

