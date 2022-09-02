// type Monitor = {
//   make: string;
//   model: string;
//   screenSize: string;
//   isUHD: boolean;
// };
// create a simple object with multiple items
let monitorDell: any = {
  // any is required because of the use of a 'for in'
  make: "Dell",
  model: "S2340M",
  screenSize: "23 inches",
  isUHD: true,
};

// use a for in loop to get the property names and values outputing to the console
for (const property in monitorDell) {
  console.log(`${property}: ${monitorDell[property]}`);
}

console.log();
// create an array containing the same items using either a for loop or a for in loop and ouput to the console
let monitorArray: string[] = [];
for (const property in monitorDell) {
  monitorArray.push(monitorDell[property]);
}
for (let index = 0; index < monitorArray.length; index++) {
  console.log(monitorArray[index]);
}
console.log();

// converting object to arrays - any is required because of the use of the loop
let car: any = {
  model: "golf",
  make: "volkswagen",
  year: 1999,
  color: "black",
};
let carKeysArr: string[] = Object.keys(car);
for (let i = 0; i < carKeysArr.length; i++) {
  console.log(`${carKeysArr[i]}: ${car[carKeysArr[i]]}`);
}
