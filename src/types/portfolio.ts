export interface Project {
  id: string;
  name: string;
  category: string;
  categoryFilter: "all" | "generative-ai" | "machine-learning" | "computer-vision" | "web-apps";
  badge: string;
  description: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  technologies: string[];
  metrics?: { label: string; value: string };
  architecture: {
    title: string;
    description: string;
    nodes: { label: string; detail: string; role: string }[];
  };
  highlightNotice?: string;
  disclaimer?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  company: string;
  clientEngagement?: string;
  location: string;
  position: string;
  duration: string;
  periodBadge: string;
  description: string;
  responsibilities: string[];
  skillsUsed: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  university: string;
  period: string;
  cgpa: string;
  highlights: string[];
}
