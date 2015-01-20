describe("FizzBuzz", function() {

  //have to initialize the variable
  var fizzbuzz;

  describe("knows when a number", function() {

    it("is divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      //fizzbuzz = FizzBuzz.new

      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true); //expect it to return a boolean

    });



});