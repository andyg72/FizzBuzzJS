var FizzBuzz = function() {}; // declare class (which don't exist in Javascript)

FizzBuzz.prototype.isDivisibleBy = function(divisor, number){
  return number % divisor === 0;
};

FizzBuzz.prototype.says = function(number){
    if (this.isDivisibleBy(15, number)) {
      return 'fizzbuzz';
    }
    else if (this.isDivisibleBy(3, number)) {
      return 'fizz';
    }
    else if(this.isDivisibleBy(5, number)){
      return 'buzz';
    }
    else {
      return number;
    }
};

FizzBuzz.prototype.upTo = function(highestNumber) {
for (var i = 1; i <= highestNumber; i++) { console.log(this.says(i)); }
};
