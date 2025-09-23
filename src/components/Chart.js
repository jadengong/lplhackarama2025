// HistoricalMarketDataChart.jsx
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { fetchPriceHistory } from '../services/api';

// Registering chart components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoricalMarketDataChart = () => {
  const [labels, setLabels] = useState([]);
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    setError('');
    // mock productId for now
    fetchPriceHistory('tatum-3')
      .then((res) => {
        setLabels(res.labels);
        setSeries(res.data);
      })
      .catch(() => setError('Failed to load price history'))
      .finally(() => setIsLoading(false));
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: 'Price ($)',
        data: series,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true, // Make the area under the line shaded
        tension: 0.1, // Smooth curve
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Price History (Last 12 Months)',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Price ($)',
        },
        min: 0,
      },
    },
  };

  if (isLoading) {
    return <div className="chart-container">Loading chart...</div>;
  }
  if (error) {
    return <div className="chart-container">{error}</div>;
  }
  if (!labels.length || !series.length) {
    return <div className="chart-container">No data</div>;
  }
  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default HistoricalMarketDataChart;
