// implement data structure(s) for a product cataloge and create queries to retrieve data
type Product = {
  name: string;
  model: string;
  cost: number;
  quantity: number;
};

type Inventory = {
  products: Product[];
};

// create an array to hold an inventory of store items
let inventory: Inventory = {
  products: [],
};

// create three items, each have properties of name, model/type of product, cost, quantity
const pizza: Product = {
  name: "Tony's Pizza",
  model: "Frozen",
  cost: 3.99,
  quantity: 25,
};

const tea: Product = {
  name: "Ginger Tea",
  model: "individual tea bags",
  cost: 6.99,
  quantity: 56,
};

const pop: Product = {
  name: "Oli-Pop",
  model: "Orange Cream",
  cost: 1.99,
  quantity: 48,
};

// add all three object to the main array using an array method  -log to console
inventory.products.push(pizza);
inventory.products.push(tea);
inventory.products.push(pop);
for (const iterator of inventory.products) {
  console.log(iterator);
}

// access elements of the 3rd item and log to console,
console.log(
  `We have ${inventory.products[2].quantity} cans of ${inventory.products[2].name} ${
    inventory.products[2].model
  } soda at $${inventory.products[2].cost.toFixed(2)} each`
);
