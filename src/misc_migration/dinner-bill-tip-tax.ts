/*
 * Name         : dinnerBillTipTax
 * Author       : Anthony Hamlin
 * Created      : 08/24/2022
 * Version      : 1.0
 * OS           : Windows 10
 * Lang         : Typescript
 * IDE          : Visual Studio Code
 * Copyright    : 2022
 * Description  : This program calculates a total bill for two meals at a restaurant, then divides the check between the individuals.
 *                Declare variables for tax rate, tip percentage, two different meals, two different desserts, tax, tip, subtotal, total and total per person.
 *                   Input :  static/included
 *                   Output: 1.) Subtotal with a dollar sign, 2.) Tax with a dollar sign,
 *                           3.) Tip with a dollar sign, 4.) Total bill with a dollar sign,
 *                           5.) Total per person with a dollar sign, 6.) Format the numbers to print only 2 decimal places for all output.
 */

// Declare and initialize constants - Decide which variables should be constants
const GUEST_COUNT: number = 2; // two meals assumes two guests
const TIP_PERCENT: number = 0.2;
const SALES_TAX: number = 0.07;

// Declare and initialize variables for two meals
const bananaCacaoPowerBowl: number = 12.95;
const chickpeaBurritoBowl: number = 11.95;

// Declare and initialize variables for two desserts
const alohaSmoothie: number = 9.99;
const mangoColadaSmoothie: number = 10.99;

// Declare variables subtotal, tax, tip, total and total per person
let subtotal: number;
let tax: number;
let tip: number;
let totalBill: number;
let perPersonTotal: number;

// Calculate the subtotal of the meals and the desserts, storing it into the subtotal variable
subtotal = bananaCacaoPowerBowl + chickpeaBurritoBowl + alohaSmoothie + mangoColadaSmoothie;

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

// Print the tip with a dollar sign($)
console.log(`Tip: $${tip.toFixed(2)}`);

// Print the total bill with a dollar sign($)
console.log(`Total: $${totalBill.toFixed(2)}`);

// Print the total per person with a dollar sign($)
console.log(`Per Person: $${perPersonTotal.toFixed(2)}`);
