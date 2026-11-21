/* PDF page numbers stay stable; each week has independent progress. */
const activeSlides={};
function studySlides(n=week){return slideCourses[n]?.slides??[];}
function slideRecord(n=week){
  const record=state(n);
  record.slide ??= studySlides(n)[0]?.page-1 || 0;
  record.slideDone ??= {};
  return record;
}
function currentSlide(){
  const slides=studySlides(),saved=activeSlides[week]??slideRecord().slide;
  const selected=slides.find(s=>s.page-1===saved)??slides[0];
  activeSlides[week]=selected.page-1;
  return selected;
}
function setSlide(index){
  if(!studySlides().some(s=>s.page-1===index))return;
  activeSlides[week]=index;
  slideRecord().slide=index;
  const route=centreRoute();
  if(route.has("source") && Number(route.get("source"))!==index+1) {
    route.set("source",String(index+1));
    history.replaceState(null,"","#"+route);
  }
  save();render("lesson");
}
function renderSlideStudy(){
  const slides=studySlides(),record=slideRecord(),current=currentSlide(),position=slides.indexOf(current);
  const pair=(en,zh)=>`<p lang="en">${escapeHtml(en)}</p>${chineseTranslation(escapeHtml(zh),"p")}`;
  const toc=slides.map(s=>`<button class="topic" type="button" data-slide="${s.page-1}" ${s===current?'aria-current="step"':""}><span class="num">${record.slideDone[s.id]?"✓":pad(s.page)}</span><span lang="en">${escapeHtml(s.en)}</span><time id="time-${s.id}">${duration(record.time[s.id])}</time></button>`).join("");
  const options=slides.map(s=>`<option value="${s.page-1}" ${s===current?"selected":""}>PDF ${pad(s.page)} · ${escapeHtml(s.en)}</option>`).join("");
  const examples=renderSlideWorkedExamples(chapters[week].find(chapter=>chapter.id===current.topic));
  const route=centreRoute(), from=route.get("from"), origin=findGuide(route.get("guide")||"centre",week);
  const returnToGuide=origin && ((from==="practice" && origin.bank) || origin.topics.some(t=>t.id===from));
  const supplementary=week===2&&current.topic?chapters[2].find(c=>c.id===current.topic):null;
  const diagram=supplementary?`<section class="concept-visual"><h4 lang="en">Visual explanation</h4><p class="label" lang="en">ADDED TEACHING DIAGRAM</p>${figure(supplementary)}</section>`:"";
  return `<div class="lesson-layout"><aside class="toc slide-toc" aria-label="Week ${week} PDF pages"><span class="label">${slides.length} TEACHING PAGES · ORIGINAL PDF ORDER</span>${toc}</aside><article class="lesson slide-lesson" id="lesson" tabindex="-1" data-reading-anchor>
    <div class="lesson-top"><div><p class="eyebrow">WEEK ${pad(week)} · LESSON ${pad(position+1)} / ${slides.length} · PDF PAGE ${pad(current.page)}</p><h3 lang="en">${escapeHtml(current.en)}<small>${chineseTranslation(escapeHtml(current.zh),"span")}</small></h3></div><span class="timer">◷ <span id="page-time">${duration(record.time[current.id])}</span></span></div>
    <div class="page-picker"><label for="slide-select" lang="en">Go to page</label><select id="slide-select" aria-label="Go to Week ${week} PDF page">${options}</select></div>
    ${guidesForWeek(week).length ? `<div class="guide-source-nav"><button class="soft" data-centre-exit>All Week ${week} lessons</button>${returnToGuide?`<button class="soft" data-guide-open="${origin.id}" data-centre-topic="${escapeHtml(from)}">Return to guided lesson</button>`:""}</div>` : ""}
    <p class="reading-hint" lang="en">Read the English first. Hover over grey blocks for Chinese; move away to hide it. On touch screens, press and hold. Keyboard users can focus each block.</p>
    ${week===1 && route.has("attempt") && state(1).attempts[Number(route.get("attempt"))] ? `<button class="soft" data-weekly-score="${Number(route.get("attempt"))}">Return to weekly score</button>`:""}
    ${current.sourceGap?`<aside class="source-gap" role="note">${pair("Source note: the supplied PDF has an unavailable image on this page. Only readable original text is transcribed; missing questions and answers are not reconstructed.","来源提示：所提供PDF本页存在缺失图片。这里只转录可读取原文，不虚构缺失题目或答案。")}</aside>`:""}
    <figure class="figure original-slide clarified-slide"><img src="${current.clear}" alt="Clear reading view of Week ${week} PDF page ${current.page}" decoding="async"><figcaption lang="en">${week===1&&[24,25].includes(current.page)?"Original chart with clear labels":"Clear reading view"} · PDF page ${current.page}<button class="soft" type="button" data-zoom>Enlarge image ↗</button></figcaption></figure>
    <details class="original-reference" ${current.showOriginal?"open":""}><summary lang="en">${current.showOriginal?"Original graph / output from the teacher slide":"Compare with the original teacher slide"}</summary><figure class="figure original-slide"><img src="${current.image}" width="3100" alt="Original teacher slide, Week ${week} PDF page ${current.page}" decoding="async" loading="lazy"><figcaption lang="en">Original slide · PDF page ${current.page}<button class="soft" type="button" data-zoom>Enlarge original ↗</button></figcaption></figure></details>
    <section class="slide-transcript" id="pdf-transcript" data-reading-anchor><h4 lang="en">Slide content · item-by-item translation</h4><p class="label" lang="en">ORIGINAL WORDING / CHART LABELS → CHINESE TRANSLATION</p>${current.pairs.map(([en,zh],i)=>`<div class="slide-item"><span class="item-number">${pad(i+1)}</span><div>${pair(en,zh)}</div></div>`).join("")}</section>
    <section class="beginner-intro slide-walkthrough" id="pdf-walkthrough" data-reading-anchor><h4 lang="en">Step-by-step explanation</h4><p class="label" lang="en">ADDED TEACHING · NOT ORIGINAL SLIDE TEXT</p>${pair(...current.walk)}</section>
    ${diagram}${examples}
    <div class="pager"><button class="soft" data-action="slide-back" ${position===0?"disabled":""}>← Previous page</button><button class="primary" data-action="slide-finish">${position===slides.length-1?`Mark as read · Finish Week ${week} ↓`:"Mark as read · Next page →"}</button></div>
    </article></div>
    <p class="source-note" lang="en">Source: teacher-provided POX 7003 Week ${week} PDF. Teaching pages follow the original order; cover-only, administrative and closing divider pages are omitted. Added explanations and worked examples are labelled separately.</p>`;
}
