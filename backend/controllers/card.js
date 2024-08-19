const Card = require("../modals/card");

const newCard = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    return res.status(400).json({
      success: false,
      message: "Title and description are required",
    });
  }

  try {
    const newCard = new Card({ title, description });
    await newCard.save();
    res.status(201).json({
      success: true,
      message: "Card saved successfully.",
      newCard,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating card",
    });
  }
};

const getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.json({
      success: true,
      message: "Cards successfully fetched.",
      cards,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching cards",
    });
  }
};

const getCardByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }
    res.json({
      success: true,
      message: "Card successfully fetched",
      card,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching the card",
    });
  }
};

module.exports = {
  newCard,
  getCards,
  getCardByTitle,
};
