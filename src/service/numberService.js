const { numberModel, getNumbersModel } = require("../model/numberModel");
const { sumNumbers, subNumbers } = require("../utils/calculateNumbers");
const {
  convertSumArrayIntoRoman,
  convertResultsIntoRoman,
  convertSubArrayIntoRoman,
} = require("../utils/convertNumbers");

const numberService = async (data) => {
  await numberModel(data);
  const getNumbers = await getNumbersModel(data);

  const { numbers } = getNumbers;
  const sum = sumNumbers(numbers);
  const sub = subNumbers(numbers);

  const sumEquation = convertSumArrayIntoRoman(numbers);
  const sumResult = convertResultsIntoRoman(sum);
  const subEquation = convertSubArrayIntoRoman(numbers);
  const subResult = convertResultsIntoRoman(sub);

  return {
    sumEquation,
    sumResult,
    subEquation,
    subResult,
  };
};

module.exports = { numberService };
