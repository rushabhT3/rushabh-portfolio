// src/app/components/ProjectCard.tsx
"use client";
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
    <div className="bg-text-google-gray-800 p-4 rounded-lg shadow-md mb-4 mx-4 mt-4">
      <h2 className="text-2xl font-bold mb-2 text-google-gray-800">{title}</h2>
      <p className="mb-2 text-google-gray-600">{description}</p>
      <p className="text-sm text-gray-500 mb-2 text-google-gray-400">
        <strong>Tech Used:</strong> {tech}
      </p>
      <a
        href={link}
        className="text-blue-500 dark:text-blue-400 hover:underline"
      >
        View Project on GitHub 🔗
      </a>
    </div>
  );
};

export default ProjectCard;
