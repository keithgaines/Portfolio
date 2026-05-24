import React from "react";

const certifications = [
  "AWS Certified Cloud Practitioner",
  "Microsoft Azure Fundamentals (AZ-900)",
  "CompTIA Security+",
  "CompTIA Project+",
  "Linux Essentials",
];

const Certifications = () => {
  return (
    <section className="certifications">
      <div className="section-heading">
        <p className="section-eyebrow">Certifications</p>

        <h2>Infrastructure & Platform Foundations</h2>

        <p className="section-description">
          Certifications supporting cloud infrastructure, networking, security,
          and operational systems knowledge.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certification) => (
          <div className="certification-card" key={certification}>
            <span>{certification}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
