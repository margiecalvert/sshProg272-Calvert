/**
 * @author Margie
 */

function myHtmlObject() {'use strict';

     function setParagraph(event) {
        var index = event.data.index;
        var num = index + 1;
        var name = "#div0";
        var divName = name.concat(index);
        

        $(divName).load("Sources.html #paragraph0" + num, function() {
            console.log("Load was performed.");
        });
    }


     $('#buttonhtml01').click({
        index : 0
    }, setParagraph);
     $('#buttonhtml02').click({
        index : 1
    }, setParagraph);
     $('#buttonhtml03').click({
        index : 2
    }, setParagraph);
    }


$(document).ready(function () {"use strict";
     myHtmlObject();
    });

