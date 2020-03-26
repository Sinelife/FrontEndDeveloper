// Функция для прибавления двух чисел
function add(x, y) {
    alert(x + " + " + y + " = " + (x + y));
}

// Функция для отнимания двух чисел
function sub(x, y) {
    let secondPartOfExpression = (y < 0) ? " - (" + y + ")" : " - " + y; // Эта часть кода необходима для того чтоб коректно отображать отнимание отрицательных чисел
    alert(x + secondPartOfExpression + " = " + (x - y));
}

// Функция для умножения двух чисел
function mul(x, y) {
    alert(x + " * " + y + " = " + (x * y));
}

// Функция для деления двух чисел
function div(x, y) {
    if (y == 0) {
        alert(x + " / " + y + " = " + " На ноль делить нельзя");
    } else {
        alert(x + " / " + y + " = " + (x / y));
    }
}

// Главная функция
function calculate(x, y, op) {
    x = parseInt(x);
    y = parseInt(y);
    switch(op) {
        case "+": 
            add(x, y);
            break;
        case "-": 
            sub(x, y);
            break;
        case "*": 
            mul(x, y);
            break;
        case "/": 
            div(x, y);
            break;
    }
}


// Ввод параметров и выбор операции
let x = prompt("Введите первое число: ");
let y = prompt("Введите второе число: ");
let op = prompt("Введите операцию, которую будете совершать над числами: ");

// Вызов главной функции
calculate(x, y, op);