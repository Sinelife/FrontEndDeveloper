// Create array with size N
let n = prompt("Input array size: ");

// Create array with size N and fill it with elements from 0 to N
let array = new Array(parseInt(n));
for (let i = 0; i < array.length; i++) {
    array[i] = i;
}

// Ouput elements of our array
document.write("Array: " + array);

// Output all elements of our array in back order
let backOrderArray = array.reverse();
document.write("<br>Array with back order: " + backOrderArray);