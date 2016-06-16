// rna-transcription
// converts DNA to RNA

//  Conversions
// `G` -> `C`
// `C` -> `G`
// `T` -> `A`
// `A` -> `U`


// method to use enums (not actually use here)
// var RNAEnum = Object.freeze({G: 'G', C: 'C', T: "T", A: "A"});
// var DNAEnum = Object.freeze({C: 'C', G: 'G', A: "A", U: "U"});


conversions = {
  'G':'C',
  'C':'G',
  'T':'A',
  'A':'U',
};

var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna){
  if( typeof(dna) != 'string' && !(dna instanceof String) ){
    throw new Error("DNA must be of type string or String");
  }
  var out = "";
  for(var i=0;i<dna.length; i++){
    var temp = conversions[dna.charAt(i)];
    if(typeof(temp) == undefined){
      throw new Error("DNA must be a string of G,C,T, or A");
    }
    out += temp;
  }
  return out;
}


module.exports = DnaTranscriber;
