// create an car object with properties and their typical values..booleans, string, numbers
// create a var that can hold a string color value -  use the var with the square brackets to assign a new value
// this would be better as a class or an interface

interface Car {
  make: string;
  model: string;
  color: string;
  year: number;
  price?: number;
  isForSale: boolean;
}

const myFord: Car = {
  make: "Ford",
  model: "Freestyle",
  color: "Blue",
  price: 12000.0,
  year: 2016,
  isForSale: false,
};
console.log(myFord);
console.log(myFord.color); // blue

let newColor = "Green";
myFord.color = newColor;
console.log(myFord.color); // green
myFord.color = "white";
console.log(myFord.color); // pink

myFord.isForSale = true;
console.log(myFord.isForSale); // true

console.log(`Listed: ${myFord.year} ${myFord.color} ${myFord.make} ${myFord.model} for $${myFord.price?.toFixed(2)}`);
