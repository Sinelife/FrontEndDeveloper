// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}


// Function which starts when window is loaded
window.onload = function () {

    // Variables for for html elements - firstArg, secondArg and resultField
    let firstArgField = getElementById("firstArg");
    let secondArgField = getElementById("secondArg");
    let resultField = getElementById("result");
    
    // OnClick functions for operation buttons

    getElementById("plusButton").onclick = function() {
        resultField.value = getResultOfTwoArgs(function(a, b) {return a + b;});
    }

    getElementById("minusButton").onclick = function() {
        resultField.value = getResultOfTwoArgs(function(a, b) {return a - b;});
    }

    getElementById("multiplyButton").onclick = function() {
        resultField.value = getResultOfTwoArgs(function(a, b) {return a * b;});
    }

    getElementById("devideButton").onclick = function() {
        resultField.value = getResultOfTwoArgs(function(a, b) {return a / b;});
    }

    //Get result of function of values in two input elements
    let getResultOfTwoArgs = function(func) {
        return func(parseInt(firstArgField.value), parseInt(secondArgField.value));
    }
}