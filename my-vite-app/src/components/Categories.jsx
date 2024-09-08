import React from 'react';
import './Categories.css'; // Add your styles here

const Categories = () => {
  const categories = ['Launched Project', 'Delivered Project', 'Pre-Launched Project', 'Running Project'];

  return (
    <div className="categories">
      {categories.map((category, index) => (
        <div key={index} className="category-card">
          <h3>{category}</h3>
          <button>View All</button>
        </div>
      ))}
    </div>
  );
};

export default Categories;
