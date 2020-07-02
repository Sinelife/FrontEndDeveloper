// Enum Gender
var Gender;
// Enum Gender
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// Class Cat - Animal Child class
class Cat {
    constructor(name, age, gender, hasOwner) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
    }
    talk() {
        return "Cat " + this.name + ": Myau!Myau!Myau!";
    }
    move() {
        return "Cat " + this.name + " is quickly running.";
    }
    eat() {
        return "Cat " + this.name + " is eating fish.";
    }
}
// Class Bird - Animal Child class
class Bird {
    constructor(name, age, gender, hasOwner) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
    }
    talk() {
        return "Bird " + this.name + ": Kaaaar! Kaaaar!";
    }
    move() {
        return "Bird " + this.name + " is flying.";
    }
    eat() {
        return "Bird " + this.name + " is eating worms.";
    }
}
// Class Fish - Animal Child class
class Fish {
    constructor(name, age, gender, hasOwner) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hasOwner = hasOwner;
    }
    talk() {
        return "Fish " + this.name + ": ...";
    }
    move() {
        return "Fish " + this.name + " is swimming.";
    }
    eat() {
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
let animals = [nemo, bulka, murchik, murka, jack, kesha, joanna, blue];
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
//# sourceMappingURL=extraEx.js.map