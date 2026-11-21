/* Keys are stable so a learner can resume an exit ticket after an update. */
const centreTicketBank = {
  'mode-value': {
    topic: 'mode', page: 30,
    prompt: 'A café sells 3 small drinks, 7 medium drinks and 4 large drinks. What is the modal size?',
    zh: '咖啡店卖出小杯 3 杯、中杯 7 杯、大杯 4 杯。杯型的众数是什么？',
    choices: ['Medium', '7', 'Large', '14'], answer: 'Medium',
    explanation: ['Medium occurs seven times, more often than either other size. Report the size that customers ordered.', '中杯售出 7 杯，出现次数最多。题目要求报告杯型，所以填中杯。'],
    traps: {'7': 'Seven tells you how often the mode occurs.', Large: 'Large describes the size of a drink. Compare the number sold in each size.', '14': 'Fourteen is the total number of sales across all sizes.'},
    retry: {prompt: 'Visitors chose 9 audio tours, 5 guided tours and 2 map tours. What is the mode?', zh: '9 人选语音导览，5 人选人工导览，2 人选地图导览。众数是什么？', choices: ['Map tour', 'Audio tour', '9'], answer: 'Audio tour', explanation: ['Audio tour has the highest count, nine visitors.', '选语音导览的人最多，共 9 人，因此众数是语音导览。']}
  },
  'mode-tie': {
    topic: 'mode', page: 30,
    prompt: 'The scores are 7, 4, 9, 7, 4. Which answer gives every mode?', zh: '分数为 7、4、9、7、4。哪个选项列出了所有众数？',
    choices: ['4 only', '7 only', '4 and 7', '9 only'], answer: '4 and 7',
    explanation: ['Tally each score. Four occurs twice, seven occurs twice and nine occurs once. The two highest counts tie, so both 4 and 7 are modes.', '逐个计数。4 和 7 都出现两次，9 只出现一次。最高频数并列，因此众数有 4 和 7。'],
    traps: {'4 only': 'Seven occurs just as often as four.', '7 only': 'Four occurs just as often as seven.', '9 only': 'The largest score appears only once.'},
    retry: {prompt: 'The scores are 2, 8, 5, 8 and 2. A student lists 2 as one mode. Which other score must be listed with it? Enter the number.', zh: '分数为 2、8、5、8、2。一名同学已经写下众数 2，还需要一起写下哪个分数？请填写数字。', answer: '8', explanation: ['Both 2 and 8 occur twice. Five occurs once. The highest count is shared, so the complete answer includes 2 and 8.', '2 和 8 各出现两次，5 只出现一次。最高频数并列，完整的众数应包括 2 和 8。']}
  },
  'median-odd': {
    topic: 'median', page: 35,
    prompt: 'Five runners finish in 12, 8, 20, 8 and 9 minutes. Find the median time in minutes.', zh: '五位跑者用时分别为 12、8、20、8、9 分钟。中位数是多少分钟？', answer: '9',
    explanation: ['In order the times are 8, 8, 9, 12, 20. With five runners, the third time is the median: 9 minutes.', '排序后为 8、8、9、12、20。共有五位跑者，取第 3 个数，得到中位数 9 分钟。'],
    traps: {'20': 'Twenty occupies the middle of the unsorted list. Order the times first.', '8': 'Eight is the most frequent time.', '3': 'Three is the position to read in the ordered list.'},
    retry: {prompt: 'A second group takes 16, 6, 7, 6 and 13 minutes. What is its median in minutes?', zh: '另一组用时为 16、6、7、6、13 分钟，中位数是多少分钟？', answer: '7', explanation: ['The ordered times are 6, 6, 7, 13, 16. Read the third value, 7.', '排序得到 6、6、7、13、16。取第 3 个数，得到 7。']}
  },
  'median-even': {
    topic: 'median', page: 36,
    prompt: 'Six books have 10, 3, 11, 4, 7 and 2 chapters. What is the median number of chapters?', zh: '六本书分别有 10、3、11、4、7、2 章。章节数的中位数是多少？', answer: '5.5',
    explanation: ['Order the counts: 2, 3, 4, 7, 10, 11. Average the third and fourth values: (4 + 7) ÷ 2 = 5.5 chapters.', '排序为 2、3、4、7、10、11。取第 3、4 个数的平均数，即 (4 + 7) ÷ 2 = 5.5 章。'],
    traps: {'3.5': 'Position 3.5 lies between the third and fourth books in order. Read their counts.', '4': 'Four is only the lower of the two central values.', '7': 'Seven is only the upper of the two central values.'},
    retry: {prompt: 'Four books have 11, 6, 3 and 9 chapters. Find the median number of chapters.', zh: '四本书分别有 11、6、3、9 章，章节数的中位数是多少？', answer: '7.5', explanation: ['Order the counts: 3, 6, 9, 11. The two middle counts give (6 + 9) ÷ 2 = 7.5 chapters.', '排序为 3、6、9、11，中间两个数的平均值为 (6 + 9) ÷ 2 = 7.5 章。']}
  },
  'mean-total': {
    topic: 'mean', page: 38,
    prompt: 'Four students read 0, 4, 4 and 10 pages today. How many pages did they read on average?', zh: '四位学生今天分别读了 0、4、4、10 页。平均每人读了多少页？', answer: '4.5',
    explanation: ['Together they read 18 pages. All four students count, including the student who read zero. The mean is 18 ÷ 4 = 4.5 pages.', '阅读总数为 18 页。读 0 页的学生也计入人数，所以 18 ÷ 4 = 4.5 页。'],
    traps: {'6': 'Dividing by three leaves out the student who read zero.', '4': 'Four is both the mode and the median here. The mean uses the total.', '18': 'Eighteen is the total for the group. Divide by the number of students.'},
    retry: {prompt: 'A team of five collected 0, 2, 4, 4 and 5 samples. Find the mean number per team member.', zh: '五位组员分别收集了 0、2、4、4、5 份样本。平均每位组员收集了多少份？', answer: '3', explanation: ['The team collected 15 samples. Dividing by all five members gives 3.', '全组共收集 15 份，除以全体 5 位组员，得到 3 份。']}
  },
  'mean-change': {
    topic: 'mean', page: 39,
    prompt: 'The mean of five scores is 12. A recording error is corrected by increasing one score by 10. What is the new mean?', zh: '五个分数的均值为 12。纠正录入错误后，其中一个分数增加了 10 分。新的均值是多少？', answer: '14',
    explanation: ['The original total was 5 × 12 = 60. Adding 10 makes the new total 70. Across the same five scores the new mean is 70 ÷ 5 = 14.', '原总分为 5 × 12 = 60，增加 10 后是 70。仍然只有五个分数，新的均值是 70 ÷ 5 = 14。'],
    traps: {'22': 'The ten-point correction is shared across five scores when computing the mean.', '2': 'Two is the increase in the mean. The question asks for the new mean.'},
    retry: {prompt: 'Four scores have a mean of 16. One score is corrected downwards by 8 points. What is the new mean?', zh: '四个分数的均值为 16，将其中一个分数调低 8 分后，新的均值是多少？', answer: '14', explanation: ['The total falls from 64 to 56. Dividing 56 by four gives 14.', '总分从 64 降到 56，56 除以 4 得到 14。']}
  },
  'choose-skew': {
    topic: 'choose', page: 37,
    prompt: 'A desk records waits of 1, 2, 3, 4 and 50 minutes. Which measure gives the middle visitor’s wait when the times are ordered?', zh: '服务台记录的等待时间为 1、2、3、4、50 分钟。按用时排序后，哪项指标给出排在中间那位访客的等待时间？',
    choices: ['Mean', 'Mode', 'Median'], answer: 'Median',
    explanation: ['The third wait is 3 minutes. A very long wait raises the mean to 12 minutes while leaving the middle visitor at 3 minutes.', '第 3 位访客等了 3 分钟。50 分钟这次长等待把均值拉到 12 分钟，而排在中间的访客仍等了 3 分钟。'],
    traps: {Mean: 'The mean answers a different question: how long each person would wait if the total were shared equally.', Mode: 'All five waiting times have the same frequency.'},
    retry: {prompt: 'In the ordered list 2, 3, 5, 7, 40, replace 40 with 80. Which measure stays at 5?', zh: '有序数列 2、3、5、7、40 中把 40 替换为 80。哪项指标仍为 5？', choices: ['Mean', 'Median', 'Range'], answer: 'Median', explanation: ['The third observation is still 5. The mean and range both increase when the last observation rises.', '第 3 个数仍为 5，中位数保持不变。末值增大后，均值和极差都增加。']}
  },
  'choose-shape': {
    topic: 'choose', page: 40,
    prompt: 'In an ideal normal distribution, which statement correctly locates all three measures?', zh: '在理想的正态分布中，哪句话正确描述了三个集中趋势指标的位置？',
    choices: ['The mean, median and mode coincide at the centre.', 'The mean lies above the median.', 'The mode lies below the median.'], answer: 'The mean, median and mode coincide at the centre.',
    explanation: ['The normal curve balances at its centre, has half its area on either side and reaches its single peak there. These locate the mean, median and mode respectively.', '正态曲线的平衡点、把面积平分的位置和唯一峰顶都位于中心，三者分别对应均值、中位数和众数。'],
    traps: {'The mean lies above the median.': 'A long right tail can pull the mean upward. The normal curve has two matching tails.', 'The mode lies below the median.': 'The normal curve reaches its highest point at its centre.'},
    retry: {prompt: 'A symmetric set of scores is 2, 5, 5, 5, 8. What value do its mean, median and mode share?', zh: '一组对称分数为 2、5、5、5、8，其均值、中位数和众数都等于多少？', answer: '5', explanation: ['The sum is 25, so the mean is 5. The third score is 5 and the most frequent score is also 5.', '总和为 25，均值是 5，第 3 个分数是 5，出现最多的分数也是 5。']}
  }
};

