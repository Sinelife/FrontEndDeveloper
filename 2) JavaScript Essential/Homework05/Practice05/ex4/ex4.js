// EX 4
document.write("EX 4<br>");

// Creating object car
let car = {
    wheelNum: 4,
    maxSpeed: 300
}

// Creating object plane
let plane = {
    passengerNum: 300,
    color: "white",
    maxSpeed: "1000"
}

// Creating object truck
let truck = {
    capacity: 20,
    color: "red",
    maxSpeed: 180
}

// FUnction for outputing simple and not simple properties
let outputSimpleAndNotSimpleProperties = function(a, b) {
    // block for outputing simple properties of a and b, and not simple properties of a
    for(property in a) {
        if (property in b) {
            document.write("simple property - " + property + "<br>");
        } else {
            document.write("not simple property - " + property + "<br>");
        }
    }
    // block for outputing not simple properties of b
    for(property in b) {
        if (!(property in a)) {
            document.write("not simple property - " + property + "<br>");
        }
    }
    document.write("<hr>");
}

// Calling method
outputSimpleAndNotSimpleProperties(car, truck);
outputSimpleAndNotSimpleProperties(car, plane);
outputSimpleAndNotSimpleProperties(plane, truck);
