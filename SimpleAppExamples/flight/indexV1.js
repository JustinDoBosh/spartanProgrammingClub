//use var to make variables local and not global 
var number, origin, destination;

//create functions to set the flight number, origin, and destination
exports.setNumber = function(num){
	number = num;
};

exports.setOrigin = function(o){
	origin = o;
};

exports.setDestination = function(d){
	destination = d;
};

//create getter functions to get flight info
exports.getInfo = function(){
	return {
		number: number,
		origin: origin,
		destination: destination
	};
};