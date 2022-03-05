const { numberModel, getNumbersModel } = require("../model/numberModel");
const { sumNumbers, subNumbers } = require("../utils/calculateNumbers");

const numberService = async (data) => {
  await numberModel(data);
  const getNumbers = await getNumbersModel(data);

  const { numbers } = getNumbers;
  const sum = sumNumbers(numbers);
  const sub = subNumbers(numbers);


  return numbers;
};

module.exports = { numberService };
