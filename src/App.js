import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
const HomePage = lazy(() => import('./components/HomePage'));
const LandingPage = lazy(() => import('./components/LandingPage'));
const SearchResultsPage = lazy(() => import('./components/SearchResultsPage'));
const NotFound = lazy(() => import('./components/NotFound'));

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Suspense fallback={<div style={{ padding: 16 }}>Loading...</div>}>
        <Routes>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/search-results" element={<SearchResultsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
