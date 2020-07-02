// Class Engine fr engine objects(engine is in car)
class Engine {
    constructor(private _type: string, private _power: number, private _fuelConsumption: number) {
        this._type = _type;
        this._power = _power;
        this._fuelConsumption = _fuelConsumption;
    }

    get power(): number {
        return this._power;
    }

    set power(value: number) {
        this._power = value;
    }

    get fuelConsumption(): number {
        return this._fuelConsumption;
    }

    set fuelConsumption(value: number) {
        this._fuelConsumption = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }
}

// Abstract class Car
abstract class Car {
    constructor(public model: string, protected _maxSpeed: number, protected _engine: Engine, protected _personCapacity: number) {
        this.model = model;
        this._maxSpeed = _maxSpeed;
        this._engine = _engine;
        this._personCapacity = _personCapacity;
    }

    get maxSpeed(): number {
        return this._maxSpeed;
    }

    set maxSpeed(value: number) {
        this._maxSpeed = value;
    }

    get engine(): Engine {
        return this._engine;
    }

    set engine(value: Engine) {
        this._engine = value;
    }

    get personCapacity(): number {
        return this._personCapacity;
    }

    set personCapacity(value: number) {
        this._personCapacity = value;
    }

    abstract toString(): string;
}

// Class Bus - Child class of Car
class Bus extends Car {
    constructor(public model: string, maxSpeed: number, engine: Engine, personCapacity: number, private _companyOwner?: string) {
        super(model, maxSpeed, engine, personCapacity);
        this._companyOwner = _companyOwner;
    }    
    
    get companyOwner(): string {
        return this._companyOwner;
    }

    set companyOwner(value: string) {
        this._companyOwner = value;
    }

    toString(): string {
        return "Bus:\n model = " + this.model + ", maxSpeed = " + this.maxSpeed + ", personCapacity = " + this.personCapacity + ", companyOwner = " + (this.companyOwner ? this.companyOwner : "no")
        + ",\n engine(type:" + this.engine.type + ", power: " + this.engine.power + ", fuelConsumption" + this.engine.fuelConsumption + ")\n";
    }
}

// Class PassengerCar - Child class of Car
class PassengerCar extends Car {
    constructor(public model: string, maxSpeed: number, engine: Engine, personCapacity: number, private _ownerName?: string) {
        super(model, maxSpeed, engine, personCapacity);
        this._ownerName = _ownerName;
    }
 
    get ownerName(): string {
        return this._ownerName;
    }

    set ownerName(value: string) {
        this._ownerName = value;
    }

    toString(): string {
        return "PassengerCar:\n model = " + this.model + ", maxSpeed = " + this.maxSpeed + ", personCapacity = " + this.personCapacity + ", companyOwner = " + (this.ownerName ? this.ownerName : "no")
        + ",\n engine(type:" + this.engine.type + ", power: " + this.engine.power + ", fuelConsumption" + this.engine.fuelConsumption + ")\n";
    }
}

// Class Truck - Child class of Car
class Truck extends Car {
    constructor(public model: string, maxSpeed: number, engine: Engine, personCapacity: number, private _weightCapacity: number) {
        super(model, maxSpeed, engine, personCapacity);
        this._weightCapacity = _weightCapacity;
    }

    get weightCapacity(): number {
        return this._weightCapacity;
    }

    set weightCapacity(value: number) {
        this._weightCapacity = value;
    }

    toString(): string {
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
let cars: Car[] = [hyandaiAccent, superCar, smallBus, bigBus, ordinaryTruck, biggestTruck];
for (let car of cars) {
    console.log(car.toString() + "\n");
}