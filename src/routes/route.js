const express = require("express");
const { registerController } = require("../controller/registerController");
const route = express.Router();
// const errorMiddleware = require("../middlewares/errorMiddleware");

route.post("/register", registerController);
// route.use(errorMiddleware);

module.exports = route;
