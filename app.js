const titles = {
  1:["定量分析基础与描述统计","Quantitative Foundations & Descriptive Statistics"],
  2:["离散程度与统计推断","Dispersion & Statistical Inference"],
  3:["假设检验与 t 检验","Hypothesis Testing & t-Tests"],
  4:["相关研究与相关检验","Correlational Research & Tests"],
  5:["回归与预测","Regression & Prediction"],
  6:["方差分析","Analysis of Variance (ANOVA)"]
};
const courseWeeks = 14;
const currentTeachingWeek = 6;
const weeklyPracticeSize = 30;
const midtermWeek = 8;
const midtermDate = Date.UTC(2026,10,27);
const dayMs = 86400000;
const countdownWindow = midtermDate - Date.UTC(2026,10,4);
const key = "pox7003-study-v1";
const navigationKey = "pox7003-navigation-v1";
const scrollKey = "pox7003-reading-position-v1";
const $ = id => document.getElementById(id);
let data = readData();
const tabLocations = readTabLocations();
const readingPositions = readReadingPositions();
let week = 1, topic = 0, mode = "study", resultIndex = 0;
let tickAt = performance.now();
let clockRunning = document.visibilityState === "visible" && document.hasFocus();

function readData() {
  try { return JSON.parse(localStorage.getItem(key)) || {}; }
  catch { return {}; }
}
function readTabLocations() {
  const defaults={lessons:"#week=1&view=lessons",exam:"#view=exam&tab=mock"};
  try {
    const saved=JSON.parse(localStorage.getItem(navigationKey));
    for(const tab of Object.keys(defaults)){
      const hash=saved?.[tab];
      if(typeof hash!=="string" || !hash.startsWith("#")) continue;
      const route=new URLSearchParams(hash.slice(1));
      if(tab==="exam" ? route.get("view")==="exam" : route.has("week") && route.get("view")!=="exam"){
        defaults[tab]=hash;
      }
    }
  } catch {}
  return defaults;
}
function updateCourseTabs(inExam) {
  const current=inExam?"exam":"lessons", hash=location.hash;
  if(hash && tabLocations[current]!==hash){
    tabLocations[current]=hash;
    try { localStorage.setItem(navigationKey,JSON.stringify(tabLocations)); } catch {}
  }
  for(const tab of Object.keys(tabLocations)){
    const link=$("course-switch-"+tab);
    link.setAttribute("href",tabLocations[tab]);
    if(tab===current) link.setAttribute("aria-current","page");
    else link.removeAttribute("aria-current");
  }
}
function readReadingPositions() {
  try {
    const saved=JSON.parse(localStorage.getItem(scrollKey));
    return {lessons:saved?.lessons,exam:saved?.exam};
  } catch { return {}; }
}
function readingLine() {
  return Math.max(0,$("course-tabs").getBoundingClientRect().bottom)+12;
}
function rememberReadingPosition() {
  const tab=examActive()?"exam":"lessons";
  const line=readingLine();
  let anchor=null,nearest=-Infinity;
  if(window.scrollY>0){
    for(const element of document.querySelectorAll("#workspace [data-reading-anchor][id]")){
      if(!element.getClientRects().length) continue;
      const {top,bottom}=element.getBoundingClientRect();
      if(top<=line && bottom>line && top>nearest){anchor=element.id;nearest=top;}
    }
  }
  readingPositions[tab]={route:location.hash||tabLocations[tab],top:window.scrollY,anchor,offset:anchor?line-nearest:0};
  try { localStorage.setItem(scrollKey,JSON.stringify(readingPositions)); } catch {}
}
function restoreReadingPosition() {
  const tab=examActive()?"exam":"lessons";
  const route=location.hash||tabLocations[tab], saved=readingPositions[tab];
  if(saved?.route!==route || !Number.isFinite(saved.top)) return false;
  const workspace=$("workspace");
  const content=workspace.firstElementChild;
  function restore(){
    const anchor=typeof saved.anchor==="string"?$(saved.anchor):null;
    if(!anchor?.getClientRects().length || !workspace.contains(anchor)){
      window.scrollTo(0,saved.top);return;
    }
    const anchorRect=anchor.getBoundingClientRect();
    const offset=Math.min(Math.max(0,saved.offset||0),Math.max(0,anchorRect.height-1));
    const originalLine=$("course-tabs").getBoundingClientRect().height+12;
    window.scrollTo(0,window.scrollY+anchorRect.top+offset-originalLine);
  }
  restore();
  const restingY=window.scrollY;
  const images=Array.from(workspace.querySelectorAll("img:not([loading=lazy])")).filter(img=>!img.complete);
  if(images.length){
    Promise.allSettled(images.map(img=>img.decode())).then(()=>{
      if((location.hash||tabLocations[tab])===route && workspace.firstElementChild===content && Math.abs(window.scrollY-restingY)<2) restore();
    });
  }
  return true;
}
function state(n = week) {
  return data[n] ??= {time:{},done:{},topic:0,attempts:[],draft:null,quizMs:0};
}
function save() {
  try { localStorage.setItem(key, JSON.stringify(data)); }
  catch { $("save-status").innerHTML = "浏览器保存不可用"; }
}
function refresh() {
  const saved = readData();
  if (Object.keys(saved).length) data = saved;
}
function complete(n) {
  const guides=guidesForWeek(n);
  if(guides.length) return guides.every(guide=>coveredCount(guide,state(n))===guide.topics.length);
  if(slideCourses[n]) return studySlides(n).every(s=>state(n).slideDone?.[s.id]);
  return !!chapters[n]?.every(c=>state(n).done[c.id]);
}
function totalTime(n) {
  return Object.values(state(n).time).reduce((a,b)=>a+b,0);
}
function duration(ms = 0) {
  const s = Math.floor(ms/1000);
  return [Math.floor(s/3600),Math.floor(s/60)%60,s%60].map(v=>String(v).padStart(2,"0")).join(":");
}
function pad(n) { return String(n).padStart(2,"0"); }
function escapeHtml(value) {
  return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));
}
function chineseTranslation(content,tag="div",className="") {
  return `<${tag} class="zh-help ${className}" lang="zh-CN" tabindex="0">${content}</${tag}>`;
}
function nowDate() {
  const parts=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Kuala_Lumpur",year:"numeric",month:"numeric",day:"numeric"}).formatToParts();
  const values=Object.fromEntries(parts.map(p=>[p.type,+p.value]));
  return Date.UTC(values.year,values.month-1,values.day);
}
function dashboard() {
  const count=Array.from({length:courseWeeks},(_,i)=>i+1).filter(complete).length;
  $("week-count").textContent=count;
  $("progress-ring").style.setProperty("--value",count/courseWeeks*100+"%");
  const remaining=(midtermDate-nowDate())/dayMs;
  $("exam-days").textContent=remaining<0?"已结束":remaining;
  $("exam-days").style.fontSize=remaining<0?"28px":"";
  $("exam-unit").textContent=remaining<0?"":remaining===0?" · 今天":" 天";
  $("exam-ring").style.setProperty("--value",Math.max(0,Math.min(1,1-remaining*dayMs/countdownWindow))*100+"%");
  $("week-grid").innerHTML=Array.from({length:courseWeeks},(_,i)=>{
    const n=i+1, status=complete(n)?"已完成":chapters[n]?"已收录":n===currentTeachingWeek?"当前周":n===midtermWeek?"期中考试":"待收录";
    return `<button type="button" class="week-tab ${n===currentTeachingWeek?"is-current":""} ${complete(n)?"is-done":""}" data-week="${n}" ${n===week && !examActive()?'aria-current="true"':""}><strong>W${pad(n)}</strong><span>${status}</span></button>`;
  }).join("");
}
function stats() {
  const last=state().attempts.at(-1);
  return `<dl class="week-stats"><div><dt class="label">课程学习时长 / STUDY</dt><dd id="study-time">${duration(totalTime(week))}</dd></div><div><dt class="label">累计答题时长 / PRACTICE</dt><dd id="quiz-time">${duration(state().quizMs)}</dd></div><div><dt class="label">最近习题总分 / SCORE</dt><dd>${last?`${last.score} / ${last.order.length}`:"—"}</dd></div></dl>`;
}
function render(scrollTarget) {
  const tocScroll=document.querySelector(".slide-toc")?.scrollTop ?? 0;
  dashboard();
  const inExam=examActive();
  document.body.classList.toggle("exam-focus",inExam);
  document.body.classList.toggle("centre-focus", mode==="centre" && !inExam);
  updateCourseTabs(inExam);
  if(inExam){
    $("workspace").innerHTML=examPage();
    if(scrollTarget){const target=$(scrollTarget);target?.focus({preventScroll:true});target?.scrollIntoView({block:"start"});}
    tickAt=performance.now();
    return;
  }
  if (mode==="centre") {
    $("workspace").innerHTML=renderCentreLesson();
    const target=$(scrollTarget);
    target?.focus({preventScroll:true});
    target?.scrollIntoView({block:"start"});
    tickAt=performance.now();
    return;
  }
  const list=chapters[week];
  const isMidterm=week===midtermWeek;
  const [zh,en]=titles[week]??(isMidterm?["期中考试","Midterm examination"]:week<midtermWeek?["定量分析","Quantitative analysis"]:["定性分析","Qualitative analysis"]);
  const guides=guidesForWeek(week);
  const status=guides.length ? `${guides.filter(guide=>coveredCount(guide,state())===guide.topics.length).length} / ${guides.length} guided lessons covered` : slideCourses[week]?`${studySlides().filter(s=>state().slideDone?.[s.id]).length} / ${studySlides().length} teaching pages read`:list?`${list.filter(c=>state().done[c.id]).length} / ${list.length} 章节完成`:isMidterm?"2026.11.27 · FRI":"待补讲义";
  const body=list?(mode==="quiz"?renderQuiz():mode==="results"?renderResults():renderStudy()):`<div class="empty"><h3>${zh}</h3><p>${week===5?"本周是当前教学周。待收到 Week 5 讲义后补充课程和测验。":isMidterm?"期中考试安排为 2026 年 11 月 27 日（周五）。期中假期为 11 月 30 日至 12 月 6 日。":"本周课程和测验将在收到讲义后补充。"}</p></div>`;
  $("workspace").innerHTML=`<section aria-labelledby="week-heading"><header class="week-title"><div><p class="eyebrow">COURSE MODULE / WEEK ${pad(week)}</p><h2 id="week-heading" lang="en">${en}<small>${chineseTranslation(escapeHtml(zh),"span")}</small></h2></div><span class="tag">${status}</span></header><div class="week-body">${list?stats():""}${body}</div></section>`;
  const toc=document.querySelector(".slide-toc");
  if(toc) toc.scrollTop=tocScroll;
  if(scrollTarget) {
    const target=$(scrollTarget);
    target?.focus({preventScroll:true});
    target?.scrollIntoView({block:"start"});
  }
  tickAt=performance.now();
}
function renderDefinitions(chapter) {
  const entries=({1:week1Definitions,2:week2Definitions,5:week5Definitions})[week]?.[chapter.id];
  if(!entries) return "";
  const rows=entries.map(([termZh,termEn,defZh,defEn])=>`<div class="definition-row">
    <dl lang="en"><dt>${escapeHtml(termEn)}</dt><dd>${escapeHtml(defEn)}</dd></dl>
    ${chineseTranslation(`<dl><dt>${escapeHtml(termZh)}</dt><dd>${escapeHtml(defZh)}</dd></dl>`)}
  </div>`).join("");
  return `<section class="definitions" aria-labelledby="definitions-heading"><h4 id="definitions-heading" lang="en">Key definitions</h4>${rows}</section>`;
}
function renderStudy() {
  if(guidesForWeek(week).length && !centreRoute().has("source")) return centreLessonEntry();
  if(slideCourses[week]) return renderSlideStudy();
  const list=chapters[week], record=state(), chapter=list[topic], finished=complete(week);
  const toc=list.map((c,i)=>`<button class="topic" type="button" data-topic="${i}" ${i===topic?'aria-current="step"':""}><span class="num">${record.done[c.id]?"✓":pad(i+1)}</span><span lang="en">${c.en}</span><time id="time-${c.id}">${duration(record.time[c.id])}</time></button>`).join("");
  const pairs=chapter.pairs.map(([zh,en])=>`<p lang="en">${escapeHtml(en)}</p>${chineseTranslation(escapeHtml(zh),"p")}`).join("");
  const sources=chapter.id==="alpha"?' · <a href="https://www.amstat.org/asa/files/pdfs/p-valuestatement.pdf" target="_blank" rel="noopener">ASA p 值说明</a>':["skew","kurtosis"].includes(chapter.id)?' · <a href="https://itl.nist.gov/div898/handbook/eda/section3/eda35b.htm" target="_blank" rel="noopener">NIST 偏度与峰度</a>':"";
  const guide=teaching[chapter.id];
  const notes=(referenceNotes[chapter.id]??[]).map(([zh,en,textZh,textEn])=>`<div class="reference-note"><h5 lang="en">${escapeHtml(en)}</h5>${chineseTranslation(escapeHtml(zh),"p")}<div class="bilingual"><p lang="en">${escapeHtml(textEn)}</p>${chineseTranslation(escapeHtml(textZh),"p")}</div></div>`).join("");
  return `<div class="lesson-layout"><aside class="toc" aria-label="Lesson contents"><span class="label">CONTENTS</span>${toc}</aside><article class="lesson" id="lesson" tabindex="-1">
    <div class="lesson-top"><div><p class="eyebrow">LESSON ${pad(topic+1)} / ${pad(list.length)} · PDF PP. ${chapter.pages}</p><h3 lang="en">${chapter.en}<small>${chineseTranslation(escapeHtml(chapter.zh),"span")}</small></h3></div><span class="timer">◷ <span id="page-time">${duration(record.time[chapter.id])}</span></span></div>
    <p class="reading-hint" lang="en">Read the English first. Hover over a grey block for Chinese, then move away to hide it. On touch screens, press and hold. Keyboard users can focus a block to reveal it.</p>
    <section class="beginner-intro"><h4 lang="en">Start with the idea</h4><p lang="en">${escapeHtml(guide.en)}</p>${chineseTranslation(escapeHtml(guide.zh),"p")}</section>
    ${figure(chapter)}
    <section class="how-to"><h4 lang="en">How to solve the question</h4><p lang="en">${escapeHtml(guide.howEn)}</p>${chineseTranslation(escapeHtml(guide.howZh),"p")}</section>
    ${renderSlideWorkedExamples(chapter)}
    ${notes?`<details class="reference-reading"><summary lang="en">Reading results and avoiding common mistakes</summary><p class="reference-credit" lang="en">Adapted from your reference images and checked for statistical accuracy.</p>${notes}<p class="reference-credit"><a href="https://online.stat.psu.edu/stat200/Lesson12" target="_blank" rel="noopener">Correlation and regression</a> · <a href="https://online.stat.psu.edu/stat462/node/131/" target="_blank" rel="noopener">Multiple regression and R²</a></p></details>`:""}
    <details class="formal-lesson"><summary lang="en">Definitions, formulas and lecture notes</summary>${renderDefinitions(chapter)}<div class="bilingual"><span class="label" lang="en">ENGLISH</span><span class="label">中文辅助</span>${pairs}</div></details>
    <div class="pager"><button class="soft" data-action="back" ${topic===0?"disabled":""}>← 上一节</button><button class="primary" data-action="finish">${topic===list.length-1?(finished?"返回课程目录":"标记读完 · 完成本节"):"标记读完 · 下一节 →"}</button></div>
    </article></div>
    <div class="source-note">内容依据 Week ${week} PDF 的标注页码。${sources}</div>`;
}
function allQuestions() {
  return Object.fromEntries(chapters[week].flatMap(c=>c.questions.map(q=>[q.id,{...q,chapter:c.en,chapterId:c.id}])));
}
function shuffle(list) {
  const copy=[...list];
  for(let i=copy.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [copy[i],copy[j]]=[copy[j],copy[i]];
  }
  return copy;
}
function selectWeeklyQuestions(list) {
  if(week===1) return sampleWeekOneQuestions(list);
  const pools=shuffle(list).map(chapter=>shuffle(chapter.questions));
  const selected=[];
  // Take one question per topic each round so every topic is represented.
  while(selected.length<weeklyPracticeSize && pools.some(pool=>pool.length)) {
    for(const pool of pools) {
      if(selected.length===weeklyPracticeSize) break;
      if(pool.length) selected.push(pool.pop());
    }
  }
  return shuffle(selected);
}
function start() {
  if(!chapters[week]?.length) return;
  const record=state();
  if(!record.draft) {
    const selected=selectWeeklyQuestions(chapters[week]);
    record.draft={created:Date.now(),order:selected.map(q=>q.id),options:Object.fromEntries(selected.filter(q=>q.options).map(q=>[q.id,shuffle(q.options)])),answers:{},index:0,ms:0};
    save();
  }
  mode="quiz";
  history.replaceState(null,"",examRoute("library",{week,run:"1"}));
  render("practice");
}
function renderQuiz() {
  const draft=state().draft, id=draft.order[draft.index], q=allQuestions()[id], value=draft.answers[id]??"";
  if(week===1 && draft.review) return renderWeeklyCheck(draft);
  const answered=draft.order.filter(key=>draft.answers[key]?.trim()).length;
  const inputs=q.options?`<div class="options">${draft.options[id].map((option,i)=>`<label><input type="radio" name="answer" value="${escapeHtml(option)}" ${value===option?"checked":""}><span>${String.fromCharCode(65+i)}. ${escapeHtml(option)}</span></label>`).join("")}</div>`:`<input class="short-answer" id="short-answer" name="answer" type="text" autocomplete="off" maxlength="140" aria-label="Your answer" value="${escapeHtml(value)}" placeholder="Type your answer">`;
  return `<section class="practice" id="practice" tabindex="-1" lang="en"><div class="lesson-top"><p class="eyebrow">WEEK ${pad(week)} / PRACTICE</p><span class="timer">◷ <span id="attempt-time">${duration(draft.ms)}</span></span></div><h3>Weekly practice</h3>
  <p class="label" id="question-count">QUESTION ${draft.index+1} / ${draft.order.length} · ${answered} ANSWERED</p><div class="practice-progress"><span id="question-progress" style="width:${answered/draft.order.length*100}%"></span></div>
  <p class="label">${q.chapter.toUpperCase()} · ${q.options?"MULTIPLE CHOICE":"SHORT ANSWER"} · 1 POINT</p>
  <form id="question-form"><fieldset><legend>${escapeHtml(q.prompt)}</legend>${weeklyQuestionFigure(q)}${inputs}</fieldset></form>
  <p class="feedback" id="feedback" role="status"></p>
  <div class="quiz-actions"><button class="soft" data-action="study">Save &amp; return</button><div class="tools"><button class="soft" data-action="prev-q" ${draft.index===0?"disabled":""}>← Previous</button>${draft.index<draft.order.length-1?'<button class="primary" data-action="next-q">Next →</button>':week===1?'<button class="primary" data-weekly-check>Review answers</button>':'<button class="primary" data-action="submit">Submit practice</button>'}</div></div></section>`;
}
function canonical(s) { return s.trim().toLowerCase().replace(/−/g,"-").replace(/\s+/g," ").replace(/[.!?]$/,""); }
function correct(q,value,acceptFractions=week===1) {
  if(!value?.trim()) return false;
  if(q.options) return q.answer===value;
  const input=canonical(value), target=canonical(q.answer);
  const decimal=/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;
  if(decimal.test(target)) {
    if(!acceptFractions) return decimal.test(input) && Math.abs(Number(input)-Number(target))<1e-9;
    let number=centreAssessNumber(input);
    if(input.endsWith("%")) {
      const pct=centreAssessNumber(input.slice(0,-1));
      if(q.id==="frequencies-9") number=pct;
      if(q.id==="frequencies-4") number=pct/100;
    }
    return Math.abs(number-Number(target))<1e-9;
  }
  return target.split("/").includes(input);
}
function submit() {
  const record=state(), draft=record.draft, bank=allQuestions();
  const missing=draft.order.findIndex(id=>!draft.answers[id]?.trim());
  if(missing!==-1 && !(week===1 && draft.review)) {
    draft.index=missing; save(); render("practice");
    $("feedback").textContent="Please answer this question before submitting.";
    return;
  }
  const score=draft.order.filter(id=>correct(bank[id],draft.answers[id])).length;
  record.attempts.push({score,ms:draft.ms,answers:draft.answers,order:draft.order,date:new Date().toISOString(),...(week===1?{gradingVersion:2}:{})});
  record.draft=null;
  resultIndex=record.attempts.length-1;
  history.replaceState(null,"",examRoute("library",{week,score:resultIndex}));
  mode="results"; save(); render("practice");
}
function renderResults() {
  const attempts=state().attempts, result=attempts[resultIndex], bank=allQuestions();
  const markedCorrect=q=>correct(q,result.answers[q.id],week===1 && result.gradingVersion===2);
  const scores=chapters[week].map(c=>{
    const attempted=c.questions.filter(q=>result.order.includes(q.id));
    if(!attempted.length) return "";
    const n=attempted.filter(markedCorrect).length;
    return `<li>${escapeHtml(c.en)} <strong>${n} / ${attempted.length}</strong></li>`;
  }).join("");
  const missed=result.order.filter(id=>!markedCorrect(bank[id]));
  const solutions=ids=>ids.map(id=>{
    const q=bank[id], value=result.answers[id], expected=q.answer.split(q.options?"\0":"/").join(" / ");
    return `<li><strong>${escapeHtml(q.prompt)}</strong><small>${markedCorrect(q)?"Correct":"Incorrect"} · Your answer: ${escapeHtml(value||"Unanswered")}</small><div>Answer: ${escapeHtml(expected)}</div>${q.explanation?`<small>${escapeHtml(q.explanation)}</small>`:""}${week===1 && !markedCorrect(q)?weeklyRemediation(q):""}</li>`;
  }).join("");
  return `<section class="practice" id="practice" tabindex="-1" lang="en"><p class="eyebrow">WEEK ${pad(week)} / RESULTS</p><h3>${result.score} / ${result.order.length} points · ${Math.round(result.score/result.order.length*100)}%</h3><p>Attempt time ${duration(result.ms)} · Week study time ${duration(totalTime(week))}</p>
  <label for="attempt-select">Attempt </label><select id="attempt-select">${attempts.map((a,i)=>`<option value="${i}" ${i===resultIndex?"selected":""}>${i+1} · ${a.score}/${a.order.length}</option>`).join("")}</select>
  ${week===1 && missed.length?`<details open><summary>Questions to revisit (${missed.length})</summary><ol class="result-list">${solutions(missed)}</ol></details>`:""}
  <details ${week===1?"":"open"}><summary>Score by topic</summary><ul>${scores}</ul></details><details><summary>${week===1?"Correct answers":"Answer key and your responses"}</summary><ol class="result-list">${solutions(week===1?result.order.filter(id=>!missed.includes(id)):result.order)}</ol></details>
  <div class="quiz-actions"><button class="soft" data-action="study">Back to practice library</button><button class="primary" data-action="start">${state().draft?"Resume practice":"New practice"}</button></div></section>`;
}

