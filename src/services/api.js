// Simple API service with mocked async calls
export function fetchSuggestions(query) {
  const all = [
    'Nike Basketball Shoes',
    'Adidas Basketball Shoes',
    'Puma Basketball Shoes',
    'Under Armour Basketball Shoes',
    'Reebok Basketball Shoes',
    'Tatum 3 Basketball Shoes',
    'Lebron 20 Basketball Shoes'
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = all.filter((item) =>
        item.toLowerCase().includes(query.trim().toLowerCase())
      );
      resolve(filtered);
    }, 300);
  });
}

export function fetchPriceHistory(productId) {
  // Mock a 12-month price history
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const prices = [100, 110, 115, 105, 120, 125, 130, 128, 132, 129, 135, 138];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ labels: months, data: prices });
    }, 400);
  });
}


