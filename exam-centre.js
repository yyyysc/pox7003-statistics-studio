const examTabs = {mock:"Mock exam · 模拟卷",teacher:"Teacher’s revision · 老师原题",scope:"Exam topics · 考点核对",library:"Practice library · 原有题库"};
function examRoute(tab,context={}) {
  return "#"+new URLSearchParams({view:"exam",tab,...context});
}
function examActive() { return centreRoute().get("view")==="exam"; }
function examTab() {
  const value=centreRoute().get("tab");
  return Object.hasOwn(examTabs,value)?value:"mock";
}
function examState(){
  return state(1).revision ??= {answers:{},self:{},time:{}};
}
function examPaperItems(tab) {return tab==="teacher"?revisionOriginal:revisionMock;}
function examScore(paper,record=examState()){
  const items=examPaperItems(paper), mc=items.filter(q=>q.options.length), short=items.filter(q=>!q.options.length);
  const answered=items.filter(q=>String(record.answers[q.id]??"").trim().length).length;
  return {answered,total:items.length,mc:mc.filter(q=>q.correct.includes(record.answers[q.id])).length,mcMax:mc.length,
    written:short.filter(q=>record.self[q.id]===true).length,writtenMax:short.length,ms:record.time[paper]||0};
}
function validExamState(record) {
  const map=v=>v!==null && typeof v==="object" && !Array.isArray(v);
  if(!map(record)||![record.answers,record.self,record.time].every(map)) return false;
  const items=new Map([...revisionMock,...revisionOriginal].map(q=>[q.id,q]));
  return Object.entries(record.answers).every(([id,v])=>{const q=items.get(id);return q && (q.options.length?Number.isInteger(v)&&v>=0&&v<q.options.length:typeof v==="string"&&v.length<=4000);})
    && Object.entries(record.self).every(([id,v])=>items.get(id)?.options.length===0 && typeof v==="boolean")
    && Object.entries(record.time).every(([id,v])=>["mock","teacher"].includes(id)&&Number.isFinite(v)&&v>=0&&v<=1e12);
}
function examProgress(tab){
  const {answered,total}=examScore(tab);
  return `${answered} / ${total} answered`;
}
function examStatus(tab){
  const s=examScore(tab);
  return `${s.mc} / ${s.mcMax} correct (MCQ) · ${s.written} / ${s.writtenMax} self-marked correct (written)`;
}
function examQuestion(q,n,tab,record) {
  const value=record.answers[q.id],opts=q.options;
  const controls=opts.length?`<div class="exam-options">${opts.map((opt,i)=>`<label><input type="radio" name="exam-${q.id}" data-exam-answer="${q.id}" value="${i}" ${value===i?"checked":""}><span><b>${String.fromCharCode(65+i)}.</b> ${escapeHtml(opt)}</span></label>`).join("")}</div>`:`<label class="exam-write">Your answer in English<textarea rows="3" data-exam-answer="${q.id}" maxlength="4000">${escapeHtml(value??"")}</textarea></label>`;
  const self=!opts.length && tab==="mock"?`<label class="exam-self"><input type="checkbox" data-exam-self="${q.id}" ${record.self[q.id]?"checked":""} ${value?.trim()?"":"disabled"}>My answer covers the model answer’s key points.</label>`:"";
  const mark=opts.length && q.correct.length===1 ? `<p class="exam-mark" data-exam-mark="${q.id}" aria-live="polite">${value===undefined?"":q.correct.includes(value)?"Your answer is correct.":"Revisit your choice."}</p>`:"";
  const keyLabel=tab==="mock" && opts.length ? String.fromCharCode(65+q.correct[0])+". " : "";
  return `<article class="exam-question" id="exam-item-${q.id}" data-reading-anchor><div class="exam-qhead"><span>Question ${n}</span><small>Week ${q.week}</small></div>
    <fieldset><legend lang="en">${escapeHtml(q.prompt)}</legend>${q.visual||""}${controls}</fieldset>
    <details class="exam-key"><summary><span class="exam-reveal">View answer and explanations / 查看答案与解析</span><span class="exam-fold">Hide answer and explanations / 收起答案与解析</span></summary><div class="exam-key-body"><p class="exam-key-answer" lang="en"><span lang="zh-CN">✅ 正确答案</span> · ${keyLabel}${escapeHtml(q.answer)}</p>
    <h5>【中文解析】</h5><p lang="zh-CN">${escapeHtml(q.zh)}</p><h5>【English Explanation 英文解析】</h5><p lang="en">${escapeHtml(q.en)}</p>${mark}${self}</div></details>
    <small class="exam-source">${escapeHtml(q.ref)}</small></article>`;
}
function examPaper(tab){
  const teacher=tab==="teacher",record=examState(),items=examPaperItems(tab);
  const paperFile=!teacher && ["https:","http:"].includes(location.protocol)
    ? '<a class="soft exam-download" href="./POX7003-midterm-practice.pdf" download>Download PDF / 下载带解析模拟卷</a>'
    : '<button class="soft" data-exam-print>Print with answers / 打印带解析版</button>';
  const groups=teacher?[["Revision questions",items]]:[["【单项选择题】 Single-choice questions",items.filter(q=>q.options.length)],["【简答题】 Short-answer questions",items.filter(q=>!q.options.length)]];
  return `<div class="exam-pagehead"><div><h3>${teacher?"Teacher’s revision questions":"Midterm mock exam"}</h3><p>${teacher?"老师的 10 道原题按 PDF 顺序排列。题目来自老师，答案和中英解析为核算后的参考解答。":"25 道单项选择题与 8 道英文简答题，覆盖 Week 1–6。选择题自动核对，简答题可对照要点自评。"}</p></div></div>
    <div class="exam-controls">${teacher?"":'<button class="soft" data-exam-jump="exam-group-2">Short answers / 直达简答</button><button class="soft" data-exam-jump="exam-memory">Quick recall / 速记</button>'}${paperFile}</div>
    <div class="exam-score"><p><span id="exam-progress">${examProgress(tab)}</span> · Time on paper / 本卷前台用时 <time id="exam-time">${duration(record.time[tab])}</time></p>
    ${teacher?"":`<details class="exam-score-disclosure"><summary>View score / 查看分数</summary><p id="exam-status">${examStatus(tab)}</p></details>`}</div>
    ${groups.map(([title,questions],i)=>`<section class="exam-group" id="exam-group-${i+1}" tabindex="-1" aria-label="${title}"><h4>${title} <small>${questions.length}</small></h4>${questions.map((q,i)=>examQuestion(q,i+1,tab,record)).join("")}</section>`).join("")}
    ${teacher?"":examMemory()}`;
}
function examMemory(){
  return `<section class="exam-memory" id="exam-memory" tabindex="-1"><h4>Quick recall · 一页速记</h4><ol>${revisionScope.map(g=>`<li><strong>Week ${g.week}</strong><span>${escapeHtml(g.memory)}</span></li>`).join("")}</ol></section>`;
}
function examScopePage(){
  return `<div class="exam-pagehead"><div><h3>Exam topics by week</h3><p>每一条标出讲义页码。Revision Q 表示老师的练习直接涉及该考点。十道练习提供了出题线索，PDF 未列完整考试蓝图。</p></div></div>
    ${revisionScope.map(g=>`<section class="exam-scope"><p class="exam-kicker">Week ${g.week}</p><h4>${escapeHtml(g.title)}</h4><ul>${g.items.map(t=>`<li><strong lang="en">${escapeHtml(t.en)}</strong><p>${escapeHtml(t.zh)}</p><small>${escapeHtml(t.ref)}</small></li>`).join("")}</ul><aside><b>提纲核对</b> ${escapeHtml(g.note)}</aside></section>`).join("")}${examMemory()}`;
}
function examLibrary(){
  const route=centreRoute(), guide=findGuide(route.get("guide")),check=route.get("check");
  let contents;
  if(mode==="quiz") contents=renderQuiz();
  else if(mode==="results") contents=renderResults();
  else if(guide&&mode==="centre") contents=`<h3>${escapeHtml(guide.title)}</h3>${renderCentreAssessment()}`;
  else if(guide && check){
    const t=guide.topics.find(t=>t.id===check);
    if(t) contents=`<h3>${escapeHtml(t.title)}</h3>${centreQuickCheck(t)}`;
  }
  if(contents) return `<a class="exam-back" href="${examRoute("library")}">Back to practice library / 返回题库</a>${contents}`;
  return `<div class="exam-pagehead"><div><h3>Practice library</h3><p>从这里进入原有周练、知识点检查和分节测验。之前的草稿、成绩和计时可继续使用。</p></div></div>
    <h4>Weekly practice · 30 questions per set</h4><div class="exam-library-list">${[1,2,3,4,5,6].map(n=>{const r=state(n);return `<div><span><small>Week ${n}</small><strong>${escapeHtml(titles[n][1])}</strong></span><span class="exam-library-actions">${r.attempts.length?`<a href="${examRoute("library",{week:n,score:r.attempts.length-1})}">Scores (${r.attempts.length})</a>`:""}<a class="soft" href="${examRoute("library",{week:n,run:"1"})}">${r.draft?"Resume":"Start"} practice</a></span></div>`;}).join("")}</div>
    <h4>Week 1 topic practice · 知识点练习</h4><div class="exam-library-list">${guidedModules.map(g=>`<div><span><strong>${escapeHtml(g.title)}</strong><span class="exam-topic-links">${g.topics.map(t=>`<a href="${examRoute("library",{guide:g.id,check:t.id})}">${escapeHtml(t.title)}</a>`).join("")}</span></span><a class="soft" href="${examRoute("library",{guide:g.id})}">8-question check</a></div>`).join("")}</div>`;
}
function examPage(){
  const tab=examTab();
  return `<section id="exam-centre" class="exam-centre" tabindex="-1" aria-label="Practice centre"><header class="exam-mast"><small>POX 7003 · WEEKS 1–6</small><h2>Practice centre <span>习题中心</span></h2></header>
    <nav class="exam-tabs" aria-label="Practice centre sections">${Object.entries(examTabs).map(([id,name])=>`<a href="${examRoute(id)}" ${tab===id?'aria-current="page"':""}>${name}</a>`).join("")}</nav>
    <div class="exam-body">${tab==="scope"?examScopePage():tab==="library"?examLibrary():examPaper(tab)}</div></section>`;
}
function enterExam(){
  const route=centreRoute();
  mode="exam";
  if(examTab()==="library"){
    if(route.get("run")==="1" && chapters[week]){start();return;}
    const score=Number(route.get("score"));
    if(route.has("score") && Number.isInteger(score) && state().attempts[score]){resultIndex=score;mode="results";}
    const guide=findGuide(route.get("guide"));
    if(guide){
      week=1;activeGuide=guide;
      const topic=guide.topics.find(t=>t.id===route.get("check"));
      if(topic){centrePane=topic.id;}
      else{centrePane="practice";mode="centre";}
    }
  }
  render(mode!=="exam" || route.has("check") ? "exam-centre" : undefined);
}
function examInput(input){
  if(!examActive() || !["mock","teacher"].includes(examTab()))return false;
  const id=input.dataset.examAnswer || input.dataset.examSelf;
  if(!id)return false;
  const q=examPaperItems(examTab()).find(q=>q.id===id);
  if(!q)return false;
  refresh();
  const r=examState();
  if(input.dataset.examSelf)r.self[id]=input.checked;
  else if(q.options.length){
    r.answers[id]=Number(input.value);
    const mark=input.closest("article").querySelector("[data-exam-mark]");
    if(mark)mark.textContent=q.correct.includes(r.answers[id])?"Your answer is correct.":"Revisit your choice.";
  } else {
    r.answers[id]=input.value;
    delete r.self[id];
    const box=input.closest("article").querySelector("[data-exam-self]");
    if(box){box.checked=false;box.disabled=!input.value.trim();}
  }
  save();
  $("exam-progress").textContent=examProgress(examTab());
  if($("exam-status")) $("exam-status").textContent=examStatus(examTab());
  return true;
}
function examClick(button){
  if(!examActive())return false;
  if(button.dataset.examJump){const target=$(button.dataset.examJump);target?.focus({preventScroll:true});target?.scrollIntoView({block:"start"});return true;}
  if(button.hasAttribute("data-exam-print")){
    const folded=[...document.querySelectorAll(".exam-key:not([open])")];folded.forEach(el=>el.open=true);
    window.addEventListener("afterprint",()=>folded.forEach(el=>el.open=false),{once:true});window.print();return true;
  }
  if(button.hasAttribute("data-centre-check")&&examTab()==="library"){
    centreState().answers[centrePane]=Number(button.dataset.centreCheck);save();render("centre-check");return true;
  }
  return false;
}
