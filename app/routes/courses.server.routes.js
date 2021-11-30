// Load the 'index' controller
var index = require("../controllers/index.server.controller");
// Load the 'courses' controller
var courses = require("../controllers/courses.server.controller"); //need to Update!!!!!

// Define the routes module' method
module.exports = function (app) {
  // Set up the 'users' base routes
  //
  //show the 'index' page if a GET request is made to root
  app.route("/").get(index.render);
  //show the 'add_course' page if a GET request is made to /courses
  app.route("/courses").get(index.renderAdd); //need to Update!!!!!

  // a post request to /courses will execute createCourse method in courses.server.controller
  app.route("/courses").post(courses.createCourse); //need to Update!!!!!

  app.route("/list_courses").get(courses.readCourses); //need to Update!!!!!
  // Set up the 'courses' parameterized routes
  app.route("/courses_details").get(courses.showByCourseId); //details
  app.route("/courses_details").post(courses.showByCourseId); //details

  app.route("/list_courses/:courseId").put(courses.updateByCourseId); //update  //need to Update!!!!!
  // Set up the 'courseId' parameter middleware
  //All param callbacks will be called before any handler of
  //any route in which the param occurs, and they will each
  //be called only once in a request - response cycle,
  //even if the parameter is matched in multiple routes
  app.route("/list_courses/:courseId").delete(courses.deleteByCourseId); //delete     //need to Update!!!!!

  app.param("courseId", courses.findCourseByCourseId); //need to Update!!!!!

  app.route("/about").get(index.about);
  app.route("/thankyou").get(index.thankyou);
};
