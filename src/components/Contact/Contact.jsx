// components/Contact/Contact.jsx
import React, { useEffect, useState } from 'react';
import { isValidEmail } from '../../utils/helpers';
import './Contact.css';

const Contact = ({ id }) => {
  const [social, setSocial] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetch('/data/social.json')
      .then(response => response.json())
      .then(data => setSocial(data))
      .catch(error => console.error('Error loading social:', error));
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!isValidEmail(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setFormStatus({ submitted: true, success: true, message: 'Thank you! I\'ll get back to you soon.' });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus({ submitted: false, success: false, message: '' }), 5000);
  };

  if (!social) return null;

  return (
    <section id={id} className="contact reveal">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">
            <i className="fas fa-envelope"></i>
            Get in touch
          </span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line"></div>
        </div>

        <div className="contact-grid stagger-children">
          <div className="contact-info">
            <h3 className="contact-info-title">Have a project in mind?</h3>
            <p className="contact-info-text">
              I'm always interested in hearing about new opportunities and creative projects.
              Let's collaborate and build something amazing together!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="contact-icon"><i className="fas fa-envelope"></i></div>
                <div>
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${social.email}`} className="contact-value">{social.email}</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
                <div>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">{social.location}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Contact Card */}
            <div className="whatsapp-contact-card">
              <div className="whatsapp-contact-icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <div className="whatsapp-contact-content">
                <h4>Quick Response on WhatsApp</h4>
                <p>Get instant replies. I'm usually online!</p>
                <a 
                  href="https://wa.me/9779713512703?text=Hi!%20I%20visited%20your%20portfolio%20and%20have%20a%20question."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-contact-btn"
                >
                  <i className="fab fa-whatsapp"></i>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h4 className="social-title">Connect with me</h4>
              <div className="social-grid">
                {social.links.map((link, index) => (
                  <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-card">
                    <i className={`fab fa-${link.platform.toLowerCase()}`}></i>
                    <span className="social-platform">{link.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Message</h3>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  <i className={`fas ${formStatus.success ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                  {formStatus.message}
                </div>
              )}
              
              <div className="form-group">
                <label><i className="fas fa-user"></i> Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" />
                {errors.name && <small className="error-message">{errors.name}</small>}
              </div>
              
              <div className="form-group">
                <label><i className="fas fa-envelope"></i> Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" />
                {errors.email && <small className="error-message">{errors.email}</small>}
              </div>
              
              <div className="form-group">
                <label><i className="fas fa-comment"></i> Message</label>
                <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..."></textarea>
                {errors.message && <small className="error-message">{errors.message}</small>}
              </div>
              
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;