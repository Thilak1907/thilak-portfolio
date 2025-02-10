import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Malware Detection System",
      description: "A hybrid malware detection system using GANs and Transfer Learning. Converts malware binaries to grayscale images for visual pattern recognition, utilizing VGG19 for improved accuracy.",
      tech: [ "Keras", "OpenCV", "VGG19", "GANs"],
      type: "AI/ML"
    },
    {
      title: "Handwritten Character Recognition",
      description: "An MLP-based system trained on EMNIST dataset for recognizing handwritten characters. Features high accuracy classification with comprehensive performance metrics.",
      tech: [ "Keras", "OpenCV", "NumPy", "Scikit-learn"],
      type: "Deep Learning"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-badge">Projects</div>
        <h2 className="section-title">Featured Work</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <div className="project-type">{project.type}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 