function downloadFile(name,type,contents) {
  const url=URL.createObjectURL(new Blob([contents],{type}));
  const anchor=document.createElement("a");
  anchor.href=url;anchor.download=name;anchor.click();
  setTimeout(()=>URL.revokeObjectURL(url),2000);
}
function knownQuestions(n) {
  return Object.fromEntries((chapters[n]??[]).flatMap(c=>c.questions.map(q=>[q.id,q])));
}
function validateBackup(payload) {
  if(payload?.course!=="POX7003" || payload?.version!==1 || !payload.data || typeof payload.data!=="object" || Array.isArray(payload.data)) throw Error("请选择此学习台导出的 JSON 备份。");
  const isMap=value=>value && typeof value==="object" && !Array.isArray(value);
  const isTime=value=>Number.isFinite(value)&&value>=0&&value<=1e12;
  for(const [weekNumber,record] of Object.entries(payload.data)) {
    const n=Number(weekNumber), list=chapters[n]??[], bank=knownQuestions(n);
    if(!Number.isInteger(n)||n<1||n>courseWeeks||String(n)!==weekNumber||!isMap(record)) throw Error("备份周次格式不正确。");
    if(!isMap(record.time)||!isMap(record.done)||!Number.isInteger(record.topic)||record.topic<0||record.topic>=Math.max(1,list.length)||!isTime(record.quizMs)||!Array.isArray(record.attempts)) throw Error("备份中的学习记录不完整。");
    if(record.centre!==undefined && (n!==1 || !validateCentreLesson(record.centre))) throw Error("备份中的集中趋势样板课记录不完整。");
    if(record.revision!==undefined && (n!==1 || !validExamState(record.revision))) throw Error("备份中的期中练习记录不完整。");
    const lessonIds=new Set(list.map(c=>c.id));
    if(record.guided!==undefined && (n!==1 || !isMap(record.guided) || Object.entries(record.guided).some(([id,v])=>id==="centre" || !findGuide(id) || !validateCentreLesson(v,findGuide(id))))) throw Error("备份中的分课学习记录不完整。");
    if(n===1) for(const guide of guidedModules) for(const t of guide.topics) lessonIds.add(guideTimeKey(t.id));
    if(slideCourses[n]) {
      const slideIds=new Set(Array.from({length:slideCourses[n].sourcePages},(_,i)=>"slide-"+String(i+1).padStart(2,"0")));
      slideIds.forEach(id=>lessonIds.add(id));
      if(record.slide!==undefined && (!Number.isInteger(record.slide)||record.slide<0||record.slide>=slideCourses[n].sourcePages)) throw Error("备份中的课件页码不正确。");
      if(record.slideDone!==undefined && (!isMap(record.slideDone)||Object.entries(record.slideDone).some(([id,value])=>!slideIds.has(id)||typeof value!=="boolean"))) throw Error("备份中的课件进度不正确。");
    }
    if(Object.entries(record.time).some(([id,value])=>!lessonIds.has(id)||!isTime(value))||Object.entries(record.done).some(([id,value])=>!lessonIds.has(id)||typeof value!=="boolean")) throw Error("备份中的章节或计时不正确。");
    const attempts=[...record.attempts,...(record.draft?[record.draft]:[])];
    for(const attempt of attempts) {
      if(!isMap(attempt)||!Array.isArray(attempt.order)||!attempt.order.length||new Set(attempt.order).size!==attempt.order.length||attempt.order.some(id=>!bank[id])||!isMap(attempt.answers)||!isTime(attempt.ms)) throw Error("备份中的答题记录无法识别。");
      if(Object.entries(attempt.answers).some(([id,value])=>!attempt.order.includes(id)||typeof value!=="string"||value.length>500)) throw Error("备份中的答案格式不正确。");
      if(attempt===record.draft) {
        if(!Number.isInteger(attempt.index)||attempt.index<0||attempt.index>=attempt.order.length||!isMap(attempt.options)) throw Error("备份中的答题位置不正确。");
        for(const id of attempt.order.filter(id=>bank[id].options)) {
          const options=attempt.options[id];
          if(!Array.isArray(options)||options.length!==bank[id].options.length||new Set(options).size!==options.length||options.some(value=>!bank[id].options.includes(value))) throw Error("备份中的选择题选项不正确。");
        }
      } else if(!Number.isInteger(attempt.score)||attempt.score<0||attempt.score>attempt.order.length||typeof attempt.date!=="string") throw Error("备份中的成绩格式不正确。");
    }
  }
  return payload.data;
}
$("backup").addEventListener("click",()=>{
  checkpoint();refresh();
  downloadFile("POX7003-learning-backup.json","application/json;charset=utf-8",JSON.stringify({course:"POX7003",version:1,exportedAt:new Date().toISOString(),data},null,2));
  $("backup-status").textContent="已导出备份，包含各周进度、计时、答题草稿和历史成绩。";
});
$("restore").addEventListener("change",async event=>{
  const file=event.target.files[0];
  if(!file)return;
  try {
    if(file.size>5*1024*1024)throw Error("备份文件超过 5 MB，请检查是否选对文件。");
    const restored=validateBackup(JSON.parse(await file.text()));
    localStorage.setItem(key,JSON.stringify(restored));
    data=restored;mode="study";setWeek(week);
    $("backup-status").textContent="备份已恢复到本浏览器。";
  } catch(error) {
    $("backup-status").textContent=error instanceof SyntaxError?"文件不是有效 JSON，请选择学习台导出的备份。":error.message;
  } finally {event.target.value="";}
});

