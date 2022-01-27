const express = require("express");
const morgan = require("morgan");

/* const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController"); */
const foodRouter = require("./routes/foodRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use("/", foodRouter);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.all("*", (req, res, next) => {
  next();
});
module.exports = app;
