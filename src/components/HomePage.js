import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';  

const HomePage = () => {
	const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]); // To store the suggestions

  // Sample suggestion list (in real-world, this could come from an API)
  const allSuggestions = [
    'Nike Basketball Shoes',
    'Adidas Basketball Shoes',
    'Puma Basketball Shoes',
    'Under Armour Basketball Shoes',
    'Reebok Basketball Shoes',
    'Tatum 3 Basketball Shoes',
    'Lebron 20 Basketball Shoes'
  ];

  // Handle the search input change
  const handleSearchChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);

    // Filter suggestions based on user input
    const filteredSuggestions = allSuggestions.filter((item) =>
      item.toLowerCase().includes(userInput.toLowerCase())
    );
    
    setSuggestions(filteredSuggestions);
  };

	// Handle the search submit (navigate to search results or perform a search)
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (query.trim() === '') {
      alert('Please enter a search term!');
      return;
    }

		// Perform search logic (you can navigate to the search results page or filter data)
		navigate('/search-results');
  };

  // Handle suggestion click (autofill the search input)
  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion); // Autofill the input with the clicked suggestion
    setSuggestions([]); // Clear the suggestions list
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
            className="search-input"
          />
          <button 
            onClick={handleSearchSubmit} 
            className="search-button"
          >
            Search
          </button>
          
          {/* Dropdown for suggestions */}
          {query && suggestions.length > 0 && (
            <ul className="suggestions-dropdown">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index} 
                  className="suggestion-item"
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
