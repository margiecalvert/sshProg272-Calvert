/**
 * @author Charlie Calvert
 */

var MongoClient = require('mongodb').MongoClient;

var QueryMongo = (function() {'use strict';

	var response = null;
	var database = null;
	var url = null;
	var collectionName = 'test_insert';
	
	function QueryMongo() {
		var urls = ['mongodb://127.0.0.1:27017/test',
			'mongodb://192.168.2.19:27017/test',
			'mongodb://192.168.2.34:27017/test',
			'mongodb://192.168.56.101:27017/test'];

		url = urls[0];
		
	}

	var getDatabase = function(func) {
		console.log('Called getData');
		if (database !== null) {
			console.log('database exists');
			clearCollection(database, collectionName);
			console.log("cleared collection");
			createCollection(database);
			console.log("Created colleciton");
			
			
			database.open(function(err, database) {
				if (err) {
					throw err;
				}
				func(database);
			});
		} else {
			console.log('Querying for database');
			MongoClient.connect(url, function(err, databaseResult) {
				if (err) {
					throw err;
				}
				database = databaseResult;
				func(database);
			});
		}
	};
	
	// Will clear collection collection if it does not exist
    var clearCollection = function(db, collectionName) {
		console.log('clearcollection called');
        var collection = db.collection(collectionName);
        collection.remove(function(err) {
			if (err) {
				throw err;
			}
		});
    };
    
    //will create collection
    
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

	QueryMongo.prototype.getCollection = function(initResponse) {
		console.log("getCollection called");
		response = initResponse;
		getDatabase(function getCol(database) {
			var collection = database.collection('test_insert');

			// Send the collection to the client.
			collection.find().toArray(function(err, theArray) {
				console.dir(theArray);
				database.close();
				response.send(theArray);
			});
		});
	};
	
	QueryMongo.prototype.getCollectionCount = function(initResponse, count) {
		console.log("getCollection called");
		response = initResponse;
		getDatabase(function getCol(database) {
			var collection = database.collection('test_insert');

			// Send the collection to the client.
			collection.find().limit(count).toArray(function(err, theArray) {
				console.dir(theArray);
				database.close();
				response.send(theArray);
			});
		});
	};

	return QueryMongo;

})();


exports.QueryMongo = new QueryMongo();
