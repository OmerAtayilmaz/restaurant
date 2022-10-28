process.on("uncaughtException", (err) => {
  console.log("uncaughtException🤪\n" + err.name + "\n💎\n" + err.message);
  process.exit(1);
});
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");
const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);
mongoose.connect(DB, {
  useNewUrlParser: true,
});
const port = process.env.PORT || 3000;
const server = app.listen(port);
process.on("unhandledRejection", (err) => {
  console.log("Unhandled rejection-", err.name, err.message);
  server.close(() => process.exit(1));
});
