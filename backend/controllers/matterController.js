const pool = require("../db");

module.exports = {
  getMatters: async (req, res) => {
    try {
      const id = req.params.userId;
      const query =
        "SELECT * FROM CLIENT c JOIN MATTER m ON c.client_id = m.client_id WHERE user_id = (?)";
      const [results] = await pool.query(query, [id]);

      res.json(results);
    } catch (error) {
      console.error("GET Query Error: ", error);
    }
  },
  postUpdateStatus: async (req, res) => {
    try {
      const { clientId, clientStatus } = req.body;
      const query = "UPDATE CLIENT SET client_status = ? WHERE client_id = ?";

      await pool.query(query, [clientStatus, clientId]);
      res.json({ success: true });
    } catch (error) {
      console.error("POST Query Error: ", error);
    }
  },
};
