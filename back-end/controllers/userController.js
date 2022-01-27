const User = require("./../models/userModel");
exports.getAllUsers = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "asddaha taninlanmadi-getAllUsers",
  });
  next();
};
exports.createUser = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "User olusturma tanimlanmadi",
  });
};

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
