//Draw Recatngle
document.write("Recatngle<br>");
let width = 20;
let height = 12;
for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
        document.write('* ');
    }
    document.write('<br>');
}
document.write("<br><br>");


//Draw Right Triangle
document.write("Right Triangle<br>");
height = 20;
for (let i = 0; i < height; i++) {
    for (let j = 0; j < (i + 1); j++) {
        document.write('* ');
    }
    document.write('<br>');
}
document.write("<br><br>");


//Draw Equilateral Triangle
document.write("Equilateral Triangle<br>");
width = 38, height = 17;
let start = width / 2 + 1;
let end = start;
let i = 0;
while (i < height) {
    for (let j = 0; j < width; j++) {
        if (j >= start && j <= end) {
            document.write('*');
        } else {
            document.write('&nbsp&nbsp');
        }
    }
    i++;
    start--;
    end++;
    document.write('<br>');
}
document.write("<br><br>");


//Draw Rhombus
document.write("Rhombus<br>");
//Draw top part of Rhombus(top Equilateral Triangle)
start = width / 2 + 1;
end = start;
i = 0;
while (i < height) {
    for (let j = 0; j < width; j++) {
        if (j >= start && j <= end) {
            document.write('*');
        } else {
            document.write('&nbsp&nbsp');
        }
    }
    i++;
    start--;
    end++;
    document.write('<br>');
}

//Draw bottom part of Rhombus(bottom Equilateral Triangle)
i = 0;
while (i <= height) {
    for (let j = 0; j < width; j++) {
        if (j >= start && j <= end) {
            document.write('*');
        } else {
            document.write('&nbsp&nbsp');
        }
    }
    i++;
    start++;
    end--;
    document.write('<br>');
}
