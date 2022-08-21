// create an array with 1, 2, 3 values
let fArray = [1, 2, 3];
// nest that array 3 times in another array
let nestAray = [fArray, fArray, fArray];
// output the number 2 from everywhere in the nest array
console.log(nestAray[0][1]); // 1st row, 2nd col
console.log(nestAray[1][1]); // 2nd row, 2nd col
console.log(nestAray[2][1]); // 3nd row, 2nd col
