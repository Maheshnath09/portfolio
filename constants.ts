import { Project, SkillCategory, EducationItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'CONTACT', href: '#contact' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI & ML',
    skills: ['Agentic AI', 'Model Context Protocol (MCP)', 'LLMs (Llama 3/GPT-4)', 'RAG Pipelines', 'Multi-Agent Systems', 'Vector DBs (FAISS/Chroma)', 'LangChain/LlamaIndex', 'Computer Vision (CLIP)', 'PyTorch', 'Python'],
    icon: 'brain'
  },
  {
    title: 'Backend & Web Engineering',
    skills: ['FastAPI (Production)', 'Django/DRF & Flask', 'Microservices', 'REST APIs', 'API Development', 'System Design', 'AsyncIO/Concurrency', 'SaaS Application Dev', 'WebSockets/Real-time', 'Scalable Architecture', 'Next.js/React'],
    icon: 'globe'
  },
  {
    title: 'Data & DBs',
    skills: ['PostgreSQL', 'Mysql', 'Redis', 'Pandas', 'NumPy', 'SQLAlchemy', 'Airflow', 'firebase', 'supabase'],
    icon: 'database'
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'jenkins', 'CI/CD', 'Jira', 'Postman', 'swagger', 'Agile'],
    icon: 'tool'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Discord Clone',
    description: 'Production-ready Discord clone with real-time messaging. Features WebSocket-powered chat rooms, JWT authentication, and Redis pub/sub for scalable message broadcasting.',
    tags: ['FastAPI', 'React', 'TypeScript', 'Redis', 'WebSockets', 'Docker'],
    liveLink: 'https://discord-clone-ten-xi.vercel.app/',
    repoLink: 'https://github.com/Maheshnath09/discord-clone',
    thumbnailUrl: '/discord-clone-thumb.png'
  },
  {
    id: '2',
    title: 'ProjectGen AI',
    description: 'AI-powered SaaS platform that generates complete semester projects for engineering students. Uses Groq Llama 3.3 70B with RAG to produce reports, slides, code, and viva Q&A following GTU/VTU/AICTE standards.',
    tags: ['Next.js', 'FastAPI', 'Groq AI', 'RAG', 'PostgreSQL', 'Celery'],
    liveLink: 'https://project-gen-ai.vercel.app/',
    thumbnailUrl: '/projectgen-thumb.png'
  },
  {
    id: '3',
    title: 'Real-Time Streaming API',
    description: 'Production-ready SSE streaming API with event replay, topic subscriptions, and client metadata. Features async broadcast to 1000+ clients, backpressure handling, and automatic reconnection.',
    tags: ['FastAPI', 'Python', 'SSE', 'asyncio', 'Redis', 'Docker'],
    liveLink: 'https://realtime-streaming-api.onrender.com/',
    repoLink: 'https://github.com/Maheshnath09/realtime-streaming-api',
    thumbnailUrl: '/streaming-api-thumb.png'
  },
  {
    id: '4',
    title: 'Caching Proxy Server',
    description: 'High-performance HTTP caching proxy with in-memory and Redis backends. Features LRU eviction, real-time statistics, configurable TTL, and transparent proxy mode for API response caching.',
    tags: ['FastAPI', 'Python', 'Redis', 'Docker', 'LRU Cache'],
    liveLink: 'https://caching-proxy-server.onrender.com/',
    repoLink: 'https://github.com/Maheshnath09/caching-proxy-server',
    thumbnailUrl: '/caching-proxy-thumb.png'
  },
  {
    id: '5',
    title: 'FastAPI Auth Microservice',
    description: 'Production-ready authentication microservice with JWT tokens, OAuth (Google/GitHub), RBAC, password reset with OTP, and email verification. Includes Redis session management and PostgreSQL.',
    tags: ['FastAPI', 'PostgreSQL', 'Redis', 'JWT', 'OAuth', 'Docker'],
    repoLink: 'https://github.com/Maheshnath09/fastapi-auth-microservice',
    thumbnailUrl: '/auth-microservice-thumb.png'
  },
  {
    id: '6',
    title: 'Realtime Collaborative Whiteboard',
    description: 'Miro-inspired whiteboard app with real-time drawing sync via WebSockets. Features live cursors, chat, role-based sharing, and drawing tools including shapes, text, and sticky notes.',
    tags: ['React', 'FastAPI', 'WebSockets', 'TypeScript', 'PostgreSQL', 'Zustand'],
    liveLink: 'https://realtime-collaborative-whiteboard-ebon.vercel.app/',
    repoLink: 'https://github.com/Maheshnath09/realtime-collaborative-whiteboard',
    thumbnailUrl: '/whiteboard-thumb.png'
  },
  {
    id: '7',
    title: 'Image Search Engine',
    description: 'Semantic image search powered by CLIP and FAISS. Supports text-to-image and image-to-image search across local datasets, COCO, Openverse, and Unsplash with a modern Streamlit UI.',
    tags: ['Python', 'FastAPI', 'CLIP', 'FAISS', 'Streamlit', 'Docker'],
    liveLink: 'https://maheshnath09-image-search-engine.hf.space/',
    repoLink: 'https://github.com/Maheshnath09/image-search-engine',
    thumbnailUrl: '/image-search-thumb.png'
  },
  {
    id: '8',
    title: 'Multi-Agent Data Pipeline Builder',
    description: 'Intelligent multi-agent AI system with 5 specialized agents (Orchestrator, Data Analyst, ML Engineer, Visualization, Insight) and RAG-powered recommendations using ChromaDB for context-aware data science automation.',
    tags: ['Python', 'Gradio', 'Scikit-learn', 'ChromaDB', 'Groq AI', 'RAG'],
    liveLink: 'https://maheshnath09-data-pipeline-agent.hf.space/',
    repoLink: 'https://github.com/Maheshnath09/data-pipeline-agent',
    thumbnailUrl: '/data-pipeline-thumb.png'
  },
  {
    id: '9',
    title: 'AI Content Repurposing Tool',
    description: 'SaaS platform that transforms long-form content into platform-optimized social media posts for Twitter, LinkedIn, Instagram, and more. Powered by Groq LLaMA 3.3 70B with brand voice customization.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Groq AI', 'Zustand', 'JWT'],
    liveLink: 'https://ai-content-repurposing-tool-beta.vercel.app/',
    repoLink: 'https://github.com/Maheshnath09/ai-content-repurposing-tool',
    thumbnailUrl: '/content-repurpose-thumb.png'
  },
  {
    id: '10',
    title: 'Smart Shop Django',
    description: 'Full-featured e-commerce platform with AI-powered product recommendations using ML-based collaborative filtering. Features wishlist, cart, order management, and a responsive dark-themed UI.',
    tags: ['Django', 'Python', 'SQLite', 'ML', 'Bootstrap 5', 'Crispy Forms'],
    liveLink: 'https://maheshh4sure.pythonanywhere.com/',
    repoLink: 'https://github.com/Maheshnath09/smart-shop-django',
    thumbnailUrl: '/smart-shop-thumb.png'
  },
  {
    id: '11',
    title: 'Daily Challenge App',
    description: 'Brutalist-designed daily challenge platform with streak tracking, points system, and global leaderboard. Features coding, logic, and life challenges with JWT auth.',
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT', 'APScheduler'],
    repoLink: 'https://github.com/Maheshnath09/daily-challenge-app',
    thumbnailUrl: '/daily-challenge-thumb.png'
  },
  {
    id: '12',
    title: 'Splitwise - Expense Tracker',
    description: 'Full-featured expense tracking and bill splitting app inspired by Splitwise. Manage friends, create groups, track balances, and settle debts with real-time calculations.',
    tags: ['Flask', 'Python', 'SQLite', 'SQLAlchemy', 'Tailwind CSS', 'Flask-Login'],
    liveLink: 'https://splitwise-flask.vercel.app/',
    repoLink: 'https://github.com/Maheshnath09/splitwise-flask',
    thumbnailUrl: '/splitwise-thumb.png'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    degree: 'Diploma in Computer Engineering',
    institution: 'Gujarat Technological University',
    year: '2022 - 2025',
    description: 'Mastered CS core: DSA, Operating Systems, and DBMS. Applied these fundamentals to architect scalable, high-performance AI & backend systems.'
  },
  {
    id: '2',
    degree: 'High school studies',
    institution: 'Shree Mgvm',
    year: '2020 - 2022',
    description: 'Excelled in Math & Computer Science. Led the Robotics Club as Head Developer, establishing a rigorous foundation in engineering and problem-solving.'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com/Maheshnath09',
  linkedin: 'https://www.linkedin.com/in/mahesh-nath-1aa36a259/',
  twitter: 'https://x.com/Maheshnath_23',
  huggingface: 'https://huggingface.co/Maheshnath09',
  kaggle: 'https://www.kaggle.com/maheshnath09',
  devto: 'https://dev.to/maheshnath09',
  discord: 'https://discord.com/users/your-discord-id', // Update this with your Profile ID or Server Invite
  email: 'maheshnath2143@gmail.com'
};