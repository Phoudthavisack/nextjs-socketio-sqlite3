var sqlite3 = require("sqlite3").verbose();

const DBSOURCE = "./ecommerce.db";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) return console.error(err);
  console.log("Connect to the database successfully");
});

module.exports = db;
