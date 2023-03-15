const express = require('express');
const routerUser = require('./user.js');
const routerProduct = require('../ROUTES/product.js');

const router = express.Router();

router.use(routerUser);
router.use(routerProduct);

module.exports = router;
