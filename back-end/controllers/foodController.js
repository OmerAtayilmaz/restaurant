const Food = require("./../models/foodModel");

exports.getAllFoods = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "daha taninlanmadi-getAllFoods",
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

exports.createFood = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "daha taninlanmadi-create",
  });
  next();
};
exports.updateFoodById = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "daha taninlanmadi-updateFoodById",
  });
  next();
};
exports.deletFoodById = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "daha taninlanmadi-deleteFoodbyId",
  });
  next();
};
