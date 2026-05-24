import React from "react";

const experiences = [
  {
    company: "Celero Commerce",

    role: "Full Stack Engineer",

    timeframe: "2023 – May 2026",

    description:
      "Worked on production application systems in a payments-focused environment, supporting backend services, frontend features, integrations, and operational workflows.",

    highlights: [
      "Built and maintained application features using React and .NET",
      "Supported payment-adjacent business workflows and internal systems",
      "Worked with APIs, integrations, databases, and production troubleshooting",
      "Contributed to system reliability, performance, and maintainability",
      "Collaborated across engineering, support, and business operations teams",
    ],
  },

  {
    company: "Celero Commerce",

    role: "Infrastructure Support",

    timeframe: "Prior to 2023",

    description:
      "Supported infrastructure, systems, and user-facing technical operations before transitioning into software engineering.",

    highlights: [
      "Troubleshot infrastructure and production-impacting issues",
      "Supported internal users, systems, and operational environments",
      "Built a strong foundation in diagnostics, escalation, and reliability",
      "Developed business context that later informed engineering work",
    ],
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <div className="section-heading">
        <p className="section-eyebrow">Professional Experience</p>

        <h2>Engineering & Operational Experience</h2>

        <p className="section-description">
          Experience spanning software engineering, infrastructure support,
          operational tooling, and production system troubleshooting.
        </p>
      </div>

      <div className="experience-list">
        {experiences.map((experience) => (
          <article
            className="experience-card"
            key={`${experience.company}-${experience.role}`}
          >
            <div className="experience-header">
              <div>
                <h3>{experience.role}</h3>

                <p className="experience-company">{experience.company}</p>
              </div>

              <span className="experience-timeframe">
                {experience.timeframe}
              </span>
            </div>

            <p className="experience-description">{experience.description}</p>

            <ul className="experience-highlights">
              {experience.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
