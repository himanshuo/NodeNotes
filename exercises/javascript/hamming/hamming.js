//hamming

// number of different entries between two strings (dna sequences)
// jasmine-node .

var Hamming = function() {};



Hamming.prototype.compute = function(seq1, seq2) {

  //check types
  // a= seq1 is string
  var a = typeof(seq1) == 'string'
  // b= seq2 is string
  var b = typeof(seq2) == 'string'
  // c=seq1 is String
  var c = seq1 instanceof String
  // d=seq2 is String
  var d = seq2 instanceof String

  // good: (a OR c) AND (b or d)
  // bad: !((a OR c) AND (b OR d))
  //      !(a OR c) OR !(b OR d)
  //      (!a AND !c) OR (!b AND !d)

  if((!a && !c) || (!b && !d)){
    throw new Error('DNA strands must be string or String.');
  }

  //check length
  if(seq1.length != seq2.length){
        throw new Error('DNA strands must be of equal length.');
  }

  count = 0;
  for(var i = 0; i < seq1.length; i++){
    if(seq1[i] != seq2[i]) count++;
  }

  return count;
};

module.exports = Hamming;
