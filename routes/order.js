const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');


router.get('/get-orders-by-status', orderController.getOrdersByStatus);
router.post('/accept-request', orderController.acceptRequest);
router.post('/generate-invoice', orderController.generateInvoice);

module.exports = router;