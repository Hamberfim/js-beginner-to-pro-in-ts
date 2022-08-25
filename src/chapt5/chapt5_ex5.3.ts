// setup a blank array called myWork
let myWork: object[] = [];

//use a for loop to create a list of 10 objects, each of which is a numbered lesson with an alternating boolean status (ternary operator modulous)
for (let i = 1; i <= 10; i++) {
  let isActive: boolean = i % 2 === 0 ? false : true;

  // create the lesson using a temp object var, i.e., {name: "Lesson 1", status: true} {name: "Lesson 2", status: false}
  let tmpObj = { name: "Lesson " + i, status: isActive };

  // push the temp object lesson to the array
  myWork.push(tmpObj);
}

// output array to console
console.log(myWork);
