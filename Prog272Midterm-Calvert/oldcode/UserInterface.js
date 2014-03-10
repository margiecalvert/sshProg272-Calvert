/**
 * @author Charlie Calvert
 */
CordovaInput.userInterface = new function() {    
        
    var insertJsonClick = function(event) {
        
    };

  /*  var displayListClick = function(event) {
          
    };
    
    var pickPoemClick = function() {
          
    };
    
    var searchKeywordClick = function() {
          
    };
    
    var storeNewPoemClick = function() {
        
          
    };
    
    var deletePoemClick = function() {
          
    }; */
    
    this.init = function() {        
        $("#buttonInsertJson").click(insertJsonClick);
        $("#bbuttonDisplayList").click(displayListClick);
        $("#buttonPickPoem").click(pickPoemClick);
        $("#buttonSearchKeyword").click(searchKeywordClick);
        $("#buttonStoreNewPoem").click(storeNewPoemClick);
        $("#buttonDeletePoem").click(deletePoemClick);
       
        
    };   
  
};

$(document).ready(function() {	
	CordovaInput.userInterface.init();		 
});
