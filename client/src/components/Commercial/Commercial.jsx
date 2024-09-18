// import React from 'react';
// import './Commercial.css';

//  const projects = [
//     {
//         id: 1,
//         title: 'BLK 7-1005, Vascon Tulips Gold',
//         description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
//         propertySize: '900 Sq. Ft.',
//         price: '2,75,000/-',
//         imageUrl: 'https://media.istockphoto.com/id/1138504603/photo/high-rise-buildings-in-gurgaon-delhi-ncr-shot-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBXO7HXnbaP3tICGEMWlffHy3lLtLJQkVOf04oUzvPA=', // Replace with actual image path
//     },
//     {
//         id: 2,
//         title: 'BLK 7-1005, Vascon Tulips Gold',
//         description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
//         propertySize: '900 Sq. Ft.',
//         price: '2,75,000/-',
//         imageUrl: 'https://media.istockphoto.com/id/946740780/photo/city-cityscape-street-apartment-city-street.jpg?s=612x612&w=0&k=20&c=BTZfSyWgDzTMNcKBkQq6wTDY9L9XASd8gpwl_JzrAKM=', // Replace with actual image path
//     },
//     {
//         id: 3,
//         title: 'BLK 7-1005, Vascon Tulips Gold',
//         description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
//         propertySize: '900 Sq. Ft.',
//         price: '2,75,000/-',
//         imageUrl: 'https://media.istockphoto.com/id/1429383056/photo/evening-time-phrom-phong-district-cityscape-at-bangkok-pedestrian-crowd-crossing-and-traffic.jpg?s=612x612&w=0&k=20&c=LRoWV5aDZkPU5XlDzDxTjZq3zxcst2bIXOlS3Ekj-4w=', // Replace with actual image path
//     },
//     {
//         id: 4,
//         title: 'BLK 7-1005, Vascon Tulips Gold',
//         description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
//         propertySize: '900 Sq. Ft.',
//         price: '2,75,000/-',
//         imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGUlMjAlMjBwcm9wZXJ0eSUyMGltYWdlfGVufDB8fDB8fHww', // Replace with actual image path
//     },
// ];

// const CommercialProjects = () => {
//     return (
//         <div className="featured-projects">
//             <h2 style={{marginRight: "650px", marginTop:"1px"}}>COMMERCIAL PROJECTS</h2>
//             <p style={{marginRight: "700px", marginTop:"0px"}}>Featured Residential Projects Across India</p>
//             <div className="projects-container">
//                 {projects.map(project => (
//                     <div key={project.id} className="project-card">
//                         <img src={project.imageUrl} alt={project.title} className="project-image" />
//                         <h3>{project.title}</h3>
//                         <p className="project-description">{project.description}</p>
//                         <p style={{ color: "red"}}><strong style={{color: "black"}}>Property Size:</strong> {project.propertySize}</p>
//                         <p style={{ color: "red"}}><strong style={{ color: "black"}}>Price:</strong> {project.price}</p>
//                         <button className="view-more-btn">View More</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



// export default CommercialProjects;


import React from "react";
import "./Commercial.css"; // Assuming external CSS

const CommercialProjects = () => {
  const properties = [
    {
                id: 1,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://media.istockphoto.com/id/1138504603/photo/high-rise-buildings-in-gurgaon-delhi-ncr-shot-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBXO7HXnbaP3tICGEMWlffHy3lLtLJQkVOf04oUzvPA=', // Replace with actual image path
            },
            {
                id: 2,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://media.istockphoto.com/id/946740780/photo/city-cityscape-street-apartment-city-street.jpg?s=612x612&w=0&k=20&c=BTZfSyWgDzTMNcKBkQq6wTDY9L9XASd8gpwl_JzrAKM=', // Replace with actual image path
            },
            {
                id: 3,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://media.istockphoto.com/id/1429383056/photo/evening-time-phrom-phong-district-cityscape-at-bangkok-pedestrian-crowd-crossing-and-traffic.jpg?s=612x612&w=0&k=20&c=LRoWV5aDZkPU5XlDzDxTjZq3zxcst2bIXOlS3Ekj-4w=', // Replace with actual image path
            },
            {
                id: 4,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWwlMjBlc3RhdGUlMjAlMjBwcm9wZXJ0eSUyMGltYWdlfGVufDB8fDB8fHww', // Replace with actual image path
            },
            {
                id: 4,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D', // Replace with actual image path
            },
            {
                id: 4,
                title: 'BLK 7-1005, Vascon Tulips Gold',
                description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
                propertySize: '900 Sq. Ft.',
                price: '2,75,000/-',
                imageUrl: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZSUyMHByb3Blcnl8ZW58MHx8MHx8fDA%3D', // Replace with actual image path
            },
  ];
  return (
    <div className="property-list-container">
      <div className="filters-container">
        <h2>Property Category</h2>
        <div className="filter-section">
          <h4>🏠Commercial</h4>
          <ul>
            <li><input type="checkbox" /> Home</li>
            <li><input type="checkbox" /> Villas</li>
            <li><input type="checkbox" /> Apartment</li>
            <li><input type="checkbox" /> Plots</li>
          </ul>
        </div>
        <div className="filter-section">
          <h4>Residential</h4>
          <input type="checkbox" />
        </div>
        <div className="filter-section">
          <h4>Agriculture</h4>
          <input type="checkbox" />
        </div>
        <div className="filter-section">
          <h4>Price Range</h4>
          <input type="range" min="0" max="50000" />
        </div>
        <div className="filter-section">
          <h4>State</h4>
          <select>
            <option>Select State</option>
          </select>
        </div>
        <div className="filter-section">
          <h4>City</h4>
          <select>
            <option>Select City</option>
          </select>
        </div>
        <div className="filter-section">
          <h4>Local Area</h4>
          <select>
            <option>Select Area</option>
          </select>
        </div>
      </div>

      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.imageUrl} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p style={{color:"red"}}>Property Size: {property.propertySize}</p>
            <p style={{color:"black"}}>Price: {property.price}</p>
            <button>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommercialProjects;




