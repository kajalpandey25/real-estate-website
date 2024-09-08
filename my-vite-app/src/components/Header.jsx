import React from 'react';
import './Header.css'; // Add your styles here

const Header = () => {
  return (
    <header className="header">
      <div className="logo">meteryard.com</div>
      <nav className="nav">
        <ul>
          <li><a href="#">Cities</a></li>
          <li><a href="#">Property Type</a></li>
          <li><a href="#">My Chat</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
