//leapyear

// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400


var Year = function(y) { this.input = y };



Year.prototype.isLeap = function() {
  if(typeof(this.input) == undefined || this.input <= 0){
    return false;
  }

  if(this.input % 4 == 0){
      if(this.input % 100 == 0){
        if(this.input % 400 == 0){
          return true;
        }
        return false;
      }
      return true;
  }
  return false;


};

module.exports = Year;
