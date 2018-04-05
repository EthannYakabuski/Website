var express = require('express'); 
var http = require("http");

const localtunnel = require('localtunnel');

var app = express(); 

var port = 3000;

var bodyParser = require('body-parser'); 

var cookieParser = require('cookie-parser');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static('views'));
app.set('views', './views'); 

app.use(function(req, res, next) {
	console.log(req.method + " request for " + req.url); 
    next();
}); 

app.get('/', function(req, res) {

	res.render('index', {}); 

});


app.listen(port, function(){console.log("Server running on port 3000");});