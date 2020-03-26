// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function which output our 2-dimentional array
function outputTwoDimentionalArray(array) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            document.write(matrix[i][j] + "&nbsp&nbsp&nbsp&nbsp");
        }
        document.write("<br>");
    }
    document.write("<br>");
}

// Create 2-dimentional array 5x5
let matrix = new Array(5);
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(5);
}

// Fill our 2-dimentional array with random values
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        matrix[i][j] = getRandomInt(-100, 100); 
    }
}

// Output our 2-dimentional array
outputTwoDimentionalArray(matrix);

// Change array elements on main diagonal with 0 and 1
for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][i] < 0) {
        matrix[i][i] = 0;
    } else {
        matrix[i][i] = 1;
    }
}

// Output our 2-dimentional array after changes
outputTwoDimentionalArray(matrix);