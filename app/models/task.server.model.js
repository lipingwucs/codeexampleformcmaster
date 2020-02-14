﻿// Load the Mongoose module and Schema object
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;



// Define a new 'TaskSchema'
var TaskSchema = new Schema({
    taskId: { type: String, unique: true, required: true },
    taskName: String,
    taskDescription: String,
    startDate: {
        type: Date,
        // Create a default 'created' value
        default: Date.now
    },
    
    endDate: {
        type: Date,
        // Create a default 'created' value
        default: Date.now
    },
    owner: String    
});
// Create the 'User' model out of the 'UserSchema'
mongoose.model('Task', TaskSchema);