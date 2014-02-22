
var RouteMaster = ( function() {
        var operandA = 10;
		var operandB =  5;
		
		// Constructor
		function RouteMaster() {
			
			
		}

		/*var getNine = function() {
			var nineResult = $('#getNineResult');
			nineResult.load('/getNine', function(response, status, xhr) {
				if (status == "error") {
					nineResult.html("Error: <strong>" + xhr.statusText + "</strong>");
				}
			});
		};

		var getNineParse = function() {
			var nineResult = $('#getNineParseResult');
			$.get('/getNine', function(data) {
				nineResult.html("The value sent from the server is: <strong>" + data.result + "</strong>");
			});
		};*/

		var add = function() {
			

			$.ajax({
				url : "/add",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					console.log("Added two numbers: " +operandA + " + " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};

		var addPost = function() {
			

			$.ajax({
				url : "/add",
				type : "POST",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					console.log("Posted two added numbers:  " + operandA + " + " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};
		
		var subtract = function() {
			

			$.ajax({
				url : "/subtract",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					console.log("Subtracted one number from another: " + operandA + " - " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};

		var subtractPost = function() {
			

			$.ajax({
				url : "/subtract",
				type : "POST",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					console.log("Posted result of subtraction: " + operandA + " - " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};
		
		var multiply = function() {
			

			$.ajax({
				url : "/multiply",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					console.log("Multiplied one number by another: " + operandA + " * " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};

		var multiplyPost = function() {
			

			$.ajax({
				url : "/multiply",
				type : "POST",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					console.log("Posted result of multiplication: " + operandA + " * " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};


		// Return constructor
		return RouteMaster;
	}());

$(document).ready(function() {
	new RouteMaster();
}); 
