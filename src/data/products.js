import db from './db.json'; // path relative to api/

export default function handler(req, res) {
  res.status(200).json(db.products);
}
