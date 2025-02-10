import React from 'react';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Logo />
        <div className="nav-links">
          <a href="#home" className="active">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About Us</a>
          <a href="#testimonials">Testimonials</a>
        </div>
        <button className="contact-btn">Contact Me</button>
      </div>
    </nav>
  );
};

export default Navbar; 