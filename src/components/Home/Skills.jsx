import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css"; // Import the CSS for tooltips

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Bootstrap",
  "Tailwind CSS",
  "Python",
  "Flask",
  "Django",
  "MongoDB",
  "MySQL",
  "SQLite",
  "PyTorch",
  "OpenCV",
  "GitHub",
  "VS Code",
  "AWS",
  "Claude",
  "Jest",
  "Postman",
  "pytest",
];

const Skills = () => {
  return (
    <>
      <div
        className="grid 
                grid-cols-4 md:grid-cols-4 lg:grid-cols-8 
                gap-x-6 gap-y-6
                md:gap-x-8 md:gap-y-8
                lg:gap-x-10 lg:gap-y-10
                justify-items-center"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
             flex items-center justify-center 
             rounded-2xl
             border-2 border-white/40 
             bg-white/20 backdrop-blur-md
             transition duration-300 
             hover:scale-110 hover:border-blue-400"
          >
            <img
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 object-contain"
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
