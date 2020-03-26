// Ex 4
document.write("<h1>Ex 4</h1>");

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

// Function for getting square root
function sqrt(x) {
    document.write("Math.sqrt(" + x + ") = " + (Math.sqrt(x)) + "<br>");
}

// Function for getting pow of x
function pow(x, y) {
    document.write(x + " % " + y + " = " + (Math.pow(x, y)) + "<br>");
}

// Main function
function calculate() {
    // Inputing numbers and chosing an operation
    let op = prompt("Input operation which you would use on numbers: ");
    let x = +prompt("Input first number: ");
    if (op == "sqrt") {
        sqrt(x);
        return;
    }
    let y = +prompt("Input second number: ");
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
        case "^":
            pow(x, y);
            break;
    }
}


// Calling main function
calculate();