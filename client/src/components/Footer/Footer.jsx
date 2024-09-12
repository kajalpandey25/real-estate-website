import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2 style={{color:"green"}}>M<span style={{color:"gray"}}>ete</span><span style={{color:"green"}}>y</span><span style={{color:"gray"}}>ard</span></h2>
          <p>
            Meteyard helps users with multi-purpose information, along with the
            best real estate industry trends and useful innovative technology.
            Keeping in mind the needs of buyers and sellers in the real estate
            market, along with residential and commercial establishments and
            rental properties.
          </p>
        </div>

        <div className="footer-navigation">
          <h3>Navigation</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Properties Listing</li>
          </ul>
        </div>

        <div className="footer-subscribe">
          <h3>Subscribe</h3>
          <p>
            Sign up for our newsletter to get the latest updates and offers.
            Subscribe to receive news in your inbox.
          </p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@meteyard.com</p>
          <p>Phone: 8027029387</p>
          <h3>Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        <div className="footer-presence">
          <h3>Our Presence</h3>
          <p>
            Delhi NCR | Bengaluru | Kolkata | Hyderabad | Bhubaneswar | Varanasi
            | Lucknow | Panchkula | Srinagar | Udhampur | Bhatinda | Guwahati
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
