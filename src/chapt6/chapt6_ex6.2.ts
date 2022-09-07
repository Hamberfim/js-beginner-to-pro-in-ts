// TS/Node required for console prompt
const prompt = require("prompt-sync")();

// create an array of descriptive workds
let descriptiveArray: string[] = ["Affectionate", "Ambitious", "Dependable", "Diplomatic", "Observant", "Organized"];

// RegExp. for digit - test used below - (method) RegExp.test(string: string): boolean
const isNumeric = /\d/;

// create a function that contains a prompt asking for users name
function positiveAdj(): void {
  // select a random value for the array using Math.random
  let indexToUse = Math.floor(Math.random() * descriptiveArray.length);
  let adjective = descriptiveArray[indexToUse];
  let yourName = prompt("What is your name? ");
  if (isNaN(yourName) && !isNumeric.test(yourName)) {
    // output the prompt value and the randomly selected array value
    console.log(`Hi ${yourName}. You seem ${adjective}.`);
  } else {
    console.log(`${yourName} is your real name? You're being silly!`);
  }
}

// invoke the function
positiveAdj();

export {};
