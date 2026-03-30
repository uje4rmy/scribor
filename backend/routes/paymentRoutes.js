const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");
const jwtCheck = require("../middleware/auth");
const { postPaymentLimiter } = require("../middleware/rateLimiter");

router.get("/payments/:clientId", jwtCheck, paymentController.getPayments);
router.post(
  "/payments/:clientId",
  jwtCheck,
  postPaymentLimiter,
  paymentController.postPayment,
);

module.exports = router;
