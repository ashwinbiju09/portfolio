import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import data from "../Projects/projects.json";

const Projects = () => {
  return (
    <div className="w-90 mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-black my-12">
      {data.data.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="hover:shadow-lg transition-shadow duration-200"
        >
          <div className="">
            <div className="flex flex-col bg-white p-4">
              <div className="flex flex-row items-center">
                <FontAwesomeIcon icon={faFolder} size="2x" />
                <h2 className="text-2xl font-medium ml-4">{project.title}</h2>
              </div>
              <div className="text-justify py-4 text-md lg:h-40">
                {project.content}
              </div>
              <div className="hidden lg:block">
                <div className="flex flex-row justify-end space-x-4">
                  {project.icons.map((icon, idx) => (
                    <div key={idx}>
                      <img src={icon} className="h-8" alt={`Icon ${idx}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Projects;
