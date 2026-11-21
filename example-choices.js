// Wrong options for the five guided examples in each Week 1 topic.
const guidedExampleDistractors = {
  "analysis-workflow": [
    [
      "Average 30 and 1 as written.",
      "Convert both values into two different units."
    ],
    [
      "One waiting-time unit.",
      "The whole queue."
    ],
    [
      "Prepare.",
      "Report."
    ],
    [
      "The five waits totalled 8 minutes.",
      "Every visitor waits exactly 8 minutes."
    ],
    [
      "In the data preparation step.",
      "In the code for the waiting-time units."
    ]
  ],
  "sample-and-population": [
    [
      "The 20 measured pupils.",
      "The 380 pupils who were not measured."
    ],
    [
      "All 1,000 registered users.",
      "The 940 users who did not respond."
    ],
    [
      "A population estimate.",
      "A causal claim."
    ],
    [
      "Descriptive only.",
      "Experimental."
    ],
    [
      "The survey automatically covers all registered users.",
      "Any sample with fewer than 100 cases has zero precision."
    ]
  ],
  "descriptive-questions": [
    [
      "Dispersion.",
      "Relative standing."
    ],
    [
      "4 points.",
      "10 points."
    ],
    [
      "Which score occurs most often?",
      "How many scores were recorded?"
    ],
    [
      "A count of correct items.",
      "The total number of classmates."
    ],
    [
      "One standard deviation below the mean (z = −1).",
      "Five standard deviations above the mean (z = 5)."
    ]
  ],
  "inference-map": [
    [
      "The difference between the two sample sizes.",
      "The exact increase caused by height."
    ],
    [
      "A frequency table.",
      "A test comparing two group means."
    ],
    [
      "A categorical outcome with no numerical scores.",
      "The fact that both classes must contain the same pupils."
    ],
    [
      "A group mean in each cell.",
      "A correlation coefficient in each cell."
    ],
    [
      "Pearson’s r or Cramér’s V.",
      "A paired t-test or one-way ANOVA."
    ]
  ],
  "variable-types": [
    [
      "Yes. Their ID measures a four-unit increase.",
      "Yes. An even ID measures a count."
    ],
    [
      "Continuous.",
      "A nominal label."
    ],
    [
      "Yes, because the timer rounds to whole seconds.",
      "Yes, because every recorded second is a category."
    ],
    [
      "No. Dichotomous categories can never have an order.",
      "No. Ordering requires at least three categories."
    ],
    [
      "The colour column.",
      "Both columns give differences in centimetres."
    ]
  ],
  "nominal-labels": [
    [
      "The player’s rank in the team.",
      "The number of games the player has played."
    ],
    [
      "It implies the groups were equally large.",
      "It gives the total number of groups."
    ],
    [
      "Blue.",
      "Both are equally common."
    ],
    [
      "10%.",
      "40%."
    ],
    [
      "A visit can receive several primary-mode labels.",
      "Each transport mode can be used by only one visitor."
    ]
  ],
  "ordinal-ranks": [
    [
      "Equal numerical gaps.",
      "Ratios between levels."
    ],
    [
      "Yes. Second rank always means twice as good.",
      "Yes. Ranking establishes exact gaps in quality."
    ],
    [
      "The room names.",
      "Both uses are ordinal."
    ],
    [
      "Response 3 shows three times as much satisfaction.",
      "Responses 1 and 3 show the same satisfaction."
    ],
    [
      "Yes. The names define two equal steps.",
      "Yes. Only the names of the levels matter when finding a numerical gap."
    ]
  ],
  "interval-gaps": [
    [
      "The first increase is 30 units larger.",
      "The second increase is 10 units larger."
    ],
    [
      "An increase of 1°C.",
      "A decrease of 7°C."
    ],
    [
      "Yes. Dividing the Celsius readings gives an absolute ratio.",
      "No. The temperature difference is 2°C."
    ],
    [
      "Yes. The ratio of the scores measures twice the ability.",
      "No. IQ scores give categories with no meaningful differences."
    ],
    [
      "10 years.",
      "25 years."
    ]
  ],
  "ratio-amounts": [
    [
      "0.5 times.",
      "30 times."
    ],
    [
      "The worker earned the average amount for that month.",
      "The worker’s earnings are unknown."
    ],
    [
      "B’s rate is twice A’s.",
      "A’s rate is four times B’s."
    ],
    [
      "Yes. The ratio is 10.",
      "Yes. The ratio is 0."
    ],
    [
      "Only height is ratio-scaled.",
      "Only the number of children is ratio-scaled."
    ]
  ],
  "scale-tutorial": [
    [
      "Height: ordinal. Eye colour: nominal.",
      "Height: ratio. Eye colour: ordinal."
    ],
    [
      "Both are nominal because they come from assessments.",
      "Both are ordinal, even when counting the proportion of items answered correctly."
    ],
    [
      "Both ratio.",
      "Celsius is interval and Fahrenheit is ratio."
    ],
    [
      "Film rank: ratio. Car rank: ordinal. Actual price: ordinal.",
      "Film rank: nominal. Car rank: nominal. Actual price: interval."
    ],
    [
      "Both ordinal.",
      "Both ratio."
    ]
  ],
  "frequencies": [
    [
      "The class has six age groups.",
      "Nineteen students are 6 years old."
    ],
    [
      "19 students.",
      "21 students."
    ],
    [
      "24%.",
      "40%."
    ],
    [
      "6 students.",
      "4 students."
    ],
    [
      "10 students aged 20.",
      "12 students aged 20."
    ]
  ],
  "boxplot": [
    [
      "Method 1.",
      "Method 3."
    ],
    [
      "Method 4.",
      "Method 1."
    ],
    [
      "97 points.",
      "6.5 points."
    ],
    [
      "Method 3.",
      "Method 4."
    ],
    [
      "Yes. The median and IQR identify every observation.",
      "Yes, if both plots use the same scale."
    ]
  ],
  "histogram": [
    [
      "People earning exactly the lower endpoint.",
      "The average salary of all people surveyed."
    ],
    [
      "The bin from 0 up to 10.",
      "Both bins."
    ],
    [
      "The longer tail extends toward lower salaries.",
      "All salaries are equally frequent."
    ],
    [
      "A histogram of numerical intervals.",
      "A stem-and-leaf plot."
    ],
    [
      "The next bin moves left to fill the space.",
      "The bin has a bar of height one."
    ]
  ],
  "stem-leaf": [
    [
      "52.",
      "2.5."
    ],
    [
      "One observation.",
      "Two observations."
    ],
    [
      "Minimum 10 and maximum 34.",
      "Minimum 0 and maximum 4."
    ],
    [
      "2 | 0 2 5 24.",
      "2 | 0 2 5."
    ],
    [
      "48.",
      "8.4."
    ]
  ],
  "dotplot": [
    [
      "3 babies.",
      "7 babies."
    ],
    [
      "13 vaccinated babies.",
      "19 vaccinated babies."
    ],
    [
      "3 more babies.",
      "10 more babies."
    ],
    [
      "3/4.",
      "7/16."
    ],
    [
      "Yes. The highest count always gives the highest rate.",
      "Yes. Each stack gives the percentage directly."
    ]
  ],
  "mode": [
    [
      "Coffee",
      "Juice"
    ],
    [
      "5 points",
      "70 points"
    ],
    [
      "Only 1 order",
      "Only 4 orders"
    ],
    [
      "100",
      "There is no mode."
    ],
    [
      "1 minute occurs most often.",
      "7 minutes occurs most often."
    ]
  ],
  "median": [
    [
      "1 minute",
      "9 minutes"
    ],
    [
      "17 points",
      "19 points"
    ],
    [
      "8 points",
      "10 points"
    ],
    [
      "4 minutes",
      "38 minutes"
    ],
    [
      "3 minutes",
      "4 minutes"
    ]
  ],
  "mean": [
    [
      "2",
      "4"
    ],
    [
      "12 minutes",
      "24 minutes"
    ],
    [
      "10 minutes",
      "14 minutes"
    ],
    [
      "6 minutes",
      "38 minutes"
    ],
    [
      "2 classes per student",
      "4 classes per student"
    ]
  ],
  "choose": [
    [
      "Mean, 6 minutes",
      "Range, 16 minutes"
    ],
    [
      "Mean",
      "Range"
    ],
    [
      "Mean, fair",
      "Mode, good"
    ],
    [
      "Median 70, mode 0",
      "The median and mode cannot be determined."
    ],
    [
      "Kiosk A",
      "Both kiosks"
    ]
  ],
  "activity-scores": [
    [
      "Mean 5.5, median 5.2, mode 6, range 6.",
      "Mean 5.2, median 5.5, mode 3, range 8."
    ],
    [
      "3 is the lowest recorded score.",
      "3 is the modal score because it appears six times."
    ],
    [
      "Mean 6.2, range 18.",
      "Mean 5.2, range 16."
    ],
    [
      "Median 5.5.",
      "Median 5."
    ],
    [
      "Only the mean stays at 5.2.",
      "Only the mode stays at 6."
    ]
  ],
  "activity-households": [
    [
      "Mode 3, mean 3.5, median 4. Three children was the most frequent count.",
      "Mode 4, mean 3.5, median 3.4. Four children was the most frequent count."
    ],
    [
      "40% of the households.",
      "3% of the households."
    ],
    [
      "Three households each had four children, so their mean was 3.4.",
      "The mean implies that at least one household had exactly 3.4 children."
    ],
    [
      "Mean 3.40 children per household, mode 4 children.",
      "Mean 3.09 children per household, mode 0 children."
    ],
    [
      "Use the mode. The team needs 40 tickets.",
      "Use the median. The team needs 35 tickets."
    ]
  ],
  "activity-percentages": [
    [
      "12 people.",
      "16 people."
    ],
    [
      "40% of the full sample.",
      "45% of the full sample."
    ],
    [
      "80 males.",
      "84 males."
    ],
    [
      "8.0% of the under-20 group.",
      "42.9% of the under-20 group."
    ],
    [
      "Yes. Everyone aged 20–29 is under 25, so the answer is 56.",
      "Yes. Exactly half of the 20–29 group must be under 25, so the answer is 42."
    ]
  ]
};

