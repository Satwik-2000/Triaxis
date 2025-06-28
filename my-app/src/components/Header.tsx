import React, { useEffect, useState } from 'react';
import './Header.css';

const Header: React.FC = () => {
  // Array of messages for the typing effect
  const messages = [
    "Engineering Tomorrow's Infrastructure Today",
    "Precision-Built Construction Solutions",
    "Innovating the Future of Urban Development",
    "Where Vision Meets Structural Integrity"
  ];
  
  // State for the typing animation
  const [displayedText, setDisplayedText] = useState('');
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // useEffect for the typing animation logic (remains unchanged)
  useEffect(() => {
    const typeSpeed = isDeleting ? 30 : 100;
    const currentMessage = messages[messageIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < currentMessage.length) {
          setDisplayedText(currentMessage.substring(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000); // Increased pause before deleting
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }
      }
    };

    const timeout = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, messageIndex, messages]);

  return (
    <header className="header">
      {/* Container for all background animations */}
      <div className="construction-animation">
        {/* NEW: Blueprint Grid Background */}
        <div className="blueprint-grid"></div>

        {/* Animated Crane */}
        <div className="crane">
          <div className="crane-tower"></div>
          <div className="crane-arm"></div>
          <div className="crane-cable"></div>
          <div className="crane-hook"></div>
        </div>
        
        {/* Construction Workers */}
        <div className="construction-worker worker-1"></div>
        <div className="construction-worker worker-2"></div>
        
        {/* Moving Construction Vehicles */}
        <div className="construction-vehicle vehicle-1"></div>
        <div className="construction-vehicle vehicle-2"></div>
        
        {/* Building Progress Animation */}
        <div className="building-progress">
          <div className="building-floor floor-1"></div>
          <div className="building-floor floor-2"></div>
          <div className="building-floor floor-3"></div>
        </div>
        
        {/* Floating particles/sparks */}
        <div className="particles">
          {[...Array(35)].map((_, i) => <div key={i} className="particle"></div>)}
        </div>
        
        {/* Pulsing Construction Beams */}
        <div className="construction-beam beam-1"></div>
        <div className="construction-beam beam-2"></div>

        {/* NEW: Sweeping Spotlights */}
        <div className="spotlight-container">
            <div className="spotlight spotlight-1"></div>
            <div className="spotlight spotlight-2"></div>
        </div>
      </div>

      {/* Main header content */}
      <div className="header-content">
        <h1 className="header-title">
          <span className="title-part-1">TRIAXIS</span>
          <span className="title-part-2">CONSTRU</span>
          <span className="title-part-3">SOLUTIONS</span>
        </h1>
        <p className="header-subtitle">
          {displayedText}
          <span className="cursor">|</span>
        </p>
      </div>
    </header>
  );
};

export default Header;