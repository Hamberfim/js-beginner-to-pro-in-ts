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

export {};
