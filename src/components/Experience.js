import React, { useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  useEffect(() => {
    try {
      console.log('Experience component mounted');
    } catch (error) {
      console.error('Error in Experience component:', error);
    }
  }, []);

  return (
    <section className="experience" id="experience" style={{border: '2px solid red'}}>
      <div className="container">
        <div className="section-badge">Experience</div>
        <h2 className="section-title">Professional Journey</h2>
        <div className="experience-timeline">
          <div className="experience-card">
            <div className="experience-header">
        
              <div className="experience-info">
                <h3>Internship Trainee</h3>
                <h4>AEROKNOTZ</h4>
                <div className="experience-meta">
                  <span className="duration">Jul 2024 - Jul 2024 · 1 mo</span>
                  <span className="location">Siruseri, Padur, Tamil Nadu, Chennai · On-site</span>
                </div>
              </div>
            </div>
            <div className="experience-content">
              <p>
                During my internship at Aeroknotz, I gained hands-on experience with drones, learning about their working
                mechanisms and how to assemble them. I explored various drone applications, including delivery and agricultural
                drones, and understood their real-world impact. I also pitched my own idea using ML and learned how AI and ML
                enhance drone functionality. This experience deepened my understanding of drone technology and its
                integration with AI-driven innovations.
              </p>
              <div className="skills-used">
                <span className="skill-tag">Drone Technology</span>
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">AI Integration</span>
                <span className="skill-tag">Hardware Assembly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 