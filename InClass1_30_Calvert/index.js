/**
 * @author Margie
 */
function MyObject() {
	this.GetData = function(data) {
		$.getJSON('index.json', function(data) {
			var result = "<p>First Name: " + data[0].firstName + "</p>";
			var value = "<p>Last Name: " + data[0].lastName + "</p>";
			$("#resultDiv").html(result + value);
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			showError(jqXHR, textStatus, errorThrown);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
	};
	this.getHtml = function() {
		$('resultDiv02').load("MyFile.html #paragraph01", function() {

			console.log("Load was performed.");
		});
	};

};

$(document).ready(function() {
	var myObject = new MyObject();
	myObject.GetData();
	myObject.getHtml();
});
