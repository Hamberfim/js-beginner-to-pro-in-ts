// set a starting counter to 0
let counter: number = 0;
// create a var 'step' to increase your counter
const STEP: number = 3.33;

// create a do/while loop printing tbhe counter to the console by the step
do {
  console.log(counter);
  counter += STEP;
} while (counter <= 100);
// continue the loop until the counter hit a specfic number
