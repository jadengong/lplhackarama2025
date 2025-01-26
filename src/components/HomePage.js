import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';  

const HomePage = () => {
  const [url1, setUrl1] = useState('');
  const [url2, setUrl2] = useState('');
  const [suggestions, setSuggestions] = useState([]); // To store the suggestions
  const navigate = useNavigate();

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

  // Handle the search input change for the first URL
  const handleUrl1Change = (e) => {
    setUrl1(e.target.value);
  };

  // Handle the search input change for the second URL
  const handleUrl2Change = (e) => {
    setUrl2(e.target.value);
  };

  // Handle the search submit (navigate to search results or perform a search)
  const handleSearchSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (url1.trim() === '' || url2.trim() === '') {
      alert('Please enter both product URLs!');
      return;
    }

    // Construct the API URL with the two URLs (url1 and url2)
    const apiUrl = `https://68gf032zx3.execute-api.us-west-2.amazonaws.com/prod/getinfo?url1=${encodeURIComponent(url1)}&url2=${encodeURIComponent(url2)}`;

    try {
      // Make the API request to the backend API Gateway
      const response = await fetch(apiUrl);

      // If the response is successful, parse the data
      if (response.ok) {
        const data = await response.json();
        console.log("Product Data:", data);

        // Redirect to search results page with URLs as query parameters
        navigate(`/search-results?url1=${encodeURIComponent(url1)}&url2=${encodeURIComponent(url2)}`);
      } else {
        throw new Error('Failed to fetch product data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching product data!');
    }
  };

  // Handle suggestion click (autofill the search input)
  const handleSuggestionClick = (suggestion) => {
    setUrl1(suggestion); // Autofill the input with the clicked suggestion
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
          {/* Input for the first product URL */}
          <input 
            type="text" 
            placeholder="Enter first product URL" 
            value={url1}
            onChange={handleUrl1Change}
            className="search-input"
          />
          {/* Input for the second product URL */}
          <input 
            type="text" 
            placeholder="Enter second product URL" 
            value={url2}
            onChange={handleUrl2Change}
            className="search-input"
          />
          <button 
            onClick={handleSearchSubmit} 
            className="search-button"
          >
            Compare
          </button>
          
          {/* Dropdown for suggestions */}
          {url1 && suggestions.length > 0 && (
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