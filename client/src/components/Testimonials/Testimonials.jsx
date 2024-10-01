import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonial-section">
      <h2>TESTIMONIAL</h2>
      <p>Featured Residential Projects Across India</p>
      <p className="testimonial-intro">
        When the age of a person exceeds 50 years, it becomes very important to take care of one’s health as she enters the senior citizen age. With age, the metabolism and functioning of the body become slow.
      </p>

      <div className="testimonial-container">
        <div className="testimonial-card">
          <img src="https://media.istockphoto.com/id/1475212237/photo/happy-senior-man-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=YlIv0KbU3unUW9AAGAJAFTn2WTdMvu4z573S2EquTdU=" alt="Marjorie" className="testimonial-image"/>
          <h3>Marjorie</h3>
          <p>Lorem Ipsum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <div className="testimonial-card highlight">
          <img src="https://plus.unsplash.com/premium_photo-1671125272094-28fc31388cee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWxkZXJseSUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D" alt="Hannah Schmitt" className="testimonial-image"/>
          <h3>Hannah Schmitt</h3>
          <p>Lorem Ipsum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>

        <div className="testimonial-card">
          <img src="https://media.istockphoto.com/id/1566675636/photo/portrait-of-confident-mature-woman-wearing-formalwear-with-arms-crossed-standing-against.webp?a=1&b=1&s=612x612&w=0&k=20&c=5WC3Xs55etZtuPQf4vcMOYr1k7TK_GW_wBIZznB8kA0=" alt="Cameron" className="testimonial-image"/>
          <h3>Cameron</h3>
          <p>Lorem Ipsum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
