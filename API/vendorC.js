module.exports = (req, res) => {
  const dataVendorC = [
    {
      "id": 501,
      "details": { 
        "name": "Nasi Tempong", 
        "category": "Food" 
      },
      "pricing": { 
        "base_price": 20000, 
        "tax": 2000 
      },
      "stock": 50
    },
    {
      "id": 502,
      "details": { 
        "name": "Es Jeruk", 
        "category": "Drink" 
      },
      "pricing": { 
        "base_price": 8000, 
        "tax": 500 
      },
      "stock": 0
    }
  ];

  res.status(200).json(dataVendorC);
};