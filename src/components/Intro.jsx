import React from "react";

const Intro = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">Full Stack Engineer · Backend Focused</p>

        <h1>
          I build operational platforms, APIs, and production-ready web systems.
        </h1>

        <p className="hero-subtitle">
          I’m Keith Gaines, a full stack engineer focused on backend services,
          data-driven workflows, cloud deployment, and maintainable frontend
          architecture across React, .NET, PostgreSQL, Azure, and AWS.
        </p>

        <div className="hero-meta">
          <p>
            Production engineering experience since 2021 · Web development
            foundation since 2010
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
