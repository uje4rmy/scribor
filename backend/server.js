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

app.use("/api", matterRoutes);
app.use("/api", paymentRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Listening error.");
  } else {
    console.log("Listening on port: " + PORT);
  }
});
