/*
 * Name         : futureValue
 * Author       : Anthony Hamlin
 * Created      : 09/01/2022
 * Version      : 1.0
 * OS           : Windows 10
 * Lang         : Typescript (migration from C#)
 * IDE          : Visual Studio Code
 * Copyright    : 2022
 * Description  : This program calculates the future value of an investment.
 *                   Input :  investment, interest rate, number of years
 *                   Output: 1.) The future value of an investment
 */

// create prompt using npm install prompt
const prompt = require("prompt-sync")();

// Declare/initialize variables
let investment: number = parseFloat(prompt("Enter the initial investment: "));

let interestRate: number = parseFloat(prompt("Enter the yearly interest rate (i.e., 3.4): "));

let years: number = parseInt(prompt("Enter the the number of years: "));

let futureValue = investment;
let yourFutureValue = (function CalculateFutureValue(): number {
  for (let index = 1; index <= years; index++) {
    futureValue += (futureValue * interestRate) / 100;
  }
  return futureValue;
})();
console.log(yourFutureValue.toFixed(2));

export {};
