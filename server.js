// import packages
var express = require("express"); // Set Express
var exphbs = require("express-handlebars"); // Set Handlebars.
// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

// if on Heroku or other server get port using process.env.PORT OR Port 3000 for localhost
var PORT = process.env.PORT || 3000;

// instantiate Express object.
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public")); // access to JS, CSS and Images files

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handelbar setup
app.engine("handlebars", exphbs({ defaultLayout: "main" })); // main.handlebars as default layout
app.set("view engine", "handlebars");

// use the routes from burgers_controller.js
app.use(routes);

// setup server using PORT
app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
