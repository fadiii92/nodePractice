const path = require('path');

const express = require('express');

const productsFunc = require('../controllers/products')

const router = express.Router();


// /admin/add-product => GET
router.get('/add-product', productsFunc.addProductPage);

// /admin/add-product => POST
router.post('/add-product', productsFunc.postProduct);

module.exports = router