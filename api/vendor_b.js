module.exports = (req, res) => {
  const dataVendorB = [
  {
    sku: "TSHIRT-001",
    productName: "Kaos Ijen Crater",
    price: 75000,
    isAvailable: true,
  },
  {
    sku: "HOODIE-005",
    productName: "Hoodie Kawah Wurung",
    price: 150000,
    isAvailable: false,
  },
  { sku: "CAP-002", productName: "Topi Gunung Bromo", price: 50000, isAvailable: true },
  {
    sku: "JACKET-003",
    productName: "Jaket Ranu Kumbolo",
    price: 200000,
    isAvailable: true,
  },
  {
    sku: "BACKPACK-004",
    productName: "Tas Pendakian Semeru",
    price: 300000,
    isAvailable: false,
  },
];

  res.status(200).json(dataVendorB);
};
