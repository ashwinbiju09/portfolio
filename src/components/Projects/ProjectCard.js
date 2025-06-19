import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-xl shadow-lg p-4 border border-gray-600 bg-neutral-900 text-white flex flex-col">
      <h3 className="text-2xl font-semibold py-2">{project.title}</h3>

      <p className="text-gray-300 text-sm text-justify flex-grow py-4">
        {project.content}
      </p>

      {project.icons?.length > 0 && (
        <div className="text-end bottom-4 right-4 flex space-x-2 py-2">
          {project.icons.map((icon, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-blue-500 text-xs font-semibold px-2 py-1 rounded-md"
            >
              {icon}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
