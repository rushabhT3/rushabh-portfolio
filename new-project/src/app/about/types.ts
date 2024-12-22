// types.ts
export interface Skill {
  [key: string]: string;
}

export interface Profile {
  label: string;
  value: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface AboutMe {
  intro: string;
  skillsAndTechnologies: Skill;
  profiles: Profile[];
  otherSkills: Skill;
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  description: string[];
  techStack: string[];
}

export interface SkillCardProps {
  title: string;
  skills: Skill;
}
