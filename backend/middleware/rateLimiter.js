const createRateLimiter = require("./upstash");

const apiLimiter = createRateLimiter(60, "1 m");
const putProfileLimiter = createRateLimiter(
  15,
  "1 m",
  "Too many profile updates, please try again later.",
);
const postPaymentLimiter = createRateLimiter(
  10,
  "1 m",
  "Too many payment requests, please try again later.",
);

module.exports = { apiLimiter, putProfileLimiter, postPaymentLimiter };
