class Car {
  constructor(brand, module, engine) {
    this.brand = brand;
    this.module = module;
    this.engine = engine;
  }

  drive() {
    this.engine.start();
  }
}

class Engine {
  constructor(horsePower, fuelConsumption) {
    this.horsePower = horsePower;
    this.fuelConsumptionPer100Km = fuelConsumption;
  }

  start() {
    
  }
}

const engine1 = new Engine(300, 1.5);

const car1 = new Car('Toyota', 'Camry', engine1);
