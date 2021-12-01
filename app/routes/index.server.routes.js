// Load the 'index' controller
var index = require("../controllers/index.server.controller"); //need to Update!!!!!
// Load the 'courses' controller
var courses = require("../controllers/courses.server.controller"); //need to Update!!!!!

// Define the routes module' method
module.exports = function (app) {
  // Set up the 'users' base routes
  // a post request to /courses will execute createCourse method in courses.server.controller
  //app.route("/").get(index.render);
  // app.route("/thankyou").get(thankyou.render);
  // app.route("/courses").get(index.renderAdd); //need to Update!!!!!
  //app.route("/courses").post(courses.createCourse); //need to Update!!!!!
  //app.route("/list_courses").get(courses.list); //need to Update!!!!!
  // app.route("/about").get(index.about);
  //app.route("/thankyou").get(index.thankyou);
};
