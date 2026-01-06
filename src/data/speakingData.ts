export interface SpeakingEvent {
  id: string;
  title: string;
  organization: string;
  description: string;
  year: number;
  type: 'conference' | 'project' | 'publication' | 'volunteering' | 'television';
  link?: string;
  readMoreLink?: string;
}

export const conferences: SpeakingEvent[] = [
  {
    id: "defcon-33-2025",
    title: "DEFCON 33",
    organization: "DEFCON",
    description: "Attending DEFCON 33 in Las Vegas",
    year: 2025,
    type: "conference",
  },
  {
    id: "github-universe-2025",
    title: "GitHub Universe 2025",
    organization: "GitHub",
    description: "Speaking at GitHub Universe 2025",
    year: 2025,
    type: "conference",
  },
];

export const projects: SpeakingEvent[] = [
  {
    id: "project-placeholder-1",
    title: "Project Coming Soon",
    organization: "WildeW3rks",
    description: "Details about upcoming projects will be added here",
    year: 2025,
    type: "project",
  },
];

export const publications: SpeakingEvent[] = [
  {
    id: "packt-book-2025",
    title: "AI Native LLM Security",
    organization: "Packt Publishing",
    description: "A comprehensive guide to leveraging OWASP Top 10 for LLM applications and beyond",
    year: 2025,
    type: "publication",
    readMoreLink: "https://www.packtpub.com/en-ca/product/ai-native-llm-security-9781836203742",
  },
  {
    id: "arxiv-airtbench-2025",
    title: "arXiv: AIRTBench - Measuring Autonomous AI Red Teaming",
    organization: "arXiv",
    description: "AI red teaming benchmark for evaluating language models' security capabilities",
    year: 2025,
    type: "publication",
    readMoreLink: "https://arxiv.org/abs/2506.14682",
  },
  {
    id: "arxiv-maif-2025",
    title: "arXiv: MAIF - Enforcing AI Trust and Provenance",
    organization: "arXiv",
    description: "Academic paper on enforcing AI trust through artifact-centric agentic paradigm",
    year: 2025,
    type: "publication",
    readMoreLink: "https://arxiv.org/abs/2511.15097",
  },
  {
    id: "dreadnode-claude-2025",
    title: "AI Red Teaming: Claude 3.7 Sonnet Solves Turtle Challenge",
    organization: "Dreadnode",
    description: "Groundbreaking research where AI models crushed a cybersecurity challenge",
    year: 2025,
    type: "publication",
    readMoreLink: "https://dreadnode.io/blog/ai-red-teaming-case-study-claude-sonnet-solves-turtle",
  },
  {
    id: "owasp-top10-2023",
    title: "OWASP Top 10 for LLM Applications",
    organization: "OWASP",
    description: "Contributing author to the OWASP Top 10 for LLM Applications guide",
    year: 2023,
    type: "publication",
    readMoreLink: "https://owasp.org/www-project-top-10-for-large-language-model-applications/",
  },
  {
    id: "bugcrowd-hacking-llm-2025",
    title: "Hacking LLM applications: A meticulous hacker's two cents",
    organization: "BugCrowd",
    description: "Insights into vulnerabilities specific to LLM applications",
    year: 2025,
    type: "publication",
    readMoreLink: "https://www.bugcrowd.com/blog/hacking-llm-applications-a-meticulous-hackers-two-cents/",
  },
  {
    id: "lakera-report-2025",
    title: "Lakera 2025 GenAI Security Readiness Report",
    organization: "Lakera",
    description: "Contributing advisor to the Lakera 2025 GenAI Security Readiness Report",
    year: 2025,
    type: "publication",
    readMoreLink: "https://www.lakera.ai/genai-security-report-2025",
  },
];

export const volunteering: SpeakingEvent[] = [
  {
    id: "caido-ambassador",
    title: "Hacker Ambassador",
    organization: "Caido",
    description: "Community ambassador contributing feature development and custom plugins for security testing",
    year: 2024,
    type: "volunteering",
    readMoreLink: "https://caido.io/",
  },
  {
    id: "bugcrowd-hab",
    title: "Hacker Advisory Board Member",
    organization: "BugCrowd",
    description: "Representing the global hacker community on Bugcrowd's Hacker Advisory Board",
    year: 2024,
    type: "volunteering",
    readMoreLink: "https://www.bugcrowd.com/blog/what-is-bugcrowds-hacker-advisory-board/",
  },
  {
    id: "mitre-ai-wg",
    title: "Member – Artificial Intelligence Working Group",
    organization: "MITRE",
    description: "Contributing to AI security standards and working group initiatives",
    year: 2024,
    type: "volunteering",
    readMoreLink: "https://cwe.mitre.org/community/working_groups.html",
  },
  {
    id: "owasp-genai-lead",
    title: "OWASP GenAI Security & LLM Applications Board Member",
    organization: "OWASP",
    description: "Technical Lead for GenAI Security & LLM Applications projects",
    year: 2023,
    type: "volunteering",
  },
  {
    id: "owasp-toronto-lead",
    title: "OWASP Toronto Chapter Lead",
    organization: "OWASP",
    description: "Leading the OWASP Toronto chapter community and events",
    year: 2024,
    type: "volunteering",
  },
];

export const television: SpeakingEvent[] = [
  {
    id: "nasdaq-2025",
    title: "NASDAQ TradeTalks",
    organization: "NASDAQ",
    description: "The Ever-Changing Landscape of AI Safety",
    year: 2025,
    type: "television",
    link: "https://www.youtube.com/watch?v=kWJyrbWsRNk",
  },
];

export const allOrganizations = [
  "All",
  "API Days",
  "APISec",
  "BugCrowd",
  "Caido",
  "DC604",
  "DEFCON",
  "Dreadnode",
  "In-Cyber Forum",
  "ISACA",
  "ISC2",
  "Lakera",
  "MITRE",
  "MLOps Community",
  "OWASP",
  "Packt Publishing",
  "PromptorGTFO",
  "RSA Conference",
  "Synack",
  "arXiv",
];

export const years = ["All", "2025", "2024", "2023"];
