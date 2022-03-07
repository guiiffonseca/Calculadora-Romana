const { handleErr } = require("./handleError");
const errors = require("./dictionary");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allFieldsFilled = (name, email, password) => {
  if (name.length === 0 || email.length === 0 || password.length === 0) {
    throw handleErr(errors.BAD_REQUEST, errors.FIELDS_REQUIRED);
  }
};

const validateEmail = (email) => {
  if (!email.match(regexEmail)) {
    throw handleErr(errors.BAD_REQUEST, errors.INVALID_EMAIL);
  }
};

const validatePassword = (password) => {
  if (password.length < 6) {
    throw handleErr(errors.BAD_REQUEST, errors.PASSWORD_LENGTH);
  }
};

module.exports = {
  validateEmail,
  allFieldsFilled,
  validatePassword,
};
