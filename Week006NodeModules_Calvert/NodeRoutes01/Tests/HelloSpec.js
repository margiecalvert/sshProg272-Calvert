/**
 * @author Charlie Calvert
 */

var request = require('request');

describe("A Mongo Suite", function() {
//does not workk
	it("should respond with 9", function(done) {
		request("http://localhost:30025/getNine", function(error, response, body) {
			
			expect(body[0].result).toEqual(9);
			done();
		});
	}); 
	
	/*it("should respond with goodbye", function(done) {
		request("http://localhost:30025/goodbye", function(error, response, body) {
			expect(body).toEqual("Goodbye.");
			done();
		});
	});


	it("should read two records", function(done) {
		request("http://localhost:30025/readTwo", function(error, response, body) {
			console.log("Calling test two records");
			
			// Convert result from a JSON string to a JSON object
			body = JSON.parse(body);
			
			console.log(body);			
			expect(body.length).toEqual(2);
			done();
		});
	});*/

}); 
