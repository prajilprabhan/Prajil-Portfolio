import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleClose = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={handleToggle}
      collapseOnSelect
      expand="lg"
      sticky="top"
      className="py-3 custom-navbar"
    >
      <Container>
        {/* Brand Logo / Name */}
        <Navbar.Brand
          href="#about-section"
          onClick={handleClose}
          className="fw-bold fs-4 text-uppercase tracking-wider brand-logo"
        >
          <span className="text-accent">Prajil </span>Prabhan
        </Navbar.Brand>

        {/* Custom Hamburger Menu Toggle for Mobile */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation"
          className="custom-toggler"
        />

        {/* Collapsible Navigation Links */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              href="#about-section"
              onClick={handleClose}
              className="mx-2 nav-link-custom"
            >
              About
            </Nav.Link>
            <Nav.Link
              href="#education-section"
              onClick={handleClose}
              className="mx-2 nav-link-custom"
            >
              Education
            </Nav.Link>
            <Nav.Link
              href="#projects-section"
              onClick={handleClose}
              className="mx-2 nav-link-custom"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#skills-section"
              onClick={handleClose}
              className="mx-2 nav-link-custom"
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#certifications-section"
              onClick={handleClose}
              className="mx-2 nav-link-custom"
            >
              Achievements & Certifications
            </Nav.Link>

            {/* Upgraded Native Link Styled As A Glowing Button */}
            <a
              href="#contact-section"
              onClick={handleClose}
              className="ms-lg-4 mt-3 mt-lg-0 px-4 py-2 rounded-pill fw-semibold cta-link-btn"
            >
              Let's Talk
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;