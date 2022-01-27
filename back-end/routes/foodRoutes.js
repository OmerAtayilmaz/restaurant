const {
  getAllFoods,
  getFoodById,
  createFood,
  updateFood,
} = require("./../controllers/foodController");
const express = require("express");

const router = express.Router();

router.route("/").get(getAllFoods);
router.route("/:id").get(getFoodById);
router.route("/create").post(createFood);
//router.route("/update").put(updateFood);
module.exports = router;
