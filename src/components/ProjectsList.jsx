import React from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "To Do List",
    imageSrc: "images/todolist.png",
    githubLink: "https://github.com/keithgaines/todolist_react",
    liveSiteLink: "https://todolisttsx.vercel.app",
  },
  {
    title: "Modern Art Gallery",
    imageSrc: "images/artgallery.png",
    githubLink: "https://github.com/keithgaines/art-gallery-website",
    liveSiteLink: "https://keithgaines.github.io/art-gallery-website",
  },
  {
    title: "Galleria Slideshow",
    imageSrc: "images/galleria.png",
    githubLink: "https://github.com/keithgaines/slideshowreact",
    liveSiteLink: "https://slideshowreact.vercel.app/",
  },
  {
    title: "Photosnap Stories",
    imageSrc: "images/photosnap.png",
    githubLink: "https://github.com/keithgaines/photosnapFullStack",
    liveSiteLink: "https://photosnapchallenge.vercel.app/",
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
      />
    ))}
  </div>
);

export default ProjectsList;
