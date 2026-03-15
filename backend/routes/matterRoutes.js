const express = require("express");
const router = express.Router();
const matterController = require("../controllers/matterController");
const jwtCheck = require("../middleware/auth");

router.get("/matters/", jwtCheck, matterController.getMatters);
router.get(
  "/matters/client-profile/:clientId",
  jwtCheck,
  matterController.getClientProfile,
);

router.put(
  "/matters/update-status",
  jwtCheck,
  matterController.postUpdateStatus,
);
router.put(
  "/matters/update-client-profile",
  jwtCheck,
  matterController.postUpdateClientProfile,
);

module.exports = router;
