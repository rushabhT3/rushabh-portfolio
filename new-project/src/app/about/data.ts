// data.ts
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from "react-icons/fa";
import { AboutMe, Experience } from "./types";

export const aboutMeData: AboutMe = {
  intro:
    "I'm a seasoned full-stack developer with experience across diverse projects, specializing in databases, programming languages, and cloud tools to drive scalable web development.",
  skillsAndTechnologies: {
    "Programming Languages": "Python, JavaScript, TypeScript, Golang",
    Backend: "Node.js, Express.js, Django, FastAPI, Golang",
    Frontend: "ReactJS, NextJS, Redux",
    "Database & Tools":
      "SQL, MongoDB, AWS, Redis, Nginx, Jenkins, React Router",
  },
  profiles: [
    {
      label: "LinkedIn",
      value: "trivedirushabh",
      link: "https://www.linkedin.com/in/trivedirushabh/",
      icon: FaLinkedin,
    },
    {
      label: "GitHub",
      value: "rushabhT3",
      link: "https://github.com/rushabhT3/",
      icon: FaGithub,
    },
    {
      label: "LeetCode",
      value: "rushabhtrivedi03",
      link: "https://leetcode.com/rushabhtrivedi03",
      icon: FaCode,
    },
    {
      label: "HackerRank",
      value: "rushabhtrivedi03",
      link: "https://www.hackerrank.com/profile/rushabhtrivedi03",
      icon: FaHackerrank,
    },
  ],
  otherSkills: {
    "Spoken Languages": "English, Hindi, Marathi",
    "Digital Marketing":
      "Fundamentals of Digital Marketing (Google Garage Certification)",
  },
};

export const experienceData: Experience[] = [
  {
    company: "Polynomial AI",
    role: "Software Engineer L1",
    location: "Surat, Gujarat, India",
    period: {
      start: "Nov 2024",
      end: "Present",
    },
    "description": [
      "Developed 30+ new APIs and updated 50+ Django-based APIs with PostgreSQL database models in invoice intelligence project",
      "Enhanced system performance by integrating Docker for containerization, AWS SDK for cloud services, Celery for asynchronous tasks, and Grafana for performance monitoring",
      "Achieved 1000x faster OCR processing for specific documents using PyMuPDF (fitz) library",
      "Developed an OpenAI CLIP-based machine learning model for document verification system, filtering 1000+ false documents monthly"
    ],
    techStack: [
      "Python",
      "Django",
      "PostgreSQL",
      "MongoDB",
      "Machine Learning",
      "Docker",
      "AWS",
    ],
  },
];

