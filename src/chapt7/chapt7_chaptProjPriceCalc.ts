class MenuItems {
  private _pizza: number = 12.99;
  private _soda: number = 1.99;
  numberOfPizzas: number = 0;
  numberOfSodas: number = 0;

  constructor(numberOfPizzas: number, numberOfSodas: number) {
    this.numberOfPizzas = numberOfPizzas;
    this.numberOfSodas = numberOfSodas;
  }

  calculate(): number {
    return this.numberOfPizzas * this.pizza + this.numberOfSodas * this.soda;
  }

  public get pizza(): number {
    return this._pizza;
  }
  public get soda(): number {
    return this._soda;
  }

  get total() {
    return this.calculate();
  }
}

const order1 = new MenuItems(1, 2);
console.log(`Order of ${order1.numberOfPizzas} pizza(s) and ${order1.numberOfSodas} soda(s) for a total of $${order1.total.toFixed(2)}`);
const order2 = new MenuItems(2, 4);
console.log(`Order of ${order2.numberOfPizzas} pizza(s) and ${order2.numberOfSodas} soda(s) for a total of $${order2.total.toFixed(2)}`);
const order3 = new MenuItems(3, 2);
console.log(`Order of ${order3.numberOfPizzas} pizza(s) and ${order3.numberOfSodas} soda(s) for a total of $${order3.total.toFixed(2)}`);
