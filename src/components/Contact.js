import React from 'react';
import './Contact.css'; // Importing the separate stylesheet

const ContactSection = () => {
  return (
    <section className="contact-section" id ="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">
          GET IN <span className="contact-title-accent">TOUCH</span>
        </h2>
        <p className="contact-subtitle">Let's collaborate or just say hello!</p>
        <div className="contact-underline"></div>
      </div>

      <div className="contact-grid">
        {/* Email Card - Direct mailto action */}
        <a href="mailto:prajilprabhan@gmail.com" className="contact-card">
          <span className="contact-label">Email Me</span>
          <span className="contact-value">prajilprabhan26@gmail.com</span>
        </a>

        {/* Phone Card - Native device dialer action */}
        <a href="tel:+919876543210" className="contact-card">
          <span className="contact-label">Call Me</span>
          <span className="contact-value">+91 XXXXXXXXXX</span>
        </a>

        {/* Address Card */}
        <div className="contact-card">
          <span className="contact-label">Location</span>
          <span className="contact-value">Alappuzha, Kerala, India</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;