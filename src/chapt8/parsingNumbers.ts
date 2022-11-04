// parsing string to integers
let strInt: string = "9";
let parsedToInt: number = parseInt(strInt);
console.log(`Type of ${parsedToInt} is ${typeof parsedToInt}`);

// parsing string to int but
let strInt2: string = "0b101 "; // zero is the first number in the string and the rest is ignored
let strInt2ToInt: number = parseInt(strInt2);
console.log(`Type of ${strInt2ToInt} is ${typeof strInt2ToInt}`);

// parsing string to integers
let strFloat: string = "5.5";
let strFloatToInt: number = parseInt(strFloat); // parseInt doesn't interpret the decimal so the rest is ignored
console.log(`Type of ${strFloatToInt} is ${typeof strFloatToInt}`);

// parsing string to int
let strInt3: string = " 75ks "; // 75 is the first number in the string and the rest is ignored
let strInt3ToInt: number = parseInt(strInt3);
console.log(`Type of ${strInt3ToInt} is ${typeof strInt3ToInt}`);

// parsing string to float
let strFloat1: string = "3.9";
let parsedToFloat: number = parseFloat(strFloat1);
console.log(`Type of ${parsedToFloat} is ${typeof parsedToFloat}`);

// parsing string to float
let strFloat2: string = " 67.999khgf "; // 67.999 is the first number in the string and the rest is ignored
let parsedToFloat2: number = parseFloat(strFloat2);
console.log(`Type of ${parsedToFloat2} is ${typeof parsedToFloat2}`);

// parsing string to float
let strFloat3: string = "Bill1966"; // first character is non-numeric in the string so it is converted to a NaN
let parsedToFloat3: number = parseFloat(strFloat3);
console.log(`Type of ${parsedToFloat3} is ${typeof parsedToFloat3}`);

// parsing string to float
let strFloat4: string = "3.6.9"; // the second period is not interpreted as a decimal so the rest is ignored
let parsedToFloat4: number = parseFloat(strFloat4);
console.log(`Type of ${parsedToFloat4} is ${typeof parsedToFloat4}`);
