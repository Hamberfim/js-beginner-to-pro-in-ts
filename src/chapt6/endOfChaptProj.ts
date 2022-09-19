// create a recursive fucntion that counts up
let loopStart = 0;
function countUp(value: number): number | undefined {
  console.log(value);
  if (value < 10) {
    return countUp(value + 1);
  }
  return;
}
countUp(loopStart);
console.log();

// timeout
const one = () => console.log("one");
const two = () => console.log("two");
const three = () => {
  console.log("three");
  one();
  two();
};
const four = () => {
  console.log("four");
  setTimeout(one, 0);
  three();
};
four();

export {};
