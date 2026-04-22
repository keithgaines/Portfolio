import React from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "Kanban Web App",
    imageSrc: "/images/kanban.png",
    githubLink: "https://github.com/keithgaines/kanban_redux",
    liveSiteLink: "https://kanban-redux.vercel.app/",
    technologiesUsed: "React, Redux, Tailwind CSS",
    problem:
      "Managing tasks across a dynamic workflow without losing state consistency.",
    solution:
      "Built a Redux-powered Kanban board with persistent state and clean UI updates.",
    featured: true,
  },
  {
    title: "To Do List",
    imageSrc: "/images/todolist.png",
    githubLink: "https://github.com/keithgaines/todolist_react",
    liveSiteLink: "https://todolisttsx.vercel.app",
    technologiesUsed: "React, LocalStorage",
    problem: "Users needed a simple offline task tracker.",
    solution:
      "Implemented a lightweight React app using LocalStorage for persistence.",
  },
  {
    title: "Modern Art Gallery",
    imageSrc: "/images/artGallery.png",
    githubLink: "https://github.com/keithgaines/art-gallery-website",
    liveSiteLink: "https://keithgaines.github.io/art-gallery-website",
    technologiesUsed: "React, Bootstrap",
    problem: "Static gallery lacked responsive layout behavior.",
    solution:
      "Built a responsive gallery layout optimized for all screen sizes.",
  },
  {
    title: "Galleria Slideshow",
    imageSrc: "/images/galleria.png",
    githubLink: "https://github.com/keithgaines/slideshowreact",
    liveSiteLink: "https://slideshowreact.vercel.app/",
    technologiesUsed: "React, Bootstrap",
    problem: "Needed a smooth image browsing experience for artwork.",
    solution:
      "Created a slideshow interface with clean transitions and responsive design.",
  },
  {
    title: "Bulky Book",
    imageSrc: "/images/bulkybook.jpg",
    githubLink: "https://github.com/keithgaines/Bulky",
    liveSiteLink: null,
    technologiesUsed: ".Net Core, MVC, SQL",
    problem: "Bulk ordering system lacked structured backend architecture.",
    solution: "Built a full-stack e-commerce system using ASP.NET Core MVC.",
  },
  {
    title: "NZ Walks API",
    imageSrc: "/images/api.jpg",
    githubLink: "https://github.com/keithgaines/NZWalksAPI",
    liveSiteLink: null,
    technologiesUsed: ".Net Core, MVC, SQL",
    problem: "Needed a structured API for walking trail data.",
    solution:
      "Developed a REST API with clean separation of concerns and data modeling.",
  },
];

const ProjectsList = () => {
  const featured = projectsData.find((p) => p.featured);
  const rest = projectsData.filter((p) => !p.featured);

  return (
    <section className="projects">
      <h2>Projects</h2>

      {featured && (
        <div className="featured">
          <Project {...featured} />
        </div>
      )}

      <div className="projectscontainer">
        {rest.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsList;
