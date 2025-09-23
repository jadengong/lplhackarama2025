import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-gray-900/95 text-white shadow">
      <ul className="container flex items-center gap-6 min-h-14">
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
