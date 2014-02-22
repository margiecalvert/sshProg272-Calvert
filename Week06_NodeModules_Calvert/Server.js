
var express = require('express');
var app = express();
var fs = require('fs');
var getNine = require('./Library/GetNine');
var allConverter = require('./Library/AllConverter');
var squareConverter = require('./Public/SquareConverter');
app.use(express.bodyParser());

var port = process.env.PORT || 30025;

/*app.get('/getNine', function(request, response) {
	console.log('getNine called');
	response.send({ "result": getNine.getNine() });
});*/

// With a get, the parameters are passed in request.query
app.get('/square', function(request, response) {
	console.log('convert called');	
	console.log(request.query);	
	var operandA = parseInt(request.query.operandA);
	var result = squareConverter.squareObject.square(operandA);
	response.send({ "result": result });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
app.post('/convert', function(request, response) {
	console.log('convert post called');	
	console.log(request.body);	
	var operandA = parseInt(request.body.operandA);
	var result = squareConverter.squareObject.convertMiles(operandA);
	response.send({ "result": result });
});

app.get('/convert', function(request, response) {
	console.log('convert called');	
	console.log(request.query);	
	var operandA = parseInt(request.query.operandA);
	var operandB = parseInt(request.query.operandB);
	var result = allConverter.myObject.convertMiles(operandA, operandB);
	response.send({ "result": result });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
app.post('/convert', function(request, response) {
	console.log('convert post called');	
	console.log(request.body);	
	var operandA = parseInt(request.body.operandA);
	var operandB = parseInt(request.body.operandB);
	var result = allConverter.myObject.convertMiles(operandA, operandB);
	response.send({ "result": result });
});
app.get('/add', function(request, response) {
	console.log('add called');	
	console.log(request.query);	
	var operandA = parseInt(request.query.operandA);
	var operandB = parseInt(request.query.operandB);
	var result = allConverter.myObject.add(operandA, operandB);
	response.send({ "result": result });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
app.post('/add', function(request, response) {
	console.log('add post called');	
	console.log(request.body);	
	var operandA = parseInt(request.body.operandA);
	var operandB = parseInt(request.body.operandB);
	var result = allConverter.myObject.add(operandA, operandB);
	response.send({ "result": result });
});


app.get('/subtract', function(request, response) {
	console.log('subtract called');	
	console.log(request.query);	
	var operandA = parseInt(request.query.operandA);
	var operandB = parseInt(request.query.operandB);
	var result = allConverter.myObject.subtract(operandA, operandB);
	response.send({ "result": result });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
app.post('/subtract', function(request, response) {
	console.log('subtract post called');	
	console.log(request.body);	
	var operandA = parseInt(request.body.operandA);
	var operandB = parseInt(request.body.operandB);
	var result = allConverter.myObject.subtract(operandA, operandB);
	response.send({ "result": result });
});

app.get('/multiply', function(request, response) {
	console.log('multiply called');	
	console.log(request.query);	
	var operandA = parseInt(request.query.operandA);
	var operandB = parseInt(request.query.operandB);
	var result = allConverter.myObject.multiply(operandA, operandB);
	response.send({ "result": result });
});

/* To handle a post, we have to add express.bodyParser, shown above
   Now our parameters come in on request.body */
app.post('/multiply', function(request, response) {
	console.log('multiply post called');	
	console.log(request.body);	
	var operandA = parseInt(request.body.operandA);
	var operandB = parseInt(request.body.operandB);
	var result = allConverter.myObject.multiply(operandA, operandB);
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
