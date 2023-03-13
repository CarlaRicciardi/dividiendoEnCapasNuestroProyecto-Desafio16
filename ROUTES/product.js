const express = require('express');
const routerProduct = express.Router();
const {getAllProductsController} = require('../CONTROLLER/product.js');

routerProduct.get('/products', getAllProductsController);

module.exports = routerProduct;
