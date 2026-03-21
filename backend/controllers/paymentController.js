const pool = require("../db");
const { generateId, errorRes } = require("../utils/utils");

module.exports = {
  getPayments: async (req, res) => {
    try {
      const client_id = req.params.clientId;
      const query =
        "SELECT * FROM PAYMENT WHERE client_id = (?) ORDER BY payment_date ASC";

      const [results] = await pool.query(query, [client_id]);

      res.status(200).json(results);
    } catch (error) {
      return errorRes(res, 500, "Failed to get payments.");
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

      res.status(200).json({ ...data });
    } catch (error) {
      return errorRes(res, 500, "Failed to insert payments.");
    }
  },
};
