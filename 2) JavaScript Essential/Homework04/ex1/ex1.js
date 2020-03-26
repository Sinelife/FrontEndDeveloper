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

// Main function
function calculate(x, y, op) {
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


// Inputing numbers and chosing an operation
let x = +prompt("Input first number: ");
let y = +prompt("Input second number: ");
let op = prompt("Input operation which you would use on numbers: ");

// Calling main function
calculate(x, y, op);