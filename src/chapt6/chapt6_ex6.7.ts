let loopStart = 10;
function countDown(value: number): number | undefined {
  console.log(value);
  if (value < 1) {
    return;
  }
  return countDown(value - 1);
}
countDown(loopStart);
console.log();
function countDown2(value: number): number | undefined {
  console.log(value);
  if (value > 0) {
    value--;
    return countDown2(value);
  }
  return;
}
countDown2(loopStart);
