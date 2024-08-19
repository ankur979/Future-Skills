const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/database.js");
const routes = require("./routes/index.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
connectToDatabase();

app.get("/ping", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
