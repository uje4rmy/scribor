const pool = require("../db");
const loadQuery = require("../utils/loadQuery");
const generateId = require("../utils/generateId");

module.exports = {
  getPayments: async (req, res) => {
    try {
      const client_id = req.params.clientId;
      const query =
        "SELECT * FROM PAYMENT WHERE client_id = (?) ORDER BY payment_date ASC";

      const [results] = await pool.query(query, [client_id]);

      res.json(results);
    } catch (error) {
      console.error("GET Query Error: ", error);
    }
  },
  postPayment: async (req, res) => {
    try {
      const connection = await pool.getConnection();
      const newPaymentId = generateId("pay");
      const data = {
        ...req.body,
        payment_id: newPaymentId,
      };

      await connection.query("INSERT INTO PAYMENT SET ?", [data]);

      res.json({ ...data });
    } catch (error) {
      console.error("POST Query Error: ", error);
    }
  },
};
