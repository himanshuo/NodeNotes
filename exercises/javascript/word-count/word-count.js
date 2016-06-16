//word-count

var Words = function(){};
Words.prototype.count = function(str) {
  var wordsList = str.split(new RegExp("\\s"));
  wordsList = wordsList.filter(function(word){
    return word.search("\\s") == -1 && word.length != 0;
  })

  var out = {};
  for(w in wordsList){
    var cur = wordsList[w].toLowerCase();

    if(Object.keys(out).indexOf(cur) > -1){
      out[cur] += 1;
    } else {
      out[cur] = 1;
    }
  }
  return out;
}

module.exports = Words;
