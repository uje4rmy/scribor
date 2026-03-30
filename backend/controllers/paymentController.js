const pool = require("../db");
const { generateId, errorRes } = require("../utils/utils");

module.exports = {
  getPayments: async (req, res) => {
    try {
      const sub = req.auth?.sub;
      if (!sub) {
        return errorRes(res, 401, "Unauthorized access.");
      }
      const userId = sub.split("|")[1];
      const client_id = req.params.clientId;

      const query =
        "SELECT p.*, c.user_id FROM PAYMENT p JOIN CLIENT c ON p.client_id = c.client_id WHERE p.client_id = (?) AND c.user_id = (?) ORDER BY payment_date ASC";
      const [results] = await pool.query(query, [client_id, userId]);

      res.status(200).json(results);
    } catch (error) {
      return errorRes(res, 500, "Failed to get payments.");
    }
  },
  postPayment: async (req, res) => {
    const connection = await pool.getConnection();
    try {
      const sub = req.auth?.sub;
      if (!sub) {
        return errorRes(res, 401, "Unauthorized access.");
      }
      const userId = sub.split("|")[1];

      const [client] = await connection.query(
        "SELECT user_id FROM CLIENT WHERE client_id = (?)",
        [req.params.clientId],
      );
      if (!client.length || client[0].user_id !== userId) {
        return errorRes(res, 403, "Unauthorized access.");
      }

      // Whitelisted fields
      const {
        payment_date,
        payment_amount,
        payment_currency,
        payment_paidby,
        payment_payer_name,
        payment_destination,
        payment_method,
        payment_status,
        payment_ref,
        payment_flag,
        payment_reason,
      } = req.body;

      const newPaymentId = generateId("pay");
      const data = {
        payment_date,
        payment_amount,
        payment_currency,
        payment_paidby,
        payment_payer_name,
        payment_destination,
        payment_method,
        payment_status,
        payment_ref,
        payment_flag,
        payment_reason,
        client_id: req.params.clientId,
        payment_id: newPaymentId,
      };

      await connection.query("INSERT INTO PAYMENT SET ?", [data]);

      res.status(200).json({ ...data });
    } catch (error) {
      return errorRes(res, 500, "Failed to insert payments.");
    } finally {
      connection.release();
    }
  },
};
