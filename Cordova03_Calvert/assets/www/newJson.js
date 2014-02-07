function myJSONObject() {
	
    this.GetData = function (event) {"use strict";
        var index = event.data.index;
        $.getJSON('index.json', function (data) {
            var result = "<p>First Name: " + data[index].firstName + "</p>";
            var value = "<p>Last Name: " + data[index].lastName + "</p>";
            var name = "#json";
            var divname = name.concat(index);
             $(divname).html(result + value);
        }).success(function () {
            console.log("csc: success. Loaded index.json");
        }).error(function (jqXHR, textStatus, errorThrown) {
            showError(jqXHR, textStatus, errorThrown);
        }).complete(function () {
            console.log("csc: completed call to get index.json");
        });
        };

    $('#buttonjson01').click({
        index : 0
    }, GetData);
    $('#buttonjson02').click({
        index : 1
    }, GetData);
    $('#buttonjson03').click({
        index : 2
    }, GetData);
}

$(document).ready(function () {"use strict";
    myJSONObject();
    });
