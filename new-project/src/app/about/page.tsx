"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Calendar } from "lucide-react";
import { aboutMeData, experienceData } from "./data";
import type { Experience, SkillCardProps } from "./types";

const ExperienceCard: React.FC<{ experience: Experience; isLast: boolean }> = ({
  experience,
  isLast,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative">
      {/* Timeline Line - Only rendered on sm and above */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800 hidden sm:block">
        <div className="absolute left-1/2 top-6 w-3 h-3 -ml-1.5 bg-blue-500 rounded-full" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative pl-4 sm:pl-16 pb-8"
      >
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-shadow duration-300">
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
                  {experience.period.start} - {experience.period.end}
                </p>
              </div>
            </div>

            {/* Expand Button */}
            <div className="flex items-center justify-end">
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
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
                className="mt-4"
              >
                <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="space-y-4">
                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Key Responsibilities
                      </h4>
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

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.techStack.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};


const ExperienceTimeline: React.FC = () => {
  // Sort experience by comparing dates (using end date if available, otherwise start date)
  const sortedExperience = [...experienceData].sort((a, b) => {
    const getComparisonDate = (exp: Experience) => {
      // If end is "Present", use current date
      if (exp.period.end.toLowerCase() === "present") {
        return new Date();
      }
      // Use end date if available, otherwise use start date
      return new Date(exp.period.end || exp.period.start);
    };

    return getComparisonDate(b).getTime() - getComparisonDate(a).getTime();
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-xl"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
        Professional Experience
      </h2>
      <div className="relative">
        {sortedExperience.map((exp, index) => (
          <ExperienceCard
            key={index}
            experience={exp}
            isLast={index === sortedExperience.length - 1}
          />
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
              {aboutMeData.intro}
            </p>
          </motion.div>

          <ExperienceTimeline />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <SkillCard
              title="Skills and Technologies"
              skills={aboutMeData.skillsAndTechnologies}
            />
            <SkillCard title="Other Skills" skills={aboutMeData.otherSkills} />
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
              {aboutMeData.profiles.map((profile) => (
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
