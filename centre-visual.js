/* Each diagram uses the same five students' waiting times, in minutes. */
const centreVisualStyles = `
.centre-viz {
  --cv-ink: #29243b;
  --cv-muted: #595469;
  --cv-violet: #6544a6;
  --cv-teal: #17776d;
  --cv-line: #dcd6e5;
  color: var(--cv-ink);
  background: #faf9fd;
  border: 1px solid var(--cv-line);
  border-radius: 14px;
  padding: clamp(14px, 2.5vw, 25px);
  margin: 18px 0;
  line-height: 1.5;
}
.centre-viz figcaption { margin: 0 0 16px; text-align: left; }
.centre-viz figcaption strong { display: block; font-size: 1.125rem; color: var(--cv-ink); }
.centre-viz figcaption span, .centre-viz .cv-note { display: block; color: var(--cv-muted); font-size: .94rem; margin: 3px 0 0; }
.centre-viz .zh-help { font-size: .9rem; margin: 14px 0 0; }
.centre-viz .cv-plot { width: 100%; max-width: 580px; height: auto; display: block; margin: auto; }
.centre-viz .cv-plot text { font: 13px system-ui, sans-serif; fill: var(--cv-muted); }
.centre-viz .cv-plot .cv-annotation { fill: var(--cv-ink); font-weight: 650; }
.centre-viz .cv-ranks { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap: clamp(3px, 1vw, 10px); list-style: none; padding: 0; margin: 12px 0; }
.centre-viz .cv-ranks li { display: grid; align-content: center; justify-items: center; padding: 10px 1px; min-width: 0; border: 1px solid var(--cv-line); border-radius: 8px; background: white; }
.centre-viz .cv-ranks li.cv-middle { background: #e9e2fa; border: 2px solid var(--cv-violet); }
.centre-viz .cv-ranks li.cv-change { background: #e3f4ed; border: 2px solid var(--cv-teal); }
.centre-viz .cv-ranks b { font: 700 clamp(1.2rem, 3vw, 1.8rem)/1.25 var(--mono,monospace); color: var(--cv-ink); }
.centre-viz .cv-ranks small { font-size: .82rem; line-height: 1.5; color: var(--cv-muted); }
.centre-viz .cv-legend { display: flex; flex-wrap: wrap; gap: 6px 16px; margin: 0 0 12px; font-size: .875rem; }
.centre-viz .cv-legend span { display: inline-flex; align-items: center; gap: 6px; }
.centre-viz .cv-key { display: inline-block; width: 1rem; height: .55rem; border-radius: 2px; }
.centre-viz .cv-observed { background: var(--cv-violet); }
.centre-viz .cv-share { background: repeating-linear-gradient(135deg,#12675e 0 2px,#bce3d6 2px 5px); }
.centre-viz .cv-allocation { max-width: 580px; margin: 14px 0; }
.centre-viz .cv-bar-row, .centre-viz .cv-scale { display: grid; grid-template-columns: minmax(1.25rem,auto) minmax(0, 1fr) 3.5rem; column-gap: 10px; align-items: center; }
.centre-viz .cv-bar-row { margin: 8px 0; }
.centre-viz .cv-bar-group { display: grid; gap: 3px; height: 20px; align-content: center; border-left: 1px solid #777184; }
.centre-viz .cv-bar-group i { display: block; height: 7px; border-radius: 0 2px 2px 0; width: var(--bar-width); }
.centre-viz .cv-bar-label { font: 600 .85rem var(--mono, monospace); }
.centre-viz .cv-scale div { grid-column: 2; position: relative; height: 1.3rem; color: var(--cv-muted); border-top: 1px solid #aaa3b6; font-size: .78rem; }
.centre-viz .cv-scale span { position: absolute; left: var(--tick); transform: translateX(-50%); }
.centre-viz .cv-predict { margin-top: 14px; }
.centre-viz .cv-predict p { margin: 0 0 8px; font-size: 1rem; font-weight: 650; }
.centre-viz .cv-options { display: flex; gap: 7px; flex-wrap: wrap; }
.centre-viz .cv-options button { min-height: 42px; }
.centre-viz .cv-results { border-collapse: collapse; width: 100%; margin: 14px 0 6px; background: white; }
.centre-viz .cv-results th, .centre-viz .cv-results td { padding: 8px; border-bottom: 1px solid var(--cv-line); text-align: left; font-size: .94rem; }
.centre-viz .cv-results thead { color: var(--cv-muted); }
.centre-viz .cv-results td:last-child { font-weight: 700; }
@media (max-width: 500px) { .centre-viz .cv-plot text { font-size: 16px; } }
`;

