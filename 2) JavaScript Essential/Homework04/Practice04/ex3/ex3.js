// EX 3

function outer(callback, x, y) {
    return callback == pow ? pow(x, y) : div(x, y);
}

function div(x, y) {
    return y != 0 ? x / y : "You can't divide on zero!!";
}

function pow(x, y) {
    let res = 1;
    for (let i = 0; i < y; i++) {
        res *= x;
    }
    return res;
}


document.write("EX 3<br>");
document.write(outer(pow, 2, 3) + "<br>");
document.write(outer(pow, 3, 4) + "<br>");
document.write(outer(div, 100, 10) + "<br>");
document.write(outer(div, 88, 2) + "<br>");
document.write(outer(div, 100, 0) + "<br>");