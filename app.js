let TRACK = localStorage.getItem('courseTrack') || 'devops';
let LANG = localStorage.getItem('courseLang') || 'he';
let currentLesson = 0;
let currentSlide = 0;
let playing = false;
let timer = null;
let elapsed = 0;
const slideSeconds = 13;

const $ = (id) => document.getElementById(id);
const T = () => UI[LANG];
const LESSONS = () => COURSES[TRACK][LANG];
const progressKey = () => `courseProgress:${TRACK}`;
const tutorScoreKey = () => `tutorScore:${TRACK}`;
let completed = JSON.parse(localStorage.getItem(progressKey()) || '{}');

function codeBlock(text){ return `<pre class="code"><code>${escapeHtml(text)}</code></pre>`; }
function escapeHtml(s){ return String(s).replace(/[&<>]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;'}[c])); }
function list(items, cls=''){ return `<ul class="${cls}">${items.map(x=>`<li>${x}</li>`).join('')}</ul>`; }

const KEYWORDS = {
  devops: {
    he: {1:['devops','pipeline','אוטומציה','ci','cd','תהליך'],2:['linux','ubuntu','טרמינל','הרשאות','ssh','systemctl','chmod'],3:['git','github','commit','branch','merge','push','pull'],4:['python','json','script','סקריפט','לולאה','פונקציה'],5:['network','ip','dns','port','tcp','udp','רשת'],6:['docker','container','image','dockerfile','compose','volume'],7:['aws','iam','ec2','s3','vpc','security group'],8:['terraform','state','provider','resource','module','plan','apply'],9:['ansible','inventory','playbook','role','yaml'],10:['jenkins','ci','cd','pipeline','jenkinsfile','build','test'],11:['kubernetes','pod','deployment','service','cluster','kubectl'],12:['argocd','gitops','sync','manifest','application','פרויקט']},
    en: {1:['devops','pipeline','automation','ci','cd','process'],2:['linux','ubuntu','terminal','permissions','ssh','systemctl','chmod'],3:['git','github','commit','branch','merge','push','pull'],4:['python','json','script','loop','function'],5:['network','ip','dns','port','tcp','udp'],6:['docker','container','image','dockerfile','compose','volume'],7:['aws','iam','ec2','s3','vpc','security group'],8:['terraform','state','provider','resource','module','plan','apply'],9:['ansible','inventory','playbook','role','yaml'],10:['jenkins','ci','cd','pipeline','jenkinsfile','build','test'],11:['kubernetes','pod','deployment','service','cluster','kubectl'],12:['argocd','gitops','sync','manifest','application','project']}
  },
  ai: {
    he: {1:['architect','ארכיטקטורה','פרומפט','orchestrator','pipeline'],2:['token','טוקן','embedding','context','חלון הקשר'],3:['prompt','system prompt','few-shot','הנדסת פרומפטים'],4:['rag','chunk','retrieval','אחזור'],5:['vector','embedding','similarity','אינדקס'],6:['agent','tool','function calling','react','סוכן'],7:['orchestrator','multi-agent','routing','ניתוב','תזמור'],8:['memory','session','buffer','זיכרון'],9:['schema','guardrail','structured output','json'],10:['eval','llmops','monitoring','הערכה'],11:['injection','security','אבטחה','least privilege'],12:['capstone','checklist','פרויקט סיום','review']},
    en: {1:['architect','architecture','prompt','orchestrator','pipeline'],2:['token','embedding','context','context window'],3:['prompt','system prompt','few-shot','prompt engineering'],4:['rag','chunk','retrieval'],5:['vector','embedding','similarity','index'],6:['agent','tool','function calling','react'],7:['orchestrator','multi-agent','routing'],8:['memory','session','buffer'],9:['schema','guardrail','structured output','json'],10:['eval','llmops','monitoring','evaluation'],11:['injection','security','least privilege'],12:['capstone','checklist','review']}
  }
};
function lessonKeywords(lesson){ return (KEYWORDS[TRACK][LANG] || {})[lesson.id] || []; }

// ---------- static UI text ----------
function renderStaticUI(){
  const t = T();
  document.documentElement.setAttribute('lang', t.htmlLang);
  document.documentElement.setAttribute('dir', t.dir);
  document.title = t.metaTitle;
  document.body.dataset.track = TRACK;
  document.body.dataset.lang = LANG;

  $('skipLink').textContent = t.skip;
  $('brand').textContent = t.brand;
  $('contrastBtn').textContent = t.nav.contrast;
  $('fontBtn').textContent = t.nav.font;
  $('resetProgress').textContent = t.nav.reset;

  $('heroEyebrow').textContent = t.hero.eyebrow;
  $('heroTitle').textContent = t.hero.title;
  $('heroDesc').textContent = t.hero.descByTrack[TRACK];
  $('heroStartBtn').textContent = t.hero.startBtn;
  $('heroOptionsBtn').textContent = t.hero.optionsBtn;

  $('howTitle').textContent = t.how.title;
  $('howCards').innerHTML = t.how.cards.map(c => `<article><h3>${c[0]}</h3><p>${c[1]}</p></article>`).join('');

  $('optionsTitle').textContent = t.options.title;
  $('optionsList').innerHTML = t.options.items.map(x => `<li>${x}</li>`).join('');

  $('lessonsTitle').textContent = t.lessons.title;
  $('doneCheckLabel').textContent = t.lessonView.doneLabel;

  $('tabSlides').textContent = t.tabs.slides;
  $('tabRead').textContent = t.tabs.read;
  $('tabExamples').textContent = t.tabs.examples;
  $('tabPractice').textContent = t.tabs.practice;
  $('tabTutor').textContent = t.tabs.tutor;
  $('tabPodcast').textContent = t.tabs.podcast;
  $('tabQuiz').textContent = t.tabs.quiz;
  $('tabResources').textContent = t.tabs.resources;

  $('teacherPersona').innerHTML = `<option value="female">${t.tutor.femaleOpt}</option><option value="male">${t.tutor.maleOpt}</option>`;
  $('tutorPersonaLabelText').textContent = t.tutor.pickLabel;
  $('tutorSpeakToggle').textContent = tutorVoiceEnabled ? t.tutor.speakOn : t.tutor.speakOff;
  $('tutorIntro').textContent = t.tutor.introBtn;
  $('chatInput').placeholder = t.tutor.chatPlaceholder;
  $('chatSendBtn').textContent = t.tutor.sendBtn;
  $('chatInputLabel').textContent = t.tutor.chatPlaceholder;

  $('podcastHeading').textContent = t.podcast.heading;
  $('podcastDesc').textContent = t.podcast.desc;
  $('voiceLabelText').textContent = t.podcast.voiceLabel;
  $('speakPodcast').textContent = t.podcast.speakBtn;
  $('stopPodcast').textContent = t.podcast.stopBtn;

  $('footerText').textContent = t.footer;

  $('trackDevops').textContent = t.track.devops;
  $('trackAi').textContent = t.track.ai;
  $('trackDevops').classList.toggle('active', TRACK === 'devops');
  $('trackAi').classList.toggle('active', TRACK === 'ai');

  $('trackSelectLabel').textContent = t.track.selectLabel;
  $('trackDevopsHeroDesc').textContent = t.hero.descByTrack.devops;
  $('trackAiHeroDesc').textContent = t.hero.descByTrack.ai;
  $('trackDevopsHero').classList.toggle('active', TRACK === 'devops');
  $('trackAiHero').classList.toggle('active', TRACK === 'ai');

  $('langHe').classList.toggle('active', LANG === 'he');
  $('langEn').classList.toggle('active', LANG === 'en');

  $('playBtn').textContent = t.player.play;
  $('prevSlide').textContent = t.player.prev;
  $('nextSlide').textContent = t.player.next;
}

function renderLessonGrid(){
  const t = T(); const lessons = LESSONS();
  const grid = $('lessonGrid');
  grid.innerHTML = lessons.map((l,i)=>`
    <button class="lesson-card ${i===currentLesson?'active':''} ${completed[l.id]?'done':''}" data-lesson="${i}" aria-label="${t.lessons.ariaOpen(l.id, l.title)}">
      <span>${t.lessons.word} ${l.id}</span>
      <strong>${l.title}</strong>
      <p>${l.short}</p>
      <small>${completed[l.id]?t.lessons.done:t.lessons.notDone}</small>
    </button>`).join('');
  grid.querySelectorAll('[data-lesson]').forEach(btn => btn.addEventListener('click', () => loadLesson(Number(btn.dataset.lesson), true)));
}

function loadLesson(i, scroll=false){
  const t = T(); const lessons = LESSONS();
  currentLesson = Math.min(i, lessons.length - 1); currentSlide = 0; stop();
  const l = lessons[currentLesson];
  $('lessonNumber').textContent = `${t.lessons.word} ${l.id} ${t.lessons.of} ${lessons.length}`;
  $('lessonTitle').textContent = l.title;
  $('doneCheck').checked = !!completed[l.id];
  $('read').innerHTML = `<h3>${t.read.goals}</h3>${list(l.goals)}<h3>${t.read.full}</h3>${l.read}<h3>${t.read.summary}</h3><p>${l.short}</p>`;
  $('examples').innerHTML = `<h3>${t.examples.title}</h3>${l.examples.map(codeBlock).join('')}`;
  $('practice').innerHTML = `<h3>${t.practice.title}</h3>${list(l.practice, 'practice-list')}<div class="callout"><strong>${t.practice.tip}</strong> ${t.practice.tipBody}</div>`;
  $('quiz').innerHTML = `<h3>${t.quiz.title}</h3>${l.quiz.map((q,idx)=>`<div class="quiz-q"><strong>${t.quiz.q} ${idx+1}: ${q[0]}</strong><details><summary>${t.quiz.showAnswer}</summary><p>${q[1]}</p></details></div>`).join('')}`;
  renderResources(l);
  renderPodcast();
  renderSlide(); renderLessonGrid();
  renderTutor();
  if(scroll) document.querySelector('.lesson-view').scrollIntoView({behavior:'smooth'});
}

function renderResources(lesson){
  const t = T();
  const el = $('resources');
  if(!el) return;
  const items = (RESOURCES[TRACK] || {})[lesson.id] || [];
  const rows = items.map(r => {
    let host = '';
    try { host = new URL(r.url).hostname.replace(/^www\./, ''); } catch(e) { host = ''; }
    const label = LANG === 'he' ? r.he : r.en;
    return `<li class="resource-item"><a href="${r.url}" target="_blank" rel="noopener noreferrer"><span class="resource-title">${label}</span><span class="resource-host">${host}</span></a></li>`;
  }).join('');
  el.innerHTML = `<h3>${t.resources.title}</h3><p class="resources-subtitle">${t.resources.subtitle}</p><ul class="resource-list">${rows}</ul>`;
}

function renderSlide(){
  const t = T(); const l = LESSONS()[currentLesson];
  const s = l.slides[currentSlide];
  $('slideBadge').textContent = t.player.badge(l.id, currentSlide+1);
  $('slideTitle').textContent = s[0];
  $('slideBody').innerHTML = `<p>${s[1]}</p>`;
  $('slideNarration').textContent = t.player.narration(s[2]);
  $('slideCounter').textContent = `${currentSlide+1} / ${l.slides.length}`;
  elapsed = 0;
  $('slideProgress').style.width = '0%';
}

function tick(){
  elapsed += .25;
  $('slideProgress').style.width = Math.min(100, elapsed / slideSeconds * 100) + '%';
  const l = LESSONS()[currentLesson];
  if(elapsed >= slideSeconds){
    if(currentSlide < l.slides.length - 1){ currentSlide++; renderSlide(); }
    else { stop(); $('playBtn').textContent = T().player.replay; }
  }
}
function play(){ if(playing) return; playing = true; $('playBtn').textContent = T().player.pause; timer=setInterval(tick,250); }
function stop(){ playing=false; if(timer) clearInterval(timer); timer=null; $('playBtn').textContent = T().player.play; }

$('playBtn').addEventListener('click', () => { playing ? stop() : play(); });
$('nextSlide').addEventListener('click', () => { stop(); const l=LESSONS()[currentLesson]; if(currentSlide<l.slides.length-1){currentSlide++; renderSlide();} });
$('prevSlide').addEventListener('click', () => { stop(); if(currentSlide>0){currentSlide--; renderSlide();} });
$('doneCheck').addEventListener('change', e => { const id=LESSONS()[currentLesson].id; if(e.target.checked) completed[id]=true; else delete completed[id]; localStorage.setItem(progressKey(), JSON.stringify(completed)); renderLessonGrid(); });

Array.from(document.querySelectorAll('.tab')).forEach(btn => btn.addEventListener('click', () => {
  document.querySelectorAll('.tab').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected','false'); });
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  btn.classList.add('active'); btn.setAttribute('aria-selected','true'); $(btn.dataset.tab).classList.add('active');
}));

$('contrastBtn').addEventListener('click', () => document.body.classList.toggle('high-contrast'));
$('fontBtn').addEventListener('click', () => document.body.classList.toggle('large-text'));
$('resetProgress').addEventListener('click', () => { if(confirm(T().resetConfirm)){ completed={}; localStorage.removeItem(progressKey()); $('doneCheck').checked=false; renderLessonGrid(); } });

document.addEventListener('keydown', e => {
  if(e.key === 'ArrowLeft') $('nextSlide').click();
  if(e.key === 'ArrowRight') $('prevSlide').click();
  if(e.key === ' ') { e.preventDefault(); $('playBtn').click(); }
});

// ---------- track & language switching ----------
function switchTrack(track){
  if(track === TRACK) return;
  TRACK = track; localStorage.setItem('courseTrack', TRACK);
  completed = JSON.parse(localStorage.getItem(progressKey()) || '{}');
  currentLesson = 0;
  renderStaticUI(); renderLessonGrid(); loadLesson(0);
}
function switchLang(lang){
  if(lang === LANG) return;
  LANG = lang; localStorage.setItem('courseLang', LANG);
  renderStaticUI(); renderLessonGrid(); loadLesson(Math.min(currentLesson, LESSONS().length-1));
}
$('trackDevops').addEventListener('click', () => switchTrack('devops'));
$('trackAi').addEventListener('click', () => switchTrack('ai'));
$('trackDevopsHero').addEventListener('click', () => switchTrack('devops'));
$('trackAiHero').addEventListener('click', () => switchTrack('ai'));
$('langHe').addEventListener('click', () => switchLang('he'));
$('langEn').addEventListener('click', () => switchLang('en'));


// ---------- Human-teacher / NotebookLM-style narration ----------
let voices = [];
let podcastSpeaking = false;

function buildPodcastLines(lesson){ return T().podcast.lines(lesson); }

function renderPodcast(){
  const lesson = LESSONS()[currentLesson];
  const lines = buildPodcastLines(lesson);
  const el = $('podcastTranscript');
  if(!el) return;
  el.innerHTML = lines.map((line, i) => `<article class="line ${line.role}" id="podLine${i}"><span class="speaker">${line.speaker}</span><p>${line.text}</p></article>`).join('');
}

function loadVoices(){
  if(!('speechSynthesis' in window)) return;
  voices = speechSynthesis.getVoices();
  const select = $('voiceSelect');
  if(!select) return;
  const prefix = LANG === 'he' ? 'he' : 'en';
  const matched = voices.filter(v => (v.lang || '').toLowerCase().startsWith(prefix));
  const preferred = matched.length ? matched : voices;
  select.innerHTML = preferred.map(v => `<option value="${voices.indexOf(v)}">${v.name} (${v.lang})</option>`).join('') || `<option value="">${T().podcast.noVoice}</option>`;
}

function speakPodcast(){
  if(!('speechSynthesis' in window)){ alert(T().speechNotSupported); return; }
  stopPodcast();
  podcastSpeaking = true;
  const lines = buildPodcastLines(LESSONS()[currentLesson]);
  let idx = 0;
  const selectedIndex = Number(($('voiceSelect') || {}).value);
  const prefix = LANG === 'he' ? 'he' : 'en';
  const selectedVoice = voices[selectedIndex] || voices.find(v => (v.lang || '').toLowerCase().startsWith(prefix)) || null;

  function speakNext(){
    document.querySelectorAll('.line').forEach(x => x.classList.remove('speaking'));
    if(!podcastSpeaking || idx >= lines.length){ podcastSpeaking = false; return; }
    const current = document.getElementById(`podLine${idx}`);
    if(current){ current.classList.add('speaking'); current.scrollIntoView({behavior:'smooth', block:'center'}); }
    const u = new SpeechSynthesisUtterance(`${lines[idx].speaker}: ${lines[idx].text}`);
    if(selectedVoice) u.voice = selectedVoice;
    u.lang = selectedVoice?.lang || (LANG === 'he' ? 'he-IL' : 'en-US');
    u.rate = lines[idx].role === 'student' ? 1.0 : 0.92;
    u.pitch = lines[idx].role === 'student' ? 1.08 : 0.95;
    u.onend = () => { idx++; setTimeout(speakNext, 250); };
    u.onerror = () => { idx++; setTimeout(speakNext, 250); };
    speechSynthesis.speak(u);
  }
  speakNext();
}

function stopPodcast(){
  podcastSpeaking = false;
  if('speechSynthesis' in window) speechSynthesis.cancel();
  document.querySelectorAll('.line').forEach(x => x.classList.remove('speaking'));
}

if('speechSynthesis' in window){
  loadVoices();
  speechSynthesis.onvoiceschanged = loadVoices;
}
$('speakPodcast').addEventListener('click', speakPodcast);
$('stopPodcast').addEventListener('click', stopPodcast);


// ---------- Interactive private tutor ----------
let tutorVoiceEnabled = true;
let tutorScore = JSON.parse(localStorage.getItem(tutorScoreKey()) || '{}');
let tutorPersona = localStorage.getItem('tutorPersona') || 'female';

function getTeacherProfile(){ return T().tutor.profiles[tutorPersona] || T().tutor.profiles.female; }

function applyTeacherPersona(){
  const profile = getTeacherProfile();
  const select = $('teacherPersona');
  const avatar = $('teacherAvatar');
  const title = $('teacherName');
  if(select) select.value = tutorPersona;
  if(title) title.textContent = profile.title;
  if(avatar){
    avatar.classList.toggle('female', tutorPersona === 'female');
    avatar.classList.toggle('male', tutorPersona === 'male');
  }
}

function renderTutor(){
  const log = $('chatLog');
  const prompts = $('quickPrompts');
  if(!log || !prompts) return;
  const t = T();
  const lesson = LESSONS()[currentLesson];
  applyTeacherPersona();
  const profile = getTeacherProfile();
  log.innerHTML = '';
  addTeacherMessage(t.tutor.greet(profile.name, profile.tone, lesson.id, lesson.title), false);
  prompts.innerHTML = t.tutor.quickPrompts.map(p => `<button type="button" data-prompt="${p}">${p}</button>`).join('');
  prompts.querySelectorAll('[data-prompt]').forEach(b => b.addEventListener('click', () => handleTutorQuestion(b.dataset.prompt)));
  updateTutorStatus();
}

function addTeacherMessage(text, speak=true){
  const log = $('chatLog'); if(!log) return;
  const profile = getTeacherProfile();
  const div = document.createElement('div'); div.className='msg teacher';
  div.innerHTML = `<span class="name">${profile.name}</span>${text}`;
  log.appendChild(div); log.scrollTop = log.scrollHeight;
  if(speak && tutorVoiceEnabled) speakTutor(stripHtmlGlobal(text));
}
function addUserMessage(text){
  const log = $('chatLog'); if(!log) return;
  const div = document.createElement('div'); div.className='msg user';
  div.innerHTML = `<span class="name">${T().tutor.you}</span>${escapeHtml(text)}`;
  log.appendChild(div); log.scrollTop = log.scrollHeight;
}

function speakTutor(text){
  if(!('speechSynthesis' in window)) return;
  speechSynthesis.cancel();
  const profile = getTeacherProfile();
  const avatar = $('teacherAvatar');
  if(avatar) avatar.classList.add('speaking');
  const selectedIndex = Number(($('voiceSelect') || {}).value);
  const prefix = LANG === 'he' ? 'he' : 'en';
  const langVoices = voices.filter(v => (v.lang || '').toLowerCase().startsWith(prefix));
  const selectedVoice = voices[selectedIndex] || langVoices.find(v => tutorPersona === 'female' && /female|woman|noa|carmit/i.test(v.name)) || langVoices[0] || null;
  const u = new SpeechSynthesisUtterance(text);
  if(selectedVoice) u.voice = selectedVoice;
  u.lang = selectedVoice?.lang || (LANG === 'he' ? 'he-IL' : 'en-US');
  u.rate = profile.rate; u.pitch = profile.pitch;
  u.onend = () => avatar && avatar.classList.remove('speaking');
  u.onerror = () => avatar && avatar.classList.remove('speaking');
  speechSynthesis.speak(u);
}

function updateTutorStatus(){
  const lesson = LESSONS()[currentLesson];
  const score = tutorScore[lesson.id] || 0;
  const el = $('tutorStatus');
  if(el) el.innerHTML = `${T().lessons.word} ${lesson.id}: ${lesson.title}<br><span class="learning-score">${T().tutor.scoreLabel} ${score}</span>`;
}

function handleTutorQuestion(raw){
  const q = (raw || '').trim();
  if(!q) return;
  addUserMessage(q);
  const t = T().tutor;
  const lesson = LESSONS()[currentLesson];
  const lower = q.toLowerCase();
  let answer = '';
  const has = (arr) => arr.some(k => lower.includes(k.toLowerCase()));

  if(has(t.triggers.quiz)){
    const qa = lesson.quiz[Math.floor(Math.random()*lesson.quiz.length)];
    answer = `<strong>${t.quizLead}</strong> ${qa[0]}<br><br>${t.quizHint}`;
    sessionStorage.setItem('lastTutorAnswer', qa[1]);
  } else if(has(t.triggers.answer)){
    answer = `<strong>${t.answerLead}</strong> ${sessionStorage.getItem('lastTutorAnswer') || lesson.quiz[0][1]}<br><br>${t.answerFollow}`;
    tutorScore[lesson.id] = (tutorScore[lesson.id] || 0) + 1;
    localStorage.setItem(tutorScoreKey(), JSON.stringify(tutorScore));
  } else if(has(t.triggers.example)){
    answer = `<strong>${t.exampleLead}</strong><br>${codeBlock(lesson.examples[0] || t.noExample)}<br>${t.exampleFollow}`;
  } else if(has(t.triggers.practice)){
    answer = `<strong>${t.practiceLead}</strong>${list(lesson.practice.slice(0,4), 'practice-list')}<br>${t.practiceFollow}`;
  } else if(has(t.triggers.confused)){
    answer = t.confused(lesson.title, lesson.short);
  } else if(has(t.triggers.project)){
    answer = t.project(lesson.title);
  } else {
    const keys = lessonKeywords(lesson);
    const hit = keys.find(k => lower.includes(k.toLowerCase()));
    if(hit){
      answer = t.keywordHit(hit, stripHtmlGlobal(lesson.read).slice(0,300));
      tutorScore[lesson.id] = (tutorScore[lesson.id] || 0) + 1;
      localStorage.setItem(tutorScoreKey(), JSON.stringify(tutorScore));
    } else {
      answer = t.fallback(lesson.title, stripHtmlGlobal(lesson.read).slice(0,360), lessonKeywords(lesson).join(', '));
    }
  }
  setTimeout(() => { addTeacherMessage(answer); updateTutorStatus(); }, 350);
}

const chatForm = $('chatForm');
if(chatForm){
  chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = $('chatInput');
    handleTutorQuestion(input.value);
    input.value = '';
  });
}
const tutorIntro = $('tutorIntro');
if(tutorIntro) tutorIntro.addEventListener('click', () => handleTutorQuestion(T().tutor.quickPrompts[0]));
const tutorSpeakToggle = $('tutorSpeakToggle');
if(tutorSpeakToggle) tutorSpeakToggle.addEventListener('click', () => {
  tutorVoiceEnabled = !tutorVoiceEnabled;
  tutorSpeakToggle.textContent = tutorVoiceEnabled ? T().tutor.speakOn : T().tutor.speakOff;
  if(!tutorVoiceEnabled && 'speechSynthesis' in window) speechSynthesis.cancel();
});
const teacherPersonaSelect = $('teacherPersona');
if(teacherPersonaSelect) teacherPersonaSelect.addEventListener('change', () => {
  tutorPersona = teacherPersonaSelect.value;
  localStorage.setItem('tutorPersona', tutorPersona);
  if('speechSynthesis' in window) speechSynthesis.cancel();
  renderTutor();
});

// ---------- initial render (after all state above is declared) ----------
renderStaticUI();
renderLessonGrid();
loadLesson(0);
