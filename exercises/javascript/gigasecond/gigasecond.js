//gigasecond

//determines 1 gigasecond anniversary since input date

var Gigasecond = function(d){
  if(! (d instanceof Date)) {
    throw new Error("Input must be of type Date.");
  }
  this.input_date = d;
};

Gigasecond.prototype.date = function() {
  var increase = Math.pow(10,9) * 1000;
  var out = new Date(this.input_date.getTime()+increase);
  return out;
};

module.exports = Gigasecond;
