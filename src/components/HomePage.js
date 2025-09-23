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
    <div className="home-container">
      <header className="landing-header">
        <h1>SmartShopper</h1>
        <p>Empowering your shopping with data-driven insights.</p>
      </header>

      <section className="search-section">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search for a product..." 
            value={query}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
            className="search-input"
            role="combobox"
            aria-autocomplete="list"
            aria-expanded={query && suggestions.length > 0 ? true : false}
            aria-controls="suggestions-listbox"
            aria-activedescendant={activeIndex >= 0 ? `suggestion-option-${activeIndex}` : undefined}
            aria-label="Search for a product"
          />
          <button 
            onClick={handleSearchSubmit} 
            className="search-button"
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

      <section className="features-section">
        <h2>What We Offer</h2>
        <ul>
          <li>Comprehensive product analysis and buying opportunities</li>
          <li>Price comparisons across multiple platforms</li>
          <li>Market trends and predictive analysis among different sources</li>
          <li>Financial attributes like condition, rarity, and reputation</li>
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
