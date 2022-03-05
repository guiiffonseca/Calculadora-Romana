const tokenRiqueredMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) res.status(401).json({ message: "Unauthorized" });

    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports ={ tokenRiqueredMiddleware };
