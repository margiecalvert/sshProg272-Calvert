define(['jquery'], function() {'use strict';

    var buttons = null;
    var options = null;
    var transformOptions = null;
    var dataIndex = 0;
    var dataIndexTransform = 0;
    var changeCount = 0;

    function AwsUi() {
        $("#listBuckets").click(listBuckets);
        $("#copyToS3").click(copyToS3);
        $("#getOptions").click(getOptions);
        $("#transformForwardButton").click(forwardTransform);
        $("#tranformBackButton").click(backwardTransform);
        $("#forwardButton").click(forward);
        $("#backButton").click(backward);
        $("#changeOptions").click(saveOptions);

        $("#buildAll").click(buildAll);
        getBuildConfig();
        getOptions();
    }
    


    var buildAll = function() {
        $.getJSON("/buildAll", {
            options : JSON.stringify(transformOptions),
            index : dataIndexTransform
        }, function(result) {
            $("#buildData").empty();
            var fileArray = result.data.split("\n");
            for (var i = 0; i < fileArray.length; i++) {
                if (fileArray[i].length > 0) {
                    $("#buildData").append("<li>" + fileArray[i] + "</li>");
                }
            }
        });
    };
    
    var saveOptions = function() {
		var pathToConfig = $("#pathToConfig").val();
        options[dataIndex].pathToConfig = pathToConfig;
        var reallyWrite = $("#reallyWrite").val();        
        options[dataIndex].reallyWrite = reallyWrite === "true" ? true : false;       
        console.log(typeof reallyWrite);
        $.getJSON("/saveOptions", {
            options : JSON.stringify(options)
           
            }, function(data) {
			$("#changeResult").html(data.result + changeCount++); 
			$("#pathToConfig").val = options[dataIndex].pathToConfig; 
			$("#reallyWrite").val = $("#reallyWrite").val(options[dataIndex].reallyWrite ? "true" : "false");
			
		});
    };
    
	/*var convertToBool = function(string) {
		if(string ="true") {  
		    return true;  
		} else {  
			return false;  
		}
	}*/

    var copyToS3 = function() {
        $.getJSON("/copyToS3", {
            options : JSON.stringify(options[dataIndex])
        }, function(data) {
            $("#copyResult").html("Result: " + data.result);
        });
    };

    var displayTransformConfig = function(options) {
        $("#pathToPython").val(options.pathToPython);
        $("#copyFrom").val(options.copyFrom);
        $("#copyTo").val(options.copyTo);
        $("#filesToCopy").val(options.filesToCopy);
    };

    var displayOptions = function(options) {
		
        $("#currentDocument").val(dataIndex + 1);
        $("#pathToConfig").val(options.pathToConfig);
        $("#reallyWrite").val(options.reallyWrite ? "true" : "false");
        $("#bucketName").val(options.bucketName);
        $("#folderToWalk").val(options.folderToWalk);
        $("#s3RootFolder").val(options.s3RootFolder);
        $("#createFolderToWalkOnS3").val(options.createFolderToWalkOnS3 ? "true" : "false");
        $("#createIndex").val(options.createIndex ? "true" : "false");
        $("#filesToIgnore").val(options.filesToIgnore);
    };

    var getBuildConfig = function() {
        $.getJSON("/getBuildConfig", function(optionsInit) {
            transformOptions = optionsInit;
            displayTransformConfig(transformOptions[dataIndexTransform]);
        }).fail(function(a) {
            alert(JSON.stringify(a));
        });
    };
    var getOptions = function() {
        $.getJSON("/getOptions", function(optionsInit) {
            options = optionsInit;
            $('#documentCount').val(options.length);
            displayOptions(options[0]);
        }).fail(function(a) {
            alert(JSON.stringify(a));
        });
    };

    var forwardTransform = function() {
        if (dataIndexTransform < transformOptions.length - 1) {
            dataIndexTransform++;
            displayTransformConfig(transformOptions[dataIndexTransform]);
        }
    };

    var backwardTransform = function() {
        if (dataIndexTransform > 0) {
            dataIndexTransform--;
            displayTransformConfig(transformOptions[dataIndexTransform]);
            return dataIndexTransform;
        }
        return dataIndexTransform;
    };
    
    //my borrowing from DatInput01
    function getUserNumber() {
		
		
		return $("#userNumber").val();
	}
    //Charlie's code

	var updateInputs = function() {
		var pathToConfig = $("#pathToConfig").val();
		options.pathToConfig = pathToConfig;
		return options.pathToConfig;
	}	
		
	/*	var reallyWrite = $("#reallyWrite").val();
		options.reallyWrite = reallyWrite;
		
		var bucketName = $("#bucketName").val();
		options.bucketName = bucketName;
		var folderToWalk = $("#folderToWalk").val();
		var s3RootFolder = $("#s3RootFolder").val();
		var createFolderToWalkOnS3 = $("#createFolderToWalkOnS3").val();
		var createIndex = $("#createIndex").val();
		var filesToIgnore = $("#filesToIgnore").val();
		displayOptions(options);
	} */
	
    var forward = function() {
        if (dataIndex < options.length - 1) {
            dataIndex++;
            displayOptions(options[dataIndex]);
            updateInputs();
        }
    };

    var backward = function() {
        if (dataIndex > 0) {
            dataIndex--;
            displayOptions(options[dataIndex]);
            return true;
        }
        return false;
    };

    var listBuckets = function() {
        $.getJSON("/listBuckets", {
            options : JSON.stringify(options[dataIndex])
        }, function(data) {
            for (var i = 0; i < data.length; i++) {
                $("#buckets").append("<li>" + data[i] + "</li>");
            }
        });
    };

    return AwsUi;
});
