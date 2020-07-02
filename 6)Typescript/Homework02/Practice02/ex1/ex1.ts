// Interface Human
interface Human {
    name : string;
    country: string;
    talk() : string;
}

//Class Teacher 
class Teacher implements Human {
    constructor(readonly name: string, readonly country: string, readonly subject: string) {
        this.name = name;
        this.country = country;
        this.subject = subject;
    }

    talk() : string {
        return "Hello! My name is " + this.name + " and I am from " + this.country + "! And I am a teacher";
    }
}

//Class Developer 
class Developer implements Human {
    constructor(readonly name: string, readonly country: string, readonly languages: string[]) {
        this.name = name;
        this.country = country;
        this.languages = languages;
    }

    talk() : string {
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