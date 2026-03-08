require("dotenv").config();
const express = require("express");
const cors = require("cors");
const matterRoutes = require("./routes/matterRoutes");
const PORT = 8081 || process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("from backend");
});

app.use("/api", matterRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Listening error.");
  } else {
    console.log("Listening on port: " + PORT);
  }
});
