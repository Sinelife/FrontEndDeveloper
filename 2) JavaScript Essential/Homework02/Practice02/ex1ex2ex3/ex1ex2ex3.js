// Задание 1
document.write("Ex1<br>");
for (let i = 0, n = 1; i < 10; i++) {
    document.write(n + "&nbsp&nbsp");
    n *= 2;
}

// Задание 2
document.write("<br><br>Ex2<br>");
let size = 10;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        document.write("*" + "&nbsp&nbsp");
    }
    document.write("<br>");
}

// Задание 3
document.write("<br><br>Ex3<br>");
let res = 2, a = 2;
for (let i = 0; i < 10; i++) {
    res *= a;
}
document.write("2 в степени 10 = " + res);