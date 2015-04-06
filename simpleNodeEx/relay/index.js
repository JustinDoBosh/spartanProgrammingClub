var prefix = "Relaying: ";
//var makes the prefix variable local instead of being global 

module.exports = function(message){
	console.log(prefix + message);
};