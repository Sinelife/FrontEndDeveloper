// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Add listener for event when page load
window.addEventListener("load", handle , false);

// Function which is called when submit event start
function handle() {
    let img = getElementById("avatar-img");         // Avatar image(which would be changed)
    let loginButton = getElementById("loginButton"); // Login button
    let mainContent = this.document.getElementsByClassName("main-content")[0]; // mainContent block
    let radios = document.forms["loginForm"].elements["gender"]; // All radio buttons for gender

    // Arrays for girl? bot and other image-src
    let girlImages = ["img/girl1.gif", "img/girl2.gif", "img/girl3.gif", "img/girl4.gif", "img/girl5.gif", "img/girl6.gif"];
    let boyImages = ["img/boy1.gif", "img/boy2.gif", "img/boy3.gif",];
    let otherImages = ["img/other1.gif", "img/other2.gif", "img/other3.gif"];
 
    // Code which change avatar image depending on gender
    for(let i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            if (getElementById("male").checked) {
                img.src = getRandomImage(boyImages);
            } else if (getElementById("female").checked) {
                img.src = getRandomImage(girlImages);
            } else {
                img.src = getRandomImage(otherImages);
            }
        }
    }

    // Get Random image src from array-argument
    function getRandomImage(array) {
        return array[getRandomInt(0, array.length - 1)];
    }

    // Function which get random value from chosen diapason
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Add event listener for event when submit button pressed 
    document.forms[0].addEventListener("submit", function(e) { 
        deleteOldErrorMessage();
        e.preventDefault();
        if (!inputIsWrong()) {
            alert("You successfully log in!");
        }
    });

    // Password, confirmPassword and email fields 
    let password = getElementById("password");
    let confirmPassword = getElementById("confirmPassword");
    let email = getElementById("email");

    // Function which check if input is wrong
    let inputIsWrong = function() {
        let isWrong = false;
        if (password.value != confirmPassword.value) {
            isWrong = true;
            createErrorMessage("Password and confirmed password are not similiar.");
        }
        if (genderIsNotChosen()) {
            isWrong = true;
            createErrorMessage("You didn't chose you gender.");
        }
        if (emailIsWrong()) {
            isWrong = true;
            createErrorMessage("Email has wrong syntax.");
        }
        if (hasEmptyField()) {
            isWrong = true;
            createErrorMessage("You must fill all empty fields.");
        }
        return isWrong;
    }

    // Function which check if email is wrong
    let hasEmptyField = function() {
        let fields = document.getElementsByTagName("input");
        for (let i = 0; i < fields.length; i++) {
            if(fields[i].value == "") {
                return true;
            }
        }
        return false;
    }

    // Function which check if email is wrong
    let emailIsWrong = function() {
        let regEx = /\S+@\S+\.\S+/;
        return !regEx.test(email.value);
    }

    // Function which check if gender is chosen
    let genderIsNotChosen = function() {
        return getElementById("male").checked == false && getElementById("female").checked == false && getElementById("other").checked == false;
    }

    // Function which delete previous error message
    let deleteOldErrorMessage = function() {
        let messages = document.getElementsByClassName("errorMessage");
        while(messages.length > 0) {
            mainContent.removeChild(messages[0]);
        }
    }

    // Function which create success message
    let createErrorMessage = function(message) {
        let errorMessage = document.createElement("p");
        errorMessage.className = "errorMessage";
        errorMessage.innerHTML = message;
        errorMessage.style.color = "red";
        errorMessage.style.textAlign = "center";
        mainContent.insertBefore(errorMessage, loginButton.previousSibling);
    }
}
