/**
 * @author Charlie Calvert
 */

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var fs = require('fs');

// Access Express and implement modular pattern
var QueryMongo = (function() {

	var url01 = 'mongodb://127.0.0.1:27017/test';
	var url02 = 'mongodb://192.168.2.19:27017/test';
	var url03 = 'mongodb://192.168.2.34:27017/test';
	var url04 = 'mongodb://192.168.56.101:27017/test';
	var collectionName = 'test_insert';
	
	function QueryMongo() {

	}

	QueryMongo.prototype.getData = function(response) {
		console.log('Called getData');
		
		// Open the test database that comes with MongoDb
		MongoClient.connect(url01, function(err, database) {
			if (err) {
				throw err;
			}
			clearCollection(database, collectionName);
			createCollection(database);
			console.log('IngetDataCallback');
			getCollection(database, response);
		});

	};
	
	// Will create collection if it does not exist
    var clearCollection = function(db, collectionName) {
		console.log('clearcollection called');
        var collection = db.collection(collectionName);
        collection.remove(function(err) {
			if (err) {
				throw err;
			}
		});
    };
	
	var getCollection = function(database, response) {
		console.log('getCollection called');
		var collection = database.collection(collectionName);		

		// Send the collection to the client.
		collection.find().toArray(function(err, theArray) {
			console.dir(theArray);
			database.close();
			response.send(theArray);
		});

	};
	
	// Will create collection if it does not exist
    var insertIntoCollection = function(db, collectionName, objectToInsert) {
		console.log('insertIntoCollection called');
        var collection = db.collection(collectionName);
        collection.insert(objectToInsert, function(err, docs) {
            // getCollection(db);
        });
    };
    
	//To Create my collection
	var createCollection = function(database) {
		console.log('createCollection called');
		var collection = database.collection('test_insert');
		
		 for (var count = 1000; count <1002; count++){ 
            insertIntoCollection(database, 'test_insert', { firstName : "James" + count,
				"lastName" : "Madison" + count,
				"address" : count + " Indigo Street",
				"city" : "Washington",
				"state" : "DC",
				"zip" : 98002});

        }};	

	return QueryMongo;

})();

// Express Code
app.get('/read', function(request, response) {
	console.log("read called");
	var q = new QueryMongo();
	var data = q.getData(response);	
});

// Default.
app.get('/', function(request, result){
  	var html = fs.readFileSync(__dirname + '/Public/index.html');
	result.writeHeader(200, {"Content-Type": "text/html"});   
	result.write(html);
	result.end();
});

// Give express access to the Public directory
app.use("/", express.static(__dirname + '/Public'));

// Tell the webserver (and user) to listen on port 30025
app.listen(30025);
console.log('Listening on port 30025');
