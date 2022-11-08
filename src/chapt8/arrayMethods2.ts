// array methods
const numbers: string[] = ["one", "two", "three", "four"];
const colors: string[] = ["red", "green", "blue", "purple"];

// add an item o the end of the array
numbers.push("five");
console.log(numbers);

// remove the last item and assign that item to a variable
const lastStrNumber: string | undefined = numbers.pop();
console.log(lastStrNumber);
console.log(numbers);

// find the index position of an item
console.log(numbers.indexOf("three"));

// remove the first color and assign that item to a variable
let firstColor: string | undefined = colors.shift();
console.log(firstColor);
console.log(colors);

// add an item to the beginning
colors.unshift("red-orange");
console.log(colors);

// toString() returns a comma separated string
console.log(colors.toString());
// join() is like toString but you can set what the separator is
console.log(colors.join("***"));

// concat - combine both arrays to one array
const data1: string[] = numbers.concat(colors);
console.log(data1);
const data2 = colors.concat(numbers);
console.log(data2);

export {};
