import React from "react";
import data from "./projects.json";
import ProjectCard from "./ProjectCard";

const ProjectsContent = () => {
  const academic = data.data.filter((item) => item.category === "academic");
  const hackathon = data.data.filter((item) => item.category === "hackathon");

  const renderSection = (title, items) => (
    <div>
      <h2 className="text-2xl md:text-3xl font-medium text-left py-6 text-blue-500">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="w-full px-4 md:px-12 py-8">
      <div className="space-y-12">
        {renderSection("Academic", academic)}
        {renderSection("Hackathon", hackathon)}
      </div>
    </div>
  );
};

export default ProjectsContent;
