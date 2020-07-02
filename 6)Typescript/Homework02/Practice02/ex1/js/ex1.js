//Class Teacher 
class Teacher {
    constructor(name, country, subject) {
        this.name = name;
        this.country = country;
        this.subject = subject;
        this.name = name;
        this.country = country;
        this.subject = subject;
    }
    talk() {
        return "Hello! My name is " + this.name + " and I am from " + this.country + "! And I am a teacher";
    }
}
//Class Developer 
class Developer {
    constructor(name, country, languages) {
        this.name = name;
        this.country = country;
        this.languages = languages;
        this.name = name;
        this.country = country;
        this.languages = languages;
    }
    talk() {
        return "Hello! I am " + this.name + " and I am from " + this.country + "! I knew " + this.languages;
    }
}
// Creating objects and calling method talk()
let jack = new Teacher("Jack", "USA", "algebra");
let anna = new Teacher("Anna", "Ukraine", "geometry");
let fred = new Developer("Fred", "Canada", ["Java", "C++", "C#"]);
let andrey = new Developer("Fred", "Ukraine", ["JavaScript", "TypeScript", "CoffeeScript", "Python"]);
console.log(jack.talk());
console.log(anna.talk());
console.log(fred.talk());
console.log(andrey.talk());
//# sourceMappingURL=ex1.js.map