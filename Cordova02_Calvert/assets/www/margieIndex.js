/**
 * @author Margie
 */

var Clicker = (function() {

	var that = null;
	
	function Clicker() {
		that = this;
		$("#button01").click(tempConvertPrivate);
		$("#button02").click(this.milesConvert);
		$("#button03").click(this.sqrConvert);
	};
	
	var tempConvertPrivate = function(){
		var inputData = $('#tempInputData').val();
		that.tempConvert(inputData);
	};

	 Clicker.prototype.tempConvert = function(inputData) {
		var outputData1 = (inputData - 32);
		var outputData2 = outputData1 * 5;
		var outputData3 = outputData2 / 9;
		var stringToShowUser = 'Celsius: ' + outputData3;
		var inputStringToShowUser = 'Fahrenheit: ' + inputData;
		$('#tempOutputData').val(stringToShowUser);
		$('#tempInputData').val(inputStringToShowUser);
		outputData4 = parseInt(outputData3);
		return outputData4;
	};

	Clicker.prototype.milesConvert = function() {

		var inputData = $('#milesInputData').val();
		var outputData = (1.60934 * inputData);
		var stringToShowUser = 'Kilometers: ' + outputData;
		var inputStringToShowUser = 'Miles: ' + inputData;
		$('#kmOutputData').val(stringToShowUser);
		$('#milesInputData').val(inputStringToShowUser);
	};

	Clicker.prototype.sqrConvert = function() {

		var inputData = $('#sqrInputData').val();
		var outputData = (Math.sqrt(inputData));
		var stringToShowUser = 'Square Root: ' + outputData;
		var inputStringToShowUser = 'Integer: ' + inputData;
		$('#sqrOutputData').val(stringToShowUser);
		$('#sqrInputData').val(inputStringToShowUser);
	};
	return Clicker;

})();

$(document).ready(function() {
	new Clicker();
});

