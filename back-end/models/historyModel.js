const mongoose = require("mongoose");

const historyModel = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "user id must be provided for history!"],
  },
  orderId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "order id must be provided for history"],
  },
  createdAt: Date.now(),
});

const History = mongoose.model("History", historyModel);
module.exports = History;
