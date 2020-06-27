// Constructor-function of Students objects
function Human(name, surname, age, gender, country) {
    // Instance-level properties
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.country = country;
    // Instance-level method which check if current human is older than other
    this.isOlder = function(other) {
        return this.age > other.age;
    }

    // Instance-level method which check if current human is older than maxAge
    this.isSuperLongLiver = function() {
        return this.age > Human.maxAge;
    }
}

// Function-constructor-level properties
Human.maxAge = 125;
Human.planet = "Earth";

// Function-constructor-level method which check if first human os older
Human.firstIsOlder = function(human1, human2){
    return human1.age > human2.age;
}

// Function-constructor-level method which check if both humans live in same country
Human.areFellowCitizens = function(human1, human2){
    return human1.country == human2.country;
}

// Method toString in prototype
Human.prototype.toString = function() {
    return this.name + " " + this.surname + " (age: " + this.age + ")";
}

// Method valueOf in prototype
Human.prototype.valueOf = function() {
    return this.name + " " + this.surname;
}

// Creating humans
let zhenia = new Human("Zhenia", "Alexandrova", 16, "female", "Ukraine");
let alexandra = new Human("Alexandra", "Petrova", 28, "male", "Ukraine");
let andrey = new Human("Andrey", "Pavlov", 129, "male", "USA");
let svetlana = new Human("Svetlana", "Ivanova", 24, "female", "USA");
let fedor = new Human("Fedor", "Demchenko", 56, "male", "Germany");
let lena = new Human("Lena", "Alexandrova", 22, "female", "USA");
let pavel = new Human("Pavel", "Andreev", 126, "male", "France");
let cristina = new Human("Cristina", "Demianchuk", 29, "Japan");

// Fill array of humans 
let array = [zhenia, alexandra, andrey, svetlana, fedor, lena, pavel, cristina];

// Examples of using function-constructor-level methdod firstIsOlder() method on humans
document.write("<h2>Examples of using function-constructor-level methdod firstIsOlder() method on humans</h2>");
document.write(alexandra.toString() + " is older than " + zhenia.toString() + "? - " + Human.firstIsOlder(alexandra, zhenia) + "<br>");
document.write(alexandra.toString() + " is older than " + cristina.toString() + "? - " + Human.firstIsOlder(alexandra, cristina) + "<br>");
document.write(fedor.toString() + " is older than " + lena.toString() + "? - " + Human.firstIsOlder(fedor, lena) + "<br>");
document.write(lena.toString() + " is older than " + fedor.toString() + "? - " + Human.firstIsOlder(lena, fedor) + "<br>");

// Examples of using instance-level methdod isOlder() method on humans
document.write("<h2>Examples of using instance-level methdod isOlder() method on humans</h2>");
document.write(alexandra.toString() + " is older than " + zhenia.toString() + "? - " + alexandra.isOlder(zhenia) + "<br>");
document.write(alexandra.toString() + " is older than " + cristina.toString() + "? - " + alexandra.isOlder(cristina) + "<br>");
document.write(fedor.toString() + " is older than " + lena.toString() + "? - " + fedor.isOlder(lena) + "<br>");
document.write(lena.toString() + " is older than " + fedor.toString() + "? - " + lena.isOlder(fedor) + "<br>");

// Examples of using function-constructor-level methdod areFellowCitizens() method on humans
document.write("<h2>Examples of using function-constructor-level methdod areFellowCitizens() method on humans</h2>");
document.write("Are " + alexandra + " and " + zhenia + " live in same country? - " + Human.areFellowCitizens(alexandra, zhenia) + "<br>");
document.write("Are " + alexandra + " and " + cristina + " live in same country? - " + Human.areFellowCitizens(alexandra, cristina) + "<br>");
document.write("Are " + fedor + " and " + lena + " live in same country? - " + Human.areFellowCitizens(fedor, lena) + "<br>");
document.write("Are " + lena + " and " + svetlana + " live in same country? - " + Human.areFellowCitizens(lena, svetlana) + "<br>");

// Examples of using instance-level methdod isSuperLongLiver() method on humans
document.write("<h2>Examples of using instance-level methdod isSuperLongLiver() method on humans</h2>");
for (let i = 0; i < array.length; i++) {
    document.write(array[i].toString() + " is super-long-liver? - " + array[i].isSuperLongLiver() + "<br>");
}