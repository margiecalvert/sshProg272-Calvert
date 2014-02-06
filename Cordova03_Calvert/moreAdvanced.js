
//function setParagraph1() {
//        $('#div01').load("Sources.html #paragraph01", function () {
 //           console.log("Load was performed.");
 //       });
//   };
 //  
   
 this.GetData = function(data) {
		$.getJSON('index.json', function(data) {
			var result = "<p>First Name: " + data[0].firstName + "</p>";
			var value = "<p>Last Name: " + data[0].lastName + "</p>";
			$("#divjson1").html(result + value);
		}).success(function() {
			console.log("csc: success. Loaded index.json");
		}).error(function(jqXHR, textStatus, errorThrown) {
			showError(jqXHR, textStatus, errorThrown);
		}).complete(function() {
			console.log("csc: completed call to get index.json");
		});
	};
 	
	
 	 $(document).ready(function() {
	$('#buttonjson01').click(getJSON);
});


/*


function myHtmlObject() {'use strict';

     

     function setParagraph1() {
        $('#div01').load("Sources.html #paragraph01", function () {
            console.log("Load was performed.");
        });
    }
     function setParagraph2() {
        $('#div02').load("Sources.html #paragraph02", function () {
            console.log("Load was performed.");
        });
    }

     function setParagraph3() {
        $('#div03').load("Sources.html #paragraph03", function () {
            console.log("Load was performed.");
        });
    }

   
    
    $('#buttonhtml01').click(setParagraph1);
    $('#buttonhtml02').click(setParagraph2);
    $('#buttonhtml03').click(setParagraph3);
	
    }


$(document).ready(function () {
     myHtmlObject();
});

*/