// inheritance
class Vehicle {
  color: string;
  fuelType: string;
  currentSpeed: number;
  maxSpeed: number;

  constructor(color: string, fuelType: string, currentSpeed: number, maxSpeed: number) {
    this.color = color;
    this.fuelType = fuelType;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }

  move(): number {
    return this.currentSpeed;
  }

  accelerate(amount: number): number {
    return (this.currentSpeed += amount);
  }
}

class Bicycle extends Vehicle {
  constructor(color: string, fuelType: string, currentSpeed: number, maxSpeed: number) {
    super(color, fuelType, currentSpeed, maxSpeed);
  }

  popWheelie(): void {
    console.log("Popped a wheelie and driving on one wheel!");
  }
}

let myTwoWheels = new Bicycle("Silver", "human effort", 7, 20);
myTwoWheels.accelerate(6);
console.log(`My ${myTwoWheels.color} bicycle takes ${myTwoWheels.fuelType} and is traveling at ${myTwoWheels.move()} mph.`);

class ElectricCar extends Vehicle {
  constructor(color: string, fuelType: string, currentSpeed: number, maxSpeed: number) {
    super(color, fuelType, currentSpeed, maxSpeed);
  }

  isCharged(charge: number): boolean {
    let isCharged: boolean = false;
    if (charge === 1) {
      return (isCharged = true);
    } else {
      return (isCharged = false);
    }
  }
}

let myElCar = new ElectricCar("black", "Electricity", 35, 75);
console.log(`My ${myElCar.color} bicycle takes ${myElCar.fuelType} and is traveling at ${myElCar.move()} mph. Energy indcator says fully charge: ${myElCar.isCharged(1)}`);
