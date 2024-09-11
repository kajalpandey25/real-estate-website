// import React from "react";
// import './Companies.css'
// const Companies = () => {
//   return (
//     <section className="c-wrapper">
//       <div className="paddings innerWidth flexCenter c-container">
//         <img src="./prologis.png" alt="" />
//         <img src="./tower.png" alt="" />
//         <img src="./equinix.png" alt="" />
//         <img src="./realty.png" alt="" />
//       </div>
//     </section>
//   );
// };

// export default Companies;
import React from 'react';
import './Companies.css';

const Companies = () => {
  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-item">
          <img src="startup.png" alt="Launched Project" />
          <h3>Launched Project</h3>
          <button>View All</button>
        </div>
        <div className="carousel-item">
          <img src="profile.png" alt="Delivered Project" />
          <h3>Delivered Project</h3>
          <button>View All</button>
        </div>
        <div className="carousel-item">
          <img src="project-management.png" alt="Pre-Launched Project" />
          <h3>Pre-Launched Project</h3>
          <button>View All</button>
        </div>
        <div className="carousel-item">
          <img src="development-plan.png" alt="Running Project" />
          <h3>Running Project</h3>
          <button>View All</button>
        </div>
      </div>
    </div>
  );
};

export default Companies;

