const { registerModel, findEmailModel } = require("../model/registerModel");
const {
  validateEmail,
  validatePassword,
  allFieldsFilled,
} = require("../utils/validateNewRegister");
const { generateToken } = require("./jwtService");

const registerService = async (data) => {
  const { name, email, password } = data;

  allFieldsFilled(name, email, password);
  validateEmail(email);
  validatePassword(password);

  await registerModel(data);
  return data;
};

const findUserService = async (data) => {
  const { email: myemail } = data;
  const findEmail = await findEmailModel(myemail);
  const { _id, name, email } = findEmail;

  const token = generateToken(_id, name, email);
  return token;
};

module.exports = { registerService, findUserService };
