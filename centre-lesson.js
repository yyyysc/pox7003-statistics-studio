/* The original pilot keeps its saved state, time keys and public deep links. */
const centralTendencyModule = {
  id:"centre", title:"Measures of central tendency",
  subtitle:["How would you describe a typical wait?","怎样用一个数说明典型的等候时间？"],
  topics:centreTopics, bank:centreTicketBank,
  writing:{prompt:centreWritingPrompt,model:centreWritingModel,rubric:[
    "Did you name the median and give its value in minutes?",
    "Did you explain how the long wait affects the mean or why the middle wait describes this visit?"
  ]}
};
const guidedModules = [foundationModule, scalesModule, graphsModule, centralTendencyModule, activitiesModule];
let activeGuide = centralTendencyModule;
let centrePane = "mode";

function findGuide(id) { return guidedModules.find(guide=>guide.id===id); }
function guideTimeKey(id) { return "guided-"+id; }
function guidePages(guide) { return [...new Set(guide.topics.flatMap(t=>t.pages))].sort((a,b)=>a-b); }
function savedGuide(weekRecord,guide) { return guide.id==="centre" ? weekRecord.centre : weekRecord.guided?.[guide.id]; }
function topicCovered(topic,guide,weekRecord) {
  return savedGuide(weekRecord,guide)?.done?.[topic.id] || topic.pages.every(p=>weekRecord.slideDone?.["slide-"+pad(p)]);
}
function coveredCount(guide,weekRecord) { return guide.topics.filter(t=>topicCovered(t,guide,weekRecord)).length; }

function centreState(guide=activeGuide) {
  const record = state(1);
  const owner = guide.id==="centre" ? record : (record.guided ??= {});
  return owner[guide.id] ??= {last:guide.topics[0].id, done:{}, examples:{}, answers:{}};
}

function validateCentreLesson(record,guide=centralTendencyModule) {
  const map = value => value !== null && typeof value === "object" && !Array.isArray(value);
  const topics = new Map(guide.topics.map(t=>[t.id,t]));
  const byTopic = (value, valid) => map(value) && Object.entries(value).every(([id, part]) => topics.has(id) && valid(part,id));
  const byExample = (value, valid) => map(value) && Object.entries(value).every(([index, part]) => /^[0-4]$/.test(index) && valid(part));
  return map(record) && (record.last==="practice" || topics.has(record.last))
    && byTopic(record.done,v=>typeof v==="boolean")
    && byTopic(record.answers,(v,id)=>Number.isInteger(v) && v>=0 && v<topics.get(id).check.choices.length)
    && byTopic(record.examples,v=>map(v) && Number.isInteger(v.index) && v.index>=0 && v.index<5
      && byExample(v.work,text=>typeof text==="string" && text.length<=800) && byExample(v.shown,flag=>typeof flag==="boolean"))
    && (record.prediction==null || ["mean","median","both"].includes(record.prediction))
    && validateCentreAssessment(record.assessment,guide.bank);
}

function centreRoute() {
  return new URLSearchParams(location.hash.slice(1));
}

function centreSetPane(id, push = true, guide=activeGuide) {
  activeGuide = guide;
  if(id==="practice") {
    history[push?"pushState":"replaceState"](null,"",examRoute("library",{guide:guide.id}));
    enterExam();return;
  }
  if (!id) id = centreState().last;
  if (!guide.topics.some(t=>t.id===id)) id = guide.topics[0].id;
  const entering = mode !== "centre";
  week = 1;
  mode = "centre";
  centrePane = id;
  centreState().last = id;
  save();
  if (push) history.pushState(null, "", "#week=1&lesson="+guide.id+"&topic=" + id);
  render(id === "practice" ? "centre-assessment" : "centre-reader");
  if (entering && id !== "practice") window.scrollTo(0,0);
}

function centreOpenPdf(page) {
  if (!studySlides(1).some(slide=>slide.page===page)) return;
  const origin = mode==="centre" ? "&guide="+activeGuide.id+"&from="+centrePane : "";
  history.pushState(null, "", "#week=1&source=" + page + origin);
  mode = "study";
  setSlide(page - 1);
}

function centreLessonEntry() {
  const record=state(1);
  const rows=guidedModules.map(guide=>{
    const pages=guidePages(guide), done=coveredCount(guide,record);
    const saved=savedGuide(record,guide);
    return `<div class="guide-row"><div><small>PDF ${pages[0]}–${pages.at(-1)} · ${done}/${guide.topics.length} topics covered</small><h4>${escapeHtml(guide.title)}</h4><p>${escapeHtml(guide.subtitle[0])}</p>${centreZh(guide.subtitle[1])}</div>
      <button type="button" class="soft" data-guide-open="${guide.id}" aria-label="${saved?"Resume":"Open"} ${escapeHtml(guide.title)}">${saved?"Resume lesson":"Open lesson"}</button></div>`;
  }).join("");
  return `<section class="guide-index" id="week-guide" lang="en" tabindex="-1"><header><div><p class="centre-kicker">WEEK 1 · DESCRIPTIVE STATISTICS</p><h3>Learn by topic</h3></div><button class="soft" data-guide-source>Browse PDF pages</button></header>${rows}</section>`;
}

