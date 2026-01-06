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
    skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'Keras', 'OpenCV', 'NLP', 'Computer Vision'],
    icon: 'brain'
  },
  {
    title: 'Web Dev',
    skills: ['Django', 'FastAPI', 'Flask', 'React', 'TypeScript', 'Tailwind CSS', 'REST APIs', 'GraphQL'],
    icon: 'globe'
  },
  {
    title: 'Data & DBs',
    skills: ['PostgreSQL', 'Redis', 'MongoDB', 'Pandas', 'NumPy', 'SQLAlchemy', 'Airflow'],
    icon: 'database'
  },
  {
    title: 'Tools',
    skills: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Linux', 'CI/CD', 'Jira', 'Agile'],
    icon: 'tool'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Retro AI Vision',
    description: 'A computer vision model that converts real-time video feeds into 8-bit pixel art animations using PyTorch and OpenCV.',
    tags: ['Python', 'PyTorch', 'OpenCV', 'FastAPI'],
    liveLink: 'https://example.com/demo',
    repoLink: 'https://github.com/example/repo',
    thumbnailUrl: 'https://picsum.photos/400/300?random=1'
  },
  {
    id: '2',
    title: 'StockPredict Bot',
    description: 'Algorithmic trading bot that uses LSTM neural networks to predict stock market trends with 78% accuracy on historical data.',
    tags: ['Python', 'TensorFlow', 'Pandas', 'AWS'],
    repoLink: 'https://github.com/example/repo',
    thumbnailUrl: 'https://picsum.photos/400/300?random=2'
  },
  {
    id: '3',
    title: 'Pixel Portfolio Engine',
    description: 'The very engine running this website! A React + TypeScript scalable portfolio template with retro aesthetics.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    liveLink: 'https://example.com',
    repoLink: 'https://github.com/example/repo',
    thumbnailUrl: 'https://picsum.photos/400/300?random=3'
  },
  {
    id: '4',
    title: 'Smart Chat CRM',
    description: 'An AI-powered customer relationship management tool integrating LLMs to auto-draft email responses.',
    tags: ['Django', 'LangChain', 'React', 'PostgreSQL'],
    liveLink: 'https://example.com/demo',
    thumbnailUrl: 'https://picsum.photos/400/300?random=4'
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: '1',
    degree: 'M.S. Computer Science (AI Specialization)',
    institution: 'Tech University of Pixel Valley',
    year: '2021 - 2023',
    description: 'Thesis on "Optimizing Neural Networks for Low-Power Retro Gaming Consoles".'
  },
  {
    id: '2',
    degree: 'B.S. Software Engineering',
    institution: 'State Institute of Technology',
    year: '2017 - 2021',
    description: 'Graduated Summa Cum Laude. Lead developer for the university robotics club.'
  }
];

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'maheshnath2143@gmail.com'
};