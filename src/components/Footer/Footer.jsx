// Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-copyright">
            © {currentYear} Yaman Chapagain. Crafted with 
            <span className="footer-heart">❤️</span> 
            in Nepal
          </p>
          
          <div className="footer-links">
            <a href="#home" className="footer-link">Home</a>
            <span className="footer-separator">•</span>
            <a href="#about" className="footer-link">About</a>
            <span className="footer-separator">•</span>
            <a href="#projects" className="footer-link">Projects</a>
            <span className="footer-separator">•</span>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;