var express = require('express');
var app = express();
var fs = require('fs');
var miles = require('./Public/miles');
var square = require('./Library/square');

app.use(express.bodyParser());
var port = process.env.PORT || 30025;

var milesResult = miles.feetMiles();
console.log("The number of feet in two miles is " + milesResult);

var result = square.mySquare.square4();
var showSquare = console.log("The square of 4 is " + result);

app.get('/getNine', function(request, response) {
	console.log('getNine called');
	response.send({ "result": 9 });
});

/*
// With a get, the parameters are passed in request.query
app.get('/add', function(request, response) {
	console.log('add called');	
	console.log(request.query);	
	var result = parseInt(request.query.operandA) + parseInt(request.query.operandB);
	response.send({ "result": result });
});*/

// With a get, the parameters are passed in request.query
app.get('/square', function(request, response) {
	console.log('square called');	
	console.log(request.query);	
	var result = parseInt(request.query.operandA) * parseInt(request.query.operandB);
	response.send({ "result": result });
});

// With a get, the parameters are passed in request.query
app.get('/multiply', function(request, response) {
	console.log('multiply called');	
	console.log(request.query);	
	var result = parseInt(request.query.operandA) * parseInt(request.query.operandB);
	response.send({ "result": result });
});

// With a get, the parameters are passed in request.query
app.get('/subtract', function(request, response) {
	console.log('subtract called');	
	console.log(request.query);	
	var result = parseInt(request.query.operandA) - parseInt(request.query.operandB);
	response.send({ "result": result });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
app.post('/add', function(request, response) {
	console.log('add called');	
	console.log(request.body);	
	var result = parseInt(request.body.operandA) + parseInt(request.body.operandB);
	response.send({ "result": result });
});


app.get('/', function(request, response) {
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	response.writeHeader(200, {"Content-Type": "text/html"});   
	response.write(html);
	response.end();
});

app.use("/", express.static(__dirname + '/Public'));
app.listen(port);
console.log('Listening on port :' + port);
