"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import ProjectCard from "../components/ProjectCard";
import projectsData from "./projects.json";

type Project = {
  title: string;
  description: string;
  tech: string;
  link: string;
};

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

  if (isLoading) {
    return (
      <div className="flex-grow bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-center min-h-screen">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Loading projects...
        </div>
      </div>
    );
  }

  return (
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
  );
};

// In your ProjectList component, add this after the return statement:


export default ProjectList;
