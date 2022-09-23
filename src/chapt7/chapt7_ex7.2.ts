// create a Person class with aconstructor for firstname and lastname
class Person {
  firstName: string;
  lastName: string;
  birthYear?: number;

  constructor(firstName: string, lastName: string = "DOE", birthYear: number = 0) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
  }

  greeting(): void {
    console.log(`Hello ${this.firstName} ${this.lastName}, It's nice to see you.`);
  }

  fullnameWithBirthYear(): void {
    console.log(`${this.firstName} ${this.lastName} was bron in ${this.birthYear}.`);
  }
}

//create two variables and assign a value of the new person object to each using the firstname/lastname
let friendOne = new Person("Tommy", "Tutone");
let friendTwo = new Person("David", "Byrne", 1952);
let friendThree = new Person("Larry");

// output both to the console with a greeting froma method within the Person class
friendOne.greeting();
friendTwo.greeting();
friendTwo.fullnameWithBirthYear();
friendThree.greeting();

export {};
