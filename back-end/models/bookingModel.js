const mongoose = require("mongoose");
const bookingModel = new mongoose.Schema({
  createAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  guests:{
      type:Number,
      required:[true,"Please define, how many guest you are"]
  },
  email:{
      type:String,
      required:[true,"Please type your email address"]
  },
name:{
    type:String,
    required: [true, "Please, Define your name"],
    minlength: [3, "Please provide a valid name"],
    maxlength: [20, "Please provide a valid name "],
},
phone:{
    type:String,
    required: [true, "Please, Define a phone number"],
    minlength: [3, "Please provide a valid phone number"],
    maxlength: [20, "Please provide a valid phone number"],
}, 
date:{
    type:Date,
    required: [true, "Please, Define a booking date"]
},
time:{
    type:String,
    required: [true, "Please, Define a time"]
},
});

const Booking = mongoose.model("Booking", bookingModel);
module.exports = Booking;
