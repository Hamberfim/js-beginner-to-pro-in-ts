// not a number
let strNum1: string | number | any = "26x";
console.log(typeof strNum1, isNaN(strNum1), "is not a number"); // is not a number
let Num2: number = 26;
console.log(typeof Num2, isNaN(Num2), "is a number"); /// is a number

// is Finite()
let pi: number = Math.PI;
console.log("Pi is Finite:", isFinite(pi));
let strNumb3: string | number | any = "pizza";
console.log("String is Finite:", isFinite(strNumb3));

// is integer
console.log("Num2 is integer:", Number.isInteger(Num2));
console.log("String is integer:", Number.isInteger(strNumb3));

// .toPercision()  - includes digits before the decimal and after and returns the number as a string
let myValue: number = 12.8956231;
let myNewValue = myValue.toPrecision(3);
console.log(typeof myNewValue, myNewValue);
myNewValue = myValue.toPrecision(5);
console.log(myNewValue);
myNewValue = myValue.toPrecision(7);
console.log(myNewValue);

// .toFixed() - only digits after the decimal
console.log(myValue.toFixed(3));

// .min / .max - lowest and hightest
let min = Math.min(7, 79, 14, 5, 4);
console.log("Lowest", min);
let max = Math.max(7, 79, 14, 5, 4);
console.log("Highest", max);

// .round(), .ceil(), .floor(), .trunc()
console.log("myValue:", myValue, "rounded becomes", Math.round(myValue));
console.log("myValue:", myValue, "ceil becomes", Math.ceil(myValue));
console.log("myValue:", myValue, "floor becomes", Math.floor(myValue));
console.log("myValue:", myValue, "trunc becomes", Math.trunc(myValue));

myValue = 12.4956231;
console.log("myValue:", myValue, "rounded becomes", Math.round(myValue));
console.log("myValue:", myValue, "ceil becomes", Math.ceil(myValue));
console.log("myValue:", myValue, "floor becomes", Math.floor(myValue));
console.log("myValue:", myValue, "trunc becomes", Math.trunc(myValue));

export {};
