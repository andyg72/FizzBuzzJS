describe("FizzBuzz", function() {

  //have to initialize the variable
  var fizzbuzz;

  describe("knows when a number", function() {

    it("is divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      //fizzbuzz = FizzBuzz.new

      expect(fizzbuzz.isDivisibleByThree(3)).toBe(true); //expect it to return a boolean

    });

    it("is NOT divisible by 3", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByThree(1)).toBe(false);
    });

    it("is divisible by 5", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);

    });

    it("is NOT divisible by 5", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.isDivisibleByFive(7)).toBe(false);
    });


  });

  describe("knows when to say", function() {

    it("fizz", function() {
      fizzbuzz = new FizzBuzz();

      expect(fizzbuzz.says(3)).toBe('fizz');

    });

    it("buzz", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.says(5)).toBe('buzz');

    });

    it("neither fizz nor buzz", function(){
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.says(7)).toBe(7);
    });

    it("fizzbuzz", function() {
      fizzbuzz = new FizzBuzz();
      expect(fizzbuzz.says(15)).toBe('fizzbuzz');
    });




  });



});