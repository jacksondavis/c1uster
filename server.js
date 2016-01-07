// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var PythonShell = require('python-shell');

// configuration ===========================================
	
// config files
var db = require('./config/db');

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)
 
// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json 
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users

// routes ==================================================
require('./app/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);	
  console.log("hi5");
console.log('Magic happens on port ' + port); 
  console.log("hi4");	
  // so this can run with arguments 
  // they will be the second through whatever arguments in the brackets
  
var pyshell = new PythonShell('sample.py', {mode : 'text', args: []});

 console.log("hi1");
pyshell.on('message', function (message) {
	  console.log(message);  
	  console.log("hi0");
	});		// shoutout to the user*/
  console.log("hi2");

pyshell.end(function (err) {
  if (err) throw err;
  console.log('finished');
});

exports = module.exports = app;