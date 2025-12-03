module.exports = (req, res) => {
  const dataVendorB = [
    { 
      "sku": "TSHIRT-001", 
      "productName": "Kaos Ijen Crater", 
      "price": 75000, 
      "isAvailable": true 
    },
    { 
      "sku": "HOODIE-005", 
      "productName": "Hoodie Kawah Wurung", 
      "price": 150000, 
      "isAvailable": false 
    }
  ];

  res.status(200).json(dataVendorB);
};