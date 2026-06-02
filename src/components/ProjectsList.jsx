import React from "react";
import Project from "./Project";

const projectsData = [
  {
    title: "Payments Operations Intelligence Platform",

    imageSrc: "/images/paymentops.png",

    githubLink: "https://github.com/keithgaines/payments-operations-platform",

    liveSiteLink: "https://payments-operations-platform.vercel.app/",

    technologiesUsed:
      "Next.js, React, TypeScript, ASP.NET Core, PostgreSQL, Azure, Vercel",

    problem:
      "Payment teams need a faster way to review transactions, monitor merchant activity, and understand what is happening across the business without jumping between disconnected tools.",

    solution:
      "Built a live operations dashboard that brings transaction review, merchant details, performance metrics, and investigation workflows into one place. The goal was to model the kind of internal tool a payments team would use to make faster, better-informed decisions.",

    featured: true,
  },

  {
    title: "Galleria — Interactive Art Gallery Experience",

    imageSrc: "/images/galleria.png",

    githubLink: "https://github.com/keithgaines/GalleriaSlideshow",

    liveSiteLink: "https://slideshowreact.vercel.app/",

    technologiesUsed:
      "React, Responsive CSS Architecture, Vercel, UI Refactoring",

    problem:
      "The original gallery worked, but the design felt dated and did not present the artwork in a polished or professional way across different screen sizes.",

    solution:
      "Redesigned the experience into a cleaner digital gallery with stronger visual hierarchy, responsive layouts, improved image presentation, and a more refined slideshow experience.",
  },

  {
    title: "RedwoodJS Platform Modernization",

    imageSrc: "/images/photosnap.png",

    githubLink: "https://github.com/keithgaines/PhotosnapStories",

    liveSiteLink: "https://photosnapstories.vercel.app/",

    technologiesUsed: "RedwoodJS, Vite, Yarn, CI/CD, Vercel, Responsive CSS",

    problem:
      "The application was built on older tooling, which made local development, deployment, and future updates harder to manage.",

    solution:
      "Updated the project to a newer framework and deployment setup, resolved build issues, and cleaned up the frontend structure so the application could run more reliably and be easier to maintain.",
  },
];

const ProjectsList = () => {
  const featured = projectsData.find((p) => p.featured);

  const rest = projectsData.filter((p) => !p.featured);

  return (
    <section className="projects">
      <div className="section-heading">
        <p className="section-eyebrow">Case Studies</p>

        <h2>Selected Work</h2>

        <p className="section-description">
          A focused look at applications I have built, modernized, and deployed
          — with an emphasis on practical business workflows, maintainability,
          and real-world usability.
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
