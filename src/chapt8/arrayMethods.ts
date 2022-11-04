// built-in forEach()
let namesArray: string[] = ["Tom", "Sarah", "Bill", "Linda"];

function outToConsole(element: string | number, index: number): void {
  if (typeof element === "string") {
    console.log(`Name: ${element} is at index ${index}`);
  } else {
    console.log(`Item #${index + 1} has a price of $${element.toFixed(2)}`);
  }
}
namesArray.forEach(outToConsole); // takes a function as a parameter argument and is executed on every element
console.log();

let costArray: number[] = [0.99, 1.99, 2.99, 3.99, 4.99];
function addThenPrint(element: number, index: number): void {
  element += 0.49;
  outToConsole(element, index);
}
costArray.forEach(addThenPrint); // takes a function as a parameter argument and is executed on every element
console.log();

let mixedArray: string[] | number[] | any[] = ["Berries", 0.99, "Apples", 1.99, "Peaches", 2.99, "Mangos", 3.99];
let strsArr: string[] = [];
let numsArr: number[] = [];
function groupItems(element: string, index: number): void;
function groupItems(element: number, index: number): void;
function groupItems(element: string | number, index: number) {
  if (typeof element === "string") {
    strsArr.push(element);
  } else if (typeof element === "number") {
    numsArr.push(element);
  }
}
mixedArray.forEach(groupItems);
strsArr.forEach(outToConsole);
numsArr.forEach(outToConsole);
console.log();

// built-in .filter()
function checkForStrings(element: string, index: number) {
  return typeof element === "string";
}
function checkForNumbers(element: number, index: number) {
  return typeof element === "number";
}
let filterStrings: string[] = mixedArray.filter(checkForStrings);
console.log("Strings in mixedArray: ", filterStrings);
let filterNumbers: number[] = mixedArray.filter(checkForNumbers);
console.log("Numbers in mixedArray: ", filterNumbers);

// built-in .every() - true/false
let allStrings = mixedArray.every(checkForStrings);
console.log(allStrings); // false since the array is not all strings
console.log();

// built-in map()
let prices: number[] = [4.99, 3.99, 4.99, 5.99, 3.99, 7.99];
let map_new_prices: number[] = prices.map((x) => x + 0.49);
console.log(map_new_prices);

let lowerNames: string[] = ["linda", "tom", "brenda"];
let toCaps: string[] = lowerNames.map((x) => x.toUpperCase());
console.log(toCaps);

// built-in indexOf() lastIndexOf()
console.log("First location of 3.99 is at index: ", prices.indexOf(3.99));
console.log("Last location of 3.99 is at index: ", prices.lastIndexOf(3.99));
