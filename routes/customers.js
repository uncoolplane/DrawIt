var express = require('express');
var router = express.Router();

var customersCtrl = require('../modules/customersCtrl');

router.get('/customers', customersCtrl.getProducts);
router.get('/customers/:id', customersCtrl.getProduct);
router.put('/customer', customersCtrl.createProduct);
router.post('/customer', customersCtrl.updateProduct);
router.delete('/customer/:id', customersCtrl.deleteProduct);

module.exports = router;
