// Resume.jsx
import React, { useEffect, useState } from 'react';
import { formatDate } from '../../utils/helpers';
import './Resume.css';

const Resume = ({ id }) => {
  const [resume, setResume] = useState(null);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    fetch('/data/resume.json')
      .then(response => response.json())
      .then(data => setResume(data))
      .catch(error => console.error('Error loading resume:', error));
  }, []);

  if (!resume) return null;

  return (
    <section id={id} className="resume">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My journey so far</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div className="resume-summary-card">
          <p className="resume-summary-text">{resume.summary}</p>
          <div className="resume-actions">
            <a 
              href={resume.resumeFile.downloadUrl} 
              download
              className="resume-btn resume-btn-primary"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Download CV
            </a>
            <a 
              href={resume.resumeFile.viewUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-btn resume-btn-secondary"
            >
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              View Online
            </a>
          </div>
        </div>

        <div className="resume-tabs">
          <button 
            className={`resume-tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Work Experience
          </button>
          <button 
            className={`resume-tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 14l9-5-9-5-9 5 9 5z"/>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
              <path d="M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 006.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z"/>
            </svg>
            Education
          </button>
          <button 
            className={`resume-tab ${activeTab === 'certifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('certifications')}
          >
            <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Certifications
          </button>
        </div>

        <div className="resume-content">
          {/* Experience Tab */}
          <div className={`resume-panel ${activeTab === 'experience' ? 'active' : ''}`}>
            <div className="timeline">
              {resume.experience.map((exp, index) => (
                <div key={exp.id} className="timeline-item">
                  <div className="timeline-marker">
                    <span className="timeline-dot"></span>
                    {index < resume.experience.length - 1 && <span className="timeline-line"></span>}
                  </div>
                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div>
                        <h3 className="timeline-title">{exp.title}</h3>
                        <p className="timeline-company">{exp.company}</p>
                      </div>
                      <span className="timeline-date">
                        {formatDate(exp.startDate)} - {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
                      </span>
                    </div>
                    <p className="timeline-description">{exp.description}</p>
                    {exp.achievements && (
                      <ul className="timeline-achievements">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>
                            <svg className="achievement-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Tab */}
          <div className={`resume-panel ${activeTab === 'education' ? 'active' : ''}`}>
            <div className="education-grid">
              {resume.education.map((edu) => (
                <div key={edu.id} className="education-card">
                  <div className="education-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <div className="education-card-content">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    <div className="education-meta">
                      <span className="education-location">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {edu.location}
                      </span>
                      <span className="education-year">
                        <svg className="meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        Class of {edu.graduationYear}
                      </span>
                    </div>
                    {edu.gpa && (
                      <div className="education-gpa">
                        <span className="gpa-label">GPA:</span>
                        <span className="gpa-value">{edu.gpa}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Tab */}
          <div className={`resume-panel ${activeTab === 'certifications' ? 'active' : ''}`}>
            <div className="certifications-grid">
              {resume.certifications.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                    </svg>
                  </div>
                  <div className="certification-content">
                    <h3 className="certification-name">{cert.name}</h3>
                    <p className="certification-issuer">{cert.issuer}</p>
                    <span className="certification-year">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;