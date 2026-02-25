import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="relative rounded-xl shadow-lg p-4 border border-gray-600 bg-neutral-900 text-white flex flex-col">
      <h3 className="text-2xl font-semibold py-2">{project.title}</h3>

      <div className="text-gray-300 text-sm text-justify flex-grow py-4">
        {Array.isArray(project.content) ? (
          <ul className="list-none space-y-2">
            {project.content.map((line, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="inline-block mt-2 w-2 h-2 rounded-full bg-blue-600/70 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="leading-relaxed">{line}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="leading-relaxed">{project.content}</p>
        )}
      </div>

      {project.icons?.length > 0 && (
        <div className="text-end bottom-4 right-4 flex space-x-2 py-2">
          {project.icons.map((icon, idx) => (
            <span
              key={idx}
              className="bg-gray-800 text-blue-700 text-xs font-semibold px-2 py-1 rounded-md"
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
