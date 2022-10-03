class Animal {
  species: string;
  sound: string;
  [x: string]: any;

  constructor(species: string, sound: string) {
    this.species = species;
    this.sound = sound;
  }

  displayAnimalprops(): string {
    return `${this.species} makes the ${this.sound} sound`;
  }
}

Animal.prototype.foodType = function (food: string) {
  this.food = food;
  return `${this.species} eats ${this.food}`;
};

class Dog extends Animal {}
let fido = new Dog("Canine", "bark");
console.log(`${fido.displayAnimalprops()} and ${fido.foodType("Puppy Chow")}`);

class GoldFish extends Animal {}
let bubbles = new GoldFish("Cyprinidae", "blub, blub blub");
console.log(`${bubbles.displayAnimalprops()} and ${bubbles.foodType("fish flakes")}`);
