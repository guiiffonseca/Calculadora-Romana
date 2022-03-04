const express = require("express");
require("dotenv").config();

const app = express();
const { PORT } = process.env || 3000;

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
