let numArr: number[] = [];

let addNums = (x: number, y: number) => {
  return x + y;
};

for (let i = 0; i < 10; i++) {
  let num1 = i * 5;
  let num2 = i * i;
  let result = addNums(num1, num2);
  numArr.push(result);
}

console.log(numArr);

export {};
