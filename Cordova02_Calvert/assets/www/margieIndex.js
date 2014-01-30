/**
 * @author Margie
 */

var Clicker = (function() {

	function Clicker() {
		$("#button01").click(this.tempConvert);
		$("#button02").click(this.milesConvert);
		$("#button03").click(this.sqrConvert);
	};

	 Clicker.prototype.tempConvert = function() {

		var inputData = $('#tempInputData').val();
		var outputData1 = (inputData - 32);
		var outputData2 = outputData1 * 5;
		var outputData3 = outputData2 / 9;
		var stringToShowUser = 'Celsius: ' + outputData3;
		var inputStringToShowUser = 'Fahrenheit: ' + inputData;
		$('#tempOutputData').val(stringToShowUser);
		$('#tempInputData').val(inputStringToShowUser);
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

