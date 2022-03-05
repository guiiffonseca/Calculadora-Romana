module.exports = (er, _req, res, _next) => {
  const { message: { err } } = er;

  if (er.status) return res.status(er.status).json({ err });

  return res.status(500).json({ message: "Internal Server Error" });
};
