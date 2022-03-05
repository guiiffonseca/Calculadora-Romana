const express = require("express");
const { numbersController } = require("../controller/numberController");
const { registerController } = require("../controller/registerController");
const { tokenRiqueredMiddleware } = require("../middlewares/tokenMiddleware");
const route = express.Router();

route.post("/register", registerController);
route.post("/calculator", tokenRiqueredMiddleware, numbersController );

module.exports = route;
