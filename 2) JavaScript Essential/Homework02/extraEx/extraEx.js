//Input the width and height of rectangle
let width = prompt("Input the width of rectangle: ", "10")
let height = prompt("Input the height of rectangle: ", "10");


//Draw Recatngle
document.write("Rectangle<br>");
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        document.write('* ');
    }
    document.write('<br>');
}