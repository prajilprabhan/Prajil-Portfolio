import React from "react";
import "./Skills.css";

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C Programming","C++", "PHP", "Dart"]
    },
    {
      title: "Frameworks & Web",
      skills: ["Flutter", "React.js", "HTML5 / CSS3", "Bootstrap 5","Python Django"]
    },
    {
      title: "Databases & Management",
      skills: ["MySQL (Relational)", "MongoDB (NoSQL)", "Firebase"]
    },
    {
      title: "Tools & Systems",
      skills: ["Git & GitHub", "Linux CLI", "LaTeX (Overleaf)", "VS Code"]
    }
  ];

  return (
    <section id="skills-section" className="py-5 bg-dark-adjust">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="display-4 text-white fw-bold text-uppercase tracking-wider">
            Technical <span className="text-info">Skills</span>
          </h2>
          <p className="text-white-50">Tools, languages, and technologies I work with to build software</p>
          <div className="header-underline mx-auto"></div>
        </div>

        {/* Skills Grid Layout */}
        <div className="row g-4">
          {skillCategories.map((category, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card skill-card h-100 text-white p-3 border-0">
                <div className="card-body">
                  <h3 className="h6 text-info fw-bold text-uppercase mb-4 tracking-wide pb-2 border-bottom border-secondary-subtle">
                    {category.title}
                  </h3>
                  <div className="d-flex flex-column gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-item p-2 rounded d-flex align-items-center">
                        <span className="skill-indicator me-2"></span>
                        <span className="small fw-medium text-white-50">{skill}</span>
                      </div>
                    ))}
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

export default Skills;