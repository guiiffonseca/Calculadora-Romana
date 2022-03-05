const express = require("express");
const errorMiddleware = require("./src/middlewares/errorMiddleware");
require("dotenv").config();
const route = require("./src/routes/route");

const app = express();
const { PORT } = process.env || 3000;

app.use(express.json());
app.use(route);
app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Listening on Port ${PORT}`));
