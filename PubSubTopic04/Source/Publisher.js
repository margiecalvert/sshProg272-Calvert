/**
 * @author Charlie Calvert
 */

// Publisher
define(['jquery', 'tinyPubSub'], function() {

	function publisher() {
		console.log("Publisher constructor called.");
		$("#privateButton").click(privateMethod);
		$.publish('debug', {
			message : "Publisher Constructor Called"
		});
		
		$("#addButton").click(addMethod);
		$.publish('debug', {
			message : "Publisher Constructor Called Add"
		});
	}

	var privateMethod = function() {
		console.log("Publisher private method called.");
		$.publish('debugDetail', 'Publisher privateMethod called by Messenger');
	};
	
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
		$.publish('debugDetail', 'Publisher privateMethod Add called by Messenger');
	};
	
	return {publisher: publisher};

});

