const {
  getAllUsers,
  getUserById,
  updateMe,
} = require("./../controllers/userController");
const authController = require("./../controllers/authController");
const express = require("express");
const router = express.Router();
router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);
router.post("/forgotPassword", authController.forgotPassword);
router.patch("/updateMe", authController.protect, updateMe);
router.patch("/resetPassword/:token", authController.resetPassword);
router.post("/signup", authController.signup);
router.post("/login", authController.login);
router
  .route("/")
  .get(
    authController.protect,
    authController.restrictTo("admin", "officer"),
    getAllUsers
  );

//router.route("/updateUser").put(updateUser);
router.route("/removeUser").delete(getUserById);

module.exports = router;
