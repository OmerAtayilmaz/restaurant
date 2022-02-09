const express = require("express");
const orderController = require("./../controllers/orderController");
const authController = require("./../controllers/authController");

const router = express.Router();
router.use(authController.protect);
router
  .route("/")
  .get(orderController.getAllOrders)
  .post(
    authController.restrictTo("admin", "officer"),
    orderController.createOrder
  );
router
  .route("/:id")
  .get(orderController.getOrder)
  .delete(
    authController.restrictTo("admin", "officer"),
    orderController.deleteOrder
  );

module.exports = router;
