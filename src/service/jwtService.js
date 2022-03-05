const jwt = require("jsonwebtoken");

const JWT_SECRET = "UAISDHIUAQ989UEJ";

const JWT_CONFIG = {
  expiresIn: 3600,
  algorithm: "HS256",
};

const generateToken = (id, name, email) => {
  return jwt.sign({ id, name, email }, JWT_SECRET, JWT_CONFIG);
};

module.exports={ generateToken };
