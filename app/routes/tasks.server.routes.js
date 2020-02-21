// Load the 'index' controller
var index = require('../controllers/index.server.controller');
// Load the 'tasks' controller
var tasks = require('../controllers/tasks.server.controller');               //need to Update!!!!!

// Define the routes module' method
module.exports = function (app) {
    // Set up the 'users' base routes
    //
    //show the 'index' page if a GET request is made to root
    app.route('/').get(index.render);
    //show the 'add_task' page if a GET request is made to /tasks
    app.route('/tasks').get(index.renderAdd);                        //need to Update!!!!!

    // a post request to /tasks will execute createTask method in tasks.server.controller
    app.route('/tasks').post(tasks.createTask);                      //need to Update!!!!!

    app.route('/list_tasks').get(tasks.readTasks);                         //need to Update!!!!!
    // Set up the 'courses' parameterized routes

    app.route('/list_tasks/:taskId').get(tasks.read).put(tasks.updateByTaskId);    //need to Update!!!!!
    // Set up the 'taskId' parameter middlewar
    //All param callbacks will be called before any handler of 
    //any route in which the param occurs, and they will each 
    //be called only once in a request - response cycle, 
    //even if the parameter is matched in multiple routes
    app.route('/list_tasks/:taskId').get(tasks.read).delete(tasks.deleteByTaskId);        //need to Update!!!!!
   // app.route('/list_tasks/:taskId').get(tasks.read).post(tasks.findTaskByTaskId)
    
   app.param('taskId', tasks.findTaskByTaskId);           //need to Update!!!!!

    app.route('/about').get(index.about);

};


