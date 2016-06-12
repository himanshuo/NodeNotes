//type
var a = 4;
typeof(a); //get type of variable
// the different types are
//  - number
//  - string
//  - boolean
//  - objects (includes arrays)
//  - undefined

//undefined
// a variable without a value is undefined
var person;
typeof(person); //undefined
// you can empty out a variable by setting it to undefined

//empty values
var car = ""; //value = "", typeof(car) = string

//null
// null means nothing. object is not supposed to exist
//NOTE: data type of null is object
var person = null;
typeof(person); //object

typeof undefined             // undefined
typeof null                  // object (bad on js's part)
null === undefined           // false (null is of type object)
null == undefined            // true  (value of null is undefined)

instanceof(3)  //returns true if an object is an instance of an object type (including subtypes)
