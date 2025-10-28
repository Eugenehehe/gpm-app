export default function handler(req, res) {
  res.status(200).json({ status: 'ok', SKU: 'ABC123', Compliant: true });
}
