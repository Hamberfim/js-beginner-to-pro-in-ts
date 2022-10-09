/*  Time to play the lottery, without spending a dime! You can write your own random lottery numbers. You can give a try before looking at the solution!
 *  Write and call the method -
 *  PowerBall()
 *      generates 5 random numbers between 1 and 64
 *      generates a random PowerBall between 5 and 64
 *      stores numbers in an array with the PowerBall at index zero
 *      returns the array
 *  Display the powerball at the end when displaying the numbers in Main(). */

import { stdin, stdout } from "node:process";
// function to generate random numbers
function PowerBall() {
  const MIN: number = 1;
  const PB_MIN: number = 5;
  const MAX: number = 65;
  const MAX_NUMBERS: number = 6;

  let randNumber = Math.floor(Math.random() * (MAX - MIN + 1));

  let fiveRandPlusPowerBall: number[] = [];
  for (let i = 0; i < MAX_NUMBERS; i++) {
    let randNumber = Math.floor(Math.random() * (MAX - MIN + 1));
    fiveRandPlusPowerBall.push(randNumber);
    // process.stdout.write(` ${randNumber} `); // check values
  }
  return fiveRandPlusPowerBall;
}

let lottoNumber: number[] = PowerBall();
console.log("\n======== Your Lotto Numbers ========");
// loop thru all but last number, last number is powerball
for (let i = 0; i < lottoNumber.length; i++) {
  if (i < lottoNumber.length - 1) {
    process.stdout.write(`  ${lottoNumber[i]}`);
  } else {
    // add 5 to last index for a POWERRBALL NUMBER
    process.stdout.write(`  POWERBALL: ${lottoNumber[i] + 5}`);
  }
}
console.log("\n======== Your Lotto Numbers ========");

export {};
