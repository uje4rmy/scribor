require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");
const matterRoutes = require("./routes/matterRoutes");
const PORT = 8081 || process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  return res.json("from backend");
});

app.use("/api/matters", matterRoutes);

connectDB()
  .then((connection) => {
    app.listen(PORT, () => {
      console.log("Listening on port: " + PORT);
    });
  })
  .catch((err) => {
    console.error("Error initializing database connection: ", err);
  });
