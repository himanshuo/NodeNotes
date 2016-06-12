// Strings are immutable: Strings cannot be changed, only replaced

var s = "some string ";

// escapable values for string
// \'	single quote
// \"	double quote
// \\	backslash
// \n	new line
// \r	carriage return
// \t	tab
// \b	backspace
// \f	form feed

//string length
s.length

// for splitting up strings over numerous lines
s = "Hello \
Dolly!";


//string can be objects
var x = "John";
var y = new String("John");
var z = new String("John");
// x==y is TRUE because x and y have equal values
// x===y is FALSE because typeof(x)=string, typeof(y)=object
// y==z is FALSE because y and z are different objects.
  //   this means y===z is FALSE as well


// string functions
x.indexOf("o");
x.search("o");
//indexOf and search are similar. the difference is that search can take in regex values
x.lastIndexOf("as");

// There are 3 methods for extracting a part of a string:
// slice(start, end) -> extracted part in a new string. accepts neg indicies
// substring(start, end) -> extracted part in a new string. no neg indicies
// substr(start, length) -> extracted part in a new string. accepts neg indicies

// replace(to_replace, to_replace_with)

//toUpperCase()
//toLowerCase()

// cur_string.concat(otherstring) -> cur_string + otherstring

//charAt(index)
// charCodeAt(index) -> unicode value at index in string

//split(regex)
