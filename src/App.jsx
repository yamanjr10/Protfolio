// App.jsx
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import BackToTop from './components/BackToTop/BackToTop';
import Loading from './components/Loading/Loading';
import { useScrollActive } from './hooks/useScrollActive';

function App() {
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  
  const sectionIds = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
  const activeSection = useScrollActive(showContent ? sectionIds : []);

  useEffect(() => {
    fetch('/data/config.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load config');
        }
        return response.json();
      })
      .then(data => {
        setConfig(data);
      })
      .catch(error => {
        console.error('Error loading config:', error);
        setLoading(false);
      });
  }, []);

  const handleLoadingComplete = () => {
    setShowContent(true);
  };

  if (!config && !loading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        background: 'var(--color-background)',
        color: 'var(--color-error)'
      }}>
        Failed to load configuration
      </div>
    );
  }

  return (
    <ThemeProvider>
      {!showContent && (
        <Loading onLoadingComplete={handleLoadingComplete} />
      )}
      
      <div 
        className="app" 
        style={{ 
          opacity: showContent ? 1 : 0,
          transition: 'opacity 0.5s ease'
        }}
      >
        {config && (
          <>
            <Navbar 
              activeSection={activeSection}
              navigation={config.navigation}
            />
            <main>
              <Hero id="home" />
              <About id="about" />
              <Skills id="skills" />
              <Projects id="projects" />
              <Resume id="resume" />
              <Contact id="contact" />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;