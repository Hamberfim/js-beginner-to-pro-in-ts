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
