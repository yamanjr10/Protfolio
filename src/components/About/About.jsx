// About.jsx - With Typing Animation for Name
import React, { useEffect, useState } from 'react';
import './About.css';

const About = ({ id }) => {
  const [about, setAbout] = useState(null);
  const [profile, setProfile] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    fetch('/data/profile.json')
      .then(response => response.json())
      .then(data => {
        setAbout(data.about);
        setProfile(data.profile);
      })
      .catch(error => console.error('Error loading about:', error));
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (!profile) return;

    const nameOptions = [profile.name, profile.nickname || 'Yaman Jr'];
    const currentIndex = loopNum % nameOptions.length;
    const fullText = nameOptions[currentIndex];

    const tick = () => {
      if (isDeleting) {
        setDisplayName(fullText.substring(0, displayName.length - 1));
        setTypingSpeed(100); // Faster when deleting
      } else {
        setDisplayName(fullText.substring(0, displayName.length + 1));
        setTypingSpeed(150); // Normal speed when typing
      }

      // When deletion is complete
      if (!isDeleting && displayName === fullText) {
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100);
        }, 3000); // Wait 3 seconds before deleting
      } else if (isDeleting && displayName === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(150);
      }
    };

    const timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayName, isDeleting, loopNum, profile, typingSpeed]);

  if (!about || !profile) return null;

  return (
    <section id={id} className="about">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get to know me</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div className="about-grid">
          <div className="about-card about-card-large">
            <div className="about-card-content">
              <div className="about-profile">
                <div className="about-image-wrapper">
                  <img 
                    src={profile.photo} 
                    alt={profile.name}
                    className="about-image"
                  />
                  <div className="about-image-overlay">
                    <span className="about-image-text">{profile.name}</span>
                  </div>
                </div>
                
                <div className="about-info">
                  <h3 className="about-name typing-animation">
                    {displayName}
                    <span className="typing-cursor"></span>
                  </h3>
                  <p className="about-role">{profile.role}</p>
                  <div className="about-details">
                    <div className="about-detail-item">
                      <span className="detail-label">Age</span>
                      <span className="detail-value">{profile.age}</span>
                    </div>
                    <div className="about-detail-item">
                      <span className="detail-label">Location</span>
                      <span className="detail-value">{profile.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="about-bio">{about.bio}</p>
            </div>
          </div>

          <div className="about-card">
            <div className="about-card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Goals</h3>
            </div>
            <div className="about-card-body">
              <ul className="goals-list">
                {about.goals.map((goal, index) => (
                  <li key={index} className="goal-item">
                    <span className="goal-number">{String(index + 1).padStart(2, '0')}</span>
                    <span className="goal-text">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="about-card about-card-full">
            <div className="about-card-header">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h3>Vision</h3>
            </div>
            <div className="about-card-body">
              <p className="vision-text">{about.vision}</p>
              <div className="vision-quote">
                <svg className="quote-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
                <p>{about.vision}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;