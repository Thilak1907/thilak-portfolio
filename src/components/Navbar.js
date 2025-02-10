import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 70; // Height of your fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  const handleContactClick = () => {
    // You can either scroll to a contact section
    handleNavClick('contact');
    // Or open a modal/email client
    // window.location.href = "mailto:your.email@example.com";
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-links">
            <a 
              href="#about" 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >
              About
            </a>
            <a 
              href="#skills" 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('skills');
              }}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('projects');
              }}
            >
              Projects
            </a>
            <a 
              href="#experience" 
              className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('experience');
              }}
            >
              Experience
            </a>
          </div>
          <button className="contact-btn" onClick={handleContactClick}>
            Contact Me
          </button>
          
          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={() => handleNavClick('about')}>About</a>
        <a href="#skills" onClick={() => handleNavClick('skills')}>Skills</a>
        <a href="#projects" onClick={() => handleNavClick('projects')}>Projects</a>
        <a href="#experience" onClick={() => handleNavClick('experience')}>Experience</a>
        <button className="contact-btn mobile" onClick={handleContactClick}>
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 