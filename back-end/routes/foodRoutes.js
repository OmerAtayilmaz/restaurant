const {
  getAllFoods,
  getFood,
  createFood,
  updateFood,
  deleteFood,
  aliasTopFoods,
  getFoodStats,
  getFoodByFeature,
} = require("./../controllers/foodController");
const express = require("express");

const router = express.Router();
router.route("/top-5-cheap").get(aliasTopFoods, getAllFoods);
router.route("/foods-stats").get(getFoodStats);
router.route("/search").get(getFoodByFeature);
router.route("/").get(getAllFoods).post(createFood);
router.route("/:id").get(getFood).put(updateFood).delete(deleteFood);
module.exports = router;
