import React from "react";

const Project = ({
  title = "",
  imageSrc = "",
  githubLink = "#",
  liveSiteLink = null,
  technologiesUsed = "",
  problem = "",
  solution = "",
  featured = false,
}) => {
  const techArray = (technologiesUsed || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <article className={`project ${featured ? "project-featured" : ""}`}>
      <div className="project-header">
        <div>
          <p className="project-label">Engineering Case Study</p>

          <h3>{title}</h3>
        </div>

        <div className="links">
          <a href={githubLink} target="_blank" rel="noreferrer">
            View Code
          </a>

          {liveSiteLink && (
            <a href={liveSiteLink} target="_blank" rel="noreferrer">
              Live Platform
            </a>
          )}
        </div>
      </div>

      {imageSrc && (
        <div className="project-image">
          <img src={imageSrc} alt={`Screenshot of ${title}`} />
        </div>
      )}

      <div className="project-context">
        <div className="project-block">
          <h4>Problem</h4>

          <p>{problem}</p>
        </div>

        <div className="project-block">
          <h4>Solution</h4>

          <p>{solution}</p>
        </div>

        <div className="project-block">
          <h4>Technology Stack</h4>

          <div className="tech-badges">
            {techArray.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
