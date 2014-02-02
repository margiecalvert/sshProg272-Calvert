/**
 * @author Margie
 */

function setParagraph1() {
	$('#div01').load("Sources.html #paragraph01", function() {

		console.log("Load was performed.");
	});
};

function setParagraph2() {
	$('#div02').load("Sources.html #paragraph02", function() {

		console.log("Load was performed.");
	});
};

function setParagraph3() {
	$('#div03').load("Sources.html #paragraph03", function() {

		console.log("Load was performed.");
	});
};

/*function setParagraph(num) {
	paragraphNum = ("#paragraph0" + num);
	stringToLoad = "Sources.html" + paragraphNum;
	$('#div03').load(stringToLoad , function() {

		console.log("Load was performed.");
	});
};*/

$(document).ready(function() {
	$('#button01').click(setParagraph1);
	$('#button02').click(setParagraph2);
	$('#button03').click(setParagraph3);
});

