var theNumber = 1;
 
var michelangelo = function(value){
    value = (value * 2);
    return value;
}
 
var donatello = function(value, anotherValue){
    value = anotherValue + value;
    anotherValue = value * anotherValue;
    return anotherValue;
}
 
var leonardo = function(value){
    var anotherValue = value;
    value *= 4;
    theNumber = value / 2;
    return (value + anotherValue);
}
 
var raphael = function(value, anotherValue, yetAnotherValue){
    value = value * anotherValue + yetAnotherValue;
    return yetAnotherValue;
}

//Newly created function
var splinter = function(number1, number2) {
	var z = number1 * number2;
	var pizza = [number1, number2, z];
	return pizza;
}

//In your email, tell me what the answer to this expression would be:
michelangelo(theNumber) + leonardo(theNumber); //This expression equates to 7
 
theNumber = theNumber * 2;
 
//In your email, tell me what the answer to this expression would be:
(donatello(theNumber, 2)) - (raphael(3, 2, theNumber)); //This expression equates to 5


console.log(splinter(3, 4)); //The output is the pizza array [3, 4, 12]