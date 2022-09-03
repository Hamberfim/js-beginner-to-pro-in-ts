type Car = {
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
};
// array of car object to demo the break and continue keywords
let cars: Car[] = [
  { make: "Golf", model: "Volkwagen", year: 1999, color: "Black", price: 19900.0 },
  { make: "Picanto", model: "Kia", year: 2020, color: "Red", price: 22900.0 },
  { make: "Peugeot", model: "208", year: 2021, color: "White", price: 26500.0 },
  { make: "Fiat", model: "Punto", year: 2022, color: "Orange", price: 31900.0 },
  { make: "Citroen", model: "2CV", year: 1955, color: "Blue", price: 20000.0 },
  { make: "Fiat", model: "500", year: 1957, color: "Yellow", price: 17000.0 },
  { make: "AMC", model: "Pacer DL", year: 1978, color: "Green", price: 16000.0 },
  { make: "Peugeot", model: "208", year: 2021, color: "White", price: 30500.0 },
];

// simple continue
for (let i = 0; i < 10; i++) {
  if (i === 7) {
    break;
  } else {
    console.log(i);
  }
}
console.log();

// break
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 1978) {
    if (cars[i].color.toLowerCase() === "white" && cars[i].price < 30000.0) {
      console.log(
        `Buy this ${cars[i].color} ${cars[i].year} ${cars[i].make} ${cars[i].model} for $${cars[i].price.toFixed(2)}`
      );
      break;
    }
  }
}

export {};
