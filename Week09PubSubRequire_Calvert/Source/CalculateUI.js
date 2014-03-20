/**
 * @author Charlie Calvert
 */

// Publisher
define(['jquery', 'tinyPubSub'], function() {

	function publisher() {
		
		
		$("#addButton").click(addMethod);
		$.publish('debug', {
			message : "Publisher Constructor Called Add"
		});
		
		$("#subtractButton").click(subtractMethod);
		$.publish('debug', {
			message : "Publisher Constructor Called Subtract"
		});
		
		$("#multiplyButton").click(multiplyMethod);
		$.publish('debug', {
			message : "Publisher Constructor Called Multiply"
		}); 
	}

	
	
	var addMethod = function() {
		console.log("Publisher private method Add called.");
		var int1 = $("#userInput1").val();
		var int2 = $("#userInput2").val();
		var integer1 = parseInt(int1);
		var integer2 = parseInt(int2);
		var result = integer1 + integer2;
		var resultString = ("The result is: " + result);
		console.log(resultString);
		$.publish('debugDetail', resultString);
		//$.publish('debugDetail', 'Publisher privateMethod Add called by Messenger');
	};
	
	var subtractMethod = function() {
		console.log("Publisher private method Subtract called.");
		var int1 = $("#userInput1").val();
		var int2 = $("#userInput2").val();
		var integer1 = parseInt(int1);
		var integer2 = parseInt(int2);
		var result = integer1 - integer2;
		var resultString = ("The result is: " + result);
		console.log(resultString);
		$.publish('debugDetail', resultString);
		//$.publish('debugDetail', 'Publisher privateMethod Subtract called by Messenger');
	};
	
	var multiplyMethod = function() {
		console.log("Publisher private method multiply called.");
		var int1 = $("#userInput1").val();
		var int2 = $("#userInput2").val();
		var integer1 = parseInt(int1);
		var integer2 = parseInt(int2);
		var result = integer1 * integer2;
		var resultString = ("The result is: " + result);
		console.log(resultString);
		$.publish('debugDetail', resultString);
		//$.publish('debugDetail', 'Publisher privateMethod Subtract called by Messenger');
	};
	
	return {publisher: publisher};

});

