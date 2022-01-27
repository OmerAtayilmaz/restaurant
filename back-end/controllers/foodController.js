const Food = require("./../models/foodModel");

exports.getAllFoods = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "daha taninlanmadi",
  });
  next();
};

exports.getFoodById = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "daha taninlanmadi-getFoodbyId",
  });
  next();
};
