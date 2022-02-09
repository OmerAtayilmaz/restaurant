const catchAsync = require("./../utils/catchAsync");
const factory = require("./handlerFactory");
const Order = require("./../models/orderModel");

exports.getAllOrders = factory.getAll(Order);

exports.getOrder = factory.getOne(Order);

exports.createOrder = factory.createOne(Order);

exports.deleteOrder = factory.deleteOne(Order);
