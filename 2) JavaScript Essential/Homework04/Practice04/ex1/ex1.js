// EX 1

function getSum(x, y, z) {
    if (arguments.length != 3) {
        return "Not correct number of arguments!!!!";
    }
    return x + y + z;
}
document.write("EX 1<br>");
document.write(getSum(100, 200, 300) + "<br>");
document.write(getSum(-800, 20, 377) + "<br>");
document.write(getSum(100, 200, 300, 400) + "<br>");
document.write(getSum(100, 200) + "<br>");

