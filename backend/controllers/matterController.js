const { connectDB } = require("../db");

module.exports = {
  getMatters: async (req, res) => {
    const id = req.params.userId;
    const connection = await connectDB();
    const query =
      "SELECT * FROM CLIENT c JOIN MATTER m ON c.client_id = m.client_id WHERE user_id = (?)";
    const [results] = await connection.query(query, [id]);

    res.json(results);
  },
};
