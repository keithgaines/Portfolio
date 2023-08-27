import React from "react";

const Project = ({
  title,
  screenshot,
  codeLink,
  liveLink,
  technologiesUsed,
}) => (
  <div className="project">
    <h3>{title}</h3>
    <img src={screenshot} alt={`Screenshot of ${title}`} />
    <div className="links">
      <a href={codeLink}>View Code</a>
      {liveLink && <a href={liveLink}>View Live Site</a>}{" "}
    </div>
    <br />
    <br />
    <h4>
      Tech Stack Used: <br />
      {technologiesUsed}
    </h4>
  </div>
);

export default Project;
