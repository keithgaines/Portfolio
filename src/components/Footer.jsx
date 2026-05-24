import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-branding">
          <h3>Keith Gaines</h3>

          <p>
            Full Stack Engineer focused on operational systems, backend
            architecture, and production-ready applications.
          </p>
        </div>

        <div className="footer-links">
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

          <a href="mailto:patrick.keith.gaines@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
