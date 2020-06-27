// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which starts when window is loaded
window.onload = function () {

    // Variables for for html elements - firstArg, secondArg, resultField and buttonBlock 
    let firstArg = getElementById("firstArg");
    let secondArg = getElementById("secondArg");
    let resultField = getElementById("result");
    let buttonBlock = getElementById("buttonBlock");

    //Add listener to buttonBlock(for all buttons also) 
    buttonBlock.addEventListener(
        "click", 
        function(e) {
            if (!isValid()) {
                alert("Input is not valid!(You didn't input anything or input not a number)");
            } else {
                switch(e.target.value) {
                    case '+':
                        resultField.value = getResultOfTwoArgs(function(a, b) { return a + b; }); 
                        break;
                    case '-':
                        resultField.value = getResultOfTwoArgs(function(a, b) { return a - b; }); 
                        break;
                    case '/':
                        resultField.value = getResultOfTwoArgs(function(a, b) { return b == 0 ? "You can't devide on zero" : a / b; }); 
                        break;
                    case '*':
                        resultField.value = getResultOfTwoArgs(function(a, b) { return a * b; }); 
                        break;
                }
            }
        },
        false
    );

    //Check if input is valid 
    let isValid = function() {
        return fieldInputIsCorrect(firstArg) && fieldInputIsCorrect(secondArg);
    }

    //Check if field os not empty and has only numbers in it
    let fieldInputIsCorrect = function(field) {
        let regEx = /^\d+$/;
        return field.value != "" && regEx.test(field.value);
    }

    //Get result of function of values in two input elements
    let getResultOfTwoArgs = function(func) {
        return func(parseInt(firstArg.value), parseInt(secondArg.value));
    }
}