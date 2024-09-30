import React from 'react';
import './ProjectStats.css'; // Import the CSS file

const ProjectStats = () => {
  const stats = [
    { label: 'Buyers Online', value: 51 },
    { label: 'Sellers Online', value: 150 },
    { label: 'Visitors', value: 51 },
    { label: 'Listed Projects', value: 150 }
  ];

  return (
    <div className="project-stats-container">
      <h2>PROJECTS</h2>
      <p>Featured Residential Projects Across India</p>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectStats;
