const express = require("express");
const router = express.Router();
const { createResponse } = require("../controllers/responseControllers");

router.post("/create", createResponse);

module.exports = router;
