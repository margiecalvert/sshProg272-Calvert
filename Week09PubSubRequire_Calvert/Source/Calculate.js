/**
 * @author Charlie Calvert
 */

define(['jquery', 'tinyPubSub'], function() {

	/*
	 * The point is that there is no reference to Publisher
	 * in this module and yet it can recieve messages from
	 * it
	 */
	function subscriber() {
		console.log("Subscriber constructor called.");
		$.subscribe('debugDetail', addMethod);
		$.subscribe('debugDetail', subtractMethod);
		$.subscribe('debugDetail', multiplyMethod);
	}

	function addMethod(event, customMessage) {
		console.log("Subscriber add called.");
		console.log(event);
		$("#resultOutput").html(customMessage.message);
	}

	function subtractMethod(event, customMessage) {
		console.log("Subscriber subtract called.");
		console.log(event);
		$("#resultOutput").html(customMessage);
	} 
	
	function multiplyMethod(event, customMessage) {
		console.log("Subscriber multiply called.");
		console.log(event);
		$("#resultOutput").html(customMessage);
	} 
	
	

	return {subscriber: subscriber};

});
