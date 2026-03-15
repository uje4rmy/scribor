require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = 8081 || process.env.PORT;

const matterRoutes = require("./routes/matterRoutes");
const paymentRoutes = require("./routes/paymentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("from backend");
});

// Auth error handler
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    return res.status(401).json({
      message: "Invalid or missing token",
    });
  }
});

app.use("/api", matterRoutes);
app.use("/api", paymentRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Listening error.");
  } else {
    console.log("Listening on port: " + PORT);
  }
});
