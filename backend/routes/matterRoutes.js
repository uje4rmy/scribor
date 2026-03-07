const express = require("express");
const router = express.Router();
const matterController = require("../controllers/matterController");

router.get("/:userId", matterController.getMatters);

module.exports = router;
