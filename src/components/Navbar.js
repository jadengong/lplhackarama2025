import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; 


const Navbar = () => {
  return (
    <nav className="navbar bg-gray-900 text-white shadow">
      <ul className="container flex items-center gap-6">
        <li>
          <NavLink to="/landing" className={({ isActive }) => isActive ? 'active text-orange-400 underline' : 'hover:text-orange-300 transition-colors'}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active text-orange-400 underline' : 'hover:text-orange-300 transition-colors'}>Search</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
