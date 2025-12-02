const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const dataVendorA = [
  { "kd_produk": "A001", "nm_brg": "Kopi Bubuk 100g", "hrg": "15000", "ket_stok": "ada" },
  { "kd_produk": "A002", "nm_brg": "Gula Merah", "hrg": "12500", "ket_stok": "habis" }
];


app.listen(PORT, () => {
  console.log(`Server berjalan di localhost::${PORT}`);
});