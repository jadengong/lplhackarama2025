import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import LandingPage from './components/LandingPage';
import SearchResultsPage from './components/SearchResultsPage';
import ExampleResultsPage from './components/ExampleResultsPage';

const App = () => {
  return (
    <Router>
      <Navbar /> 

      <Routes>
        {/* Define the routes for the HomePage (search page) and LandingPage */}
        
        <Route path="/landing" element={<LandingPage />} /> {/* route for LandingPage */}
        <Route path="/" element={<HomePage />} /> {/* HomePage is the default route */}
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/example-results" element={<ExampleResultsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
