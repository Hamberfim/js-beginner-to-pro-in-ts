let shoppingList: string[] = [];

// populate array
shoppingList.push("Milk");
shoppingList.push("Bread");
shoppingList.push("Apples");
console.log(shoppingList);

// update bread with bananas & eggs
shoppingList.splice(1, 0, "Bananas", "Eggs");
console.log(shoppingList);

// remove last item
shoppingList.pop();
console.log(shoppingList);

// sort alpha order
shoppingList.sort();
console.log(shoppingList);

// find index of milk
let findMilkInx = shoppingList.indexOf("Milk");
console.log(`Milk is at index ${findMilkInx}`);

// add carrots and lettuce after bananas
shoppingList.splice(1, 0, "Carrots", "Lettuce");
console.log(shoppingList);

// new array concat with old array
let newList: string[] = ["Juice", "Pop"];
let fullShoppingList = shoppingList.concat(newList, newList);
console.log(fullShoppingList);

// get last index item
console.log(`The last items is '${fullShoppingList.pop()}'`);