const centreWritingPrompt = ['A museum recorded queues of 2, 4, 5, 6 and 48 minutes. In one or two English sentences, recommend a typical wait to a visitor and justify your choice.', '博物馆记录了 2、4、5、6、48 分钟的排队时间。用一到两句英文向访客推荐一个典型等待时间，并说明理由。'];
const centreWritingModel = ['I would report the median of 5 minutes. One 48-minute queue raises the mean to 13 minutes, while 5 minutes is the middle of the five ordered waits.', '我会报告中位数 5 分钟。一次长达 48 分钟的排队把均值拉至 13 分钟，而 5 分钟是五次等待用时排序后的中间值。'];

function centreAssessState() {
  return centreState().assessment ??= {view: 'intro', draft: null, attempts: [], selected: 0};
}

function centreAssessIsAnswering() {
  const a = centreState().assessment;
  return !!(a?.view === 'taking' && a.draft);
}

function centreAssessTiming(ms) {
  if (!centreAssessIsAnswering()) return;
  const {draft} = centreAssessState();
  draft.ms += ms;
  const clock = document.getElementById('centre-ticket-time');
  if (clock) clock.textContent = duration(draft.ms);
}

function centreAssessNumber(value) {
  const trimmed = String(value ?? '').trim().replace(/−/g, '-');
  const parts = /^([+-]?(?:\d+(?:\.\d*)?|\.\d+))(?:\s*\/\s*([+-]?(?:\d+(?:\.\d*)?|\.\d+)))?$/.exec(trimmed);
  if (!parts) return NaN;
  return Number(parts[1]) / Number(parts[2] ?? 1);
}

