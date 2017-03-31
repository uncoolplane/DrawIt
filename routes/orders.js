var express = require('express');
var router = express.Router();

var ordersCtrl = require('../modules/ordersCtrl');

router.get('/orders', ordersCtrl.getOrders);
router.get('/orders/:id', ordersCtrl.getOrder);
router.get('/customer/orders/:id', ordersCtrl.getOrdersByCustomer);
router.put('/order', ordersCtrl.createOrder);
router.post('/order', ordersCtrl.updateOrder);
router.delete('order/:id', ordersCtrl.deleteOrder);

module.exports = router;
