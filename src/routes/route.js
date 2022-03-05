const express = require("express");
const { registerController } = require("../controller/registerController");
const route = express.Router();

route.post('/register', registerController)

module.exports = route;
