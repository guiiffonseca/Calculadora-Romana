const connection = require("./connection");

const numberModel = async (data) => {
  const conn = await connection();
  const query = await conn.collection("numbers").insertOne( data );

  return query;
};

const getNumbersModel = async (data) => {
  const conn = await connection();
  const query = await conn.collection("numbers").findOne(data);

  return query;
};

module.exports = { numberModel, getNumbersModel };
