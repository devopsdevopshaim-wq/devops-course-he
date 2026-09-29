const RESOURCES = {
  devops: {
    1: [
      { en: `DevOps Roadmap — roadmap.sh`, he: `מפת דרכים ל-DevOps — roadmap.sh`, url: `https://roadmap.sh/devops` },
      { en: `AWS — What is DevOps?`, he: `AWS — מהו DevOps?`, url: `https://aws.amazon.com/devops/what-is-devops/` }
    ],
    2: [
      { en: `Linux Journey — interactive basics`, he: `Linux Journey — יסודות אינטראקטיביים`, url: `https://linuxjourney.com/` },
      { en: `Ubuntu Server documentation`, he: `תיעוד Ubuntu Server`, url: `https://documentation.ubuntu.com/server/` }
    ],
    3: [
      { en: `Git — official documentation`, he: `Git — התיעוד הרשמי`, url: `https://git-scm.com/doc` },
      { en: `GitHub Docs`, he: `GitHub Docs`, url: `https://docs.github.com/` }
    ],
    4: [
      { en: `Python — official docs`, he: `Python — התיעוד הרשמי`, url: `https://docs.python.org/3/` },
      { en: `Real Python — tutorials`, he: `Real Python — מדריכים`, url: `https://realpython.com/` }
    ],
    5: [
      { en: `Cloudflare Learning Center`, he: `מרכז הלמידה של Cloudflare`, url: `https://www.cloudflare.com/learning/` },
      { en: `Wireshark documentation`, he: `התיעוד של Wireshark`, url: `https://www.wireshark.org/docs/` }
    ],
    6: [
      { en: `Docker — official documentation`, he: `Docker — התיעוד הרשמי`, url: `https://docs.docker.com/` },
      { en: `Docker Compose — overview`, he: `Docker Compose — סקירה`, url: `https://docs.docker.com/compose/` }
    ],
    7: [
      { en: `AWS documentation`, he: `התיעוד של AWS`, url: `https://docs.aws.amazon.com/` },
      { en: `AWS Well-Architected Framework`, he: `AWS Well-Architected Framework`, url: `https://aws.amazon.com/architecture/well-architected/` }
    ],
    8: [
      { en: `Terraform documentation`, he: `התיעוד של Terraform`, url: `https://developer.hashicorp.com/terraform/docs` },
      { en: `Terraform tutorials`, he: `מדריכי Terraform`, url: `https://developer.hashicorp.com/terraform/tutorials` }
    ],
    9: [
      { en: `Ansible documentation`, he: `התיעוד של Ansible`, url: `https://docs.ansible.com/` },
      { en: `Ansible — getting started`, he: `Ansible — צעדים ראשונים`, url: `https://docs.ansible.com/ansible/latest/getting_started/index.html` }
    ],
    10: [
      { en: `Jenkins documentation`, he: `התיעוד של Jenkins`, url: `https://www.jenkins.io/doc/` },
      { en: `Jenkins — Pipeline syntax`, he: `Jenkins — תחביר Pipeline`, url: `https://www.jenkins.io/doc/book/pipeline/syntax/` }
    ],
    11: [
      { en: `Kubernetes documentation`, he: `התיעוד של Kubernetes`, url: `https://kubernetes.io/docs/home/` },
      { en: `Kubernetes Basics tutorial`, he: `מדריך יסודות Kubernetes`, url: `https://kubernetes.io/docs/tutorials/kubernetes-basics/` }
    ],
    12: [
      { en: `Argo CD documentation`, he: `התיעוד של Argo CD`, url: `https://argo-cd.readthedocs.io/en/stable/` },
      { en: `OpenGitOps — principles`, he: `OpenGitOps — עקרונות`, url: `https://opengitops.dev/` }
    ]
  },
  ai: {
    1: [
      { en: `roadmap.sh — AI Engineer`, he: `roadmap.sh — מפת דרכים ל-AI Engineer`, url: `https://roadmap.sh/ai-engineer` },
      { en: `Anthropic — Building Effective Agents`, he: `Anthropic — בניית סוכנים אפקטיביים`, url: `https://www.anthropic.com/engineering/building-effective-agents` }
    ],
    2: [
      { en: `Prompt Engineering Guide`, he: `Prompt Engineering Guide`, url: `https://www.promptingguide.ai/` },
      { en: `Anthropic — Prompt engineering overview`, he: `Anthropic — סקירת הנדסת פרומפטים`, url: `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview` }
    ],
    3: [
      { en: `Prompt Engineering Guide — Techniques`, he: `Prompt Engineering Guide — טכניקות`, url: `https://www.promptingguide.ai/techniques` },
      { en: `Anthropic — Prompt engineering overview`, he: `Anthropic — סקירת הנדסת פרומפטים`, url: `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview` }
    ],
    4: [
      { en: `Pinecone — Retrieval-Augmented Generation`, he: `Pinecone — Retrieval-Augmented Generation`, url: `https://www.pinecone.io/learn/retrieval-augmented-generation/` },
      { en: `LangChain — RAG concepts`, he: `LangChain — יסודות RAG`, url: `https://docs.langchain.com/oss/python/langchain/rag` }
    ],
    5: [
      { en: `Pinecone — What is a vector database?`, he: `Pinecone — מהו מסד נתונים וקטורי?`, url: `https://www.pinecone.io/learn/vector-database/` },
      { en: `Pinecone — Rerankers & two-stage retrieval`, he: `Pinecone — Rerankers ואחזור דו-שלבי`, url: `https://www.pinecone.io/learn/series/rag/rerankers/` }
    ],
    6: [
      { en: `Anthropic — Writing tools for AI agents`, he: `Anthropic — כתיבת כלים לסוכני AI`, url: `https://www.anthropic.com/engineering/writing-tools-for-agents` },
      { en: `Claude Docs — Tool use overview`, he: `Claude Docs — סקירת שימוש בכלים`, url: `https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview` }
    ],
    7: [
      { en: `n8n — Advanced AI documentation`, he: `n8n — תיעוד Advanced AI`, url: `https://docs.n8n.io/advanced-ai/` },
      { en: `Anthropic — Building Effective Agents`, he: `Anthropic — בניית סוכנים אפקטיביים`, url: `https://www.anthropic.com/engineering/building-effective-agents` }
    ],
    8: [
      { en: `Anthropic — Effective context engineering for AI agents`, he: `Anthropic — הנדסת הקשר אפקטיבית לסוכני AI`, url: `https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents` },
      { en: `n8n — AI Agent node reference`, he: `n8n — תיעוד נוד ה-AI Agent`, url: `https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent` }
    ],
    9: [
      { en: `Claude Docs — Define tools (schemas)`, he: `Claude Docs — הגדרת כלים (סכמות)`, url: `https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools` },
      { en: `OpenAI — Function calling guide`, he: `OpenAI — מדריך function calling`, url: `https://developers.openai.com/api/docs/guides/function-calling` }
    ],
    10: [
      { en: `Anthropic — Demystifying evals for AI agents`, he: `Anthropic — הבנת evals לסוכני AI`, url: `https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents` },
      { en: `Claude Docs — Define your success criteria`, he: `Claude Docs — הגדרת קריטריוני הצלחה`, url: `https://docs.anthropic.com/en/docs/build-with-claude/define-success` }
    ],
    11: [
      { en: `OWASP — Top 10 for LLM Applications`, he: `OWASP — Top 10 for LLM Applications`, url: `https://owasp.org/www-project-top-10-for-large-language-model-applications/` },
      { en: `Anthropic — Writing tools for AI agents`, he: `Anthropic — כתיבת כלים לסוכני AI`, url: `https://www.anthropic.com/engineering/writing-tools-for-agents` }
    ],
    12: [
      { en: `n8n — Advanced AI documentation`, he: `n8n — תיעוד Advanced AI`, url: `https://docs.n8n.io/advanced-ai/` },
      { en: `Anthropic — Building Effective Agents`, he: `Anthropic — בניית סוכנים אפקטיביים`, url: `https://www.anthropic.com/engineering/building-effective-agents` },
      { en: `OWASP — Top 10 for LLM Applications`, he: `OWASP — Top 10 for LLM Applications`, url: `https://owasp.org/www-project-top-10-for-large-language-model-applications/` }
    ]
  }
};
