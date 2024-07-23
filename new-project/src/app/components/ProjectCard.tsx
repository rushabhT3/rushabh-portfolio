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
    <div className="bg-yellow-200 p-4 rounded-lg shadow-md mb-4 mx-4 mt-4">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="mb-2 text-gray-800">{description}</p>
      <p className="text-sm text-gray-800 mb-2">
        <strong>Tech Used:</strong> {tech}
      </p>
      <a href={link} className="text-blue-600 hover:font-bold hover:underline">
        View Project on GitHub 🔗
      </a>
    </div>
  );
};

export default ProjectCard;
