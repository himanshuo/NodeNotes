// function name(parameter1, parameter2, parameter3) {
//     code to be executed
// }
function myFunction(p1, p2){
  return p1 * p2;
}


myFunction(3,4); //12


//functions are first class values

//create variable that has value of a function
var temp = function anotherFunction(){
  return 4;
}

console.log(temp());

//assign a function as a value
temp = myFunction;

console.log(temp(2,3));
