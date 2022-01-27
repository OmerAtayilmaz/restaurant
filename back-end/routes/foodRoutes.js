const { getAllFoods, getFoodById } = require("./../controllers/foodController");
const express = require("express");

const router = express.Router();

router.route("/").get(getAllFoods);
router.route("/:id").get(getFoodById);
module.exports = router;
