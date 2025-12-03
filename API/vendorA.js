module.exports = (req, res) => {
  const dataVendorA = [
    { 
      "kd_produk": "A001", 
      "nm_brg": "Kopi Bubuk 100g", 
      "hrg": "15000", 
      "ket_stok": "ada" 
    },
    { 
      "kd_produk": "A002", 
      "nm_brg": "Gula Merah", 
      "hrg": "12500", 
      "ket_stok": "habis" 
    }
  ];

  // Mengirimkan respons HTTP 200 (OK) dengan data JSON
  res.status(200).json(dataVendorA);
};