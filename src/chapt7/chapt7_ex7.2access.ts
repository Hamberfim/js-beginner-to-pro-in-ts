// blocking/setting accesss and using setters/getter accessors
class Person {
  // block direct access  - this object i in control of its own fields --Encapsulation
  #firstName: string;
  #middleName: string;
  #lastName: string;

  // constructor method - block from external use other than through the getters/setters below
  constructor(firstName: string, middleName: string, lastName: string) {
    this.#firstName = firstName;
    this.#middleName = middleName;
    this.#lastName = lastName;
  }

  // accessors look like methods but are properties
  get firstName() {
    return this.#firstName;
  }

  set firstName(firstName) {
    this.#firstName = firstName;
  }

  get middleName() {
    return this.#firstName;
  }

  set middleName(middleName) {
    this.#middleName = middleName;
  }

  get lastName() {
    return this.#lastName;
  }

  set lastName(lastname) {
    this.#lastName = lastname;
  }
}

// instantiate a person object
let mariaP = new Person("Maria", "Anne", "Palligo");
console.log(mariaP.firstName);

export {};
