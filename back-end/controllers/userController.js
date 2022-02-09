const User = require("./../models/userModel");
const factory = require("./handlerFactory");
const AppError = require("./../utils/appError");
const catchAsync = require("./../utils/catchAsync");
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  if (!users[0]) return next(new AppError("There is no user!", 404));
  res.status(200).json({
    status: "success",
    users: {
      users,
    },
  });
});

exports.updateMe = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "User Guncelleme tanimlanmadi",
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
