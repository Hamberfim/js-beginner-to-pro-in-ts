// create prompt
var readline = require("readline");
// create the readline interface
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// create a var called prize assign it by prompting user for a value between 0-10
rl.question("Enter a number between 0-10 to claim your prize: ", function (prize: number | string) {
  // convert the prompt response to number
  prize = Number(prize);
  // create a var to use to output a message containing sonething like "My Selection: "
  let msg: string = "Your Prize Selection: ";
  let response: string = "";
  // use a switch statment with combined cases, provide a response back regarding a prize
  switch (prize) {
    case 0:
    case 1:
    case 2:
      response = "Free dinner for two at Lambardi's.";
      break;
    case 3:
    case 4:
    case 5:
      response = "Two free passes to the Chicago art show.";
      break;
    case 6:
    case 7:
    case 8:
      response = "20% off your next oil change.";
      break;
    case 9:
    case 10:
      response = "50% off flight to Florida for two.";
      break;
    default:
      response = "There is no prize for the value chosen.";
      break;
  }
  // output back to user concatenating the  results with the "My Selection" string
  console.log(msg, response);
  rl.close();
});