function centreAssessCorrect(q, value) {
  if (q.choices) return q.answer === value;
  return Math.abs(centreAssessNumber(value) - Number(q.answer)) < 1e-9;
}

function centreAssessZh(value) {
  return chineseTranslation(escapeHtml(value), 'p');
}

function centreAssessPair([en, zh]) {
  return `<p lang="en">${escapeHtml(en)}</p>${centreAssessZh(zh)}`;
}

function centreAssessButton(action, label, value = '', primary = false) {
  return `<button type="button" class="${primary ? 'primary' : 'soft'}" data-centre-assess="${action}" data-ticket-value="${escapeHtml(value)}">${escapeHtml(label)}</button>`;
}

function centreAssessInputs(q, id, value, retry = false) {
  const attr = retry ? 'data-ticket-retry' : 'data-ticket-answer';
  const name = `ct-${retry ? 'retry-' : ''}${id}`;
  const input = q.choices ? `<div class="options">${q.choices.map(c => `<label><input type="radio" name="${name}" ${attr}="${id}" value="${escapeHtml(c)}" ${c === value ? 'checked' : ''}><span>${escapeHtml(c)}</span></label>`).join('')}</div>` : `<label for="${name}">Answer as a number</label><input class="short-answer" type="text" inputmode="decimal" autocomplete="off" maxlength="70" id="${name}" ${attr}="${id}" value="${escapeHtml(value ?? '')}">`;
  return `<fieldset><legend>${escapeHtml(q.prompt)}</legend>${centreAssessZh(q.zh)}${q.visual?.() || ''}${input}</fieldset>`;
}