function checkpoint() {
  const next=performance.now(), ms=next-tickAt;
  tickAt=next;
  if(!clockRunning || ms<=0 || ms>5000 || !chapters[week] || mode==="results") return;
  if(mode==="exam"){
    const tab=examTab();
    if(tab==="mock" || tab==="teacher"){
      refresh();const r=examState();
      r.time[tab]=(r.time[tab]||0)+ms;save();
      if($("exam-time")) $("exam-time").textContent=duration(r.time[tab]);
    }
    return;
  }
  if(mode==="study" && guidesForWeek(week).length && !centreRoute().has("source")) return;
  refresh();
  if (mode==="centre") {
    const record=state();
    if (centrePane==="practice") {
      if (!centreAssessIsAnswering()) return;
      centreAssessTiming(ms);
      record.quizMs+=ms;
    } else {
      const id=guideTimeKey(centrePane);
      record.time[id]=(record.time[id]||0)+ms;
      if($("centre-study-clock")) $("centre-study-clock").textContent=duration(record.time[id]);
    }
    save();
    return;
  }
  const record=state(), chapter=slideCourses[week]?currentSlide():chapters[week][topic];
  if(mode==="study") record.time[chapter.id]=(record.time[chapter.id]||0)+ms;
  if(mode==="quiz" && record.draft){record.draft.ms+=ms;record.quizMs+=ms;}
  save();
  if($("study-time")) $("study-time").textContent=duration(totalTime(week));
  if($("quiz-time")) $("quiz-time").textContent=duration(record.quizMs);
  if($("page-time")) $("page-time").textContent=duration(record.time[chapter.id]);
  if($("time-"+chapter.id)) $("time-"+chapter.id).textContent=duration(record.time[chapter.id]);
  if($("attempt-time") && record.draft) $("attempt-time").textContent=duration(record.draft.ms);
}
function clockVisibility() {
  checkpoint();
  clockRunning=document.visibilityState==="visible" && document.hasFocus();
}
function setTopic(index) {
  topic=index;
  state().topic=index;
  save(); render("lesson");
}
function setWeek(n) {
  if(slideCourses[n]) activeSlides[n]=null;
  week=n;mode="study";topic=Math.min(state().topic, (chapters[week]?.length??1)-1);
  if(examActive()){enterExam();return;}
  const route=centreRoute();
  if (n===1) {
    if(route.get("practice")==="1" && state(1).draft){start();return;}
    const score=Number(route.get("score"));
    if(route.has("score") && Number.isInteger(score) && state(1).attempts[score]) {
      history.replaceState(null,"",examRoute("library",{week:1,score}));enterExam();return;
    }
  }
  const guide=findGuide(route.get("lesson"),n);
  if(guide){centreSetPane(route.get("topic"),false,guide);return;}
  if(slideCourses[n] && route.has("source")){
    const source=Number(route.get("source"));
    setSlide(studySlides().some(slide=>slide.page===source)?source-1:currentSlide().page-1);
    return;
  }
  render();
}
function hashWeek() {
  const n=Number(centreRoute().get("week"));
  return Number.isInteger(n)&&n>=1&&n<=courseWeeks?n:1;
}
function csvField(value) { return '"'+String(value??"").replaceAll('"','""')+'"'; }
function exportRecords() {
  checkpoint();
  const rows=[["Week","Record","Topic / attempt","Status","Study time","Answer time","Score","Maximum","Submitted (UTC)"]];
  for(let n=1;n<=courseWeeks;n++){
    const record=state(n),last=record.attempts.at(-1);
    rows.push([n,"Week summary","",complete(n)?"Completed":chapters[n]?"Available":n===midtermWeek?"Midterm examination":"Materials pending",duration(totalTime(n)),duration(record.quizMs),last?.score,last?.order.length,""]);
    chapters[n]?.forEach(c=>rows.push([n,"Lesson",c.en,record.done[c.id]?"Completed":"Open",duration(record.time[c.id])]));
    studySlides(n).forEach(s=>rows.push([n,"PDF page",`${s.page}: ${s.en}`,record.slideDone?.[s.id]?"Completed":"Open",duration(record.time[s.id])]));
    record.attempts.forEach((a,i)=>rows.push([n,"Practice",i+1,"Submitted","",duration(a.ms),a.score,a.order.length,a.date]));
    for(const guide of guidesForWeek(n)) {
      for(const t of guide.topics) rows.push([n,guide.title,t.title,topicCovered(t,guide,record)?"Completed":"Open",duration(record.time[guideTimeKey(t.id)])]);
      savedGuide(record,guide)?.assessment?.attempts.forEach((a,i)=>rows.push([n,guide.title+" · Lesson check",i+1,"Submitted","",duration(a.ms),a.score,a.order.length,a.date]));
    }
  }
  if(state(1).revision){
    const m=examScore("mock"),t=examScore("teacher");
    rows.push(["1–6","Midterm mock MCQ","","Current responses","",duration(m.ms),m.mc,m.mcMax,""],
      ["1–6","Midterm mock written","","Self-marked","","",m.written,m.writtenMax,""],
      ["1–6","Teacher revision","","Answered "+t.answered+" of "+t.total,"",duration(t.ms),"","",""]);
  }
  const url=URL.createObjectURL(new Blob(["\ufeff"+rows.map(r=>Array.from({length:9},(_,i)=>csvField(r[i])).join(",")).join("\r\n")],{type:"text/csv;charset=utf-8"}));
  const a=document.createElement("a");
  a.href=url;a.download="POX7003-study-records.csv";a.click();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
}
$("export").addEventListener("click",exportRecords);
$("course-tabs").addEventListener("click",event=>{
  const link=event.target.closest("a");
  if(!link || link.hasAttribute("aria-current") || event.defaultPrevented ||
    event.button!==0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  const atStickyBar=$("course-tabs").getBoundingClientRect().top<=0;
  rememberReadingPosition();
  checkpoint();refresh();
  history.pushState(null,"",link.hash);
  setWeek(hashWeek());
  if(!restoreReadingPosition() && atStickyBar) window.scrollTo(0,0);
  $(link.id).focus({preventScroll:true});
});
$("week-grid").addEventListener("click",event=>{
  const button=event.target.closest("[data-week]");
  if(!button)return;
  const n=+button.dataset.week;
  if(n===week && mode==="study" && !centreRoute().has("source")) return;
  checkpoint();refresh();
  history.replaceState(null,"","#week="+n);
  setWeek(n);
  $("week-grid").querySelector("[aria-current]")?.focus({preventScroll:true});
});
$("workspace").addEventListener("click",event=>{
  const button=event.target.closest("button");
  if(!button)return;
  checkpoint();refresh();
  if(examClick(button) || workedChoiceClick(button))return;
  if(centreClick(button))return;
  if(week===1 && weeklyReviewClick(button))return;
  if(button.dataset.topic!==undefined){setTopic(+button.dataset.topic);return;}
  if(button.dataset.slide!==undefined){setSlide(+button.dataset.slide);return;}
  const record=state();
  const draft=record.draft;
  switch(button.dataset.action){
    case "slide-back": {
      const slides=studySlides(),previous=slides[slides.indexOf(currentSlide())-1];
      if(previous) setSlide(previous.page-1);
      break;
    }
    case "slide-finish": {
      const r=slideRecord(),current=currentSlide(),slides=studySlides();
      r.slideDone[current.id]=true;
      const next=slides[slides.indexOf(current)+1];
      const unread=slides.find(s=>!r.slideDone[s.id]);
      if(next) setSlide(next.page-1);
      else if(unread) setSlide(unread.page-1);
      else {save();render("course-switch-exam");}
      break;
    }
    case "back": setTopic(topic-1);break;
    case "finish": {
      record.done[chapters[week][topic].id]=true;
      const next=chapters[week].findIndex((c,i)=>i>topic&&!record.done[c.id]);
      const unfinished=chapters[week].findIndex(c=>!record.done[c.id]);
      if(topic<chapters[week].length-1) setTopic(topic+1);
      else if(next>=0||unfinished>=0) setTopic(next>=0?next:unfinished);
      else {save();render("course-switch-exam");}
      break;
    }
    case "start": start();break;
    case "results": mode="results";resultIndex=record.attempts.length-1;history.replaceState(null,"",examRoute("library",{week,score:resultIndex}));render("practice");break;
    case "study":
      if(examActive()){location.hash=examRoute("library");break;}
      mode="study";
      if(week===1){history.replaceState(null,"","#week=1&view=lessons");render("week-guide");}
      else render("lesson");
      break;
    case "prev-q": if(draft){draft.index--;save();render("practice");}break;
    case "next-q": if(draft){draft.index++;save();render("practice");}break;
    case "submit": if(draft)submit();break;
  }
});
$("workspace").addEventListener("input",event=>{
  const input=event.target;
  if(examInput(input) || workedChoiceInput(input))return;
  if(mode==="centre"){refresh();centreInput(input);return;}
  if(input.name!=="answer" || mode!=="quiz")return;
  refresh();
  const draft=state().draft;
  if(!draft)return;
  draft.answers[draft.order[draft.index]]=input.value;
  save();
  const answered=draft.order.filter(id=>draft.answers[id]?.trim()).length;
  $("question-count").textContent=`QUESTION ${draft.index+1} / ${draft.order.length} · ${answered} ANSWERED`;
  $("question-progress").style.width=answered/draft.order.length*100+"%";
  $("feedback").textContent="";
});
$("workspace").addEventListener("change",event=>{
  if(event.target.id==="slide-select") {
    const selected=Number(event.target.value);
    checkpoint();refresh();setSlide(selected);
    $("slide-select")?.focus({preventScroll:true});
  }
  if(event.target.id==="attempt-select"){resultIndex=+event.target.value;history.replaceState(null,"",examRoute("library",{week,score:resultIndex}));render("practice");}
});
$("workspace").addEventListener("submit",event=>event.preventDefault());
document.addEventListener("visibilitychange",clockVisibility);
window.addEventListener("focus",clockVisibility);
window.addEventListener("blur",clockVisibility);
window.addEventListener("pagehide",()=>{rememberReadingPosition();checkpoint();clockRunning=false;});
window.addEventListener("pageshow",clockVisibility);
window.addEventListener("hashchange",()=>{checkpoint();refresh();setWeek(hashWeek());});
setInterval(checkpoint,500);
setInterval(dashboard,60000);
if(!location.hash && tabLocations.lessons!=="#week=1&view=lessons"){
  history.replaceState(null,"",tabLocations.lessons);
}
setWeek(hashWeek());
restoreReadingPosition();
document.addEventListener("click",event=>{
  const zoom=event.target.closest("[data-zoom]");
  if(!zoom)return;
  $("large-diagram").innerHTML=zoom.closest(".figure").querySelector("svg, img").outerHTML;
  $("diagram-scale").value=100;
  $("diagram-scale-value").textContent="100%";
  $("large-diagram").scrollTop=0;
  $("large-diagram").scrollLeft=0;
  $("diagram-viewer").showModal();
});
$("close-diagram").addEventListener("click",()=>$("diagram-viewer").close());
$("diagram-scale").addEventListener("input",event=>{
  const scale=Number(event.target.value);
  $("large-diagram").firstElementChild.style.width=scale+"%";
  $("diagram-scale-value").textContent=scale+"%";
});
document.addEventListener("pointerdown",event=>{
  if(event.pointerType!=="touch" && event.pointerType!=="pen")return;
  event.target.closest(".zh-help")?.classList.add("is-revealed");
});
function hideTouchTranslations() {
  document.querySelectorAll(".zh-help.is-revealed").forEach(block=>block.classList.remove("is-revealed"));
}
document.addEventListener("pointerup",hideTouchTranslations);
document.addEventListener("pointercancel",hideTouchTranslations);
window.addEventListener("blur",hideTouchTranslations);

