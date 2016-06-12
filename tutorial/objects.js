//objects have properties and methods

//firstName, lastName, age, eyeColor are properties
//fullName is an object method
var person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName : function() {return this.firstName + " " + this.lastName;}
};

//2 ways to access object properties
person.firstName;
person['firstName']
//access object methods
person.fullName();

//string, number, booleans can be objects as well. However, its bad to do so.
var x = new String();        // Declares x as a String object
var y = new Number();        // Declares y as a Number object
var z = new Boolean();       //	Declares z as a Boolean object
