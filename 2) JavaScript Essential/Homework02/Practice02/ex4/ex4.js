
// Ввод параметров и выбор операции
let x = prompt("Введите первое число: ");
let y = prompt("Введите второе число: ");
let op = prompt("Введите операцию, которую будете совершать над числами: ");

x = parseInt(x);
y = parseInt(y);
switch(op) {
    case "+": 
    document.write(x + " + " + y + " = " + (x + y) + "<br>");
        break;
    case "-": 
        let secondPartOfExpression = (y < 0) ? " - (" + y + ")" : " - " + y; // Эта часть кода необходима для того чтоб коректно отображать отнимание отрицательных чисел
        document.write(x + secondPartOfExpression + " = " + (x - y) + "<br>");
        break;
    case "*": 
        document.write(x + " * " + y + " = " + (x * y) + "<br>");
        break;
    case "/": 
        if (y == 0) {
            document.write(x + " / " + y + " = " + " На ноль делить нельзя");
        } else {
            document.write(x + " / " + y + " = " + (x / y) + "<br>");
        }
        break;
}