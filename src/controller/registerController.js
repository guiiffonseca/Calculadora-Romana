const {
  registerService,
  findUserService,
} = require("../service/registerService");

const registerController = async (req, res, next) => {
  try {
    await registerService(req.body);
    const token =await findUserService(req.body);

    res.status(201).json({
      message: "Registered",
      token,
    });
  } catch (error) {
    next(error);
  }
};

module.exports={ registerController };
