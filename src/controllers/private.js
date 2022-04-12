exports.privateRoute = async (req, res, next) => {
    try {
      console.log(req.authUser)
      res.status(200).json({mensajito:'mensajito privado del back'});
    } catch (err) {
      next(err);
    }
  };
  