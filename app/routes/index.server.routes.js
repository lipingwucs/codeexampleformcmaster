// Load the 'index' controller
var tasks = require('../controllers/tasks.server.controller');
// Load the 'tasks' controller
var tasks = require('../controllers/tasks.server.controller');

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes
    // a post request to /tasks will execute createTask method in tasks.server.controller
    app.route('/').get(index.render);
    app.route('/tasks').get(index.renderAdd);
    app.route('/tasks').post(tasks.createTask);
    
    app.route('/list_tasks').get(tasks.list);
    

};


