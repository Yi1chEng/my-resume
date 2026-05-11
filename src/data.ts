// ============================================================
// 个人简历数据配置文件（示例版）
// 修改此文件即可更新简历网站上的所有内容
// ============================================================

export const profile = {
  name: "张明",
  nameEn: "ZhangMing",
  title: "AI Engineer & Researcher",
  status: "// 正在寻找实习机会",
  heroIntro: {
    prefix: "数据科学专业在读，专注于",
    highlight1: "大语言模型",
    mid: "与",
    highlight2: "智能体系统",
    suffix: "研究。热爱将前沿 AI 技术落地为实际应用，擅长 RAG 系统构建与 LLM 微调。",
  },
  tags: ["数据科学", "大模型 LLM", "智能体 Agent", "RAG", "Python", "LangChain"],
  resumePdf: "/my-resume/resume.pdf",
}

export const social = {
  github: { url: "https://github.com", display: "github.com/username" },
  linkedin: { url: "https://linkedin.com", display: "linkedin.com/in/username" },
  email: { address: "https://mail.google.com/", display: "username@gmail.com" },
  blog: "#",
}

export const about = {
  subtitle: "一个大四即将毕业的准研究生，相信技术可以改变世界。",
  paragraphs: [
    {
      before: "你好！我是",
      name: "张明",
      after: "，就读于某大学数据科学专业，预计 2026 年毕业。目前专注于",
      hl1: "大语言模型应用开发",
      mid: "与",
      hl2: "智能体系统",
      end: "方向。",
    },
    {
      text: "在学术上，我积极参与课题组的 AI 研究项目，在工程上，我热衷于利用 LangChain、RAG 等技术构建实际可用的 AI 产品。曾参与多项省级/国家级竞赛并获奖，具备扎实的算法基础和良好的工程实践能力。",
    },
    {
      before: "我正在寻求",
      highlight: "AI 方向实习",
      after: "机会，期待与志同道合的团队一起探索 AI 的无限可能。",
    },
  ],
  badges: [
    { text: "中国 · 某市" },
    { text: "某大学在读" },
    { text: "开放实习机会" },
  ],
  stats: [
    { value: "3.5", label: "GPA 绩点", colorPalette: "blue" as const },
    { value: "4+", label: "完成项目", colorPalette: "teal" as const },
    { value: "3+", label: "获奖荣誉", colorPalette: "yellow" as const },
    { value: "1", label: "论文在投", colorPalette: "green" as const },
  ],
}

export const codeCard = {
  className: "ZhangMing",
  comment: "# 2026 届毕业生",
  university: "某大学",
  major: "数据科学",
  gpa: "3.5",
  skills: ["LLM", "RAG", "Agent", "Python"],
  seeking: "AI Research / Dev",
}

export const education = {
  subtitle: "扎实的理论基础与持续的自我提升。",
  timeline: [
    {
      period: "2022.09 — 2026.06",
      title: "数据科学与大数据技术 · 学士",
      institution: "某大学 · 信息科学与技术学院",
      description: "主修：数据结构、操作系统、算法设计、机器学习、深度学习、自然语言处理。GPA 3.5/4.0，专业前 15%。",
      tags: ["深度学习", "Python", "机器学习", "Agent"],
    },
    {
      period: "拟录取",
      title: "软件工程 · 硕士",
      institution: "某大学 · 软件学院",
      description: "暂无",
      tags: ["LangChain", "RAG", "向量数据库", "FastAPI"],
    },
  ],
  certificates: [
    { title: "DeepLearning.AI - LLMOps", org: "Coursera", date: "2024.05", badge: "完成" },
    { title: "Stanford CS224N NLP with Deep Learning", org: "Stanford Online", date: "2023.12", badge: "完成" },
    { title: "Full Stack Deep Learning", org: "FSDL", date: "2024.03", badge: "完成" },
    { title: "AWS Certified Machine Learning", org: "Amazon Web Services", date: "2024.01", badge: "认证" },
    { title: "软考 - 软件设计师", org: "工信部", date: "2023.11", badge: "通过" },
  ],
}

export const skillTechStack = [
  "Python", "LangChain", "RAG", "LLM 微调",
  "智能体 Agent", "大数据", "数据科学", "PyTorch",
  "Transformers", "向量数据库", "FastAPI", "Docker",
  "Linux", "Git", "SQL / NoSQL", "React",
  "TypeScript", "Spark", "Hadoop", "Kubernetes",
]

