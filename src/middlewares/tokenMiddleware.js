const tokenRiqueredMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      res.status(401).status({ messege: "Unauthorized" });
    }
  } catch (error) {

  }
};

module.exports ={ tokenRiqueredMiddleware };
