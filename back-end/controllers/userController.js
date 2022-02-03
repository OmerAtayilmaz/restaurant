const User = require("./../models/userModel");
const factory = require("./handlerFactory");

exports.getAllUsers = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "asddaha taninlanmadi-getAllUsers",
  });
  next();
};

//factory handler
exports.createUser = factory.createOne(User);

exports.updateUser = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "User Guncelleme tanimlanmadi",
  });
};

exports.getUserById = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    messaage: "getUserbyId tanimlanmadi",
  });
};

exports.removeUser = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "remove user tanimlanmadi",
  });
};
