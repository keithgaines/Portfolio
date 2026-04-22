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
