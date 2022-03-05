const connection = require("./connection");

const registerModel = async (data) => {
  const { name, email, password } = data;

  const conn = await connection();
  const newRegister = conn.collection("users").insertOne({
    name,
    email,
    password,
  });

  return newRegister;
};

module.exports={ registerModel };
