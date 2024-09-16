"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ProjectCard from "../components/ProjectCard";
import projectsData from './projects.json';

type Project = {
  title: string;
  description: string;
  tech: string;
  link: string;
};

// const projects: Project[] = [
//   {
//     title: "Full Stack Mailbox Client",
//     description:
//       "A comprehensive email management system with secure authentication and database encryption, featuring a sleek user interface built with React and Tailwind CSS. Includes JWT authentication for enhanced security and performance.",
//     tech: "React.js, Express.js, MySQL, Sequelize, Tailwind CSS, React Router, JWT",
//     link: "https://github.com/rushabhT3/mailBoxClientReact",
//   },
//   {
//     title: "Real-Time Group Chat Application",
//     description:
//       "A dynamic group chat application that supports real-time messaging using Socket.io. Secure user authentication and data management are ensured with MySQL and AWS. Features include user login, message encryption, and group chat functionalities.",
//     tech: "Express.js, MySQL, Socket.io, bcrypt, cors, dotenv, multer, mysql2, node-cron, pm2, sequelize, aws-sdk",
//     link: "https://github.com/rushabhT3/ChatApp",
//   },
//   {
//     title: "Backend Expense Tracker",
//     description:
//       "A robust backend for an expense tracking application. Implements secure user authentication with JWT and data encryption. Utilizes AWS for deployment and data storage. Designed to handle various expense tracking operations efficiently.",
//     tech: "Express.js, SQL, AWS, JWT, Bcrypt, Sequelize, Brevo",
//     link: "https://github.com/rushabhT3/node.js/tree/main/Express.Js/AWSapp",
//   },
//   {
//     title: "Multi-Column-To-Do-App with Drag and Drop Functionality",
//     description:
//     "A dynamic Todo application built with Next.js and MongoDB, featuring a drag-and-drop interface. Utilizes Tailwind CSS for a responsive design, shadcn/ui for enhanced interactions, and Lucide React for iconic visuals. Allows users to add, edit, and delete tasks, with the added functionality of dragging and dropping tasks to reorder them.",
//     tech: "TypeScript, Next.js, MongoDB, @hello-pangea/dnd, Tailwind CSS, shadcn/ui, Lucide React",
//     link: "https://github.com/rushabhT3/Multi-Column-To-Do-App",
//   },
//   {
//     title: "Frontend Expense Tracker",
//     description:
//       "A serverless expense tracker application powered by Google Firebase for the backend and React.js for the frontend. Features include user authentication, real-time data updates, and an intuitive user interface for tracking expenses.",
//     tech: "React.js, React Router, Firebase",
//     link: "https://github.com/rushabhT3/react/tree/main/expense-tracker",
//   },
//   {
//     title: "Mongoose Expense Tracker",
//     description:
//       "A robust backend for an expense tracking application powered by Mongoose. Implements secure user authentication with JWT and data encryption. Utilizes AWS for deployment and data storage. Designed to handle various expense tracking operations efficiently.",
//     tech: "Express.js, AWS, JWT, Bcrypt, Mongoose (MongoDB), Brevo",
//     link: "https://github.com/rushabhT3/mongoose-Expense-Tracker",
//   },
//   {
//     title: "Portfolio Website",
//     description:
//       "A modern and responsive portfolio website showcasing my projects and skills. Built using Next.js and TypeScript for a robust and scalable frontend, and styled with Tailwind CSS for a clean and adaptive design. Deployed and hosted on Vercel for seamless performance and accessibility.",
//     tech: "Next.js, TypeScript, Tailwind CSS, react-icons, framer-motion, lucide-react",
//     link: "https://github.com/rushabhT3/rushabh-portfolio/tree/main/new-project",
//   },
// ];

const ITEMS_PER_PAGE = 4;

const ProjectList: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Simulate an async operation to mimic data fetching
    const loadProjects = async () => {
      setProjects(projectsData);
      setIsLoading(false);
    };

    loadProjects();
  }, []);
  
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? "dark" : ""}`}>
      <div className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white"
          >
            My Projects
          </motion.h1>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  link={project.link}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination buttons */}
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={`bg-indigo-500 text-white rounded-l-md py-2 px-4 flex items-center ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-600"
              }`}
            >
              <FaChevronLeft className="mr-2" />
              Prev
            </button>
            <span className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 border-t border-b border-gray-300 dark:border-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`bg-indigo-500 text-white rounded-r-md py-2 px-4 flex items-center ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-600"
              }`}
            >
              Next
              <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
