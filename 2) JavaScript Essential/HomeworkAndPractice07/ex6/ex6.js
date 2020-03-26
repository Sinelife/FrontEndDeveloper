// Ex 6
document.write("<h1>Ex 6</h1>");

// Objects
let anna = {
    name: "Anna",
    surname: "Black",
    age: "18"
}

let peter = {
    name: "Peter",
    surname: "White",
    age: "25",
    job: "C++ developer"
}

let john = {
    name: "John",
    surname: "Green",
    age: "110",
    job: "Scientist"
}

let london = {
    name: "London",
    peopleNum: 9_000_000,
    country: "Great Britain"
}

let earth = {
    name: "Earth",
    peopleNum: 7_600_000_000,
    radius: 6_371_000
}

let mars = {
    name: "Mars",
    peopleNum: 0,
    radius: 3_389_500
}

// Function to get value of property of array if object has that property
let getAllPropertyValuesOfArray = function(array, propertyName) {
    let resArray = [];
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (propertyName in array[i]) {
            resArray[counter++] = array[i][propertyName];
        }
    }
    return resArray;
}

// Our array of objects
let array = [anna, peter, john, london, earth, mars];

// Example
document.write("Values of property name: " + getAllPropertyValuesOfArray(array, "name") + "<br>");
document.write("Values of property age: " + getAllPropertyValuesOfArray(array, "age") + "<br>");
document.write("Values of property peopleNum: " + getAllPropertyValuesOfArray(array, "peopleNum") + "<br>");
document.write("Values of property radius: " + getAllPropertyValuesOfArray(array, "radius") + "<br>");

