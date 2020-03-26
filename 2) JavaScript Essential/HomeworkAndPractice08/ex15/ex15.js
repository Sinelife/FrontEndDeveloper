// Ex 15
document.write("<h1>Ex 15</h1>");

// Function for deleting triplets from array(triplet - three and more same elements near each other)
let getArrayWithoutTriples = function(array) {
    for (let i = 0; i < array.length - 2; i++) {
        if (array[i] == array[i + 1] && array[i + 1] == array[i + 2]) {
            let start = i;
            let num = 2;
            for (let j = i + 2; array[i] == array[j]; j++, num++) {}
            array.splice(start, num);
        }
    }
    return array;
}


// Example
let array = [1, 2, 3, 3, 3, 4, 5, 5, 5, 5, 5, 5, 6, 7, 7, 8, 8, 9, 9, 9, 10, 11, 12, 12, 12, 12, 12];
document.write("Array: " + array + "<br>");
document.write("Result array: " + getArrayWithoutTriples(array) + "<br>");