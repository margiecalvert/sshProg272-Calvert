var SquareObject = (function() {
	
	// Private Data
	var helloString = "MyObject says hello";

	// Constructor
	function SquareObject() {
		console.log("MyObject.Constructor called");
	}

	SquareObject.prototype.square = function(operandA) {
		return operandA * operandA;
	};	

	return SquareObject;

}());

exports.squareObject = new SquareObject();
