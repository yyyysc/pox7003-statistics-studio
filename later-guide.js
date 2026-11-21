const guideVisualPages = {"correlation-measures":9,"pearson-formula":11,"correlation-design":14,anova:3,"anova-assumptions":7,"two-way-anova":15};

function laterGuideExamples(id,chapter) {
  if(additionalGuideExamples[id]) return additionalGuideExamples[id].map(([en,zh,answer,distractors,reason,reasonZh],index)=>({
    id:workedExampleKey(id,index), prompt:[en,zh], answer,
    options:workedExampleOptions(answer,distractors,id.length+index),
    explanation:[reason,reasonZh]
  }));
  return teaching[id].examples.map((item,index)=>({
    id:item.id, prompt:[slideWorkedPrompt(item),item.qzh], answer:item.answer,
    options:slideWorkedOptions(id,item,index,chapter.questions.find(q=>q.id===item.id)),
    explanation:[item.sen,item.szh]
  }));
}

function laterGuideVisual(n,id,chapter) {
  const page=guideVisualPages[id];
  if(page){
    const slide=studySlides(n).find(s=>s.page===page);
    return `<figure class="figure original-slide guide-source-figure"><img src="${slide.image}" alt="${escapeHtml(slide.en)} · Teacher slides p. ${page}" decoding="async"><figcaption>Teacher slides · p. ${page} <button type="button" class="soft" data-zoom>Enlarge image</button></figcaption></figure>`;
  }
  return figure(chapter);
}

const laterGuidedModules = Object.fromEntries(Object.entries(laterGuidePlans).map(([n,plans])=>[
  n, plans.map(([id,title,chinese,topics])=>({
    id,week:Number(n),title,subtitle:[topics[0][3],chinese],
    topics:topics.map(([topicId,first,last,en,zh,idea,ideaZh,method,methodZh])=>{
      const chapter=chapters[n].find(c=>c.id===topicId);
      const heading=chapter ? [chapter.en,chapter.zh] : ({
        "correlation-measures":["Measurement scales and correlation methods","测量尺度与相关方法"],
        "pearson-formula":["Pearson’s formula and a fitted line","Pearson 公式与拟合线"],
        "correlation-design":["Scatterplots, design and prediction","散点图、研究设计与预测"]
      })[topicId];
      return {
        id:topicId,title:heading[0],titleZh:heading[1],
        pages:Array.from({length:last-first+1},(_,index)=>first+index),
        question:[en,zh],idea:[idea,ideaZh],method:[method,methodZh],
        visual:()=>laterGuideVisual(Number(n),topicId,chapter),
        examples:laterGuideExamples(topicId,chapter)
      };
    })
  }))
]));
