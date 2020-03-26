// Ex 1
document.write("<h1>Ex 1</h1>");

// Function whuch get result of multiplication of all array elems
let arrayElemMul = function(arr) {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        res *= arr[i] == 0 ? 1 : arr[i];
    }
    return res;
}


// Example
let array = [1, 10, 20, 30, 0, 100]
document.write("Array: " + array + " <br>Result of elem Multiplication: " + arrayElemMul(array) + "<br><br>");

array = [1, 2, 3, 0, 4, 0, 5, -1, 6]
document.write("Array: " + array + " <br>Result of elem Multiplication: " + arrayElemMul(array) + "<br><br>");