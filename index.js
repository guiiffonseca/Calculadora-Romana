const express = require("express");
require("dotenv").config();
const route = require("./src/routes/route");

const app = express();
const { PORT } = process.env || 3000;

app.use(express.json());
app.use(route);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
