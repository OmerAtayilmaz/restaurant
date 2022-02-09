const mongoose = require("mongoose");
const Food = require("./foodModel");
const User = require("./userModel");
const AppError = require("./../utils/appError");
const orderModel = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  orders: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Food",
      required: [true, "You need to choose food to order"],
    },
  ],
  orderDetail: [{ type: Object }],
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "UserSchema",
    required: [true, "An order must have an user "],
  },
  userDetail: {
    type: Object,
  },
  totalPrice: {
    type: Number,
  },
  adress: {
    required: [true, "A order must have an adress"],
    type: String,
    minlength: [3, "Please use a longer message"],
    maxlength: [150, "please use less than 150 characters"],
  },
  message: {
    type: String,
    minlength: [3, "Please use a longer message"],
    maxlength: [150, "please use less than 150 characters"],
  },
  phone: {
    required: [true, "A order must have an phone number"],
    type: String,
    minlength: [3, "Please provide a valid phone number"],
    maxlength: [20, "Please provide a valid phone number"],
  },
});

orderModel.pre("save", async function (next) {
  this.totalPrice = 0;
  this.userDetail = {};
  var orderDetail = [];
  if (this.orders[0] === null || !this.orders) {
    next(new AppError("You must provide an order", 404));
  }
  await this.orders?.map(async (el) => {
    const data = await Food.findById(el);
    const user = await User.findById(this.userId);
    orderDetail.unshift({
      name: data.name,
      ingredients: data.ingredients,
      type: data.foodType,
      discount: data.priceDiscount,
      price: data.price,
    });
    this.totalPrice += data.price * 1 - data.priceDiscount * 1;
    this.userDetail = {
      person: user.name,
      email: user.email,
    };
    await Order.findByIdAndUpdate(this._id, {
      totalPrice: this.totalPrice,
      orderDetail: orderDetail,
      userDetail: this.userDetail,
    });
  });

  next();
});
const Order = mongoose.model("Order", orderModel);
module.exports = Order;
