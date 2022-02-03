const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    if (!doc)
      return next(
        new AppError("Couldn't create document please try again", 400)
      );
    res.status(200).json({
      status: "success",
      data: {
        tour: doc,
      },
    });
  });
exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    //code here
  });
exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    //code here
  });
exports.getOne = (Model) =>
  catchAsync(async (req, res, next) => {
    //code here
  });
exports.createFood = catchAsync(async (req, res, next) => {});
