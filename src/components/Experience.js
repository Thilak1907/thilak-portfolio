import React from 'react';

const Experience = () => {
  const experiences = [
    {
      period: "2019 - Present",
      role: "Lead Product Designer",
      company: "Dropbox",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      period: "2016 - 2019",
      role: "Senior Product Designer",
      company: "Google",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      period: "2014 - 2016",
      role: "Product Designer",
      company: "Facebook",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    }
  ];

  return (
    <section className="experience">
      <div className="container">
        <div className="experience-header">
          <h2>My Experience</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-period">{exp.period}</div>
              <div className="experience-content">
                <h3>{exp.role}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 