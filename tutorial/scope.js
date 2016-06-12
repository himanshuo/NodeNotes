// a is in global scope
// b is in local scope of myFunction
// a can be assigned values inside myFunction and those values will last
var a;
function myFunction() {
    var b = "Volvo";
}


// The lifetime of a JavaScript variable starts when it is declared.
// Local variables are deleted when the function is completed.
// Global variables are deleted when you close the page.
// Function arguments (parameters) work as local variables inside functions.
