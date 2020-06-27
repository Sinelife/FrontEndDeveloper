// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Add event listener which starts when page loaded
window.addEventListener("load", handle, false);

// Function-handler for main event listener
function handle() {

    // Add event listener for saveButton
    getElementById("saveButton").addEventListener("click", save, false);

    // Function which saves login and password in localStorage
    function save() {
        window.localStorage.login = getElementById("login").value;
        window.localStorage.pswd = getElementById("password").value;
    }

    // Add event listener for checkButton
    getElementById("checkButton").addEventListener("click", check, false);

    // Function which check if login is in localStorage
    function check() {
        if (window.localStorage.login == getElementById("check").value) {
            alert("You successfully log in!");
        } else {
            alert("Error!");
        }
    }
}