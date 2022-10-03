// builtin prototype mechanism
class Person {
  firstName: string;
  lastName: string;

  // In Typescript to use a prototype after the class is defined you add a field as: [variable: type]: type; (e.g., [key: type]: type;)
  [x: string]: any; // could/would handle both string or number -> introduction and Person.prototype.hairColor = "brown"; or Person.prototype.age = 27;
  [x: number]: any; // handles just number -> Person.prototype.age = 27;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greet() {
    console.log("Hi There!");
  }
}

// a prototype is a property that holds all the properties and methods of an object
// so adding a function to 'ClassName.prototype.someFunctionName' adds it to that class
// even though the class is defined its as if you defined them in the class orginally
Person.prototype.introduction = function (): any {
  console.log(`Hi I'm this ${this.firstName}`);
};
Person.prototype.hairColor = "brown";
Person.prototype.age = 27;

let p = new Person("Maria", "Palligio");

// called from the p instance
p.introduction();
console.log(p.hairColor);
console.log(p.age);
