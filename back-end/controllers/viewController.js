const {returnAllData}= require("./handlerFactory");
const Food= require("./../models/foodModel");
const User= require("./../models/userModel");

exports.getHome = async(req, res) => {
  //mainpage geldiğinde bu koşulla veriler gelecektir
  const defaultFoodQuery={ sort: '-priceDiscount', foodType: 'food', limit: '8' };
  const defaultBeverageQuery={ sort: '-priceDiscount', foodType: 'beverage', limit: '8' };
  const defaultDessertQuery={ sort: '-priceDiscount', foodType: 'dessert', limit: '8' };
  let foodsQ=Object.keys(req.query).length===0&&defaultFoodQuery;
  let beveragesQ=Object.keys(req.query).length===0&&defaultBeverageQuery;
  let dessertQ=Object.keys(req.query).length===0&&defaultDessertQuery;
  const products= await returnAllData(Food,foodsQ);
  const beverages= await returnAllData(Food,beveragesQ);
  const desserts= await returnAllData(Food,dessertQ);
  res.render("home/home-page",{products,beverages,desserts});
};
exports.getAbout = (req, res) => {
  const data = {
    headerTitle: "About Us",
    path: "ABOUT US",
  };
  res.render("home/about-page", data);
};
exports.getFeatures = (req, res) => {
  const data = {
    headerTitle: "Why Choose Us",
    path: "FEATURES",
  };
  res.render("home/features-page", data);
};
exports.getChiefs = (req, res) => {
  const data = {
    headerTitle: "Master Chef",
    path: "CHEF",
  };
  res.render("home/chiefs-page", data);
};
exports.getMenu = async(req, res) => {
  const defaultFoodQuery={ sort: '-priceDiscount', foodType: 'food', limit: '8' };
  let foodsQ=Object.keys(req.query).length===0&&defaultFoodQuery;
  const products= await returnAllData(Food,foodsQ);

  const data = {
    headerTitle: "Food Menu",
    path: "MENU",
    menu:products
  };
  res.render("home/menu-page", data);
};
exports.getBooking = (req, res) => {
  const data = {
    headerTitle: "Book A Table",
    path: "BOOKING",
  };
  res.render("home/booking-page", data);
};
exports.getBlog = (req, res) => {
  const data = {
    headerTitle: "Food Blog",
    path: "BLOG",
  };
  res.render("home/events-page", data);
};
exports.getContact = (req, res) => {
  const data = {
    headerTitle: "Contact Us",
    path: "CONTACT",
  };
  res.render("home/contact-page", data);
};

/* USER */
exports.getUserProfile=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Profile",
  };
  res.render('user/profile',data);
}
exports.getUserReviews=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Reviews",
  };
  res.render('user/reviews',data);
}

exports.getUserPassword=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Password Change",
  };
  res.render('user/password',data);
}
exports.getUserHistory=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Order History",
  };
  res.render('user/history',data);
}

exports.getUserDelete=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Delete Account",
  };
  res.render('user/delete',data);
}
/* Admin */

exports.getAdminDashboard=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Delete Account",
  };
  res.render('admin/dashboard',data);
}
exports.getAdminBookings=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Delete Account",
  };
  res.render('admin/bookings',data);
}
exports.getAdminOrders=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Delete Account",
  };
  res.render('admin/orders',data);
}
exports.getAdminHistory=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Delete Account",
  };
  res.render('admin/history',data);
}
exports.getAdminSettings=(req,res)=>{
  const data = {
    user:req.user,
    headerTitle: "User Profile",
    path: "Delete Account",
  };
  res.render('admin/settings',data);
}
