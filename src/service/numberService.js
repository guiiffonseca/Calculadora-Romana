const { numberModel, getNumbersModel } = require("../model/numberModel");

const numberService = async (data) => {
  await numberModel(data);
  const getNumbers = await getNumbersModel(data);
  const { numbers } = getNumbers;

  return numbers;
};

module.exports = { numberService };
