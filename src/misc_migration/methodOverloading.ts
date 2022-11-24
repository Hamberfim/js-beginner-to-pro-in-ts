// Method overloading - four signatures - probably should use type of / type guard for narrowing of type
function add(prop1: number, prop2: number, prop3: number): number;

function add(prop1: string, prop2: string, prop3: string): string;

function add(prop1: boolean, prop2: boolean, prop3: boolean): boolean;

function add(prop1: any, prop2: any, prop3: any): any {
  return prop1 + prop2 + prop3;
}

let floatNum1 = 10.1;
let floatNum2 = 12.12;
let floatNum3 = 45.45;

let intNum1 = 10;
let intNum2 = 12;
let intNum3 = 45;

let strTxt1 = "When ";
let strTxt2 = "Harry ";
let strTxt3 = "Met..";

let bool1 = true;
let bool2 = false;
let bool3 = true;

let floatType = add(floatNum1, floatNum2, floatNum3);
console.log(floatType);

let intType = add(intNum1, intNum2, intNum3);
console.log(intType);

let strType = add(strTxt1, strTxt2, strTxt3);
console.log(strType);

let boolType = add(bool1, bool2, bool3);
console.log(boolType); // true = 1, false = 0  expected = 2
