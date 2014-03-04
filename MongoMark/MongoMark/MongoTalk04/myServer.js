
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
	var collectionName = "mongo_mark";
	var database = null;

	function QueryMongo() {
		
	}

	var getDatabase = function(callback) {
		console.log('Called QueryMongo.getDatabase');
		if (database !== null) {
			console.log('database exists');
			database.open(function(err, database) {
				if (err) {
					throw err;
				}
				callback(database);
			});
		} else {
			console.log('Querying for database');
			MongoClient.connect(url01, function(err, databaseResult) {
				if (err) {
					throw err;
				}
				database = databaseResult;
				callback(database);
			});
		}
	};
	
	QueryMongo.prototype.getData = function(result, fileContent) {
		console.log('Called getData');
		// Open the test database that comes with MongoDb
		getDatabase(function(err, database) {
			if (err) {
				throw err;
			}
			console.log('IngetDataCallback');
			readFileIn(database, collectionName, fileContent);
			readFileOut(database, collectionName);
			//convertToHtml;
			//insertIntoCollection(database, collectionName, fileContent);
			getCollection(database, result);
		});
	};

	QueryMongo.prototype.readMarkDown = function(title, fileName) {
		var myJson = {
			"title": null,
			"text": null
		};

		myJson.title = title;		
		var fileContent = fs.readFileSync("PresidentsIn.md", 'utf8');
		myJson.text = fileContent;
		
		return myJson;
	};
		
	
	QueryMongo.prototype.readFileOut = function(response) {
		console.log("readFileOut called");
		getDatabase(function(database) {			
			var collection = database.collection(collectionName);
			collection.find().toArray(function(err, theArray) {
				if (err) {
					throw err;
				}
				database.close();
				console.log(typeof theArray[theArray.length-1].text);
				var output = theArray[theArray.length-1].text;
				writeFile(response, output);
				// response.send(theArray[0]);				
			});
		}); 		
	};	

	var writeFile = function(response, jsonString) {
		fs.writeFile("test.md", jsonString, function(err) {
			if(err) {
				console.log(err);
			} else {
				console.log("The file was saved!");
				convertToHtml(response);
			}			
		});
	};

	var convertToHtml = function(response)	{		
		exec('pandoc -t html5 test.md', function callback(error, stdout, stderr) { 
			// Read in the HTML send the HTML to the client			
			console.log("convertToHtml was called");
			response.send(stdout);
		});
	};	
			
		
		
	var getCollection = function(database, response) {

		var collection = database.collection(collectionName);

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
	QueryMongo.prototype.insertIntoCollection = function(response, objectToInsert) {

		getDatabase(function(database) {
			var collection = database.collection(collectionName);
			collection.insert(objectToInsert, function(err, docs) {
				if (err) {
					console.log('Error occurred');
					throw err;
				}
				console.log("insert succeeded: " + JSON.stringify(docs));
				database.close();
				response.send({ result: "Success", document: docs });
			});
		});
	};

	return QueryMongo;

})();

var queryMongo = new QueryMongo;
var markDownName = 'PresidentsIn.md';

app.get('/getData', function() {
	var data =  q.getData(response, fileContent);
});

app.get('/hello', function(request, response) {
	console.log("hello is called");
	response.send("Hello");
});

app.get('/readMarkdown', function(request, response) {
	console.log("readMarkdown called");
	var jsonObject = queryMongo.readMarkDown('Presidents', markDownName);
	response.send(jsonObject);
});

app.get('/insertMarkdown', function(request, response) {
	console.log('insertMarkdown');
	var jsonObject = queryMongo.readMarkDown(markDownName);
	queryMongo.insertIntoCollection(response, jsonObject);
});

app.get('/readFileOut', function(request, response) {
	console.log('readFileOut called');
	queryMongo.readFileOut(response);
});

app.get('/read', function(request, response) {
	queryMongo.readFileOut(response);  
});

app.get('/', function(request, response) {
	var html = fs.readFileSync(__dirname + '/Public/index.html');
	response.writeHeader(200, { "Content-Type" : "text/html" });
	response.write(html);
	response.end(); 
});

app.use("/", express.static(__dirname + '/Library'));
app.use("/Public/", express.static(__dirname + '/Public'));
app.use("/Tests/", express.static(__dirname + '/Tests'));
app.use("/Library/", express.static(__dirname + '/Library'));

app.listen(30025);
console.log('Listening on port 30025');

/* $(document).ready(function() {
	var q = new QueryMongo();
}); */
