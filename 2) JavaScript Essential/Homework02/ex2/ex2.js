// Create variables a and b
let a = 6;
let b = 21;

// Output the sum of all numbers between a and b
document.write("Sum of numbers from " + a + " to " + b + ": ");
let sum = 0;
for (let i = a; i <= b; i++) {
    sum += i;
}
document.write(sum);

// Output all odd numbers between a and b
document.write("<br> All odd numbers from " + a + " to " + b + ": ");
for (let i = a; i <= b; i++) {
    if (i % 2 != 0) {
        document.write(i + "&nbsp&nbsp&nbsp");
    }
}