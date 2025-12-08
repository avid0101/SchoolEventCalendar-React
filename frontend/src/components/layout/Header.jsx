import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          School <b>Event Planner</b>
        </Link>
          <ul className="links">
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
            <li><Link to="/login" state={{ background: location }} className="nav-link">Login</Link></li>
            <li><Link to="/register" state={{ background: location }} className="nav-link">Sign-Up</Link></li>
          </ul>
      </div>
    </header>
  );
};

export default Header;