// Ex 16
document.write("<h1>Ex 16</h1>");

// Function which finds narcistic number
let isNarcistic = function(number) {
    let digits = number.toString().split("");
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), digits.length);
    }
    return sum == number;
}

// Example
let a = 153;
let b = 155;
let c = 1634;
document.write(a + "isNarcistic? - " + isNarcistic(a) + "<br>");
document.write(b + "isNarcistic? - " + isNarcistic(b) + "<br>");
document.write(c + "isNarcistic? - " + isNarcistic(c) + "<br>");

