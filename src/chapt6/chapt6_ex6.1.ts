// simple functions - with default values for the parameter arguments
function add(a: number, b: number = 0, c: number = 0): number {
  return a + b + c;
}

let sum1 = add(5);
console.log(sum1);
let sum2 = add(5, 3);
console.log(sum2);
let sum3 = add(5, 3, 2);
console.log(sum3);
