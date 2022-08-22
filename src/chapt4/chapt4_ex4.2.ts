// Node/TS wont use prompt - create a readline
//////// javascript ///////// import * as readline from "readline";  /////////////
var readline = require("readline");
// create the readline interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// create a prompt and ask for user age
rl.question("Enter your age: ", function (answer: string | number) {
  // convert the string response to a number
  // answer = <number>answer;
  // declare a message var to hold a message for the console
  let msg = "";
  // if age >= 21 confirm entry to venue and ability to purchase alcohol
  if (answer >= 21) {
    msg = `Since you are ${answer} you will have access to the venue and ability to purchase alcohol.`;
    // if age >= 19 confirm entry to venue and deny ability to purchase alcohol
  } else if (answer >= 19) {
    msg = `Since you are ${answer} but not 21 you will have access to the venue, but you can not purchase alcohol.`;
    // else default can not enter venue
  } else {
    msg = `Sorry, at ${answer} you are not old enough to enter the venue.`;
  }
  // output to console
  console.log(msg);
  rl.close();
});