function centreAssessHistory(a) {
  if (!a.attempts.length) return '';
  return `<details><summary>Past lesson scores (${a.attempts.length})</summary><ol class="result-list">${a.attempts.map((row, i) => `<li>${centreAssessButton('history', `Attempt ${i + 1} · ${row.score}/${row.order.length} · ${duration(row.ms)}`, i)}</li>`).join('')}</ol></details>`;
}

function centreAssessDraft(draft) {
  const count = draft.order.length;
  const answered = draft.order.filter(id => draft.answers[id]?.trim()).length;
  const timer = `<span class="timer">Time <span id="centre-ticket-time">${duration(draft.ms)}</span></span>`;
  if (draft.index < count) {
    const id = draft.order[draft.index];
    return `<div class="lesson-top"><p class="eyebrow">QUESTION ${draft.index + 1} OF ${count}</p>${timer}</div><h3>Lesson check</h3>${centreAssessInputs(activeGuide.bank[id], id, draft.answers[id])}<div class="quiz-actions">${draft.index ? centreAssessButton('prev', 'Previous') : ''}${centreAssessButton('next', draft.index === count - 1 ? 'Review answers' : 'Next question', '', true)}</div><p class="centre-answer-meta" id="centre-answer-count">${answered} of ${count} answered</p>`;
  }
  const missing = draft.order.filter(id => !draft.answers[id]?.trim());
  return `<div class="lesson-top"><h3>Review before scoring</h3>${timer}</div><p>${answered} of ${count} answered. ${missing.length ? 'Revisit the questions below, or submit with blanks for zero points.' : 'All scored questions are answered.'}</p>${missing.length ? `<div class="centre-review-actions">${missing.map(id => centreAssessButton('goto', `Question ${draft.order.indexOf(id) + 1} · Unanswered`, draft.order.indexOf(id))).join(' ')}</div>` : ''}<h4>Explain your choice <small>(optional, self-check)</small></h4><label for="centre-writing">${escapeHtml(activeGuide.writing.prompt[0])}</label>${centreAssessZh(activeGuide.writing.prompt[1])}<textarea class="short-answer" id="centre-writing" data-ticket-writing rows="3" maxlength="1200">${escapeHtml(draft.writing)}</textarea><div class="quiz-actions">${centreAssessButton('prev', 'Back to questions')}${centreAssessButton('submit', missing.length ? `Submit with ${missing.length} unanswered` : 'Score my answers', '', true)}</div>`;
}

function centreAssessRetry(row, id, q) {
  const retry = row.retries?.[id];
  if (!retry) return centreAssessButton('retry', 'Try a similar question', id);
  const result = retry.checked ? `<p role="status"><strong>${centreAssessCorrect(q.retry, retry.value) ? 'Correct.' : 'Review the method.'} Answer: ${escapeHtml(q.retry.answer)}.</strong></p>${centreAssessPair(q.retry.explanation)}` : '';
  return `<div class="centre-retry" id="centre-retry-${id}" tabindex="-1"><h5>Try the same skill</h5>${centreAssessInputs(q.retry, id, retry.value, true)}${centreAssessButton('check-retry', 'Check this answer', id)}<p role="status" id="centre-retry-status-${id}"></p>${result}</div>`;
}

