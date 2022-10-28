const router = require("express").Router();
require("express-group-routes");

const {
  isLoggedIn,
  protect,
  restrictTo,
  logout,
} = require("../controllers/authController");

const {
  getHome,
  getAbout,
  getMenu,
  getBooking,
  getContact,
  getChiefs,
  getFeatures,
  getBlog,
  /* User */
  getUserProfile,
  getUserReviews,
  getUserPassword,
  getUserHistory,
  getUserDelete,
  /* Admin */
  getAdminDashboard,
  getAdminBookings,
  getAdminOrders,
  getAdminHistory,
  getAdminSettings,
} = require("./../controllers/viewController");

router.get("/", isLoggedIn, getHome);
router.get("/about-us", isLoggedIn, getAbout);
router.get("/our-chiefs", isLoggedIn, getChiefs);
router.get("/menu", isLoggedIn, getMenu);
router.get("/booking", isLoggedIn, getBooking);
router.get("/contactus", isLoggedIn, getContact);
router.get("/features", isLoggedIn, getFeatures);
router.get("/blog", isLoggedIn, getBlog);
/* USER ROUTES*/
router.group("/user", (router) => {
  router.use(protect);
  router.get("/profile", getUserProfile);
  router.group("/reviews", (router) => {
    router.get("/", getUserPassword);
    router.get("/show", getUserPassword);
    router.get("/show", getUserPassword);
    router.delete("/delete", getUserPassword);
  });
  router.get("/password", getUserPassword);
  router.get("/history", getUserHistory);
  router.get("/account", getUserDelete);
});

/* Admin */
router.group("/admin", (router) => {
  router.use(protect);
  router.use(restrictTo("admin", "officer"));
  router.get("/dashboard", getAdminDashboard);
  router.get("/bookings", getAdminBookings);
  router.get("/orders", getAdminOrders);
  router.get("/history", getAdminHistory);
  router.get("/settings", getAdminSettings);
  router.group("/image-gallery", (router) => {
    router.get("/", getAdminDashboard);
    router.get("/create", getAdminDashboard);
    router.post("/store", getAdminDashboard);
    router.get("/edit", getAdminDashboard);
    router.put("/update", getAdminDashboard);
    router.delete("/delete", getAdminDashboard);
  });
  router.group("/reviews", (router) => {
    router.get("/", getAdminDashboard);
    router.get("/create", getAdminDashboard);
    router.post("/store", getAdminDashboard);
    router.get("/edit", getAdminDashboard);
    router.put("/update", getAdminDashboard);
    router.delete("/delete", getAdminDashboard);
  });
});

router.get("/logout", logout);
module.exports = router;
