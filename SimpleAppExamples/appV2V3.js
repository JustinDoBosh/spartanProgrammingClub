//Require the flight module 
var flight = require('./flight');

//define a flight 
var pdxlax = {
	number: 847,
	origin: 'PDX',
	destination: 'LAX'
};

//create a new variable and using the flight function that
//is returned from the module, and passing in the info 
//we defined on line 5
var pl = flight(pdxlax);

//Call the triggerDepart method of pl object
pl.triggerDepart();

//Call the getInformation method of the pl object
//then outputting that info to the console 
console.log(pl.getInformation());

//define another flight 
var ausdca = {
	number: 382,
	origin: 'AUS',
	destination: 'DCA'
};

//create a new variable and using the flight function that
//is returned from the module, and passing in the info 
//we defined on line 21
var ad = flight(ausdca);

//Call the getInformation method of the ad object
//then outputting that info to the console 
console.log(ad.getInformation());

//Call the getInformation method of the pl object again 
//and outputting that info to the console 
//to prove these are seperate flights
console.log(pl.getInformation());
