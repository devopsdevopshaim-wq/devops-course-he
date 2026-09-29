const COURSE_DEVOPS_HE = [
  {
    id: 1, title: `מה זה DevOps?`, short: `מפת הדרך: איך קוד הופך למערכת שרצה בענן.`,
    goals: [`להבין מה DevOps פותר`, `להכיר את שרשרת הכלים`, `לבנות סדר לימוד נכון`],
    slides: [
      [`מה זה DevOps?`, `DevOps הוא שילוב של תרבות, תהליך וכלים שמחברים בין פיתוח, בדיקות, תשתיות ופריסה.`, `המטרה היא להעביר שינוי מקוד למערכת אמיתית בצורה מהירה, בטוחה וחוזרת על עצמה.`],
      [`הבעיה`, `בלי DevOps יש הרבה עבודה ידנית: התקנות, העתקת קבצים, בדיקות ידניות, פריסות מסוכנות ותקלות שקשה לשחזר.`, `DevOps הופך פעולות כאלה לאוטומטיות ומתועדות.`],
      [`התמונה הגדולה`, `Git שומר קוד, Docker אורז אפליקציה, Jenkins בונה ובודק, Terraform יוצר תשתית, Kubernetes מריץ, ArgoCD מסנכרן לפי Git.`, `כל שיעור בקורס הוא חלק מהשרשרת הזאת.`],
      [`סדר נכון`, `Linux → Git → Networking → Python → Docker → AWS → Terraform → Ansible → Jenkins → Kubernetes → ArgoCD → פרויקט.`, `לא מדלגים על בסיס. בסיס טוב חוסך תסכול.`]
    ],
    read: `<p>DevOps הוא לא כלי אחד ולא תפקיד של "מתקין תוכנות". DevOps הוא דרך עבודה שבה מנסים להפוך את כל התהליך — מקוד ועד פריסה — לברור, אוטומטי, מדיד ושחזורי.</p><p>איש DevOps טוב מבין גם מערכות הפעלה, גם רשת, גם קוד, גם ענן וגם אוטומציה. הוא לא חייב להיות מומחה עמוק בכל תחום ביום הראשון, אבל הוא חייב להבין איך החלקים מתחברים.</p><div class="callout"><strong>זכור:</strong> DevOps = פחות ידני, יותר אוטומטי, פחות ניחושים, יותר תיעוד.</div>`,
    examples: [`זרימה לדוגמה:\n1. מפתח עושה push ל-GitHub\n2. Jenkins מזהה שינוי\n3. Jenkins מריץ בדיקות\n4. Docker בונה image\n5. Terraform יוצר תשתית\n6. Kubernetes מריץ את האפליקציה\n7. ArgoCD דואג שהמצב ב-cluster יתאים ל-Git`],
    practice: [`פתח את תיקיית DEVOPS וזהה את הכלים`, `כתוב במחברת: מה התפקיד של Docker? מה התפקיד של Git?`, `סמן אילו נושאים אתה כבר מכיר ואילו חדשים לך`],
    quiz: [[`מה המטרה המרכזית של DevOps?`, `להפוך תהליך פיתוח-בדיקה-פריסה למהיר, בטוח ואוטומטי`], [`למה לא להתחיל ישר מ-Kubernetes?`, `כי צריך קודם להבין Linux, Git, רשתות ו-Docker`]]
  },
  {
    id: 2, title: `Linux / Ubuntu`, short: `הבסיס של רוב השרתים בעולם.`,
    goals: [`עבודה בטרמינל`, `קבצים והרשאות`, `שירותים ו-SSH`],
    slides: [
      [`למה Linux?`, `רוב שרתי הענן והקונטיינרים מבוססים Linux.`, `אם הטרמינל מפחיד אותך, DevOps יהיה קשה. פה הופכים אותו לכלי עבודה.`],
      [`פקודות בסיס`, `pwd, ls, cd, mkdir, touch, cp, mv, rm, cat, nano`, `אלה הפקודות היומיומיות שלך.`],
      [`הרשאות`, `chmod, chown, sudo, users, groups`, `הרשאות הן חלק מאבטחה ותפעול.`],
      [`שירותים`, `systemctl status/start/stop/restart`, `שרתים מריצים שירותים: nginx, docker, ssh ועוד.`]
    ],
    read: `<p>Linux הוא הבסיס. תלמד לזוז במערכת קבצים, לערוך קבצים, להבין הרשאות, להתקין חבילות ולבדוק שירותים.</p><p>חשוב לתרגל בידיים. קריאה בלבד לא מספיקה.</p>`,
    examples: [`pwd\nls -la\ncd /var/log\nmkdir devops-test\ntouch hello.txt\ncat hello.txt`, `sudo apt update\nsudo apt install nginx\nsystemctl status nginx`, `chmod 644 file.txt\nchmod +x script.sh\nchown user:user file.txt`],
    practice: [`פתח טרמינל Ubuntu או VM`, `צור תיקייה וקובץ`, `שנה הרשאות לקובץ`, `בדוק שירות עם systemctl`, `התחבר ב-SSH אם יש מכונה זמינה`],
    quiz: [[`מה עושה ls -la?`, `מציג קבצים כולל מוסתרים והרשאות`], [`מה ההבדל בין chmod ל-chown?`, `chmod משנה הרשאות, chown משנה בעלים`]]
  },
  {
    id: 3, title: `Git ו-GitHub`, short: `ניהול גרסאות ועבודה עם קוד.`,
    goals: [`Commit`, `Branch`, `Push/Pull`],
    slides: [
      [`מה זה Git?`, `Git שומר היסטוריה של שינויים בקוד.`, `אפשר לחזור אחורה, להשוות ולשתף.`],
      [`מה זה GitHub?`, `מקום לאחסן repositories ולעבוד בצוות.`, `CI/CD ו-GitOps מתחילים מ-Git.`],
      [`זרימה בסיסית`, `clone → edit → add → commit → push`, `זו פעולה שתעשה המון.`],
      [`Branches`, `Branch מאפשר לעבוד על שינוי בלי לשבור את main.`, `אחר כך עושים merge.`]
    ],
    read: `<p>Git הוא כלי חובה. DevOps בלי Git זה כמו לעבוד בלי היסטוריה. כל Pipeline מקצועי מתחיל משינוי ב-Git.</p>`,
    examples: [`git init\ngit status\ngit add .\ngit commit -m "first commit"`, `git clone https://github.com/user/repo.git\ngit pull\ngit push`, `git checkout -b feature/login\ngit checkout main\ngit merge feature/login`],
    practice: [`צור repo מקומי`, `הוסף README`, `בצע commit`, `צור branch`, `מזג אותו בחזרה`],
    quiz: [[`מה זה commit?`, `שמירה מתועדת של שינוי`], [`למה משתמשים ב-branch?`, `כדי לעבוד על שינוי בנפרד בלי לפגוע ב-main`]]
  },
  {
    id: 4, title: `Python בסיסי ל-DevOps`, short: `סקריפטים ואוטומציה קטנה.`,
    goals: [`משתנים ולולאות`, `קבצים`, `JSON/API`],
    slides: [
      [`למה Python?`, `DevOps משתמש ב-Python לאוטומציה, בדיקות, API ודוחות.`, `לא צריך להיות מתכנת בכיר כדי להתחיל.`],
      [`בסיס`, `variables, if, loops, functions`, `אלה אבני הבניין.`],
      [`קבצים ו-JSON`, `קריאה וכתיבה לקבצים, עבודה עם JSON`, `הרבה כלי DevOps מחזירים JSON.`],
      [`אוטומציה`, `סקריפט קטן יכול לחסוך עבודה ידנית חוזרת.`, `תתחיל ממשימות פשוטות.`]
    ],
    read: `<p>Python עוזר לך לחבר כלים. למשל: לקרוא רשימת שרתים, לבדוק זמינות, לשלוח בקשת API, לנתח JSON וליצור דוח.</p>`,
    examples: [`servers = ["web1", "db1", "cache1"]\nfor s in servers:\n    print("checking", s)`, `import json\ndata = '{"env":"dev","replicas":2}'\nobj = json.loads(data)\nprint(obj["env"])`, `from pathlib import Path\nPath("report.txt").write_text("DevOps report", encoding="utf-8")`],
    practice: [`כתוב סקריפט שמדפיס רשימת שרתים`, `קרא קובץ טקסט`, `צור JSON קטן והדפס ערך מתוכו`],
    quiz: [[`למה JSON חשוב?`, `כי APIs וכלי ענן רבים מחזירים מידע בפורמט JSON`], [`מה היתרון של סקריפט?`, `אוטומציה של פעולה חוזרת`]]
  },
  {
    id: 5, title: `Networking בסיסי`, short: `IP, DNS, פורטים ופתרון תקלות.`,
    goals: [`IP ו-Subnet`, `DNS`, `Ports ו-TCP/UDP`],
    slides: [
      [`למה רשתות?`, `כל מערכת מדברת עם מערכות אחרות.`, `בלי רשת קשה להבין למה אפליקציה לא זמינה.`],
      [`IP ו-Port`, `IP מזהה מכונה. Port מזהה שירות במכונה.`, `למשל SSH=22, HTTP=80, HTTPS=443.`],
      [`DNS`, `DNS מתרגם שם דומיין לכתובת IP.`, `הרבה תקלות הן בעצם תקלות DNS.`],
      [`כלי בדיקה`, `ping, tracert, nslookup, curl, Wireshark`, `אל תנחש — תבדוק.`]
    ],
    read: `<p>רשת היא שכבת החיבור. DevOps צריך לדעת לבדוק האם יש תקשורת, האם פורט פתוח, האם DNS עובד והאם firewall חוסם.</p>`,
    examples: [`ipconfig\nping google.com\ntracert google.com\nnslookup google.com`, `curl -I https://example.com`, `פורטים נפוצים:\n22 SSH\n80 HTTP\n443 HTTPS\n3000 Node dev\n8080 Jenkins/Tomcat`],
    practice: [`בדוק IP במחשב`, `הרץ ping`, `בדוק DNS עם nslookup`, `פתח Wireshark וצפה בתעבורה`],
    quiz: [[`מה ההבדל בין IP ל-Port?`, `IP מזהה מכונה, Port מזהה שירות`], [`מה עושה DNS?`, `מתרגם שם לכתובת IP`]]
  },
  {
    id: 6, title: `Docker`, short: `אריזת אפליקציות בקונטיינרים.`,
    goals: [`Image ו-Container`, `Dockerfile`, `Compose`],
    slides: [
      [`מה Docker פותר?`, `האפליקציה עובדת אותו דבר בכל מקום.`, `פחות "עובד אצלי".`],
      [`Image מול Container`, `Image הוא תבנית. Container הוא מופע שרץ.`, `בונים image ומריצים container.`],
      [`Dockerfile`, `קובץ הוראות לבניית image.`, `מגדיר בסיס, קבצים, התקנות ופקודת הרצה.`],
      [`Compose`, `מריץ כמה שירותים יחד: app, db, redis.`, `מעולה לפיתוח ולתרגול.`]
    ],
    read: `<p>Docker הוא שלב מרכזי לפני Kubernetes. הוא מאפשר לארוז אפליקציה עם התלויות שלה ולהריץ אותה בצורה צפויה.</p>`,
    examples: [`docker run --name web -p 8080:80 nginx`, `FROM nginx:alpine\nCOPY . /usr/share/nginx/html`, `docker build -t my-site .\ndocker run -p 8080:80 my-site`, `services:\n  web:\n    image: nginx\n    ports:\n      - "8080:80"`],
    practice: [`הרץ nginx`, `בנה Dockerfile לאתר סטטי`, `הרץ container עם port`, `נסה docker compose`],
    quiz: [[`מה זה Image?`, `תבנית שממנה מריצים containers`], [`למה צריך Volume?`, `כדי לשמור נתונים מחוץ לחיי ה-container`]]
  },
  {
    id: 7, title: `AWS בסיסי`, short: `ענן: שרתים, אחסון, רשת והרשאות.`,
    goals: [`IAM`, `EC2/S3`, `VPC/Security Groups`],
    slides: [
      [`מה זה Cloud?`, `תשתיות לפי דרישה: שרתים, אחסון, רשתות ושירותים.`, `לא קונים חומרה — יוצרים משאבים.`],
      [`IAM`, `ניהול משתמשים והרשאות.`, `אבטחה מתחילה בהרשאות מינימליות.`],
      [`EC2 ו-S3`, `EC2 הוא שרת וירטואלי. S3 הוא אחסון אובייקטים.`, `אלה שירותי בסיס.`],
      [`VPC`, `רשת פרטית בענן עם subnets ו-security groups.`, `חשוב להבין לפני Terraform.`]
    ],
    read: `<p>AWS הוא ענן גדול מאוד. אל תנסה ללמוד הכל. התחל מ-IAM, EC2, S3, VPC ו-Security Groups.</p>`,
    examples: [`aws configure`, `aws s3 ls`, `aws ec2 describe-instances`, `עקרון אבטחה:\nאל תשתמש ב-root לעבודה יומיומית. צור IAM user/role עם הרשאות מינימליות.`],
    practice: [`התקן AWS CLI אם צריך`, `למד מהו IAM`, `צור S3 bucket בסביבת לימוד`, `קרא על EC2 ו-Security Group`],
    quiz: [[`מה זה IAM?`, `ניהול זהויות והרשאות`], [`מה Security Group עושה?`, `שולט בתעבורה נכנסת/יוצאת למשאב`]]
  },
  {
    id: 8, title: `Terraform`, short: `Infrastructure as Code.`,
    goals: [`init/plan/apply`, `resources`, `state/modules`],
    slides: [
      [`מה Terraform עושה?`, `יוצר תשתית בעזרת קוד.`, `במקום קליקים ידניים ב-AWS.`],
      [`פקודות`, `init, plan, apply, destroy`, `plan לפני apply — תמיד.`],
      [`State`, `Terraform שומר מצב כדי לדעת מה קיים.`, `state הוא קובץ חשוב ורגיש.`],
      [`Modules`, `דרך לארוז תשתית לשימוש חוזר.`, `למשל מודול VPC או EC2.`]
    ],
    read: `<p>Terraform מאפשר לתאר תשתית בקבצי HCL. הוא מתאים ליצירת VPC, EC2, S3, Load Balancers ועוד.</p>`,
    examples: [`provider "aws" {\n  region = "us-east-1"\n}\n\nresource "aws_s3_bucket" "demo" {\n  bucket = "my-demo-bucket-123"\n}`, `terraform init\nterraform fmt\nterraform validate\nterraform plan\nterraform apply`],
    practice: [`פתח תיקיית terraform-project`, `מצא קבצי .tf`, `זהה provider/resource/variable`, `הרץ terraform fmt על פרויקט לימוד בלבד`],
    quiz: [[`מה עושה terraform plan?`, `מציג מה Terraform עומד לשנות בלי לבצע`], [`למה state חשוב?`, `כי הוא מחבר בין הקוד למשאבים הקיימים`]]
  },
  {
    id: 9, title: `Ansible`, short: `הגדרת שרתים אוטומטית.`,
    goals: [`Inventory`, `Playbook`, `Roles`],
    slides: [
      [`מה Ansible עושה?`, `מגדיר שרתים: התקנות, קבצים, שירותים ומשתמשים.`, `Terraform יוצר, Ansible מקנפג.`],
      [`Inventory`, `רשימת שרתים וקבוצות.`, `למשל web, db, dev.`],
      [`Playbook`, `קובץ YAML עם משימות.`, `כל task מתאר פעולה.`],
      [`Roles`, `ארגון playbooks בצורה נקייה לשימוש חוזר.`, `חשוב בפרויקטים גדולים.`]
    ],
    read: `<p>Ansible עובד בדרך הצהרתית יחסית: אתה כותב מה צריך להיות מותקן או מוגדר, והוא מבצע דרך SSH.</p>`,
    examples: [`[web]\nserver1 ansible_host=1.2.3.4 ansible_user=ubuntu`, `- hosts: web\n  become: yes\n  tasks:\n    - name: install nginx\n      apt:\n        name: nginx\n        state: present`, `ansible-playbook -i inventory site.yml`],
    practice: [`מצא בתיקייה פרויקט עם inventory ו-site.yml`, `קרא את ה-playbook`, `סמן אילו roles קיימים`, `כתוב playbook קטן להתקנת nginx`],
    quiz: [[`מה זה inventory?`, `רשימת שרתים ש-Ansible מנהל`], [`מה ההבדל בין task ל-role?`, `task פעולה בודדת, role ארגון של משימות וקבצים`]]
  },
  {
    id: 10, title: `Jenkins ו-CI/CD`, short: `Pipeline שבונה, בודק ופורס.`,
    goals: [`CI/CD`, `Jenkinsfile`, `Stages`],
    slides: [
      [`מה זה CI/CD?`, `תהליך אוטומטי לבנייה, בדיקה ופריסה של קוד.`, `כל שינוי עובר מסלול קבוע.`],
      [`Jenkins`, `שרת שמריץ pipelines.`, `יכול להתחבר ל-GitHub, Docker, Kubernetes ועוד.`],
      [`Stages`, `Checkout, Build, Test, Package, Deploy`, `כל שלב ברור ומדיד.`],
      [`Jenkinsfile`, `קוד שמגדיר את pipeline.`, `גם ה-pipeline נשמר ב-Git.`]
    ],
    read: `<p>CI/CD מפחית טעויות ידניות. במקום לזכור להריץ פקודות, ה-pipeline עושה זאת בכל שינוי.</p>`,
    examples: [`pipeline {\n  agent any\n  stages {\n    stage('Build') { steps { echo 'Building...' } }\n    stage('Test') { steps { echo 'Testing...' } }\n    stage('Deploy') { steps { echo 'Deploying...' } }\n  }\n}`],
    practice: [`קרא את קובץ CI-CD Introduction`, `כתוב שלבי pipeline לאפליקציה פשוטה`, `הסבר מה ההבדל בין CI ל-CD`],
    quiz: [[`מה זה Pipeline?`, `רצף שלבים אוטומטיים`], [`למה Jenkinsfile חשוב?`, `כי ה-pipeline נשמר כקוד`]]
  },
  {
    id: 11, title: `Kubernetes`, short: `ניהול Containers בקנה מידה.`,
    goals: [`Pod`, `Deployment`, `Service`],
    slides: [
      [`מה Kubernetes עושה?`, `מנהל containers על cluster.`, `הוא דואג להרצה, scale, ריפוי עצמי וחשיפה.`],
      [`Pod`, `היחידה הקטנה ביותר להרצת container.`, `בדרך כלל לא יוצרים pod ישירות בפרודקשן.`],
      [`Deployment`, `מנהל replicas ועדכונים.`, `אם pod נופל — נוצר חדש.`],
      [`Service`, `נותן כתובת יציבה ל-pods.`, `כי pods יכולים להתחלף.`]
    ],
    read: `<p>Kubernetes הוא מערכת orchestration. הוא חזק, אבל דורש בסיס טוב ב-Docker וברשתות.</p>`,
    examples: [`kubectl get nodes\nkubectl get pods\nkubectl get svc`, `kubectl create deployment web --image=nginx\nkubectl expose deployment web --port=80 --type=NodePort`, `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\nspec:\n  replicas: 2`],
    practice: [`התקן/פתח Minikube`, `הרץ nginx deployment`, `חשוף service`, `בצע scale ל-3 replicas`],
    quiz: [[`מה זה Pod?`, `יחידת הרצה של container אחד או יותר`], [`למה צריך Service?`, `כדי לתת גישה יציבה ל-pods`]]
  },
  {
    id: 12, title: `ArgoCD, GitOps ופרויקט סיום`, short: `Git כמקור אמת ו-Pipeline מלא.`,
    goals: [`GitOps`, `ArgoCD Sync`, `פרויקט סיום`],
    slides: [
      [`מה זה GitOps?`, `Git הוא מקור האמת של המערכת.`, `מה שיש ב-Git אמור להיות מה שרץ ב-cluster.`],
      [`ArgoCD`, `כלי שמסתכל על Git ומסנכרן Kubernetes.`, `אם יש drift — הוא מזהה.`],
      [`יתרון`, `כל שינוי מתועד, ניתן לביקורת וניתן לחזרה לאחור.`, `זה מתאים לצוותים ולפרודקשן.`],
      [`פרויקט סיום`, `GitHub → Jenkins → Docker → Terraform/Ansible → Kubernetes → ArgoCD`, `עכשיו מחברים את כל הקורס.`]
    ],
    read: `<p>GitOps הוא שלב מתקדם. במקום להריץ kubectl ידנית, כותבים manifests ב-Git ו-ArgoCD דואג לסנכרון.</p><p>בפרויקט הסיום תבנה אפליקציה קטנה ותעביר אותה דרך שרשרת DevOps מלאה.</p>`,
    examples: [`apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: demo-app\nspec:\n  source:\n    repoURL: https://github.com/user/repo\n    path: k8s\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: default`, `מבנה פרויקט סיום:\napp/\nDockerfile\nJenkinsfile\nterraform/\nansible/\nk8s/\nREADME.md`],
    practice: [`צור repo לפרויקט`, `הוסף Dockerfile`, `כתוב Jenkinsfile בסיסי`, `כתוב manifests ל-Kubernetes`, `תכנן איך ArgoCD יסנכרן`],
    quiz: [[`מה מקור האמת ב-GitOps?`, `Git`], [`מה ArgoCD עושה?`, `מסנכרן את ה-cluster לפי מה שמוגדר ב-Git`]]
  }
];
