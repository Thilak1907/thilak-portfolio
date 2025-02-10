import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        {/* About Text Section */}
        <div className="about-header">
          <div className="section-badge">About Me</div>
          <h2 className="section-title">Transforming Ideas into Reality</h2>
          <h3 className="subtitle">Pre-final Year Student at Rajalakshmi Engineering College</h3>
          <div className="description">
            <p>
              I am currently pursuing B.Tech in Artificial Intelligence and Machine Learning, 
              with a passion for developing innovative solutions that bridge the gap between 
              technology and real-world applications.
            </p>
            <p>
              My academic journey has equipped me with strong foundations in AI/ML, software development,
              and problem-solving. I enjoy working on projects that challenge me to learn and grow,
              particularly in areas like deep learning, computer vision, and web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 