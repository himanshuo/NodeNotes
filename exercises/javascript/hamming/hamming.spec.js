var Hamming = require('./hamming');

describe('Hamming', function () {
  var hamming = new Hamming();

  it('no difference between identical strands', function () {
    expect(hamming.compute('A', 'A')).toEqual(0);
  });

  it('complete hamming distance for single nucleotide strand', function () {
    expect(hamming.compute('A','G')).toEqual(1);
  });

  it('complete hamming distance for small strand', function () {
    expect(hamming.compute('AG','CT')).toEqual(2);
  });

  it('small hamming distance', function () {
    expect(hamming.compute('AT','CT')).toEqual(1);
  });

  it('small hamming distance in longer strand', function () {
    expect(hamming.compute('GGACG', 'GGTCG')).toEqual(1);
  });

  it('large hamming distance', function () {
    expect(hamming.compute('GATACA', 'GCATAA')).toEqual(4);
  });

  it('hamming distance in very long strand', function () {
    expect(hamming.compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  it('throws error when strands are not equal length', function() {
    expect(function() { hamming.compute('GGACGGATTCTG', 'AGGAC'); }).toThrow(
      new Error('DNA strands must be of equal length.')
    );
  });

});


describe('Type of Hamming', function () {
  var hamming = new Hamming();

  it('is string,string', function () {
    expect(hamming.compute('abc', 'abD')).toEqual(1);
  });

  it('is string, String', function () {
    expect(hamming.compute('A',new String('G'))).toEqual(1);
  });

  it('is String,string', function () {
    expect(hamming.compute(new String('AG'),'CT')).toEqual(2);
  });

  it('is String,String', function () {
    expect(hamming.compute(new String('AT'),new String('CT'))).toEqual(1);
  });

  it('is string, obj', function () {
    expect(function() { hamming.compute('GGACG', {var: 'GGTCG'}); }).toThrow(
      new Error('DNA strands must be string or String.')
    );
  });

  it('is number,string', function () {
    expect(function() { hamming.compute(4, '4'); }).toThrow(
      new Error('DNA strands must be string or String.')
    );
  });

  

});
