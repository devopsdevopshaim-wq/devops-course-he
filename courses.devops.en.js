const COURSE_DEVOPS_EN = [
  {
    id: 1, title: `What is DevOps?`, short: `The roadmap: how code becomes a running system in the cloud.`,
    goals: [`Understand what DevOps solves`, `Meet the tool chain`, `Build the right learning order`],
    slides: [
      [`What is DevOps?`, `DevOps is a mix of culture, process and tools that connect development, testing, infrastructure and deployment.`, `The goal is to move a change from code to a real running system quickly, safely and repeatably.`],
      [`The problem`, `Without DevOps there's a lot of manual work: installs, copying files by hand, manual testing, risky deployments and hard-to-reproduce incidents.`, `DevOps turns these into automated, documented actions.`],
      [`The big picture`, `Git stores code, Docker packages the app, Jenkins builds and tests, Terraform creates infrastructure, Kubernetes runs it, ArgoCD keeps it in sync with Git.`, `Every lesson in this course is one link in that chain.`],
      [`Right order`, `Linux → Git → Networking → Python → Docker → AWS → Terraform → Ansible → Jenkins → Kubernetes → ArgoCD → Project.`, `Don't skip the basics. A solid foundation saves frustration later.`]
    ],
    read: `<p>DevOps is not one tool, and not a job title that means "installs software". DevOps is a way of working that tries to make the entire process — from code to deployment — clear, automatic, measurable and repeatable.</p><p>A good DevOps engineer understands operating systems, networking, code, cloud and automation. You don't need to be a deep expert in every area on day one, but you must understand how the pieces connect.</p><div class="callout"><strong>Remember:</strong> DevOps = less manual work, more automation, less guessing, more documentation.</div>`,
    examples: [`Example flow:\n1. Developer pushes to GitHub\n2. Jenkins detects the change\n3. Jenkins runs tests\n4. Docker builds an image\n5. Terraform creates infrastructure\n6. Kubernetes runs the application\n7. ArgoCD keeps the cluster state in sync with Git`],
    practice: [`Open the DEVOPS folder and identify the tools`, `Write down: what does Docker do? What does Git do?`, `Mark which topics you already know and which are new`],
    quiz: [[`What is the main goal of DevOps?`, `Turning the dev-test-deploy process into something fast, safe and automatic`], [`Why not start straight with Kubernetes?`, `Because you first need to understand Linux, Git, networking and Docker`]]
  },
  {
    id: 2, title: `Linux / Ubuntu`, short: `The foundation most servers in the world run on.`,
    goals: [`Working in the terminal`, `Files and permissions`, `Services and SSH`],
    slides: [
      [`Why Linux?`, `Most cloud servers and containers are Linux-based.`, `If the terminal scares you, DevOps will be hard. Here we turn it into a working tool.`],
      [`Basic commands`, `pwd, ls, cd, mkdir, touch, cp, mv, rm, cat, nano`, `These are your everyday commands.`],
      [`Permissions`, `chmod, chown, sudo, users, groups`, `Permissions are part of both security and operations.`],
      [`Services`, `systemctl status/start/stop/restart`, `Servers run services: nginx, docker, ssh and more.`]
    ],
    read: `<p>Linux is the foundation. You'll learn to move around the filesystem, edit files, understand permissions, install packages and check services.</p><p>Hands-on practice matters. Reading alone isn't enough.</p>`,
    examples: [`pwd\nls -la\ncd /var/log\nmkdir devops-test\ntouch hello.txt\ncat hello.txt`, `sudo apt update\nsudo apt install nginx\nsystemctl status nginx`, `chmod 644 file.txt\nchmod +x script.sh\nchown user:user file.txt`],
    practice: [`Open an Ubuntu terminal or VM`, `Create a folder and a file`, `Change a file's permissions`, `Check a service with systemctl`, `Connect via SSH if a machine is available`],
    quiz: [[`What does ls -la do?`, `Shows files including hidden ones and their permissions`], [`What's the difference between chmod and chown?`, `chmod changes permissions, chown changes the owner`]]
  },
  {
    id: 3, title: `Git and GitHub`, short: `Version control and working with code.`,
    goals: [`Commit`, `Branch`, `Push/Pull`],
    slides: [
      [`What is Git?`, `Git stores a history of changes to code.`, `You can go back, compare, and share.`],
      [`What is GitHub?`, `A place to host repositories and work as a team.`, `CI/CD and GitOps both start from Git.`],
      [`Basic flow`, `clone → edit → add → commit → push`, `You'll do this a lot.`],
      [`Branches`, `A branch lets you work on a change without breaking main.`, `Afterwards you merge it back.`]
    ],
    read: `<p>Git is essential. DevOps without Git is like working with no history. Every professional pipeline starts from a change in Git.</p>`,
    examples: [`git init\ngit status\ngit add .\ngit commit -m "first commit"`, `git clone https://github.com/user/repo.git\ngit pull\ngit push`, `git checkout -b feature/login\ngit checkout main\ngit merge feature/login`],
    practice: [`Create a local repo`, `Add a README`, `Make a commit`, `Create a branch`, `Merge it back`],
    quiz: [[`What is a commit?`, `A documented, saved snapshot of a change`], [`Why use a branch?`, `To work on a change separately without affecting main`]]
  },
  {
    id: 4, title: `Python Basics for DevOps`, short: `Scripts and small automations.`,
    goals: [`Variables and loops`, `Files`, `JSON/API`],
    slides: [
      [`Why Python?`, `DevOps uses Python for automation, testing, APIs and reports.`, `You don't need to be a senior developer to start.`],
      [`Basics`, `variables, if, loops, functions`, `These are the building blocks.`],
      [`Files and JSON`, `Reading and writing files, working with JSON`, `Many DevOps tools return JSON.`],
      [`Automation`, `A small script can save a lot of repeated manual work.`, `Start with simple tasks.`]
    ],
    read: `<p>Python helps you connect tools. For example: read a list of servers, check availability, send an API request, parse JSON and produce a report.</p>`,
    examples: [`servers = ["web1", "db1", "cache1"]\nfor s in servers:\n    print("checking", s)`, `import json\ndata = '{"env":"dev","replicas":2}'\nobj = json.loads(data)\nprint(obj["env"])`, `from pathlib import Path\nPath("report.txt").write_text("DevOps report", encoding="utf-8")`],
    practice: [`Write a script that prints a list of servers`, `Read a text file`, `Create a small JSON object and print a value from it`],
    quiz: [[`Why does JSON matter?`, `Because many APIs and cloud tools return data in JSON format`], [`What's the benefit of a script?`, `Automating a repeated action`]]
  },
  {
    id: 5, title: `Networking Basics`, short: `IP, DNS, ports and troubleshooting.`,
    goals: [`IP and Subnet`, `DNS`, `Ports and TCP/UDP`],
    slides: [
      [`Why networking?`, `Every system talks to other systems.`, `Without networking knowledge it's hard to understand why an app is unreachable.`],
      [`IP and Port`, `IP identifies a machine. A port identifies a service on that machine.`, `For example SSH=22, HTTP=80, HTTPS=443.`],
      [`DNS`, `DNS translates a domain name into an IP address.`, `Many incidents are actually DNS issues.`],
      [`Diagnostic tools`, `ping, tracert, nslookup, curl, Wireshark`, `Don't guess — check.`]
    ],
    read: `<p>Networking is the connection layer. DevOps needs to check whether there's connectivity, whether a port is open, whether DNS resolves, and whether a firewall is blocking traffic.</p>`,
    examples: [`ipconfig\nping google.com\ntracert google.com\nnslookup google.com`, `curl -I https://example.com`, `Common ports:\n22 SSH\n80 HTTP\n443 HTTPS\n3000 Node dev\n8080 Jenkins/Tomcat`],
    practice: [`Check your machine's IP`, `Run ping`, `Check DNS with nslookup`, `Open Wireshark and observe traffic`],
    quiz: [[`What's the difference between IP and Port?`, `IP identifies the machine, Port identifies the service`], [`What does DNS do?`, `Translates a name into an IP address`]]
  },
  {
    id: 6, title: `Docker`, short: `Packaging applications into containers.`,
    goals: [`Image vs Container`, `Dockerfile`, `Compose`],
    slides: [
      [`What problem does Docker solve?`, `The app runs the same way everywhere.`, `Less "works on my machine".`],
      [`Image vs Container`, `An image is a template. A container is a running instance.`, `You build an image and run a container.`],
      [`Dockerfile`, `An instruction file for building an image.`, `Defines the base, files, installs and run command.`],
      [`Compose`, `Runs several services together: app, db, redis.`, `Great for development and practice.`]
    ],
    read: `<p>Docker is a key step before Kubernetes. It lets you package an app with its dependencies and run it predictably.</p>`,
    examples: [`docker run --name web -p 8080:80 nginx`, `FROM nginx:alpine\nCOPY . /usr/share/nginx/html`, `docker build -t my-site .\ndocker run -p 8080:80 my-site`, `services:\n  web:\n    image: nginx\n    ports:\n      - "8080:80"`],
    practice: [`Run nginx`, `Build a Dockerfile for a static site`, `Run a container with a port mapping`, `Try docker compose`],
    quiz: [[`What is an Image?`, `A template from which containers are run`], [`Why do you need a Volume?`, `To persist data outside the container's lifecycle`]]
  },
  {
    id: 7, title: `AWS Basics`, short: `Cloud: servers, storage, networking and permissions.`,
    goals: [`IAM`, `EC2/S3`, `VPC/Security Groups`],
    slides: [
      [`What is Cloud?`, `Infrastructure on demand: servers, storage, networking and services.`, `You don't buy hardware — you provision resources.`],
      [`IAM`, `Managing users and permissions.`, `Security starts with minimal permissions.`],
      [`EC2 and S3`, `EC2 is a virtual server. S3 is object storage.`, `These are foundational services.`],
      [`VPC`, `A private network in the cloud with subnets and security groups.`, `Important to understand before Terraform.`]
    ],
    read: `<p>AWS is a very large cloud. Don't try to learn everything. Start with IAM, EC2, S3, VPC and Security Groups.</p>`,
    examples: [`aws configure`, `aws s3 ls`, `aws ec2 describe-instances`, `Security principle:\nDon't use root for daily work. Create an IAM user/role with minimal permissions.`],
    practice: [`Install the AWS CLI if needed`, `Learn what IAM is`, `Create an S3 bucket in a learning environment`, `Read about EC2 and Security Groups`],
    quiz: [[`What is IAM?`, `Identity and access management`], [`What does a Security Group do?`, `Controls inbound/outbound traffic to a resource`]]
  },
  {
    id: 8, title: `Terraform`, short: `Infrastructure as Code.`,
    goals: [`init/plan/apply`, `resources`, `state/modules`],
    slides: [
      [`What does Terraform do?`, `Creates infrastructure through code.`, `Instead of manual clicks in AWS.`],
      [`Commands`, `init, plan, apply, destroy`, `Always plan before apply.`],
      [`State`, `Terraform keeps state to know what exists.`, `State is an important and sensitive file.`],
      [`Modules`, `A way to package infrastructure for reuse.`, `For example a VPC or EC2 module.`]
    ],
    read: `<p>Terraform lets you describe infrastructure in HCL files. It's well suited for creating VPCs, EC2 instances, S3 buckets, load balancers and more.</p>`,
    examples: [`provider "aws" {\n  region = "us-east-1"\n}\n\nresource "aws_s3_bucket" "demo" {\n  bucket = "my-demo-bucket-123"\n}`, `terraform init\nterraform fmt\nterraform validate\nterraform plan\nterraform apply`],
    practice: [`Open the terraform-project folder`, `Find .tf files`, `Identify provider/resource/variable`, `Run terraform fmt on a learning project only`],
    quiz: [[`What does terraform plan do?`, `Shows what Terraform is about to change, without applying it`], [`Why does state matter?`, `Because it connects the code to the resources that actually exist`]]
  },
  {
    id: 9, title: `Ansible`, short: `Automatically configuring servers.`,
    goals: [`Inventory`, `Playbook`, `Roles`],
    slides: [
      [`What does Ansible do?`, `Configures servers: installs, files, services and users.`, `Terraform creates, Ansible configures.`],
      [`Inventory`, `A list of servers and groups.`, `For example web, db, dev.`],
      [`Playbook`, `A YAML file with tasks.`, `Each task describes one action.`],
      [`Roles`, `Organizing playbooks cleanly for reuse.`, `Important in larger projects.`]
    ],
    read: `<p>Ansible works in a relatively declarative way: you write what should be installed or configured, and it executes it over SSH.</p>`,
    examples: [`[web]\nserver1 ansible_host=1.2.3.4 ansible_user=ubuntu`, `- hosts: web\n  become: yes\n  tasks:\n    - name: install nginx\n      apt:\n        name: nginx\n        state: present`, `ansible-playbook -i inventory site.yml`],
    practice: [`Find a project folder with an inventory and site.yml`, `Read the playbook`, `Note which roles exist`, `Write a small playbook to install nginx`],
    quiz: [[`What is an inventory?`, `A list of servers Ansible manages`], [`What's the difference between a task and a role?`, `A task is a single action, a role organizes tasks and files`]]
  },
  {
    id: 10, title: `Jenkins and CI/CD`, short: `A pipeline that builds, tests and deploys.`,
    goals: [`CI/CD`, `Jenkinsfile`, `Stages`],
    slides: [
      [`What is CI/CD?`, `An automated process for building, testing and deploying code.`, `Every change follows a fixed path.`],
      [`Jenkins`, `A server that runs pipelines.`, `Can connect to GitHub, Docker, Kubernetes and more.`],
      [`Stages`, `Checkout, Build, Test, Package, Deploy`, `Each stage is clear and measurable.`],
      [`Jenkinsfile`, `Code that defines the pipeline.`, `The pipeline itself is stored in Git too.`]
    ],
    read: `<p>CI/CD reduces manual mistakes. Instead of remembering to run commands, the pipeline does it on every change.</p>`,
    examples: [`pipeline {\n  agent any\n  stages {\n    stage('Build') { steps { echo 'Building...' } }\n    stage('Test') { steps { echo 'Testing...' } }\n    stage('Deploy') { steps { echo 'Deploying...' } }\n  }\n}`],
    practice: [`Read the CI/CD introduction file`, `Write pipeline stages for a simple app`, `Explain the difference between CI and CD`],
    quiz: [[`What is a Pipeline?`, `A sequence of automated stages`], [`Why does a Jenkinsfile matter?`, `Because the pipeline itself is stored as code`]]
  },
  {
    id: 11, title: `Kubernetes`, short: `Managing containers at scale.`,
    goals: [`Pod`, `Deployment`, `Service`],
    slides: [
      [`What does Kubernetes do?`, `Manages containers on a cluster.`, `It handles running, scaling, self-healing and exposing them.`],
      [`Pod`, `The smallest unit for running a container.`, `You usually don't create pods directly in production.`],
      [`Deployment`, `Manages replicas and updates.`, `If a pod dies, a new one is created.`],
      [`Service`, `Gives pods a stable address.`, `Because pods can be replaced.`]
    ],
    read: `<p>Kubernetes is an orchestration system. It's powerful, but requires a solid foundation in Docker and networking.</p>`,
    examples: [`kubectl get nodes\nkubectl get pods\nkubectl get svc`, `kubectl create deployment web --image=nginx\nkubectl expose deployment web --port=80 --type=NodePort`, `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web\nspec:\n  replicas: 2`],
    practice: [`Install/open Minikube`, `Run an nginx deployment`, `Expose a service`, `Scale to 3 replicas`],
    quiz: [[`What is a Pod?`, `A unit running one or more containers`], [`Why do you need a Service?`, `To give stable access to pods`]]
  },
  {
    id: 12, title: `ArgoCD, GitOps and Final Project`, short: `Git as the source of truth, and a complete pipeline.`,
    goals: [`GitOps`, `ArgoCD Sync`, `Final project`],
    slides: [
      [`What is GitOps?`, `Git is the source of truth for the system.`, `What's in Git should be what's running in the cluster.`],
      [`ArgoCD`, `A tool that watches Git and syncs Kubernetes.`, `If there's drift, it detects it.`],
      [`Benefit`, `Every change is documented, auditable and revertible.`, `This suits teams and production.`],
      [`Final project`, `GitHub → Jenkins → Docker → Terraform/Ansible → Kubernetes → ArgoCD`, `Now you connect the whole course together.`]
    ],
    read: `<p>GitOps is an advanced stage. Instead of running kubectl manually, you write manifests in Git and ArgoCD handles syncing.</p><p>In the final project you'll build a small application and move it through a complete DevOps chain.</p>`,
    examples: [`apiVersion: argoproj.io/v1alpha1\nkind: Application\nmetadata:\n  name: demo-app\nspec:\n  source:\n    repoURL: https://github.com/user/repo\n    path: k8s\n  destination:\n    server: https://kubernetes.default.svc\n    namespace: default`, `Final project structure:\napp/\nDockerfile\nJenkinsfile\nterraform/\nansible/\nk8s/\nREADME.md`],
    practice: [`Create a repo for the project`, `Add a Dockerfile`, `Write a basic Jenkinsfile`, `Write Kubernetes manifests`, `Plan how ArgoCD will sync`],
    quiz: [[`What is the source of truth in GitOps?`, `Git`], [`What does ArgoCD do?`, `Syncs the cluster to match what's defined in Git`]]
  }
];
