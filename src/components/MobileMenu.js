import React from 'react';
import './MobileMenu.css';

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <nav className="mobile-nav">
        <a href="#about" onClick={onClose}>About</a>
        <a href="#skills" onClick={onClose}>Skills</a>
        <a href="#projects" onClick={onClose}>Projects</a>
        <a href="#experience" onClick={onClose}>Experience</a>
        <a href="#contact" onClick={onClose}>Contact</a>
      </nav>
    </div>
  );
};

export default MobileMenu; 