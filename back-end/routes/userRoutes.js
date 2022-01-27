const {
  getAllUsers,
  createUser,
  updateUser,
  removeUser,
  getUserById,
} = require("./../controllers/userController");
const express = require("express");

const router = express.Router();

router.route("/getAllUsers").get(getAllUsers);
router.route("/createUser").post(createUser);
//router.route("/updateUser").put(updateUser);
router.route("/removeUser").delete(getUserById);

module.exports = router;
