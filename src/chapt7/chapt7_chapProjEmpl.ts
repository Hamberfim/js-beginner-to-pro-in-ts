// create a class to track employees of a company - fname, lname, number of years with co.
class Employee {
  // In Typescript to use a prototype after the class is defined you add a field as: [variable: type]: type; (e.g., [key: type]: type;)
  [x: string]: unknown;
  [x: number]: unknown;

  readonly firstName: string;
  readonly lastName: string;
  readonly numOfYears: number;

  constructor(fname: string, lname: string, years: number) {
    this.firstName = fname;
    this.lastName = lname;
    this.numOfYears = years;
  }
}

// create at least two from the class
const tom = new Employee("Tom", "Smith", 24);
const sarah = new Employee("Sarah", "Jones", 22);
const carl = new Employee("Carl", "Brown", 28);

// add them to an array
let empArray = [tom, sarah, carl];

// setup a prototype to return employee details
Employee.prototype.empDetails = function (): void {
  console.log(`${this.fname} ${this.lname} has work for us $${this.years} years`);
};

// iterate thru the array
for (let i = 0; i < empArray.length; i++) {
  console.log(`${empArray[i].firstName} ${empArray[i].lastName} has work for us ${empArray[i].numOfYears} years`);
}
