// Class Engine fr engine objects(engine is in car)
class Engine {
    constructor(_type, _power, _fuelConsumption) {
        this._type = _type;
        this._power = _power;
        this._fuelConsumption = _fuelConsumption;
        this._type = _type;
        this._power = _power;
        this._fuelConsumption = _fuelConsumption;
    }
    get power() {
        return this._power;
    }
    set power(value) {
        this._power = value;
    }
    get fuelConsumption() {
        return this._fuelConsumption;
    }
    set fuelConsumption(value) {
        this._fuelConsumption = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
// Abstract class Car
class Car {
    constructor(model, _maxSpeed, _engine, _personCapacity) {
        this.model = model;
        this._maxSpeed = _maxSpeed;
        this._engine = _engine;
        this._personCapacity = _personCapacity;
        this.model = model;
        this._maxSpeed = _maxSpeed;
        this._engine = _engine;
        this._personCapacity = _personCapacity;
    }
    get maxSpeed() {
        return this._maxSpeed;
    }
    set maxSpeed(value) {
        this._maxSpeed = value;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        this._engine = value;
    }
    get personCapacity() {
        return this._personCapacity;
    }
    set personCapacity(value) {
        this._personCapacity = value;
    }
}
// Class Bus - Child class of Car
class Bus extends Car {
    constructor(model, maxSpeed, engine, personCapacity, _companyOwner) {
        super(model, maxSpeed, engine, personCapacity);
        this.model = model;
        this._companyOwner = _companyOwner;
        this._companyOwner = _companyOwner;
    }
    get companyOwner() {
        return this._companyOwner;
    }
    set companyOwner(value) {
        this._companyOwner = value;
    }
    toString() {
        return "Bus:\n model = " + this.model + ", maxSpeed = " + this.maxSpeed + ", personCapacity = " + this.personCapacity + ", companyOwner = " + (this.companyOwner ? this.companyOwner : "no")
            + ",\n engine(type:" + this.engine.type + ", power: " + this.engine.power + ", fuelConsumption" + this.engine.fuelConsumption + ")\n";
    }
}
// Class PassengerCar - Child class of Car
class PassengerCar extends Car {
    constructor(model, maxSpeed, engine, personCapacity, _ownerName) {
        super(model, maxSpeed, engine, personCapacity);
        this.model = model;
        this._ownerName = _ownerName;
        this._ownerName = _ownerName;
    }
    get ownerName() {
        return this._ownerName;
    }
    set ownerName(value) {
        this._ownerName = value;
    }
    toString() {
        return "PassengerCar:\n model = " + this.model + ", maxSpeed = " + this.maxSpeed + ", personCapacity = " + this.personCapacity + ", companyOwner = " + (this.ownerName ? this.ownerName : "no")
            + ",\n engine(type:" + this.engine.type + ", power: " + this.engine.power + ", fuelConsumption" + this.engine.fuelConsumption + ")\n";
    }
}
// Class Truck - Child class of Car
class Truck extends Car {
    constructor(model, maxSpeed, engine, personCapacity, _weightCapacity) {
        super(model, maxSpeed, engine, personCapacity);
        this.model = model;
        this._weightCapacity = _weightCapacity;
        this._weightCapacity = _weightCapacity;
    }
    get weightCapacity() {
        return this._weightCapacity;
    }
    set weightCapacity(value) {
        this._weightCapacity = value;
    }
    toString() {
        return "Truck:\n model = " + this.model + ", maxSpeed = " + this.maxSpeed + ", personCapacity = " + this.personCapacity + ", weightCapacity = " + this.weightCapacity
            + ",\n engine(type:" + this.engine.type + ", power: " + this.engine.power + ", fuelConsumption" + this.engine.fuelConsumption + ")\n";
    }
}
// Creating different cars
let hyandaiAccent = new PassengerCar("Hyundai Accent", 170, new Engine("diesel", 200, 6), 4);
let superCar = new PassengerCar("Unknown Super Car", 470, new Engine("electric", 20000, 1), 5, "Superman");
let smallBus = new Bus("Small Bus", 110, new Engine("gasoline", 700, 11), 25);
let bigBus = new Bus("Big Bus", 100, new Engine("gasoline", 600, 12), 70, "Some Tourist Company");
let ordinaryTruck = new Truck("Ordinary Truck", 150, new Engine("diesel", 1100, 15), 2, 70);
let biggestTruck = new Truck("Biggest Truck", 145, new Engine("gas", 3000, 17), 2, 370);
// Calling method toString() for all cars to output car info
let cars = [hyandaiAccent, superCar, smallBus, bigBus, ordinaryTruck, biggestTruck];
for (let car of cars) {
    console.log(car.toString() + "\n");
}
//# sourceMappingURL=ex1.js.map