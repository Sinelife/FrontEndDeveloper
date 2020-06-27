// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}





// Function which starts when window is loaded
window.onload = function () {
    let loginField = getElementById("login");  
    let passwordField = getElementById("password");
    let fields = document.getElementsByClassName("inputField");
    let errorMessageActive = false;

    // Function which is called when button pressed
    getElementById("sendButton").onclick = function() {
        if (loginField.value == "admin" && passwordField.value == "12345") {
            deleteAllElements();
            createSuccessMessage();
        }
        checkIfFieldAreNotEmpty();
    }

    // Function which check if all fields is not empty
    let checkIfFieldAreNotEmpty = function() {
        let emptyFieldNames = [];
        for (let i = 0; i < fields.length; i++) {
            if (fields[i].value == "") {
                fields[i].style.backgroundColor = "#FF7878";
                emptyFieldNames.push(fields[i].id);
            } else {
                fields[i].style.backgroundColor = "white";
            }
        }
        deleteOldErrorMessage();
        if (emptyFieldNames.length > 0) {
            createErrorMessage(emptyFieldNames);
        }
    }

    // Function which delete previous error message
    let deleteOldErrorMessage = function() {
        if (errorMessageActive) {
            document.body.removeChild(getElementById("errorMessage"));
            errorMessageActive = false;
        }
    }
    
    // Function which create success message
    let createErrorMessage = function(fieldNames) {
        let errorMessage = document.createElement("p");
        errorMessage.id = "errorMessage";
        errorMessage.innerHTML = "You didn't filled " + fieldNames + " fields!";
        document.body.appendChild(errorMessage);
        errorMessageActive = true;
    }


    // Function which delete all elements in body
    let deleteAllElements = function() {
        let body = document.body;
        while(body.firstChild) {
            body.removeChild(body.firstChild);
        }
    }

    // Function which create success message
    let createSuccessMessage = function() {
        let successMessage = document.createElement("h1");
        successMessage.id = "successMessage";
        successMessage.innerHTML = "You successfully authorised!!";
        document.body.appendChild(successMessage);
    }
}