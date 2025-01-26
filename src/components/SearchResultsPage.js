import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResultsPage.css';
import HistoricalMarketDataChart from './Chart.js';

const SearchResultsPage = () => {
  const location = useLocation();
  const [productData, setProductData] = useState(null); // Store fetched product data
  const [error, setError] = useState(null);

  useEffect(() => {
    // Extract the 'url1' and 'url2' query parameters from the URL
    const queryParams = new URLSearchParams(location.search);
    const url1 = queryParams.get('url1');
    const url2 = queryParams.get('url2');

    if (url1 && url2) {
      // Fetch product data for both URLs
      const fetchData = async () => {
        try {
          const response = await fetch(`https://68gf032zx3.execute-api.us-west-2.amazonaws.com/prod/getinfo?url1=${encodeURIComponent(url1)}&url2=${encodeURIComponent(url2)}`);
          const data = await response.json();
          setProductData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
          setError('Error fetching product data!');
        }
      };
      fetchData();
    }
  }, [location]); // Re-run the effect when the location changes

  // If productData is not available yet, show a loading message with a spinner
  if (!productData) {
    return (
      <div className="loading-container">
        <div className="loading-message">
          Loading product data...
          <div className="loading-spinner"></div> {/* Spinner for loading effect */}
        </div>
      </div>
    );
  }

  // Return product details for both products side by side
  return (
    <div className="search-results-page">
      <header className="search-results-header">
        <h1>Product Comparison</h1>
      </header>

      <div className="comparison-section">
        {/* Product 1 */}
        <div className="comparison-box">
          <h2>{productData.product1.name}</h2> {/* Display Product 1 Name */}
          <img alt={productData.product1.name} src={productData.product1.imageUrl} className="product-image" />
          <p>{productData.product1.description}</p>
          <p><strong>Price:</strong> ${productData.product1.price}</p>
          <ul>
            <li><strong>Brand Reputation:</strong> Not available</li>
            <li><strong>Condition:</strong> New</li>
            <li><strong>Market Trends:</strong> Not available</li>
          </ul>
        </div>

        {/* Product 2 */}
        <div className="comparison-box">
          <h2>{productData.product2.name}</h2> {/* Display Product 2 Name */}
          <img alt={productData.product2.name} src={productData.product2.imageUrl} className="product-image" />
          <p>{productData.product2.description}</p>
          <p><strong>Price:</strong> ${productData.product2.price}</p>
          <ul>
            <li><strong>Brand Reputation:</strong> Not available</li>
            <li><strong>Condition:</strong> New</li>
            <li><strong>Market Trends:</strong> Not available</li>
          </ul>
        </div>
      </div>

      {/* Historical Market Data */}
      <section className="section">
        <h2>Historical Market Data</h2>
        <p><strong>Price History:</strong> Showing a chart of price changes over the last 12 months.</p>
        <div className="chart-container">
          <HistoricalMarketDataChart />
        </div>
      </section>
    </div>
  );
};

export default SearchResultsPage;