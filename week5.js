const week5Definitions = {};
function regressionLesson(id,zh,en,pages,definitions,pairs,bank) {
  week5Definitions[id]=definitions;
  lesson(5,id,zh,en,pages,id,pairs,bank);
}
regressionLesson("prediction","回归能回答什么","Prediction and causal claims","2–3",[
["预测变量与结果变量","Predictor and outcome","预测变量 X 是已知线索，结果 Y 是想估计的连续数值。","A predictor X supplies information used to estimate a continuous outcome Y."],
["预测与因果","Prediction and causation","预测描述哪些值经常一起出现。因果还需要研究设计和其他证据。","Prediction describes recurring patterns. A causal interpretation also needs an appropriate design and evidence."]
],[
["用已经收集的数据寻找规律，再估计一个未知结果。例如用入职工资估计目前工资。这里的未知结果也可以是当前数值。","Use a pattern in collected data to estimate an unknown outcome, such as current salary from starting salary. The unknown value can be a current outcome."],
["先说清楚想预测什么，再选线索。若预测成绩，成绩是 Y；复习时间是 X。先画散点图，看看直线能否大致描述规律。","Name the outcome first, then choose the clues. For predicting exam marks, marks are Y and study time is X. Inspect a scatterplot to see whether a line is a reasonable summary."],
["讲义把因果关系列为学习目标。对观察数据拟合出一条回归线，只说明在这个模型中的关联。其他共同变化的因素也可能参与，例如基础水平同时影响复习时间与成绩。","Causal relationships appear in the lecture objectives. A line fitted to observational data describes a modelled association. Other factors, such as prior attainment, may relate to both study time and marks."]
],`
Which variable is the outcome when predicting marks from study time?|Marks|Study time|The row number|The sample size
What can regression directly supply?|A model-based prediction|Proof of causation in every study|An exact result for every person|A random sample automatically
Which outcome suits the linear regression introduced here?|A continuous test score|A name with no numerical meaning|A student ID as a category|An unordered colour
A starting salary is used to estimate current salary. Which is X?|Starting salary|Current salary|The prediction error|The number of rows
What should be examined before using a straight line?|The scatterplot|Only the column names|Only the desired conclusion|The file name
What can make an observed association hard to interpret causally?|Other factors associated with both variables|A clearly labelled axis|Having a unit for the outcome|Writing an equation
Does fitting observational data alone establish a causal effect?|No|Yes in every case|Only if the slope is positive|Only if the intercept is zero
A model predicts 70 marks and the observed score is 75. Calculate observed minus predicted.|5|75 − 70 = 5.
How many outcome variables are predicted in the linear regression models introduced in this lecture?|1|The models here predict one outcome Y.
A study uses two predictor variables for one outcome. Enter “simple” or “multiple” for its regression type.|multiple|Multiple regression uses two or more predictors.
`);
regressionLesson("simple-regression","一元线性回归","Simple linear regression","4–8",[
["截距 a","Intercept a","直线在 X = 0 时预测的 Y 值。若 X = 0 超出数据范围，要谨慎解释。","The predicted Y at X = 0. Its practical meaning depends on whether zero is within the relevant data range."],
["斜率 b","Slope b","X 每增加 1 单位，预测的平均 Y 改变 b 单位。","For a one-unit increase in X, predicted mean Y changes by b units."]
],[
["先把公式读成一句话：预测结果 = 起步值 + 每单位增加量 × 数量。写作 Ŷ = a + bX，Ŷ 上面的帽子表示预测值。","Read the formula as starting amount plus change per unit times quantity. Write Ŷ = a + bX. The hat marks a prediction."],
["讲义电话费例子每多一分钟加 0.30。若基本费用为 20，多用 10 分钟，费用是 20 + .30 × 10 = 23。先代入，再乘法，最后加法。","The phone example adds .30 per extra minute. With a base fee of 20 and 10 extra minutes, the total is 20 + .30 × 10 = 23. Substitute, multiply, then add."],
["讲义给出 Weight = −222 + 5.7 × Height。沿用原图的数值尺度，Height = 70 时预测为 177。只在相近样本和观察范围内使用，超出范围叫外推。","The lecture gives Weight = −222 + 5.7 × Height. On the graph's original numerical scales, Height = 70 predicts 177. Apply the model within the observed range and a relevant population. Predicting beyond that range is extrapolation."]
],`
What is the slope in Ŷ = 20 + .30X?|.30|20|X|20.30
What is the intercept in Ŷ = 20 + .30X?|20|.30|X|0
What does the hat on Y indicate?|A predicted value|An observed value in every case|A sample size|A standard deviation
In Ŷ = 50 − 2X, what happens when X increases by one unit?|Predicted Y decreases by 2|Predicted Y increases by 2|Predicted Y decreases by 50|Predicted Y is unchanged
What is extrapolation?|Prediction outside the observed predictor range|Calculating an average within the data|Sorting the observed values|Finding the mode
In simple linear regression, how many predictors are used?|One|Two|Five|An unspecified minimum of three
If X = 0 is far outside the observed range, how should the intercept be interpreted?|Cautiously as a mathematical reference|As a guaranteed realistic outcome|As the slope|As a p-value
Calculate the phone charge for base fee 20 and 10 extra minutes at .30 per minute.|23|20 + .30 × 10 = 23.
Calculate predicted weight from −222 + 5.7 × 70.|177|5.7 × 70 = 399, then 399 − 222 = 177.
In Ŷ = 50 − 2X, calculate predicted Y when X = 4.|42|50 − 8 = 42.
`);
regressionLesson("residuals","残差与预测误差","Residuals and prediction error","7–9",[
["残差 e","Residual e","实际观察值减去模型预测值，e = Y − Ŷ。","The observed value minus its fitted prediction, e = Y − Ŷ."],
["最小二乘","Least squares","选择一条线，让所有残差的平方和尽可能小。","Choose coefficients that minimize the sum of squared residuals."]
],[
["预测 70、实际 75，残差为 +5，表示模型低估了 5。实际 65 时残差为 −5，表示模型高估了 5。点在线上时残差为 0。","If the prediction is 70 and the observation is 75, residual +5 means underprediction by 5. An observation of 65 gives −5 and indicates overprediction. A point on the line has residual zero."],
["在散点图上，用同一个 X 处点与直线之间的竖直差读残差。用原结果的单位报告，例如分数或薪资单位。","Read a residual as the vertical gap between an observed point and the fitted line at the same X. Use the outcome's units, such as marks or salary units."],
["校读第 9 页：训练样本内，含截距的普通最小二乘模型残差和为零（允许舍入误差）。单个残差和平方残差和通常都不为零。模型还应检查线性、独立性、误差方差和推断所需的分布条件。","Reading note for page 9: in training data, ordinary least squares with an intercept has residuals summing to zero, up to rounding. Individual residuals and the sum of squared residuals are generally nonzero. Also check linearity, independence, error variance and distribution conditions needed for inference."]
],`
Which formula gives a residual?|Observed Y − predicted Y|Predicted Y − observed Y|Observed Y divided by predicted Y|Slope minus intercept
A point lies above its fitted line. What is its residual sign?|Positive|Negative|Always zero|Always undefined
A negative residual means what?|The fitted prediction was too high|The fitted prediction was too low|The slope must be negative|The intercept must be zero
Which distance is a regression residual on the scatterplot?|Vertical distance at the same X|Horizontal distance to the y-axis|Distance between x-axis labels|Distance between any two observations
What does least squares minimize?|The sum of squared residuals|The signed sum of X values|The largest observed Y only|The sample size
When do training residuals sum to zero up to rounding?|Ordinary least squares with an intercept|Every model on all future data|Only when every point is fitted perfectly|Only when X is constant
Which statement follows if the residual sum is zero?|Positive and negative residuals balance|Every residual equals zero|Every prediction is exact|The squared residual sum is zero
Observed Y is 85 and predicted Y is 78. Calculate the residual.|7|85 − 78 = 7.
Observed Y is 60 and predicted Y is 66. Calculate the residual.|-6|60 − 66 = −6.
Residuals are −2, 0 and 2. Calculate their sum of squares.|8|4 + 0 + 4 = 8.
`);
regressionLesson("multiple-regression","多元回归与控制变量","Multiple regression and adjustment","10–15",[
["多元回归","Multiple regression","用两个或更多预测变量估计一个连续结果。","Predict one continuous outcome using two or more predictors."],
["保持其他变量不变","Holding other variables constant","解释某个系数时，比较模型中其他预测变量取值相同的情况。","Interpret a coefficient by comparing cases with the other modelled predictors held fixed."],
["非标准化 B 与标准化 β","Unstandardized B and standardized β","B 用原始单位，β 用标准差单位。β 的比较仍受样本和预测变量之间关系影响。","B uses original units, while β uses standard deviation units. Comparisons of β still depend on the sample and relationships among predictors."]
],[
["把每个线索的部分相加：Ŷ = a + b₁X₁ + b₂X₂。例如预测成绩 = 40 + 3 × 复习小时 + 2 × 基础测验分。复习 4 小时、基础分 5 时，预测 62。","Add the contribution from each clue: Ŷ = a + b₁X₁ + b₂X₂. For example, predicted marks = 40 + 3 × study hours + 2 × baseline score. Four hours and a baseline score of 5 predict 62."],
["系数 3 的含义是基础分相同的情况下，复习每多 1 小时，预测成绩多 3 分。控制已测因素后得到的是调整后的关联，因果判断还要看设计。类别预测变量要恰当编码。","The coefficient 3 compares cases with the same baseline score: an extra study hour is associated with 3 more predicted marks. Adjusting for measured factors gives an adjusted association. A causal conclusion also needs a suitable design. Categorical predictors require appropriate coding."],
["课堂教学效果示例用五个教学方法评分预测一个效果评分。要读清楚 B 的单位。标准化 β 可以辅助比较同一模型中不同尺度的线索，还应检查不确定性和共线性，避免把最大 β 直接称为最重要的原因。","The teaching-effectiveness example uses five teaching-method scores to predict one effectiveness score. Read B with its units. Standardized β can assist comparisons across scales within a model, alongside uncertainty and collinearity checks."]
],`
How many outcomes are in the multiple regression model introduced here?|One|Two|Five|One per predictor
What is held fixed when interpreting b1 in a multiple regression?|The other predictors in the model|The outcome for every person|Only the sample mean of X1|Only the intercept name
Which coefficient uses the original measurement units?|Unstandardized B|Standardized β|A p-value|A rank only
Which coefficient uses standard deviation units?|Standardized β|Unstandardized B|The sample size|A frequency
Does covariate adjustment alone establish a causal effect?|No|Yes in every study|Only if there are five predictors|Only if all coefficients are positive
What should be checked when predictors overlap strongly?|Multicollinearity|Whether the font is readable|Only the row numbers|Only the intercept sign
What is a criterion variable in the lecture?|The outcome being predicted|A fixed significance level|A row identifier|The highest predictor value
Calculate Ŷ = 40 + 3X1 + 2X2 for X1 = 4 and X2 = 5.|62|40 + 12 + 10 = 62.
In that equation, X1 increases by 2 and X2 stays fixed. How much does predicted Y change?|6|3 × 2 = 6.
A standardized coefficient is .4. X rises by 2 SD while other predictors stay fixed. How many SD does predicted Y change?|0.8|.4 × 2 = .8 SD.
`);
regressionLesson("selection","回归变量进入方法","Regression selection procedures","16–20",[
["Enter","Enter","把事先选定的预测变量同时放入模型。","Include the prespecified predictors together."],
["Forward 与 Backward","Forward and backward","Forward 从较少变量开始逐步加，Backward 从全模型开始逐步删。","Forward adds predictors from a small starting model. Backward removes predictors from a full starting model."],
["Stepwise","Stepwise","逐步加入变量，并重新评估已加入变量是否保留。","Add predictors while reassessing whether previously included predictors should remain."]
],[
["记忆法：Enter 一起进；Forward 往里加；Backward 往外删；Stepwise 加完再回头看。自动选择依照设定的统计准则进行。","Remember: Enter together, Forward add, Backward remove, Stepwise add and recheck. Automated selection follows the specified statistical criteria."],
["校读第 17 页：Forward 评估新变量是在已经纳入的变量基础上进行，先前变量在这个阶段保留。第 18 页的 Stepwise 才明确允许回头检查已有变量。","Reading note for page 17: forward selection assesses a new predictor conditional on the variables already included. Those earlier variables remain at that stage. Stepwise on page 18 explicitly rechecks existing predictors."],
["第 20 页对 Stepwise 的优点应结合方法限制理解。自动筛选不能保证消除共线性，也不能保证换一批数据仍选同一组变量。报告选择方法，并检查模型假设与预测表现。","Interpret the advantages discussed on page 20 with the method's limitations. Automated selection cannot guarantee freedom from collinearity or a stable variable set in new data. Report the method and check assumptions and predictive performance."]
],`
Which method enters all prespecified predictors together?|Enter|Forward|Backward|Stepwise
Which method starts with the full candidate model and removes predictors?|Backward|Forward|Enter|One-sample testing
Which method adds predictors to a small starting model?|Forward|Backward|Enter|A paired t-test
Which method reassesses previously included variables after adding new ones?|Stepwise|Enter|A frequency table|A fixed full-model fit only
In forward selection, a new predictor is evaluated conditional on what?|The predictors already included|The removed outcome|No existing predictors in every step|Only the file size
Does stepwise selection guarantee that collinearity disappears?|No|Yes always|Only with a positive slope|Only with five rows
What should be reported with a selected regression model?|The variable-selection method and model checks|Only the largest coefficient|Only the number of decimal places|Only the software logo
Five predictors enter and two are removed in backward selection. How many remain?|3|5 − 2 = 3.
How many predictors are initially entered in an Enter model with four prespecified predictors?|4|All four enter together.
Enter 1 if an automated model choice alone proves causality, or 0 if it does not.|0|Causal interpretation needs design and substantive assumptions.
`);
