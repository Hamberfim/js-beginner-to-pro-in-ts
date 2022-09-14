/* immediately invoked function expression
 * the function itself is wrapped in parentheses, which creates a function instance ((a, b) => { return a + b})(7, 8);
 * then it's folowed by parentheses and a semi-colon (); this calls/executes the unnamed function
 * this is also where parameter argument are passed into the function (7, 8); */
// simple IIFE
(function () {
  console.log("IIFE runs right away");
})();

// addition IIFE
((a, b) => {
  console.log(a + b);
})(7, 8);

// testing the variable scope of an IIFE
let oneThousand = "1000";
console.log("Outside: " + oneThousand);
(function () {
  oneThousand = "pizza";
  console.log("Inside: " + oneThousand);
})();
console.log("Outside: " + oneThousand);

let result = (function () {
  let oneDollar = 1.0;
  return oneDollar;
})();
console.log("Returned: " + result.toFixed(2));
// console.log(oneDollar);  // Cannot find name 'oneDollar'.

(function (value) {
  console.log("Inside: " + value);
})("Ham Sandwich");

// recursive function  - a regular iteration of a loop has better preformance
function recursiveNumber(num: number) {
  if (num >= 0) {
    console.log(num);
    recursiveNumber(--num); // will loop
  }
}
recursiveNumber(5);
