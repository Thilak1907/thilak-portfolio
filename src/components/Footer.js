import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Logo />
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About me</a>
          <a href="#contact">Contact</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#portfolio">Portfolio</a>
        </div>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <a href="#instagram">Instagram</a>
          <a href="#twitter">Twitter</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright">
          <p>Made with 💖 by Airdokan</p>
        </div>
        <div className="legal-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
          <a href="#cookies">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 