// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which starts when window is loaded
window.onload = function () {

    // Variable for showing if you bought something
    let boughtSomething = false;
    let loginField = getElementById("login");
    let phoneField = getElementById("phone");

    // Field for message in end
    let p = document.createElement("p");
    
    //Add event listener for event when submit button pressed 
    document.forms[0].addEventListener("submit", function(e) { 
        e.preventDefault();
        if (isValid()) {
            createOutputMessage();
        } else {
            alert("Input is not valid!");
        }
    });

    // Function which check if form is valid
    function isValid() {
        return !fieldIsEmpty(loginField) && !fieldIsEmpty(phoneField) && goodsAreChosen()
    }

    // All buttons
    let buttons = document.getElementsByTagName("button");

    // Add listeners to all buttons
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", handle, false);
    }

    // Function which is called when button clicked
    function handle(e) {
        if(!boughtSomething) {
            boughtSomething = true;
        }
        let button = e.target;
        let elem = getElementsByAttributeValue(button.parentElement.id);
        elem.value = elem.value == 0 ? 1 : parseInt(elem.value) + 1;
    }

    // Function which get correct input field by id of card-block
    function getElementsByAttributeValue(value) {
        let elements = document.getElementsByClassName("product");
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].previousSibling.previousSibling.getAttribute("for") == value) {
                return elements[i];
            }
        }
    }

    // Function which check if field is empty
    function fieldIsEmpty(field) {
        return field.value == "";
    }
    
    // Function which check if you chose goods
    function goodsAreChosen() {
        return boughtSomething;
    }

    // Function which create paragraph after submit
    function createOutputMessage() {
        deleteOldInfo();
        let elements = document.getElementsByClassName("product");
        p.innerHTML = "You bought<br>"
        for (let i = 0; i < elements.length; i++) {
            if (elements[i].value != 0) {
                p.innerHTML += elements[i].previousSibling.previousSibling.getAttribute("for") + " : " + elements[i].value + "<br>";
            }
        }
        document.body.appendChild(p);
    }

    // Function which delete old information
    function deleteOldInfo() {
        p.innerHTML = "";
    }

}