// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which starts when window is loaded
window.onload = function () {
    document.getElementsByTagName("form")[0].addEventListener(
        "submit", 
        function(e) {
            if (formIsValid()) {
                alert("Sending!");
            } else {
                alert("Form is not valid!!!!!!!!!");
                e.preventDefault();
            }
        }
    );

    // Function which check i form is valid
    let formIsValid = function() {
        return fieldIsNotEmpty(getElementById("name")) && fieldIsNotEmpty(getElementById("surname")) && phoneIsCorrect();
    }
    
    // Function which check if field is empty
    let fieldIsNotEmpty = function(field) {
        return field.value != "";
    }

    // Function which check if phone has correct syntax
    let phoneIsCorrect = function() {
        let regEx = /^\d{12}$/; 
        return regEx.test(getElementById("phone").value);
    }
}

