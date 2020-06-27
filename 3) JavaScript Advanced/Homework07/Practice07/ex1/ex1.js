// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which starts when window is loaded
window.onload = function () {

    let loginField = getElementById("login");
    let nameField = getElementById("name");
    let passwordField = getElementById("password");
    
    //Add event listener for event when submit button pressed 
    document.forms[0].addEventListener("submit", function(e) { 
        e.preventDefault();
        if (nameIsValid() && loginIsValid() && passwordIsValid()) {
            createOutputParagraph();
        } else {
            alert("Input is not valid!");
        }
    });

    // Function which check if name is valid
    function nameIsValid() {
        return nameField.value != "";
    }

    // Function which check if login is valid
    function loginIsValid() {
        let regEx = /^[a-zA-Z]+$/;
        return loginField.value != "" && regEx.test(loginField.value);
    }

    // Function which check if password is valid
    function passwordIsValid() {
        let regEx = /^[a-zA-Z0-9]+$/;
        return passwordField.value != "" && regEx.test(passwordField.value);
    }

    // Function which create paragraph after submit
    function createOutputParagraph() {
        let p = document.createElement("p");
        p.id = "output";
        p.innerHTML = "Name: " + nameField.value + "<br>Login: " + loginField.value + "<br>Password: " + passwordField.value;
        document.body.appendChild(p);
    }

}