export const projectsList = [
  {
    title: "企业知识库 RAG 系统",
    description: "基于 LangChain + Weaviate 构建企业级知识检索增强生成系统，支持多格式文档解析，实现智能 Q&A、语义检索，日均处理查询 1000+ 次。",
    tags: ["LangChain", "RAG", "Weaviate", "FastAPI", "Python"],
    iconName: "database" as const,
    gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },
  {
    title: "多智能体协作框架",
    description: "基于 AutoGen 的多 Agent 协作系统，用于自动化代码审查与 Bug 修复。包含 Planner、Executor、Reviewer 角色，任务完成率提升 40%。",
    tags: ["AutoGen", "LLM", "Agent", "OpenAI", "Python"],
    iconName: "bot" as const,
    gradient: "linear-gradient(135deg, #14b8a6, #22c55e)",
  },
  {
    title: "大数据用户行为分析平台",
    description: "基于 Spark + Hadoop 构建实时用户行为分析平台，接入亿级日志数据，实现用户画像、漏斗分析和异常检测，支持实时 Dashboard。",
    tags: ["Spark", "Hadoop", "Kafka", "Hive", "大数据"],
    iconName: "chart" as const,
    gradient: "linear-gradient(135deg, #f97316, #eab308)",
  },
  {
    title: "LLM 领域自适应微调",
    description: "使用 LoRA + QLoRA 对 LLaMA-3 进行特定领域微调，构建完整微调-评估-部署流水线，模型在领域基准上提升 15% 准确率。",
    tags: ["LoRA", "QLoRA", "LLaMA", "PEFT", "HuggingFace"],
    iconName: "sparkles" as const,
    gradient: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  },
  {
    title: "智能代码辅助工具",
    description: "基于 GPT-4 + VSCode Extension 开发 AI 编程助手，集成代码补全、文档生成、重构建议，内测用户 200+，满意度 92%。",
    tags: ["GPT-4", "TypeScript", "VSCode API", "Prompt Engineering"],
    iconName: "wand" as const,
    gradient: "linear-gradient(135deg, #1d4ed8, #7c3aed)",
  },
  {
    title: "跨模态情感分析系统",
    description: "融合文本与图像的多模态情感分析，基于 CLIP + BERT 双编码器架构，在 SemEval 2024 数据集上达到 SOTA，准确率 89.3%。",
    tags: ["CLIP", "BERT", "多模态", "情感分析", "PyTorch"],
    iconName: "layers" as const,
    gradient: "linear-gradient(135deg, #0891b2, #0284c7)",
  },
]

export const researchData = {
  subtitle: "聚焦前沿，用学术严谨度推动 AI 落地应用。",
  thesis: {
    title: "面向复杂任务的自主智能体规划与工具调用框架",
    description: "设计新型 LLM-based 智能体框架，通过分层任务规划与动态工具调用，解决 ReAct、CoT 框架在长程规划和错误恢复方面的局限性。在 WebArena、AgentBench 标准 benchmark 上实现性能提升。",
    details: [
      "导师：某教授",
      "合作单位：某 AI 研究院",
      "进度：实验阶段",
      "代码：即将开源",
    ],
    tags: ["LLM Agent", "Task Planning", "Tool Use", "ReAct", "LangGraph"],
  },
  papers: [
    {
      type: "在投", typeColor: "orange" as const,
      title: "Hierarchical Agent Planning with Dynamic Tool Orchestration for Complex Tasks",
      venue: "某会议 2025",
      desc: "提出分层任务规划框架，在 ALFWorld 数据集上达到 87.3% 成功率，超越 ReAct 基线 8.4%。",
    },
    {
      type: "在投", typeColor: "orange" as const,
      title: "RAG-Enhanced Domain Adaptation for Low-Resource Medical NLP",
      venue: "某会议 2024",
      desc: "结合 RAG 与领域自适应，医疗问答准确率提升 12%，在 MedQA 基准上取得 SOTA。",
    },
    {
      type: "已发表", typeColor: "green" as const,
      title: "多模态情感分析中的跨模态注意力机制研究",
      venue: "某期刊",
      desc: "在 MVSA 和 SemEval 数据集上验证，F1-score 提升 5.7%。",
    },
  ],
}

export const achievementsList = [
  { iconName: "trophy" as const, title: "全国大学生数学建模竞赛 · 一等奖", org: "教育部高教司", date: "2023.10", description: "负责算法建模与 Python 实现，全国前 5% 获奖队伍。" },
  { iconName: "medal" as const, title: "算法精英挑战赛 · 全国 Top 20", org: "某科技公司", date: "2024.04", description: "算法赛道，在 10000+ 支队伍中进入全国 20 强。" },
  { iconName: "star" as const, title: "AI 大模型应用大赛 · 优胜奖", org: "某 AI 平台", date: "2024.06", description: "独立设计基于大模型的智能客服系统，功能完整性与用户体验评分名列前茅。" },
  { iconName: "binary" as const, title: "ACM-ICPC 区域赛 · 银奖", org: "ACM", date: "2023.11", description: "主攻动态规划与图论方向，队伍排名前 15%。" },
  { iconName: "graduation" as const, title: "国家励志奖学金", org: "教育部", date: "2022 / 2023", description: "成绩排名专业前 10%，获得国家级奖学金。" },
  { iconName: "university" as const, title: "校学生科技协会 · 技术部部长", org: "某大学科技协会", date: "2022.09 — 2024.06", description: "主导组织 5 场技术分享会与 2 场 Hackathon，累计参与人次 500+" },
  { iconName: "zap" as const, title: "开源贡献者 · 某社区", org: "GitHub", date: "2024.01 至今", description: "为某知名开源项目贡献文档与示例代码，累计 PR merged 8 个。" },
  { iconName: "scroll" as const, title: "英语六级 CET-6 · 优秀", org: "教育部考试中心", date: "2022.12", description: "六级 580 分，具备流利阅读英文论文与技术文档的能力。" },
]

export const contact = {
  subtitle: "无论是实习机会还是技术交流，我都非常期待！",
}

export const footer = {
  copyright: "© 2026 · Built with React + Chakra UI · 探索 AI 的边界",
}