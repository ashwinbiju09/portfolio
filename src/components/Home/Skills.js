import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import the CSS for tooltips

const skills = [
  "html",
  "css",
  "bootstrap",
  "tailwind",
  "javascript",
  "reactjs",
  "nextjs",
  "python",
  "flask",
  "django",
  "sqlite",
  "mysql",
  "mongodb",
  "git",
  "opencv",
  "pytorch",
];

const Skills = () => {
  return (
    <>
      <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-5 justify-center items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-40 rounded-full"
          >
            <img
              className="h-6 md:h-10 lg:h-12"
              src={`assets/svg/${skill}.svg`}
              alt={`${skill} icon`}
              data-tooltip-id={`tooltip-${index}`}
              data-tooltip-content={
                skill.charAt(0).toUpperCase() + skill.slice(1)
              }
              data-tooltip-place="top"
            />
          </div>
        ))}
      </div>
      {skills.map((_, index) => (
        <Tooltip key={index} id={`tooltip-${index}`} />
      ))}
    </>
  );
};

export default Skills;
