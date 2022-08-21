const myArray = [1, 3, 5, 6, 8, 9, 15];
console.log(myArray.indexOf(0)); // returns -1 because there is no zero in the array
console.log(myArray.indexOf(3)); // returns 1 because '3' is at index 1

// replace the second element in the array with '4'
myArray[1] = 4;
console.log(myArray);

const myArray2 = [];
myArray2[10] = "test";
console.log(myArray2); // returns the array with empty intems except for the last index position
console.log(myArray2[2]); // returns undefince because the index postion is empty

const myArray3 = [3, 6, 8, 9, 3, 55, 553, 438];
myArray3.sort();
myArray3.length = 0; // sets the length of the array to zero
console.log(myArray3[0]); // returns undefinded since the array has a zero length
