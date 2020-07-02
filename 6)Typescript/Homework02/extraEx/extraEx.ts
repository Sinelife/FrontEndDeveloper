// Enum Gender
enum Gender {
    Male, Female
}

// Interface Animal
interface Animal {
    name : string;
    age: number;
    gender: Gender;
    hasOwner?: boolean;
    talk(): string;
    move(): string; 
    eat(): string;
}

// Class Cat - Animal Child class
class Cat implements Animal {
    constructor(readonly name: string, readonly age: number, readonly gender: Gender, readonly hasOwner?: boolean, ) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
    }

    talk() : string {
        return "Cat " + this.name + ": Myau!Myau!Myau!";
    }

    move() : string {
        return "Cat " + this.name + " is quickly running.";
    }

    eat() : string {
        return "Cat " + this.name + " is eating fish.";
    }
}

// Class Bird - Animal Child class
class Bird implements Animal {
    constructor(readonly name: string, readonly age: number, readonly gender: Gender, readonly hasOwner?: boolean) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
    }

    talk() : string {
        return "Bird " + this.name + ": Kaaaar! Kaaaar!";
    }

    move() : string {
        return "Bird " + this.name + " is flying.";
    }

    eat() : string {
        return "Bird " + this.name + " is eating worms.";
    }
}

// Class Fish - Animal Child class
class Fish implements Animal {
    constructor(readonly name: string, readonly age: number,  readonly gender: Gender, readonly hasOwner?: boolean) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
    }

    talk() : string {
        return "Fish " + this.name + ": ...";
    }

    move() : string {
        return "Fish " + this.name + " is swimming.";
    }

    eat() : string {
        return "Fish " + this.name + " is eating fishFeed.";
    }
}

// Creating different animals
let nemo = new Fish("Nemo", 3, Gender.Male);
let bulka = new Fish("Bulka", 7, Gender.Female, true);
let murchik = new Cat("Murchik", 3, Gender.Male, true);
let murka = new Cat("Murka", 3, Gender.Female, true);
let jack = new Cat("Jack", 3, Gender.Male, true);
let kesha = new Bird("Kesha", 3, Gender.Male, true);
let joanna = new Bird("Joanna", 3, Gender.Female);
let blue = new Bird("Blue", 3, Gender.Male, true);

// Fill animal array with animals
let animals: Animal[] = [nemo, bulka, murchik, murka, jack, kesha, joanna, blue];

// Call method talk() for all animals
console.log("TALK() METHOD TEST\n");
for (let animal of animals) {
    console.log(animal.talk() + "\n");
}

// Call method eat() for all animals
console.log("\nEAT() METHOD TEST\n");
for (let animal of animals) {
    console.log(animal.eat() + "\n");
}

// Call method move() for all animals
console.log("\nMOVE() METHOD TEST\n");
for (let animal of animals) {
    console.log(animal.move() + "\n");
}