/**
 * @author Margie
 */

function myHtmlObject(){

    function setParagraph1(){'use strict';
		$('#div01').load("Sources.html #paragraph01", function() {

			console.log("Load was performed.");
		});
	};

	function setParagraph2(){'use strict';
		$('#div02').load("Sources.html #paragraph02", function() {

			console.log("Load was performed.");
		});
	};

	function setParagraph3(){'use strict';

		$('#div03').load("Sources.html #paragraph03", function() {

			console.log("Load was performed.");
		});
	};

	$('#button01').click(setParagraph1);
	$('#button02').click(setParagraph2);
	$('#button03').click(setParagraph3);

}


$(document).ready(function() {
	myHtmlObject();

});

