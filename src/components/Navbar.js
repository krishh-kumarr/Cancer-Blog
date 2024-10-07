import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: For styling

const Navbar = () => {
  return (
    <nav>
      <h2>Cancer Biology Research</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/research">Research</Link></li>
        <li><Link to="/case-studies">Case Studies</Link></li>
        <li><Link to="/daily-updates">Daily Updates</Link></li>
        <li><Link to="/solutions">Solutions</Link></li>
        <li><Link to="/trial-methods">Trial Methods</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
