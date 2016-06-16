//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
    if (input.search('[A-Z]') > -1 && input.search('[a-z]') == -1) {
        if (input.search('[^\u0020-\u007E]') > -1 && input.search('(\\!)$') == -1) {
            return "Whatever."
        }
        return "Whoa, chill out!";
    } else if (input.search("(\\?)$") > -1) {
        return "Sure.";
    } else if (input.search('[^\\s]') == -1) {
        return "Fine. Be that way!";
    } else {
        return "Whatever.";
    }
};

module.exports = Bob;
