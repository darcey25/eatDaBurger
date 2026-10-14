var express = require("express");
var { engine } = require("express-handlebars");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/restaurants_controller.js");

app.use(routes);

app.listen(PORT, function() {
	console.log("App now listening at localhost: " + PORT);
});
