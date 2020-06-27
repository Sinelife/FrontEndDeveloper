// !!!!!!!! For old version of IE didn't work word 'let' so you shouls change all 'let' to 'var' for correct work in old IE versions
// !!!!!!!!!!!!!!   So that is why I use var in this exercise
// !!!!!!!!!!!!!!!!!!

var getElementById = function (id){
    return document.getElementById(id);
}


// Function which starts when window is loaded
window.onload = function () {

    // Variables for for html elements - firstArg, secondArg, resultField and buttonBlock 
    var firstArg = getElementById("firstArg");
    var secondArg = getElementById("secondArg");
    var resultField = getElementById("result");
    var buttonBlock = getElementById("buttonBlock");

    // Block of code which should add listener for button-block in all browsers
    if (buttonBlock.addEventListener) {
        alert("You use standart DOM level 2");
        buttonBlock.addEventListener("click", handler, false);
    }
    // Block of code which should add listener for button-block in old versions of IE
    if (buttonBlock.attachEvent) {
        alert("You use functionality for old versions of IE");
        buttonBlock.attachEvent("onclick", handler);
    }

    //Function which run when button clicked
    function handler (e) {
        if (!isValid()) {
            alert("Input is not valid!(You didn't input anything or input not a number)");
        } else {
            switch(e.srcElement.value || e.target.value) { //e.srcElement is for old versions of IE
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
    }

    //Check if input is valid 
    var isValid = function() {
        return fieldInputIsCorrect(firstArg) && fieldInputIsCorrect(secondArg);
    }

    //Check if field os not empty and has only numbers in it
    var fieldInputIsCorrect = function(field) {
        var regEx = /^\d+$/;
        return field.value != "" && regEx.test(field.value);
    }

    //Get result of function of values in two input elements
    var getResultOfTwoArgs = function(func) {
        return func(parseInt(firstArg.value), parseInt(secondArg.value));
    }
}
