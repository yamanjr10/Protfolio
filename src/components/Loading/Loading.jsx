import React, { useEffect, useState } from 'react';
import './Loading.css';

const Loading = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(onLoadingComplete, 600);
          }, 400);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`loading-screen-minimal ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content-minimal">
        <div className="loading-luxury-logo">
          <span className="luxury-letter">Y</span>
          <span className="luxury-letter">C</span>
        </div>
        
        <h1 className="loading-luxury-title">Yaman Chapagain</h1>
        
        <div className="loading-luxury-bar">
          <div 
            className="loading-luxury-progress" 
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="loading-luxury-message">
          {progress < 100 ? 'Loading experience' : 'Welcome'}
          <span className="luxury-dots">
            {progress < 100 ? '...' : '!'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loading;