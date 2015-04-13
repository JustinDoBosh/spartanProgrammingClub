//define two variables that are local to this module 
//count keeps track of how many flights get created in this module
//destinations keeps track each destination that gets added to the module 
var count = 0,
	destinations = [];

//acts as the base for new objects 
var Flight = function(){
	this.data = {
		number: null,
		origin: null,
		destination: null,
		departs: null,
		arrives: null,
		actualDepart: null,
		actualArrive: null
	};//end of values object

	this.fill = function(info){
		for(var prop in this.data){
			if(this.data[prop] !== 'undefined'){
				this.data[prop] = info[prop];
			}//end of if statement
		}//end for loop
	};//end of this.fill function 

	this.triggerDepart = function(){
		this.data.actualDepart = Date.now();
	};
	this.triggerArrive = function(){
		this.data.actualArrive = Date.now();
	};
	this.getInformation = function(){
		return this.data;
	};
};//end of Flight function 


exports.create = function(info){
	//Create a new instance of the flight object 
	//and set equal to a new copy of Flight
	var instance = new Flight();

	//fill new object with all the data being passed
	//from the exports function 
	instance.fill(info);

	//increment the count each time we add a new object 
	count++;
	

	//return the instance 
	return instance;

};//end exports.create 

exports.getCount = function(){
	return count;
};




