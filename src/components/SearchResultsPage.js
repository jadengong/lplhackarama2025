import React from 'react';
import './SearchResultsPage.css';
import HistoricalMarketDataChart from './Chart.js'; 

const SearchResultsPage = () => {
  return (
    <div className="search-results-page"> 
      <header className="search-results-header"> 
        <h1>Tatum 3 Basketball Shoes (FZ6598-103, White/Kinetic Green/Black)</h1>
      </header>

      {/* Product Description */}
      <section className="section"> 
        <h2>Product Description</h2>
        <p><strong>Color:</strong> White/Black</p>
        <p><strong>Size:</strong> Available in multiple sizes (Men's 6-15)</p>
        <p><strong>Model Year:</strong> 2023</p>
        <p><strong>Material:</strong> Synthetic leather and mesh upper, rubber sole</p>
        <p><strong>Features:</strong> Kinetic energy-return technology for enhanced performance</p>
      </section>

      {/* Financial Attributes */}
      <section className="section"> 
        <h2>Financial Attributes</h2>
        <ul>
          <li><strong>Brand Reputation:</strong> Excellent (Nike)</li>
          <li><strong>Condition:</strong> New</li>
          <li><strong>Rarity:</strong> Regularly available</li>
          <li><strong>Product Reviews:</strong> 4.8 out of 5 (Based on 1,000 reviews)</li>
          <li><strong>Market Trends:</strong> Stable demand with a slight upward trend due to new release</li>
        </ul>
      </section>

      {/* Price Comparison */}
      <section className="section"> 
        <h2>Price Comparison</h2>
        <table className="price-comparison-table">
          <thead>
            <tr>
              <th>Platform</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Amazon</td>
              <td>$119.99</td>
            </tr>
            <tr>
              <td>Foot Locker</td>
              <td>$124.99</td>
            </tr>
            <tr>
              <td>Finish Line</td>
              <td>$129.99</td>
            </tr>
            <tr>
              <td>Eastbay</td>
              <td>$120.00</td>
            </tr>
          </tbody>
        </table>
      </section>

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
