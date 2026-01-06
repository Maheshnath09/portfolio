export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;
  repoLink?: string;
  thumbnailUrl?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}