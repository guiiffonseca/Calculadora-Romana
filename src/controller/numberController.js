const { numberService } = require("../service/numberService");

const numbersController = async ( req, res, next) => {
  try {
    const result = await numberService(req.body);

    return res.status(200).json(result);
  } catch (error) {
    next(error);
    console.log(error);
  }
};

module.exports = { numbersController };
