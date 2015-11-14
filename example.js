var fizzBuzz = require('./FizzBuzz.js').fizzBuzz;

console.info("FizzBuzz for word 'Fizz', 'Buzz' from 1 to 100, divisible by 3, 5.");
var results = fizzBuzz(1, 100, 'Fizz', 'Buzz', 3, 5);
console.info("FizzBuzz returned an array with", results.length, "items.");