// Hero.jsx - With Scroll Reveal
import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = ({ id }) => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch('/data/profile.json')
      .then(response => response.json())
      .then(data => setProfile(data.hero))
      .catch(error => console.error('Error loading profile:', error));
  }, []);

  const handleCTAClick = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  if (!profile) return null;

  return (
    <section id={id} className="hero reveal">
      <div className="hero-background">
        <div className="hero-shape shape-1"></div>
        <div className="hero-shape shape-2"></div>
        <div className="hero-shape shape-3"></div>
        <div className="hero-shape shape-4"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-code"></i>
            <span>Welcome to my portfolio</span>
          </div>
          
          <h1 className="hero-title">
            <span className="hero-title-line">Creating digital</span>
            <span className="hero-title-gradient">experiences</span>
            <span className="hero-title-line">that matter</span>
          </h1>
          
          <p className="hero-description">{profile.tagline}</p>
          
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">2+</span>
              <span className="hero-stat-label">Years Coding</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">4+</span>
              <span className="hero-stat-label">Years Editing</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <a 
              href={profile.cta.projects}
              className="hero-btn hero-btn-primary"
              onClick={(e) => handleCTAClick(e, profile.cta.projects)}
            >
              <i className="fas fa-arrow-right"></i>
              View My Work
            </a>
            <a 
              href={profile.cta.contact}
              className="hero-btn hero-btn-secondary"
              onClick={(e) => handleCTAClick(e, profile.cta.contact)}
            >
              <i className="fas fa-paper-plane"></i>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;