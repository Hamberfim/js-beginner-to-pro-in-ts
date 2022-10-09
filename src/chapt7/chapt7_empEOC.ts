class Employee {
  firstName: string;
  lastName: string;
  yearsWorked: number;

  constructor(firstName: string, lastName: string, yearsWorked: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearsWorked = yearsWorked;
  }

  // when using a prototype
  [x: string]: any;
}

// create a couple of instances and add them to an array
let employeeList: Employee[] = [];

const tomWillis: Employee = new Employee("Tom", "Willis", 7);
employeeList.push(tomWillis);

const bettyWhite: Employee = new Employee("Betty", "White", 12);
employeeList.push(bettyWhite);

// console.log(employeeList);

// setup a prototype to return details of the employee
Employee.prototype.displayEmp = function (): void {
  console.log(`${this.firstName} ${this.lastName} has worked here ${this.yearsWorked} years`);
};

employeeList.forEach((employee) => {
  employee.displayEmp();
});

export {};
