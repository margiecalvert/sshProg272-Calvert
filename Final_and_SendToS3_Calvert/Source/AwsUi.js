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
		$("#changeMTC").click(saveMTC);
		$("#insertOptions").click(insertOptions);
		$("#insertMTC").click(insertMTC);
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
        var bucketName = $("#bucketName").val();
        options[dataIndex].bucketName = bucketName;
        var folderToWalk = $("#folderToWalk").val(); 
		options[dataIndex].folderToWalk = folderToWalk;
        var s3RootFolder = $("#s3RootFolder").val();
        options[dataIndex].s3RootFolder = s3RootFolder; 
        var createFolderToWalkOnS3 = $("#createFolderToWalkOnS3").val();
        options[dataIndex].createFolderToWalkOnS3 = createFolderToWalkOnS3 === "true" ? true : false;
        var createIndex = $("#createIndex").val();
        options[dataIndex].createIndex = createIndex === "true" ? true : false;    
        var filesToIgnore = $("#filesToIgnore").val();
        options[dataIndex].filesToIgnore = filesToIgnore;
        
        $.getJSON("/saveOptions", {
            options : JSON.stringify(options)
           
            }, function(data) {
			$("#changeResult").html(data.result + changeCount++); 
			$("#pathToConfig").val = options[dataIndex].pathToConfig; 
			$("#reallyWrite").val = $("#reallyWrite").val(options[dataIndex].reallyWrite ? "true" : "false");
			$("#bucketName").val = options[dataIndex].bucketName;
			$("#folderToWalk").val = options[dataIndex].folderToWalk;
			$("#s3RootFolder").val = options[dataIndex].s3RootFolder;
			$("#createFolderToWalkOnS3").val = $("#createFolderToWalkOnS3").val(options[dataIndex].createFolderToWalkOnS3 ? "true" : "false");
			$("#createIndex").val = $("#createIndex").val(options[dataIndex].createIndex ? "true" : "false");
			$("#filesToIgnore").val = options[dataIndex].filesToIgnore;
		});
    };
    
    var saveMTC = function() {
		
		console.log("In saveMTC");
		console.log("InAWSUI" + transformOptions);
		
        
        var pathToPython = $("#pathToPython").val();
        transformOptions[dataIndexTransform].pathToPython = pathToPython;
		var copyFrom = $("#copyFrom").val();
        transformOptions[dataIndexTransform].copyFrom = copyFrom;
        var copyTo = $("#copyTo").val();        
        transformOptions[dataIndexTransform].copyTo = copyTo; 
        var filesToCopy = $("#filesToCopy").val();
        transformOptions[dataIndexTransform].filesToCopy = filesToCopy;
        
        
        $.getJSON("/saveMTC", {
            options : JSON.stringify(transformOptions),
            index : dataIndexTransform
            //displayTransformConfig(transformOptions[dataIndexTransform]);
            }, function(data) {
			$("#changeResult").html(data.result + changeCount++); 
			$("#pathToPython").val = transformOptions[dataIndexTransform].pathToPython; 
			$("#copyFrom").val = transformOptions[dataIndexTransform].copyFrom;
			$("#copyTo").val = transformOptions[dataIndexTransform].copyTo;
			$("#filesToCopy").val = transformOptions[dataIndexTransform].filesToCopy;
			
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
    
   var insertNewDocument = function() {
		console.log("insert New Record called");
		$.getJSON('/insertJson', function(data) {
			var result = JSON.stringify(data);
			alert(result);
		});
	};
	
	var insertOptions = function() {
		console.log("insert Options called");
		$.getJSON('/insertOptions', function(data) {
			var result = JSON.stringify(data);
			alert(result);
		});
	};
	
	var insertMTC = function() {
		console.log("insert Options called");
		$.getJSON('/insertMTC', function(data) {
			var result = JSON.stringify(data);
			alert(result);
		});
	};
    //Charlie's code

	/*var updateInputs = function() {
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
