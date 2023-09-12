import React from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "To Do List",
    imageSrc: "../images/todolist.png",
    githubLink: "https://github.com/keithgaines/todolist_react",
    liveSiteLink: "https://todolisttsx.vercel.app",
    technologiesUsed: "HTML, CSS, React, LocalStorage",
  },
  {
    title: "Modern Art Gallery",
    imageSrc: "../images/artGallery.png",
    githubLink: "https://github.com/keithgaines/art-gallery-website",
    liveSiteLink: "https://keithgaines.github.io/art-gallery-website",
    technologiesUsed: "HTML, CSS, React, Bootstrap",
  },
  {
    title: "Galleria Slideshow",
    imageSrc: "../images/galleria.png",
    githubLink: "https://github.com/keithgaines/slideshowreact",
    liveSiteLink: "https://slideshowreact.vercel.app/",
    technologiesUsed: "HTML, CSS, React, Bootstrap",
  },
  {
    title: "Bulky Book",
    imageSrc: "../images/bulkybook.jpg",
    githubLink: "https://github.com/keithgaines/Bulky",
    liveSiteLink: null,
    technologiesUsed: ".Net Core, .Net MVC, SQL",
  },
  {
    title: "NZ Walks API",
    imageSrc: "../images/api.jpg",
    githubLink: "https://github.com/keithgaines/NZWalksAPI",
    liveSiteLink: null,
    technologiesUsed: ".Net Core, .Net MVC, SQL",
  },
];

const ProjectsList = () => (
  <div className="projectscontainer">
    {projectsData.map((project) => (
      <Project
        key={project.title}
        title={project.title}
        screenshot={project.imageSrc}
        codeLink={project.githubLink}
        liveLink={project.liveSiteLink}
        technologiesUsed={project.technologiesUsed}
      />
    ))}
  </div>
);

export default ProjectsList;
