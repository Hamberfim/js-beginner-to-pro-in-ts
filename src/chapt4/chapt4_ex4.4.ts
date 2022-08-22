// magic 8-ball
// create prompt
var readline = require("readline");
// create the readline interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// generate a random number between 0-5 (six total) and assign it to a variable
let randomNumber: number = Math.random();
randomNumber = randomNumber * 6;
let RandomNumber: number = Math.floor(randomNumber);
// console.log(RandomNumber);
// prompt for an input question and assign it to a variable
rl.question("Enter your question: ", function (usrQuestion: string) {
  let msg: string = "";
  switch (RandomNumber) {
    case 0:
      msg = "-not likely.";
      break;
    case 1:
      msg = "-concentrate and ask again.";
      break;
    case 2:
      msg = "-reply hazy, try again.";
      break;
    case 3:
      msg = "-it's very likely.";
      break;
    case 4:
      msg = "-all signs point to yes.";
      break;
    case 5:
      msg = "-without a doubt!";
      break;
    default:
      msg = "-don't ask!";
      break;
  }
  // output to console
  console.log(usrQuestion, msg);
  rl.close();
});

//create 6 case responses in a switch statment

// create a variable to hold the end response.

// output the users orginal question and the switch case response
