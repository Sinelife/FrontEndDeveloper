// Ex 3
document.write("<h1>Ex 3</h1>");

// Function which get array with all elems from min to max value of params
let funcEx3 = function(x, y) {
    let min = x < y ? x : y;
    let max = x > y ? x : y;
    let counter = 0;
    let resultArray = [];
    for (let i = min; i <= max; i++) {
        resultArray[counter++] = i;
    }
    return resultArray;
}

// Example
document.write("Result array: " + funcEx3(11, 15) + "<br><br>");
document.write("Result array: " + funcEx3(15, 11) + "<br><br>");
document.write("Result array: " + funcEx3(11, 34) + "<br><br>");