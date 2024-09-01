// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Assuming you have some styling for the navbar

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Alumni Association</h1>
      <ul className="nav-links">
        <li>
          <Link to="/directory">Alumni Directory</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/events">Event Management</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
