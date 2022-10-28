const {
    getAllBookings,
    getBooking,
    createBooking,
    updateBooking,
    deleteBooking,
  } = require("./../controllers/bookingController");
  const authController = require("./../controllers/authController");
  const express = require("express");
  
  const router = express.Router();
  
  router.route("/").get(getAllBookings).post(createBooking);
  router
    .route("/:id")
    .get(getBooking)
    .put(
      updateBooking
    )
    .delete(
      authController.protect,
      authController.restrictTo("admin", "officer"),
      deleteBooking
    );
  module.exports = router;
  