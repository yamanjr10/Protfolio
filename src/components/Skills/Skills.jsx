// Skills.jsx
import React, { useState } from 'react';
import { skillsData } from '../../utils/skills';
import './Skills.css';

const Skills = ({ id }) => {
  const [skills] = useState(skillsData);
  const [activeCategory, setActiveCategory] = useState(skills.categories[0].id);

  const getLevelColor = (level) => {
    const colors = {
      expert: '#8b5cf6',
      advanced: '#14b8a6',
      intermediate: '#ec4899',
      beginner: '#f59e0b',
      basic: '#64748b'
    };
    return colors[level] || colors.basic;
  };

  return (
    <section id={id} className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I bring to the table</span>
          <h2 className="section-title">Skills & Expertise</h2>
        </div>

        <div className="skills-tabs">
          {skills.categories.map((category) => (
            <button
              key={category.id}
              className={`skills-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="skills-content">
          {skills.categories.map((category) => (
            <div 
              key={category.id}
              className={`skills-panel ${activeCategory === category.id ? 'active' : ''}`}
            >
              <div className="skills-visualization">
                <div className="skills-chart">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-bar-group">
                      <div className="skill-bar-label">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percent}%</span>
                      </div>
                      <div className="skill-bar-container">
                        <div 
                          className="skill-bar"
                          style={{ 
                            width: `${skill.percent}%`,
                            backgroundColor: getLevelColor(skill.level),
                            transitionDelay: `${index * 0.1}s`
                          }}
                        >
                          <span className="skill-bar-tooltip">
                            {skill.level} • {skill.years}+ years
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="skills-grid-mini">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="skill-mini-card">
                      <div className="skill-mini-header">
                        <span className="skill-mini-name">{skill.name}</span>
                        <span className="skill-mini-level" style={{ color: getLevelColor(skill.level) }}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-mini-progress">
                        <div 
                          className="skill-mini-progress-bar"
                          style={{ 
                            width: `${skill.percent}%`,
                            backgroundColor: getLevelColor(skill.level)
                          }}
                        ></div>
                      </div>
                      <span className="skill-mini-years">{skill.years} years experience</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;