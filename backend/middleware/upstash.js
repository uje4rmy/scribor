require("dotenv").config();
const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

function createRateLimiter(maxRequests, window, message) {
  const rateLimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(maxRequests, window),
  });

  return async (req, res, next) => {
    try {
      const identifier = req.auth?.sub
        ? req.auth.sub.split("|")[1]
        : req.ip || req.connection.remoteAddress;

      const { success } = await rateLimit.limit(identifier);
      if (!success) {
        return res.status(429).json({
          message: message || "Too many requests, please try again later.",
        });
      }
      next();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = createRateLimiter;
