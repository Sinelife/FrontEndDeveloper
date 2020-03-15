// Создаем переменные
let x = 6;
let y = 15;
let z = 4;

// Оригинальные значения
document.write("Original" + "<br>");
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br><br>");

//1) x += y - x++ * z
x += y - x++ * z;
document.write("1) x += y - x++ * z" + "<br>");
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br><br>");

//2) z = --x - y * 5
z = --x - y * 5;
document.write("2) z = --x - y * 5" + "<br>");
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br><br>");

//3) y /= x + 5 % z
y /= x + 5 % z;
document.write("3) y /= x + 5 % z" + "<br>");
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br><br>");

//4) z = x++ + y * 5;
z = x++ + y * 5;
document.write("4) z = x++ + y * 5" + "<br>");
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br><br>");

//5) x = y - x++ * z
x = y - x++ * z;
document.write("5) x = y - x++ * z" + "<br>");
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br><br>");