// Ex 11
document.write("<h1>Ex 11</h1>");

// Objects
let anna = {
    name: "Anna",
    surname: "Black",
    age: "18",
    hobby: "computer games",
}

let point = {
    x: 10,
    y: 100
} 

let fred = {
    name: "Fred",
    surname: "White",
    age: "66",
}

// Function which get property num of objects
let getPropertyNum = function(obj) {
    let counter = 0;
    for (property in obj) {
        counter++;
    }
    return counter;
}

// Example
document.write("Anna propertyNum: " + getPropertyNum(anna) + "<br>");
document.write("Fred propertyNum: " + getPropertyNum(fred) + "<br>");
document.write("Point propertyNum: " + getPropertyNum(point) + "<br>");