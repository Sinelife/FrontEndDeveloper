// Input number which factorial we whould find
let n = prompt("Input number: ", "10");

// Find factorial of our number
let i = 1;
let res = 1;
do {
    res *= i++;
} while (i <= n);

// Output the result
document.write("Result: " + res);
