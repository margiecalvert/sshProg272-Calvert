var MongoData = (function() {'use strict';

	var mongoData = null;
	var url = 'http://192.168.2.13:30025';

	function MongoData() {
		$('#buttonBasic').load("Public/Pieces.html #buttonTemplate", function() {			
			$("#removeByAuthor").click(removeByAuthor);
			$("#removeAll").click(removeAll);
			$("#newRecord").click(insertNewDocument);
			$("#insertHopkins").click(insertHopkins);
			$("readAll").click(readAll);
			$("#showData").click(showData);
			$("#readRecords").click(readDocuments);
			$("#clearList").click(clearList);
			$("#findFairest").click(findFairest);
			$("#findTyrant").click(findTyrant);
			$("#").click(findTyrant);
			$.publish('buttonsLoaded', {id: "buttonBasic", list:'readTwo, newRecord, showData, readRecords, clearList'});
		});
		$('#intro').load("Public/Pieces.html #introTemplate");

	}

	var clearList = function() {
		$("#mongoData").empty();
		$("#keywordsData").empty();
		$("#keywords2Data").empty();
		
	};

	var displayRecord = function(index) {
		$('#title').html(mongoData[index].title);
		$('#author').html(mongoData[index].author);
		$('#keywords').html(mongoData[index].keywords);
		$('#content').html(mongoData[index].content);
		//$('#state').html(mongoData[index].state);
		//$('#zip').html(mongoData[index].zip);
	};
	
	

	var showData = function() {
		var index = $("#userIndex").val();
		index = index-1;
		displayRecord(index);
	};
	
	var findFairest = function() {
		console.log("find keywords called");
		$.getJSON(url + '/findKeywords', function(data) {
			console.log("in Keywords in index.js");
			for (var i = 0; i < data.length; i++) {
				$("#keywordsData").append('<li>' + "Sonnet containing 'fairest'" + JSON.stringify(data[i]) + '</li>');
			}
		});
	};
	
	var findTyrant = function() {
		console.log("find keywords2 called");
		$.getJSON(url + '/findKeywords2', function(data) {
			console.log("in Keywords2 in index.js");
			for (var i = 0; i < data.length; i++) {
				$("#keywords2Data").append('<li>' + "Sonnet containing 'tyrant'" + JSON.stringify(data[i]) + '</li>');
			}
		});
	};
	
	
	

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
		$.getJSON(url + '/readAll', callback);
	};

	var insertNewDocument = function() {
		console.log("insert New Record called");
		$.getJSON(url + '/insertJson', function(data) {
			var result = JSON.stringify(data);
			alert(result);
		});
	};
	
	
	
	var insertHopkins = function() {
		console.log("insert Hopkins called");
		$.getJSON(url + '/insertHopkins', function(data) {
			var result = JSON.stringify(data);
			alert(result);
		});
	};
	
	var removeByAuthor = function() {
		console.log("remove Hopkins called");
		$.getJSON(url + '/removeByAuthor', function(data) {
			//var result = JSON.stringify(data);
			alert("Hopkins deleted in index.js");
		});
	};
	
	var removeAll = function() {
		console.log("remove all called");
		$.getJSON(url + '/removeAll', function(data) {
			//var result = JSON.stringify(data);
			alert("All records deleted in index.js");
		});
	};

	var readTwo = function() {
		console.log("readTwo called");
		$.getJSON(url + '/readDocuments', function(data) {
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
		console.log("readDocuments called");
		var request = {};
		request.numRequested = $('#numRequested').val();
		$.getJSON(url + '/readDocuments', request, function(data) {
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

