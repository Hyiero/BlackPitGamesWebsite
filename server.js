//=========== Modules to require ===========
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var database = require('./server/config/db');

//=========== Configuration ===========
//Setting up our port
var port = process.env.PORT || 8080;

//connect to our MongoDB
database.connect(database.url);

//Get all data/stuff of the body(POST) parameters
//Parse application/json
app.use(bodyParser.json());

//Parse application/vnd.api+json as json
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//Override with the X-HTTP-Method-Override header in the request. Simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

//Set the static files location /app/img will be /img for users
app.use(express.static(__dirname + '/app'));

//=========== Routes ===========

var routes = require('./server/api.routes'); //configure our routes
routes(app);

//=========== Start App ===========
app.listen(port);

//Log to know we are running
console.log("Running on Port: "+port);

//expose app

exports = module.exports = app;