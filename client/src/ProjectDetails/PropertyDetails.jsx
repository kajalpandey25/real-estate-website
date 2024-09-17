// import React from 'react';
// import './PropertyListing.css';

// const projects = [
//   {
//     id: 1,
//     title: 'BLK 7-1005, Vascon Tulips Gold',
//     description: 'A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips...',
//     propertySize: '900 Sq. Ft.',
//     price: 'Rs 2,75,000/-',
//     imageUrl: 'https://your-image-url.com/1.jpg', // Replace with actual image path
//   },
//   {
//     id: 2,
//     title: 'BLK 7-1005, Vascon Tulips Gold',
//     description: 'A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips...',
//     propertySize: '1200 Sq. Ft.',
//     price: 'Rs 3,50,000/-',
//     imageUrl: 'https://your-image-url.com/2.jpg', // Replace with actual image path
//   },
//   // Add more projects as needed
// ];

// const PropertyListing = () => {
//   return (
//     <div className="property-listing">
//       <div className="sidebar">
//         {/* Sidebar content */}
//       </div>

//       <div className="property-list">
//         <h2>Commercial</h2>
//         <p>Featured Commercial Projects Across India</p>
//         <div className="project-cards">
//           {projects.map((project) => (
//             <div key={project.id} className="project-card">
//               <img src={project.imageUrl} alt={project.title} />
//               <h3>{project.title}</h3>
//               <p>{project.description}</p>
//               <p><strong>Property Size:</strong> {project.propertySize}</p>
//               <p><strong>Price:</strong> {project.price}</p>

//               {/* Use Link for the "View More" button */}
//               <Link to={`/project/${project.id}`}>
//                 <button className="view-more-btn">View More</button>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyListing;

import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
    {
        id: 1,
        title: 'BLK 7-1005, Vascon Tulips Gold',
        description: 'It Is A Piece Of Really Soft Tissue That Appears As A Thin Line Between The Gums And Lips. You Can Find It On The Top And The Bottom Of Your Oral Cavity.',
        propertySize: '900 Sq. Ft.',
        price: '2,75,000/-',
        imageUrl: 'https://media.istockphoto.com/id/1138504603/photo/high-rise-buildings-in-gurgaon-delhi-ncr-shot-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=pBXO7HXnbaP3tICGEMWlffHy3lLtLJQkVOf04oUzvPA=',
    },
    // Other project data...
];

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === parseInt(id));

    if (!project) {
        return <h2>Project not found</h2>;
    }

    return (
        <div>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <p><strong>Property Size:</strong> {project.propertySize}</p>
            <p><strong>Price:</strong> {project.price}</p>
            <img src={project.imageUrl} alt={project.title} />
        </div>
    );
};

export default ProjectDetails;

