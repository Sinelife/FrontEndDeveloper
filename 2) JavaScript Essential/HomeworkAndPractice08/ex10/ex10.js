// Ex 10
document.write("<h1>Ex 10</h1>");

// Function for getting samre numbers which placed near
let getAllSameNearNumbers = function(array) {
    let res = [];
    for (let i = 0; i < array.length - 1; i++) {
        if(array[i] == array[i + 1]) {
            res.push(array[i]);
        }
    }
    return res;
}

// Example
let numbers = [1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 9];
document.write("Array: " + numbers + "<br>");
document.write("Result: " + getAllSameNearNumbers(numbers));