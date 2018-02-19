
//require packages
var express = require("express");
var methodOverride  = require("method-override");
var bodyParser  = require("body-parser");
var expressHandlebars = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");

//assign a port and create the express app
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

//set Handlebars
app.engine("handlebars", expressHandlebars({
	defaultLayout: "main"}));
app.set("view engine", "handlebars");

// implement routes
app.use(routes);

app.listen(PORT, function(){
	console.log("App now listening at localhost: " + PORT);
});




