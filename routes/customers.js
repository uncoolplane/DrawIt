var express = require('express');
var router = express.Router();

var customersCtrl = require('../modules/customersCtrl');

router.get('/customers', customersCtrl.getCustomers);
router.get('/customers/:id', customersCtrl.getCustomer);
router.put('/customer', customersCtrl.createCustomer);
router.post('/customer', customersCtrl.updateCustomer);
router.delete('/customer/:id', customersCtrl.deleteCustomer);

module.exports = router;
