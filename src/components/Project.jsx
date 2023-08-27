import React from "react";

const Project = ({ title, screenshot, codeLink, liveLink }) => (
  <div className="project">
    <h3>{title}</h3>
    <img src={screenshot} alt={`Screenshot of ${title}`} />
    <div className="links">
      <a href={codeLink}>View Code</a>
      <a href={liveLink}>View Live Site</a>
    </div>
  </div>
);

export default Project;
