// Функция для прибавления двух чисел
function add(x, y) {
    return x + y;
}

// Функция для отнимания двух чисел
function sub(x, y) {
    return x - y;
}

// Функция для умножения двух чисел
function mul(x, y) {
   return x * y;
}

// Функция для деления двух чисел
function div(x, y) {
    if (y == 0) {
        return "Error!";
    } else {
        return x / y;
    }
}

// Главная функция
function getArrayResult(x, y, op) {
    if (Array.isArray(x)) {
        let resultArray = [];
        for (let i = 0; i < x.length; i++) {
            resultArray[i] = getSimpleResult(x[i], y[i], op);
        }
        return resultArray;
    } else {
        return getSimpleResult(x, y, op);
    }
}

// Главная функция
function getSimpleResult(x, y, op) {
    return op == "+" ? add(x, y) : op == "-" ? sub(x, y) : op == "*" ? mul(x, y) : div(x, y);
}


// Вызов главной функции
let x = [1, 2, 3, 4, 5, 6, 7];
let y = [100, 200, 300, 400, 500, 600, 700];
let op = "+";
document.write("Array x: " + x + "<br>");
document.write("Array y: " + y + "<br>");
document.write("Operation: " + op + "<br>");
document.write("Result Array: " + getArrayResult(x, y, op));