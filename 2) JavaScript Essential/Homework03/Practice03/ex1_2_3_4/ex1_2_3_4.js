// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// EX1
document.write("EX 1<br>");
let array1 = [];
array1.length = 4;
array1[0] = "Dog";
array1[1] = "Cat";
array1[2] = "Fish";
array1[3] = "Parrot";
array1[4] = "Ant";
document.write("Array: " + array1);




// EX2
document.write("<br><br>EX 2<br>");
let array2 = new Array(10);
for (let i = 0; i < array2.length; i++) {
    array2[i] = getRandomInt(-10, 10);
}
document.write("Array: " + array2);




// EX3
document.write("<br><br>EX 3<br>");
let matrix = new Array(10);
for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(10);
}
let counter = 1;
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = (counter % 2 == 0) ? "*" : "#";
        counter++;
    }
}
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
        document.write(matrix[i][j] + "&nbsp&nbsp&nbsp&nbsp");
    }
    document.write("<br>");
}
document.write("<br>");




// EX4
document.write("<br><br>EX 4<br>");
let array4 = new Array(10);
for (let i = 0; i < array4.length; i++) {
    array4[i] = i;
}
document.write("Array " + array4 + "<br>");
document.write("Array from 3rd to 7th: " + array4.slice(3, 7));