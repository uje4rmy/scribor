const pool = require("../db");
const { ulid } = require("ulid");

function generateId(prefix) {
  return `${prefix}_${ulid()}`;
}

module.exports = {
  getMatters: async (req, res) => {
    try {
      const id = req.params.userId;
      const query =
        "SELECT c.client_id, c.user_id, c.client_fullname, m.matter_type, c.client_type, c.client_level, c.client_flagged, c.client_status FROM CLIENT c JOIN MATTER m ON c.client_id = m.client_id WHERE user_id = (?)";
      const [results] = await pool.query(query, [id]);

      res.json(results);
    } catch (error) {
      console.error("GET Query Error: ", error);
    }
  },
  getClientProfile: async (req, res) => {
    try {
      const id = req.params.userId;
      const query =
        "SELECT * FROM CLIENT c JOIN MATTER m ON c.client_id = m.client_id JOIN ENTITY e ON c.client_id = e.client_id WHERE user_id = (?)";
      const [results] = await pool.query(query, [id]);

      const formattedDob = results[0].client_dob.toISOString().slice(0, 10);
      results[0].client_dob = formattedDob;

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
