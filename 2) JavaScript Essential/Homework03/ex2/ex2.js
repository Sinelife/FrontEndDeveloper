// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
// Input the size of array
let n = prompt("Input array size: ");

// Create array with size N
let array = new Array(parseInt(n));

// Fill array with random values
for (let i = 0; i < array.length; i++) {
    array[i] = getRandomInt(-100, 100);
}

// Output array
document.write("Array: " + array);

// Initialize min value, max value, sum of all elements and average value
let min = Number.POSITIVE_INFINITY, 
max = Number.NEGATIVE_INFINITY, 
sum = 0,
avg = 0;

// Calculate max value, min value, sum of all elements and average value
for (let i = 0; i < array.length; i++) {
    if (max < array[i]) {
        max = array[i];
    }
    if (min > array[i]) {
        min = array[i];
    }
    sum += array[i];
}
avg = sum / array.length;

//Output max value, min value, sum of all elements, average value of our array
document.write("<br>Max element: " + max + "<br>");
document.write("Min element: " + min + "<br>");
document.write("Sum: " + sum + "<br>");
document.write("Average: " + avg + "<br>");

//Output all elements with odd values
document.write("Elements with odd values: ");
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
        document.write(array[i] + "&nbsp&nbsp")
    }
}
