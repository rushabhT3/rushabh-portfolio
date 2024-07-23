"use client";
import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";

type Project = {
  title: string;
  description: string;
  tech: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Full Stack Mailbox Client",
    description:
      "A comprehensive email management system with secure authentication and database encryption, featuring a sleek user interface built with React and Tailwind CSS. Includes JWT authentication and AWS integration for enhanced security and performance.",
    tech: "React.js, Express.js, MySQL, Sequelize, Tailwind CSS, React Router, JWT",
    link: "https://github.com/rushabhT3/mailBoxClientReact",
  },
  {
    title: "Real-Time Group Chat Application",
    description:
      "A dynamic group chat application that supports real-time messaging using Socket.io. Secure user authentication and data management are ensured with MySQL and AWS. Features include user login, message encryption, and group chat functionalities.",
    tech: "Express.js, MySQL, Socket.io, bcrypt, cors, dotenv, multer, mysql2, node-cron, pm2, sequelize, aws-sdk",
    link: "https://github.com/rushabhT3/ChatApp",
  },
  {
    title: "Backend Expense Tracker",
    description:
      "A robust backend for an expense tracking application. Implements secure user authentication with JWT and data encryption. Utilizes AWS for deployment and data storage. Designed to handle various expense tracking operations efficiently.",
    tech: "Express.js, SQL, AWS, JWT, Bcrypt, Sequelize, Brevo",
    link: "https://github.com/rushabhT3/node.js/tree/main/Express.Js/AWSapp",
  },
  {
    title: "Todo App",
    description:
      "A simple yet powerful Todo application built with Next.js and MongoDB. Features a clean and responsive user interface created with Tailwind CSS. Provides functionalities to add, edit, and delete tasks, ensuring a seamless user experience.",
    tech: "Next.js, MongoDB, Tailwind.css, Axios",
    link: "https://github.com/rushabhT3/nextjs-todo-app",
  },
  {
    title: "Frontend Expense Tracker",
    description:
      "A serverless expense tracker application powered by Google Firebase for the backend and React.js for the frontend. Features include user authentication, real-time data updates, and an intuitive user interface for tracking expenses.",
    tech: "React.js, React Router, Firebase",
    link: "https://github.com/rushabhT3/react/tree/main/expense-tracker",
  },
  {
    title: "Mongoose Expense Tracker",
    description:
      "A robust backend for an expense tracking application powered by Mongoose. Implements secure user authentication with JWT and data encryption. Utilizes AWS for deployment and data storage. Designed to handle various expense tracking operations efficiently.",
    tech: "Express.js, AWS, JWT, Bcrypt, Mongoose (MongoDB), Brevo",
    link: "https://github.com/rushabhT3/mongoose-Expense-Tracker",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern and responsive portfolio website showcasing my projects and skills. Built using Next.js and TypeScript for a robust and scalable frontend, and styled with Tailwind CSS for a clean and adaptive design. Deployed and hosted on Vercel for seamless performance and accessibility.",
    tech: "Next.js, TypeScript, Tailwind CSS",
    link: "https://github.com/rushabhT3/rushabh-portfolio/tree/main/new-project",
  },
];

const ITEMS_PER_PAGE = 4;

const ProjectList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

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
    <div>
      {/* Render your projects */}
      {visibleProjects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          tech={project.tech}
          link={project.link}
        />
      ))}

      {/* Pagination buttons */}
      <div className="flex justify-between mx-4 mt-4">
        <button
          type="button"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <div className="flex flex-row align-middle">
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="ml-2">Prev</p>
          </div>
        </button>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          <div className="flex flex-row align-middle">
            <span className="mr-2">Next</span>
            <svg
              className="w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ProjectList;
