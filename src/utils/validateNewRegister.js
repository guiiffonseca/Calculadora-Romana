const { handleErr } = require("./handleError");
const errors = require("./dictionary");

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const allFieldsFilled = (name, email, password) => {
  if (name.length === 0 || email.length === 0 || password.length === 0) {
    throw handleErr(errors.BAD_REQUEST, "All fields are required");
  }
};

const validateEmail = (email) => {
  if (!email.match(regexEmail)) {
    throw handleErr(errors.BAD_REQUEST, "You must inert a valid email");
  }
};

const validatePassword = (password) => {
  if (password.length < 6) {
    throw handleErr(errors.BAD_REQUEST,
        "Password must have at least 6 characters");
  }
};

module.exports = {
  validateEmail,
  allFieldsFilled,
  validatePassword,
};
