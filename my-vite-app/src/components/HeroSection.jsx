import React from 'react';
import './HeroSection.css'; // Add your styles here

const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Find Your Place, <span>Make It Home</span></h1>
      <p>Please Select Your Category</p>
      <div className="buttons">
        <button>Buyer</button>
        <button>Seller</button>
      </div>
      <input type="text" placeholder="Search City, Locality, Projects, Landmark" />
    </section>
  );
};

export default HeroSection;
