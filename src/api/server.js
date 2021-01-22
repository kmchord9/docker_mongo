var express = require("express");
var	app = express();
var	port = process.envPORT || 3000;
var mongoose = require("mongoose");
var	bodyParser = require("body-parser");

mongoose.Promise = global.Promise;

var options = {
	user: 'usertemp',
	pass: 'usertemp',
	useUnifiedTopology: true

};

var uri = 'mongodb://docker_mongo_mongo_1:27017/temp'

mongoose.connect(uri, options);

var	Task = require("./api/models/taskModel");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/taskRoutes");
routes(app);

app.listen(port);

console.log("todo list RESTfull API server started on: "+ port);
