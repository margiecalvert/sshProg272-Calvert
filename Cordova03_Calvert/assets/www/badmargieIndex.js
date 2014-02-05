/**
 * @author Margie
 */
/**
 * @author Margie
 */
function myJsonObject() {
	GetData1 = function(data) {
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
	
	GetHtml = function() {
		$('#div01json').load("Sources.html #Paragraph01 " , function() {

			console.log("Load was performed.");
		});
	};

};

$(document).ready(function() {
	myJsonObject();
});