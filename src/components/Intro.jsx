import React from "react";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-content">
        <h1 className="intro-title">
          I'm Keith. A Full Stack Developer specializing in React, Node, and
          .Net Core.
        </h1>
      </div>
      <div className="experience">
        <h2 className="experience-title">Years of Experience:</h2>
        <ul className="experience-list">
          <li>HTML: 3</li>
          <li>CSS: 3</li>
          <li>SQL: 3</li>
          <li>React: 2</li>
          <li>Node: 2</li>
          <li>.Net: 1</li>
        </ul>
      </div>
    </div>
  );
};

export default Intro;
