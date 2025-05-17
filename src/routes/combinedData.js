const express = require('express');
const router = express.Router();
const Employee = require('../models/employee.models');
const Product = require('../models/product.model');

router.get('/combined-data', async (req, res) => {
  try {
    const employees = await Employee.find();
    const products = await Product.find();

    res.json({
      employees,
      products
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch data', details: err.message });
  }
});

module.exports = router;
