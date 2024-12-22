"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";

// const skillsData = [
//   {
//     title: "Programming Languages",
//     description: "Python, JavaScript, Go, TypeScript",
//   },
//   {
//     title: "Frontend Development",
//     description: "React, Next.js, Tailwind CSS",
//   },
//   {
//     title: "Backend Development",
//     description: "Django, FastAPI, Node.js, Express, Go",
//   },
//   {
//     title: "Database",
//     description: "PostgreSQL, MongoDB",
//   },
//   {
//     title: "Cloud & DevOps",
//     description: "AWS, Docker",
//   },
//   {
//     title: "Machine Learning",
//     description: "ML Models, Intelligence Systems",
//   },
// ];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const resumeLink =
    process.env.NEXT_PUBLIC_RESUME_LINK || "/default-resume-url";

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
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 min-h-screen transition-colors duration-200">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl text-center mt-16"
          >
            Hello, I'm{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Rushabh Trivedi
            </span>
          </motion.h1>

          {/* welcome text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 sm:text-2xl text-center max-w-3xl"
          >
            A Software Developer passionate about building scalable web
            applications and implementing machine learning solutions.
            Specializing in full-stack development with modern technologies
          </motion.p>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-3xl"
          >
            {skillsData.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-white/10 backdrop-blur-sm dark:bg-gray-800/50"
              >
                <h3 className="font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 sm:flex sm:justify-center"
          >
            <div className="rounded-md shadow">
              <Link
                href="/about"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                Discover more about me
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href={resumeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
              >
                View my resume
                <FileText className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Interested in collaborating or have a project in mind?
            </p>
            <a
              href="mailto:rushabhtrivedi03@gmail.com"
              className="mt-2 inline-flex items-center text-lg font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
            >
              <Mail className="h-5 w-5 mr-2" />
              rushabhtrivedi03@gmail.com
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
