import React from "react";

const capabilityGroups = [
  {
    title: "Backend Engineering",

    items: [
      "REST API Design",
      "ASP.NET Core",
      "Entity Framework Core",
      "PostgreSQL",
      "Operational Data Modeling",
      "Authentication & Authorization",
    ],
  },

  {
    title: "Frontend Engineering",

    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Responsive UI Architecture",
      "Accessibility-Focused Interfaces",
      "State Management",
    ],
  },

  {
    title: "Cloud & Infrastructure",

    items: [
      "Azure App Service",
      "AWS",
      "Vercel",
      "CI/CD Pipelines",
      "Deployment Automation",
      "Environment Configuration",
    ],
  },

  {
    title: "Operational Systems",

    items: [
      "Transaction Investigation Workflows",
      "Analytics Dashboards",
      "Merchant Operations Tooling",
      "Performance Optimization",
      "Production Troubleshooting",
      "Infrastructure Support",
    ],
  },
];

const Capabilities = () => {
  return (
    <section className="capabilities">
      <div className="section-heading">
        <p className="section-eyebrow">Engineering Capabilities</p>

        <h2>Systems, Platforms, and Operational Tooling</h2>

        <p className="section-description">
          Experience building and supporting applications across frontend,
          backend, cloud infrastructure, and operational workflows.
        </p>
      </div>

      <div className="capabilities-grid">
        {capabilityGroups.map((group) => (
          <article className="capability-card" key={group.title}>
            <h3>{group.title}</h3>

            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
