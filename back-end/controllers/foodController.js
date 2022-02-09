const Food = require("./../models/foodModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const factory = require("./handlerFactory");
exports.aliasTopFoods = (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = "-price";
  req.query.fields = "name,price,ingridients,foodType";
  next();
};
exports.getFoodStats = catchAsync(async (req, res, next) => {
  const stats = await Food.aggregate([
    /*  {
      $match: { price: { $gte: 0 } },
    }, */
    {
      $group: {
        _id: null, // $toUpper: "$foodType" },
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
exports.getFoodByFeature = catchAsync(async (req, res, next) => {
  let query = { ...req.query };
  const food = await Food.find(query);
  if (!food[0])
    return next(new AppError("There is no food for this query", 404));
  res.status(200).json({
    status: "success",
    data: food,
  });
});
//factory handler
exports.getAllFoods = factory.getAll(Food);
exports.getFood = factory.getOne(Food);
exports.createFood = factory.createOne(Food);
exports.updateFood = factory.updateOne(Food);
exports.deleteFood = factory.deleteOne(Food);
