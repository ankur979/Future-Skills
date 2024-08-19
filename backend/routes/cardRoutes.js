const express = require("express");
const router = express.Router();
const { getCards, getCardByTitle, newCard } = require("../controllers/card");

router.get("/", getCards);
router.post("/", newCard);
router.get("/:title", getCardByTitle);

module.exports = router;
