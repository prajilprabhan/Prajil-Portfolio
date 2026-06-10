import React from 'react';
import './Achievements.css';

const Achievements = () => {
  // Your real achievements mapped out chronologically
  const achievements = [
    {
      date: "2025",
      title: "Batch Topper (BCA)",
      desc: "Graduated at the top of the Bachelor of Computer Applications batch for academic excellence and outstanding performance."
    },
    {
      date: "2022 - 2024",
      title: "NSS Volunteer (Senior Tenure)",
      desc: "Continued active community service, leadership, and social development initiatives under the National Service Scheme."
    },
    {
      date: "2022",
      title: "Best Performance Award in Computer Science",
      desc: "Recognized for exceptional technical skill, programming competence, and theoretical mastery in the core computer science curriculum."
    },
    {
      date: "2020 - 2022",
      title: "NSS Volunteer",
      desc: "Dedicated time to community organization, social welfare camps, and civic awareness programs."
    }
  ];

  // Your professional certifications
  const certifications = [
    {
      title: "Cloud Computing Certification",
      issuer: "IIT Kharagpur (NPTEL)",
      link: "" // Replace with your actual certificate link if you have one
    },
    {
      title: "#YoungWarrior Community Milestone",
      issuer: "UNICEF India & Ministry of Youth Affairs",
      link: "" // You can upload the PDF to Google Drive/Cloud and link it here
    }
  ];

  return (
    <section id="certifications-section" className="cert-achieve-section">
      <div className="section-header">
        <h2 className="section-title">
          ACHIEVEMENTS & <span className="text-accent">CERTIFICATIONS</span>
        </h2>
        <div className="section-underline"></div>
      </div>

      <div className="cert-achieve-grid">
        
        {/* Left Side: Timeline Style Achievements */}
        <div>
          <h3 className="column-title">Key Milestones</h3>
          <div className="timeline">
            {achievements.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="achieve-date">{item.date}</div>
                <h4 className="achieve-title">{item.title}</h4>
                <p className="achieve-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Slick Interactive Credentials */}
        <div>
          <h3 className="column-title">Certifications</h3>
          <div className="cert-list">
            {certifications.map((cert, index) => (
              <a 
                key={index} 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-card"
              >
                <div className="cert-info">
                  <h4>{cert.title}</h4>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
                <div className="cert-arrow">→</div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;