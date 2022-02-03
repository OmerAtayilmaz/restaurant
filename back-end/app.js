const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("./controllers/errorController");
/* const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController"); */
const foodRouter = require("./routes/foodRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();
app.use(express.json()); //req.body çalışmaz undefined döner!
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
app.use(globalErrorHandler);
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "🤪Fail🤪",
    message: "invalid path girdiniz,lütfen  böyle cilginliklar yapmayın :) ",
  });
  next();
});
//app.use(globalErrorHandler);
module.exports = app;
