// QUESTION 1 -SOLVED

/*var tripleFive = function() {
	for(i=0;i<3;i++) {
		console.log('Five!');
	}	
};

tripleFive();*/

// QUESTION 2 - UNSOLVED

var lastLetter = function(myString) {
	var stringLength = myString.length;
	return myString.charAt(stringLength - 1);
};

lastLetter("hello");
lastLetter("island");


// QUESTION 3 - SOLVED
/*
var square = function(param1) {
	return param1 * param1;
};

square(3);
square(5);*/

// QUESTION 4 - SOLVED

/*var negate = function(negParameter) {
	return negParameter * -1;
};

negate(5);
negate(-8);*/

// QUESTION 5 - SOLVED

/*var toArray = function(arg1, arg2, arg3) {
	var myArray = [];
	myArray[0] = arg1;
	myArray[1] = arg2;
	myArray[2] = arg3;
	return myArray;
};

toArray (1,4,5);
toArray (8,9,10);*/

// QUESTION 6 - SOLVED

/*var startsWithA = function(stringArgument) {
	if (stringArgument.charAt(0).toUpperCase() === 'A') {
		return true;
	} else {
		return false;
	}
};

startsWithA('aardvark');
startsWithA('bear');*/

// QUESTION 7 - SOLVED

/*var excite = function(singString) {
	return singString + '!!!';
};

excite('yes');
excite('go');*/

// QUESTION 8

var sun = function(singString) {
	if (singString.indexOf("sun") > -1) {
		return true;
	} else {
		return false;
	}
};

sun('sundries');
sun('asunder');
sun('catapult');

// QUESTION 9

var tiny = function(tinyNumber) {
	if (tinyNumber > 0 && tinyNumber < 1) {
		return true;
	} else {
		return false;
	}
};

tiny(0.3);
tiny(14);
tiny(-5);


// QUESTION 10

/*var getSeconds = function(hours, minutes, seconds) {


	return seconds + (minutes * 60) + (hours * 3600);
};

getSeconds('01:30');
getSeconds('10:25');
*/

var getSeconds = function(stringTime) {
	var myArray = stringTime.split(":");
	var a = parseInt(myArray[0]) * 60;
	var b = parseInt(myArray[1]);
	return a + b;
};

getSeconds('01:30');
getSeconds('10:25');


