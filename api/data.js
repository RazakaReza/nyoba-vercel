import vendorA from "./vendor_a.js";

export default function handler(req, res) {
  const final = [
    ...vendorA(req, res, true),
    ...vendorB(req, res, true),
    ...vendorC(req, res, true)
  ];
  res.status(200).json(final);
}