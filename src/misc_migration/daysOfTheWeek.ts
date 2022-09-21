/***************************************************************
 * Name         : DaysOfTheWeekHamlin
 * Author       : Anthony Hamlin
 * Created      : 09/16/2022
 * Version      : 1.0
 * OS           : Windows 10
 * Lang         : Typescript (migration from C#)
 * IDE          : Visual Studio Code
 * Copyright    : 2022
 * Description  : This program is $$$$$$$$
 *                      Input :  User input of integer - Expecting range 1 to 7
 *                      Output:  Display string of the day of the week
 ***************************************************************/
// create prompt using npm install prompt
const prompt = require("prompt-sync")();
// Write a console App that when you enter a number the console output will display the corresponding string of the day of the week.
// Declare a variable to store the day of the week
let dayOfWeek: string;
let dayNumString: string;
let dayNum: number;

// Include user input prompt
dayNumString = prompt("Enter a integer value for the day of the week (1-7): ");
// Include input validation for user input - Expecting an integer range 1 to 7
// check that input is invalid and exit
if (parseInt(dayNumString)) {
  dayNum = parseInt(dayNumString);
  if (dayNum >= 1 && dayNum <= 7) {
    // Use a switch statement to assign the variable
    switch (dayNum) {
      case 1:
        dayOfWeek = "1 = Monday";
        break;
      case 2:
        dayOfWeek = "2 = Tuesday";
        break;
      case 3:
        dayOfWeek = "3 = Wednesday";
        break;
      case 4:
        dayOfWeek = "4 = Thrusday";
        break;
      case 5:
        dayOfWeek = "5 = Friday";
        break;
      case 6:
        dayOfWeek = "6 = Saturday";
        break;
      case 7:
        dayOfWeek = "7 = Sunday";
        break;
      default: // this segement of the case isn't reachable as far as I can tell
        dayOfWeek = "-1 = Invalid Day";
        break;
    }
    // Include only ONE console.log() after the switch to print the day of the week variable
    // For example, 1 = Monday, 2 = Tuesday, ..., 7 = Sunday.
    console.log(`${dayOfWeek}`);
  } else {
    console.log("Day input value is invalid. Must be an interger between 1-7. Exiting Program!");
  }
} else {
  console.log("Day input value is invalid. Must be an interger between 1-7. Exiting Program!");
}

export {};
