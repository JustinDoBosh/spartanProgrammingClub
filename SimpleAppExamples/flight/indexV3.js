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

//This is a factory, and we use it to get around module cashing 
module.exports = function(info){

	//Create a new instance of the flight object 
	//and set equal to a new copy of Flight
	var instance = new Flight();

	//fill new object with all the data being passed
	//from the exports function 
	instance.fill(info);

	//return the instance 
	return instance;

};//end of module