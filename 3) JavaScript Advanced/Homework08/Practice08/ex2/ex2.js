// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Add event listener which starts when page loaded
window.addEventListener("load", handle, false);

// Function-handler for main event listener
function handle() {
    // Data which contains messages on different languages
    let data = {
        uk: "Привіт світ!",
        ru: "Привет мир!",
        en: "Hello world!"
    }

    let message = getElementById("message"); // message element
    
    // Code which output message on browser language if it is first attempt or get language from localStorage
    if (window.localStorage.language) {
        message.innerHTML = window.localStorage.language;
    } else {
        message.innerHTML = data[window.navigator.language];
    }

    // Add event listener to form for radioButtons
    document.forms[0].addEventListener("click", radioHandler, false);

    // Function handler which change message language and rewrite new chosen language in localStorage
    function radioHandler() {
        let radioButtons = document.getElementsByName("language");
        for(let i = 0; i < radioButtons.length; i++){
            if(radioButtons[i].checked){
                window.localStorage.language = data[radioButtons[i].value];
                message.innerHTML = window.localStorage.language;
            }
        }
    }
}