// TS/Node required for console prompt
const prompt = require("prompt-sync")();

// RegExp. for digit - test used below - (method) RegExp.test(string: string): boolean
const isNumeric = /\d/;

// prompt user for name
let yourName = prompt("What is your name? ");

// simple functions - with default values for the parameter arguments
function sayHello(userName: any): void {
  if (isNaN(userName) && !isNumeric.test(userName)) {
    console.log(`Hello, ${userName}!`);
  } else {
    console.log(`Your name is ${userName}? Really?`);
  }
}

sayHello(yourName);

let greeting = function (userName: any): void {
  if (isNaN(userName) && !isNumeric.test(userName)) {
    console.log(`Greetings, ${userName}! It's so nice to meet you.`);
  } else {
    console.log(`${userName} is your real name? You're being weird!`);
  }
};

greeting(yourName);

console.log();
// assignment
function add(a: number, b: number = 0, c: number = 0): number {
  return a + b + c;
}

let sum1 = add(5);
console.log(sum1);
let sum2 = add(5, 3);
console.log(sum2);
let sum3 = add(5, 3, 2);
console.log(sum3);

export {};
