require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const PORT = process.env.PORT || 8081;

const matterRoutes = require("./routes/matterRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();

const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
      .map((o) => o.trim())
      .filter(Boolean)
  : ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);
app.use(helmet());
app.use(express.json({ limit: "100kb" }));

app.use("/api", matterRoutes);
app.use("/api", paymentRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found." });
});

// Auth error handler
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      message: "Invalid or missing token",
    });
  }
  res.status(500).json({ message: "Internal server error." });
});

app.listen(PORT, (err) => {
  if (err) {
    console.log("Listening error.");
  } else {
    console.log("Listening on port: " + PORT);
  }
});
