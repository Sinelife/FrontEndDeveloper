// Ex 5
document.write("<h1>Ex 5</h1>");

// Function which get all odd numbers and put them in array
let getOddNumbers = function(array) {
    let resArray = [];
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 != 0) {
            resArray[counter++] = array[i];
        }
    }
    return resArray;
}

// Function which get all even numbers and put them in array
let getEvenNumbers = function(array) {
    let resArray = [];
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            resArray[counter++] = array[i];
        }
    }
    return resArray;
}

// Function which get sum of array elements(odd or even depends on function which you put in parameter)
let getArraySum = function(func, arr) {
    let array = func(arr);
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

// Example
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write("Array: " + arr + "<br>");
document.write("Res for odd elems: " + getArraySum(getOddNumbers, arr) + "<br>");
document.write("Res for even elems: " + getArraySum(getEvenNumbers, arr) + "<br>");