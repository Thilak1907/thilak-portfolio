import React from 'react';
import './Header.css';
import profileImage from '../assets/profile.jpg';

const Header = () => {
  const handleNavigation = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Add your CV download link here
    const cvUrl = "/path-to-your-cv.pdf";
    window.open(cvUrl, '_blank');
  };

  return (
    <header className="header" id="home">
      <div className="container">
        <div className="header-content">
          {/* Left side - Text Content */}
          <div className="header-text-wrapper">
            <div className="greeting">Hey, I am</div>
            <h1 className="name">Thilak Kumar</h1>
            <h2 className="title">AI/ML Engineer & <br />Software Developer</h2>
            <div className="social-links">
              <a 
                href="https://github.com/Thilak1907" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="https://instagram.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
                aria-label="Instagram Profile"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="header-image-wrapper">
            <div className="image-container">
              <div className="image-background"></div>
              <img 
                src={profileImage}
                alt="Thilak" 
                className="profile-image"
              />
            </div>
            <div className="floating-elements">
              <div 
                className="floating-card tech"
                role="button"
                tabIndex={0}
              >
                <span className="card-icon">🚀</span>
                <span className="card-text">AI/ML Engineer</span>
              </div>
              <div 
                className="floating-card exp"
                role="button"
                tabIndex={0}
              >
                <span className="card-icon">💻</span>
                <span className="card-text">Software Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 