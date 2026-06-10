import React from "react";
import "./Project.css";

function Project() {
  const projectList = [
    {
      id: 1,
      title: "FLYHIGH",
      category: "STUDY ABROAD PLATFORM",
      description:
        "Developed a study abroad web application that helps students explore international education opportunities. The platform provides information about universities, courses, countries, admission requirements, and scholarship options. Built using Django for the backend, MySQL for database management, and XAMPP for local server deployment, offering an efficient and user-friendly experience for students seeking higher education abroad.",
      tags: ["Python", "Django", "MySQL", "XAMPP"],
      githubLink: "https://github.com/prajilprabhan/flyhigh.git",
    },
    {
      id: 2,
    title: "CharityApp",
    category: "MOBILE APPLICATION",
    description: "A Flutter-based charity management application that connects donors with organizations, enabling campaign discovery, secure donations, and real-time contribution tracking.",
    tags: ["Flutter", "Dart", "Firebase", "State Management"],
    githubLink: "https://github.com/prajilprabhan/charity_App.git"
    },
  ];

  return (
    <section id="projects-section" className="py-5">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 text-white fw-bold text-uppercase tracking-wider">
            Featured <span className="text-info">Projects</span>
          </h2>
          <p className="text-white-50">
            A showcase of things I've built, ranging from mobile applications to
            core algorithms
          </p>
          <div className="header-underline mx-auto"></div>
        </div>

        {/* Projects Grid */}
        <div className="row g-4">
          {projectList.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <div className="card project-card h-100 shadow border-0 text-white">
                {/* Visual Top-Bar Decorator */}
                <div className="project-card-accent"></div>

                <div className="card-body p-4 d-flex flex-column">
                  {/* Category Tracker */}
                  <span className="text-info small fw-bold text-uppercase mb-2 tracking-wider d-block">
                    {project.category}
                  </span>

                  {/* Title */}
                  <h3 className="h4 card-title fw-bold mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="card-text text-white-50 small flex-grow-1 lh-base">
                    {project.description}
                  </p>

                  {/* Tech Stack Badges */}
                  <div className="d-flex flex-wrap gap-2 my-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="badge bg-dark border border-secondary text-light px-2 py-1.5 font-monospace"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Interactive Action Links */}
                  <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top border-secondary-subtle">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-outline-light px-3 d-flex align-items-center gap-2 project-btn"
                    >
                      <i className="bi bi-github"></i> GitHub
                    </a>
                    {project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-info text-dark px-3 fw-semibold d-flex align-items-center gap-2 project-btn"
                      >
                        <i className="bi bi-box-arrow-up-right"></i> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;
