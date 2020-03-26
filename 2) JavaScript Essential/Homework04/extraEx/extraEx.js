// Function which finds average value of three numbers
function calculate(a, b, c) {
    document.write("Average: " + (a + b + c) / 3);
}


// Examples of using function calculate()
let x = 100, y = 200, z = 300;
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br>");
calculate(x, y, z);
document.write("<br><br>");

x = -66, y = 88, z = 65;
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br>");
calculate(x, y, z);
document.write("<br><br>");

x = 123, y = 12, z = 77;
document.write("x = " + x + ", y = " + y + ", z = " + z + "<br>");
calculate(x, y, z);
document.write("<br><br>");