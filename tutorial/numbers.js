// Javascript only has 1 type of number - 64 bit floating point
// 0-51 bits is mantissa, 52-62 bits is exponent, 63 bit is sign bit

var x = 34.00;    // A number with decimals
var y = 34;       // A number without decimals
var a = 123e5;    // 12300000
var b = 123e-5;   // 0.00123
var c = 0xFF;     // 255

// Integers (numbers without a period or exponent notation) are considered accurate up to 15 digits.
// The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1;         // x will be 0.30000000000000004
var x = (0.2 * 10 + 0.1 * 10) / 10;       // x will be 0.3 (thus you should multiply to make large number and then divide)


//convert from base 10 (default) to base X
var myNumber = 128;
myNumber.toString(16);     // returns 80 (converts to base 16)
myNumber.toString(8);      // returns 200 (converts to base 8)
myNumber.toString(2);      // returns 10000000 (converts to base 2)


// Infinity
// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
var myNumber = 2;
while (myNumber != Infinity) {          // Execute until Infinity
    myNumber = myNumber * myNumber;
}

var x =  2 / 0;          // x will be Infinity
var y = -2 / 0;          // y will be -Infinity

typeof Infinity;        // "number"

//Nan
// NaN is a JavaScript reserved word indicating that a value is not a number.
// js tries to convert strings into numbers automatically.
var x = 100 / "Apple";  // x will be NaN (Not a Number)
var bad = 100 / "10";     // x will be 10
isNaN(bad);               // returns true because bad is Not a Number
typeof NaN;             // returns "number"


//Numbers as objects
var x = 123;  //number
var y = new Number(123); //object
var z = new Number(123); //object
// (x == y) is true because x and y have equal values
// (x === y) is false because x and y have different types
// (y == z) is false because objects cannot be compared. Means y===z is false too.



// Number methods
// JS allows primitives, like numbers, to have properties and methods by
// treating them as objects when executing methods and properties

//toString() -> string representation of the variable, literal, or expression
var x = 123;
x.toString();            // returns 123 from variable x
(123).toString();        // returns 123 from literal 123
(100 + 23).toString();   // returns 123 from expression 100 + 23

9.656.toExponential(2);     // returns 9.66e+0

// toFixed() -> string, with the number written with a specified number of decimals
var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
x.toFixed(6);           // returns 9.656000
//toFixed is perfect for working with money

// toPrecision()-> string with a number written with a specified length:
var x = 9.656;
x.toPrecision();        // returns 9.656
x.toPrecision(2);       // returns 9.7
x.toPrecision(4);       // returns 9.656
x.toPrecision(6);       // returns 9.65600

//difference between toFixed and toPrecision is that fixed is num DECIMALS while
//precision is num DIGITS


var x = 123;
x.valueOf();            // returns 123 from variable x
(123).valueOf();        // returns 123 from literal 123
(100 + 23).valueOf();   // returns 123 from expression 100 + 23


// In JavaScript, all data types have a valueOf() and a toString() method.

// Global Methods to Convert Variables to Numbers
// Number()	-> number, converted from its argument.
// parseFloat()	Parses its argument and returns a floating point number
// parseInt()	Parses its argument and returns an integer


//Number Properties
// MAX_VALUE	Returns the largest number possible in JavaScript
// MIN_VALUE	Returns the smallest number possible in JavaScript
// NEGATIVE_INFINITY	Represents negative infinity (returned on overflow)
// NaN	Represents a "Not-a-Number" value
// POSITIVE_INFINITY	Represents infinity (returned on overflow)
// Example: Number.MAX_VALUE;
