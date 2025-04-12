// src/app/page.tsx
"use client";

import Link from "next/link";
import { ArrowRight, FileText, Mail, Code, Database, Server, Cpu } from "lucide-react";
import { motion } from "framer-motion";

// const skillsData = [
//   {
//     title: "Frontend",
//     icon: Code,
//     description: "React, Next.js, Tailwind CSS",
//     color: "bg-blue-500"
//   },
//   {
//     title: "Backend",
//     icon: Server,
//     description: "Django, FastAPI, Node.js, Express, Go",
//     color: "bg-green-500"
//   },
//   {
//     title: "Database",
//     icon: Database,
//     description: "PostgreSQL, MongoDB",
//     color: "bg-yellow-500"
//   },
//   {
//     title: "ML & AI",
//     icon: Cpu,
//     description: "ML Models, Intelligence Systems",
//     color: "bg-purple-500"
//   },
// ];

export default function Home() {
  const resumeLink =
    process.env.NEXT_PUBLIC_RESUME_LINK || "/default-resume-url";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 min-h-screen transition-colors duration-200">
        <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl text-center mt-16"
          >
            Hello, I'm{" "}
            <motion.span 
              className="text-indigo-600 dark:text-indigo-400"
              animate={{ 
                color: ["#4f46e5", "#8b5cf6", "#3b82f6", "#4f46e5"] 
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              Rushabh Trivedi
            </motion.span>
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

          {/* 
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className={`${skill.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <skill.icon className="text-white h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link
              href="/about"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              <motion.div 
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                Discover more about me
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </motion.div>
            </Link>
            <Link
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-800 dark:hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
            >
              <motion.div
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                View my resume
                <FileText className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
              </motion.div>
            </Link>
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
            <motion.a
              href="mailto:rushabhtrivedi03@gmail.com"
              className="mt-2 inline-flex items-center text-lg font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="h-5 w-5 mr-2" />
              rushabhtrivedi03@gmail.com
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}