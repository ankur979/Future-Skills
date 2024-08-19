const express = require("express");
const router = express.Router();
const cardRoutes = require('./cardRoutes')

router.use("/cards", cardRoutes);

module.exports = router;