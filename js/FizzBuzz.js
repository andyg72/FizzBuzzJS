var FizzBuzz = function() {}; // declare class (which don't exist in Javascript)

FizzBuzz.prototype.isDivisibleByThree = function(number){ // prototype means that the method belongs to the class
  return (number % 3 === 0);
};

FizzBuzz.prototype.isDivisibleByFive = function(number){

  return (number % 5 === 0);

};

FizzBuzz.prototype.says = function(){

  return 'fizz';

};