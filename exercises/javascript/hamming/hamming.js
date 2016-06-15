//hamming

// number of different entries between two strings (dna sequences)
// jasmine-node .

var Hamming = function() {};



Hamming.prototype.compute = function(seq1, seq2) {
  if(seq1 == seq2){return 0;}

  //check types
  if( (typeof(seq1) != 'string' || typeof(seq2) != 'string') && ()){
    throw new Error('DNA strands must be of type String.');
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
