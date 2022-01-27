const mongoose = require("mongoose");
const validator = require("validator");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    trim: true,
    maxlength: [25, "A user name must be less than 25 characters"],
    minlength: [5, "A user name must be greater than 25 characters"],
  },
  password: {
    type: Number,
    required: [true, "A food must have a price"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password"],
    validate: {
      //this is only works on CREATE and SAVE
      validator: function (el) {
        return el === this.password;
      },
      message: "Passwords aren't the same",
    },
  },
  image: {
    type: [String],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please provide your email address"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email address"],
  },
  passwordChangedAt: Date,
});
UserSchema.methods.correctPassword = async function (
  candidatePassword,
  password
) {
  return await bcrypt.compare(candidatePassword, password);
};

UserSchema.methods.changesPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    console.log(changedTimestamp, JWTTimestamp);
    return JWTTimestamp < changedTimestamp;
  }
  //FALSE means not changed
  return false;
};
const User = mongoose.model("UserSchema", UserSchema);
module.exports = User;
