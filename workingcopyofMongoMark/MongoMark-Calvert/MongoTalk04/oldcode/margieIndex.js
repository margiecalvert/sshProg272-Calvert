var Run = (function() {

    // Constructor for module pattern
    function Run() {
		

        // Call the server's app.get('/read', function() {}); function
        $.get('/read', function(data) {
            // do something with HTML sent from the server
        }).error(function(err) {
            console.log(err.responseText);
        });
    }
    
    function init() {		
		$("#readIn").click(readIn);
		$("#convert").click(convert);
		$("#display").click(display);
		/*$("#showData").click(showData);
		$("#readRecords").click(readDocuments);*/
	}

    // return the constructor.
    return Run;
})();

$(document).ready(function() {
    new Run();  
});



/*var MongoData = (function() { 'use strict';

	var mongoData = null;

	function MongoData() {		
		$("#readAll").click(readAll);
		$("#readTwo").click(readTwo);
		$("#newRecord").click(insertNewDocument);
		$("#showData").click(showData);
		$("#readRecords").click(readDocuments);
	}

	var displayRecord = function(index) {
		$('#firstName').html(mongoData[index].firstName);
		$('#lastName').html(mongoData[index].lastName);
		$('#address').html(mongoData[index].address);
		$('#city').html(mongoData[index].city);
		$('#state').html(mongoData[index].state);
		$('#zip').html(mongoData[index].zip);
	};

	var showData = function() {
		var index = $("#userIndex").val();
		displayRecord(index);
	};

	function foo() {
		var allRecords = readAll();
	}
	
	var readAll = function() {
		console.log("readAll called");
		$.getJSON('/readAll', function(data) {
			mongoData = data;
			console.log(data[0]);
			displayRecord(0);
			$("#mongoData").empty();
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};

	var insertNewDocument = function() {
		console.log("insert New Record called");
		$.getJSON('/newDocument', function(data) {
			var result = JSON.stringify(data);
			alert(result);
		});
	};
	
	var readTwo = function() {
		console.log("readTwo called");
		$.getJSON('/readTwo', function(data) {
			mongoData = data;
			console.log(data[0]);
			console.log(data[1]);
			displayRecord(0);
			$("#mongoData").empty();
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
			$("#mongoData").empty();
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
		
	};

	return MongoData;
})();

$(document).ready(function() { 'use strict';
	var o = new MongoData();

});*/
