const pool = require("../db");
const {
  loadQuery,
  errorRes,
  allowedClientFields,
  allowedEntityFields,
  allowedMatterFields,
} = require("../utils/utils");

module.exports = {
  getMatters: async (req, res) => {
    try {
      if (!req.auth?.sub) {
        return errorRes(res, 401, "Unauthorized access.");
      }
      const auth0Id = req.auth.sub;
      const id = auth0Id.split("|")[1];

      const query =
        "SELECT c.client_id, c.user_id, c.client_fullname, m.matter_type, c.client_type, c.client_level, c.client_flagged, c.client_status FROM CLIENT c JOIN MATTER m ON c.client_id = m.client_id WHERE user_id = (?)";
      const [results] = await pool.query(query, [id]);

      return res.status(200).json(results);
    } catch (error) {
      return errorRes(res, 500, "Failed to retrieve matters.");
    }
  },
  getClientProfile: async (req, res) => {
    try {
      if (!req.auth?.sub) {
        return errorRes(res, 401, "Unauthorized access.");
      }
      const auth0Id = req.auth.sub;
      const userId = auth0Id.split("|")[1];
      const clientId = req.params.clientId;
      const query = loadQuery("getClientProfile");

      const [results] = await pool.query(query, [clientId, userId]);

      if (results.length === 0) return errorRes(res, 404, "Client not found.");

      return res.status(200).json(results);
    } catch (error) {
      return errorRes(res, 500, "Failed to retrieve client profile details.");
    }
  },
  postUpdateStatus: async (req, res) => {
    try {
      if (!req.auth?.sub) {
        return errorRes(res, 401, "Unauthorized access.");
      }
      const auth0Id = req.auth.sub;
      const userId = auth0Id.split("|")[1];

      const { clientId, clientStatus } = req.body;
      const query =
        "UPDATE CLIENT SET client_status = ? WHERE client_id = ? AND user_id = ?";

      const [result] = await pool.query(query, [
        clientStatus,
        clientId,
        userId,
      ]);

      if (result.affectedRows === 0) {
        return errorRes(res, 404, "Client not found.");
      }
      return res
        .status(200)
        .json({ success: true, message: "Client status updated" });
    } catch (error) {
      return errorRes(res, 500, "Failed to update client status.");
    }
  },
  postUpdateClientProfile: async (req, res) => {
    const connection = await pool.getConnection();

    try {
      if (!req.auth?.sub) {
        return errorRes(res, 401, "Unauthorized access.");
      }
      const userId = req.auth.sub.split("|")[1];

      const data = req.body;

      const clientTable = {};
      const matterTable = {};
      const entityTable = {};

      allowedClientFields().forEach((field) => {
        if (req.body[field] !== undefined) {
          clientTable[field] = req.body[field];
        }
      });
      allowedEntityFields().forEach((field) => {
        if (req.body[field] !== undefined) {
          entityTable[field] = req.body[field];
        }
      });
      allowedMatterFields().forEach((field) => {
        if (req.body[field] !== undefined) {
          matterTable[field] = req.body[field];
        }
      });

      const [client] = await connection.query(
        "SELECT user_id FROM CLIENT WHERE client_id = ?",
        [data.client_id],
      );
      if (!client.length || client[0].user_id !== userId) {
        return errorRes(res, 403, "Unauthorized access.");
      }

      await connection.beginTransaction();

      if (Object.keys(clientTable).length) {
        await connection.query("UPDATE CLIENT SET ? WHERE client_id = ?", [
          clientTable,
          data.client_id,
        ]);
      }

      if (Object.keys(matterTable).length) {
        await connection.query("UPDATE MATTER SET ? WHERE matter_id = ?", [
          matterTable,
          data.matter_id,
        ]);
      }

      if (Object.keys(entityTable).length) {
        await connection.query("UPDATE ENTITY SET ? WHERE entity_id = ?", [
          entityTable,
          data.entity_id,
        ]);
      }

      await connection.commit();

      res
        .status(200)
        .json({ success: true, message: "Client profile updated." });
    } catch (error) {
      await connection.rollback();
      return errorRes(res, 500, "Failed to update client profile.");
    } finally {
      connection.release();
    }
  },
};
