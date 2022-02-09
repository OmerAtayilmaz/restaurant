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
const authController = require("./../controllers/authController");
const express = require("express");

const router = express.Router();
router
  .route("/top-5-cheap")
  .get(authController.protect, aliasTopFoods, getAllFoods);
router.route("/foods-stats").get(authController.protect, getFoodStats);
router.route("/search").get(getFoodByFeature);
router.route("/").get(getAllFoods).post(createFood);
router
  .route("/:id")
  .get(getFood)
  .put(
    authController.protect,
    authController.restrictTo("admin", "officer"),
    updateFood
  )
  .delete(
    authController.protect,
    authController.restrictTo("admin", "officer"),
    deleteFood
  );
module.exports = router;
