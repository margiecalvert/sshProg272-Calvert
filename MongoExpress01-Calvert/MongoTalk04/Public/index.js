var MongoData = (function() { 'use strict';

	var mongoData = null;

	function MongoData() {	
			
		$("#readAll").click(queryAll);
		$("#query1").click(queryOne);
		$("#showData").click(showData);
		
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
		console.log("Show Data called");
		$("#mongoData").empty();
		var index = $("#userIndex").val();
		displayRecord(index);
	}; 

	var queryAll = function() {
		console.log(" called");
		$.getJSON('/readAll', function(data) {
			mongoData = data;
			console.log(data);
			displayRecord(0);
			$("#mongoData").empty();
			for (var i = 0; i < data.length; i++) {
				$("#mongoData").append('<li>' + JSON.stringify(data[i]) + '</li>');
			}
		});
	};

	var queryOne = function() {
		console.log("readOne called");
		$.getJSON('/readOne', function(data) {
			var index = $("#userIndex").val();
			mongoData = data;
			console.log(data);
			$("#mongoData").append('<li>' + JSON.stringify(data[index]) + '</li>');
			
		});
	};

	return MongoData;
})();

$(document).ready(function() { 'use strict';
	var o = new MongoData();

});
