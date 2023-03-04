const express = require("express");
const { getData, addData } = require("../models/userModel");

const router = express.Router();

router.get("/data", (req, res) => {
  getData((data) => {
    res.json(data);
  });
});

router.post("/data", (req, res) => {
  const data = {
    nama: req.body.nama,
    stack: req.body.stack,
  };

  addData(data, (result) => {
    res.json({ message: "Data added successfully!", id: result.insertId });
  });
});

module.exports = router;
