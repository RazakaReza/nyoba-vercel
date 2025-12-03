module.exports = (req, res) => {
  const dataVendorC = [
  {
    id: 501,
    details: { name: "Nasi Tempong", category: "Food" },
    pricing: { base_price: 20000, tax: 2000 },
    stock: 50,
  },
  {
    id: 502,
    details: { name: "Es Jeruk", category: "Drink" },
    pricing: { base_price: 8000, tax: 500 },
    stock: 0,
  },
  {
    id: 503,
    details: { name: "Ayam Geprekx", category: "Food" },
    pricing: { base_price: 10000, tax: 3000 },
    stock: 6,
  },
  {
    id: 504,
    details: { name: "Soto Betawi", category: "Food" },
    pricing: { base_price: 15000, tax: 2000 },
    stock: 16,
  },
  {
    id: 505,
    details: { name: "Es Buah", category: "Drink" },
    pricing: { base_price: 5000, tax: 1000 },
    stock: 0,
  },
];

  res.status(200).json(dataVendorC);
};