var MongoData = (function() {'use strict';

	var mongoData = null;

	function MongoData() {
		$('#buttonBasic').load("Public/Pieces.html #buttonTemplate", function() {			
			$("#removeByAuthor").click(removeByAuthor);
			$("#removeAll").click(removeAll);
			$("#newRecord").click(insertNewDocument);
			$("#insertHopkins").click(insertHopkins);
			$("#showData").click(showData);
			$("#readRecords").click(readDocuments);
			$("#clearList").click(clearList);
			$("#findFairest").click(findFairest);
			$("#findTyrant").click(findTyrant);
			$.publish('buttonsLoaded', {id: "buttonBasic", list:'readTwo, newRecord, showData, readRecords, clearList'});
		});
		$('#intro').load("Public/Pieces.html #introTemplate");

	}

	var clearList = function() {
		$("#mongoData").empty();
	};

	var displayRecord = function(index) {
		$('#title').html(mongoData[index].title);
		$('#author').html(mongoData[index].author);
		$('#keywords').html(mongoData[index].keywords);
		$('#content').html(mongoData[index].content);
		//$('#state').html(mongoData[index].state);
		//$('#zip').html(mongoData[index].zip);
	};
	
	var displayTitle = function(index) {
		$('#title').html(mongoData[index].title);
		//$('#author').html(mongoData[index].author);
		//$('#keywords').html(mongoData[index].keywords);
		//$('#content').html(mongoData[index].content);
		//$('#state').html(mongoData[index].state);
		//$('#zip').html(mongoData[index].zip);
	};

	var showData = function() {
		var index = $("#userIndex").val();
		index = index-1;
		displayRecord(index);
	};
	//db.Poems.find({ keywords: {keyword: "fairest" }}, { title: 1, author: 1})

	// db.Poems.find({ keywords: {"keyword": "fairest" }}, { title: 1})
	// find({ keywords: {"keyword": "fairest" }})	
	var findFairest = function() {
		console.log("find keywords called");
		$.getJSON('/findKeywords', function(data) {
			console.log("in Keywords in index.js");
		});
	};
	
	var findTyrant = function() {
		console.log("find keywords2 called");
		$.getJSON('/findKeywords2', function(data) {
			console.log("in Keywords2 in index.js");
		});
	};
	
	var display1 = function() {
		// Call the server's app.get('/read', function() {}); function
        $.get('/read', function(data) {
			var textToDisplay = $(data).filter("#george-washington").html();
            $('#showData ').html(textToDisplay)
        }).error(function(err) {
            console.log(err.responseText);
        });
    };
	/*var findKeywords = function() {
		var keywordPoems = []; 
		keywordPoems = $.grep(mongoData
		
	var choosePoemByKeywords(){	
		var index = $("#userIndex").val();
		index = index-1;
		displayRecord(index);
	};*/

	function foo() {
		var allRecords = readAll();
	}

	/*var ui = {
	readAllUi: function() {
	that.readAll(function(data) {
	mongoData = data;
	console.log(data[0]);
	displayRecord(0);
	clearList();
	for (var i = 0; i < data.length; i++) {
	$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
	}
	});
	}
	};*/

	// HACK: This is temporary solution. Ultimately we will send messages to maintain
	// loose coupling between ClientUi and index.js
	MongoData.prototype.setData = function(data) {
		mongoData = data;
		displayRecord(0);
		clearList();
	};

	MongoData.prototype.readAll = function(callback) {
		console.log("readAll called");
		$.getJSON('/readAll', callback);
	};

	var insertNewDocument = function() {
		console.log("insert New Record called");
		$.getJSON('/insertJson', function(data) {
			var result = JSON.stringify(data);
			alert(result);
		});
	};
	
	
	
	var insertHopkins = function() {
		console.log("insert Hopkins called");
		$.getJSON('/insertHopkins', function(data) {
			var result = JSON.stringify(data);
			alert(result);
		});
	};
	
	var removeByAuthor = function() {
		console.log("remove Hopkins called");
		$.getJSON('/removeByAuthor', function(data) {
			//var result = JSON.stringify(data);
			alert("Hopkins deleted in index.js");
		});
	};
	
	var removeAll = function() {
		console.log("remove all called");
		$.getJSON('/removeAll', function(data) {
			//var result = JSON.stringify(data);
			alert("All records deleted in index.js");
		});
	};

	var readTwo = function() {
		console.log("readTwo called");
		$.getJSON('/readDocuments', function(data) {
			mongoData = data;
			console.log(data[0]);
			console.log(data[1]);
			displayRecord(0);
			clearList();
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};

	var readDocuments = function() {
		console.log("readTwo called");
		var request = {};
		request.numRequested = $('#numRequested').val();
		$.getJSON('/readDocuments', request, function(data) {
			mongoData = data;
			console.log(data[0]);
			console.log(data[1]);
			displayRecord(0);
			clearList();
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});

	};
	
	
		
		
		
		
	
	

	return MongoData;
})();

