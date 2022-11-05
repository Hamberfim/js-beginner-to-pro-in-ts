// remove duplicates from an array using .filter() and indexOf()
const namesArray: string[] = ["Tom", "Linda", " Bill", "Sarah", "Larry", "Mary", "Bob", "Tom", "Linda", " Bill", "Sarah", "Larry", "Mary", "Bob"];

const noDupsForwards: string[] = namesArray.filter((element, index, namesArray) => {
  console.log("Forward: ", element, index, namesArray.indexOf(element));
  return namesArray.indexOf(element) === index;
});

console.log("\nForward no dups: \n", noDupsForwards, "\n");

const noDupsBackwards: string[] = namesArray.filter((element, index, namesArray) => {
  console.log("Backward: ", element, index, namesArray.lastIndexOf(element));
  return namesArray.indexOf(element) === index;
});

console.log("\nBackward no dups: \n", noDupsBackwards, "\n");

const setNames: string[] = namesArray.filter((element, index, namesArray) => namesArray.indexOf(element) === index); // filter and lambda needs explored more
console.log("Simplest: \n", setNames);

console.log();

const numArray: number[] | any[] = [0, , , , , 1, 2, , , , 3, 4, 5, 6, 7, , , , , 8, 9, 10, , , , 11, 12, 13, 14, 15, 16, 17, , , , , 18, 19, 20, 21, 22, , , , , 23, 24, , ,]; // array has 'empty' index values elements
console.log(`Length ${numArray.length}`);
const greaterThanThreeLessThanSix = numArray.filter((x) => x > 3 && x < 6);
console.log(greaterThanThreeLessThanSix);

const innerX: number[] = [];
function replaceEmpty(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == undefined && array[i] == null) {
      array[i] = -1;
      innerX.push(array[i]);
    } else {
      innerX.push(array[i]);
    }
  }
}
replaceEmpty(numArray);
console.log(innerX);
const divisible: number[] = innerX.filter((x) => x % 2 == 0);
console.log(divisible);

// use set to remove duplicates with the filter() method to determine divisible by 2
const setNoDupNumbers: Set<number> = new Set(numArray.filter((item) => item % 2 == 0));
console.log(setNoDupNumbers);
numArray.length = 0; // empty the entire array
console.log(`Length ${numArray.length}`);
export {};
