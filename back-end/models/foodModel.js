const mongoose = require("mongoose");
const validator = require("validator");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A food must have  name"],
      unique: true,
      trim: true,
      maxlength: [25, "A food name must be less than 25 characters"],
      minlength: [5, "A food name must be greather than 5 characters"],
    },
    price: {
      type: Number,
      required: [true, "A food must have a price"],
    },
    ingridents: {
      type: [String],
      required: [true, "A food must have ingridents"],
    },
    priceDiscount: {
      type: Number,
      validate: {
        validator: function (value) {
          return value < this.price;
        },
        message: "price discount ({VALUE}) must be between less than price",
      },
    },
    imageCover: {
      type: String,
      required: [true, "A food must have a cover image"],
    },
    createAt: {
      type: Date,
      default: Date.now(),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
//hooks: virtual,pre,post
foodSchema.pre("save", function (next) {
  this.ingridents.map((el) => el.toLowerCase());
  next();
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
