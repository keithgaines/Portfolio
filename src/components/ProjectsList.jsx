import React from "react";
import Project from "./Project";

const projectsData = [
  // ... Your projects data here
];

const ProjectsList = () => (
  <div className="projectscontainer">
    {projectsData.map((project) => (
      <Project
        key={project.title}
        title={project.title}
        screenshot={project.screenshot}
        codeLink={project.codeLink}
        liveLink={project.liveLink}
      />
    ))}
  </div>
);

export default ProjectsList;