function centreAssessReviewCard(row, id) {
  const q = activeGuide.bank[id];
  const value = row.answers[id]?.trim() ?? '';
  const right = centreAssessCorrect(q, value);
  const label = right ? 'Correct' : value ? 'Incorrect' : 'Unanswered';
  const trap = Object.hasOwn(q.traps, value) ? q.traps[value] : null;
  return `<article class="centre-review-card"><small>${label} · Question ${row.order.indexOf(id) + 1}</small><h4>${escapeHtml(q.prompt)}</h4>${centreAssessZh(q.zh)}${q.visual?.() || ''}<p>Your answer: <strong>${escapeHtml(value || 'No answer')}</strong><br>Answer: <strong>${escapeHtml(q.answer)}</strong></p>${trap ? `<p>${escapeHtml(trap)}</p>` : ''}${centreAssessPair(q.explanation)}<div class="centre-review-actions"><button type="button" class="soft" data-centre-topic="${q.topic}">Review this concept</button> <button type="button" class="soft" data-centre-pdf="${q.page}">Read PDF page ${q.page}</button></div>${right ? '' : centreAssessRetry(row, id, q)}</article>`;
}

function centreAssessResults(a) {
  const row = a.attempts[a.selected];
  const wrong = row.order.filter(id => !centreAssessCorrect(activeGuide.bank[id], row.answers[id]));
  const right = row.order.filter(id => !wrong.includes(id));
  const writing = `<details><summary>Written justification · model answer and self-check</summary>${centreAssessPair(activeGuide.writing.prompt)}${row.writing?.trim() ? `<p>Your response: ${escapeHtml(row.writing)}</p>` : ''}<h4>Model answer</h4>${centreAssessPair(activeGuide.writing.model)}<h4>Check your reasoning</h4><ul>${activeGuide.writing.rubric.map(line=>`<li>${escapeHtml(line)}</li>`).join('')}</ul><p>Equivalent explanations are welcome. This response is ungraded.</p></details>`;
  return `<p class="eyebrow">LESSON CHECK · ATTEMPT ${a.selected + 1}</p><h3>${row.score} / ${row.order.length} points</h3><p>Answer time ${duration(row.ms)} · This score is separate from the Week 1 practice.</p>${wrong.length ? `<h4>Questions to revisit (${wrong.length})</h4>${wrong.map(id => centreAssessReviewCard(row, id)).join('')}` : '<p>You answered every question correctly.</p>'}${right.length ? `<details><summary>Correct answers (${right.length})</summary>${right.map(id => centreAssessReviewCard(row, id)).join('')}</details>` : ''}${writing}${centreAssessHistory(a)}${centreAssessButton('start', a.draft ? 'Resume lesson check' : 'Take the lesson check again')}`;
}

function renderCentreAssessment() {
  const a = centreAssessState();
  let body;
  if (a.view === 'taking' && a.draft) body = centreAssessDraft(a.draft);
  else if (a.view === 'review' && a.attempts[a.selected]) body = centreAssessResults(a);
  else body = `<h3>Check your understanding</h3><p>Answer ${Object.keys(activeGuide.bank).length} English questions on ${escapeHtml(activeGuide.title)}. After scoring, revisit each missed question and try a fresh example.</p>${centreAssessZh('回答本节的英文习题。交卷后可以逐题看解析，并用一道同类新题重练。')}<p>One point per question. The optional written explanation is for self-check. Your weekly 30-question practice has a separate score.</p>${centreAssessButton('start', a.draft ? 'Resume lesson check' : 'Start lesson check', '', true)}${centreAssessHistory(a)}`;
  return `<section id="centre-assessment" class="practice centre-assessment" tabindex="-1" lang="en">${body}</section>`;
}

