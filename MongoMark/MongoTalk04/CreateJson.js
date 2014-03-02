
/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var fs = require('fs');
var exec = require('child_process').exec;

var QueryMongo = (function() {

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.19:27017/test';
	var url03 = 'mongodb://192.168.2.34:27017/test';
	var url04 = 'mongodb://192.168.56.101:27017/test';

	function QueryMongo() {
		
	}

	QueryMongo.prototype.getData = function(result, fileContent) {
		console.log('Called getData');
		// Open the test database that comes with MongoDb
		MongoClient.connect(url01, function(err, database) {
			if (err) {
				throw err;
			}
			console.log('IngetDataCallback');
			readFileIn(database, 'mongo_mark', fileContent);
			readFileOut(database, 'mongo_mark');
			//convertToHtml;
			//insertIntoCollection(database, 'mongo_mark', fileContent);
			getCollection(database, result);
		});
	};
	
	var readFileIn = function(database, collection, fileContent)
	{
		var myJson = {
		"title": null,
		"text": null
		};

		myJson.title = "margie";
		myJson.text = fileContent;
		insertIntoCollection(database, collection, myJson);
	};	
		
		

	var readFileOut = function(database, collection)
	{
		var collection = database.collection('mongo_mark');
		collection.find().toArray(function(err, theArray){
			if (err) {
				throw err;
			}
			 
		 var myJson = {
				"title": theArray[0].title,
				"text": theArray[0].text,
		};
		console.log("Json readout created " + myJson.text);
		var JsonString =  JSON.stringify(myJson.text);
		console.log("Json to string " + JsonString);
		fs.writeFile("test.md", JsonString, function(err) {
			if(err) {
				console.log(err);
			} else {
			console.log("The file was saved!");
		convertToHtml();	
		}
		}); 
		
	})};	

	var convertToHtml = function()
	{
		
		exec('pandoc -t html5 -o test3.html test.md', function callback(error, stdout, stderr) { 
			// Read in the HTML send the HTML to the client
			console.log("convertToHtml was called");
			 });
	};	  
		

		
		
		
	var getCollection = function(database, response) {

		var collection = database.collection('mongo_mark');

		// View the collection
		collection.find().toArray(function(err, theArray) {
			console.dir(theArray);
			var body = '<html><body><h2>Mongo Data: ' + theArray[0].title + '</h2>';
			body += "<p>This HTML is hardcoded into Server.js. See the getCollection method.</p></body></html>";
			response.setHeader('Content-Type', 'text/html');
			response.setHeader('Content-Length', Buffer.byteLength(body));
			response.end(body);
			database.close();
		});

	};

	// Will create collection if it does not exist
	var insertIntoCollection = function(db, collectionName, objectToInsert) {

		var collection = db.collection(collectionName);
		collection.insert(objectToInsert, function(err, docs) {
			if (err) {
				throw err;
			}
			console.log("insert succeeded");
		});
	};

	return QueryMongo;

})();

app.get('/', function(request, response) {
  var q = new QueryMongo();
  var fileContent = fs.readFileSync("margie.md", 'utf8');
  var data =  q.getData(response, fileContent);
});

app.listen(30025);
console.log('Listening on port 30025');

/* $(document).ready(function() {
	var q = new QueryMongo();
}); */