function centreZh(value) {
  return chineseTranslation(escapeHtml(value), "span", "centre-zh");
}

function centrePair(pair) {
  return `<p class="centre-en">${escapeHtml(pair[0])}</p>${centreZh(pair[1])}`;
}

function centreMicro(id) {
  return centreState().examples[id] ??= {index:0, work:{}, shown:{}};
}

function centreExamples(section) {
  const state = centreMicro(section.id);
  const i = state.index;
  const example = section.examples[i];
  const steps = example.steps.map((pair) => `<li>${escapeHtml(pair[0])}${centreZh(pair[1])}</li>`).join("");
  const picker = section.examples.map((item, n) => `<button type="button" data-centre-example="${n}" aria-label="Example ${n+1}" ${n === i ? 'aria-current="step"' : ""}>${n+1}</button>`).join("");
  const options = workedExampleOptions(example.answer[0],guidedExampleDistractors[section.id][i],i+section.id.length);
  const solution = `<div class="centre-solution"><p><strong>Answer · ${escapeHtml(example.answer[0])}</strong></p>${centreZh(example.answer[1])}<h5>Worked solution</h5><ol>${steps}</ol></div>`;
  const hint = `<details class="centre-hint"><summary>Show a hint</summary>${centrePair(example.hint)}</details>`;
  const previousNote = state.work[i] ? `<details><summary>Your earlier notes</summary><p class="worked-note">${escapeHtml(state.work[i])}</p></details>` : "";
  return `<section id="centre-examples" class="centre-block" tabindex="-1"><header class="centre-section-head"><h4>Worked examples</h4><nav class="centre-example-picker" aria-label="Choose an example">${picker}</nav></header>
    <p class="centre-caption">Example ${i+1} of ${section.examples.length}</p>
    ${renderWorkedChoice(workedExampleKey(section.id,i),...example.prompt,options,example.answer[0],solution,hint)}
    ${previousNote}
    ${i < 4 ? '<button class="centre-link" data-centre-example="'+(i+1)+'">Next example</button>' : ""}
    </section>`;
}

function centreQuickCheck(section) {
  const q = section.check, picked = centreState().answers[section.id];
  const options = q.choices.map((choice,i) => `<button class="centre-choice" type="button" data-centre-check="${i}" aria-pressed="${picked===i}"><b>${String.fromCharCode(65+i)}</b><span>${escapeHtml(choice[0])}</span></button>`).join("");
  const glossary = centreZh(q.choices.map((choice, i) => String.fromCharCode(65+i) + ". " + choice[1]).join("　"));
  const feedback = Number.isInteger(picked) ? `<div class="centre-feedback ${picked===q.key?"is-correct":""}" role="status"><strong>${picked===q.key?"Correct":"Try another answer"}</strong>${centrePair(q.feedback[picked])}</div>` : "";
  return `<section class="centre-block" id="centre-check" tabindex="-1"><h4>Check your understanding</h4><p class="centre-prompt">${escapeHtml(q.prompt[0])}</p>${centreZh(q.prompt[1])}<div class="centre-options">${options}</div>${glossary}${feedback}</section>`;
}

function centreConcept(section) {
  const record = centreState();
  const prediction = section.id === "choose" ? record.prediction : null;
  const explanations = {
    mean:["Yes. The extra 20 minutes are shared across five observations. The mean rises by 4 minutes.","对。多出的 20 分钟由五个观察值平分，均值增加 4 分钟。"],
    median:["Check the middle position. The third wait is still 3 minutes. The total increased by 20, so the mean rose by 4.","看中间位置。第三个时间仍是 3 分钟。总量增加 20 分钟，因此均值增加了 4 分钟。"],
    both:["Only one measure moves here. The third observation stays at 3 while the total increases from 30 to 50 minutes.","这里仅有一个指标发生变化。第三个观察值保持在 3 分钟，总量则由 30 增至 50 分钟。"]
  };
  const pages = section.pages.map(page=>`<button class="centre-link" data-centre-pdf="${page}">p. ${page}</button>`).join("");
  const nextTopic=activeGuide.topics[activeGuide.topics.indexOf(section)+1];
  const next = nextTopic ? "Continue to " + nextTopic.title : "Finish this lesson";
  return `<article class="centre-reader" id="centre-reader" tabindex="-1">
      <header class="centre-chapter-head"><p class="centre-kicker">${escapeHtml(section.title)} <span>·</span> PDF ${section.pages[0]}${section.pages.length>1?"–"+section.pages.at(-1):""}</p>
      <h3>${escapeHtml(section.question[0])}</h3>${centreZh(section.titleZh+" · "+section.question[1])}</header>
      ${centrePair(section.idea)}
      <div id="centre-visual" tabindex="-1">${section.visual ? section.visual() : renderCentreVisual(section.id, !!prediction, !!prediction)}
      ${prediction ? `<div class="centre-feedback ${prediction==="mean"?"is-correct":""}" role="status"><strong>Your prediction · ${escapeHtml(prediction==="both" ? "Both measures" : "The "+prediction)}</strong>${centrePair(explanations[prediction])}</div>` : ""}</div>
      <div class="centre-method"><h4>How to work it out</h4>${centrePair(section.method)}</div>
      ${centreExamples(section)}
      <div class="centre-next"><div class="centre-source">Teacher slides ${pages}</div><button class="primary" data-centre-next>${next}</button></div>
    </article>`;
}

