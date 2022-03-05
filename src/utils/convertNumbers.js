const convert = require("lab-roman-int-converter");

const convertResultsIntoRoman = (numbers) => {
  const convertedNumbers = convert.intToRoman(numbers);
  return convertedNumbers.replace("Resultado:", "");
};

const convertSumArrayIntoRoman = (array) => {
  const convertedArray = array.map((el) => convert.intToRoman(el));

  const removeResultadoFromEachItem = convertedArray.map((el) =>
    el.replace("Resultado:", ""));

  const sumEquation = removeResultadoFromEachItem.map((el) => el + " +");

  return sumEquation;
};

const convertSubArrayIntoRoman = (array) => {
  const convertedArray = array.map((el) => convert.intToRoman(el));

  const removeResultadoFromEachItem = convertedArray.map((el) =>
    el.replace("Resultado:", ""));

  const subEquation = removeResultadoFromEachItem.map((el) => el + " -");

  return subEquation;
};


module.exports={
  convertResultsIntoRoman,
  convertSumArrayIntoRoman,
  convertSubArrayIntoRoman,
};
