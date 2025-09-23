import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/landing" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : undefined}>Search</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
