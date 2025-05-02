
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
  featured?: boolean;
  createdAt: number;
  category?: string; // Added category for filtering
}

export interface Certificate {
  id: string;
  title: string;
  issuingOrg: string;
  date: string;
  image: string;
  createdAt: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  description?: string;
  image: string;
  category?: string;
  createdAt: number;
}

export type User = {
  username: string;
  isAdmin: boolean;
};

export interface Rating {
  id: string;
  score: number;
  comment?: string;
  createdAt: number;
}

export interface AboutMe {
  id: string;
  headline: string;
  bio: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  interests: string[];
  profileImage: string;
  resumeFile?: string; // Added resume file URL
  createdAt: number;
  updatedAt: number;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  description?: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
}
