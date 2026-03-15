const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const jwtCheck = require("../middleware/auth");

router.get("/payments/:clientId", jwtCheck, paymentController.getPayments);
router.post("/payments", jwtCheck, paymentController.postPayment);

module.exports = router;
