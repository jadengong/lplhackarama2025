import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';  
import { fetchSuggestions } from '../services/api';

const HomePage = () => {
	const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]); // To store the suggestions
  const [activeIndex, setActiveIndex] = useState(-1); // Keyboard-focused suggestion
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle the search input change
  const handleSearchChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);
    if (!userInput.trim()) {
      setSuggestions([]);
      setIsLoading(false);
      setError('');
      return;
    }
    // Fetch suggestions asynchronously
    setIsLoading(true);
    setError('');
    fetchSuggestions(userInput)
      .then((results) => {
        setSuggestions(results);
      })
      .catch(() => {
        setError('Failed to load suggestions');
        setSuggestions([]);
      })
      .finally(() => setIsLoading(false));
  };

	// Handle the search submit (navigate to search results or perform a search)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (query.trim() === '') {
      alert('Please enter a search term!');
      return;
    }

		// Perform search logic (you can navigate to the search results page or filter data)
		navigate(`/search-results?q=${encodeURIComponent(query.trim())}`);
  };

  // Handle suggestion click (autofill the search input)
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); // Autofill the input with the clicked suggestion
    setSuggestions([]); // Clear the suggestions list
    setActiveIndex(-1);
  };

  const handleKeyDown = (e) => {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        e.preventDefault();
        handleSuggestionClick(suggestions[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
      setActiveIndex(-1);
    }
  };

  return (
    <div className="home-container bg-gradient-to-br from-sky-500 via-indigo-600 to-fuchsia-600 min-h-screen pt-40">
      <header className="landing-header container mt-32 md:mt-36">
        <h1>SmartShopper</h1>
        <p className="text-gray-200 max-w-xl mx-auto">Empowering your shopping with data-driven insights.</p>
      </header>

      <section className="search-section container">
        <div className="search-box w-full flex items-start">
          <input 
            type="text" 
            placeholder="Search for a product..." 
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="search-input w-full"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={query && suggestions.length > 0 ? true : false}
            aria-controls="suggestions-listbox"
            aria-activedescendant={activeIndex >= 0 ? `suggestion-option-${activeIndex}` : undefined}
            aria-label="Search for a product"
          />
          <button 
            onClick={handleSearchSubmit} 
            className="search-button ml-2"
          >
            Search
          </button>
          
          {/* Dropdown for suggestions */}
          {query && (
            <ul 
              className="suggestions-dropdown"
              id="suggestions-listbox"
              role="listbox"
            >
              {isLoading && (
                <li className="suggestion-item" role="status">Loading...</li>
              )}
              {!isLoading && error && (
                <li className="suggestion-item" role="status">{error}</li>
              )}
              {!isLoading && !error && suggestions.length === 0 && (
                <li className="suggestion-item" role="status">No suggestions</li>
              )}
              {!isLoading && !error && suggestions.map((suggestion, index) => (
                <li 
                  key={index} 
                  className="suggestion-item"
                  id={`suggestion-option-${index}`}
                  role="option"
                  aria-selected={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => handleSuggestionClick(suggestion)} // click handler
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <section className="features-section container">
        <h2 className="text-white text-2xl font-semibold text-left">How it works</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5 p-4 text-left">
            <h3 className="font-semibold text-gray-900">Search</h3>
            <p className="text-gray-600 mt-1">Find products with smart suggestions as you type.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5 p-4 text-left">
            <h3 className="font-semibold text-gray-900">Compare</h3>
            <p className="text-gray-600 mt-1">See prices and trends to judge the value over time.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5 p-4 text-left">
            <h3 className="font-semibold text-gray-900">Decide</h3>
            <p className="text-gray-600 mt-1">Use insights to choose the right time and place to buy.</p>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="container mt-8">
        <h2 className="text-white text-2xl font-semibold text-left">Why use SmartShopper?</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {title: 'Real-time insights', desc: 'Stay up to date with dynamic pricing and demand signals.'},
            {title: 'Transparent comparisons', desc: 'See clear price breakdowns and vendor differences.'},
            {title: 'Decision confidence', desc: 'Use historical trends to avoid overpaying.'}
          ].map((item, idx) => (
            <div key={idx} className="bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5 p-5 text-left">
              <h3 className="font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ / info section */}
      <section className="container mt-8 mb-12">
        <h2 className="text-white text-2xl font-semibold text-left">Frequently asked</h2>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          <div className="bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5 p-5">
            <h3 className="font-semibold text-gray-900">Where does data come from?</h3>
            <p className="text-gray-600 mt-2">We aggregate multiple public sources and simulate data while in demo mode.</p>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5 p-5">
            <h3 className="font-semibold text-gray-900">Can I track price drops?</h3>
            <p className="text-gray-600 mt-2">Yes—use the results page chart to monitor trends and identify dips.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
