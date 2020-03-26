// Ex 14
document.write("<h1>Ex 14</h1>");

// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function for Creating matrix
let createMatrix = function(rowNum, colNum) {
    let matrix = new Array(rowNum);
    for (let i = 0; i < rowNum; i++) {
        matrix[i] = new Array(colNum);
    }
    for (let i = 0; i < rowNum; i++) {
        for(let j = 0; j < colNum; j++) {
            matrix[i][j] = getRandomInt(0, 100);
        }
    }
    return matrix;
}

// Function for output matrix
let outputMatrix = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            document.write(matrix[i][j] + "&nbsp&nbsp");
        }
        document.write("<br>");
    }
    document.write("<hr>");
} 

// Example
let myMatrix = createMatrix(10, 5);
outputMatrix(myMatrix);

myMatrix = createMatrix(4,4);
outputMatrix(myMatrix);

myMatrix = createMatrix(10, 10);
outputMatrix(myMatrix);

myMatrix = createMatrix(1, 1);
outputMatrix(myMatrix);


