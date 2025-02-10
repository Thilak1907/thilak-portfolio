import React from 'react';

const Skills = () => {
  const skills = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Full-stack development with React, Node.js, and modern web technologies. Building responsive and scalable web applications."
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Experience in developing ML models, deep learning, computer vision, and natural language processing using Python, TensorFlow, and PyTorch."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating user-centered designs with Figma and Adobe tools. Focus on intuitive interfaces and seamless user experiences."
    }
  ];

  return (
    <section className="skills">
      <div className="container">
        <div className="skills-header">
          <h2>My Skills</h2>
          <p>Passionate about building innovative solutions using cutting-edge technologies</p>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 