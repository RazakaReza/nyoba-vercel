import dataVendorA from "./vendor_a";
import dataVendorB from "./vendor_b";
import dataVendorC from "./vendor_c";

export default function handler(req, res) {
  const final = [...dataVendorA(req, res, true), ...dataVendorB(req, res, true), ...dataVendorC(req, res, true)];

  res.status(200).json(final);
}
