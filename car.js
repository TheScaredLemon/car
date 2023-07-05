class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return "Beep.";
  }

  toString() {
    return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }

  revEngine() {
    return "VROOM!!!";
  }
}

class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(vehicle) {
    if (!(vehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }

    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we’re full.";
    }

    this.vehicles.push(vehicle);
    return "Vehicle added to the garage.";
  }
}

// Testing the code
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
console.log(myFirstVehicle.honk()); 
console.log(myFirstVehicle.toString()); 

let myFirstCar = new Car("Toyota", "Corolla", 2005);
console.log(myFirstCar.toString()); 
console.log(myFirstCar.honk()); 
console.log(myFirstCar.numWheels); 

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
console.log(myFirstMotorcycle.toString()); 
console.log(myFirstMotorcycle.honk()); 
console.log(myFirstMotorcycle.revEngine()); 
console.log(myFirstMotorcycle.numWheels); 

let myGarage = new Garage(2);
console.log(myGarage.add(myFirstVehicle)); 
console.log(myGarage.add(myFirstCar)); 
console.log(myGarage.add(myFirstMotorcycle)); 
console.log(myGarage.add("Not a vehicle")); 
