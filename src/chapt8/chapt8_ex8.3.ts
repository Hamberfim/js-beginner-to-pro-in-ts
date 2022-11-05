const numberArray: number[] = [91, 2, 15, 56, 35, 22];

// use map to update the item numbers by adding 2 to each
function updateArr1(arr: number[]): number[] {
  return arr.map((item) => item + 2);
}
console.log(updateArr1(numberArray));

const updateArr2: number[] = numberArray.map(function (item) {
  return item + 2;
});
console.log(updateArr2);

const updateArr3: number[] = numberArray.map((item) => item + 2);
console.log(updateArr3);
