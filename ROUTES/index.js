const express = require('express');
const routerUser = require('../ROUTES/user.js');
const routerAuth = require('../ROUTES/auth.js');
const routerProduct = require('../ROUTES/product.js');

const router = express.Router();

router.use(routerUser);
router.use(routerAuth);
router.use(routerProduct);

module.exports = router;
