const step = 3;
for (let i = 0; i < 500; i += step) {
  if (i > 37) {
    // caculation makes it to 37 but breaks so it doesn't get ouput in the log
    break;
  }
  console.log(i);
}

console.log();

const myArr = [1, 5, 7];
for (let i = 0; i < myArr.length; i++) {
  console.log(Number(myArr[i]));
  myArr[i] = Number(myArr[i]) + 5;
  console.log("..." + Number(myArr[i]));
}
