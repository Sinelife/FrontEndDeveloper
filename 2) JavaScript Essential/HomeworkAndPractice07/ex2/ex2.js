// Ex 2
document.write("<h1>Ex 2</h1>");

// Function which get pow of n-th elem
let funcEx2 = function(arr, n) {
    let res = 1;
    for (let i = 0; i < n; i++) {
        res *= arr[n];
    }
    return res;
}

// Example
let array = [1, 2, 3, 4, 5, 6];
document.write("Array: " + array + "<br> Result of pow function: " + funcEx2(array, 3) + "<br><br>");
array = [1, 2, 3, 4, 5, 6];
document.write("Array: " + array + "<br> Result of pow function: " + funcEx2(array, 4) + "<br><br>");