// Supplementary options for numerical and other short-answer PDF examples.
const slideExampleDistractors = {
  "quantitative": {
    "4": [
      "−2",
      "20"
    ]
  },
  "data-types": {
    "2": [
      "Continuous",
      "Ordinal only"
    ],
    "3": [
      "Discrete",
      "Nominal"
    ]
  },
  "frequencies": {
    "1": [
      "0.10",
      "0.40"
    ],
    "2": [
      "13",
      "28"
    ],
    "3": [
      "12",
      "30"
    ],
    "4": [
      "30",
      "60"
    ]
  },
  "boxplot": {
    "1": [
      "28",
      "4"
    ],
    "4": [
      "40",
      "55"
    ],
    "5": [
      "45",
      "60"
    ]
  },
  "histogram": {
    "4": [
      "4",
      "48"
    ]
  },
  "stem-leaf": {
    "1": [
      "65",
      "11"
    ],
    "2": [
      "4",
      "47"
    ],
    "3": [
      "2",
      "10"
    ],
    "4": [
      "28",
      "2"
    ]
  },
  "dotplot": {
    "1": [
      "1",
      "12"
    ],
    "2": [
      "3",
      "11"
    ],
    "3": [
      "8",
      "20"
    ]
  },
  "mode": {
    "1": [
      "3",
      "7"
    ],
    "2": [
      "1",
      "4"
    ]
  },
  "median": {
    "1": [
      "1",
      "9"
    ],
    "2": [
      "4",
      "8"
    ],
    "3": [
      "7",
      "9"
    ],
    "4": [
      "7",
      "200"
    ]
  },
  "mean": {
    "1": [
      "2",
      "6"
    ],
    "2": [
      "8",
      "12"
    ],
    "3": [
      "15",
      "5"
    ],
    "4": [
      "3",
      "50"
    ],
    "5": [
      "20",
      "140"
    ]
  },
  "centre-comparison": {
    "1": [
      "2",
      "6"
    ],
    "2": [
      "4",
      "8"
    ],
    "3": [
      "4",
      "8"
    ]
  },
  "range": {
    "1": [
      "7",
      "11"
    ],
    "2": [
      "5",
      "8"
    ],
    "3": [
      "5",
      "15"
    ]
  },
  "quartile": {
    "1": [
      "20",
      "4"
    ],
    "2": [
      "12",
      "16"
    ],
    "5": [
      "2.5",
      "5"
    ]
  },
  "variance": {
    "1": [
      "4",
      "8"
    ],
    "2": [
      "2.67",
      "8"
    ],
    "5": [
      "2",
      "16"
    ]
  },
  "sd": {
    "1": [
      "25",
      "625"
    ],
    "5": [
      "9",
      "1"
    ]
  },
  "skew": {
    "4": [
      "0.5",
      "2"
    ]
  },
  "kurtosis": {
    "1": [
      "6",
      "9"
    ],
    "2": [
      "−3.5",
      "3.5"
    ],
    "5": [
      "12",
      "48"
    ]
  },
  "inference": {
    "1": [
      "5,000",
      "4,950"
    ],
    "2": [
      "50",
      "4,950"
    ]
  },
  "charts": {
    "2": [
      "9",
      "14"
    ],
    "3": [
      "2",
      "4"
    ],
    "5": [
      "3",
      "90"
    ]
  },
  "hypothesis": {
    "3": [
      "1",
      "It equals the observed difference between the sample means."
    ]
  },
  "alpha": {
    "3": [
      "0.98",
      "0.05"
    ]
  },
  "errors": {
    "3": [
      "0.30",
      "0.09"
    ],
    "4": [
      "0.85",
      "1.85"
    ]
  },
  "one": {
    "2": [
      "0.5",
      "4"
    ],
    "3": [
      "10",
      "12"
    ]
  },
  "independent": {
    "2": [
      "8",
      "16"
    ],
    "3": [
      "−2",
      "6"
    ]
  },
  "paired": {
    "2": [
      "8",
      "10"
    ],
    "3": [
      "0.67",
      "6"
    ]
  },
  "pearson": {
    "4": [
      "−1",
      "0"
    ]
  },
  "spearman": {
    "1": [
      "0",
      "−1"
    ],
    "2": [
      "0",
      "1"
    ],
    "3": [
      "4",
      "5"
    ],
    "4": [
      "0.2",
      "0.95"
    ]
  },
  "cramer": {
    "3": [
      "0.09",
      "0.90"
    ],
    "4": [
      "3",
      "6"
    ]
  },
  "simple-regression": {
    "1": [
      "12",
      "25"
    ],
    "2": [
      "4",
      "100"
    ],
    "3": [
      "0.5",
      "12.5"
    ],
    "5": [
      "0.30",
      "20"
    ]
  },
  "residuals": {
    "1": [
      "−4",
      "104"
    ],
    "2": [
      "4",
      "96"
    ],
    "3": [
      "0",
      "6"
    ]
  },
  "multiple-regression": {
    "1": [
      "30",
      "40"
    ],
    "2": [
      "3",
      "9"
    ],
    "5": [
      "−0.3",
      "0.6"
    ]
  },
  "anova": {
    "1": [
      "Two factors",
      "Three factors"
    ],
    "2": [
      "Yes"
    ],
    "3": [
      "Yes"
    ],
    "4": [
      "Paired-samples t-test",
      "Pearson correlation"
    ],
    "5": [
      "1",
      "3"
    ]
  },
  "anova-assumptions": {
    "1": [
      "Yes"
    ],
    "2": [
      "Means",
      "Medians"
    ],
    "3": [
      "Yes"
    ],
    "4": [
      "Yes"
    ],
    "5": [
      "The student ID",
      "The assigned group"
    ]
  },
  "two-way-anova": {
    "1": [
      "2",
      "8"
    ],
    "2": [
      "Main effect of course level",
      "Homogeneity of variance"
    ],
    "3": [
      "Yes"
    ],
    "4": [
      "Yes"
    ],
    "5": [
      "2",
      "5"
    ]
  }
};
