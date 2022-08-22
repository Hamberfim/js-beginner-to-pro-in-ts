// create prompt using npm install prompt
const prompt = require("prompt-sync")();

// create a var to hold a max number value
const MAX_NUM = 5;

// generate a random number using math random and floor and add 1 to it so the rang3 is 1-5
const randomNum = Math.floor(Math.random() * MAX_NUM) + 1;
console.log(randomNum);

// create a boolean to track if the answer is correct.. set to false, update to true if the users guess is a match
let isCorrect = false;
let guess: string | number;
while (!isCorrect) {
  guess = prompt("Guess a number between 1 - " + MAX_NUM + ": ");
  guess = Number(guess);
  // inside the while loop check check to see if the equal to the random number generated
  if (guess > randomNum) {
    // provid feedback of lower or higher.
    console.log("The number is lower.\n");
  } else if (guess < randomNum) {
    // provid feedback of lower or higher.
    console.log("The number is higher.\n");
  } else if (guess === randomNum) {
    isCorrect = true;
    console.log(`${guess}=${randomNum} SUCCESS! You guessed what the number was.`);
  }
}

export {};
