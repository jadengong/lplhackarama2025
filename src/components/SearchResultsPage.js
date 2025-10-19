import React from 'react';
import { useLocation } from 'react-router-dom';
import HistoricalMarketDataChart from './Chart.js'; 

const SearchResultsPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get('q');
  return (
    <div className="search-results-page bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 min-h-screen pt-28"> 
      <header className="search-results-header container py-8"> 
        <h1 className="text-3xl md:text-4xl font-semibold text-white">{q ? `Results for "${q}"` : 'Tatum 3 Basketball Shoes (FZ6598-103, White/Kinetic Green/Black)'}</h1>
      </header>

      {/* Product Description */}
      <section className="section container bg-gray-800/90 rounded-2xl shadow-xl ring-1 ring-gray-600/20 p-6 md:p-8 mb-6"> 
        <h2 className="text-2xl font-semibold text-white mb-4">Product Description</h2>
        <p className="text-gray-300"><strong className="text-white">Color:</strong> White/Black</p>
        <p className="text-gray-300"><strong className="text-white">Size:</strong> Available in multiple sizes (Men's 6-15)</p>
        <p className="text-gray-300"><strong className="text-white">Model Year:</strong> 2023</p>
        <p className="text-gray-300"><strong className="text-white">Material:</strong> Synthetic leather and mesh upper, rubber sole</p>
        <p className="text-gray-300"><strong className="text-white">Features:</strong> Kinetic energy-return technology for enhanced performance</p>
      </section>

      {/* Financial Attributes */}
      <section className="section container bg-gray-800/90 rounded-2xl shadow-xl ring-1 ring-gray-600/20 p-6 md:p-8 mb-6"> 
        <h2 className="text-2xl font-semibold text-white mb-4">Financial Attributes</h2>
        <ul className="space-y-2">
          <li className="text-gray-300"><strong className="text-white">Brand Reputation:</strong> Excellent (Nike)</li>
          <li className="text-gray-300"><strong className="text-white">Condition:</strong> New</li>
          <li className="text-gray-300"><strong className="text-white">Rarity:</strong> Regularly available</li>
          <li className="text-gray-300"><strong className="text-white">Product Reviews:</strong> 4.8 out of 5 (Based on 1,000 reviews)</li>
          <li className="text-gray-300"><strong className="text-white">Market Trends:</strong> Stable demand with a slight upward trend due to new release</li>
        </ul>
      </section>

      {/* Price Comparison */}
      <section className="section container bg-gray-800/90 rounded-2xl shadow-xl ring-1 ring-gray-600/20 p-6 md:p-8 mb-6"> 
        <h2 className="text-2xl font-semibold text-white mb-4">Price Comparison</h2>
        <table className="price-comparison-table w-full border-collapse mt-4">
          <thead>
            <tr className="bg-gray-700">
              <th scope="col" className="text-left p-4 text-white font-semibold">Platform</th>
              <th scope="col" className="text-left p-4 text-white font-semibold">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-600">
            <tr className="hover:bg-gray-700/50">
              <td className="p-4 text-gray-300">Amazon</td>
              <td className="p-4 text-gray-300">$119.99</td>
            </tr>
            <tr className="hover:bg-gray-700/50">
              <td className="p-4 text-gray-300">Foot Locker</td>
              <td className="p-4 text-gray-300">$124.99</td>
            </tr>
            <tr className="hover:bg-gray-700/50">
              <td className="p-4 text-gray-300">Finish Line</td>
              <td className="p-4 text-gray-300">$129.99</td>
            </tr>
            <tr className="hover:bg-gray-700/50">
              <td className="p-4 text-gray-300">Eastbay</td>
              <td className="p-4 text-gray-300">$120.00</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Historical Market Data */}
      <section className="section container bg-gray-800/90 rounded-2xl shadow-xl ring-1 ring-gray-600/20 p-6 md:p-8 mb-6">
        <h2 className="text-2xl font-semibold text-white mb-4">Historical Market Data</h2>
        <p className="text-gray-300 mb-4"><strong className="text-white">Price History:</strong> Showing a chart of price changes over the last 12 months.</p>

        
        <div className="chart-container">
          <HistoricalMarketDataChart /> 
        </div>
      </section>
    </div>
  );
};

export default SearchResultsPage;
