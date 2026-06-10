import React from "react";
import "./Education.css";

function Education() {
 const education = [
  {
    id: 1,
    course: "MASTER IN COMPUTER APPLICATION",
    institution: "RAJIV GANDHI INSTITUTE OF TECHNOLOGY KOTTAYAM (RIT)",
    university: "APJ ABDUL KALAM TECHNOLOGICAL UNIVERSITY",
    status: "PURSUING",
    year: "2025 - 2027",
    colorClass: "text-info",
    badgeClass: "bg-info"
  },
  {
    id: 2,
    course: "BACHELOR OF COMPUTER APPLICATIONS (BCA)",
    institution: "COLLEGE OF APPLIED SCIENCE MAVELIKKARA",
    university: "KERALA UNIVERSITY",
    status: "COMPLETED",
    year: "2022 - 2025",
    colorClass: "text-success",
    badgeClass: "bg-success"
  },
  {
    id: 3,
    course: "HIGHER SECONDARY EDUCATION",
    institution: "MSMHSS KAYAMKULAM",
    university: "KERALA STATE",
    status: "COMPLETED",
    year: "2020 - 2022",
    colorClass: "text-success",
    badgeClass: "bg-success"
  },
  {
    id: 4,
    course: "HIGH SCHOOL EDUCATION",
    institution: "TECHNICAL HIGH SCHOOL KRISHNAPURAM",
    university: "DEPARTMENT OF TECHNICAL EDUCATION",
    status: "COMPLETED",
    year: "2020",
    colorClass: "text-success",
    badgeClass: "bg-success"
  }
];
  return (
    <div id="education-section" className="container py-5">
      <div className="text-center mb-5">
        <h2 className="display-4 text-white fw-bold text-uppercase tracking-wider">
          Education <span className="text-info">Roadmap</span>
        </h2>
        <p className="text-white-50">My academic journey and milestones</p>
      </div>

      <div className="row align-items-center g-5">
        {/* Left Side: The Roadmap Timeline */}
        <div className="col-lg-7">
          <div className="roadmap-track">
            
            <div className="roadmap-track">
  {education.map((item) => (
    <div className="roadmap-item pb-5" key={item.id}>
      <span className={`roadmap-dot ${item.status === 'PURSUING' ? 'active-dot' : ''}`}></span>
      <div className="roadmap-card p-4 rounded shadow">
        <h3 className="h5 text-white mb-2">{item.course}</h3>
        <p className="small mb-0 text-white-50 lh-lg">
          {item.institution} <br />
          {item.university} <br />
          <span className={`badge ${item.badgeClass} text-dark mt-2 px-3 py-2 fw-bold`}>
            {item.status}
          </span> 
          <span className="text-white ms-2 fw-semibold">| YEAR : {item.year}</span>
        </p>
      </div>
    </div>
  ))}
</div>

          

          </div>
        </div>

        {/* Right Side: Graduation Boy Illustration */}
        <div className="col-lg-5 text-center d-none d-lg-block">
          <div className="illustration-container">
            <img 
              src={process.env.PUBLIC_URL + "/graduation.JPG"} 
              alt="Graduation Boy Illustration" 
              className="img-fluid floating-animation"
              style={{ maxWidth: "85%", height: "auto" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Education;