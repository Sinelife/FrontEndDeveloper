
let myObject = {
    a: "AAAA",
    b: "BBBB"
} 
let myOtherObject = {
    a: "A999",
    b: "B999"
} 

let someFunction = function(x, y) {
    return {
        name: "John"
    };
}

document.write(someFunction(myObject, myOtherObject).name);