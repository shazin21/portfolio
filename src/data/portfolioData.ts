import { Project, ExperienceItem, SkillCategory, EducationInfo } from "@/types/portfolio";

export const personalInfo = {
  name: "Shazin Ansari",
  role: "AI Engineer",
  specialties: "Generative AI | LLM Applications | RAG | AI Research",
  heroHeading: "Building Intelligent Systems with AI.",
  heroDescription:
    "I'm Shazin Ansari, an AI Engineer focused on Generative AI, Large Language Models, Retrieval-Augmented Generation, and intelligent AI applications. I enjoy transforming AI concepts into practical solutions through experimentation, research, and engineering.",
  aboutHeading: "A Little About Me",
  aboutParagraphs: [
    "I'm an Artificial Intelligence and Data Science graduate with professional experience in AI model enhancement, RLHF workflows, prompt engineering, and LLM-based applications.",
    "My experience includes working with AI training and evaluation workflows, designing structured prompts, improving model responses, and collaborating on AI product research tasks.",
    "I have also explored practical AI development through projects involving Retrieval-Augmented Generation, machine learning, document intelligence, and intelligent automation.",
    "I'm particularly interested in building useful AI systems that combine language models, retrieval pipelines, evaluation methodologies, and real-world applications.",
  ],
  aboutHighlights: [
    "AI model enhancement and evaluation",
    "Prompt engineering and LLM workflows",
    "Retrieval-Augmented Generation",
    "Machine Learning",
    "AI application development",
    "Technical research and experimentation",
  ],
  contactHeading: "Let's Build Something Intelligent.",
  contactDescription:
    "I'm open to opportunities in AI Engineering,Data Engineering, Generative AI, LLM applications, AI research, and applied machine learning. If you're building something interesting or looking for someone with hands-on AI experience, let's connect.",
  email: "shazinansari1@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/shazinansari",
  githubUrl: "https://github.com/shazin21",
  location: "Open to opportunities in UAE, India, and internationally.",
  resumeFileName: "Shazin_Ansari_AI_Engineer_Resume.pdf",
};

