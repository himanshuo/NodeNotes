//isogram
//phrase that has no letters repeating


var Isogram = function(word) {
    this.word = word;
};
Isogram.prototype.isIsogram = function() {
    used = [];
    for (var i = 0; i < this.word.length; i++) {
        var cur = this.word[i].toLowerCase();
        var curCode = cur.charCodeAt(0);
        if ((curCode >= 65) && (curCode <= 90) || (curCode >= 97) && (curCode <= 122)) {
            if (used.indexOf(cur) > -1) {
                return false;
            } else {
                used.splice(used.length, 0, cur);
            }
        }
    }
    return true;
}
module.exports = Isogram;
