// Load the 'Course' Mongoose model
var Course = require("mongoose").model("Course");

// Create a new 'create' controller method
exports.createCourse = function (req, res, next) {
  // Create a new instance of the 'Course' Mongoose model
  var course = new Course(req.body); //get data from ejs page and attaches them to the model
  //console.log("body: " + req.body.username);
  req.course = req.body; //read the courses from request's body
  var courseId = req.body.courseId;
  var courseName = req.body.courseName;
  var module = req.body.module;
  var courseDescription = req.body.courseDescription;
  var startDate = req.body.startDate;
  var endDate = req.body.endDate;
  console.log(
    "When Add a new course: Start Date:" + startDate + ", EndDate: " + endDate
  );
  var owner = req.body.owner;

  // Use the 'Course' instance's 'save' method to save a new course document
  // ref: https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate
  Course.findOneAndUpdate(
    { courseId: courseId }, //filter by courseId
    {
      courseId: courseId,
      courseName: courseName,
      module: module,
      courseDescription: courseDescription,
      startDate: startDate,
      endDate: endDate,
      owner: owner,
    }, //update course

    { upsert: true, new: true, overwrite: true }, //
    //upset to create a new doc if none exists and new to return the new, updated document instead of the old one.

    function (err, course) {
      if (err) {
        // Call the next middleware with an error message
        return next(err);
      } else {
        // Use the 'response' object to send a JSON response
        // res.json(course);
        // res.redirect("/list_courses");
        res.render("course_details", {
          title: "Show Course Details",
          course: course,
        });
      }
    } //callback
  );
};

// Create a new 'read' controller method
exports.readCourses = function (req, res, next) {
  console.log("in reading courses...");
  // Use the 'Course' static 'find' method to retrieve the list of items
  Course.find({}, function (err, courses) {
    console.log(courses);

    if (err) {
      // Call the next middleware with an error message
      console.log("some error in readCourse method");
      return next(err);
    } else {
      console.log("After convert: " + courses);
      res.render("courses", {
        title: "List All Courses",
        courses: courses,
      });
    }
  });
};

// 'read' controller method to display a course
exports.read = function (req, res) {
  // Use the 'response' object to send a JSON response
  // res.json(req.course);
  res.redirect("/list_courses");
};
//
//update a course by course id
exports.updateByCourseId = function (req, res, next) {
  req.course = req.body; //read the courses from request's body

  //find the index of parameter that is sent in req.params array
  var courseIndex = req.body.courseId.indexOf(req.params.courseId);
  var startDate = req.body.startDate[courseIndex];
  var endDate = req.body.endDate[courseIndex];

  //create the json object with updated values
  var courseToUpdate = {
    courseId: req.body.courseId[courseIndex],
    courseName: req.body.courseName[courseIndex],
    module: req.body.module[courseIndex],
    courseDescription: req.body.courseDescription[courseIndex],
    startDate: req.body.startDate[courseIndex],
    endDate: req.body.endDate[courseIndex],
    owner: req.body.owner[courseIndex],
  };

  console.log(
    "After Update：Start Date:" +
      startDate +
      ", EndDate: " +
      endDate +
      ", Module id: " +
      req.body.module[courseIndex]
  );
  console.log(" Get Course by ID from database: " + courseToUpdate);

  //initialize findOneAndUpdate method arguments
  var query = { courseId: req.params.courseId };
  var update = courseToUpdate;
  var options = { new: true };

  // Use the 'Course' static 'findOneAndUpdate' method
  // to update a specific course by course id
  Course.findOneAndUpdate(query, update, options, (err, course) => {
    if (err) {
      console.log(err);
      // Call the next middleware with an error message
      return next(err);
    } else {
      console.log(course);
      // Use the 'response' object to send a JSON response
      res.redirect("/list_courses"); //display all course
    }
  });
};

// ‘findCourseByCourseId’ controller method to find a course by its course id
exports.findCourseByCourseId = function (req, res, next, courseId) {
  // Use the 'Course' static 'findOne' method to retrieve a specific course
  Course.findOne(
    {
      courseId: courseId, //using the course id instead of id
    },
    (err, course) => {
      if (err) {
        // Call the next middleware with an error message
        return next(err);
      } else {
        // Set the 'req.course' property
        req.course = course;
        console.log(course);
        // Call the next middleware
        next();
      }
    }
  );
};

//Delete a course by course id
exports.deleteByCourseId = function (req, res, next) {
  //
  console.log(req.body.courseId);
  Course.findOneAndRemove(
    {
      courseId: req.body.courseId,
    },
    (err, course) => {
      if (err) {
        console.log(err);
        // Call the next middleware with an error message
        return next(err);
      } else {
        console.log(course);
        // Use the 'response' object to send a JSON response
        res.redirect("/list_courses"); //display all courses
      }
    }
  );
};

// showByCourseId controller method to find a course by its course id
exports.showByCourseId = function (req, res, next) {
  // Use the 'Course' static 'findOne' method to retrieve a specific course
  var courseId = req.query.id;
  Course.findOne(
    {
      courseId: courseId, //using the course id instead of id
    },
    (err, course) => {
      if (err) {
        // Call the next middleware with an error message
        return next(err);
      } else {
        console.log(course);
        // Call the next middleware

        res.render("course_details", {
          title: "Show Course Details",
          course: course,
        });
      }
    }
  );
};
