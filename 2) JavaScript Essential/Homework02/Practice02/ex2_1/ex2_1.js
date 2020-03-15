

// Задание 2.1
document.write("<br><br>Ex2<br>");
let size = 10;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((i == j) || (i + j == size - 1)) {
            document.write("0" + "&nbsp&nbsp");
        } else {
            document.write("*" + "&nbsp&nbsp");
        }
    }
    document.write("<br>");
}
