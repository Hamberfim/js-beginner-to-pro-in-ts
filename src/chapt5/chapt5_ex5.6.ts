// create an empty array
let incrementalArray: number[] = [];

let counter: number = 0;
// run loop 10 times adding a new incrementing value to the array
for (let index = 1; index <= 10; index++) {
  let multNum: number = counter + 1.333 * index;
  incrementalArray.push(multNum);
  counter++;
}
// console.log(incrementalArray);

// use a for of loop to iterate through the array and log to the console
for (const iterator of incrementalArray) {
  console.log(iterator);
}

export {};
