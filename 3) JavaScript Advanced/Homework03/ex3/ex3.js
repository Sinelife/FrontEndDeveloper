// Function for addition
function add(x, y) {
    document.write(x + " + " + y + " = " + (x + y) + "<br>");
}

// Function for subtracting
function sub(x, y) {
    let secondPartOfExpression = (y < 0) ? " - (" + y + ")" : " - " + y; // Эта часть кода необходима для того чтоб коректно отображать отнимание отрицательных чисел
    document.write(x + secondPartOfExpression + " = " + (x - y) + "<br>");
}

// Function for multiplication
function mul(x, y) {
    document.write(x + " * " + y + " = " + (x * y) + "<br>");
}

// Function for division 
function div(x, y) {
    if (y == 0) {
        document.write(" You can't devide on zero!!");
    } else {
        document.write(x + " / " + y + " = " + (x / y) + "<br>");
    }
}

// Function for getting part of division
function partOfDiv(x, y) {
    document.write(x + " % " + y + " = " + (x % y) + "<br>");
}

// Main function
function calculate() {
    let str = prompt("Input string: ");
    let args = str.split(new RegExp('[+%*-/]', "g"));
    let op = str.replace(new RegExp("[0-9]", "g"), "")
    let x = parseInt(args[0]);
    let y = parseInt(args[1]);
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
        case "%": 
            partOfDiv(x, y);
            break;
    }
}

// Calling main function
calculate();