// Generate a Nested Loop Table - create an empty array myTable
let myTable = [];

// set some const/final variable for the numer of rows/columns
const rows: number = 5;
const cols: number = 5;

// set up a counter variable to zero- to set the cell content and count the values within the table
let counter: number = 0;

// create a for loop to set the number of interations and each row of the table
for (let i = 0; i < rows; i++) {
  // within that loop set a new temp array - tempTable to hold each row of data
  let tempTable = [];
  // nest a second loop to count the columns - these are run within the row
  for (let j = 0; j < cols; j++) {
    // increment the main counter on each iteration of the inner loop, tracking the master count of each of the lines cells
    counter++;
    // push the counter value to the tempTable array
    tempTable.push(counter);
  }
  // push the tempTable array to the myTable array
  myTable.push(tempTable);
}

// ouput using console.table(myTable)
console.table(myTable);

// block global scope on var names
export {};
