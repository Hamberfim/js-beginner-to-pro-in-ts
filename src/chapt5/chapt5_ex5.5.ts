const gridArr = [];
const gridCells = 64;
let counter = 0;
let row: number[] | undefined;
for (let i = 0; i < gridCells; i++) {
  if (counter % 8 == 0) {
    if (row != undefined) {
      gridArr.push(row);
    }
    row = [];
  }
  counter++;
  let temp = counter;
  row?.push(temp);
}
console.table(gridArr);

// block global access to same name varables
export {};
