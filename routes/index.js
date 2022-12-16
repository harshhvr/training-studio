const express = require("express");
const {
  getHomePage,
  getClassesPage,
  getSchedulesPage,
  getAboutPage,
  getContactPage,
} = require("../controllers");
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.route("/").get(getHomePage);

router.route("/home").get(getHomePage);

router.route("/classes").get(getClassesPage);

router.route("/schedules").get(getSchedulesPage);

router.route("/about").get(getAboutPage);

router.route("/contact").get(getContactPage);

module.exports = router;
