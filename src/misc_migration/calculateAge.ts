/*
 * Name         : calculateAge
 * Author       : Anthony Hamlin
 * Created      : 08/29/2022
 * Version      : 1.0
 * OS           : Windows 10
 * Lang         : Typescript (migration from C#)
 * IDE          : Visual Studio Code
 * Copyright    : 2022
 * Description  : a simple program to calculate an individuals current age.
 *                Get a users year of birth and calculate current age and then display there name and age.
 *                   Input :  static/included
 *                   Output: 1.) Display name and current age
 */

// need the currernt year
let currentDate: Date = new Date();

// main class to model data
class CurrentAge {
  userName: string;
  birthYear: number;
  todayYear: number = currentDate.getFullYear();

  constructor(uName: string, birthYear: number) {
    this.userName = uName;
    this.birthYear = birthYear;
  }

  calcAge() {
    let currentAge: number = this.todayYear - this.birthYear;
    return currentAge;
  }
}

let bill = new CurrentAge("Bill", 1969);
console.log(`${bill.userName} was born in ${bill.birthYear} and is ${bill.calcAge()} years old.`);
let mary = new CurrentAge("Mary", 1966);
console.log(`${mary.userName} was born in ${mary.birthYear} and is ${mary.calcAge()} years old.`);
let tim = new CurrentAge("tim", 2001);
console.log(`${tim.userName} was born in ${tim.birthYear} and is ${tim.calcAge()} years old.`);
