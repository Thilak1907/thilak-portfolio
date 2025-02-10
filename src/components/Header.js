import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h3>Hey, I am Thilak</h3>
          <h1>Software Developer and Machine Learning Engineer</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
          <button className="cta-btn">Get In Touch</button>
        </div>

        <div className="header-image">
          {/* Add header image here */}
        </div>
      </div>
    </header>
  );
};

export default Header; 