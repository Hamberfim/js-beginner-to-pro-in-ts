function binarySearch(arrayIn: string[], target: string, start: number = 0, end: number = arrayIn.length - 1): number {
  // set a middle index position value using floor() to return an integer rather than a decimal
  const middle: number = Math.floor((start + end) / 2);

  // what are our values
  console.log("Start at:", start, "Middle is:", middle, "End is:", end);

  // if value is not found return '-1'
  if (start > end) {
    console.log(`'${target}' Not Found!`);
    return -1;

    // the middle index value could be the target
  } else if (arrayIn[middle] === target) {
    console.log(`${target} Found at index ${middle}`);
    return middle;

    // the middle index value could be greater than the target
  } else if (arrayIn[middle] > target) {
    // recursive task - call the function again to search thru the first half of the array
    return binarySearch(arrayIn, target, start, middle - 1); // since the middle value was greater than our searchItem, our end value should be one less than the middle value

    // the middle index value could be less that the target
  } else if (arrayIn[middle] < target) {
    // recursive task - call the function again to search thru the last half of the array
    return binarySearch(arrayIn, target, middle + 1, end); // since the middle value was less than our searchItem, our start value should be one more than the middle value
  }
  return middle;
}

// test function
const arrayOfNames = [
  "Aaron",
  "Addison",
  "Alan",
  "Anthony",
  "Antonio",
  "Brian",
  "Buddy",
  "Charles",
  "Charley",
  "Eddie",
  "Francis",
  "Francisco",
  "Frank",
  "Mitch",
  "Montague",
  "Sam",
  "Santiago",
  "Terry",
  "Thomson",
  "Titus",
  "Vince",
  "Vincent",
  "Wilson",
  "Zechariah",
];

console.log(binarySearch(arrayOfNames, "Anthony"));
console.log();
console.log(binarySearch(arrayOfNames, "Kevin"));
