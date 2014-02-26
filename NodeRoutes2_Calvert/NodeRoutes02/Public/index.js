var RouteMaster = ( function() {

		// Constructor
		function RouteMaster() {
			//$("#getNine").click(getNine);
			//$("#getNineParse").click(getNineParse);
			//$("#add").click(add);
			//$("#addPost").click(addPost);
			$("#getFeetPerMile").click(getFeetPerMile);
			$("#computeFeetPerMile").click(computeFeetPerMile);
			$("#getCircumference").click(getCircumference);
		}
		

		/*var getNine = function() {
			var nineResult = $('#getNineResult');
			nineResult.load('/getNine', function(response, status, xhr) {
				if (status == "error") {
					nineResult.html("Error: <strong>" + xhr.statusText + "</strong>");
				}
			});
		}; */
		
		var getFeetPerMile = function() {
			var getFeetPerMileResult = $('#getFeetPerMileResult');
			getFeetPerMileResult.load('/getFeetPerMile', function(response, status, xhr) {
				if (status == "error") {
					nineResult.html("Error: <strong>" + xhr.statusText + "</strong>");
				}
			});
		};
		
		
		
		var computeFeetPerMile = function() {
			$("#numFeet").prop("readonly",true);
			var operandA = $("#numMiles").val();
			var operandB = $("#numFeet").val();
			

			$.ajax({
				url : "/computeFeetPerMile",
				type : "GET",
				data : {
					"operandA" : operandA,
					"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#computeFeetPerMileResult").html(operandA + " * " + operandB + " = " + data.result);
				},
				error: function(jqXHR, textStatus, errorThrown) {
					console.log(jqXHR.responseText);
					console.log(textStatus);
					console.log(errorThrown);
				}
			});
		};

		/*var getNineParse = function() {
			var nineResult = $('#getNineParseResult');
			$.get('/getNine', function(data) {
				nineResult.html("The value sent from the server is: <strong>" + data.result + "</strong>");
			});
		};

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
		}; */
		
		var getCircumference = function() {
			var operandA = $("#enterRadius").val();
			//var operandB = $("#operandBPost").val();

			$.ajax({
				url : "/getCircumference",
				type : "POST",
				data : {
					"operandA" : operandA,
					//"operandB" : operandB
				},
				dataType : "json",
				success : function(data) {					
					$("#getCircumferenceResult").html(2  + "*" + operandA + " * " + Math.PI + " = " + data.result);
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
