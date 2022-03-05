const sumNumbers = (numbers) => {
  return numbers.reduce((prev, curr) => prev + curr);
};

const subNumbers = (numbers) => {
  return numbers.reduce((prev, curr) => prev - curr);
};

module.exports={
  sumNumbers,
  subNumbers,
};
