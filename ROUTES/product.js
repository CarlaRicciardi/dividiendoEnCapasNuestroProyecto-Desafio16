const express = require('express');
const routerProduct = express.Router();
const {getAllProductsController, getProductByIdController, postProductController, putProductController, deleteProductByIdController} = require('../CONTROLLER/product.js');

routerProduct.get('/products', getAllProductsController);
routerProduct.get('/products/:id', getProductByIdController);
routerProduct.post('/products', postProductController);
routerProduct.put('/products/:id', putProductController);
routerProduct.delete('/products/:id', deleteProductByIdController);



module.exports = routerProduct;
