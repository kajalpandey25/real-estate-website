// import React from 'react';
// import './CityPage.css'; // Import the CSS file for this component

// const CityPage = () => {
//   return (
//     <div className="city-page">
//       <h1>Cities</h1>
//       <ul className="city-list">
//         <li className="city-item">New York</li>
//         <li className="city-item">Los Angeles</li>
//         <li className="city-item">Chicago</li>
//         {/* Add more cities as needed */}
//       </ul>
//     </div>
//   );
// };

// export default CityPage;

import React from "react";
import "./CityPage.css";

const CityPage = () => {
  return (
    <div className="property-page">
      {/* Header Section */}
      <header className="property-header">
        <h1>
          Find Your Most <span>exciting Property</span>
        </h1>
        <p>Featured Residential projects across India.</p>
      </header>

      {/* Image Gallery and Filters */}
      <section className="property-gallery">
        <div className="gallery-images">
          <img
            src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Property 1"
          />
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Property 2"
          />
          <img
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGUlMjBwcm9wZXJ0eXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Property 3"
          />
          <img
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMHByb3BlcnR5fGVufDB8fDB8fHww"
            alt="Property 4"
          />
          <div className="image-overlay">
            <span>+5</span>
          </div>
        </div>

        <div className="filter-buttons">
          <button>3 Bedrooms</button>
          <button>Swimming Pool</button>
          <button>Semi-Furnished</button>
          <button className="enquire-now">Enquire Now</button>
        </div>
      </section>

      {/* Property Details Section */}
      <section className="property-details">
        <h2>More Details</h2>
        <div className="details-grid">
          <div>
            Price Breakup:{" "}
            <span style={{ color: "gray", fontSize: "16px" }}>17.5 Cr</span>
          </div>
          <div>Booking Amount:<span style={{ color: "gray", fontSize: "16px" }}>1,00,000</span></div>
          <div>Address:<span style={{ color: "gray", fontSize: "16px" }}>Noida</span></div>
          <div>Furnishing: <span style={{ color: "gray", fontSize: "16px" }}>BLK 7-1005, Vascon Tulips Gold</span></div>
          <div>Type of Ownership: <span style={{ color: "gray", fontSize: "16px" }}>Owner</span></div>
        </div>
      </section>

      {/* Suggested Properties Section */}
      <section className="suggested-properties">
        <h2>Suggested Properties in This Project and Nearby</h2>
        <p></p>
        <div className="property-cards">
          <div className="property-card">
            <img src="property1.jpg" alt="Property 1" />
            <div className="property-info">
              <p>3 BHK, Noida</p>
              <p>Price: ₹90 L</p>
            </div>
          </div>
          <div className="property-card">
            <img src="property2.jpg" alt="Property 2" />
            <div className="property-info">
              <p>2 BHK, Mumbai</p>
              <p>Price: ₹1 Cr</p>
            </div>
          </div>
          {/* Repeat for other property cards */}
        </div>
      </section>

      {/* Commercial Projects Section */}
      <section className="commercial-projects">
        <h2>Commercial Projects</h2>
        <div className="property-cards">
          <div className="property-card">
            <img src="commercial1.jpg" alt="Commercial 1" />
            <div className="property-info">
              <p>Office Space, Mumbai</p>
              <p>Price: ₹5 Cr</p>
            </div>
          </div>
          <div className="property-card">
            <img src="commercial2.jpg" alt="Commercial 2" />
            <div className="property-info">
              <p>Retail Space, Pune</p>
              <p>Price: ₹3 Cr</p>
            </div>
          </div>
          {/* Repeat for other commercial property cards */}
        </div>
      </section>
    </div>
  );
};

export default CityPage;
