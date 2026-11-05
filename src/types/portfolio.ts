export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  type: string;
  crestType: 'bracu' | 'college' | 'school';
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyShort?: string;
  period: string;
  employmentType: string;
  location: string;
  description: string;
  logoType: 'skf' | 'robokit';
  socialLinks?: {
    name: string;
    url: string;
    color: string;
  }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export type ProjectCategory = 
  | 'Research' 
  | 'Software & Web Development' 
  | 'Game Development' 
  | 'Robotics & IoT' 
  | 'Digital Logic Design';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  tags: string[];
  githubUrl?: string;
}

export interface ProfileInfo {
  name: string;
  roleTitle: string;
  bio: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  stats: {
    projects: string;
    startup: string;
    skillSets: string;
  };
  venture: {
    name: string;
    description: string;
    socials: {
      name: string;
      url: string;
      color: string;
    }[];
  };
}

export interface SearchMatch {
  id: string;
  title: string;
  section: 'PROJECTS' | 'EXPERIENCE' | 'EDUCATION' | 'SKILLS' | 'RESEARCH';
  subtitle?: string;
  category?: string;
  tags?: string[];
  snippet?: string;
  targetElementId: string;
  projectId?: string;
  projectCategory?: ProjectCategory;
}
