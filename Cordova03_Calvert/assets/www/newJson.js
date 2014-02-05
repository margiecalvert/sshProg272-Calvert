function MyObject() {
	this.GetData1 = function(data) {
		$.getJSON('index.json', function(data) {
			var result = "<p>First Name: " + data[0].firstName + "</p>";
			var value = "<p>Last Name: " + data[0].lastName + "</p>";
			$("#div01json").html(result + value);
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			showError(jqXHR, textStatus, errorThrown);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
	};

	this.GetData2 = function(data) {
		$.getJSON('index.json', function(data) {
			var result = "<p>First Name: " + data[1].firstName + "</p>";
			var value = "<p>Last Name: " + data[1].lastName + "</p>";
			$("#div02json").html(result + value);
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			showError(jqXHR, textStatus, errorThrown);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
	};

	this.GetData3 = function(data) {
		$.getJSON('index.json', function(data) {
			var result = "<p>First Name: " + data[2].firstName + "</p>";
			var value = "<p>Last Name: " + data[2].lastName + "</p>";
			$("#div03json").html(result + value);
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			showError(jqXHR, textStatus, errorThrown);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
	};
	$('#buttonjson01').click(GetData1);
	$('#buttonjson02').click(GetData2);
	$('#buttonjson03').click(GetData3);
};

$(document).ready(function() {
	MyObject();

});
