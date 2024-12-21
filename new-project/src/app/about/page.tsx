"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from "react-icons/fa";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";

interface Skill {
  [key: string]: string;
}

interface Profile {
  label: string;
  value: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface AboutMe {
  intro: string;
  skillsAndTechnologies: Skill;
  profiles: Profile[];
  otherSkills: Skill;
}

interface Experience {
  company: string;
  role: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  description: string[];
}


const aboutMe: AboutMe = {
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


// Experience data - Add new experiences here
const experiences: Experience[] = [
  {
    company: "Polynomial AI",
    role: "Software Engineer L1",
    location: "Surat, Gujarat, India",
    period: {
      start: "Nov 2024",
      end: "Present",
    },
    description: [
      "Contributing to a tech stack migration project, transitioning from Flask/MongoDB to Django/PostgreSQL",
      "Developing and implementing machine learning models for use cases in the company's intelligence system.",
    ],
  },
];


interface SkillCardProps {
  title: string;
  skills: Skill;
}

const ExperienceCard: React.FC<{ experience: Experience }> = ({
  experience,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-4 transition-shadow duration-300">
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center cursor-pointer space-y-4 sm:space-y-0"
        >
          {/* Company and Role Information */}
          <div className="flex items-start sm:items-center space-x-4">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900 rounded-full flex-shrink-0 flex items-center justify-center">
              <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {experience.company}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {experience.role}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.location}
              </p>
            </div>
          </div>

          {/* Timeline and Expand Button */}
          <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto">
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-4">
              {experience.period.start} - {experience.period.end}
            </span>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
            )}
          </div>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <ul className="list-disc list-inside space-y-2">
                  {experience.description.map((point, index) => (
                    <li
                      key={index}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};


const ExperienceTimeline: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        Professional Experience
      </h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
  >
    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
      {title}
    </h3>
    <ul className="space-y-2">
      {Object.entries(skills).map(([skillCategory, skillDetails]) => (
        <li key={skillCategory} className="flex items-start">
          <span className="text-blue-500 dark:text-blue-400 mr-2">•</span>
          <span>
            <strong className="text-gray-700 dark:text-gray-300">
              {skillCategory}:
            </strong>{" "}
            <span className="text-gray-600 dark:text-gray-400">
              {skillDetails}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setDarkMode(prefersDarkMode);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

    // Use addEventListener instead of addListener
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <div className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          >
            About Me
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl mb-8"
          >
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              {aboutMe.intro}
            </p>
          </motion.div>

          <ExperienceTimeline />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <SkillCard
              title="Skills and Technologies"
              skills={aboutMe.skillsAndTechnologies}
            />
            <SkillCard title="Other Skills" skills={aboutMe.otherSkills} />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
              Profiles
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {aboutMe.profiles.map((profile) => (
                <a
                  key={profile.label}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                >
                  <profile.icon className="mr-2" />
                  {profile.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
