var express = require('express');
var router = express.Router();

var productsCtrl = require('../modules/productsCtrl');

router.get('/products', productsCtrl.getProducts);
router.get('/products/:id', productsCtrl.getProduct);
router.put('/product', productsCtrl.createProduct);router.post('/product', productsCtrl.updateProduct);
router.delete('/product/:id', productsCtrl.deleteProduct);

module.exports = router;
