// Load the 'Course' Mongoose model
var Course = require('mongoose').model('Course');

// Create a new 'create' controller method
exports.createCourse = function (req, res, next) {
    // Create a new instance of the 'Course' Mongoose model
    var course = new Course(req.body); //get data from ejs page and attaches them to the model
    console.log("body: " + req.body.username);

    // Use the 'Course' instance's 'save' method to save a new course document
    course.save(function (err) {
        if (err) {
            // Call the next middleware with an error message
            return next(err);
        } else {
            // Use the 'response' object to send a JSON response
           // res.json(course);    
            //res.redirect('/list_courses');    
            res.render('course_details', {
                "title": 'Show Course Details',
                "course": course
            });    
        }
    });
};

// Create a new 'read' controller method
exports.readCourses = function (req, res, next) {
    console.log('in reading courses...')
    // Use the 'Course' static 'find' method to retrieve the list of items
    Course.find({}, function (err, courses) {
        console.log(courses)
        if (err) {
            // Call the next middleware with an error message
            console.log('some error in readCourse method')
            return next(err);
        } else {
            //
            res.render('courses', {
                title: 'List All Courses',
                courses: courses
            });
        }
    });
};

// 'read' controller method to display a course
exports.read = function(req, res) {
	// Use the 'response' object to send a JSON response
    // res.json(req.course);
    res.redirect('/list_courses'); 
};
//
//update a course by course id
exports.updateByCourseId = function (req, res, next) {
    req.course = req.body //read the courses from request's body

    //find the index of parameter that is sent in req.params array
    var courseIndex = req.body.courseId.indexOf(req.params.courseId);
    //create the json object with updated values
    var courseToUpdate = {
        "courseId": req.body.courseId[courseIndex],
        "courseName": req.body.courseName[courseIndex],
        "courseDescription": req.body.courseDescription[courseIndex],
        "startDate": req.body.startDate[courseIndex],
        "endDate": req.body.endDate[courseIndex],
        "owner": req.body.owner[courseIndex]        
    }
    
    //initialize findOneAndUpdate method arguments
    var query = { "courseId": req.params.courseId };
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
            res.redirect('/list_courses'); //display all courses
        }
    })
};



// ‘findCourseByCourseId’ controller method to find a course by its course id
exports.findCourseByCourseId = function (req, res, next, courseId) {
	// Use the 'Course' static 'findOne' method to retrieve a specific course
	Course.findOne({
		courseId: courseId //using the course id instead of id
	}, (err, course) => {
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
	});
};

//Delete a course by course id
exports.deleteByCourseId = function (req, res, next) {    //
    console.log(req.body.courseId);
    Course.findOneAndRemove({
        courseId: req.body.courseId
    }, (err, course) => {
        if (err) {
            console.log(err);
            // Call the next middleware with an error message
            return next(err);
        } else {
            console.log(course);        
            // Use the 'response' object to send a JSON response
            res.redirect('/list_courses'); //display all courses
        }
    });
};



// showByCourseId controller method to find a course by its course id
exports.showByCourseId = function (req, res, next) {
    // Use the 'Course' static 'findOne' method to retrieve a specific course
    var courseId = req.query.id;
	Course.findOne({
		courseId: courseId //using the course id instead of id
	}, (err, course) => {
		if (err) {
			// Call the next middleware with an error message
			return next(err);
		} else {
            
            console.log(course);
			// Call the next middleware
            res.render('course_details', {
                "title": 'Show Course Details',
                "course": course
            });
		}
	});
};




    