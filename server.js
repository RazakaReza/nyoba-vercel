const express = require ('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const dataVendorA = [
  { "kd_produk": "A001", "nm_brg": "Kopi Bubuk 100g", "hrg": "15000", "ket_stok": "ada" },
  { "kd_produk": "A002", "nm_brg": "Gula Merah", "hrg": "12500", "ket_stok": "habis" },
  {"kd_produk": "A003", "nm_brg": "Gula Pasir 1kg", "hrg": "3000", "ket_stok": "ada"},
  {"kd_produk": "A004", "nm_brg": "Tepung 1kg", "hrg": "5000", "ket_stok": "habis"},
  {"kd_produk": "A005", "nm_brg": "Rokok Gajah Baru", "hrg": "18000", "ket_stok": "ada"}
];

const dataVendorB = [
  { "sku": "TSHIRT-001", "productName": "Kaos Ijen Crater", "price": 75000, "isAvailable": true },
  { "sku": "HOODIE-005", "productName": "Hoodie Kawah Wurung", "price": 150000, "isAvailable":false},
  { "sku": "CAP-002", "productName": "Topi Gunung Bromo", "price": 50000, "isAvailable": true },
  { "sku": "JACKET-003", "productName": "Jaket Ranu Kumbolo", "price": 200000, "isAvailable": true },
  { "sku": "BACKPACK-004", "productName": "Tas Pendakian Semeru", "price": 300000, "isAvailable": false }
];

const dataVendorC = [
  {
    "id": 501,
    "details": { "name": "Nasi Tempong", "category": "Food" },
    "pricing": { "base_price": 20000, "tax": 2000 },
    "stock": 50
  },
  {
    "id": 502,
    "details": { "name": "Es Jeruk", "category": "Drink" },
    "pricing": { "base_price": 8000, "tax": 500 },
    "stock": 0
  }
];


app.listen(PORT, () => {
  console.log(`Server berjalan di localhost::${PORT}`);
});