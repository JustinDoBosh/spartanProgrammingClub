//Q1: Find the error and fix them
//the function should get a number from the user and add 5 to it
//and return the sum of a + b
function addFive(){
	var a = prompt("Enter a number: ");
	var b = 5;
	console.log(a + b);
}

//Q2: Find the error and fix them
function loopAndLog(){
	var arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	while( i < arrayList.length){
		console.log(i)
		i++
	}
}

//Q3: Find the error and fix them
function IDCheck(){
	var age = prompt("How old are you: ");

	if(age >= 35){
		console.log("You can run for president!");
	}else if(age >= 21){
		console.log("You can have a drink!");
	}else{
		console.log("You are still a kid!");
	}
}

//Q4: Find the error and fix them
function areWeTheSame(value1, value2){
	if(value1 = value2){
		console.log("We are the same!");
	}else{
		console.log("We are NOT the same!");
	}
}

//Q5: Find the error and fix them
function accessingObjects(){
	car = {
		color: 'blue'
		year: '2006'
		price: '$15,000'
		model: 'sport'
	};

	console.log(car.price);
}
