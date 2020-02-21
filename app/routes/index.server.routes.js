// Load the 'index' controller
var tasks = require('../controllers/tasks.server.controller');    //need to Update!!!!!
// Load the 'tasks' controller
var tasks = require('../controllers/tasks.server.controller');    //need to Update!!!!!

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes
    // a post request to /tasks will execute createTask method in tasks.server.controller
    app.route('/').get(index.render);
    app.route('/tasks').get(index.renderAdd);   //need to Update!!!!!
    app.route('/tasks').post(tasks.createTask);    //need to Update!!!!!
    
    app.route('/list_tasks').get(tasks.list);      //need to Update!!!!!

};


