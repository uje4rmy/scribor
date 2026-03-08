const express = require("express");
const router = express.Router();
const matterController = require("../controllers/matterController");

router.get("/matters/:userId", matterController.getMatters);
router.get(
  "/matters/client-profile/:userId",
  matterController.getClientProfile,
);

router.post("/matters/update-status", matterController.postUpdateStatus);

module.exports = router;
