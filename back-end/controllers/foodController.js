const Food = require("./../models/foodModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.aliasTopFoods = (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: "daha taninlanmadi-getAllFoods",
  });
  next();
};
exports.getFoodStats = catchAsync(async (req, res, next) => {
  const stats = await Food.aggregate([
    {
      $match: { price: { $gte: 0 } },
    },
    {
      $group: {
        _id: { $toUpper: "$foodType" },
        avgPrice: { $avg: "$price" },
        numFoods: { $sum: 1 },
        minPrice: { $min: "$price" },
        maxPrice: { $max: "$price" },
      },
    },
    {
      $sort: {
        avgPrice: 1, //1:ascending
      },
    },
  ]);
  res.status(200).json({
    status: "success",
    message: stats,
  });
});
exports.getAllFoods = catchAsync(async (req, res, next) => {
  const foods = await Food.find();
  res.status(200).json({
    status: "success",
    data: foods,
  });
  next();
});
exports.getFood = catchAsync(async (req, res, next) => {
  const id = req.params.id;
  const food = await Food.findOne({ _id: id });
  if (!food)
    return next(new AppError("No food with that id, please try again", 404));
  res.status(200).json({
    status: "success",
    data: food,
  });
});
exports.getFoodByFeature = catchAsync(async (req, res, next) => {
  const food = await Food.find({ ...req.query });
  if (!food[0])
    return next(new AppError("There is no food for this query", 404));
  res.status(200).json({
    status: "success",
    data: food,
  });
});
exports.createFood = catchAsync(async (req, res, next) => {
  const newTour = await Food.create(req.body);
  if (!newTour)
    return next(new AppError("Couldn't create food please try again", 400));
  res.status(200).json({
    status: "success",
    data: {
      tour: newTour,
    },
  });
});
exports.updateFood = catchAsync(async (req, res, next) => {
  const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!updatedFood) {
    return next(new AppError("Couldn't update the food", 400));
  }
  res.status(200).json({
    status: "success",
    data: updatedFood,
  });
});

exports.deleteFood = catchAsync(async (req, res, next) => {
  const food = await Food.findByIdAndDelete(req.params.id);
  console.log(food);
  res.status(204).json({
    status: "success",
    message: null,
  });
  if (!food) {
    return next(new AppError("Couldn't delete the food", 400));
  }
});
