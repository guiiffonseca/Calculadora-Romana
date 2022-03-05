const { generateToken } = require("../service/jwtService");

const authUser = (data) => {
  generateToken(data);
};

module.exports={ authUser };
