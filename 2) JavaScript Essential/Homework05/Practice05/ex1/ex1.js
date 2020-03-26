// Ex 1
document.write("EX 1<br>");

// CReating object person
let person = {
    name: "Anna",
    surname: "Ivanova",
    age: 19,
    // Method for outputing person
    output: function() {
        document.write("name: " + this.name + "<br>");
        document.write("surname: " + this.surname + "<br>");
        document.write("age: " + this.age + "<br><br>");
    }
}

// Calling function to output object
person.output();