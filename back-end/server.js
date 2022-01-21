process.on("uncaughtException", (err) => {
  console.log(err.name + " **** " + err.message);
  process.exit(1);
});

const mongoose = require("mongoose");

//we use the values in config file for app in many places
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then((con) => console.log("DB connection successfully established"));

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection-", err.name, err.message);
  //server kapanır ve sonra işlem biter. - amac serverin zarar almadan kapanmasıdır -
  server.close(() => process.exit(1));
});
