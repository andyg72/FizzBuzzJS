var FizzBuzz = function() {}; // declare class (which don't exist in Javascript)

FizzBuzz.prototype.isDivisibleBy = function(divisor, number){

  return number % divisor === 0;

};

FizzBuzz.prototype.says = function(number){
    if (this.isDivisibleBy(3, number) === true && this.isDivisibleBy(5, number) === true) {
      return 'fizzbuzz';
    }
    else if (this.isDivisibleBy(3, number) === true) {
      return 'fizz';
    }
    else if(this.isDivisibleBy(5, number) === true){
      return 'buzz';
    }
    else {
      return number;
    }
};

