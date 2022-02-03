const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const FoodModel = require("./../../models/foodModel");

dotenv.config({ path: "./config.env" });

const DB =
  "mongodb+srv://resturant:71nZVNyUvOfP5UkY@restaurant-db.y0qsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("DB baglantisi basarili"));

//READ JSON file
const foods = JSON.parse(fs.readFileSync(`${__dirname}/./foods.json`, "utf-8"));
//Import data into database
const importData = async () => {
  try {
    await FoodModel.create(foods);
    console.log("Data successfully loaded");

    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//DELETE ALL DATA FROM COLLECTİON
const deleteData = async () => {
  try {
    await FoodModel.deleteMany();
    console.log("Data successfully deleted!");
    process.exit(); /* işlemi bitir.  */
  } catch (err) {
    console.log(err);
  }
};
//command line:node dev-data/data/import-dev-data.js --import
if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] == "--delete") {
  deleteData();
}
console.log(process.argv);
