/**
 * @author Charlie Calvert
 */

require.config({
  paths: {
    "jquery": "http://code.jquery.com/jquery-1.11.0.min",
    "tinyPubSub": "TinyPubSub"    
  }
});

require(["Calculate", "CalculateUI",], function(sub, pub) {
	console.log("Main called.");
	sub.subscriber();
	pub.publisher();
});
