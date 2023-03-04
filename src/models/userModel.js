const db = require("../MySQL/db");

const getData = (cb) => {
  db.query("SELECT * FROM kandidat", (error, result) => {
    if (error) throw error;
    cb(result);
  });
};

const addData = (data, cb) => {
  db.query("INSERT INTO kandidat SET ?", data, (error, result) => {
    if (error) throw error;
    cb(result);
  });
};

module.exports = {
  getData,
  addData,
};
