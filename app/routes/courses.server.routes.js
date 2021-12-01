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
  app.route("/about").get(index.about);
  app.route("/thankyou").get(index.thankyou);

  //show the 'add_course' page if a GET request is made to /courses
  app.route("/courses_add").get(courses.renderAdd); //
  app.route("/courses_add").post(courses.createCourse); //

  app.route("/courses_list").get(courses.readCourses); //get all of courses information
  app.route("/courses_list/:courseId").put(courses.updateByCourseId); //update
  app.route("/courses_list/:courseId").delete(courses.deleteByCourseId); //delete

  // Set up the 'courses' parameterized routes
  app.route("/courses_details").get(courses.showByCourseId); //get course information by ID

  // Set up the 'courseId' parameter middleware
  //All param callbacks will be called before any handler of
  //any route in which the param occurs, and they will each
  //be called only once in a request - response cycle,
  //even if the parameter is matched in multiple routes
  app.param("courseId", courses.findCourseByCourseId); //need to Update!!!!!
};
