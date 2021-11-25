// Create a new 'render' controller method
exports.render = function (req, res) {
  // Use the 'response' object to render the 'index' view with a 'title' property
  res.render("index", { title: "Sample Test" });
};

// Create a new 'renderAdd' controller method
exports.renderAdd = function (req, res) {
  // Use the 'response' object to render the 'add_course' view with a 'title' property
  res.render("add_course", { title: "Add New course" });
};

exports.about = function (req, res) {
  // Use the 'response' object to render the 'about' view with a 'about' property
  res.render("about", { title: "About the project" });
};

exports.thankyou = function (req, res) {
  // Use the 'response' object to render the 'thankyou' view with a 'thankyou' property
  res.render("thankyou", { title: "Thank you page" });
};
