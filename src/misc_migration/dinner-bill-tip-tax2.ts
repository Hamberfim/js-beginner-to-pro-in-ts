/*
 * Name         : dinnerBillTipTax
 * Author       : Anthony Hamlin
 * Created      : 08/24/2022
 * Version      : 1.1
 * OS           : Windows 10
 * Lang         : Typescript (migration from C#)
 * IDE          : Visual Studio Code
 * Copyright    : 2022
 * Description  : This program calculates a total bill for two meals at a restaurant, then divides the check between the individuals.
 *                Declare variables for tax rate, tip percentage, two different meals, two different desserts, tax, tip, subtotal, total and total per person.
 *                   Input :  prompt
 *                   Output: 1.) Subtotal with a dollar sign, 2.) Tax with a dollar sign,
 *                           3.) Tip with a dollar sign, 4.) Total bill with a dollar sign,
 *                           5.) Total per person with a dollar sign, 6.) Format the numbers to print only 2 decimal places for all output.
 */

// Declare and initialize constants - Decide which variables should be constants
// create prompt using npm install prompt
const prompt = require("prompt-sync")();

const GUEST_COUNT = 2; // two meals assumes two guests
const TIP_PERCENT = 0.2;
const SALES_TAX = 0.07;

// For any input that is non-numeric, make sure the value is zero - what would be non-numeric?
// Declare variables subtotal, tax, tip, total and total per person
let subtotal = 0;
let tax = 0;
let tip = 0;
let totalBill = 0;
let perPersonTotal = 0;
let meal1 = 0;
let meal2 = 0;
let dessert1 = 0;
let dessert2 = 0;

function calculateSubtotal(meal1: number, meal2: number, dessert1: number, dessert2: number): number {
  if (
    typeof meal1 === "string" ||
    typeof meal2 === "string" ||
    typeof dessert1 === "string" ||
    typeof dessert2 === "string"
  ) {
    subtotal = 0;
  } else {
    subtotal = meal1 + meal2 + dessert1 + dessert2;
  }

  return subtotal;
}

// Prompt the user to input the price of Meal 1, using exception handling for possible string input
meal1 = parseFloat(prompt("Please enter the cost of Meal 1: "));

// Prompt the user to input the price of Meal 2, using exception handling for possible string input
meal2 = parseFloat(prompt("Please enter the cost of Meal 2: "));

// Prompt the user to input price of Dessert 1, using exception handling for possible string input
dessert1 = parseFloat(prompt("Please enter the cost of Dessert 1: "));

// Prompt the user to input price of Dessert 2, using exception handling for possible string input
dessert2 = parseFloat(prompt("Please enter the cost of Dessert 2: "));

// Complete the meal calculation with values, possibly with zero(s) for the bad input
// Calculate the subtotal of the meals and the desserts, storing it into the subtotal variable
// subtotal = meal1 + meal2 + dessert1 + dessert2;
subtotal = calculateSubtotal(meal1, meal2, dessert1, dessert2);

// Calculate the tax, using a tax rate of 7 %, from the subtotal, storing it in the tax variable
tax = subtotal * SALES_TAX;

// Calculate the tip, using a tip rate of 20 %, from the subtotal, storing it in the tip variable
tip = subtotal * TIP_PERCENT;

// Calculate the total bill
totalBill = subtotal + tax + tip;

// Calculate what each individual should pay, storing it in total per person(NOTE: do not use a Magic Number!)
perPersonTotal = totalBill / GUEST_COUNT;

// Print the subtotal with a dollar sign($)
console.log(`Subtotal: $${subtotal.toFixed(2)}`);

// Print the tax with a dollar sign($)
console.log(`Tax: $${tax.toFixed(2)}`);

// display
console.log(`Tip ${TIP_PERCENT * 100}%: $${tip.toFixed(2)}`);
console.log(`Tax ${(SALES_TAX * 100).toFixed(2)}%: $${tax.toFixed(2)}`);
console.log(`Subtotal: $${subtotal.toFixed(2)}`);
console.log(`Total: $${totalBill.toFixed(2)}`);

// Print the total per person with a dollar sign($)
console.log(`Per Person: $${perPersonTotal.toFixed(2)}`);

export {};
