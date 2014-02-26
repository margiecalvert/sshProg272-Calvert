var MyObject = (function() {
	
	// Private Data
	var helloString = "MyObject says hello";

	// Constructor
	function MyObject() {
		console.log("MyObject.Constructor called");
	}

	MyObject.prototype.add = function(operandA, operandB) {
		return operandA + operandB;
	};	
	
	MyObject.prototype.computeFeetPerMile = function(operandA, operandB) {
		
		
		return operandA * operandB;
	};	
	
	MyObject.prototype.getCircumference = function(operandA) {
		
		var circumference = 2 * operandA * Math.PI;
		
		return circumference;
	};	



	return MyObject;

}());

exports.myObject = new MyObject();
