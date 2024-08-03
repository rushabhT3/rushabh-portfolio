"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaHackerrank, FaCode } from "react-icons/fa";

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

const aboutMe: AboutMe = {
  intro:
    "I'm a seasoned full-stack developer with experience across diverse projects, specializing in databases, programming languages, and cloud tools to drive scalable web development.",
  skillsAndTechnologies: {
    "Programming Languages": "Python, JavaScript, TypeScript, Go",
    Backend: "Node.js, Express.js, Django, Go-Gin",
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

interface SkillCardProps {
  title: string;
  skills: Skill;
}

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
