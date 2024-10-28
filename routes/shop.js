const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const productsFunc = require('../controlers/products')

const router = express.Router();

router.get('/', productsFunc.homePage);

module.exports = router;
