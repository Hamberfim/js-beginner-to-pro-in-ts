/***************************************************************
 * Name         : Module4 Unit Test - Decision w/Unit Test
 * Author       : Anthony Hamlin
 * Created      : 09/16/2022
 * Version      : 1.0
 * OS           : Windows 10
 * Lang         : Typescript (migration from C#)
 * IDE          : Visual Studio Code
 * Copyright    : 2022
 * Description  : This program is $$$$$$$$
 *                      Input : Prompts the user for the day (Monday-Thursday) and meal time (lunch or dinner)
 *                      Output: Prints the meal/food choice based on an existing menu
 ***************************************************************/

/*  DecideMeal() Method accepts the day (Monday, Tuesday, Wednesday, Thursday) and meal time (lunch, dinner)
 *    Lunch:
 *      Monday: VeggieBurger and Fries
 *      Tuesday: Chili and cornbread
 *      Wednesday: Pad Thai
 *      Thursday: Baked Potato
 *
 *    Dinner:
 *      Monday: Lasagna
 *      Tuesday: Pizza
 *      Wednesday: Soup and Salad
 *      Thursday: Spaghetti
 *
 *  Use nested if statements check the day checks and the meal time.
 *  Returns the appropriate meal based on an existing menu */

// create prompt using npm install prompt
const prompt = require("prompt-sync")();
let day: string;
let mealTime: string;
let mealString: string | undefined;

function DecideMeal(day: string, mealTime: string) {
  if (mealTime == "lunch") {
    if (day == "monday") {
      return "VeggieBurger and Fries";
    } else if (day == "tuesday") {
      return "Chili and cornbread";
    } else if (day == "wednesday") {
      return "Pad Thai";
    } else if (day == "thursday") {
      return "Baked Potato";
    } else if (day == "friday") {
      return "Taco Pie";
    } else if (day == "saturday") {
      return "Chef Salad";
    } else if (day == "sunday") {
      return "Quiche and coffee";
    }
  } else if (mealTime == "dinner") {
    if (day == "monday") {
      return "Lasagna";
    } else if (day == "tuesday") {
      return "Pizza";
    } else if (day == "wednesday") {
      return "Soup and Salad";
    } else if (day == "thursday") {
      return "Spaghetti";
    } else if (day == "friday") {
      return "Tapas and Red Wine";
    } else if (day == "saturday") {
      return "Movie Popcorn and Soda";
    } else if (day == "sunday") {
      return "Pot Roast and Red Wine";
    }
  }
  return "Ice Cream!";
}

// Prompt user for day and meal time
day = prompt("Enter a day of the week (Monday, Tuesday, etc.): ");
mealTime = prompt("Enter a meal time (lunch/dinner): ");

if (typeof day === "string" && typeof mealTime === "string") {
  day = day.toLowerCase();
  mealTime = mealTime.toLowerCase();
  // Call DecideMeal(), sending the necessary variables, storing the return value in a variable mealString
  mealString = DecideMeal(day, mealTime);
} else {
  console.log("Input values are invalid. It must be a text string of a week day name (Monday, Tuesday, etc.) and a meal time name (lunch/dinner). Exiting Program!");
}

day = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
// Print the day, time and the meal (the variable mealString)
console.log(`${day} is ${mealString} for ${mealTime}`);

export {};
