import React from 'react';

const Projects = () => {
  const projects = [
    {
      image: "/project1.jpg",
      category: "Web Design",
      title: "Project Title 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "/project2.jpg",
      category: "Mobile App",
      title: "Project Title 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      image: "/project3.jpg",
      category: "Development",
      title: "Project Title 3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="view-project">View Project</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 