export const experiences: ExperienceItem[] = [
  {
    company: "Togle Labs",
    location: "Dubai, UAE",
    position: "AI Engineer",
    duration: "August 2026 – Present",
    periodBadge: "Current Position",
    description:
      "Leading the design, development, and deployment of production Generative AI applications, intelligent agent architectures, and enterprise RAG pipelines to automate workflows and drive intelligent product capabilities.",
    responsibilities: [
      "Architected and deployed scalable Generative AI and Large Language Model (LLM) applications for production workflows.",
      "Engineered production Retrieval-Augmented Generation (RAG) systems incorporating dense semantic embeddings, hybrid retrieval, and vector database search.",
      "Developed autonomous agentic workflows utilizing structured tool-calling, multi-step reasoning, and deterministic fallback strategies.",
      "Designed and implemented comprehensive evaluation frameworks to monitor model faithfulness, retrieval relevance, hallucination rates, and latency.",
      "Collaborated with cross-functional engineering teams to deploy high-throughput AI microservices using FastAPI and containerized services.",
      "Conducted research and experimentation on prompt optimization, contextual chunking strategies, and token cost reduction.",
    ],
    skillsUsed: [
      "Generative AI",
      "LLM Applications",
      "Production RAG",
      "Agentic Workflows",
      "FastAPI",
      "Vector Databases",
      "Model Evaluation",
      "Prompt Engineering",
    ],
  },
  {
    company: "Keywords Studios",
    clientEngagement: "Amazon Client Engagement",
    location: "Bengaluru, India",
    position: "Research Associate – AI / Technical Research Associate – Prompt Engineering",
    duration: "July 2025 – July 2026",
    periodBadge: "Client Engagement",
    description:
      "Worked on AI model enhancement, research workflows, and developed a RAG-based chatbot for the client engagement, contributing to the improvement of large language model outputs through structured prompting, response evaluation, and AI training methodologies.",
    responsibilities: [
      "Engineered and experimented with a Retrieval-Augmented Generation (RAG) based chatbot for the client, enabling context-grounded retrieval and reducing hallucinations in domain-specific queries.",
      "Contributed to AI model enhancement and RLHF-related workflows.",
      "Designed and refined prompts for improving LLM response quality.",
      "Applied structured prompting and chain-of-thought prompting techniques to complex product-related tasks.",
      "Evaluated AI-generated outputs for quality, relevance, accuracy, and instruction adherence.",
      "Supported AI training and research operations.",
      "Collaborated with team members to improve workflow consistency and output quality.",
    ],
    skillsUsed: [
      "RAG-based Chatbots",
      "RLHF Workflows",
      "Chain-of-Thought (CoT)",
      "Structured Prompting",
      "Model Evaluation",
      "LLM Output Auditing",
      "Research Operations",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "documind-ai",
    name: "DocuMind AI – Intelligent Document Question Answering System",
    category: "Generative AI | RAG | LLM Applications",
    categoryFilter: "generative-ai",
    badge: "Featured RAG Architecture",
    description:
      "DocuMind AI is a document intelligence application that enables users to interact with PDF documents through natural language queries. It uses a Retrieval-Augmented Generation pipeline to retrieve relevant document passages and generate context-grounded responses.",
    problem:
      "Generic LLMs frequently hallucinate when answering questions regarding dense, proprietary, or multi-page technical documents. Users require verifiable citations, strict contextual grounding, and low-latency semantic extraction without uploading unstructured records to insecure endpoints.",
    solution:
      "Architected an end-to-end RAG pipeline using FastAPI and Sentence Transformers. Ingested PDF documents are parsed and recursively chunked, converted to high-dimensional dense embeddings, indexed in a FAISS vector space, and retrieved via cosine similarity. Retrieved passages are synthesized with Groq API LLM endpoints, returning exact page-level citations and evaluated for faithfulness.",
    keyFeatures: [
      "PDF document ingestion and processing.",
      "Text extraction and document chunking.",
      "Semantic embeddings using Sentence Transformers.",
      "Vector-based retrieval.",
      "Context-aware LLM response generation.",
      "Source references and page-level citations.",
      "Conversation management.",
      "Evaluation endpoints for assessing response quality and faithfulness.",
      "Backend API architecture using FastAPI.",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "Sentence Transformers",
      "FAISS",
      "SQLite",
      "SQLAlchemy",
      "Pydantic",
      "Groq API",
      "Next.js",
      "TypeScript",
    ],
    highlightNotice:
      "Core engineering focus on grounded answers, verifiable citations, and reducing hallucinations through context-constrained retrieval.",
    architecture: {
      title: "DocuMind RAG & Evaluation Pipeline",
      description:
        "Deterministic ingestion flow coupled with dense semantic retrieval, context grounding, and faithfulness evaluation.",
      nodes: [
        { label: "1. PDF Ingestion", detail: "Document parsing & recursive character splitting", role: "Input Layer" },
        { label: "2. Vector Embedding", detail: "Sentence Transformers dense embeddings (384-dim)", role: "Embedding Layer" },
        { label: "3. FAISS Vector Store", detail: "L2/Cosine similarity index for sub-millisecond retrieval", role: "Retrieval Layer" },
        { label: "4. Context Injection", detail: "Augmented prompt with strict citation constraints", role: "Prompt Layer" },
        { label: "5. Groq LLM Inference", detail: "High-throughput inference with source grounding", role: "Generation Layer" },
        { label: "6. Faithfulness Eval", detail: "Automated scoring endpoints for hallucination detection", role: "Evaluation Layer" },
      ],
    },
    githubUrl: "https://github.com/shazin-ansari/documind-ai", // Editable placeholder
    liveUrl: undefined, // Editable placeholder
  },
  {
    id: "resume-ai",
    name: "Resume AI – Retrieval-Augmented Resume Question Answering",
    category: "Generative AI | LangChain | Semantic Search",
    categoryFilter: "generative-ai",
    badge: "LangSmith Traced RAG",
    description:
      "An AI-powered resume question-answering application that uses Retrieval-Augmented Generation to retrieve relevant information from resume documents and provide contextual responses to user queries.",
    problem:
      "Talent screening and resume reviews frequently rely on superficial keyword matching that overlooks semantic relevance, contextual project impact, and nuanced technical competencies across diverse resume layouts.",
    solution:
      "Constructed a semantic question-answering system combining LangChain retrieval chains with FAISS indexing. Embedded resume document chunks enable recruiters to query experience, tools, and technical leadership in natural language, backed by LangSmith tracing for prompt runs, token cost, and hallucination evaluation.",
    keyFeatures: [
      "Resume document ingestion.",
      "Semantic text retrieval.",
      "Vector similarity search.",
      "Context-based question answering.",
      "LLM integration.",
      "Experimentation with response quality and hallucination evaluation.",
      "Experiment tracking using LangSmith.",
    ],
    technologies: ["Python", "Streamlit", "LangChain", "FAISS", "LLM APIs", "LangSmith"],
    architecture: {
      title: "Resume Semantic QA & LangSmith Experimentation Pipeline",
      description: "Direct vector search pipeline with full execution tracing and hallucination monitoring.",
      nodes: [
        { label: "1. Resume Parsing", detail: "Multi-format resume parsing and text normalization", role: "Ingestion" },
        { label: "2. Vector Indexing", detail: "FAISS vector database for candidate experience chunks", role: "Indexing" },
        { label: "3. LangChain Retrieval", detail: "Similarity search with top-K candidate passage retrieval", role: "Retrieval" },
        { label: "4. LLM Response Synthesis", detail: "Context-bounded generation answering candidate queries", role: "Synthesis" },
        { label: "5. LangSmith Telemetry", detail: "Trace latency, token usage, and answer fidelity", role: "Observability" },
      ],
    },
    githubUrl: "https://github.com/shazin-ansari/resume-ai", // Editable placeholder
    liveUrl: undefined,
  },
  {
    id: "detectify",
    name: "Detectify – Machine Learning-Based Detection System",
    category: "Machine Learning | Predictive Analytics",
    categoryFilter: "machine-learning",
    badge: "92% Reported Accuracy",
    description:
      "Detectify is a machine learning application developed to identify patterns and classify data using a K-Nearest Neighbors algorithm. The project demonstrates the practical application of supervised machine learning within a Django-based web application.",
    problem:
      "Deploying raw statistical models requires bridges to production web systems: authenticated users need clean interfaces to submit feature vectors, receive low-latency predictions, and audit historical classifications.",
    solution:
      "Trained a supervised K-Nearest Neighbors classifier utilizing Scikit-learn, yielding 92% validation accuracy. Embedded the serialized inference pipeline into a Django web application connected to a relational MySQL database for data logging and user management.",
    keyFeatures: [
      "Machine learning-based classification.",
      "KNN model implementation.",
      "Model integration with a Django application.",
      "MySQL database integration.",
      "User-facing application workflow.",
    ],
    technologies: ["Python", "Django", "Scikit-learn", "KNN", "MySQL"],
    metrics: { label: "Reported Model Accuracy", value: "92%" },
    architecture: {
      title: "Detectify ML Serving & Data Pipeline",
      description: "Supervised classification pipeline hosted within an authenticated Django framework.",
      nodes: [
        { label: "1. Data Preprocessing", detail: "Feature scaling, normalization & validation splits", role: "Data Prep" },
        { label: "2. Scikit-learn KNN", detail: "K-Nearest Neighbors model trained for pattern classification", role: "Model" },
        { label: "3. Django Serving", detail: "Model deserialization and real-time inference view", role: "Web Layer" },
        { label: "4. MySQL Persistence", detail: "Relational storage of features, labels, and audit logs", role: "Database" },
      ],
    },
    githubUrl: "https://github.com/shazin-ansari/detectify", // Editable placeholder
    liveUrl: undefined,
  },
  {
    id: "mental-health-support",
    name: "Mental Health Support Application",
    category: "Web Development | AI / Application Development",
    categoryFilter: "web-apps",
    badge: "Modular Web Application",
    description:
      "A Flask-based mental health support application designed to provide users with an accessible digital platform for mental health-related interaction and support.",
    problem:
      "Individuals experiencing stress or seeking conversational support often lack a low-barrier, accessible, and structured digital platform to explore self-help resources and reflective interactions.",
    solution:
      "Engineered a responsive Flask application with modular routing and lightweight state management. Focused on clean separation of concerns, intuitive user experience, and sensitive session handling designed for empathetic, supportive exploration.",
    keyFeatures: [
      "Web-based user interface.",
      "Flask backend.",
      "Application workflow and data handling.",
      "Modular backend development.",
    ],
    technologies: ["Python", "Flask", "HTML", "CSS", "JavaScript"],
    disclaimer:
      "Demonstrative support platform. This application does not claim clinical validation, medical diagnosis, or therapeutic effectiveness.",
    architecture: {
      title: "Flask Modular Application Architecture",
      description: "Accessible, modular web architecture designed for lightweight user interaction.",
      nodes: [
        { label: "1. Client Interface", detail: "Responsive HTML5/CSS/JavaScript interactive views", role: "Frontend" },
        { label: "2. Flask App Router", detail: "Modular blueprints for interaction and resource delivery", role: "Backend" },
        { label: "3. Session Handler", detail: "Privacy-conscious workflow management", role: "Application Logic" },
      ],
    },
    githubUrl: "https://github.com/shazin-ansari/mental-health-support", // Editable placeholder
    liveUrl: undefined,
  },
  {
    id: "face-recognition-attendance",
    name: "Face Recognition-Based Attendance System",
    category: "Computer Vision | Machine Learning",
    categoryFilter: "computer-vision",
    badge: "~85% Recognition Accuracy",
    description:
      "A computer vision-based attendance management system that uses face detection and recognition techniques to identify registered individuals and support automated attendance recording.",
    problem:
      "Manual roll calls and paper sign-in rosters are error-prone, vulnerable to proxy attendance, and consume significant operational time in educational and workplace environments.",
    solution:
      "Implemented a real-time computer vision pipeline utilizing OpenCV. Employs Haar Cascade classifiers for localized facial bounding box detection and Local Binary Patterns Histograms (LBPH) for texture-based facial recognition, automatically registering timestamps upon verified identity recognition.",
    keyFeatures: [
      "Facial detection using Haar Cascade classifiers.",
      "Face recognition using Local Binary Patterns Histograms (LBPH).",
      "Automated identification workflow.",
      "Attendance recording.",
      "Recognition performance experimentation.",
    ],
    technologies: ["Python", "OpenCV", "Haar Cascade", "LBPH", "Computer Vision"],
    metrics: { label: "Reported Recognition Accuracy", value: "≈85%" },
    architecture: {
      title: "Vision Detection & LBPH Recognition Pipeline",
      description: "Real-time frame processing from optical capture to automated timestamp logging.",
      nodes: [
        { label: "1. Video Ingestion", detail: "Real-time webcam video stream capture via OpenCV", role: "Input Stream" },
        { label: "2. Haar Cascade", detail: "Multi-scale facial detection & region-of-interest cropping", role: "Detection" },
        { label: "3. LBPH Recognizer", detail: "Local Binary Patterns Histograms texture matching", role: "Classification" },
        { label: "4. Attendance Logger", detail: "Automated identity timestamp registration and deduplication", role: "Output" },
      ],
    },
    githubUrl: "https://github.com/shazin-ansari/face-recognition-attendance", // Editable placeholder
    liveUrl: undefined,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Generative AI & LLM Systems",
    description: "Core expertise in prompt architecture, RAG pipelines, RLHF workflows, and model evaluation.",
    iconName: "BrainCircuit",
    skills: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "LangChain",
      "LLM Evaluation",
      "RLHF Workflows",
      "Semantic Search",
      "Embeddings",
    ],
  },
  {
    title: "Programming Languages",
    description: "Strong foundational programming in data structures, API backends, and full-stack integration.",
    iconName: "Code",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "AI & Machine Learning",
    description: "Supervised learning, pattern detection, computer vision pipelines, and quantitative validation.",
    iconName: "Cpu",
    skills: [
      "Scikit-learn",
      "Machine Learning",
      "K-Nearest Neighbors",
      "OpenCV",
      "Computer Vision",
      "Model Evaluation",
    ],
  },
  {
    title: "Frameworks & Developer Tools",
    description: "Production web frameworks, LLM telemetry platforms, and version control pipelines.",
    iconName: "Wrench",
    skills: ["FastAPI", "Flask", "Django", "Streamlit", "Next.js", "Git", "GitHub", "LangSmith"],
  },
  {
    title: "Databases & Vector Storage",
    description: "Relational persistence and sub-millisecond approximate nearest neighbor vector indices.",
    iconName: "Database",
    skills: ["MySQL", "SQLite", "Vector Databases / FAISS"],
  },
];

export const educationInfo: EducationInfo = {
  degree: "Bachelor of Technology – Artificial Intelligence and Data Science",
  institution: "MES College of Engineering, Kuttippuram",
  university: "APJ Abdul Kalam Technological University",
  period: "2020 – 2024",
  cgpa: "6.86",
  highlights: [
    "Specialized in Artificial Intelligence, Deep Learning, Data Structures, and Probability & Statistics.",
    "Graduated with hands-on capstone research and practical engineering implementations across Computer Vision, NLP, and Predictive Analytics.",
    "APJ Abdul Kalam Technological University accredited curriculum.",
  ],
};
