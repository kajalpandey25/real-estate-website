import React from 'react';
import './ProjectsCarousel.css'; // Add your styles here

const ProjectsCarousel = () => {
  const projects = [
    { id: 1, name: 'BLK 7-10D, Vascon Tulips Gold', location: 'Pune, Maharashtra', price: '₹ 70 L - 2 Cr' },
    { id: 2, name: 'BLK 7-10C, Vascon Tulips Gold', location: 'Pune, Maharashtra', price: '₹ 75 L - 2.5 Cr' },
    { id: 3, name: 'BLK 7-10B, Vascon Tulips Gold', location: 'Pune, Maharashtra', price: '₹ 80 L - 3 Cr' },
  ];

  return (
    <div className="projects-carousel">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h4>{project.name}</h4>
          <p>{project.location}</p>
          <p>{project.price}</p>
          <button>View More</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectsCarousel;
