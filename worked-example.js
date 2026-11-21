function workedExampleKey(topicId,index) { return `guide-${topicId}-${index+1}`; }

function workedExampleOptions(answer,distractors,position) {
  const options=[...distractors];
  options.splice(position%(options.length+1),0,answer);
  return options;
}

function slideWorkedOptions(topicId,item,index,question) {
  const distractors=question.options?.filter(option=>option!==item.answer) ?? slideExampleDistractors[topicId][index+1];
  return workedExampleOptions(item.answer,distractors,index+topicId.length);
}

function slideWorkedPrompt(item) {
  return item.qen.replace(/ (?:Enter one word|Enter a decimal)\.$/,"");
}

function workedSteps(text) {
  return text.split("→").map(step=>`<li>${escapeHtml(step.trim())}</li>`).join("");
}

function bilingualWorkedSolution(answer,en,zh) {
  return `<p class="model-answer">Answer · <strong>${escapeHtml(answer)}</strong></p><h5>Worked solution</h5><ol>${workedSteps(en)}</ol>${chineseTranslation(`<ol>${workedSteps(zh)}</ol>`)}`;
}

function validWorkedExamples(record,n) {
  if(record===undefined) return true;
  if(!record || typeof record!=="object" || Array.isArray(record)) return false;
  const known=new Map();
  for(const chapter of chapters[n]??[]) {
    teaching[chapter.id]?.examples.forEach((item,index)=>{
      const question=chapter.questions.find(q=>q.id===item.id);
      known.set(item.id,slideWorkedOptions(chapter.id,item,index,question));
    });
  }
  if(n===1) for(const guide of guidedModules) for(const topic of guide.topics) {
    topic.examples.forEach((example,i)=>known.set(workedExampleKey(topic.id,i),[example.answer[0],...guidedExampleDistractors[topic.id][i]]));
  }
  if(n!==1) for(const guide of guidesForWeek(n)) for(const topic of guide.topics) {
    topic.examples.forEach(example=>known.set(example.id,example.options));
  }
  return Object.entries(record).every(([id,row])=>row && typeof row.checked==="boolean" && known.get(id)?.includes(row.choice));
}

function renderWorkedChoice(id,prompt,translation,options,answer,solution,extras="") {
  const response=state().workedExamples?.[id];
  const submitted=response?.checked;
  const reached=options.includes(response?.choice);
  const right=response?.choice===answer;
  const choices=options.map((option,index)=>`<label><input type="radio" name="${escapeHtml(id)}" value="${escapeHtml(option)}"${option===response?.choice?" checked":""}><span><b>${String.fromCharCode(65+index)}.</b> ${escapeHtml(option)}</span></label>`).join("");
  return `<div class="worked-choice" data-worked-id="${escapeHtml(id)}" data-worked-key="${escapeHtml(answer)}">
    <fieldset><legend>${escapeHtml(prompt)}</legend>${chineseTranslation(escapeHtml(translation),"p")}${extras}<div class="options">${choices}</div></fieldset>
    <button class="soft" type="button" data-worked-review aria-expanded="${!!submitted}" aria-controls="${escapeHtml(id)}-solution"${reached?"":" disabled"}>${submitted?"Hide explanation":"View explanation"}</button>
    <div class="worked-choice-solution" id="${escapeHtml(id)}-solution"${submitted?"":" hidden"}>
      <p class="worked-choice-feedback" role="status">${submitted?(right?"Correct.":"Review the worked solution."):""}</p>${solution}
    </div></div>`;
}

function workedChoiceInput(input) {
  const example=input.closest("[data-worked-id]");
  if(!example || !input.matches("input[type=radio]:checked")) return false;
  refresh();
  const records=state().workedExamples??={};
  records[example.dataset.workedId]={choice:input.value,checked:false};
  save();
  const button=example.querySelector("[data-worked-review]");
  button.disabled=false;
  showWorkedSolution(example,button,records[example.dataset.workedId]);
  return true;
}

function showWorkedSolution(example,button,response) {
  example.querySelector(".worked-choice-solution").hidden=!response.checked;
  example.querySelector(".worked-choice-feedback").textContent=response.checked
    ? (response.choice===example.dataset.workedKey?"Correct.":"Review the worked solution.")
    : "";
  button.setAttribute("aria-expanded",String(response.checked));
  button.textContent=response.checked?"Hide explanation":"View explanation";
}

function workedChoiceClick(button) {
  if(!button.hasAttribute("data-worked-review")) return false;
  const example=button.closest("[data-worked-id]");
  const response=state().workedExamples?.[example.dataset.workedId];
  if(!response) return true;
  response.checked=!response.checked;
  save();
  showWorkedSolution(example,button,response);
  return true;
}

function renderSlideWorkedExamples(chapter) {
  const guide=teaching[chapter?.id];
  if(!guide) return "";
  const examples=guide.examples.map((item,index)=>{
    const question=chapter.questions.find(q=>q.id===item.id);
    const options=slideWorkedOptions(chapter.id,item,index,question);
    const solution=bilingualWorkedSolution(item.answer,item.sen,item.szh);
    return `<details class="worked-example"${index===0?" open":""}><summary>Example ${index+1}</summary>${renderWorkedChoice(item.id,slideWorkedPrompt(item),item.qzh,options,item.answer,solution)}</details>`;
  }).join("");
  return `<section class="worked-examples slide-worked" lang="en"><h4>Worked examples · ${escapeHtml(chapter.en)}</h4>${examples}</section>`;
}
