import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/landing">Home</Link> {/* Links to the landing page */}
        </li>
        <li>
          <Link to="/">Search</Link> {/* Link to the search page */}
        </li>
        <li>
          <Link to="/example-results">Example Results</Link> {/* New link for ExampleResultsPage */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;