module.exports = function(info){

	var values = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};//end of values object

	for(var prop in values){
		if(values[prop] !== 'undefined'){
			values[prop] = info[prop];
		}//end of if statement
	}//end for loop

	var functions = {
		triggerDepart: function(){
			values.actualDepart = Date.now();
		},
		triggerArrive: function(){
			values.actualArrive = Date.now();
		},
		getInformation: function(){
			return values
		}
	};//end of functions object

	return functions;
	//returns the functions object

};//end of module
