var RouteMaster = ( function() {

		// Constructor
		function RouteMaster() {
			$("#getNine").click(getNine);
			$("#getNineParse").click(getNineParse);
			$("#addPost").click(addPost);
			$("#subtract").click(subtract);
			$("#multiply").click(multiply);
			
		}

		var getNine = function() {
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
		};
		
		/*var feetMiles = function() {
			var operandA = $("#operandA").val();
			var operandB = $("#operandB").val();

			$.ajax({
				url : "/feetMiles",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#feetMilesResult").html(operandA + " * " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};*/

		var add = function() {
			var operandA = $("#operandA").val();
			var operandB = $("#operandB").val();

			$.ajax({
				url : "/add",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#addResult").html(operandA + " + " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};
		
		var multiply = function() {
			var operandA = $("#operandA").val();
			var operandB = $("#operandB").val();

			$.ajax({
				url : "/multiply",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#multiplyResult").html(operandA + " * " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};
		
		
		var subtract = function() {
			var operandA = $("#operandA").val();
			var operandB = $("#operandB").val();

			$.ajax({
				url : "/subtract",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#subtractResult").html(operandA + " - " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};
		
	/*	var square = function() {
			var operandA = $("#operandA").val();
			var operandB = $("#operandA").val();

			$.ajax({
				url : "/square",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandA
				},
				dataType : "json",
				success : function(data) {					
					$("#squareResult").html(operandA + " * " + operandA + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};*/

		var addPost = function() {
			var operandA = $("#operandAPost").val();
			var operandB = $("#operandBPost").val();

			$.ajax({
				url : "/add",
				type : "POST",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#addResultPost").html(operandA + " + " + operandB + " = " + data.result);
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
