//
const num1 = 23;
const num2 = 14;
const negOperator = "-";

function determinCalcOperation(num1: number, num2: number, negOperator: string): void {
  if (negOperator === "-") {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  }
}

determinCalcOperation(num1, num2, negOperator);
determinCalcOperation(10, 10, "+");
determinCalcOperation(22, 42, "+");

// as an arrow function
let determineCalcOp = (num1: number, num2: number, negOperator: string): void => {
  if (negOperator === "-") {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  }
};

determineCalcOp(2, 4, "+");
determineCalcOp(4, 3, "-");

const arr: string[] = ["pIZZA", "cAKE", "mILK", "bUTTER", "bREAD"];
arr.forEach((element) => console.log(element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()));

// spread operator
let newArr: string[] = [...arr, "iCE CREAM", "sODA", "tOOTHPASTE"];
console.log(newArr);

function addNums(...args: number[]): void {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  console.log(total);
}
let numArr = [6, 7, 9, 11, 5];
addNums(...numArr);
