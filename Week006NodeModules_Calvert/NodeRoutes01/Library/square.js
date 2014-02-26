
var MySquare = (function() {
	
	// Private Data
	var helloString = "MyObject says hello";
	
	

	// Constructor
	function MySquare() {
		console.log("MySquare.Constructor called");
	}

	MySquare.prototype.sayHello = function() {
		console.log(helloString);
	};
	
	MySquare.prototype.square4 = function() {
	  
	  var result = 4 * 4;
	  console.log("The Square of 4 is " + result);
	  return result;
	};

	return MySquare;

}());

exports.mySquare = new MySquare();