function centreFrequencyPlot() {
  // x = 26 + 16 × minutes. Repeated observations stack at exactly the same x.
  const ticks = Array.from({length: 21}, (_, minute) => {
    const x = 26 + 16 * minute;
    const major = minute % 5 === 0;
    return `<line x1="${x}" y1="78" x2="${x}" y2="${major ? 86 : 82}" stroke="#827a91"/>
      ${major ? `<text x="${x}" y="103" text-anchor="middle">${minute}</text>` : ""}`;
  }).join("");
  const dots = [[2, 68], [3, 68], [3, 54], [4, 68], [18, 68]].map(([minute, y]) =>
    `<circle cx="${26 + 16 * minute}" cy="${y}" r="5.8" fill="${minute === 3 ? "#6544a6" : "#17776d"}"/>`
  ).join("");
  return `<figcaption><strong>Count the dots above each wait</strong><span>Each dot is one student. Dots above the same minute stack up.</span></figcaption>
    <svg class="cv-plot" viewBox="0 0 372 137" role="img" aria-label="Dot plot of waiting time. One student waited 2 minutes, two waited 3 minutes, one waited 4 minutes, and one waited 18 minutes.">
      <path d="M74 44 V29 H95" fill="none" stroke="#6544a6" stroke-width="1.5"/>
      <text x="101" y="33" class="cv-annotation">2 students waited 3 min</text>
      <line x1="26" y1="78" x2="346" y2="78" stroke="#827a91"/>${ticks}${dots}
      <text x="186" y="126" text-anchor="middle">Waiting time (minutes)</text>
    </svg>
    ${chineseTranslation("每个点代表一名学生，横轴是等候分钟数。3 分钟上方叠着两个点，其余时长各有一个点，所以众数是 3 分钟。")}`;
}

function centreRankStrip(values, labels, markedIndex, markedClass, description) {
  const items = values.map((value, i) =>
    `<li class="${i === markedIndex ? markedClass : ""}"><b>${value}</b><small>${labels[i]}</small></li>`
  ).join("");
  return `<ol class="cv-ranks" aria-label="${description}">${items}</ol>`;
}

function centrePositionDiagram() {
  return `<figcaption><strong>Find the middle place</strong><span>The waits are in order from shortest to longest. Each box holds one student’s wait in minutes.</span></figcaption>
    ${centreRankStrip([2, 3, 3, 4, 18], ["1st", "2nd", "3rd", "4th", "5th"], 2, "cv-middle", "Five waiting times in rank order, in minutes")}
    <p class="cv-note">The third box has two boxes on each side. Its value is 3 minutes.</p>
    ${chineseTranslation("先从小到大排，每一格代表一名学生。第三格左右各有两格，读出格内的数就得到中位数 3 分钟。")}`;
}

