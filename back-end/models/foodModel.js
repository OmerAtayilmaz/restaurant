const mongoose = require("mongoose");
const validator = require("validator");

const foodSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A food must have  name"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "A food must have a price"],
      min: [0, "A food price must be greather than zero"],
    },
    ingredients: {
      type: [String],
      required: [true, "A food must have ingredients"],
    },

    foodType: {
      type: String,
      required: [true, "A food must have type"],
      enum: {
        values: ["beverage", "food", "dessert","snack"],
        message: "Invalid food type. valid types: beverage,food,dessert",
      },
    },
    priceDiscount: {
      type: Number,
      default: 0,
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
  this.ingredients.map((el) => el.toLowerCase());
  next();
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
