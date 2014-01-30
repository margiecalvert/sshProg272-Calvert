var linkClick = function() {
        $("#data01").html("Link clicked");
};

var buttonClick = function() {
        $("#data01").html("Button Clicked");
};

var inputData = $('#inputData').val();

var stringToShowUser = 'You entered: ' + inputData;
$('#inputData').val(stringToShowUser);


$(document).ready(function() { 
        
        $("#button01").click(buttonClick);
});