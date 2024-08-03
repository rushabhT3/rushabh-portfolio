import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden mb-8"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-700 dark:text-gray-300">
            Technologies Used:
          </h3>
          <div className="flex flex-wrap gap-2">
            {tech.split(", ").map((item, index) => (
              <span
                key={index}
                className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-gray-800 dark:text-gray-300 text-sm font-medium px-2.5 py-0.5 rounded"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          <FaGithub className="mr-2" />
          View on GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
