const mongoose = require("mongoose");

const reviewModel = new mongoose.Schema({});

const Review = mongoose.model("Review", reviewModel);
module.exports = Review;
