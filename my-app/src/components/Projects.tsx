import React from 'react';
import './Projects.css'; // Import the new stylesheet

const projects = [
  { 
    name: 'Riverfront Villas', 
    desc: 'An exclusive gated community of 50 luxury villas offering serene riverside living and premium facilities.', 
    img: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80' 
  },
  { 
    name: 'Greenfield Mall', 
    desc: 'A 1.2 million sq. ft. modern shopping destination featuring over 200 retail outlets and a multiplex cinema.', 
    img: 'https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?auto=format&fit=crop&w=800&q=80' 
  },
   { 
    name: 'College Campus', 
    desc: 'State-of-the-art corporate campus for a Fortune 500 tech company, designed for collaboration and innovation.', 
    img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80' 
  }
];

const Projects: React.FC = () => (
  <section className="projects-section">
    <div className="container">
      <h2 className="section-title">Our Signature Projects</h2>
      <p className="section-subtitle">
        We are proud of our legacy of landmark projects across the country.
      </p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          // The card is now a link for better user experience.
          <a 
            key={index} 
            href="#" 
            className="project-card"
            // The image is applied as a background for the zoom/overlay effect.
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div className="project-card-overlay">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.desc}</p>
              {/* <span className="project-link">
                View Project &rarr;
              </span> */}
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;