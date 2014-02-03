/**
 * @author Margie
 */

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

    $('#button01').click(setParagraph1);
    $('#button02').click(setParagraph2);
    $('#button03').click(setParagraph3);

    }


$(document).ready(function () {
     myHtmlObject();
});

