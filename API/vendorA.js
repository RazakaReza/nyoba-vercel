module.exports = (req, res) => {
  const dataVendorA =  [
  {
    kd_produk: "A001",
    nm_brg: "Kopi Bubuk 100g",
    hrg: "15000",
    ket_stok: "ada",
  },
  {
    kd_produk: "A002",
    nm_brg: "Gula Merah",
    hrg: "12500",
    ket_stok: "habis",
  },
  {
    kd_produk: "A003",
    nm_brg: "Gula Pasir 1kg",
    hrg: "3000",
    ket_stok: "ada",
  },
  {
    kd_produk: "A004",
    nm_brg: "Tepung 1kg",
    hrg: "5000",
    ket_stok: "habis",
  },
  {
    kd_produk: "A005",
    nm_brg: "Rokok Gajah Baru",
    hrg: "18000",
    ket_stok: "ada",
  },
];

  // Mengirimkan respons HTTP 200 (OK) dengan data JSON
  res.status(200).json(dataVendorA);
};