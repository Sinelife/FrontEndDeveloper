// Main function for getting info about number: positive it or not, prime it or not, could it be devided on 2, 5, 3, 6, 9
function getInfo(x) {
    document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbspЧисло  " + x + "<br>");
    document.write("1) " + isNegativeNumberOrNot(x) + "<br>");
    document.write("2) " + isPrimeNumber(x) + "<br>");
    document.write("3) Check division without remainder<br>");
    let array = [2, 5, 3, 6, 9];
    for (let i = 0; i < array.length; i++) {
        document.write("&nbsp&nbsp" + isDivisable(x, array[i]) + "<br>");
    }
}

// Function for getting info about number: positive or negative number
function isNegativeNumberOrNot(x) {
    return (x < 0) ? "Number is negative!" : (x > 0) ? "Number is positive!" : "Number is 0!";
}

// Function for getting info about number: prime it or not
function isPrimeNumber(x) {
    if (x <= 1) {
        return "Number is not prime!";
    }
    for (let i = 2; i <= x / 2; i++) {
        if (x % i == 0) {
            return "Number is not prime!";
        }
    }
    return "Number is prime!";
}

// Function for getting info about number: could x be devided on y
function isDivisable(x, y) {
    return ((x % y == 0) ? " can be divided on " : " can't be divided on ") + y;
}

// Inputing number
let n = prompt("Input number: ");

// Calling main function
getInfo(n);