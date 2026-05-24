import React from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "Payments Operations Intelligence Platform",

    imageSrc: "/images/paymentsops.png",

    githubLink: "https://github.com/keithgaines/payments-operations-platform",

    liveSiteLink: "https://payments-ops-platform.vercel.app/",

    technologiesUsed:
      "Next.js, React, TypeScript, ASP.NET Core, PostgreSQL, Azure, Vercel",

    problem:
      "Payments operations teams often lack centralized tooling for transaction investigation, operational analytics, merchant monitoring, and operational KPI visibility.",

    solution:
      "Designed and deployed a production-style fintech operations platform with transaction investigation workflows, analytics dashboards, merchant monitoring capabilities, REST APIs, and cloud-hosted frontend/backend infrastructure.",

    featured: true,
  },

  {
    title: "Portfolio Engineering Redesign",

    imageSrc: null,

    githubLink: "https://github.com/keithgaines/Portfolio",

    liveSiteLink: null,

    technologiesUsed:
      "React, Responsive CSS Architecture, Vercel, UI Refactoring",

    problem:
      "The original portfolio presentation did not accurately communicate backend engineering depth, systems thinking, infrastructure competency, or operational engineering experience.",

    solution:
      "Redesigned the portfolio around engineering case studies, responsive architecture, production-focused presentation standards, and operational systems positioning.",
  },

  {
    title: "RedwoodJS Platform Modernization",

    imageSrc: "/images/photosnap.png",

    githubLink: "https://github.com/keithgaines/PhotosnapStories",

    liveSiteLink: "https://photosnapstories.vercel.app/",

    technologiesUsed: "RedwoodJS, Vite, Yarn, CI/CD, Vercel, Responsive CSS",

    problem:
      "Legacy RedwoodJS application architecture and deployment configuration created compatibility issues with modern tooling and hosting workflows.",

    solution:
      "Led framework modernization from RedwoodJS 5 to RedwoodJS 7, resolved Vite integration issues, stabilized Vercel deployments, and refactored responsive frontend architecture.",
  },
];

const ProjectsList = () => {
  const featured = projectsData.find((p) => p.featured);

  const rest = projectsData.filter((p) => !p.featured);

  return (
    <section className="projects">
      <div className="section-heading">
        <p className="section-eyebrow">Case Studies</p>

        <h2>Selected Engineering Work</h2>

        <p className="section-description">
          Production-focused applications, platform modernization work, and
          operational tooling built across frontend, backend, infrastructure,
          and deployment environments.
        </p>
      </div>

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
