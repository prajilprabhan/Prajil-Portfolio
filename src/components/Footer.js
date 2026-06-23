import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";

const NAV_LINKS = [
  { label: "About",        href: "#about-section",          icon: "bi-person-fill" },
  { label: "Education",    href: "#education-section",       icon: "bi-mortarboard-fill" },
  { label: "Projects",     href: "#projects-section",        icon: "bi-code-slash" },
  { label: "Skills",       href: "#skills-section",          icon: "bi-lightning-fill" },
  { label: "Achievements", href: "#certifications-section",  icon: "bi-trophy-fill" },
  { label: "Contact",      href: "#contact-section",         icon: "bi-chat-dots-fill" },
];

const SOCIALS = [
  { href: "https://github.com/prajilprabhan",          icon: "bi-github",        label: "GitHub",   hue: "230,237,243" },
  { href: "https://www.linkedin.com/in/prajilprabhan/",icon: "bi-linkedin",      label: "LinkedIn", hue: "10,102,194" },
  { href: "mailto:prajilprabhan26@gmail.com",          icon: "bi-envelope-fill", label: "Email",    hue: "0,229,255"   },
];

/* ── Tiny hook: intersection observer for fade-in-up on scroll ── */
function useFadeIn(ref) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && el.classList.add("footer--visible"),
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref]);
}

const Footer = () => {
  const year = new Date().getFullYear();
  const rootRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  useFadeIn(rootRef);

  return (
    <footer className="f-root" ref={rootRef} role="contentinfo">

      {/* ── decorative radial blobs ── */}
      <div className="f-blob f-blob--left"  aria-hidden="true" />
      <div className="f-blob f-blob--right" aria-hidden="true" />

      {/* ══ TOP WAVE SVG divider ══ */}
      <div className="f-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 L0,0 Z"
            fill="rgba(15,12,32,0.0)"
          />
          <path
            d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40"
            fill="none"
            stroke="url(#waveGrad)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="#0047ff" stopOpacity="0" />
              <stop offset="30%"  stopColor="#0088ff" />
              <stop offset="50%"  stopColor="#00e5ff" />
              <stop offset="70%"  stopColor="#0088ff" />
              <stop offset="100%" stopColor="#0047ff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* ══ MAIN BODY ══ */}
      <div className="f-body">

        {/* ── LEFT: Brand + tagline + availability badge ── */}
        <div className="f-brand f-col">
          <div className="f-wordmark">
            <span className="f-wm-first">Prajil</span>
            <span className="f-wm-last"> Prabhan</span>
          </div>

          <p className="f-tagline">
            Full-Stack Developer crafting clean, fast &amp; delightful web experiences.
          </p>

          {/* availability pill */}
          <div className="f-avail">
            <span className="f-avail-dot" />
            Open to Opportunities
          </div>

          {/* social row */}
          <div className="f-socials">
            {SOCIALS.map(({ href, icon, label, hue }, i) => (
              <a
                key={label}
                href={href}
                className="f-social"
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{ "--hue": hue, "--delay": `${i * 0.06}s` }}
              >
                <i className={`bi ${icon}`} />
                <span
                  className="f-social-label"
                  aria-hidden="true"
                  style={{ opacity: hovered === i ? 1 : 0, transform: hovered === i ? "translateY(0)" : "translateY(4px)" }}
                >
                  {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* ── CENTER: Nav grid ── */}
        <div className="f-nav f-col">
          <h3 className="f-col-heading">Navigation</h3>
          <ul className="f-nav-list">
            {NAV_LINKS.map(({ label, href, icon }) => (
              <li key={label}>
                <a href={href} className="f-nav-item">
                  <span className="f-nav-icon-wrap">
                    <i className={`bi ${icon}`} />
                  </span>
                  <span className="f-nav-label">{label}</span>
                  <i className="bi bi-arrow-right f-nav-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: CTA card ── */}
        <div className="f-cta-col f-col">
          <h3 className="f-col-heading">Let's Connect</h3>
          <div className="f-cta-card">
            <div className="f-cta-card-glow" aria-hidden="true" />
            <i className="bi bi-rocket-takeoff-fill f-cta-rocket" />
            <p className="f-cta-text">
              Have a project in mind? Let's build something remarkable together.
            </p>
            <a href="#contact-section" className="f-cta-btn">
              Start a Conversation
              <i className="bi bi-arrow-right-circle-fill f-cta-btn-icon" />
            </a>
            <div className="f-cta-info">
              <span><i className="bi bi-geo-alt-fill" /> Alappuzha, Kerala</span>
              <span><i className="bi bi-clock-fill" /> IST (UTC+5:30)</span>
            </div>
          </div>
        </div>

      </div>

      {/* ══ BOTTOM BAR ══ */}
      <div className="f-bar">
        <div className="f-bar-line" aria-hidden="true" />
        <div className="f-bar-content">
          <span className="f-copy">© {year} Prajil Prabhan. All rights reserved.</span>
          <span className="f-madewith">
            Made with <span className="f-heart">♥</span> in India <span aria-hidden="true">🇮🇳</span>
          </span>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
