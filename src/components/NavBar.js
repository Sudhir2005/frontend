// NavBar.jsx
import React from 'react';
import './Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Alumni Association</div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#directory">Directory</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default NavBar;
