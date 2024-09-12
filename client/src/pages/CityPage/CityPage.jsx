import React from 'react';
import './CityPage.css'; // Import the CSS file for this component

const CityPage = () => {
  return (
    <div className="city-page">
      <h1>Cities</h1>
      <ul className="city-list">
        <li className="city-item">New York</li>
        <li className="city-item">Los Angeles</li>
        <li className="city-item">Chicago</li>
        {/* Add more cities as needed */}
      </ul>
    </div>
  );
};

export default CityPage;