function centreAssessClick(button) {
  const action = button.dataset.centreAssess;
  if (!action) return false;
  const a = centreAssessState();
  const value = button.dataset.ticketValue;
  const draft = a.draft;
  let target = 'centre-assessment';
  switch (action) {
    case 'start':
      a.draft ??= {order: shuffle(Object.keys(activeGuide.bank)), index: 0, answers: {}, writing: '', ms: 0};
      a.view = 'taking';
      break;
    case 'prev': if (draft) draft.index = Math.max(0, draft.index - 1); break;
    case 'next': if (draft) draft.index = Math.min(draft.order.length, draft.index + 1); break;
    case 'goto': if (draft) draft.index = Number(value); break;
    case 'submit': {
      if (!draft) return true;
      const score = draft.order.filter(id => centreAssessCorrect(activeGuide.bank[id], draft.answers[id])).length;
      const {order, answers, writing, ms} = draft;
      a.attempts.push({order, answers, writing, ms, score, date: new Date().toISOString(), retries: {}});
      a.selected = a.attempts.length - 1;
      a.draft = null;
      a.view = 'review';
      break;
    }
    case 'history': a.selected = Number(value); a.view = 'review'; break;
    case 'retry': a.attempts[a.selected].retries[value] = {value: '', checked: false}; target = `centre-retry-${value}`; break;
    case 'check-retry': {
      const retry = a.attempts[a.selected].retries[value];
      if (!retry.value.trim()) {
        document.getElementById(`centre-retry-status-${value}`).textContent = 'Enter an answer first.';
        return true;
      }
      retry.checked = true;
      target = `centre-retry-${value}`;
      break;
    }
    default: return false;
  }
  save(); render(target);
  return true;
}

function centreAssessInput(input) {
  const attrs = input.dataset;
  if (!('ticketAnswer' in attrs || 'ticketWriting' in attrs || 'ticketRetry' in attrs)) return false;
  const a = centreAssessState();
  if (attrs.ticketAnswer && a.draft) {
    a.draft.answers[attrs.ticketAnswer] = input.value;
    const answered = a.draft.order.filter(id => a.draft.answers[id]?.trim()).length;
    document.getElementById('centre-answer-count').textContent = `${answered} of ${a.draft.order.length} answered`;
  } else if ('ticketWriting' in attrs && a.draft) {
    a.draft.writing = input.value;
  } else if (attrs.ticketRetry) {
    const retry = a.attempts[a.selected].retries[attrs.ticketRetry];
    retry.value = input.value;
    if (retry.checked) {
      retry.checked = false;
      const result = document.getElementById(`centre-retry-status-${attrs.ticketRetry}`);
      while (result.nextElementSibling) result.nextElementSibling.remove();
    }
    document.getElementById(`centre-retry-status-${attrs.ticketRetry}`).textContent = '';
  }
  save();
  return true;
}

function validateCentreAssessment(a,bank=centreTicketBank) {
  if (a === undefined) return true;
  const map = v => v !== null && typeof v === 'object' && !Array.isArray(v);
  const answer = v => typeof v === 'string' && v.length <= 140;
  const inRange = (n, limit) => Number.isInteger(n) && n >= 0 && n < limit;
  const known = id => Object.hasOwn(bank, id);
  function validEntry(row) {
    return map(row) && Array.isArray(row.order) && row.order.length === Object.keys(bank).length
      && new Set(row.order).size === row.order.length && row.order.every(known)
      && map(row.answers) && Object.entries(row.answers).every(([id, value]) => known(id) && answer(value) && (!bank[id].choices || bank[id].choices.includes(value)))
      && typeof row.writing === 'string' && row.writing.length <= 1200 && Number.isFinite(row.ms) && row.ms >= 0 && row.ms <= 1e12;
  }
  function validAttempt(row) {
    return validEntry(row) && typeof row.date === 'string' && Number.isFinite(Date.parse(row.date))
      && row.score === row.order.filter(id => centreAssessCorrect(bank[id], row.answers[id])).length
      && map(row.retries) && Object.entries(row.retries).every(([id, r]) => known(id) && map(r) && answer(r.value) && typeof r.checked === 'boolean');
  }
  return map(a) && ['intro', 'taking', 'review'].includes(a.view) && Array.isArray(a.attempts) && a.attempts.every(validAttempt)
    && inRange(a.selected, Math.max(1, a.attempts.length)) && (a.draft === null || (validEntry(a.draft) && inRange(a.draft.index, a.draft.order.length + 1)))
    && (a.view !== 'taking' || !!a.draft) && (a.view !== 'review' || a.attempts.length > 0);
}
