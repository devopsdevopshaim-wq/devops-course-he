function stripHtmlGlobal(html){
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

const UI = {
  he: {
    dir: 'rtl', htmlLang: 'he',
    metaTitle: `האקדמיה שלי — DevOps ו-AI Architect`,
    brand: `DevOps + AI Architect`,
    nav: { contrast: `ניגודיות גבוהה`, font: `הגדל טקסט`, reset: `איפוס התקדמות` },
    hero: {
      eyebrow: `אתר לימוד מקומי`,
      title: `הקורס שלי ל-DevOps ו-AI Architect`,
      descByTrack: {
        devops: `12 שיעורים מסודרים מהבסיס ועד פרויקט סיום: Linux, Git, Python, Networking, Docker, AWS, Terraform, Ansible, Jenkins, Kubernetes, ArgoCD ו־GitOps.`,
        ai: `12 שיעורים מ-LLM ו-Prompting ועד תזמור רב-סוכנים ופרויקט סיום שמחבר לעוזר ה-DevOps הרב-סוכני שכבר בנית ב-n8n.`
      },
      startBtn: `התחל ללמוד`, optionsBtn: `אפשרויות למידה`
    },
    how: {
      title: `איך להשתמש באתר`,
      cards: [
        [`1. צפייה`, `בכל שיעור יש מצב שקופיות עם כפתור הפעלה, כמו סרטון לימוד.`],
        [`2. קריאה`, `יש הסבר בעברית פשוט, מושגים חשובים ודוגמאות קוד.`],
        [`3. תרגול`, `בסוף כל שיעור יש משימות וצ׳ק־ליסט לסימון התקדמות.`]
      ]
    },
    options: {
      title: `כל אפשרויות הלמידה`,
      items: [
        `<strong>מצב וידאו:</strong> שקופיות מתקדמות בלחיצה על Play.`,
        `<strong>מצב קריאה:</strong> טקסט מלא בעברית עם הסבר ברור.`,
        `<strong>דוגמאות מעשיות:</strong> פקודות ודוגמאות קוד לכל שיעור.`,
        `<strong>תרגול:</strong> משימות שאתה מבצע במחשב שלך.`,
        `<strong>צ׳ק־ליסט:</strong> סימון שיעורים שהשלמת נשמר בדפדפן.`,
        `<strong>נגישות:</strong> תמיכה במקלדת, ניגודיות גבוהה, הגדלת טקסט, HTML סמנטי.`,
        `<strong>חזרה מהירה:</strong> סיכום קצר ומושגים חשובים לכל שיעור.`,
        `<strong>שני מסלולים:</strong> DevOps ו-AI Architect, באותו אתר, בעברית או באנגלית.`
      ]
    },
    lessons: { title: `12 השיעורים`, word: `שיעור`, of: `מתוך`, notDone: `עדיין לא הושלם`, done: `✅ הושלם`, ariaOpen: (id, title) => `פתח שיעור ${id}: ${title}` },
    lessonView: { doneLabel: `סיימתי את השיעור` },
    tabs: { slides: `וידאו שקופיות`, read: `הסבר מלא`, examples: `דוגמאות`, practice: `תרגול`, tutor: `מורה פרטי AI`, podcast: `מורה אנושי`, quiz: `בדיקה עצמית`, resources: `מקורות` },
    resources: { title: `מקורות מהאינטרנט`, subtitle: `תיעוד רשמי ומאמרים מקצועיים להעמקה בנושא השיעור.` },
    read: { goals: `מטרות השיעור`, full: `הסבר מלא`, summary: `סיכום קצר` },
    examples: { title: `דוגמאות מעשיות` },
    practice: { title: `תרגול מעשי`, tip: `טיפ למידה:`, tipBody: `אל תמשיך לשיעור הבא עד שביצעת לפחות שתי משימות בפועל.` },
    quiz: { title: `בדיקה עצמית`, q: `שאלה`, showAnswer: `הצג תשובה` },
    player: { play: `▶ הפעל`, pause: `⏸ עצור`, replay: `▶ הפעל מחדש`, prev: `הקודם`, next: `הבא`, badge: (id, n) => `שיעור ${id} • שקופית ${n}`, narration: (t) => `קריינות מוצעת: ${t}` },
    tutor: {
      pickLabel: `בחר/י מורה:`, femaleOpt: `נועה - מורה נשית`, maleOpt: `דניאל - מורה גבר`,
      profiles: {
        female: { name: `נועה`, title: `נועה, המורה הפרטית שלך`, tone: `אני אלמד אותך לאט, ברור ובגובה העיניים. בכל רגע אפשר לעצור אותי ולשאול שאלה.`, rate: 0.9, pitch: 1.14 },
        male: { name: `דניאל`, title: `דניאל, המורה הפרטי שלך`, tone: `אני אלמד אותך בצורה רגועה ומעשית. נתקדם צעד אחרי צעד עד שזה יושב טוב.`, rate: 0.92, pitch: 0.96 }
      },
      speakOn: `🔊 קול פעיל`, speakOff: `🔇 קול כבוי`, introBtn: `התחל הסבר`,
      chatPlaceholder: `שאל אותי משהו על השיעור... לדוגמה: תסביר לי בפשטות`, sendBtn: `שלח`,
      quickPrompts: [`תסביר לי בפשטות`, `תן דוגמה מעשית`, `מה חשוב לזכור?`, `בחן אותי`, `אני לא מבין`, `איך זה קשור לפרויקט?`],
      statusReady: `מוכן ללמוד איתך את השיעור.`, scoreLabel: `נקודות הבנה:`, you: `אתה`,
      greet: (name, tone, lessonNum, lessonTitle) => `שלום, אני ${name}. אני איתך בשיעור ${lessonNum}: ${lessonTitle}. ${tone} אפשר לשאול אותי שאלות, לבקש דוגמה, לבקש תרגול, או לכתוב "בחן אותי".`,
      triggers: { quiz: [`בחן`, `quiz`, `שאלה`], answer: [`תשובה`], example: [`דוג`, `פקוד`, `מעשי`], practice: [`תרג`, `משימה`], confused: [`לא מבין`, `קשה`, `פשוט`], project: [`פרויקט`, `קשור`] },
      quizLead: `שאלת בדיקה:`, quizHint: `נסה לענות בצ׳אט. אם תרצה תשובה, כתוב: תשובה.`,
      answerLead: `התשובה:`, answerFollow: `עכשיו נסה להסביר את זה במילים שלך.`,
      exampleLead: `דוגמה מעשית:`, exampleFollow: `תעבור שורה־שורה ותשאל אותי מה כל שורה עושה.`, noExample: `אין דוגמה זמינה`,
      practiceLead: `תרגול מומלץ עכשיו:`, practiceFollow: `בחר משימה אחת ותבצע אותה לפני שממשיכים.`,
      confused: (title, short) => `בוא נפשט: <strong>${title}</strong> הוא חלק אחד בשרשרת הקורס. ${short}<br><br>תחשוב על זה כך: קודם מבינים למה צריך את זה, אחר כך רואים דוגמה אחת, ואז מתרגלים בידיים. אל תנסה לזכור הכול בבת אחת.`,
      project: (title) => `בפרויקט הסיום הנושא <strong>${title}</strong> משתלב בתוך תמונה מלאה יותר. השיעור הזה נותן לך אחד מהחלקים בפאזל.`,
      keywordHit: (kw, snippet) => `שאלה טובה על <strong>${kw}</strong>. בתוך השיעור הזה, הרעיון הוא להבין איך ${kw} עוזר לנו לעבוד בצורה מסודרת. ${snippet}<br><br>רוצה דוגמה? כתוב: תן דוגמה מעשית.`,
      fallback: (title, snippet, keywords) => `אני אענה לפי השיעור הנוכחי: <strong>${title}</strong>.<br>${snippet}<br><br>אם אתה רוצה תשובה יותר מדויקת, שאל על אחד מהמושגים האלה: ${keywords}.`
    },
    podcast: {
      heading: `מצב מורה אנושי בסגנון NotebookLM`,
      desc: `שיחה לימודית בין מדריך לתלמיד, עם קריינות קולית דרך הדפדפן ותמלול מלא לקריאה.`,
      voiceLabel: `קול:`, speakBtn: `▶ הפעל קריינות`, stopBtn: `■ עצור`, noVoice: `קול ברירת מחדל`,
      mentor: `המדריך`, student: `התלמיד`,
      lines: (lesson) => {
        const goals = lesson.goals.join(`, `);
        const keyExample = lesson.examples[0] ? lesson.examples[0].split('\n').slice(0, 4).join(' / ') : '';
        return [
          { speaker: `המדריך`, role: 'mentor', text: `ברוכים הבאים לשיעור ${lesson.id}: ${lesson.title}. היום נלמד את הנושא בצורה רגועה, צעד אחרי צעד, כאילו אנחנו יושבים יחד מול המחשב.` },
          { speaker: `התלמיד`, role: 'student', text: `לפני שנכנסים לפרטים, מה הדבר הכי חשוב שאני צריך להבין בשיעור הזה?` },
          { speaker: `המדריך`, role: 'mentor', text: `המטרה המרכזית היא: ${lesson.short}. בנוסף, נתמקד בשלושה דברים: ${goals}.` },
          { speaker: `התלמיד`, role: 'student', text: `זה נשמע טוב, אבל איך זה מתחבר לעבודה אמיתית?` },
          { speaker: `המדריך`, role: 'mentor', text: `אנחנו לא לומדים כלי בשביל הכלי. אנחנו לומדים איך הוא עוזר לנו לבנות, לבדוק או לתפעל מערכת בצורה ברורה ואוטומטית.` },
          { speaker: `המדריך`, role: 'mentor', text: `הנה הרעיון המרכזי מתוך השיעור: ${stripHtmlGlobal(lesson.read).slice(0, 420)}.` },
          { speaker: `התלמיד`, role: 'student', text: `אפשר דוגמה מעשית, משהו שאני יכול לראות או להריץ?` },
          { speaker: `המדריך`, role: 'mentor', text: `כן. דוגמה מהשיעור היא: ${keyExample}. אל תנסה לזכור בעל פה — תבין מה כל שורה עושה.` },
          { speaker: `התלמיד`, role: 'student', text: `ומה אני צריך לעשות עכשיו כדי לתרגל?` },
          { speaker: `המדריך`, role: 'mentor', text: `התרגול הכי טוב עכשיו: ${lesson.practice.slice(0, 3).join('. ')}. תעשה את זה לאט, ותסמן שסיימת רק אחרי שניסית בעצמך.` },
          { speaker: `המדריך`, role: 'mentor', text: `סיכום קצר: אם הבנת את ${lesson.title}, אתה יכול להמשיך לשיעור הבא. אם לא — תחזור לדוגמאות, ואל תמהר.` }
        ];
      }
    },
    footer: `קורס מקומי ללמידה. הקובץ עובד ללא אינטרנט אחרי שנפתח בדפדפן.`,
    resetConfirm: `לאפס את סימון ההתקדמות?`,
    speechNotSupported: `הדפדפן הזה לא תומך בקריינות קולית. נסה Chrome או Edge.`,
    track: { devops: `מסלול DevOps`, ai: `מסלול AI Architect`, selectLabel: `איזה מסלול תרצה ללמוד?` },
    lang: { he: `עברית`, en: `English` },
    skip: `דלג לתוכן המרכזי`
  },

  en: {
    dir: 'ltr', htmlLang: 'en',
    metaTitle: `My Academy — DevOps & AI Architect`,
    brand: `DevOps + AI Architect`,
    nav: { contrast: `High contrast`, font: `Larger text`, reset: `Reset progress` },
    hero: {
      eyebrow: `Local learning site`,
      title: `My DevOps & AI Architect Course`,
      descByTrack: {
        devops: `12 structured lessons from the basics to a final project: Linux, Git, Python, Networking, Docker, AWS, Terraform, Ansible, Jenkins, Kubernetes, ArgoCD and GitOps.`,
        ai: `12 lessons from LLMs and prompting to multi-agent orchestration and a capstone that connects straight to the multi-agent DevOps assistant you already built in n8n.`
      },
      startBtn: `Start learning`, optionsBtn: `Learning options`
    },
    how: {
      title: `How to use this site`,
      cards: [
        [`1. Watch`, `Every lesson has a slide-player mode with a play button, like a short video course.`],
        [`2. Read`, `A clear written explanation, key concepts, and code examples.`],
        [`3. Practice`, `Every lesson ends with hands-on tasks and a checklist to track progress.`]
      ]
    },
    options: {
      title: `All the learning options`,
      items: [
        `<strong>Video mode:</strong> auto-advancing slides with a Play button.`,
        `<strong>Reading mode:</strong> full written explanation, clear and direct.`,
        `<strong>Practical examples:</strong> commands and code samples for every lesson.`,
        `<strong>Practice:</strong> hands-on tasks you run on your own machine.`,
        `<strong>Checklist:</strong> completed lessons are saved in your browser.`,
        `<strong>Accessibility:</strong> keyboard support, high contrast, larger text, semantic HTML.`,
        `<strong>Quick review:</strong> a short summary and key concepts per lesson.`,
        `<strong>Two tracks:</strong> DevOps and AI Architect, one site, Hebrew or English.`
      ]
    },
    lessons: { title: `12 Lessons`, word: `Lesson`, of: `of`, notDone: `Not completed yet`, done: `✅ Completed`, ariaOpen: (id, title) => `Open lesson ${id}: ${title}` },
    lessonView: { doneLabel: `I completed this lesson` },
    tabs: { slides: `Slide video`, read: `Full explanation`, examples: `Examples`, practice: `Practice`, tutor: `Private AI tutor`, podcast: `Human-style tutor`, quiz: `Self-check`, resources: `Resources` },
    resources: { title: `Resources from the web`, subtitle: `Official documentation and professional articles to go deeper on this lesson.` },
    read: { goals: `Lesson goals`, full: `Full explanation`, summary: `Quick summary` },
    examples: { title: `Practical examples` },
    practice: { title: `Hands-on practice`, tip: `Learning tip:`, tipBody: `Don't move to the next lesson until you've actually done at least two tasks.` },
    quiz: { title: `Self-check`, q: `Question`, showAnswer: `Show answer` },
    player: { play: `▶ Play`, pause: `⏸ Pause`, replay: `▶ Replay`, prev: `Previous`, next: `Next`, badge: (id, n) => `Lesson ${id} • Slide ${n}`, narration: (t) => `Suggested narration: ${t}` },
    tutor: {
      pickLabel: `Choose a teacher:`, femaleOpt: `Noa - female teacher`, maleOpt: `Daniel - male teacher`,
      profiles: {
        female: { name: `Noa`, title: `Noa, your private tutor`, tone: `I'll teach you slowly, clearly, and at eye level. You can stop me any time and ask a question.`, rate: 0.9, pitch: 1.14 },
        male: { name: `Daniel`, title: `Daniel, your private tutor`, tone: `I'll teach you in a calm, practical way. We'll move step by step until it clicks.`, rate: 0.92, pitch: 0.96 }
      },
      speakOn: `🔊 Voice on`, speakOff: `🔇 Voice off`, introBtn: `Start explaining`,
      chatPlaceholder: `Ask me something about the lesson... e.g. explain it simply`, sendBtn: `Send`,
      quickPrompts: [`Explain it simply`, `Give a practical example`, `What's important to remember?`, `Test me`, `I don't understand`, `How does this relate to the project?`],
      statusReady: `Ready to learn this lesson with you.`, scoreLabel: `Understanding points:`, you: `You`,
      greet: (name, tone, lessonNum, lessonTitle) => `Hi, I'm ${name}. I'm here with you for lesson ${lessonNum}: ${lessonTitle}. ${tone} You can ask me questions, request an example, ask for practice, or type "test me".`,
      triggers: { quiz: [`test me`, `quiz`, `question`], answer: [`answer`], example: [`example`, `command`, `practical`], practice: [`practice`, `task`], confused: [`don't understand`, `confused`, `simpler`, `simple`], project: [`project`, `relate`] },
      quizLead: `Check question:`, quizHint: `Try answering in the chat. If you want the answer, type: answer.`,
      answerLead: `The answer:`, answerFollow: `Now try explaining it in your own words.`,
      exampleLead: `Practical example:`, exampleFollow: `Go line by line and ask me what each line does.`, noExample: `No example available`,
      practiceLead: `Recommended practice right now:`, practiceFollow: `Pick one task and do it before moving on.`,
      confused: (title, short) => `Let's simplify: <strong>${title}</strong> is one part of the chain. ${short}<br><br>Think of it this way: first understand why you need it, then see one example, then practice hands-on. Don't try to remember everything at once.`,
      project: (title) => `In the capstone project, <strong>${title}</strong> fits into a bigger picture. This lesson gives you one piece of that puzzle.`,
      keywordHit: (kw, snippet) => `Good question about <strong>${kw}</strong>. In this lesson, the idea is to understand how ${kw} helps us work in an organized way. ${snippet}<br><br>Want an example? Type: give a practical example.`,
      fallback: (title, snippet, keywords) => `I'll answer based on the current lesson: <strong>${title}</strong>.<br>${snippet}<br><br>For a more precise answer, ask about one of these concepts: ${keywords}.`
    },
    podcast: {
      heading: `NotebookLM-style human tutor mode`,
      desc: `A learning conversation between a mentor and a student, with browser text-to-speech narration and a full transcript to read.`,
      voiceLabel: `Voice:`, speakBtn: `▶ Play narration`, stopBtn: `■ Stop`, noVoice: `Default voice`,
      mentor: `Mentor`, student: `Student`,
      lines: (lesson) => {
        const goals = lesson.goals.join(`, `);
        const keyExample = lesson.examples[0] ? lesson.examples[0].split('\n').slice(0, 4).join(' / ') : '';
        return [
          { speaker: `Mentor`, role: 'mentor', text: `Welcome to lesson ${lesson.id}: ${lesson.title}. Today we'll go through it calmly, step by step, as if we're sitting together at the computer.` },
          { speaker: `Student`, role: 'student', text: `Before we get into details, what's the single most important thing I need to understand in this lesson?` },
          { speaker: `Mentor`, role: 'mentor', text: `The main goal is: ${lesson.short}. On top of that, we'll focus on three things: ${goals}.` },
          { speaker: `Student`, role: 'student', text: `Sounds good, but how does this connect to real work?` },
          { speaker: `Mentor`, role: 'mentor', text: `We don't learn a tool for its own sake. We learn how it helps us build, test, or operate a system in a clear, automatic way.` },
          { speaker: `Mentor`, role: 'mentor', text: `Here's the core idea from the lesson: ${stripHtmlGlobal(lesson.read).slice(0, 420)}.` },
          { speaker: `Student`, role: 'student', text: `Can I get a practical example, something I can see or run?` },
          { speaker: `Mentor`, role: 'mentor', text: `Sure. An example from the lesson: ${keyExample}. Don't try to memorize it — understand what each line does.` },
          { speaker: `Student`, role: 'student', text: `And what should I do now to practice?` },
          { speaker: `Mentor`, role: 'mentor', text: `The best practice right now: ${lesson.practice.slice(0, 3).join('. ')}. Take it slow, and only check it off after you've actually tried it yourself.` },
          { speaker: `Mentor`, role: 'mentor', text: `Quick summary: if you understood ${lesson.title}, you can move to the next lesson. If not — go back to the examples, and don't rush.` }
        ];
      }
    },
    footer: `A local learning course. This file works offline once opened in a browser.`,
    resetConfirm: `Reset your completion progress?`,
    speechNotSupported: `This browser doesn't support voice narration. Try Chrome or Edge.`,
    track: { devops: `DevOps track`, ai: `AI Architect track`, selectLabel: `Which track do you want to learn?` },
    lang: { he: `עברית`, en: `English` },
    skip: `Skip to main content`
  }
};

const COURSES = {
  devops: { he: COURSE_DEVOPS_HE, en: COURSE_DEVOPS_EN },
  ai: { he: COURSE_AI_HE, en: COURSE_AI_EN }
};