function renderCentreLesson() {
  const topic = activeGuide.topics.find(s=>s.id===centrePane);
  const sections=activeGuide.topics;
  const links = sections.map((section,i) => {
    const id=section.id,label=section.title;
    const done = topicCovered(section,activeGuide,state(1));
    return `<button type="button" data-centre-topic="${id}" ${id===centrePane?'aria-current="step"':""}><span class="centre-step-index">${done?"✓":String(i+1).padStart(2,"0")}</span><span>${label}</span>${done?'<span class="centre-sr"> · Completed</span>':""}</button>`;
  }).join("");
  return `<section class="centre-shell" lang="en"><header class="centre-mast"><div><p class="centre-kicker">Week 1 <span>/</span> Guided lesson</p><h2>${escapeHtml(activeGuide.title)}</h2><p>${escapeHtml(activeGuide.subtitle[0])}</p>${centreZh(activeGuide.subtitle[1])}</div><button class="soft" data-centre-exit>All Week 1 lessons</button></header>
    <div class="centre-layout"><aside class="centre-nav"><h3>Lesson contents</h3><nav aria-label="Guided lesson contents">${links}</nav>
      <p class="centre-progress">${coveredCount(activeGuide,state(1))} of ${activeGuide.topics.length} topics covered${topic?`<br>Topic time <time id="centre-study-clock">${duration(state(1).time[guideTimeKey(topic.id)])}</time>`:""}</p><details class="centre-help"><summary>How to show Chinese</summary><p>Hover over a grey strip, focus it with the keyboard, or press and hold on a touch screen.</p></details></aside>
    ${centreConcept(topic)}</div></section>`;
}

function centreClick(button) {
  if (button.hasAttribute("data-guide-open")) {
    const guide=findGuide(button.dataset.guideOpen);
    if(guide) centreSetPane(button.dataset.centreTopic,true,guide);
    return true;
  }
  if (button.hasAttribute("data-guide-source")) {
    centreOpenPdf(currentSlide().page);
    return true;
  }
  if (button.hasAttribute("data-centre-exit")) {
    history.pushState(null, "", "#week=1&view=lessons");
    setWeek(1);
    return true;
  }
  if (button.hasAttribute("data-centre-topic")) {
    centreSetPane(button.dataset.centreTopic);
    return true;
  }
  if (mode !== "centre") return false;
  if (button.hasAttribute("data-centre-pdf")) {
    centreOpenPdf(Number(button.dataset.centrePdf));
    return true;
  }
  if (centrePane === "practice") return centreAssessClick(button);
  const section = activeGuide.topics.find(t=>t.id===centrePane);
  const record = centreState();
  const example = centreMicro(centrePane);
  let target;
  if (button.hasAttribute("data-centre-example")) {
    example.index = Number(button.dataset.centreExample);
    target = "centre-examples";
  } else if (button.hasAttribute("data-centre-check")) {
    record.answers[centrePane] = Number(button.dataset.centreCheck);
    target = "centre-check";
  } else if (button.hasAttribute("data-centre-predict") || button.hasAttribute("data-centre-reset")) {
    record.prediction = button.dataset.centrePredict || null;
    target = "centre-visual";
  } else if (button.hasAttribute("data-centre-next")) {
    record.done[centrePane] = true;
    const nextTopic=activeGuide.topics[activeGuide.topics.indexOf(section)+1];
    if(nextTopic) centreSetPane(nextTopic.id);
    else {save();location.hash="week=1&view=lessons";}
    return true;
  } else {
    return false;
  }
  save();
  render(target);
  return true;
}

function centreInput(input) {
  if (centrePane === "practice") return centreAssessInput(input);
}
