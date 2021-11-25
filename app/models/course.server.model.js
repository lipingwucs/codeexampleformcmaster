// Load the Mongoose module and Schema object
var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

// Define a new 'CourseSchema'
var CourseSchema = new Schema({
  courseId: { type: String, required: true },
  courseName: String,
  module: String,
  courseDescription: String,
  startDate: {
    type: Date,
    // Create a default 'created' value
    default: Date.now,
  },

  endDate: {
    type: Date,
    // Create a default 'created' value
    default: Date.now,
  },
  owner: String,
});
// Create the 'Course' model out of the 'CourseSchema'
mongoose.model("Course", CourseSchema);
