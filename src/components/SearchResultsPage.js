import React from 'react';
import { useLocation } from 'react-router-dom';
import HistoricalMarketDataChart from './Chart.js'; 

const SearchResultsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get('q');
  return (
    <div className="search-results-page bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 min-h-screen pt-28"> 
      <header className="search-results-header container py-8"> 
        <h1 className="text-3xl md:text-4xl font-semibold">{q ? `Results for "${q}"` : 'Tatum 3 Basketball Shoes (FZ6598-103, White/Kinetic Green/Black)'}</h1>
      </header>

      {/* Product Description */}
      <section className="section container bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5"> 
        <h2>Product Description</h2>
        <p><strong>Color:</strong> White/Black</p>
        <p><strong>Size:</strong> Available in multiple sizes (Men's 6-15)</p>
        <p><strong>Model Year:</strong> 2023</p>
        <p><strong>Material:</strong> Synthetic leather and mesh upper, rubber sole</p>
        <p><strong>Features:</strong> Kinetic energy-return technology for enhanced performance</p>
      </section>

      {/* Financial Attributes */}
      <section className="section container bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5"> 
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
      <section className="section container bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5"> 
        <h2>Price Comparison</h2>
        <table className="price-comparison-table w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th scope="col" className="text-left p-4 text-gray-700 font-semibold">Platform</th>
              <th scope="col" className="text-left p-4 text-gray-700 font-semibold">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="hover:bg-gray-50">
              <td className="p-4 text-gray-700">Amazon</td>
              <td className="p-4 text-gray-700">$119.99</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 text-gray-700">Foot Locker</td>
              <td className="p-4 text-gray-700">$124.99</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 text-gray-700">Finish Line</td>
              <td className="p-4 text-gray-700">$129.99</td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="p-4 text-gray-700">Eastbay</td>
              <td className="p-4 text-gray-700">$120.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Historical Market Data */}
      <section className="section container bg-white/90 rounded-2xl shadow-xl ring-1 ring-black/5">
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
