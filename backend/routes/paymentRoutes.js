const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/payments/:clientId", paymentController.getPayments);
router.post("/payments", paymentController.postPayment);

module.exports = router;
