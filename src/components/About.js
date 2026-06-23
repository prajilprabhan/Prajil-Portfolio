// About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about-section" className="container py-5">
      <div className="row align-items-center g-4">
        {/* Left Column: Text */}
        <div className="col-lg-8 col-md-7 text-start">
          <h2 className="display-4 fw-bold text-primary mb-3">Prajil P</h2>
          <p className="bio lead mb-3">
            Hi, I'm Prajil, a passionate Full-Stack Developer dedicated to
            creating modern, user-friendly, and high-performance web
            applications. I enjoy transforming complex ideas into intuitive
            digital solutions that combine clean design, seamless functionality,
            and exceptional user experiences. With a strong focus on
            problem-solving and continuous learning, I strive to build
            applications that are not only visually appealing but also scalable,
            efficient, and reliable.
          </p>
          <div className="mt-4">
            <a
              href={process.env.PUBLIC_URL + "/Prajil P.pdf"}
              download="Prajil P.pdf"
              className="btn cv-btn rounded-pill px-4 py-2 fw-semibold"
            >
              <i className="bi bi-download me-2"></i>Download CV
            </a>
          </div>
        </div>

        {/* Right Column: Image Wrapper with Orbiting Social Icons */}
        <div className="col-lg-4 col-md-5 d-flex justify-content-center">
          <div className="profile-container">
            {/* Orbiting Tracks */}
            <div className="orbit-track track-1"></div>
            <div className="orbit-track track-2"></div>

            {/* Social Icons positioned along the orbit path */}
            <a
              href="https://www.linkedin.com/in/prajilprabhan/"
              target="_blank"
              rel="noreferrer"
              className="social-node ln"
              title="LinkedIn"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/prajilprabhan"
              target="_blank"
              rel="noreferrer"
              className="social-node gh"
              title="GitHub"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://www.instagram.com/i__am__jil/"
              target="_blank"
              rel="noreferrer"
              className="social-node ig"
              title="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/prajil.p.5"
              target="_blank"
              rel="noreferrer"
              className="social-node fb"
              title="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>

            {/* Central Profile Image */}
            <div className="prajil-frame">
              <img
                src={process.env.PUBLIC_URL + "/prajil.JPG"}
                alt="Prajil's Profile Pic"
                className="prajil img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default About;
