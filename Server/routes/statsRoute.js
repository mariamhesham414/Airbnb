const express = require("express");
const router = express.Router();
const statsController = require("../controlleres/statsController");

router.get("/", statsController.getAllStats);

module.exports = router;
