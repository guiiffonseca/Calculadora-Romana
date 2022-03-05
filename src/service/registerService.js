const { registerModel } = require("../model/registerModel");

const registerService = async (data) => {
  await registerModel(data);
  return data;
};

module.exports = { registerService };
