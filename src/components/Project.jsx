import React from "react";

const Project = ({
  title = "",
  imageSrc = "",
  githubLink = "#",
  liveSiteLink = null,
  technologiesUsed = "",
  problem = "",
  solution = "",
}) => {
  const techArray = (technologiesUsed || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return (
    <div className="project">
      <h3>{title}</h3>

      {imageSrc && <img src={imageSrc} alt={`Screenshot of ${title}`} />}

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
          <h4>Tech Stack</h4>
          <div className="tech-badges">
            {techArray.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="links">
        <a href={githubLink} target="_blank" rel="noreferrer">
          View Code
        </a>

        {liveSiteLink && (
          <a href={liveSiteLink} target="_blank" rel="noreferrer">
            Live Site
          </a>
        )}
      </div>
    </div>
  );
};

export default Project;
