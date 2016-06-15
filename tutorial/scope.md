Scope
=====
There are many variations of scope in JavaScript. It is not always clear.

### Global Scope

This is basic. If a variable is defined outside of functions, then it is in global scope.

    var a = 1;  //a is in global scope
    function one() {
     console.log(a);  // a=1
    }
    // a=1

If a global variable is changed inside a function, then that variable is changed on the outside as well.

    var a = 1;
    function change_four(){
      a = 4;
    }
    //a=4


### Local scope
Local Scope is created inside a function.

Local scope variables can be created by defining a variable inside a function.  

Variable defined as param:

    var a = 1;
    // local scope
    function define_by_param(a) {
      //a=param
    }
    //a=1

Variable defined inside function:

    var a = 1;
    // local scope
    function define_by_param() {
      var b = 2;
      //a=1
      //b=2
    }
    //a=1
    //b is undefined


Variable REDEFINED:

    var a = 1;
    function variable_redefined() {
      var a = 2;
      //a=2
    }
    //a=1


### There is NO BLOCK SCOPE in JavaScript
BLOCK SCOPE refers to {} blocks created for if, for, while statements.
All this means is that there is no new scope created when you create a new block.
This is similar to the python thing of creating variables inside an if statement,
but having access to it outside the if statement.

    if(...){
      var b = 3;
    } else {
      var b = 4;
    }
    console.log(b); // valid

No Block Scope example using if statement:

    //a exists in global scope
    var a = 1;
    function if_block_variable_creation() {
      if (true) {
        var a = 4;
      }
      console.log(a); // 4. if the if-statement was false, then would get 1.
    }

    //b does NOT exist in global scope.
    function if_block_variable_creation() {
      if (false) {
        var b = 4;
      }
      console.log(b); // undefined. Does NOT raise error though.
    }

No Block Scope using for statement:

    function for_block_variable(){
      var i = 0;
      for(i=0;i<10;i++){
        var temp =3;
      }
      console.log(temp);  //3
    }

No Block Scope using while statement:


    function while_block_variable(){
      var i = 0;
      while(i<10){
        var temp = i;
        i++
      }
      console.log(temp);  //9  
    }

### Objects have properties
Objects have properties. You can access this using `this` keyword. You can use
it in object methods as well.  

Standalone function:

    var a = 1;
    function func() {
      this.a = 5;
    }

Prototypes for function:

    var MyClass = function(){this.var =5;};
    MyClass.prototype.my_func = function(){
      this.var=5;
      console.log(this.var)
    };
    //note: you have to export MyClass


### Closures
Closure: defining a subfunction within another superfunction allows the
subfunction to use variables from the superfunction. The superfunction does
not end once the it is called, but rather stays in memory, along with its
variables. Thus the subfunction basically has a special list of variables
defined specifically in the superfunction that it can use.

    function foo(input){
      var a =input;
      function bar(){
        console.log(a);
      }
      return bar;
    }

    bar1 = foo(1);
    bar2 = foo(2);
    bar1(); //1
    bar2(); //2

### Try Catch

    var e = 5;
    // e = 5
    try {
        throw 6;
    } catch (e) {
        //e=6
    }
    //e=5

# Test Example
What will this code print?

    var x = 5;

    (function () {
        console.log(x);
        var x = 10;
        console.log(x);
    })();

* key trick: variable declarations are moved up in a given scope
  * var x = 10; is changed to var x; ... x = 10;
    * (function () {
        var x;
        console.log(x);
        x = 10;
        console.log(x);
    })();
* the () around the function makes it so that variables defined within the function will not pollute global namespace.
  * much more complex. More notes found in encapsulated_anonymous_function.md and http://stackoverflow.com/a/1634321
* redefining var x allows you to not affect the global x.
* x is updated to 10.
* the first console.log() is thus undefined
* the second console.log() is thus 10
