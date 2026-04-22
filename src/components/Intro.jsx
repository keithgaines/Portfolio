import React from "react";

const Intro = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          I’m Keith Gaines.
          <br />
          Full Stack Engineer.
        </h1>

        <p className="hero-subtitle">
          I build full-stack applications using React and .NET, with a focus on
          state-driven interfaces, API design, and maintainable system
          architecture.
        </p>

        <div className="hero-meta">
          <p>
            Production engineering experience since 2021 · Web development
            foundation began in 2010
          </p>
        </div>

        <div className="hero-links">
          <a
            href="https://github.com/keithgaines"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/keithgaines/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
