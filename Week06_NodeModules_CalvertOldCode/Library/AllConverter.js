

var MyObject = (function() {
	
	// Private Data
	var helloString = "MyObject says hello";

	// Constructor
	function MyObject() {
		console.log("MyObject.Constructor called");
	}
	
	MyObject.prototype.convertMiles = function(operandA) {
		var feetToMile = 5280;
		return operandA * feetToMile;
	};	


	MyObject.prototype.add = function(operandA, operandB) {
		return operandA + operandB;
	};	
	
	MyObject.prototype.subtract = function(operandA, operandB) {
		return operandA + operandB;
	};	
	
	MyObject.prototype.multiply = function(operandA, operandB) {
		return operandA + operandB;
	};	

	return MyObject;

}());

exports.myObject = new MyObject();
