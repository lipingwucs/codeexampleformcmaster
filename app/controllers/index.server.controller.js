// Create a new 'render' controller method
exports.render = function (req, res) {
    // Use the 'response' object to render the 'index' view with a 'title' property
    res.render('index', {title: 'Sample Test'} );
    
};

// Create a new 'renderAdd' controller method
exports.renderAdd = function (req, res) {
    // Use the 'response' object to render the 'add_task' view with a 'title' property
    res.render('add_task', { title: 'Add New task' });

};

exports.about = function (req, res) {
    // Use the 'response' object to render the 'about' view with a 'about' property
    res.render('about', {title: 'About the project'} );
    
};

