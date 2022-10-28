const express = require("express");
const morgan = require("morgan");
const globalErrorHandler = require("./controllers/errorController");
const AppError = require("./utils/appError");
const foodRouter = require("./routes/foodRoutes");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");
const viewRouter = require("./routes/viewRoutes");
const bookingRouter = require("./routes/bookingRoutes");
const { isLoggedIn } = require("./controllers/authController");

const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      next();
    });
app.use(cors());
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/order", orderRouter);
app.use("/api/booking", bookingRouter);
app.use("/",viewRouter);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.all("*",isLoggedIn, (req, res, next) => {
  const data = {
    headerTitle: "Not Found",
    path: "INVALID",
  };
  res.render('messages/no_path',data);
  
  /*  res.status(404).json({
    status: "🤪Fail🤪",
    message: "invalid path girdiniz,lütfen  böyle cilginliklar yapmayın :) ",
  }); */
});
app.use(globalErrorHandler);
module.exports = app;
