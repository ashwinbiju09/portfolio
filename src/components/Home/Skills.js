import React from "react";

const skills = [
  "html",
  "css-3",
  "bootstrap",
  "tailwind",
  "js",
  "react-2",
  "nextjs",
  "python-5",
  "flask",
  "django",
  "sqlite",
  "mysql",
  "mongodb",
  "git",
  "opencv-icon",
  "pytorch-icon",
];

const Skills = () => {
  return (
    // <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-5 justify-center items-center">
    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 gap-5 justify-center items-center">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex justify-center items-center p-4 bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border border-white border-opacity-40 rounded-lg"
        >
          <img
            className="h-6 md:h-10 lg:h-12"
            src={`assets/svg/${skill}.svg`}
            alt={`${skill} icon`}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