function centreEqualShareDiagram() {
  const waits = [2, 3, 3, 4, 18];
  const fairShare = waits.reduce((total, x) => total + x, 0) / waits.length;
  const maximum = Math.max(...waits);
  const bars = waits.map((wait, i) => `
    <div class="cv-bar-row">
      <b>${String.fromCharCode(65 + i)}</b>
      <span class="cv-bar-group" aria-hidden="true">
        <i class="cv-observed" style="--bar-width:${100 * wait / maximum}%"></i>
        <i class="cv-share" style="--bar-width:${100 * fairShare / maximum}%"></i>
      </span>
      <span class="cv-bar-label">${wait} / ${fairShare}</span>
    </div>`).join("");
  return `<figcaption><strong>Share the total waiting time equally</strong><span>Five students waited 30 minutes altogether. Compare each actual wait with an equal share of those 30 minutes.</span></figcaption>
    <div class="cv-legend"><span><i class="cv-key cv-observed" aria-hidden="true"></i>Actual wait</span><span><i class="cv-key cv-share" aria-hidden="true"></i>Equal share</span></div>
    <div class="cv-allocation" role="img" aria-label="Actual and equal-share minutes. A: 2 and 6. B: 3 and 6. C: 3 and 6. D: 4 and 6. E: 18 and 6. Both sets total 30 minutes.">
      ${bars}<div class="cv-scale" aria-hidden="true"><div>${[0, 6, 12, 18].map(tick => `<span style="--tick:${100 * tick / maximum}%">${tick}</span>`).join("")}</div></div>
    </div>
    <p class="cv-note">30 minutes ÷ 5 students = 6 minutes per student.</p>
    ${chineseTranslation("实心条是实际等待时长，斜纹条是假想的均分时长，单位均为分钟。五人的总和为 30 分钟，平均分给 5 人，每人 6 分钟。")}`;
}

function centrePredictionDiagram(changed, revealed) {
  const after = changed && revealed;
  const values = [2, 3, 3, 4, after ? 38 : 18];
  const strip = centreRankStrip(values, ["A", "B", "C", "D", "E"], 4, "cv-change", "Waiting times in minutes for students A through E");
  const question = "If E waits 38 minutes instead of 18, which measure increases?";
  const controls = !revealed ? `
    <div class="cv-predict" role="group" aria-label="${question}">
      <p>${question}</p>
      <div class="cv-options"><button type="button" class="soft" data-centre-predict="mean">Mean only</button>
        <button type="button" class="soft" data-centre-predict="median">Median only</button>
        <button type="button" class="soft" data-centre-predict="both">Both measures</button></div>
    </div>` : `
    <table class="cv-results" aria-label="Mean and median waiting times in minutes before and after changing the fifth wait">
      <thead><tr><th scope="col">Measure</th><th scope="col">Before</th><th scope="col">After</th></tr></thead>
      <tbody><tr><th scope="row">Mean</th><td>6 min</td><td>${after ? 10 : 6} min</td></tr>
      <tr><th scope="row">Median</th><td>3 min</td><td>3 min</td></tr></tbody>
    </table>
    <div class="cv-options"><button type="button" class="soft" data-centre-reset>Reset experiment</button></div>`;
  return `<figcaption><strong>Change one student’s wait</strong>
    <span>${after ? "Student E now waits 38 minutes. The other four waits are unchanged." : "These are the original five waits, in minutes. Only student E’s wait will change."}</span></figcaption>
    ${strip}${controls}
    ${chineseTranslation(after
      ? "均值从 6 分钟变为 10 分钟，因为多出的 20 分钟均分给 5 人，每人增加 4 分钟。第三格仍为 3 分钟，中位数保持不变。"
      : "五名学生分别等了 2、3、3、4、18 分钟。如果第五人的等待时间变为 38 分钟，会变大的是只有均值、只有中位数，还是两者都会？")}`;
}

function renderCentreVisual(topic, changed = false, revealed = false) {
  const diagrams = {
    mode: centreFrequencyPlot,
    median: centrePositionDiagram,
    mean: centreEqualShareDiagram,
    choose: () => centrePredictionDiagram(changed, revealed)
  };
  if (!Object.hasOwn(diagrams, topic)) return "";
  if (!document.getElementById("centre-visual-styles")) {
    const style = document.createElement("style");
    style.id = "centre-visual-styles";
    style.textContent = centreVisualStyles;
    document.head.append(style);
  }
  return `<figure class="centre-viz" lang="en">${diagrams[topic]()}</figure>`;
}
