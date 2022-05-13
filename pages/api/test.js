const db = require("../../db");

export default function handler(req, res) {
  const { limit = 10, page = 1, random = 0 } = req.query;
  const sql = `Select * From (Select Row_Number() Over (Order By id) As number, * From (SELECT * FROM "product" LEFT JOIN (SELECT product_id, "[" || GROUP_CONCAT('{"star": ' || rating || ', "description":"' || desc ||'"}') || "]" AS reviews FROM product_rating GROUP BY product_id) pr ON pr.product_id = product.id) ${
    random != 0
      ? "ORDER BY random())"
      : `) Where number > ${(page - 1) * limit} and number <= ${page * limit}`
  } LIMIT ${limit}`;

  db.all(sql, [], (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    const data = result.map((e) => ({ ...e, reviews: JSON.parse(e.reviews) }));
    return res.json({
      result: data,
    });
  });
}
