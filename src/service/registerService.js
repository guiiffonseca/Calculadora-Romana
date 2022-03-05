const { registerModel, findEmailModel } = require("../model/registerModel");
const {
  validateEmail,
  validatePassword,
  allFieldsFilled,
  emailExists,
} = require("../utils/validateNewRegister");

const registerService = async (data) => {
  const { name, email, password } = data;
  const findEmail = await findEmailModel(email);

  allFieldsFilled(name, email, password);
  emailExists(findEmail);
  validateEmail(email);
  validatePassword(password);

  await registerModel(data);
  return data;
};

module.exports = { registerService };
