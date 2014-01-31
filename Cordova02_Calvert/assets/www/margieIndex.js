/**
 * @author Margie
 */

var Clicker = (function() {

	var that = null;

	function Clicker() {
		that = this;
		$("#button01").click(tempConvertPrivate);
		$("#button02").click(milesConvertPrivate);
		$("#button03").click(sqrConvertPrivate);
	};

	var tempConvertPrivate = function() {
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

	var milesConvertPrivate = function() {
		var inputData = $('#milesInputData').val();
		that.milesConvert(inputData);
	};

	Clicker.prototype.milesConvert = function(inputData) {
		var outputData = (1.60934 * inputData);
		var stringToShowUser = 'Kilometers: ' + outputData;
		var inputStringToShowUser = 'Miles: ' + inputData;
		$('#kmOutputData').val(stringToShowUser);
		$('#milesInputData').val(inputStringToShowUser);
		outputDataNum = parseInt(outputData);
		return outputDataNum;
	};

	var sqrConvertPrivate = function() {
		var inputData = $('#sqrInputData').val();
		that.sqrConvert(inputData);
	};

	Clicker.prototype.sqrConvert = function(inputData) {
		var outputData = (Math.sqrt(inputData));
		var stringToShowUser = 'Square Root: ' + outputData;
		var inputStringToShowUser = 'Integer: ' + inputData;
		$('#sqrOutputData').val(stringToShowUser);
		$('#sqrInputData').val(inputStringToShowUser);
		sqrOutputDataNum = parseInt(outputData);
	};
	return Clicker;

})();

$(document).ready(function() {
	new Clicker();
});

