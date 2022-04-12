exports.publicRoute = async (req, res, next) => {
  try {
    res.status(200).json({mensajito:'mensajito publico del back'});
  } catch (err) {
    next(err);
  }
};
